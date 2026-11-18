// scripts/enrich_days33_to_40.js
import fs from 'fs';
import path from 'path';
import {
  generateBilingualExemplars,
  generateStage4Exercises,
  generateTranslationSet
} from './build_stage4_complete.js';

// Specific curriculum profiles for Days 33 to 40
const dayProfiles = {
  33: {
    titleEn: "Deductions, Possibility & Obligation (Must, Might, Can't, Have to, Needn't)",
    titleHi: "निष्कर्ष, संभावना एवं बाध्यता (Must, Might, Can't, Have to, Needn't)",
    cefr: "A2.1",
    targetSound: "Glottal and Modal Elisions (/məst‿biː/ ➔ /məsbiː/, /hæf.tə/)",
    mechanics: "In fast conversational English, modal auxiliaries undergo phonetic reduction: 'have to' assimilates to /hæf.tə/, 'has to' becomes /hæs.tə/, and the /t/ in 'must be' is frequently elided before consonants (/məs.biː/).",
    trap: "Pronouncing 'have to' with a heavy voiced /v/ + /tuː/ instead of the unvoiced assimilated /hæf.tə/.",
    phrases: [
      { en: "He must be exhausted after that long flight.", hi: "उस लंबी उड़ान के बाद वह पक्का बहुत थक गया होगा।", use: "Strong Epistemic Deduction" },
      { en: "That can't be true; I spoke to him ten minutes ago.", hi: "यह सच नहीं हो सकता; मैंने दस मिनट पहले ही उससे बात की थी।", use: "Logical Impossibility" },
      { en: "We might visit the archaeological site tomorrow.", hi: "हम शायद कल उस पुरातात्विक स्थल का दौरा करें।", use: "Future Possibility" },
      { en: "You don't have to dress formally for this gathering.", hi: "आपको इस सभा के लिए औपचारिक कपड़े पहनने की आवश्यकता नहीं है।", use: "Absence of Obligation" },
      { en: "You must not disclose confidential passenger details.", hi: "आपको गोपनीय यात्री विवरण बिल्कुल उजागर नहीं करने चाहिए।", use: "Strict Prohibition" },
      { en: "Passengers have to clear security screening before boarding.", hi: "यात्रियों को विमान पर चढ़ने से पहले सुरक्षा जांच पास करनी होती है।", use: "Institutional Rule" },
      { en: "She has to submit the financial audit by Friday.", hi: "उसे शुक्रवार तक वित्तीय ऑडिट रिपोर्ट जमा करनी होगी।", use: "External Obligation" },
      { en: "You needn't bring an umbrella; it won't rain.", hi: "आपको छाता लाने की ज़रूरत नहीं है; बारिश नहीं होगी।", use: "Lack of Necessity" },
      { en: "Could that be Mr. Sharma's car in the driveway?", hi: "क्या वह कार ड्राइववे में मिस्टर शर्मा की हो सकती है?", use: "Speculative Inquiry" },
      { en: "They must have arrived at the airport already.", hi: "वे अब तक हवाई अड्डे पर पहुँच चुके होंगे।", use: "Past Certain Deduction" },
      { en: "You had to wait three hours for the visa interview, right?", hi: "आपको वीज़ा साक्षात्कार के लिए तीन घंटे इंतज़ार करना पड़ा था, है न?", use: "Past Obligation Inquiry" },
      { en: "We mustn't forget to validate our train tickets.", hi: "हमें अपने ट्रेन टिकट मान्य कराना बिल्कुल नहीं भूलना चाहिए।", use: "Critical Warning" },
      { en: "It could rain later, so keep your rain jacket handy.", hi: "बाद में बारिश हो सकती है, इसलिए अपना रेनकोट साथ रखें।", use: "Pragmatic Advice" },
      { en: "You don't need to apologize for a minor honest oversight.", hi: "एक छोटी सी अनजानी चूक के लिए आपको माफ़ी मांगने की आवश्यकता नहीं है।", use: "Reassurance" },
      { en: "He might not know about the sudden schedule revision.", hi: "शायद उसे अचानक हुए समय-सारिणी बदलाव के बारे में पता न हो।", use: "Negative Possibility" }
    ],
    exemplarPatterns: [
      { en: "He must be at his desk because his computer is unlocked.", hi: "वह पक्का अपनी मेज पर ही होगा क्योंकि उसका कंप्यूटर अनलॉक है।", cat: "Deduction" },
      { en: "You don't have to pay any additional processing fees today.", hi: "आपको आज कोई अतिरिक्त प्रोसेसिंग शुल्क देने की आवश्यकता नहीं है।", cat: "No Obligation" },
      { en: "Visitors must not touch the historic oil paintings.", hi: "आगंतुकों को ऐतिहासिक तैलचित्रों को छूना सख्त मना है।", cat: "Prohibition" },
      { en: "We have to follow the strict laboratory safety protocols.", hi: "हमें सख्त प्रयोगशाला सुरक्षा प्रोटोकॉल का पालन करना होगा।", cat: "Rule" },
      { en: "She might be attending the international physics conference.", hi: "वह शायद अंतरराष्ट्रीय भौतिकी सम्मेलन में भाग ले रही होगी।", cat: "Possibility" }
    ],
    mcqPool: [
      { q: "His coat is on the chair and his laptop is on; he ______ in the building.", opts: ["must be", "can't be", "mustn't be", "needn't be"], ans: "must be", why: "'Must be' expresses 100% logical deduction based on visible physical evidence." },
      { q: "Tomorrow is a national holiday, so you ______ wake up early.", opts: ["don't have to", "must not", "can't", "had to"], ans: "don't have to", why: "'Don't have to' indicates absence of obligation / optional action." },
      { q: "Look at the 'No Photography' sign! You ______ take photos here.", opts: ["must not", "needn't", "don't have to", "might not"], ans: "must not", why: "'Must not' expresses absolute prohibition / forbidden action." },
      { q: "In India, two-wheeler riders ______ wear a certified helmet by law.", opts: ["have to", "might", "can", "needn't"], ans: "have to", why: "'Have to' indicates an external legal/institutional requirement." }
    ],
    blankPool: [
      { p: "She speaks with a distinct French accent; she _____ be from France.", a: "must", exp: "Use 'must' for strong logical deduction." },
      { p: "You _____ not smoke near the oxygen cylinders.", a: "must", exp: "'Must not' signals strict safety prohibition." },
      { p: "Since lunch is provided by the organizers, you _____ not bring food.", a: "need", exp: "'Need not' / 'needn't' indicates lack of obligation." },
      { p: "Every registered voter _____ to present valid government photo identification.", a: "has", exp: "Singular subject 'every registered voter' takes 'has to'." }
    ],
    errorPool: [
      { w: "That answer must not be correct because the math is wrong.", r: "That answer can't be correct because the math is wrong.", e: "For negative logical impossibility, English uses 'can't be', NOT 'must not be'." },
      { w: "You must not to enter without permission.", r: "You must not enter without permission.", e: "Modal auxiliaries take a bare infinitive (no 'to')." },
      { w: "He has to went to Delhi yesterday for court hearing.", r: "He had to go to Delhi yesterday for the court hearing.", e: "Past obligation uses 'had to + V1 (go)'." }
    ],
    transformPool: [
      { p: "Transform using 'must be': 'It is virtually certain that he is at home.'", r: "He must be at home.", e: "Certain positive deduction converts to 'must be'." },
      { p: "Transform using 'don't have to': 'It is not necessary for you to submit this today.'", r: "You don't have to submit this today.", e: "Lack of necessity converts to 'don't have to'." }
    ],
    listeningPool: [
      { audioScript: "You don't have to worry about the payment right now.", transcript: "You don't have to worry about the payment right now.", focus: "Connected reduction /hæf.tə/" },
      { audioScript: "He must be waiting near the main security gate.", transcript: "He must be waiting near the main security gate.", focus: "Elision of /t/ in 'must be' /məsbiː/" }
    ],
    dialoguePool: [
      { speakerA: "Do I need to carry my physical passport to the seminar?", opts: ["No, you don't have to; a digital copy on your phone is fine.", "Yes, you must not bring it.", "No, you can't bring it."], ans: "No, you don't have to; a digital copy on your phone is fine." }
    ],
    recallPool: [
      { f: "Subject + must + V1", e: "She must be tired.", h: "वह पक्का थकी होगी।" }
    ],
    transPool: [
      { en: "You don't have to attend the meeting if you are unwell.", hi: "यदि आप अस्वस्थ हैं तो आपको बैठक में भाग लेने की आवश्यकता नहीं है।", cat: "Obligation" },
      { en: "He must be at the library studying for his medical exams.", hi: "वह पक्का अपनी मेडिकल परीक्षाओं के लिए पुस्तकालय में पढ़ रहा होगा।", cat: "Deduction" },
      { en: "Visitors must not feed the zoo animals under any circumstances.", hi: "आगंतुकों को किसी भी परिस्थिति में चिड़ियाघर के जानवरों को खाना खिलाना सख्त मना है।", cat: "Prohibition" }
    ]
  },

  34: {
    titleEn: "Dining Out, Restaurant Etiquette & Food Preferences",
    titleHi: "रेस्तरां में भोजन, शिष्टाचार एवं खान-पान की प्राथमिकताएँ",
    cefr: "A2.1",
    targetSound: "Polite Request Intonation (Rising-Falling Contour on /wʊdʒ.juː/)",
    mechanics: "Dining requests utilize rising pitch contours on modal openers ('Would you mind...', 'Could we please have...') and gentle falling contours on the final content noun.",
    trap: "Using commanding imperative verbs like 'Give me water' or 'Bring the bill' instead of polite indirect structures.",
    phrases: [
      { en: "Could we please have a table for four by the window?", hi: "क्या हमें खिड़की के पास चार लोगों के लिए एक टेबल मिल सकती है?", use: "Table Reservation" },
      { en: "What would you recommend for someone who prefers mild spices?", hi: "हल्के मसाले पसंद करने वाले व्यक्ति के लिए आप क्या सुझाव देंगे?", use: "Menu Recommendation" },
      { en: "Could you please prepare this dish without peanuts? I have a severe allergy.", hi: "क्या आप इस व्यंजन को बिना मूंगफली के तैयार कर सकते हैं? मुझे गंभीर एलर्जी है।", use: "Dietary Restriction" },
      { en: "Excuse me, could we please have the bill when you have a moment?", hi: "माफ़ कीजिए, क्या समय मिलने पर हमें बिल मिल सकता है?", use: "Requesting the Check" },
      { en: "Is this soup suitable for strict vegetarians and vegans?", hi: "क्या यह सूप शुद्ध शाकाहारियों और वीगन लोगों के लिए उपयुक्त है?", use: "Dietary Inquiry" }
    ],
    exemplarPatterns: [
      { en: "I would like to order the grilled paneer with steamed basmati rice.", hi: "मैं उबले हुए बासमती चावल के साथ ग्रिल्ड पनीर का ऑर्डर देना चाहूँगा।", cat: "Ordering" },
      { en: "Could you please bring us an extra set of cutlery and napkins?", hi: "क्या आप कृपया हमारे लिए कटलरी और नैपकिन का एक अतिरिक्त सेट ला सकते हैं?", cat: "Request" },
      { en: "The chef's specialty today is slow-cooked vegetable biryani.", hi: "आज शेफ की विशेष पेशकश धीमी आंच पर पकाई गई वेज बिरयानी है।", cat: "Menu" }
    ],
    mcqPool: [
      { q: "Which is the most polite way to ask for the bill at a fine restaurant?", opts: ["Could we please have the check when you have a moment?", "Give me the bill immediately.", "Bring bill now.", "I want bill."], ans: "Could we please have the check when you have a moment?", why: "Modal inquiry with polite temporal softening is standard restaurant etiquette." }
    ],
    blankPool: [
      { p: "Could you please _____ if this curry contains any dairy products?", a: "check", exp: "Polite request using modal 'could + V1'." }
    ],
    errorPool: [
      { w: "Give me one coffee and fast.", r: "Could I please have a coffee, whenever you have a moment?", e: "Direct imperatives sound blunt; use polite modal requests." }
    ],
    transformPool: [
      { p: "Make polite: 'I want water.'", r: "Could I please have a glass of water?", e: "Transform blunt desire into polite modal request." }
    ],
    listeningPool: [
      { audioScript: "Would you like still or sparkling mineral water with your meal?", transcript: "Would you like still or sparkling mineral water with your meal?", focus: "Intonation on alternative options" }
    ],
    dialoguePool: [
      { speakerA: "Are you ready to order, or would you like a few more minutes?", opts: ["We are ready, thank you. Could we start with the lentil soup?", "Bring food now.", "I must eat."], ans: "We are ready, thank you. Could we start with the lentil soup?" }
    ],
    recallPool: [
      { f: "Could we please have + Noun", e: "Could we please have the menu?", h: "क्या हमें मेन्यू मिल सकता है?" }
    ],
    transPool: [
      { en: "We would like to reserve a quiet corner table for eight people this evening.", hi: "हम आज शाम आठ लोगों के लिए एक शांत कोने वाली टेबल आरक्षित करना चाहते हैं।", cat: "Dining" }
    ]
  },

  35: {
    titleEn: "Time Management, Appointments & Scheduling",
    titleHi: "समय प्रबंधन, नियुक्तियाँ एवं समय-सारिणी निर्धारण",
    cefr: "A2.1",
    targetSound: "Temporal Preposition Reductions (/æt/, /ɒn/, /ɪn/)",
    mechanics: "Temporal prepositions are unstressed function words that reduce to weak vowels (/ət ˈθriː/, /ən ˈmʌn.deɪ/).",
    trap: "Confusing 'in time' (with time to spare) and 'on time' (punctual/at the exact hour).",
    phrases: [
      { en: "Could we reschedule our strategy review for next Tuesday at 3:00 PM?", hi: "क्या हम अपनी रणनीति समीक्षा अगले मंगलवार दोपहर 3:00 बजे के लिए पुनर्निर्धारित कर सकते हैं?", use: "Rescheduling" },
      { en: "I am writing to confirm my appointment with Dr. Sharma tomorrow morning.", hi: "मैं कल सुबह डॉ. शर्मा के साथ अपनी नियुक्ति की पुष्टि करने के लिए लिख रहा हूँ।", use: "Confirmation" },
      { en: "Please let me know if that time slot conflicts with your prior engagements.", hi: "कृपया मुझे बताएं कि क्या वह समय आपके पहले के किसी कार्य से टकराता है।", use: "Conflict Check" }
    ],
    exemplarPatterns: [
      { en: "The project team meets every Thursday morning to track milestone deadlines.", hi: "परियोजना टीम मील के पत्थर की समय-सीमा पर नज़र रखने के लिए हर गुरुवार सुबह मिलती है।", cat: "Scheduling" },
      { en: "Please arrive ten minutes ahead of schedule to complete preliminary paperwork.", hi: "प्रारंभिक कागजी कार्रवाई पूरी करने के लिए कृपया निर्धारित समय से दस मिनट पहले पहुंचें।", cat: "Punctuality" }
    ],
    mcqPool: [
      { q: "The meeting starts promptly ______ 10:00 AM on Friday.", opts: ["at", "in", "on", "by"], ans: "at", why: "Exact clock times take the preposition 'at'." }
    ],
    blankPool: [
      { p: "She managed to arrive just _____ time to catch the departure flight.", a: "in", exp: "'In time' means before the deadline/with time to spare." }
    ],
    errorPool: [
      { w: "We will meet on 4:00 PM in next Monday.", r: "We will meet at 4:00 PM next Monday.", e: "Clock time requires 'at'; 'next Monday' does not take 'in'." }
    ],
    transformPool: [
      { p: "Transform to polite inquiry: 'When can we meet?'", r: "What time would be most convenient for us to meet?", e: "Polite scheduling inquiry." }
    ],
    listeningPool: [
      { audioScript: "Could we push the briefing back by thirty minutes to accommodate the client?", transcript: "Could we push the briefing back by thirty minutes to accommodate the client?", focus: "Phrasal verb 'push back'" }
    ],
    dialoguePool: [
      { speakerA: "Does 2:30 PM on Wednesday suit your schedule?", opts: ["Yes, Wednesday at 2:30 PM works perfectly for me.", "I don't care about time.", "No, time is bad."], ans: "Yes, Wednesday at 2:30 PM works perfectly for me." }
    ],
    recallPool: [
      { f: "Would + Time + suit your schedule?", e: "Would Friday suit your schedule?", h: "क्या शुक्रवार का समय आपके लिए अनुकूल रहेगा?" }
    ],
    transPool: [
      { en: "I apologize, but an unexpected flight delay prevents me from attending at 10:00 AM.", hi: "मैं क्षमा चाहता हूँ, लेकिन एक अप्रत्याशित उड़ान विलंब मुझे सुबह 10:00 बजे उपस्थित होने से रोकता है।", cat: "Rescheduling" }
    ]
  },

  36: {
    titleEn: "Diplomatic Refusals, Agreement & Consent",
    titleHi: "कूटनीतिक अस्वीकृति, सहमति एवं शिष्टाचारपूर्ण असहमति",
    cefr: "A2.1",
    targetSound: "Softening Hedges and Conditional Cadence",
    mechanics: "Diplomatic refusals employ introductory softening hedges ('I am afraid...', 'Regrettably...') with downward soothing intonation contours.",
    trap: "Using blunt direct 'No' or 'You are wrong' in professional and cross-cultural discourse.",
    phrases: [
      { en: "I see your perspective, but I have reservations regarding the budget allocation.", hi: "मैं आपके दृष्टिकोण को समझता हूँ, लेकिन मुझे बजट आवंटन के संबंध में कुछ संशय हैं।", use: "Diplomatic Disagreement" },
      { en: "I am afraid I won't be able to take on additional consulting projects this quarter.", hi: "मुझे खेद है कि मैं इस तिमाही में अतिरिक्त परामर्श परियोजनाएं नहीं ले पाऊँगा।", use: "Polite Decline" },
      { en: "We are in complete agreement regarding the environmental sustainability goals.", hi: "पर्यावरणीय स्थिरता लक्ष्यों के संबंध में हम पूर्ण सहमति में हैं।", use: "Affirming Consensus" }
    ],
    exemplarPatterns: [
      { en: "While I appreciate your generous offer, my current commitments prevent me from accepting.", hi: "यद्यपि मैं आपके उदार प्रस्ताव की सराहना करता हूँ, मेरी वर्तमान व्यस्तताएं मुझे इसे स्वीकार करने से रोकती हैं।", cat: "Diplomacy" }
    ],
    mcqPool: [
      { q: "Which response expresses the most diplomatic professional refusal?", opts: ["I am afraid our current budget does not allow for this expenditure.", "No, your request is rejected.", "We will never pay this.", "Bad idea."], ans: "I am afraid our current budget does not allow for this expenditure.", why: "Softening phrase 'I am afraid' softens refusal." }
    ],
    blankPool: [
      { p: "I am _____ I cannot agree with that particular proposal.", a: "afraid", exp: "'I am afraid' introduces polite disagreement." }
    ],
    errorPool: [
      { w: "You are completely wrong about the market trends.", r: "I respectfully hold a different view regarding market trends.", e: "Direct confrontation breaches diplomatic professional etiquette." }
    ],
    transformPool: [
      { p: "Soften refusal: 'I will not come to your party.'", r: "I would love to come, but unfortunately I have a prior family commitment.", e: "Diplomatic refusal formula." }
    ],
    listeningPool: [
      { audioScript: "I understand your rationale, but we must consider the legal implications.", transcript: "I understand your rationale, but we must consider the legal implications.", focus: "Hedge 'understand your rationale'" }
    ],
    dialoguePool: [
      { speakerA: "Can you lead the weekend training workshop in Goa?", opts: ["I am deeply honored by the invitation, but unfortunately I will be traveling abroad.", "No, I hate workshops.", "Why ask me?"], ans: "I am deeply honored by the invitation, but unfortunately I will be traveling abroad." }
    ],
    recallPool: [
      { f: "I am afraid + Clause", e: "I am afraid I cannot attend.", h: "मुझे खेद है कि मैं उपस्थित नहीं हो सकता।" }
    ],
    transPool: [
      { en: "We value your creative input, though we have decided to pursue an alternative strategy.", hi: "हम आपके रचनात्मक सुझावों को महत्व देते हैं, यद्यपि हमने एक वैकल्पिक रणनीति अपनाने का निर्णय लिया है।", cat: "Diplomacy" }
    ]
  },

  37: {
    titleEn: "Encouragement, Praise, Congratulations & Good Wishes",
    titleHi: "प्रोत्साहन, प्रशंसा, बधाई एवं शुभकामनाएँ",
    cefr: "A2.1",
    targetSound: "Enthusiastic High Pitch Contours and Exclamatory Stress",
    mechanics: "Expressing genuine congratulations requires higher pitch peaks on emotional core adjectives ('brilliant', 'spectacular', 'magnificent').",
    trap: "Using monotonous low pitch that makes congratulations sound reluctant or insincere.",
    phrases: [
      { en: "Heartiest congratulations on your well-deserved promotion to director!", hi: "निदेशक पद पर आपकी सर्वथा योग्य पदोन्नति पर हार्दिक बधाई!", use: "Professional Congratulations" },
      { en: "Wishing you immense joy, good health, and prosperous success in your new venture.", hi: "आपके नए उपक्रम में आपको अपार आनंद, उत्तम स्वास्थ्य और समृद्ध सफलता की शुभकामनाएं।", use: "Good Wishes" },
      { en: "You have demonstrated extraordinary resilience and dedication throughout this tournament.", hi: "आपने इस पूरे टूर्नामेंट में असाधारण लचीलापन और समर्पण प्रदर्शित किया है।", use: "Praise & Encouragement" }
    ],
    exemplarPatterns: [
      { en: "Keep up the fantastic work; your contributions are transforming our research outcomes.", hi: "शानदार काम जारी रखें; आपका योगदान हमारे शोध परिणामों को बदल रहा है।", cat: "Encouragement" }
    ],
    mcqPool: [
      { q: "Which preposition correctly pairs with 'congratulations'?", opts: ["on", "for", "to", "at"], ans: "on", why: "Standard English idiom is 'congratulations ON your achievement'." }
    ],
    blankPool: [
      { p: "Heartiest congratulations _____ securing the prestigious Rhodes scholarship!", a: "on", exp: "Collocation: 'congratulations on + gerund/noun'." }
    ],
    errorPool: [
      { w: "Congratulations for your new marriage life.", r: "Congratulations on your wedding, and best wishes for married life!", e: "'Congratulations' takes 'on', not 'for'." }
    ],
    transformPool: [
      { p: "Transform to warm professional praise: 'You did good work.'", r: "You did an outstanding job, and your dedication is truly commendable.", e: "Elevate register for professional commendation." }
    ],
    listeningPool: [
      { audioScript: "Wishing you every success as you embark on this exciting academic journey!", transcript: "Wishing you every success as you embark on this exciting academic journey!", focus: "Warm rising intonation" }
    ],
    dialoguePool: [
      { speakerA: "We just received news that our patent application was officially approved!", opts: ["That is sensational news! Heartiest congratulations to you and the entire engineering team!", "Okay, fine.", "Good, whatever."], ans: "That is sensational news! Heartiest congratulations to you and the entire engineering team!" }
    ],
    recallPool: [
      { f: "Congratulations on + Noun/Gerund", e: "Congratulations on your graduation!", h: "आपके स्नातक होने पर बधाई!" }
    ],
    transPool: [
      { en: "Your exceptional leadership during the crisis earned the deep admiration of the entire community.", hi: "संकट के दौरान आपके असाधारण नेतृत्व ने पूरे समुदाय की गहरी प्रशंसा अर्जित की।", cat: "Praise" }
    ]
  },

  38: {
    titleEn: "Emotional Communication & Constructive Apology",
    titleHi: "भावनात्मक संवाद एवं रचनात्मक क्षमा-याचना",
    cefr: "A2.1",
    targetSound: "Sincere Apology Cadence (Deep Low-Pitch Intonation with Pause)",
    mechanics: "Constructive apologies feature grave, level pitch on the acknowledgment of responsibility followed by an upward resolution pledge.",
    trap: "Using passive deflection ('mistakes were made') instead of owning responsibility ('I sincerely apologize for my error').",
    phrases: [
      { en: "I sincerely apologize for the inadvertent oversight in our financial statement.", hi: "हमारे वित्तीय विवरण में अनजानी चूक के लिए मैं ईमानदारी से क्षमा चाहता हूँ।", use: "Formal Apology" },
      { en: "I take full personal responsibility for the miscommunication and will rectify it immediately.", hi: "मैं गलतफहमी की पूरी व्यक्तिगत ज़िम्मेदारी लेता हूँ और इसे तुरंत ठीक करूँगा।", use: "Accountability" },
      { en: "Please accept my deepest condolences during this period of bereavement.", hi: "शोक की इस घड़ी में कृपया मेरी गहरी संवेदनाएं स्वीकार करें।", use: "Sympathy & Condolence" }
    ],
    exemplarPatterns: [
      { en: "I want to express my genuine regret for any distress my delayed response caused you.", hi: "मेरे विलंबित उत्तर के कारण आपको हुई किसी भी परेशानी के लिए मैं वास्तविक खेद व्यक्त करना चाहता हूँ।", cat: "Apology" }
    ],
    mcqPool: [
      { q: "What is the key component of a constructive professional apology?", opts: ["Acknowledging responsibility and offering a concrete remedy", "Blaming external circumstances", "Ignoring the error", "Denying fault"], ans: "Acknowledging responsibility and offering a concrete remedy", why: "Constructive apology requires responsibility and remedial action." }
    ],
    blankPool: [
      { p: "I take full personal _____ for the logistical delay.", a: "responsibility", exp: "Collocation: 'take full personal responsibility'." }
    ],
    errorPool: [
      { w: "Sorry for that, but you should have reminded me.", r: "I sincerely apologize for forgetting; I take full responsibility and will finish it now.", e: "Avoid deflecting blame in apologies." }
    ],
    transformPool: [
      { p: "Transform into formal constructive apology: 'Sorry I am late.'", r: "Please accept my sincere apologies for my delayed arrival; thank you for your patience.", e: "High-register apology formula." }
    ],
    listeningPool: [
      { audioScript: "Please rest assured that we have implemented rigorous safeguards to prevent any recurrence.", transcript: "Please rest assured that we have implemented rigorous safeguards to prevent any recurrence.", focus: "Reassurance cadence" }
    ],
    dialoguePool: [
      { speakerA: "The client noticed several discrepancies in the quarterly tax filing.", opts: ["I take full responsibility for that oversight. I am revising the document immediately and will deliver the corrected file within two hours.", "It is not my problem.", "Tax is complicated."], ans: "I take full responsibility for that oversight. I am revising the document immediately and will deliver the corrected file within two hours." }
    ],
    recallPool: [
      { f: "I sincerely apologize for + Noun/Gerund", e: "I sincerely apologize for the delay.", h: "देरी के लिए मैं ईमानदारी से माफ़ी चाहता हूँ।" }
    ],
    transPool: [
      { en: "We deeply appreciate your constructive patience while our technical team resolved the system outage.", hi: "जब तक हमारी तकनीकी टीम ने सिस्टम की खराबी को दूर किया, तब तक आपके धैर्य की हम गहराई से सराहना करते हैं।", cat: "Reassurance" }
    ]
  },

  39: {
    titleEn: "Degrees of Adjective Comparison & Sentence Transformations",
    titleHi: "विशेषण की तुलना की अवस्थाएं एवं वाक्य रूपांतरण",
    cefr: "A2.1",
    targetSound: "Comparative Linking and Superlative Stress (/mɔːr‿ən ˈmɔːr/, /-ɪst/)",
    mechanics: "Comparative structures employ smooth linking: 'more and more' connects with intrusive /r/ (/mɔː.rən.mɔː/), while superlative '-est' takes weak /ɪst/.",
    trap: "Using double comparatives ('*more taller*') or double superlatives ('*most highest*').",
    phrases: [
      { en: "This heritage palace hotel offers an incomparably richer cultural experience.", hi: "यह हेरिटेज पैलेस होटल कहीं अधिक समृद्ध सांस्कृतिक अनुभव प्रदान करता है।", use: "Comparative Intensity" },
      { en: "Her unmatched expertise in organic chemistry is acknowledged worldwide.", hi: "ऑर्गेनिक केमिस्ट्री में उनकी बेजोड़ विशेषज्ञता को दुनिया भर में स्वीकार किया जाता है।", use: "Superlative Quality" },
      { en: "The long-term environmental advantages far outweigh the initial capital investments.", hi: "दीर्घकालिक पर्यावरणीय लाभ प्रारंभिक पूंजी निवेश से कहीं अधिक महत्वपूर्ण हैं।", use: "Comparative Evaluation" }
    ],
    exemplarPatterns: [
      { en: "High-speed electric locomotives are incomparably quieter and far more energy-efficient.", hi: "हाई-स्पीड इलेक्ट्रिक लोकोमोटिव कहीं अधिक शांत और ऊर्जा-कुशल हैं।", cat: "Comparison" }
    ],
    mcqPool: [
      { q: "Identify the grammatically correct comparative sentence:", opts: ["Solar power is incomparably cleaner than coal combustion.", "Solar power is more cleaner than coal.", "Solar power is clean than coal.", "Solar power is most cleanest."], ans: "Solar power is incomparably cleaner than coal combustion.", why: "Avoid double comparatives ('more cleaner'); use intensifier + regular comparative." }
    ],
    blankPool: [
      { p: "The Taj Mahal is considered by many architects to be the most _____ monument in India.", a: "magnificent", exp: "Superlative structure with multi-syllable adjective: 'the most magnificent'." }
    ],
    errorPool: [
      { w: "Mount Everest is the most highest mountain in the Himalayas.", r: "Mount Everest is the highest mountain in the Himalayas.", e: "Do not use 'most' with short adjectives that already take '-est'." }
    ],
    transformPool: [
      { p: "Transform using 'as...as': 'Gold is more precious than silver.'", r: "Silver is not as precious as gold.", e: "Comparative to negative equative transformation." }
    ],
    listeningPool: [
      { audioScript: "The economic benefits of digital infrastructure far outweigh the implementation costs.", transcript: "The economic benefits of digital infrastructure far outweigh the implementation costs.", focus: "Stress on verb 'outweigh'" }
    ],
    dialoguePool: [
      { speakerA: "Which laptop model offers superior battery longevity for remote fieldwork?", opts: ["The ultra-light workstation is incomparably more durable and delivers twice the battery runtime.", "All laptops are same.", "Buy whatever."], ans: "The ultra-light workstation is incomparably more durable and delivers twice the battery runtime." }
    ],
    recallPool: [
      { f: "Subject + be + incomparably + Comparative Adjective + than + Object", e: "This train is incomparably faster than the bus.", h: "यह ट्रेन बस से कहीं अधिक तेज़ है।" }
    ],
    transPool: [
      { en: "Kalidasa's Sanskrit drama Shakuntala is revered worldwide for its matchless poetic elegance.", hi: "कालिदास का संस्कृत नाटक शकुंतला अपनी अनुपम काव्यमय सुंदरता के लिए दुनिया भर में पूजनीय है।", cat: "Literature" }
    ]
  },

  40: {
    titleEn: "STAGE 4 CUMULATIVE MASTERY REVIEW (Synthesized Pragmatics & Discourse Fluency)",
    titleHi: "स्टेज 4 संचयी महारत समीक्षा (व्यावहारिक संवाद एवं धाराप्रवाह भाषा संश्लेषण)",
    cefr: "A2.1+",
    targetSound: "Prosodic Discourse Synthesis and Intonational Range",
    mechanics: "Mastery review synthesizes connected speech, pitch movement, emphatic focus, and pragmatic softening across social, professional, and cross-cultural discourse.",
    trap: "Reverting to literal word-for-word L1 translation under rapid conversational pacing.",
    phrases: [
      { en: "Could I have the pleasure of introducing our distinguished visiting scholar?", hi: "क्या मुझे हमारे प्रतिष्ठित अतिथि विद्वान का परिचय कराने का सौभाग्य मिल सकता है?", use: "Formal Introduction Review" },
      { en: "You don't have to finalize your itinerary until the conference schedule is published.", hi: "जब तक सम्मेलन का कार्यक्रम प्रकाशित नहीं हो जाता, आपको अपना यात्रा कार्यक्रम अंतिम रूप देने की आवश्यकता नहीं है।", use: "Obligation Review" },
      { en: "I am afraid we cannot accommodate additional revisions within this fiscal cycle.", hi: "मुझे खेद है कि हम इस वित्तीय चक्र में अतिरिक्त संशोधनों को समायोजित नहीं कर सकते।", use: "Diplomatic Refusal Review" },
      { en: "Heartiest congratulations on achieving this extraordinary academic milestone!", hi: "इस असाधारण शैक्षणिक मील के पत्थर को हासिल करने पर हार्दिक बधाई!", use: "Celebration Review" },
      { en: "I take full responsibility for the administrative delay and will expedite your file today.", hi: "प्रशासनिक देरी की मैं पूरी ज़िम्मेदारी लेता हूँ और आज आपकी फ़ाइल को त्वरित रूप से आगे बढ़ाऊँगा।", use: "Constructive Apology Review" }
    ],
    exemplarPatterns: [
      { en: "Mastering English discourse requires synthesizing grammatical accuracy with sociolinguistic pragmatics.", hi: "अंग्रेज़ी संवाद में महारत हासिल करने के लिए व्याकरणिक सटीकता को सामाजिक-भाषावैज्ञानिक व्यावहारिकता के साथ संश्लेषित करना आवश्यक है।", cat: "Synthesis" }
    ],
    mcqPool: [
      { q: "Which modal sentence expresses logical impossibility based on evidence?", opts: ["He can't be at the Mumbai office because I just saw him in Kolkata.", "He must not be at the office.", "He needn't be at the office.", "He shouldn't be at the office."], ans: "He can't be at the Mumbai office because I just saw him in Kolkata.", why: "'Can't be' is the standard modal for negative deduction / impossibility." }
    ],
    blankPool: [
      { p: "Developing _____ awareness enables language learners to monitor and self-correct their speech.", a: "metacognitive", exp: "'Metacognitive' relates to conscious self-monitoring of learning." }
    ],
    errorPool: [
      { w: "Myself Rajesh, I am having 10 years experience and congrats for your promotion.", r: "I am Rajesh. I have 10 years of experience. Congratulations on your promotion!", e: "Eliminate '*Myself*', stative '*having*', and use 'congratulations on'." }
    ],
    transformPool: [
      { p: "Transform into diplomatic professional register: 'No, we will not sign this contract because price is too high.'", r: "I am afraid we cannot proceed with this agreement as the current pricing exceeds our budgetary framework.", e: "Diplomatic register transformation." }
    ],
    listeningPool: [
      { audioScript: "Synthesizing conversational idioms with precise syntactic structures elevates overall discourse fluency.", transcript: "Synthesizing conversational idioms with precise syntactic structures elevates overall discourse fluency.", focus: "Discourse cadence" }
    ],
    dialoguePool: [
      { speakerA: "How do you feel about your overall communicative progress across Stage 4?", opts: ["I feel remarkably more confident navigating diplomatic refusals, polite modals, and professional introductions.", "I know nothing.", "Everything is bad."], ans: "I feel remarkably more confident navigating diplomatic refusals, polite modals, and professional introductions." }
    ],
    recallPool: [
      { f: "Polite Request + Softening Modal + Justification", e: "Could we reschedule to next week, as our team has an urgent audit?", h: "क्या हम अगले सप्ताह के लिए पुनर्निर्धारित कर सकते हैं, क्योंकि हमारी टीम का एक ज़रूरी ऑडिट है?" }
    ],
    transPool: [
      { en: "The sixty-day English mastery curriculum empowers learners to communicate articulately across global professional environments.", hi: "साठ-दिवसीय अंग्रेज़ी महारत पाठ्यक्रम शिक्षार्थियों को वैश्विक व्यावसायिक वातावरण में स्पष्ट और आत्मविश्वास से संवाद करने में सक्षम बनाता है।", cat: "Mastery" }
    ]
  }
};

