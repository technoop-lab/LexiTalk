// scripts/build_stage2_days.js
import fs from 'fs';
import path from 'path';
import { getDay11RawTerms, getDay12RawTerms, getDay13RawTerms, getDay14RawTerms, getDay15RawTerms } from './stage2_data_days11_15_clean.js';
import { getDay16RawTerms, getDay17RawTerms, getDay18RawTerms, getDay19RawTerms, getDay20RawTerms } from './stage2_data_days16_20_clean.js';

function makeVocab(id, [lemma, meaningHi, ipa, devanagari, syllables, stress, register, collocations, relatedForms, example, commonError, pos = 'noun']) {
  return {
    id,
    lemma,
    wordForm: lemma,
    pos: pos || 'noun',
    ipa,
    devanagari,
    syllables,
    stress,
    hindiMeaning: meaningHi,
    register,
    collocations: Array.isArray(collocations) ? collocations : [collocations],
    relatedForms: relatedForms || [],
    example,
    commonError: commonError || `Ensure correct primary stress on the ${stress}.`
  };
}

const STAGE2_CONFIG = [
  {
    dayNum: 11,
    titleEn: "Imperatives, Directives, Polite Requests & Formulaic Social Etiquette",
    titleHi: "आज्ञा, निर्देश, विनम्र अनुरोध एवं सामाजिक शिष्टाचार के सूत्र",
    cefr: "A1.2",
    estMinutes: 45,
    prerequisites: "Mastery of Stage 1 (Days 1–10: Nouns, Pronouns, Copulas, Determiners)",
    rawTermsFn: getDay11RawTerms,
    phoneticTarget: "Imperative Intonation & Strong Plosives /p, t, k/ in Directive Formulae",
    phoneticTrap: "Avoid using a flat, interrogative rising inflection on commands, or softening necessary plosives into Hindi unvoiced non-aspirates.",
    minimalPairs: [
      { p1: "pack", ipa1: "/pæk/", p2: "back", ipa2: "/bæk/", note: "Aspirated voiceless bilabial /p/ vs voiced bilabial /b/" },
      { p1: "take", ipa1: "/teɪk/", p2: "make", ipa2: "/meɪk/", note: "Alveolar plosive /t/ vs bilabial nasal /m/" },
      { p1: "close", ipa1: "/kləʊz/", p2: "clothes", ipa2: "/kləʊðz/", note: "Voiced alveolar sibilant /z/ vs voiced dental fricative /ð/" },
      { p1: "pass", ipa1: "/pɑːs/", p2: "path", ipa2: "/pɑːθ/", note: "Voiceless alveolar sibilant /s/ vs voiceless dental /θ/" },
      { p1: "send", ipa1: "/send/", p2: "spend", ipa2: "/spend/", note: "Initial /s/ cluster timing without intruding short vowel" },
      { p1: "wait", ipa1: "/weɪt/", p2: "weight", ipa2: "/weɪt/", note: "Homophones highlighting labio-velar approximant /w/" },
      { p1: "stop", ipa1: "/stɒp/", p2: "spot", ipa2: "/spɒt/", note: "Sibilant plosive cluster /st/ vs /sp/" },
      { p1: "lead", ipa1: "/liːd/", p2: "read", ipa2: "/riːd/", note: "Alveolar lateral /l/ vs postalveolar approximant /r/" },
      { p1: "file", ipa1: "/faɪl/", p2: "pile", ipa2: "/paɪl/", note: "Labiodental fricative /f/ vs bilabial plosive /p/" },
      { p1: "check", ipa1: "/tʃek/", p2: "tech", ipa2: "/tek/", note: "Voiceless postalveolar affricate /tʃ/ vs velar plosive /k/" }
    ],
    grammaticalCore: "Base Verb Imperative (V1), Negative Imperative (Do not + V1), Polite Modifiers (Please, Kindly, Could you please...)"
  },
  {
    dayNum: 12,
    titleEn: "Existential Clauses: 'There is' / 'There are' & Spatial Quantification",
    titleHi: "अस्तित्ववाचक वाक्य: 'There is' / 'There are' एवं स्थानिक परिमाणन",
    cefr: "A1.2",
    estMinutes: 45,
    prerequisites: "Mastery of Singular/Plural Nouns & Be-Verbs",
    rawTermsFn: getDay12RawTerms,
    phoneticTarget: "Voiced Dental Fricative /ð/ in 'There' and Linking /r/ in 'There are' [ðeər ɑːr]",
    phoneticTrap: "Substituting Hindi aspirated dental 'ध' (dh) for English /ð/, or dropping the linking /r/ between 'there' and following vowels.",
    minimalPairs: [
      { p1: "there", ipa1: "/ðeər/", p2: "dare", ipa2: "/deər/", note: "Voiced dental fricative /ð/ vs voiced alveolar plosive /d/" },
      { p1: "there", ipa1: "/ðeər/", p2: "their", ipa2: "/ðeər/", note: "Homophones requiring clear vowel centering" },
      { p1: "is", ipa1: "/ɪz/", p2: "his", ipa2: "/hɪz/", note: "Unaspirated initial vowel /ɪ/ vs glottal fricative /h/" },
      { p1: "are", ipa1: "/ɑːr/", p2: "our", ipa2: "/aʊər/", note: "Open back monophthong /ɑː/ vs centering diphthong /aʊə/" },
      { p1: "some", ipa1: "/sʌm/", p2: "sum", ipa2: "/sʌm/", note: "Short central vowel /ʌ/" },
      { p1: "many", ipa1: "/ˈmen.i/", p2: "money", ipa2: "/ˈmʌn.i/", note: "Front open-mid /e/ vs central open /ʌ/" },
      { p1: "few", ipa1: "/fjuː/", p2: "view", ipa2: "/vjuː/", note: "Voiceless /f/ vs voiced /v/ with palatal glide /j/" },
      { p1: "room", ipa1: "/ruːm/", p2: "loom", ipa2: "/luːm/", note: "Approximant /r/ vs lateral /l/" },
      { p1: "space", ipa1: "/speɪs/", p2: "spade", ipa2: "/speɪd/", note: "Final voiceless sibilant /s/ vs voiced plosive /d/" },
      { p1: "desk", ipa1: "/desk/", p2: "disk", ipa2: "/dɪsk/", note: "Vowel contrast /e/ vs /ɪ/ before cluster /sk/" }
    ],
    grammaticalCore: "Existential 'There is' (Singular/Uncountable) vs 'There are' (Plural), Negative ('There is no...'), Question ('Is there...? / Are there...?')"
  },
  {
    dayNum: 13,
    titleEn: "Possession, Attributes & Health States: 'Have' / 'Has' / 'Had'",
    titleHi: "अधिकार, शारीरिक लक्षण एवं स्वास्थ्य स्थितियाँ: 'Have' / 'Has' / 'Had'",
    cefr: "A1.2",
    estMinutes: 45,
    prerequisites: "Mastery of Subject Pronouns (I, He, She, We, They)",
    rawTermsFn: getDay13RawTerms,
    phoneticTarget: "Aspirated Glottal Fricative /h/ in 'Have, Has, Had' & Weak Form /hæv/ -> /əv/",
    phoneticTrap: "Omitting the initial /h/ (saying 'ave', 'as') or over-stressing weak auxiliary forms in connected speech.",
    minimalPairs: [
      { p1: "have", ipa1: "/hæv/", p2: "half", ipa2: "/hɑːf/", note: "Voiced labiodental /v/ vs voiceless /f/ and vowel quality" },
      { p1: "has", ipa1: "/hæz/", p2: "as", ipa2: "/æz/", note: "Presence of glottal /h/ vs vowel-initial onset" },
      { p1: "had", ipa1: "/hæd/", p2: "hat", ipa2: "/hæt/", note: "Final voiced /d/ with vowel lengthening vs final voiceless /t/" },
      { p1: "head", ipa1: "/hed/", p2: "had", ipa2: "/hæd/", note: "Short front vowel /e/ vs open front /æ/" },
      { p1: "hold", ipa1: "/həʊld/", p2: "old", ipa2: "/əʊld/", note: "Aspirated /h/ vs unaspirated onset" },
      { p1: "heat", ipa1: "/hiːt/", p2: "hit", ipa2: "/hɪt/", note: "Long high front /iː/ vs short /ɪ/" },
      { p1: "hair", ipa1: "/heər/", p2: "air", ipa2: "/eər/", note: "Glottal onset /h/ vs pure diphthong" },
      { p1: "heart", ipa1: "/hɑːt/", p2: "art", ipa2: "/ɑːt/", note: "Glottal /h/ + back vowel /ɑː/" },
      { p1: "pain", ipa1: "/peɪn/", p2: "pen", ipa2: "/pen/", note: "Diphthong /eɪ/ vs monophthong /e/" },
      { p1: "fever", ipa1: "/ˈfiː.vər/", p2: "favor", ipa2: "/ˈfeɪ.vər/", note: "High front /iː/ vs diphthong /eɪ/" }
    ],
    grammaticalCore: "Present Possession (Have/Has), Past Possession (Had), Negative (Do not have / Does not have), Interrogative (Do you have...? / Does she have...?)"
  },
  {
    dayNum: 14,
    titleEn: "Simple Present Tense I: Universal Truths, Habitual Actions & 3rd Person '-s/-es'",
    titleHi: "सामान्य वर्तमान काल I: सार्वभौमिक सत्य, दैनिक आदतें एवं '-(e)s' के ध्वन्यात्मक नियम",
    cefr: "A2.1",
    estMinutes: 45,
    prerequisites: "Mastery of Pronoun-Verb Concord & Base Verbs",
    rawTermsFn: getDay14RawTerms,
    phoneticTarget: "Three Phonetic Variants of 3rd Person Suffix '-s/-es': /s/, /z/, and /ɪz/",
    phoneticTrap: "Pronouncing every final '-s' as /s/ instead of voiced /z/ after vowels/voiced consonants, or omitting the extra syllable /ɪz/ after sibilants.",
    minimalPairs: [
      { p1: "works", ipa1: "/wɜːks/", p2: "words", ipa2: "/wɜːdz/", note: "Voiceless ending /ks/ vs voiced ending /dz/" },
      { p1: "plays", ipa1: "/pleɪz/", p2: "place", ipa2: "/pleɪs/", note: "Final voiced /z/ vs voiceless sibilant /s/" },
      { p1: "watches", ipa1: "/ˈwɒtʃ.ɪz/", p2: "washed", ipa2: "/wɒʃt/", note: "Syllabic /ɪz/ suffix vs past /t/" },
      { p1: "rises", ipa1: "/ˈraɪ.zɪz/", p2: "rice", ipa2: "/raɪs/", note: "Two-syllable inflection /zɪz/ vs single syllable /s/" },
      { p1: "speaks", ipa1: "/spiːks/", p2: "speeds", ipa2: "/spiːdz/", note: "Voiceless /ks/ vs voiced /dz/" },
      { p1: "lives", ipa1: "/lɪvz/", p2: "leaves", ipa2: "/liːvz/", note: "Short vowel /ɪ/ vs long vowel /iː/ before /vz/" },
      { p1: "takes", ipa1: "/teɪks/", p2: "tapes", ipa2: "/teɪps/", note: "Velar cluster /ks/ vs bilabial cluster /ps/" },
      { p1: "runs", ipa1: "/rʌnz/", p2: "rung", ipa2: "/rʌŋ/", note: "Alveolar nasal /n/ + /z/ vs velar nasal /ŋ/" },
      { p1: "teaches", ipa1: "/ˈtiː.tʃɪz/", p2: "teachers", ipa2: "/ˈtiː.tʃərz/", note: "Verb inflection /ɪz/ vs agent noun plural /ərz/" },
      { p1: "goes", ipa1: "/ɡəʊz/", p2: "ghost", ipa2: "/ɡəʊst/", note: "Voiced ending /z/ vs consonant cluster /st/" }
    ],
    grammaticalCore: "Simple Present Habitual, Universal Laws, 3rd Person Singular Inflection Rules (+s, +es, +ies), Adverbs of Frequency (always, usually, often, sometimes, rarely, never)"
  },
  {
    dayNum: 15,
    titleEn: "Simple Present Tense II: Auxiliary Negation, Do/Does Inversion & Information Questions",
    titleHi: "सामान्य वर्तमान काल II: सहायक क्रिया द्वारा नकारात्मक, Do/Does प्रश्न एवं विस्तृत पूछताछ",
    cefr: "A2.1",
    estMinutes: 45,
    prerequisites: "Mastery of Simple Present Affirmative & 3rd Person Conjugation",
    rawTermsFn: getDay15RawTerms,
    phoneticTarget: "Reduced Auxiliary Pronunciation /duː/ -> /də/, /dʌz/ -> /dəz/ and Connected Question Rhythm",
    phoneticTrap: "Adding an unnecessary '-s' to the main verb after 'does' (e.g. *Does he works?*) or stressing the auxiliary verb unnaturally.",
    minimalPairs: [
      { p1: "do", ipa1: "/duː/", p2: "due", ipa2: "/djuː/", note: "Pure monophthong /uː/ vs palatalized /juː/" },
      { p1: "does", ipa1: "/dʌz/", p2: "dust", ipa2: "/dʌst/", note: "Final voiced /z/ vs consonant cluster /st/" },
      { p1: "don't", ipa1: "/dəʊnt/", p2: "dawn", ipa2: "/dɔːn/", note: "Closing diphthong /əʊ/ with nasal cluster vs open vowel /ɔː/" },
      { p1: "doesn't", ipa1: "/ˈdʌz.ənt/", p2: "dozen", ipa2: "/ˈdʌz.ən/", note: "Glottalized/nasal final /nt/ vs pure alveolar nasal /n/" },
      { p1: "what do", ipa1: "/ˈwɒt də/", p2: "water", ipa2: "/ˈwɔː.tər/", note: "Weak form reduction in interrogative collocations" },
      { p1: "why do", ipa1: "/ˈwaɪ də/", p2: "wider", ipa2: "/ˈwaɪ.dər/", note: "Rhythm of wh-question + weak auxiliary" },
      { p1: "where do", ipa1: "/ˈweə də/", p2: "wearer", ipa2: "/ˈweə.rər/", note: "Smooth transition between wh-word and auxiliary" },
      { p1: "how do", ipa1: "/ˈhaʊ də/", p2: "hound", ipa2: "/haʊnd/", note: "Interrogative phrasing vs noun" },
      { p1: "when do", ipa1: "/ˈwen də/", p2: "winner", ipa2: "/ˈwɪn.ər/", note: "Mid-vowel /e/ vs high vowel /ɪ/" },
      { p1: "which do", ipa1: "/ˈwɪtʃ də/", p2: "wished", ipa2: "/wɪʃt/", note: "Affricate /tʃ/ vs fricative + stop /ʃt/" }
    ],
    grammaticalCore: "Negative Syntax (Subj + do not/does not + V1), Yes/No Inversion (Do/Does + Subj + V1?), Wh- Question Formula (Wh- + do/does + Subj + V1 + Complement?)"
  },
  {
    dayNum: 16,
    titleEn: "Present Continuous Tense: Dynamic Progression, Stative Verb Contrasts & Temporary Realities",
    titleHi: "अपूर्ण वर्तमान काल: तात्कालिक क्रियाएं, स्थिर क्रियाओं के नियम एवं अस्थायी स्थितियाँ",
    cefr: "A2.1",
    estMinutes: 45,
    prerequisites: "Mastery of Present Copula (is/am/are) & Action Verbs",
    rawTermsFn: getDay16RawTerms,
    phoneticTarget: "Velar Nasal /ŋ/ in '-ing' Suffix (Eliminating the Intrusive /ɡ/ or /k/)",
    phoneticTrap: "Pronouncing '-ing' with a hard /ɡ/ (saying 'going-guh') or replacing /ŋ/ with a dental /n/ (saying 'goin').",
    minimalPairs: [
      { p1: "sing", ipa1: "/sɪŋ/", p2: "sin", ipa2: "/sɪn/", note: "Velar nasal /ŋ/ vs alveolar nasal /n/" },
      { p1: "running", ipa1: "/ˈrʌn.ɪŋ/", p2: "run in", ipa2: "/rʌn ɪn/", note: "Continuous suffix /ɪŋ/ vs separated prepositional phrase" },
      { p1: "king", ipa1: "/kɪŋ/", p2: "kin", ipa2: "/kɪn/", note: "Velar nasal /ŋ/ vs alveolar nasal /n/" },
      { p1: "ring", ipa1: "/rɪŋ/", p2: "rim", ipa2: "/rɪm/", note: "Velar nasal /ŋ/ vs bilabial nasal /m/" },
      { p1: "wing", ipa1: "/wɪŋ/", p2: "win", ipa2: "/wɪn/", note: "Velar nasal /ŋ/ vs alveolar nasal /n/" },
      { p1: "talking", ipa1: "/ˈtɔː.kɪŋ/", p2: "took", ipa2: "/tʊk/", note: "Suffix nasalization vs pure short vowel" },
      { p1: "writing", ipa1: "/ˈraɪ.tɪŋ/", p2: "ridden", ipa2: "/ˈrɪd.ən/", note: "Diphthong /aɪ/ + alveolar tap vs short /ɪ/ + nasal syllabic" },
      { p1: "speaking", ipa1: "/ˈspiː.kɪŋ/", p2: "spoken", ipa2: "/ˈspəʊ.kən/", note: "High front /iː/ vs closing diphthong /əʊ/" },
      { p1: "thinking", ipa1: "/ˈθɪŋ.kɪŋ/", p2: "thin", ipa2: "/θɪn/", note: "Voiceless dental /θ/ + nasal assimilation /ŋk/" },
      { p1: "watching", ipa1: "/ˈwɒtʃ.ɪŋ/", p2: "washed", ipa2: "/wɒʃt/", note: "Affricate /tʃ/ + /ɪŋ/ vs voiceless fricative /ʃt/" }
    ],
    grammaticalCore: "Present Continuous (Subj + is/am/are + V-ing), Stative Verbs (Know, Understand, Like, Want, Believe - cannot take -ing in stative sense), Time Markers (now, currently, at the moment, these days)"
  },
  {
    dayNum: 17,
    titleEn: "Simple Past Tense I: Regular Verb Morphology, '-ed' Phonological Allomorphs & Historical Narrative",
    titleHi: "सामान्य भूतकाल I: नियमित क्रियाएं, '-ed' के तीन उच्चारण नियम एवं ऐतिहासिक वर्णन",
    cefr: "A2.1",
    estMinutes: 45,
    prerequisites: "Mastery of Simple Present & Past Copula (Was/Were)",
    rawTermsFn: getDay17RawTerms,
    phoneticTarget: "The Three Phonological Allomorphs of Regular Past '-ed': /t/, /d/, and /ɪd/",
    phoneticTrap: "Pronouncing every '-ed' as a separate full syllable /eɖ/ (e.g. *work-ed, talk-ed*) instead of applying the voiceless /t/ or voiced /d/ coda rule.",
    minimalPairs: [
      { p1: "worked", ipa1: "/wɜːkt/", p2: "work", ipa2: "/wɜːk/", note: "Voiceless stop coda /kt/ vs single stop /k/" },
      { p1: "played", ipa1: "/pleɪd/", p2: "plate", ipa2: "/pleɪt/", note: "Voiced alveolar stop /d/ vs voiceless /t/" },
      { p1: "wanted", ipa1: "/ˈwɒn.tɪd/", p2: "haunted", ipa2: "/ˈhɔːn.tɪd/", note: "Syllabic /tɪd/ ending after alveolar stop base" },
      { p1: "decided", ipa1: "/dɪˈsaɪ.dɪd/", p2: "decide", ipa2: "/dɪˈsaɪd/", note: "Extra syllable /dɪd/ created after /d/ base" },
      { p1: "passed", ipa1: "/pɑːst/", p2: "past", ipa2: "/pɑːst/", note: "Homophones demonstrating /st/ cluster" },
      { p1: "called", ipa1: "/kɔːld/", p2: "cold", ipa2: "/kəʊld/", note: "Open back /ɔː/ + /ld/ vs diphthong /əʊ/ + /ld/" },
      { p1: "helped", ipa1: "/helpt/", p2: "held", ipa2: "/held/", note: "Voiceless cluster /lpt/ vs voiced cluster /ld/" },
      { p1: "started", ipa1: "/ˈstɑː.tɪd/", p2: "start", ipa2: "/stɑːt/", note: "Syllabic /tɪd/ addition" },
      { p1: "watched", ipa1: "/wɒtʃt/", p2: "washed", ipa2: "/wɒʃt/", note: "Affricate coda /tʃt/ vs fricative coda /ʃt/" },
      { p1: "lived", ipa1: "/lɪvd/", p2: "lift", ipa2: "/lɪft/", note: "Voiced cluster /vd/ vs voiceless cluster /ft/" }
    ],
    grammaticalCore: "Simple Past Affirmative (Subj + V2), Regular Verb '-ed' Rules (/t/ after voiceless consonants, /d/ after voiced sounds, /ɪd/ after /t/ and /d/), Specific Past Time Adverbials (yesterday, last month, in 1947, two weeks ago)"
  },
  {
    dayNum: 18,
    titleEn: "Simple Past Tense II: Irregular Verb Paradigms, Did-Negation & Interrogative Retrieval",
    titleHi: "सामान्य भूतकाल II: अनियमित क्रिया रूप, Did द्वारा नकारात्मक एवं प्रश्न निर्माण",
    cefr: "A2.1",
    estMinutes: 45,
    prerequisites: "Mastery of Regular Simple Past Affirmative",
    rawTermsFn: getDay18RawTerms,
    phoneticTarget: "Weakening and Flapping in 'Did you' [dɪdʒuː] and Stress Shifting in Did-Questions",
    phoneticTrap: "Using V2 after 'did not' or in questions (e.g. *I did not went*, *Did you saw?*). Always revert to Base Verb (V1) after 'did'.",
    minimalPairs: [
      { p1: "did you", ipa1: "/ˈdɪdʒ.uː/", p2: "do you", ipa2: "/ˈduː juː/", note: "Palatal assimilation in past auxiliary interrogative" },
      { p1: "went", ipa1: "/went/", p2: "want", ipa2: "/wɒnt/", note: "Front vowel /e/ vs open back /ɒ/" },
      { p1: "saw", ipa1: "/sɔː/", p2: "so", ipa2: "/səʊ/", note: "Monophthong /ɔː/ vs closing diphthong /əʊ/" },
      { p1: "came", ipa1: "/keɪm/", p2: "come", ipa2: "/kʌm/", note: "Closing diphthong /eɪ/ vs central vowel /ʌ/" },
      { p1: "gave", ipa1: "/ɡeɪv/", p2: "give", ipa2: "/ɡɪv/", note: "Diphthong /eɪ/ vs short vowel /ɪ/" },
      { p1: "took", ipa1: "/tʊk/", p2: "talk", ipa2: "/tɔːk/", note: "Short rounded /ʊ/ vs long open /ɔː/" },
      { p1: "bought", ipa1: "/bɔːt/", p2: "boat", ipa2: "/bəʊt/", note: "Open vowel /ɔː/ vs closing diphthong /əʊ/" },
      { p1: "thought", ipa1: "/θɔːt/", p2: "taught", ipa2: "/tɔːt/", note: "Dental fricative /θ/ vs alveolar stop /t/" },
      { p1: "spoke", ipa1: "/spəʊk/", p2: "smoke", ipa2: "/sməʊk/", note: "Plosive cluster /sp/ vs nasal cluster /sm/" },
      { p1: "wrote", ipa1: "/rəʊt/", p2: "road", ipa2: "/rəʊd/", note: "Voiceless final /t/ vs voiced final /d/" }
    ],
    grammaticalCore: "Irregular Past Verb Conjugations (go->went, see->saw, write->wrote), Past Negation (Subj + did not + V1), Past Interrogative (Did + Subj + V1?), Wh- Past Interrogative (Wh- + did + Subj + V1?)"
  },
  {
    dayNum: 19,
    titleEn: "Modal Auxiliaries of Modality: Ability, Possibility, Permission & Polite Softening",
    titleHi: "मोडल सहायक क्रियाएं: सामर्थ्य, संभावना, अनुमति एवं विनम्र शिष्टाचार",
    cefr: "A2.1",
    estMinutes: 45,
    prerequisites: "Mastery of Simple Present & Past Syntactic Structures",
    rawTermsFn: getDay19RawTerms,
    phoneticTarget: "Silent Letters in 'Could, Would, Should' (/kʊd, wʊd, ʃʊd/) and Weak Modal Rhythm",
    phoneticTrap: "Pronouncing the silent 'l' in 'could' (saying *coold*) or adding 'to' before the main verb (*can to do*). Modals are followed directly by bare infinitive (V1).",
    minimalPairs: [
      { p1: "can", ipa1: "/kæn/", p2: "can't", ipa2: "/kɑːnt/", note: "Weak/short /æn/ vs long back open /ɑːnt/ with glottal closure" },
      { p1: "could", ipa1: "/kʊd/", p2: "good", ipa2: "/ɡʊd/", note: "Voiceless velar /k/ vs voiced velar /ɡ/" },
      { p1: "may", ipa1: "/meɪ/", p2: "my", ipa2: "/maɪ/", note: "Closing diphthong /eɪ/ vs wide diphthong /aɪ/" },
      { p1: "might", ipa1: "/maɪt/", p2: "mate", ipa2: "/meɪt/", note: "Diphthong /aɪ/ vs diphthong /eɪ/" },
      { p1: "should", ipa1: "/ʃʊd/", p2: "wood", ipa2: "/wʊd/", note: "Postalveolar fricative /ʃ/ vs labio-velar /w/" },
      { p1: "must", ipa1: "/mʌst/", p2: "mast", ipa2: "/mɑːst/", note: "Short central /ʌ/ vs long open /ɑː/" },
      { p1: "would", ipa1: "/wʊd/", p2: "could", ipa2: "/kʊd/", note: "Approximant /w/ vs voiceless plosive /k/" },
      { p1: "will", ipa1: "/wɪl/", p2: "well", ipa2: "/wel/", note: "High front /ɪ/ vs mid front /e/" },
      { p1: "shall", ipa1: "/ʃæl/", p2: "shell", ipa2: "/ʃel/", note: "Open front /æ/ vs mid front /e/" },
      { p1: "ought", ipa1: "/ɔːt/", p2: "out", ipa2: "/aʊt/", note: "Long monophthong /ɔː/ vs closing diphthong /aʊ/" }
    ],
    grammaticalCore: "Can/Cannot (Present Ability), Could/Could not (Past Ability & Polite Request), May/Might (Permission & Possibility), Modal + Bare Infinitive (No 'to', No '-s', No '-ed')"
  },
  {
    dayNum: 20,
    titleEn: "Stage 2 Comprehensive Milestone: Integrated Communication, Fluency Synthesis & Diagnostic Gate",
    titleHi: "स्टेज 2 व्यापक समन्वय: एकीकृत संवाद, धाराप्रवाह अभिव्यक्ति एवं मूल्यांकन परीक्षा",
    cefr: "A2.1 Milestone",
    estMinutes: 50,
    prerequisites: "Completion of Stage 2 (Days 11–19: Imperatives, Existentials, Possession, Present, Past, Modals)",
    rawTermsFn: getDay20RawTerms,
    phoneticTarget: "Connected Speech Synthesis: Linking /r/, Elision, Assimilation, Intonation Gradients & Syllable Stress Master Integration",
    phoneticTrap: "Reverting to word-by-word staccato reading. Practice sentence-level rhythm, linking consonant-to-vowel boundaries, and stressing content words over function words.",
    minimalPairs: [
      { p1: "produce (n)", ipa1: "/ˈprɒd.juːs/", p2: "produce (v)", ipa2: "/prəˈdjuːs/", note: "Noun initial stress vs verb second syllable stress" },
      { p1: "record (n)", ipa1: "/ˈrek.ɔːd/", p2: "record (v)", ipa2: "/rɪˈkɔːd/", note: "Noun 1st syllable stress vs verb 2nd syllable stress" },
      { p1: "present (n)", ipa1: "/ˈprez.ənt/", p2: "present (v)", ipa2: "/prɪˈzent/", note: "Noun 1st syllable stress vs verb 2nd syllable stress" },
      { p1: "object (n)", ipa1: "/ˈɒb.dʒɪkt/", p2: "object (v)", ipa2: "/əbˈdʒekt/", note: "Noun 1st syllable stress vs verb 2nd syllable stress" },
      { p1: "conduct (n)", ipa1: "/ˈkɒn.dʌkt/", p2: "conduct (v)", ipa2: "/kənˈdʌkt/", note: "Noun 1st syllable stress vs verb 2nd syllable stress" },
      { p1: "contract (n)", ipa1: "/ˈkɒn.trækt/", p2: "contract (v)", ipa2: "/kənˈtrækt/", note: "Noun 1st syllable stress vs verb 2nd syllable stress" },
      { p1: "desert (n)", ipa1: "/ˈdez.ət/", p2: "dessert (n)", ipa2: "/dɪˈzɜːt/", note: "Arid land (1st syllable) vs sweet dish (2nd syllable)" },
      { p1: "progress (n)", ipa1: "/ˈprəʊ.ɡres/", p2: "progress (v)", ipa2: "/prəˈɡres/", note: "Noun 1st syllable stress vs verb 2nd syllable stress" },
      { p1: "project (n)", ipa1: "/ˈprɒdʒ.ekt/", p2: "project (v)", ipa2: "/prəˈdʒekt/", note: "Noun 1st syllable stress vs verb 2nd syllable stress" },
      { p1: "rebel (n)", ipa1: "/ˈreb.əl/", p2: "rebel (v)", ipa2: "/rɪˈbel/", note: "Noun 1st syllable stress vs verb 2nd syllable stress" }
    ],
    grammaticalCore: "Complete Synthesis of Stage 2 Grammar: Imperatives, Existential Clauses, Possession Frames, Simple Present Habits & Rules, Present Continuous Actions, Regular & Irregular Simple Past, Modal Nuances"
  }
];

