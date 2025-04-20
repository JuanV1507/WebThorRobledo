// Inicializa AOS
AOS.init({
  duration: 1000,
  once: true
});

// Función para animar números
const animateCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  const duration = 2000;
  let start = 0;
  const step = timestamp => {
    if (!counter.startTime) counter.startTime = timestamp;
    const progress = timestamp - counter.startTime;
    const value = Math.min(Math.round((progress / duration) * target), target);
    counter.textContent = value;
    if (value < target) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
};

// Ejecuta cuando entren al viewport
const counters = document.querySelectorAll(".stat-number");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

const translations = {
  es: {
    companyName: "IMPULSORA DE RECUPERACIÓN CREDITICIA",
    companyNameFooter: "Impulsora de Recuperación Crediticia",
    rightsReserved: "Todos los derechos reservados.",
    navInicio: "Inicio",
    navNosotros: "Nosotros",
    navServicios: "Servicios",
    navClientes: "Clientes",
    navMapa: "Mapa",
    navContacto: "Contacto",
    heroTitle: "IMPULSORA DE RECUPERACIÓN CREDITICIA",
    heroSubtitle: "Cobramos honorarios conforme a los pagos de deudores",
    heroButton: "Contáctanos",
    aboutTitle: "Sobre Nosotros",
    aboutDescription:
      "En el año 2005 la Lic. Refugio Sandoval Santana fundó una firma de abogados en México, ofreciendo servicios legales de tipo mercantil, fiscal, cobranza extrajudicial, recuperación de cartera vencida y solución de disputas abarcando la zona centro y norte del país. En el año 2010 con la reciente participación comercial y relaciones industriales del Ing. Thor Robledo, se ofrecen los mismos servicios en todo el continente americano contando con un amplio equipo de asesores, gestores y colaboradores a lo largo del continente. En el año 2015 se comienzan a ofrecer nuestros servicios a nivel global.",
    misionTitle: "Misión",
    misionDescription:
      "Ser una compañía de servicios sólida que brinde consistentemente un servicio excepcional a todos nuestros clientes, impulsando el crecimiento y desarrollo de clientes, empleados y colaboradores a través de la recuperación de su cartera vencida.",
    visionTitle: "Visión",
    visionDescription:
      "Vemos a una empresa de servicios de primera clase en mejora continua, capaz de establecer una relación cercana con los clientes, personal y sociedad para contribuir al desarrollo global.",
    valoresTitle: "Valores",
    valoresHonestidad: "Honestidad: Total transparencia en el actuar y previa autorización de nuestros clientes.",
    valoresResponsabilidad: "Responsabilidad: Reconocemos el esfuerzo individual de nuestros colaboradores y cumplimos las necesidades de cada cliente.",
    valoresEnfoqueCliente: "Enfoque al Cliente: Nuestro principal objetivo es satisfacer a todos nuestros clientes excediendo sus expectativas.",
    servicesTitle: "Nuestros Servicios",
    service1Title: "Cobranza Extrajudicial",
    service1Desc: "Labor que se logra mediante el rastreo, ubicación, envío de correspondencia y visitas personalizadas en domicilios de los deudores para cumplir con la recuperación de cartera vencida. Cuidando siempre la parte comercial en caso de tener el deseo de seguir trabajando con el cliente - deudor.",
    service2Title: "Asesoría",
    service2Desc: "De acuerdo a las características de cada cartera, contamos con diversas estrategias y definir la más eficiente e indicada para su empresa para poder recuperar la cartera vencida, recuperar y/o mantener la relación comercial si así se desea y evitar volver a caer en el mismo problema en el futuro. Lo cual garantizará tener el flujo de efectivo necesario para mantener la operación de su empresa.",
    service3Title: "Negociación de deudas",
    service3Desc: "Gestionamos, negociamos y resolvemos deudas con bancos, acreedores y cualquier institución financiera.",
    clientsTitle: "Clientes",
    clientsSubtitle: "Nuestros principales clientes:",
    globalStatsYears: "Años de experiencia global",
    globalStatsEfficiency: "Eficiencia en resultados (%)",
    globalStatsCountries: "Países en los que hemos trabajado",
    globalStatsText: "Presencia desde Canadá hasta Argentina, incluyendo España, Austria, Noruega, Francia, Holanda, Portugal, Turquía, Emiratos Árabes Unidos, Kuwait, China, Hong Kong y Japón.",
    mapaTitle: "Ubicaciones",
    contactTitle: "Contáctanos",
    contactSubtitle: "Envíanos tu mensaje y nos pondremos en contacto contigo.",
    formNamePlaceholder: "Nombre",
    formEmailPlaceholder: "Correo electrónico",
    formSubjectPlaceholder: "Asunto",
    formMessagePlaceholder: "Mensaje",
    formSendButton: "Enviar",
    footerNavigation: "Navegación",
    footerQuickLinks: "Enlaces Rápidos",
    socialTitle: "Más de Nosotros",
    footerContacto: "Escríbenos",
    subMapaSubtitle: "Ubicaciones donde hemos colaborado y dejado huella internacional.",
    contactInfoText: "Oficina central México",
    mapaTituloPrincipal: "Presencia Global",

  },
  en: {
    companyName: "International Recovery and Collection",
    companyNameFooter: "International Recovery and Collection",
    rightsReserved: "All rights reserved.",
    navInicio: "Home",
    navNosotros: "About Us",
    navServicios: "Services",
    navClientes: "Clients",
    navMapa: "Map",
    navContacto: "Contact",
    heroTitle: "International Recovery and Collection",
    heroSubtitle: "No collection, no fees",
    heroButton: "Contact Us",
    aboutTitle: "About Us",
    aboutDescription:
      "In 2005, Lic. Refugio Sandoval Santana founded a law firm in Mexico, offering legal services in commercial, tax, and amicable collection. In 2010, with Eng. Thor Robledo's participation, the same services expanded across the Americas. In 2015, services were extended globally with a team of advisors and collaborators across continents.",
    misionTitle: "Mission",
    misionDescription:
      "To be a solid service company that consistently provides exceptional service to all our clients, driving growth and development through amicable portfolio recovery.",
    visionTitle: "Vision",
    visionDescription:
      "We envision a first-class service company in continuous improvement, establishing strong relationships with clients, staff, and society to contribute globally.",
    valoresTitle: "Values",
    valoresHonestidad: "Honesty: Full transparency in our actions and client-approved negotiations.",
    valoresResponsabilidad: "Responsibility: We acknowledge individual efforts of our staff and meet every client's needs.",
    valoresEnfoqueCliente: "Client Focus: Our main goal is to exceed all expectations.",
    servicesTitle: "Our Services",
    service1Title: "Amicable Collection",
    service1Desc: "Achieved through tracking, locating, mailing, and personalized visits to debtors to recover overdue portfolios while preserving commercial relationships.",
    service2Title: "Consulting",
    service2Desc: "Custom strategies based on portfolio characteristics to recover debts and prevent future risks.",
    service3Title: "Debt Negotiation",
    service3Desc: "We manage, negotiate, and resolve debts with banks, creditors, and financial institutions.",
    clientsTitle: "Clients",
    clientsSubtitle: "Our main clients:",
    globalStatsYears: "Years of global experience",
    globalStatsEfficiency: "Efficiency in results (%)",
    globalStatsCountries: "Countries we’ve worked in",
    globalStatsText: "Presence from Canada to Argentina, including Spain, Austria, Norway, France, Netherlands, Portugal, Turkey, United Arab Emirates, Kuwait, China, Hong Kong, and Japan.",
    mapaTitle: "Locations",
    contactTitle: "Contact Us",
    contactSubtitle: "Send us your message and we’ll get back to you shortly.",
    formNamePlaceholder: "Name",
    formEmailPlaceholder: "Email",
    formSubjectPlaceholder: "Subject",
    formMessagePlaceholder: "Message",
    formSendButton: "Send",
    footerNavigation: "Navigation",
    footerQuickLinks: "Quick Links",
    socialTitle: "More About Us",
    footerContacto: "Write to us",
    subMapaSubtitle: "Locations where we have collaborated and left an international mark.",
    contactInfoText: "Head Office Mexico",
    mapaTituloPrincipal: "Global Presence",
  }
  
};

