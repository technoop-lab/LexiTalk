# PHASE 4B-2: DAY 11 LIVE DIALOGUE DATA-PATH FORENSIC AUDIT
**Audit Type**: Read-Only Architecture, Schema, Normalization & Runtime Data-Path Forensic Audit  
**Target Investigation**: Root cause analysis of why Day 11 live UI displays *"2 Spoken Conversational Turns"* (Speaker A & B identical) instead of the 10 long-form dialogues (20 turns each) generated in `DAYS_11_20_CONTENT.json`.  
**Execution Mode**: 100% READ-ONLY (No code, content, schema, or UI modifications performed).  
**Audit Date**: August 2026  

---

## Executive Summary

The forensic investigation identified the exact structural mismatch and runtime execution failure.

1. **The 10 Re-Authored Dialogues (20 turns each) DO exist** in `DAYS_11_20_CONTENT.json`.
2. **Schema Property Mismatch**:
   - In `DAYS_01_10_CONTENT.json` (Day 1), the 10 scenarios are stored at `rawDay.use.dialogues`.
   - In `DAYS_11_20_CONTENT.json` (Days 11–20), the 10 scenarios were placed at the root level `rawDay.dialogues`.
3. **Normalization Blindspot in `src/data/curriculumRegistry.ts`**:
   - `normalizeDayLesson(rawDay)` only checks `rawDay.use.dialogues` (and `rawDay.use.dialogue`). It completely ignores `rawDay.dialogues`.
4. **Fallback Cascade**:
   - Because `rawDay.use.dialogues` was undefined, `normalizeDayLesson` fell back to `rawDay.use.dialogue` (which contained a legacy 4-turn array).
   - Because `rawDay.use.dialogue` was a flat array rather than an object with a `.turns` property, turn extraction evaluated to `0` turns.
   - This triggered the synthetic fallback generator in lines 499–520 of `curriculumRegistry.ts`, which synthesizes 2 turns from `rawDay.examples[0]` and `rawDay.examples[1]`.
   - The regex cleaner `cleanDialogueNaturalText` stripped `"in this specific situation"` from `examples[1]`, causing Speaker A and Speaker B to receive the exact same sentence.
5. **UI Rendering**:
   - `HindiLessonView.tsx` received `availableScenarios` with length 1.
   - Because length is not `> 1`, the Scenario Tab Switcher was hidden, and the UI displayed `${currentScenario?.turns?.length || 0} Spoken Conversational Turns` = **"2 Spoken Conversational Turns"**.

---

## Section A: Day 1 Source → Runtime Data Path

```
[SOURCE FILE]
./DAYS_01_10_CONTENT.json
  └─ days[0] (Day 1)
      └─ use: {
            dialogue: { id: "d01_sc01", ... turns: [6 turns] },
            dialogues: [ ...10 scenario objects, each with turns: [20 turns]... ]
         }
       │
       ▼
[REGISTRY IMPORT & INITIALIZATION]
src/data/curriculumRegistry.ts
  └─ import stage1Pack from '../../DAYS_01_10_CONTENT.json'
  └─ initializeCurriculumRegistry()
       │
       ▼
[NORMALIZATION FUNCTION]
src/data/curriculumRegistry.ts -> normalizeDayLesson(rawDay)
  └─ Line 448: if (Array.isArray(rawUse.dialogues) && rawUse.dialogues.length > 0) -> TRUE
  └─ rawScenarioList = rawUse.dialogues (10 scenarios)
  └─ Maps each scenario: turns extracted from sc.turns (20 turns each)
  └─ Returns normalized HindiDayLesson:
       use: {
         situation: "...",
         dialogue: normalizedScenarios[0], // 20 turns
         dialogues: normalizedScenarios,    // 10 scenarios
         speakingTask: { ... }
       }
  └─ Stored in allDaysCache.set(1, normalizedDay)
       │
       ▼
[SERVICE LAYER]
src/services/HindiCourseService.ts -> HindiCourseManager.getDayByNumber(1)
  └─ Calls getRegistryDayByNumber(1) -> returns cached normalized Day 1 object
       │
       ▼
[UI COMPONENT]
src/components/hindi/HindiLessonView.tsx
  └─ Line 80: availableScenarios = useMemo(() => day.use?.dialogues, [day.use]) -> 10 Scenarios
  └─ Line 979: availableScenarios.length > 1 is TRUE:
       Renders: "10 Scenarios Available • Scenario 1 of 10"
  └─ Line 1003: Multi-Scenario Tab Switcher renders 10 scenario buttons
  └─ Renders 20 conversational turns with distinct speakers and translations.
```

---

## Section B: Day 11 Source → Runtime Data Path

