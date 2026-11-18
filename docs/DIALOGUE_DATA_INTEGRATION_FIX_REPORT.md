# PHASE 4B-3: DIALOGUE DATA INTEGRATION & NORMALIZATION FIX REPORT

**Date**: August 2026  
**Status**: COMPLETE & FULLY VERIFIED (Zero UI or Content Regeneration)  
**Target Milestone**: Fix Day 11–20 dialogue data integration to render 10 scenarios with 20 turns each identically to Day 1.

---

## 1. Root Cause Analysis

During Phase 4B-1 content authoring for Days 11–20:
- The 10 rich scenario objects (each with 20 turns) were written to `rawDay.dialogues` at the top level of each day in `DAYS_11_20_CONTENT.json`.
- In Day 1 (`DAYS_01_10_CONTENT.json`), scenarios were stored under `rawDay.use.dialogues`.
- The normalization function in `src/data/curriculumRegistry.ts` (`normalizeDayLesson`) inspected only `rawDay.use.dialogues`.
- Because `rawDay.use.dialogues` was `undefined`, the normalizer fell back to `rawDay.use.dialogue` (which contained a legacy flat array `[{ speaker, textEn, textHi }]`).
- Turn extraction looked for `.turns` on the array object (`sc.turns` was `undefined`), resulting in 0 turns.
- This triggered an emergency synthetic fallback in lines 499–520 of `curriculumRegistry.ts`, synthesizing a 2-turn dialogue using `examples[0]` and `examples[1]`.
- Regex cleaners stripped template suffixes, causing Speaker A and Speaker B to receive identical text, while `HindiLessonView.tsx` rendered `"2 Spoken Conversational Turns"` and hid the 10-scenario tab switcher.

---

## 2. Files Changed

| File | Changes Made |
| :--- | :--- |
| `DAYS_11_20_CONTENT.json` | Migrated `day.dialogues` to `day.use.dialogues`, set `day.use.dialogue = day.use.dialogues[0]`, and removed redundant top-level `day.dialogues` property. |
| `src/data/curriculumRegistry.ts` | Hardened `normalizeDayLesson`: implemented 4-tier precedence (`rawUse.dialogues` → `rawDay.dialogues` → `rawUse.dialogue` → `rawDay.dialogue`), supported flat turn array structures, and prevented synthetic fallback activation whenever genuine dialogue data exists. |
| `scripts/validateDialogueIntegrity.ts` | Created automated test suite verifying all 60 days, scenario counts, minimum turns, schema completeness, and absence of synthetic duplicates. |
| `package.json` | Added `"test:dialogues": "tsx scripts/validateDialogueIntegrity.ts"` script. |

---

## 3. Data Structure: Before vs. After

### Before (`DAYS_11_20_CONTENT.json`):
```json
{
  "dayNumber": 11,
  "dialogues": [
    { "id": "d11_sc01", "title": "Visitor at the Office Reception", "turns": [ 20 items ] },
    "... 9 more scenarios ..."
  ],
  "use": {
    "dialogue": [ 4 items ],
    "speakingTask": { ... }
  }
}
```

### After (`DAYS_11_20_CONTENT.json` - Canonical Alignment):
```json
{
  "dayNumber": 11,
  "use": {
    "dialogues": [
      { "id": "d11_sc01", "title": "Visitor at the Office Reception", "turns": [ 20 items ] },
      "... 9 more scenarios ..."
    ],
    "dialogue": {
      "id": "d11_sc01",
      "title": "Visitor at the Office Reception",
      "turns": [ 20 items ]
    },
    "speakingTask": { ... }
  }
}
```

---

## 4. Number of Real Dialogues Preserved

- **Days 11–20**: Exactly **100 long-form scenarios** (10 per day × 10 days).
- **Total Conversational Turns**: Exactly **2,000 turns** (20 turns per scenario × 100 scenarios).
- **Content Authenticity**: 100% of the hand-crafted dialogues, character roles, contextual situations, and Hindi-English translations were preserved with zero loss and zero regeneration.

---

## 5. Fallback Logic Fixed

In `src/data/curriculumRegistry.ts`:
1. **Explicit Precedence Chain**:
   ```typescript
   if (Array.isArray(rawUse.dialogues) && rawUse.dialogues.length > 0) {
     rawScenarioList = rawUse.dialogues;
   } else if (Array.isArray(rawDay.dialogues) && rawDay.dialogues.length > 0) {
     rawScenarioList = rawDay.dialogues;
   } else if (rawUse.dialogue) {
     rawScenarioList = Array.isArray(rawUse.dialogue)
       ? [{ id: `scenario_${dayNumber}_1`, title: `Day ${dayNumber} Conversation`, context: globalSituation, turns: rawUse.dialogue }]
       : [rawUse.dialogue];
   } else if (rawDay.dialogue) {
     rawScenarioList = Array.isArray(rawDay.dialogue)
       ? [{ id: `scenario_${dayNumber}_1`, title: `Day ${dayNumber} Conversation`, context: globalSituation, turns: rawDay.dialogue }]
       : [rawDay.dialogue];
   }
   ```
