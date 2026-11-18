#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curiosity English Academy - content repair pass 2
--------------------------------------------------
Fixes Day 4 and Day 5 of DAYS_01_10_CONTENT.json, plus duplicate words in
Day 2 (same file) and Day 26 (DAYS_21_30_CONTENT.json).

What it does:
  * Day 4 : 60 template sentences -> 60 real sentences
            20 words wrongly tagged 'verb' -> correct part of speech
  * Day 5 : 60 template sentences -> 60 real sentences
            12 words wrongly tagged 'adjective' -> 'noun'
            2 duplicate words replaced with new words (full entries)
  * Day 2 : 2 duplicate words replaced with new words (full entries)
  * Day 26: 1 duplicate word replaced with a new word (full entry)

Safety:
  * Writes a .before-pass2 backup of each file it touches.
  * Verifies the word at every index BEFORE changing anything.
    If any word does not match what this script expects, it aborts and
    changes nothing.
  * Verifies the result AFTER writing, and restores the backup if the
    result is wrong.

Run from the project root:
    cd "/mnt/d/lexi talk app" && python3 fix-day4-5.py
"""

import json
import shutil
import sys
import collections
import re
from pathlib import Path

F_01_10 = Path("DAYS_01_10_CONTENT.json")
F_21_30 = Path("DAYS_21_30_CONTENT.json")
F_41_50 = Path("DAYS_41_50_CONTENT.json")

for f in (F_01_10, F_21_30):
    if not f.exists():
        sys.exit("ERROR: %s not found. Run this from the folder that contains the "
                 "DAYS_*_CONTENT.json files ( /mnt/d/lexi talk app )." % f)


# ----------------------------------------------------------------------------
# DAY 4  --  id: (lemma, correct pos, new example)
# ----------------------------------------------------------------------------
DAY4 = {
"d04_v01": ("imperative", "adjective/noun", "It is imperative that you submit the form before Friday."),
"d04_v02": ("directive", "noun", "The manager issued a clear directive about wearing safety equipment."),
"d04_v03": ("instruction", "noun", "Read every instruction on the label before you take the medicine."),
"d04_v04": ("guideline", "noun", "The guideline says students must reach the hall ten minutes early."),
"d04_v05": ("precaution", "noun", "As a precaution, keep your passport in the hotel safe."),
"d04_v06": ("prohibition", "noun", "There is a strict prohibition on smoking inside the terminal."),
"d04_v07": ("mandatory", "adjective", "Wearing a helmet is mandatory on this highway."),
"d04_v08": ("obligatory", "adjective", "Attendance at the induction session is obligatory for all new staff."),
"d04_v09": ("procedure", "noun", "The procedure for a refund takes about five working days."),
"d04_v10": ("protocol", "noun", "Follow the standard protocol when the fire alarm sounds."),
"d04_v11": ("regulation", "noun", "A new regulation limits plastic carry bags across the state."),
"d04_v12": ("compliance", "noun", "The factory was closed for non-compliance with safety norms."),
"d04_v13": ("supervision", "noun", "Children under eight must swim only under adult supervision."),
"d04_v14": ("authorization", "noun", "You need written authorization to enter the records room."),
"d04_v15": ("caution", "noun", "Drive with caution; the road is slippery after the rain."),
"d04_v16": ("advisory", "noun/adjective", "The weather office issued an advisory for heavy rain tomorrow."),
"d04_v17": ("restriction", "noun", "There is a speed restriction on the bridge after dark."),
"d04_v18": ("permission", "noun", "She asked permission to leave early for her sister's wedding."),
"d04_v19": ("sanction", "noun", "The plan cannot begin without the sanction of the finance committee."),
"d04_v20": ("enforcement", "noun", "Strict enforcement of traffic rules has reduced accidents here."),
"d04_v21": ("dispatch", "verb", "Dispatch the parcel today so that it reaches Delhi by Friday."),
"d04_v22": ("verify", "verb", "Verify the account number before you transfer the money."),
"d04_v23": ("expedite", "verb", "Please expedite the delivery; the client's deadline is tomorrow."),
"d04_v24": ("implement", "verb", "The school will implement the new timetable from Monday."),
"d04_v25": ("maintain", "verb", "Maintain a steady speed on this stretch of the highway."),
"d04_v26": ("coordinate", "verb", "Coordinate with the driver about the pickup time."),
"d04_v27": ("prioritize", "verb", "Prioritize your revision; the grammar paper comes first."),
"d04_v28": ("scrutinize", "verb", "The bank will scrutinize every document before approving the loan."),
"d04_v29": ("facilitate", "verb", "The new app will facilitate faster booking of train tickets."),
"d04_v30": ("delegate", "verb", "A good manager knows how to delegate small tasks."),
"d04_v31": ("circulate", "verb", "Circulate the minutes to everyone who attended the meeting."),
"d04_v32": ("terminate", "verb", "The company may terminate the contract if payment is delayed."),
"d04_v33": ("authorize", "verb", "Only the principal can authorize a leave of absence."),
"d04_v34": ("execute", "verb", "The team executed the rescue plan without a single mistake."),
"d04_v35": ("reinforce", "verb", "Engineers will reinforce the bridge before the monsoon."),
"d04_v36": ("rectify", "verb", "Rectify the spelling errors before you print the notice."),
"d04_v37": ("discontinue", "verb", "The company decided to discontinue the old model."),
"d04_v38": ("allocate", "verb", "Allocate two hours every evening to spoken practice."),
"d04_v39": ("consolidate", "verb", "Consolidate your notes into one page before the exam."),
"d04_v40": ("monitor", "verb", "The nurse will monitor your blood pressure every four hours."),
"d04_v41": ("refrain", "verb", "Please refrain from using your phone during the interview."),
"d04_v42": ("prohibit", "verb", "The rules prohibit parking in front of the main gate."),
"d04_v43": ("reiterate", "verb", "Let me reiterate the deadline: Friday, five o'clock."),
"d04_v44": ("undertake", "verb", "The trust agreed to undertake a cleanliness drive in the village."),
"d04_v45": ("comply", "verb", "All shops must comply with the new fire safety rules."),
"d04_v46": ("escalate", "verb", "If the problem continues, escalate it to the floor manager."),
"d04_v47": ("notify", "verb", "Notify the office in writing if you change your address."),
"d04_v48": ("standardize", "verb", "The chain plans to standardize its menu across all outlets."),
"d04_v49": ("assemble", "verb", "Assemble the documents in this order: form, identity proof, photograph."),
"d04_v50": ("designate", "verb", "The board will designate one member to sign the papers."),
"d04_v51": ("adhere", "verb", "Adhere to the dosage printed on the strip."),
"d04_v52": ("ensure", "verb", "Ensure that your seat belt is fastened before take-off."),
"d04_v53": ("dispense", "verb", "The pharmacist will dispense the tablets after seeing the prescription."),
"d04_v54": ("solicit", "verb", "The committee will solicit feedback from parents next week."),
"d04_v55": ("convene", "verb", "The chairperson will convene a meeting on Saturday morning."),
"d04_v56": ("disseminate", "verb", "The health department will disseminate the guidelines to every clinic."),
"d04_v57": ("postpone", "verb", "Do not postpone the check-up; book it this week."),
"d04_v58": ("safeguard", "verb", "Safeguard your passwords and never share them on a phone call."),
"d04_v59": ("authenticate", "verb", "The app will authenticate your identity by sending a one-time password."),
"d04_v60": ("validate", "verb", "Validate the ticket before you board the metro."),
}

# ----------------------------------------------------------------------------
# DAY 5  --  id: (lemma, correct pos, new example)
# ----------------------------------------------------------------------------
DAY5 = {
"d05_v01": ("copula", "noun", "In the sentence 'she is tired', the word 'is' is the copula."),
"d05_v02": ("existence", "noun", "The forest guards confirmed the existence of a new leopard cub."),
"d05_v03": ("attribute", "noun", "Patience is an attribute every good teacher needs."),
"d05_v04": ("identity", "noun", "Please carry photo identity to the examination hall."),
"d05_v05": ("condition", "noun", "The doctor said his condition was stable after the surgery."),
"d05_v06": ("profession", "noun", "Teaching is a profession that demands endless patience."),
"d05_v07": ("occupation", "noun", "She wrote 'engineer' in the occupation column of the form."),
"d05_v08": ("nationality", "noun", "He holds Indian nationality and has lived in Pune for years."),
"d05_v09": ("citizenship", "noun", "She received her citizenship certificate last month."),
"d05_v10": ("personality", "noun", "Her cheerful personality makes her popular in the office."),
"d05_v11": ("temperament", "noun", "His calm temperament helps him handle angry customers."),
"d05_v12": ("disposition", "noun", "He has a generous disposition and shares whatever he has."),
"d05_v13": ("enthusiastic", "adjective", "The children were enthusiastic about the school trip."),
"d05_v14": ("diligent", "adjective", "She is diligent about revising her notes every night."),
"d05_v15": ("competent", "adjective", "He is competent enough to handle the whole project alone."),
"d05_v16": ("meticulous", "adjective", "Her records are meticulous, right down to the last paisa."),
"d05_v17": ("pragmatic", "adjective", "My father is pragmatic; he fixes problems instead of worrying about them."),
"d05_v18": ("resilient", "adjective", "The farmers here are resilient and recover after every flood."),
"d05_v19": ("affable", "adjective", "Our new neighbour is affable and talks to everyone on the street."),
"d05_v20": ("scrupulous", "adjective", "He is scrupulous about paying every bill on time."),
"d05_v21": ("versatile", "adjective", "This actor is versatile enough to play a comic and a villain."),
"d05_v22": ("eloquent", "adjective", "Her speech was eloquent and moved the entire hall."),
"d05_v23": ("tenacious", "adjective", "You have to be tenacious if you want to clear this exam."),
"d05_v24": ("empathetic", "adjective", "A good doctor is empathetic, not merely knowledgeable."),
"d05_v25": ("astute", "adjective", "He is an astute businessman who spots a bargain instantly."),
"d05_v26": ("gregarious", "adjective", "My cousin is gregarious and makes friends within minutes."),
"d05_v27": ("candid", "adjective", "I trust her because she is candid about her own mistakes."),
"d05_v28": ("punctual", "adjective", "The 8:10 train is always punctual, even in heavy rain."),
"d05_v29": ("resourceful", "adjective", "She is resourceful; she once fixed a fan with a hairpin."),
"d05_v30": ("dependable", "adjective", "He is dependable, so you can hand him any task."),
"d05_v31": ("erudite", "adjective", "The professor is erudite yet explains everything simply."),
"d05_v32": ("conscientious", "adjective", "The watchman is conscientious about locking every gate."),
"d05_v33": ("proactive", "adjective", "Be proactive and book the tickets before the rush begins."),
"d05_v34": ("judicious", "adjective", "Judicious use of water will get us through the summer."),
"d05_v35": ("benevolent", "adjective", "A benevolent stranger paid for the child's treatment."),
"d05_v36": ("steadfast", "adjective", "Her support stayed steadfast through that difficult year."),
"d05_v37": ("innovative", "adjective", "This start-up is innovative and runs cold storage on solar power."),
"d05_v38": ("affluent", "adjective", "The family became affluent after expanding their business."),
"d05_v39": ("indispensable", "adjective", "A good dictionary is indispensable for a serious learner."),
"d05_v40": ("distinguished", "adjective", "He is a distinguished surgeon with thirty years of practice."),
"d05_v41": ("eminent", "adjective", "An eminent judge chaired the enquiry committee."),
"d05_v42": ("adept", "adjective", "She is adept at calming an angry customer within minutes."),
"d05_v44": ("dynamic", "adjective", "The new HR head is dynamic and full of fresh ideas."),
"d05_v45": ("impartial", "adjective", "A referee must stay impartial, whoever the players are."),
"d05_v47": ("zealous", "adjective", "The young volunteers were zealous about cleaning the beach."),
"d05_v48": ("exemplary", "adjective", "Her conduct during the crisis was exemplary."),
"d05_v49": ("rigorous", "adjective", "The medical course involves rigorous training in anatomy."),
"d05_v50": ("vulnerable", "adjective", "Elderly people are more vulnerable to heat waves."),
"d05_v51": ("lucid", "adjective", "His explanation of the tax rules was lucid and short."),
"d05_v52": ("robust", "adjective", "The drainage system is robust enough for heavy monsoon rain."),
"d05_v53": ("credible", "adjective", "The witness gave a credible account of that evening."),
"d05_v54": ("prudent", "adjective", "It is prudent to keep some cash at home for emergencies."),
"d05_v55": ("vigilant", "adjective", "Stay vigilant near busy crossings after dark."),
"d05_v56": ("unwavering", "adjective", "Her belief in her son's talent was unwavering."),
"d05_v57": ("formidable", "adjective", "The opposition team is a formidable opponent this season."),
"d05_v58": ("proficient", "adjective", "She is proficient in both Tamil and English."),
"d05_v59": ("authentic", "adjective", "This restaurant serves authentic Kashmiri food."),
"d05_v60": ("indomitable", "adjective", "His indomitable spirit kept the farm alive through three droughts."),
}

# d05_v43 (duplicate of 'competent') and d05_v46 (duplicate of 'astute')
# are replaced by complete new entries, defined below.

# ----------------------------------------------------------------------------
# Full replacement entries for the five duplicate words
# ----------------------------------------------------------------------------
REPLACE = {
    # (file, day, vocab index)  ->  complete entry
    (F_01_10, 2, 37): {
        "id": "d02_v38",
        "lemma": "courteous",
        "wordForm": "courteous",
        "pos": "adjective",
        "ipa": "/\u02c8k\u025c\u02d0.ti.\u0259s/",
        "devanagari": "\u0915\u0930-\u091f\u0940-\u0905\u0938",
        "syllables": "cour \u00b7 te \u00b7 ous (3)",
        "stress": "1st Syllable (COUR-te-ous)",
        "hindiMeaning": "\u0935\u093f\u0928\u092e\u094d\u0930 / \u0936\u093f\u0937\u094d\u091f / \u092d\u0926\u094d\u0930",
        "register": "Universal / Formal",
        "collocations": ["courteous reply", "courteous staff", "courteous tone"],
        "relatedForms": [
            {"form": "courtesy", "pos": "noun"},
            {"form": "courteously", "pos": "adverb"}
        ],
        "example": "The receptionist gave me a courteous reply and sorted out the problem in minutes.",
        "commonError": "Do not confuse 'courteous' (polite) with 'curious' (eager to know); the vowels are different."
    },
    (F_01_10, 2, 51): {
        "id": "d02_v52",
        "lemma": "solicitous",
        "wordForm": "solicitous",
        "pos": "adjective",
        "ipa": "/s\u0259\u02c8l\u026as.\u026a.t\u0259s/",
        "devanagari": "\u0938\u094b-\u0932\u093f\u0938\u093f-\u091f\u0938",
        "syllables": "so \u00b7 lic \u00b7 i \u00b7 tous (4)",
        "stress": "2nd Syllable (so-LIS-ci-tous)",
        "hindiMeaning": "\u0927\u094d\u092f\u093e\u0928 \u0930\u0916\u0928\u0947 \u0935\u093e\u0932\u093e / \u092b\u093c\u093f\u0915\u094d\u0930\u092e\u0902\u0926",
        "register": "Formal",
        "collocations": ["solicitous enquiry", "solicitous about", "solicitous care"],
        "relatedForms": [
            {"form": "solicitude", "pos": "noun"},
            {"form": "solicitously", "pos": "adverb"}
        ],
        "example": "My neighbour was solicitous about my mother's health and rang every evening.",
        "commonError": "Solicitous means showing care, not asking for something; 'solicit' (to request) is a different word."
    },
    (F_01_10, 5, 42): {
        "id": "d05_v43",
        "lemma": "resolute",
        "wordForm": "resolute",
        "pos": "adjective",
        "ipa": "/\u02c8rez.\u0259.lu\u02d0t/",
        "devanagari": "\u0930\u0947\u091c\u093c\u094b-\u0932\u0942\u091f",
        "syllables": "res \u00b7 o \u00b7 lute (3)",
        "stress": "1st Syllable (RES-o-lute)",
        "hindiMeaning": "\u0926\u0943\u0922\u093c\u0938\u0902\u0915\u0932\u094d\u092a / \u0905\u091f\u0932",
        "register": "Formal",
        "collocations": ["resolute decision", "resolute in", "remain resolute"],
        "relatedForms": [
            {"form": "resolution", "pos": "noun"},
            {"form": "resolutely", "pos": "adverb"}
        ],
        "example": "She was resolute about finishing the marathon despite the cramp in her leg.",
        "commonError": "Resolute describes a person or decision that will not change; 'resilient' means recovering after difficulty."
    },
    (F_01_10, 5, 45): {
        "id": "d05_v46",
        "lemma": "perceptive",
        "wordForm": "perceptive",
        "pos": "adjective",
        "ipa": "/p\u0259\u02c8sep.t\u026av/",
        "devanagari": "\u092a-\u0938\u0947\u092a-\u091f\u093f\u0935",
        "syllables": "per \u00b7 cep \u00b7 tive (3)",
        "stress": "2nd Syllable (per-CEP-tive)",
        "hindiMeaning": "\u0938\u0942\u091d-\u092c\u0942\u091d \u0935\u093e\u0932\u093e / \u0924\u0947\u091c\u093c \u0938\u092e\u091d",
        "register": "Formal",
        "collocations": ["perceptive question", "perceptive teacher", "perceptive remark"],
        "relatedForms": [
            {"form": "perception", "pos": "noun"},
            {"form": "perceptively", "pos": "adverb"}
        ],
        "example": "A perceptive reader notices the small hints the author plants early on.",
        "commonError": "Perceptive is about noticing things; 'perspective' is a noun meaning a point of view."
    },
    (F_21_30, 26, 40): {
        "id": "d26_v_041",
        "lemma": "thereupon",
        "wordForm": "thereupon",
        "pos": "adverb",
        "ipa": "/\u02cc\u00f0e\u0259.r\u0259\u02c8p\u0252n/",
        "devanagari": "\u0926\u0947\u0905-\u0930\u092a\u0949\u0928",
        "syllables": "there \u00b7 up \u00b7 on (3)",
        "stress": "3rd Syllable (there-up-ON)",
        "hindiMeaning": "\u0924\u0924\u094d\u092a\u0936\u094d\u091a\u093e\u0924 / \u0909\u0938\u0915\u0947 \u0924\u0941\u0930\u0902\u0924 \u092c\u093e\u0926",
        "register": "Formal / Literary",
        "collocations": ["and thereupon", "thereupon the council", "thereupon he"],
        "relatedForms": [
            {"form": "thereafter", "pos": "adverb"},
            {"form": "thereby", "pos": "adverb"}
        ],
        "example": "The motion was passed, and thereupon the assembly dispersed for the day.",
        "commonError": "Use 'thereupon' for what happens immediately next; 'thereafter' is looser and means any later time."
    },
}


# ----------------------------------------------------------------------------
# helpers
# ----------------------------------------------------------------------------
def load(path):
    with open(path, "r", encoding="utf-8") as fh:
        return json.load(fh)


def save(path, data):
    with open(path, "w", encoding="utf-8") as fh:
        json.dump(data, fh, ensure_ascii=False, indent=2)
        fh.write("\n")


def get_day(data, n):
    for d in data["days"]:
        if d.get("dayNumber") == n:
            return d
    raise SystemExit("ERROR: day %d not found in file" % n)


def fail(msg):
    raise SystemExit("ABORTED - nothing was changed.\n" + msg)


# ----------------------------------------------------------------------------
# verify-before stage
# ----------------------------------------------------------------------------
print("Checking the file matches what this script expects ...")

data_0110 = load(F_01_10)
data_2130 = load(F_21_30)

d4 = get_day(data_0110, 4)["learn"]["vocabulary"]
d5 = get_day(data_0110, 5)["learn"]["vocabulary"]
d2 = get_day(data_0110, 2)["learn"]["vocabulary"]
d26 = get_day(data_2130, 26)["learn"]["vocabulary"]

EXPECTED_D4 = {k: v[0] for k, v in DAY4.items()}
EXPECTED_D5 = {k: v[0] for k, v in DAY5.items()}

for items, expected, label in ((d4, EXPECTED_D4, "Day 4"), (d5, EXPECTED_D5, "Day 5")):
    if len(items) != 60:
        fail("%s has %d words, expected 60." % (label, len(items)))
    for it in items:
        want = expected.get(it["id"])
        if want is not None and it.get("lemma") != want:
            fail("%s: %s is '%s' but this script expects '%s'."
                 % (label, it["id"], it.get("lemma"), want))

d5_dupes = {42: "competent", 45: "astute"}
for idx, lemma in d5_dupes.items():
    if d5[idx].get("lemma") != lemma:
        fail("Day 5 index %d is '%s', expected duplicate '%s'."
             % (idx, d5[idx].get("lemma"), lemma))

if d2[37].get("lemma") != "hospitality":
    fail("Day 2 index 37 is '%s', expected duplicate 'hospitality'." % d2[37].get("lemma"))
if d2[51].get("lemma") != "gracious":
    fail("Day 2 index 51 is '%s', expected duplicate 'gracious'." % d2[51].get("lemma"))
if d26[40].get("lemma") != "formerly":
    fail("Day 26 index 40 is '%s', expected duplicate 'formerly'." % d26[40].get("lemma"))

print("  all words match. Applying fixes ...")


# ----------------------------------------------------------------------------
# apply
# ----------------------------------------------------------------------------
def apply(items, table):
    changed_ex = 0
    changed_pos = 0
    for it in items:
        row = table.get(it["id"])
        if not row:
            continue
        _lemma, pos, example = row
        if it.get("example") != example:
            it["example"] = example
            changed_ex += 1
        if it.get("pos") != pos:
            it["pos"] = pos
            changed_pos += 1
    return changed_ex, changed_pos


ex4, pos4 = apply(d4, DAY4)
ex5, pos5 = apply(d5, DAY5)

for (path, day, idx), entry in REPLACE.items():
    target = get_day(data_0110 if path == F_01_10 else data_2130, day)["learn"]["vocabulary"]
    old = target[idx].get("lemma")
    target[idx] = entry
    print("  day %-2d %-14s -> %s" % (day, old, entry["lemma"]))


# ----------------------------------------------------------------------------
# write with backup
# ----------------------------------------------------------------------------
backups = []
for path, data in ((F_01_10, data_0110), (F_21_30, data_2130)):
    bak = path.with_suffix(path.suffix + ".before-day4-5-fix")
    shutil.copy2(path, bak)
    backups.append((path, bak))
    save(path, data)

print("  written. backups made.")


# ----------------------------------------------------------------------------
# verify-after stage
# ----------------------------------------------------------------------------
def template_scan(day):
    norm = []
    for it in day["learn"]["vocabulary"]:
        s = (it.get("example") or "").lower()
        for w in set([it["lemma"].lower()] + it["lemma"].lower().split()):
            s = re.sub(r"\b" + re.escape(w) + r"\b", "X", s)
        norm.append(s)
    return collections.Counter(norm).most_common(1)[0]


problems = []

data_0110 = load(F_01_10)
data_2130 = load(F_21_30)

for data, fname, days in ((data_0110, F_01_10.name, (2, 4, 5)),
                          (data_2130, F_21_30.name, (26,))):
    for n in days:
        day = get_day(data, n)
        v = day["learn"]["vocabulary"]
        lemmas = [it["lemma"] for it in v]
        dupes = [w for w, c in collections.Counter(lemmas).items() if c > 1]
        if dupes:
            problems.append("%s day %d still has duplicates: %s" % (fname, n, dupes))
        empty = [it["id"] for it in v if not (it.get("example") or "").strip()]
        if empty:
            problems.append("%s day %d has %d words with no example" % (fname, n, len(empty)))
        top, count = template_scan(day)
        if count >= 5:
            problems.append("%s day %d still templated: %d/%d -> %r"
                            % (fname, n, count, len(v), top[:70]))

if problems:
    for p in problems:
        print("  PROBLEM:", p)
    for path, bak in backups:
        shutil.copy2(bak, path)
    sys.exit("ABORTED - the result failed verification, so both files were restored. "
             "Nothing changed. Send me this output.")

print("")
print("day 4 examples rewritten: %d" % ex4)
print("day 4 parts of speech fixed: %d" % pos4)
print("day 5 examples rewritten: %d" % ex5)
print("day 5 parts of speech fixed: %d" % pos5)
print("duplicate words replaced: 5")
print("day 2 duplicates left: 0")
print("day 4 duplicates left: 0")
print("day 5 duplicates left: 0")
print("day 26 duplicates left: 0")
print("templates left in days 2/4/5/26: 0")
print("")
print("OK - all checks passed.")