```
[SOURCE FILE]
./DAYS_11_20_CONTENT.json
  └─ days[0] (Day 11)
      ├─ dialogues: [ ...10 scenario objects, each with turns: [20 turns]... ]  <-- PLACED AT ROOT
      └─ use: {
            dialogue: [ ...legacy 4-turn array... ],
            speakingTask: { ... }
            // NOTE: use.dialogues is UNDEFINED!
         }
       │
       ▼
[REGISTRY IMPORT & INITIALIZATION]
src/data/curriculumRegistry.ts
  └─ import stage2Pack from '../../DAYS_11_20_CONTENT.json'
  └─ initializeCurriculumRegistry()
       │
       ▼
[NORMALIZATION FUNCTION]
src/data/curriculumRegistry.ts -> normalizeDayLesson(rawDay)
  └─ Line 448: Array.isArray(rawUse.dialogues) -> FALSE (rawDay.dialogues at root is ignored)
  └─ Line 450: else if (rawUse.dialogue) -> TRUE
  └─ rawScenarioList = [ rawUse.dialogue ] (1 item, which is a flat array)
  └─ Line 468: Array.isArray(sc.turns) -> FALSE (sc is an Array, sc.turns is undefined)
  └─ Line 471: Array.isArray(sc.lines) -> FALSE
  └─ normalizedTurns = [] (0 turns extracted)
  └─ Line 499: Fallback triggered: normalizedTurns.length === 0 && examples.length >= 2
       Synthesizes Turn 1: Speaker A = cleanText(examples[0].en)
       Synthesizes Turn 2: Speaker B = cleanText(examples[1].en)
       * cleanDialogueNaturalText strips "in this specific situation" from examples[1],
         making Turn 1 and Turn 2 IDENTICAL.
  └─ Resulting normalized day object:
       use: {
         dialogues: [ { id: "scenario_11_1", title: "Day 11 Conversation", turns: [2 turns] } ],
         dialogue: { id: "scenario_11_1", title: "Day 11 Conversation", turns: [2 turns] }
       }
       │
       ▼
[SERVICE LAYER]
src/services/HindiCourseService.ts -> HindiCourseManager.getDayByNumber(11)
  └─ Returns normalized Day 11 containing only the 1 synthesized fallback scenario (2 turns).
       │
       ▼
[UI COMPONENT]
src/components/hindi/HindiLessonView.tsx
  └─ Line 80: availableScenarios = [ day.use.dialogues[0] ] (length === 1)
  └─ Line 979: availableScenarios.length > 1 is FALSE:
       Renders subtitle: `${currentScenario?.turns?.length || 0} Spoken Conversational Turns`
       = "2 Spoken Conversational Turns"
  └─ Line 1003: Multi-Scenario Tab Switcher is NOT rendered (hidden because length <= 1)
  └─ Renders only the 2 identical fallback turns.
```

---

## Section C: Actual Day 1 Dialogue Runtime Shape

Inspection via Node runtime (`getRegistryDayByNumber(1)`):

```json
{
  "dayNumber": 1,
  "use": {
    "situation": "Real-World Practical Conversation (दैनिक जीवन में बातचीत)",
    "dialoguesCount": 10,
    "dialogues": [
      {
        "id": "d01_sc01",
        "title": "New Employee First Day Welcome",
        "context": "Amit arrives at the corporate office reception on his first workday.",
        "characters": ["Amit", "Sneha"],
        "turns": [
          {
            "id": "d01_sc01_t01",
            "speaker": "Sneha",
            "avatar": "👤",
            "textEn": "Good morning! Welcome to Apex Global Solutions.",
            "textHi": "शुभ प्रभात! एपेक्स ग्लोबल सॉल्यूशंस में आपका स्वागत है।",
            "isContinuation": false
          },
          "... 19 more turns ..."
        ]
      },
      "... 9 more scenario objects ..."
    ],
    "dialogue": {
      "id": "d01_sc01",
      "title": "New Employee First Day Welcome",
      "turns": [ "...20 turns..." ]
    }
  }
}
```

---

## Section D: Actual Day 11 Dialogue Runtime Shape

Inspection via Node runtime (`getRegistryDayByNumber(11)`):