// Traducción dinámica
function switchLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  const inputPlaceholders = {
    formNamePlaceholder: "[data-key='formNamePlaceholder']",
    formEmailPlaceholder: "[data-key='formEmailPlaceholder']",
    formSubjectPlaceholder: "[data-key='formSubjectPlaceholder']",
    formMessagePlaceholder: "[data-key='formMessagePlaceholder']",
    newsletterPlaceholder: "[data-key='newsletterPlaceholder']"
  };

  Object.entries(inputPlaceholders).forEach(([key, selector]) => {
    const input = document.querySelector(selector);
    if (input) {
      input.placeholder = translations[lang][key];
    }
  });
}

// Funcionalidad principal
document.addEventListener("DOMContentLoaded", () => {
  switchLanguage("es");

  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    mobileMenu.classList.toggle('toggle');
  });

  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(link => link.classList.remove('active'));
      item.classList.add('active');
      navLinks.classList.remove('nav-active');
      mobileMenu.classList.remove('toggle');
    });
  });

  const heroImages = [
    'Imagenes/logo4.webp',
    'Imagenes/contrato.webp',
    'Imagenes/logo3.webp'
  ];
  let currentHero = 0;
  const heroSection = document.getElementById('inicio');
  setInterval(() => {
    currentHero = (currentHero + 1) % heroImages.length;
    heroSection.style.backgroundImage = `url('${heroImages[currentHero]}')`;
  }, 5000);

  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 300);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

 
  // Contador de visitas (opcional)
  fetch('https://api.countapi.xyz/hit/ircdebtrecovery.com/visitas')
    .then(res => res.json())
    .then(data => {
      const visitDisplay = document.querySelector('#visit-counter .counter-digits');
      if (visitDisplay) visitDisplay.textContent = data.value;
    })
    .catch(err => console.error('Visitas:', err));
});

document.querySelectorAll('.map-marker').forEach(marker => {
  marker.addEventListener('mouseenter', e => {
    const tooltip = document.getElementById('tooltip');
    tooltip.innerText = e.target.dataset.descripcion;
    tooltip.style.display = 'block';
  });
  marker.addEventListener('mousemove', e => {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.top = (e.clientY - 30) + 'px';
    tooltip.style.left = (e.clientX + 10) + 'px';
  });
  marker.addEventListener('mouseleave', () => {
    document.getElementById('tooltip').style.display = 'none';
  });
});
