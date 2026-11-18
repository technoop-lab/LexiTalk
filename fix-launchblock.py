#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curiosity English Academy - launch blockers (audit before closed testing)
------------------------------------------------------------------------
Three things that would have been reported by your 12 testers on day one, and
one of them is your USP.

1. A2 UNITS COULD NOT BE OPENED BY ANYONE WHO WAS NOT "PRO"
   Lessons 106-270 and A2 units 8-18 were locked behind user.isPro, and there is
   no purchase flow in the app. A free learner could never open them - the app
   offered content it had no way to unlock. Since v1 is a free app, every
   authored lesson is now open. The A1 -> A2 progression gate stays, because that
   one is teaching, not selling.

2. THE ACCENT COULD NOT BE CHANGED AFTER ONBOARDING
   You asked for this explicitly: choose Indian at the start, switch to American
   or British later. There was no way to do it - onboarding was the only place
   that wrote accentPreference. Profile now has a three-way accent picker. It
   saves the choice, and the teaching voice changes immediately, not on restart.

3. THE "CHANGE" BUTTON IN PROFILE OPENED A TARGET-LANGUAGE PICKER
   It let a learner switch the language they are learning to Spanish, Japanese,
   etc. - languages with no authored curriculum - and marked the unauthored ones
   "Architecture Ready" in the UI. In a Hindi-speaker, English-only app that is
   the same defect as the "Start New Target Language Journey" button. The entry
   point is gone; the picker is replaced by the accent switcher.

Run from the project root:
    cd "/mnt/d/lexi talk app" && python3 fix-launchblock.py