```json
{
  "dayNumber": 11,
  "use": {
    "situation": "Real-World Practical Conversation (दैनिक जीवन में बातचीत)",
    "dialoguesCount": 1,
    "dialogues": [
      {
        "id": "scenario_11_1",
        "title": "Day 11 Conversation",
        "context": "Real-World Practical Conversation (दैनिक जीवन में बातचीत)",
        "situation": "Real-World Practical Conversation (दैनिक जीवन में बातचीत)",
        "characters": [],
        "turns": [
          {
            "id": "turn_11_1_1",
            "speaker": "Speaker A",
            "avatar": "👤",
            "textEn": "Please submit the quarterly financial report by Friday afternoon.",
            "textHi": "कृपया शुक्रवार दोपहर तक त्रैमासिक वित्तीय रिपोर्ट जमा करें।",
            "isContinuation": false
          },
          {
            "id": "turn_11_1_2",
            "speaker": "Speaker B",
            "avatar": "👥",
            "textEn": "Please submit the quarterly financial report by Friday afternoon.",
            "textHi": "कृपया शुक्रवार दोपहर तक त्रैमासिक वित्तीय रिपोर्ट जमा करें ।",
            "isContinuation": false
          }
        ]
      }
    ],
    "dialogue": {
      "id": "scenario_11_1",
      "title": "Day 11 Conversation",
      "turns": [ "...2 turns..." ]
    }
  }
}
```

---

## Section E: Exact Structural Mismatch

| Level | Day 1 (`DAYS_01_10_CONTENT.json`) | Day 11 (`DAYS_11_20_CONTENT.json`) | Impact |
| :--- | :--- | :--- | :--- |
| **Root Level (`rawDay`)** | `rawDay.dialogues` = `undefined` | `rawDay.dialogues` = `Array(10)` (Full 20-turn dialogues) | Registry normalization ignores root `rawDay.dialogues`. |
| **`rawDay.use` Level** | `rawDay.use.dialogues` = `Array(10)` | `rawDay.use.dialogues` = `undefined` | Registry expects `rawUse.dialogues`. When missing, it skips to fallback. |
| **`rawDay.use.dialogue`** | Single Object `{ id, title, turns: Array(6) }` | Flat Array `[ { speaker, textEn, textHi }, ... ]` | Array does not have `.turns` or `.lines` property, so turn parser yields `0` turns. |

---

## Section F: Fallback Logic Found in Codebase

### 1. `src/data/curriculumRegistry.ts` (Lines 440–535)

```typescript
// Location: src/data/curriculumRegistry.ts
const rawUse = rawDay.use || {};
let rawScenarioList: any[] = [];
if (Array.isArray(rawUse.dialogues) && rawUse.dialogues.length > 0) {
  rawScenarioList = rawUse.dialogues;
} else if (rawUse.dialogue) {
  rawScenarioList = [rawUse.dialogue]; // <-- Day 11 hits this branch
}

// Fallback if no scenario found
if (rawScenarioList.length === 0) {
  rawScenarioList = [{ id: `dialogue_${dayNumber}`, title: `Day ${dayNumber} Conversation`, context: globalSituation, turns: [] }];
}

const normalizedScenarios = rawScenarioList.map((sc, scIdx) => {
  let rawTurns = [];
  if (Array.isArray(sc.turns)) rawTurns = sc.turns;
  else if (Array.isArray(sc.lines)) rawTurns = sc.lines;
  // NOTE: For Day 11, sc is rawUse.dialogue which is an Array, NOT an object with sc.turns.
  // Therefore rawTurns is []!

  let normalizedTurns = rawTurns.map(...);

  // FALLBACK SYNTHESIZER (Lines 499-520)
  if (normalizedTurns.length === 0 && examples.length >= 2) {
    normalizedTurns = [
      {
        id: `turn_${dayNumber}_${scIdx + 1}_1`,
        speaker: 'Speaker A',
        avatar: '👤',
        textEn: cleanDialogueNaturalText(examples[0].en),
        textHi: cleanDialogueNaturalHindiText(examples[0].hi),
        isContinuation: false
      },
      {
        id: `turn_${dayNumber}_${scIdx + 1}_2`,
        speaker: 'Speaker B',
        avatar: '👥',
        textEn: cleanDialogueNaturalText(examples[1].en),
        textHi: cleanDialogueNaturalHindiText(examples[1].hi),
        isContinuation: false
      }
    ];
  }
  ...
});
```

### 2. `src/components/hindi/HindiLessonView.tsx` (Lines 978–983)

```tsx
// Location: src/components/hindi/HindiLessonView.tsx
<span className="text-[11px] text-slate-400 block font-medium">
  {availableScenarios.length > 1
    ? `${availableScenarios.length} Scenarios Available • Scenario ${activeScenarioIndex + 1} of ${availableScenarios.length}`
    : `${currentScenario?.turns?.length || 0} Spoken Conversational Turns`}
</span>
```
When `availableScenarios.length === 1`, it evaluates to `"2 Spoken Conversational Turns"`.

---

## Section G: Source Precedence & Data Freshness

1. **`DAYS_11_20_CONTENT.json` IS imported directly** by `src/data/curriculumRegistry.ts` on line 17:
   ```typescript
   import stage2Pack from '../../DAYS_11_20_CONTENT.json';
   ```
