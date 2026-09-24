/* TEFIA Clinic — общая шапка и подвал для всех страниц v1.
   При переносе на Next.js этот файл превращается в компоненты Header/Footer. */

const WA_LINK = "https://wa.me/77765919991";
const PHONE = "+7 776 591 99 91";

const LOGO_MARK = `
<svg width="52" height="52" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <polygon points="50,10 15.4,30 15.4,70 50,90 84.6,70 84.6,30" stroke="#b0903f" stroke-width="2" fill="none"/>
  <polygon points="90,50 70,15.4 30,15.4 10,50 30,84.6 70,84.6" stroke="#c9ad63" stroke-width="1.6" fill="none"/>
  <path d="M22 26 Q30 14 44 12" stroke="#8a9a6b" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <ellipse cx="26" cy="21.5" rx="4.6" ry="2" fill="#8a9a6b" transform="rotate(-38 26 21.5)"/>
  <ellipse cx="33" cy="16.5" rx="4.6" ry="2" fill="#a9b78d" transform="rotate(-24 33 16.5)"/>
  <ellipse cx="41" cy="13.5" rx="4.4" ry="1.9" fill="#8a9a6b" transform="rotate(-12 41 13.5)"/>
  <path d="M78 74 Q70 86 56 88" stroke="#8a9a6b" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <ellipse cx="74" cy="78.5" rx="4.6" ry="2" fill="#8a9a6b" transform="rotate(-38 74 78.5)"/>
  <ellipse cx="67" cy="83.5" rx="4.6" ry="2" fill="#a9b78d" transform="rotate(-24 67 83.5)"/>
  <ellipse cx="59" cy="86.5" rx="4.4" ry="1.9" fill="#8a9a6b" transform="rotate(-12 59 86.5)"/>
  <text x="50" y="55" text-anchor="middle" font-family="Playfair Display, Georgia, serif" font-size="19" font-weight="600" letter-spacing="1.5" fill="#b0903f">TEFIA</text>
  <text x="50" y="66" text-anchor="middle" font-family="Manrope, sans-serif" font-size="6" letter-spacing="3" fill="#5f6f46">CLINIC</text>
</svg>`;

const NAV_ITEMS = [
  { href: "about.html", label: "О клинике", page: "about" },
  { href: "doctors.html", label: "Врачи", page: "doctors" },
  { href: "services.html", label: "Услуги", page: "services" },
  {
    label: "Программы", page: "programs",
    children: [
      { href: "donors.html", label: "Донорские программы", page: "donors" },
      { href: "surrogacy.html", label: "Суррогатное материнство", page: "surrogacy" },
      { href: "genetics.html", label: "Генетика и ПГТ", page: "genetics" },
      { href: "cryobank.html", label: "Криобанк и хранение", page: "cryobank" },
    ],
  },
  { href: "international.html", label: "Иностранным пациентам", page: "international" },
  { href: "news.html", label: "Новости", page: "news" },
  { href: "contacts.html", label: "Контакты", page: "contacts" },
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

const current = document.body.dataset.page || "";

document.getElementById("site-header").innerHTML = `
<div class="topbar">
  <div class="container">
    <div class="topbar-left">
      <span>&#128205; г. Алматы, ул. Жандосова, 96</span>
      <a href="tel:+77765919991">&#128222; ${PHONE}</a>
      <a href="https://instagram.com/tefia_clinic" target="_blank" rel="noopener">Instagram: @tefia_clinic</a>
    </div>
    <div class="lang" title="Языковые версии появятся в следующем релизе">
      <a href="#" class="active">RU</a><a href="#">KZ</a><a href="#">EN</a><a href="#">中文</a>
    </div>
  </div>
</div>
<header class="header">
  <div class="container">
    <a class="logo" href="index.html" aria-label="TEFIA Clinic — на главную">
      ${LOGO_MARK}
      <span class="logo-text">
        <span class="logo-name">TEFIA</span>
        <span class="logo-sub">Clinic &middot; ЭКО и ВРТ</span>
      </span>
    </a>
    <ul class="nav" id="main-nav">${buildNav(current)}</ul>
    <div class="header-cta">
      <a class="btn btn-gold" href="${WA_LINK}" target="_blank" rel="noopener">Записаться</a>
    </div>
    <button class="burger" id="burger" aria-label="Открыть меню">
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
            <span class="logo-sub">Clinic &middot; ЭКО и ВРТ</span>
          </span>
        </a>
        <p>Клиника ВРТ полного цикла в Алматы. Европейский подход к программам ЭКО, донорство, суррогатное материнство, генетика и криобанк.</p>
      </div>
      <div>
        <h4>Клиника</h4>
        <ul>
          <li><a href="about.html">О клинике</a></li>
          <li><a href="doctors.html">Врачи</a></li>
          <li><a href="services.html">Услуги и цены</a></li>
          <li><a href="news.html">Новости и блог</a></li>
          <li><a href="international.html">Иностранным пациентам</a></li>
        </ul>
      </div>
      <div>
        <h4>Программы</h4>
        <ul>
          <li><a href="donors.html">Донорские программы</a></li>
          <li><a href="surrogacy.html">Суррогатное материнство</a></li>
          <li><a href="genetics.html">Генетика и ПГТ</a></li>
          <li><a href="cryobank.html">Криобанк и хранение</a></li>
        </ul>
      </div>
      <div>
        <h4>Контакты</h4>
        <ul>
          <li>г. Алматы, ул. Жандосова, 96</li>
          <li><a href="tel:+77765919991">${PHONE}</a></li>
          <li><a href="${WA_LINK}" target="_blank" rel="noopener">WhatsApp</a></li>
          <li><a href="https://instagram.com/tefia_clinic" target="_blank" rel="noopener">@tefia_clinic</a></li>
          <li>Ежедневно 9:00 &ndash; 18:00</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 Медицинский центр &laquo;TEFIA CLINIC&raquo;. Все права защищены.</span>
      <span>Имеются противопоказания. Необходима консультация специалиста.</span>
    </div>
  </div>
</footer>
<a class="wa-float" href="${WA_LINK}" target="_blank" rel="noopener" aria-label="Написать в WhatsApp">
  <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.1c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.1.1.3 0 .5s-.2.3-.3.5l-.5.6c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.9.9 2.2 1.1.3.2.5.2.6.4 0 .1 0 .7-.2 1.4Z"/></svg>
</a>`;

document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("main-nav").classList.toggle("open");
});
