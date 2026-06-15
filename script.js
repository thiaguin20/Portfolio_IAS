const DEFAULT_LANG = "pt";
const WHATSAPP_NUMBER = "5518996164798";
const LIKES_STORAGE_KEY = "thdev-livefx-video-likes";
const LIKES_COOKIE_KEY = "thdev_livefx_video_likes";

const I18N = {
  pt: {
    htmlLang: "pt-BR",
    documentTitle: "THDEV LiveFX | Efeitos e Vídeos com IA para Lives",
    metaDescription: "Produção de efeitos e vídeos com IA para lives, com foco em TikTok Live Studio e OBS.",
    gateEyebrow: "Selecionar idioma",
    gateTitle: "Como você deseja navegar no site?",
    gateText: "Português já está pré-selecionado.",
    langLabelPt: "Português",
    langLabelEs: "Español",
    langLabelEn: "English",
    enterSiteBtn: "Entrar no site",
    navServices: "Serviços",
    navPortfolio: "Portfólio",
    navProcess: "Processo",
    navContact: "Contato",
    headerBudgetBtn: "Solicitar orçamento",
    heroEyebrow: "Produção visual para lives profissionais",
    heroTitle: "Sua live com <span>padrão de marca</span>, pronta para converter audiência.",
    heroText:
      "Desenvolvemos vídeos com IA, overlays e efeitos de interação em formato vertical 9:16, com foco em desempenho visual no TikTok Live Studio e no OBS.",
    heroPrimaryBtn: "Solicitar meu vídeo",
    heroSecondaryBtn: "Ver portfólio",
    stat1Value: "24h-72h",
    stat1Label: "prazo médio de entrega",
    stat2Value: "Briefing guiado",
    stat2Label: "direção estratégica do visual",
    stat3Value: "TikTok + OBS",
    stat3Label: "compatibilidade validada",
    heroCaption: "Demonstração real aplicada em transmissão ao vivo.",
    servicesEyebrow: "Soluções",
    servicesTitle: "Serviços para creators, agências e marcas",
    service1Title: "Efeitos interativos para live",
    service1Text:
      "Produção de efeitos x2, x3, tap, heart-me, glove e popular com qualidade visual consistente para transmissões de alto impacto.",
    service2Title: "Vídeos com IA para abertura e transição",
    service2Text:
      "Criação de vídeos autorais para introdução, transições e momentos estratégicos da live, alinhados à identidade da sua operação.",
    service3Title: "Pacotes para cortes e redes sociais",
    service3Text:
      "Entrega de materiais adaptados para TikTok, Reels e Shorts, mantendo unidade visual entre live e conteúdo de distribuição.",
    portfolioEyebrow: "Resultados",
    portfolioTitle: "Portfólio de efeitos e vídeos em produção real",
    portfolioHelper:
      "Efeitos prontos para OBS, com foco principal em TikTok Live Studio. Selecione a categoria e clique para ampliar.",
    processEyebrow: "Processo",
    processTitle: "Fluxo de produção",
    processStep1: "Você envia briefing, referências e objetivo da live.",
    processStep2: "Nossa equipe estrutura a direção visual e apresenta a primeira versão.",
    processStep3: "Ajustamos os detalhes e entregamos arquivos finais prontos para TikTok Live Studio e OBS.",
    ctaEyebrow: "Contato",
    ctaTitle: "Vamos produzir o visual da sua próxima live?",
    ctaText:
      "Fale com a THDEV LiveFX e receba uma proposta com escopo, prazo e investimento adequados ao seu projeto.",
    ctaWhatsappBtn: "Falar no WhatsApp",
    ctaEmailBtn: "Enviar e-mail",
    footerTextSuffix: "THDEV LiveFX. Todos os direitos reservados.",
    modalClose: "Fechar",
    modalTitle: "Visualização",
    modalAriaClose: "Fechar visualização",
    categoryVideosIa: "Vídeos IA",
    categoryX2: "X2",
    categoryX3: "X3",
    categoryTap: "Tap",
    categoryHeartMe: "Heart-me",
    categoryGlove: "Glove",
    categoryPopular: "Popular",
    videoZoom: "Ver maior",
    likeAria: "Curtir vídeo",
    videoNoTitle: "Vídeo sem título",
    videoDescSolid: "Vídeo com IA para composição de cena e narrativa visual.",
    videoDescAlpha: "Efeito com transparência para integração direta na live.",
    placeholderSlot: "espaço",
    placeholderWaiting: "Aguardando arquivo em",
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para um vídeo personalizado para minha live.",
    portfolioTabAria: "Tipos de efeito e vídeos",
  },
  es: {
    htmlLang: "es",
    documentTitle: "THDEV LiveFX | Efectos y Videos con IA para Lives",
    metaDescription: "Producción de efectos y videos con IA para lives, con enfoque en TikTok Live Studio y OBS.",
    gateEyebrow: "Seleccionar idioma",
    gateTitle: "¿Cómo deseas navegar en el sitio?",
    gateText: "Portugués ya está preseleccionado.",
    langLabelPt: "Português",
    langLabelEs: "Español",
    langLabelEn: "English",
    enterSiteBtn: "Entrar al sitio",
    navServices: "Servicios",
    navPortfolio: "Portafolio",
    navProcess: "Proceso",
    navContact: "Contacto",
    headerBudgetBtn: "Solicitar cotización",
    heroEyebrow: "Producción visual para lives profesionales",
    heroTitle: "Tu live con <span>estándar de marca</span>, lista para convertir audiencia.",
    heroText:
      "Desarrollamos videos con IA, overlays y efectos de interacción en formato vertical 9:16, con enfoque en rendimiento visual para TikTok Live Studio y OBS.",
    heroPrimaryBtn: "Solicitar mi video",
    heroSecondaryBtn: "Ver portafolio",
    stat1Value: "24h-72h",
    stat1Label: "tiempo promedio de entrega",
    stat2Value: "Briefing guiado",
    stat2Label: "dirección visual estratégica",
    stat3Value: "TikTok + OBS",
    stat3Label: "compatibilidad validada",
    heroCaption: "Demostración real aplicada en transmisión en vivo.",
    servicesEyebrow: "Soluciones",
    servicesTitle: "Servicios para creators, agencias y marcas",
    service1Title: "Efectos interactivos para live",
    service1Text:
      "Producción de efectos x2, x3, tap, heart-me, glove y popular con calidad visual consistente para transmisiones de alto impacto.",
    service2Title: "Videos con IA para apertura y transición",
    service2Text:
      "Creación de videos originales para apertura, transiciones y momentos clave de la live, alineados con la identidad de tu operación.",
    service3Title: "Paquetes para clips y redes sociales",
    service3Text:
      "Entrega de materiales adaptados para TikTok, Reels y Shorts, manteniendo coherencia visual entre la live y el contenido de distribución.",
    portfolioEyebrow: "Resultados",
    portfolioTitle: "Portafolio de efectos y videos en producción real",
    portfolioHelper:
      "Efectos listos para OBS, con foco principal en TikTok Live Studio. Selecciona la categoría y haz clic para ampliar.",
    processEyebrow: "Proceso",
    processTitle: "Flujo de producción",
    processStep1: "Envías briefing, referencias y objetivo de la live.",
    processStep2: "Nuestro equipo estructura la dirección visual y presenta la primera versión.",
    processStep3: "Ajustamos los detalles y entregamos archivos finales listos para TikTok Live Studio y OBS.",
    ctaEyebrow: "Contacto",
    ctaTitle: "¿Produzcamos el visual de tu próxima live?",
    ctaText:
      "Habla con THDEV LiveFX y recibe una propuesta con alcance, plazo e inversión adecuados para tu proyecto.",
    ctaWhatsappBtn: "Hablar por WhatsApp",
    ctaEmailBtn: "Enviar email",
    footerTextSuffix: "THDEV LiveFX. Todos los derechos reservados.",
    modalClose: "Cerrar",
    modalTitle: "Visualización",
    modalAriaClose: "Cerrar visualización",
    categoryVideosIa: "Videos IA",
    categoryX2: "X2",
    categoryX3: "X3",
    categoryTap: "Tap",
    categoryHeartMe: "Heart-me",
    categoryGlove: "Glove",
    categoryPopular: "Popular",
    videoZoom: "Ver más grande",
    likeAria: "Me gusta el video",
    videoNoTitle: "Video sin título",
    videoDescSolid: "Video con IA para composición de escena y narrativa visual.",
    videoDescAlpha: "Efecto con transparencia para integración directa en la live.",
    placeholderSlot: "espacio",
    placeholderWaiting: "Esperando archivo en",
    whatsappMessage: "¡Hola! Me gustaría solicitar una cotización para un video personalizado para mi transmisión en vivo.",
    portfolioTabAria: "Tipos de efecto y videos",
  },
  en: {
    htmlLang: "en",
    documentTitle: "THDEV LiveFX | AI Effects and Videos for Live Streams",
    metaDescription: "AI effects and video production for live streams, focused on TikTok Live Studio and OBS.",
    gateEyebrow: "Select language",
    gateTitle: "How would you like to browse the site?",
    gateText: "Portuguese is preselected by default.",
    langLabelPt: "Português",
    langLabelEs: "Español",
    langLabelEn: "English",
    enterSiteBtn: "Enter site",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navProcess: "Process",
    navContact: "Contact",
    headerBudgetBtn: "Request quote",
    heroEyebrow: "Visual production for professional live streams",
    heroTitle: "Your live stream with <span>brand-grade visuals</span>, built to convert audience.",
    heroText:
      "We develop AI videos, overlays and interaction effects in 9:16 vertical format, focused on visual performance for TikTok Live Studio and OBS.",
    heroPrimaryBtn: "Request my video",
    heroSecondaryBtn: "View portfolio",
    stat1Value: "24h-72h",
    stat1Label: "average delivery time",
    stat2Value: "Guided briefing",
    stat2Label: "strategic visual direction",
    stat3Value: "TikTok + OBS",
    stat3Label: "validated compatibility",
    heroCaption: "Real-world demo applied in live broadcast.",
    servicesEyebrow: "Solutions",
    servicesTitle: "Services for creators, agencies and brands",
    service1Title: "Interactive live effects",
    service1Text:
      "Production of x2, x3, tap, heart-me, glove and popular effects with consistent visual quality for high-impact live streams.",
    service2Title: "AI videos for intros and transitions",
    service2Text:
      "Original video creation for intros, transitions and key live moments, aligned with your operation's visual identity.",
    service3Title: "Packages for clips and social media",
    service3Text:
      "Assets delivered for TikTok, Reels and Shorts, keeping visual consistency across live streaming and distribution content.",
    portfolioEyebrow: "Results",
    portfolioTitle: "Portfolio of effects and videos in real production",
    portfolioHelper:
      "Effects are ready for OBS, with primary focus on TikTok Live Studio. Select a category and click to enlarge.",
    processEyebrow: "Process",
    processTitle: "Production workflow",
    processStep1: "You send briefing, references and live stream goals.",
    processStep2: "Our team builds the visual direction and presents the first version.",
    processStep3: "We refine details and deliver final files ready for TikTok Live Studio and OBS.",
    ctaEyebrow: "Contact",
    ctaTitle: "Let's produce the visual identity of your next live stream?",
    ctaText:
      "Talk to THDEV LiveFX and receive a proposal with scope, timeline and investment aligned with your project.",
    ctaWhatsappBtn: "Chat on WhatsApp",
    ctaEmailBtn: "Send email",
    footerTextSuffix: "THDEV LiveFX. All rights reserved.",
    modalClose: "Close",
    modalTitle: "Preview",
    modalAriaClose: "Close preview",
    categoryVideosIa: "AI Videos",
    categoryX2: "X2",
    categoryX3: "X3",
    categoryTap: "Tap",
    categoryHeartMe: "Heart-me",
    categoryGlove: "Glove",
    categoryPopular: "Popular",
    videoZoom: "View larger",
    likeAria: "Like video",
    videoNoTitle: "Untitled video",
    videoDescSolid: "AI video for scene composition and visual storytelling.",
    videoDescAlpha: "Transparent effect for direct live integration.",
    placeholderSlot: "slot",
    placeholderWaiting: "Waiting for file in",
    whatsappMessage: "Hello! I would like to request a quote for a custom video for my live stream.",
    portfolioTabAria: "Effect and video categories",
  },
};

