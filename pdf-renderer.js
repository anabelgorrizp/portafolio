// Renders PDF pages into <canvas data-page="N" [data-pdf-file="name"]> elements.
// data-pdf-file: filename without .pdf extension (default: "portfolio").
(async function () {
  const pdfjsLib = window['pdfjs-dist/build/pdf'];
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  const pdfCache = {};

  async function getPdf(name) {
    if (pdfCache[name] !== undefined) return pdfCache[name];
    const url = (name === 'portfolio') ? 'portfolio.pdf' : `${name}.pdf`;
    try {
      pdfCache[name] = await pdfjsLib.getDocument(url).promise;
    } catch (e) {
      console.warn(`PDF load error (${name}):`, e.message);
      pdfCache[name] = null;
    }
    return pdfCache[name];
  }

  const canvases = document.querySelectorAll('canvas[data-page]');
  for (const canvas of canvases) {
    const pageNum = parseInt(canvas.dataset.page, 10);
    const scale   = parseFloat(canvas.dataset.scale || '1.2');
    const pdfName = canvas.dataset.pdfFile || 'portfolio';

    const pdf = await getPdf(pdfName);
    if (!pdf) continue;

    try {
      const page     = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale });
      canvas.width   = viewport.width;
      canvas.height  = viewport.height;
      await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
      canvas.classList.add('loaded');
    } catch (e) {
      console.warn(`Page ${pageNum} error (${pdfName}):`, e.message);
    }
  }

  // Profile photo (smaller, portrait crop from portfolio.pdf page 2)
  const profileCanvas = document.getElementById('cv-photo-canvas');
  if (profileCanvas) {
    try {
      const pdf  = await getPdf('portfolio');
      const page = await pdf.getPage(2);
      const viewport = page.getViewport({ scale: 1.8 });
      const tmp = document.createElement('canvas');
      tmp.width  = viewport.width;
      tmp.height = viewport.height;
      await page.render({ canvasContext: tmp.getContext('2d'), viewport }).promise;
      const sx = tmp.width * 0.62, sy = tmp.height * 0.05;
      const sw = tmp.width * 0.35, sh = tmp.height * 0.70;
      profileCanvas.width  = sw;
      profileCanvas.height = sh;
      profileCanvas.getContext('2d').drawImage(tmp, sx, sy, sw, sh, 0, 0, sw, sh);
      profileCanvas.classList.add('loaded');
    } catch (e) { console.warn('Profile photo error:', e.message); }
  }
})();
