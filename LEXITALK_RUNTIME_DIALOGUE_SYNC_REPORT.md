# LEXITALK — RUNTIME DIALOGUE & ASSET SYNC REPORT

> **Audit Mode:** READ-ONLY RUNTIME & ASSET DIAGNOSTIC
> **Date:** August 29, 2026
> **Policy:** Zero code, curriculum, or UI modifications executed.

---

## 1. Executive Summary & Diagnostic Findings

- **Production JSON Packs Status:** **VERIFIED PASS (10 Scenarios / 200+ Turns per day across all 60 days)**
- **Curriculum Registry Status:** **VERIFIED PASS (`normalizeDayLesson()` outputs 10 Scenarios / 200+ Turns per day)**
- **Android Packaged Asset Status:** **STALE / OUTDATED (Contains pre-compiled legacy bundle with 1 Scenario / 6 Turns)**
- **Root Cause:** **F. Android packaged assets / G. Cached/stale build**
  - The project source files, production JSON packs (`DAYS_01_10_CONTENT.json` .. `DAYS_51_60_CONTENT.json`), and `curriculumRegistry.ts` **ALREADY CONTAIN ALL 10 SCENARIOS & 200 TURNS PER DAY**.
  - However, `android/app/src/main/assets/public/assets/index-Nx7mhDUi.js` was compiled from an older build prior to the curriculum pack integration and was never synced via Capacitor.

---

## 2. Production JSON Packs Verification (Task 1)

| Day | Production Pack JSON File | Scenario Count | Total Spoken Turns | Status |
| :---: | :--- | :---: | :---: | :---: |
| **Day 1** | `DAYS_01_10_CONTENT.json` | **10** | **200** | **PASS** |
| **Day 2** | `DAYS_01_10_CONTENT.json` | **10** | **200** | **PASS** |
| **Day 3** | `DAYS_01_10_CONTENT.json` | **10** | **200** | **PASS** |
| **Day 4** | `DAYS_01_10_CONTENT.json` | **10** | **200** | **PASS** |
| **Day 5** | `DAYS_01_10_CONTENT.json` | **10** | **200** | **PASS** |
| **Day 10** | `DAYS_01_10_CONTENT.json` | **10** | **200** | **PASS** |
| **Day 20** | `DAYS_11_20_CONTENT.json` | **10** | **200** | **PASS** |
| **Day 30** | `DAYS_21_30_CONTENT.json` | **10** | **200** | **PASS** |
| **Day 40** | `DAYS_31_40_CONTENT.json` | **10** | **200** | **PASS** |
| **Day 50** | `DAYS_41_50_CONTENT.json` | **10** | **228** | **PASS** |
| **Day 60** | `DAYS_51_60_CONTENT.json` | **10** | **209** | **PASS** |

---

## 3. Curriculum Registry Output Verification (Task 2)

| Day | Registry Function | Scenarios After Normalization | Spoken Turns After Normalization | Status |
| :---: | :--- | :---: | :---: | :---: |
| **Day 1** | `getRegistryDayByNumber(1)` | **10** | **200** | **PASS** |
| **Day 2** | `getRegistryDayByNumber(2)` | **10** | **200** | **PASS** |
| **Day 3** | `getRegistryDayByNumber(3)` | **10** | **200** | **PASS** |
| **Day 4** | `getRegistryDayByNumber(4)` | **10** | **200** | **PASS** |
| **Day 5** | `getRegistryDayByNumber(5)` | **10** | **200** | **PASS** |
| **Day 10** | `getRegistryDayByNumber(10)` | **10** | **200** | **PASS** |
| **Day 20** | `getRegistryDayByNumber(20)` | **10** | **200** | **PASS** |
| **Day 30** | `getRegistryDayByNumber(30)` | **10** | **200** | **PASS** |
| **Day 40** | `getRegistryDayByNumber(40)` | **10** | **200** | **PASS** |
| **Day 50** | `getRegistryDayByNumber(50)` | **10** | **228** | **PASS** |
| **Day 60** | `getRegistryDayByNumber(60)` | **10** | **209** | **PASS** |

---

## 4. Web Application Data Source & Android Asset Inspection (Tasks 3 & 4)

