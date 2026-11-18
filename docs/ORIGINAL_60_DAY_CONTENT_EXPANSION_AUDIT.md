# Original 60-Day Content Expansion Audit

## 1. Executive Summary
- **Total Curriculum Days**: 60 Days (Stages 1 through 6)
- **Current Total Dialogues**: 76 (Across all 60 days)
- **Target Dialogues**: 600 Dialogues (10 distinct dialogues per day × 60 days)
- **Current Total Dialogue Lines**: 332 (Average ~4.4 lines per dialogue)
- **Target Dialogue Lines**: 12,000–18,000+ Lines (20–30+ meaningful lines per dialogue)
- **Current Total Examples**: 4791
- **Current Total Practice Exercises**: 3232
- **Current Total Vocabulary Items**: 3736
- **Accidental Duplication Status**: 0 accidental duplicates remaining across Examples and Practice.

## 2. Architecture & Data Flow Inspection
| Component / Layer | Source File / Location | Responsibility |
|---|---|---|
| **Data Storage Files** | `DAYS_01_10_CONTENT.json` to `DAYS_51_60_CONTENT.json` | 6 JSON persistence packs containing full stage lesson models |
| **Curriculum Normalizer** | `src/data/curriculumRegistry.ts` | Normalizes vocabulary, phonetics, grammar, examples, dialogues, and assessments |
| **Course Query Service** | `src/services/HindiCourseService.ts` | Encapsulates querying by day, stage, category, and skill tag |
| **Lesson Engine View** | `src/components/hindi/HindiLessonView.tsx` | 8-tab comprehensive interactive lesson experience with scenario selector |
| **Spoken Lab / Speech** | `src/components/hindi/HindiSpokenLabModal.tsx` | Pronunciation, voice & accent training, and minimal pairs shadowing |
| **Dialogue Player** | `src/components/lesson/DialoguePlayer.tsx` | Specialized conversational audio player with speaker avatars and translations |
| **Practice Runner** | `src/components/hindi/HindiPracticeRunner.tsx` | Interactive multi-format exercise runner with instant Hindi explanation |

## 3. Day-by-Day Content Breakdown

