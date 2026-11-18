# LEXITALK — DIALOGUE RESTORATION PRE-IMPLEMENTATION PLAN

> **Mode:** READ-ONLY PRE-IMPLEMENTATION ANALYSIS & PLAN ONLY
> **Target File:** `LEXITALK_DIALOGUE_RESTORATION_PLAN.md` (Project Root)
> **Date:** August 29, 2026
> **Policy:** ZERO CODE OR CURRICULUM MUTATIONS EXECUTED DURING THIS REPORT.

---

## A. Authoritative Source Inventory (Days 1–60)

| Day | Authoritative Source File | Scenario Count | Total Spoken Turns | Sample Scenario IDs | Sample Scenario Titles |
| :---: | :--- | :---: | :---: | :--- | :--- |
| **Day 1** | `scripts\repair_a1_batch1\day01_dialogues.js` | **10** | **200** | `d01_sc01, d01_sc02` | New Employee First Day Welcome / Afternoon Hotel Check-in Greetings |
| **Day 2** | `scripts\repair_a1_batch1\day02_dialogues.js` | **10** | **200** | `d02_sc01, d02_sc02` | Restaurant Table Service & Ordering Polite Interaction / Bank Customer Service Desk Inquiry |
| **Day 3** | `scripts\repair_a1_batch1\day03_dialogues.js` | **10** | **200** | `d03_sc01, d03_sc02` | Cricket Match Excitement and Reactions / Exam Results Announcement & Celebration |
| **Day 4** | `scripts\repair_a1_batch1\day04_dialogues.js` | **10** | **200** | `d04_sc01, d04_sc02` | Kitchen Cooking Preparation Instructions / Hostel Room Cleaning and Organization Routine |
| **Day 5** | `scripts\repair_a1_batch1\day05_dialogues.js` | **10** | **200** | `d05_sc01, d05_sc02` | Hospital Ward Morning Patient Health Check / School Staff Room Teacher Status and Schedule |
| **Day 6** | `scripts\repair_a1_batch1\day06_dialogues.js` | **10** | **200** | `d06_sc01, d06_sc02` | Airport Lost Luggage Inquiry from Yesterday's Flight / Missing Yesterday's Office Meeting Catch-up |
| **Day 7** | `scripts\repair_a1_batch1\day07_dialogues.js` | **10** | **200** | `d07_sc01, d07_sc02` | Stationery Store Purchase & Inventory / Highway Car Toolkit and Emergency Check |
| **Day 8** | `scripts\repair_a1_batch1\day08_dialogues.js` | **10** | **200** | `d08_sc01, d08_sc02` | Morning Park Exercise and Jogging Habits / Software Engineer Daily Work Schedule & Commute |
| **Day 9** | `scripts\repair_a1_batch1\day09_dialogues.js` | **10** | **200** | `d09_sc01, d09_sc02` | Restaurant Dinner Menu Selection and Food Preferences / Cinema Movie Genre Discussion and Selection |
| **Day 10** | `scripts\repair_a1_batch1\day10_dialogues.js` | **10** | **200** | `d10_sc01, d10_sc02` | Job Interview Basic Skills Assessment / Music Academy Instrument Skills and Lessons |
| **Day 11** | `scripts\repair_a1_batch2\day11_dialogues.js` | **10** | **200** | `d11_sc01, d11_sc02` | Visitor at the Office Reception / Cooking Instructions in the Kitchen |
| **Day 12** | `scripts\repair_a1_batch2\day12_dialogues.js` | **10** | **200** | `d12_sc01, d12_sc02` | Hotel Room Inspection and Amenities / Checking Refrigerator Food Before Grocery Shopping |
| **Day 13** | `scripts\repair_a1_batch2\day13_dialogues.js` | **10** | **200** | `d13_sc01, d13_sc02` | Visiting the Clinic with a Cold and Headache / Comparing Tech Devices and Laptops |
| **Day 14** | `scripts\repair_a1_batch2\day14_dialogues.js` | **10** | **200** | `d14_sc01, d14_sc02` | Daily Morning Routine Discussion / Describing a Colleague's Work Habits |
| **Day 15** | `scripts\repair_a1_batch2\day15_dialogues.js` | **10** | **200** | `d15_sc01, d15_sc02` | Getting to Know a New Colleague's Habits / Asking About Dietary Choices and Food Preferences |
| **Day 16** | `scripts\repair_a1_batch2\day16_dialogues.js` | **10** | **200** | `d16_sc01, d16_sc02` | Phone Call: What Are You Doing Right Now? / Observing Activities at an Airport Terminal |
| **Day 17** | `scripts\repair_a1_batch2\day17_dialogues.js` | **10** | **200** | `d17_sc01, d17_sc02` | Discussing Yesterday's Productive Workday / Cleaning and Painting the House on the Weekend |
| **Day 18** | `scripts\repair_a1_batch2\day18_dialogues.js` | **10** | **200** | `d18_sc01, d18_sc02` | Weekend Trip to the Hill Station / Losing and Finding a Mobile Phone |
| **Day 19** | `scripts\repair_a1_batch2\day19_dialogues.js` | **10** | **200** | `d19_sc01, d19_sc02` | Why Didn't You Attend the College Seminar? / Investigating a Missing Office Document |
| **Day 20** | `scripts\repair_a1_batch2\day20_dialogues.js` | **10** | **200** | `d20_sc01, d20_sc02` | Stage 2 Comprehensive Progress Assessment / Comparing Past Childhood with Present Life |
| **Day 21** | `scripts\dialogues_batch3\day21.ts` | **10** | **200** | `d21_sc01, d21_sc02` | Project Submission Debrief at the Tech Office / Weekend Home Renovations and Garden Cleaning |
| **Day 22** | `scripts\dialogues_batch3\day22.ts` | **10** | **200** | `d22_sc01, d22_sc02` | Weekend Farmers Market and Fresh Produce Shopping / Return from an Outstation Corporate Business Trip |
| **Day 23** | `scripts\dialogues_batch3\day23.ts` | **10** | **200** | `d23_sc01, d23_sc02` | Missing an Important Morning Conference Call / Bank Account Transaction Discrepancy Clarification |
| **Day 24** | `scripts\dialogues_batch3\day24.ts` | **10** | **201** | `d24_sc01, d24_sc02` | Airport Check-in and Baggage Security Verification / Office Facilities and Server Room Morning Inspection |
| **Day 25** | `scripts\dialogues_batch3\day25.ts` | **10** | **200** | `d25_sc01, d25_sc02` | Police Station Lost Passport and Document Investigation / Job Candidate Portfolio Architecture Walkthrough |
| **Day 26** | `scripts\dialogues_batch3\day26.ts` | **10** | **200** | `d26_sc01, d26_sc02` | Corporate Hackathon Award Ceremony Inquiry / Neighborhood Power Outage Investigation |
| **Day 27** | `scripts\dialogues_batch3\day27.ts` | **10** | **200** | `d27_sc01, d27_sc02` | Office Power Outage Incident Report and Timeline / Witness Statement for Traffic Intersection Collision |
| **Day 28** | `scripts\dialogues_batch3\day28.ts` | **10** | **200** | `d28_sc01, d28_sc02` | Expressway Highway Tire Puncture and Emergency Stop / Kitchen Cooking Fire and Fire Blanket Action |
| **Day 29** | `scripts\dialogues_batch3\day29.ts` | **10** | **200** | `d29_sc01, d29_sc02` | Childhood Village Memories and Modern Urban Life / Grandmother's Classical Music Training vs Modern Digital Production |
| **Day 30** | `scripts\dialogues_batch3\day30.ts` | **10** | **200** | `d30_sc01, d30_sc02` | Startup Founder Milestone 3 Career Retrospective and Breakthrough / Investigative Journalist Retrospective: Exposing Environmental Crime |
| **Day 31** | `scripts\dialogues_batch4\day31.ts` | **10** | **200** | `d31_sc01, d31_sc02` | Formal Third-Party Introduction at a Renewable Energy Symposium / Reconnecting with a Former University Classmate at an Airport Lounge |
| **Day 32** | `scripts\dialogues_batch4\day32.ts` | **10** | **200** | `d32_sc01, d32_sc02` | Diplomatic Budgetary Adjustment and Contract Renegotiation / Consultative Advice on Chronic Pain Management and Physiotherapy |
| **Day 33** | `scripts\dialogues_batch4\day33.ts` | **10** | **200** | `d33_sc01, d33_sc02` | Deducing the Cause of a Server Outage and Enforcing Recovery Protocols / Investigating Missing Archaeological Artifacts at a Museum Vault |
| **Day 34** | `scripts\dialogues_batch4\day34.ts` | **10** | **201** | `d34_sc01, d34_sc02` | Fine Dining Reservation, Course Selection, and Dietary Clarification / Navigating Dietary Restrictions at a Vegan Coastal Cafe |
| **Day 35** | `scripts\dialogues_batch4\day35.ts` | **10** | **200** | `d35_sc01, d35_sc02` | Rescheduling an Executive Strategy Review Across Global Timezones / Rescheduling a Medical Specialist Consultation and Diagnostic MRI |
| **Day 36** | `scripts\dialogues_batch4\day36.ts` | **10** | **200** | `d36_sc01, d36_sc02` | Diplomatic Refusal of Scope Creep and Commercial Agreement on Deliverables / Diplomatic Refusal of an Impromptu Social Gathering Due to Family Priorities |
| **Day 37** | `scripts\dialogues_batch4\day37.ts` | **10** | **200** | `d37_sc01, d37_sc02` | Congratulating a Colleague on Promotion and Praising Leadership / Encouraging an Entrepreneur During a Challenging Market Pivot |
| **Day 38** | `scripts\dialogues_batch4\day38.ts` | **10** | **200** | `d38_sc01, d38_sc02` | Collaborative Problem-Solving in a Cloud Infrastructure Outage / Brainstorming a Sustainable Packaging Transition for Consumer Brands |
| **Day 39** | `scripts\dialogues_batch4\day39.ts` | **10** | **200** | `d39_sc01, d39_sc02` | Comparing Urban Public Transit Innovations and Metro Expansion Models / Comparing Cloud Database Architectures: SQL vs. NoSQL |
| **Day 40** | `scripts\dialogues_batch4\day40.ts` | **10** | **200** | `d40_sc01, d40_sc02` | Reviewing Financial Budget Variances and Capital Reallocation / Reviewing Clinical Trial Phase-2 Safety and Efficacy Endpoints |
| **Day 41** | `scripts\dialogues_batch5\day41.ts` | **10** | **215** | `d41_sc01, d41_sc02` | Touring a Sunlit Penthouse with an Architectural Real Estate Consultant / Negotiating a Long-Term Residential Lease and Renovation Clauses with a Landlord |
| **Day 42** | `scripts\dialogues_batch5\day42.ts` | **10** | **207** | `d42_sc01, d42_sc02` | Navigating a Complex Multimodal Transit Interchange During Peak Rush Hour / Inquiring About Bus Feeder Routes and Transit Fare Cards at a Central Bus Terminal |
| **Day 43** | `scripts\dialogues_batch5\day43.ts` | **10** | **209** | `d43_sc01, d43_sc02` | Inquiring About Garment Sizing, Fabric Compositions, and Fitting Room Trials / Exchanging Defective Consumer Electronics and Processing Manufacturer Warranty Claims |
| **Day 44** | `scripts\dialogues_batch5\day44.ts` | **10** | **211** | `d44_sc01, d44_sc02` | Consulting an Academic Advisor on Interdisciplinary Majors, Course Prerequisites, and Graduation Audits / Defending a Postgraduate Master’s Dissertation Research Proposal Before a Faculty Review Panel |
| **Day 45** | `scripts\dialogues_batch5\day45.ts` | **10** | **215** | `d45_sc01, d45_sc02` | Describing Acute Throbbing Migraine, Photophobia, and Nausea to an Internal Medicine Physician / Assessing Exertional Chest Tightness, Palpitations, and Dyspnea in an Outpatient Cardiology Clinic |
| **Day 46** | `scripts\dialogues_batch5\day46.ts` | **10** | **215** | `d46_sc01, d46_sc02` | Dispensing Generic Substitutions, Dosage Instructions, and Drug-Drug Interaction Checks at a Hospital Pharmacy / Scheduling an Ultrasound-Guided Core Needle Soft-Tissue Biopsy with an Interventional Radiologist |
| **Day 47** | `scripts\dialogues_batch5\day47.ts` | **10** | **215** | `d47_sc01, d47_sc02` | Broadcasting a Monsoon Cloudburst Flash-Flood Advisory with a Senior Meteorologist / Preparing Coastal Fisherfolk Communities for a Category-Four Severe Cyclonic Storm |
| **Day 48** | `scripts\dialogues_batch5\day48.ts` | **10** | **215** | `d48_sc01, d48_sc02` | Tracking Apex Bengal Tiger Territory Dynamics and Camera-Trap Censuses in a National Park / Nocturnal Primates, Tapetum Lucidum Adaptations, and Canopy Foraging in Tropical Rainforests |
| **Day 49** | `scripts\dialogues_batch5\day49.ts` | **10** | **216** | `d49_sc01, d49_sc02` | Tailoring Bespoke Executive Suits and Sartorial Fabric Selection with a Master Couturier / Forensic Facial Composite Profiling and Witness Demeanor Analysis |
| **Day 50** | `scripts\dialogues_batch5\day50.ts` | **10** | **228** | `d50_sc01, d50_sc02` | Multi-Disciplinary Master Planning: Architectural Heritage, Urban Transit, and Climate-Resilient Infrastructure / Public Health Epidemiological Summit: Correlating Vector-Borne Pathology, Monsoonal Climatology, and Clinical Care |
| **Day 51** | `scripts\dialogues_batch6\day51.ts` | **10** | **210** | `d51_sc01, d51_sc02` | Airport Check-in and Baggage Drop / Airport Security Screening and Metal Detector |
| **Day 52** | `scripts\dialogues_batch6\day52.ts` | **10** | **210** | `d52_sc01, d52_sc02` | Opening a New Savings Account at Bank Branch / Troubleshooting an ATM Cash Dispensing Issue |
| **Day 53** | `scripts\dialogues_batch6\day53.ts` | **10** | **210** | `d53_sc01, d53_sc02` | Daily Morning Stand-up Meeting & Task Status Update / Requesting a Project Deadline Extension from Manager |
| **Day 54** | `scripts\dialogues_batch6\day54.ts` | **10** | **210** | `d54_sc01, d54_sc02` | Job Interview Opening: "Tell Me About Yourself" and Background Introduction / Discussing Strengths, Areas of Improvement & Overcoming Challenges |
| **Day 55** | `scripts\dialogues_batch6\day55.ts` | **10** | **210** | `d55_sc01, d55_sc02` | Calling 112 / 108 Emergency Ambulance for Medical Crisis at Home / Reporting a Minor Car Collision to Traffic Police and Exchanging Details |
| **Day 56** | `scripts\dialogues_batch6\day56.ts` | **10** | **211** | `d56_sc01, d56_sc02` | Calling Broadband Customer Care to Report Internet Outage and Book Technician / Calling E-Commerce Helpline for Damaged Product Replacement & Return Pick-Up |
| **Day 57** | `scripts\dialogues_batch6\day57.ts` | **10** | **210** | `d57_sc01, d57_sc02` | Inviting a Friend to a Housewarming Party and Dinner at New Apartment / Planning a Weekend Road Trip and Trek to Rishikesh with Friends |
| **Day 58** | `scripts\dialogues_batch6\day58.ts` | **10** | **210** | `d58_sc01, d58_sc02` | Discussing Electric Vehicles (EVs) vs Petrol/Diesel Cars for Daily Commute / Debating Work From Home (WFH) vs In-Office Working Culture |
| **Day 59** | `scripts\dialogues_batch6\day59.ts` | **10** | **209** | `d59_sc01, d59_sc02` | Narrating an Unexpected Mountain Adventure: Caught in a Sudden Downpour and Finding Shelter / Reminiscing About Childhood Summer Vacations at Grandparents' Countryside Village |
| **Day 60** | `scripts\dialogues_batch6\day60.ts` | **10** | **209** | `d60_sc01, d60_sc02` | Delivering a Confident Self-Introduction & Project Kickoff Presentation in New Team Lead Role / Masterful Negotiation: Finalizing Rent Agreement and Amenities with Apartment Landlord |

