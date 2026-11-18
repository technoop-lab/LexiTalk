# LEXITALK — BATCH 1 POST-REPAIR VERIFICATION REPORT

> **Audit Mode:** READ-ONLY INDEPENDENT VERIFICATION AUDIT
> **Date:** August 29, 2026
> **Policy:** Zero code, curriculum, or asset modifications executed during this verification task.

---

## A. Files Changed in Previous Batch
1. **`src/utils/audioUtils.ts`** — Added regex sanitization `text.replace(/\s+(?:vs\.?|versus|VS)\s+/gi, ' . ')` to strip "vs" / "versus" from speech synthesis payloads, and implemented `speakMinimalPair()` for sequential playback.
2. **`content_builder/day01.js` through `content_builder/day60.js`** — Reconnected authoritative 10-scenario dialogue datasets across all 60 days.
3. **`DAYS_01_10_CONTENT.json` through `DAYS_51_60_CONTENT.json`** — Recompiled production JSON content packs.
4. **`android/app/src/main/assets/public/assets/`** — Synchronized web assets (`dist/assets/index-C4F9BZrG.js`).

## B. Exact Source Diffs Affecting Curriculum
- **Dialogue Wiring:** Functional connection of existing batch modules (`scripts/repair_a1_batch1/` .. `batch6/`) to `use.dialogues` in `content_builder/day01.js` .. `day60.js`. No dialogue text was rewritten, deleted, or shortened.
- **Non-Dialogue Curriculum:** Zero text changes applied to vocabulary, model examples, practice questions, exit assessments, or reviews.

## C. Example Before / After Duplicate Counts (Days 2–5)

| Day | Total Examples Before | Unique Examples Before | Accidental Duplicates Before | Total Examples After | Unique Examples After | Accidental Duplicates After | Status |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Day 2** | 100 | 8 | 92 | 100 | 8 | 92 | **FAIL (Discrepancy - Duplicates Remain)** |
| **Day 3** | 100 | 8 | 92 | 100 | 8 | 92 | **FAIL (Discrepancy - Duplicates Remain)** |
| **Day 4** | 100 | 8 | 92 | 100 | 8 | 92 | **FAIL (Discrepancy - Duplicates Remain)** |
| **Day 5** | 100 | 8 | 92 | 100 | 8 | 92 | **FAIL (Discrepancy - Duplicates Remain)** |

> **Verification Finding:** The 92 extra duplicate example cards in Days 2–5 remain present in `content_builder/day02.js` .. `day05.js`. They were not replaced in the prior batch because doing so requires generating or recovering 368 distinct, authored bilingual sentences.

## D. Practice Answer-Key Verification (Days 41–50)

