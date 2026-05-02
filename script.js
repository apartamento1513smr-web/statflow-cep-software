// Cambia estos valores para conectar la landing con tus canales reales.
const SHINY_APP_URL = "https://cep20261cacc.shinyapps.io/software_cpe-1/";
const WHATSAPP_NUMBER = "573013447771";
const WHATSAPP_MESSAGE = "Hola, quiero recibir informacion sobre StatFlow CEP.";
const WHATSAPP_MESSAGES = {
  es: WHATSAPP_MESSAGE,
  en: "Hello, I would like information about StatFlow CEP.",
};

const shinyButtons = document.querySelectorAll(".js-shiny-link");
const whatsappButton = document.querySelector("#whatsappButton");
const whatsappFloat = document.querySelector("#whatsappFloat");
const languageToggle = document.querySelector("#languageToggle");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const siteHeader = document.querySelector(".site-header");
const revealElements = document.querySelectorAll(".reveal");
const screenshotImages = document.querySelectorAll(".screenshot__image img");

const PAGE_META = {
  es: {
    title: "StatFlow CEP | Software de Control Estadístico de Procesos",
    description:
      "StatFlow CEP es un software de Control Estadístico de Procesos desarrollado en R Shiny para análisis de capacidad, normalidad, cartas de control, monitoreo en tiempo real e informes empresariales.",
  },
  en: {
    title: "StatFlow CEP | Statistical Process Control Software",
    description:
      "StatFlow CEP is Statistical Process Control software developed in R Shiny for capability analysis, normality, control charts, real-time monitoring and business reports.",
  },
};

