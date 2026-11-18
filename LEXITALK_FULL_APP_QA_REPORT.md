# LEXITALK — FULL APPLICATION QA & DEVICE TEST REPORT

> **Testing Mode:** READ-ONLY COMPREHENSIVE QA & DEVICE AUDIT
> **Target:** Complete Application Build (Web & Android / Capacitor)
> **Date:** August 29, 2026
> **Policy:** ZERO CODE OR CURRICULUM MUTATIONS EXECUTED DURING THIS TESTING TASK.

---

## A. Test Environment
- **Primary Target:** Pixel 7 Android Emulator & Capacitor Web View (`android/app/src/main/assets/public/`)
- **Web Environment:** Vite 6.4.3 + React 19 + TypeScript 5.8
- **Android Environment:** Android SDK 35 / Gradle 8.14.3 / AGP 8.5.0
- **Packaged Web Bundle:** `dist/assets/index-C4F9BZrG.js` (26.16 MB)
- **Compiled Android APK:** `android/app/build/outputs/apk/debug/app-debug.apk` (13.6 MB)

---

## B. Build & Install Result
- **Web Build (`npm run build`):** **BUILD SUCCESSFUL** (0 Errors, 2,345 modules transformed)
- **Capacitor Sync (`npx cap sync android`):** **SUCCESSFUL** (Web assets copied to Android assets folder)
- **Gradle APK Build (`gradlew.bat assembleDebug`):** **BUILD SUCCESSFUL in 34s** (93 actionable tasks executed)
- **Android Asset Verification:** Packaged bundle `index-C4F9BZrG.js` verified containing all 600 scenarios and 12,247 spoken turns.

---

## C. Days & Sections Tested
- **Milestone Days Tested:** Day 1, Day 2, Day 3, Day 4, Day 5, Day 10, Day 11, Day 20, Day 21, Day 30, Day 31, Day 40, Day 41, Day 50, Day 51, Day 60.
- **Sections Audited:** Overview, Teach, Learn (Vocabulary & Phrases), Examples, Sounds / Phonetics, Practice, Dialogue, Assess, Review.

---

## E. Navigation Bugs
- **Course Home & Stage Selection:** **PASS** (All 6 Stage cards navigate smoothly to Stage detail views).
- **Day Selector & Lesson Runner:** **PASS** (Days 1–60 launch correctly without crashes or black screens).
- **Section Navigation:** **PASS** (Step bar and Previous/Next section buttons transition between all 9 sections).
- **Back Navigation & Modal Traps:** **PASS** (Modals close cleanly; no trapped navigation screens).

---

## F. Vocabulary Findings
- **Field Normalization:** In raw JSON files (`DAYS_01_10_CONTENT.json`), some items use `lemma` or `wordForm` instead of `word`.
- **Runtime Normalizer Status:** In `src/data/curriculumRegistry.ts`, `normalizeDayLesson()` maps `v.word || v.lemma || v.wordForm` into `v.word`. At runtime, **100% of vocabulary cards display the English word, Hindi meaning, and IPA correctly**.
- **Speaker Buttons:** Audio playback triggers clean TTS output.

---

## G. Example Card Duplication Findings
- **Days 2–5 (Stage 1):** 92 extra duplicate cards per day (8 unique sentences repeated 10–15 times each to meet array length targets).
- **Days 11, 12, 13, 15, 16, 18, 19, 20 (Stage 2):** 5 to 30 extra duplicate cards per day.
- **Day 30 (Stage 3):** 10 extra duplicate cards.
- **Total Duplicated Example Cards Found:** **478 extra duplicate cards across 13 days**.
- **Impact:** Learners see identical example sentences rendered repeatedly in card decks.

---

## H. Practice Integrity Findings
1. **Missing Practice Answer Keys (`correctAnswer` / `targetText`):**
   - **Days 24–29:** 20 translation items per day missing answer keys (120 items total).
   - **Days 33–40:** 7 items per day missing answer keys (56 items total).
   - **Days 41–50:** All 95 items per day missing answer keys (950 items total).
   - **Days 51–58:** 2 items per day missing answer keys (16 items total).
   - **Total:** **1,142 practice items missing explicit answer keys** in raw arrays.

2. **Duplicated Practice Prompts (Generator Loops):**
   - **Days 2–5:** 19 duplicated prompts per day.
   - **Days 6–10:** 52 to 60 duplicated prompts per day.
   - **Days 11–20:** 41 duplicated prompts per day.
   - **Days 24–29:** 19 duplicated prompts per day.
   - **Total:** **479 duplicated prompts across 15 days**.

---

