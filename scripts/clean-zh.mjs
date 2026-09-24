import { readFileSync, writeFileSync } from "fs";
const p = "i18n/zh.json";
const d = JSON.parse(readFileSync(p, "utf8"));
const bad = Object.keys(d).filter((k) => k.includes("医ицинское"));
for (const k of bad) delete d[k];
writeFileSync(p, JSON.stringify(d, null, 0).replaceAll('","', '",\n"'), "utf8");
console.log("removed:", bad.length);