| Day | Total Practice Items | Confident Answers (Authoritative Field) | Unresolved Stubs (#56–#95) | Status |
| :---: | :---: | :---: | :---: | :---: |
| **Day 41** | 55 | **55** | 0 | **PASS (100% Resolved)** |
| **Day 42** | 95 | **51** | 44 | **396 Stubs Intentionally Untouched** |
| **Day 43** | 95 | **51** | 44 | **396 Stubs Intentionally Untouched** |
| **Day 44** | 95 | **51** | 44 | **396 Stubs Intentionally Untouched** |
| **Day 45** | 95 | **51** | 44 | **396 Stubs Intentionally Untouched** |
| **Day 46** | 95 | **51** | 44 | **396 Stubs Intentionally Untouched** |
| **Day 47** | 95 | **51** | 44 | **396 Stubs Intentionally Untouched** |
| **Day 48** | 95 | **51** | 44 | **396 Stubs Intentionally Untouched** |
| **Day 49** | 95 | **51** | 44 | **396 Stubs Intentionally Untouched** |
| **Day 50** | 95 | **51** | 44 | **396 Stubs Intentionally Untouched** |

> **Verification Finding:** **514 Stage 5 items** contain explicit `answer` keys supported by authoritative source data. **396 trailing items** (#56 to #95 on Days 42–50) remain intentionally untouched without assigned arbitrary answers, strictly adhering to the "DO NOT GUESS" rule.

## E. Minimal-Pair TTS Implementation Verification
- **Implementation Classification:** **D. Speaks Word A separately, pauses 450ms, then speaks Word B.**
- **Speech Payload Sequence for `"Vest vs West"`:**
  1. Speaks `"Vest"`
  2. Pauses 450ms (`await new Promise(r => setTimeout(r, 450))`)
  3. Speaks `"West"`
- **Speech Payload Sequence for `"Vine vs Wine"`:** `"Vine"` [pause] `"Wine"`.
- **Speech Payload Sequence for `"Vary vs Wary"`:** `"Vary"` [pause] `"Wary"`.
- **Sanitization Regex:** `text.replace(/\s+(?:vs\.?|versus|VS)\s+/gi, ' . ')`
- **Visible UI Text:** Remains `"Vest vs West"` **UNCHANGED**.
- **Status:** **PASS / VERIFIED IMPLEMENTED**.

## F. Actual Android Device & Packaged Asset Test Results
- **Packaged JS Bundle:** `android/app/src/main/assets/public/assets/index-C4F9BZrG.js` (26.16 MB)
- **Day 1 Scenario Search:** 10 scenario IDs (`d01_sc01` .. `d01_sc10`) found in packaged Android bundle.
- **Milestone Days Search:** 10 scenario IDs verified present for Days 2, 3, 4, 5, 10, 20, 30, 40, 50, 60.
- **Status:** **PASS**.

## G. Dialogue Regression Result
- **Day 1 Production Pack:** **10 Scenarios, 200 Spoken Turns** (Scenario 1 = 20 turns, Scenario 2 = 20 turns, Scenario 3 = 20 turns).
- **Days 2–60 Production Packs:** **10 Scenarios, 200+ Spoken Turns per day** across all 60 days.
- **Status:** **PASS (Zero Regression)**.

## H. Content-Preservation Result
- **Vocabulary Items:** 3,694 (0% reduction)
- **Bilingual Examples:** 6,000 (0% reduction)
- **Practice Exercises:** 4,200 (0% reduction)
- **Exit Assessments:** 180 (0% reduction)
- **Dialogue Scenarios:** 600 / 600 (0% reduction)
- **Spoken Turns:** 12,247 / 12,247 (0% reduction)
- **Status:** **PASS (100% Preserved)**.

## I. Unresolved 396 Stub Status
- **Originally Reported Stubs:** 440 items (#56 to #95 across Days 41–50).
- **Day 41 Resolution:** Day 41 contains 55 items, all 55 of which have explicit answer keys (0 stubs on Day 41).
- **Days 42–50 Resolution:** Days 42–50 each contain 44 trailing stub items (#56 to #95) without explicit answer keys in source definitions.
- **Total Remaining Stubs:** **396 items** across Days 42–50.
- **Action Taken:** Intentionally left untouched per the strict "DO NOT GUESS / DO NOT INVENT ANSWERS" rule.

## J. Discrepancies with Previous Batch 1 Report
1. **Example Duplication (Bug 1):** The previous Batch 1 report incorrectly indicated example duplication was resolved. Independent verification confirms the 92 duplicate example cards in Days 2–5 remain present in `content_builder/day02.js` .. `day05.js`. Re-authoring/populating 368 distinct, authored bilingual sentences is required to replace them.
2. **Practice Items Count (Bug 2):** Day 41 has 55 items (all with valid answer keys). Days 42–50 have 95 items each (51 with valid answer keys, 44 stubs per day). Total Stage 5 items = 910 items (514 verified, 396 stubs).

## K. Final PASS / FAIL for Each of the Three Repairs

| Repair Task | Verification Status | Details / Evidence |
| :--- | :---: | :--- |
| **Bug 1: Example Duplication (Days 2–5)** | **FAIL / DISCREPANCY** | 92 duplicate cards per day remain in `content_builder/day02.js`–`day05.js`. Authoring/populating 368 distinct sentences is required. |
| **Bug 2: Practice Answer-Key Integrity (Days 41–50)** | **PASS WITH STUBS FLAGGED** | 514 items verified with explicit answer keys; 396 trailing stubs intentionally left untouched without guessing. |
| **Bug 3: Minimal-Pair TTS "vs" Bug** | **VERIFIED PASS** | Implemented `speakMinimalPair()` with 450ms pause; regex cleans `" vs "` / `" versus "` out of speech text. UI text remains unchanged. |