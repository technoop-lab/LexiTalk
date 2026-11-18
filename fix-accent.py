#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curiosity English Academy - teaching voice follows the chosen accent
--------------------------------------------------------------------
The learner picks Indian / American / British English during onboarding, and
that choice is saved as preferences.accentPreference. But nothing ever reads
it. Every speech call in the app is hardcoded to 'en-US':

    speakNativeAndroidTTS(text, lang = 'en-US', rate)
    speakTextOffline(text, lang = 'en-US', rate)
    splitMixedScriptText(text, defaultLang = 'en-US')
    ...and two more

So a learner who chose Indian English hears an American voice, which is what
you saw. The native Android bridge already honours a locale, so this is purely
a JavaScript problem.

The fix:
  * one place that stores the active accent, defaulting to en-IN
  * every English speech call uses it instead of 'en-US'
  * the browser voice picker prefers an exact en-IN / en-US / en-GB voice
  * App.tsx applies the learner's saved preference at startup and on change

Run from the project root:
    cd "/mnt/d/lexi talk app" && python3 fix-accent.py
"""

import shutil
import sys
from pathlib import Path

UTILS = Path("src/utils/audioUtils.ts")
APP = Path("src/App.tsx")
ONB = Path("src/components/OnboardingFlow.tsx")
HOME = Path("src/components/learner/LearnerHomeDashboard.tsx")
HCOURSE = Path("src/components/hindi/HindiCourseHome.tsx")

FILES = [UTILS, APP, ONB, HOME, HCOURSE]
for f in FILES:
    if not f.exists():
        sys.exit("ERROR: %s not found. Run this from /mnt/d/lexi talk app" % f)

for f in FILES:
    bak = f.with_suffix(f.suffix + ".before-accent")
    if not bak.exists():
        shutil.copy2(f, bak)


def must(text, old, new, label, expect=1):
    n = text.count(old)
    if n != expect:
        raise SystemExit(
            "ABORTED - nothing written.\nIn %s, expected %d occurrences of:\n---\n%s\n---\nfound %d. "
            "Send me this and I will adjust the patch." % (label, expect, old, n)
        )
    return text.replace(old, new)


# --------------------------------------------------------------- audioUtils
t = UTILS.read_text(encoding="utf-8")

HEADER = "// Standard web & native Android speech audio utilities - 100% Client-Side & Offline Compatible"
ACCENT_BLOCK = HEADER + """

// ---------------------------------------------------------------------------
// Active teaching accent
// The learner chooses Indian / American / British English during onboarding.
// Every English sentence is spoken in that accent. Hindi is always hi-IN.
// ---------------------------------------------------------------------------
export type EnglishAccent = 'en-IN' | 'en-US' | 'en-GB';

const ACCENT_ALIASES: Record<string, EnglishAccent> = {
  'en-in': 'en-IN',
  indian: 'en-IN',
  india: 'en-IN',
  'en-us': 'en-US',
  american: 'en-US',
  us: 'en-US',
  usa: 'en-US',
  'en-gb': 'en-GB',
  british: 'en-GB',
  uk: 'en-GB',
};

let activeEnglishAccent: EnglishAccent = 'en-IN';

/**
 * Set the accent used for all spoken English.
 * Safe to call with undefined (keeps the current accent).
 */
export const setActiveEnglishAccent = (accent?: string | null): void => {
  if (!accent) return;
  const resolved = ACCENT_ALIASES[String(accent).toLowerCase()];
  if (resolved) activeEnglishAccent = resolved;
};