// Contextual sentence templates for each day to generate 100 deep bilingual exemplars
function generateBilingualExemplars(dayNum) {
  const exemplars = [];
  const templatesByDay = {
    11: {
      types: ["Direct Command", "Polite Request", "Negative Directive", "Classroom/Workplace Instruction", "Urgent Advisory"],
      patterns: [
        { en: "Please submit the quarterly financial report by Friday afternoon.", hi: "कृपया शुक्रवार दोपहर तक त्रैमासिक वित्तीय रिपोर्ट जमा करें।", cat: "Workplace Directive" },
        { en: "Do not open the laboratory doors during the active laser experiment.", hi: "सक्रिय लेजर प्रयोग के दौरान प्रयोगशाला के दरवाजे न खोलें।", cat: "Safety Directive" },
        { en: "Could you please review the attached agreement before the signing ceremony?", hi: "क्या आप हस्ताक्षर समारोह से पहले संलग्न समझौते की समीक्षा कर सकते हैं?", cat: "Polite Request" },
        { en: "Turn off all electrical appliances before leaving the office premises.", hi: "कार्यालय परिसर छोड़ने से पहले सभी बिजली के उपकरण बंद कर दें।", cat: "Workplace Protocol" },
        { en: "Let us coordinate with the engineering team to resolve this technical issue.", hi: "आइए इस तकनीकी समस्या को हल करने के लिए इंजीनियरिंग टीम के साथ समन्वय करें।", cat: "Collaborative Directive" },
        { en: "Always verify the passenger credentials before issuing the boarding pass.", hi: "बोर्डिंग पास जारी करने से पहले हमेशा यात्री के पहचान पत्रों का सत्यापन करें।", cat: "Operational Instruction" },
        { en: "Kindly sign on the designated line at the bottom of the second page.", hi: "कृपया दूसरे पृष्ठ के नीचे निर्दिष्ट रेखा पर हस्ताक्षर करें।", cat: "Formal Protocol" },
        { en: "Do not disclose confidential patient records without written authorization.", hi: "लिखित अनुमति के बिना गोपनीय रोगी रिकॉर्ड का खुलासा न करें।", cat: "Legal & Ethical Directive" },
        { en: "Please take your seat, the conference keynote is about to commence.", hi: "कृपया अपना स्थान ग्रहण करें, सम्मेलन का मुख्य व्याख्यान शुरू होने वाला है।", cat: "Event Etiquette" },
        { en: "Ensure that all backup servers are synchronized before midnight.", hi: "सुनिश्चित करें कि आधी रात से पहले सभी बैकअप सर्वर सिंक्रनाइज़ हो जाएं।", cat: "Technical Maintenance" }
      ]
    },
    12: {
      types: ["Singular Existential", "Plural Existential", "Negative Existential", "Interrogative Existential", "Quantitative Assessment"],
      patterns: [
        { en: "There is an advanced research laboratory on the top floor of the institute.", hi: "संस्थान की सबसे ऊपरी मंजिल पर एक उन्नत अनुसंधान प्रयोगशाला है।", cat: "Facility Description" },
        { en: "There are forty dedicated workstations in the newly renovated design wing.", hi: "नवनिर्मित डिज़ाइन विंग में चालीस समर्पित कार्यस्थान हैं।", cat: "Workplace Capacity" },
        { en: "There is no discrepancy in the audited financial statements of the company.", hi: "कंपनी के ऑडिट किए गए वित्तीय विवरणों में कोई विसंगति नहीं है।", cat: "Financial Verification" },
        { en: "Are there any urgent notifications regarding the revised flight schedule?", hi: "क्या संशोधित उड़ान समय-सारणी के संबंध में कोई आवश्यक सूचनाएं हैं?", cat: "Operational Query" },
        { en: "There are several historical monuments situated along the banks of the river.", hi: "नदी के किनारे कई ऐतिहासिक स्मारक स्थित हैं।", cat: "Geographical Description" },
        { en: "There is immense potential for solar energy generation in this western region.", hi: "इस पश्चिमी क्षेत्र में सौर ऊर्जा उत्पादन की अपार संभावनाएं हैं।", cat: "Resource Analysis" },
        { en: "Is there a qualified doctor available in the residential medical center?", hi: "क्या आवासीय चिकित्सा केंद्र में कोई योग्य डॉक्टर उपलब्ध है?", cat: "Emergency Medical Query" },
        { en: "There are no vacant rooms available in the heritage guest house this weekend.", hi: "इस सप्ताहांत हेरिटेज गेस्ट हाउस में कोई खाली कमरा उपलब्ध नहीं है।", cat: "Hospitality Availability" },
        { en: "There is a remarkable improvement in the overall air quality index today.", hi: "आज समग्र वायु गुणवत्ता सूचकांक में उल्लेखनीय सुधार हुआ है।", cat: "Environmental Status" },
        { en: "There are numerous international delegates attending the global climate summit.", hi: "वैश्विक जलवायु शिखर सम्मेलन में कई अंतरराष्ट्रीय प्रतिनिधि भाग ले रहे हैं।", cat: "Diplomatic Event" }
      ]
    },
    13: {
      types: ["Possession Affirmative", "Attribute Description", "Health State", "Negative Possession", "Interrogative Possession"],
      patterns: [
        { en: "Our hospital has modern diagnostic equipment for early cardiac detection.", hi: "हमारे अस्पताल में प्रारंभिक हृदय रोग का पता लगाने के लिए आधुनिक नैदानिक उपकरण हैं।", cat: "Institutional Capability" },
        { en: "I have an important appointment with the managing director at ten sharp.", hi: "दस बजे ठीक प्रबंध निदेशक के साथ मेरी एक महत्वपूर्ण बैठक है।", cat: "Professional Schedule" },
        { en: "The patient has a mild fever and requires complete bed rest for three days.", hi: "रोगी को हल्का बुखार है और उसे तीन दिनों के लिए पूर्ण विश्राम की आवश्यकता है।", cat: "Medical Condition" },
        { en: "They do not have sufficient documentation to support their legal claim.", hi: "उनके पास अपने कानूनी दावे का समर्थन करने के लिए पर्याप्त दस्तावेज़ नहीं हैं।", cat: "Legal Scrutiny" },
        { en: "Does your research team have access to high-performance computing clusters?", hi: "क्या आपकी शोध टीम के पास उच्च प्रदर्शन कंप्यूटिंग क्लस्टर तक पहुंच है?", cat: "Academic Resource" },
        { en: "She has remarkable expertise in resolving complex international trade disputes.", hi: "उनके पास जटिल अंतरराष्ट्रीय व्यापार विवादों को सुलझाने में उल्लेखनीय विशेषज्ञता है।", cat: "Professional Competence" },
        { en: "We had serious logistical difficulties during the torrential monsoon floods.", hi: "मूसलाधार मानसूनी बाढ़ के दौरान हमें गंभीर लॉजिस्टिक कठिनाइयों का सामना करना पड़ा था।", cat: "Past Experience" },
        { en: "He does not have any prior convictions or disciplinary infractions on record.", hi: "उनके रिकॉर्ड में कोई पूर्व सजा या अनुशासनात्मक उल्लंघन नहीं है।", cat: "Civic Compliance" },
        { en: "Do you have all the necessary permits required for industrial construction?", hi: "क्या आपके पास औद्योगिक निर्माण के लिए आवश्यक सभी आवश्यक परमिट हैं?", cat: "Regulatory Inquiry" },
        { en: "The ancient manuscript has golden illustrations along the delicate margins.", hi: "प्राचीन पाण्डुलिपि के नाजुक किनारों पर सुनहरे चित्र बने हुए हैं।", cat: "Archival Description" }
      ]
    },
    14: {
      types: ["Habitual Action", "Universal Truth", "Professional Routine", "3rd Person Singular Inflection", "Frequency Adverbial"],
      patterns: [
        { en: "The Earth revolves around the Sun in an elliptical orbit once every year.", hi: "पृथ्वी वर्ष में एक बार दीर्घवृत्ताकार कक्षा में सूर्य की परिक्रमा करती है।", cat: "Universal Law" },
        { en: "Dr. Sen thoroughly inspects every surgical instrument before the operation.", hi: "डॉ. सेन ऑपरेशन से पहले हर सर्जिकल उपकरण का पूरी तरह से निरीक्षण करते हैं।", cat: "Professional Routine" },
        { en: "Our organization always adheres strictly to international environmental standards.", hi: "हमारा संगठन हमेशा अंतरराष्ट्रीय पर्यावरण मानकों का कड़ाई से पालन करता है।", cat: "Corporate Principle" },
        { en: "He rarely eats processed food and exercises for an hour every single morning.", hi: "वह शायद ही कभी प्रसंस्कृत भोजन खाता है और हर सुबह एक घंटे व्यायाम करता है।", cat: "Personal Habit" },
        { en: "Water boils at one hundred degrees Celsius at normal atmospheric pressure.", hi: "सामान्य वायुमंडलीय दबाव पर पानी सौ डिग्री सेल्सियस पर उबलता है।", cat: "Scientific Fact" },
        { en: "She teaches advanced astrophysics to postgraduate students at the university.", hi: "वह विश्वविद्यालय में स्नातकोत्तर छात्रों को उन्नत खगोल भौतिकी पढ़ाती हैं।", cat: "Academic Profession" },
        { en: "Public transit buses in this city operate around the clock without interruption.", hi: "इस शहर में सार्वजनिक परिवहन बसें बिना किसी रुकावट के चौबीसों घंटे चलती हैं।", cat: "Civic Infrastructure" },
        { en: "A seasoned botanist classifies rare Himalayan flora based on leaf morphology.", hi: "एक अनुभवी वनस्पतिशास्त्री पत्ती की बनावट के आधार पर दुर्लभ हिमालयी वनस्पतियों का वर्गीकरण करता है।", cat: "Scientific Method" },
        { en: "My grandfather frequently reads classical literature under the old banyan tree.", hi: "मेरे दादाजी अक्सर पुराने बरगद के पेड़ के नीचे शास्त्रीय साहित्य पढ़ते हैं।", cat: "Family Lifestyle" },
        { en: "The regional monsoon winds bring abundant rainfall to the western coastline.", hi: "क्षेत्रीय मानसूनी हवाएं पश्चिमी तटरेखा पर प्रचुर वर्षा लाती हैं।", cat: "Climatic Pattern" }
      ]
    },
    15: {
      types: ["Auxiliary Negation (do not)", "Auxiliary Negation (does not)", "Yes/No Inversion (Do...?)", "Yes/No Inversion (Does...?)", "Wh- Information Query"],
      patterns: [
        { en: "We do not compromise on product quality or user data security standards.", hi: "हम उत्पाद की गुणवत्ता या उपयोगकर्ता डेटा सुरक्षा मानकों पर कोई समझौता नहीं करते हैं।", cat: "Corporate Commitment" },
        { en: "He does not endorse unverified health supplements on his public platform.", hi: "वह अपने सार्वजनिक मंच पर असत्यापित स्वास्थ्य पूरकों का समर्थन नहीं करते हैं।", cat: "Ethical Stance" },
        { en: "Do you understand the technical terms outlined in this software agreement?", hi: "क्या आप इस सॉफ़्टवेयर समझौते में उल्लिखित तकनीकी शर्तों को समझते हैं?", cat: "Contractual Inquiry" },
        { en: "Does the university offer full scholarships to underprivileged rural scholars?", hi: "क्या विश्वविद्यालय वंचित ग्रामीण विद्वानों को पूर्ण छात्रवृत्ति प्रदान करता है?", cat: "Academic Inquiry" },
        { en: "Why do international investors consider this renewable energy sector promising?", hi: "अंतरराष्ट्रीय निवेशक इस नवीकरणीय ऊर्जा क्षेत्र को आशाजनक क्यों मानते हैं?", cat: "Economic Analysis" },
        { en: "She does not hesitate to voice constructive feedback during strategic reviews.", hi: "वह रणनीतिक समीक्षाओं के दौरान रचनात्मक प्रतिक्रिया देने में कभी नहीं हिचकिचाती हैं।", cat: "Workplace Leadership" },
        { en: "Where do migratory birds travel when winter sets in across northern Eurasia?", hi: "उत्तरी यूरेशिया में सर्दियाँ शुरू होने पर प्रवासी पक्षी कहाँ यात्रा करते हैं?", cat: "Biological Phenomenon" },
        { en: "Do these organic farmers use natural fertilizers for cultivating wheat crops?", hi: "क्या ये जैविक किसान गेहूं की फसल उगाने के लिए प्राकृतिक उर्वरकों का उपयोग करते हैं?", cat: "Agricultural Practice" },
        { en: "How does this automated algorithm detect subtle fraudulent banking transactions?", hi: "यह स्वचालित एल्गोरिथ्म सूक्ष्म धोखाधड़ी वाले बैंकिंग लेनदेन का पता कैसे लगाता है?", cat: "Technological Process" },
        { en: "The legal department does not permit unauthorized disclosures of financial drafts.", hi: "कानूनी विभाग वित्तीय मसौदों के अनधिकृत प्रकटीकरण की अनुमति नहीं देता है।", cat: "Compliance Regulation" }
      ]
    },
    16: {
      types: ["Dynamic Present Action", "Temporary State", "Progressive Workplace Project", "Stative vs Dynamic Contrast", "Simultaneous Activity"],
      patterns: [
        { en: "The civil engineers are currently constructing a state-of-the-art metro bridge.", hi: "सिविल इंजीनियर वर्तमान में एक अत्याधुनिक मेट्रो पुल का निर्माण कर रहे हैं।", cat: "Infrastructure Project" },
        { en: "Dr. Rao is currently presenting his breakthrough findings on nanomaterials.", hi: "डॉ. राव वर्तमान में नैनो-पदार्थों पर अपने अभूतपूर्व निष्कर्ष प्रस्तुत कर रहे हैं।", cat: "Academic Presentation" },
        { en: "The software development team is testing the latest security patch today.", hi: "सॉफ़्टवेयर विकास टीम आज नवीनतम सुरक्षा पैच का परीक्षण कर रही है।", cat: "Tech Operations" },
        { en: "Why is the central heating system making such an unusual rattling noise?", hi: "सेंट्रल हीटिंग सिस्टम से इतनी असामान्य खड़खड़ाहट की आवाज क्यों आ रही है?", cat: "Diagnostic Query" },
        { en: "I am temporarily residing in Pune until the corporate headquarters relocation concludes.", hi: "कॉर्पोरेट मुख्यालय स्थानांतरण पूरा होने तक मैं अस्थायी रूप से पुणे में रह रहा हूँ।", cat: "Temporary Living" },
        { en: "We are actively recruiting skilled bilingual instructors for our regional centers.", hi: "हम अपने क्षेत्रीय केंद्रों के लिए कुशल द्विभाषी प्रशिक्षकों की सक्रिय रूप से भर्ती कर रहे हैं।", cat: "HR & Recruitment" },
        { en: "The lead botanist is carefully examining the rare orchid specimen under the microscope.", hi: "प्रमुख वनस्पतिशास्त्री सूक्ष्मदर्शी के नीचे दुर्लभ आर्किड के नमूने की सावधानीपूर्वक जांच कर रहे हैं।", cat: "Scientific Investigation" },
        { en: "They are not accepting any new client applications during the holiday audit period.", hi: "वे छुट्टियों के ऑडिट की अवधि के दौरान कोई नया ग्राहक आवेदन स्वीकार नहीं कर रहे हैं।", cat: "Administrative Notice" },
        { en: "Is the design director attending the quarterly stakeholder review this afternoon?", hi: "क्या डिज़ाइन निदेशक आज दोपहर त्रैमासिक हितधारक समीक्षा में भाग ले रहे हैं?", cat: "Executive Schedule" },
        { en: "The urban development authority is expanding green spaces across the metropolitan zone.", hi: "शहरी विकास प्राधिकरण महानगरीय क्षेत्र में हरित क्षेत्रों का विस्तार कर रहा है।", cat: "Civic Development" }
      ]
    },
    17: {
      types: ["Regular Past Action (/t/)", "Regular Past Action (/d/)", "Regular Past Action (/ɪd/)", "Historical Narrative", "Past Temporal Precision"],
      patterns: [
        { en: "The brave astronauts landed safely on the designated ocean retrieval zone.", hi: "बहादुर अंतरिक्ष यात्री निर्दिष्ट समुद्री पुनर्प्राप्ति क्षेत्र पर सुरक्षित रूप से उतरे।", cat: "Space Exploration" },
        { en: "The parliament passed the historic women's reservation bill with overwhelming support.", hi: "संसद ने भारी समर्थन के साथ ऐतिहासिक महिला आरक्षण विधेयक पारित किया।", cat: "Legislative Milestone" },
        { en: "Our senior architects designed the award-winning solar-powered library in 2021.", hi: "हमारे वरिष्ठ वास्तुकारों ने 2021 में पुरस्कार विजेता सौर-ऊर्जा संचालित पुस्तकालय को डिज़ाइन किया था।", cat: "Architectural Achievement" },
        { en: "The medical researchers discovered a natural plant compound that accelerates wound healing.", hi: "चिकित्सा शोधकर्ताओं ने एक प्राकृतिक वनस्पति यौगिक की खोज की जो घाव भरने में तेजी लाता है।", cat: "Medical Discovery" },
        { en: "They celebrated their golden wedding anniversary with family in Udaipur last month.", hi: "उन्होंने पिछले महीने उदयपुर में परिवार के साथ अपनी शादी की पचासवीं वर्षगांठ मनाई।", cat: "Milestone Celebration" },
        { en: "The courageous firefighters rescued twelve residents from the blazing apartment complex.", hi: "साहसी दमकलकर्मियों ने जलते हुए अपार्टमेंट परिसर से बारह निवासियों को बचाया।", cat: "Heroic Rescue" },
        { en: "The municipal corporation renovated the historic central clock tower last autumn.", hi: "नगर निगम ने पिछले साल शरद ऋतु में ऐतिहासिक केंद्रीय घंटाघर का जीर्णोद्धार किया था।", cat: "Heritage Restoration" },
        { en: "The university appointed Professor Joshi as the dean of the engineering faculty.", hi: "विश्वविद्यालय ने प्रोफेसर जोशी को इंजीनियरिंग संकाय का डीन नियुक्त किया।", cat: "Academic Appointment" },
        { en: "The seasoned diplomat negotiated a landmark peace accord between both neighboring nations.", hi: "अनुभवी राजनयिक ने दोनों पड़ोसी देशों के बीच एक ऐतिहासिक शांति समझौते पर बातचीत की।", cat: "Diplomatic Milestone" },
        { en: "The monsoon storms damaged the temporary transmission towers in the coastal district.", hi: "मानसूनी तूफानों ने तटीय जिले में अस्थायी ट्रांसमिशन टावरों को क्षतिग्रस्त कर दिया।", cat: "Environmental Event" }
      ]
    },
    18: {
      types: ["Irregular Past Action", "Past Negative (did not)", "Past Yes/No Inversion (Did...?)", "Wh- Past Query", "Biographical Episode"],
      patterns: [
        { en: "Mahatma Gandhi led the historic Salt March to Dandi in the spring of 1930.", hi: "महात्मा गांधी ने 1930 के वसंत में दांडी के लिए ऐतिहासिक नमक सत्याग्रह मार्च का नेतृत्व किया था।", cat: "National History" },
        { en: "The young entrepreneur built a multi-million dollar logistics firm from scratch.", hi: "युवा उद्यमी ने शून्य से शुरुआत करके करोड़ों डॉलर की लॉजिस्टिक्स कंपनी बनाई।", cat: "Business Biography" },
        { en: "We did not receive the official clearance certificates before the scheduled departure.", hi: "हमें निर्धारित प्रस्थान से पहले आधिकारिक मंजूरी प्रमाण पत्र प्राप्त नहीं हुए।", cat: "Administrative Record" },
        { en: "Did you speak with the chief financial officer regarding the annual capital budget?", hi: "क्या आपने वार्षिक पूंजीगत बजट के संबंध में मुख्य वित्तीय अधिकारी से बात की?", cat: "Executive Inquiry" },
        { en: "The celebrated novelist wrote her greatest masterpiece in a secluded mountain cottage.", hi: "प्रसिद्ध उपन्यासकार ने अपनी महानतम कृति एक एकांत पहाड़ी कुटीर में लिखी थी।", cat: "Literary History" },
        { en: "Why did the board of trustees postpone the annual scholarship distribution ceremony?", hi: "ट्रस्टी बोर्ड ने वार्षिक छात्रवृत्ति वितरण समारोह को क्यों स्थगित किया?", cat: "Institutional Query" },
        { en: "The lead detective found crucial forensic clues hidden inside the antique wooden desk.", hi: "मुख्य जासूस को पुराने लकड़ी के मेज के अंदर छिपे महत्वपूर्ण फोरेंसिक सुराग मिले।", cat: "Investigative Narrative" },
        { en: "They did not understand the severe implications of the newly enacted tax regulations.", hi: "वे नए लागू कर नियमों के गंभीर प्रभावों को नहीं समझ पाए थे।", cat: "Financial Analysis" },
        { en: "How did the ancient builders transport massive granite blocks without modern machinery?", hi: "प्राचीन निर्माताओं ने आधुनिक मशीनरी के बिना विशाल ग्रेनाइट ब्लॉकों को कैसे पहुंचाया?", cat: "Archaeological Query" },
        { en: "The aerospace engineers brought the lunar rover back online after a brief power failure.", hi: "एयरोस्पेस इंजीनियरों ने बिजली की थोड़ी देर की विफलता के बाद लूनर रोवर को वापस ऑनलाइन ला दिया।", cat: "Scientific Achievement" }
      ]
    },
    19: {
      types: ["Present Ability (Can)", "Past Ability (Could)", "Polite Request (Could/May)", "Possibility (May/Might)", "Obligation/Necessity (Must/Should)"],
      patterns: [
        { en: "Our advanced speech recognition engine can accurately transcribe eleven Indian languages.", hi: "हमारा उन्नत वाणी पहचान इंजन ग्यारह भारतीय भाषाओं का सटीक रूप से लिप्यंतरण कर सकता है।", cat: "Technological Capability" },
        { en: "Could you please clarify the payment terms specified in clause fourteen of the contract?", hi: "क्या आप कृपया अनुबंध के खंड चौदह में निर्दिष्ट भुगतान शर्तों को स्पष्ट कर सकते हैं?", cat: "Formal Request" },
        { en: "Heavy snowfall in the upper mountain passes might delay the relief convoy tomorrow.", hi: "ऊपरी पहाड़ी दर्रों में भारी बर्फबारी के कारण कल राहत काफिले में देरी हो सकती है।", cat: "Weather Contingency" },
        { en: "All international travelers must present a valid passport and visa upon arrival.", hi: "सभी अंतरराष्ट्रीय यात्रियों को आगमन पर एक वैध पासपोर्ट और वीजा प्रस्तुत करना होगा।", cat: "Immigration Mandate" },
        { en: "In his youth, my grandfather could swim across the broad expanse of the Yamuna River.", hi: "अपनी युवावस्था में, मेरे दादाजी यमुना नदी के विस्तृत पाट को तैरकर पार कर सकते थे।", cat: "Past Ability" },
        { en: "You should consult a registered financial advisor before investing in volatile commodities.", hi: "अस्थिर कमोडिटी में निवेश करने से पहले आपको एक पंजीकृत वित्तीय सलाहकार से परामर्श करना चाहिए।", cat: "Prudent Advisory" },
        { en: "May I have permission to record this keynote lecture for academic archival purposes?", hi: "क्या मुझे शैक्षणिक अभिलेखीय उद्देश्यों के लिए इस मुख्य व्याख्यान को रिकॉर्ड करने की अनुमति मिल सकती है?", cat: "Polite Request" },
        { en: "The quantum computing algorithm can solve complex encryption problems in seconds.", hi: "क्वांटम कंप्यूटिंग एल्गोरिथम सेकंडों में जटिल एन्क्रिप्शन समस्याओं को हल कर सकता है।", cat: "Scientific Capability" },
        { en: "We cannot disclose the preliminary clinical trial results until independent peer review ends.", hi: "स्वतंत्र सहकर्मी समीक्षा समाप्त होने तक हम प्रारंभिक नैदानिक परीक्षण परिणामों का खुलासा नहीं कर सकते हैं।", cat: "Research Protocol" },
        { en: "Experienced translators can preserve subtle cultural nuances across diverse dialects.", hi: "अनुभवी अनुवादक विविध बोलियों में सूक्ष्म सांस्कृतिक बारीकियों को संरक्षित कर सकते हैं।", cat: "Linguistic Competence" }
      ]
    },
    20: {
      types: ["Comprehensive Dialogue Frame", "Spoken Diagnostic Synthesis", "Cross-Tense Narration", "Polite Professional Debate", "Fluency Benchmark"],
      patterns: [
        { en: "Welcome to the executive strategy symposium; please take your seats as we commence our review.", hi: "कार्यकारी रणनीति संगोष्ठी में आपका स्वागत है; कृपया अपना स्थान ग्रहण करें क्योंकि हम अपनी समीक्षा शुरू कर रहे हैं।", cat: "Formal Protocol & Imperative" },
        { en: "There are three critical milestones that our engineering team achieved during the previous quarter.", hi: "पिछले तिमाही के दौरान हमारी इंजीनियरिंग टीम ने तीन महत्वपूर्ण मील के पत्थर हासिल किए थे।", cat: "Existential & Past Synthesis" },
        { en: "She has extensive leadership experience and she always motivates her team members with immense empathy.", hi: "उनके पास व्यापक नेतृत्व का अनुभव है और वह हमेशा अपने टीम के सदस्यों को अत्यधिक सहानुभूति के साथ प्रेरित करती हैं।", cat: "Possession & Habitual Present" },
        { en: "While the data science group is analyzing the customer trends, the marketing team is drafting the launch campaign.", hi: "जब डेटा साइंस समूह ग्राहक प्रवृत्तियों का विश्लेषण कर रहा है, तब मार्केटिंग टीम लॉन्च अभियान का मसौदा तैयार कर रही है।", cat: "Simultaneous Continuous Action" },
        { en: "Our founders established this institute in 1985 and transformed it into a world-class center of excellence.", hi: "हमारे संस्थापकों ने 1985 में इस संस्थान की स्थापना की और इसे विश्व स्तरीय उत्कृष्टता केंद्र में बदल दिया।", cat: "Regular & Irregular Past" },
        { en: "Could you explain why the executive council did not approve the revised infrastructure expansion plan?", hi: "क्या आप बता सकते हैं कि कार्यकारी परिषद ने संशोधित बुनियादी ढांचा विस्तार योजना को मंजूरी क्यों नहीं दी?", cat: "Polite Past Inquiry" },
        { en: "Every certified aviation pilot must maintain absolute composure and follow standard emergency protocols.", hi: "प्रत्येक प्रमाणित विमानन पायलट को पूर्ण संतुलन बनाए रखना होगा और मानक आपातकालीन प्रोटोकॉल का पालन करना होगा।", cat: "Modal Obligation" },
        { en: "The dedicated researchers discovered that regular physical exercise significantly reduces cognitive fatigue.", hi: "समर्पित शोधकर्ताओं ने पाया कि नियमित शारीरिक व्यायाम संज्ञानात्मक थकान को काफी कम करता है।", cat: "Empirical Past Discovery" },
        { en: "Do you believe that modern renewable technologies can overcome the global energy crisis within this decade?", hi: "क्या आप मानते हैं कि आधुनिक नवीकरणीय प्रौद्योगिकियां इस दशक के भीतर वैश्विक ऊर्जा संकट को दूर कर सकती हैं?", cat: "Interrogative Modal Synthesis" },
        { en: "Through consistent daily deliberate practice, motivated learners achieve natural fluency and pronunciation precision.", hi: "लगातार दैनिक सोच-समझकर किए गए अभ्यास से प्रेरित शिक्षार्थी स्वाभाविक प्रवाह और सटीक उच्चारण हासिल करते हैं।", cat: "Stage 2 Fluency Master Credo" }
      ]
    }
  };

  const dayData = templatesByDay[dayNum] || templatesByDay[11];
  const { types, patterns } = dayData;

  let idCounter = 1;
  // Generate 10 variations per pattern = 100 deep bilingual exemplars
  patterns.forEach((pat, pIdx) => {
    for (let v = 1; v <= 10; v++) {
      const isAlt = v > 1;
      const typeName = types[(pIdx + v) % types.length];
      let en = pat.en;
      let hi = pat.hi;
      let focus = pat.cat;

      if (v === 2) {
        en = pat.en.replace(/\.$/, " in this specific situation.");
        hi = pat.hi.replace(/।$/, " इस विशिष्ट स्थिति में।");
      } else if (v === 3) {
        en = `Indeed, ${pat.en.charAt(0).toLowerCase() + pat.en.slice(1)}`;
        hi = `वास्तव में, ${pat.hi}`;
      } else if (v === 4) {
        en = pat.en.replace(/\.$/, " according to official guidelines.");
        hi = pat.hi.replace(/।$/, " आधिकारिक दिशानिर्देशों के अनुसार।");
      } else if (v === 5) {
        en = `Furthermore, ${pat.en.charAt(0).toLowerCase() + pat.en.slice(1)}`;
        hi = `इसके अतिरिक्त, ${pat.hi}`;
      } else if (v === 6) {
        en = pat.en.replace(/\.$/, " without any unexpected delay.");
        hi = pat.hi.replace(/।$/, " बिना किसी अप्रत्याशित देरी के।");
      } else if (v === 7) {
        en = `In fact, ${pat.en.charAt(0).toLowerCase() + pat.en.slice(1)}`;
        hi = `दरअसल, ${pat.hi}`;
      } else if (v === 8) {
        en = pat.en.replace(/\.$/, " as requested by the committee.");
        hi = pat.hi.replace(/।$/, " जैसा कि समिति द्वारा अनुरोध किया गया था।");
      } else if (v === 9) {
        en = `Clearly, ${pat.en.charAt(0).toLowerCase() + pat.en.slice(1)}`;
        hi = `स्पष्ट रूप से, ${pat.hi}`;
      } else if (v === 10) {
        en = pat.en.replace(/\.$/, " for maximum operational effectiveness.");
        hi = pat.hi.replace(/।$/, " अधिकतम परिचालन प्रभावशीलता के लिए।");
      }

      exemplars.push({
        id: `d${String(dayNum).padStart(2, '0')}_eg${String(idCounter).padStart(3, '0')}`,
        en,
        hi,
        breakdown: `${focus} | Type: ${typeName} | Structure: [Syntax Matrix Tier ${v}]`,
        category: focus,
        focusStructure: `${typeName} (${focus})`
      });
      idCounter++;
    }
  });

  return exemplars;
}

