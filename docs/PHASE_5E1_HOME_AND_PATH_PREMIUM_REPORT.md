# PHASE 5E-1 — Flagship Home Dashboard & Course Path Redesign Report

**Curiosity English Academy**  
**Phase:** 5E-1 UI Flagship Upgrade  
**Status:** COMPLETE & VERIFIED

---

## 1. Components Upgraded

### `LearnerHomeDashboard.tsx`
* **Flagship Hero Card (Royal Indigo & Apple Fitness Style)**:
  * Brand gradient from `#335CFF` via `#4760FF` to `#6D5DF6` with animated floating ambient gradient blobs.
  * Dynamic time-aware greeting (`Good Morning`, `Good Afternoon`, `Good Evening`) with learner name.
  * Glowing 3D learner avatar with active online beacon.
  * Triple fitness-style badge bar: **CEFR Level**, **Total XP**, and **Day Streak**.
  * Tactile, high-contrast **"Continue Today's Lesson"** CTA button with direct Day & lesson topic routing.
* **Today's Learning Mission Card**:
  * Displays Day number (1–60), lesson topic, and Hindi subtitle (`दैनिक बातचीत एवं आत्मविश्वास`).
  * 4-stat metric cluster: **Vocabulary count**, **Dialogue turns count**, **Practice drills count**, and **Estimated duration**.
  * Animated progress bar with multi-stop gradient fill.
  * Theme-responsive styling: floating crisp white card in Light mode; glass indigo card in Dark mode.
* **Four Premium Statistic Cards**:
  * **XP Card**: Royal Indigo gradient icon circle, large XP metric, CEFR subtitle, and Level chip.
  * **Streak Card**: Amber/Orange gradient icon circle with animated flame icon, days metric, and "On Fire 🔥" chip.
  * **Lessons Completed Card**: Emerald/Teal gradient icon circle, completed count out of 60, and "% Mastered" chip.
  * **Words Learned Card**: Cyan/Blue gradient icon circle, total mastered vocabulary count, and "+8 per Lesson" chip.
* **Seven-Day Streak Calendar**:
  * Redesigned into 7 floating capsules with rounded pill contours.
  * Completed capsules filled with flame / check icon and glowing border.
  * Active/Today capsule pulses with `animate-soft-pulse` and highlighted accent.
  * Future capsules outlined with subtle muted border.
* **Quick Action Grid (6 Premium Square Cards)**:
  * 24px rounded cards with gradient icon circles and tactile lift animations (`card-lift`, `btn-press`):
    1. **Speaking Lab**: Voice & accent pronunciation trainer with native audio models.
    2. **Vocabulary**: Interactive flashcards & word library.
    3. **Grammar Rules**: Formula tables & Hindi speaker traps.
    4. **Review Mistakes**: Spaced retention drills and memory reinforcement.
    5. **Dialogue Lab**: Real conversation roleplays with multi-turn feedback.
    6. **Assessments**: CEFR tests, benchmarks, and certificates.

---

### `HindiCourseHome.tsx`
* **Journey Banner**:
  * Full-bleed gradient banner with Royal Indigo and Emerald accents.
  * Displays Active Stage, CEFR Level, live streak, and total earned XP.
  * Segmented course mastery meter tracking progress across all 60 days.
  * Complete path reward badge highlighting `+6,000 XP`.
* **Primary Today's Goal CTA**:
  * Prominent target lesson banner with glowing pulse indicator and immediate "Start Day X" trigger.
* **Duolingo-Style 60-Day Learning Path**:
  * Preserves exact sequence across all 6 Stages (Days 1–60).
  * **Completed nodes**: Emerald gradient node with golden stars, checkmark, and review CTA.
  * **Current/Active goal node**: Glowing animated ring (`animate-node-emerald-glow`), bouncing "Current Goal" badge, and high-contrast "START" button.
  * **Locked nodes**: Sleek glass/slate card with lock icon.
  * **Rich Lesson Cards**: Displays Day number, CEFR tag, XP reward, English title, Hindi title, vocabulary count, dialogue count, drills count, and speaking lab badge.
* **Stage Celebrations & Empty States**:
  * Completed stages display CEFR mastery celebration stamps with gold trophy badges.
  * Locked stages display subtle illustration badges and unlock requirements.
* **Search & Stage Filters**:
  * Instant search filtering across all 60 days (topics, grammar rules, keywords).
  * Horizontal stage selector pills for quick module jumping.

---

## 2. Animations Added

| Animation Class | Duration / Timing | Description |
| :--- | :--- | :--- |
| `animate-blob-drift` | 9s ease-in-out infinite | Gentle ambient drifting background gradient blobs for flagship cards |
| `animate-node-glow` | 2.4s cubic-bezier | Pulsing glow ring for Royal Indigo active goal nodes |
| `animate-node-emerald-glow` | 2.4s cubic-bezier | Pulsing glow ring for Emerald active course path nodes |
| `animate-flame` | 2.4s ease-in-out infinite | Subtle flame flicker for streak badges and capsules |
| `animate-soft-pulse` | 2.8s ease-in-out infinite | Soft breathing pulse for the current day capsule |
| `card-lift` | 180ms ease-spring | Soft lift and shadow bloom on hover / tap |
| `btn-press` | 120ms ease-standard | Tactile spring compression on click/tap |

*All animations respect `prefers-reduced-motion: reduce` with instant fallback transitions.*

---

## 3. Theme Verification

* **Light Mode**:
  * Canvas: `#F6F8FC`
  * Card Surfaces: `#FFFFFF`
  * Borders: `#D9E4FF`
  * Typography: High-contrast Slate-900 / Slate-600
* **Dark Mode**:
  * Canvas: `#050816`
  * Card Surfaces: `#0B1225` / `#111A30` (with 85% opacity glassmorphism)
  * Borders: `rgba(255, 255, 255, 0.08)` / `#1E293B`
  * Typography: Bright Slate-100 / Slate-400
* **System Mode**:
  * Live dynamic synchronization with OS color scheme preferences.

---

## 4. Accessibility Verification

* **Color Contrast**: All text pairings pass WCAG AA standards (minimum 4.5:1 for body copy and 3:1 for large display titles).
* **Touch Targets**: All action buttons and capsules have minimum 44px touch targets.
* **Keyboard & Screen Readers**: All buttons and cards have explicit `aria-label` or descriptive text.
* **Reduced Motion**: Safe motion degradation in `index.css`.

---

## 5. Zero Lesson Logic Modified

* **Curriculum JSON (Days 1–60)**: Untouched (0 modifications).
* **Dialogues & Turns**: Untouched (0 modifications).
* **Vocabulary Items & IPA**: Untouched (0 modifications).
* **Grammar Formulas & Traps**: Untouched (0 modifications).
* **Practice Drills & Validation**: Untouched (0 modifications).
* **XP Tracking & Streak Engine**: Untouched (0 modifications).
* **Speech Recognition & Audio Synthesizer**: Untouched (0 modifications).
* **Navigation Handlers & State Machines**: Untouched (0 modifications).

---

### Verification Summary

```text
TypeScript PASS
Build PASS
Curriculum Integrity PASS
```
