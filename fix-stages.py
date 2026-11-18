#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curiosity English Academy - locked stage honesty
------------------------------------------------
Stages 5 and 6 (Days 41-60) do not have example sentences yet, so they are
not shippable in v1. The stage list currently tells the learner:

    "Complete Stage 4 to unlock this module"

which promises content that does not exist and will never unlock, because
the next stage is not finished. This changes that message for Days 41-60 to
the truth, and leaves Stages 1-4 exactly as they are.

Run from the project root:
    cd "/mnt/d/lexi talk app" && python3 fix-stages.py
"""

import shutil
import sys
from pathlib import Path

F = Path("src/components/hindi/HindiCourseHome.tsx")
if not F.exists():
    sys.exit("ERROR: %s not found. Run this from /mnt/d/lexi talk app" % F)

bak = F.with_suffix(F.suffix + ".before-stages-fix")
if not bak.exists():
    shutil.copy2(F, bak)

t = F.read_text(encoding="utf-8")

OLD = """                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      Complete Stage {stage.stageNumber - 1} to unlock this module
                    </p>"""

NEW = """                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      {stage.startDay > 40
                        ? `Days ${stage.startDay}-${stage.endDay} arrive in a free update`
                        : `Complete Stage ${stage.stageNumber - 1} to unlock this module`}
                    </p>"""

n = t.count(OLD)
if n != 1:
    sys.exit(
        "ABORTED - nothing written.\nExpected exactly one locked-stage message, found %d.\n"
        "Send me this and I will adjust the patch." % n
    )

t = t.replace(OLD, NEW, 1)
F.write_text(t, encoding="utf-8")

# verify
after = F.read_text(encoding="utf-8")
if "arrive in a free update" not in after:
    shutil.copy2(bak, F)
    sys.exit("ABORTED - verification failed, file restored.")
if OLD in after:
    shutil.copy2(bak, F)
    sys.exit("ABORTED - old message still present, file restored.")

print("locked Stages 5-6 now read : 'Days 41-60 arrive in a free update'")
print("locked Stages 1-4 still read: 'Complete Stage N to unlock this module'")
print("")
print("OK - all checks passed.")