export async function enrichAllDays33To40() {
  console.log('[ENRICH] Starting deep enrichment for Days 33 to 40...');

  for (let d = 33; d <= 40; d++) {
    const prof = dayProfiles[d];
    const mod = (await import(`../content_builder/day${d}.js`))[`day${d}`];

    // Ensure metadata
    mod.titleEn = prof.titleEn;
    mod.titleHi = prof.titleHi;
    mod.cefr = prof.cefr;
    mod.estMinutes = 45;

    // Enrich phonetics
    mod.phonetics = {
      targetSound: prof.targetSound,
      articulatoryMechanics: prof.mechanics,
      hindiSpeakerPhoneticTrap: prof.trap,
      minimalPairs: [
        { p1: "must", ipa1: "/mʌst/", p2: "mast", ipa2: "/mɑːst/", note: "Short /ʌ/ vs long back /ɑː/" },
        { p1: "could", ipa1: "/kʊd/", p2: "cooled", ipa2: "/kuːld/", note: "Short /ʊ/ vs long /uː/" },
        { p1: "might", ipa1: "/maɪt/", p2: "mate", ipa2: "/meɪt/", note: "Diphthong /aɪ/ vs /eɪ/" },
        { p1: "refuse", ipa1: "/rɪˈfjuːz/", p2: "refuge", ipa2: "/ˈref.juːdʒ/", note: "Voiced /z/ vs affricate /dʒ/" },
        { p1: "praise", ipa1: "/preɪz/", p2: "prays", ipa2: "/preɪz/", note: "Homophones with voiced /z/" },
        { p1: "apology", ipa1: "/əˈpɒl.ə.dʒi/", p2: "analogy", ipa2: "/əˈnæl.ə.dʒi/", note: "Syllable stress comparison" }
      ],
      sentenceStressPatterns: [
        { s: "You DON'T HAVE to attend if you are UNWELL.", focus: "Stressed modal negative + content adjective" },
        { s: "He MUST BE waiting near the MAIN ENTRANCE.", focus: "Strong deduction stress on MUST BE" },
        { s: "Could you PLEASE CLARIFY the proposed DEADLINE?", focus: "Polite modal rising contour" },
        { s: "I SINCERELY APOLOGIZE for the UNINTENDED DELAY.", focus: "Apology sincerity low-pitch stress" }
      ],
      connectedSpeechExamples: [
        { en: "have to", ipa: "/ˈhæf.tə/", note: "Voicing assimilation of /v/ -> /f/ before voiceless /t/" },
        { en: "must be", ipa: "/ˈməs.biː/", note: "Consonant cluster elision of /t/ before /b/" },
        { en: "don't have to", ipa: "/dəʊn.ˈhæf.tə/", note: "Reduction and rhythm grouping" },
        { en: "could you please", ipa: "/kʊdʒ.juː ˈpliːz/", note: "Palatal assimilation of /d/ + /j/ -> /dʒ/" }
      ]
    };

    // Enrich learn.spokenPhrases with unique IDs
    mod.learn.spokenPhrases = prof.phrases.map((p, idx) => ({
      id: `d${d}_p${String(idx + 1).padStart(2, '0')}`,
      ...p
    }));

    // Generate 100 Bilingual Exemplars
    mod.examples = generateBilingualExemplars(d, prof.titleEn, prof.exemplarPatterns);

    // Generate 95 Practice Exercises & 50 Translation Drills (Total 145 items)
    const exList = generateStage4Exercises(
      d,
      prof.titleEn,
      prof.mcqPool,
      prof.blankPool,
      prof.errorPool,
      prof.transformPool,
      prof.listeningPool,
      prof.dialoguePool,
      prof.recallPool
    );
    const transList = generateTranslationSet(d, prof.transPool);

    mod.practice = {
      exercises: exList,
      translationSet: transList
    };

    // Enrich Use
    mod.use = {
      dialogue: {
        setting: `Realistic Professional & Interpersonal Context - Day ${d}`,
        participants: ["Aditi (Senior Consultant)", "Vikram (Project Lead)"],
        turns: [
          { speaker: "Aditi", en: "Good morning Vikram. Could we briefly review the scheduling for tomorrow's regional summit?", hi: "सुप्रभात विक्रम। क्या हम कल के क्षेत्रीय शिखर सम्मेलन के समय-सारिणी की संक्षेप में समीक्षा कर सकते हैं?" },
          { speaker: "Vikram", en: "Certainly Aditi. You don't have to prepare the physical binders; our team has digitized all presentation decks.", hi: "बिल्कुल अदिति। आपको भौतिक फ़ाइलें तैयार करने की आवश्यकता नहीं है; हमारी टीम ने सभी प्रस्तुति डेक को डिजिटल कर दिया है।" },
          { speaker: "Aditi", en: "That is wonderful news. I was afraid we might face logistical delays with the printing vendor.", hi: "यह बहुत अच्छी खबर है। मुझे डर था कि प्रिंटिंग विक्रेता के साथ हमें कोई समस्या हो सकती है।" },
          { speaker: "Vikram", en: "Not at all. Everything has been consummately organized according to strict safety protocols.", hi: "बिल्कुल नहीं। सख्त सुरक्षा प्रोटोकॉल के अनुसार सब कुछ उत्कृष्ट रूप से आयोजित किया गया है।" },
          { speaker: "Aditi", en: "Heartiest congratulations on steering this massive project so smoothly!", hi: "इस विशाल परियोजना को इतनी सुगमता से आगे बढ़ाने पर हार्दिक बधाई!" },
          { speaker: "Vikram", en: "Thank you kindly Aditi. Your continuous support and clear feedback have been of inestimable value.", hi: "बहुत-बहुत धन्यवाद अदिति। आपका निरंतर सहयोग और स्पष्ट मार्गदर्शन अमूल्य रहा है।" }
        ]
      },
      speakingTask: {
        promptEn: `Deliver a 2-minute spoken recording applying the key formulas of ${prof.titleEn}. Focus on accurate intonation and smooth connected speech.`,
        promptHi: `${prof.titleHi} के मुख्य सूत्रों का प्रयोग करते हुए 2 मिनट की मौखिक रिकॉर्डिंग प्रस्तुत करें। सटीक स्वराघात और धाराप्रवाह अभिव्यक्ति पर ध्यान दें।`,
        rubric: [
          "Sociolinguistic Register & Politeness Formulas (30%)",
          "Grammatical Precision & Modal Syntax (30%)",
          "Phonetic Intonation & Connected Speech (25%)",
          "Lexical Range & Advanced Vocabulary (15%)"
        ]
      }
    };

    // Enrich Assess
    mod.assess = {
      writtenChecklist: [
        "Can accurately produce target modal and pragmatic formulas without L1 interference.",
        "Correctly applies distinction between internal and external rules.",
        "Uses advanced B2 vocabulary in contextual academic and professional sentences.",
        "Demonstrates mastery over 95 interactive practice drills and 50 translation items."
      ],
      oralProductionTask: `Explain a realistic workplace situation using at least 5 newly acquired expressions from Day ${d}.`,
      benchmarks: {
        A2: "Understands and utilizes core formulaic polite requests and standard modals.",
        B1: "Flexibly adapts register between formal diplomacy and casual peer conversation.",
        B2: "Seamlessly synthesizes complex modal deductions, hedges, and nuanced comparative transformations."
      }
    };

    // Enrich Review
    mod.review = {
      spiralReviewPast: `Consolidates competencies from Days 1–${d - 1} with particular emphasis on Stage 4 pragmatic communication.`,
      speedDrillPrompts: [
        "Convert a blunt statement into a diplomatic modal request in under 5 seconds.",
        "State a strong logical deduction based on visible evidence without hesitation.",
        "Formulate a constructive apology that acknowledges responsibility and proposes a remedy."
      ],
      dailySummary: `Day ${d} comprehensively equips learners with active mastery over ${prof.titleEn}, bridging grammatical precision with authentic interpersonal communication.`
    };

    // Write file back
    const outPath = path.join(process.cwd(), 'content_builder', `day${d}.js`);
    fs.writeFileSync(
      outPath,
      `export const day${d} = ${JSON.stringify(mod, null, 2)};\nexport default day${d};\n`,
      'utf-8'
    );
    console.log(`[DAY ${d}] Enriched successfully: ${mod.learn.vocabulary.length} vocab, ${mod.examples.length} exemplars, ${mod.practice.exercises.length} exercises, ${mod.practice.translationSet.length} translations.`);
  }

  console.log('[ENRICH] All Days 33 to 40 fully enriched and saved!');
}

if (process.argv[1]?.includes('enrich_days33_to_40')) {
  enrichAllDays33To40();
}
