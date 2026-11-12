/*
 * Dane przedmiotów — eksport z arkusza dziekanatu (karty przedmiotów, semestr zimowy).
 * UWAGA: część godzin przyszła z Excela jako tekst (np. "15", "7,5").
 * Nie zmieniaj tych danych bez wyraźnej prośby: to "prawdziwy" eksport, z którym aplikacja
 * ma sobie poradzić.
 *
 * kategoria: "kontaktowe" = zajęcia z bezpośrednim udziałem prowadzącego
 *            "wlasna"     = praca własna studenta
 */
globalThis.PRZEDMIOTY = [
  {
    kod: "LOG-DYS",
    nazwa: "Logistyka dystrybucji",
    ects: 5,
    aktywnosci: [
      { forma: "Wykład", kategoria: "kontaktowe", godziny: 30 },
      { forma: "Ćwiczenia", kategoria: "kontaktowe", godziny: 30 },
      { forma: "Konsultacje", kategoria: "kontaktowe", godziny: 10 },
      { forma: "Egzamin", kategoria: "kontaktowe", godziny: 2 },
      { forma: "Przygotowanie do zajęć", kategoria: "wlasna", godziny: 30 },
      { forma: "Projekt zespołowy", kategoria: "wlasna", godziny: 25 },
      { forma: "Przygotowanie do egzaminu", kategoria: "wlasna", godziny: 13 }
    ]
  },
  {
    kod: "PZ-FIR",
    nazwa: "Podstawy zarządzania",
    ects: 4,
    aktywnosci: [
      { forma: "Wykład", kategoria: "kontaktowe", godziny: 15 },
      { forma: "Ćwiczenia", kategoria: "kontaktowe", godziny: "15" },
      { forma: "Konsultacje", kategoria: "kontaktowe", godziny: "7,5" },
      { forma: "Egzamin", kategoria: "kontaktowe", godziny: 2.5 },
      { forma: "Przygotowanie do ćwiczeń", kategoria: "wlasna", godziny: 30 },
      { forma: "Lektura", kategoria: "wlasna", godziny: "20" },
      { forma: "Przygotowanie do egzaminu", kategoria: "wlasna", godziny: 25 }
    ]
  },
  {
    kod: "ETY-BIZ",
    nazwa: "Etyka w biznesie",
    ects: 2,
    aktywnosci: [
      { forma: "Wykład", kategoria: "kontaktowe", godziny: 15 },
      { forma: "Przygotowanie do zajęć", kategoria: "wlasna", godziny: 20 },
      { forma: "Esej zaliczeniowy", kategoria: "wlasna", godziny: 15 }
    ]
  },
  {
    kod: "SEM-DYP",
    nazwa: "Seminarium dyplomowe",
    ects: 6,
    aktywnosci: [
      { forma: "Seminarium", kategoria: "kontaktowe", godziny: 30 },
      { forma: "Konsultacje z promotorem", kategoria: "kontaktowe", godziny: 10 },
      { forma: "Praca nad pracą dyplomową", kategoria: "wlasna", godziny: 75 },
      { forma: "Studia literaturowe", kategoria: "wlasna", godziny: 25 }
    ]
  },
  {
    kod: "TI-LAB",
    nazwa: "Technologie informacyjne",
    ects: 3,
    aktywnosci: [
      { forma: "Laboratorium", kategoria: "kontaktowe", godziny: 30 },
      { forma: "Przygotowanie do laboratoriów", kategoria: "wlasna", godziny: 40 },
      { forma: "Projekt indywidualny", kategoria: "wlasna", godziny: 30 }
    ]
  }
];
