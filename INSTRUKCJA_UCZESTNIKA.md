# Instrukcja uczestnika: sesja 4

## Przygotowanie (robimy razem na sali głównej, ok. 10 minut)

**Krok 1 · Twoja kopia repozytorium.**
Otwórz adres repozytorium z czatu → zielony przycisk **Use this template** →
**Create a new repository** → właściciel: Ty, nazwa `bilans-ects`, zaznacz **Private** →
**Create repository**.

**Krok 2 · Klon w VS Code.**
VS Code → **Terminal → New Terminal** →
`git clone https://github.com/TWOJ-LOGIN/bilans-ects.git` →
**File → Open Folder** → `bilans-ects` → na pytanie o zaufanie: **Yes, I trust the authors**.

**Krok 3 · Rozszerzenie Claude Code.**
Pasek po lewej → **Extensions** (Ctrl+Shift+X) → wpisz `Claude Code` → wybierz pozycję
wydawcy **Anthropic** (znaczek zweryfikowanego wydawcy) → **Install**. Otwórz dowolny plik:
w prawym górnym rogu edytora pojawi się ikona Claude (iskierka). Kliknij, zaloguj się
**tym samym kontem Pro**, którego używasz w terminalu.

> Nie da się zainstalować rozszerzenia (polityka komputera)? Nic straconego: ścieżkę
> „obok Ciebie” robisz w terminalu VS Code (`claude`): zmiany i tak zobaczysz w VS Code.

**Krok 4 · Chmura.**
Przeglądarka → **claude.ai/code** → połącz konto GitHub → przy instalacji aplikacji
Claude na GitHubie wybierz **Only select repositories** → `bilans-ects`.
To jest dokładnie pytanie z sesji 3: **do czego dostanie klucz?** Tylko do tego jednego repo.

Status na czacie głównym: `4/4` (wszystko działa) albo numer kroku, który nie zadziałał.

## Praca w pokoju

- Każdy pracuje **na swojej kopii repo i swoim komputerze**: chmura wymaga Twojego konta.
- Po każdej fazie: **2 minuty porównania w pokoju**. Jedna osoba udostępnia ekran,
  reszta mówi, co u niej wyszło inaczej.
- Ktoś utknął na konfiguracji? Zostaje **nawigatorem** osoby obok (czyta plany i diffy na głos)
  i dołącza ze swoim komputerem, gdy prowadzący pomoże.
- Checkpointy F1, F3, F4, F5 wpisujecie na **czacie głównym**. Utknięcie: słowo `pomoc`.

## Trzy zasady na dziś

1. **Zgody się czyta.** Także te w chmurze: PR to propozycja, nie wyrok.
2. **Kryteria akceptacji to umowa.** Agent ma się z nich rozliczyć, Ty je sprawdzasz.
3. **Dane z dziekanatu są święte.** `app/dane.js` nie zmienia się (patrz `CLAUDE.md`).
