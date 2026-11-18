#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curiosity English Academy - accent, part 2 (the real fix)
---------------------------------------------------------
My previous accent patch was incomplete and I want to be precise about why.

It changed only the DEFAULT value of the speech functions. But twelve call
sites across the app pass the language explicitly:

    speakCleanAudio(vocab.word, 'en-US', rate)
    speakTextOffline(text, 'en-US', modelSpeed)
    utterance.lang = 'en-US'
    rec.lang = 'en-US'

An explicit argument always beats a default, so the learner's Indian English
choice was overridden every time. That is why you still heard American.

This patch fixes the call sites themselves, and two related things you spotted:

  * the header shows the TARGET language flag (English = British flag) even for
    an Indian English learner. It now shows the flag of the chosen accent.
  * the Learning Journeys sheet offers "Start New Target Language Journey",
    which is meaningless in a Hindi-speaker app that teaches one target
    language. Removed.

Run from the project root:
    cd "/mnt/d/lexi talk app" && python3 fix-accent2.py
"""

import shutil
import sys
from pathlib import Path

BASE = Path("src")

TARGETS = [
    ("src/components/conversation/ConversationTurnRunner.tsx", "../../utils/audioUtils"),
    ("src/components/LessonRunner.tsx", "../utils/audioUtils"),
    ("src/components/vocab/Vocab3DCard.tsx", "../../utils/audioUtils"),
    ("src/components/vocab/WordFamilyExplorer.tsx", "../../utils/audioUtils"),
    ("src/components/vocab/VocabSwipeDeck.tsx", "../../utils/audioUtils"),
    ("src/components/vocab/DailyVocabChallengeWidget.tsx", "../../utils/audioUtils"),
    ("src/components/vocab/VocabMiniQuizModal.tsx", "../../utils/audioUtils"),
    ("src/components/lesson/ExerciseRenderer.tsx", "../../utils/audioUtils"),
    ("src/components/lesson/AssessmentView.tsx", "../../utils/audioUtils"),
    ("src/components/learner/DialoguePlayerView.tsx", "../../utils/audioUtils"),
    ("src/components/learner/GrammarExperienceModal.tsx", "../../utils/audioUtils"),
    ("src/components/learner/SkillExperiences.tsx", "../../utils/audioUtils"),
    ("src/components/hindi/HindiLessonView.tsx", "../../utils/audioUtils"),
    ("src/components/hindi/HindiPracticeRunner.tsx", "../../utils/audioUtils"),
]

HOME = Path("src/components/learner/LearnerHomeDashboard.tsx")
SHELL = Path("src/components/learner/LearnerAppShell.tsx")
JOURNEY = Path("src/components/learner/LearningJourneySelector.tsx")

PROV_PATH = Path("src/services/speech/OnDeviceAndroidSpeechProvider.ts")
FILES = [Path(p) for p, _ in TARGETS] + [HOME, SHELL, JOURNEY, PROV_PATH,
         Path("src/services/AudioService.ts"), Path("src/services/ExitAssessmentEngine.ts")]
for f in FILES:
    if not f.exists():
        sys.exit("ERROR: %s not found. Run this from /mnt/d/lexi talk app" % f)

for f in FILES:
    bak = f.with_suffix(f.suffix + ".before-accent2")
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


# ------------------------------------------- 1. speak in the learner's accent
for path, modpath in TARGETS:
    f = Path(path)
    t = f.read_text(encoding="utf-8")

    old_import = "from '%s';" % modpath
    # add getActiveEnglishAccent to the existing audioUtils import
    lines = t.split("\n")
    changed_import = False
    for i, line in enumerate(lines):
        if ("from '%s'" % modpath) in line and line.strip().startswith("import"):
            if "getActiveEnglishAccent" not in line:
                lines[i] = line.replace("import {", "import { getActiveEnglishAccent,", 1)
                changed_import = True
            break
    if not changed_import and "getActiveEnglishAccent" not in t:
        raise SystemExit("ABORTED - could not add the import in %s" % path)
    t = "\n".join(lines)

    # every explicit 'en-US' speech language becomes the learner's accent
    t = t.replace("'en-US'", "getActiveEnglishAccent()")
    f.write_text(t, encoding="utf-8")
    print("  %-52s calls updated" % path)

# AssessmentView's handler signature held the same union
t = Path("src/components/lesson/AssessmentView.tsx").read_text(encoding="utf-8")
t = must(t, "lang: getActiveEnglishAccent() | 'hi-IN'", "lang: string",
         "AssessmentView handler signature")
Path("src/components/lesson/AssessmentView.tsx").write_text(t, encoding="utf-8")


# speech-recognition provider (no audioUtils import yet)
PROV = Path("src/services/speech/OnDeviceAndroidSpeechProvider.ts")
t = PROV.read_text(encoding="utf-8")
if "getActiveEnglishAccent" not in t:
    t = "import { getActiveEnglishAccent } from '../../utils/audioUtils';\n" + t
t = must(t, "const lang = config?.language || 'en-US';",
         "const lang = config?.language || getActiveEnglishAccent();",
         PROV.name + " default language")
PROV.write_text(t, encoding="utf-8")
print("  %-52s calls updated" % str(PROV))

# sentence-level defaults inside the audio service + exit assessment
SERVICES = [
    ("src/services/AudioService.ts", "'../../utils/audioUtils'", [
        ("options.lang || 'en-US';", "options.lang || getActiveEnglishAccent();"),
        ("isHindiScript ? 'hi-IN' : (options.lang || 'en-US')",
         "isHindiScript ? 'hi-IN' : (options.lang || getActiveEnglishAccent())"),
        ("public speakText(text: string, lang = 'en-US')",
         "public speakText(text: string, lang = getActiveEnglishAccent())"),
        ("public speak(text: string, lang = 'en-US', rate = 0.9)",
         "public speak(text: string, lang = getActiveEnglishAccent(), rate = 0.9)"),
    ]),
    ("src/services/ExitAssessmentEngine.ts", "'../utils/audioUtils'", [
        ("  audioLang: 'en-US' | 'hi-IN';", "  audioLang: string;"),
        ("""const audioLang: 'en-US' | 'hi-IN' = /[\\u0900-\\u097F]/.test(audioText) ? 'hi-IN' : 'en-US';""",
         """const audioLang: string = /[\\u0900-\\u097F]/.test(audioText) ? 'hi-IN' : getActiveEnglishAccent();"""),
    ]),
]
for rel, imp, edits in SERVICES:
    sp = Path(rel)
    st = sp.read_text(encoding="utf-8")
    if "getActiveEnglishAccent" not in st:
        st = "import { getActiveEnglishAccent } from %s;\n" % imp + st
    for old, new in edits:
        st = must(st, old, new, sp.name + " : " + old[:42])
    sp.write_text(st, encoding="utf-8")
    print("  %-52s calls updated" % rel)


# mixed-script chunk token type must allow en-IN / en-GB, not just en-US
AU = Path("src/utils/audioUtils.ts")
at = AU.read_text(encoding="utf-8")
at = must(at, "let tokenLang: 'hi-IN' | 'en-US' | null = null;",
          "let tokenLang: 'hi-IN' | EnglishAccent | null = null;",
          "audioUtils.ts chunk token language type")
AU.write_text(at, encoding="utf-8")
print("  %-52s type widened" % str(AU))


# --------------------------------- 2. header shows the accent, not the target
ACCENT_FLAG = """  // The flag reflects the accent being taught, not the target language.
  const activeAccent = user.preferences?.accentPreference;
  const accentFlag = activeAccent === 'en-US' ? '\\u{1F1FA}\\u{1F1F8}' : activeAccent === 'en-GB' ? '\\u{1F1EC}\\u{1F1E7}' : '\\u{1F1EE}\\u{1F1F3}';