const TRANSLATIONS = {
  en: {
    "StatFlow CEP": "StatFlow CEP",
    "Navegación principal": "Main navigation",
    "Ir al inicio": "Go to home",
    "Abrir menú": "Open menu",
    "Cambiar idioma": "Change language",
    "Identidad StatFlow": "StatFlow identity",
    "Características principales": "Main features",
    "Mockup visual del dashboard StatFlow CEP": "Visual mockup of the StatFlow CEP dashboard",
    "Histograma simulado": "Simulated histogram",
    "Inicio": "Home",
    "Módulos": "Modules",
    "Formatos": "Templates",
    "Aplicabilidad": "Applicability",
    "Equipo": "Team",
    "Acceder": "Access",
    "R Shiny + Control Estadístico de Procesos": "R Shiny + Statistical Process Control",
    "StatFlow CEP: Control Estadístico de Procesos desde la web": "StatFlow CEP: Statistical Process Control from the web",
    "Una plataforma desarrollada en R Shiny para analizar capacidad, normalidad, cartas de control, monitoreo en tiempo real e informes empresariales con apoyo de inteligencia artificial.":
      "A platform developed in R Shiny to analyze capability, normality, control charts, real-time monitoring and business reports with AI support.",
    "Ingresar al software": "Open the software",
    "Descargar APK Android": "Download Android APK",
    "Ver módulos": "View modules",
    "Aplicación web Shiny": "Shiny web app",
    "APK Android": "Android APK",
    "Datos guardados": "Saved data",
    "IA para informes": "AI-assisted reports",
    "StatFlow CEP / Línea de proceso": "StatFlow CEP / Process line",
    "Fase 2 activa": "Phase 2 active",
    "Proceso capaz": "Capable process",
    "Leve descentramiento": "Slightly off-center",
    "No conformidad estimada": "Estimated nonconformity",
    "Carta de control X̄-R": "X̄-R control chart",
    "2 puntos en revisión": "2 points under review",
    "Informe con IA listo": "AI report ready",
    "Exportación": "Export",
    "Modo": "Mode",
    "Operario": "Operator",
    "¿Qué es StatFlow CEP?": "What is StatFlow CEP?",
    "Un proyecto académico con enfoque profesional para analizar procesos reales.":
      "An academic project with a professional approach for analyzing real processes.",
    "StatFlow CEP es un software estadístico de Control Estadístico de Procesos desarrollado como proyecto académico en la Universidad del Magdalena por estudiantes de Ingeniería Industrial. Está disponible como aplicación web en Shiny y como APK Android.":
      "StatFlow CEP is Statistical Process Control software developed as an academic project at Universidad del Magdalena by Industrial Engineering students. It is available as a Shiny web application and as an Android APK.",
    "Institución": "Institution",
    "Universidad del Magdalena": "Universidad del Magdalena",
    "Programa": "Program",
    "Ingeniería Industrial": "Industrial Engineering",
    "Plataformas": "Platforms",
    "Web Shiny + APK Android": "Shiny web + Android APK",
    "Módulos principales": "Main modules",
    "Herramientas para capacidad, normalidad, cartas, monitoreo e informes.":
      "Tools for capability, normality, charts, monitoring and reports.",
    "Análisis de capacidad": "Capability analysis",
    "Ingreso manual o por Excel. Diagnostica si el proceso es capaz, descentrado o no capaz, con lectura técnica de Cp, Cpk y PNC.":
      "Manual or Excel data entry. Diagnoses whether the process is capable, off-center or not capable, with technical reading of Cp, Cpk and PNC.",
    "Normalidad": "Normality",
    "Análisis de normalidad": "Normality analysis",
    "Incluye Shapiro-Wilk, Q-Q Plot y Boxplot para validar el comportamiento de los datos.":
      "Includes Shapiro-Wilk, Q-Q Plot and Boxplot to validate data behavior.",
    "Cartas de control": "Control charts",
    "Fase 1 y Fase 2 con detección automática de puntos fuera de control.":
      "Phase 1 and Phase 2 with automatic detection of out-of-control points.",
    "Monitoreo en tiempo real": "Real-time monitoring",
    "Simulador ajustable, visualización en Canvas JavaScript y modo operario para planta.":
      "Adjustable simulator, JavaScript Canvas visualization and operator mode for plant use.",
    "Informes empresariales": "Business reports",
    "Generador en 4 pasos con análisis por IA y exportación HTML, Excel y PDF.":
      "Four-step generator with AI analysis and HTML, Excel and PDF export.",
    "Historial de análisis": "Analysis history",
    "Resultados guardados para comparación, consulta posterior y descarga de evidencia.":
      "Saved results for comparison, later review and evidence download.",
    "Captura del módulo de análisis de capacidad": "Screenshot of the capability analysis module",
    "Captura del módulo de análisis de normalidad": "Screenshot of the normality analysis module",
    "Captura del módulo de cartas de control": "Screenshot of the control chart module",
    "Captura del monitoreo en tiempo real Fase 2": "Screenshot of Phase 2 real-time monitoring",
    "Captura del módulo de informes empresariales": "Screenshot of the business reports module",
    "Captura del historial de análisis": "Screenshot of the analysis history",
    "Abrir StatFlow CEP": "Open StatFlow CEP",
    "Formatos de captura": "Data collection templates",
    "Plantillas listas para registrar mediciones y cargar datos al análisis.":
      "Ready-to-use templates for recording measurements and loading data into the analysis.",
    "Descarga los formatos base, diligencia las mediciones del proceso y utiliza la información como insumo para los módulos de StatFlow CEP.":
      "Download the base templates, fill in process measurements and use the information as input for StatFlow CEP modules.",
    "Formato para toma de muestras": "Sampling data template",
    "Plantilla en Excel para organizar datos de proceso antes del análisis de capacidad, normalidad o cartas de control.":
      "Excel template for organizing process data before capability, normality or control chart analysis.",
    "Descargar formato": "Download template",
    "Aplicación Android": "Android application",
    "Archivo instalable para acceder a StatFlow CEP desde dispositivos móviles Android.":
      "Installable file for accessing StatFlow CEP from Android mobile devices.",
    "Descargar APK": "Download APK",
    "Uso recomendado": "Recommended use",
    "Conserva la estructura del archivo para evitar errores al importar datos. Puedes duplicarlo por proceso, línea, lote o periodo de medición.":
      "Keep the file structure to avoid errors when importing data. You may duplicate it by process, line, batch or measurement period.",
    "Video de presentación": "Presentation video",
    "Próximamente: una demostración guiada de StatFlow CEP.": "Coming soon: a guided demonstration of StatFlow CEP.",
    "Este espacio está reservado para anexar el video oficial del software: recorrido por módulos, carga de datos, interpretación de resultados y generación de informes.":
      "This space is reserved for the official software video: module walkthrough, data loading, result interpretation and report generation.",
    "Disponible próximamente": "Coming soon",
    "Recorrido por el panel principal y selección de módulos.": "Main dashboard walkthrough and module selection.",
    "Ejemplo de análisis CEP con datos reales del proceso.": "SPC analysis example using real process data.",
    "Generación de informes empresariales y exportación.": "Business report generation and export.",
    "Control estadístico para procesos industriales, servicios y formación académica.":
      "Statistical control for industrial processes, services and academic training.",
    "Manufactura": "Manufacturing",
    "Hotelería": "Hospitality",
    "Salud": "Healthcare",
    "Banca": "Banking",
    "Restaurantes": "Restaurants",
    "Call centers": "Call centers",
    "Educación": "Education",
    "Construcción": "Construction",
    "Caso aplicado": "Applied case",
    "Uso orientado al análisis de procesos productivos y seguimiento de variabilidad.":
      "Use focused on production process analysis and variability monitoring.",
    "En desarrollo": "In development",
    "Aplicación del enfoque CEP a indicadores de servicio y operación hotelera.":
      "Application of the SPC approach to service and hotel operation indicators.",
    "Diferencial": "Differentiators",
    "Un software accesible para aprender, documentar y operar análisis CEP.":
      "Accessible software for learning, documenting and operating SPC analysis.",
    "IA integrada para análisis técnicos": "Integrated AI for technical analysis",
    "Informes empresariales exportables": "Exportable business reports",
    "Modo operario para planta": "Operator mode for plant use",
    "No requiere instalar R": "No R installation required",
    "No requiere conocimientos estadísticos avanzados": "No advanced statistical knowledge required",
    "Gratuito para usuarios académicos": "Free for academic users",
    "Base multiidioma preparada": "Multilingual base ready",
    "Disponible como web y APK Android": "Available as web app and Android APK",
    "Equipo desarrollador": "Development team",
    "Proyecto construido desde Ingeniería Industrial con acompañamiento académico.":
      "A project built from Industrial Engineering with academic guidance.",
    "Líder del proyecto": "Project lead",
    "Octavo semestre": "Eighth semester",
    "Estudiante de Ingeniería Industrial y administrador de propiedades turísticas. Lidera la gestión integral del proyecto, responsable del diseño, programación e implementación en R Shiny.":
      "Industrial Engineering student and tourism property manager. Leads the overall project management and is responsible for design, programming and implementation in R Shiny.",
    "Diseño visual": "Visual design",
    "Noveno semestre": "Ninth semester",
    "Estudiante de Ingeniería Industrial. Encargada de la estética del software y apoyo en toma de decisiones durante el desarrollo del proyecto.":
      "Industrial Engineering student. Responsible for the software aesthetics and decision-making support during project development.",
    "Desarrollo y programación": "Development and programming",
    "Ingeniero de sistemas y estudiante de Ingeniería Industrial. Integra sus conocimientos en soluciones estadísticas aplicadas.":
      "Systems engineer and Industrial Engineering student. Integrates his knowledge into applied statistical solutions.",
    "Testing y metodología": "Testing and methodology",
    "Estudiante de Ingeniería Industrial. Apoya en diseño metodológico y pruebas del software.":
      "Industrial Engineering student. Supports methodological design and software testing.",
    "Tutor académico": "Academic advisor",
    "Ingeniero Industrial · Ph.D. en Estadística y Optimización": "Industrial Engineer · Ph.D. in Statistics and Optimization",
    "Ingeniero Industrial Â· Ph.D. en Estadística y Optimización": "Industrial Engineer · Ph.D. in Statistics and Optimization",
    "El software CEP cuenta con la orientación académica del Doctor Manuel J. Campuzano Hernández, docente de la Universidad del Magdalena vinculado al Programa de Ingeniería Industrial.":
      "The SPC software has the academic guidance of Dr. Manuel J. Campuzano Hernández, professor at Universidad del Magdalena and member of the Industrial Engineering Program.",
    "Acceso al aplicativo": "Application access",
    "Empieza a analizar tus procesos con StatFlow CEP": "Start analyzing your processes with StatFlow CEP",
    "El aplicativo real está desplegado en Shiny. Abre StatFlow CEP en una nueva pestaña para cargar datos, revisar módulos y generar resultados.":
      "The real application is deployed in Shiny. Open StatFlow CEP in a new tab to load data, review modules and generate results.",
    "Pantalla inicial del aplicativo StatFlow CEP": "Initial screen of the StatFlow CEP application",
    "Ingresar": "Open",
    "Contactar por WhatsApp": "Contact on WhatsApp",
    "Universidad del Magdalena · Ingeniería Industrial": "Universidad del Magdalena · Industrial Engineering",
    "Universidad del Magdalena Â· Ingeniería Industrial": "Universidad del Magdalena · Industrial Engineering",
    "© 2026 StatFlow CEP. Proyecto académico de Ingeniería Industrial.":
      "© 2026 StatFlow CEP. Industrial Engineering academic project.",
  },
};

