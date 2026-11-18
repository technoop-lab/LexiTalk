#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curiosity English Academy - honesty pass (sourcecode)
-----------------------------------------------------
Two problems, both integrity problems:

 1. The app fabricates progress for a brand-new user:
      5-day streak, 320 XP, 450 gems, 2 streak freezes, 85 words mastered,
      two stories already unlocked, league 'Sapphire' rank 2
    and hasCompletedOnboarding = true, so the onboarding flow never runs.

 2. 'GO PRO' is a fake purchase. Tapping it calls
      onUpdateUser({ ...user, isPro: true })
    which grants PRO for free with no payment. handleActivateSubscription
    does the same thing. A store review that taps this sees a free upgrade.

This pass makes every number start at zero, enables onboarding, and removes
the Pro buttons and the free-activation handler from the UI.

It does NOT delete subscription code you may want later; the components stay
on disk, they are simply no longer reachable from the app.

Every edit is asserted before it is written. If any file does not match
what this script expects, it stops and changes nothing.

Run from the project root:
    cd "/mnt/d/lexi talk app" && python3 fix-honesty.py
"""

import re
import shutil
import sys
from pathlib import Path

ROOT = Path(".")

AUTH = ROOT / "src/services/AuthService.ts"
PATHC = ROOT / "src/components/CuriosityPath.tsx"
SHELL = ROOT / "src/components/learner/LearnerAppShell.tsx"
SHOP = ROOT / "src/components/ShopAndProfile.tsx"
APP = ROOT / "src/App.tsx"

FILES = [AUTH, PATHC, SHELL, SHOP, APP]
for f in FILES:
    if not f.exists():
        sys.exit("ERROR: %s not found. Run this from /mnt/d/lexi talk app" % f)

# Back up every file before touching anything.
for f in FILES:
    bak = f.with_suffix(f.suffix + ".before-honesty-fix")
    if not bak.exists():
        shutil.copy2(f, bak)


def must(text, old, new, label):
    """Replace old with new. old must appear exactly once."""
    n = text.count(old)
    if n != 1:
        raise SystemExit(
            "ABORTED - nothing written.\n"
            "In %s, expected to find exactly one of:\n---\n%s\n---\n"
            "but found %d. Your file differs from the version I audited.\n"
            "Send me this message and I will adjust the patch." % (label, old, n)
        )
    return text.replace(old, new, 1)


def must_gone(text, old, label):
    if old in text:
        raise SystemExit("ABORTED - %s still contains the old text after patching." % label)
    return text


# ---------------------------------------------------------------- AuthService
t = AUTH.read_text(encoding="utf-8")

# defaultUser: every invented number goes to zero
t = must(t, "    name: 'Anoop Sharma',", "    name: 'Learner',", AUTH.name)
t = must(t, "    streakDays: 5,", "    streakDays: 0,", AUTH.name)
t = must(t, "    totalXp: 320,", "    totalXp: 0,", AUTH.name)
t = must(t, "    gems: 450,", "    gems: 0,", AUTH.name)
t = must(t, "    streakFreezeCount: 2,", "    streakFreezeCount: 0,", AUTH.name)
t = must(t, "    wordsMasteredCount: 85,", "    wordsMasteredCount: 0,", AUTH.name)
t = must(t, "    unlockedStoryIds: ['story_1', 'story_2'],", "    unlockedStoryIds: [],", AUTH.name)
t = must(t, "    leagueName: 'Sapphire',", "    leagueName: 'Bronze',", AUTH.name)
t = must(t, "    leagueRank: 2,", "    leagueRank: 0,", AUTH.name)

# onboarding must actually run once
t = must(
    t,
    "    isGuest: false,\n    hasCompletedOnboarding: true,",
    "    isGuest: false,\n    hasCompletedOnboarding: false,",
    AUTH.name,
)

# register(): a new account also started with a fake 1-day streak and 100 gems
t = must(t, "      streakDays: 1,\n      totalXp: 0,\n      gems: 100,",
         "      streakDays: 0,\n      totalXp: 0,\n      gems: 0,", AUTH.name)

AUTH.write_text(t, encoding="utf-8")

# ------------------------------------------------------------- CuriosityPath
t = PATHC.read_text(encoding="utf-8")
before = len(t)

# remove the whole block:  {!user.isPro ? ( GO PRO button ) : ( PRO MEMBER badge )}
start = t.find("{!user.isPro ? (")
if start == -1:
    raise SystemExit("ABORTED - GO PRO block not found in %s" % PATHC.name)
end_marker = t.find("PRO MEMBER", start)
if end_marker == -1:
    raise SystemExit("ABORTED - PRO MEMBER badge not found in %s" % PATHC.name)
close = t.find(")}", end_marker)
if close == -1:
    raise SystemExit("ABORTED - end of GO PRO block not found in %s" % PATHC.name)
close += 2
line_start = t.rfind("\n", 0, start) + 1
# swallow the blank line that separated the block from the next button
if t[close:close + 2] == "\n\n":
    close += 1
t = t[:line_start] + t[close + 1:]

t = must(t, "  onOpenProModal: () => void;\n", "", PATHC.name)
t = must(t, "  onOpenProModal,\n", "", PATHC.name)
t = must(t, "  Crown,\n", "", PATHC.name)
t = must(t, "{/* Account & Pro Badge */}", "{/* Account */}", PATHC.name)

must_gone(t, "GO PRO", PATHC.name)
must_gone(t, "PRO MEMBER", PATHC.name)
PATHC.write_text(t, encoding="utf-8")
print("  %-44s -%d bytes" % (PATHC.name, before - len(t)))

# ------------------------------------------------------------ LearnerAppShell
t = SHELL.read_text(encoding="utf-8")
t = must(t, "                  onOpenProModal={() => onUpdateUser({ ...user, isPro: true })}\n", "", SHELL.name)
must_gone(t, "isPro: true", SHELL.name)
SHELL.write_text(t, encoding="utf-8")

# ------------------------------------------------------------- ShopAndProfile
t = SHOP.read_text(encoding="utf-8")
t = must(t, "  onOpenProModal: () => void;\n", "", SHOP.name)
t = must(t, "  onOpenProModal,\n", "", SHOP.name)
SHOP.write_text(t, encoding="utf-8")

# ---------------------------------------------------------------------- App
t = APP.read_text(encoding="utf-8")

# remove the free-activation handler
handler = """  // Handler: Activate Pro Subscription
  const handleActivateSubscription = (plan: 'pro_monthly' | 'pro_annual') => {
    updateCurrentUser({
      isPro: true,
      subscriptionTier: plan,
      hearts: 9999, // unlimited
      maxHearts: 9999,
    });
    setShowProModal(false);
  };