export const getActiveEnglishAccent = (): EnglishAccent => activeEnglishAccent;"""
t = must(t, HEADER, ACCENT_BLOCK, UTILS.name + " header")

# every hardcoded en-US default becomes the learner's accent
t = must(t, "lang = 'en-US'", "lang: string = getActiveEnglishAccent()", UTILS.name, expect=4)

# mixed-script splitter
t = must(t, "  lang: 'hi-IN' | 'en-US';", "  lang: 'hi-IN' | EnglishAccent;", UTILS.name)
t = must(t, "export const splitMixedScriptText = (text: string, defaultLang = 'en-US'): ScriptChunk[] => {",
         "export const splitMixedScriptText = (text: string, defaultLang: string = getActiveEnglishAccent()): ScriptChunk[] => {",
         UTILS.name)
t = must(t, "  let currentLang: 'hi-IN' | 'en-US' | null = null;",
         "  let currentLang: 'hi-IN' | EnglishAccent | null = null;", UTILS.name)
t = must(t, "    return [{ text: text.trim(), lang: (defaultLang || 'en-US') as 'en-US' }];",
         "    return [{ text: text.trim(), lang: (defaultLang as EnglishAccent) || getActiveEnglishAccent() }];",
         UTILS.name)
t = must(t, "    else if (isTokenEnglish) tokenLang = (defaultLang || 'en-US') as 'en-US';",
         "    else if (isTokenEnglish) tokenLang = (defaultLang as EnglishAccent) || getActiveEnglishAccent();",
         UTILS.name)
t = must(t, "  chunks.push({ text: currentText.trim(), lang: currentLang || 'en-US' });",
         "  chunks.push({ text: currentText.trim(), lang: currentLang || getActiveEnglishAccent() });",
         UTILS.name)
t = must(t, "  return chunks.length > 0 ? chunks : [{ text: text.trim(), lang: 'en-US' }];",
         "  return chunks.length > 0 ? chunks : [{ text: text.trim(), lang: getActiveEnglishAccent() }];",
         UTILS.name)

# browser fallback: choose a voice that matches the chosen accent exactly
OLD_VOICE = """          const targetLangPrefix = chunk.lang.split('-')[0];
          const matchingVoice = voices.find(
            (v) => (v.lang.startsWith(targetLangPrefix) && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('India'))) || v.lang === chunk.lang
          );"""
NEW_VOICE = """          const wanted = chunk.lang.replace('_', '-').toLowerCase();
          let matchingVoice = voices.find((v) => v.lang.replace('_', '-').toLowerCase() === wanted);
          if (!matchingVoice) {
            const base = wanted.split('-')[0];
            if (base === 'hi') {
              matchingVoice = voices.find((v) => v.lang.toLowerCase().startsWith('hi'));
            } else {
              // Prefer any English voice before giving up, rather than staying silent.
              matchingVoice = voices.find((v) => v.lang.toLowerCase().startsWith('en'));
            }
          }"""
t = must(t, OLD_VOICE, NEW_VOICE, UTILS.name + " voice picker")

UTILS.write_text(t, encoding="utf-8")

# ---------------------------------------------------------------------- App
t = APP.read_text(encoding="utf-8")
t = must(
    t,
    "import { AuthService } from './services/AuthService';",
    "import { AuthService } from './services/AuthService';\nimport { setActiveEnglishAccent } from './utils/audioUtils';",
    APP.name + " import",
)
t = must(
    t,
    "  const [currentUser, setCurrentUser] = useState<UserAcademyProfile>(() => AuthService.getCurrentUser());",
    "  const [currentUser, setCurrentUser] = useState<UserAcademyProfile>(() => AuthService.getCurrentUser());\n"
    "\n"
    "  // Teaching voice always matches the accent the learner picked.\n"
    "  useEffect(() => {\n"
    "    setActiveEnglishAccent(currentUser?.preferences?.accentPreference);\n"
    "  }, [currentUser?.preferences?.accentPreference]);",
    APP.name + " effect",
)
APP.write_text(t, encoding="utf-8")

# ----------------------------------------------------------- onboarding save
t = ONB.read_text(encoding="utf-8")
t = must(
    t,
    "import { playSoundEffectEffect } from '../utils/audioUtils';",
    "import { playSoundEffectEffect, setActiveEnglishAccent } from '../utils/audioUtils';",
    ONB.name + " import",
)
t = must(
    t,
    "    onCompleteOnboarding(updated);",
    "    setActiveEnglishAccent(selectedAccent);\n    onCompleteOnboarding(updated);",
    ONB.name + " apply accent on finish",
)
ONB.write_text(t, encoding="utf-8")


# ------------------------------------------- streak capsules tell the truth
t = HOME.read_text(encoding="utf-8")
t = must(
    t,
    """            const isPast = idx < currentDayIndex;
            const isToday = idx === currentDayIndex;""",
    """            const isPast = idx < currentDayIndex;
            const isToday = idx === currentDayIndex;
            // A day only shows a tick if the learner really practised it.
            const streakLen = user.streakDays || 0;
            const isDone = isToday ? streakLen > 0 : isPast && (currentDayIndex - idx) <= streakLen - 1;""",
    HOME.name + " capsule state",
)
t = must(
    t,
    """                      : isPast
                      ? 'bg-amber-50 dark:bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-500/30 font-extrabold'""",
    """                      : isDone
                      ? 'bg-amber-50 dark:bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-500/30 font-extrabold'""",
    HOME.name + " capsule style",
)
t = must(t, "{isPast || isToday ? '✓' : '•'}", "{isDone ? '✓' : '•'}", HOME.name + " capsule tick")
HOME.write_text(t, encoding="utf-8")

# ------------------------------------------- course header: streak and day count
t = HCOURSE.read_text(encoding="utf-8")
t = must(t, "<span>{progress.streakDays || 1}d Streak</span>",
         "<span>{progress.streakDays || 0}d Streak</span>", HCOURSE.name + " streak")
t = must(t, "            All 60 Days Authored",
         "            40 days ready \u00b7 41-60 coming", HCOURSE.name + " authored chip")
t = must(t, "              60 / 60", "              40 / 60", HCOURSE.name + " day count")
HCOURSE.write_text(t, encoding="utf-8")


# --------------------------------------------------------------------- verify
problems = []
u = UTILS.read_text(encoding="utf-8")
if "lang = 'en-US'" in u:
    problems.append("audioUtils still defaults to en-US somewhere")
if "defaultLang = 'en-US'" in u:
    problems.append("splitMixedScriptText still defaults to en-US")
for need in ("setActiveEnglishAccent", "getActiveEnglishAccent", "EnglishAccent"):
    if need not in u:
        problems.append("audioUtils is missing " + need)

a = APP.read_text(encoding="utf-8")
if "setActiveEnglishAccent(currentUser?.preferences?.accentPreference)" not in a:
    problems.append("App.tsx does not apply the saved accent")

h = HOME.read_text(encoding="utf-8")
if "isPast || isToday ? '✓'" in h:
    problems.append("home still ticks days that were never practised")
hc = HCOURSE.read_text(encoding="utf-8")
if "progress.streakDays || 1" in hc:
    problems.append("course header still turns a 0 streak into 1")
if "All 60 Days Authored" in hc:
    problems.append("course header still claims all 60 days are authored")

if problems:
    for p in problems:
        print("  PROBLEM:", p)
    print("Restoring ...")
    for f in FILES:
        bak = f.with_suffix(f.suffix + ".before-accent")
        if bak.exists():
            shutil.copy2(bak, f)
    sys.exit("ABORTED - restored. Nothing changed. Send me this output.")

print("")
print("audioUtils   : accent store added, default en-IN, all en-US defaults removed")
print("voice picker : prefers an exact en-IN / en-US / en-GB voice, then any English voice")
print("App.tsx      : applies the learner's saved accent at startup and whenever it changes")
print("onboarding   : applies the chosen accent immediately on finish")
print("home         : weekly capsules tick only days actually practised")
print("course header: streak 0, and 40/60 days instead of claiming 60 authored")
print("")
print("OK - all checks passed.")
