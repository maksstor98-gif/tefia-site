// Переводит служебные URL (hreflang) со старой базы на боевой домен и генерирует sitemap.xml
import { readFileSync, writeFileSync, readdirSync } from "fs";

const OLD = "https://maksstor98-gif.github.io/tefia-site/";
const BASE = "https://tefia.kz/";
const PAGES = ["index.html","about.html","doctors.html","services.html","donors.html","surrogacy.html","genetics.html","cryobank.html","international.html","news.html","contacts.html"];
const DIRS = ["", "kz/", "en/", "zh/"];

let replaced = 0;
for (const dir of DIRS) {
  for (const page of PAGES) {
    const path = dir + page;
    let html = readFileSync(path, "utf8");
    if (html.includes(OLD)) {
      html = html.split(OLD).join(BASE);
      writeFileSync(path, html, "utf8");
      replaced++;
    }
  }
}

// sitemap.xml со всеми языковыми версиями
const today = new Date().toISOString().slice(0, 10);
const urls = [];
for (const dir of DIRS) {
  for (const page of PAGES) {
    const loc = BASE + (page === "index.html" && dir === "" ? "" : dir + page);
    urls.push(`  <url><loc>${loc}</loc><lastmod>${today}</lastmod></url>`);
  }
}
writeFileSync("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`, "utf8");

writeFileSync("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${BASE}sitemap.xml\n`, "utf8");

console.log("файлов с заменой базы:", replaced, "| sitemap:", urls.length, "URL");
