#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curiosity English Academy - the numbers that were typed in, not counted
-----------------------------------------------------------------------
Same defect as everything else we have fixed, one tab deeper. On Progress a
brand-new learner who has completed nothing sees:

    350 XP   ·   16 Words   ·   35 Mins   ·   6 Rules   ·   92.4%
    "up 120 XP higher"   ·   "Goal: 30m / wk done"   ·   "100% turn shadowing"

Every one of those came from Math.max(<floor>, days * <guess>), so the number
could never fall to zero. Progress bars were hardcoded at 78%, 85%, 70%, 80%,
90%, 92%. The vocab studio did the same with "|| 8", "|| 20", "|| 18", "|| 12",
and the graduation certificate printed 4,500 XP for a learner with none.

The real counters already exist in the code and were simply not used:
    HindiCourseService.countWordsInDays()
    HindiCourseService.countTurnsInDays()
    HindiCourseService.countGrammarRulesInDays()
    HindiCourseProgressService.totalXpEarned
    HindiCourseProgressService.exerciseAttempts   (real answer accuracy)

After this patch every one of those figures is a real count or a real zero.

Run from the project root:
    cd "/mnt/d/lexi talk app" && python3 fix-progress-truth.py
"""

import shutil
import sys
from pathlib import Path

PROGRESS = Path("src/components/learner/ProgressDetailView.tsx")
PROFILE = Path("src/components/learner/LearnerProfileView.tsx")
HOME = Path("src/components/learner/LearnerHomeDashboard.tsx")
LESSON = Path("src/components/hindi/HindiLessonView.tsx")
CERT = Path("src/components/celebrations/GraduationCertificateModal.tsx")
VOCAB = Path("src/components/learner/VocabExperienceModal.tsx")
OVERVIEW = Path("src/components/learner/LessonOverviewModal.tsx")

FILES = [PROGRESS, PROFILE, HOME, LESSON, CERT, VOCAB, OVERVIEW]
for f in FILES:
    if not f.exists():
        sys.exit("ERROR: %s not found. Run this from /mnt/d/lexi talk app" % f)
for f in FILES:
    bak = f.with_suffix(f.suffix + ".before-progresstruth")
    if not bak.exists():
        shutil.copy2(f, bak)


def must(text, old, new, label, expect=1):
    n = text.count(old)
    if n != expect:
        raise SystemExit(
            "ABORTED - nothing written.\nIn %s, expected %d of:\n---\n%s\n---\nfound %d. "
            "Send me this and I will adjust the patch." % (label, expect, old, n)
        )
    return text.replace(old, new)


def edit(path, edits):
    p = Path(path)
    t = p.read_text(encoding="utf-8")
    for old, new, label in edits:
        t = must(t, old, new, "%s : %s" % (p.name, label))
    p.write_text(t, encoding="utf-8")
    print("  %-52s fixed" % path)


# ------------------------------------------------------------ progress detail
edit(PROGRESS, [
    (
        "  const speakingMinutes = completedDaysCount * 6;",
        "  // Real totals from the days actually finished. No floors, no estimates.\n"
        "  const dialogueTurns = HindiCourseService.countTurnsInDays(finishedDayNumbers);\n"
        "  const grammarRules = HindiCourseService.countGrammarRulesInDays(finishedDayNumbers);\n"
        "  const attemptList = Object.values(hindiProg.exerciseAttempts || {}) as any[];\n"
        "  const attemptCorrect = attemptList.filter((a) => a && a.correct).length;\n"
        "  const accuracyPct = attemptList.length > 0 ? Math.round((attemptCorrect / attemptList.length) * 100) : 0;\n"
        "  const xpEarned = hindiProg.totalXpEarned || 0;\n"
        "  const pctOf = (value: number, total: number) => (total > 0 ? Math.min(100, Math.round((value / total) * 100)) : 0);",
        "real counters",
    ),
    # XP card
    (
        "                  {Math.min(totalXp, Math.max(350, completedDaysCount * 45))} XP\n"
        "                </span>\n"
        "                <div className=\"w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden\">\n"
        "                  <div className=\"h-full bg-amber-500 rounded-full\" style={{ width: '78%' }} />\n"
        "                </div>\n"
        "                <span className=\"text-[9px] text-emerald-600 dark:text-emerald-400 font-bold block\">\n"
        "                  \u2191 120 XP higher\n"
        "                </span>",
        "                  {xpEarned} XP\n"
        "                </span>\n"
        "                <div className=\"w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden\">\n"
        "                  <div className=\"h-full bg-amber-500 rounded-full\" style={{ width: `${pctOf(completedDaysCount, 60)}%` }} />\n"
        "                </div>\n"
        "                <span className=\"text-[9px] text-emerald-600 dark:text-emerald-400 font-bold block\">\n"
        "                  {completedDaysCount > 0 ? `Across ${completedDaysCount} completed days` : 'No XP earned yet'}\n"
        "                </span>",
        "XP card",
    ),
    # words card
    (
        "                  +{Math.max(16, completedDaysCount * 4)} Words\n"
        "                </span>\n"
        "                <div className=\"w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden\">\n"
        "                  <div className=\"h-full bg-cyan-500 rounded-full\" style={{ width: '85%' }} />\n"
        "                </div>\n"
        "                <span className=\"text-[9px] text-cyan-600 dark:text-cyan-400 font-bold block\">\n"
        "                  Target: 40w / wk\n"
        "                </span>",
        "                  +{wordsLearned} Words\n"
        "                </span>\n"
        "                <div className=\"w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden\">\n"
        "                  <div className=\"h-full bg-cyan-500 rounded-full\" style={{ width: `${pctOf(wordsLearned, 2492)}%` }} />\n"
        "                </div>\n"
        "                <span className=\"text-[9px] text-cyan-600 dark:text-cyan-400 font-bold block\">\n"
        "                  of 2,492 words in Days 1-40\n"
        "                </span>",
        "words card",
    ),
    # card 3: spoken minutes -> real dialogue turns
    (
        "                  Spoken Minutes\n"
        "                </span>\n"
        "                <span className=\"text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono block\">\n"
        "                  {Math.max(35, completedDaysCount * 5)} Mins\n"
        "                </span>\n"
        "                <div className=\"w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden\">\n"
        "                  <div className=\"h-full bg-emerald-500 rounded-full\" style={{ width: '70%' }} />\n"
        "                </div>\n"
        "                <span className=\"text-[9px] text-emerald-600 dark:text-emerald-400 font-bold block\">\n"
        "                  Goal: 30m / wk \u2713\n"
        "                </span>",
        "                  Dialogue Turns\n"
        "                </span>\n"
        "                <span className=\"text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono block\">\n"
        "                  {dialogueTurns}\n"
        "                </span>\n"
        "                <div className=\"w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden\">\n"
        "                  <div className=\"h-full bg-emerald-500 rounded-full\" style={{ width: `${pctOf(completedDaysCount, 60)}%` }} />\n"
        "                </div>\n"
        "                <span className=\"text-[9px] text-emerald-600 dark:text-emerald-400 font-bold block\">\n"
        "                  {dialogueTurns > 0 ? 'From completed lessons' : 'Nothing played yet'}\n"
        "                </span>",
        "spoken minutes card",
    ),
    # rules card
    (
        "                  {Math.max(6, completedDaysCount * 2)} Rules\n"
        "                </span>\n"
        "                <div className=\"w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden\">\n"
        "                  <div className=\"h-full bg-purple-500 rounded-full\" style={{ width: '80%' }} />\n"
        "                </div>\n"
        "                <span className=\"text-[9px] text-purple-600 dark:text-purple-400 font-bold block\">\n"
        "                  Zero syntax regressions\n"
        "                </span>",
        "                  {grammarRules} Rules\n"
        "                </span>\n"
        "                <div className=\"w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden\">\n"
        "                  <div className=\"h-full bg-purple-500 rounded-full\" style={{ width: `${pctOf(completedDaysCount, 60)}%` }} />\n"
        "                </div>\n"
        "                <span className=\"text-[9px] text-purple-600 dark:text-purple-400 font-bold block\">\n"
        "                  {grammarRules > 0 ? 'From completed lessons' : 'No rules practised yet'}\n"
        "                </span>",
        "rules card",
    ),
    # dialogues card footer
    (
        "                  <div className=\"h-full bg-indigo-500 rounded-full\" style={{ width: '90%' }} />\n"
        "                </div>\n"
        "                <span className=\"text-[9px] text-indigo-600 dark:text-indigo-400 font-bold block\">\n"
        "                  100% turn shadowing\n"
        "                </span>",
        "                  <div className=\"h-full bg-indigo-500 rounded-full\" style={{ width: `${pctOf(completedDaysCount, 60)}%` }} />\n"
        "                </div>\n"
        "                <span className=\"text-[9px] text-indigo-600 dark:text-indigo-400 font-bold block\">\n"
        "                  {completedDaysCount > 0 ? 'Days completed' : 'Nothing yet'}\n"
        "                </span>",
        "dialogues card footer",
    ),
    # retention card
    (
        "                  92.4%\n"
        "                </span>\n"
        "                <div className=\"w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden\">\n"
        "                  <div className=\"h-full bg-amber-500 rounded-full\" style={{ width: '92%' }} />\n"
        "                </div>\n"
        "                <span className=\"text-[9px] text-amber-600 dark:text-amber-400 font-bold block\">\n"
        "                  Spaced Repetition Active\n"
        "                </span>",
        "                  {accuracyPct}%\n"
        "                </span>\n"
        "                <div className=\"w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden\">\n"
        "                  <div className=\"h-full bg-amber-500 rounded-full\" style={{ width: `${accuracyPct}%` }} />\n"
        "                </div>\n"
        "                <span className=\"text-[9px] text-amber-600 dark:text-amber-400 font-bold block\">\n"
        "                  {attemptList.length > 0 ? `${attemptCorrect}/${attemptList.length} answers correct` : 'No answers recorded yet'}\n"
        "                </span>",
        "retention card",
    ),
    # hero speaking time row
    (
        "                  <strong className=\"text-emerald-300 font-mono text-sm\">{speakingMinutes} Mins</strong>",
        "                  <strong className=\"text-emerald-300 font-mono text-sm\">{dialogueTurns} Turns</strong>",
        "hero speaking row",
    ),
    (
        "                  <span className=\"text-indigo-100 font-bold\">Speaking Time:</span>",
        "                  <span className=\"text-indigo-100 font-bold\">Dialogue Turns:</span>",
        "hero speaking label",
    ),
    # deep stat grid
    (
        "                  {Math.max(12, completedDaysCount * 6)}\n"
        "                </span>\n"
        "                <span className=\"text-[9px] font-bold text-slate-500 uppercase\">Dialogue Turns</span>",
        "                  {dialogueTurns}\n"
        "                </span>\n"
        "                <span className=\"text-[9px] font-bold text-slate-500 uppercase\">Dialogue Turns</span>",
        "deep turns stat",
    ),
    (
        "                  {Math.max(15, completedDaysCount * 3)}\n"
        "                </span>\n"
        "                <span className=\"text-[9px] font-bold text-slate-500 uppercase\">Grammar Formulas</span>",
        "                  {grammarRules}\n"
        "                </span>\n"
        "                <span className=\"text-[9px] font-bold text-slate-500 uppercase\">Grammar Formulas</span>",
        "deep grammar stat",
    ),
    (
        "                  {(speakingMinutes / 60).toFixed(1)}h\n"
        "                </span>\n"
        "                <span className=\"text-[9px] font-bold text-slate-500 uppercase\">Total Hours Spoken</span>",
        "                  {completedDaysCount}\n"
        "                </span>\n"
        "                <span className=\"text-[9px] font-bold text-slate-500 uppercase\">Days Completed</span>",
        "deep hours stat",
    ),
])

# ------------------------------------------------------------------- profile
edit(PROFILE, [
    (
        "  const speakingMinutes = daysCompleted * 6;",
        "  const dialogueTurns = HindiCourseService.countTurnsInDays(completedDayNumbers);",
        "real turn counter",
    ),
    (
        "                {(speakingMinutes / 60).toFixed(1)}h\n"
        "              </span>\n"
        "              <span className=\"text-[9px] font-bold text-slate-500 uppercase\">Speaking Hours</span>",
        "                {dialogueTurns}\n"
        "              </span>\n"
        "              <span className=\"text-[9px] font-bold text-slate-500 uppercase\">Dialogue Turns</span>",
        "stat tile",
    ),
    (
        "          speakingMinutes={speakingMinutes}",
        "          speakingMinutes={0}",
        "certificate gets a real zero",
    ),
])

# ---------------------------------------------------------------------- home
edit(HOME, [
    (
        "  const estimatedSpeakingMinutes = completedLessonsCount * 6;",
        "  const dialogueTurns = HindiCourseService.countTurnsInDays(hindiProgress.completedDays);",
        "real turn counter",
    ),
    (
        "              {estimatedSpeakingMinutes} <span className=\"text-xs font-bold text-slate-500\">min</span>\n"
        "            </div>\n"
        "            <div className=\"text-[11px] font-bold text-purple-600 dark:text-purple-400 mt-0.5\">\n"
        "              Accent drills\n"
        "            </div>",
        "              {dialogueTurns} <span className=\"text-xs font-bold text-slate-500\">turns</span>\n"
        "            </div>\n"
        "            <div className=\"text-[11px] font-bold text-purple-600 dark:text-purple-400 mt-0.5\">\n"
        "              Dialogue turns played\n"
        "            </div>",
        "speaking stat tile",
    ),
])

# ------------------------------------------------------------- lesson + cert
edit(LESSON, [
    (
        "import { HindiCourseProgressService } from '../../services/HindiCourseProgressService';",
        "import { HindiCourseProgressService } from '../../services/HindiCourseProgressService';\n"
        "import { HindiCourseService } from '../../services/HindiCourseService';",
        "lesson view needs the word counter",
    ),
    (
        "          vocabLearned={day.dayNumber * 8}",
        "          vocabLearned={HindiCourseService.countWordsInDays(\n"
        "            HindiCourseProgressService.getProgress(user?.id)?.completedDays || []\n"
        "          )}",
        "certificate vocabulary is a real count",
    ),
    (
        "          dialoguesCompleted={day.dayNumber}",
        "          dialoguesCompleted={\n"
        "            (HindiCourseProgressService.getProgress(user?.id)?.completedDays || []).length\n"
        "          }",
        "certificate dialogue count is real",
    ),
    (
        "          totalXp={user.totalXp || 4500}",
        "          totalXp={user.totalXp || 0}",
        "certificate XP is real",
    ),
    (
        "          speakingMinutes={day.dayNumber * 6}",
        "          speakingMinutes={0}",
        "certificate stop inventing minutes",
    ),
    (
        "          cefr={day.cefr || 'B1'}",
        "          cefr={day.cefr || 'A1'}",
        "certificate no false B1",
    ),
])

edit(CERT, [
    (
        "{totalXp || user.totalXp || 4500}",
        "{totalXp || user.totalXp || 0}",
        "no 4,500 XP floor",
    ),
])

# ----------------------------------------------------------------- vocab/overview
edit(VOCAB, [
    (
        "            wordsLearnedCount={masteredWordIds.length || 8}\n"
        "            totalWordsCount={rawList.length || 20}\n"
        "            wordsDueForReview={reviewWordIds.length || 4}\n"
        "            xpAvailable={75}",
        "            wordsLearnedCount={masteredWordIds.length}\n"
        "            totalWordsCount={rawList.length}\n"
        "            wordsDueForReview={reviewWordIds.length}\n"
        "            xpAvailable={0}",
        "hero studio counts",
    ),
    (
        "              totalLearned={masteredWordIds.length || 18}\n"
        "              totalMastered={masteredWordIds.length || 12}\n"
        "              reviewDue={reviewWordIds.length || 5}\n"
        "              favoritesCount={favorites.length || 6}\n"
        "              speakingPracticedCount={24}\n"
        "              dailyGoal={25}",
        "              totalLearned={masteredWordIds.length}\n"
        "              totalMastered={masteredWordIds.length}\n"
        "              reviewDue={reviewWordIds.length}\n"
        "              favoritesCount={favorites.length}\n"
        "              speakingPracticedCount={0}\n"
        "              dailyGoal={50}",
        "analytics rings",
    ),
])

edit(OVERVIEW, [
    (
        "{metrics?.vocabularyCount || 25} Items",
        "{metrics?.vocabularyCount ?? 0} Items",
        "no 25-item floor",
    ),
])

# --------------------------------------------------------------------- verify
problems = []

prog = PROGRESS.read_text(encoding="utf-8")
for bad in ("Math.max(350", "Math.max(16", "Math.max(35", "Math.max(6,", "Math.max(12",
            "Math.max(15", "92.4%", "120 XP higher", "30m / wk", "turn shadowing"):
    if bad in prog:
        problems.append("ProgressDetailView still contains: %s" % bad)
if "pctOf(" not in prog:
    problems.append("ProgressDetailView bars are still hardcoded")

for path, name in ((PROFILE, "LearnerProfileView"), (HOME, "LearnerHomeDashboard")):
    txt = Path(path).read_text(encoding="utf-8")
    if "* 6;" in txt or "* 6)" in txt:
        problems.append("%s still multiplies days by 6" % name)

if "|| 4500" in LESSON.read_text(encoding="utf-8") or "|| 4500" in CERT.read_text(encoding="utf-8"):
    problems.append("a 4,500 XP fallback survived")

if problems:
    for p in problems:
        print("  PROBLEM:", p)
    print("Restoring ...")
    for f in FILES:
        bak = f.with_suffix(f.suffix + ".before-progresstruth")
        if bak.exists():
            shutil.copy2(bak, f)
    sys.exit("ABORTED - restored. Nothing changed. Send me this output.")

print("")
print("XP            : real totalXpEarned, no 350 floor")
print("words         : real count for the days you finished")
print("turns / rules : real counts (countTurnsInDays / countGrammarRulesInDays)")
print("accuracy      : real correct/total from exerciseAttempts")
print("progress bars : computed, not typed in at 78/85/70/80/90/92%")
print("certificate   : real XP, real words, real day count, no fake 4,500")
print("vocab studio  : no || 8 / || 18 / || 20 / 24 / 75 floors")
print("")
print("OK - all checks passed.")
