# Karta pracy: warsztat w pokojach, ok. 50 minut

Ścieżka podstawowa: F1–F5. „Bez sufitu”: dla tych, którym zostanie czas.
Checkpointy na **czacie głównym** po F1, F3, F4 i F5.

---

## F1 · Za Ciebie: delegacja do chmury (5 min)

Zaczynamy od chmury, bo chmura pracuje **sama**, a Ty w tym czasie robisz co innego.

- [ ] claude.ai/code → wybierz repozytorium `bilans-ects` → wklej zlecenie:

> Rozwiąż zgłoszenie #1 z pliku ZGLOSZENIA.md. Najpierw przeczytaj CLAUDE.md.
> Zajmij się tylko zgłoszeniem #1. Uruchom testy poleceniem node test/uruchom.js.
> Na koniec wypisz każde kryterium akceptacji z oceną „spełnione / niespełnione”
> i napisz, jak to sprawdziłeś.

- [ ] Wyślij i **zostaw**. Nie patrz, jak pracuje: o to właśnie chodzi.
- [ ] Checkpoint: `F1` na czacie głównym.

## F2 · Obok Ciebie: to samo zgłoszenie w panelu VS Code (14 min)

Ten sam błąd, druga droga. Za chwilę porównacie oba rozwiązania.

- [ ] Otwórz `app/index.html` w przeglądarce, wybierz „Podstawy zarządzania”: zobacz błąd
      na własne oczy.
- [ ] W VS Code otwórz `app/ects.js` i **zaznacz myszką** funkcję `sumaGodzin`.
- [ ] Otwórz panel Claude (iskierka) i napisz:

> @ZGLOSZENIA.md Zgłoszenie #1. Spójrz na zaznaczony fragment: co dzieje się
> z godzinami, które przyszły z Excela jako tekst? Najpierw wyjaśnij, nic jeszcze nie zmieniaj.

- [ ] Przeczytaj wyjaśnienie. Rozumiesz, skąd „krzaki”? Jeśli nie: dopytaj, to nic nie kosztuje.
- [ ] Przełącz na **plan mode** (przełącznik trybu pod polem wpisywania albo Shift+Tab)
      i poproś o plan poprawki zgodnej z kryteriami akceptacji.
      Przeczytaj plan, popraw, zaakceptuj.
- [ ] Zmiany pojawią się jako **diff w edytorze**: czerwone znika, zielone wchodzi. Czytaj,
      zanim przyjmiesz. Sprawdź szczególnie: czy agent nie ruszył `app/dane.js`?
- [ ] Odśwież aplikację w przeglądarce. Otwórz `test/testy.html`: wszystko zielone?
- [ ] **Nie rób jeszcze commita.** Za chwilę zdecydujesz, które rozwiązanie zostaje.

## F3 · Recenzja: dwa rozwiązania jednego błędu (9 min)

- [ ] Wróć do claude.ai/code. Przeczytaj raport z kryteriami. Otwórz zmiany
      (karta **Changes**) i utwórz **Pull Request** (przycisk w sesji).
- [ ] Na GitHubie: PR → zakładka **Files changed**. W VS Code: **Source Control**
      (Ctrl+Shift+G) → klik w zmieniony plik = Twój lokalny diff.
- [ ] W pokoju porównajcie: spełnia kryteria? dopisał test? ruszył dane? które czytelniejsze?
- [ ] **Decyzja** (wpisz ją w `MACIERZ.md`, sekcja „Decyzja F3”):
  - **A · zostaje chmura:** na GitHubie **Merge pull request** → **Confirm merge**.
    Potem w terminalu VS Code: `git restore .` (porzucasz lokalne zmiany) i `git pull`.
  - **B · zostaje lokalne:** w panelu Claude: *„Zrób commit z opisem po polsku i wypchnij
    na GitHub”*. Na GitHubie zamknij PR przyciskiem **Close pull request** z komentarzem dlaczego.
- [ ] Checkpoint: `F3` + litera decyzji (`F3 A` / `F3 B`).

## F4 · Twój wybór ścieżki (14 min)

Teraz sam(a) decydujesz, **gdzie** pracuje agent. Wybierz JEDNO zgłoszenie:

| Zgłoszenie | Co to | Sugestia (nie przymus) |
|---|---|---|
| **#2** fałszywy alarm | reguła 25–30 h, komunikaty, testy granic | **terminal** (`claude` w terminalu VS Code): plan mode + testy w pętli |
| **#3** „Kopiuj do karty” | nowa funkcja + przycisk | **chmura**: dobrze opisane zadanie, które można oddać w całości |

- [ ] ZANIM zaczniesz, wpisz w `MACIERZ.md`: *„Wybieram #… w ścieżce …, bo …”*.
- [ ] Pracuj. Na koniec: kryteria akceptacji odhaczone? testy zielone? aplikacja działa?
- [ ] Zapisz wynik na GitHubie: lokalnie commit + push, w chmurze PR → recenzja → merge
      → `git pull` w VS Code.
- [ ] Checkpoint: `F4` + numer zgłoszenia i ścieżka (np. `F4 #2 terminal`).

## F5 · Macierz decyzyjna (8 min)

- [ ] Wypełnij `MACIERZ.md` (możesz poprosić agenta o pomoc w formatowaniu, ale oceny są Twoje).
- [ ] Commit + push dowolną ścieżką.
- [ ] W pokoju wybierzcie **jedno zdanie** na syntezę: *„Do … wybieram …, bo …”*.
- [ ] Checkpoint: `F5` + to zdanie na czacie głównym.

---

## Bez sufitu: rozszerzenia

- [ ] **Drugie zgłoszenie** tą ścieżką, której jeszcze nie próbowałeś(-aś).
- [ ] **Delegacja z terminala:** `claude --cloud "Rozwiąż zgłoszenie #3 z ZGLOSZENIA.md"`
      uruchamia sesję w chmurze bez przeglądarki. Potem `claude --teleport`: ściągasz
      sesję z chmury z powrotem do terminala.
- [ ] **Dwie sesje w chmurze naraz:** #2 i #3 równolegle. Które PR scalić najpierw i co się
      stanie z drugim? (To jest prawdziwy problem zespołów programistycznych.)
- [ ] **Recenzja na GitHubie:** zostaw w PR komentarz przy konkretnej linii
      („komunikat ma podawać przedział”) i poproś sesję w chmurze o poprawkę.
- [ ] **Telefon:** aplikacja Claude → zakładka **Code**: zajrzyj do swojej sesji z kanapy.
- [ ] **Skill z sesji 3 w nowym domu:** dodaj skill `/zgloszenie`, który z luźnego opisu
      problemu robi zgłoszenie w formacie `ZGLOSZENIA.md` (objaw, jak odtworzyć, kryteria).
- [ ] **Dwa adresaty, jedna wiedza:** porównaj `CLAUDE.md` z `.github/copilot-instructions.md`.
      Jak utrzymać je zgodne? Sprawdź, czym jest `AGENTS.md`.
