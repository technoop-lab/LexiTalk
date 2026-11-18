<div align="center">

# Curiosity English Academy (LexiTalk)

**A premium, CEFR-aligned English learning app for Hindi speakers — web + Android.**

60-day guided course • 270 detailed lessons (A1–A2) • 9,157 exercises • 452 dialogues • offline-first speech practice

</div>

---

## What's inside

| Track | Scope | Status |
|---|---|---|
| **60-Day English Course** (Hindi → English) | Days 1–60, CEFR A1 → B1, 6 stages | ✅ All 60 days released |
| **English Path** (Curiosity Curriculum) | 18 units, 270 lessons, A1 + A2 | ✅ Complete |
| **English Path B1–C2** | Upper-level units | 🚧 In development |
| **CEFR master blueprint** | Grammar progression, skills ladders, exit profiles | ✅ A1/A2 spec active |

Every lesson includes vocabulary with 9-language translations, phonetics (minimal pairs, L1-Hindi interference traps), grammar explanations in Hindi + English, listening/speaking exercises, dialogues with device TTS, and end-of-day assessments.

## Run locally (web)

**Prerequisites:** Node.js 20+

```powershell
npm ci
npm run build
npm start          # serves the production build
```

For development with hot reload:

```powershell
npm run dev
```

The core learning experience is fully offline and works without any API key.
`GEMINI_API_KEY` (see `.env.example`) is only needed for the optional AI helper
endpoints in `server.ts` (chat / TTS / vocab-generator admin tools).

## Useful scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build (Vite front-end + esbuild server) |
| `npm start` | Run the production server |
| `npm run lint` | TypeScript type-check (`tsc --noEmit`) |
| `npm run test:dialogues` | Validates all 60 days of dialogue content |
| `npm run audio:*` | Audio production tooling (dry-run / test / generate) |

## Android (Capacitor)

```powershell
npm run build
npx cap sync android
```

Then open the `android/` folder in Android Studio (**File → Open**), wait for
Gradle sync, and press **Run ▶** on a device or emulator.

- App ID: `com.curiosity.english` · App name: Curiosity English Academy
- Speech uses the native Android TTS engine on-device (offline); the browser
  Web Speech API is the web fallback.

## Project structure

```
├── src/
│   ├── components/        # UI (learner shell, lessons, hindi course, practice hub…)
│   ├── services/          # Curriculum, lesson, progress, audio, TTS services
│   ├── data/
│   │   ├── lessons/       # 270 detailed lesson files (A1–A2)
│   │   ├── curiosityCurriculum.ts   # Unit/lesson registry
│   │   └── masterCurriculumBlueprint.ts  # CEFR A1 academic spec
│   ├── utils/audioUtils.ts           # Offline TTS + sound effects
│   └── types/
├── DAYS_*_CONTENT.json    # 60-day course content packs (source of truth)
├── scripts/               # Content validation + audio generation
├── android/               # Capacitor Android project
└── server.ts              # Optional Express server (static + AI helper endpoints)
```

## Validation

- `npm run lint` — type-check must be clean
- `npm run test:dialogues` — all 60 days, 0 issues
- `npm audit --omit=dev` — known: 4 high *Picomatch* advisories via the Vite
  toolchain (build-time only; accepted)

## License

All rights reserved — no open-source license is granted at this time.