"""

import shutil
import sys
from pathlib import Path

ENT = Path("src/services/EntitlementService.ts")
PROF = Path("src/components/learner/LearnerProfileView.tsx")
FILES = [ENT, PROF]

for f in FILES:
    if not f.exists():
        sys.exit("ERROR: %s not found. Run this from /mnt/d/lexi talk app" % f)

for f in FILES:
    bak = f.with_suffix(f.suffix + ".before-launchblock")
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


# ------------------------------------------------- 1. stop selling what is free
t = ENT.read_text(encoding="utf-8")

t = must(
    t,
    "      // 3. A2 Preview vs Premium Check: Unit 7 (Lessons 91–105) is free preview; Units 8–18 require Pro/Premium\n"
    "      const isA2Preview = (lesson as any).unitId === 'unit_a2_7' || lesson.id.startsWith('lesson_a2_7_');\n"
    "      if (!isA2Preview && !user.isPro) {\n"
    "        return {\n"
    "          allowed: false,\n"
    "          reason: 'PREMIUM_LOCKED',\n"
    "          message: 'Upgrade to Curiosity Pro to unlock full A2 curriculum (Units 8–18: Lessons 106–270).',\n"
    "        };\n"
    "      }\n",
    "      // v1 is a free app with no purchase flow, so every authored A2 lesson is open.\n",
    "canAccessLesson A2 premium gate",
)

t = must(
    t,
    "    // 4. Higher levels (B1+) require Pro\n"
    "    if (cefr !== 'A1' && cefr !== 'A2') {\n"
    "      if (!user.isPro) {\n"
    "        return {\n"
    "          allowed: false,\n"
    "          reason: 'PREMIUM_LOCKED',\n"
    "          message: 'Upgrade to Pro to unlock advanced CEFR levels.',\n"
    "        };\n"
    "      }\n"
    "    }\n"
    "\n",
    "    // 4. Higher levels: no authored curriculum yet, so nothing to sell or gate.\n"
    "\n",
    "canAccessLesson higher-level gate",
)

t = must(
    t,
    "\n      // Unit 7 is free preview; Units 8-18 require Pro/Premium\n"
    "      if (unit.id !== 'unit_a2_7' && !user.isPro) {\n"
    "        return {\n"
    "          allowed: false,\n"
    "          reason: 'PREMIUM_LOCKED',\n"
    "          message: 'Curiosity Pro required to unlock A2 Units 8–18.',\n"
    "        };\n"
    "      }\n",
    "\n      // Every authored A2 unit is open in v1 (free app, no purchase flow).\n",
    "canAccessUnit A2 premium gate",
)

t = must(
    t,
    "\n    if (unit.cefr !== 'A1' && unit.cefr !== 'A2' && !user.isPro) {\n"
    "      return {\n"
    "        allowed: false,\n"
    "        reason: 'PREMIUM_LOCKED',\n"
    "        message: 'Pro subscription required for this CEFR unit.',\n"
    "      };\n"
    "    }\n",
    "",
    "canAccessUnit higher-level gate",
)

ENT.write_text(t, encoding="utf-8")
print("  %-54s fixed" % str(ENT))


# ------------------------------------------- 2 + 3. accent switcher in profile
t = PROF.read_text(encoding="utf-8")

t = must(
    t,
    "import { playSoundEffectEffect } from '../../utils/audioUtils';",
    "import { playSoundEffectEffect, setActiveEnglishAccent } from '../../utils/audioUtils';\n"
    "import { AuthService } from '../../services/AuthService';",
    "profile imports",
)

t = must(
    t,
    "  const accentFlag = activeAccent === 'en-US' ? '\U0001F1FA\U0001F1F8' : activeAccent === 'en-GB' ? '\U0001F1EC\U0001F1E7' : '\U0001F1EE\U0001F1F3';",
    "  const accentFlag = activeAccent === 'en-US' ? '\U0001F1FA\U0001F1F8' : activeAccent === 'en-GB' ? '\U0001F1EC\U0001F1E7' : '\U0001F1EE\U0001F1F3';\n"
    "  const [accentChoice, setAccentChoice] = useState<string>(activeAccent || 'en-IN');\n"
    "\n"
    "  // Switching accent takes effect in the same breath: the teaching voice changes now,\n"
    "  // and the choice is saved so every later lesson uses it too.\n"
    "  const handleAccentSelect = (code: string) => {\n"
    "    setAccentChoice(code);\n"
    "    setActiveEnglishAccent(code);\n"
    "    AuthService.updateUserProfile({\n"
    "      preferences: { ...(user.preferences as any), accentPreference: code as any },\n"
    "    });\n"
    "  };",
    "accent state and handler",
)

t = must(
    t,
    "                Current Language Matrix\n"
    "              </span>\n"
    "              <button\n"
    "                onClick={() => {\n"
    "                  playSoundEffectEffect('tap');\n"
    "                  onOpenLanguageSetup();\n"
    "                }}\n"
    "                className=\"text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-bold\"\n"
    "              >\n"
    "                Change\n"
    "              </button>",
    "                Teaching Voice\n"
    "              </span>\n"
    "              <span className=\"text-[10px] text-slate-500 dark:text-slate-400 font-bold\">\n"
    "                Applies immediately\n"
    "              </span>",
    "remove target-language entry point",
)

old_cards = (
    "            <div className=\"grid grid-cols-2 gap-3 text-xs\">\n"
    "              <div className=\"p-3 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800\">\n"
    "                <span className=\"text-[10px] text-slate-500 uppercase block font-bold\">Teaching Accent</span>\n"
    "                <span className=\"text-sm font-black text-slate-900 dark:text-white block mt-0.5\">\n"
    "                  {accentName} English {accentFlag}\n"
    "                </span>\n"
    "                <span className=\"text-[10px] text-indigo-600 dark:text-indigo-400 font-bold\">CEFR {user.currentCEFR || 'A1'}</span>\n"
    "              </div>\n"
)
assert t.count(old_cards) == 1, "accent card block not found"

new_cards = (
    "            <div className=\"grid grid-cols-3 gap-2 text-xs\">\n"
    "              {([\n"
    "                { code: 'en-IN', label: 'Indian', flag: '\U0001F1EE\U0001F1F3' },\n"
    "                { code: 'en-US', label: 'American', flag: '\U0001F1FA\U0001F1F8' },\n"
    "                { code: 'en-GB', label: 'British', flag: '\U0001F1EC\U0001F1E7' },\n"
    "              ] as const).map((opt) => (\n"
    "                <button\n"
    "                  key={opt.code}\n"
    "                  onClick={() => {\n"
    "                    playSoundEffectEffect('tap');\n"
    "                    handleAccentSelect(opt.code);\n"
    "                  }}\n"
    "                  className={`p-2.5 rounded-2xl border text-center transition btn-press ${\n"
    "                    accentChoice === opt.code\n"
    "                      ? 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-500 ring-2 ring-indigo-500/20'\n"
    "                      : 'bg-slate-50 dark:bg-slate-950/70 border-[#D9E4FF] dark:border-slate-800'\n"
    "                  }`}\n"
    "                >\n"
    "                  <span className=\"text-lg block leading-none\">{opt.flag}</span>\n"
    "                  <span className=\"text-[11px] font-black text-slate-900 dark:text-white block mt-1\">{opt.label}</span>\n"
    "                </button>\n"
    "              ))}\n"
    "            </div>\n"
    "\n"
    "            <div className=\"grid grid-cols-2 gap-3 text-xs\">\n"
    "              <div className=\"p-3 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800\">\n"
    "                <span className=\"text-[10px] text-slate-500 uppercase block font-bold\">You are learning</span>\n"
    "                <span className=\"text-sm font-black text-slate-900 dark:text-white block mt-0.5\">English {accentFlag}</span>\n"
    "                <span className=\"text-[10px] text-indigo-600 dark:text-indigo-400 font-bold\">CEFR {user.currentCEFR || 'A1'}</span>\n"
    "              </div>\n"
)
t = t.replace(old_cards, new_cards, 1)
PROF.write_text(t, encoding="utf-8")
print("  %-54s fixed" % str(PROF))


# --------------------------------------------------------------------- verify
problems = []

ent = ENT.read_text(encoding="utf-8")
if "PREMIUM_LOCKED" in ent.split("return {", 1)[0]:
    pass
if ent.count("reason: 'PREMIUM_LOCKED'") > 0:
    problems.append("EntitlementService still returns PREMIUM_LOCKED somewhere")
if "require Pro" in ent or "requires Pro" in ent:
    problems.append("EntitlementService still mentions Pro gating")

prof = PROF.read_text(encoding="utf-8")
if "onOpenLanguageSetup()" in prof:
    problems.append("Profile still opens the target-language picker")
if "handleAccentSelect" not in prof or "setActiveEnglishAccent" not in prof:
    problems.append("Profile has no accent switcher")
if "en-GB', label: 'British'" not in prof:
    problems.append("Accent switcher is missing a British option")

if problems:
    for p in problems:
        print("  PROBLEM:", p)
    print("Restoring ...")
    for f in FILES:
        bak = f.with_suffix(f.suffix + ".before-launchblock")
        if bak.exists():
            shutil.copy2(bak, f)
    sys.exit("ABORTED - restored. Nothing changed. Send me this output.")

print("")
print("A2 lessons/units  : open to every learner (no Pro lock, no purchase flow)")
print("A1 -> A2 gate     : kept, it is progression, not payment")
print("accent switch     : Profile -> Indian / American / British, applies instantly")
print("target language   : picker entry point removed from Profile")
print("")
print("OK - all checks passed.")
