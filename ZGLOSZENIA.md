# Zgłoszenia: bilans-ects

Trzy zgłoszenia od „użytkowników” aplikacji. Każde zawiera objaw i kryteria akceptacji:
zgłoszenie jest zamknięte dopiero wtedy, gdy spełnione są **wszystkie** kryteria.

---

## Zgłoszenie #1 · Suma godzin to jakieś krzaki

**Zgłasza:** dziekanat (pani Ewa, „karty przedmiotów na wczoraj”)
**Typ:** błąd · **Priorytet:** wysoki

**Co widzę:** dla przedmiotu „Podstawy zarządzania” kafel „Razem godzin” pokazuje coś
w rodzaju `15157,52,5302025 h`. Kafle „Zajęcia kontaktowe” i „Praca własna” też wyglądają
dziwnie. Dla innych przedmiotów wszystko wygląda normalnie.

**Jak odtworzyć:** otwórz `app/index.html` w przeglądarce → wybierz „Podstawy zarządzania”.

**Podejrzenie dziekanatu:** „Dane są z Excela, część godzin może być zapisana jako tekst,
np. `"15"` albo `"7,5"`. Danych nie zmieniajcie, bo jutro przyjdzie kolejny eksport, taki sam”.

**Kryteria akceptacji:**
- [ ] „Podstawy zarządzania”: razem **115 h**, kontaktowe **40 h**, praca własna **75 h**
- [ ] godziny zapisane jako tekst (`"15"`) i z przecinkiem (`"7,5"`) liczą się poprawnie
- [ ] wartość, której nie da się odczytać jako liczbę (np. `""` albo `"dwa"`), nie daje
      „krzaków”, tylko czytelny komunikat z nazwą formy aktywności
- [ ] plik `app/dane.js` **nie jest zmieniony**
- [ ] dopisany co najmniej jeden test w `test/testy.js`; wszystkie testy przechodzą

---

## Zgłoszenie #2 · Fałszywy alarm przy poprawnym bilansie

**Zgłasza:** pełnomocnik dziekana ds. jakości kształcenia
**Typ:** błąd reguły biznesowej · **Priorytet:** wysoki

**Co widzę:** „Logistyka dystrybucji” (5 ECTS, 140 h) świeci na czerwono: „wymagane jest
125 h”. To nieprawda. Zgodnie z przepisami 1 punkt ECTS odpowiada **25–30 godzinom** pracy
studenta, więc dla 5 ECTS poprawny jest każdy bilans **od 125 do 150 h**. Aplikacja
wymaga trafienia dokładnie w 125 h i straszy prowadzących bez powodu.

**Kryteria akceptacji:**
- [ ] bilans jest zgodny, gdy suma godzin mieści się w przedziale
      `ECTS × 25` … `ECTS × 30` (obie granice włącznie)
- [ ] obie granice (25 i 30) są w `KONFIG`, nie „na sztywno” w kodzie: inna uczelnia może
      przyjąć inny przelicznik
- [ ] komunikat przy zbyt małej liczbie godzin mówi, **ile brakuje** do minimum,
      np. „Seminarium dyplomowe: brakuje 10 h do minimum 150 h dla 6 ECTS”
- [ ] komunikat przy zbyt dużej liczbie mówi, **o ile przekroczono** maksimum
- [ ] komunikat przy bilansie zgodnym podaje dopuszczalny przedział, np. „125–150 h”
- [ ] testy dla trzech sytuacji: w przedziale, poniżej, powyżej; plus test obu granic;
      wszystkie testy przechodzą

---

## Zgłoszenie #3 · „Kopiuj do karty przedmiotu”

**Zgłasza:** dr Anna K., prowadząca („przepisuję te liczby ręcznie do Worda, co semestr”)
**Typ:** nowa funkcja · **Priorytet:** średni

**Czego potrzebuję:** przycisku, który skopiuje gotowy tekst bilansu do schowka, tak żebym
mogła wkleić go prosto do karty przedmiotu w Wordzie.

**Oczekiwany tekst** (dla „Logistyki dystrybucji”):

```
Bilans nakładu pracy studenta: Logistyka dystrybucji (LOG-DYS)

Zajęcia z bezpośrednim udziałem prowadzącego:
- Wykład: 30 h
- Ćwiczenia: 30 h
- Konsultacje: 10 h
- Egzamin: 2 h
Razem: 72 h

Praca własna studenta:
- Przygotowanie do zajęć: 30 h
- Projekt zespołowy: 25 h
- Przygotowanie do egzaminu: 13 h
Razem: 68 h

Łączny nakład pracy studenta: 140 h
Liczba punktów ECTS: 5
```

**Kryteria akceptacji:**
- [ ] nowa funkcja `doKartyPrzedmiotu(przedmiot)` w `app/ects.js` zwraca dokładnie taki
      tekst (godziny ułamkowe z przecinkiem: „7,5 h”)
- [ ] przycisk „Kopiuj do karty przedmiotu” pod podsumowaniem; po kliknięciu krótki napis
      „Skopiowano ✔”
- [ ] gdy przeglądarka nie pozwoli na schowek: tekst pojawia się w polu do ręcznego
      zaznaczenia i skopiowania (nic nie „ginie po cichu”)
- [ ] test funkcji `doKartyPrzedmiotu` dla „Logistyki dystrybucji”; wszystkie testy przechodzą
- [ ] żadnych nowych bibliotek ani instalacji
