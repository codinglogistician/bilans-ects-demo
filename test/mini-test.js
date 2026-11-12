/*
 * Mini-test: najprostszy możliwy "framework" testów, bez instalowania czegokolwiek.
 * Działa w przeglądarce (test/testy.html) i w Node (node test/uruchom.js).
 */
(function (root) {
  const wyniki = [];

  function test(nazwa, fn) {
    try {
      fn();
      wyniki.push({ nazwa, ok: true });
    } catch (e) {
      wyniki.push({ nazwa, ok: false, blad: e.message });
    }
  }

  function rowne(jest, oczekiwane, opis) {
    if (jest !== oczekiwane) {
      throw new Error((opis ? opis + ": " : "") + "oczekiwano " + JSON.stringify(oczekiwane) +
        ", jest " + JSON.stringify(jest));
    }
  }

  function prawda(warunek, opis) {
    if (!warunek) throw new Error(opis || "warunek niespełniony");
  }

  root.MiniTest = { test, rowne, prawda, wyniki };
})(typeof globalThis !== "undefined" ? globalThis : this);
