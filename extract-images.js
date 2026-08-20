const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Pages to extract: [pageNum, filename]
// 2=CV, 5=Eixample hero, 7=Eixample lookfeel, 8=Eixample fotos1, 9=Eixample fotos2
// 12=Diagonal hero, 15=Diagonal lookfeel, 16=Diagonal fotos1, 17=Diagonal fotos2
// 21=EnBlanc hero, 25=EnBlanc renders, 29=EnBlanc taller
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

async function run() {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjsLib.getDocument({ data }).promise;
  console.log(`PDF loaded: ${pdf.numPages} pages`);

  for (const [pageNum, name] of PAGES) {
    try {
      const page = await pdf.getPage(pageNum);
      const scale = 2.0;
      const viewport = page.getViewport({ scale });
      const canvas = createCanvas(viewport.width, viewport.height);
      const ctx = canvas.getContext('2d');

      await page.render({
        canvasContext: ctx,
        viewport,
        canvasFactory: {
          create(w, h) { const c = createCanvas(w, h); return { canvas: c, context: c.getContext('2d') }; },
          reset(obj, w, h) { obj.canvas.width = w; obj.canvas.height = h; },
          destroy() {}
        }
      }).promise;

      const outPath = path.join(outDir, `${name}.jpg`);
      const buf = canvas.toBuffer('image/jpeg', { quality: 0.88 });
      fs.writeFileSync(outPath, buf);
      console.log(`  ✓ Page ${pageNum} → ${name}.jpg`);
    } catch (e) {
      console.error(`  ✗ Page ${pageNum} error:`, e.message);
    }
  }
  console.log('Done.');
}

run().catch(console.error);
