const TRANSLATIONS = {
  es: {
    'nav.about':      'Sobre mí',
    'nav.projects':   'Proyectos',
    'nav.proceso':    'Proceso',
    'nav.experience': 'Experiencia',
    'nav.education':  'Formación',
    'nav.contact':    'Contacto',

    'hero.eyebrow': 'Diseño de Interiores &amp; Arquitectura · Barcelona',
    'hero.sub':     'Interior Designer<br>FF&amp;E · Arquitectura · Project Management',
    'hero.badge1':  'Abierta a trabajo',
    'hero.badge2':  'Presencial · Híbrido · Remoto',
    'hero.cta':     'Contactar →',
    'hero.scroll':  'Scroll',

    'about.label': 'Sobre mí',
    'about.h2':    'Espacios con alma.',
    'about.p1':    'Soy Anabel Górriz, interiorista con 6 años de experiencia en el desarrollo integral de proyectos. Me motiva asumir nuevos retos en un estudio con una mirada creativa y un alto estándar de ejecución, donde pueda aportar valor desde la conceptualización hasta la entrega final.',
    'about.p2':    'Mi perfil combina una sólida base proyectista — definición arquitectónica, documentación y detalle — con una visión conceptual orientada a construir la narrativa del espacio. Mi especialización está en FF&E, acabados y piezas a medida; y gestiono la ejecución con visión 360: presupuestos, coordinación de proveedores y seguimiento en obra.',
    'about.stat1': 'Años de experiencia',
    'about.stat2': 'Empresas',
    'about.stat3': 'Proyectos seleccionados',
    'about.stat4': 'Idiomas',

    'card1.type': 'Reforma Integral',
    'card1.desc': 'Restauración de un piso modernista en el Eixample barcelonés. Diálogo entre patrimonio construido y contemporaneidad.',
    'card2.type': 'Reforma Integral',
    'card2.desc': 'Conversión de vivienda a oficinas en un edificio histórico. Patrimonio arquitectónico integrado con las demandas del trabajo moderno.',
    'card3.type': 'Coworking &amp; Coliving',
    'card3.desc': 'Propuesta de coworking y coliving para una comunidad artística internacional en una masía catalana del siglo XIX.',

    'proceso.label':       'Proceso',
    'proceso.h2':          'Cuatro ejes,<br>un proyecto.',
    'proceso.axis1.title': 'Project Management',
    'proceso.axis1.desc':  'Coordinación de equipos y proveedores, planning, presupuesto, control de costes y seguimiento en obra. Capacidad de liderar proyectos con múltiples actores sin perder el hilo.',
    'proceso.axis2.title': 'Arquitectónico',
    'proceso.axis2.desc':  'Nueva distribución, definición técnica y documentación de ejecución. Todo lo que requiere una reforma bien planteada.',
    'proceso.axis3.title': 'Concepto de diseño',
    'proceso.axis3.desc':  'Narrativa global del espacio: visualidad, materialidad, estilo y estrategia de comunicación. El porqué detrás de cada decisión.',
    'proceso.axis4.title': 'FF&E',
    'proceso.axis4.desc':  'Selección minuciosa de mobiliario, iluminación, acabados, piezas y arte. Conocimiento profundo de marcas de alta gama y criterio para mezclar referencias con coherencia.',

    'projects.label': 'Proyectos seleccionados',
    'projects.h2':    'El trabajo<br>habla por sí solo.',

    'proj.theproject': 'El proyecto',
    'proj.process':    'Proceso',
    'proj.view':       'Ver proyecto',

    'proj1.tag':     'Profesional · Vilablanch',
    'proj1.tagline': 'Reforma integral · Ausias Marc 50 · Barcelona',
    'proj1.p1':      'Proyecto de restauración y arquitectura interior de un piso modernista en el Eixample barcelonés, donde se establece un diálogo entre patrimonio y contemporaneidad. La intervención unifica las antiguas habitaciones en espacios fluidos, respondiendo a las necesidades actuales mientras honra la memoria del lugar.',
    'proj1.p2':      'Se recuperan los elementos originales — suelos hidráulicos, techos decorados y distribución espacial — como testigos materiales de la historia. La propuesta arquitectónica potencia la autenticidad del espacio mediante una intervención respetuosa que armoniza tradición constructiva con funcionalidad moderna.',

    'proj2.tag':     'Profesional · Vilablanch',
    'proj2.tagline': 'Reforma integral · Conversión residencial a oficinas · Barcelona',
    'proj2.h4b':     'Estrategia de diseño',
    'proj2.p1':      'Proyecto de restauración y diseño interior para un espacio de trabajo flexible, concebido con capacidad de adaptación, crecimiento y transformación según las necesidades de sus usuarios. La versatilidad surge de una retícula neutra, con divisiones mínimas, que facilita la integración de despachos, puestos de trabajo o áreas colaborativas.',
    'proj2.p2':      'El concepto busca armonizar patrimonio con funcionalidad: preservar la esencia original del edificio respetando molduras, carpinterías y techos altos al tiempo que se incorporan soluciones contemporáneas. El resultado honra el pasado mientras abraza las demandas del trabajo moderno.',

    'proj3.tag':     'Académico · ELISAVA',
    'proj3.tagline': 'Coworking &amp; Coliving · Comunidad artística internacional',
    'proj3.h4b':     'Zonificación y estrategia',
    'proj3.p1':      'Esta masía catalana del siglo XIX, con su plegaria original inscrita en la puerta — <em>"Que en esta casa no haya ni poco ni mucho, sólo lo justo para vivir bien"</em> — inspira una propuesta de coworking y coliving para una comunidad artística internacional.',
    'proj3.p2':      'Los espacios, diseñados con una paleta cromática reducida a blancos y tierras, minimizan el estímulo visual para fomentar la creatividad. La distribución potencia tanto la concentración individual como los encuentros fortuitos, creando redes colaborativas entre escritores, pintores, fotógrafos, escultores, diseñadores, arquitectos, músicos y actores.',

    'exp.label':       'Experiencia',
    'exp.h2':          'Donde he<br>dejado huella.',
    'exp.fulltime':    'Jornada completa',
    'exp.freelance':   'Freelance',
    'exp.job0.title':  'Interiorista',
    'exp.job0.date':   'Feb 2026 — May 2026',
    'exp.job1.title':  'Interiorista',
    'exp.job1.date':   'Ago 2022 — Nov 2025',
    'exp.job1.desc':   'Proyectos de arquitectura e interiorismo residencial y comercial de alta gama. Desarrollo íntegro desde concepto hasta seguimiento de obra, selección de materiales, FF&E y documentación técnica.',
    'exp.job1.dur':    '3 años 3 meses',
    'exp.job2.title':  'Interiorista · Diseñadora de Mobiliario',
    'exp.job2.date':   'Ene 2020 — Ene 2022',
    'exp.job2.desc':   'Diseño de espacios residenciales y comerciales, desarrollo de mobiliario personalizado e interiorismo integral.',
    'exp.job2.dur':    '2 años 1 mes',
    'exp.job3.title':  'Renderista',
    'exp.job3.date':   'Mar 2020 — Dic 2021',
    'exp.job3.desc':   'Visualización 3D y renders fotorrealistas para proyectos artísticos y espacios creativos.',
    'exp.job3.dur':    '1 año 10 meses',

    'edu.label':    'Formación',
    'edu.h2':       'La base<br>del oficio.',
    'edu.master':   'Máster',
    'edu.degree':   'Licenciatura',
    'edu.e1.title': 'Máster en Diseño del Espacio Interior',
    'edu.e1.date':  'Marzo 2022 – Febrero 2023 · Barcelona',
    'edu.e1.desc':  'Programa avanzado de diseño interior con énfasis en sostenibilidad, diseño biofílico, inclusividad y tecnologías emergentes. Proyecto fin de máster: <em>En Blanc</em>, propuesta de coworking y coliving para comunidad artística.',
    'edu.e2.title': 'Licenciatura en Diseño Industrial y de Producto',
    'edu.e2.date':  'Sep 2015 – Dic 2020 · La Habana, Cuba',
    'edu.e2.desc':  'Formación integral en diseño de producto, mobiliario, ergonomía, materiales y procesos industriales, con foco en la resolución creativa de problemas.',

    'skills.label': 'Habilidades',
    'skills.h2':    'Las herramientas<br>del proyecto.',
    'skills.cat1':  'Diseño',
    'skills.cat4':  'Metodología',
    'sk.interior':  'Diseño de Interiores',
    'sk.furniture': 'Diseño de Mobiliario',
    'sk.industrial':'Diseño Industrial',
    'sk.spatial':   'Planificación Espacial',
    'sk.sketching': 'Bocetos',
    'sk.color':     'Color & Textura',
    'sk.render':    'Renderizado 3D',
    'sk.graphic':   'Diseño Gráfico',
    'sk.visual':    'Comunicación Visual',
    'sk.ucd':       'Diseño Centrado en Usuario',
    'sk.biophilic': 'Diseño Biofílico',
    'sk.sust':      'Sostenibilidad',
    'sk.inclusive': 'Diseño Inclusivo',
    'sk.ergo':      'Ergonomía',
    'sk.pm':        'Gestión de Proyectos',

    'lang.label':        'Idiomas',
    'lang.es':           'Castellano',
    'lang.en':           'Inglés',
    'lang.ca':           'Catalán',
    'lang.native':       'Nativo',
    'lang.professional': 'Profesional',
    'lang.conversational':'Conversacional',

    'contact.label':    'Contacto',
    'contact.h2':       'Creemos algo<br><em>memorable juntos.</em>',
    'contact.sub':      'Disponible para proyectos on-site, híbridos y en remoto en Barcelona y más allá.',
    'contact.location': '📍 Barcelona, Cataluña, España',
  },

  en: {
    'nav.about':      'About',
    'nav.projects':   'Projects',
    'nav.proceso':    'Process',
    'nav.experience': 'Experience',
    'nav.education':  'Education',
    'nav.contact':    'Contact',

    'hero.eyebrow': 'Interior Design &amp; Architecture · Barcelona',
    'hero.sub':     'Interior Designer<br>FF&amp;E · Architecture · Project Management',
    'hero.badge1':  'Open to Work',
    'hero.badge2':  'On-site · Hybrid · Remote',
    'hero.cta':     'Get in touch →',
    'hero.scroll':  'Scroll',

    'about.label': 'About',
    'about.h2':    'Spaces with soul.',
    'about.p1':    'I\'m Anabel Górriz, interior designer with 6 years of experience in the integral development of projects. I thrive on taking on new challenges in a studio with a creative vision and high execution standards, contributing value from conceptualisation through to final delivery.',
    'about.p2':    'My profile combines a strong architectural foundation — technical documentation, definition and detailing — with a conceptual vision focused on building the spatial narrative. My specialism lies in FF&E, finishes and bespoke pieces; and I manage execution with a 360° view: budgets, supplier coordination and site supervision.',
    'about.stat1': 'Years of experience',
    'about.stat2': 'Companies',
    'about.stat3': 'Selected projects',
    'about.stat4': 'Languages',

    'card1.type': 'Full Renovation',
    'card1.desc': 'Restoration of a Modernista apartment in the Barcelona Eixample. A dialogue between built heritage and contemporary living.',
    'card2.type': 'Full Renovation',
    'card2.desc': 'Residential-to-office conversion in a historic building. Architectural heritage integrated with the demands of modern work.',
    'card3.type': 'Coworking &amp; Coliving',
    'card3.desc': 'Coworking and coliving proposal for an international artistic community in a 19th-century Catalan farmhouse.',

    'proceso.label':       'Process',
    'proceso.h2':          'Four axes,<br>one project.',
    'proceso.axis1.title': 'Project Management',
    'proceso.axis1.desc':  'Coordination of teams and suppliers, planning, budgets, cost control and site supervision. Ability to lead multi-stakeholder projects without losing the thread.',
    'proceso.axis2.title': 'Architecture',
    'proceso.axis2.desc':  'New layouts, technical definition and execution documentation. Everything a well-planned renovation requires.',
    'proceso.axis3.title': 'Design concept',
    'proceso.axis3.desc':  'Global narrative for the space: visuality, materiality, style and communication strategy. The why behind every decision.',
    'proceso.axis4.title': 'FF&E',
    'proceso.axis4.desc':  'Careful selection of furniture, lighting, finishes, pieces and art. Deep knowledge of high-end brands and the discernment to blend references with coherence.',

    'projects.label': 'Selected projects',
    'projects.h2':    'The work<br>speaks for itself.',

    'proj.theproject': 'The project',
    'proj.process':    'Process',
    'proj.view':       'View project',

    'proj1.tag':     'Professional · Vilablanch',
    'proj1.tagline': 'Full renovation · Ausias Marc 50 · Barcelona',
    'proj1.p1':      'Restoration and interior architecture project for a Modernista apartment in the Barcelona Eixample, establishing a dialogue between heritage and contemporaneity. The intervention unifies the former rooms into fluid spaces, meeting today\'s needs while honouring the memory of the place.',
    'proj1.p2':      'Original elements are recovered — hydraulic floors, decorated ceilings and spatial layout — as material witnesses to history. The architectural proposal strengthens the authenticity of the space through a respectful intervention that harmonises constructive tradition with modern functionality.',

    'proj2.tag':     'Professional · Vilablanch',
    'proj2.tagline': 'Full renovation · Residential to office conversion · Barcelona',
    'proj2.h4b':     'Design strategy',
    'proj2.p1':      'Restoration and interior design project for a flexible workspace, conceived with capacity for adaptation, growth and transformation according to users\' needs. Versatility emerges from a neutral grid with minimal partitions, facilitating the integration of offices, workstations or collaborative areas.',
    'proj2.p2':      'The concept seeks to harmonise heritage with functionality: preserving the building\'s original essence by respecting mouldings, joinery and high ceilings while incorporating contemporary solutions. The result honours the past while embracing the demands of modern work.',

    'proj3.tag':     'Academic · ELISAVA',
    'proj3.tagline': 'Coworking &amp; Coliving · International artistic community',
    'proj3.h4b':     'Zoning &amp; strategy',
    'proj3.p1':      'This 19th-century Catalan farmhouse, with its original prayer inscribed above the door — <em>"May this house have neither too little nor too much, only what is just to live well"</em> — inspires a coworking and coliving proposal for an international artistic community.',
    'proj3.p2':      'The spaces, designed with a chromatic palette reduced to whites and earthy tones, minimise visual stimulation to foster creativity. The layout encourages both individual concentration and serendipitous encounters, building collaborative networks among writers, painters, photographers, sculptors, designers, architects, musicians and actors.',

    'exp.label':       'Experience',
    'exp.h2':          'Where I\'ve<br>left my mark.',
    'exp.fulltime':    'Full-time',
    'exp.freelance':   'Freelance',
    'exp.job0.title':  'Interior Designer',
    'exp.job0.date':   'Feb 2026 — May 2026',
    'exp.job1.title':  'Interior Designer',
    'exp.job1.date':   'Aug 2022 — Nov 2025',
    'exp.job1.desc':   'High-end residential and commercial architecture and interior design projects. Full development from concept to site supervision, material selection, FF&E and technical documentation.',
    'exp.job1.dur':    '3 years 3 months',
    'exp.job2.title':  'Interior Designer · Furniture Designer',
    'exp.job2.date':   'Jan 2020 — Jan 2022',
    'exp.job2.desc':   'Design of residential and commercial spaces, development of custom furniture and comprehensive interior design.',
    'exp.job2.dur':    '2 years 1 month',
    'exp.job3.title':  '3D Visualiser',
    'exp.job3.date':   'Mar 2020 — Dec 2021',
    'exp.job3.desc':   '3D visualisation and photorealistic renders for artistic projects and creative spaces.',
    'exp.job3.dur':    '1 year 10 months',

    'edu.label':    'Education',
    'edu.h2':       'The foundation<br>of the craft.',
    'edu.master':   'Master\'s',
    'edu.degree':   'Bachelor\'s',
    'edu.e1.title': 'Master\'s in Interior Space Design',
    'edu.e1.date':  'March 2022 – February 2023 · Barcelona',
    'edu.e1.desc':  'Advanced interior design programme focused on sustainability, biophilic design, inclusivity and emerging technologies. Master\'s thesis: <em>En Blanc</em>, a coworking and coliving proposal for an artistic community.',
    'edu.e2.title': 'Bachelor\'s in Industrial and Product Design',
    'edu.e2.date':  'Sep 2015 – Dec 2020 · Havana, Cuba',
    'edu.e2.desc':  'Comprehensive degree covering product design, furniture, ergonomics, materials and industrial processes, with a focus on creative problem-solving.',

    'skills.label': 'Skills',
    'skills.h2':    'The tools<br>of the trade.',
    'skills.cat1':  'Design',
    'skills.cat4':  'Methodology',
    'sk.interior':  'Interior Design',
    'sk.furniture': 'Furniture Design',
    'sk.industrial':'Industrial Design',
    'sk.spatial':   'Spatial Planning',
    'sk.sketching': 'Sketching',
    'sk.color':     'Colour &amp; Texture',
    'sk.render':    '3D Rendering',
    'sk.graphic':   'Graphic Design',
    'sk.visual':    'Visual Communication',
    'sk.ucd':       'User-Centered Design',
    'sk.biophilic': 'Biophilic Design',
    'sk.sust':      'Sustainability',
    'sk.inclusive': 'Inclusive Design',
    'sk.ergo':      'Ergonomics',
    'sk.pm':        'Project Management',

    'lang.label':         'Languages',
    'lang.es':            'Spanish',
    'lang.en':            'English',
    'lang.ca':            'Catalan',
    'lang.native':        'Native',
    'lang.professional':  'Professional',
    'lang.conversational':'Conversational',

    'contact.label':    'Contact',
    'contact.h2':       'Let\'s create<br><em>something memorable.</em>',
    'contact.sub':      'Available for on-site, hybrid and remote projects in Barcelona and beyond.',
    'contact.location': '📍 Barcelona, Catalonia, Spain',
  }
};

// ── Engine ──────────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'es';

function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t[el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });

  // html nodes
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t[el.dataset.i18nHtml];
    if (val !== undefined) el.innerHTML = val;
  });

  // html lang attr + title
  document.documentElement.lang = lang;

  // toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // animate
  document.body.classList.add('lang-switching');
  setTimeout(() => document.body.classList.remove('lang-switching'), 300);

  localStorage.setItem('lang', lang);
  currentLang = lang;
}

// ── Init ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.lang !== currentLang) applyLang(btn.dataset.lang);
    });
  });
});
