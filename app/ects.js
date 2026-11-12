/*
 * Bilans ECTS: logika obliczeń.
 * Plik działa w przeglądarce (index.html) i w Node (testy: node test/uruchom.js).
 */
(function (root) {
  const KONFIG = {
    godzinNaEcts: 25 // przelicznik przyjęty na uczelni
  };

  // Zamienia godziny (liczba albo tekst z Excela, np. "15", "7,5") na liczbę.
  // Gdy się nie da, rzuca błąd z nazwą formy aktywności.
  function parsujGodziny(wartosc, forma) {
    let liczba = NaN;
    if (typeof wartosc === "number") {
      liczba = wartosc;
    } else if (typeof wartosc === "string" && wartosc.trim() !== "") {
      const tekst = wartosc.trim().replace(",", ".");
      if (/^\d+(\.\d+)?$/.test(tekst)) liczba = Number(tekst);
    }
    if (!Number.isFinite(liczba) || liczba < 0) {
      throw new Error(
        "Nie można odczytać godzin dla formy „" + forma + "”: " +
        (wartosc === "" ? "pusta wartość" : "„" + wartosc + "”") + "."
      );
    }
    return liczba;
  }

  function sumaGodzin(aktywnosci) {
    let suma = 0;
    for (const a of aktywnosci) {
      suma = suma + parsujGodziny(a.godziny, a.forma);
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
    parsujGodziny,
    sumaGodzin,
    godzinyKontaktowe,
    godzinyWlasne,
    wyliczoneEcts,
    formatujGodziny,
    sprawdzBilans
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
