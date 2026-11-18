#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curiosity English Academy - honest stats across Profile and Practice
--------------------------------------------------------------------
Same bug as the home screen, in four more files. A brand-new account with
0 XP, 0 completed days currently shows:

  Profile tab      "1d" day streak, 25 speaking minutes, 24 words,
                   120 XP, and six skill bars: Vocabulary 65, Grammar 78,
                   Spoken 84, Dialogue 85, Listening 88, Syntax 72.
  Progress tab     the same numbers again, floor of 1 completed day,
                   skills of 65/75/82/88/85/70.
  Practice tab     "1" day streak.
  Achievements     a brand-new account already has 42 words, which unlocks
                   the 25-word badge and shows progress on the 100 and 500
                   word badges.

Every one of those comes from a hard-coded floor (Math.max(..., 25)),
a falsy-default (|| 1, || 42, || 120, || 84) or a fixed score (78, 85, 88).

The fix:
  * add three real counters to HindiCourseService that read the curriculum
  * use them for words / dialogue turns / grammar rules
  * replace every floor and fixed score with the real value, or 0
  * skills show 0 until the learner has actually completed a day

Run from the project root:
    cd "/mnt/d/lexi talk app" && python3 fix-stats-everywhere.py
"""

import shutil
import sys
from pathlib import Path

SERVICE = Path("src/services/HindiCourseService.ts")
HOME    = Path("src/components/learner/LearnerHomeDashboard.tsx")
PROFILE = Path("src/components/learner/LearnerProfileView.tsx")
PROGRESS= Path("src/components/learner/ProgressDetailView.tsx")
PRACTICE= Path("src/components/learner/DailyPracticeView.tsx")
ACHIEVE = Path("src/data/achievementsData.ts")

FILES = [SERVICE, HOME, PROFILE, PROGRESS, PRACTICE, ACHIEVE]
for f in FILES:
    if not f.exists():
        sys.exit("ERROR: %s not found. Run this from /mnt/d/lexi talk app" % f)

for f in FILES:
    bak = f.with_suffix(f.suffix + ".before-stats-everywhere")
    if not bak.exists():
        shutil.copy2(f, bak)


def must(text, old, new, label):
    n = text.count(old)
    if n != 1:
        raise SystemExit(
            "ABORTED - nothing written.\nIn %s, expected exactly one of:\n---\n%s\n---\n"
            "found %d. Send me this and I will adjust the patch." % (label, old, n)
        )
    return text.replace(old, new, 1)


# ------------------------------------------------- 1. real counters, one place
t = SERVICE.read_text(encoding="utf-8")
ANCHOR = "  /**\n   * Get curriculum stages metadata\n   */\n  public getStages(): HindiCourseStageMeta[] {"
HELPERS = """  /**
   * Real totals, read from the curriculum itself.
   * These exist so that no screen has to invent a per-day multiplier.
   */
  public countWordsInDays(dayNumbers: number[]): number {
    return (dayNumbers || []).reduce((total: number, dayNum: number) => {
      const day = getRegistryDayByNumber(dayNum);
      return total + (day?.learn?.vocabulary?.length || 0);
    }, 0);
  }

  public countTurnsInDays(dayNumbers: number[]): number {
    return (dayNumbers || []).reduce((total: number, dayNum: number) => {
      const day = getRegistryDayByNumber(dayNum);
      const scenarios = day?.use?.dialogues || [];
      const list = Array.isArray(scenarios) ? scenarios : [scenarios];
      return total + list.reduce((sum: number, s: any) => sum + ((s?.turns?.length) || 0), 0);
    }, 0);
  }

  public countGrammarRulesInDays(dayNumbers: number[]): number {
    return (dayNumbers || []).reduce((total: number, dayNum: number) => {
      const day = getRegistryDayByNumber(dayNum);
      const rules = day?.teach?.grammarRules || [];
      return total + (Array.isArray(rules) ? rules.length : 0);
    }, 0);
  }

