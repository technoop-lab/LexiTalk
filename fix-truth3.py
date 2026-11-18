#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curiosity English Academy - truth batch 3
------------------------------------------
Same defect as before, a different set of screens: a value placed there to make
the screen look finished rather than read from what the learner actually did.

 1. "guarantees noticeable speaking fluency within 60 days" - nobody can promise
    that. Removed.
 2. Profile card said "Target Language: English [UK flag]" for an Indian English
    learner, and "CEFR A1 Beginner" no matter what level was chosen. Now shows the
    real teaching accent and the learner's real CEFR level.
 3. Profile fell back to "ACADEMY PRO" and "PRO LEARNER" for a free account, and
    invented an email address (learner@curiosity.edu). A free learner now sees
    FREE / LEARNER / No email added.
 4. Onboarding silently registered everyone with
    learner@curiosityacademy.com when the email box was left blank. It now stores
    no email instead of a made-up one.
 5. B1 and B2 were offered as starting levels, and the placement test could place
    a learner at B1/B2 - but only A1 and A2 content is written. Both are now
    limited to the levels that actually have lessons behind them.

Run from the project root:
    cd "/mnt/d/lexi talk app" && python3 fix-truth3.py
"""

import shutil
import sys
from pathlib import Path

FILES = [
    Path("src/components/onboarding/DailyGoalStep.tsx"),
    Path("src/components/onboarding/JourneySummaryStep.tsx"),
    Path("src/components/OnboardingFlow.tsx"),
    Path("src/components/PlacementAssessmentModal.tsx"),
    Path("src/components/learner/LearnerProfileView.tsx"),
    Path("src/services/AuthService.ts"),
]

for f in FILES:
    if not f.exists():
        sys.exit("ERROR: %s not found. Run this from /mnt/d/lexi talk app" % f)

for f in FILES:
    bak = f.with_suffix(f.suffix + ".before-truth3")
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
    print("  %-54s fixed" % path)


# 1 + 2 ----------------------------------------------------------------------
edit("src/components/onboarding/DailyGoalStep.tsx", [
    (
        "Just 20 minutes a day builds lasting English habit and guarantees noticeable "
        "speaking fluency within 60 days.",
        "Pick a pace you can keep. Short daily sessions beat long irregular ones, "
        "and you can change this any time.",
        "no fluency guarantee",
    ),
])

edit("src/components/onboarding/JourneySummaryStep.tsx", [
    (
        "CEFR A1 \u2192 B1 Pathway",
        "CEFR A1 \u2192 A2 Pathway",
        "pathway matches the authored days",
    ),
])

# 3 + 4 + 5 ------------------------------------------------------------------
edit("src/components/OnboardingFlow.tsx", [
    (
        "        emailInput || 'learner@curiosityacademy.com',",
        "        (emailInput || '').trim(),",
        "no fabricated email on sign-up",
    ),
    (
        """placeholder="learner@curiosityacademy.com\"""",
        """placeholder="your.name@example.com\"""",
        "email placeholder is an example, not a value",
    ),
    (
        "                  { cefr: 'B1' as CEFRLevel, title: 'B1 \u2022 Intermediate', desc: 'Routine conversations' },\n"
        "                  { cefr: 'B2' as CEFRLevel, title: 'B2 \u2022 Upper Interm.', desc: 'Debate & office work' },\n",
        "",
        "B1/B2 are not authored, so not offered",
    ),
])

edit("src/components/PlacementAssessmentModal.tsx", [
    (
        "    if (score <= 2) return 'A1';\n"
        "    if (score === 3) return 'A2';\n"
        "    if (score === 4) return 'B1';\n"
        "    return 'B2';",
        "    // Only A1 and A2 have authored lessons, so the test never places\n"
        "    // anyone above the highest level that actually has content.\n"
        "    if (score <= 2) return 'A1';\n"
        "    return 'A2';",
        "placement cannot exceed authored content",
    ),
])