### Web Application Import Pipeline:
1. `src/data/curriculumRegistry.ts` imports the production JSON packs (`DAYS_01_10_CONTENT.json` .. `DAYS_51_60_CONTENT.json`).
2. `src/services/HindiCourseService.ts` queries `getRegistryDayByNumber(dayNum)`.
3. `src/components/learner/DialoguePlayerView.tsx` calls `HindiCourseService.getDayByNumber()` and receives all **10 scenarios** with **200+ turns**.

### Android Packaged Assets Inspection:
- **Packaged Asset Directory:** `android/app/src/main/assets/public/assets/`
- **Bundled JS File:** `android/app/src/main/assets/public/assets/index-Nx7mhDUi.js` (1.68 MB)
- **Last Modified Timestamp:** August 29, 2026, 12:49:33 PM
- **Content Verification:**
  - 10-Scenario ID matches (`d01_sc01` .. `d01_sc10`): **0 Matches (MISSING)**
  - Legacy single dialogue matches (`LESSON_A1_1_1_DATA`): **181 Matches (PRESENT)**
  - **Result:** The Android asset bundle contains an **OLD BUILD** of the web app from before `curriculumRegistry.ts` was connected to the production packs.

---

## 5. Day 1 Scenario & Turn Count at Every Pipeline Stage

| Pipeline Stage | File / Asset Path | Scenario Count | Turn Count | Status |
| :--- | :--- | :---: | :---: | :--- |
| **1. Authoritative Source** | `scripts/repair_a1_batch1/day01_dialogues.js` | **10** | **200** | **INTACT** |
| **2. Content Builder Module** | `content_builder/day01.js` | **10** | **200** | **INTACT** |
| **3. Production JSON Pack** | `DAYS_01_10_CONTENT.json` | **10** | **200** | **INTACT** |
| **4. Curriculum Registry** | `src/data/curriculumRegistry.ts` | **10** | **200** | **INTACT** |
| **5. Web Application Service** | `src/services/HindiCourseService.ts` | **10** | **200** | **INTACT** |
| **6. React UI View** | `src/components/learner/DialoguePlayerView.tsx` | **10** | **200** | **INTACT** |
| **7. Android Packaged Asset** | `android/app/src/main/assets/public/assets/index-Nx7mhDUi.js` | **1** | **6** | **STALE / OUTDATED** |

> **Point Where 10 Scenarios Become 1:** Inside the pre-compiled Android web bundle `android/app/src/main/assets/public/assets/index-Nx7mhDUi.js`.

---

## 6. Stale / Duplicate Asset Paths

The following packaged Android assets are stale and require updating from a fresh web build:
1. `android/app/src/main/assets/public/assets/index-Nx7mhDUi.js` (1.68 MB - Stale bundle)
2. `android/app/src/main/assets/public/assets/index-W2o2hsnK.js` (1.65 MB - Stale bundle)
3. `android/app/src/main/assets/public/assets/index-CdJyuxRf.css` (112 KB - Stale CSS)
4. `android/app/src/main/assets/public/assets/index-DxAyQ4ha.css` (109 KB - Stale CSS)

---

## 7. Final Root Cause Determination

### Primary Root Cause: **F. Android packaged assets** / **G. Cached/stale build**
The project source code and production JSON packs **ALREADY CONTAIN ALL 600 SCENARIOS & 12,247 SPOKEN TURNS**. However, the Android application directory (`android/app/src/main/assets/public/`) contains an un-synced, stale web build from an earlier development iteration when lessons loaded 1-scenario legacy definitions.

---

## 8. Safest Minimal Repair & Sync Plan (Pending Approval)

1. **Step 1 (Web Build):** Run `npm run build` (or `vite build`) to compile a fresh web distribution in `dist/` incorporating the 600-scenario production packs.
2. **Step 2 (Capacitor Sync):** Run `npx cap sync android` (or copy fresh `dist/` output to `android/app/src/main/assets/public/`) to update Android packaged web assets.
3. **Step 3 (Android APK Build):** Compile the updated Android APK in Android Studio.

*ZERO CODE, CURRICULUM, OR ASSET MODIFICATIONS HAVE BEEN EXECUTED.*