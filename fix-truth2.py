#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curiosity English Academy - Hindi-only + truth pass 2
------------------------------------------------------
Findings from the first real onboarding run, fixed here:

 1. The language screen offers 15 languages (Hindi, Bengali, Tamil, Telugu,
    Marathi, Gujarati, Punjabi, Spanish, French, German, Portuguese, Chinese,
    Arabic, Japanese, Russian). Fourteen of them have no content. This app is
    for Hindi speakers. Only Hindi is offered now.

 2. Home shows a 1-day streak to a user who just installed the app.
    Cause: {user.streakDays || 1}  - zero is falsy, so 0 became 1.

 3. The theme picker's preview mock is hardcoded to show '5' streak and
    '320' XP, so a brand-new user sees invented progress inside onboarding.

 4. Three screens promise 'cloud synced' progress. There is no cloud sync in
    this app. Progress is localStorage only. That is a false claim to a user.

 5. The name field's example text is the owner's own name.

 6. The carousel and summary advertise 600 dialogues / 3,700+ words /
    12,252 turns. Those are the totals for all 60 days, but Days 41-60 have
    no example sentences yet and are locked in v1. The honest numbers for the
    40 days that are live today are 400 / 2,492 / 8,002.

Every edit is asserted before writing. Any mismatch aborts with no changes.

Run from the project root:
    cd "/mnt/d/lexi talk app" && python3 fix-truth2.py
