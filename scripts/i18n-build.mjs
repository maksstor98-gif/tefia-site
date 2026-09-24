// Собирает языковые версии сайта: kz/, en/, zh/ из русских страниц + словарей i18n/*.json
import { readFileSync, writeFileSync, mkdirSync } from "fs";

const PAGES = ["index.html","about.html","doctors.html","services.html","donors.html","surrogacy.html","genetics.html","cryobank.html","international.html","news.html","contacts.html"];
const LANGS = [
  { dir: "kz", html: "kk", dict: "i18n/kz.json" },
  { dir: "en", html: "en", dict: "i18n/en.json" },
  { dir: "zh", html: "zh-CN", dict: "i18n/zh.json" },
];
const BASE = "https://maksstor98-gif.github.io/tefia-site/";
const CYR = /[а-яА-ЯёЁіІңҢғҒүҮұҰқҚөӨһҺәӘ]/;

function hreflangBlock(file) {
  return [
    `<link rel="alternate" hreflang="ru" href="${BASE}${file}">`,
    `<link rel="alternate" hreflang="kk" href="${BASE}kz/${file}">`,
    `<link rel="alternate" hreflang="en" href="${BASE}en/${file}">`,
    `<link rel="alternate" hreflang="zh" href="${BASE}zh/${file}">`,
    `<link rel="alternate" hreflang="x-default" href="${BASE}${file}">`,
  ].join("\n");
}

let totalMisses = 0;

for (const lang of LANGS) {
  const dict = JSON.parse(readFileSync(lang.dict, "utf8"));
  const misses = new Set();
  mkdirSync(lang.dir, { recursive: true });

  for (const page of PAGES) {
    let html = readFileSync(page, "utf8");

    // текстовые сегменты между тегами
    html = html.replace(/>([^<>]+)</g, (m, seg) => {
      const t = seg.trim();
      if (!t || !CYR.test(t)) return m;
      const tr = dict[t];
      if (tr === undefined) { misses.add(t); return m; }
      return ">" + seg.replace(t, () => tr) + "<";
    });

    // переводимые атрибуты
    html = html.replace(/(content|title|alt|aria-label|placeholder)="([^"]+)"/g, (m, attr, val) => {
      if (!CYR.test(val)) return m;
      const tr = dict[val.trim()];
      if (tr === undefined) { misses.add(val.trim()); return m; }
      return `${attr}="${tr}"`;
    });

    html = html.replace('<html lang="ru">', `<html lang="${lang.html}">`);
    html = html
      .replace(/href="css\//g, 'href="../css/')
      .replace(/src="js\//g, 'src="../js/')
      .replace(/src="assets\//g, 'src="../assets/')
      .replace(/href="assets\//g, 'href="../assets/');
    html = html.replace(/<body data-page="([^"]+)">/, `<body data-page="$1" data-lang="${lang.dir}" data-root="../">`);
    html = html.replace("</head>", hreflangBlock(page) + "\n</head>");

    writeFileSync(`${lang.dir}/${page}`, html, "utf8");
  }

  if (misses.size) {
    totalMisses += misses.size;
    console.log(`\n[${lang.dir}] НЕ ПЕРЕВЕДЕНО ${misses.size}:`);
    for (const s of misses) console.log("  - " + s.slice(0, 90));
  } else {
    console.log(`[${lang.dir}] ok — все строки переведены`);
  }
}

// hreflang для русских страниц (идемпотентно)
for (const page of PAGES) {
  let html = readFileSync(page, "utf8");
  if (!html.includes('hreflang="ru"')) {
    html = html.replace("</head>", hreflangBlock(page) + "\n</head>");
    writeFileSync(page, html, "utf8");
  }
}

console.log(totalMisses ? `\nИТОГО пропусков: ${totalMisses}` : "\nСборка чистая.");