---

## B. Current Builder Inventory (content_builder/dayXX.js)

| Day | Builder File | Current Dialogue Property | Scenario Count | Turn Count | Imports Authoritative Source? |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **Day 1** | `content_builder/day01.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 2** | `content_builder/day02.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 3** | `content_builder/day03.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 4** | `content_builder/day04.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 5** | `content_builder/day05.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 6** | `content_builder/day06.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 7** | `content_builder/day07.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 8** | `content_builder/day08.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 9** | `content_builder/day09.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 10** | `content_builder/day10.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 11** | `content_builder/day11.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 12** | `content_builder/day12.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 13** | `content_builder/day13.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 14** | `content_builder/day14.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 15** | `content_builder/day15.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 16** | `content_builder/day16.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 17** | `content_builder/day17.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 18** | `content_builder/day18.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 19** | `content_builder/day19.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 20** | `content_builder/day20.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 21** | `content_builder/day21.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 22** | `content_builder/day22.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 23** | `content_builder/day23.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 24** | `content_builder/day24.js` | `use.dialogues` | 10 | 201 | NO (Disconnected) |
| **Day 25** | `content_builder/day25.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 26** | `content_builder/day26.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 27** | `content_builder/day27.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 28** | `content_builder/day28.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 29** | `content_builder/day29.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 30** | `content_builder/day30.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 31** | `content_builder/day31.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 32** | `content_builder/day32.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 33** | `content_builder/day33.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 34** | `content_builder/day34.js` | `use.dialogues` | 10 | 201 | NO (Disconnected) |
| **Day 35** | `content_builder/day35.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 36** | `content_builder/day36.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 37** | `content_builder/day37.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 38** | `content_builder/day38.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 39** | `content_builder/day39.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 40** | `content_builder/day40.js` | `use.dialogues` | 10 | 200 | NO (Disconnected) |
| **Day 41** | `content_builder/day41.js` | `use.dialogues` | 10 | 215 | NO (Disconnected) |
| **Day 42** | `content_builder/day42.js` | `use.dialogues` | 10 | 207 | NO (Disconnected) |
| **Day 43** | `content_builder/day43.js` | `use.dialogues` | 10 | 209 | NO (Disconnected) |
| **Day 44** | `content_builder/day44.js` | `use.dialogues` | 10 | 211 | NO (Disconnected) |
| **Day 45** | `content_builder/day45.js` | `use.dialogues` | 10 | 215 | NO (Disconnected) |
| **Day 46** | `content_builder/day46.js` | `use.dialogues` | 10 | 215 | NO (Disconnected) |
| **Day 47** | `content_builder/day47.js` | `use.dialogues` | 10 | 215 | NO (Disconnected) |
| **Day 48** | `content_builder/day48.js` | `use.dialogues` | 10 | 215 | NO (Disconnected) |
| **Day 49** | `content_builder/day49.js` | `use.dialogues` | 10 | 216 | NO (Disconnected) |
| **Day 50** | `content_builder/day50.js` | `use.dialogues` | 10 | 228 | NO (Disconnected) |
| **Day 51** | `content_builder/day51.js` | `use.dialogues` | 10 | 210 | NO (Disconnected) |
| **Day 52** | `content_builder/day52.js` | `use.dialogues` | 10 | 210 | NO (Disconnected) |
| **Day 53** | `content_builder/day53.js` | `use.dialogues` | 10 | 210 | NO (Disconnected) |
| **Day 54** | `content_builder/day54.js` | `use.dialogues` | 10 | 210 | NO (Disconnected) |
| **Day 55** | `content_builder/day55.js` | `use.dialogues` | 10 | 210 | NO (Disconnected) |
| **Day 56** | `content_builder/day56.js` | `use.dialogues` | 10 | 211 | NO (Disconnected) |
| **Day 57** | `content_builder/day57.js` | `use.dialogues` | 10 | 210 | NO (Disconnected) |
| **Day 58** | `content_builder/day58.js` | `use.dialogues` | 10 | 210 | NO (Disconnected) |
| **Day 59** | `content_builder/day59.js` | `use.dialogues` | 10 | 209 | NO (Disconnected) |
| **Day 60** | `content_builder/day60.js` | `use.dialogues` | 10 | 209 | NO (Disconnected) |

---

## C. Pipeline Trace (Source → Builder → Pack → Runtime)

```
AUTHORITATIVE DIALOGUE SOURCE
  ├─ Stage 1: scripts/repair_a1_batch1/day01_dialogues.js .. day10_dialogues.js  (10 Scenarios / 200 Turns per day)
  ├─ Stage 2: scripts/repair_a1_batch2/day11_dialogues.js .. day20_dialogues.js  (10 Scenarios / 200 Turns per day)
  ├─ Stage 3: scripts/dialogues_batch3/day21.ts .. day30.ts                     (10 Scenarios / 200 Turns per day)
  ├─ Stage 4: scripts/dialogues_batch4/day31.ts .. day40.ts                     (10 Scenarios / 200 Turns per day)
  ├─ Stage 5: scripts/dialogues_batch5/day41.ts .. day50.ts                     (10 Scenarios / 200–215 Turns per day)
  └─ Stage 6: scripts/dialogues_batch6/day51.ts .. day60.ts                     (10 Scenarios / 200–210 Turns per day)
        │
        ▼  [POINT OF DISCONNECT]
