import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rowsPath = path.resolve(__dirname, 'audit_rows.json');
const rows = JSON.parse(fs.readFileSync(rowsPath, 'utf-8'));

let doc = `# Batch 1 Pedagogical Alignment Audit (Days 01–10)

## 1. Executive Summary & Verification Findings

- **Audit Date**: August 27, 2026
- **Scope**: All 100 Dialogues across Days 01–10 (Stage 1: Foundation & Essential Communication)
- **Evaluation Benchmark**: Original 60-Day Curriculum Objectives & Grammar Taxonomy for Days 01–10
- **Overall Result**: **TOPIC MAPPING DISCREPANCY IDENTIFIED**
  - The expanded dialogues in Batch 1 were generated against a **substituted topic sequence** rather than the **Original 60-Day Curriculum Day Objectives**.
  - **Unaltered Core Content**: All underlying \`teach\` (Grammar Lessons & Hindi Explanations), \`phonetics\` (IPA, Minimal Pairs, Articulation Rules), \`learn.vocabulary\` (60 vocabulary items per day = 600 total items), \`learn.spokenPhrases\`, \`examples\`, \`practice\` (Exercises), and \`assess\` (Quizzes) remain **100% authentic, untouched, and uncorrupted** in \`DAYS_01_10_CONTENT.json\`.
  - The divergence is strictly localized within the \`use.dialogues\` arrays generated during dialogue expansion.

---

### Alignment Classification Metrics

| Status Category | Dialogue Count | Percentage | Definition |
| :--- | :---: | :---: | :--- |
| **Fully Aligned (ALIGNED)** | **0** | **0.0%** | Dialogue strictly targets the exact original Day objective, target grammar, and core functional vocabulary. |
| **Partially Aligned (PARTIALLY ALIGNED)** | **27** | **27.0%** | Dialogue incorporates relevant communicative elements (e.g., greetings, basic requests, synthesis), but diverges in dominant grammar focus or blends substituted grammar. |
| **Misaligned (MISALIGNED)** | **73** | **73.0%** | Dialogue was generated against an entirely different pedagogical grammar topic (e.g., Daily Routines instead of Social Etiquette; Spatial Prepositions instead of Emotional Exclamations; Frequency Adverbs instead of Present Copular Be). |
| **Total Dialogues Audited** | **100** | **100.0%** | 10 Scenarios per Day × 10 Days |

---

## 2. Topic Mapping Discrepancy Matrix

The following table reveals the exact topic shift between the **Original Day Objective** and the **Substituted Topic Mapping** used in the expansion scripts:

| Day | Original 60-Day Curriculum Objective | Substituted Topic Mapping Used in Dialogues | Pedagogical Divergence Description | Alignment Summary |
| :---: | :--- | :--- | :--- | :---: |
| **Day 01** | **Daily Greetings, Time-Bound Salutations & Basic Parting** | Personal Identity, Greetings & Verb 'To Be' (*am / is / are*) | Dialogues contain time-bound greetings, but heavily pivot into personal identity introductions, profession descriptors, and copular *to-be* sentences. | 7 Partially Aligned, 3 Misaligned |
| **Day 02** | **Social Etiquette, Courtesy Keywords & Polite Interaction** | Daily Routines & Present Simple Habits (*wakes up, exercises, begins*) | Dialogues depict software standups, doctor shifts, marathon training routines; entirely omitting core courtesy keywords (*Please, Thank you, Excuse me, Pardon me, May I*). | **10 Misaligned (100%)** |
| **Day 03** | **Expressive Reactions, Emotional Exclamations & Interjections** | Spatial Prepositions & Neighborhood Navigation (*next to, behind, opposite*) | Dialogues focus on locating buildings, organizing pantries, navigating airports; entirely missing exclamatory syntax (*What a..., How..., Wow, Oh dear, Bravo, Alas*). | **10 Misaligned (100%)** |
| **Day 04** | **Conversational Phrases & Daily Action Imperatives** | Modal Verb 'Can' (*Abilities, Skills, Requests*) | Dialogues focus on candidate skills, language abilities, auditions; partially includes requests with *can*, but lacks direct/negative imperative commands (*Take a seat, Check this, Follow me*). | 10 Partially Aligned |
| **Day 05** | **Present State of Being: Copular 'Be' (*is / am / are*) & Subject Concord** | Frequency Adverbs (*Always, Usually, Often, Sometimes, Never*) | Dialogues focus on workout frequency, financial discipline, sprint cadence; replacing copular state of being with action verb frequency adverbs. | **10 Misaligned (100%)** |
| **Day 06** | **Past State of Being: Was / Were & Time Markers** | Telling Time, Clock Expressions & Daily Schedules (*o'clock, half past*) | Dialogues focus on multi-timezone meetings, train departures, surgical rosters; omitting past copula (*was / were, yesterday, last night*). | **10 Misaligned (100%)** |
| **Day 07** | **Future State of Being & Presence: Will Be / Won't Be & Time Adverbs** | Possession & Ownership (*mine, yours, his, hers, whose*) | Dialogues focus on luggage claims, lost & found, studio tools ownership; omitting future state copula (*will be, won't be, tomorrow*). | **10 Misaligned (100%)** |
| **Day 08** | **Spatial Demonstratives (*this/that/these/those*) & Existential *There is / There are*** | Present Continuous (*am/is/are + -ing actions happening now*) | Dialogues depict live football commentary, film directing, kitchen rush; replacing demonstratives/existentials with live progressive action verbs. | **10 Misaligned (100%)** |
| **Day 09** | **Possession, Relationships & Attributes: Has / Have / Had** | Present Simple vs. Present Continuous (*Routine vs. Now*) | Dialogues contrast usual routines vs today's actions (mountain homestay vs office, cycling vs metro); omitting stative possession (*has, have, had*). | **10 Misaligned (100%)** |
| **Day 10** | **Stage 1 Cumulative Review, Error Audit & Synthesis Mastery** | Comprehensive Stage 1 Synthesis & Fluency Review | Broad, realistic synthesis dialogues (interviews, walking tours, podcast), but synthesizing the substituted topics rather than pure Stage 1 grammar pillars. | 10 Partially Aligned |

---

## 3. Day-by-Day Pedagogical Alignment Breakdown

### Day 01: Daily Greetings, Time-Bound Salutations & Basic Parting
- **Original Objective**: Master formal and informal time-bound greetings (*Good morning, Good afternoon, Good evening*), arrival vs parting formulas (*Goodbye, See you later, Take care*), and honorific salutations (*Mr., Ms., Dr.*).
- **Observed Dialogue Focus**: Introductions, personal identities, job titles, and verb *to be* (*I am an engineer, She is a manager*).
- **Alignment Status**: 7 Partially Aligned, 3 Misaligned.
- **Pedagogical Finding**: While greetings are present in opening turns, the dialogue core drifts into self-introductions and copular *to-be* descriptions rather than exploring formal/informal greeting nuances, parting variations, and time-of-day boundary transitions.

### Day 02: Social Etiquette, Courtesy Keywords & Polite Interaction
- **Original Objective**: Master the 5 Courtesy Pillars (*Please, Thank you, Excuse me, Pardon me, May I / Could you please*), polite decline formulas, and etiquette across social/workplace contexts.
- **Observed Dialogue Focus**: Daily habit routines, morning alarm times, workout schedules, hospital shifts, and Present Simple verbs (*eats, starts, trains*).
- **Alignment Status**: **10 Misaligned (0/10 Aligned)**.
- **Pedagogical Finding**: Complete topic misalignment. The dialogues exercise Present Simple routine verbs instead of courtesy keywords, polite requests, and etiquette formulas.

### Day 03: Expressive Reactions, Emotional Exclamations & Interjections
- **Original Objective**: Construct natural exclamatory structures (*What a fantastic idea!, How wonderful!*) and context-appropriate interjections (*Wow, Oh dear, Bravo, Alas, Thank goodness*).
- **Observed Dialogue Focus**: Spatial prepositions (*next to, opposite, on the left, behind, above, between*) for building and pantry navigation.
- **Alignment Status**: **10 Misaligned (0/10 Aligned)**.
- **Pedagogical Finding**: Complete topic misalignment. The dialogues navigate physical spaces rather than practicing emotional reactions, exclamations, and interjections.

### Day 04: Conversational Phrases & Daily Action Imperatives
- **Original Objective**: Formulate direct, polite, and negative imperative structures (*Take a seat, Please verify, Do not touch, Let us begin, Follow me*).
- **Observed Dialogue Focus**: Modal verb *can/cannot* assessing candidate abilities, technical skills, musical auditions, and service requests.
- **Alignment Status**: 10 Partially Aligned.
- **Pedagogical Finding**: While dialogues feature requests using modal *can*, they bypass core imperative verb structures (commands, sequential instructions, and workplace action directives).

### Day 05: Present State of Being: Copular 'Be' (Is / Am / Are) & Subject Concord
- **Original Objective**: Master copular *to be* (*is, am, are*) across affirmative, negative, and interrogative sentences for stating identity, profession, status, location, and condition without action verbs.
- **Observed Dialogue Focus**: Frequency adverbs (*always, usually, often, rarely, seldom, never*) combined with dynamic action verbs.
- **Alignment Status**: **10 Misaligned (0/10 Aligned)**.
- **Pedagogical Finding**: Complete topic misalignment. Action verbs with frequency adverbs were trained instead of stative copular *is/am/are* concord.

### Day 06: Past State of Being: Was / Were & Time Markers
- **Original Objective**: Master past copular *was / were* across singular/plural subjects with past time markers (*yesterday, last night, earlier, ago*) for stative past conditions.
- **Observed Dialogue Focus**: Telling time on clocks, scheduling multi-timezone meetings, train departures, and calendar timetables (*half past, quarter to, sharp*).
- **Alignment Status**: **10 Misaligned (0/10 Aligned)**.
- **Pedagogical Finding**: Complete topic misalignment. Clock-reading and future/present scheduling replaced past copular *was/were* stative mastery.

### Day 07: Future State of Being & Presence: Will Be / Won't Be & Time Adverbs
- **Original Objective**: Master the future copula *will be / won't be* for future states, presence, readiness, and conditions with temporal adverbs (*tomorrow, next week, soon*).
- **Observed Dialogue Focus**: Possessive pronouns (*mine, yours, his, hers, ours, theirs*) and ownership inquiries (*whose bag is this?*).
- **Alignment Status**: **10 Misaligned (0/10 Aligned)**.
- **Pedagogical Finding**: Complete topic misalignment. Possessive pronoun sorting replaced future copular *will be / won't be* structures.

### Day 08: Spatial Demonstratives (This / That / These / Those) & Existential 'There is / There are'
- **Original Objective**: Master spatial demonstratives (*this, that, these, those*) and dummy-subject existential clauses (*There is, There are, There was, There were, There will be*).
- **Observed Dialogue Focus**: Present Continuous progressive aspect (*am/is/are + -ing*) for actions happening right now.
- **Alignment Status**: **10 Misaligned (0/10 Aligned)**.
- **Pedagogical Finding**: Complete topic misalignment. Live ongoing action commentary replaced demonstrative and existential *there is/are* clauses.

### Day 09: Possession, Relationships & Attributes: Has / Have / Had
- **Original Objective**: Master stative possession, kinship, health, and attributes using *has / have / had / will have* and auxiliary *do/does/did* questions.
- **Observed Dialogue Focus**: Present Simple vs. Present Continuous contrasts (*usually vs currently / today*).
- **Alignment Status**: **10 Misaligned (0/10 Aligned)**.
- **Pedagogical Finding**: Complete topic misalignment. Habitual vs progressive contrast replaced stative possession (*has / have / had*).

### Day 10: Stage 1 Cumulative Review, Error Audit & Synthesis Mastery
- **Original Objective**: Comprehensive synthesis of Days 01–09 grammar pillars (*Greetings, Courtesy, Exclamations, Imperatives, is/am/are, was/were, will be, there is/are, has/have/had*).
- **Observed Dialogue Focus**: Broad conversational scenarios (interviews, city tours, consultations, tenant onboarding), but synthesizing the shifted topic set (*routines, continuous, can, frequency*).
- **Alignment Status**: 10 Partially Aligned.
- **Pedagogical Finding**: The dialogues succeed in multi-turn conversational depth, but synthesize the substituted curriculum stream rather than the pure Stage 1 grammar pillars.

---

## 4. Complete Dialogue-by-Dialogue Audit Register (100 Dialogues)

| # | Day | Dialogue ID & Title | Original Day Objective | Observed Dialogue Topic | Target Grammar in Dialogue | Alignment Status |
| :---: | :---: | :--- | :--- | :--- | :--- | :---: |
`;