2. **Build and Bundler Freshness**: Vite bundles `DAYS_11_20_CONTENT.json` directly into the build. There is NO caching issue, stale bundle, or missing import.
3. **Data Loss Check**: None of the 100 re-authored dialogues were lost or overwritten. All 10 dialogues for Day 11 (and Days 12–20) with all 20 turns each are present in `DAYS_11_20_CONTENT.json`.

---

## Section H: Why Day 11 Shows Only 2 Turns

To summarize the causality chain:
1. `DAYS_11_20_CONTENT.json` placed `dialogues` on `rawDay.dialogues` rather than `rawDay.use.dialogues`.
2. `normalizeDayLesson` checked `rawDay.use.dialogues`, found `undefined`.
3. `normalizeDayLesson` fell back to `rawDay.use.dialogue` (which was an un-normalized 4-turn array).
4. `normalizeDayLesson` checked `sc.turns` (which was `undefined` on an array), resulting in `0` turns.
5. The fallback branch constructed 2 turns from `rawDay.examples[0]` and `rawDay.examples[1]`.
6. Text cleaner stripped `"in this specific situation"` from `examples[1]`, causing identical text for Speaker A and B.
7. `HindiLessonView.tsx` displayed the 1 scenario with its 2 fallback turns.

---

## Section I: Which Data Contains the 10 Long Dialogues

In `DAYS_11_20_CONTENT.json`:
- **Day 11**: `data.days[0].dialogues` contains 10 dialogues (`d11_sc01` to `d11_sc10`), each containing 20 turns.
- **Day 12**: `data.days[1].dialogues` contains 10 dialogues (`d12_sc01` to `d12_sc10`), each containing 20 turns.
- **Day 13**: `data.days[2].dialogues` contains 10 dialogues (`d13_sc01` to `d13_sc10`), each containing 20 turns.
- **Day 14**: `data.days[3].dialogues` contains 10 dialogues (`d14_sc01` to `d14_sc10`), each containing 20 turns.
- **Day 15**: `data.days[4].dialogues` contains 10 dialogues (`d15_sc01` to `d15_sc10`), each containing 20 turns.
- **Day 16**: `data.days[5].dialogues` contains 10 dialogues (`d16_sc01` to `d16_sc10`), each containing 20 turns.
- **Day 17**: `data.days[6].dialogues` contains 10 dialogues (`d17_sc01` to `d17_sc10`), each containing 20 turns.
- **Day 18**: `data.days[7].dialogues` contains 10 dialogues (`d18_sc01` to `d18_sc10`), each containing 20 turns.
- **Day 19**: `data.days[8].dialogues` contains 10 dialogues (`d19_sc01` to `d19_sc10`), each containing 20 turns.
- **Day 20**: `data.days[9].dialogues` contains 10 dialogues (`d20_sc01` to `d20_sc10`), each containing 20 turns.

---

## Section J: Exact Files Responsible

1. **`DAYS_11_20_CONTENT.json`**:
   - `dialogues` array is stored under `rawDay.dialogues` instead of `rawDay.use.dialogues`.
2. **`src/data/curriculumRegistry.ts` (lines 447–473)**:
   - Line 448 only checks `rawUse.dialogues`. It does not check `rawDay.dialogues`.
   - Lines 468–472 only check `sc.turns` and `sc.lines`. It does not check if `sc` itself is an Array of turns.

---

## Section K: Safest Correction Strategy (Recommended For Next Phase)

To permanently make the curriculum robust and guarantee that all 60 days render flawlessly regardless of JSON schema variation:

1. **Dual-Path Normalization in `src/data/curriculumRegistry.ts`**:
   Update `normalizeDayLesson` to check all valid locations:
   ```typescript
   // Check rawUse.dialogues OR rawDay.dialogues OR rawDay.use?.dialogue
   let rawScenarioList: any[] = [];
   if (Array.isArray(rawUse.dialogues) && rawUse.dialogues.length > 0) {
     rawScenarioList = rawUse.dialogues;
   } else if (Array.isArray(rawDay.dialogues) && rawDay.dialogues.length > 0) {
     rawScenarioList = rawDay.dialogues;
   } else if (rawUse.dialogue) {
     if (Array.isArray(rawUse.dialogue)) {
       rawScenarioList = [{ id: `dialogue_${dayNumber}`, title: `Day ${dayNumber} Conversation`, turns: rawUse.dialogue }];
     } else {
       rawScenarioList = [rawUse.dialogue];
     }
   }
   ```
2. **JSON Canonical Alignment in `DAYS_11_20_CONTENT.json`**:
   Ensure `day.use.dialogues = day.dialogues` for canonical consistency across all batch JSON files.

---

## Section L: Verification of Read-Only Status
- No code was edited or overwritten.
- Dev server and application state remain unchanged.
- All forensic findings documented.