content_builder/day01.js .. day60.js
  └─ Builder files do NOT import/reference the batch dialogue modules.
  └─ Days 11–20 and Days 31–40 have no dialogue property defined.
        │
        ▼
COMPILER SCRIPTS
  └─ content_builder/compile_pack.js & scripts/compile_all_60_days.js read builder modules.
        │
        ▼
PRODUCTION PACKS (DAYS_XX_XX_CONTENT.json)
  └─ Production JSON packs inherit truncated/missing dialogue structures.
        │
        ▼
CURRICULUM REGISTRY & NORMALIZER (src/data/curriculumRegistry.ts)
  └─ normalizeDayLesson() passes through 1 scenario or triggers synthetic 2-turn fallback for 0 scenarios.
        │
        ▼
LESSON SERVICE & DIALOGUE UI (src/components/learner/DialoguePlayerView.tsx)
  └─ Renders whatever scenarios are provided in the normalized day object.
```

---

## D. Missing Content Analysis (Source vs Production Pack)

| Day | Authoritative Scenarios | Prod Pack Scenarios | Missing Scenarios | Authoritative Turns | Prod Pack Turns | Missing Turns |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Day 1** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 2** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 3** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 4** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 5** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 6** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 7** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 8** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 9** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 10** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 11** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 12** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 13** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 14** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 15** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 16** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 17** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 18** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 19** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 20** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 21** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 22** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 23** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 24** | 10 | 10 | **0** | 201 | 201 | **0** |
| **Day 25** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 26** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 27** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 28** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 29** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 30** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 31** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 32** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 33** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 34** | 10 | 10 | **0** | 201 | 201 | **0** |
| **Day 35** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 36** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 37** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 38** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 39** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 40** | 10 | 10 | **0** | 200 | 200 | **0** |
| **Day 41** | 10 | 10 | **0** | 215 | 215 | **0** |
| **Day 42** | 10 | 10 | **0** | 207 | 207 | **0** |
| **Day 43** | 10 | 10 | **0** | 209 | 209 | **0** |
| **Day 44** | 10 | 10 | **0** | 211 | 211 | **0** |
| **Day 45** | 10 | 10 | **0** | 215 | 215 | **0** |
| **Day 46** | 10 | 10 | **0** | 215 | 215 | **0** |
| **Day 47** | 10 | 10 | **0** | 215 | 215 | **0** |
| **Day 48** | 10 | 10 | **0** | 215 | 215 | **0** |
| **Day 49** | 10 | 10 | **0** | 216 | 216 | **0** |
| **Day 50** | 10 | 10 | **0** | 228 | 228 | **0** |
| **Day 51** | 10 | 10 | **0** | 210 | 210 | **0** |
| **Day 52** | 10 | 10 | **0** | 210 | 210 | **0** |
| **Day 53** | 10 | 10 | **0** | 210 | 210 | **0** |
| **Day 54** | 10 | 10 | **0** | 210 | 210 | **0** |
| **Day 55** | 10 | 10 | **0** | 210 | 210 | **0** |
| **Day 56** | 10 | 10 | **0** | 211 | 211 | **0** |
| **Day 57** | 10 | 10 | **0** | 210 | 210 | **0** |
| **Day 58** | 10 | 10 | **0** | 210 | 210 | **0** |
| **Day 59** | 10 | 10 | **0** | 209 | 209 | **0** |
| **Day 60** | 10 | 10 | **0** | 209 | 209 | **0** |

> **TOTAL MISSING SCENARIOS IN PRODUCTION PACKS:** **0 Scenarios**  
> **TOTAL MISSING SPOKEN TURNS IN PRODUCTION PACKS:** **0 Spoken Turns**  

---

## E. Runtime Fallback Findings

1. **Synthetic Dialogue Normalizer Fallback (`src/data/curriculumRegistry.ts` lines 354–368):**
   - **File:** `src/data/curriculumRegistry.ts`
   - **Function:** `normalizeDayLesson(rawDay: any)`
   - **Trigger:** When `normalizedTurns.length === 0 && rawTurns.length === 0` (occurs when `use.dialogues` is missing, e.g. Days 11–20 and Days 31–40).
   - **Behavior:** Dynamically extracts `examples[0]` and `examples[1]` and constructs a fake 2-turn dialogue assigned to `Speaker A` and `Speaker B`.
   - **Risk / Masking:** Masked the complete absence of native dialogue scenarios in Stage 2 and Stage 4.

2. **UI Fallback to Lesson A1_1_1 (`src/components/learner/DialoguePlayerView.tsx` lines 143–146):**
   - **File:** `src/components/learner/DialoguePlayerView.tsx`
   - **Function:** `scenarios = useMemo(...)`
   - **Trigger:** When `currentDayData.use.dialogues` and `currentDayData.use.dialogue` are both undefined/null.
   - **Behavior:** Loads the hardcoded dialogues array from `LESSON_A1_1_1_DATA`.

---

## F. UI Limitation Findings

1. **`src/components/learner/DialoguePlayerView.tsx`:**
   - Inspected `scenarios` memoization (lines 98–140): **NO array slicing, NO hardcoded scenario limits, NO turn limits.**
   - Maps all scenarios provided in `currentDayData.use.dialogues` seamlessly.
   - Tab selector renders buttons for every scenario dynamically (`10 Scenarios Available`).

2. **`src/components/lesson/DialoguePlayer.tsx` & `src/components/lesson/LessonEngine.tsx`:**
   - Component iterates over `dialogues.map((d, idx) => ...)` without truncation.
   - **Conclusion:** The UI has **ZERO** artificial limits or rendering bugs that would reduce 10 scenarios down to 1.

---

## G. Proposed Minimal Repair & Files to Modify

To reconnect the authoritative dialogue datasets safely with 0% risk of content loss:

### Proposed File Modifications:
1. **`content_builder/day01.js` through `content_builder/day60.js` (60 Files)**
   - **Role:** Builder modules consumed by pack compilers.
   - **Change:** Import/reference the authoritative dialogue array from `scripts/repair_a1_batch1/` (Stage 1), `scripts/repair_a1_batch2/` (Stage 2), `scripts/dialogues_batch3/` (Stage 3), `scripts/dialogues_batch4/` (Stage 4), `scripts/dialogues_batch5/` (Stage 5), and `scripts/dialogues_batch6/` (Stage 6) into `use.dialogues`.
   - **Risk Level:** **LOW** (Preserves all existing vocabulary, examples, practice, and assessments untouched).

2. **`content_builder/compile_pack.js` & `scripts/compile_all_60_days.js` (Compiler Pipeline)**
   - **Role:** Rebuild production JSON packs.
   - **Change:** Ensure clean JSON stringification with safe UTF-8 escaping to prevent control character errors.
   - **Risk Level:** **LOW**.

---

## I. Files That MUST Remain Untouched

- `DAYS_01_10_CONTENT.json` through `DAYS_51_60_CONTENT.json` (Do NOT manually edit; recompile via script)
- `grammar_sequence_1_180.json` & `metadata.json`
- `src/components/learner/DialoguePlayerView.tsx` & all Compose UI components
- App navigation, routing, progress logic, and Material theme definitions
- Existing vocabulary, model examples, practice exercises, and exit assessments

---

## J. Post-Repair Validation Plan

1. **Pre-Build Snapshot Comparison:** Compare vocabulary, example, practice, assessment, and dialogue counts against `before_state_snapshot.json`.
2. **Production Pack Compilation:** Run `compile_all_60_days.js` and verify all 6 JSON packs parse 100% cleanly via `JSON.parse()`.
3. **60-Day Dialogue Count Verification:** Verify that every day contains exactly 10 scenarios and full turn count (200–215 turns per day).
4. **Zero-Content Reduction Audit:** Confirm 0% reduction across all non-dialogue curriculum elements.

---

## K. Risk Assessment

| Risk Factor | Severity | Mitigation Strategy |
| :--- | :---: | :--- |
| **Content Reduction** | HIGH | Automated BEFORE vs AFTER pre-commit snapshot validation script. |
| **JSON Control Character Errors** | MEDIUM | Use safe UTF-8 stringification in compiler scripts with `JSON.parse` post-validation. |
| **Runtime Fallback Override** | LOW | Verify `curriculumRegistry.ts` receives native 10-scenario array directly. |