rows.forEach((r, idx) => {
  doc += `| ${idx + 1} | Day ${String(r.day).padStart(2, "0")} | \`${r.dlgId}\`: ${r.dlgTitle} | ${r.origObjective} | ${r.actualTopic} | ${r.targetGrammar} | **${r.status}** |\n`;
});

doc += `
---

## 5. Integrity Verification of Original Core Curriculum

A comprehensive audit was performed on all non-dialogue modules in \`DAYS_01_10_CONTENT.json\` to verify whether any original curriculum content was altered:

1. **\`teach\` Module (Grammar Lessons & Hindi Explanations)**:
   - **Status**: **100% Intact & Unaltered**.
   - Contains authentic foundational explanations for:
     - Day 01: *Daily Greetings, Salutations & Partings*
     - Day 02: *Social Etiquette & Courtesy Pillars*
     - Day 03: *Emotional Exclamations & Interjections*
     - Day 04: *Daily Action Imperatives*
     - Day 05: *Copular 'Be' (Is / Am / Are)*
     - Day 06: *Past State of Being (Was / Were)*
     - Day 07: *Future State of Being (Will Be)*
     - Day 08: *Demonstratives & Existential 'There is / There are'*
     - Day 09: *Possession (Has / Have / Had)*
     - Day 10: *Cumulative Review & Synthesis*
2. **\`learn.vocabulary\` Module**:
   - **Status**: **100% Intact & Unaltered** (60 vocabulary items per day = 600 total curated lexical entries with IPAs, Devanagari transliteration, collocations, and common Indian English error warnings).
3. **\`phonetics\` Module**:
   - **Status**: **100% Intact & Unaltered** (Pronunciation drills, minimal pairs, and acoustic placement rules).
4. **\`practice\` & \`assess\` Modules**:
   - **Status**: **100% Intact & Unaltered**.

---

## 6. Root Cause Analysis of Topic Shift

1. **Origin of Topic Sequence**:
   - During the creation of the expansion scripts (\`scripts/expand_stage1_day1_data.js\` through \`expand_stage1_day10_data.js\`), an alternate ESL topic framework (often used in general English courses: Greetings → Routines → Prepositions → Modals → Frequency → Time → Possessive Pronouns → Continuous → Simple vs Continuous → Review) was inadvertently referenced instead of the project's explicit **60-Day State-of-Being & Functional Syntax Blueprint** defined in \`DAYS_01_10_CONTENT.json\`.
2. **Impact**:
   - While the expanded dialogues achieved exceptional conversational fluency (22.0 turns/dialogue, 10-phase discourse arcs, zero artificial filler, 1:1 Hindi concordance), their grammatical topics became detached from their respective Day's \`teach\`, \`learn.vocabulary\`, and \`practice\` lesson anchors.

---

## 7. Recommendations for Correction

1. **Do Not Alter Existing Non-Dialogue Data**:
   - Keep all \`teach\`, \`phonetics\`, \`learn.vocabulary\`, \`practice\`, and \`assess\` data intact.
2. **Re-author Batch 1 Dialogues (Days 01–10) Against True Day Objectives**:
   - Generate new 20–25 turn dialogues strictly targeting the true grammar and communicative goals of each Day:
     - **Day 01**: Time-bound greetings (morning/afternoon/evening/night), formal vs informal salutations, parting formulas, and title honorifics.
     - **Day 02**: Social etiquette, courtesy keywords (*Please, Thank you, Excuse me, Pardon me, May I, Could you please*), polite requests, and apology handling.
     - **Day 03**: Emotional exclamations (*What a...!, How...!*), interjections (*Wow, Oh dear, Bravo, Alas, Thank goodness*), and reaction tags.
     - **Day 04**: Action imperatives (workplace instructions, safety directives, procedural commands: *Take a seat, Verify this, Follow me, Do not touch*).
     - **Day 05**: Copular *to be* (*is / am / are*) for identity, profession, status, condition, and location.
     - **Day 06**: Past copula *was / were* with past time markers (*yesterday, last night, earlier*) for past states and conditions.
     - **Day 07**: Future copula *will be / won't be* with future time markers (*tomorrow, next week, soon*) for future presence and readiness.
     - **Day 08**: Demonstratives (*this / that / these / those*) and Existential *There is / There are / There was / There were*.
     - **Day 09**: Stative possession (*has / have / had / will have*) and auxiliary questions (*Do you have...?*).
     - **Day 10**: Stage 1 synthesis unifying all 9 preceding grammar pillars.
3. **Maintain Depth Architecture**:
   - Preserve the 20–25 turn depth, 10-phase discourse structure, and 1:1 Hindi concordance while realigning 100% of scenarios to their true pedagogical targets.
`;

const outPath = path.resolve(__dirname, '../docs/BATCH_1_PEDAGOGICAL_ALIGNMENT_AUDIT.md');
fs.writeFileSync(outPath, doc, 'utf-8');
console.log('Successfully written to docs/BATCH_1_PEDAGOGICAL_ALIGNMENT_AUDIT.md');