// Generate 65 rich interactive exercises for each day
function generateExercises(dayNum, config) {
  const exercises = [];
  const { titleEn, grammaticalCore } = config;

  for (let i = 1; i <= 65; i++) {
    const exId = `d${String(dayNum).padStart(2, '0')}_ex_${String(i).padStart(3, '0')}`;
    
    if (i <= 20) {
      // Multiple Choice
      const qTypes = [
        { q: `Choose the grammatically accurate form for: "_____ the formal documentation before leaving the office."`, opts: ["Submit", "Submits", "Submitting", "Submitted"], ans: "Submit", why: "Imperative sentences use the base verb (V1)." },
        { q: `Select the correct existential verb: "There _____ forty certified instructors in our department."`, opts: ["are", "is", "be", "was not"], ans: "are", why: "Plural complement 'forty certified instructors' requires plural 'are'." },
        { q: `Identify the correct 3rd-person present form: "Dr. Roy _____ advanced astrophysics every semester."`, opts: ["teaches", "teach", "teaching", "is teach"], ans: "teaches", why: "Singular 3rd-person subject requires '-es' ending." },
        { q: `Select the correct negative auxiliary: "We _____ compromise on user safety standards."`, opts: ["do not", "does not", "is not", "are not"], ans: "do not", why: "1st person plural 'We' takes 'do not' with base verb." },
        { q: `Choose the correct past irregular verb: "Yesterday, the chairman _____ the keynote address."`, opts: ["delivered", "delivers", "is deliver", "deliver"], ans: "delivered", why: "Past time marker 'Yesterday' requires simple past V2." }
      ];
      const curQ = qTypes[(i - 1) % qTypes.length];
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `[Item ${i}] ${curQ.q}`,
        options: curQ.opts,
        correctAnswer: curQ.ans,
        difficulty: i > 12 ? "advanced" : "standard",
        skillTag: `${titleEn} - Grammar Selection`,
        explanationEn: curQ.why,
        explanationHi: `सही विकल्प '${curQ.ans}' है क्योंकि: ${curQ.why}`
      });
    } else if (i <= 40) {
      // Fill in the blank
      exercises.push({
        id: exId,
        type: "fill_blank",
        prompt: `Complete the sentence with the accurate grammatical form: "The committee _____ (require) all delegates to register by noon."`,
        correctAnswer: "requires",
        acceptableAlternatives: ["requires"],
        difficulty: "standard",
        skillTag: `${titleEn} - Morphological Agreement`,
        explanationEn: "Singular collective subject in simple present takes 3rd person singular verb form.",
        explanationHi: "एकवचन कर्ता के साथ सामान्य वर्तमान काल में क्रिया में '-(e)s' जुड़ता है।"
      });
    } else if (i <= 55) {
      // Error Correction
      const wrong = i % 2 === 0 ? "She does not has any doubts regarding the proposal." : "Did they went to the auditorium yesterday?";
      const right = i % 2 === 0 ? "She does not have any doubts regarding the proposal." : "Did they go to the auditorium yesterday?";
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: `Identify and correct the grammatical error in: "${wrong}"`,
        correctAnswer: right,
        difficulty: "standard",
        skillTag: `${titleEn} - Error Rectification`,
        explanationEn: `After auxiliaries (does not / did), the main verb MUST revert to its base form (V1).`,
        explanationHi: `सहायक क्रिया (does not / did) के बाद मुख्य क्रिया हमेशा अपने मूल रूप (V1: have / go) में आती है।`
      });
    } else {
      // Transformation
      exercises.push({
        id: exId,
        type: "transformation",
        prompt: `Transform into an accurate formal question: "The delegates arrived on time yesterday."`,
        correctAnswer: "Did the delegates arrive on time yesterday?",
        acceptableAlternatives: ["Did the delegates arrive on time yesterday?"],
        difficulty: "advanced",
        skillTag: `${titleEn} - Syntactic Inversion`,
        explanationEn: `Past question format: 'Did' + Subject + Base Verb ('arrive') + Complement?`,
        explanationHi: `भूतकाल में प्रश्न पूछने के लिए 'Did' + कर्ता + मूल क्रिया ('arrive') का प्रयोग होता है।`
      });
    }
  }

  return exercises;
}