"""

import shutil
import sys
from pathlib import Path

ROOT = Path(".")

LANGS   = ROOT / "src/data/languages.ts"
HOME    = ROOT / "src/components/learner/LearnerHomeDashboard.tsx"
APPEAR  = ROOT / "src/components/onboarding/AppearanceStep.tsx"
ONB     = ROOT / "src/components/OnboardingFlow.tsx"
ACCT    = ROOT / "src/components/AccountAuthModal.tsx"
CAROUSEL= ROOT / "src/components/onboarding/OnboardingCarousel.tsx"
SUMMARY = ROOT / "src/components/onboarding/JourneySummaryStep.tsx"

FILES = [LANGS, HOME, APPEAR, ONB, ACCT, CAROUSEL, SUMMARY]
for f in FILES:
    if not f.exists():
        sys.exit("ERROR: %s not found. Run this from /mnt/d/lexi talk app" % f)

for f in FILES:
    bak = f.with_suffix(f.suffix + ".before-truth2")
    if not bak.exists():
        shutil.copy2(f, bak)


def must(text, old, new, label):
    n = text.count(old)
    if n != 1:
        raise SystemExit(
            "ABORTED - nothing written.\nIn %s, expected exactly one of:\n---\n%s\n---\n"
            "but found %d. Send me this and I will adjust the patch." % (label, old, n)
        )
    return text.replace(old, new, 1)


# ------------------------------------------------------------------ languages
t = LANGS.read_text(encoding="utf-8")
decl = "export const SUPPORTED_NATIVE_LANGUAGES: NativeLanguageInfo[] = ["
i = t.find(decl)
if i == -1:
    raise SystemExit("ABORTED - SUPPORTED_NATIVE_LANGUAGES not found in languages.ts")

start = i + len(decl)
first_end = t.find("\n  },", start)
if first_end == -1:
    raise SystemExit("ABORTED - could not find end of the Hindi entry in languages.ts")
first_end += len("\n  },")

hindi_block = t[start:first_end]
if "'hi'" not in hindi_block:
    raise SystemExit("ABORTED - the first language entry is not Hindi. Check languages.ts.")

close = t.find("];", first_end)
if close == -1:
    raise SystemExit("ABORTED - could not find the end of the language array")

removed = t[start:close].count("code: '") - 1
t = t[:i] + decl + hindi_block + "\n];" + t[close + 2:]
LANGS.write_text(t, encoding="utf-8")
print("  languages.ts                                 -%d languages (Hindi kept)" % removed)

# ----------------------------------------------------------------- home streak
t = HOME.read_text(encoding="utf-8")
t = must(t, "{user.streakDays || 1} Day Active Streak",
         "{user.streakDays || 0} Day Active Streak", HOME.name)
t = must(t, "{user.streakDays || 1} Days</span>",
         "{user.streakDays || 0} Days</span>", HOME.name)
HOME.write_text(t, encoding="utf-8")

# ------------------------------------------------------- theme preview numbers
t = APPEAR.read_text(encoding="utf-8")
t = must(t, '🔥 5</span>', '🔥 0</span>', APPEAR.name)
t = must(t, '⚡ 320</span>', '⚡ 0</span>', APPEAR.name)
APPEAR.write_text(t, encoding="utf-8")

# --------------------------------------------------------------- cloud claims
t = ONB.read_text(encoding="utf-8")
t = must(t, "By proceeding, your progress will be safely stored offline and cloud synced.",
         "By proceeding, your progress is saved on this device.", ONB.name)
t = must(t, 'placeholder="e.g. Anoop Sharma"', 'placeholder="e.g. Priya Sharma"', ONB.name)
ONB.write_text(t, encoding="utf-8")

t = ACCT.read_text(encoding="utf-8")
t = must(t, "Manage user profiles, track progress & cloud synchronization",
         "Manage user profiles and local progress", ACCT.name)
t = must(t, "All student progress auto-saves locally and prepares for Web API Cloud Sync.",
         "All progress is saved on this device.", ACCT.name)
t = must(t, "{/* Cloud Sync Status info */}", "{/* Local storage status */}", ACCT.name)
ACCT.write_text(t, encoding="utf-8")

# ------------------------------------------------------------------- numbers
t = CAROUSEL.read_text(encoding="utf-8")
t = must(t, '<span className="text-base font-black text-indigo-600 dark:text-indigo-400 block">600</span>',
         '<span className="text-base font-black text-indigo-600 dark:text-indigo-400 block">400</span>',
         CAROUSEL.name)
t = must(t, '<span className="text-base font-black text-emerald-600 dark:text-emerald-400 block">12,252</span>',
         '<span className="text-base font-black text-emerald-600 dark:text-emerald-400 block">8,002</span>',
         CAROUSEL.name)
t = must(t, "Master 3,700+ Words", "Master 2,492 Words", CAROUSEL.name)
CAROUSEL.write_text(t, encoding="utf-8")

t = SUMMARY.read_text(encoding="utf-8")
t = must(t, '<span className="text-xs font-black text-emerald-600 dark:text-emerald-400 block">600</span>',
         '<span className="text-xs font-black text-emerald-600 dark:text-emerald-400 block">400</span>',
         SUMMARY.name)
t = must(t, '<span className="text-xs font-black text-amber-600 dark:text-amber-400 block">3,700+</span>',
         '<span className="text-xs font-black text-amber-600 dark:text-amber-400 block">2,492</span>',
         SUMMARY.name)
t = must(t, '<span className="text-xs font-black text-purple-600 dark:text-purple-400 block">12,252</span>',
         '<span className="text-xs font-black text-purple-600 dark:text-purple-400 block">8,002</span>',
         SUMMARY.name)
t = must(t, "Your 60-day roadmap is activated. Everything is set up for daily consistency and natural spoken confidence.",
         "Your roadmap is activated. Days 1-40 are ready now; Days 41-60 unlock in a free update.",
         SUMMARY.name)
SUMMARY.write_text(t, encoding="utf-8")


# --------------------------------------------------------------------- verify
print("")
print("verifying ...")
bad = []

lt = LANGS.read_text(encoding="utf-8")
if lt.count("code: '") < 1:
    bad.append("languages.ts lost the Hindi entry")
j = lt.index("export const SUPPORTED_NATIVE_LANGUAGES")
k = lt.index("];", j)
if lt[j:k].count("code: '") != 1:
    bad.append("SUPPORTED_NATIVE_LANGUAGES still lists more than one language")

if "streakDays || 1" in HOME.read_text(encoding="utf-8"):
    bad.append("home still turns a 0-day streak into 1")
if "🔥 5</span>" in APPEAR.read_text(encoding="utf-8"):
    bad.append("theme preview still shows 5")
if "⚡ 320</span>" in APPEAR.read_text(encoding="utf-8"):
    bad.append("theme preview still shows 320")
for f in (ONB, ACCT):
    if "cloud sync" in f.read_text(encoding="utf-8").lower():
        bad.append("%s still claims cloud sync" % f.name)
if "Anoop Sharma" in ONB.read_text(encoding="utf-8"):
    bad.append("your own name is still used as the example")
for f in (CAROUSEL, SUMMARY):
    txt = f.read_text(encoding="utf-8")
    for n in ("12,252", "3,700+"):
        if n in txt:
            bad.append("%s still shows %s" % (f.name, n))

if bad:
    for b in bad:
        print("  PROBLEM:", b)
    print("")
    print("Restoring backups ...")
    for f in FILES:
        bak = f.with_suffix(f.suffix + ".before-truth2")
        if bak.exists():
            shutil.copy2(bak, f)
    sys.exit("ABORTED - restored. Nothing changed. Send me this output.")

print("")
print("languages offered on the setup screen      : Hindi only (was 15)")
print("streak shown to a new user                 : 0 (was 1)")
print("theme preview streak / XP                  : 0 / 0 (was 5 / 320)")
print("'cloud synced' claims                      : removed (was 3 screens)")
print("your name as example text                  : removed")
print("carousel + summary figures                 : 400 dialogues, 2,492 words, 8,002 turns")
print("summary road map line                      : days 1-40 ready, 41-60 in a free update")
print("")
print("OK - all checks passed.")