const portfolioCategories = [
  { id: "videos-ia", folder: "output/videos-ia", labelKey: "categoryVideosIa" },
  { id: "x2", folder: "output/x2", labelKey: "categoryX2" },
  { id: "x3", folder: "output/x3", labelKey: "categoryX3" },
  { id: "tap", folder: "output/tap", labelKey: "categoryTap" },
  { id: "heart-me", folder: "output/heart-me", labelKey: "categoryHeartMe" },
  { id: "glove", folder: "output/glove", labelKey: "categoryGlove" },
  { id: "popular", folder: "output/popular", labelKey: "categoryPopular" },
];

const emptyLibrary = {
  "videos-ia": [],
  x2: [],
  x3: [],
  tap: [],
  "heart-me": [],
  glove: [],
  popular: [],
};

let portfolioLibrary = structuredClone(emptyLibrary);
let currentLanguage = DEFAULT_LANG;
let activeCategory = portfolioCategories[0].id;
let videoLikes = loadLikes();

const tabsContainer = document.getElementById("portfolioTabs");
const gridContainer = document.getElementById("portfolioGrid");
const modalElement = document.getElementById("videoModal");
const modalVideo = document.getElementById("videoModalPlayer");
const modalTitle = document.getElementById("videoModalTitle");
const modalCloseButton = document.getElementById("videoModalClose");
const modalDialog = modalElement ? modalElement.querySelector(".video-modal-dialog") : null;
const languageGate = document.getElementById("languageGate");
const languageForm = document.getElementById("languageForm");
const heroPrimaryBtn = document.getElementById("heroPrimaryBtn");
const ctaWhatsappBtn = document.getElementById("ctaWhatsappBtn");