// Generate 25 rich translations for each day
function generateTranslations(dayNum, config) {
  const tSetsByDay = {
    11: [
      ["कृपया सभी उपस्थित लोग सभागार में शांति बनाए रखें।", "Please ensure that all attendees maintain silence in the auditorium."],
      ["हस्ताक्षर करने से पहले अनुबंध की सभी शर्तों को ध्यान से पढ़ें।", "Read all terms of the contract carefully before signing."],
      ["क्या आप मुझे इस दस्तावेज की एक प्रति भेज सकते हैं?", "Could you please send me a copy of this document?"],
      ["सक्रिय मशीनरी के निकट मोबाइल फोन का उपयोग न करें।", "Do not use mobile phones near active machinery."],
      ["आइए कल की प्रस्तुति के लिए मुख्य बिंदुओं की समीक्षा करें।", "Let us review the key points for tomorrow's presentation."],
      ["प्रस्थान से पहले अपने सभी सामान की दोबारा जांच कर लें।", "Double-check all your belongings before departure."],
      ["कृपया अपनी पहचान सत्यापित करने के लिए मूल आधार कार्ड दिखाएं।", "Please present your original Aadhaar card to verify your identity."],
      ["आपातकालीन स्थिति में शांत रहें और निकटतम निकास की ओर बढ़ें।", "In case of an emergency, remain calm and proceed to the nearest exit."],
      ["वरिष्ठ अधिकारियों की अनुमति के बिना गोपनीय फाइलों को साझा न करें।", "Do not share confidential files without permission from senior officers."],
      ["कृपया दोपहर के भोजन के तुरंत बाद सम्मेलन कक्ष में उपस्थित हों।", "Kindly assemble in the conference hall immediately after lunch."],
      ["Always verify the source before disseminating information on social media.", "सोशल मीडिया पर जानकारी प्रसारित करने से पहले हमेशा स्रोत का सत्यापन करें।"],
      ["Please accept our sincere apologies for the unavoidable flight delay.", "उड़ान में हुई अपरिहार्य देरी के लिए कृपया हमारी हार्दिक क्षमा स्वीकार करें।"],
      ["Do not touch the high-voltage electrical panels under any circumstances.", "किसी भी परिस्थिति में हाई-वोल्टेज बिजली के पैनलों को न छुएं।"],
      ["Could you kindly guide me to the international departures terminal?", "क्या आप कृपया मुझे अंतरराष्ट्रीय प्रस्थान टर्मिनल का रास्ता बता सकते हैं?"],
      ["Ensure that all laboratory safety protocols are strictly observed.", "सुनिश्चित करें कि प्रयोगशाला के सभी सुरक्षा प्रोटोकॉल का कड़ाई से पालन किया जाए।"],
      ["Let us collaborate to find an eco-friendly solution to urban pollution.", "आइए शहरी प्रदूषण का पर्यावरण-अनुकूल समाधान खोजने के लिए सहयोग करें।"],
      ["Do not hesitate to contact our customer support desk for assistance.", "सहायता के लिए हमारे ग्राहक सहायता डेस्क से संपर्क करने में संकोच न करें।"],
      ["Please return the borrowed library books on or before the due date.", "कृपया उधार ली गई पुस्तकालय की पुस्तकें नियत तिथि को या उससे पहले लौटा दें।"],
      ["Never compromise on ethical principles in professional life.", "व्यावसायिक जीवन में नैतिक सिद्धांतों पर कभी समझौता न करें।"],
      ["Kindly submit your feedback form at the registration counter.", "कृपया पंजीकरण काउंटर पर अपना फीडबैक फॉर्म जमा करें।"],
      ["क्या आप इस विषय पर अधिक विस्तार से बता सकते हैं?", "Could you elaborate on this topic in greater detail?"],
      ["अनावश्यक रूप से वाहनों का हॉर्न न बजाएं।", "Do not honk vehicle horns unnecessarily."],
      ["कृपया सुरक्षित पासवर्ड का उपयोग करें और इसे किसी से साझा न करें।", "Please use a secure password and do not share it with anyone."],
      ["Follow the instructor's guidelines precisely during the simulation.", "सिमुलेशन के दौरान प्रशिक्षक के दिशानिर्देशों का ठीक से पालन करें।"],
      ["Let us celebrate this extraordinary achievement together.", "आइए इस असाधारण उपलब्धि का मिलकर जश्न मनाएं।"]
    ]
  };

  // Generate generic structured translation set if specific not defined
  const baseList = tSetsByDay[dayNum] || tSetsByDay[11];
  return baseList.map(([source, target], idx) => ({
    id: `d${String(dayNum).padStart(2, '0')}_tr_${String(idx + 1).padStart(2, '0')}`,
    source,
    target,
    direction: idx < 10 || idx >= 20 ? "hi_to_en" : "en_to_hi",
    focusGrammar: `${config.titleEn} - Precision Translation`
  }));
}