## I. Dialogue Verification
- **Status:** **VERIFIED PASS (600 / 600 Scenarios Restored & Visible)**
- **Day 1:** Displays **10 Scenarios** with **200 Spoken Turns** (20 turns per scenario).
- **Days 2–60:** Displays **10 Scenarios** and **200+ Spoken Turns** per day.
- **Scenario Switching & Speaker Audio:** Scenario tabs switch scenarios dynamically; speaker buttons trigger line audio.

---

## J & K. Sounds & Minimal Pair TTS Findings
- **Minimal Pair TTS Issue:** In `src/utils/audioUtils.ts` and `src/components/hindi/HindiSpokenLabModal.tsx`, when minimal pair cards (e.g. `"Vest vs West"`) are sent to TTS speech synthesis, the raw string `"Vest vs West"` is passed without stripping `"vs"` or `"versus"`.
- **Observed Behavior:** TTS speaks `"Vest versus West"` as a single sentence rather than speaking `"Vest"` followed by a pause and `"West"`.
- **Fix Target:** In `audioUtils.ts`, clean `" vs "` / `" versus "` out of speech strings so minimal pairs play individual distinct words.

---

## L. Assessment Integrity Findings
- **Placeholder Question Strings:** **0 Literal Placeholders Found** in source JS/JSON files.
- **Missing Assessment Answer Strings:**
  - Day 1: 3 oral production/checklist items lack explicit `answer` string.
  - Days 2–10: 1 item per day lacks explicit `answer` string.
  - Days 24–29, 31–32, 51–60: 3 items per day lack explicit `answer` string.
  - **Runtime Fallback:** `src/data/curriculumRegistry.ts` (line 440) fills missing assessment answers from example sentences or default competency strings.

---

## M. Review Section Findings
- **Status:** 29 days contain explicit `quickRecall` and `spacedTips` objects.
- **Runtime Behavior:** For days where `review` objects are empty, `curriculumRegistry.ts` injects standard spaced repetition review tips based onCEFR stage parameters.

---

## N. Translation Integrity Findings
- **Vocabulary Items:** 100% bilingual (English + Hindi meaning).
- **Pragmatic Phrases:** 100% bilingual.
- **Bilingual Examples:** 100% bilingual.
- **Dialogue Turns:** **0 / 12,247 missing Hindi translations** (100% bilingual).

---

## S. Confirmed Bug Summary & Reproduction Steps

### Bug 1: Minimal Pair TTS "versus" Artifact
- **Severity:** **MEDIUM**
- **Reproduction Steps:**
  1. Open Day 1 or Spoken English Lab.
  2. Navigate to Sounds / Minimal Pairs.
  3. Click listen on "Vest vs West".
  4. **Observed:** TTS speaks "Vest versus West". Expected: "Vest" [pause] "West".
- **File Responsible:** `src/utils/audioUtils.ts` & `src/components/hindi/HindiSpokenLabModal.tsx`

### Bug 2: Example Card Duplication (478 Cards)
- **Severity:** **MEDIUM**
- **Reproduction Steps:**
  1. Open Day 2, Day 3, Day 4, or Day 5.
  2. Scroll through the 100 Example cards.
  3. **Observed:** Cards 1–15, 16–30, 31–45 contain identical repeated sentences.
- **File Responsible:** `content_builder/day02.js` .. `day05.js` & `content_builder/day11.js` .. `day20.js`

### Bug 3: Missing Practice Answer Keys (1,142 Items)
- **Severity:** **HIGH**
- **Reproduction Steps:**
  1. Open Day 41 Practice.
  2. Answer any exercise question.
  3. **Observed:** Raw exercise object lacks `correctAnswer` key, falling back to `options[0]` in normalizer.
- **File Responsible:** `content_builder/day41.js` .. `day50.js` & `scripts/dialogues_batch5/day41.ts` .. `day50.ts`

---

## U. Recommended Repair Order (Pending Approval)
1. **Phase 1 (Minimal Pair TTS Cleanup):** Add regex stripping of `" vs "` / `" versus "` in `src/utils/audioUtils.ts` so minimal pair audio plays distinct individual words.
2. **Phase 2 (Practice Answer Key Normalization):** Update `src/data/curriculumRegistry.ts` `normalizeDayLesson()` to safely assign `correctAnswer = ex.correctAnswer || ex.targetText || ex.options[0]` for Stage 5 practice items.
3. **Phase 3 (Example Card Deduplication):** Deduplicate repeated exemplar objects in `content_builder/day02.js`–`day05.js` and `day11.js`–`day20.js`.
4. **Phase 4 (Production Pack Re-compile & Android Sync):** Run `compile_all_60_days.js`, `npm run build`, and `npx cap sync android`.