2. **Turn Parser Tolerance**:
   Added `else if (Array.isArray(sc)) { rawTurns = sc; }` to handle un-nested dialogue arrays gracefully.
3. **Strict Fallback Prevention**:
   The synthetic 2-turn fallback now checks:
   `if (normalizedTurns.length === 0 && rawTurns.length === 0 && rawScenarioList.length === 1 && examples.length >= 2)`
   Ensuring it **never** overrides or replaces genuine dialogue data.

---

## 6. Regression Test Suite

Created and executed `scripts/validateDialogueIntegrity.ts`:
- Validated all 60 curriculum days at runtime through `getRegistryDayByNumber`.
- Verified every scenario contains `id`, `title`, `context`, and non-empty `turns` with valid `speaker`, `textEn`, and `textHi`.
- Verified no days triggered the duplicate synthetic fallback.

---

## 7. Build & Lint Results

- **Linter (`npm run lint`)**: `tsc --noEmit` passed with 0 errors.
- **Production Build (`npm run build`)**: Vite and esbuild bundled successfully.
- **Runtime Dev Server**: Operating normally on port 3000.

---

## 8. Target Day Verifications

### Day 1:
- **Scenarios Available**: 10 scenarios (`d01_sc01` – `d01_sc10`)
- **Turns per Scenario**: 20 turns
- **Scenario 1**: *"New Employee First Day Welcome"* (Priya & Rohan)
- **Scenario 10**: *"Late Evening Office Departure and Goodnight"*

### Day 11:
- **Scenarios Available**: 10 scenarios (`d11_sc01` – `d11_sc10`)
- **Turns per Scenario**: 20 turns
- **Scenario 1**: *"Visitor at the Office Reception"* (Amit & Receptionist)
- **Scenario 2**: *"Cooking Instructions in the Kitchen"* (Karan & Riya)
- **Scenario 3**: *"Boarding a City Bus"* (Passenger & Conductor)
- **Scenario 4**: *"Library Rules and Quiet Zone"* (Student & Librarian)
- **Scenario 5**: *"Polite Ordering at a Coffee Counter"* (Barista & Neha)
- **Scenario 6**: *"Teacher and Student Classroom Instructions"* (Teacher & Students)
- **Scenario 7**: *"Doctor Clinic Waiting Room Instructions"* (Patient & Assistant)
- **Scenario 8**: *"Apartment Building Move-in Instructions"* (Resident & Supervisor)
- **Scenario 9**: *"Pharmacy Medicine Usage Instructions"* (Customer & Pharmacist)
- **Scenario 10**: *"Borrowing Ingredients from a Neighbor"* (Sunita & Anjali)
- **UI Header**: Displays `"10 Scenarios Available • Scenario 1 of 10"` and renders the 10-button Scenario Selector.

### Day 12:
- **Scenarios Available**: 10 scenarios (`d12_sc01` – `d12_sc10`)
- **Turns per Scenario**: 20 turns
- **Scenario 1**: *"Hotel Room Inspection and Amenities"* (Guest & Staff)
- **Scenario 10**: *"Classroom Inventory and Seating Setup"*

### Day 20:
- **Scenarios Available**: 10 scenarios (`d20_sc01` – `d20_sc10`)
- **Turns per Scenario**: 20 turns
- **Scenario 1**: *"Stage 2 Comprehensive Progress Assessment"* (Mentor & Amit)
- **Scenario 10**: *"Stage 2 Finale: Celebrating Communication Milestone"*

---

## 9. Global 60-Day Schema Audit

| Stage | Days Range | Scenario Architecture | Schema Status |
| :--- | :--- | :--- | :--- |
| **Stage 1** | Days 01–10 | 10 Scenarios per day (20 turns each) | Canonical (`use.dialogues`) |
| **Stage 2** | Days 11–20 | 10 Scenarios per day (20 turns each) | Canonical (`use.dialogues`) |
| **Stage 3** | Days 21–30 | Single Dialogue per day (4–8 turns) | Normalized via hardened fallback |
| **Stage 4** | Days 31–40 | Single Dialogue per day (6–7 turns) | Normalized via hardened fallback |
| **Stage 5** | Days 41–50 | Single Dialogue per day (6 turns) | Normalized via hardened fallback |
| **Stage 6** | Days 51–60 | Days 51–58: 3 Scenarios; Days 59–60: Single Dialogue | Normalized via hardened fallback |

**Total Errors Across 60 Days**: 0  
**Synthetic Fallbacks Triggered**: 0

---

## 10. Remaining Risks & Recommendations

1. **Days 21–60 Expansion**: When Stages 3–6 are expanded in future phases, they will immediately benefit from this canonical schema (`day.use.dialogues`) and the hardened normalizer.
2. **Audio Generation**: Audio pipeline can now map voice IDs directly across all 200 scenarios (4,000 turns) in Stages 1 and 2.
