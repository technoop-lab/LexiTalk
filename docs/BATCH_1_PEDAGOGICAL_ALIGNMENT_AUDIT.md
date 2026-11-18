# Batch 1 Pedagogical Alignment Audit (Days 01–10)

## 1. Executive Summary & Verification Findings

- **Audit Date**: August 27, 2026
- **Scope**: All 100 Dialogues across Days 01–10 (Stage 1: Foundation & Essential Communication)
- **Evaluation Benchmark**: Original 60-Day Curriculum Objectives & Grammar Taxonomy for Days 01–10
- **Overall Result**: **TOPIC MAPPING DISCREPANCY IDENTIFIED**
  - The expanded dialogues in Batch 1 were generated against a **substituted topic sequence** rather than the **Original 60-Day Curriculum Day Objectives**.
  - **Unaltered Core Content**: All underlying `teach` (Grammar Lessons & Hindi Explanations), `phonetics` (IPA, Minimal Pairs, Articulation Rules), `learn.vocabulary` (60 vocabulary items per day = 600 total items), `learn.spokenPhrases`, `examples`, `practice` (Exercises), and `assess` (Quizzes) remain **100% authentic, untouched, and uncorrupted** in `DAYS_01_10_CONTENT.json`.
  - The divergence is strictly localized within the `use.dialogues` arrays generated during dialogue expansion.

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
| 1 | Day 01 | `d01_sc01`: Morning Greetings in the Apartment Hallway | Daily Greetings, Time-Bound Salutations & Basic Parting | Morning Greetings in the Apartment Hallway | Greetings & Introductions with Copular Verb "To Be" (am/is/are) | **PARTIALLY ALIGNED** |
| 2 | Day 01 | `d01_sc02`: Arriving at the Office & Greeting New Colleagues | Daily Greetings, Time-Bound Salutations & Basic Parting | Arriving at the Office & Greeting New Colleagues | Greetings & Introductions with Copular Verb "To Be" (am/is/are) | **PARTIALLY ALIGNED** |
| 3 | Day 01 | `d01_sc03`: Reuniting with an Old Friend at a Coffee Shop | Daily Greetings, Time-Bound Salutations & Basic Parting | Reuniting with an Old Friend at a Coffee Shop | Greetings & Introductions with Copular Verb "To Be" (am/is/are) | **PARTIALLY ALIGNED** |
| 4 | Day 01 | `d01_sc04`: Polite Customer Service Greeting at an Electronics Store | Daily Greetings, Time-Bound Salutations & Basic Parting | Polite Customer Service Greeting at an Electronics Store | Greetings & Introductions with Copular Verb "To Be" (am/is/are) | **PARTIALLY ALIGNED** |
| 5 | Day 01 | `d01_sc05`: Late Afternoon Encounter at School Pickup | Daily Greetings, Time-Bound Salutations & Basic Parting | Late Afternoon Encounter at School Pickup | Greetings & Introductions with Copular Verb "To Be" (am/is/are) | **PARTIALLY ALIGNED** |
| 6 | Day 01 | `d01_sc06`: Formal Evening Welcome at a Corporate Networking Event | Daily Greetings, Time-Bound Salutations & Basic Parting | Formal Evening Welcome at a Corporate Networking Event | Greetings & Introductions with Copular Verb "To Be" (am/is/are) | **PARTIALLY ALIGNED** |
| 7 | Day 01 | `d01_sc07`: Casual Weekend Greeting Between Gym Workout Buddies | Daily Greetings, Time-Bound Salutations & Basic Parting | Casual Weekend Greeting Between Gym Workout Buddies | Greetings & Introductions with Copular Verb "To Be" (am/is/are) | **PARTIALLY ALIGNED** |
| 8 | Day 01 | `d01_sc08`: Running into a Former Teacher at a Heritage Bookstore | Daily Greetings, Time-Bound Salutations & Basic Parting | Running into a Former Teacher at a Heritage Bookstore | Greetings & Introductions with Copular Verb "To Be" (am/is/are) | **PARTIALLY ALIGNED** |
| 9 | Day 01 | `d01_sc09`: Checking In at a Boutique Hotel Reception | Daily Greetings, Time-Bound Salutations & Basic Parting | Checking In at a Boutique Hotel Reception | Greetings & Introductions with Copular Verb "To Be" (am/is/are) | **PARTIALLY ALIGNED** |
| 10 | Day 01 | `d01_sc10`: Emotional Farewell & Parting at a Train Station Platform | Daily Greetings, Time-Bound Salutations & Basic Parting | Emotional Farewell & Parting at a Train Station Platform | Greetings & Introductions with Copular Verb "To Be" (am/is/are) | **PARTIALLY ALIGNED** |
| 11 | Day 02 | `d02_sc01`: Ordering and Making Polite Custom Requests at a Cafe | Social Etiquette, Courtesy & Polite Interaction | Ordering and Making Polite Custom Requests at a Cafe | Present Simple habitual actions (wakes up, begins, reviews, exercises, eats) | **MISALIGNED** |
| 12 | Day 02 | `d02_sc02`: Asking for Street Directions Politely | Social Etiquette, Courtesy & Polite Interaction | Asking for Street Directions Politely | Present Simple habitual actions (wakes up, begins, reviews, exercises, eats) | **MISALIGNED** |
| 13 | Day 02 | `d02_sc03`: Returning a Dropped Wallet on the Metro | Social Etiquette, Courtesy & Polite Interaction | Returning a Dropped Wallet on the Metro | Present Simple habitual actions (wakes up, begins, reviews, exercises, eats) | **MISALIGNED** |
| 14 | Day 02 | `d02_sc04`: Asking to Share a Study Table in a Quiet Library | Social Etiquette, Courtesy & Polite Interaction | Asking to Share a Study Table in a Quiet Library | Present Simple habitual actions (wakes up, begins, reviews, exercises, eats) | **MISALIGNED** |
| 15 | Day 02 | `d02_sc05`: Apologizing for an Accidental Collision in an Elevator | Social Etiquette, Courtesy & Polite Interaction | Apologizing for an Accidental Collision in an Elevator | Present Simple habitual actions (wakes up, begins, reviews, exercises, eats) | **MISALIGNED** |
| 16 | Day 02 | `d02_sc06`: Borrowing Office Supplies with Courtesy | Social Etiquette, Courtesy & Polite Interaction | Borrowing Office Supplies with Courtesy | Present Simple habitual actions (wakes up, begins, reviews, exercises, eats) | **MISALIGNED** |
| 17 | Day 02 | `d02_sc07`: Polite Noise Complaint Between Roommates | Social Etiquette, Courtesy & Polite Interaction | Polite Noise Complaint Between Roommates | Present Simple habitual actions (wakes up, begins, reviews, exercises, eats) | **MISALIGNED** |
| 18 | Day 02 | `d02_sc08`: Asking a Store Assistant to Reach a High Shelf | Social Etiquette, Courtesy & Polite Interaction | Asking a Store Assistant to Reach a High Shelf | Present Simple habitual actions (wakes up, begins, reviews, exercises, eats) | **MISALIGNED** |
| 19 | Day 02 | `d02_sc09`: Politely Declining an Offer at a Friend's Dinner Table | Social Etiquette, Courtesy & Polite Interaction | Politely Declining an Offer at a Friend's Dinner Table | Present Simple habitual actions (wakes up, begins, reviews, exercises, eats) | **MISALIGNED** |
| 20 | Day 02 | `d02_sc10`: Resolving a Billing Query with Customer Support | Social Etiquette, Courtesy & Polite Interaction | Resolving a Billing Query with Customer Support | Present Simple habitual actions (wakes up, begins, reviews, exercises, eats) | **MISALIGNED** |
| 21 | Day 03 | `d03_sc01`: Introducing Yourself at a New Tech Job Orientation | Expressive Reactions, Emotional Exclamations & Interjections | Introducing Yourself at a New Tech Job Orientation | Spatial prepositions (next to, opposite, on the left, behind, above, between) | **MISALIGNED** |
| 22 | Day 03 | `d03_sc02`: First Day in an MBA College Classroom | Expressive Reactions, Emotional Exclamations & Interjections | First Day in an MBA College Classroom | Spatial prepositions (next to, opposite, on the left, behind, above, between) | **MISALIGNED** |
| 23 | Day 03 | `d03_sc03`: Introducing Yourself to Neighbors at a Society Meeting | Expressive Reactions, Emotional Exclamations & Interjections | Introducing Yourself to Neighbors at a Society Meeting | Spatial prepositions (next to, opposite, on the left, behind, above, between) | **MISALIGNED** |
| 24 | Day 03 | `d03_sc04`: Networking at an Entrepreneurship Summit | Expressive Reactions, Emotional Exclamations & Interjections | Networking at an Entrepreneurship Summit | Spatial prepositions (next to, opposite, on the left, behind, above, between) | **MISALIGNED** |
| 25 | Day 03 | `d03_sc05`: Introducing Yourself at an Art & Pottery Workshop | Expressive Reactions, Emotional Exclamations & Interjections | Introducing Yourself at an Art & Pottery Workshop | Spatial prepositions (next to, opposite, on the left, behind, above, between) | **MISALIGNED** |
| 26 | Day 03 | `d03_sc06`: Welcoming a Remote Colleague on a Video Conference | Expressive Reactions, Emotional Exclamations & Interjections | Welcoming a Remote Colleague on a Video Conference | Spatial prepositions (next to, opposite, on the left, behind, above, between) | **MISALIGNED** |
| 27 | Day 03 | `d03_sc07`: Introducing Yourself at a Neighborhood Book Club | Expressive Reactions, Emotional Exclamations & Interjections | Introducing Yourself at a Neighborhood Book Club | Spatial prepositions (next to, opposite, on the left, behind, above, between) | **MISALIGNED** |
| 28 | Day 03 | `d03_sc08`: Meeting a Fellow Volunteer at an Animal Shelter | Expressive Reactions, Emotional Exclamations & Interjections | Meeting a Fellow Volunteer at an Animal Shelter | Spatial prepositions (next to, opposite, on the left, behind, above, between) | **MISALIGNED** |
| 29 | Day 03 | `d03_sc09`: Introducing Yourself to a Marathon Running Group | Expressive Reactions, Emotional Exclamations & Interjections | Introducing Yourself to a Marathon Running Group | Spatial prepositions (next to, opposite, on the left, behind, above, between) | **MISALIGNED** |
| 30 | Day 03 | `d03_sc10`: Introductions at a Language Exchange Meetup | Expressive Reactions, Emotional Exclamations & Interjections | Introductions at a Language Exchange Meetup | Spatial prepositions (next to, opposite, on the left, behind, above, between) | **MISALIGNED** |
| 31 | Day 04 | `d04_sc01`: Buying Fresh Vegetables and Herbs at a Morning Mandi | Conversational Phrases & Daily Action Imperatives | Buying Fresh Vegetables and Herbs at a Morning Mandi | Modal verb "can/cannot" for ability, skills & requests + action directives | **PARTIALLY ALIGNED** |
| 32 | Day 04 | `d04_sc02`: Choosing and Comparing Stationery at a Bookstore | Conversational Phrases & Daily Action Imperatives | Choosing and Comparing Stationery at a Bookstore | Modal verb "can/cannot" for ability, skills & requests + action directives | **PARTIALLY ALIGNED** |
| 33 | Day 04 | `d04_sc03`: Selecting Pottery and Souvenirs at an Artisan Handicraft Fair | Conversational Phrases & Daily Action Imperatives | Selecting Pottery and Souvenirs at an Artisan Handicraft Fair | Modal verb "can/cannot" for ability, skills & requests + action directives | **PARTIALLY ALIGNED** |
| 34 | Day 04 | `d04_sc04`: Comparing Fabric and Sarees at a Traditional Textile Shop | Conversational Phrases & Daily Action Imperatives | Comparing Fabric and Sarees at a Traditional Textile Shop | Modal verb "can/cannot" for ability, skills & requests + action directives | **PARTIALLY ALIGNED** |
| 35 | Day 04 | `d04_sc05`: Identifying Lost Property at a Mall Security Help Desk | Conversational Phrases & Daily Action Imperatives | Identifying Lost Property at a Mall Security Help Desk | Modal verb "can/cannot" for ability, skills & requests + action directives | **PARTIALLY ALIGNED** |
| 36 | Day 04 | `d04_sc06`: Inspecting Second-Hand Laptops at an Electronics Hub | Conversational Phrases & Daily Action Imperatives | Inspecting Second-Hand Laptops at an Electronics Hub | Modal verb "can/cannot" for ability, skills & requests + action directives | **PARTIALLY ALIGNED** |
| 37 | Day 04 | `d04_sc07`: Organizing and Labeling Toolboxes in a Home Garage | Conversational Phrases & Daily Action Imperatives | Organizing and Labeling Toolboxes in a Home Garage | Modal verb "can/cannot" for ability, skills & requests + action directives | **PARTIALLY ALIGNED** |
| 38 | Day 04 | `d04_sc08`: Choosing Indoor Plants at a Garden Nursery | Conversational Phrases & Daily Action Imperatives | Choosing Indoor Plants at a Garden Nursery | Modal verb "can/cannot" for ability, skills & requests + action directives | **PARTIALLY ALIGNED** |
| 39 | Day 04 | `d04_sc09`: Pointing Out Historical Artifacts in a Heritage Museum | Conversational Phrases & Daily Action Imperatives | Pointing Out Historical Artifacts in a Heritage Museum | Modal verb "can/cannot" for ability, skills & requests + action directives | **PARTIALLY ALIGNED** |
| 40 | Day 04 | `d04_sc10`: Selecting Designer Eyewear Frames at an Optician Boutique | Conversational Phrases & Daily Action Imperatives | Selecting Designer Eyewear Frames at an Optician Boutique | Modal verb "can/cannot" for ability, skills & requests + action directives | **PARTIALLY ALIGNED** |
| 41 | Day 05 | `d05_sc01`: Finding the Owner of a Lost Umbrella at a Community Center | Present State of Being: is / am / are | Finding the Owner of a Lost Umbrella at a Community Center | Frequency adverbs (always, usually, often, rarely, seldom, never) with habitual verbs | **MISALIGNED** |
| 42 | Day 05 | `d05_sc02`: Inquiring About Pet Breeds and Owners at a Dog Park | Present State of Being: is / am / are | Inquiring About Pet Breeds and Owners at a Dog Park | Frequency adverbs (always, usually, often, rarely, seldom, never) with habitual verbs | **MISALIGNED** |
| 43 | Day 05 | `d05_sc03`: Introducing Family Members at a Grand Wedding Banquet | Present State of Being: is / am / are | Introducing Family Members at a Grand Wedding Banquet | Frequency adverbs (always, usually, often, rarely, seldom, never) with habitual verbs | **MISALIGNED** |
| 44 | Day 05 | `d05_sc04`: Resolving Confusion Over Swapped Luggage Bags at the Airport | Present State of Being: is / am / are | Resolving Confusion Over Swapped Luggage Bags at the Airport | Frequency adverbs (always, usually, often, rarely, seldom, never) with habitual verbs | **MISALIGNED** |
| 45 | Day 05 | `d05_sc05`: Inquiring About Car Models and Parking Spots in an Apartment Society | Present State of Being: is / am / are | Inquiring About Car Models and Parking Spots in an Apartment Society | Frequency adverbs (always, usually, often, rarely, seldom, never) with habitual verbs | **MISALIGNED** |
| 46 | Day 05 | `d05_sc06`: Inquiring About Artwork Ownership at a Student Art Exhibition | Present State of Being: is / am / are | Inquiring About Artwork Ownership at a Student Art Exhibition | Frequency adverbs (always, usually, often, rarely, seldom, never) with habitual verbs | **MISALIGNED** |
| 47 | Day 05 | `d05_sc07`: Allocating Shared Responsibilities in a College Hostel Flat | Present State of Being: is / am / are | Allocating Shared Responsibilities in a College Hostel Flat | Frequency adverbs (always, usually, often, rarely, seldom, never) with habitual verbs | **MISALIGNED** |
| 48 | Day 05 | `d05_sc08`: Clarifying Ownership of Musical Instruments in a Band Practice Room | Present State of Being: is / am / are | Clarifying Ownership of Musical Instruments in a Band Practice Room | Frequency adverbs (always, usually, often, rarely, seldom, never) with habitual verbs | **MISALIGNED** |
| 49 | Day 05 | `d05_sc09`: Returning Misplaced Office Accessories in a Co-Working Space | Present State of Being: is / am / are | Returning Misplaced Office Accessories in a Co-Working Space | Frequency adverbs (always, usually, often, rarely, seldom, never) with habitual verbs | **MISALIGNED** |
| 50 | Day 05 | `d05_sc10`: Identifying Borrowed Books and Reading Lists in a Neighborhood Library | Present State of Being: is / am / are | Identifying Borrowed Books and Reading Lists in a Neighborhood Library | Frequency adverbs (always, usually, often, rarely, seldom, never) with habitual verbs | **MISALIGNED** |
| 51 | Day 06 | `d06_sc01`: Comparing Morning Routines Between Flatmates | Past State of Being: was / were | Comparing Morning Routines Between Flatmates | Time-telling syntax, clock expressions (o'clock, quarter past, half past, sharp) and schedules | **MISALIGNED** |
| 52 | Day 06 | `d06_sc02`: Discussing Weekly Workout Routines at the Gym | Past State of Being: was / were | Discussing Weekly Workout Routines at the Gym | Time-telling syntax, clock expressions (o'clock, quarter past, half past, sharp) and schedules | **MISALIGNED** |
| 53 | Day 06 | `d06_sc03`: Sharing Daily Teaching Schedules at an Elementary School | Past State of Being: was / were | Sharing Daily Teaching Schedules at an Elementary School | Time-telling syntax, clock expressions (o'clock, quarter past, half past, sharp) and schedules | **MISALIGNED** |
| 54 | Day 06 | `d06_sc04`: Discussing an Agile Software Engineering Daily Workflow | Past State of Being: was / were | Discussing an Agile Software Engineering Daily Workflow | Time-telling syntax, clock expressions (o'clock, quarter past, half past, sharp) and schedules | **MISALIGNED** |
| 55 | Day 06 | `d06_sc05`: Exam Study Habits and Library Routines Between College Friends | Past State of Being: was / were | Exam Study Habits and Library Routines Between College Friends | Time-telling syntax, clock expressions (o'clock, quarter past, half past, sharp) and schedules | **MISALIGNED** |
| 56 | Day 06 | `d06_sc06`: Daily Medical Rounds and Patient Care in a City Hospital | Past State of Being: was / were | Daily Medical Rounds and Patient Care in a City Hospital | Time-telling syntax, clock expressions (o'clock, quarter past, half past, sharp) and schedules | **MISALIGNED** |
| 57 | Day 06 | `d06_sc07`: Daily Culinary Prep and Kitchen Routines in a Fine Dining Restaurant | Past State of Being: was / were | Daily Culinary Prep and Kitchen Routines in a Fine Dining Restaurant | Time-telling syntax, clock expressions (o'clock, quarter past, half past, sharp) and schedules | **MISALIGNED** |
| 58 | Day 06 | `d06_sc08`: Daily Work-from-Home Routine of an Independent Graphic Designer | Past State of Being: was / were | Daily Work-from-Home Routine of an Independent Graphic Designer | Time-telling syntax, clock expressions (o'clock, quarter past, half past, sharp) and schedules | **MISALIGNED** |
| 59 | Day 06 | `d06_sc09`: Daily Sustainable Living and Waste Segregation Habits | Past State of Being: was / were | Daily Sustainable Living and Waste Segregation Habits | Time-telling syntax, clock expressions (o'clock, quarter past, half past, sharp) and schedules | **MISALIGNED** |
| 60 | Day 06 | `d06_sc10`: Daily Public Transit and Metro Commute Habits in Mumbai | Past State of Being: was / were | Daily Public Transit and Metro Commute Habits in Mumbai | Time-telling syntax, clock expressions (o'clock, quarter past, half past, sharp) and schedules | **MISALIGNED** |
| 61 | Day 07 | `d07_sc01`: Interviewing a Job Candidate at a Tech Company | Future State of Being: will be / won't be | Interviewing a Job Candidate at a Tech Company | Possessive pronouns (mine, yours, his, hers, ours, theirs) and possessive determiners (whose) | **MISALIGNED** |
| 62 | Day 07 | `d07_sc02`: Inquiring About Apartment Rental Amenities with a Real Estate Broker | Future State of Being: will be / won't be | Inquiring About Apartment Rental Amenities with a Real Estate Broker | Possessive pronouns (mine, yours, his, hers, ours, theirs) and possessive determiners (whose) | **MISALIGNED** |
| 63 | Day 07 | `d07_sc03`: Asking About Course Schedules and Fees at an Institute | Future State of Being: will be / won't be | Asking About Course Schedules and Fees at an Institute | Possessive pronouns (mine, yours, his, hers, ours, theirs) and possessive determiners (whose) | **MISALIGNED** |
| 64 | Day 07 | `d07_sc04`: Inquiring About Hotel Facilities and Check-in Policies | Future State of Being: will be / won't be | Inquiring About Hotel Facilities and Check-in Policies | Possessive pronouns (mine, yours, his, hers, ours, theirs) and possessive determiners (whose) | **MISALIGNED** |
| 65 | Day 07 | `d07_sc05`: Inquiring About Membership Packages at a Yoga Studio | Future State of Being: will be / won't be | Inquiring About Membership Packages at a Yoga Studio | Possessive pronouns (mine, yours, his, hers, ours, theirs) and possessive determiners (whose) | **MISALIGNED** |
| 66 | Day 07 | `d07_sc06`: Interviewing an Author at a Literary Festival | Future State of Being: will be / won't be | Interviewing an Author at a Literary Festival | Possessive pronouns (mine, yours, his, hers, ours, theirs) and possessive determiners (whose) | **MISALIGNED** |
| 67 | Day 07 | `d07_sc07`: Inquiring About Vehicle Servicing and Maintenance Packages | Future State of Being: will be / won't be | Inquiring About Vehicle Servicing and Maintenance Packages | Possessive pronouns (mine, yours, his, hers, ours, theirs) and possessive determiners (whose) | **MISALIGNED** |
| 68 | Day 07 | `d07_sc08`: Surveying Consumer Preferences at an Organic Farmers Market | Future State of Being: will be / won't be | Surveying Consumer Preferences at an Organic Farmers Market | Possessive pronouns (mine, yours, his, hers, ours, theirs) and possessive determiners (whose) | **MISALIGNED** |
| 69 | Day 07 | `d07_sc09`: Asking About Overseas Study Programs with an Academic Counselor | Future State of Being: will be / won't be | Asking About Overseas Study Programs with an Academic Counselor | Possessive pronouns (mine, yours, his, hers, ours, theirs) and possessive determiners (whose) | **MISALIGNED** |
| 70 | Day 07 | `d07_sc10`: Inquiring About Heritage Walking Tours in Old Delhi | Future State of Being: will be / won't be | Inquiring About Heritage Walking Tours in Old Delhi | Possessive pronouns (mine, yours, his, hers, ours, theirs) and possessive determiners (whose) | **MISALIGNED** |
| 71 | Day 08 | `d08_sc01`: Live Sports Commentary at a Local Football Derby | Demonstratives: this / that / these / those and there is / there are | Live Sports Commentary at a Local Football Derby | Present Continuous tense (am/is/are + -ing) for live ongoing actions | **MISALIGNED** |
| 72 | Day 08 | `d08_sc02`: Directing Scene Rehearsals on a Film Set | Demonstratives: this / that / these / those and there is / there are | Directing Scene Rehearsals on a Film Set | Present Continuous tense (am/is/are + -ing) for live ongoing actions | **MISALIGNED** |
| 73 | Day 08 | `d08_sc03`: Busy Dinner Service Coordination in an Open Restaurant Kitchen | Demonstratives: this / that / these / those and there is / there are | Busy Dinner Service Coordination in an Open Restaurant Kitchen | Present Continuous tense (am/is/are + -ing) for live ongoing actions | **MISALIGNED** |
| 74 | Day 08 | `d08_sc04`: Live Telecast of a Space Mission Launch at Mission Control | Demonstratives: this / that / these / those and there is / there are | Live Telecast of a Space Mission Launch at Mission Control | Present Continuous tense (am/is/are + -ing) for live ongoing actions | **MISALIGNED** |
| 75 | Day 08 | `d08_sc05`: Navigating Rainy Traffic Chaos via Hands-Free Phone Call | Demonstratives: this / that / these / those and there is / there are | Navigating Rainy Traffic Chaos via Hands-Free Phone Call | Present Continuous tense (am/is/are + -ing) for live ongoing actions | **MISALIGNED** |
| 76 | Day 08 | `d08_sc06`: Observing Animal Behaviors on a Wildlife Safari | Demonstratives: this / that / these / those and there is / there are | Observing Animal Behaviors on a Wildlife Safari | Present Continuous tense (am/is/are + -ing) for live ongoing actions | **MISALIGNED** |
| 77 | Day 08 | `d08_sc07`: Organizing a Multi-Team Corporate Hackathon Hall | Demonstratives: this / that / these / those and there is / there are | Organizing a Multi-Team Corporate Hackathon Hall | Present Continuous tense (am/is/are + -ing) for live ongoing actions | **MISALIGNED** |
| 78 | Day 08 | `d08_sc08`: Managing Backstage Chaos Before a Live Music Concert | Demonstratives: this / that / these / those and there is / there are | Managing Backstage Chaos Before a Live Music Concert | Present Continuous tense (am/is/are + -ing) for live ongoing actions | **MISALIGNED** |
| 79 | Day 08 | `d08_sc09`: Troubleshooting Technical Glitches During a Live Webinar Broadcast | Demonstratives: this / that / these / those and there is / there are | Troubleshooting Technical Glitches During a Live Webinar Broadcast | Present Continuous tense (am/is/are + -ing) for live ongoing actions | **MISALIGNED** |
| 80 | Day 08 | `d08_sc10`: Live Art Mural Painting Demonstration in an Urban Plaza | Demonstratives: this / that / these / those and there is / there are | Live Art Mural Painting Demonstration in an Urban Plaza | Present Continuous tense (am/is/are + -ing) for live ongoing actions | **MISALIGNED** |
| 81 | Day 09 | `d09_sc01`: Working from a Mountain Homestay Instead of the Usual Office | Possession / Relationships / has / have / had | Working from a Mountain Homestay Instead of the Usual Office | Contrast between Present Simple (usually/always) and Present Continuous (currently/today/right now) | **MISALIGNED** |
| 82 | Day 09 | `d09_sc02`: Trying an Exotic International Cuisine Over Usual Daily Diet | Possession / Relationships / has / have / had | Trying an Exotic International Cuisine Over Usual Daily Diet | Contrast between Present Simple (usually/always) and Present Continuous (currently/today/right now) | **MISALIGNED** |
| 83 | Day 09 | `d09_sc03`: Commuting by Cycling Instead of Usual Daily Metro Ride | Possession / Relationships / has / have / had | Commuting by Cycling Instead of Usual Daily Metro Ride | Contrast between Present Simple (usually/always) and Present Continuous (currently/today/right now) | **MISALIGNED** |
| 84 | Day 09 | `d09_sc04`: Learning a Musical Instrument Over the Usual Evening Video Games | Possession / Relationships / has / have / had | Learning a Musical Instrument Over the Usual Evening Video Games | Contrast between Present Simple (usually/always) and Present Continuous (currently/today/right now) | **MISALIGNED** |
| 85 | Day 09 | `d09_sc05`: Reading Classic Physical Books Instead of Daily Screen Scrolling | Possession / Relationships / has / have / had | Reading Classic Physical Books Instead of Daily Screen Scrolling | Contrast between Present Simple (usually/always) and Present Continuous (currently/today/right now) | **MISALIGNED** |
| 86 | Day 09 | `d09_sc06`: Preparing a Homecooked Weekend Feast Over Usual Takeout Food | Possession / Relationships / has / have / had | Preparing a Homecooked Weekend Feast Over Usual Takeout Food | Contrast between Present Simple (usually/always) and Present Continuous (currently/today/right now) | **MISALIGNED** |
| 87 | Day 09 | `d09_sc07`: Walking in Nature Parks Over Usual Daily Gym Treadmills | Possession / Relationships / has / have / had | Walking in Nature Parks Over Usual Daily Gym Treadmills | Contrast between Present Simple (usually/always) and Present Continuous (currently/today/right now) | **MISALIGNED** |
| 88 | Day 09 | `d09_sc08`: Handcrafting Personalized Gifts Over Usual Online Shopping | Possession / Relationships / has / have / had | Handcrafting Personalized Gifts Over Usual Online Shopping | Contrast between Present Simple (usually/always) and Present Continuous (currently/today/right now) | **MISALIGNED** |
| 89 | Day 09 | `d09_sc09`: Writing in a Physical Journal Over Usual Daily Digital Note-taking | Possession / Relationships / has / have / had | Writing in a Physical Journal Over Usual Daily Digital Note-taking | Contrast between Present Simple (usually/always) and Present Continuous (currently/today/right now) | **MISALIGNED** |
| 90 | Day 09 | `d09_sc10`: Hosting a Board Game Night Over Usual Movie Streaming | Possession / Relationships / has / have / had | Hosting a Board Game Night Over Usual Movie Streaming | Contrast between Present Simple (usually/always) and Present Continuous (currently/today/right now) | **MISALIGNED** |
| 91 | Day 10 | `d10_sc01`: Comprehensive Job Interview for Senior Program Manager Role | Cumulative Stage-1 synthesis | Comprehensive Job Interview for Senior Program Manager Role | Multi-structure Stage 1 conversational synthesis (interview, tour, consult, tenant onboarding) | **PARTIALLY ALIGNED** |
| 92 | Day 10 | `d10_sc02`: Welcoming an International Exchange Student into a Family Home | Cumulative Stage-1 synthesis | Welcoming an International Exchange Student into a Family Home | Multi-structure Stage 1 conversational synthesis (interview, tour, consult, tenant onboarding) | **PARTIALLY ALIGNED** |
| 93 | Day 10 | `d10_sc03`: Live Podcast Interview with an Eco-Entrepreneur | Cumulative Stage-1 synthesis | Live Podcast Interview with an Eco-Entrepreneur | Multi-structure Stage 1 conversational synthesis (interview, tour, consult, tenant onboarding) | **PARTIALLY ALIGNED** |
| 94 | Day 10 | `d10_sc04`: Guided Architectural Walking Tour of Old Delhi Heritage | Cumulative Stage-1 synthesis | Guided Architectural Walking Tour of Old Delhi Heritage | Multi-structure Stage 1 conversational synthesis (interview, tour, consult, tenant onboarding) | **PARTIALLY ALIGNED** |
| 95 | Day 10 | `d10_sc05`: Comprehensive Health and Lifestyle Consultation with a Family Physician | Cumulative Stage-1 synthesis | Comprehensive Health and Lifestyle Consultation with a Family Physician | Multi-structure Stage 1 conversational synthesis (interview, tour, consult, tenant onboarding) | **PARTIALLY ALIGNED** |
| 96 | Day 10 | `d10_sc06`: Onboarding a New Tenant and Explaining Apartment Society Rules | Cumulative Stage-1 synthesis | Onboarding a New Tenant and Explaining Apartment Society Rules | Multi-structure Stage 1 conversational synthesis (interview, tour, consult, tenant onboarding) | **PARTIALLY ALIGNED** |
| 97 | Day 10 | `d10_sc07`: Planning a Complex Multi-City Indian Vacation Itinerary | Cumulative Stage-1 synthesis | Planning a Complex Multi-City Indian Vacation Itinerary | Multi-structure Stage 1 conversational synthesis (interview, tour, consult, tenant onboarding) | **PARTIALLY ALIGNED** |
| 98 | Day 10 | `d10_sc08`: High-Stakes Project Status Review Meeting with Company Director | Cumulative Stage-1 synthesis | High-Stakes Project Status Review Meeting with Company Director | Multi-structure Stage 1 conversational synthesis (interview, tour, consult, tenant onboarding) | **PARTIALLY ALIGNED** |
| 99 | Day 10 | `d10_sc09`: Exploring a Bustling Traditional Indian Spice and Craft Bazaar | Cumulative Stage-1 synthesis | Exploring a Bustling Traditional Indian Spice and Craft Bazaar | Multi-structure Stage 1 conversational synthesis (interview, tour, consult, tenant onboarding) | **PARTIALLY ALIGNED** |
| 100 | Day 10 | `d10_sc10`: Comprehensive End-of-Module English Fluency Review and Celebration | Cumulative Stage-1 synthesis | Comprehensive End-of-Module English Fluency Review and Celebration | Multi-structure Stage 1 conversational synthesis (interview, tour, consult, tenant onboarding) | **PARTIALLY ALIGNED** |

---

## 5. Integrity Verification of Original Core Curriculum

A comprehensive audit was performed on all non-dialogue modules in `DAYS_01_10_CONTENT.json` to verify whether any original curriculum content was altered:

1. **`teach` Module (Grammar Lessons & Hindi Explanations)**:
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
2. **`learn.vocabulary` Module**:
   - **Status**: **100% Intact & Unaltered** (60 vocabulary items per day = 600 total curated lexical entries with IPAs, Devanagari transliteration, collocations, and common Indian English error warnings).
3. **`phonetics` Module**:
   - **Status**: **100% Intact & Unaltered** (Pronunciation drills, minimal pairs, and acoustic placement rules).
4. **`practice` & `assess` Modules**:
   - **Status**: **100% Intact & Unaltered**.

---

## 6. Root Cause Analysis of Topic Shift

1. **Origin of Topic Sequence**:
   - During the creation of the expansion scripts (`scripts/expand_stage1_day1_data.js` through `expand_stage1_day10_data.js`), an alternate ESL topic framework (often used in general English courses: Greetings → Routines → Prepositions → Modals → Frequency → Time → Possessive Pronouns → Continuous → Simple vs Continuous → Review) was inadvertently referenced instead of the project's explicit **60-Day State-of-Being & Functional Syntax Blueprint** defined in `DAYS_01_10_CONTENT.json`.
2. **Impact**:
   - While the expanded dialogues achieved exceptional conversational fluency (22.0 turns/dialogue, 10-phase discourse arcs, zero artificial filler, 1:1 Hindi concordance), their grammatical topics became detached from their respective Day's `teach`, `learn.vocabulary`, and `practice` lesson anchors.

---

## 7. Recommendations for Correction

1. **Do Not Alter Existing Non-Dialogue Data**:
   - Keep all `teach`, `phonetics`, `learn.vocabulary`, `practice`, and `assess` data intact.
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
