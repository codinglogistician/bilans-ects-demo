# bilans-ects: pamięć projektu dla agenta

## O projekcie
Mała aplikacja webowa dla nauczycieli akademickich: liczy bilans nakładu pracy studenta
(godziny → punkty ECTS) do kart przedmiotów. Bez serwera, bez instalacji: otwiera się
plik `app/index.html` w przeglądarce.

## Struktura
- `app/index.html`: interfejs (HTML + mały skrypt na dole pliku)
- `app/ects.js`: cała logika obliczeń, eksportowana jako obiekt `ECTS`
- `app/dane.js`: dane przedmiotów (eksport z dziekanatu) jako `PRZEDMIOTY`
- `test/testy.js`: testy (mini-framework z `test/mini-test.js`)
- `ZGLOSZENIA.md`: zgłoszenia użytkowników z kryteriami akceptacji

## Zasady pracy
- Język: interfejs, komunikaty, komentarze i opisy commitów **po polsku**.
- **Nie zmieniaj `app/dane.js`**, chyba że ktoś wprost o to poprosi. Aplikacja ma sobie
  radzić z danymi takimi, jakie przychodzą z dziekanatu.
- **Żadnych nowych zależności**: bez npm, bez bibliotek z CDN. Czysty JavaScript.
- Logika trafia do `app/ects.js`, nie do skryptu w `index.html`.
- Każda poprawka i nowa funkcja ma test w `test/testy.js`.
- Testy: `node test/uruchom.js` (gdy Node jest dostępny) albo `test/testy.html` w przeglądarce.
- Zgłoszenie jest zamknięte dopiero wtedy, gdy spełnia WSZYSTKIE kryteria akceptacji
  z `ZGLOSZENIA.md`. Na koniec wypisz, które kryteria spełniłeś i jak to sprawdziłeś.
- Zmiany małe i czytelne: nie przebudowuj tego, o co nikt nie prosił.
