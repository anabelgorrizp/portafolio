import canvasPkg from 'canvas';
const { createCanvas, Path2D: NodePath2D } = canvasPkg;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Must set BEFORE pdfjs-dist loads so its internal createElement calls return node-canvas
global.document = {
  createElement(tag) {
    if (tag === 'canvas') {
      const c = createCanvas(1, 1);
      return c;
    }
    return { style: {} };
  }
};
global.window = global;
try {
  Object.defineProperty(globalThis, 'navigator', {
    value: { userAgent: 'node', language: 'en' },
    writable: true, configurable: true, enumerable: true
  });
} catch(e) {}
global.Path2D = NodePath2D;
global.requestAnimationFrame = (cb) => setImmediate(() => cb(Date.now()));
global.cancelAnimationFrame = clearImmediate;

// Dynamic import so the global mock above is in place first
const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  './node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs',
  import.meta.url
).href;

class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(width, height);
    return { canvas, context: canvas.getContext('2d') };
  }
  reset(obj, width, height) {
    obj.canvas.width = width;
    obj.canvas.height = height;
  }
  destroy(obj) {
    obj.canvas.width = 0;
    obj.canvas.height = 0;
  }
}

const PAGES = [
  [2,  'cv-photo'],
  [5,  'eixample-hero'],
  [7,  'eixample-lookfeel'],
  [8,  'eixample-fotos1'],
  [9,  'eixample-fotos2'],
  [10, 'eixample-fotos3'],
  [11, 'eixample-fotos4'],
  [12, 'diagonal-hero'],
  [15, 'diagonal-lookfeel'],
  [16, 'diagonal-fotos1'],
  [17, 'diagonal-fotos2'],
  [18, 'diagonal-fotos3'],
  [19, 'diagonal-fotos4'],
  [21, 'enblanc-hero'],
  [25, 'enblanc-renders1'],
  [27, 'enblanc-renders2'],
  [29, 'enblanc-taller'],
];

const outDir = path.join(__dirname, 'images');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const pdfPath = 'C:/ANABEL/Portfolio-CV _ Anabel Gorriz.pdf';
const factory = new NodeCanvasFactory();

const data = new Uint8Array(fs.readFileSync(pdfPath));
const pdf = await pdfjsLib.getDocument({
  data,
  disableFontFace: true,
  verbosity: 0,
  useWorkerFetch: false,
  isEvalSupported: false,
  useSystemFonts: true,
  cMapUrl: new URL('./node_modules/pdfjs-dist/cmaps/', import.meta.url).href,
  cMapPacked: true,
}).promise;

console.log(`PDF loaded: ${pdf.numPages} pages`);

for (const [pageNum, name] of PAGES) {
  try {
    const page = await pdf.getPage(pageNum);
    const scale = 1.5;
    const viewport = page.getViewport({ scale });
    const obj = factory.create(Math.floor(viewport.width), Math.floor(viewport.height));

    await page.render({
      canvasContext: obj.context,
      viewport,
      canvasFactory: factory,
    }).promise;

    const outPath = path.join(outDir, `${name}.jpg`);
    const buf = obj.canvas.toBuffer('image/jpeg', { quality: 0.85 });
    fs.writeFileSync(outPath, buf);
    factory.destroy(obj);
    console.log(`  ✓ Page ${pageNum} → ${name}.jpg (${Math.round(buf.length / 1024)}kb)`);
  } catch (e) {
    console.error(`  ✗ Page ${pageNum} (${name}):`, e.message);
  }
}
console.log('Done.');
