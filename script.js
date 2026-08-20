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

  document.addEventListener('mouseover', e => {
    ring.classList.remove('hover-project', 'hover-link', 'hover-cta');
    dot.style.opacity = '1';

    // “Ver proyecto” uses the same high-contrast cursor treatment as the main CTA.
    if (e.target.closest('.proj-view-btn')) {
      ring.classList.add('hover-cta');
    } else if (e.target.closest('.proj-list-img, .proj-list-item')) {
      ring.classList.add('hover-project');
      dot.style.opacity = '0';
    } else if (e.target.closest('.hero-cta, .nav-cta, .contact-link.primary')) {
      ring.classList.add('hover-cta');
    } else if (e.target.closest('a, button')) {
      ring.classList.add('hover-link');
    }
  });
})();
