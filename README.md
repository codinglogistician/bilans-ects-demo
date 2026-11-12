# bilans-ects: jeden projekt, trzy miejsca pracy agenta

**Sesja 4 · „Od promptu do produktu” · Rafał Jabłoński**

## Po co to jest

Mała aplikacja, której potrzebuje każda uczelnia: liczy **bilans nakładu pracy studenta**
(godziny → punkty ECTS) do kart przedmiotów. Działa, ale ma trzy zgłoszenia od użytkowników
(`ZGLOSZENIA.md`): dwa błędy i jedną nową funkcję.

Dziś nie uczymy się nowego agenta. Uczymy się **wybierać miejsce, w którym agent pracuje**:

| Ścieżka | Gdzie | Rola agenta |
|---|---|---|
| **Obok Ciebie** | panel Claude Code w VS Code | współpracownik przy biurku: widzi zaznaczenie, pokazuje diffy |
| **Z Tobą** | `claude` w terminalu | ten sam agent, który znacie z sesji 1–3 |
| **Za Ciebie** | claude.ai/code (chmura) | delegacja: zlecasz, idziesz dalej, wracasz po gotową propozycję (PR) |

## Jak zacząć

1. Na GitHubie: **Use this template → Create a new repository** (Twoje konto, nazwa
   `bilans-ects`, **Private**).
2. Sklonuj SWOJĄ kopię i otwórz folder w VS Code.
3. Otwórz `app/index.html` w przeglądarce: zobaczysz aplikację (i pierwszy błąd).
4. Dalej: `INSTRUKCJA_UCZESTNIKA.md` i fazy w `KARTA_PRACY.md`.

## Co jest w repozytorium

| Plik | Co to |
|---|---|
| `app/index.html` | aplikacja (otwierasz w przeglądarce) |
| `app/ects.js` | logika obliczeń: tu siedzą błędy |
| `app/dane.js` | dane z dziekanatu (nie zmieniamy!) |
| `test/testy.html` · `test/uruchom.js` | testy: w przeglądarce albo `node test/uruchom.js` |
| `ZGLOSZENIA.md` | zgłoszenia #1–#3 z kryteriami akceptacji |
| `CLAUDE.md` | pamięć projektu dla Claude |
| `.github/copilot-instructions.md` | to samo dla Copilota (porównajcie!) |
| `MACIERZ.md` | Wasza macierz decyzyjna: wypełniacie w F5 |