function getLangPack(lang) {
  return I18N[lang] || I18N[DEFAULT_LANG];
}

function t(key) {
  const pack = getLangPack(currentLanguage);
  return pack[key] || I18N[DEFAULT_LANG][key] || key;
}

function setText(id, key) {
  const element = document.getElementById(id);
  if (!element) return;
  element.textContent = t(key);
}

function setHTML(id, key) {
  const element = document.getElementById(id);
  if (!element) return;
  element.innerHTML = t(key);
}

function getCategoryLabel(category) {
  return t(category.labelKey);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getCookieValue(name) {
  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${name}=`));
  return cookie ? cookie.slice(name.length + 1) : "";
}

function loadLikes() {
  const candidates = [];

  try {
    if (window.localStorage) {
      candidates.push(window.localStorage.getItem(LIKES_STORAGE_KEY));
    }
  } catch {
    // Some embedded browsers block localStorage. Cookies handle persistence there.
  }

  candidates.push(getCookieValue(LIKES_COOKIE_KEY));

  for (const candidate of candidates) {
    if (!candidate) continue;
    try {
      const parsedLikes = JSON.parse(decodeURIComponent(candidate));
      if (parsedLikes && typeof parsedLikes === "object") {
        return parsedLikes;
      }
    } catch {
      // Try the next persistence source.
    }
  }

  return {};
}

function saveLikes() {
  const serializedLikes = JSON.stringify(videoLikes);

  try {
    if (window.localStorage) {
      window.localStorage.setItem(LIKES_STORAGE_KEY, serializedLikes);
    }
  } catch {
    // Cookies below keep likes after refresh when localStorage is unavailable.
  }

  document.cookie = `${LIKES_COOKIE_KEY}=${encodeURIComponent(serializedLikes)}; max-age=31536000; path=/; SameSite=Lax`;
}

function getVideoLikes(src) {
  return Number(videoLikes[src] || 0);
}

function updateLikeButton(button, count) {
  if (!button) return;
  const countElement = button.querySelector("[data-like-count]");
  if (countElement) {
    countElement.textContent = count.toString();
  }
}

function incrementVideoLike(src) {
  if (!src) return 0;
  videoLikes[src] = getVideoLikes(src) + 1;
  saveLikes();
  return videoLikes[src];
}

function buildWhatsappUrl(lang) {
  const message = getLangPack(lang).whatsappMessage;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function updateWhatsappLinks() {
  const href = buildWhatsappUrl(currentLanguage);
  if (heroPrimaryBtn) heroPrimaryBtn.href = href;
  if (ctaWhatsappBtn) ctaWhatsappBtn.href = href;
}

function updateDocumentMeta() {
  const pack = getLangPack(currentLanguage);
  document.documentElement.lang = pack.htmlLang;
  document.title = pack.documentTitle;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", pack.metaDescription);
  }
}

function applyTranslations() {
  updateDocumentMeta();

  setText("gateEyebrow", "gateEyebrow");
  setText("gateTitle", "gateTitle");
  setText("gateText", "gateText");
  setText("langLabelPt", "langLabelPt");
  setText("langLabelEs", "langLabelEs");
  setText("langLabelEn", "langLabelEn");
  setText("enterSiteBtn", "enterSiteBtn");

  setText("navServices", "navServices");
  setText("navPortfolio", "navPortfolio");
  setText("navProcess", "navProcess");
  setText("navContact", "navContact");
  setText("headerBudgetBtn", "headerBudgetBtn");

  setText("heroEyebrow", "heroEyebrow");
  setHTML("heroTitle", "heroTitle");
  setText("heroText", "heroText");
  setText("heroPrimaryBtn", "heroPrimaryBtn");
  setText("heroSecondaryBtn", "heroSecondaryBtn");
  setText("stat1Value", "stat1Value");
  setText("stat1Label", "stat1Label");
  setText("stat2Value", "stat2Value");
  setText("stat2Label", "stat2Label");
  setText("stat3Value", "stat3Value");
  setText("stat3Label", "stat3Label");
  setText("heroCaption", "heroCaption");

  setText("servicesEyebrow", "servicesEyebrow");
  setText("servicesTitle", "servicesTitle");
  setText("service1Title", "service1Title");
  setText("service1Text", "service1Text");
  setText("service2Title", "service2Title");
  setText("service2Text", "service2Text");
  setText("service3Title", "service3Title");
  setText("service3Text", "service3Text");

  setText("portfolioEyebrow", "portfolioEyebrow");
  setText("portfolioTitle", "portfolioTitle");
  setText("portfolioHelper", "portfolioHelper");

  setText("processEyebrow", "processEyebrow");
  setText("processTitle", "processTitle");
  setText("processStep1", "processStep1");
  setText("processStep2", "processStep2");
  setText("processStep3", "processStep3");

  setText("ctaEyebrow", "ctaEyebrow");
  setText("ctaTitle", "ctaTitle");
  setText("ctaText", "ctaText");
  setText("ctaWhatsappBtn", "ctaWhatsappBtn");
  setText("ctaEmailBtn", "ctaEmailBtn");

  const footerText = document.getElementById("footerText");
  if (footerText) {
    footerText.innerHTML = `&copy; <span id="year"></span> ${escapeHtml(t("footerTextSuffix"))}`;
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }
  }

  if (modalCloseButton) {
    modalCloseButton.textContent = t("modalClose");
    modalCloseButton.setAttribute("aria-label", t("modalAriaClose"));
  }
  if (modalTitle) {
    modalTitle.textContent = t("modalTitle");
  }

  if (tabsContainer) {
    tabsContainer.setAttribute("aria-label", t("portfolioTabAria"));
  }

  updateWhatsappLinks();
}

function buildPlaceholderCards(category) {
  return [1, 2].map((slot) => ({
    title: `${getCategoryLabel(category)} - ${t("placeholderSlot")} ${slot}`,
    description: `${t("placeholderWaiting")} ${category.folder}`,
  }));
}

function isAlphaVideo(video) {
  if (video.background) {
    return video.background === "alpha";
  }
  return activeCategory !== "videos-ia";
}

function getVideoDescription(video) {
  return isAlphaVideo(video) ? t("videoDescAlpha") : t("videoDescSolid");
}

function renderTabs() {
  if (!tabsContainer) return;
  tabsContainer.innerHTML = portfolioCategories
    .map((category) => {
      const activeClass = category.id === activeCategory ? " is-active" : "";
      const label = escapeHtml(getCategoryLabel(category));
      return `
        <button class="portfolio-tab${activeClass}" type="button" data-category="${category.id}" role="tab" aria-selected="${category.id === activeCategory}">
          ${label}
        </button>
      `;
    })
    .join("");
}

function renderGrid() {
  if (!gridContainer) return;
  const currentCategory = portfolioCategories.find((category) => category.id === activeCategory);
  if (!currentCategory) return;

  const videos = portfolioLibrary[activeCategory] || [];
  const content =
    videos.length > 0
      ? videos
          .map((video) => {
            const src = escapeHtml(video.src || "");
            const alpha = isAlphaVideo(video);
            const alphaClass = alpha ? " is-alpha" : " is-solid";
            const likes = getVideoLikes(video.src || "");
            return `
              <article class="portfolio-card is-clickable${alphaClass}" data-src="${src}" data-alpha="${alpha ? "1" : "0"}" aria-label="${escapeHtml(t("modalTitle"))}">
                <div class="portfolio-frame">
                  <video src="${src}" autoplay muted loop playsinline preload="metadata" controlslist="nodownload noremoteplayback nofullscreen" disablepictureinpicture disableremoteplayback></video>
                  <button class="portfolio-like" type="button" data-like-src="${src}" aria-label="${escapeHtml(t("likeAria"))}">
                    <span aria-hidden="true">♥</span>
                    <strong data-like-count>${likes}</strong>
                  </button>
                  <button class="portfolio-zoom" type="button">${escapeHtml(t("videoZoom"))}</button>
                </div>
              </article>
            `;
          })
          .join("")
      : buildPlaceholderCards(currentCategory)
          .map(() => {
            return `
              <article class="portfolio-card">
                <div class="portfolio-frame">
                  <div class="portfolio-placeholder">9:16</div>
                </div>
              </article>
            `;
          })
          .join("");

  gridContainer.innerHTML = content;
  hardenVideos(gridContainer);
}

function openVideoModal(src, title, alpha) {
  if (!modalElement || !modalVideo || !src) return;
  modalTitle.textContent = t("modalTitle");
  modalVideo.src = src;
  hardenVideos(modalElement);
  if (modalDialog) {
    modalDialog.classList.toggle("is-alpha", Boolean(alpha));
  }
  modalElement.hidden = false;
  modalVideo.play().catch(() => {});
}

function closeVideoModal() {
  if (!modalElement || !modalVideo) return;
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();
  if (modalDialog) {
    modalDialog.classList.remove("is-alpha");
  }
  modalElement.hidden = true;
}

async function loadManifest() {
  try {
    const response = await fetch("./output/videos-manifest.json", { cache: "no-store" });
    if (!response.ok) return;
    const manifest = await response.json();
    if (!manifest || !manifest.categories) return;

    const nextLibrary = structuredClone(emptyLibrary);
    for (const category of portfolioCategories) {
      const items = manifest.categories[category.id];
      if (Array.isArray(items)) {
        nextLibrary[category.id] = items;
      }
    }
    portfolioLibrary = nextLibrary;
  } catch {
    // Keep placeholders when manifest is missing.
  }
}

function bindPortfolioEvents() {
  if (tabsContainer) {
    tabsContainer.addEventListener("click", (event) => {
      const tab = event.target.closest("[data-category]");
      if (!tab) return;
      activeCategory = tab.dataset.category;
      renderTabs();
      renderGrid();
    });
  }

  if (gridContainer) {
    gridContainer.addEventListener("click", (event) => {
      const likeButton = event.target.closest("[data-like-src]");
      if (likeButton) {
        event.preventDefault();
        event.stopPropagation();
        const count = incrementVideoLike(likeButton.dataset.likeSrc || "");
        updateLikeButton(likeButton, count);
        return;
      }

      const card = event.target.closest(".portfolio-card.is-clickable");
      if (!card) return;
      const alpha = card.dataset.alpha === "1";
      openVideoModal(card.dataset.src || "", t("modalTitle"), alpha);
    });
  }

  if (modalElement) {
    modalElement.addEventListener("click", (event) => {
      if (event.target.closest("[data-close-modal]")) {
        closeVideoModal();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalElement && !modalElement.hidden) {
      closeVideoModal();
    }
  });
}

function setLanguage(lang) {
  currentLanguage = I18N[lang] ? lang : DEFAULT_LANG;
  applyTranslations();
  renderTabs();
  renderGrid();
}

function initLanguageGate() {
  if (!languageGate || !languageForm) return;

  const input = languageForm.querySelector(`input[name="site-language"][value="${DEFAULT_LANG}"]`);
  if (input) input.checked = true;

  setLanguage(DEFAULT_LANG);
  document.body.classList.add("gate-open");

  languageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedInput = languageForm.querySelector("input[name='site-language']:checked");
    const selectedLang = selectedInput ? selectedInput.value : DEFAULT_LANG;
    setLanguage(selectedLang);
    languageGate.classList.add("is-hidden");
    document.body.classList.remove("gate-open");
  });
}

async function initPortfolio() {
  bindPortfolioEvents();
  renderTabs();
  renderGrid();
  await loadManifest();
  renderGrid();
}

function hardenVideos(scope = document) {
  const videos = scope.querySelectorAll("video");
  videos.forEach((video) => {
    video.setAttribute("controlslist", "nodownload noremoteplayback nofullscreen");
    video.setAttribute("disablepictureinpicture", "");
    video.setAttribute("disableremoteplayback", "");
    video.addEventListener("contextmenu", (event) => event.preventDefault());
  });
}

function bindProtectionEvents() {
  document.addEventListener("contextmenu", (event) => {
    if (event.target.closest("video, .portfolio-frame, .video-shell, .video-modal-frame")) {
      event.preventDefault();
    }
  });

  document.addEventListener("dragstart", (event) => {
    if (event.target.closest("video")) {
      event.preventDefault();
    }
  });
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal, .reveal-delay");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

initLanguageGate();
initPortfolio();
initReveal();
hardenVideos(document);
bindProtectionEvents();
