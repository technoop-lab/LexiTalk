import fs from 'fs';
import path from 'path';

export const day51 = {
  dayNumber: 51,
  id: "day_51",
  titleEn: "Professional Etiquette, Official Notices & Public Signage",
  titleHi: "व्यावसायिक शिष्टाचार, आधिकारिक सूचनाएं एवं सार्वजनिक संकेत",
  cefr: "B1.1",
  estMinutes: 45,
  prerequisites: "Stage 5 Complete Mastery (Days 1–50: Domain Fluency & Cumulative Synthesis)",
  objectivesEn: [
    "Interpret and construct official public notices, regulatory signage, and institutional warnings using formal passive and imperative syntax.",
    "Master high-register workplace etiquette vocabulary: decorum, protocol, confidentiality, code of conduct, punctuality, and professional boundaries.",
    "Draft clear, courteous regulatory announcements and workplace policies adhering to international business communication standards.",
    "Eliminate archaic or unnatural Indian English administrative phrasing (e.g., 'revert back', 'do the needful', 'notice board is telling').",
    "Demonstrate formal pragmatic politeness in enforcing rules, resolving compliance issues, and de-escalating workplace friction."
  ],
  objectivesHi: [
    "सार्वजनिक सूचनाओं, विनियामक संकेतों और संस्थागत चेतावनियों को औपचारिक पैसिव और अनिवार्य वाक्य-संरचना में समझना और लिखना।",
    "व्यावसायिक शिष्टाचार की उच्च स्तरीय शब्दावली (Decorum, Protocol, Confidentiality, Punctuality, Professional boundaries) में निपुण होना।",
    "अंतरराष्ट्रीय व्यावसायिक मानकों के अनुरूप स्पष्ट, विनम्र और प्रभावी आधिकारिक घोषणाएं और नीतियां तैयार करना।",
    "भारतीय अंग्रेजी के पुराने और अप्राकृतिक प्रशासनिक प्रयोगों ('revert back', 'do the needful', 'board is telling') को दूर करना।",
    "नियमों को लागू करने और कार्यस्थल के विवादों को विनम्रता व दृढ़ता से सुलझाने में व्यावहारिक दक्षता प्राप्त करना।"
  ],
  teach: {
    hindiExplanation: `स्टेज 6 (Days 51–60) में आपका स्वागत है! यह हमारे 60-दिवसीय पाठ्यक्रम का अंतिम एवं सर्वोच्च चरण (Professional, Institutional & Real-World Fluency) है।

डे 51 में हम **व्यावसायिक शिष्टाचार (Professional Etiquette)** और **आधिकारिक सूचनाओं (Official Notices & Public Signage)** की भाषा सीखेंगे:

1. **सार्वजनिक संकेत एवं विनियामक सूचनाएं (Public Signs & Notices)**:
   - *Trespassers will be prosecuted.* (अनाधिकृत प्रवेश करने वालों पर कानूनी कार्रवाई की जाएगी।)
   - *Authorized Personnel Only.* (केवल अधिकृत कर्मचारियों के लिए।)
   - *Admittance strictly prohibited without prior authorization.* (पूर्व अनुमति के बिना प्रवेश सख्त मना है।)
   - *Please queue in an orderly manner.* (कृपया कतार में लगें।)
   - *Out of Order / Under Maintenance.* (खराब है / मरम्मत जारी है।)

2. **व्यावसायिक शिष्टाचार के सिद्धांत (Workplace Etiquette Principles)**:
   - **Decorum & Demeanor**: कार्यस्थल पर संयमित और गरिमापूर्ण आचरण।
   - **Confidentiality & Discretion**: व्यावसायिक गोपनीयता बनाए रखना।
   - **Punctuality & Reliability**: समय की पाबंदी और विश्वसनीयता।
   - **Professional Boundaries**: व्यक्तिगत और व्यावसायिक जीवन के बीच सम्मानजनक दूरी।

3. **L1 हिंदी भाषियों के लिए सुधार (Eliminating Archaic Indian English)**:
   - ❌ '*Please revert back.*' ➔ ✔️ "**Please reply / Please get back to me.**" ('Revert' का अर्थ खुद 'वापस लौटना' है, 'back' अनावश्यक है।)
   - ❌ '*Kindly do the needful.*' ➔ ✔️ "**Please process the requested approval at your earliest convenience.**" (अस्पष्टता से बचें; हमेशा सटीक कार्य का उल्लेख करें।)
   - ❌ '*The notice board is telling...*' ➔ ✔️ "**The notice clearly states / indicates that...**"
   - ❌ '*Prepone the meeting.*' (भारतीय अंग्रेजी) ➔ ✔️ "**Advance the meeting / Move the meeting forward.**"`,
    englishExplanation: `Welcome to Stage 6! Day 51 initiates the final professional mastery tier by analyzing the linguistic mechanics of regulatory notices, institutional signage, workplace decorum, and formal policy communication.

Linguistic & Pragmatic Focus:
1. **Notice Syntax & Regulatory Registers**: Official notices rely heavily on passive structures ('Smoking is strictly prohibited'), modal imperatives ('All visitors must register at the reception desk'), and truncated regulatory headers ('Staff Only', 'Keep Clear').
2. **Institutional Decorum & Protocol**: Expressing expectations of integrity, punctuality, active listening, conflict mitigation, and adherence to non-disclosure obligations.
3. **Modernization of Administrative Phrasing**: Replacing Victorian bureaucratic clichés with crisp, unambiguous, modern international business English.`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Impersonal Passive & Nominalization in Public Notices",
        description: "Public warnings and regulatory signs omit personal agents: 'Photography is strictly prohibited' (instead of '*We do not allow photography*') and 'Unauthorized access will result in disciplinary action'.",
        register: "Regulatory Administrative Syntax"
      },
      {
        ruleNumber: 2,
        title: "Modal Hierarchy of Obligation & Prohibition",
        description: "'Must / Shall' denotes strict legal/statutory obligation ('All employees must wear ID badges'). 'May not / Shall not' denotes explicit prohibition ('Visitors may not enter unescorted'). 'Should' denotes recommended etiquette ('Staff should maintain a quiet environment').",
        register: "Institutional Modality"
      },
      {
        ruleNumber: 3,
        title: "Redundancy Elimination with Directional Verbs",
        description: "Do not add 'back' or 'again' to verbs already containing the prefix 're-' ('revert', 'return', 'repeat', 'reiterate'). Say 'Please reply' or 'Please revert to me', NEVER '*revert back*'.",
        register: "Lexical Economy"
      },
      {
        ruleNumber: 4,
        title: "Conditional Regulatory Admonitions",
        description: "Use 'Failure to comply will result in [consequence]' to state enforceability neutrally and formally.",
        register: "Formal Policy Enforcement"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Regulatory Prohibition Notice",
        formula: "[Action / Noun] + is / are + strictly prohibited + on / in + [Premises] + under penalty of + [Consequence].",
        exampleEn: "Smoking is strictly prohibited on company premises under penalty of immediate disciplinary action.",
        meaningHi: "तत्काल अनुशासनात्मक कार्रवाई के दंड के तहत कंपनी परिसर में धूम्रपान सख्त वर्जित है।"
      },
      {
        subjectGroup: "Mandatory Compliance Directive",
        formula: "All + [Personnel / Visitors] + must + [Action: display credentials / register] + upon + [Entering / Arrival].",
        exampleEn: "All visitors must display identification badges at all times upon entering the facility.",
        meaningHi: "सभी आगंतुकों को सुविधा में प्रवेश करने पर हर समय पहचान पत्र प्रदर्शित करना अनिवार्य है।"
      },
      {
        subjectGroup: "Polite Etiquette Reminder",
        formula: "Employees are kindly requested to + [Action: mute mobile devices / keep work areas tidy].",
        exampleEn: "Employees are kindly requested to switch their mobile phones to silent mode during meetings.",
        meaningHi: "कर्मचारियों से विनम्र अनुरोध है कि वे बैठकों के दौरान अपने मोबाइल फोन को साइलेंट मोड पर रखें।"
      },
      {
        subjectGroup: "Policy Enforcement Advisory",
        formula: "Failure to comply with the + [Policy / Code of Conduct] + may result in + [Consequence: suspension / termination].",
        exampleEn: "Failure to adhere to data confidentiality protocols may result in immediate termination of contract.",
        meaningHi: "डेटा गोपनीयता प्रोटोकॉल का पालन न करने पर अनुबंध तत्काल समाप्त किया जा सकता है।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Eliminating Bureaucratic Indianisms: 'Revert Back' & 'Do the Needful'",
      hindiPattern: "1. '*Please revert back to me with the report.*'\n2. '*I am writing this email to kindly request you to do the needful.*'\n3. '*Today notice is put on the board.*'\n4. '*Can we prepone the schedule by one hour?*'",
      potentialInterference: "Use of archaic British-Raj clerical formulas and regional Indian English neologisms in modern global corporate settings.",
      explanation: "1. 'Revert' means 'return to a state or respond'; pairing it with 'back' is tautological. 2. 'Do the needful' is vague; specify the exact action. 3. Signs 'state' or 'are posted'. 4. 'Prepone' is understood only in South Asia; use 'move forward', 'advance', or 'reschedule earlier'.",
      naturalSolution: "1. 'Please reply to me / get back to me with the report.' 2. 'Please review and approve the attached proposal.' 3. 'A notice has been posted on the bulletin board.' 4. 'Could we advance the meeting by one hour?'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day51_vocab_001", word: "Decorum", pos: "Noun", ipa: "/dɪˈkɔː.rəm/", meaningHi: "शिष्टाचार / गरिमापूर्ण और शालीन आचरण", exampleEn: "All board members are expected to maintain strict professional decorum during heated deliberations.", exampleHi: "सभी बोर्ड सदस्यों से गहन विचार-विमर्श के दौरान सख्त पेशेवर शिष्टाचार बनाए रखने की अपेक्षा की जाती है।" },
      { id: "day51_vocab_002", word: "Confidentiality", pos: "Noun", ipa: "/ˌkɒn.fɪ.den.ʃiˈæl.ə.ti/", meaningHi: "गोपनीयता / संवेदनशील जानकारी को गुप्त रखना", exampleEn: "Employees must sign a non-disclosure agreement to ensure client data confidentiality.", exampleHi: "ग्राहकों के डेटा की गोपनीयता सुनिश्चित करने के लिए कर्मचारियों को एक गैर-प्रकटीकरण समझौते पर हस्ताक्षर करने होंगे।" },
      { id: "day51_vocab_003", word: "Compliance", pos: "Noun", ipa: "/kəmˈplaɪ.əns/", meaningHi: "अनुपालन / नियमों और कानूनों का पालन", exampleEn: "The corporate audit verified the company's full compliance with international safety standards.", exampleHi: "कॉर्पोरेट ऑडिट ने अंतरराष्ट्रीय सुरक्षा मानकों के साथ कंपनी के पूर्ण अनुपालन को सत्यापित किया।" },
      { id: "day51_vocab_004", word: "Trespasser", pos: "Noun", ipa: "/ˈtres.pəs.ər/", meaningHi: "अनाधिकृत रूप से किसी की संपत्ति में प्रवेश करने वाला", exampleEn: "Warning signs indicate that unauthorized trespassers will be prosecuted under state law.", exampleHi: "चेतावनी संकेत दर्शाते हैं कि अनधिकृत प्रवेश करने वालों पर राज्य के कानून के तहत मुकदमा चलाया जाएगा।" },
      { id: "day51_vocab_005", word: "Punctuality", pos: "Noun", ipa: "/ˌpʌŋk.tʃuˈæl.ə.ti/", meaningHi: "समय की पाबंदी / समयबद्धता", exampleEn: "Punctuality is regarded as an indispensable mark of professionalism across international enterprises.", exampleHi: "अंतरराष्ट्रीय उद्यमों में समय की पाबंदी को व्यावसायिकता का एक अनिवार्य प्रतीक माना जाता है।" },
      { id: "day51_vocab_006", word: "Discretion", pos: "Noun", ipa: "/dɪˈskreʃ.ən/", meaningHi: "विवेक / समझदारी से गोपनीय बातें न खोलना", exampleEn: "Executive assistants must exercise absolute discretion when handling sensitive executive communications.", exampleHi: "संवेदनशील कार्यकारी संचार को संभालते समय कार्यकारी सहायकों को पूर्ण विवेक बरतना चाहिए।" },
      { id: "day51_vocab_007", word: "Protocol", pos: "Noun", ipa: "/ˈprəʊ.tə.kɒl/", meaningHi: "आधिकारिक नियम / औपचारिक कार्यप्रणाली", exampleEn: "Diplomatic protocol mandates that visiting dignitaries be greeted by official state delegates.", exampleHi: "राजनयिक प्रोटोकॉल के अनुसार आने वाले गणमान्य व्यक्तियों का स्वागत आधिकारिक राज्य प्रतिनिधियों द्वारा किया जाना अनिवार्य है।" },
      { id: "day51_vocab_008", word: "Prohibited", pos: "Adjective", ipa: "/prəˈhɪb.ɪ.tɪd/", meaningHi: "निषिद्ध / जिस पर रोक लगी हो", exampleEn: "The possession of flammable materials is strictly prohibited inside the chemical laboratory.", exampleHi: "रासायनिक प्रयोगशाला के अंदर ज्वलनशील पदार्थों का होना सख्त वर्जित है।" },
      { id: "day51_vocab_009", word: "Authorized", pos: "Adjective", ipa: "/ˈɔː.θər.aɪzd/", meaningHi: "अधिकृत / जिसे आधिकारिक अनुमति प्राप्त हो", exampleEn: "Only authorized personnel possessing biometric access cards may enter the server room.", exampleHi: "केवल बायोमेट्रिक एक्सेस कार्ड वाले अधिकृत कर्मचारी ही सर्वर रूम में प्रवेश कर सकते हैं।" },
      { id: "day51_vocab_010", word: "Mandatory", pos: "Adjective", ipa: "/ˈmæn.də.tər.i/", meaningHi: "अनिवार्य / बाध्यकारी", exampleEn: "Attendance at the annual workplace cybersecurity training session is mandatory for all staff.", exampleHi: "वार्षिक कार्यस्थल साइबर सुरक्षा प्रशिक्षण सत्र में उपस्थिति सभी कर्मचारियों के लिए अनिवार्य है।" },
      { id: "day51_vocab_011", word: "Admittance", pos: "Noun", ipa: "/ədˈmɪt.əns/", meaningHi: "प्रवेश की अनुमति", exampleEn: "Admittance to the construction zone is restricted to personnel wearing protective safety helmets.", exampleHi: "निर्माण क्षेत्र में प्रवेश सुरक्षात्मक हेलमेट पहने हुए कर्मियों तक ही सीमित है।" },
      { id: "day51_vocab_012", word: "Demeanor", pos: "Noun", ipa: "/dɪˈmiː.nər/", meaningHi: "व्यवहार, आचरण और हाव-भाव", exampleEn: "Her calm and courteous demeanor helped de-escalate tension during the client dispute.", exampleHi: "उनके शांत और विनम्र व्यवहार ने ग्राहक विवाद के दौरान तनाव को कम करने में मदद की।" },
      { id: "day51_vocab_013", word: "Etiquette", pos: "Noun", ipa: "/ˈet.ɪ.ket/", meaningHi: "सभ्य व्यवहार के नियम / शिष्टाचार", exampleEn: "Virtual meeting etiquette requires muting your microphone when not speaking to avoid ambient noise.", exampleHi: "वर्चुअल मीटिंग शिष्टाचार के अनुसार पृष्ठभूमि के शोर से बचने के लिए बोलते समय ही माइक ऑन करें अन्यथा म्यूट रखें।" },
      { id: "day51_vocab_014", word: "Liability", pos: "Noun", ipa: "/ˌlaɪ.əˈbɪl.ə.ti/", meaningHi: "कानूनी दायित्व / ज़िम्मेदारी", exampleEn: "The sign explicitly states that the management accepts no liability for personal items left unattended.", exampleHi: "संकेत स्पष्ट रूप से बताता है कि प्रबंधन लावारिस छोड़ी गई व्यक्तिगत वस्तुओं के लिए कोई दायित्व स्वीकार नहीं करता है।" },
      { id: "day51_vocab_015", word: "Designated", pos: "Adjective", ipa: "/ˈdez.ɪɡ.neɪ.tɪd/", meaningHi: "निर्धारित / विशेष कार्य के लिए तय किया गया", exampleEn: "Vehicles parked outside designated parking bays will be towed at the owner's expense.", exampleHi: "निर्धारित पार्किंग क्षेत्रों के बाहर पार्क किए गए वाहनों को मालिक के खर्च पर उठा (टो) लिया जाएगा।" },
      { id: "day51_vocab_016", word: "Disciplinary", pos: "Adjective", ipa: "/ˌdɪs.əˈplɪn.ər.i/", meaningHi: "अनुशासनात्मक", exampleEn: "Repeated unexcused absenteeism will trigger formal disciplinary proceedings.", exampleHi: "बार-बार बिना कारण अनुपस्थित रहने पर औपचारिक अनुशासनात्मक कार्रवाई शुरू होगी।" },
      { id: "day51_vocab_017", word: "Solicitation", pos: "Noun", ipa: "/səˌlɪs.ɪˈteɪ.ʃən/", meaningHi: "अनचाहा प्रचार या बिक्री का आग्रह (मांगना/बेचना)", exampleEn: "Commercial solicitation and unauthorized distribution of flyers are strictly forbidden on these premises.", exampleHi: "इस परिसर में व्यावसायिक प्रचार और पर्चों का अनधिकृत वितरण सख्त वर्जित है।" },
      { id: "day51_vocab_018", word: "Cordial", pos: "Adjective", ipa: "/ˈkɔː.di.əl/", meaningHi: "सौहार्दपूर्ण / आत्मीय और मैत्रीपूर्ण", exampleEn: "The department heads maintained a cordial and constructive working relationship.", exampleHi: "विभागाध्यक्षों ने एक सौहार्दपूर्ण और रचनात्मक कामकाजी संबंध बनाए रखा।" },
      { id: "day51_vocab_019", word: "Circumspect", pos: "Adjective", ipa: "/ˈsɜː.kəm.spekt/", meaningHi: "सतर्क, एहतियाती और सावधान", exampleEn: "Professionals must remain circumspect when discussing corporate strategies in public spaces.", exampleHi: "सार्वजनिक स्थानों पर कॉर्पोरेट रणनीतियों पर चर्चा करते समय पेशेवरों को सतर्क रहना चाहिए।" },
      { id: "day51_vocab_020", word: "Stipulation", pos: "Noun", ipa: "/ˌstɪp.jəˈleɪ.ʃən/", meaningHi: "शर्त / अनुबंध का औपचारिक नियम", exampleEn: "The contract contains a strict stipulation regarding the non-disclosure of proprietary trade secrets.", exampleHi: "अनुबंध में मालिकाना व्यापार रहस्यों को उजागर न करने के संबंध में एक सख्त शर्त शामिल है।" }
    ],
    spokenPhrases: [
      { id: "day51_phrase_001", phrase: "Could you please get back to me with the updated figures by tomorrow?", register: "Polite Request", meaningHi: "क्या आप कृपया कल तक अद्यतन आंकड़ों के साथ मुझे जवाब दे सकते हैं?" },
      { id: "day51_phrase_002", phrase: "Authorized personnel only beyond this checkpoint.", register: "Regulatory Sign", meaningHi: "इस चेकपॉइंट के आगे केवल अधिकृत कर्मियों को ही जाने की अनुमति है।" },
      { id: "day51_phrase_003", phrase: "Please review and approve the attached document at your earliest convenience.", register: "Executive Email", meaningHi: "कृपया अपनी सुविधानुसार संलग्न दस्तावेज़ की समीक्षा करें और उसे स्वीकृति दें।" },
      { id: "day51_phrase_004", phrase: "Let us maintain professional decorum and address the issue constructively.", register: "Meeting Moderation", meaningHi: "आइए पेशेवर शिष्टाचार बनाए रखें और मुद्दे को रचनात्मक रूप से हल करें।" },
      { id: "day51_phrase_005", phrase: "Please refrain from using mobile phones while the conference is in session.", register: "Formal Advisory", meaningHi: "कृपया सम्मेलन चलने के दौरान मोबाइल फोन का उपयोग करने से बचें।" },
      { id: "day51_phrase_006", phrase: "Failure to comply with safety protocols will result in immediate suspension.", register: "Policy Warning", meaningHi: "सुरक्षा प्रोटोकॉल का पालन न करने पर तत्काल निलंबन होगा।" },
      { id: "day51_phrase_007", phrase: "All visitors are required to sign the visitor log at the reception desk.", register: "Workplace Protocol", meaningHi: "सभी आगंतुकों को स्वागत डेस्क पर आगंतुक रजिस्टर में हस्ताक्षर करना आवश्यक है।" },
      { id: "day51_phrase_008", phrase: "I appreciate your prompt response regarding this compliance inquiry.", register: "Corporate Courtesies", meaningHi: "इस अनुपालन पूछताछ के संबंध में आपकी त्वरित प्रतिक्रिया की मैं सराहना करता हूँ।" },
      { id: "day51_phrase_009", phrase: "Could we advance the meeting to 10:00 AM instead of 2:00 PM?", register: "Schedule Adjustment", meaningHi: "क्या हम बैठक को दोपहर 2:00 बजे के बजाय सुबह 10:00 बजे कर सकते हैं?" },
      { id: "day51_phrase_010", phrase: "The management accepts no responsibility for lost or unattended valuables.", register: "Liability Notice", meaningHi: "प्रबंधन खोई हुई या लावारिस कीमती वस्तुओं के लिए कोई जिम्मेदारी स्वीकार नहीं करता है।" },
      { id: "day51_phrase_011", phrase: "Please keep your workspace neat and adhere to the clean-desk policy.", register: "Workplace Etiquette", meaningHi: "कृपया अपने कार्यक्षेत्र को साफ रखें और क्लीन-डेस्क नीति का पालन करें।" },
      { id: "day51_phrase_012", phrase: "Confidentiality regarding patient medical records is legally binding.", register: "Statutory Directive", meaningHi: "मरीजों के मेडिकल रिकॉर्ड से संबंधित गोपनीयता कानूनी रूप से बाध्यकारी है।" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day51_ex_001", english: "The bold notice posted on the laboratory entrance states that unauthorized admittance is strictly prohibited.", hindi: "प्रयोगशाला के प्रवेश द्वार पर चिपकाई गई स्पष्ट सूचना में कहा गया है कि अनधिकृत प्रवेश सख्त वर्जित है।" },
      { id: "day51_ex_002", english: "All corporate executives must demonstrate exemplary professional decorum when representing the firm internationally.", hindi: "अंतरराष्ट्रीय स्तर पर फर्म का प्रतिनिधित्व करते समय सभी कॉर्पोरेट अधिकारियों को अनुकरणीय पेशेवर शिष्टाचार प्रदर्शित करना चाहिए।" },
      { id: "day51_ex_003", english: "Please review the attached project proposal and reply with your feedback by Thursday afternoon.", hindi: "कृपया संलग्न परियोजना प्रस्ताव की समीक्षा करें और गुरुवार दोपहर तक अपनी प्रतिक्रिया के साथ उत्तर दें।" },
      { id: "day51_ex_004", english: "Employees are reminded that confidential financial data must never be shared across unencrypted channels.", hindi: "कर्मचारियों को याद दिलाया जाता है कि गोपनीय वित्तीय डेटा कभी भी अनएन्क्रिप्टेड चैनलों पर साझा नहीं किया जाना चाहिए।" },
      { id: "day51_ex_005", english: "The building management accepts no liability for personal vehicles parked in the open basement bays.", hindi: "भवन प्रबंधन खुले बेसमेंट बे में पार्क किए गए व्यक्तिगत वाहनों के लिए कोई कानूनी दायित्व स्वीकार नहीं करता है।" },
      { id: "day51_ex_006", english: "Due to urgent executive travel schedules, we had to advance the quarterly review meeting by two days.", hindi: "तत्काल कार्यकारी यात्रा कार्यक्रम के कारण, हमें त्रैमासिक समीक्षा बैठक को दो दिन पहले करना पड़ा।" },
      { id: "day51_ex_007", english: "Commercial solicitation, leafleting, and vendor canvassing are strictly forbidden within the office park.", hindi: "कार्यालय परिसर के भीतर व्यावसायिक प्रचार, पर्चे बांटना और विक्रेताओं द्वारा आग्रह करना सख्त मना है।" },
      { id: "day51_ex_008", english: "Punctuality is not merely a formality; it reflects respect for your colleagues' valuable time.", hindi: "समय की पाबंदी केवल एक औपचारिकता नहीं है; यह आपके सहकर्मियों के बहुमूल्य समय के प्रति सम्मान को दर्शाती है।" },
      { id: "day51_ex_009", english: "All staff members are required to wear high-visibility vests and protective hard hats inside the construction perimeter.", hindi: "निर्माण परिधि के अंदर सभी स्टाफ सदस्यों को हाई-विजिबिलिटी वेस्ट और सुरक्षात्मक हार्ड हैट पहनना आवश्यक है।" },
      { id: "day51_ex_010", english: "The notice explicitly warns that trespassers will be prosecuted to the fullest extent of the law.", hindi: "नोटिस स्पष्ट रूप से चेतावनी देता है कि अनधिकृत प्रवेश करने वालों पर कानून की पूरी सीमा तक मुकदमा चलाया जाएगा।" },
      { id: "day51_ex_011", english: "Please refrain from taking confidential phone calls in common communal dining areas.", hindi: "कृपया सामान्य भोजन क्षेत्रों में गोपनीय फोन कॉल करने से बचें।" },
      { id: "day51_ex_012", english: "Compliance with occupational health and safety regulations is mandatory for all industrial employees.", hindi: "सभी औद्योगिक कर्मचारियों के लिए व्यावसायिक स्वास्थ्य और सुरक्षा नियमों का अनुपालन अनिवार्य है।" },
      { id: "day51_ex_013", english: "The HR director urged the team to maintain a cordial and inclusive atmosphere during internal debates.", hindi: "मानव संसाधन निदेशक ने आंतरिक बहस के दौरान टीम से एक सौहार्दपूर्ण और समावेशी माहौल बनाए रखने का आग्रह किया।" },
      { id: "day51_ex_014", english: "Failure to comply with institutional protocols may result in severe disciplinary sanctions.", hindi: "संस्थागत प्रोटोकॉल का पालन न करने पर गंभीर अनुशासनात्मक प्रतिबंध हो सकते हैं।" },
      { id: "day51_ex_015", english: "Visitors must obtain a temporary electronic security pass from the main reception before proceeding to the elevators.", hindi: "लिफ्ट की ओर जाने से पहले आगंतुकों को मुख्य स्वागत कक्ष से एक अस्थायी इलेक्ट्रॉनिक सुरक्षा पास प्राप्त करना होगा।" },
      { id: "day51_ex_016", english: "A clear desk policy prevents unauthorized individuals from viewing sensitive proprietary documents.", hindi: "क्लीन डेस्क नीति अनधिकृत व्यक्तियों को संवेदनशील मालिकाना दस्तावेज़ देखने से रोकती है।" },
      { id: "day51_ex_017", english: "Could you please send me the final budgetary revisions so that I can process the vendor invoice?", hindi: "क्या आप कृपया मुझे अंतिम बजटीय संशोधन भेज सकते हैं ताकि मैं विक्रेता चालान को संसाधित कर सकूं?" },
      { id: "day51_ex_018", english: "The security signage clearly states: 'Mind the step and keep to the right on all stairwells.'", hindi: "सुरक्षा संकेत स्पष्ट रूप से कहता है: 'कदम संभालें और सभी सीढ़ियों पर दाईं ओर रहें।'" },
      { id: "day51_ex_019", english: "He handled the delicate client complaint with utmost professionalism, discretion, and empathy.", hindi: "उन्होंने अत्यधिक व्यावसायिकता, विवेक और सहानुभूति के साथ नाजुक ग्राहक शिकायत को संभाला।" },
      { id: "day51_ex_020", english: "Smoking and electronic vaping are strictly prohibited throughout the entire hospital complex.", hindi: "पूरे अस्पताल परिसर में धूम्रपान और इलेक्ट्रॉनिक वेपिंग सख्त वर्जित है।" },
      { id: "day51_ex_021", english: "The corporate dress code encourages smart business casual attire from Monday through Thursday.", hindi: "कॉर्पोरेट ड्रेस कोड सोमवार से गुरुवार तक स्मार्ट बिजनेस कैज़ुअल पोशाक को प्रोत्साहित करता है।" },
      { id: "day51_ex_022", english: "Any employee who discovers a safety hazard must notify the facility manager immediately.", hindi: "सुरक्षा खतरे का पता लगाने वाले किसी भी कर्मचारी को तुरंत सुविधा प्रबंधक को सूचित करना चाहिए।" },
      { id: "day51_ex_023", english: "I would appreciate it if you could confirm your attendance by Friday noon.", hindi: "यदि आप शुक्रवार दोपहर तक अपनी उपस्थिति की पुष्टि कर सकें तो मैं आभारी रहूंगा।" },
      { id: "day51_ex_024", english: "Emergency exit doors must remain unobstructed at all times under municipal fire safety bylaws.", hindi: "नगरपालिका अग्नि सुरक्षा उप-नियमों के तहत आपातकालीन निकास द्वार हर समय बाधा मुक्त रहने चाहिए।" },
      { id: "day51_ex_025", english: "Maintaining active eye contact and taking notes demonstrates respectful active listening in executive briefings.", hindi: "सक्रिय नेत्र संपर्क बनाए रखना और नोट्स लेना कार्यकारी ब्रीफिंग में सम्मानजनक सक्रिय श्रवण को प्रदर्शित करता है।" }
    ]
  },
  pronunciation: {
    focusSound: "High-Register Syllabic Stress and Formal Intonation in Workplace Notices and Directives",
    phoneticNotes: "1. Syllable stress in administrative nouns: /dɪˈkɔː.rəm/ (2nd syllable), /ˌkɒn.fɪ.den.ʃiˈæl.ə.ti/ (4th syllable), /ˌpʌŋk.tʃuˈæl.ə.ti/ (3rd syllable).\n2. Adjectives ending in /-tɪd/ and /-əd/: 'prohibited' /prəˈhɪb.ɪ.tɪd/, 'authorized' /ˈɔː.θər.aɪzd/, 'designated' /ˈdez.ɪɡ.neɪ.tɪd/.\n3. Falling intonation on formal public notices: Directives and prohibitions end on a definitive falling pitch to project authority ('Smoking is strictly prohibited ↘').\n4. Rising-falling intonation on polite diplomatic requests: 'Could you please get back to me by noon? ↗↘'.",
    minimalPairs: [
      { wordA: "Proscribed", ipaA: "/prəˈskraɪbd/", wordB: "Prescribed", ipaB: "/prɪˈskraɪbd/" },
      { wordA: "Discretion", ipaA: "/dɪˈskreʃ.ən/", wordB: "Distraction", ipaB: "/dɪˈstræk.ʃən/" },
      { wordA: "Protocol", ipaA: "/ˈprəʊ.tə.kɒl/", wordB: "Practical", ipaB: "/ˈpræk.tɪ.kəl/" },
      { wordA: "Liable", ipaA: "/ˈlaɪ.ə.bəl/", wordB: "Label", ipaB: "/ˈleɪ.bəl/" },
      { wordA: "Notice", ipaA: "/ˈnəʊ.tɪs/", wordB: "Novice", ipaB: "/ˈnɒv.ɪs/" }
    ],
    drills: [
      { sentence: "Unauthorized admittance is strictly prohibited on these premises.", focus: "Formal cadence & /prəˈhɪb.ɪ.tɪd/" },
      { sentence: "All employees must maintain confidentiality and professional decorum.", focus: "Stress in /ˌkɒn.fɪ.den.ʃiˈæl.ə.ti/ & /dɪˈkɔː.rəm/" },
      { sentence: "Failure to comply will result in immediate disciplinary action.", focus: "Connected speech & /ˌdɪs.əˈplɪn.ər.i/" },
      { sentence: "Please review the document and reply at your earliest convenience.", focus: "Polite downward inflection on 'convenience'" },
      { sentence: "Punctuality and active listening reinforce workplace credibility.", focus: "Stress in /ˌpʌŋk.tʃuˈæl.ə.ti/ & /ˌkred.əˈbɪl.ə.ti/" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day51_ex_001",
        type: "error_correction",
        prompt: "Correct the sentence: 'Please revert back to me as soon as possible.'",
        correctAnswer: "Please reply to me as soon as possible.",
        acceptableAnswers: [
          "Please get back to me as soon as possible.",
          "Please revert to me as soon as possible."
        ],
        explanationEn: "In English, 'revert back' is redundant. Use 'reply', 'get back to me', or 'revert to me'.",
        explanationHi: "'Revert back' में 'back' अनावश्यक है। 'Please reply to me' या 'Please get back to me' कहें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day51_ex_002",
        type: "error_correction",
        prompt: "Correct the sentence: 'I am sending the invoice, kindly do the needful.'",
        correctAnswer: "I am sending the invoice; please process the payment at your earliest convenience.",
        acceptableAnswers: [
          "I am sending the invoice; please review and approve it.",
          "I am attaching the invoice; please process it."
        ],
        explanationEn: "'Do the needful' is archaic and vague. Always specify the actual requested action (e.g., 'process the payment', 'review and approve').",
        explanationHi: "'Kindly do the needful' पुराना और अस्पष्ट है। सटीक कार्य लिखें जैसे 'please process the payment' या 'please review and approve it'।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day51_ex_003",
        type: "error_correction",
        prompt: "Correct the sentence: 'The notice board is telling that meeting is preponed.'",
        correctAnswer: "The notice on the board states that the meeting has been moved forward.",
        acceptableAnswers: [
          "The notice states that the meeting has been advanced.",
          "The notice indicates that the meeting has been rescheduled earlier."
        ],
        explanationEn: "Signs 'state' or 'indicate' (not 'tell'), and 'prepone' should be replaced with 'move forward', 'advance', or 'reschedule earlier' in global English.",
        explanationHi: "सूचना 'states / indicates' करती है ('tells' नहीं), और 'prepone' के स्थान पर 'move forward' या 'advance' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day51_ex_004",
        type: "multiple_choice",
        prompt: "What does the sign 'AUTHORIZED PERSONNEL ONLY' mean?",
        options: [
          "Only employees with official permission and security clearance may enter",
          "Anyone who works in the building may enter freely",
          "Visitors can enter if they write their name in a book",
          "The room is permanently closed to all staff"
        ],
        correctAnswer: "Only employees with official permission and security clearance may enter",
        explanationEn: "'Authorized personnel only' restricts access strictly to vetted staff with explicit clearance.",
        explanationHi: "इसका अर्थ है कि केवल आधिकारिक अनुमति प्राप्त कर्मचारी ही प्रवेश कर सकते हैं।",
        difficulty: "easy",
        skillTag: "PUBLIC_SIGNAGE"
      },
      {
        id: "day51_ex_005",
        type: "fill_blank",
        prompt: "The sign on the construction perimeter warned: 'Trespassers will be _______.'",
        correctAnswer: "prosecuted",
        acceptableAnswers: ["prosecuted under law"],
        explanationEn: "'Trespassers will be prosecuted' is the canonical legal warning against unauthorized entry.",
        explanationHi: "'Trespassers will be prosecuted' (अनधिकृत प्रवेश करने वालों पर कानूनी कार्रवाई की जाएगी) सही अभिव्यक्ति है।",
        difficulty: "easy",
        skillTag: "PUBLIC_SIGNAGE"
      },
      {
        id: "day51_ex_006",
        type: "multiple_choice",
        prompt: "Which term describes appropriate, polite, and dignified behavior in a formal workplace or meeting?",
        options: ["Decorum", "Solicitation", "Liability", "Trespass"],
        correctAnswer: "Decorum",
        explanationEn: "'Decorum' means behavior in keeping with good taste, dignity, and formal propriety.",
        explanationHi: "औपचारिक कार्यस्थल में गरिमापूर्ण और सभ्य आचरण को 'Decorum' कहते हैं।",
        difficulty: "easy",
        skillTag: "WORKPLACE_ETIQUETTE"
      },
      {
        id: "day51_ex_007",
        type: "translation_hi_to_en",
        prompt: "Translate into natural professional English: 'कृपया संलग्न दस्तावेज़ की समीक्षा करें और अपनी स्वीकृति भेजें।'",
        correctAnswer: "Please review the attached document and provide your approval.",
        acceptableAnswers: [
          "Please review the attached document and send your approval.",
          "Kindly review the attached file and confirm your approval."
        ],
        explanationEn: "'Please review the attached document and provide your approval.'",
        explanationHi: "प्राकृतिक व्यावसायिक अनुवाद: 'Please review the attached document and provide/send your approval.'",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day51_ex_008",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Failure to comply with safety protocols will result in immediate disciplinary action.'",
        correctAnswer: "सुरक्षा प्रोटोकॉल का पालन न करने पर तत्काल अनुशासनात्मक कार्रवाई होगी।",
        acceptableAnswers: [
          "सुरक्षा नियमों का पालन करने में विफलता पर तत्काल अनुशासनात्मक कार्रवाई की जाएगी।"
        ],
        explanationEn: "'Failure to comply with safety protocols will result in immediate disciplinary action.'",
        explanationHi: "'सुरक्षा प्रोटोकॉल का पालन न करने पर तत्काल अनुशासनात्मक कार्रवाई होगी।'",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day51_ex_009",
        type: "sentence_ordering",
        prompt: "Arrange into a formal public notice: [strictly / premises / is / smoking / these / prohibited / on]",
        correctAnswer: "Smoking is strictly prohibited on these premises.",
        explanationEn: "Subject + Verb + Adverb + Past Participle + Prepositional Phrase.",
        explanationHi: "सही क्रम: Smoking is strictly prohibited on these premises.",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day51_ex_010",
        type: "dialogue_completion",
        prompt: "Complete the workplace exchange:\nManager: 'We need to reschedule tomorrow's strategy session to earlier in the morning.'\nEmployee: 'Certainly, we can _______ the session to 9:00 AM.'",
        options: ["advance", "prepone back", "delay forward", "tell"],
        correctAnswer: "advance",
        explanationEn: "'Advance' or 'move forward' is the correct international standard for rescheduling earlier.",
        explanationHi: "समय को पहले करने के लिए 'advance' या 'move forward' का प्रयोग किया जाता है।",
        difficulty: "easy",
        skillTag: "CORPORATE_COMMUNICATION"
      },
      {
        id: "day51_ex_011",
        type: "fill_blank",
        prompt: "Maintaining client _______ is a statutory requirement under the non-disclosure agreement.",
        correctAnswer: "confidentiality",
        acceptableAnswers: ["privacy", "discretion"],
        explanationEn: "'Confidentiality' is the state of keeping secret or private information secure.",
        explanationHi: "ग्राहक की गोपनीयता बनाए रखने को 'confidentiality' कहते हैं।",
        difficulty: "easy",
        skillTag: "LEGAL_BUSINESS_TERMS"
      },
      {
        id: "day51_ex_012",
        type: "multiple_choice",
        prompt: "What does the sign 'OUT OF ORDER' mean on an office elevator or photocopier?",
        options: [
          "The machine is broken or not functioning and should not be used",
          "The machine is working only for managers",
          "The machine is new and waiting for delivery",
          "The machine requires a password"
        ],
        correctAnswer: "The machine is broken or not functioning and should not be used",
        explanationEn: "'Out of order' indicates a machine or device is defective and not operational.",
        explanationHi: "'Out of order' का अर्थ है कि उपकरण खराब है और काम नहीं कर रहा है।",
        difficulty: "easy",
        skillTag: "PUBLIC_SIGNAGE"
      },
      {
        id: "day51_ex_013",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'All visitors must register at the main security desk.'",
        correctAnswer: "All visitors must register at the main security desk.",
        explanationEn: "'All visitors must register at the main security desk.'",
        explanationHi: "स्पष्ट और औपचारिक उच्चारण का श्रुतलेख।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day51_ex_014",
        type: "error_correction",
        prompt: "Correct the sentence: 'Please switch off mobile phones as meeting is running.'",
        correctAnswer: "Please switch off mobile phones while the meeting is in session.",
        acceptableAnswers: [
          "Please mute your mobile phones during the meeting.",
          "Please turn off mobile phones while the meeting is in progress."
        ],
        explanationEn: "Use 'while the meeting is in session' or 'in progress' (not '*meeting is running*').",
        explanationHi: "'Meeting is running' के स्थान पर 'while the meeting is in session / in progress' कहें।",
        difficulty: "medium",
        skillTag: "WORKPLACE_ETIQUETTE"
      },
      {
        id: "day51_ex_015",
        type: "matching",
        prompt: "Match each sign with its regulatory interpretation:",
        pairs: [
          { left: "Hard Hats Required", right: "Protective headgear is mandatory for safety" },
          { left: "No Soliciting", right: "Commercial sales pitches and flyers are forbidden" },
          { left: "Mind the Gap", right: "Be careful of space between platform and train" },
          { left: "Staff Only", right: "Public entry is restricted to employees" }
        ],
        explanationEn: "Standard regulatory signage matching.",
        explanationHi: "सार्वजनिक संकेतों का उनके वास्तविक अर्थों से सही मिलान।",
        difficulty: "easy",
        skillTag: "PUBLIC_SIGNAGE"
      },
      {
        id: "day51_ex_016",
        type: "fill_blank",
        prompt: "The management accepts no _______ for lost or damaged personal belongings.",
        correctAnswer: "liability",
        acceptableAnswers: ["responsibility"],
        explanationEn: "'Accepts no liability / responsibility' is standard legal and administrative terminology.",
        explanationHi: "'Accepts no liability' का अर्थ है कोई कानूनी दायित्व स्वीकार न करना।",
        difficulty: "easy",
        skillTag: "FORMAL_NOTICES"
      },
      {
        id: "day51_ex_017",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'बैठक के दौरान सभी से शांत और पेशेवर व्यवहार बनाए रखने का अनुरोध किया जाता है।'",
        correctAnswer: "Everyone is requested to maintain a calm and professional decorum during the meeting.",
        acceptableAnswers: [
          "All participants are requested to maintain professional decorum during the meeting.",
          "Please maintain professional conduct throughout the meeting."
        ],
        explanationEn: "'Everyone is requested to maintain a calm and professional decorum during the meeting.'",
        explanationHi: "'Professional decorum / conduct' का प्राकृतिक प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day51_ex_018",
        type: "multiple_choice",
        prompt: "Which phrase is the most professional closing when requesting a colleague to respond?",
        options: [
          "I look forward to hearing from you at your convenience.",
          "Revert back immediately with needful.",
          "Tell me fast what happened.",
          "Give the answer right now."
        ],
        correctAnswer: "I look forward to hearing from you at your convenience.",
        explanationEn: "'I look forward to hearing from you at your convenience' is standard and polite.",
        explanationHi: "यह सबसे सभ्य, औपचारिक और अंतरराष्ट्रीय रूप से मान्य ईमेल समापन वाक्यांश है।",
        difficulty: "easy",
        skillTag: "BUSINESS_WRITING"
      },
      {
        id: "day51_ex_019",
        type: "sentence_building",
        prompt: "Build a passive notice sentence using: [visitor badges / must be displayed / all times / at]",
        correctAnswer: "Visitor badges must be displayed at all times.",
        acceptableAnswers: [
          "At all times, visitor badges must be displayed."
        ],
        explanationEn: "Subject + Modal Passive + Time Adverbial.",
        explanationHi: "सही वाक्य: Visitor badges must be displayed at all times.",
        difficulty: "medium",
        skillTag: "SYNTAX_BUILDING"
      },
      {
        id: "day51_ex_020",
        type: "error_correction",
        prompt: "Correct the sentence: 'Entry is strictly restricted for outside persons.'",
        correctAnswer: "Entry is strictly restricted to authorized personnel.",
        acceptableAnswers: [
          "Access is restricted to authorized staff only.",
          "Unauthorized entry is strictly prohibited."
        ],
        explanationEn: "Use 'restricted to authorized personnel' instead of clumsy '*for outside persons*'.",
        explanationHi: "'Restricted to authorized personnel' एक मानक और स्वाभाविक औपचारिक वाक्यांश है।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day51_ex_021",
        type: "multiple_choice",
        prompt: "What is a 'Clean-Desk Policy' in modern corporations?",
        options: [
          "A rule requiring employees to clear their desks of all confidential papers and storage media at the end of the day",
          "A requirement to wash the office tables with soap every morning",
          "A rule that employees cannot have computers on their desks",
          "A prohibition against eating food anywhere in the building"
        ],
        correctAnswer: "A rule requiring employees to clear their desks of all confidential papers and storage media at the end of the day",
        explanationEn: "A clean-desk policy protects proprietary and personal data from unauthorized eyes.",
        explanationHi: "गोपनीयता सुरक्षा के लिए कार्य समाप्ति पर टेबल से सभी संवेदनशील फाइलों को हटाने का नियम।",
        difficulty: "easy",
        skillTag: "WORKPLACE_ETIQUETTE"
      },
      {
        id: "day51_ex_022",
        type: "fill_blank",
        prompt: "Please _______ from speaking loudly in designated quiet focus zones.",
        correctAnswer: "refrain",
        acceptableAnswers: ["abstain"],
        explanationEn: "'Refrain from [verb-ing]' is the formal polite standard for asking people not to do something.",
        explanationHi: "किसी काम से बचने का औपचारिक अनुरोध करने के लिए 'refrain from' का प्रयोग किया जाता है।",
        difficulty: "easy",
        skillTag: "FORMAL_POLITENESS"
      },
      {
        id: "day51_ex_023",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'All personal data will be processed in strict compliance with privacy laws.'",
        correctAnswer: "सभी व्यक्तिगत डेटा को गोपनीयता कानूनों के सख्त अनुपालन में संसाधित किया जाएगा।",
        acceptableAnswers: [
          "सभी निजी जानकारी को गोपनीयता नियमों के पूर्ण अनुपालन के साथ प्रोसेस किया जाएगा।"
        ],
        explanationEn: "'In strict compliance with privacy laws' = गोपनीयता कानूनों के सख्त अनुपालन में.",
        explanationHi: "सटीक प्रशासनिक हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day51_ex_024",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nColleague A: 'Can I discuss the new client contract while we take the subway?'\nColleague B: 'I recommend we wait until we reach the office to maintain client _______.'",
        options: ["confidentiality", "solicitation", "turnstiles", "downpour"],
        correctAnswer: "confidentiality",
        explanationEn: "Client matters must be kept private to maintain confidentiality.",
        explanationHi: "सार्वजनिक स्थानों पर ग्राहक की गोपनीयता (confidentiality) बनाए रखना आवश्यक है।",
        difficulty: "easy",
        skillTag: "WORKPLACE_ETIQUETTE"
      },
      {
        id: "day51_ex_025",
        type: "speaking_pronunciation",
        prompt: "Read aloud with clear corporate intonation: 'Compliance with established protocols ensures organizational integrity.'",
        targetText: "Compliance with established protocols ensures organizational integrity.",
        phoneticFocus: "Stress on /kəmˈplaɪ.əns/, /ˈprəʊ.tə.kɒlz/, and /ɪnˈteɡ.rə.ti/",
        explanationEn: "Maintain crisp articulation across multisyllabic professional nouns.",
        explanationHi: "उच्चारण और औपचारिक लय का अभ्यास।",
        difficulty: "medium",
        skillTag: "PRONUNCIATION_SPEAKING"
      },
      {
        id: "day51_ex_026",
        type: "multiple_choice",
        prompt: "If a sign reads 'NO TRESPASSING', what legal right does the property owner retain?",
        options: [
          "The right to legally prosecute anyone who enters without permission",
          "The right to give everyone free parking",
          "The right to sell goods to all visitors",
          "The right to invite neighbors without notice"
        ],
        correctAnswer: "The right to legally prosecute anyone who enters without permission",
        explanationEn: "'No Trespassing' establishes private property boundaries and legal enforcement rights.",
        explanationHi: "यह अनधिकृत प्रवेश पर कानूनी कार्रवाई का अधिकार सुरक्षित करता है।",
        difficulty: "easy",
        skillTag: "PUBLIC_SIGNAGE"
      },
      {
        id: "day51_ex_027",
        type: "fill_blank",
        prompt: "Emergency fire exits must be kept _______ and unobstructed at all times.",
        correctAnswer: "clear",
        acceptableAnswers: ["accessible", "open"],
        explanationEn: "Fire safety rules require exits to remain 'clear and unobstructed'.",
        explanationHi: "'Clear and unobstructed' (साफ और बाधा मुक्त) अग्नि सुरक्षा का मानक नियम है।",
        difficulty: "easy",
        skillTag: "SAFETY_NOTICES"
      },
      {
        id: "day51_ex_028",
        type: "error_correction",
        prompt: "Correct the sentence: 'All employees should come on exact time in the office.'",
        correctAnswer: "All employees are expected to maintain strict punctuality.",
        acceptableAnswers: [
          "All staff must be punctual.",
          "All employees are expected to arrive punctually."
        ],
        explanationEn: "Use professional vocabulary: 'maintain strict punctuality' or 'arrive punctually' (avoid clumsy '*come on exact time*').",
        explanationHi: "'Maintain strict punctuality' या 'arrive punctually' अधिक स्वाभाविक और पेशेवर है।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day51_ex_029",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'कृपया इस ईमेल को पावती मानकर अपने रिकॉर्ड में सुरक्षित रखें।'",
        correctAnswer: "Please retain this email as an official acknowledgment for your records.",
        acceptableAnswers: [
          "Please keep this email as an acknowledgment for your records.",
          "Kindly treat this email as an official acknowledgment for your files."
        ],
        explanationEn: "'Please retain this email as an official acknowledgment for your records.'",
        explanationHi: "'Official acknowledgment for your records' एक मानक व्यापारिक वाक्यांश है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day51_ex_030",
        type: "sentence_ordering",
        prompt: "Order the directive: [passports / must / border / present / travelers / all / at / the]",
        correctAnswer: "All travelers must present passports at the border.",
        acceptableAnswers: [
          "At the border, all travelers must present passports."
        ],
        explanationEn: "Subject + Modal + Verb + Object + Prepositional Phrase.",
        explanationHi: "सही क्रम: All travelers must present passports at the border.",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day51_ex_031",
        type: "multiple_choice",
        prompt: "Which word means 'exercising caution and discreet judgment in speech or conduct'?",
        options: ["Circumspect", "Counterfeit", "Congested", "Casual"],
        correctAnswer: "Circumspect",
        explanationEn: "'Circumspect' means wary, discreet, and unwilling to take unnecessary risks.",
        explanationHi: "सतर्क, सावधान और सोच-समझकर बोलने वाले को 'Circumspect' कहते हैं।",
        difficulty: "easy",
        skillTag: "VOCABULARY_EXPANSION"
      },
      {
        id: "day51_ex_032",
        type: "fill_blank",
        prompt: "The meeting was _______ to an earlier date due to an unexpected public holiday.",
        correctAnswer: "advanced",
        acceptableAnswers: ["moved forward", "rescheduled"],
        explanationEn: "'Advanced' or 'moved forward' means shifted to an earlier date.",
        explanationHi: "तारीख पहले करने के लिए 'advanced' या 'moved forward' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "WORKPLACE_SCHEDULING"
      },
      {
        id: "day51_ex_033",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Commercial solicitation is strictly prohibited on these premises.'",
        correctAnswer: "इस परिसर में व्यावसायिक प्रचार और बिक्री का आग्रह सख्त वर्जित है।",
        acceptableAnswers: [
          "इस परिसर में किसी भी प्रकार का व्यावसायिक प्रचार सख्त मना है।"
        ],
        explanationEn: "'Commercial solicitation' translates as व्यावसायिक प्रचार / बिक्री का आग्रह.",
        explanationHi: "सार्वजनिक निषेध सूचना का सही अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day51_ex_034",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nSecurity Guard: 'Good morning, ma'am. May I see your visitor pass?'\nVisitor: 'Good morning. I have signed the register and received this temporary _______ pass.'",
        options: ["electronic", "counterfeit", "defective", "residential"],
        correctAnswer: "electronic",
        explanationEn: "Offices issue temporary electronic or security passes to authorized visitors.",
        explanationHi: "आगंतुकों को सुरक्षा जांच के बाद अस्थायी 'electronic / security pass' मिलता है।",
        difficulty: "easy",
        skillTag: "SECURITY_PROTOCOL"
      },
      {
        id: "day51_ex_035",
        type: "error_correction",
        prompt: "Correct the sentence: 'The director said that everyone must take care of his dressing sense.'",
        correctAnswer: "The director stated that all employees must adhere to the corporate dress code.",
        acceptableAnswers: [
          "The director reminded everyone to follow the corporate dress code.",
          "The director stated that staff must maintain appropriate business attire."
        ],
        explanationEn: "Use formal corporate terms: 'adhere to the corporate dress code' (not '*dressing sense*').",
        explanationHi: "'Dressing sense' के स्थान पर 'corporate dress code' या 'business attire' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day51_ex_036",
        type: "fill_blank",
        prompt: "A non-disclosure agreement imposes a legal _______ on employees not to reveal proprietary secrets.",
        correctAnswer: "obligation",
        acceptableAnswers: ["duty", "stipulation", "requirement"],
        explanationEn: "'Imposes a legal obligation / duty / stipulation'.",
        explanationHi: "कानूनी बाध्यता को 'legal obligation' कहते हैं।",
        difficulty: "easy",
        skillTag: "LEGAL_BUSINESS_TERMS"
      },
      {
        id: "day51_ex_037",
        type: "multiple_choice",
        prompt: "What does 'Mind Your P's and Q's' mean in a professional or social setting?",
        options: [
          "Mind your manners and observe polite etiquette carefully",
          "Check your printer ink levels",
          "Count your product quantities",
          "Only speak in questions"
        ],
        correctAnswer: "Mind your manners and observe polite etiquette carefully",
        explanationEn: "'Mind your P's and Q's' is an English idiom meaning to be careful about behaving politely and properly.",
        explanationHi: "यह मुहावरा अपने आचरण और शिष्टाचार के प्रति अत्यंत सावधान रहने के लिए प्रयोग किया जाता है।",
        difficulty: "medium",
        skillTag: "IDIOMATIC_ETIQUETTE"
      },
      {
        id: "day51_ex_038",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'Please refrain from sharing unverified rumors across internal communication channels.'",
        correctAnswer: "Please refrain from sharing unverified rumors across internal communication channels.",
        explanationEn: "'Please refrain from sharing unverified rumors across internal communication channels.'",
        explanationHi: "व्यावसायिक श्रुतलेख अभ्यास।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day51_ex_039",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'कृपया लिफ्ट और सीढ़ियों के पास शांति बनाए रखें।'",
        correctAnswer: "Please maintain silence near the elevators and stairwells.",
        acceptableAnswers: [
          "Please keep quiet around the elevators and staircases.",
          "Silence should be observed near elevators and stairs."
        ],
        explanationEn: "'Please maintain silence near the elevators and stairwells.'",
        explanationHi: "'Maintain silence near the elevators and stairwells' सही है।",
        difficulty: "easy",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day51_ex_040",
        type: "sentence_building",
        prompt: "Build a formal notice: [penalty of law / trespassers / under / prosecuted / will be / full]",
        correctAnswer: "Trespassers will be prosecuted under full penalty of law.",
        acceptableAnswers: [
          "Under full penalty of law, trespassers will be prosecuted."
        ],
        explanationEn: "Passive legal warning structure.",
        explanationHi: "सही वाक्य संरचना का निर्माण।",
        difficulty: "medium",
        skillTag: "SYNTAX_BUILDING"
      },
      {
        id: "day51_ex_041",
        type: "multiple_choice",
        prompt: "Which behavior violates virtual meeting etiquette?",
        options: [
          "Leaving your microphone unmuted while chewing snacks or typing loudly",
          "Muting your microphone when not speaking",
          "Logging in two minutes prior to the scheduled start time",
          "Using the 'raise hand' feature before asking a question"
        ],
        correctAnswer: "Leaving your microphone unmuted while chewing snacks or typing loudly",
        explanationEn: "Unmuted background sounds cause disruption during virtual meetings.",
        explanationHi: "माइक अनम्यूट रखकर खाना या शोर करना वर्चुअल मीटिंग शिष्टाचार का उल्लंघन है।",
        difficulty: "easy",
        skillTag: "WORKPLACE_ETIQUETTE"
      },
      {
        id: "day51_ex_042",
        type: "fill_blank",
        prompt: "The sign on the electrical panel reads: 'DANGER: High _______ - Authorized Electricians Only.'",
        correctAnswer: "voltage",
        explanationEn: "'High Voltage' is standard danger signage.",
        explanationHi: "बिजली के पैनल पर 'High Voltage' लिखा होता है।",
        difficulty: "easy",
        skillTag: "SAFETY_NOTICES"
      },
      {
        id: "day51_ex_043",
        type: "error_correction",
        prompt: "Correct the sentence: 'I am requesting you to kindly prepone my interview.'",
        correctAnswer: "I would appreciate it if we could reschedule my interview to an earlier time.",
        acceptableAnswers: [
          "Could we advance my interview to an earlier slot?",
          "I kindly request to move my interview forward."
        ],
        explanationEn: "Avoid 'prepone'; use 'reschedule to an earlier time', 'advance', or 'move forward'.",
        explanationHi: "'Prepone' के बजाय 'reschedule to an earlier time' या 'advance' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day51_ex_044",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'A cordial greeting and prompt response demonstrate executive professionalism.'",
        correctAnswer: "एक सौहार्दपूर्ण अभिवादन और त्वरित प्रतिक्रिया कार्यकारी व्यावसायिकता को प्रदर्शित करती है।",
        acceptableAnswers: [
          "मैत्रीपूर्ण अभिवादन और समय पर उत्तर देना पेशेवर दक्षता का प्रतीक है।"
        ],
        explanationEn: "'A cordial greeting and prompt response demonstrate executive professionalism.'",
        explanationHi: "सौहार्दपूर्ण व्यवहार का हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day51_ex_045",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nExecutive: 'Did the auditor highlight any compliance gaps in our operations?'\nOfficer: 'No, sir. Our operations are in full _______ with statutory regulations.'",
        options: ["compliance", "solicitation", "decorum", "downpour"],
        correctAnswer: "compliance",
        explanationEn: "'In full compliance with' means obeying all official laws and regulations.",
        explanationHi: "नियमों के पूर्ण अनुपालन के लिए 'in full compliance with' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "COMPLIANCE_DISCOURSE"
      },
      {
        id: "day51_ex_046",
        type: "matching",
        prompt: "Match the workplace term with its appropriate definition:",
        pairs: [
          { left: "Non-Disclosure Agreement", right: "Legal contract binding parties to secrecy" },
          { left: "Code of Conduct", right: "Formal set of organizational ethical rules" },
          { left: "Punctuality", right: "Habit of arriving precisely at appointed times" },
          { left: "Discretion", right: "Careful restraint in sharing sensitive information" }
        ],
        explanationEn: "Workplace terminology matching.",
        explanationHi: "व्यावसायिक शब्दावली और उनकी सटीक परिभाषाओं का मिलान।",
        difficulty: "easy",
        skillTag: "WORKPLACE_ETIQUETTE"
      },
      {
        id: "day51_ex_047",
        type: "fill_blank",
        prompt: "Vehicles parked in the emergency ambulance bay will be _______ immediately.",
        correctAnswer: "towed",
        acceptableAnswers: ["impounded", "towed away"],
        explanationEn: "'Will be towed / impounded immediately' is standard parking enforcement signage.",
        explanationHi: "अनधिकृत पार्किंग को खींचकर हटाने के लिए 'towed' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "PUBLIC_SIGNAGE"
      },
      {
        id: "day51_ex_048",
        type: "error_correction",
        prompt: "Correct the sentence: 'Please revert back on my mail today itself.'",
        correctAnswer: "Please reply to my email today.",
        acceptableAnswers: [
          "Please get back to me regarding my email today.",
          "Please respond to my email today."
        ],
        explanationEn: "Eliminate 'revert back' and redundant 'itself'. Say: 'Please reply to my email today.'",
        explanationHi: "'Revert back' और 'today itself' दोनों अप्राकृतिक हैं; 'Please reply to my email today' कहें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day51_ex_049",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'कृपया यह सुनिश्चित करें कि सभी संवेदनशील फाइलें रात में सुरक्षित लॉकर में रखी जाएं।'",
        correctAnswer: "Please ensure that all sensitive files are locked in secure storage overnight.",
        acceptableAnswers: [
          "Please make sure that all confidential documents are placed in secure lockers at night.",
          "Ensure that all sensitive files are kept in a secure locker overnight."
        ],
        explanationEn: "'Please ensure that all sensitive files are locked in secure storage overnight.'",
        explanationHi: "'Ensure that all sensitive files are locked in secure storage overnight' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day51_ex_050",
        type: "multiple_choice",
        prompt: "What is the polite and professional way to decline a non-urgent request when you are on a tight deadline?",
        options: [
          "I am currently prioritizing an urgent client deadline; may I review this tomorrow afternoon?",
          "I am having too much load, do it yourself.",
          "No, I cannot do the needful right now.",
          "Don't disturb me today."
        ],
        correctAnswer: "I am currently prioritizing an urgent client deadline; may I review this tomorrow afternoon?",
        explanationEn: "Professional boundary setting combines a clear reason with a proactive proposed alternative time.",
        explanationHi: "विनम्रता से मना करते समय स्पष्ट कारण और वैकल्पिक समय देना शिष्टाचार का नियम है।",
        difficulty: "easy",
        skillTag: "WORKPLACE_ETIQUETTE"
      },
      {
        id: "day51_ex_051",
        type: "fill_blank",
        prompt: "The executive reminded the committee that all discussions must remain strictly _______ within this room.",
        correctAnswer: "confidential",
        acceptableAnswers: ["private"],
        explanationEn: "'Remain strictly confidential'.",
        explanationHi: "'Strictly confidential' (पूरी तरह गोपनीय) सही है।",
        difficulty: "easy",
        skillTag: "CONFIDENTIALITY"
      },
      {
        id: "day51_ex_052",
        type: "sentence_ordering",
        prompt: "Order the official directive: [badges / identification / wear / must / employees / all / visible]",
        correctAnswer: "All employees must wear visible identification badges.",
        explanationEn: "Subject + Modal + Verb + Adjective + Object.",
        explanationHi: "सही वाक्य: All employees must wear visible identification badges.",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day51_ex_053",
        type: "multiple_choice",
        prompt: "Which sign indicates that a wet floor might cause slipping?",
        options: ["Caution: Wet Floor", "Out of Order", "Admittance Prohibited", "Keep Off The Grass"],
        correctAnswer: "Caution: Wet Floor",
        explanationEn: "'Caution: Wet Floor' warns pedestrians of slippery surface hazards.",
        explanationHi: "गीले फर्श से फिसलने की चेतावनी 'Caution: Wet Floor' द्वारा दी जाती है।",
        difficulty: "easy",
        skillTag: "PUBLIC_SIGNAGE"
      },
      {
        id: "day51_ex_054",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Professional boundaries help maintain an objective and respectful workplace environment.'",
        correctAnswer: "व्यावसायिक सीमाएं एक निष्पक्ष और सम्मानजनक कार्यस्थल का माहौल बनाए रखने में मदद करती हैं।",
        acceptableAnswers: [
          "पेशेवर मर्यादाएं निष्पक्ष और आदरपूर्ण कार्य वातावरण को बढ़ावा देती हैं।"
        ],
        explanationEn: "'Professional boundaries' = व्यावसायिक सीमाएं / मर्यादाएं.",
        explanationHi: "सटीक हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day51_ex_055",
        type: "active_recall",
        prompt: "Why should you never write 'Please revert back' in professional emails, and what should you write instead?",
        correctAnswer: "'Revert' already means 'return/respond'; adding 'back' is redundant. Instead, write 'Please reply', 'Please respond', or 'Please get back to me'.",
        acceptableAnswers: [
          "'Revert back' is redundant because revert means return. Use 'Please reply' or 'Please get back to me'."
        ],
        explanationEn: "'Revert' incorporates the return direction. Use 'reply', 'respond', or 'get back to me'.",
        explanationHi: "'Revert' का अर्थ ही वापस लौटना है, इसलिए 'back' अनावश्यक है। 'Please reply' या 'Please get back to me' लिखें।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day51_diag_001",
        title: "Controlled Dialogue: Accessing a High-Security Facility",
        context: "A corporate contractor arrives at the headquarters security desk to request temporary entry credentials.",
        characters: ["Security Officer (Davis)", "Contractor (Rohan)"],
        lines: [
          { speaker: "Security Officer (Davis)", text: "Good morning, sir. Please present government-issued identification and state the purpose of your visit.", hindi: "शुभ प्रभात, श्रीमान। कृपया सरकार द्वारा जारी पहचान पत्र दिखाएं और अपनी यात्रा का उद्देश्य बताएं।" },
          { speaker: "Contractor (Rohan)", text: "Good morning, Officer. I am Rohan from Apex Engineering. I have a scheduled audit with Ms. Vance on the fourth floor.", hindi: "शुभ प्रभात, ऑफिसर। मैं एपेक्स इंजीनियरिंग से रोहन हूँ। चौथी मंजिल पर सुश्री वेंस के साथ मेरा एक निर्धारित ऑडिट है।" },
          { speaker: "Security Officer (Davis)", text: "Thank you. Please sign the visitor register here and wear this temporary biometric badge visibly at all times.", hindi: "धन्यवाद। कृपया यहाँ आगंतुक रजिस्टर पर हस्ताक्षर करें और इस अस्थायी बायोमेट्रिक बैज को हर समय स्पष्ट रूप से पहनें।" },
          { speaker: "Contractor (Rohan)", text: "Understood. The sign at the turnstile mentions an escort policy. Will Ms. Vance meet me in the lobby?", hindi: "समझ गया। टर्नस्टाइल पर लगे संकेत में एस्कॉर्ट नीति का उल्लेख है। क्या सुश्री वेंस लॉबी में मुझसे मिलेंगी?" },
          { speaker: "Security Officer (Davis)", text: "Yes. All unescorted admittance beyond this perimeter is strictly prohibited. She will escort you shortly.", hindi: "हाँ। इस परिधि से आगे बिना एस्कॉर्ट के प्रवेश सख्त वर्जित है। वह शीघ्र ही आपके साथ चलेंगी।" }
        ]
      },
      {
        id: "day51_diag_002",
        title: "Guided Dialogue: Resolving a Meeting Scheduling Conflict and Protocol",
        context: "Two senior project managers negotiate moving a strategy review forward while observing professional decorum.",
        characters: ["Project Lead (Priya)", "Operations Manager (David)"],
        lines: [
          { speaker: "Project Lead (Priya)", text: "Good afternoon, David. Due to a sudden client presentation tomorrow afternoon, could we advance our quarterly review to 9:30 AM?", hindi: "शुभ दोपहर, डेविड। कल दोपहर अचानक क्लाइंट प्रेजेंटेशन के कारण, क्या हम अपनी त्रैमासिक समीक्षा को सुबह 9:30 बजे कर सकते हैं?" },
          { speaker: "Operations Manager (David)", text: "I have examined the calendar, Priya. 9:30 AM works well. I will notify all team leads immediately to ensure full attendance.", hindi: "मैंने कैलेंडर देख लिया है, प्रिया। सुबह 9:30 बजे का समय ठीक है। पूर्ण उपस्थिति सुनिश्चित करने के लिए मैं सभी टीम लीड्स को तुरंत सूचित करूँगा।" },
          { speaker: "Project Lead (Priya)", text: "I appreciate your prompt coordination. Also, please remind participants that client financial data discussed will remain strictly confidential.", hindi: "मैं आपके त्वरित समन्वय की सराहना करती हूँ। इसके अलावा, कृपया प्रतिभागियों को याद दिलाएं कि चर्चा किया गया क्लाइंट वित्तीय डेटा पूरी तरह गोपनीय रहेगा।" },
          { speaker: "Operations Manager (David)", text: "Certainly. I will circulate a formal meeting memo outlining the agenda, punctuality expectations, and the non-disclosure reminder.", hindi: "बिल्कुल। मैं एजेंडा, समय की पाबंदी और गोपनीयता की याद दिलाते हुए एक औपचारिक मीटिंग मेमो प्रसारित करूँगा।" },
          { speaker: "Project Lead (Priya)", text: "Thank you, David. I look forward to receiving your confirmation email.", hindi: "धन्यवाद, डेविड। मुझे आपके पुष्टिकरण ईमेल का इंतजार रहेगा।" }
        ]
      },
      {
        id: "day51_diag_003",
        title: "Free Problem-Solving Dialogue: De-Escalating a Workplace Policy Breach",
        context: "An HR Compliance Officer addresses an employee regarding an unintentional breach of the clean-desk and data confidentiality policy.",
        characters: ["Compliance Officer (Meera)", "Associate (Vikram)"],
        lines: [
          { speaker: "Compliance Officer (Meera)", text: "Vikram, do you have a moment for a private word regarding workplace compliance?", hindi: "विक्रम, क्या आपके पास कार्यस्थल अनुपालन के संबंध में एकांत में बात करने के लिए थोड़ा समय है?" },
          { speaker: "Associate (Vikram)", text: "Of course, Meera. Is there any issue with my project documentation?", hindi: "बेशक, मीरा। क्या मेरे प्रोजेक्ट दस्तावेज़ीकरण में कोई समस्या है?" },
          { speaker: "Compliance Officer (Meera)", text: "During the evening security patrol, several unredacted client financial statements were found left unattended on your workstation.", hindi: "शाम की सुरक्षा गश्त के दौरान, आपके वर्कस्टेशन पर कई अप्रकाशित ग्राहक वित्तीय विवरण लावारिस छोड़े गए पाए गए।" },
          { speaker: "Associate (Vikram)", text: "I sincerely apologize. I was rushing to attend an urgent meeting and forgot to lock them in the safe drawer.", hindi: "मैं ईमानदारी से माफी मांगता हूँ। मैं एक जरूरी बैठक में शामिल होने के लिए जल्दी में था और उन्हें सुरक्षित दराज में बंद करना भूल गया।" },
          { speaker: "Compliance Officer (Meera)", text: "I understand it was unintentional, but our clean-desk policy is mandatory to safeguard client confidentiality. Please ensure all physical records are locked away before stepping away.", hindi: "मैं समझती हूँ कि यह अनजाने में हुआ था, लेकिन ग्राहक की गोपनीयता की रक्षा के लिए हमारी क्लीन-डेस्क नीति अनिवार्य है। कृपया दूर जाने से पहले सभी भौतिक रिकॉर्ड को बंद रखना सुनिश्चित करें।" },
          { speaker: "Associate (Vikram)", text: "Understood. I will immediately review the protocol and guarantee this does not happen again.", hindi: "समझ गया। मैं तुरंत प्रोटोकॉल की समीक्षा करूँगा और गारंटी दूंगा कि ऐसा दोबारा न हो।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are the administrative lead at a multinational firm. You need to deliver a 60-second verbal briefing to a group of international visitors explaining facility safety rules, badge requirements, and meeting room etiquette.",
      prompts: [
        "Welcome the visitors and explain the mandatory requirement to wear visitor badges visibly.",
        "Highlight restricted areas and state that photography or recording is strictly prohibited.",
        "Politely request that mobile devices be set to silent during executive briefings."
      ],
      targetExpressions: [
        "All visitors are required to wear their badges visibly.",
        "Unauthorized entry is strictly prohibited.",
        "Please keep mobile devices on silent mode.",
        "Failure to comply with safety protocols...",
        "We appreciate your cooperation."
      ]
    },
    roleplay: {
      scenario: "Roleplay a conversation between a building manager enforcing a 'No Commercial Solicitation' rule and an unauthorized sales vendor distributing flyers in the lobby.",
      roleA: "Building Manager: Politeness combined with firm policy enforcement, citing statutory property rules and asking the vendor to leave.",
      roleB: "Sales Vendor: Explaining their commercial offer, apologizing upon learning the policy, and politely complying.",
      sampleDialogue: "Manager: 'Excuse me, sir. The signage at the entrance clearly states that commercial solicitation is strictly prohibited on these premises.' | Vendor: 'My apologies; I was unaware of the policy. I will collect my materials and vacate the lobby immediately.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day51_bm_001",
        title: "Drafting an Official Regulatory Workplace Notice",
        prompt: "Draft a formal, concise 4–5 sentence official workplace notice announcing a mandatory facility security update, ID badge enforcement, and strict penalties for unauthorized entry.",
        sampleAnswerEn: "NOTICE: MANDATORY FACILITY SECURITY PROTOCOL UPDATE. Effective Monday, October 1st, all employees and registered visitors must display official identification badges visibly at all times within company premises. Access to the main research laboratory and server rooms is strictly restricted to authorized personnel possessing tier-one biometric clearance. Commercial solicitation, unescorted visitor access, and unauthorized photography are strictly prohibited under penalty of disciplinary and legal prosecution. Management accepts no liability for unmonitored personal belongings. We appreciate the full cooperation of all staff in maintaining institutional safety.",
        sampleAnswerHi: "सूचना: अनिवार्य सुविधा सुरक्षा प्रोटोकॉल अद्यतन। सोमवार, 1 अक्टूबर से प्रभावी, सभी कर्मचारियों और पंजीकृत आगंतुकों को कंपनी परिसर के भीतर हर समय आधिकारिक पहचान पत्र स्पष्ट रूप से प्रदर्शित करना अनिवार्य है। मुख्य अनुसंधान प्रयोगशाला और सर्वर रूम तक पहुंच टियर-वन बायोमेट्रिक क्लीयरेंस वाले अधिकृत कर्मियों तक ही सख्ती से सीमित है। अनुशासनात्मक और कानूनी कार्रवाई के दंड के तहत व्यावसायिक प्रचार, बिना एस्कॉर्ट के आगंतुकों का प्रवेश और अनधिकृत फोटोग्राफी सख्त वर्जित है। प्रबंधन लावारिस व्यक्तिगत सामान के लिए कोई दायित्व स्वीकार नहीं करता है। संस्थागत सुरक्षा बनाए रखने में हम सभी कर्मचारियों के पूर्ण सहयोग की सराहना करते हैं।",
        evaluationCriteria: "Exemplary formal notice register, accurate passive voice ('must be displayed', 'is strictly restricted', 'are strictly prohibited'), complete elimination of Indian English clichés, clear enforceability phrasing."
      },
      {
        id: "day51_bm_002",
        title: "Professional Email Rescheduling and Etiquette",
        prompt: "Write a 4–5 sentence professional email to an executive proposing to advance a scheduled client review meeting by two hours, outlining the rationale, requesting confirmation, and avoiding 'revert back' or 'do the needful'.",
        sampleAnswerEn: "Dear Mr. Kensington,\n\nI am writing to inquire whether we might advance our quarterly client review meeting tomorrow from 3:00 PM to 1:00 PM. Our regional director has been called to an urgent municipal briefing late in the afternoon, making the earlier timeslot ideal for a comprehensive discussion. All relevant performance dossiers and budgetary slides have been attached for your preliminary review. Please let me know if this adjusted schedule aligns with your availability. I look forward to receiving your confirmation at your earliest convenience.\n\nSincerely,\nAnanya Sharma",
        sampleAnswerHi: "प्रिय श्री केंसिंग्टन,\n\nमैं यह पूछने के लिए लिख रही हूँ कि क्या हम कल अपनी त्रैमासिक ग्राहक समीक्षा बैठक को दोपहर 3:00 बजे के बजाय 1:00 बजे कर सकते हैं। हमारे क्षेत्रीय निदेशक को दोपहर के समय एक जरूरी नगरपालिका ब्रीफिंग में बुलाया गया है, जिससे व्यापक चर्चा के लिए पहले का समय आदर्श बन जाता है। आपकी प्रारंभिक समीक्षा के लिए सभी संबंधित प्रदर्शन फाइलें और बजटीय स्लाइड संलग्न कर दी गई हैं। कृपया मुझे बताएं कि क्या यह समायोजित कार्यक्रम आपकी उपलब्धता के अनुकूल है। मुझे आपकी सुविधानुसार आपके पुष्टिकरण की प्रतीक्षा रहेगी।\n\nसादर,\nअनन्या शर्मा",
        evaluationCriteria: "Mastery of scheduling terminology ('advance the meeting'), zero 'prepone/revert back/needful', polished business courtesy."
      },
      {
        id: "day51_bm_003",
        title: "Workplace Policy De-Escalation & Compliance Counseling",
        prompt: "Write a 5–6 sentence formal written counseling memo from a compliance manager to a team regarding client data confidentiality and the clean-desk policy after an internal audit.",
        sampleAnswerEn: "To: All Quantitative Analytics Team Members\nFrom: Corporate Compliance & Data Governance Directorate\nSubject: Mandatory Reiteration of Client Data Confidentiality and Clean-Desk Protocols\n\nFollowing our recent internal compliance audit, this memorandum serves as a formal reminder that client financial dossiers constitute legally protected, proprietary information. Under our corporate code of conduct, leaving sensitive physical files or unencrypted storage drives unattended at workstations is strictly prohibited. All team members must adhere to the clean-desk policy by locking away confidential materials prior to departing each evening. Furthermore, discussing proprietary account strategies in common elevators or cafeteria areas compromises institutional integrity. Failure to maintain strict confidentiality may trigger disciplinary proceedings and regulatory penalties. We thank you for your diligent adherence to these essential security standards.",
        sampleAnswerHi: "प्रति: सभी मात्रात्मक विश्लेषण टीम के सदस्य\nप्रेषक: कॉर्पोरेट अनुपालन एवं डेटा प्रशासन निदेशालय\nविषय: ग्राहक डेटा गोपनीयता और क्लीन-डेस्क प्रोटोकॉल का अनिवार्य पुनरावलोकन\n\nहमारे हालिया आंतरिक अनुपालन ऑडिट के बाद, यह ज्ञापन एक औपचारिक अनुस्मारक के रूप में कार्य करता है कि ग्राहक वित्तीय फाइलें कानूनी रूप से संरक्षित, मालिकाना जानकारी हैं। हमारे कॉर्पोरेट आचार संहिता के तहत, संवेदनशील भौतिक फाइलों या अनएन्क्रिप्टेड स्टोरेज ड्राइव को वर्कस्टेशन पर लावारिस छोड़ना सख्त मना है। सभी टीम के सदस्यों को प्रत्येक शाम जाने से पहले गोपनीय सामग्रियों को लॉक करके क्लीन-डेस्क नीति का पालन करना चाहिए। इसके अलावा, सामान्य लिफ्ट या कैफेटेरिया क्षेत्रों में मालिकाना खाता रणनीतियों पर चर्चा करना संस्थागत अखंडता से समझौता करता है। सख्त गोपनीयता बनाए रखने में विफलता अनुशासनात्मक कार्यवाही और विनियामक दंड को जन्म दे सकती है। इन आवश्यक सुरक्षा मानकों के आपके निष्ठावान पालन के लिए हम आपको धन्यवाद देते हैं।",
        evaluationCriteria: "Authoritative yet constructive corporate tone, advanced vocabulary ('unredacted', 'proprietary', 'compromises institutional integrity'), complete syntactic precision."
      }
    ]
  },
  review: {
    quickRecall: [
      {
        q: "Why is 'Please revert back' considered poor professional English?",
        a: "'Revert' already means to return or reply; adding 'back' is redundant. Use 'Please reply' or 'Please get back to me'."
      },
      {
        q: "What should you use instead of the Indian English term 'prepone'?",
        a: "Use 'advance the meeting', 'move the meeting forward', or 'reschedule earlier'."
      },
      {
        q: "What does 'Authorized Personnel Only' mean on a notice?",
        a: "Only individuals who have explicit official clearance and permission may enter the restricted area."
      },
      {
        q: "What is a 'Clean-Desk Policy'?",
        a: "A workplace regulation requiring employees to lock away all confidential papers, documents, and removable storage media at the end of the day."
      },
      {
        q: "What is 'professional decorum'?",
        a: "Polite, dignified, respectful, and ethical behavior appropriate for a professional work environment."
      }
    ],
    spacedTips: [
      "When drafting official notices or rules, use passive constructions ('Smoking is strictly prohibited') to project impersonal institutional authority.",
      "Never use 'Kindly do the needful' in international emails; always specify the exact required action.",
      "Stage 6 introduces executive fluency: focus on precision, professional boundaries, and modern international workplace standards!"
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day51.js'), `export const day51 = ${JSON.stringify(day51, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day51.js with 55 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks");
