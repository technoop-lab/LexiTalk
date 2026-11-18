#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curiosity English Academy - home screen honest stats
----------------------------------------------------
A freshly registered learner with 0 XP sees, on the home screen:

    Stage 1 Mastery            10%      <- you have done nothing
    Words                16            <- you have learnt nothing
    Rank: Scholar                      <- you have 0 XP
    Speaking             15 min        <- you have spoken nothing

None of these are progress. They are placeholders that were written to look
busy:

  * the mastery bar was derived from the day number, not from work done:
        Math.round(((nextHindiDayNum % 10 || 10) / 10) * 100)
    day 1  -> 10%, day 5 -> 50%, regardless of what the learner completed.

  * words was  Math.max(completedDays.length * 8, 16)  so a new user got 16.

  * speaking was  Math.max(15, completedLessonsCount * 6)  so a new user got 15.

  * the rank label was the fixed string 'Scholar'.

After this patch every one of those numbers is computed from what the learner
actually completed, and shows 0 on a new account.

Run from the project root:
    cd "/mnt/d/lexi talk app" && python3 fix-home-stats.py
"""

import shutil
import sys
from pathlib import Path

F = Path("src/components/learner/LearnerHomeDashboard.tsx")
if not F.exists():
    sys.exit("ERROR: %s not found. Run this from /mnt/d/lexi talk app" % F)

bak = F.with_suffix(F.suffix + ".before-home-stats")
if not bak.exists():
    shutil.copy2(F, bak)

t = F.read_text(encoding="utf-8")


def must(old, new, label):
    global t
    n = t.count(old)
    if n != 1:
        raise SystemExit(
            "ABORTED - nothing written.\nExpected exactly one of %s, found %d:\n---\n%s\n---\n"
            "Send me this and I will adjust the patch." % (label, n, old)
        )
    t = t.replace(old, new, 1)


# 1. words counted from the days the learner actually finished
must(
    "  const wordsLearnedCount = user.wordsMasteredCount || "
    "Math.max(hindiProgress.completedDays.length * 8, 16);",
    "  const wordsLearnedCount = hindiProgress.completedDays.reduce(\n"
    "    (total: number, dayNum: number) => {\n"
    "      const finishedDay = HindiCourseService.getDayByNumber(dayNum);\n"
    "      return total + (finishedDay?.learn?.vocabulary?.length || 0);\n"
    "    },\n"
    "    0\n"
    "  );",
    "wordsLearnedCount",
)

# 2. no free 15 minutes of speaking
must(
    "  const estimatedSpeakingMinutes = Math.max(15, completedLessonsCount * 6);",
    "  const estimatedSpeakingMinutes = completedLessonsCount * 6;",
    "estimatedSpeakingMinutes",
)

# 3. real stage mastery, computed from completed days inside the stage
must(
    "  const currentStage = stageTitles[currentStageNum] || stageTitles[1];",
    "  const currentStage = stageTitles[currentStageNum] || stageTitles[1];\n"
    "  const stageStartDay = (currentStageNum - 1) * 10 + 1;\n"
    "  const stageCompletedDays = hindiProgress.completedDays.filter(\n"
    "    (dayNum: number) => dayNum >= stageStartDay && dayNum < stageStartDay + 10\n"
    "  ).length;\n"
    "  const stageMasteryPercent = Math.round((stageCompletedDays / 10) * 100);",
    "stage mastery calculation",
)

must(
    "              {Math.min(100, Math.round(((nextHindiDayNum % 10 || 10) / 10) * 100))}%",
    "              {stageMasteryPercent}%",
    "stage mastery percentage text",
)

must(
    "              style={{ width: `${Math.max(((nextHindiDayNum % 10 || 10) / 10) * 100, 10)}%` }}",
    "              style={{ width: `${stageMasteryPercent}%` }}",
    "stage mastery bar width",
)

# 4. rank follows XP instead of being a fixed label
must(
    "              Rank: Scholar",
    "              Rank: {(user.totalXp || 0) >= 2000\n"
    "                ? 'Master'\n"
    "                : (user.totalXp || 0) >= 1000\n"
    "                ? 'Achiever'\n"
    "                : (user.totalXp || 0) >= 300\n"
    "                ? 'Scholar'\n"
    "                : 'Beginner'}",
    "rank label",
)

# 5. the sub-label under the word count was also wrong
must("              +8 per lesson", "              from completed lessons", "words sub-label")


F.write_text(t, encoding="utf-8")

# ------------------------------------------------------------------- verify
after = F.read_text(encoding="utf-8")
problems = []
for stale in ("Math.max(hindiProgress.completedDays.length * 8, 16)",
              "Math.max(15, completedLessonsCount * 6)",
              "nextHindiDayNum % 10",
              "Rank: Scholar",
              "+8 per lesson"):
    if stale in after:
        problems.append("still present: " + stale)
if "stageMasteryPercent" not in after:
    problems.append("stageMasteryPercent was not introduced")

if problems:
    for p in problems:
        print("  PROBLEM:", p)
    shutil.copy2(bak, F)
    sys.exit("ABORTED - restored. Nothing changed. Send me this output.")

print("Stage N Mastery  : computed from completed days in that stage (was day-of-stage position)")
print("Words            : sum of vocabulary of completed days (was a floor of 16)")
print("Speaking minutes : completed days x 6 (was a floor of 15)")
print("Rank             : follows XP: Beginner < 300 < Scholar < 1000 < Achiever < 2000 < Master")
print("")
print("On a new account all four now read 0 / Beginner.")
print("OK - all checks passed.")