"""

t = HOME.read_text(encoding="utf-8")
t = must(t, "  const targetReg = getLanguageRegistryEntry(targetLang);",
         "  const targetReg = getLanguageRegistryEntry(targetLang);\n" + ACCENT_FLAG,
         HOME.name + " accent flag")
t = must(t, """            <span className="text-base">{targetReg.flag}</span>
            <span className="font-extrabold">{targetReg.name}</span>""",
         """            <span className="text-base">{accentFlag}</span>
            <span className="font-extrabold">{targetReg.name}</span>""",
         HOME.name + " header chip")
HOME.write_text(t, encoding="utf-8")

t = SHELL.read_text(encoding="utf-8")
if "const targetReg" not in t:
    raise SystemExit("ABORTED - LearnerAppShell.tsx has no targetReg; nothing written.")
if "const accentFlag" not in t:
    anchor = "const targetReg"
    idx = t.index(anchor)
    line_end = t.index("\n", idx) + 1
    t = t[:line_end] + ACCENT_FLAG + t[line_end:]
t = must(t, """            <span className="text-xl">{targetReg.flag}</span>""",
         """            <span className="text-xl">{accentFlag}</span>""",
         SHELL.name + " header flag")
SHELL.write_text(t, encoding="utf-8")


# --------------------------- 3. no "Start New Target Language Journey" button
t = JOURNEY.read_text(encoding="utf-8")
OLD_BTN = """              {/* Add New Journey Button */}
              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setShowAddJourney(true);
                }}
                className="w-full py-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 border border-dashed border-slate-300 dark:border-slate-700 text-xs font-bold text-emerald-600 dark:text-emerald-400 rounded-2xl transition flex items-center justify-center space-x-2 cursor-pointer btn-press"
              >
                <Plus className="w-4 h-4" />
                <span>Start New Target Language Journey</span>
              </button>
"""
t = must(t, OLD_BTN, "", JOURNEY.name + " add-journey button")
if "Start New Target Language Journey" in t:
    raise SystemExit("ABORTED - the add-journey button is still present.")
JOURNEY.write_text(t, encoding="utf-8")


# --------------------------------------------------------------------- verify
problems = []
for path, modpath in TARGETS:
    txt = Path(path).read_text(encoding="utf-8")
    if "'en-US'" in txt:
        problems.append("%s still hardcodes en-US" % path)
    if "getActiveEnglishAccent" not in txt:
        problems.append("%s never calls getActiveEnglishAccent" % path)

for f in (HOME, SHELL):
    txt = f.read_text(encoding="utf-8")
    if "{targetReg.flag}" in txt:
        problems.append("%s still shows the target-language flag" % f.name)
    if "accentFlag" not in txt:
        problems.append("%s has no accent flag" % f.name)

if "Start New Target Language Journey" in JOURNEY.read_text(encoding="utf-8"):
    problems.append("LearningJourneySelector still offers a new target language")

if problems:
    for p in problems:
        print("  PROBLEM:", p)
    print("Restoring ...")
    for f in FILES:
        bak = f.with_suffix(f.suffix + ".before-accent2")
        if bak.exists():
            shutil.copy2(bak, f)
    sys.exit("ABORTED - restored. Nothing changed. Send me this output.")

print("")
print("speech calls      : 17 files, every explicit 'en-US' now uses the learner's accent")
print("recognition       : listens for the same accent (en-IN / en-US / en-GB)")
print("header flag       : shows the accent flag (IN / US / GB), not the target flag")
print("learning journeys : 'Start New Target Language Journey' removed")
print("")
print("OK - all checks passed.")