edit("src/components/learner/LearnerProfileView.tsx", [
    (
        "  const isAdmin = EntitlementService.isAdmin(user);",
        "  const isAdmin = EntitlementService.isAdmin(user);\n"
        "  // The flag and the label follow the teaching accent, not the target language.\n"
        "  const activeAccent = user.preferences?.accentPreference;\n"
        "  const accentName = activeAccent === 'en-US' ? 'American' : activeAccent === 'en-GB' ? 'British' : 'Indian';\n"
        "  const accentFlag = activeAccent === 'en-US' ? '\U0001F1FA\U0001F1F8' : activeAccent === 'en-GB' ? '\U0001F1EC\U0001F1E7' : '\U0001F1EE\U0001F1F3';",
        "accent variables",
    ),
    (
        "{user.email || 'learner@curiosity.edu'}",
        "{user.email || 'No email added'}",
        "no invented email",
    ),
    (
        "{user.role || (isAdmin ? 'ADMIN' : 'PRO LEARNER')}",
        "{user.role || (isAdmin ? 'ADMIN' : 'LEARNER')}",
        "no invented role",
    ),
    (
        "Plan: <strong className=\"text-amber-300 uppercase font-black\">{user.subscriptionTier || 'ACADEMY PRO'}</strong>",
        "Plan: <strong className=\"text-amber-300 uppercase font-black\">{user.entitlement || 'FREE'}</strong>",
        "no invented Pro plan",
    ),
    (
        "                <span className=\"text-[10px] text-slate-500 uppercase block font-bold\">Target Language</span>\n"
        "                <span className=\"text-sm font-black text-slate-900 dark:text-white block mt-0.5\">\n"
        "                  {targetReg?.name || 'English'} \U0001F1EC\U0001F1E7\n"
        "                </span>\n"
        "                <span className=\"text-[10px] text-indigo-600 dark:text-indigo-400 font-bold\">CEFR A1 Beginner</span>",
        "                <span className=\"text-[10px] text-slate-500 uppercase block font-bold\">Teaching Accent</span>\n"
        "                <span className=\"text-sm font-black text-slate-900 dark:text-white block mt-0.5\">\n"
        "                  {accentName} English {accentFlag}\n"
        "                </span>\n"
        "                <span className=\"text-[10px] text-indigo-600 dark:text-indigo-400 font-bold\">CEFR {user.currentCEFR || 'A1'}</span>",
        "profile shows the real accent and level",
    ),
])

edit("src/services/AuthService.ts", [
    (
        "    email: 'learner@curiosityacademy.com',",
        "    email: '',",
        "default profile has no invented email",
    ),
])


# --------------------------------------------------------------------- verify
problems = []

dg = Path("src/components/onboarding/DailyGoalStep.tsx").read_text(encoding="utf-8")
if "guarantees" in dg:
    problems.append("DailyGoalStep still promises fluency")

of = Path("src/components/OnboardingFlow.tsx").read_text(encoding="utf-8")
if "learner@curiosityacademy.com" in of:
    problems.append("OnboardingFlow still invents an email")
if "'B1' as CEFRLevel" in of or "'B2' as CEFRLevel" in of:
    problems.append("OnboardingFlow still offers B1/B2")

pv = Path("src/components/learner/LearnerProfileView.tsx").read_text(encoding="utf-8")
for bad in ("ACADEMY PRO", "PRO LEARNER", "learner@curiosity.edu", "CEFR A1 Beginner",
            "{targetReg?.name || 'English'}"):
    if bad in pv:
        problems.append("LearnerProfileView still contains: %s" % bad)
if "accentFlag" not in pv:
    problems.append("LearnerProfileView has no accent flag")

au = Path("src/services/AuthService.ts").read_text(encoding="utf-8")
if "learner@curiosityacademy.com" in au:
    problems.append("AuthService still has a fabricated default email")

if problems:
    for p in problems:
        print("  PROBLEM:", p)
    print("Restoring ...")
    for f in FILES:
        bak = f.with_suffix(f.suffix + ".before-truth3")
        if bak.exists():
            shutil.copy2(bak, f)
    sys.exit("ABORTED - restored. Nothing changed. Send me this output.")

print("")
print("guarantee claim   : removed")
print("profile card      : shows real accent, real level, real plan, real email")
print("onboarding email  : no made-up address if the box is left blank")
print("starting levels   : A1 / A2 only - the levels that have lessons")
print("")
print("OK - all checks passed.")
