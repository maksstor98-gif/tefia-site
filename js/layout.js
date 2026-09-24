/* TEFIA Clinic — общая шапка и подвал для всех страниц и языков.
   Язык страницы задаётся <body data-lang="ru|kz|en|zh">, для подпапок data-root="../".
   При переносе на Next.js этот файл превращается в компоненты Header/Footer. */

const WA_LINK = "https://wa.me/77765919991";
const PHONE = "+7 776 591 99 91";

const LANG = document.body.dataset.lang || "ru";
const ROOT = document.body.dataset.root || "";

const LOGO_MARK = `<img class="logo-img" src="${ROOT}assets/logo-original.jpeg" alt="" width="60" height="60" loading="eager">`;

const I18N = {
  ru: {
    sub: "Clinic · ЭКО и ВРТ",
    address: "г. Алматы, ул. Жандосова, 96",
    book: "Записаться",
    nav: {
      about: "О клинике", doctors: "Врачи", services: "Услуги", programs: "Программы",
      donors: "Донорские программы", surrogacy: "Суррогатное материнство",
      genetics: "Генетика и ПГТ", cryobank: "Криобанк и хранение",
      international: "Иностранным пациентам", news: "Новости", contacts: "Контакты",
    },
    footerAbout: "Клиника ВРТ полного цикла в Алматы. Европейский подход к программам ЭКО, донорство, суррогатное материнство, генетика и криобанк.",
    colClinic: "Клиника", colPrograms: "Программы", colContacts: "Контакты",
    servicesPrices: "Услуги и цены", newsBlog: "Новости и блог",
    hours: "Ежедневно 9:00 – 18:00",
    rights: "© 2026 Медицинский центр «TEFIA CLINIC». Все права защищены.",
    disclaimer: "Имеются противопоказания. Необходима консультация специалиста.",
    waAria: "Написать в WhatsApp",
    langTitle: "Выбор языка",
  },
  kz: {
    sub: "Clinic · ЭКО және ҚРТ",
    address: "Алматы қ., Жандосов көшесі, 96",
    book: "Жазылу",
    nav: {
      about: "Клиника туралы", doctors: "Дәрігерлер", services: "Қызметтер", programs: "Бағдарламалар",
      donors: "Донорлық бағдарламалар", surrogacy: "Суррогат ана болу",
      genetics: "Генетика және ПГТ", cryobank: "Криобанк және сақтау",
      international: "Шетелдік пациенттерге", news: "Жаңалықтар", contacts: "Байланыс",
    },
    footerAbout: "Алматыдағы толық циклді ҚРТ клиникасы. ЭКО-ға еуропалық көзқарас, донорлық, суррогат ана болу, генетика және криобанк.",
    colClinic: "Клиника", colPrograms: "Бағдарламалар", colContacts: "Байланыс",
    servicesPrices: "Қызметтер мен бағалар", newsBlog: "Жаңалықтар мен блог",
    hours: "Күн сайын 9:00 – 18:00",
    rights: "© 2026 «TEFIA CLINIC» медициналық орталығы. Барлық құқықтар қорғалған.",
    disclaimer: "Қарсы көрсетілімдер бар. Маман консультациясы қажет.",
    waAria: "WhatsApp-қа жазу",
    langTitle: "Тіл таңдау",
  },
  en: {
    sub: "Clinic · IVF & ART",
    address: "96 Zhandosov St., Almaty",
    book: "Book a visit",
    nav: {
      about: "About us", doctors: "Doctors", services: "Services", programs: "Programs",
      donors: "Donor programs", surrogacy: "Surrogacy",
      genetics: "Genetics & PGT", cryobank: "Cryobank & storage",
      international: "International patients", news: "News", contacts: "Contact",
    },
    footerAbout: "Full-cycle fertility clinic in Almaty. European approach to IVF, donor programs, surrogacy, genetics, and cryobank.",
    colClinic: "Clinic", colPrograms: "Programs", colContacts: "Contact",
    servicesPrices: "Services & prices", newsBlog: "News & blog",
    hours: "Open daily 9:00 AM – 6:00 PM",
    rights: "© 2026 TEFIA CLINIC Medical Center. All rights reserved.",
    disclaimer: "Contraindications exist. Specialist consultation is required.",
    waAria: "Message us on WhatsApp",
    langTitle: "Choose language",
  },
  zh: {
    sub: "Clinic · 试管婴儿中心",
    address: "阿拉木图市Zhandosov街96号",
    book: "立即预约",
    nav: {
      about: "关于我们", doctors: "医生团队", services: "诊疗服务", programs: "项目",
      donors: "捐赠项目", surrogacy: "第三方辅助生育",
      genetics: "遗传学与PGT", cryobank: "冷冻库",
      international: "海外患者", news: "新闻", contacts: "联系我们",
    },
    footerAbout: "阿拉木图全周期辅助生殖中心。欧洲标准的试管婴儿、捐赠项目、第三方辅助生育、遗传学检测和冷冻库。",
    colClinic: "诊所", colPrograms: "项目", colContacts: "联系方式",
    servicesPrices: "服务与价格", newsBlog: "新闻与博客",
    hours: "每天9:00–18:00营业",
    rights: "© 2026 TEFIA CLINIC医疗中心。版权所有。",
    disclaimer: "本服务存在禁忌症，请务必咨询专科医生。",
    waAria: "WhatsApp联系我们",
    langTitle: "选择语言",
  },
};

