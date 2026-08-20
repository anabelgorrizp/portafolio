// Project CTA visual treatment — matches the contrast effect of the main Contactar button
(() => {
  const style = document.createElement('style');
  style.textContent = `
    .proj-list-item .proj-view-btn{
      position:relative;
      display:inline-flex;
      align-items:center;
      min-height:48px;
      margin-top:0;
      padding:.75rem 5.1rem .75rem 1.65rem;
      border:1px solid var(--primary);
      border-radius:999px;
      background:var(--primary);
      color:var(--secondary);
      font-size:.75rem;
      font-weight:500;
      text-transform:uppercase;
      letter-spacing:.1em;
      line-height:1;
      overflow:visible;
      transition:transform .25s ease,background .25s ease,color .25s ease;
    }
    .proj-list-item .proj-view-btn::before{
      content:'→';
      position:absolute;
      right:3.45rem;
      top:50%;
      transform:translateY(-51%);
      color:var(--secondary);
      font-size:.95rem;
      font-weight:400;
      letter-spacing:0;
      line-height:1;
    }
    .proj-list-item .proj-view-btn::after{
      content:'';
      position:absolute;
      z-index:2;
      width:58px;
      height:58px;
      right:-10px;
      top:50%;
      border:1px solid var(--primary);
      border-radius:50%;
      background:
        radial-gradient(circle at 50% 43%, var(--primary) 0 3px, transparent 3.8px),
        linear-gradient(to bottom,var(--secondary) 0 50%,var(--primary) 50% 100%);
      transform:translateY(-50%);
      transition:transform .35s cubic-bezier(.2,.8,.2,1);
    }
    .proj-list-item .proj-view-btn:hover{
      background:var(--primary);
      color:var(--secondary);
      border-color:var(--primary);
      transform:translateX(2px);
    }
    .proj-list-item .proj-view-btn:hover::after{
      transform:translateY(-50%) rotate(180deg);
    }
    @media(hover:none){
      .proj-list-item .proj-view-btn::after{width:50px;height:50px;right:-7px}
    }
  `;
  document.head.appendChild(style);
})();

// Nav scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// Active nav link on scroll
(function () {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const links    = document.querySelectorAll('nav ul a[href^="#"]');

  function update() {
    const threshold = window.scrollY + 90;
    let current = '';
    sections.forEach(s => { if (s.offsetTop <= threshold) current = s.id; });
    links.forEach(a => {
      const target = a.getAttribute('href').slice(1);
      a.classList.toggle('nav-active', target === current);
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// Stagger delays for grouped elements
[
  ['#about .about-text > p',      60],
  ['#about .about-stats .stat',   80],
  ['.proceso-grid .proceso-item', 80],
  ['.proj-list .proj-list-item',  100],
  ['.timeline .timeline-item',    80],
  ['.skills-grid .skill-group',   80],
  ['.lang-grid .lang-item',       80],
  ['.contact-links > a',          80],
].forEach(([sel, step]) => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.style.transitionDelay = `${i * step}ms`;
  });
});

// Scroll-triggered fade-in for all content elements (outside hero)
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('visible');
    io.unobserve(e.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

[
  '.section-header',
  '#about .about-text > p',
  '#about .about-stats .stat',
  '.proj-list-item',
  '.proceso-item',
  '.timeline-item',
  '.skill-group',
  '.lang-item',
  '.contact-headline',
  '.contact-sub',
  '.contact-links > a',
  '.contact-location',
  'footer',
].forEach(sel => {
  document.querySelectorAll(sel).forEach(el => {
    el.classList.add('fade-up');
    io.observe(el);
  });
});

// Custom cursor
(function () {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  (function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  })();

  function clearCursorStates() {
    ring.classList.remove('hover-project', 'hover-link', 'hover-cta');
    ring.style.opacity = '1';
    dot.style.opacity = '1';
  }

  document.addEventListener('mouseover', e => {
    clearCursorStates();

    // Project CTA has its own split-contrast circular treatment, so hide the extra custom ring.
    if (e.target.closest('.proj-view-btn')) {
      ring.style.opacity = '0';
      dot.style.opacity = '0';
      return;
    }

    if (e.target.closest('.hero-cta, .nav-cta, .contact-link.primary')) {
      ring.classList.add('hover-cta');
      return;
    }

    if (e.target.closest('.proj-list-img, .proj-list-item')) {
      ring.classList.add('hover-project');
      dot.style.opacity = '0';
      return;
    }

    if (e.target.closest('a, button')) {
      ring.classList.add('hover-link');
    }
  });
})();