const normalizedText = (value) => value.replace(/\s+/g, " ").trim();
const textNodes = [];
const translatedAttributes = [];

function collectTextNodes() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }

      const key = normalizedText(node.nodeValue);
      return TRANSLATIONS.en[key] ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    },
  });

  while (walker.nextNode()) {
    textNodes.push({
      node: walker.currentNode,
      original: walker.currentNode.nodeValue,
      key: normalizedText(walker.currentNode.nodeValue),
    });
  }

  document.querySelectorAll("[alt], [aria-label], [title]").forEach((element) => {
    ["alt", "aria-label", "title"].forEach((attribute) => {
      const original = element.getAttribute(attribute);
      if (!original) return;

      const key = normalizedText(original);
      if (!TRANSLATIONS.en[key]) return;

      translatedAttributes.push({ element, attribute, original, key });
    });
  });
}

function withOriginalSpacing(original, translated) {
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function setLanguage(lang) {
  const safeLang = lang === "en" ? "en" : "es";
  document.documentElement.lang = safeLang;
  document.body.dataset.lang = safeLang;
  document.title = PAGE_META[safeLang].title;

  updatePageMetadata(safeLang);

  textNodes.forEach(({ node, original, key }) => {
    const translated = safeLang === "en" ? TRANSLATIONS.en[key] : normalizedText(original);
    node.nodeValue = withOriginalSpacing(original, translated);
  });

  translatedAttributes.forEach(({ element, attribute, original, key }) => {
    element.setAttribute(attribute, safeLang === "en" ? TRANSLATIONS.en[key] : original);
  });

  if (languageToggle) {
    languageToggle.setAttribute(
      "aria-label",
      safeLang === "en" ? "Switch language to Spanish" : "Cambiar idioma a inglés"
    );
  }

  updateWhatsAppLinks(safeLang);
  localStorage.setItem("statflow-language", safeLang);
}

function setMetaContent(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", value);
}

function updatePageMetadata(lang) {
  const meta = PAGE_META[lang] ?? PAGE_META.es;

  setMetaContent('meta[name="description"]', meta.description);
  setMetaContent('meta[property="og:title"]', meta.title);
  setMetaContent('meta[property="og:description"]', meta.description);
  setMetaContent('meta[name="twitter:title"]', meta.title);
  setMetaContent('meta[name="twitter:description"]', meta.description);
  setMetaContent('meta[property="og:locale"]', lang === "en" ? "en_US" : "es_CO");
}

function updateWhatsAppLinks(lang = "es") {
  if (!whatsappButton && !whatsappFloat) return;

  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGES[lang] ?? WHATSAPP_MESSAGES.es);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  if (whatsappButton) whatsappButton.href = whatsappUrl;
  if (whatsappFloat) whatsappFloat.href = whatsappUrl;
}

collectTextNodes();
setLanguage(localStorage.getItem("statflow-language") === "en" ? "en" : "es");

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = document.body.dataset.lang === "en" ? "es" : "en";
    setLanguage(nextLanguage);
  });
}

function openShinyApp() {
  window.open(SHINY_APP_URL, "_blank", "noopener,noreferrer");
}

function closeMenu() {
  if (!navToggle || !navMenu) return;

  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("is-open");
}

function updateHeaderState() {
  if (!siteHeader) return;
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
}

shinyButtons.forEach((button) => {
  button.addEventListener("click", openShinyApp);
});

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a, button").forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
}

if (siteHeader) {
  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}

screenshotImages.forEach((image) => {
  const imageShell = image.closest(".screenshot__image");

  if (image.complete && image.naturalWidth === 0) {
    imageShell?.classList.add("is-missing");
  }

  image.addEventListener("load", () => {
    imageShell?.classList.remove("is-missing");
  });

  image.addEventListener("error", () => {
    imageShell?.classList.add("is-missing");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 36, 180)}ms`;
  revealObserver.observe(element);
});