""" + ANCHOR
t = must(t, ANCHOR, HELPERS, SERVICE.name)
SERVICE.write_text(t, encoding="utf-8")

P = "hindiProgress.completedDays"

# ------------------------------------------------------------------- 2. home
t = HOME.read_text(encoding="utf-8")
t = must(
    t,
    "  const wordsLearnedCount = hindiProgress.completedDays.reduce(\n"
    "    (total: number, dayNum: number) => {\n"
    "      const finishedDay = HindiCourseService.getDayByNumber(dayNum);\n"
    "      return total + (finishedDay?.learn?.vocabulary?.length || 0);\n"
    "    },\n"
    "    0\n"
    "  );",
    "  const wordsLearnedCount = HindiCourseService.countWordsInDays(hindiProgress.completedDays);",
    HOME.name,
)
HOME.write_text(t, encoding="utf-8")

# ---------------------------------------------------------------- 3. profile
t = PROFILE.read_text(encoding="utf-8")

t = must(
    t,
    "  const daysCompleted = Math.max(hindiProg.completedDays?.length || 0, user.completedLessonIds?.length || 1);",
    "  const completedDayNumbers = hindiProg.completedDays || [];\n"
    "  const daysCompleted = completedDayNumbers.length;",
    PROFILE.name,
)
t = must(
    t,
    "import { HindiCourseProgressService } from '../../services/HindiCourseProgressService';",
    "import { HindiCourseProgressService } from '../../services/HindiCourseProgressService';\n"
    "import { HindiCourseService } from '../../services/HindiCourseService';",
    PROFILE.name + " import",
)
t = must(t, "  const speakingMinutes = Math.max(25, daysCompleted * 6);",
         "  const speakingMinutes = daysCompleted * 6;", PROFILE.name)
t = must(t, "  const wordsLearned = user.wordsMasteredCount || Math.max(daysCompleted * 8, 24);",
         "  const wordsLearned = HindiCourseService.countWordsInDays(completedDayNumbers);", PROFILE.name)
t = must(t, "  const totalXp = user.totalXp || Math.max(daysCompleted * 65, 120);",
         "  const totalXp = user.totalXp || 0;", PROFILE.name)
t = must(
    t,
    "  const avgScore = scoresList.length > 0 ? Math.round(scoresList.reduce((a, b) => a + b, 0) / scoresList.length) : 84;",
    "  const avgScore = scoresList.length > 0 ? Math.round(scoresList.reduce((a, b) => a + b, 0) / scoresList.length) : 0;",
    PROFILE.name,
)

OLD_SKILLS = """  const skillDomains = [
    { name: 'Vocabulary', nameHi: 'शब्दावली', score: Math.min(100, Math.max(65, Math.round((wordsLearned / 500) * 100 + 40))), color: 'bg-cyan-500', text: 'text-cyan-600 dark:text-cyan-400' },
    { name: 'Grammar Rules', nameHi: 'व्याकरण', score: 78, color: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400' },
    { name: 'Spoken Pronunciation', nameHi: 'उच्चारण व प्रवाह', score: avgScore, color: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400' },
    { name: 'Dialogue Comprehension', nameHi: 'संवाद समझ', score: 85, color: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400' },
    { name: 'Listening Accuracy', nameHi: 'श्रवण सटीकता', score: 88, color: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400' },
    { name: 'Syntax & Assembly', nameHi: 'वाक्य संरचना', score: 72, color: 'bg-pink-500', text: 'text-pink-600 dark:text-pink-400' },
  ];"""

NEW_SKILLS = """  // Skills start at zero and fill in only from work actually completed.
  const vocabGoal = Math.max(1, daysCompleted) * 60;
  const skillDomains = [
    { name: 'Vocabulary', nameHi: 'शब्दावली', score: daysCompleted > 0 ? Math.min(100, Math.round((wordsLearned / vocabGoal) * 100)) : 0, color: 'bg-cyan-500', text: 'text-cyan-600 dark:text-cyan-400' },
    { name: 'Grammar Rules', nameHi: 'व्याकरण', score: daysCompleted > 0 ? avgScore : 0, color: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400' },
    { name: 'Spoken Pronunciation', nameHi: 'उच्चारण व प्रवाह', score: daysCompleted > 0 ? avgScore : 0, color: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400' },
    { name: 'Dialogue Comprehension', nameHi: 'संवाद समझ', score: daysCompleted > 0 ? avgScore : 0, color: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400' },
    { name: 'Listening Accuracy', nameHi: 'श्रवण सटीकता', score: daysCompleted > 0 ? avgScore : 0, color: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400' },
    { name: 'Syntax & Assembly', nameHi: 'वाक्य संरचना', score: daysCompleted > 0 ? avgScore : 0, color: 'bg-pink-500', text: 'text-pink-600 dark:text-pink-400' },
  ];"""
t = must(t, OLD_SKILLS, NEW_SKILLS, PROFILE.name + " skillDomains")

t = must(t, "{Math.max(12, daysCompleted * 6)}",
         "{HindiCourseService.countTurnsInDays(completedDayNumbers)}", PROFILE.name)
t = must(t, "{Math.max(15, daysCompleted * 3)}",
         "{HindiCourseService.countGrammarRulesInDays(completedDayNumbers)}", PROFILE.name)
t = must(t, "{user.streakDays || 1}d", "{user.streakDays || 0}d", PROFILE.name)
PROFILE.write_text(t, encoding="utf-8")

# --------------------------------------------------------------- 4. progress
t = PROGRESS.read_text(encoding="utf-8")
t = must(
    t,
    "  const completedDaysCount = Math.max(hindiProg.completedDays?.length || 0, user.completedLessonIds?.length || 1);",
    "  const finishedDayNumbers = hindiProg.completedDays || [];\n"
    "  const completedDaysCount = finishedDayNumbers.length;",
    PROGRESS.name,
)
t = must(t, "  const speakingMinutes = Math.max(25, completedDaysCount * 6);",
         "  const speakingMinutes = completedDaysCount * 6;", PROGRESS.name)
t = must(t, "  const wordsLearned = user.wordsMasteredCount || Math.max((hindiProg.completedDays?.length || 1) * 8, 24);",
         "  const wordsLearned = HindiCourseService.countWordsInDays(finishedDayNumbers);", PROGRESS.name)
t = must(t, "  const totalXp = user.totalXp || Math.max(completedDaysCount * 65, 120);",
         "  const totalXp = user.totalXp || 0;", PROGRESS.name)
t = must(
    t,
    "  const avgRecordedScore = scoresList.length > 0 ? Math.round(scoresList.reduce((a, b) => a + b, 0) / scoresList.length) : 84;",
    "  const avgRecordedScore = scoresList.length > 0 ? Math.round(scoresList.reduce((a, b) => a + b, 0) / scoresList.length) : 0;",
    PROGRESS.name,
)

OLD_MAP = """  const skillScoresMap: Record<string, number> = {
    vocabulary: Math.min(100, Math.max(65, Math.round((wordsLearned / 500) * 100 + 40))),
    grammar: Math.min(100, Math.max(60, a1Mastery.skillScores.grammar || 75)),
    speaking: Math.min(100, Math.max(55, avgRecordedScore || a1Mastery.skillScores.speaking || 82)),
    listening: Math.min(100, Math.max(60, a1Mastery.skillScores.listening || 88)),
    reading: Math.min(100, Math.max(65, a1Mastery.skillScores.reading || 85)),
    writing: Math.min(100, Math.max(50, a1Mastery.skillScores.writing || 70)),
  };"""
NEW_MAP = """  // Read from real assessments only. No defaults: an untouched skill is 0.
  const vocabGoal = Math.max(1, completedDaysCount) * 60;
  const skillScoresMap: Record<string, number> = {
    vocabulary: completedDaysCount > 0 ? Math.min(100, Math.round((wordsLearned / vocabGoal) * 100)) : 0,
    grammar: a1Mastery.skillScores.grammar || avgRecordedScore || 0,
    speaking: a1Mastery.skillScores.speaking || avgRecordedScore || 0,
    listening: a1Mastery.skillScores.listening || avgRecordedScore || 0,
    reading: a1Mastery.skillScores.reading || avgRecordedScore || 0,
    writing: a1Mastery.skillScores.writing || avgRecordedScore || 0,
  };"""
t = must(t, OLD_MAP, NEW_MAP, PROGRESS.name + " skillScoresMap")
PROGRESS.write_text(t, encoding="utf-8")

# --------------------------------------------------------------- 5. practice
t = PRACTICE.read_text(encoding="utf-8")
t = must(t, "{user.streakDays || 1}", "{user.streakDays || 0}", PRACTICE.name)
PRACTICE.write_text(t, encoding="utf-8")

# ------------------------------------------------------------ 6. achievements
t = ACHIEVE.read_text(encoding="utf-8")
n = t.count("const words = user.wordsMasteredCount || 42;")
if n != 3:
    raise SystemExit("ABORTED - expected 3 word-badge fallbacks in achievementsData.ts, found %d." % n)
t = t.replace("const words = user.wordsMasteredCount || 42;",
              "const words = user.wordsMasteredCount || 0;")
ACHIEVE.write_text(t, encoding="utf-8")


# --------------------------------------------------------------------- verify
print("verifying ...")
bad = []
checks = [
    (PROFILE, ["Math.max(25,", "Math.max(12,", "Math.max(15,", "Math.max(daysCompleted * 8, 24)",
               "Math.max(daysCompleted * 65, 120)", "streakDays || 1", "score: 78", "score: 85", "score: 88", "score: 72",
               ": 84;"]),
    (PROGRESS, ["Math.max(25,", "Math.max(completedDaysCount * 65, 120)", ": 84;",
                "a1Mastery.skillScores.grammar || 75",
                "a1Mastery.skillScores.listening || 88",
                "a1Mastery.skillScores.reading || 85",
                "a1Mastery.skillScores.writing || 70"]),
    (PRACTICE, ["streakDays || 1"]),
    (ACHIEVE, ["|| 42"]),
    (HOME, ["Math.max(hindiProgress.completedDays.length * 8, 16)"]),
]
for f, bads in checks:
    txt = f.read_text(encoding="utf-8")
    for b in bads:
        if b in txt:
            bad.append("%s still contains %r" % (f.name, b))

prof_txt = PROFILE.read_text(encoding="utf-8")
if "import { HindiCourseService }" not in prof_txt:
    bad.append("LearnerProfileView uses HindiCourseService but does not import it")
if "import { HindiCourseService }" not in PROGRESS.read_text(encoding="utf-8"):
    bad.append("ProgressDetailView lost its HindiCourseService import")

svc = SERVICE.read_text(encoding="utf-8")
for need in ("countWordsInDays", "countTurnsInDays", "countGrammarRulesInDays"):
    if need not in svc:
        bad.append("HindiCourseService is missing " + need)

if bad:
    for b in bad:
        print("  PROBLEM:", b)
    print("Restoring ...")
    for f in FILES:
        bak = f.with_suffix(f.suffix + ".before-stats-everywhere")
        if bak.exists():
            shutil.copy2(bak, f)
    sys.exit("ABORTED - restored. Nothing changed. Send me this output.")

print("")
print("HindiCourseService : countWordsInDays / countTurnsInDays / countGrammarRulesInDays added")
print("Profile tab        : 0 days, 0 words, 0 XP, 0 speaking minutes, 6 skills at 0")
print("Progress tab       : same, no floors and no fixed scores")
print("Practice tab       : streak 0 (was 1)")
print("Achievements       : 0 words on a new account (was 42, which unlocked a badge)")
print("")
print("OK - all checks passed.")