| Day | Topic / Title | Vocab | Examples | Practice | Current Dialogues | Turn Lengths | Min Pairs | Assess |
|---|---|---|---|---|---|---|---|---|
| Day 01 | Daily Greetings, Time-Bound Salutations & Bas... | 60 | 100 | 65 | 1 | [6] | 6 | 9 |
| Day 02 | Social Etiquette, Courtesy Keywords & Polite ... | 60 | 25 | 10 | 1 | [5] | 4 | 4 |
| Day 03 | Expressive Reactions, Emotional Exclamations ... | 60 | 10 | 5 | 1 | [4] | 4 | 4 |
| Day 04 | Conversational Phrases & Daily Action Imperat... | 60 | 8 | 5 | 1 | [4] | 4 | 4 |
| Day 05 | Present State of Being: Copular 'Be' (Is / Am... | 60 | 8 | 5 | 1 | [4] | 4 | 4 |
| Day 06 | Past State of Being: Was / Were & Time Marker... | 60 | 100 | 13 | 1 | [6] | 3 | 6 |
| Day 07 | Future State of Being & Presence: Will Be & T... | 60 | 100 | 5 | 1 | [6] | 3 | 6 |
| Day 08 | Spatial Demonstratives & Existential 'There i... | 60 | 100 | 5 | 1 | [6] | 3 | 6 |
| Day 09 | Possession, Relationships & Attributes: Has /... | 60 | 100 | 8 | 1 | [6] | 2 | 6 |
| Day 10 | Stage 1 Cumulative Review, Error Audit & Synt... | 60 | 100 | 5 | 1 | [7] | 3 | 6 |
| Day 11 | Imperatives, Directives, Polite Requests & Fo... | 60 | 95 | 24 | 1 | [0] | 10 | 9 |
| Day 12 | Existential Clauses: 'There is' / 'There are'... | 60 | 90 | 24 | 1 | [0] | 10 | 9 |
| Day 13 | Possession, Attributes & Health States: 'Have... | 60 | 90 | 24 | 1 | [0] | 10 | 9 |
| Day 14 | Simple Present Tense I: Universal Truths, Hab... | 60 | 100 | 24 | 1 | [0] | 10 | 9 |
| Day 15 | Simple Present Tense II: Auxiliary Negation, ... | 60 | 70 | 24 | 1 | [0] | 10 | 9 |
| Day 16 | Present Continuous Tense: Dynamic Progression... | 60 | 90 | 24 | 1 | [0] | 10 | 9 |
| Day 17 | Simple Past Tense I: Regular Verb Morphology,... | 60 | 100 | 24 | 1 | [0] | 10 | 9 |
| Day 18 | Simple Past Tense II: Irregular Verb Paradigm... | 60 | 85 | 24 | 1 | [0] | 10 | 9 |
| Day 19 | Modal Auxiliaries of Modality: Ability, Possi... | 60 | 90 | 24 | 1 | [0] | 10 | 9 |
| Day 20 | Stage 2 Comprehensive Milestone: Integrated C... | 60 | 90 | 24 | 1 | [0] | 10 | 9 |
| Day 21 | Regular Past Simple Verbs (-ed, -d, -ied) & Y... | 60 | 100 | 65 | 1 | [0] | 10 | 11 |
| Day 22 | High-Frequency Irregular Past Simple (Went, C... | 60 | 100 | 65 | 1 | [0] | 10 | 11 |
| Day 23 | Past Simple Negative (Didn't + Base Verb V1 &... | 60 | 100 | 65 | 1 | [0] | 10 | 11 |
| Day 24 | Past Simple Yes/No Questions: Inversion, Auxi... | 60 | 100 | 26 | 1 | [4] | 0 | 3 |
| Day 25 | Past Wh- Information Questions: Querying Fact... | 60 | 100 | 26 | 1 | [4] | 0 | 3 |
| Day 26 | Past Temporal Precision, Anchoring Markers & ... | 60 | 100 | 26 | 1 | [4] | 0 | 3 |
| Day 27 | Causes & Results in Past: Causal Reasoning & ... | 60 | 100 | 26 | 1 | [4] | 0 | 3 |
| Day 28 | Past Continuous Tense: Dynamic Past Progressi... | 60 | 100 | 26 | 1 | [4] | 0 | 3 |
| Day 29 | Past Simple vs Past Continuous: Background Fl... | 60 | 100 | 26 | 1 | [4] | 0 | 3 |
| Day 30 | Stage 3 Cumulative Mastery Review: Complete P... | 60 | 90 | 65 | 1 | [0] | 10 | 11 |
| Day 31 | Social Introductions, Family & Reconnecting... | 69 | 100 | 95 | 1 | [7] | 10 | 9 |
| Day 32 | Modal Auxiliaries for Politeness & Advice (Co... | 62 | 100 | 95 | 1 | [6] | 10 | 9 |
| Day 33 | Deductions, Possibility & Obligation (Must, M... | 75 | 100 | 95 | 1 | [6] | 0 | 8 |
| Day 34 | Dining Out, Restaurant Etiquette & Food Prefe... | 74 | 100 | 95 | 1 | [6] | 0 | 8 |
| Day 35 | Time Management, Appointments & Scheduling... | 76 | 100 | 95 | 1 | [6] | 0 | 8 |
| Day 36 | Diplomatic Refusals, Agreement & Consent... | 71 | 100 | 95 | 1 | [6] | 0 | 8 |
| Day 37 | Encouragement, Praise, Congratulations & Good... | 62 | 100 | 95 | 1 | [6] | 0 | 8 |
| Day 38 | Emotional Communication & Constructive Apolog... | 67 | 100 | 95 | 1 | [6] | 0 | 8 |
| Day 39 | Degrees of Adjective Comparison & Sentence Tr... | 69 | 100 | 95 | 1 | [6] | 0 | 8 |
| Day 40 | STAGE 4 CUMULATIVE MASTERY REVIEW (Synthesize... | 67 | 100 | 95 | 1 | [6] | 0 | 8 |
| Day 41 | House, Architecture & Living Space Descriptor... | 62 | 100 | 95 | 1 | [6] | 5 | 5 |
| Day 42 | Street Directions, City Transit & Commuting... | 62 | 100 | 95 | 1 | [6] | 5 | 5 |
| Day 43 | Shopping, Product Inquiries & Consumer Commun... | 61 | 100 | 95 | 1 | [6] | 5 | 5 |
| Day 44 | Higher Education, Academic Disciplines & Camp... | 61 | 100 | 95 | 1 | [6] | 5 | 5 |
| Day 45 | Medical Symptoms & Doctor Consultations... | 60 | 100 | 95 | 1 | [6] | 5 | 5 |
| Day 46 | Pharmacy, Diagnostics & Medical Specialists... | 60 | 100 | 95 | 1 | [6] | 5 | 5 |
| Day 47 | Weather, Seasons, Climate & Environmental Con... | 60 | 100 | 95 | 1 | [6] | 5 | 5 |
| Day 48 | Animal Kingdom, Habitats & Zoological Vocabul... | 60 | 100 | 95 | 1 | [6] | 5 | 5 |
| Day 49 | Human Appearance, Attire & Personality Descri... | 60 | 100 | 95 | 1 | [6] | 5 | 5 |
| Day 50 | STAGE 5 CUMULATIVE MASTERY REVIEW (Synthesize... | 60 | 100 | 95 | 1 | [6] | 5 | 5 |
| Day 51 | Professional Etiquette, Official Notices & Pu... | 64 | 25 | 55 | 3 | [5, 5, 6] | 5 | 3 |
| Day 52 | Corporate Office Operations, Meetings & Execu... | 67 | 25 | 55 | 3 | [5, 5, 5] | 5 | 3 |
| Day 53 | Banking Services, Commercial Transactions & F... | 63 | 25 | 55 | 3 | [5, 6, 5] | 5 | 3 |
| Day 54 | Travel Bookings, Railway, Airport & Hotel Hos... | 63 | 25 | 55 | 3 | [5, 5, 5] | 5 | 3 |
| Day 55 | Civic Inquiries, Postal Operations, Media & L... | 64 | 25 | 55 | 3 | [5, 5, 6] | 5 | 3 |
| Day 56 | Commercial Negotiations, Sales Pitches & Vend... | 62 | 25 | 55 | 3 | [5, 5, 5] | 5 | 3 |
| Day 57 | Professional Resumes, Bio-Data & Formal Appli... | 63 | 25 | 55 | 3 | [5, 5, 5] | 5 | 3 |
| Day 58 | Executive Job Interviews & Professional Self-... | 63 | 25 | 55 | 3 | [5, 5, 5] | 5 | 3 |
| Day 59 | Executive Keynote Presentations, Public Speak... | 62 | 25 | 55 | 1 | [5] | 3 | 3 |
| Day 60 | Grand Capstone Fluency Portfolio, CEFR B1+ Ex... | 67 | 25 | 55 | 1 | [5] | 3 | 3 |

## 4. Key Audit Findings & Expansion Roadmap
1. **Dialogue Underfill**: All 60 days currently have fewer than 10 dialogues (Days 1–50 have 1 dialogue each with 4–7 lines; Days 51–58 have 3 dialogues each with 5–6 lines; Days 59–60 have 1 dialogue each). The goal is expanding each day to 10 distinct, long-form (20–30+ turns) dialogues.
2. **Dialogue Scenario Switcher Compatibility**: The existing `HindiLessonView.tsx` already contains a native multi-scenario tab switcher (`availableScenarios.map`) that seamlessly displays 10 scenarios per day with continuous conversation audio playback (`handlePlayFullDialogue`), turn-by-turn speech practice, speaker avatars, and bilingual Hindi translation cards.
3. **Preservation of App Architecture**: The existing 6-stage / 60-day curriculum model, tabs, UI components, speech synthesis engine, and assessment views will be 100% preserved without any destructive rewrites.
4. **Execution Strategy**: Content expansion will proceed in strictly validated batches:
   - **Batch 1**: Stage 1 (Days 01–10) — 10 dialogues/day × 10 days = 100 long-form dialogues (2,000–3,000+ turns).
   - **Batch 2**: Stage 2 (Days 11–20) — 10 dialogues/day × 10 days = 100 long-form dialogues (2,000–3,000+ turns).
   - **Batch 3**: Stage 3 (Days 21–30) — 10 dialogues/day × 10 days = 100 long-form dialogues (2,000–3,000+ turns).
   - **Batch 4**: Stage 4 (Days 31–40) — 10 dialogues/day × 10 days = 100 long-form dialogues (2,000–3,000+ turns).
   - **Batch 5**: Stage 5 (Days 41–50) — 10 dialogues/day × 10 days = 100 long-form dialogues (2,000–3,000+ turns).
   - **Batch 6**: Stage 6 (Days 51–60) — 10 dialogues/day × 10 days = 100 long-form dialogues (2,000–3,000+ turns).
