/*
 * Testy logiki ECTS. Dopisuj nowe testy na końcu pliku.
 * Uruchamianie: node test/uruchom.js   albo otwórz test/testy.html w przeglądarce.
 */
(function () {
  const { test, rowne } = MiniTest;
  const blad = (fn) => { try { fn(); } catch (e) { return e.message; } return null; };
  const znajdz = (kod) => PRZEDMIOTY.find((p) => p.kod === kod);

  test("Logistyka dystrybucji: suma godzin = 140", () => {
    rowne(ECTS.sumaGodzin(znajdz("LOG-DYS").aktywnosci), 140);
  });

  test("Logistyka dystrybucji: godziny kontaktowe = 72", () => {
    rowne(ECTS.godzinyKontaktowe(znajdz("LOG-DYS").aktywnosci), 72);
  });

  test("Etyka w biznesie: suma godzin = 50", () => {
    rowne(ECTS.sumaGodzin(znajdz("ETY-BIZ").aktywnosci), 50);
  });

  test("Etyka w biznesie: bilans zgodny (50 h, 2 ECTS)", () => {
    rowne(ECTS.sprawdzBilans(znajdz("ETY-BIZ")).status, "ok");
  });

  test("Technologie informacyjne: bilans niezgodny (100 h to za dużo na 3 ECTS)", () => {
    rowne(ECTS.sprawdzBilans(znajdz("TI-LAB")).status, "blad");
  });

  test("formatujGodziny: 7.5 → \"7,5\"", () => {
    rowne(ECTS.formatujGodziny(7.5), "7,5");
  });

  test("Podstawy zarządzania: razem 115 h, kontaktowe 40 h, praca własna 75 h", () => {
    const a = znajdz("PODST-ZARZ") ? znajdz("PODST-ZARZ").aktywnosci
      : PRZEDMIOTY.find((p) => p.nazwa === "Podstawy zarządzania").aktywnosci;
    rowne(ECTS.sumaGodzin(a), 115);
    rowne(ECTS.godzinyKontaktowe(a), 40);
    rowne(ECTS.godzinyWlasne(a), 75);
  });

  test("parsujGodziny: tekst \"15\" i \"7,5\" liczą się poprawnie", () => {
    rowne(ECTS.parsujGodziny("15", "x"), 15);
    rowne(ECTS.parsujGodziny("7,5", "x"), 7.5);
  });

  test("parsujGodziny: \"\" i \"dwa\" dają komunikat z nazwą formy", () => {
    const m1 = blad(() => ECTS.sumaGodzin([{ forma: "Lektura", kategoria: "wlasna", godziny: "" }]));
    const m2 = blad(() => ECTS.sumaGodzin([{ forma: "Konsultacje", kategoria: "kontaktowe", godziny: "dwa" }]));
    rowne(m1 !== null && m1.includes("Lektura"), true);
    rowne(m2 !== null && m2.includes("Konsultacje"), true);
  });
})();