const T = I18N[LANG] || I18N.ru;

const NAV_ITEMS = [
  { href: "about.html", label: T.nav.about, page: "about" },
  { href: "doctors.html", label: T.nav.doctors, page: "doctors" },
  { href: "services.html", label: T.nav.services, page: "services" },
  {
    label: T.nav.programs, page: "programs",
    children: [
      { href: "donors.html", label: T.nav.donors, page: "donors" },
      { href: "surrogacy.html", label: T.nav.surrogacy, page: "surrogacy" },
      { href: "genetics.html", label: T.nav.genetics, page: "genetics" },
      { href: "cryobank.html", label: T.nav.cryobank, page: "cryobank" },
    ],
  },
  { href: "international.html", label: T.nav.international, page: "international" },
  { href: "news.html", label: T.nav.news, page: "news" },
  { href: "contacts.html", label: T.nav.contacts, page: "contacts" },
];

function buildNav(current) {
  return NAV_ITEMS.map((item) => {
    if (item.children) {
      const childActive = item.children.some((c) => c.page === current);
      const links = item.children
        .map((c) => `<li><a href="${c.href}" class="${c.page === current ? "active" : ""}">${c.label}</a></li>`)
        .join("");
      return `<li>
        <a href="${item.children[0].href}" class="${childActive ? "active" : ""}">${item.label}<span class="caret">&#9662;</span></a>
        <ul class="dropdown">${links}</ul>
      </li>`;
    }
    return `<li><a href="${item.href}" class="${item.page === current ? "active" : ""}">${item.label}</a></li>`;
  }).join("");
}

/* Переключатель языков: та же страница в другой языковой папке */
function buildLangSwitcher() {
  const file = (location.pathname.split("/").pop() || "index.html");
  const langs = [
    { code: "ru", label: "RU", dir: "" },
    { code: "kz", label: "KZ", dir: "kz/" },
    { code: "en", label: "EN", dir: "en/" },
    { code: "zh", label: "中文", dir: "zh/" },
  ];
  return langs
    .map((l) => {
      const href = ROOT + l.dir + file;
      const cls = l.code === LANG ? "active" : "";
      return `<a href="${href}" class="${cls}" lang="${l.code}">${l.label}</a>`;
    })
    .join("");
}

const current = document.body.dataset.page || "";

document.getElementById("site-header").innerHTML = `
<div class="topbar">
  <div class="container">
    <div class="topbar-left">
      <span>&#128205; ${T.address}</span>
      <a href="tel:+77765919991">&#128222; ${PHONE}</a>
      <a href="https://instagram.com/tefia_clinic" target="_blank" rel="noopener">Instagram: @tefia_clinic</a>
    </div>
    <div class="lang" title="${T.langTitle}">${buildLangSwitcher()}</div>
  </div>
</div>
<header class="header">
  <div class="container">
    <a class="logo" href="index.html" aria-label="TEFIA Clinic">
      ${LOGO_MARK}
      <span class="logo-text">
        <span class="logo-name">TEFIA</span>
        <span class="logo-sub">${T.sub}</span>
      </span>
    </a>
    <ul class="nav" id="main-nav">${buildNav(current)}</ul>
    <div class="header-cta">
      <a class="btn btn-gold" href="${WA_LINK}" target="_blank" rel="noopener">${T.book}</a>
    </div>
    <button class="burger" id="burger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;

document.getElementById("site-footer").innerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="logo" href="index.html">
          ${LOGO_MARK}
          <span class="logo-text">
            <span class="logo-name">TEFIA</span>
            <span class="logo-sub">${T.sub}</span>
          </span>
        </a>
        <p>${T.footerAbout}</p>
      </div>
      <div>
        <h4>${T.colClinic}</h4>
        <ul>
          <li><a href="about.html">${T.nav.about}</a></li>
          <li><a href="doctors.html">${T.nav.doctors}</a></li>
          <li><a href="services.html">${T.servicesPrices}</a></li>
          <li><a href="news.html">${T.newsBlog}</a></li>
          <li><a href="international.html">${T.nav.international}</a></li>
        </ul>
      </div>
      <div>
        <h4>${T.colPrograms}</h4>
        <ul>
          <li><a href="donors.html">${T.nav.donors}</a></li>
          <li><a href="surrogacy.html">${T.nav.surrogacy}</a></li>
          <li><a href="genetics.html">${T.nav.genetics}</a></li>
          <li><a href="cryobank.html">${T.nav.cryobank}</a></li>
        </ul>
      </div>
      <div>
        <h4>${T.colContacts}</h4>
        <ul>
          <li>${T.address}</li>
          <li><a href="tel:+77765919991">${PHONE}</a></li>
          <li><a href="${WA_LINK}" target="_blank" rel="noopener">WhatsApp</a></li>
          <li><a href="https://instagram.com/tefia_clinic" target="_blank" rel="noopener">@tefia_clinic</a></li>
          <li>${T.hours}</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>${T.rights}</span>
      <span>${T.disclaimer}</span>
    </div>
  </div>
</footer>
<a class="wa-float" href="${WA_LINK}" target="_blank" rel="noopener" aria-label="${T.waAria}">
  <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.1c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.1.1.3 0 .5s-.2.3-.3.5l-.5.6c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.9.9 2.2 1.1.3.2.5.2.6.4 0 .1 0 .7-.2 1.4Z"/></svg>
</a>`;

document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("main-nav").classList.toggle("open");
});
