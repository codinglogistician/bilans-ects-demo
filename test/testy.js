/*
 * Testy logiki ECTS. Dopisuj nowe testy na końcu pliku.
 * Uruchamianie: node test/uruchom.js   albo otwórz test/testy.html w przeglądarce.
 */
(function () {
  const { test, rowne } = MiniTest;
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
})();