"""
t = must(t, handler, "", APP.name)

# remove the Pro modal
modal = """        {/* Modal 3: Pro Subscription Monetization */}
        {showProModal && (
          <SubscriptionModal
            user={currentUser}
            onActivateSubscription={handleActivateSubscription}
            onClose={() => setShowProModal(false)}
          />
        )}

"""
t = must(t, modal, "", APP.name)

# remove the prop it is no longer able to supply
t = must(t, "              onOpenProModal={() => setShowProModal(true)}\n", "", APP.name)

# drop the now-unused import and state
t = must(t, "import { SubscriptionModal } from './components/SubscriptionModal';\n", "", APP.name)
t = must(t, "  const [showProModal, setShowProModal] = useState(false);\n", "", APP.name)

must_gone(t, "showProModal", APP.name)
must_gone(t, "handleActivateSubscription", APP.name)
APP.write_text(t, encoding="utf-8")


# ------------------------------------------------------------------- verify
print("")
print("verifying ...")
problems = []

a = AUTH.read_text(encoding="utf-8")
for bad in ("streakDays: 5", "totalXp: 320", "gems: 450", "streakFreezeCount: 2",
            "wordsMasteredCount: 85", "'Anoop Sharma'", "leagueName: 'Sapphire'"):
    if bad in a:
        problems.append("AuthService still has %s" % bad)
if "hasCompletedOnboarding: false," not in a:
    problems.append("AuthService does not disable onboarding for a new user")

for f, bads in ((PATHC, ["GO PRO", "Crown", "onOpenProModal"]),
                (SHELL, ["onOpenProModal"]),
                (SHOP, ["onOpenProModal"]),
                (APP, ["SubscriptionModal", "showProModal", "handleActivateSubscription"])):
    txt = f.read_text(encoding="utf-8")
    for bad in bads:
        if bad in txt:
            problems.append("%s still mentions %s" % (f.name, bad))

if problems:
    for p in problems:
        print("  PROBLEM:", p)
    print("")
    print("Restoring the originals from backup ...")
    for f in FILES:
        bak = f.with_suffix(f.suffix + ".before-honesty-fix")
        if bak.exists():
            shutil.copy2(bak, f)
    sys.exit("ABORTED - restored. Nothing changed. Send me this output.")

print("")
print("fake streak / XP / gems / words / stories / league : removed")
print("onboarding now runs for a new user                : yes")
print("free PRO activation path                          : removed")
print("GO PRO button                                     : removed")
print("files changed                                     : AuthService.ts, CuriosityPath.tsx,")
print("                                                    LearnerAppShell.tsx, ShopAndProfile.tsx, App.tsx")
print("")
print("OK - all checks passed.")
print("Now rebuild and look at it:")
print("  npx vite build && npx cap sync android")
