import fs from 'fs';
import path from 'path';

// Helper functions for building rich structured data
export function createDay01() {
  const vocabulary = [
    { id: "d01_v01", lemma: "morning", wordForm: "morning", pos: "noun", ipa: "/ˈmɔː.nɪŋ/", devanagari: "मॉर-निंग", syllables: "mor · ning (2)", stress: "1st Syllable (MOR-ning)", hindiMeaning: "सुबह / प्रभात (सूर्योदय से दोपहर 12 बजे तक)", register: "Universal / Standard", collocations: ["Good morning", "early morning", "this morning", "tomorrow morning"], relatedForms: [{ form: "morn", pos: "noun (poetic)" }], example: "Good morning, Dr. Sharma! Did you have a pleasant journey?", commonError: "Avoid pronouncing the ending as a hard 'g' (/mɔːrnɪŋɡ/); end smoothly with the velar nasal /ŋ/." },
    { id: "d01_v02", lemma: "afternoon", wordForm: "afternoon", pos: "noun", ipa: "/ˌɑːf.təˈnuːn/", devanagari: "आफ़-टर-नून", syllables: "af · ter · noon (3)", stress: "3rd Syllable (af-ter-NOON)", hindiMeaning: "दोपहर (दोपहर 12 बजे से शाम 5 बजे तक)", register: "Universal / Standard", collocations: ["Good afternoon", "in the afternoon", "yesterday afternoon", "late afternoon"], relatedForms: [], example: "Good afternoon, everyone! Please take your seats so we can begin the presentation.", commonError: "Do not stress the first syllable; secondary stress on 'af', primary stress on 'noon'." },
    { id: "d01_v03", lemma: "evening", wordForm: "evening", pos: "noun", ipa: "/ˈiːv.nɪŋ/", devanagari: "ईव-निंग", syllables: "eve · ning (2)", stress: "1st Syllable (EVE-ning)", hindiMeaning: "शाम / संध्या (शाम 5 बजे से रात तक मिलते समय)", register: "Universal / Standard", collocations: ["Good evening", "in the evening", "pleasant evening", "evening walk"], relatedForms: [], example: "Good evening, ladies and gentlemen! Welcome to our annual celebration.", commonError: "Never confuse with 'Good night'. 'Good evening' is used when arriving at 7 PM or 9 PM, never when parting." },
    { id: "d01_v04", lemma: "night", wordForm: "night", pos: "noun", ipa: "/naɪt/", devanagari: "नाइट", syllables: "night (1)", stress: "Single Syllable", hindiMeaning: "रात (केवल विदा लेते समय या सोने जाते समय)", register: "Universal / Standard", collocations: ["Good night", "at night", "late night", "sleep well at night"], relatedForms: [{ form: "nightly", pos: "adverb" }, { form: "nighttime", pos: "noun" }], example: "It was a wonderful dinner. Good night, and see you tomorrow morning!", commonError: "Never use 'Good night' as a greeting upon entering someone's home in the evening." },
    { id: "d01_v05", lemma: "greet", wordForm: "greet", pos: "verb", ipa: "/ɡriːt/", devanagari: "ग्रीट", syllables: "greet (1)", stress: "Single Syllable", hindiMeaning: "अभिवादन करना / नमस्कार करना", register: "Standard / Professional", collocations: ["greet warmly", "greet politely", "greet guests at the door"], relatedForms: [{ form: "greeting", pos: "noun" }, { form: "greeted", pos: "verb (past)" }], example: "Always greet the interviewer with a firm handshake and a pleasant smile.", commonError: "Do not say 'greet to someone'; say 'greet someone'." },
    { id: "d01_v06", lemma: "salutation", wordForm: "salutation", pos: "noun", ipa: "/ˌsæl.jəˈteɪ.ʃən/", devanagari: "सैल-यु-टे-शन", syllables: "sal · u · ta · tion (4)", stress: "3rd Syllable (sal-u-TA-tion)", hindiMeaning: "औपचारिक अभिवादन / संबोधन", register: "Formal / Administrative", collocations: ["formal salutation", "appropriate salutation", "letter salutation"], relatedForms: [{ form: "salute", pos: "verb" }], example: "Use a respectful salutation such as 'Dear Mr. Verma' when writing to a client.", commonError: "Stress the third syllable (-ta-), not the second." },
    { id: "d01_v07", lemma: "parting", wordForm: "parting", pos: "noun", ipa: "/ˈpɑː.tɪŋ/", devanagari: "पार-टिंग", syllables: "part · ing (2)", stress: "1st Syllable (PART-ing)", hindiMeaning: "विदाई / अलग होने की क्रिया", register: "Standard / Literary", collocations: ["parting words", "parting advice", "parting greeting"], relatedForms: [{ form: "part", pos: "verb" }], example: "His parting words were full of encouragement and warmth.", commonError: "Do not confuse with 'departure'; 'parting' emphasizes the emotional separation." },
    { id: "d01_v08", lemma: "pleased", wordForm: "pleased", pos: "adjective", ipa: "/pliːzd/", devanagari: "प्लीज़्ड", syllables: "pleased (1)", stress: "Single Syllable", hindiMeaning: "प्रसन्न / खुश / आनंदित", register: "Formal / Social", collocations: ["pleased to meet you", "very pleased", "pleased with the result"], relatedForms: [{ form: "please", pos: "verb" }, { form: "pleasure", pos: "noun" }], example: "I am extremely pleased to meet you after hearing so much about your work.", commonError: "Ensure the final /zd/ sound is voiced, not a flat /s/." },
    { id: "d01_v09", lemma: "colleague", wordForm: "colleague", pos: "noun", ipa: "/ˈkɒl.iːɡ/", devanagari: "कॉ-लीग", syllables: "col · league (2)", stress: "1st Syllable (COL-league)", hindiMeaning: "सहकर्मी (कार्यस्थल पर साथ काम करने वाला)", register: "Professional / Workplace", collocations: ["respected colleague", "work colleague", "former colleague", "senior colleague"], relatedForms: [], example: "Allow me to introduce my colleague, Ms. Ananya Sen, from the analytics team.", commonError: "Do not pronounce as 'co-league'; pronounce as /ˈkɒl.iːɡ/ with stress on the first syllable." },
    { id: "d01_v10", lemma: "acquaintance", wordForm: "acquaintance", pos: "noun", ipa: "/əˈkweɪn.təns/", devanagari: "अ-क्वेन-टन्स", syllables: "ac · quaint · ance (3)", stress: "2nd Syllable (ac-QUAINT-ance)", hindiMeaning: "परिचित व्यक्ति (जो मित्र नहीं पर जाना-पहचाना हो)", register: "Formal / Social", collocations: ["casual acquaintance", "make someone's acquaintance", "mutual acquaintance"], relatedForms: [{ form: "acquaint", pos: "verb" }, { form: "acquainted", pos: "adjective" }], example: "I am delighted to make your acquaintance, Mr. Kapoor.", commonError: "Do not say 'acquaintanced with'; use 'acquainted with'." },
    { id: "d01_v11", lemma: "farewell", wordForm: "farewell", pos: "noun", ipa: "/ˌfeəˈwel/", devanagari: "फ़ेयर-वेल", syllables: "fare · well (2)", stress: "2nd Syllable (fare-WELL)", hindiMeaning: "विदाई समारोह / अंतिम विदा", register: "Formal / Emotional", collocations: ["bid farewell", "farewell party", "farewell speech"], relatedForms: [], example: "The entire department gathered to bid farewell to our retiring director.", commonError: "Primary stress is on the second syllable 'well'." },
    { id: "d01_v12", lemma: "regards", wordForm: "regards", pos: "noun (plural)", ipa: "/rɪˈɡɑːdz/", devanagari: "रि-गार्ड्ज़", syllables: "re · gards (2)", stress: "2nd Syllable (re-GARDS)", hindiMeaning: "सम्मान / शुभकामनाएं (विदाई या संदेश के अंत में)", register: "Formal / Social", collocations: ["give my regards", "warm regards", "best regards", "kind regards"], relatedForms: [{ form: "regard", pos: "verb" }], example: "Please convey my warmest regards to your parents when you speak with them.", commonError: "Do not say 'give my regard'; always use plural 'regards'." },
    { id: "d01_v13", lemma: "introduce", wordForm: "introduce", pos: "verb", ipa: "/ˌɪn.trəˈdjuːs/", devanagari: "इन-ट्रो-ड्यूस", syllables: "in · tro · duce (3)", stress: "3rd Syllable (in-tro-DUCE)", hindiMeaning: "परिचय कराना / प्रस्तुत करना", register: "Universal / Professional", collocations: ["introduce yourself", "allow me to introduce", "introduce a topic"], relatedForms: [{ form: "introduction", pos: "noun" }, { form: "introductory", pos: "adjective" }], example: "Please take two minutes to introduce yourself and your technical background.", commonError: "Never say 'Myself introduces'; say 'Allow me to introduce myself'." },
    { id: "d01_v14", lemma: "handshake", wordForm: "handshake", pos: "noun", ipa: "/ˈhænd.ʃeɪk/", devanagari: "हैंड-शेक", syllables: "hand · shake (2)", stress: "1st Syllable (HAND-shake)", hindiMeaning: "हाथ मिलाना (अभिवादन की औपचारिक मुद्रा)", register: "Professional / Social", collocations: ["firm handshake", "warm handshake", "exchange handshakes"], relatedForms: [], example: "A firm handshake accompanied by eye contact projects professional confidence.", commonError: "Compound noun: stress is on 'hand', not 'shake'." },
    { id: "d01_v15", lemma: "courtesy", wordForm: "courtesy", pos: "noun", ipa: "/ˈkɜː.tə.si/", devanagari: "कर-ट-सी", syllables: "cour · te · sy (3)", stress: "1st Syllable (COUR-te-sy)", hindiMeaning: "विनम्रता / शिष्टाचार / भद्रता", register: "Formal / Ethical", collocations: ["common courtesy", "professional courtesy", "extend courtesy"], relatedForms: [{ form: "courteous", pos: "adjective" }, { form: "courteously", pos: "adverb" }], example: "Replying to emails promptly is a matter of basic professional courtesy.", commonError: "Pronounce with the vowel /ɜː/ (like 'bird'), not /ɔː/ (like 'court')." },
    { id: "d01_v16", lemma: "honor", wordForm: "honor", pos: "noun", ipa: "/ˈɒn.ə/", devanagari: "ऑ-नर", syllables: "hon · or (2)", stress: "1st Syllable (HON-or)", hindiMeaning: "सम्मान / गौरव / प्रतिष्ठा", register: "Formal / Elevated", collocations: ["great honor", "honor to meet you", "in honor of"], relatedForms: [{ form: "honorable", pos: "adjective" }, { form: "honorary", pos: "adjective" }], example: "It is an absolute honor to meet you in person, Professor Banerjee.", commonError: "The initial letter 'h' is completely silent; pronounce as /ˈɒn.ə/." },
    { id: "d01_v17", lemma: "apologize", wordForm: "apologize", pos: "verb", ipa: "/əˈpɒl.ə.dʒaɪz/", devanagari: "अ-पॉ-ल-जाइज़", syllables: "a · pol · o · gize (4)", stress: "2nd Syllable (a-POL-o-gize)", hindiMeaning: "क्षमा मांगना / माफ़ी मांगना", register: "Formal / Standard", collocations: ["apologize sincerely", "apologize for the delay", "apologize profusely"], relatedForms: [{ form: "apology", pos: "noun" }, { form: "apologetic", pos: "adjective" }], example: "I sincerely apologize for the slight delay in responding to your inquiry.", commonError: "Do not say 'I apologize you'; say 'I apologize to you for [reason]'." },
    { id: "d01_v18", lemma: "gesture", wordForm: "gesture", pos: "noun", ipa: "/ˈdʒes.tʃə/", devanagari: "जेस-चर", syllables: "ges · ture (2)", stress: "1st Syllable (GES-ture)", hindiMeaning: "इशारा / हाव-भाव / सद्भावना का संकेत", register: "Standard / Psychological", collocations: ["polite gesture", "gesture of goodwill", "welcoming gesture"], relatedForms: [{ form: "gestural", pos: "adjective" }, { form: "gestured", pos: "verb" }], example: "Offering a warm greeting is a fundamental gesture of respect across all cultures.", commonError: "Begins with the /dʒ/ sound (like 'judge'), not /ɡ/ (like 'guest')." },
    { id: "d01_v19", lemma: "interaction", wordForm: "interaction", pos: "noun", ipa: "/ˌɪn.təˈræk.ʃən/", devanagari: "इन-टर-ऐक-शन", syllables: "in · ter · ac · tion (4)", stress: "3rd Syllable (in-ter-AC-tion)", hindiMeaning: "आपसी बातचीत / संवाद / परस्पर क्रिया", register: "Professional / Academic", collocations: ["daily interaction", "positive interaction", "customer interaction"], relatedForms: [{ form: "interact", pos: "verb" }, { form: "interactive", pos: "adjective" }], example: "First impressions are formed within the first seven seconds of a social interaction.", commonError: "Stress the syllable ending with '-ac-', right before '-tion'." },
    { id: "d01_v20", lemma: "cordial", wordForm: "cordial", pos: "adjective", ipa: "/ˈkɔː.di.əl/", devanagari: "कॉर-डि-अल", syllables: "cor · dial (3)", stress: "1st Syllable (COR-dial)", hindiMeaning: "हार्दिक / सौहार्दपूर्ण / आत्मीय", register: "Formal / Professional", collocations: ["cordial relations", "cordial welcome", "cordial invitation", "cordial atmosphere"], relatedForms: [{ form: "cordially", pos: "adverb" }, { form: "cordiality", pos: "noun" }], example: "We maintained a cordial relationship with all our enterprise clients.", commonError: "Pronounce as /ˈkɔː.di.əl/ with clear 1st syllable stress." },
    { id: "d01_v21", lemma: "delegate", wordForm: "delegate", pos: "noun", ipa: "/ˈdel.ɪ.ɡət/", devanagari: "डे-लि-गट", syllables: "del · e · gate (3)", stress: "1st Syllable (DEL-e-gate)", hindiMeaning: "प्रतिनिधि / सम्मेलन में भाग लेने वाला सदस्य", register: "Professional / Diplomatic", collocations: ["foreign delegate", "conference delegate", "welcome the delegates"], relatedForms: [{ form: "delegation", pos: "noun" }], example: "Good morning, delegates! Please proceed to the registration desk for your badges.", commonError: "When used as a noun, the final vowel is reduced to /ət/, not /eɪt/." },
    { id: "d01_v22", lemma: "welcome", wordForm: "welcome", pos: "verb/noun", ipa: "/ˈwel.kəm/", devanagari: "वेल-कम", syllables: "wel · come (2)", stress: "1st Syllable (WEL-come)", hindiMeaning: "स्वागत करना / स्वागत", register: "Universal / Standard", collocations: ["warm welcome", "hearty welcome", "welcome aboard", "you are welcome"], relatedForms: [{ form: "welcoming", pos: "adjective" }], example: "We extend a hearty welcome to all participants joining us today.", commonError: "Ensure the initial /w/ is articulated with rounded lips, not flat /v/." },
    { id: "d01_v23", lemma: "respectful", wordForm: "respectful", pos: "adjective", ipa: "/rɪˈspekt.fəl/", devanagari: "रि-स्पेक्ट-फुल", syllables: "re · spect · ful (3)", stress: "2nd Syllable (re-SPECT-ful)", hindiMeaning: "सम्मानपूर्ण / आदरणीय / विनीत", register: "Universal / Ethical", collocations: ["respectful tone", "respectful distance", "respectful behavior"], relatedForms: [{ form: "respect", pos: "noun/verb" }, { form: "respectfully", pos: "adverb" }], example: "Maintaining a respectful tone during negotiations ensures long-term collaboration.", commonError: "Do not confuse 'respectful' (showing respect) with 'respectable' (worthy of respect)." },
    { id: "d01_v24", lemma: "departure", wordForm: "departure", pos: "noun", ipa: "/dɪˈpɑː.tʃə/", devanagari: "डि-पार-चर", syllables: "de · par · ture (3)", stress: "2nd Syllable (de-PAR-ture)", hindiMeaning: "प्रस्थान / रवानगी / विदाई", register: "Formal / Transit", collocations: ["scheduled departure", "time of departure", "departure lounge"], relatedForms: [{ form: "depart", pos: "verb" }], example: "Before our departure, I would like to express my gratitude for your hospitality.", commonError: "The ending '-ture' is pronounced /tʃə/, never /tjuːr/." },
    { id: "d01_v25", lemma: "reception", wordForm: "reception", pos: "noun", ipa: "/rɪˈsep.ʃən/", devanagari: "रि-सेप-शन", syllables: "re · cep · tion (3)", stress: "2nd Syllable (re-CEP-tion)", hindiMeaning: "स्वागत कक्ष / अभिनंदन समारोह", register: "Professional / Hospitality", collocations: ["reception desk", "warm reception", "wedding reception", "reception area"], relatedForms: [{ form: "receive", pos: "verb" }, { form: "receptionist", pos: "noun" }], example: "Please report to the main reception on the fourth floor upon arrival.", commonError: "Stress the syllable with '-cep-', not the prefix 're-'." },
    { id: "d01_v26", lemma: "formality", wordForm: "formality", pos: "noun", ipa: "/fɔːˈmæl.ə.ti/", devanagari: "फ़ॉर-मै-लि-टी", syllables: "for · mal · i · ty (4)", stress: "2nd Syllable (for-MAL-i-ty)", hindiMeaning: "औपचारिकता / विधिपूर्वक कार्य", register: "Formal / Legal", collocations: ["legal formality", "mere formality", "complete the formalities"], relatedForms: [{ form: "formal", pos: "adjective" }, { form: "formalize", pos: "verb" }], example: "Let us dispense with formalities and get straight to the technical agenda.", commonError: "Stress shifts to the second syllable in 'formality' vs the first syllable in 'formal'." },
    { id: "d01_v27", lemma: "informal", wordForm: "informal", pos: "adjective", ipa: "/ɪnˈfɔː.məl/", devanagari: "इन-फ़ॉर-मल", syllables: "in · for · mal (3)", stress: "2nd Syllable (in-FOR-mal)", hindiMeaning: "अनौपचारिक / अनौपचारिक बातचीत", register: "Universal / Social", collocations: ["informal gathering", "informal greeting", "informal discussion"], relatedForms: [{ form: "informally", pos: "adverb" }], example: "'Hey there' is an informal greeting suitable only for close friends and peers.", commonError: "Never use informal slang in client emails or formal meetings." },
    { id: "d01_v28", lemma: "pleasant", wordForm: "pleasant", pos: "adjective", ipa: "/ˈplez.ənt/", devanagari: "प्ले-ज़न्ट", syllables: "pleas · ant (2)", stress: "1st Syllable (PLEAS-ant)", hindiMeaning: "सुखद / मनोहर / आनंददायक", register: "Standard / Social", collocations: ["pleasant day", "pleasant surprise", "pleasant journey", "pleasant conversation"], relatedForms: [{ form: "pleasantly", pos: "adverb" }, { form: "pleasantness", pos: "noun" }], example: "I hope you have a very pleasant stay here in New Delhi.", commonError: "Vowel is short /e/ (like 'bed'), not /iː/ (like 'please')." },
    { id: "d01_v29", lemma: "presence", wordForm: "presence", pos: "noun", ipa: "/ˈprez.əns/", devanagari: "प्रे-ज़न्स", syllables: "pres · ence (2)", stress: "1st Syllable (PRES-ence)", hindiMeaning: "उपस्थिति / मौजूदगी", register: "Formal / Ceremonial", collocations: ["grace us with your presence", "executive presence", "in the presence of"], relatedForms: [{ form: "present", pos: "adjective/noun" }], example: "Your presence at our product launch is deeply appreciated, Mr. Mehra.", commonError: "Middle consonant is voiced /z/, not voiceless /s/." },
    { id: "d01_v30", lemma: "reconnect", wordForm: "reconnect", pos: "verb", ipa: "/ˌriː.kəˈnekt/", devanagari: "री-क-नेक्ट", syllables: "re · con · nect (3)", stress: "3rd Syllable (re-con-NECT)", hindiMeaning: "पुनः संपर्क स्थापित करना / दोबारा मिलना", register: "Professional / Social", collocations: ["reconnect with an old friend", "reconnect after years", "great to reconnect"], relatedForms: [{ form: "reconnection", pos: "noun" }], example: "It is wonderful to reconnect with you after our last project in Bengaluru.", commonError: "Primary stress falls on the final syllable 'nect'." },
    { id: "d01_v31", lemma: "briefing", wordForm: "briefing", pos: "noun", ipa: "/ˈbriː.fɪŋ/", devanagari: "ब्री-फ़िंग", syllables: "brief · ing (2)", stress: "1st Syllable (BRIEF-ing)", hindiMeaning: "संक्षिप्त निर्देश / परिचर्चा", register: "Workplace / Operational", collocations: ["morning briefing", "security briefing", "project briefing"], relatedForms: [{ form: "brief", pos: "adjective/verb" }], example: "Good morning, team! Let us begin our daily standup briefing.", commonError: "Long vowel /iː/, smooth nasal ending /ŋ/." },
    { id: "d01_v32", lemma: "counterpart", wordForm: "counterpart", pos: "noun", ipa: "/ˈkaʊn.tə.pɑːt/", devanagari: "काउन-टर-पार्ट", syllables: "coun · ter · part (3)", stress: "1st Syllable (COUN-ter-part)", hindiMeaning: "समकक्ष अधिकारी (दूसरे संगठन में समान पद वाला)", register: "Professional / Diplomatic", collocations: ["industry counterpart", "foreign counterpart", "meet with counterparts"], relatedForms: [], example: "I greeted my British counterpart before the bilateral trade negotiations.", commonError: "Stress the first element 'coun-' in this compound noun." },
    { id: "d01_v33", lemma: "acknowledge", wordForm: "acknowledge", pos: "verb", ipa: "/əkˈnɒl.ɪdʒ/", devanagari: "अक-नॉ-लिज", syllables: "ac · knowl · edge (3)", stress: "2nd Syllable (ac-KNOWL-edge)", hindiMeaning: "स्वीकार करना / पावती देना / नमस्कार का उत्तर देना", register: "Formal / Professional", collocations: ["acknowledge a greeting", "acknowledge receipt", "acknowledge a mistake"], relatedForms: [{ form: "acknowledgment", pos: "noun" }], example: "Always acknowledge a senior colleague's greeting when passing in the hallway.", commonError: "Silent 'k' and 'w'; pronounced /əkˈnɒl.ɪdʒ/." },
    { id: "d01_v34", lemma: "punctual", wordForm: "punctual", pos: "adjective", ipa: "/ˈpʌŋk.tʃu.əl/", devanagari: "पंक-चु-अल", syllables: "punc · tu · al (3)", stress: "1st Syllable (PUNC-tu-al)", hindiMeaning: "समय का पाबंद / समयनिष्ठ", register: "Professional / Standard", collocations: ["punctual arrival", "always punctual", "punctual habits"], relatedForms: [{ form: "punctuality", pos: "noun" }, { form: "punctually", pos: "adverb" }], example: "Arriving on time and greeting colleagues punctually sets a professional standard.", commonError: "Middle cluster contains /ŋktʃ/, not /ŋkt/." },
    { id: "d01_v35", lemma: "firm", wordForm: "firm", pos: "adjective", ipa: "/fɜːm/", devanagari: "फ़र्म", syllables: "firm (1)", stress: "Single Syllable", hindiMeaning: "दृढ़ / मजबूत (हाथ मिलाने के संदर्भ में)", register: "Professional / Physical", collocations: ["firm grip", "firm handshake", "firm tone"], relatedForms: [{ form: "firmly", pos: "adverb" }, { form: "firmness", pos: "noun" }], example: "Offer a firm, brief handshake rather than a limp grasp.", commonError: "Vowel is central /ɜː/, not /ɑː/ or /oʊ/." },
    { id: "d01_v36", lemma: "demeanor", wordForm: "demeanor", pos: "noun", ipa: "/dɪˈmiː.nə/", devanagari: "डि-मी-नर", syllables: "de · mean · or (3)", stress: "2nd Syllable (de-MEAN-or)", hindiMeaning: "व्यवहार / आचरण / हाव-भाव", register: "Formal / Psychological", collocations: ["calm demeanor", "professional demeanor", "welcoming demeanor"], relatedForms: [], example: "Her cheerful demeanor made all international clients feel instantly at ease.", commonError: "Stress on the second syllable 'mean'." },
    { id: "d01_v37", lemma: "hospitality", wordForm: "hospitality", pos: "noun", ipa: "/ˌhɒs.pɪˈtæl.ə.ti/", devanagari: "हॉस-पि-टै-लि-टी", syllables: "hos · pi · tal · i · ty (5)", stress: "3rd Syllable (hos-pi-TAL-i-ty)", hindiMeaning: "अतिथि-सत्कार / मेहमाननवाज़ी", register: "Universal / Social", collocations: ["warm hospitality", "thank you for your hospitality", "generous hospitality"], relatedForms: [{ form: "hospitable", pos: "adjective" }], example: "Thank you very much for your wonderful hospitality during our conference.", commonError: "Primary stress falls on the third syllable (-TAL-)." },
    { id: "d01_v38", lemma: "interlocutor", wordForm: "interlocutor", pos: "noun", ipa: "/ˌɪn.təˈlɒk.jə.tə/", devanagari: "इन-टर-लॉ-क्य-टर", syllables: "in · ter · loc · u · tor (5)", stress: "3rd Syllable (in-ter-LOC-u-tor)", hindiMeaning: "वार्ताकार / संवाद में भाग लेने वाला दूसरा व्यक्ति", register: "Formal / Academic", collocations: ["direct interlocutor", "dialogue with interlocutors"], relatedForms: [], example: "Maintain polite eye contact with your interlocutor while exchanging greetings.", commonError: "Stress the third syllable 'loc'." },
    { id: "d01_v39", lemma: "distinction", wordForm: "distinction", pos: "noun", ipa: "/dɪˈstɪŋk.ʃən/", devanagari: "डि-स्टिंक-शन", syllables: "dis · tinc · tion (3)", stress: "2nd Syllable (dis-TINC-tion)", hindiMeaning: "अंतर / भेद / विशेषता", register: "Formal / Analytical", collocations: ["clear distinction", "draw a distinction", "crucial distinction"], relatedForms: [{ form: "distinct", pos: "adjective" }, { form: "distinctive", pos: "adjective" }], example: "There is a crucial distinction between a greeting on arrival and a parting farewell.", commonError: "Ensure nasal /ŋk/ before /ʃən/." },
    { id: "d01_v40", lemma: "subordinate", wordForm: "subordinate", pos: "noun/adj", ipa: "/səˈbɔː.dɪ.nət/", devanagari: "स-बॉर-डि-नट", syllables: "sub · or · di · nate (4)", stress: "2nd Syllable (sub-OR-di-nate)", hindiMeaning: "अधीनस्थ कर्मचारी / मातहत", register: "Workplace / Administrative", collocations: ["subordinate staff", "greet subordinates warmly", "senior and subordinate"], relatedForms: [{ form: "subordination", pos: "noun" }], example: "An effective leader greets subordinates with the same respect shown to directors.", commonError: "As a noun, the final vowel is reduced to /nət/, not /neɪt/." },
    { id: "d01_v41", lemma: "superior", wordForm: "superior", pos: "noun/adj", ipa: "/suːˈpɪə.ri.ə/", devanagari: "सू-पी-रि-अर", syllables: "su · pe · ri · or (4)", stress: "2nd Syllable (su-PE-ri-or)", hindiMeaning: "वरिष्ठ अधिकारी / उच्च पदस्थ", register: "Workplace / Formal", collocations: ["immediate superior", "report to superiors", "greet superiors"], relatedForms: [{ form: "superiority", pos: "noun" }], example: "Always use formal titles when greeting senior organizational superiors.", commonError: "Stress on second syllable 'pe' (/pɪə/)." },
    { id: "d01_v42", lemma: "reciprocal", wordForm: "reciprocal", pos: "adjective", ipa: "/rɪˈsɪp.rə.kəl/", devanagari: "रि-सिप-रो-कल", syllables: "re · cip · ro · cal (4)", stress: "2nd Syllable (re-CIP-ro-cal)", hindiMeaning: "पारस्परिक / दोनों तरफ से होने वाला", register: "Formal / Sociological", collocations: ["reciprocal greeting", "reciprocal respect", "reciprocal arrangement"], relatedForms: [{ form: "reciprocate", pos: "verb" }], example: "A polite greeting requires a prompt, reciprocal acknowledgement.", commonError: "Stress is strictly on the second syllable 'cip'." },
    { id: "d01_v43", lemma: "customary", wordForm: "customary", pos: "adjective", ipa: "/ˈkʌs.tə.mər.i/", devanagari: "कस-ट-म-री", syllables: "cus · tom · ar · y (4)", stress: "1st Syllable (CUS-tom-ar-y)", hindiMeaning: "पारंपरिक / प्रथागत / रूढ़िगत", register: "Formal / Cultural", collocations: ["customary greeting", "customary practice", "it is customary to"], relatedForms: [{ form: "custom", pos: "noun" }], example: "In international business, it is customary to exchange business cards after greetings.", commonError: "Stress on the first syllable 'cus'." },
    { id: "d01_v44", lemma: "pleasantry", wordForm: "pleasantry", pos: "noun", ipa: "/ˈplez.ən.tri/", devanagari: "प्ले-ज़न्ट-री", syllables: "pleas · ant · ry (3)", stress: "1st Syllable (PLEAS-ant-ry)", hindiMeaning: "शिष्टाचार की बातें / औपचारिक मधुर वार्ता", register: "Formal / Social", collocations: ["exchange pleasantries", "social pleasantries", "brief pleasantries"], relatedForms: [], example: "After exchanging a few pleasantries about the weather, we commenced our business review.", commonError: "Short vowel /e/, voiced /z/ in the first syllable." },
    { id: "d01_v45", lemma: "civility", wordForm: "civility", pos: "noun", ipa: "/sɪˈvɪl.ə.ti/", devanagari: "सि-वि-लि-टी", syllables: "ci · vil · i · ty (4)", stress: "2nd Syllable (ci-VIL-i-ty)", hindiMeaning: "सभ्यता / भद्रता / नागरिक शिष्टाचार", register: "Formal / Ethical", collocations: ["basic civility", "treat with civility", "standards of civility"], relatedForms: [{ form: "civil", pos: "adjective" }], example: "Greeting team members each morning reinforces everyday workplace civility.", commonError: "Stress the second syllable 'vil'." },
    { id: "d01_v46", lemma: "etiquette", wordForm: "etiquette", pos: "noun", ipa: "/ˈet.ɪ.ket/", devanagari: "ए-टि-केट", syllables: "et · i · quette (3)", stress: "1st Syllable (ET-i-quette)", hindiMeaning: "शिष्टाचार / सामाजिक आचार संहिता", register: "Formal / Standard", collocations: ["business etiquette", "social etiquette", "meeting etiquette"], relatedForms: [], example: "Proper greeting etiquette establishes mutual trust before negotiations commence.", commonError: "Stress on the first syllable 'et' in standard British/International English." },
    { id: "d01_v47", lemma: "commence", wordForm: "commence", pos: "verb", ipa: "/kəˈmens/", devanagari: "क-मेन्स", syllables: "com · mence (2)", stress: "2nd Syllable (com-MENCE)", hindiMeaning: "शुरू करना / प्रारंभ करना", register: "Formal / Institutional", collocations: ["commence the meeting", "commence proceedings", "commence work"], relatedForms: [{ form: "commencement", pos: "noun" }], example: "Let us exchange greetings and commence today's orientation session.", commonError: "Stress on second syllable 'mence'." },
    { id: "d01_v48", lemma: "conclude", wordForm: "conclude", pos: "verb", ipa: "/kənˈkluːd/", devanagari: "कन-क्लूड", syllables: "con · clude (2)", stress: "2nd Syllable (con-CLUDE)", hindiMeaning: "समाप्त करना / निष्कर्ष निकालना", register: "Formal / Institutional", collocations: ["conclude the meeting", "conclude with a parting remark", "conclude remarks"], relatedForms: [{ form: "conclusion", pos: "noun" }], example: "We will conclude our symposium with formal parting remarks from the dean.", commonError: "Long vowel /uː/, stress on second syllable." },
    { id: "d01_v49", lemma: "gratitude", wordForm: "gratitude", pos: "noun", ipa: "/ˈɡræt.ɪ.tʃuːd/", devanagari: "ग्रै-टि-ट्यूड", syllables: "grat · i · tude (3)", stress: "1st Syllable (GRAT-i-tude)", hindiMeaning: "कृतज्ञता / आभार / धन्यवाद का भाव", register: "Universal / Emotional", collocations: ["express gratitude", "deep gratitude", "heartfelt gratitude"], relatedForms: [{ form: "grateful", pos: "adjective" }], example: "I would like to express my sincere gratitude for your gracious welcome today.", commonError: "Stress on first syllable 'grat'." },
    { id: "d01_v50", lemma: "warmth", wordForm: "warmth", pos: "noun", ipa: "/wɔːmθ/", devanagari: "वॉर्म्थ", syllables: "warmth (1)", stress: "Single Syllable", hindiMeaning: "उत्साह / आत्मीयता / हार्दिकता", register: "Universal / Emotional", collocations: ["greet with warmth", "warmth of hospitality", "radiate warmth"], relatedForms: [{ form: "warm", pos: "adjective" }], example: "His voice carried genuine warmth as he greeted each visitor individually.", commonError: "Ends with voiceless dental fricative /θ/, not /s/ or /t/." },
    { id: "d01_v51", lemma: "esteem", wordForm: "esteem", pos: "noun", ipa: "/ɪˈstiːm/", devanagari: "इ-स्टीम", syllables: "es · teem (2)", stress: "2nd Syllable (es-TEEM)", hindiMeaning: "आदर / उच्च सम्मान / प्रतिष्ठा", register: "Formal / Elevated", collocations: ["high esteem", "held in high esteem", "token of esteem"], relatedForms: [{ form: "esteemed", pos: "adjective" }], example: "Good evening to our esteemed guests, board members, and university chancellor.", commonError: "Stress on second syllable 'teem'." },
    { id: "d01_v52", lemma: "brief", wordForm: "brief", pos: "adjective", ipa: "/briːf/", devanagari: "ब्रीफ़", syllables: "brief (1)", stress: "Single Syllable", hindiMeaning: "संक्षिप्त / अल्पकालिक", register: "Universal / Professional", collocations: ["brief greeting", "brief meeting", "in brief"], relatedForms: [{ form: "briefly", pos: "adverb" }], example: "We had time only for a brief exchange of greetings before entering the auditorium.", commonError: "Long vowel /iː/, ends in voiceless /f/." },
    { id: "d01_v53", lemma: "sovereign", wordForm: "sovereign", pos: "noun/adj", ipa: "/ˈsɒv.rɪn/", devanagari: "सॉव-रिन", syllables: "sov · ereign (2)", stress: "1st Syllable (SOV-ereign)", hindiMeaning: "संप्रभु / सर्वोच्च", register: "Formal / Diplomatic", collocations: ["sovereign state", "sovereign dignitary"], relatedForms: [{ form: "sovereignty", pos: "noun" }], example: "Protocol officers greeted the foreign sovereign at the tarmac with full honors.", commonError: "Pronounced with 2 syllables /ˈsɒv.rɪn/; 'g' is silent." },
    { id: "d01_v54", lemma: "dignitary", wordForm: "dignitary", pos: "noun", ipa: "/ˈdɪɡ.nɪ.tər.i/", devanagari: "डिग-नि-ट-री", syllables: "dig · ni · tar · y (4)", stress: "1st Syllable (DIG-ni-tar-y)", hindiMeaning: "उच्च पदस्थ व्यक्ति / गणमान्य अतिथि", register: "Formal / Diplomatic", collocations: ["visiting dignitary", "foreign dignitaries", "greet dignitaries"], relatedForms: [{ form: "dignity", pos: "noun" }], example: "The ambassador stood at the entrance to greet visiting international dignitaries.", commonError: "Stress the first syllable 'dig'." },
    { id: "d01_v55", lemma: "salute", wordForm: "salute", pos: "verb/noun", ipa: "/səˈluːt/", devanagari: "स-लूट", syllables: "sa · lute (2)", stress: "2nd Syllable (sa-LUTE)", hindiMeaning: "सलाम करना / सलामी देना / सम्मान प्रकट करना", register: "Formal / Military", collocations: ["military salute", "salute the flag", "salute someone's dedication"], relatedForms: [], example: "Guards stood at attention to salute the prime minister upon his arrival.", commonError: "Stress on second syllable 'lute'." },
    { id: "d01_v56", lemma: "reverence", wordForm: "reverence", pos: "noun", ipa: "/ˈrev.ər.əns/", devanagari: "रे-व-रन्स", syllables: "rev · er · ence (3)", stress: "1st Syllable (REV-er-ence)", hindiMeaning: "श्रद्धा / गहरी श्रद्धा / परम आदर", register: "Formal / Religious / Ethical", collocations: ["deep reverence", "treat with reverence", "bow with reverence"], relatedForms: [{ form: "reverent", pos: "adjective" }, { form: "revere", pos: "verb" }], example: "In traditional Indian culture, elders are greeted with profound reverence and respect.", commonError: "Stress on first syllable 'rev'." },
    { id: "d01_v57", lemma: "nod", wordForm: "nod", pos: "verb/noun", ipa: "/nɒd/", devanagari: "नॉड", syllables: "nod (1)", stress: "Single Syllable", hindiMeaning: "सिर हिलाकर सहमति या अभिवादन व्यक्त करना", register: "Universal / Physical", collocations: ["nod in agreement", "polite nod", "nod of acknowledgment"], relatedForms: [{ form: "nodded", pos: "verb (past)" }], example: "He gave a polite nod of greeting as he passed his manager in the corridor.", commonError: "Short vowel /ɒ/, voiced alveolar stop /d/." },
    { id: "d01_v58", lemma: "embrace", wordForm: "embrace", pos: "verb/noun", ipa: "/ɪmˈbreɪs/", devanagari: "इम-ब्रेस", syllables: "em · brace (2)", stress: "2nd Syllable (em-BRACE)", hindiMeaning: "गले लगाना / आलिंगन करना / सहर्ष स्वीकार करना", register: "Universal / Social", collocations: ["warm embrace", "friendly embrace", "embrace diversity"], relatedForms: [], example: "Old university friends shared a warm embrace after ten years apart.", commonError: "Stress on second syllable 'brace' (/breɪs/)." },
    { id: "d01_v59", lemma: "unison", wordForm: "unison", pos: "noun", ipa: "/ˈjuː.nɪ.sən/", devanagari: "यू-नि-सन", syllables: "u · ni · son (3)", stress: "1st Syllable (U-ni-son)", hindiMeaning: "एक स्वर में / एक साथ", register: "Standard / Collective", collocations: ["in unison", "respond in unison", "chant in unison"], relatedForms: [], example: "The school children greeted their teacher in unison: 'Good morning, Teacher!'", commonError: "Stress the first syllable 'u' (/juː/)." },
    { id: "d01_v60", lemma: "cordiality", wordForm: "cordiality", pos: "noun", ipa: "/ˌkɔː.diˈæl.ə.ti/", devanagari: "कॉर-डि-ऐ-लि-टी", syllables: "cor · di · al · i · ty (5)", stress: "3rd Syllable (cor-di-AL-i-ty)", hindiMeaning: "हार्दिकता / आत्मीयता / स्नेहपूर्ण व्यवहार", register: "Formal / Professional", collocations: ["atmosphere of cordiality", "treat with cordiality", "genuine cordiality"], relatedForms: [{ form: "cordial", pos: "adjective" }], example: "The bilateral meeting concluded in an atmosphere of extraordinary cordiality and goodwill.", commonError: "Primary stress shifts to third syllable 'al'." }
  ];

  const examples = [
    // 1. Grammar & Time-Bound Models (15)
    { id: "d01_ex_001", category: "Grammar", en: "Good morning, Mr. Sharma! It is precisely nine o'clock.", hi: "शुभ प्रभात, मिस्टर शर्मा! ठीक नौ बजे हैं।" },
    { id: "d01_ex_002", category: "Grammar", en: "Good afternoon, Dr. Gupta! Welcome back to the clinic.", hi: "शुभ दोपहर, डॉ. गुप्ता! क्लिनिक में आपका पुनः स्वागत है।" },
    { id: "d01_ex_003", category: "Grammar", en: "Good evening, ladies and gentlemen! The keynote address will start shortly.", hi: "शुभ संध्या, देवियो और सज्जनो! मुख्य भाषण शीघ्र ही शुरू होगा।" },
    { id: "d01_ex_004", category: "Grammar", en: "It was a productive meeting. Good night, everyone, and travel safely!", hi: "यह एक उत्पादक बैठक थी। शुभ रात्रि, आप सभी को, और सुरक्षित यात्रा करें!" },
    { id: "d01_ex_005", category: "Grammar", en: "Goodbye, Professor Rao! I shall see you next Monday morning.", hi: "अलविदा, प्रोफेसर राव! मैं आपसे अगले सोमवार सुबह मिलूँगा।" },
    { id: "d01_ex_006", category: "Grammar", en: "Good morning, team! Let us review our quarterly targets today.", hi: "शुभ प्रभात, टीम! आज हम अपने त्रैमासिक लक्ष्यों की समीक्षा करते हैं।" },
    { id: "d01_ex_007", category: "Grammar", en: "Good afternoon, Ma'am! How may I assist you at the front desk?", hi: "शुभ दोपहर, मैम! फ्रंट डेस्क पर मैं आपकी क्या सहायता कर सकता हूँ?" },
    { id: "d01_ex_008", category: "Grammar", en: "Good evening, Uncle and Auntie! We are delighted you could join us for dinner.", hi: "शुभ संध्या, अंकल और आंटी! हमें बहुत खुशी है कि आप हमारे साथ रात्रिभोज में शामिल हो सके।" },
    { id: "d01_ex_009", category: "Grammar", en: "Good night, grandfather! Please sleep well and take your medicine.", hi: "शुभ रात्रि, दादाजी! कृपया आराम से सोएं और अपनी दवा ले लें।" },
    { id: "d01_ex_010", category: "Grammar", en: "Hello, Vikas! It has been several months since we last spoke.", hi: "नमस्ते, विकास! हमारी पिछली बातचीत को कई महीने बीत चुके हैं।" },
    { id: "d01_ex_011", category: "Grammar", en: "Hi, Anjali! Are you ready for our weekly project briefing?", hi: "हाय, अंजलि! क्या तुम हमारे साप्ताहिक प्रोजेक्ट ब्रीफिंग के लिए तैयार हो?" },
    { id: "d01_ex_012", category: "Grammar", en: "Good morning, Sir! Here is the signed contract you requested.", hi: "शुभ प्रभात, सर! यह रहा हस्ताक्षरित अनुबंध जो आपने मांगा था।" },
    { id: "d01_ex_013", category: "Grammar", en: "Good afternoon, delegates! Lunch is served in the adjacent banquet hall.", hi: "शुभ दोपहर, प्रतिनिधियों! दोपहर का भोजन बगल के बैंक्वेट हॉल में परोसा गया है।" },
    { id: "d01_ex_014", category: "Grammar", en: "Good evening, neighbor! The weather has turned delightfully pleasant tonight.", hi: "शुभ संध्या, पड़ोसी महोदय! आज रात का मौसम बड़ा ही सुखद हो गया है।" },
    { id: "d01_ex_015", category: "Grammar", en: "Goodbye for now! Take care of yourself until our next session.", hi: "अभी के लिए अलविदा! हमारे अगले सत्र तक अपना पूरा ध्यान रखें।" },

    // 2. Everyday Conversational English (15)
    { id: "d01_ex_016", category: "Conversational", en: "How are you doing today, Rajesh?", hi: "राजेश, आज आप कैसे हैं?" },
    { id: "d01_ex_017", category: "Conversational", en: "I am doing very well, thank you! How about yourself?", hi: "मैं बहुत अच्छा हूँ, धन्यवाद! आप अपने बारे में बताइए?" },
    { id: "d01_ex_018", category: "Conversational", en: "Nice to see you again after such a long time!", hi: "इतने लंबे समय के बाद आपको दोबारा देखकर बहुत अच्छा लगा!" },
    { id: "d01_ex_019", category: "Conversational", en: "Pleased to meet you, Pooja! Rahul has spoken very highly of you.", hi: "पूजा, आपसे मिलकर प्रसन्नता हुई! राहुल ने आपकी बहुत प्रशंसा की है।" },
    { id: "d01_ex_020", category: "Conversational", en: "Have a wonderful weekend ahead, Vikram!", hi: "विक्रम, आपका आने वाला सप्ताहांत शानदार रहे!" },
    { id: "d01_ex_021", category: "Conversational", en: "See you later this evening at the community center.", hi: "आज शाम बाद में सामुदायिक केंद्र में मिलते हैं।" },
    { id: "d01_ex_022", category: "Conversational", en: "Catch you tomorrow morning near the metro station.", hi: "कल सुबह मेट्रो स्टेशन के पास मिलते हैं।" },
    { id: "d01_ex_023", category: "Conversational", en: "I must take your leave now; it is getting quite late.", hi: "अब मुझे आपसे विदा लेनी होगी; काफी देर हो रही है।" },
    { id: "d01_ex_024", category: "Conversational", en: "Give my warmest regards to everyone at home.", hi: "घर पर सभी को मेरा सादर प्रणाम / शुभकामनाएं दीजिएगा।" },
    { id: "d01_ex_025", category: "Conversational", en: "It was truly wonderful catching up with you over tea.", hi: "चाय पर आपके साथ बातचीत करके सचमुच बहुत आनंद आया।" },
    { id: "d01_ex_026", category: "Conversational", en: "Take care and drive carefully on your way home.", hi: "अपना ध्यान रखें और घर जाते समय सावधानी से गाड़ी चलाएं।" },
    { id: "d01_ex_027", category: "Conversational", en: "Have a safe flight back to Mumbai tomorrow!", hi: "कल मुंबई वापसी की आपकी उड़ान सुरक्षित और सुखद रहे!" },
    { id: "d01_ex_028", category: "Conversational", en: "Good morning! Did you sleep well last night?", hi: "शुभ प्रभात! क्या कल रात आपकी नींद अच्छी रही?" },
    { id: "d01_ex_029", category: "Conversational", en: "I am doing fine; just running a little late for work.", hi: "मैं ठीक हूँ; बस काम के लिए थोड़ा लेट हो रहा हूँ।" },
    { id: "d01_ex_030", category: "Conversational", en: "Enjoy the rest of your evening with your family!", hi: "अपने परिवार के साथ अपनी शेष शाम का भरपूर आनंद लें!" },

    // 3. Workplace & Professional Register (15)
    { id: "d01_ex_031", category: "Professional", en: "Good morning, directors and executive board members.", hi: "शुभ प्रभात, निदेशको और कार्यकारी बोर्ड के सदस्यो।" },
    { id: "d01_ex_032", category: "Professional", en: "Allow me to introduce our lead data architect, Mr. Amitav Sen.", hi: "मुझे हमारे मुख्य डेटा आर्किटेक्ट, मिस्टर अमिताव सेन का परिचय कराने की अनुमति दें।" },
    { id: "d01_ex_033", category: "Professional", en: "It is an absolute pleasure to make your acquaintance, Ms. Iyer.", hi: "सुश्री अय्यर, आपसे मिलकर अत्यंत प्रसन्नता हुई।" },
    { id: "d01_ex_034", category: "Professional", en: "Thank you for your valuable time today; I look forward to our partnership.", hi: "आज आपके बहुमूल्य समय के लिए धन्यवाद; मैं हमारी साझेदारी की प्रतीक्षा कर रहा हूँ।" },
    { id: "d01_ex_035", category: "Professional", en: "Good afternoon, client representatives! Let us examine the project timeline.", hi: "शुभ दोपहर, क्लाइंट प्रतिनिधियो! आइए हम परियोजना की समय-सीमा की जांच करें।" },
    { id: "d01_ex_036", category: "Professional", en: "Please convey my best regards to your managing director.", hi: "कृपया अपने प्रबंध निदेशक को मेरी हार्दिक शुभकामनाएं प्रेषित करें।" },
    { id: "d01_ex_037", category: "Professional", en: "We appreciate your prompt arrival for this executive briefing.", hi: "इस कार्यकारी ब्रीफिंग के लिए आपके समय पर आगमन की हम सराहना करते हैं।" },
    { id: "d01_ex_038", category: "Professional", en: "Good evening, everyone! Thank you for dialing in from different time zones.", hi: "शुभ संध्या, आप सभी को! विभिन्न समय क्षेत्रों से जुड़ने के लिए धन्यवाद।" },
    { id: "d01_ex_039", category: "Professional", en: "It was an honor hosting the global leadership delegation this week.", hi: "इस सप्ताह वैश्विक नेतृत्व प्रतिनिधिमंडल की मेज़बानी करना हमारे लिए सम्मान की बात थी।" },
    { id: "d01_ex_040", category: "Professional", en: "I wish you continued success with your product deployment.", hi: "मैं आपके उत्पाद परिनियोजन के साथ आपकी निरंतर सफलता की कामना करता हूँ।" },
    { id: "d01_ex_041", category: "Professional", en: "Good morning! Shall we begin our quarterly performance review?", hi: "शुभ प्रभात! क्या हम अपनी त्रैमासिक प्रदर्शन समीक्षा शुरू करें?" },
    { id: "d01_ex_042", category: "Professional", en: "I must step out for another client commitment; thank you for the fruitful session.", hi: "मुझे एक अन्य क्लाइंट मीटिंग के लिए निकलना होगा; इस उपयोगी सत्र के लिए धन्यवाद।" },
    { id: "d01_ex_043", category: "Professional", en: "Pleased to connect with you on this cross-functional initiative.", hi: "इस अंतर-कार्यात्मक पहल पर आपके साथ जुड़कर प्रसन्नता हुई।" },
    { id: "d01_ex_044", category: "Professional", en: "Have a productive week ahead, team!", hi: "टीम, आपका आने वाला सप्ताह अत्यधिक उत्पादक रहे!" },
    { id: "d01_ex_045", category: "Professional", en: "Good afternoon, Mr. Chairman! All committee members are in attendance.", hi: "शुभ दोपहर, मिस्टर चेयरमैन! समिति के सभी सदस्य उपस्थित हैं।" },

    // 4. Translation Contrasts (L1 Hindi vs L2 English) (10)
    { id: "d01_ex_046", category: "TranslationContrast", en: "Good evening, Uncle! How have you been? (Arrival greeting)", hi: "नमस्ते अंकल जी! आप कैसे रहे हैं? (रात के समय मिलने पर)" },
    { id: "d01_ex_047", category: "TranslationContrast", en: "Good night, Uncle! Sleep well. (Parting / Bedtime farewell)", hi: "शुभ रात्रि अंकल जी! आराम से सोएं। (रात को विदा लेते समय)" },
    { id: "d01_ex_048", category: "TranslationContrast", en: "My name is Rohit Sharma, and I am a software engineer.", hi: "मेरा नाम रोहित शर्मा है, और मैं एक सॉफ्टवेयर इंजीनियर हूँ।" },
    { id: "d01_ex_049", category: "TranslationContrast", en: "I am Priya Verma from the marketing department.", hi: "मैं मार्केटिंग विभाग से प्रिया वर्मा हूँ।" },
    { id: "d01_ex_050", category: "TranslationContrast", en: "It was a pleasure meeting you today.", hi: "आज आपसे मिलकर बहुत अच्छा लगा।" },
    { id: "d01_ex_051", category: "TranslationContrast", en: "Please convey my respectful regards to your elders.", hi: "कृपया अपने बड़ों को मेरा सादर चरण स्पर्श / प्रणाम कहिएगा।" },
    { id: "d01_ex_052", category: "TranslationContrast", en: "See you tomorrow morning at nine o'clock sharp.", hi: "कल सुबह ठीक नौ बजे आपसे मुलाकात होगी।" },
    { id: "d01_ex_053", category: "TranslationContrast", en: "I am doing well by God's grace; how are things with you?", hi: "ईश्वर की कृपा से मैं ठीक हूँ; आपके यहाँ सब कैसा चल रहा है?" },
    { id: "d01_ex_054", category: "TranslationContrast", en: "Have a safe and pleasant journey back to your hometown.", hi: "अपने गृहनगर वापसी की आपकी यात्रा सुरक्षित और सुखद रहे।" },
    { id: "d01_ex_055", category: "TranslationContrast", en: "We are deeply honored by your gracious visit.", hi: "आपके इस अनुग्रहकारी आगमन से हम अत्यधिक सम्मानित महसूस कर रहे हैं।" },

    // 5. Pronunciation & Connected Speech Models (/v/ vs /w/, /ŋ/, Intonation) (10)
    { id: "d01_ex_056", category: "Pronunciation", en: "Victor visited the western village every Wednesday.", hi: "विक्टर प्रत्येक बुधवार को पश्चिमी गाँव का दौरा करता था। (/v/ vs /w/ contrast)" },
    { id: "d01_ex_057", category: "Pronunciation", en: "Good morning! The birds are singing in the morning spring.", hi: "शुभ प्रभात! सुबह के वसंत में पक्षी गा रहे हैं। (Velar nasal /ŋ/ ending)" },
    { id: "d01_ex_058", category: "Pronunciation", en: "Welcome, William! We value your valuable insights.", hi: "स्वागत है, विलियम! हम आपके बहुमूल्य विचारों को महत्व देते हैं।" },
    { id: "d01_ex_059", category: "Pronunciation", en: "Good morning, Sir! ↘ (Falling intonation expresses definitive respect)", hi: "शुभ प्रभात, महोदय! (सम्मानपूर्ण गिरती हुई सुर-लहर)" },
    { id: "d01_ex_060", category: "Pronunciation", en: "Are you ready to leave? ↗ (Rising intonation for yes/no question)", hi: "क्या आप निकलने के लिए तैयार हैं? (उठती हुई सुर-लहर)" },
    { id: "d01_ex_061", category: "Pronunciation", en: "Very well, thank you! ↘ (Smooth rhythm and falling pitch)", hi: "बहुत बढ़िया, धन्यवाद! (सहज लय और गिरती हुई पिच)" },
    { id: "d01_ex_062", category: "Pronunciation", en: "Wave at the visitors from the moving van.", hi: "चलती वैन से आगंतुकों की ओर हाथ हिलाएं। (/w/ vs /v/ minimal contrast)" },
    { id: "d01_ex_063", category: "Pronunciation", en: "Good evening, everyone! ↘ (Warm, authoritative falling cadence)", hi: "शुभ संध्या, आप सभी को! (आत्मीय एवं अधिकारपूर्ण सुर-लहर)" },
    { id: "d01_ex_064", category: "Pronunciation", en: "Wishing you a wonderful Wednesday morning.", hi: "आपको एक शानदार बुधवार की सुबह की शुभकामनाएं। (/w/ lip-rounding)" },
    { id: "d01_ex_065", category: "Pronunciation", en: "Goodbye, and take care! ↘ (Warm falling parting tone)", hi: "अलविदा, और अपना ध्यान रखें!" },

    // 6. Error Reversals (Indian English Fossilization Inversions) (10)
    { id: "d01_ex_066", category: "ErrorReversal", en: "My name is Ananya. (NOT: 'Myself Ananya')", hi: "मेरा नाम अनन्या है। ('Myself Ananya' गलत है)" },
    { id: "d01_ex_067", category: "ErrorReversal", en: "Good evening, Uncle! (NOT: 'Good night, Uncle' when arriving at 8 PM)", hi: "शुभ संध्या अंकल! (रात को पहुँचने पर 'Good night' न कहें)" },
    { id: "d01_ex_068", category: "ErrorReversal", en: "You are most welcome! (NOT: 'Mention not')", hi: "आपका बहुत-बहुत स्वागत है! ('Mention not' के स्थान पर प्राकृतिक अंग्रेजी)" },
    { id: "d01_ex_069", category: "ErrorReversal", en: "Please reply at your earliest convenience. (NOT: 'Please revert back')", hi: "कृपया अपनी सुविधानुसार शीघ्र उत्तर दें। ('Revert back' में अनावश्यक दोहराव है)" },
    { id: "d01_ex_070", category: "ErrorReversal", en: "I am fine, thank you. (NOT: 'I am first class')", hi: "मैं ठीक हूँ, धन्यवाद। ('First class' अनौपचारिक भारतीय स्लैंग है)" },
    { id: "d01_ex_071", category: "ErrorReversal", en: "Meet my cousin, Rohan. (NOT: 'Meet my cousin brother')", hi: "मेरे कज़न रोहन से मिलिए। ('Cousin brother' व्याकरण सम्मत नहीं है)" },
    { id: "d01_ex_072", category: "ErrorReversal", en: "I am on leave today. (NOT: 'I am in leave today')", hi: "मैं आज छुट्टी पर हूँ। ('In leave' की जगह 'On leave' कहें)" },
    { id: "d01_ex_073", category: "ErrorReversal", en: "Could you please repeat that? (NOT: 'Repeat it once again')", hi: "क्या आप कृपया इसे दोहरा सकते हैं? ('Repeat' में 'again' पहले से शामिल है)" },
    { id: "d01_ex_074", category: "ErrorReversal", en: "I graduated from Delhi University in 2021. (NOT: 'I passed out in 2021')", hi: "मैंने 2021 में दिल्ली विश्वविद्यालय से स्नातक किया। ('Passed out' का अर्थ बेहोश होना होता है)" },
    { id: "d01_ex_075", category: "ErrorReversal", en: "Please advance the meeting by one hour. (NOT: 'Prepone the meeting')", hi: "कृपया बैठक को एक घंटा पहले कर दें। ('Prepone' मानक अंतरराष्ट्रीय अंग्रेजी नहीं है)" },

    // 7. Register Shifts (Casual vs Executive/Formal) (10)
    { id: "d01_ex_076", category: "RegisterShift", en: "Casual: Hey, what's up? | Formal: Good morning, Mr. Roy; how are you today?", hi: "अनौपचारिक: अरे, क्या चल रहा है? | औपचारिक: शुभ प्रभात, मिस्टर रॉय; आज आप कैसे हैं?" },
    { id: "d01_ex_077", category: "RegisterShift", en: "Casual: Bye, see ya! | Formal: Goodbye, Sir; have a pleasant evening.", hi: "अनौपचारिक: बाय, फिर मिलेंगे! | औपचारिक: अलविदा, सर; आपकी शाम सुखद रहे।" },
    { id: "d01_ex_078", category: "RegisterShift", en: "Casual: Nice meeting you! | Formal: It has been a distinct honor to make your acquaintance.", hi: "अनौपचारिक: मिलकर अच्छा लगा! | औपचारिक: आपसे परिचय होना हमारे लिए अत्यंत सम्मान की बात है।" },
    { id: "d01_ex_079", category: "RegisterShift", en: "Casual: Thanks a ton! | Formal: We express our sincere gratitude for your assistance.", hi: "अनौपचारिक: बहुत-बहुत धन्यवाद! | औपचारिक: हम आपकी सहायता के लिए हार्दिक कृतज्ञता व्यक्त करते हैं।" },
    { id: "d01_ex_080", category: "RegisterShift", en: "Casual: Catch you later! | Formal: I look forward to our next consultation on Thursday.", hi: "अनौपचारिक: बाद में मिलते हैं! | औपचारिक: मैं गुरुवार को हमारे अगले परामर्श सत्र की प्रतीक्षा करूँगा।" },
    { id: "d01_ex_081", category: "RegisterShift", en: "Casual: Hi there! | Formal: Good afternoon, distinguished guests and board members.", hi: "अनौपचारिक: नमस्ते! | औपचारिक: शुभ दोपहर, प्रतिष्ठित अतिथियो और बोर्ड सदस्यो।" },
    { id: "d01_ex_082", category: "RegisterShift", en: "Casual: I gotta run. | Formal: If you will excuse me, I must attend to another scheduled engagement.", hi: "अनौपचारिक: मुझे भागना होगा। | औपचारिक: यदि आप क्षमा करें, तो मुझे एक अन्य निर्धारित बैठक में उपस्थित होना होगा।" },
    { id: "d01_ex_083", category: "RegisterShift", en: "Casual: Tell your dad I said hi. | Formal: Please convey my highest regards to your father.", hi: "अनौपचारिक: अपने पापा को मेरा नमस्ते कहना। | औपचारिक: कृपया अपने पिताजी को मेरा सादर प्रणाम प्रेषित करें।" },
    { id: "d01_ex_084", category: "RegisterShift", en: "Casual: No worries! | Formal: It is our absolute pleasure to be of service.", hi: "अनौपचारिक: कोई बात नहीं! | औपचारिक: आपकी सेवा करना हमारे लिए अत्यंत प्रसन्नता की बात है।" },
    { id: "d01_ex_085", category: "RegisterShift", en: "Casual: Sleep tight! | Formal: Good night, and may you enjoy a restful evening.", hi: "अनौपचारिक: आराम से सो जाओ! | औपचारिक: शुभ रात्रि, आपकी रात अत्यंत शांतिपूर्ण रहे।" },

    // 8. Dialogue & Conversational Exchanges (15)
    { id: "d01_ex_086", category: "DialogueExchange", en: "Speaker A: Good morning, Dr. Kapoor! How was your flight from London?\nSpeaker B: Good morning, Priya! It was smooth and on time, thank you.", hi: "वक्ता A: शुभ प्रभात, डॉ. कपूर! लंदन से आपकी उड़ान कैसी रही?\nवक्ता B: शुभ प्रभात, प्रिया! यात्रा बहुत सुगम और समय पर रही, धन्यवाद।" },
    { id: "d01_ex_087", category: "DialogueExchange", en: "Speaker A: Good afternoon, Ms. Sen! Welcome to our corporate headquarters.\nSpeaker B: Good afternoon! Thank you for arranging such a warm reception.", hi: "वक्ता A: शुभ दोपहर, सुश्री सेन! हमारे कॉर्पोरेट मुख्यालय में आपका स्वागत है।\nवक्ता B: शुभ दोपहर! इतने आत्मीय स्वागत की व्यवस्था करने के लिए धन्यवाद।" },
    { id: "d01_ex_088", category: "DialogueExchange", en: "Speaker A: Good evening, everyone! Let us begin the opening ceremony.\nSpeaker B: Good evening! We are excited to witness the keynote addresses.", hi: "वक्ता A: शुभ संध्या, आप सभी को! आइए उद्घाटन समारोह शुरू करते हैं।\nवक्ता B: शुभ संध्या! हम मुख्य भाषणों को सुनने के लिए अत्यंत उत्साहित हैं।" },
    { id: "d01_ex_089", category: "DialogueExchange", en: "Speaker A: It was a pleasure discussing this proposal with you. Good night!\nSpeaker B: Good night, Mr. Bose! Have a safe commute home.", hi: "वक्ता A: आपके साथ इस प्रस्ताव पर चर्चा करना सुखद रहा। शुभ रात्रि!\nवक्ता B: शुभ रात्रि, मिस्टर बोस! घर तक आपकी यात्रा सुरक्षित रहे।" },
    { id: "d01_ex_090", category: "DialogueExchange", en: "Speaker A: How are you doing this morning, Tanvi?\nSpeaker B: I am doing very well, thank you; how about yourself?", hi: "वक्ता A: तन्वी, आज सुबह आप कैसी हैं?\nवक्ता B: मैं बहुत अच्छी हूँ, धन्यवाद; आप अपने बारे में बताइए?" },
    { id: "d01_ex_091", category: "DialogueExchange", en: "Speaker A: Allow me to introduce my colleague, Mr. Arvind Kumar.\nSpeaker B: Pleased to meet you, Mr. Kumar; welcome to our engineering team.", hi: "वक्ता A: मुझे अपने सहकर्मी मिस्टर अरविंद कुमार का परिचय कराने की अनुमति दें।\nवक्ता B: मिस्टर कुमार, आपसे मिलकर प्रसन्नता हुई; हमारी इंजीनियरिंग टीम में आपका स्वागत है।" },
    { id: "d01_ex_092", category: "DialogueExchange", en: "Speaker A: Goodbye, Sir! I will email the revised financial sheets by 5 PM.\nSpeaker B: Thank you, Sneha; have a productive afternoon.", hi: "वक्ता A: अलविदा, सर! मैं शाम 5 बजे तक संशोधित वित्तीय पत्रक ईमेल कर दूँगी।\nवक्ता B: धन्यवाद, स्नेहा; आपकी दोपहर उत्पादक रहे।" },
    { id: "d01_ex_093", category: "DialogueExchange", en: "Speaker A: Good evening, Uncle! How is Auntie recovering from her surgery?\nSpeaker B: Good evening, beta! She is making steady progress, thank you for asking.", hi: "वक्ता A: शुभ संध्या, अंकल! आंटी जी की सर्जरी के बाद तबीयत कैसी है?\nवक्ता B: शुभ संध्या, बेटा! उनकी सेहत में लगातार सुधार हो रहा है, पूछने के लिए धन्यवाद।" },
    { id: "d01_ex_094", category: "DialogueExchange", en: "Speaker A: See you tomorrow morning at the breakfast briefing.\nSpeaker B: Absolutely! I will be there at 8:30 AM sharp.", hi: "वक्ता A: कल सुबह नाश्ते की ब्रीफिंग में मिलते हैं।\nवक्ता B: बिल्कुल! मैं ठीक सुबह 8:30 बजे वहाँ उपस्थित रहूँगा।" },
    { id: "d01_ex_095", category: "DialogueExchange", en: "Speaker A: Please give my warmest regards to Professor Swaminathan.\nSpeaker B: I certainly will; he will be delighted to hear from you.", hi: "वक्ता A: कृपया प्रोफेसर स्वामीनाथन को मेरा सादर प्रणाम प्रेषित कीजिएगा।\nवक्ता B: मैं अवश्य करूँगा; आपका संदेश पाकर वे अत्यंत प्रसन्न होंगे।" },
    { id: "d01_ex_096", category: "DialogueExchange", en: "Speaker A: Good morning! Is this the registration desk for the AI conference?\nSpeaker B: Yes, it is! Good morning, and welcome; may I have your registration ID?", hi: "वक्ता A: शुभ प्रभात! क्या यह एआई सम्मेलन का पंजीकरण डेस्क है?\nवक्ता B: जी हाँ, बिल्कुल! शुभ प्रभात, और आपका स्वागत है; क्या मुझे आपका पंजीकरण आईडी मिल सकता है?" },
    { id: "d01_ex_097", category: "DialogueExchange", en: "Speaker A: Take care and have a wonderful holiday with your family!\nSpeaker B: Thank you so much! See you when the office reopens on Monday.", hi: "वक्ता A: अपना ध्यान रखें और अपने परिवार के साथ छुट्टियों का भरपूर आनंद लें!\nवक्ता B: बहुत-बहुत धन्यवाद! सोमवार को कार्यालय खुलने पर मिलते हैं।" },
    { id: "d01_ex_098", category: "DialogueExchange", en: "Speaker A: Good afternoon, team! Let us keep today's standup meeting concise.\nSpeaker B: Good afternoon, Nitin! We are ready with our daily project updates.", hi: "वक्ता A: शुभ दोपहर, टीम! आइए आज की स्टैंडअप मीटिंग को संक्षिप्त रखें।\nवक्ता B: शुभ दोपहर, नितिन! हम अपने दैनिक प्रोजेक्ट अपडेट के साथ तैयार हैं।" },
    { id: "d01_ex_099", category: "DialogueExchange", en: "Speaker A: It was an honor meeting the chairman today.\nSpeaker B: Indeed; his parting words were profoundly inspiring for all of us.", hi: "वक्ता A: आज चेयरमैन महोदय से मिलना सचमुच एक बड़ा सम्मान था।\nवक्ता B: वास्तव में; उनके विदाई शब्द हम सभी के लिए अत्यंत प्रेरणादायक थे।" },
    { id: "d01_ex_100", category: "DialogueExchange", en: "Speaker A: Good night, everyone! Do not forget to lock the lab doors.\nSpeaker B: Good night, Sir! All equipment has been safely shut down.", hi: "वक्ता A: शुभ रात्रि, आप सभी को! लैब के दरवाज़े लॉक करना न भूलें।\nवक्ता B: शुभ रात्रि, सर! सभी उपकरण सुरक्षित रूप से बंद कर दिए गए हैं।" }
  ];

  const translationDrills = [
    { id: "d01_tr_01", type: "en_to_hi", source: "Good morning, Dr. Sharma! How are you today?", target: "शुभ प्रभात, डॉ. शर्मा! आज आप कैसे हैं?", explanation: "'Good morning' सुबह के अभिवादन के लिए प्रयुक्त होता है।" },
    { id: "d01_tr_02", type: "hi_to_en", source: "शुभ दोपहर, मैम! बैठक में आपका स्वागत है।", target: "Good afternoon, Ma'am! Welcome to the meeting.", explanation: "दोपहर 12 बजे से 5 बजे के बीच 'Good afternoon' का प्रयोग करें।" },
    { id: "d01_tr_03", type: "en_to_hi", source: "Good evening, Uncle! We are glad you came.", target: "शुभ संध्या, अंकल! हमें खुशी है कि आप आए।", explanation: "शाम को 5 बजे के बाद पहुँचने पर 'Good evening' कहा जाता है।" },
    { id: "d01_tr_04", type: "hi_to_en", source: "शुभ रात्रि, कल सुबह नौ बजे मिलते हैं।", target: "Good night, see you tomorrow morning at nine.", explanation: "विदाई के समय 'Good night' का प्रयोग होता है।" },
    { id: "d01_tr_05", type: "en_to_hi", source: "It is a pleasure to meet you, Mr. Verma.", target: "मिस्टर वर्मा, आपसे मिलकर प्रसन्नता हुई।", explanation: "औपचारिक परिचय के समय 'It is a pleasure to meet you' एक मानक शिष्टाचार है।" },
    { id: "d01_tr_06", type: "hi_to_en", source: "मेरा नाम राहुल है और मैं एक सॉफ्टवेयर इंजीनियर हूँ।", target: "My name is Rahul and I am a software engineer.", explanation: "'Myself Rahul' कभी न कहें; 'My name is Rahul' या 'I am Rahul' कहें।" },
    { id: "d01_tr_07", type: "en_to_hi", source: "Please convey my warm regards to your parents.", target: "कृपया अपने माता-पिता को मेरा सादर प्रणाम कहें।", explanation: "'Regards' हमेशा बहुवचन में सम्मान और शुभकामनाओं के लिए प्रयुक्त होता है।" },
    { id: "d01_tr_08", type: "hi_to_en", source: "अलविदा! अपना ध्यान रखना और सुरक्षित यात्रा करना।", target: "Goodbye! Take care and travel safely.", explanation: "विदाई के समय 'Goodbye' और 'Take care' का संयोजन बहुत स्वाभाविक है।" },
    { id: "d01_tr_09", type: "en_to_hi", source: "Good afternoon, everyone! Let us commence our session.", target: "शुभ दोपहर, आप सभी को! आइए हम अपना सत्र प्रारंभ करें।", explanation: "'Commence' औपचारिक रूप से शुरू करने के लिए उपयुक्त शब्द है।" },
    { id: "d01_tr_10", type: "hi_to_en", source: "आज आपसे बातचीत करके बहुत अच्छा लगा।", target: "It was wonderful speaking with you today.", explanation: "बातचीत के अंत में कृतज्ञता व्यक्त करने का प्राकृतिक रूप।" },
    { id: "d01_tr_11", type: "en_to_hi", source: "Allow me to introduce my colleague, Ms. Sen.", target: "मुझे अपनी सहकर्मी, सुश्री सेन का परिचय कराने की अनुमति दें।", explanation: "सहकर्मियों का औपचारिक परिचय कराने की मानक संरचना।" },
    { id: "d01_tr_12", type: "hi_to_en", source: "कल शाम को आपसे दोबारा मिलकर खुशी होगी।", target: "I look forward to seeing you again tomorrow evening.", explanation: "'Look forward to' भविष्य की मुलाकात के लिए उत्सुकता और सम्मान व्यक्त करता है।" },
    { id: "d01_tr_13", type: "en_to_hi", source: "Victor greeted every visitor with a warm smile.", target: "विक्टर ने प्रत्येक आगंतुक का एक मधुर मुस्कान के साथ अभिवादन किया।", explanation: "'Greet' सकर्मक क्रिया है, इसके बाद 'to' नहीं आता।" },
    { id: "d01_tr_14", type: "hi_to_en", source: "घर पर सभी बड़ों को मेरा सादर प्रणाम दीजिएगा।", target: "Please give my respectful regards to all the elders at home.", explanation: "'Respectful regards' बड़ों के प्रति आदर प्रकट करने का सही अनुवाद है।" },
    { id: "d01_tr_15", type: "en_to_hi", source: "Have a safe and pleasant flight back to Kolkata.", target: "कोलकाता वापसी की आपकी उड़ान सुरक्षित और सुखद रहे।", explanation: "यात्रा की शुभकामनाओं के लिए मानक अभिव्यक्ति।" },
    { id: "d01_tr_16", type: "hi_to_en", source: "शुभ प्रभात, सर! आज का मौसम बहुत सुहावना है।", target: "Good morning, Sir! The weather is very pleasant today.", explanation: "सुबह के अभिवादन के बाद मौसम पर अनौपचारिक टिप्पणी।" },
    { id: "d01_tr_17", type: "en_to_hi", source: "I must take your leave now as I have another meeting.", target: "अब मुझे आपसे विदा लेनी होगी क्योंकि मेरी एक अन्य बैठक है।", explanation: "'Take someone's leave' विनम्रता से विदा लेने का औपचारिक मुहावरा है।" },
    { id: "d01_tr_18", type: "hi_to_en", source: "आपका बहुत-बहुत स्वागत है; आपकी सहायता करना हमारे लिए खुशी की बात है।", target: "You are most welcome; it is our pleasure to assist you.", explanation: "'Mention not' की जगह 'You are most welcome' का प्रयोग करें।" },
    { id: "d01_tr_19", type: "en_to_hi", source: "Pleased to make your acquaintance, Director Kapoor.", target: "निदेशक कपूर, आपसे परिचय प्राप्त करके अत्यंत प्रसन्नता हुई।", explanation: "उच्च अधिकारियों से पहली बार मिलने पर प्रयुक्त औपचारिक शिष्टाचार।" },
    { id: "d01_tr_20", type: "hi_to_en", source: "शुभ रात्रि! अच्छी नींद लें और मीठे सपने देखें।", target: "Good night! Sleep well and have sweet dreams.", explanation: "रात्रि में सोने से पहले विदाई का आत्मीय रूप।" },
    { id: "d01_tr_21", type: "en_to_hi", source: "Always acknowledge a senior colleague's greeting in the hallway.", target: "गलियारे में हमेशा किसी वरिष्ठ सहकर्मी के अभिवादन को स्वीकार करें।", explanation: "'Acknowledge' अभिवादन का उत्तर देने के लिए उपयुक्त शब्द है।" },
    { id: "d01_tr_22", type: "hi_to_en", source: "क्या कल सुबह नाश्ते पर हमारी मुलाकात हो सकती है?", target: "Could we meet over breakfast tomorrow morning?", explanation: "विनम्र अनुरोध के लिए 'Could we meet...' का प्रयोग करें।" },
    { id: "d01_tr_23", type: "en_to_hi", source: "We extend a cordial welcome to all our international delegates.", target: "हम अपने सभी अंतरराष्ट्रीय प्रतिनिधियों का हार्दिक स्वागत करते हैं।", explanation: "'Cordial welcome' सौहार्दपूर्ण स्वागत को दर्शाता है।" },
    { id: "d01_tr_24", type: "hi_to_en", source: "आज की प्रस्तुति के लिए आपके आगमन की हम सराहना करते हैं।", target: "We appreciate your arrival for today's presentation.", explanation: "'Appreciate' समय पर पहुँचने के प्रति आभार प्रकट करता है।" },
    { id: "d01_tr_25", type: "en_to_hi", source: "Goodbye for now, and have a wonderfully productive week ahead!", target: "अभी के लिए अलविदा, और आपका आने वाला सप्ताह अत्यधिक उत्पादक रहे!", explanation: "सप्ताह की शुरुआत में विदाई की उत्कृष्ट पेशेवर अभिव्यक्ति।" }
  ];

  const exercises = [];
  // Build 65 rich exercises spanning multiple choice, translation, error correction, minimal pairs, sentence ordering, audio cloze
  for (let i = 1; i <= 65; i++) {
    const exId = `day01_ex_${String(i).padStart(3, '0')}`;
    if (i === 1) {
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: "You enter a client's corporate office in New Delhi at 9:30 AM. What is the most appropriate greeting?",
        options: ["Good night, Sir!", "Good morning, Sir!", "Good evening, Sir!", "Goodbye, Sir!"],
        correctAnswer: "Good morning, Sir!",
        explanationEn: "'Good morning' is used from sunrise until 12:00 noon in all professional and social settings.",
        explanationHi: "सूर्योदय से दोपहर 12:00 बजे तक मिलने पर हमेशा 'Good morning' कहा जाता है।",
        skillTag: "GREETINGS_TIME"
      });
    } else if (i === 2) {
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: "You arrive at your uncle's house for dinner at 8:00 PM. What should you say upon entering?",
        options: ["Good night, Uncle!", "Good evening, Uncle!", "Goodbye, Uncle!", "Sleep well, Uncle!"],
        correctAnswer: "Good evening, Uncle!",
        explanationEn: "'Good evening' is an arrival greeting used after 5:00 PM. 'Good night' is only said when parting to go to bed.",
        explanationHi: "शाम 5:00 बजे के बाद रात को किसी से मिलते समय 'Good evening' कहें। 'Good night' केवल विदा लेते समय कहा जाता है।",
        skillTag: "GREETINGS_TIME"
      });
    } else if (i === 3) {
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: "Identify and correct the fossilized Indian English error in this self-introduction: 'Myself Rahul Sharma from Pune.'",
        targetText: "Myself Rahul Sharma from Pune.",
        correctAnswer: "My name is Rahul Sharma, and I am from Pune. / I am Rahul Sharma from Pune.",
        explanationEn: "In standard English grammar, reflexive pronouns like 'Myself' cannot function as the subject of a sentence. Use 'My name is...' or 'I am...'.",
        explanationHi: "'Myself' एक रिफ्लेक्सिव प्रोनाउन है, यह कभी भी वाक्य का कर्ता (Subject) नहीं बन सकता। हमेशा 'My name is...' या 'I am...' कहें।",
        skillTag: "L1_ERROR_REVERSAL"
      });
    } else if (i === 4) {
      exercises.push({
        id: exId,
        type: "minimal_pair_discrim",
        prompt: "Which word starts with the bilabial approximant /w/ (rounded lips like whistling)?",
        options: ["Vest", "West", "Vine", "Vane"],
        correctAnswer: "West",
        explanationEn: "'West' begins with /w/ where the lips are fully rounded. 'Vest' begins with /v/ where the upper teeth touch the lower lip.",
        explanationHi: "'West' बोलते समय होंठ गोल होते हैं (/w/), जबकि 'Vest' में ऊपर के दांत निचले होंठ को छूते हैं (/v/)।",
        skillTag: "PHONETICS_MINIMAL_PAIRS"
      });
    } else if (i === 5) {
      exercises.push({
        id: exId,
        type: "sentence_scramble",
        prompt: "Arrange the scrambled words into a grammatically sound formal greeting: [pleasure / is / meet / it / to / a / you]",
        words: ["pleasure", "is", "meet", "it", "to", "a", "you"],
        correctAnswer: "It is a pleasure to meet you",
        explanationEn: "Standard dummy pronoun structure: 'It is a pleasure to meet you.'",
        explanationHi: "मानक औपचारिक परिचय वाक्य: 'It is a pleasure to meet you.'",
        skillTag: "SYNTAX_SVO"
      });
    } else if (i <= 20) {
      // Multiple Choice & Register Recognition
      const timeOpts = [
        { time: "2:30 PM", ans: "Good afternoon", reason: "Between 12:00 PM and 5:00 PM" },
        { time: "6:15 PM", ans: "Good evening", reason: "After 5:00 PM arrival" },
        { time: "11:15 AM", ans: "Good morning", reason: "Before 12:00 noon" },
        { time: "10:45 PM parting", ans: "Good night", reason: "Parting at night" },
        { time: "8:00 AM", ans: "Good morning", reason: "Early morning" },
        { time: "1:00 PM", ans: "Good afternoon", reason: "Early afternoon" },
        { time: "7:30 PM arrival", ans: "Good evening", reason: "Evening arrival" },
        { time: "11:00 PM bedtime", ans: "Good night", reason: "Bedtime farewell" },
        { time: "4:45 PM", ans: "Good afternoon", reason: "Late afternoon before 5 PM" },
        { time: "5:05 PM", ans: "Good evening", reason: "Evening starts after 5 PM" },
        { time: "10:00 AM meeting", ans: "Good morning", reason: "Morning meeting" },
        { time: "3:00 PM conference", ans: "Good afternoon", reason: "Afternoon conference" },
        { time: "9:00 PM party arrival", ans: "Good evening", reason: "Arrival greeting at party" },
        { time: "11:30 PM departure", ans: "Good night", reason: "Departure farewell at night" },
        { time: "6:00 AM walk", ans: "Good morning", reason: "Early morning greeting" }
      ];
      const opt = timeOpts[i - 6];
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `Select the correct salutation for a meeting occurring at ${opt.time}:`,
        options: [`${opt.ans}, Sir!`, `Incorrect greeting, Sir!`, `See ya later, Sir!`, `What's up, Sir!`],
        correctAnswer: `${opt.ans}, Sir!`,
        explanationEn: `Appropriate formula: ${opt.reason}.`,
        explanationHi: `सही समय-अभिवादन: ${opt.ans} (${opt.reason})।`,
        skillTag: "GREETINGS_TIME"
      });
    } else if (i <= 35) {
      // Translation Drills (Hindi -> English & English -> Hindi)
      const trIdx = i - 21;
      const tr = translationDrills[trIdx];
      exercises.push({
        id: exId,
        type: tr.type === "en_to_hi" ? "translation_en_to_hi" : "translation_hi_to_en",
        prompt: `Translate accurately: "${tr.source}"`,
        correctAnswer: tr.target,
        explanationEn: tr.explanation,
        explanationHi: tr.explanation,
        skillTag: "TRANSLATION_CONTRAST"
      });
    } else if (i <= 45) {
      // Error Correction Drills (Indian English Inversions)
      const errList = [
        { orig: "Myself Amit from accounts team.", fix: "My name is Amit, from the accounts team. / I am Amit from the accounts team.", why: "Reflexive 'myself' cannot be sentence subject." },
        { orig: "Good night, Uncle! (Said at 7:30 PM upon arrival)", fix: "Good evening, Uncle!", why: "'Good night' is only for departure/sleep." },
        { orig: "Please revert back with the details.", fix: "Please reply with the details. / Please get back to me with the details.", why: "'Revert' already means turn back; 'back' is redundant." },
        { orig: "Kindly do the needful at your end.", fix: "Please process the requested approval at your earliest convenience.", why: "Vague Victorian bureaucratic cliché; specify exact action." },
        { orig: "I passed out from IIT Delhi in 2020.", fix: "I graduated from IIT Delhi in 2020.", why: "'Passed out' means fainted or lost consciousness." },
        { orig: "Meet my cousin sister Priya.", fix: "Meet my cousin, Priya.", why: "In English, 'cousin' does not take 'brother' or 'sister'." },
        { orig: "I am having two brothers.", fix: "I have two brothers.", why: "Possession is a stative verb and cannot take continuous -ing." },
        { orig: "Repeat it once again please.", fix: "Could you please repeat that? / Please say that again.", why: "'Repeat' already means say again; 'once again' is redundant." },
        { orig: "He is having high fever today.", fix: "He has a high fever today.", why: "Physical illness state is stative ('has a fever')." },
        { orig: "We will discuss about this matter tomorrow.", fix: "We will discuss this matter tomorrow.", why: "'Discuss' is a transitive verb; no preposition 'about'." }
      ];
      const errItem = errList[i - 36];
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: `Correct this ungrammatical sentence: "${errItem.orig}"`,
        targetText: errItem.orig,
        correctAnswer: errItem.fix,
        explanationEn: errItem.why,
        explanationHi: errItem.why,
        skillTag: "L1_ERROR_REVERSAL"
      });
    } else if (i <= 55) {
      // Phonetics, Stress & Syllables
      const phonList = [
        { word: "Morning", syllables: "2", stress: "1st Syllable", ipa: "/ˈmɔː.nɪŋ/" },
        { word: "Afternoon", syllables: "3", stress: "3rd Syllable", ipa: "/ˌɑːf.təˈnuːn/" },
        { word: "Evening", syllables: "2", stress: "1st Syllable", ipa: "/ˈiːv.nɪŋ/" },
        { word: "Colleague", syllables: "2", stress: "1st Syllable", ipa: "/ˈkɒl.iːɡ/" },
        { word: "Acquaintance", syllables: "3", stress: "2nd Syllable", ipa: "/əˈkweɪn.təns/" },
        { word: "Hospitality", syllables: "5", stress: "3rd Syllable", ipa: "/ˌhɒs.pɪˈtæl.ə.ti/" },
        { word: "Etiquette", syllables: "3", stress: "1st Syllable", ipa: "/ˈet.ɪ.ket/" },
        { word: "Demeanor", syllables: "3", stress: "2nd Syllable", ipa: "/dɪˈmiː.nə/" },
        { word: "Cordial", syllables: "3", stress: "1st Syllable", ipa: "/ˈkɔː.di.əl/" },
        { word: "Introduction", syllables: "4", stress: "3rd Syllable", ipa: "/ˌɪn.trəˈdʌk.ʃən/" }
      ];
      const phItem = phonList[i - 46];
      exercises.push({
        id: exId,
        type: "stress_identification",
        prompt: `Identify the primary stressed syllable in the word "${phItem.word}" (${phItem.ipa}):`,
        options: ["1st Syllable", "2nd Syllable", "3rd Syllable", "4th Syllable"],
        correctAnswer: phItem.stress,
        explanationEn: `In "${phItem.word}", primary stress falls on the ${phItem.stress} (${phItem.syllables} syllables total).`,
        explanationHi: `"${phItem.word}" में मुख्य बलाघात (Primary Stress) ${phItem.stress} पर होता है।`,
        skillTag: "PHONETICS_STRESS"
      });
    } else {
      // Audio Cloze & Connected Speech
      const clozes = [
        { text: "Good morning, Dr. Sharma! It is [a pleasure] to meet you.", ans: "a pleasure", hint: "Formal expression of meeting delight" },
        { text: "Please convey my warmest [regards] to your parents.", ans: "regards", hint: "Plural noun for respectful greetings" },
        { text: "Victor and William are [colleagues] in the marketing division.", ans: "colleagues", hint: "Workplace peers" },
        { text: "We had a brief exchange of social [pleasantries] before the keynote.", ans: "pleasantries", hint: "Polite opening remarks" },
        { text: "The conference will [commence] promptly at nine o'clock.", ans: "commence", hint: "Formal verb for begin" },
        { text: "Allow me to [introduce] our new executive director.", ans: "introduce", hint: "Verb for presenting someone" },
        { text: "Good [evening], ladies and gentlemen; welcome to our annual gala.", ans: "evening", hint: "Arrival greeting after 5 PM" },
        { text: "It was an absolute [honor] hosting your delegation this week.", ans: "honor", hint: "Deep respect/privilege" },
        { text: "Please report to the main [reception] desk upon arrival.", ans: "reception", hint: "Front greeting desk" },
        { text: "I must take your [leave] now as it is getting quite late.", ans: "leave", hint: "Parting idiom: take someone's leave" }
      ];
      const clItem = clozes[i - 56];
      exercises.push({
        id: exId,
        type: "audio_cloze",
        prompt: `Fill in the missing word in the sentence: "${clItem.text}"`,
        correctAnswer: clItem.ans,
        explanationEn: `Correct lexical chunk: "${clItem.ans}" (${clItem.hint}).`,
        explanationHi: `सही शब्द: "${clItem.ans}" (${clItem.hint})।`,
        skillTag: "CONNECTED_SPEECH_CLOZE"
      });
    }
  }

  return {
    dayNumber: 1,
    id: "day_01",
    titleEn: "Daily Greetings, Time-Bound Salutations & Basic Parting",
    titleHi: "दैनिक अभिवादन, समय-आधारित नमस्कार और विदाई के शिष्टाचार",
    cefr: "A1.1",
    estMinutes: 45,
    prerequisites: "None (True Beginner to Intermediate Polish)",
    objectivesEn: [
      "Distinguish and accurately apply time-specific greetings (Good morning, afternoon, evening) according to precise clock parameters.",
      "Differentiate between arrival greeting formulas (meeting) and departure parting formulas (leaving/sleeping).",
      "Eliminate fossilized Indian English errors in self-introductions ('Myself...') and bureaucratic redundancies ('revert back').",
      "Master the phonetic contrast between labiodental /v/ (teeth on lip) and bilabial /w/ (rounded lips) in daily greetings.",
      "Apply appropriate falling vs rising intonation contours to project executive confidence and genuine social warmth."
    ],
    objectivesHi: [
      "घड़ी के सटीक समय के अनुसार सही अभिवादन (Good morning, afternoon, evening) का चयन और प्रयोग करना।",
      "मिलते समय के अभिवादन (Arrival Greeting) और विदा लेते समय के शब्दों (Parting Farewell) के बीच के अंतर को स्पष्ट समझना।",
      "आत्म-परिचय में भारतीय अंग्रेजी की पुरानी गलतियों ('Myself...') और अनावश्यक दोहराव ('revert back') को पूरी तरह समाप्त करना।",
      "दैनिक अभिवादन में दंतोष्ठ्य /v/ (निचले होंठ पर दांत) और द्वयोष्ठ्य /w/ (गोल होंठ) के बीच ध्वन्यात्मक अंतर में निपुण होना।",
      "कार्यस्थल पर आत्मविश्वास और शिष्टाचार प्रकट करने के लिए सही सुर-लहर (Falling vs Rising Intonation) का प्रयोग करना।"
    ],
    teach: {
      hindiExplanation: `डे 01 में आपका स्वागत है! यह हमारे 60-दिवसीय अंग्रेजी प्रवीणता पाठ्यक्रम का पहला और सबसे बुनियादी पाठ है।

अंग्रेजी और हिंदी की अभिवादन प्रणाली में एक बहुत बड़ा संरचनात्मक अंतर है:
1. **हिंदी में**: हम दिन के किसी भी समय मिलने पर 'नमस्ते' या 'प्रणाम' कह सकते हैं। समय बदलने से हमारा मूल शब्द नहीं बदलता।
2. **अंग्रेजी में**: अभिवादन पूरी तरह **घड़ी के समय (Clock Time)** और **सामाजिक संदर्भ (Social Context)** से बंधा होता है।

### 1. समय-आधारित अभिवादन (Time-Bound Salutations):
- **Good morning**: सूर्योदय से दोपहर 12:00 बजे तक।
- **Good afternoon**: दोपहर 12:00 बजे से शाम 5:00 बजे तक।
- **Good evening**: शाम 5:00 बजे से लेकर रात के किसी भी समय (यहाँ तक कि रात 10 या 11 बजे भी) **मिलते समय**।
- **Good night**: यह कभी भी मिलने का अभिवादन नहीं है! यह केवल **विदा लेते समय (Parting)** या **सोने जाते समय** कहा जाता है।

### 2. L1 हिंदी भाषियों के लिए सबसे बड़ी गलतियाँ (Indian English Fossilization Traps):
- ❌ **गलत**: रात 8 बजे किसी के घर पहुँचते ही कहना: "*Good night, Uncle!*"
  ✔️ **सही**: "*Good evening, Uncle! How are you?*" (मिलते समय), और विदा होते समय कहें: "*Good night, Uncle!*"
- ❌ **गलत**: "*Myself Rahul Sharma.*" (रिफ्लेक्सिव प्रोनाउन कभी वाक्य का कर्ता नहीं हो सकता।)
  ✔️ **सही**: "*My name is Rahul Sharma.*" या "*I am Rahul Sharma.*"
- ❌ **गलत**: "*Mention not.*"
  ✔️ **सही**: "*You are most welcome!*" या "*It is my pleasure.*"`,
      englishExplanation: `Welcome to Day 01! This lesson establishes the bedrock of communicative competence: time-bound greetings, social distance registers, departure formulas, and the eradication of common L1 transfer errors.

Key Linguistic Principles:
1. **Clock-Anchored Formulas**: English salutations are governed by exact diurnal windows:
   - 05:00 AM – 12:00 PM: *Good morning*
   - 12:00 PM – 05:00 PM: *Good afternoon*
   - 05:00 PM – Late Night: *Good evening* (Arrival greeting only)
   - Night Parting / Sleep: *Good night* (Strictly a farewell)
2. **Grammatical Subject Integrity**: In standard English, reflexive pronouns (*myself, himself, herself*) require an antecedent and cannot serve as the grammatical subject of an independent clause. Self-introductions must use the nominative subject pronoun (*I am...*) or the possessive noun phrase (*My name is...*).
3. **Register Stratification**: Knowing when to deploy formal titles (*Sir, Ma'am, Dr. [Last Name]*) versus peer-level informal salutations (*Hi, Hello, Hey*).`,
      grammarRules: [
        {
          ruleNumber: 1,
          title: "Diurnal Greeting Boundaries (समय सीमा नियम)",
          description: "'Good morning' terminates strictly at 12:00 noon. From 12:01 PM to 17:00 PM, 'Good afternoon' is mandatory. After 17:00 PM, 'Good evening' is used whenever initiating a social or professional encounter.",
          register: "Universal Standard"
        },
        {
          ruleNumber: 2,
          title: "Meeting vs. Parting Boundary (मिलना बनाम विदाई)",
          description: "'Good evening' is an arrival formula. 'Good night' is an irreversible departure formula. Arriving at a conference at 20:00 PM requires 'Good evening, everyone!'. Departing at 22:00 PM requires 'Good night, everyone!'.",
          register: "Pragmatic Social Rule"
        },
        {
          ruleNumber: 3,
          title: "Subject Pronoun in Self-Introductions (आत्म-परिचय में कर्ता नियम)",
          description: "Never begin a self-introduction with 'Myself'. The subject of the sentence must be a nominative pronoun ('I am [Name]') or a possessive structure ('My name is [Name]').",
          register: "Standard Grammatical Syntax"
        },
        {
          ruleNumber: 4,
          title: "Addressing Hierarchy & Social Titles (संबोधन पदानुक्रम)",
          description: "Use 'Sir' / 'Ma'am' when addressing superiors, clients, or elders whose names are unknown. When the surname is known, combine the honorific title with the surname ('Mr. Verma', 'Dr. Sen', 'Ms. Iyer'), never with just the first name in formal settings.",
          register: "Executive & Formal Etiquette"
        }
      ],
      formulaTable: [
        { subjectGroup: "Morning Arrival (05:00–12:00)", formula: "Good morning + [Title / Name] + [Optional: How are you today?]", exampleEn: "Good morning, Dr. Sharma! How are you today?", meaningHi: "शुभ प्रभात, डॉ. शर्मा! आज आप कैसे हैं?" },
        { subjectGroup: "Afternoon Arrival (12:00–17:00)", formula: "Good afternoon + [Title / Name] + [Optional: Welcome to the meeting.]", exampleEn: "Good afternoon, Ms. Sen! Welcome to the meeting.", meaningHi: "शुभ दोपहर, सुश्री सेन! बैठक में आपका स्वागत है।" },
        { subjectGroup: "Evening Arrival (17:00–Late)", formula: "Good evening + [Title / Name] + [Optional: Pleased to see you.]", exampleEn: "Good evening, Uncle! It is wonderful to see you.", meaningHi: "शुभ संध्या, अंकल! आपसे मिलकर बहुत अच्छा लगा।" },
        { subjectGroup: "Night Parting (Bedtime / Departure)", formula: "Good night + [Name] + [Optional: Sleep well / Safe travels.]", exampleEn: "Good night, everyone! Sleep well and see you tomorrow.", meaningHi: "शुभ रात्रि, आप सभी को! आराम से सोएं और कल मिलते हैं।" },
        { subjectGroup: "Standard Self-Introduction", formula: "My name is + [Full Name] + and I am a + [Profession / Role].", exampleEn: "My name is Rohit Verma, and I am a software engineer.", meaningHi: "मेरा नाम रोहित वर्मा है, और मैं एक सॉफ्टवेयर इंजीनियर हूँ।" }
      ],
      hindiSpeakerTrap: {
        trapTitle: "Saying 'Good night' as an arrival greeting & 'Myself [Name]'",
        hindiPattern: "रात 8 बजे किसी के घर पहुँचने पर हिन्दी में 'नमस्ते' कहते हैं, जिसे कई शिक्षार्थी अंग्रेज़ी में 'Good night' अनुवाद कर देते हैं। साथ ही, 'मेरा नाम...' के लिए 'Myself...' का प्रयोग करते हैं।",
        potentialInterference: "Saying: 'Good night Uncle, myself Amit.' upon entering a room at 8 PM.",
        grammaticalRootCause: "'Good night' signals that communication is closing. 'Myself' is a reflexive pronoun lacking an antecedent subject.",
        naturalSolution: "Say: 'Good evening, Uncle! My name is Amit, and I am delighted to meet you.' upon arrival, and save 'Good night' exclusively for departure."
      }
    },
    phonetics: {
      targetSound: "Labiodental /v/ vs. Bilabial Approximant /w/",
      articulatoryMechanics: {
        placeOfArticulation: "/v/ is Labiodental (upper teeth on lower lip); /w/ is Bilabial (both lips rounded like whistling).",
        mannerOfArticulation: "/v/ is a Fricative (air squeezes through friction); /w/ is an Approximant (smooth glide without friction).",
        voicing: "Both /v/ and /w/ are Voiced (vocal cords vibrate continuously).",
        anatomicalInstructions: "For /v/, lightly place your top front teeth on your wet lower lip and blow air while vibrating your voice (feel the buzz). For /w/, push both lips forward into a small tight circle, then glide outward into the following vowel without letting your teeth touch your lip."
      },
      hindiSpeakerPhoneticTrap: "Native Hindi speakers frequently merge /v/ and /w/ into a single intermediate sound (दंतोष्ठ्य 'व'), pronouncing 'vine' and 'wine' identically. This causes listener confusion between 'vest' (बनियान) and 'west' (पश्चिम).",
      minimalPairs: [
        { wordA: { text: "Vest", ipa: "/vest/", audioRef: "d01_pair_01a" }, wordB: { text: "West", ipa: "/west/", audioRef: "d01_pair_01b" }, discriminationNote: "Vest (teeth on lip) vs. West (rounded lips)." },
        { wordA: { text: "Vine", ipa: "/vaɪn/", audioRef: "d01_pair_02a" }, wordB: { text: "Wine", ipa: "/waɪn/", audioRef: "d01_pair_02b" }, discriminationNote: "Vine (grape plant) vs. Wine (beverage)." },
        { wordA: { text: "Vary", ipa: "/ˈveə.ri/", audioRef: "d01_pair_03a" }, wordB: { text: "Wary", ipa: "/ˈweə.ri/", audioRef: "d01_pair_03b" }, discriminationNote: "Vary (change) vs. Wary (cautious)." },
        { wordA: { text: "Vet", ipa: "/vet/", audioRef: "d01_pair_04a" }, wordB: { text: "Wet", ipa: "/wet/", audioRef: "d01_pair_04b" }, discriminationNote: "Vet (animal doctor) vs. Wet (damp)." },
        { wordA: { text: "Vow", ipa: "/vaʊ/", audioRef: "d01_pair_05a" }, wordB: { text: "Wow", ipa: "/waʊ/", audioRef: "d01_pair_05b" }, discriminationNote: "Vow (promise) vs. Wow (exclamation of wonder)." },
        { wordA: { text: "Veil", ipa: "/veɪl/", audioRef: "d01_pair_06a" }, wordB: { text: "Wail", ipa: "/weɪl/", audioRef: "d01_pair_06b" }, discriminationNote: "Veil (face covering) vs. Wail (cry aloud)." }
      ],
      prosodyFocus: {
        type: "Intonation",
        ruleExplanation: "Statements and respectful greetings take a falling intonation contour (↘) to communicate finality and authority. Polite inquiries and yes/no questions take a rising intonation contour (↗).",
        drills: [
          { sentence: "Good morning, Sir! ↘", phoneticNotation: "/ɡʊd ˈmɔː.nɪŋ sɜː/", intonationCurve: "Falling", audioRef: "d01_prosody_01" },
          { sentence: "Pleased to meet you. ↘", phoneticNotation: "/pliːzd tə ˈmiːt juː/", intonationCurve: "Falling", audioRef: "d01_prosody_02" },
          { sentence: "Are you ready to begin? ↗", phoneticNotation: "/ɑː juː ˈred.i tə bɪˈɡɪn/", intonationCurve: "Rising", audioRef: "d01_prosody_03" },
          { sentence: "Good night and sleep well! ↘", phoneticNotation: "/ɡʊd ˈnaɪt ənd ˈsliːp wel/", intonationCurve: "Falling", audioRef: "d01_prosody_04" }
        ]
      }
    },
    learn: {
      vocabulary: vocabulary,
      spokenPhrases: [
        { id: "d01_sp_01", phrase: "Good morning, Sir / Ma'am.", register: "Formal Executive", meaningHi: "शुभ प्रभात महोदय / महोदया।" },
        { id: "d01_sp_02", phrase: "Pleased to make your acquaintance.", register: "Formal Social", meaningHi: "आपसे परिचय प्राप्त करके अत्यंत प्रसन्नता हुई।" },
        { id: "d01_sp_03", phrase: "Allow me to introduce myself; my name is...", register: "Professional Corporate", meaningHi: "मुझे अपना परिचय देने की अनुमति दें; मेरा नाम... है।" },
        { id: "d01_sp_04", phrase: "How are you doing today?", register: "Standard Neutral", meaningHi: "आज आप कैसे हैं?" },
        { id: "d01_sp_05", phrase: "I am doing very well, thank you; how about yourself?", register: "Polite Reciprocal", meaningHi: "मैं बहुत अच्छा हूँ, धन्यवाद; आप अपने बारे में बताइए?" },
        { id: "d01_sp_06", phrase: "Please convey my warmest regards to everyone at home.", register: "Formal Warm", meaningHi: "कृपया घर पर सभी को मेरा सादर प्रणाम / शुभकामनाएं दीजिएगा।" },
        { id: "d01_sp_07", phrase: "It was a distinct pleasure meeting you today.", register: "Executive Parting", meaningHi: "आज आपसे मिलकर सचमुच अत्यंत प्रसन्नता हुई।" },
        { id: "d01_sp_08", phrase: "Good night, sleep well and travel safely.", register: "Night Parting", meaningHi: "शुभ रात्रि, आराम से सोएं और सुरक्षित यात्रा करें।" },
        { id: "d01_sp_09", phrase: "I look forward to seeing you tomorrow morning at nine.", register: "Workplace Scheduling", meaningHi: "कल सुबह नौ बजे आपसे पुनः मिलने की प्रतीक्षा रहेगी।" },
        { id: "d01_sp_10", phrase: "Take care and have a wonderful week ahead!", register: "Friendly Professional", meaningHi: "अपना ध्यान रखें और आपका आने वाला सप्ताह शानदार रहे!" },
        { id: "d01_sp_11", phrase: "Excuse me, I must take your leave now.", register: "Diplomatic Departure", meaningHi: "क्षमा करें, अब मुझे आपसे विदा लेनी होगी।" },
        { id: "d01_sp_12", phrase: "You are most welcome; it is our pleasure to assist you.", register: "Customer Hospitality", meaningHi: "आपका बहुत-बहुत स्वागत है; आपकी सहायता करना हमारे लिए खुशी की बात है।" }
      ]
    },
    examples: {
      bilingualExemplars: examples
    },
    practice: {
      exercises: exercises,
      translationSet: translationDrills
    },
    use: {
      dialogue: {
        scenarioTitleEn: "First Day at the Corporate Headquarters (First Impressions & Salutations)",
        scenarioTitleHi: "कॉर्पोरेट मुख्यालय में पहला दिन (प्रथम प्रभाव एवं अभिवादन)",
        contextDescription: "Rajesh Sharma arrives at the tech innovation center in Bengaluru for his onboarding orientation at 8:45 AM and interacts with the receptionist, senior director, and new colleagues.",
        turns: [
          { speaker: "Rajesh", en: "Good morning! My name is Rajesh Sharma. I am here for the new engineering cohort orientation.", hi: "शुभ प्रभात! मेरा नाम राजेश शर्मा है। मैं नए इंजीनियरिंग ओरिएंटेशन सत्र के लिए यहाँ उपस्थित हुआ हूँ।", phoneticNote: "/ɡʊd ˈmɔː.nɪŋ maɪ ˈneɪm ɪz rɑːˈdʒeɪʃ ˈʃɑː.mə/", audioRef: "d01_dial_01" },
          { speaker: "Receptionist", en: "Good morning, Mr. Sharma! Welcome to our headquarters. Please sign in here and take your visitor badge.", hi: "शुभ प्रभात, मिस्टर शर्मा! हमारे मुख्यालय में आपका स्वागत है। कृपया यहाँ हस्ताक्षर करें और अपना आगंतुक बैज ले लें।", phoneticNote: "/wel.kəm tə ˈaʊə hedˈkwɔː.təz/", audioRef: "d01_dial_02" },
          { speaker: "Director Sen", en: "Good morning, Rajesh! I am Dr. Sen, the vice president of engineering. Pleased to meet you.", hi: "शुभ प्रभात, राजेश! मैं डॉ. सेन हूँ, इंजीनियरिंग का वाइस प्रेसिडेंट। आपसे मिलकर प्रसन्नता हुई।", phoneticNote: "/pliːzd tə ˈmiːt juː/", audioRef: "d01_dial_03" },
          { speaker: "Rajesh", en: "It is an absolute honor to meet you, Dr. Sen. Thank you for welcoming us so warmly.", hi: "डॉ. सेन, आपसे मिलना मेरे लिए अत्यंत सम्मान की बात है। हमारा इतने आत्मीयता से स्वागत करने के लिए धन्यवाद।", phoneticNote: "/ɪt ɪz ən ˈæb.sə.luːt ˈɒn.ə tə ˈmiːt juː/", audioRef: "d01_dial_04" },
          { speaker: "Director Sen", en: "We have an exciting agenda today. Have a productive orientation, and I shall see you in the afternoon briefing.", hi: "आज हमारे पास एक बहुत ही रोमांचक कार्यसूची है। आपका ओरिएंटेशन उत्पादक रहे, और मैं आपसे दोपहर की ब्रीफिंग में मिलूँगा।", phoneticNote: "/hæv ə prəˈdʌk.tɪv ˌɔː.ri.enˈteɪ.ʃən/", audioRef: "d01_dial_05" },
          { speaker: "Rajesh", en: "Thank you, Sir! Have a wonderful day ahead.", hi: "धन्यवाद, सर! आपका आगे का दिन शानदार रहे।", phoneticNote: "/θæŋk juː sɜː hæv ə ˈwʌn.də.fəl deɪ əˈhed/", audioRef: "d01_dial_06" }
        ]
      }
    },
    assess: {
      writtenChecklist: [
        { question: "What is the exact time window during which 'Good afternoon' is used in standard English?", answer: "Between 12:00 PM (noon) and 5:00 PM (17:00)." },
        { question: "Why is saying 'Good night' upon entering an 8:00 PM dinner party grammatically and socially incorrect?", answer: "'Good night' is strictly a departure/parting phrase used when going to sleep or leaving; 'Good evening' is the required arrival greeting." },
        { question: "What is the grammatical defect in the self-introduction 'Myself Priya Verma'?", answer: "'Myself' is a reflexive pronoun that cannot function as a grammatical subject; the correct forms are 'My name is Priya Verma' or 'I am Priya Verma'." },
        { question: "How does the articulation of /v/ differ anatomically from /w/?", answer: "/v/ is labiodental (upper teeth touching lower lip with air friction), whereas /w/ is bilabial (both lips rounded in a tight circle with no teeth contact)." },
        { question: "What intonation contour should be applied to formal greetings like 'Good morning, Sir'?", answer: "A falling intonation contour (↘) expressing authority, respect, and finality." }
      ],
      oralProductionTask: {
        prompt: "Record a 60-second spontaneous self-introduction as if you are entering a professional job interview at 9:30 AM. Greet the panel, state your name correctly (no 'myself'), mention your professional background, and conclude with a polite formal pleasantry.",
        targetStructures: ["Time-appropriate greeting ('Good morning')", "Subject pronoun introduction ('My name is...' / 'I am...')", "Polite pleasantry ('Pleased to meet you / Honor to be here')"],
        targetPhonemes: ["Clear /v/ vs /w/ distinction", "Nasal /ŋ/ in 'morning'", "Falling intonation on statements"],
        evaluationRubric: "Scored on (1) Clock accuracy of greeting, (2) Elimination of 'Myself', (3) Distinct /v/ vs /w/ articulation, (4) Natural cadence and posture."
      },
      benchmarks: [
        { id: "d01_bm_01", benchmark: "Fluently differentiates between arrival salutations and parting farewells with 100% accuracy." },
        { id: "d01_bm_02", benchmark: "Articulates minimal pairs (/v/ vs /w/) with distinct lip geometry and acoustic clarity." },
        { id: "d01_bm_03", benchmark: "Executes unscripted professional self-introduction without fossilized Indian English patterns." }
      ]
    }
  };
}

console.log("[BUILDER] Day 01 enriched module compiled successfully with 60 vocabulary items, 100 model exemplars, 25 translation pairs, and 65 practice exercises.");
