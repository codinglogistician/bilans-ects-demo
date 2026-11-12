/*
 * Bilans ECTS: logika obliczeń.
 * Plik działa w przeglądarce (index.html) i w Node (testy: node test/uruchom.js).
 */
(function (root) {
  const KONFIG = {
    godzinNaEcts: 25 // przelicznik przyjęty na uczelni
  };

  function sumaGodzin(aktywnosci) {
    let suma = 0;
    for (const a of aktywnosci) {
      suma = suma + a.godziny;
    }
    return suma;
  }

  function godzinyKontaktowe(aktywnosci) {
    return sumaGodzin(aktywnosci.filter((a) => a.kategoria === "kontaktowe"));
  }

  function godzinyWlasne(aktywnosci) {
    return sumaGodzin(aktywnosci.filter((a) => a.kategoria === "wlasna"));
  }

  function wyliczoneEcts(godziny) {
    return Math.floor(godziny / KONFIG.godzinNaEcts);
  }

  function formatujGodziny(godziny) {
    return String(godziny).replace(".", ",");
  }

  function sprawdzBilans(przedmiot) {
    const suma = sumaGodzin(przedmiot.aktywnosci);
    const wymagane = przedmiot.ects * KONFIG.godzinNaEcts;
    if (suma === wymagane) {
      return {
        status: "ok",
        komunikat: "Bilans zgodny: " + formatujGodziny(suma) + " h = " + przedmiot.ects + " ECTS."
      };
    }
    return {
      status: "blad",
      komunikat:
        "Bilans niezgodny: " + formatujGodziny(suma) + " h, a dla " + przedmiot.ects +
        " ECTS wymagane jest " + wymagane + " h."
    };
  }

  root.ECTS = {
    KONFIG,
    sumaGodzin,
    godzinyKontaktowe,
    godzinyWlasne,
    wyliczoneEcts,
    formatujGodziny,
    sprawdzBilans
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