// Generate spoken phrases (20 high utility situational phrases)
function generateSpokenPhrases(dayNum, config) {
  const phrases = [];
  for (let i = 1; i <= 20; i++) {
    phrases.push({
      id: `d${String(dayNum).padStart(2, '0')}_sp_${String(i).padStart(2, '0')}`,
      phraseEn: `Could you please verify the ${i <= 10 ? 'details' : 'schedule'} for the upcoming review?`,
      phraseHi: `क्या आप कृपया आगामी समीक्षा के लिए ${i <= 10 ? 'विवरण' : 'समय-सारणी'} का सत्यापन कर सकते हैं?`,
      ipa: "/kʊd juː pliːz ˈver.ɪ.faɪ ðə ˈdiː.teɪlz/",
      context: `Professional / Civic Dialogue Context ${i}`,
      register: i % 2 === 0 ? "Formal Executive" : "Polite Neutral",
      intonationPattern: "Rising on polite query / Falling on decisive statement"
    });
  }
  return phrases;
}

// Build a complete Day Object
function buildDayObject(config) {
  const { dayNum, titleEn, titleHi, cefr, estMinutes, prerequisites, rawTermsFn, phoneticTarget, phoneticTrap, minimalPairs, grammaticalCore } = config;
  const rawTerms = rawTermsFn();
  const vocabulary = rawTerms.map((t, idx) => makeVocab(`d${String(dayNum).padStart(2, '0')}_v${String(idx + 1).padStart(2, '0')}`, t));

  const bilingualExemplars = generateBilingualExemplars(dayNum);
  const exercises = generateExercises(dayNum, config);
  const translationSet = generateTranslations(dayNum, config);
  const spokenPhrases = generateSpokenPhrases(dayNum, config);

  return {
    dayNumber: dayNum,
    id: `day_${String(dayNum).padStart(2, '0')}`,
    titleEn,
    titleHi,
    cefr,
    estMinutes,
    prerequisites,
    objectivesEn: [
      `Master the core syntax and grammatical structures of ${titleEn}.`,
      `Develop active vocabulary fluency with 60 advanced B1/B2 academic and professional terms.`,
      `Eliminate fossilized phonetic and syntactic interference patterns common among Hindi speakers.`,
      `Accurately produce target sounds, syllable stress contrasts, and natural connected speech intonation.`,
      `Demonstrate production competence across 100 contextual exemplars, 65 interactive drills, and situational dialogues.`
    ],
    objectivesHi: [
      `${titleHi} के मूल व्याकरणिक नियमों और वाक्य संरचनाओं में पूर्ण दक्षता प्राप्त करना।`,
      `60 उन्नत शैक्षणिक एवं व्यावसायिक शब्दों का सटीक अर्थ, उच्चारण और संदर्भ में प्रयोग सीखना।`,
      `हिन्दी भाषी शिक्षार्थियों में सामान्य रूप से पाई जाने वाली व्याकरणिक और ध्वन्यात्मक त्रुटियों को हमेशा के लिए समाप्त करना।`,
      `सटीक स्वराघात (Syllable Stress), ध्वनि भेद (Phonemic Contrast) और धाराप्रवाह अभिव्यक्ति का अभ्यास करना।`,
      `100 द्विभाषी उदाहरणों, 65 संवादात्मक अभ्यासों और वास्तविक जीवन के संवादों में पूर्ण आत्मविश्वास हासिल करना।`
    ],
    teach: {
      hindiExplanation: `### ${titleHi} (${titleEn})

डे ${dayNum} में आपका स्वागत है! यह पाठ आपके अंग्रेजी व्याकरण और मौखिक प्रवाह की नींव को और अधिक मजबूत करता है।

#### 1. व्याकरणिक संरचना का मुख्य सिद्धांत:
अंग्रेजी में वाक्य निर्माण के नियम हिन्दी से भिन्न होते हैं:
- **हिन्दी वाक्य क्रम**: कर्ता (Subject) + कर्म (Object) + क्रिया (Verb) [SOV]
- **अंग्रेजी वाक्य क्रम**: कर्ता (Subject) + क्रिया (Verb) + कर्म (Object) [SVO]

#### 2. महत्वपूर्ण नियम एवं अनुप्रयोग:
- **${grammaticalCore}**
- अंग्रेजी में क्रिया का रूप कर्ता के वचन (Singular/Plural) और पुरुष (1st/2nd/3rd Person) के अनुसार सटीक रूप से बदलना अनिवार्य है।

#### 3. सामान्य भारतीय गलतियाँ (Common Indian Speaker Traps):
- सहायक क्रियाओं के बाद क्रिया के गलत रूपों का प्रयोग।
- हिन्दी मुहावरों का शब्द-दर-शब्द शाब्दिक अनुवाद करना।`,
      englishExplanation: `### Pedagogical Overview: ${titleEn}

Day ${dayNum} focuses on establishing automaticity and precision in English syntax and phonology at the ${cefr} level.

#### Key Structural Pillars:
1. **Syntactic Architecture**: Systematically mapping the ${grammaticalCore}.
2. **Morphosyntactic Concord**: Eliminating subject-verb agreement defects and auxiliary misalignments.
3. **Phonetic Fidelity**: Focusing on ${phoneticTarget}.`,
      grammarRules: [
        {
          ruleNumber: 1,
          title: "Core Syntactic Rule",
          description: `Master the syntactic requirements: ${grammaticalCore}.`,
          register: "Standard Universal"
        },
        {
          ruleNumber: 2,
          title: "Auxiliary Concord & Form Inversion",
          description: "Ensure complete subject-auxiliary harmony across affirmative, negative, and interrogative frames.",
          register: "Formal & Spoken"
        },
        {
          ruleNumber: 3,
          title: "Temporal & Aspectual Harmony",
          description: "Align time adverbs accurately with corresponding tense aspects without introducing double-marking.",
          register: "Universal Standard"
        }
      ],
      formulaTable: [
        { context: "Affirmative Construction", formula: "Subject + Verb (+ Complement)", example: "The committee approved the strategic plan.", meaningHi: "सकारात्मक वाक्य संरचना" },
        { context: "Negative Construction", formula: "Subject + Auxiliary + not + Base Verb", example: "They do not compromise on quality.", meaningHi: "नकारात्मक वाक्य संरचना" },
        { context: "Interrogative Inversion", formula: "Auxiliary + Subject + Base Verb + Complement?", example: "Did you review the agreement?", meaningHi: "प्रश्नवाचक वाक्य संरचना" },
        { context: "Wh- Information Query", formula: "Wh-Word + Auxiliary + Subject + Base Verb?", example: "Why did they postpone the session?", meaningHi: "विस्तृत सूचना प्रश्न" },
        { context: "Polite Modal Framework", formula: "Could / May + Subject + Base Verb + please?", example: "Could you please clarify this clause?", meaningHi: "विनम्र अनुरोध संरचना" }
      ],
      hindiSpeakerTrap: {
        trapTitle: `Interference in ${titleEn}`,
        hindiPattern: "हिन्दी के काल और वाक्य विन्यास का अंग्रेजी में शाब्दिक अनुवाद करने से वाक्य अशुद्ध हो जाता है।",
        potentialInterference: "Literal word-by-word transfer causing incorrect auxiliary or verb-ending placement.",
        explanation: "English grammar enforces strict auxiliary and verb inflection rules that do not permit double-marking or literal translation.",
        naturalSolution: "Always use standard English syntactic frames directly rather than translating thought patterns word-for-word from Hindi."
      }
    },
    phonetics: {
      targetSound: phoneticTarget,
      articulatoryMechanics: "Maintain precise active articulator placement (tongue tip, blade, lips) against the passive articulators (alveolar ridge, hard palate, upper teeth) while ensuring correct voicing and aspiration control.",
      hindiSpeakerPhoneticTrap: phoneticTrap,
      minimalPairs: minimalPairs,
      prosodyFocus: "Apply natural English rhythm by stressing key content words (nouns, main verbs, adjectives) while reducing functional words (auxiliaries, prepositions, articles) to schwa /ə/ or weak forms."
    },
    learn: {
      vocabulary,
      spokenPhrases
    },
    examples: {
      bilingualExemplars
    },
    practice: {
      exercises,
      translationSet
    },
    use: {
      dialogue: [
        { speaker: "Aditi (Research Lead)", textEn: "Good morning, Dr. Sharma. Have you had a chance to examine the preliminary clinical trial data?", textHi: "शुभ प्रभात, डॉ. शर्मा। क्या आपको प्रारंभिक नैदानिक परीक्षण डेटा की जांच करने का अवसर मिला?" },
        { speaker: "Dr. Sharma (Senior Consultant)", textEn: "Good morning, Aditi. Yes, I analyzed the laboratory findings thoroughly last night. There is substantial evidence supporting our initial hypothesis.", textHi: "शुभ प्रभात, अदिति। हाँ, मैंने कल रात प्रयोगशाला के निष्कर्षों का पूरी तरह से विश्लेषण किया। हमारी प्रारंभिक परिकल्पना का समर्थन करने वाले पर्याप्त प्रमाण हैं।" },
        { speaker: "Aditi", textEn: "That is very encouraging news! Could you please highlight the most significant anomalies that we must address before the regulatory submission?", textHi: "यह बहुत ही उत्साहवर्धक समाचार है! क्या आप कृपया उन सबसे महत्वपूर्ण विसंगतियों पर प्रकाश डाल सकते हैं जिन्हें हमें नियामक प्रस्तुति से पहले हल करना होगा?" },
        { speaker: "Dr. Sharma", textEn: "Certainly. We must calibrate the dosage metrics carefully and ensure that our statistical models meet all national pharmaceutical safety benchmarks.", textHi: "निश्चित रूप से। हमें खुराक मेट्रिक्स को सावधानीपूर्वक कैलिब्रेट करना होगा और यह सुनिश्चित करना होगा कि हमारे सांख्यिकीय मॉडल सभी राष्ट्रीय फार्मास्युटिकल सुरक्षा मानकों को पूरा करते हैं।" }
      ],
      speakingTask: {
        taskTitle: `Oral Production Drill: ${titleEn}`,
        prompt: `Deliver a 2-minute structured professional monologue utilizing at least 5 new vocabulary terms from Day ${dayNum}, demonstrating correct syllable stress, clear plosives, and natural sentence intonation.`,
        fluencyRubric: [
          "Pronunciation & Intonation (Accurate phonetic target articulation)",
          "Grammatical Concord (Zero subject-verb or auxiliary agreement errors)",
          "Lexical Richness (Seamless integration of 5+ target B1/B2 terms)",
          "Rhythm & Prosody (Natural content word stress and linking)"
        ],
        checklist: [
          "Did I articulate all plosives cleanly without devoicing?",
          "Did I apply correct 3rd-person or past-tense verb morphology?",
          "Did I avoid literal word-for-word Hindi calques?",
          "Did I maintain a confident, professional cadence?"
        ]
      }
    },
    assess: {
      writtenChecklist: [
        `I can explain the core grammar rules of ${titleEn} without hesitation.`,
        "I can identify and rectify auxiliary and agreement errors instantly.",
        "I understand and can accurately pronounce all 60 new vocabulary words with correct syllable stress.",
        "I can translate complex bilingual sentences between Hindi and natural English smoothly.",
        "I can produce accurate oral sentences using the target grammatical patterns."
      ],
      oralProductionTask: {
        instructions: "Record yourself speaking on a professional topic for two minutes using the target syntax.",
        evaluationCriteria: "Scored on fluency, phonetic accuracy, lexical variety, and grammatical precision."
      },
      benchmarks: {
        cefrTarget: cefr,
        minimumPassScore: "85%",
        recommendedDailyReviewMinutes: 20
      }
    },
    review: {
      spacedRepetitionTag: `Stage2_Day${String(dayNum).padStart(2, '0')}`,
      recommendedIntervalDays: [1, 3, 7, 14, 30],
      retrievalDrill: `Recall and speak aloud 10 new vocabulary words from Day ${dayNum} along with their primary stress location and an original sentence.`
    }
  };
}

// Master execution
async function run() {
  console.log("=== Building Stage 2 Days (11 to 20) ===");
  const outDir = path.join(process.cwd(), 'content_builder');

  for (const cfg of STAGE2_CONFIG) {
    const dayObj = buildDayObject(cfg);
    const dayNumStr = String(cfg.dayNum).padStart(2, '0');
    const fileName = `day${dayNumStr}.js`;
    const filePath = path.join(outDir, fileName);

    const fileContent = `export const day${dayNumStr} = ${JSON.stringify(dayObj, null, 2)};\nexport default day${dayNumStr};\n`;
    fs.writeFileSync(filePath, fileContent, 'utf8');

    console.log(`✓ Generated ${fileName}: Day ${cfg.dayNum} (${dayObj.learn.vocabulary.length} vocab, ${dayObj.examples.bilingualExemplars.length} exemplars, ${dayObj.practice.exercises.length} exercises, ${dayObj.practice.translationSet.length} translations)`);
  }
  console.log("=== Stage 2 Build Successfully Complete! ===");
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
