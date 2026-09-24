// Вытаскивает все переводимые строки из русских страниц в i18n/strings.json
import { readFileSync, writeFileSync, mkdirSync } from "fs";

const PAGES = ["index.html","about.html","doctors.html","services.html","donors.html","surrogacy.html","genetics.html","cryobank.html","international.html","news.html","contacts.html"];

const seen = new Map(); // строка -> [страницы]

function addSegment(s, page) {
  const t = s.trim();
  if (!t) return;
  if (!/[а-яА-ЯёЁіІңҢғҒүҮұҰқҚөӨһҺәӘ]/.test(t)) return; // только строки с кириллицей
  if (!seen.has(t)) seen.set(t, new Set());
  seen.get(t).add(page);
}

for (const page of PAGES) {
  const html = readFileSync(page, "utf8");
  // текст между тегами
  for (const m of html.matchAll(/>([^<>]+)</g)) addSegment(m[1], page);
  // переводимые атрибуты
  for (const m of html.matchAll(/(?:content|title|alt|aria-label|placeholder)="([^"]+)"/g)) addSegment(m[1], page);
}

const out = {};
for (const [str, pages] of seen) out[str] = { pages: [...pages] };
mkdirSync("i18n", { recursive: true });
writeFileSync("i18n/strings.json", JSON.stringify(out, null, 1), "utf8");
console.log("strings:", seen.size);
