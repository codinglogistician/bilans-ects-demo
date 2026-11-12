// Uruchamianie testów w Node: node test/uruchom.js
require("../app/dane.js");
require("../app/ects.js");
require("./mini-test.js");
require("./testy.js");

const wyniki = globalThis.MiniTest.wyniki;
let bledy = 0;
for (const w of wyniki) {
  if (w.ok) {
    console.log("  ✔ " + w.nazwa);
  } else {
    bledy++;
    console.log("  ✘ " + w.nazwa + "\n      " + w.blad);
  }
}
console.log("\n" + (wyniki.length - bledy) + "/" + wyniki.length + " testów zaliczonych");
process.exit(bledy > 0 ? 1 : 0);
