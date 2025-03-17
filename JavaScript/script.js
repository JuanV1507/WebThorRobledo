// Inicializa AOS para las animaciones de scroll
AOS.init({
  duration: 1000,
  once: true
});

// Diccionario de traducciones (Español e Inglés)
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
    heroTitle: "Recuperación de Cartera Vencida",
    heroSubtitle: "Ofrecemos soluciones profesionales y efectivas.",
    heroButton: "Contáctanos",
    aboutTitle: "Sobre Nosotros",
    aboutDescription:
      "En el año 1990 la Lic. Refugio Sandoval Santana fundó una firma de abogados en la Ciudad de México, ofreciendo servicios legales de tipo mercantil, fiscal y cobranza extrajudicial, abarcando la zona centro y norte del país. En el año 2005 se abrieron oficinas en el sureste de México y, con la reciente participación comercial y relaciones industriales del Ing. Thor Robledo, se ofrecen servicios de gestoría y cobranza extrajudicial en los estados de Yucatán, Campeche, Quintana Roo y Tabasco, contando con un amplio equipo de asesores, gestores y colaboradores.",
    misionTitle: "Misión",
    misionDescription:
      "Ser una compañía de servicios sólida que brinde consistentemente un servicio excepcional a todos nuestros clientes, impulsando el crecimiento y desarrollo de clientes, empleados y colaboradores a través de la recuperación de su cartera vencida.",
    visionTitle: "Visión",
    visionDescription:
      "Vemos a una empresa de servicios de primera clase en mejora continua, capaz de establecer una relación cercana con los clientes, personal y sociedad para contribuir al desarrollo del país.",
    valoresTitle: "Valores",
    valoresHonestidad:
      "Honestidad: Total transparencia en el actuar y previa autorización de nuestros clientes para cualquier negociación realizada.",
    valoresResponsabilidad:
      "Responsabilidad: Reconocemos el esfuerzo individual de nuestros colaboradores, siempre alineado a las necesidades de nuestros clientes.",
    valoresEnfoqueCliente:
      "Enfoque al Cliente: Nuestro principal objetivo es satisfacer a todos nuestros clientes excediendo sus expectativas de servicio.",
    servicesTitle: "Servicios",
    service1Title: "Cobranza Extrajudicial",
    service1Desc:
      "Por medio de carteo masivo, rastreo, ubicación y visitas personalizadas en domicilios de los deudores para cumplir con la recuperación de cartera vencida.",
    service2Title: "Asesoría",
    service2Desc:
      "De acuerdo a las características de cada cartera, contamos con diversas estrategias para definir la más eficiente e indicada para su empresa.",
    service3Title: "Venta de bienes e inmuebles",
    service3Desc:
      "Ponemos a su disposición la administración y venta de propiedades recuperadas según la recuperación obtenida.",
    service4Title: "Corresponsalía",
    service4Desc:
      "Contamos con corresponsales de abogados en los estados de Campeche, Quintana Roo y Tabasco.",
    clientsTitle: "Clientes",
    clientsSubtitle: "Algunos de nuestros principales clientes:",
    mapaTitle: "Ubicaciones",
    contactTitle: "Contáctanos",
    contactSubtitle: "Envíanos tu mensaje y nos pondremos en contacto contigo.",
    formNamePlaceholder: "Nombre",
    formEmailPlaceholder: "Correo electrónico",
    formSubjectPlaceholder: "Asunto",
    formMessagePlaceholder: "Mensaje",
    formSendButton: "Enviar",
    contactOfficeMerida:
      "Oficina Mérida: C. 92 No. 589 Col. Residencial Pensiones, Mérida, Yuc. Tel: (999) 287-2960",
    contactOfficeMexico:
      "Oficina México: C. Abasolo No. 66, Tlalnepantla, Edo. de México.",
    newsletterTitle: "Suscríbete a nuestro Newsletter",
    newsletterText:
      "Recibe las últimas noticias y actualizaciones directamente en tu correo.",
    newsletterPlaceholder: "Ingresa tu correo",
    newsletterButton: "Suscribir",
    footerNavigation: "Navegación",
    footerQuickLinks: "Enlaces Rápidos",
    footerWorkHours: "Horario",
  },
  en: {
    companyName: "OVERDUE PORTFOLIO RECOVERY",
    companyNameFooter: "Overdue Portfolio Recovery",
    rightsReserved: "All rights reserved.",
    navInicio: "Home",
    navNosotros: "About Us",
    navServicios: "Services",
    navClientes: "Clients",
    navMapa: "Map",
    navContacto: "Contact",
    heroTitle: "Overdue Portfolio Recovery",
    heroSubtitle: "We offer professional and effective solutions.",
    heroButton: "Contact Us",
    aboutTitle: "About Us",
    aboutDescription:
      "In 1990, Lic. Refugio Sandoval Santana founded a law firm in Mexico City, offering legal services in commercial, tax, and extrajudicial collection matters, covering the central and northern areas of the country. In 2005, offices were established in southeastern Mexico, and with the recent commercial participation and industrial relations of Eng. Thor Robledo, we provide management and extrajudicial collection services in the states of Yucatán, Campeche, Quintana Roo, and Tabasco, with a large team of advisors, managers, and collaborators.",
    misionTitle: "Mission",
    misionDescription:
      "To be a solid service company that consistently provides exceptional service to all our clients, driving growth and development of clients, employees, and collaborators through the recovery of their overdue portfolio.",
    visionTitle: "Vision",
    visionDescription:
      "We envision a first-class service company in continuous improvement, capable of establishing a close relationship with clients, staff, and society to contribute to the development of the country.",
    valoresTitle: "Values",
    valoresHonestidad:
      "Honesty: Total transparency in our actions and prior authorization from our clients for any negotiation carried out.",
    valoresResponsabilidad:
      "Responsibility: We recognize the individual effort of our collaborators, always aligned with our clients’ needs.",
    valoresEnfoqueCliente:
      "Client Focus: Our main objective is to satisfy all our clients by exceeding their service expectations.",
    servicesTitle: "Services",
    service1Title: "Extrajudicial Collection",
    service1Desc:
      "Through mass mailing, tracking, location, and personalized visits to debtors' addresses to fulfill Overdue Portfolio Recovery.",
    service2Title: "Consulting",
    service2Desc:
      "According to the characteristics of each portfolio, we have various strategies to define the most efficient and suitable for your company.",
    service3Title: "Real Estate Sales",
    service3Desc:
      "We offer the administration and sale of recovered properties according to the achieved recovery.",
    service4Title: "Correspondence",
    service4Desc:
      "We have correspondents of lawyers in the states of Campeche, Quintana Roo, and Tabasco.",
    clientsTitle: "Clients",
    clientsSubtitle: "Some of our main clients:",
    mapaTitle: "Service Locations",
    contactTitle: "Contact Us",
    contactSubtitle: "Send us your message and we will get in touch with you.",
    formNamePlaceholder: "Name",
    formEmailPlaceholder: "Email",
    formSubjectPlaceholder: "Subject",
    formMessagePlaceholder: "Message",
    formSendButton: "Send",
    contactOfficeMerida:
      "Mérida Office: C. 92 No. 589 Col. Residencial Pensiones, Mérida, Yuc. Tel: (999) 287-2960",
    contactOfficeMexico:
      "Mexico Office: C. Abasolo No. 66, Tlalnepantla, State of Mexico.",
    newsletterTitle: "Subscribe to our Newsletter",
    newsletterText:
      "Receive the latest news and updates directly to your email.",
    newsletterPlaceholder: "Enter your email",
    newsletterButton: "Subscribe",
    footerNavigation: "Navigation",
    footerQuickLinks: "Quick Links",
    footerWorkHours: "Work Hours",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  switchLanguage("es");

  // Menú móvil
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    mobileMenu.classList.toggle('toggle');
  });

  // Establece "active" en el menú al hacer clic
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navItems.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
      if (navLinks.classList.contains('nav-active')) {
        navLinks.classList.remove('nav-active');
        mobileMenu.classList.remove('toggle');
      }
    });
  });

  // Hero Slider: Cambiar imagen de fondo cada 5 segundos
  const heroSection = document.getElementById('inicio');
  const heroImages = [
    'https://via.placeholder.com/1600x900?text=Hero+Image+1',
    'https://via.placeholder.com/1600x900?text=Hero+Image+2',
    'https://via.placeholder.com/1600x900?text=Hero+Image+3'
  ];
  let currentHero = 0;
  setInterval(() => {
    currentHero = (currentHero + 1) % heroImages.length;
    heroSection.style.backgroundImage = `url('${heroImages[currentHero]}')`;
  }, 5000);

  // Botón "Back to Top"
  const backToTopButton = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

function switchLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    element.textContent = translations[lang][key];
  });

  const nameInput = document.querySelector("[data-key='formNamePlaceholder']");
  if (nameInput) nameInput.placeholder = translations[lang].formNamePlaceholder;

  const emailInput = document.querySelector("[data-key='formEmailPlaceholder']");
  if (emailInput) emailInput.placeholder = translations[lang].formEmailPlaceholder;

  const subjectInput = document.querySelector("[data-key='formSubjectPlaceholder']");
  if (subjectInput) subjectInput.placeholder = translations[lang].formSubjectPlaceholder;

  const messageTextarea = document.querySelector("[data-key='formMessagePlaceholder']");
  if (messageTextarea) {
    messageTextarea.placeholder = translations[lang].formMessagePlaceholder;
  }

  const newsletterInput = document.querySelector("[data-key='newsletterPlaceholder']");
  if (newsletterInput) {
    newsletterInput.placeholder = translations[lang].newsletterPlaceholder;
  }
}
// Contador de visitas con countapi.xyz
fetch('https://api.countapi.xyz/hit/tu-dominio.com/visitas')
  .then(response => response.json())
  .then(data => {
    document.querySelector('#visit-counter .counter-digits').textContent = data.value;
  })
  .catch(err => console.error('Error fetching visit count:', err));
