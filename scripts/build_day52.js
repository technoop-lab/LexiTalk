import fs from 'fs';
import path from 'path';

export const day52 = {
  dayNumber: 52,
  id: "day_52",
  titleEn: "Corporate Office Operations, Meetings & Executive Memos",
  titleHi: "कॉर्पोरेट कार्यालय संचालन, बैठकें एवं कार्यकारी मेमो",
  cefr: "B1.1",
  estMinutes: 45,
  prerequisites: "Day 51 Mastery (Professional Etiquette & Regulatory Directives)",
  objectivesEn: [
    "Navigate corporate meeting procedures: formulating agendas, chairing discussions, achieving consensus, recording formal minutes (MoM), and adjourning sessions.",
    "Draft high-impact executive memoranda, action item summaries, and project status briefings adhering to international corporate communication standards.",
    "Master corporate operational lexicon: quorum, deliverable, milestone, bottleneck, feasibility, stakeholder alignment, and KPI benchmarks.",
    "Apply the formal subjunctive mood ('recommend that he submit', 'imperative that we be informed') and reported speech in institutional documentation.",
    "Eliminate common Hindi-English meeting idioms (e.g., '*sitting on the head of the meeting*', '*having doubt*', '*pass the minutes*')."
  ],
  objectivesHi: [
    "कॉर्पोरेट बैठक प्रक्रियाओं में निपुण होना: एजेंडा तैयार करना, बैठक की अध्यक्षता करना, सर्वसम्मति प्राप्त करना, कार्यवृत्त (Minutes of Meeting - MoM) लिखना और बैठक स्थगित करना।",
    "उच्च प्रभाव वाले कार्यकारी ज्ञापन (Memos), कार्य सूची सारांश (Action items) और परियोजना स्थिति रिपोर्ट तैयार करना।",
    "कॉर्पोरेट संचालन शब्दावली (Quorum, Deliverable, Milestone, Bottleneck, Feasibility, Stakeholder, KPI) का सटीक प्रयोग करना।",
    "औपचारिक सबजंक्टिव मूड ('recommend that he submit', 'imperative that we be') और रिपोर्टेड स्पीच का आधिकारिक दस्तावेजों में उपयोग करना।",
    "भारतीय अंग्रेजी के गलत मुहावरों ('having doubt', 'sitting on head', 'pass the minutes') को सुधारना।"
  ],
  teach: {
    hindiExplanation: `डे 52 में हम **कॉर्पोरेट कार्यालय संचालन (Corporate Office Operations)**, **औपचारिक बैठकें (Formal Meetings)** और **कार्यकारी मेमो (Executive Memos)** की भाषा और कार्यप्रणाली सीखेंगे।

1. **कॉर्पोरेट बैठक की शब्दावली एवं चरण (Meeting Stages & Vocabulary)**:
   - **Agenda** (कार्यसूची): बैठक में चर्चा किए जाने वाले विषयों की पूर्व-निर्धारित सूची।
   - **Chairing a meeting** (बैठक की अध्यक्षता करना): बैठक का नेतृत्व करना (❌ *sitting on the head of meeting* न कहें)।
   - **Quorum** (कोरम / गणपूर्ति): बैठक शुरू करने के लिए आवश्यक सदस्यों की न्यूनतम संख्या।
   - **Minutes of the Meeting (MoM)** (बैठक का कार्यवृत्त): बैठक में लिए गए निर्णयों का आधिकारिक लिखित रिकॉर्ड।
   - **Adopt / Approve the minutes**: पिछले कार्यवृत्त को आधिकारिक स्वीकृति देना (❌ *pass the minutes* न कहें)।
   - **Table a motion / proposal**: किसी प्रस्ताव को औपचारिक रूप से चर्चा के लिए प्रस्तुत करना या बाद के लिए स्थगित करना।
   - **Adjourn the meeting**: बैठक को समाप्त या स्थगित करना।

2. **परियोजना एवं संचालन शब्दावली (Project & Operations Lexicon)**:
   - **Deliverable**: परियोजना के तहत प्रस्तुत किया जाने वाला अंतिम उत्पाद या रिपोर्ट।
   - **Milestone**: किसी परियोजना का महत्वपूर्ण चरण या मील का पत्थर।
   - **Bottleneck**: रुकावट या अड़चन जो पूरी प्रक्रिया को धीमा कर दे।
   - **Feasibility**: किसी परियोजना की व्यावहारिकता या संभाव्यता।
   - **Stakeholders**: परियोजना से जुड़े सभी हितधारक (निवेशक, ग्राहक, टीम)।

3. **L1 हिंदी भाषियों के लिए सुधार (Eliminating Indian English Meeting Traps)**:
   - ❌ '*I am having a doubt in this point.*' ➔ ✔️ "**I have a question / reservation regarding this point.**"
   - ❌ '*Who will sit on the chair of meeting?*' ➔ ✔️ "**Who will chair / preside over today's meeting?**"
   - ❌ '*Let us close the meeting.*' ➔ ✔️ "**The meeting stands adjourned / concluded.**"
   - ❌ '*Let us discuss this matter offline.*' (अक्सर बैठक में समय बचाने के लिए सही है, पर व्यक्तिगत बातचीत के लिए 'discuss this separately / one-on-one' भी उपयोग करें)।`,
    englishExplanation: `Day 52 systematically explores corporate institutional operations, executive governance, meeting mechanics, and strategic memorandum drafting.

Linguistic & Structural Principles:
1. **Meeting Parliamentary Mechanics**: Utilizing standard procedural language for opening sessions ('Call the meeting to order'), verifying the quorum, tabling proposals, moving resolutions, voting, recording minutes (MoM), and formally adjourning.
2. **Executive Memorandum Architecture**: Formatting memos with high visual clarity (To, From, Date, Subject, Executive Summary, Action Items, Key Deliverables, Timeline).
3. **Subjunctive Register in Executive Directives**: Applying the mandative subjunctive in corporate policy ('Management recommends that each team **review** its KPIs quarterly', 'It is vital that all deliverables **be** submitted before Friday').`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "The Mandative Subjunctive in Corporate Proposals",
        description: "After verbs/adjectives of recommending, demanding, or necessity (propose, recommend, demand, imperative, essential), the subordinate clause uses the base form of the verb without 'to' or third-person '-s': 'The chairperson moved that the committee **adopt** the budget' (NOT '*adopts*'). 'It is essential that everyone **be** present.'",
        register: "Executive Subjunctive Syntax"
      },
      {
        ruleNumber: 2,
        title: "Reported Speech in Meeting Minutes (MoM)",
        description: "Official minutes record discussions in the past tense with reporting verbs: 'Mr. Vance noted that...', 'The finance committee resolved that...', 'Ms. Rao proposed that the deadline be extended.'",
        register: "Administrative Archival Register"
      },
      {
        ruleNumber: 3,
        title: "Nominalization in Executive Summaries",
        description: "Transform verb clauses into compact noun phrases to maintain executive brevity: 'We reviewed the system thoroughly' ➔ 'A comprehensive system review was conducted.'",
        register: "Executive Conciseness"
      },
      {
        ruleNumber: 4,
        title: "Collocations with 'Meeting'",
        description: "Say 'call / convene a meeting', 'chair / preside over a meeting', 'reschedule a meeting', 'adjourn a meeting'. Do NOT say '*take a meeting*' (when leading) or '*close the meeting*'.",
        register: "Corporate Lexical Collocation"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Meeting Formal Opening",
        formula: "I call this meeting to order + to discuss + [Agenda item / Subject].",
        exampleEn: "I call this meeting to order to review our third-quarter regional sales performance.",
        meaningHi: "मैं हमारे तीसरी तिमाही के क्षेत्रीय बिक्री प्रदर्शन की समीक्षा के लिए इस बैठक की कार्यवाही प्रारंभ करता हूँ।"
      },
      {
        subjectGroup: "Mandative Subjunctive Proposal",
        formula: "I move / propose that + [Subject] + [Base Verb: adopt / approve / review] + [Document / Measure].",
        exampleEn: "I move that the committee approve the revised technology procurement budget.",
        meaningHi: "मैं प्रस्ताव रखता हूँ कि समिति संशोधित प्रौद्योगिकी खरीद बजट को मंजूरी दे।"
      },
      {
        subjectGroup: "Action Item Assignment",
        formula: "[Person / Team] + is tasked with + [Action: delivering / finalizing] + [Deliverable] + by + [Deadline].",
        exampleEn: "The marketing syndicate is tasked with finalizing the digital launch campaign by November 15th.",
        meaningHi: "मार्केटिंग सिंडिकेट को 15 नवंबर तक डिजिटल लॉन्च अभियान को अंतिम रूप देने का काम सौंपा गया है।"
      },
      {
        subjectGroup: "Formal Adjournment",
        formula: "Seeing as there is no further business on the agenda, this meeting stands adjourned.",
        exampleEn: "Seeing as there is no further business on the agenda, this meeting stands adjourned until next Tuesday.",
        meaningHi: "चूंकि कार्यसूची में कोई अन्य कार्य शेष नहीं है, इसलिए यह बैठक अगले मंगलवार तक के लिए स्थगित की जाती है।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Eliminating 'Having Doubt' and 'Passing the Minutes'",
      hindiPattern: "1. '*Sir, I am having one doubt in this agenda point.*'\n2. '*Who will sit on the chair of the meeting?*'\n3. '*We have to pass the minutes of yesterday.*'\n4. '*Let's close the meeting and do the needful.*'",
      potentialInterference: "Literal Hindi translation of 'मुझे संदेह/शंका है' into '*I am having doubt*' and 'मीटिंग पास करना'.",
      explanation: "1. 'Doubt' in English implies suspicion or lack of belief ('I doubt his honesty'); to ask for clarification, say 'I have a question / reservation'. 2. Say 'Who will chair / preside over the meeting?'. 3. Minutes are 'approved' or 'adopted'. 4. Meetings are 'adjourned' or 'concluded'.",
      naturalSolution: "1. 'I have a question regarding this agenda item.' 2. 'Who will chair today's meeting?' 3. 'We must approve the minutes of the previous meeting.' 4. 'The meeting stands adjourned; action items will be circulated.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day52_vocab_001", word: "Agenda", pos: "Noun", ipa: "/əˈdʒen.də/", meaningHi: "कार्यसूची / बैठक में चर्चा किए जाने वाले मुद्दों की सूची", exampleEn: "The project manager circulated the meeting agenda twenty-four hours in advance.", exampleHi: "प्रोजेक्ट मैनेजर ने बैठक की कार्यसूची चौबीस घंटे पहले ही प्रसारित कर दी।" },
      { id: "day52_vocab_002", word: "Quorum", pos: "Noun", ipa: "/ˈkwɔː.rəm/", meaningHi: "कोरम / गणपूर्ति (बैठक के लिए आवश्यक न्यूनतम संख्या)", exampleEn: "The board could not vote on the merger because they failed to establish a quorum.", exampleHi: "बोर्ड विलय पर मतदान नहीं कर सका क्योंकि वे कोरम (न्यूनतम आवश्यक संख्या) जुटाने में विफल रहे।" },
      { id: "day52_vocab_003", word: "Adjourn", pos: "Verb", ipa: "/əˈdʒɜːn/", meaningHi: "बैठक स्थगित या समाप्त करना", exampleEn: "The chairperson adjourned the strategy meeting until 9:00 AM the following morning.", exampleHi: "अध्यक्ष ने रणनीति बैठक को अगली सुबह 9:00 बजे तक के लिए स्थगित कर दिया।" },
      { id: "day52_vocab_004", word: "Deliverable", pos: "Noun", ipa: "/dɪˈlɪv.ər.ə.bəl/", meaningHi: "देय उत्पाद / परियोजना का निश्चित परिणाम या दस्तावेज", exampleEn: "The final software architecture documentation is the primary deliverable for this sprint.", exampleHi: "अंतिम सॉफ्टवेयर आर्किटेक्चर दस्तावेज़ीकरण इस स्प्रिंट का प्राथमिक देय परिणाम (डिलीवरेबल) है।" },
      { id: "day52_vocab_005", word: "Milestone", pos: "Noun", ipa: "/ˈmaɪl.stəʊn/", meaningHi: "महत्वपूर्ण पड़ाव / मील का पत्थर", exampleEn: "Securing the regulatory operating license marked a major milestone in our expansion plan.", exampleHi: "नियामक संचालन लाइसेंस प्राप्त करना हमारी विस्तार योजना में एक बड़ा मील का पत्थर साबित हुआ।" },
      { id: "day52_vocab_006", word: "Bottleneck", pos: "Noun", ipa: "/ˈbɒt.əl.nek/", meaningHi: "अड़चन / रुकावट जो पूरी प्रक्रिया को धीमा कर दे", exampleEn: "Delays in server procurement have created a critical bottleneck for the deployment team.", exampleHi: "सर्वर खरीद में देरी ने डिप्लॉयमेंट टीम के लिए एक गंभीर अड़चन (बॉटलनेक) पैदा कर दी है।" },
      { id: "day52_vocab_007", word: "Consensus", pos: "Noun", ipa: "/kənˈsen.səs/", meaningHi: "सर्वसम्मति / आम सहमति", exampleEn: "After extensive deliberations, the executive committee reached a unanimous consensus.", exampleHi: "व्यापक विचार-विमर्श के बाद, कार्यकारी समिति एक सर्वसम्मत सहमति पर पहुंची।" },
      { id: "day52_vocab_008", word: "Stakeholder", pos: "Noun", ipa: "/ˈsteɪkˌhəʊl.dər/", meaningHi: "हितधारक / संस्था से जुड़ा कोई भी व्यक्ति या समूह", exampleEn: "We must consult all key internal and external stakeholders prior to implementing the policy change.", exampleHi: "नीति परिवर्तन को लागू करने से पहले हमें सभी प्रमुख आंतरिक और बाहरी हितधारकों से परामर्श करना चाहिए।" },
      { id: "day52_vocab_009", word: "Memorandum", pos: "Noun", ipa: "/ˌmem.əˈræn.dəm/", meaningHi: "ज्ञापन / आधिकारिक लिखित संदेश (मेमो)", exampleEn: "The chief executive issued an internal memorandum outlining the corporate restructuring.", exampleHi: "मुख्य कार्यकारी ने कॉर्पोरेट पुनर्गठन की रूपरेखा तैयार करते हुए एक आंतरिक ज्ञापन जारी किया।" },
      { id: "day52_vocab_010", word: "Feasibility", pos: "Noun", ipa: "/ˌfiː.zəˈbɪl.ə.ti/", meaningHi: "व्यावहारिकता / साध्यता (काम संभव होना)", exampleEn: "The engineering department conducted a comprehensive feasibility study before breaking ground.", exampleHi: "इंजीनियरिंग विभाग ने काम शुरू करने से पहले एक व्यापक व्यावहारिकता (फिजिबिलिटी) अध्ययन किया।" },
      { id: "day52_vocab_011", word: "Discrepancy", pos: "Noun", ipa: "/dɪˈskrep.ən.si/", meaningHi: "विसंगति / दो आंकड़ों या बयानों में अंतर", exampleEn: "The external auditor detected a minor discrepancy between the ledger and the bank statements.", exampleHi: "बाहरी लेखा परीक्षक ने बहीखाते और बैंक विवरणों के बीच एक मामूली विसंगति का पता लगाया।" },
      { id: "day52_vocab_012", word: "Benchmark", pos: "Noun", ipa: "/ˈbentʃ.mɑːk/", meaningHi: "मानदंड / तुलना का मानक", exampleEn: "Our customer retention rate serves as an industry benchmark for operational excellence.", exampleHi: "हमारी ग्राहक प्रतिधारण दर परिचालन उत्कृष्टता के लिए एक उद्योग बेंचमार्क (मानक) के रूप में कार्य करती है।" },
      { id: "day52_vocab_013", word: "Implementation", pos: "Noun", ipa: "/ˌɪm.plɪ.menˈteɪ.ʃən/", meaningHi: "कार्यान्वयन / अमल में लाना", exampleEn: "The phased implementation of the new ERP software will take approximately six months.", exampleHi: "नए ईआरपी सॉफ्टवेयर का चरणबद्ध कार्यान्वयन लगभग छह महीने का समय लेगा।" },
      { id: "day52_vocab_014", word: "Deliberation", pos: "Noun", ipa: "/dɪˌlɪb.əˈreɪ.ʃən/", meaningHi: "गहन विचार-विमर्श", exampleEn: "After three hours of rigorous deliberation, the board approved the acquisition bid.", exampleHi: "तीन घंटे के गहन विचार-विमर्श के बाद, बोर्ड ने अधिग्रहण बोली को मंजूरी दे दी।" },
      { id: "day52_vocab_015", word: "Liaison", pos: "Noun", ipa: "/liˈeɪ.zɒn/", meaningHi: "समन्वयकर्ता / संपर्क अधिकारी", exampleEn: "She acts as the primary liaison between our software engineering team and the corporate client.", exampleHi: "वह हमारी सॉफ्टवेयर इंजीनियरिंग टीम और कॉर्पोरेट ग्राहक के बीच प्राथमिक संपर्क अधिकारी (लायजन) के रूप में कार्य करती है।" },
      { id: "day52_vocab_016", word: "Oversight", pos: "Noun", ipa: "/ˈəʊ.və.saɪt/", meaningHi: "निगरानी / देखरेख (या अनजाने में हुई चूक)", exampleEn: "The compliance committee provides strict governance and regulatory oversight for all transactions.", exampleHi: "अनुपालन समिति सभी लेनदेन के लिए सख्त शासन और विनियामक देखरेख (ओवरसाइट) प्रदान करती है।" },
      { id: "day52_vocab_017", word: "Hierarchy", pos: "Noun", ipa: "/ˈhaɪə.rɑː.ki/", meaningHi: "पदानुक्रम / उच्च और निम्न पदों की व्यवस्था", exampleEn: "Decisions within the corporate hierarchy must be formally approved by senior vice presidents.", exampleHi: "कॉर्पोरेट पदानुक्रम के भीतर के निर्णयों को वरिष्ठ उपाध्यक्षों द्वारा औपचारिक रूप से अनुमोदित किया जाना चाहिए।" },
      { id: "day52_vocab_018", word: "Turnaround", pos: "Noun", ipa: "/ˈtɜːn.ə.raʊnd/", meaningHi: "कार्य पूरा करने का समय (Turnaround Time)", exampleEn: "Our team boasts an exceptional twenty-four-hour turnaround time for client support tickets.", exampleHi: "हमारी टीम ग्राहक सहायता टिकटों के लिए चौबीस घंटे के असाधारण टर्नअराउंड समय का दावा करती है।" },
      { id: "day52_vocab_019", word: "Contingency", pos: "Noun", ipa: "/kənˈtɪn.dʒən.si/", meaningHi: "आकस्मिक योजना / अप्रत्याशित संकट की तैयारी", exampleEn: "We have formulated a robust contingency plan in the event of supply chain disruptions.", exampleHi: "हमने आपूर्ति श्रृंखला में व्यवधान की स्थिति में एक मजबूत आकस्मिक योजना (कंटीन्जेंसी प्लान) तैयार की है।" },
      { id: "day52_vocab_020", word: "Synergy", pos: "Noun", ipa: "/ˈsɪn.ə.dʒi/", meaningHi: "सहक्रिया / मिलकर काम करने से मिलने वाला अतिरिक्त लाभ", exampleEn: "The corporate merger created tremendous operational synergy across both research divisions.", exampleHi: "कॉर्पोरेट विलय ने दोनों अनुसंधान प्रभागों में जबरदस्त परिचालन सहक्रिया (सिनर्जी) पैदा की।" }
    ],
    spokenPhrases: [
      { id: "day52_phrase_001", phrase: "I would like to call this meeting to order.", register: "Meeting Opening", meaningHi: "मैं इस बैठक की कार्यवाही प्रारंभ करने की घोषणा करता हूँ।" },
      { id: "day52_phrase_002", phrase: "Let us review and approve the minutes of the previous meeting.", register: "Procedural Business", meaningHi: "आइए पिछली बैठक के कार्यवृत्त की समीक्षा करें और उसे अनुमोदित करें।" },
      { id: "day52_phrase_003", phrase: "I move that we table this proposal until financial projections are finalized.", register: "Formal Motion", meaningHi: "मैं प्रस्ताव करता हूँ कि वित्तीय अनुमानों के अंतिम होने तक इस प्रस्ताव को स्थगित रखा जाए।" },
      { id: "day52_phrase_004", phrase: "Who is designated to take the meeting minutes today?", register: "Administrative Coordination", meaningHi: "आज बैठक का कार्यवृत्त (Minutes) लिखने के लिए किसे नामित किया गया है?" },
      { id: "day52_phrase_005", phrase: "Let us stick to the agreed agenda items to respect everyone's time.", register: "Meeting Moderation", meaningHi: "सभी के समय का सम्मान करने के लिए आइए सहमत कार्यसूची के बिंदुओं पर ही केंद्रित रहें।" },
      { id: "day52_phrase_006", phrase: "I have a question regarding the feasibility of the Q3 deliverables.", register: "Inquiry / Floor Request", meaningHi: "तीसरी तिमाही के परिणामों की व्यावहारिकता के संबंध में मेरा एक प्रश्न है।" },
      { id: "day52_phrase_007", phrase: "Let us take this discussion offline and circle back tomorrow.", register: "Discussion Management", meaningHi: "आइए इस चर्चा को बैठक के बाद अलग से करें और कल इस पर दोबारा बात करें।" },
      { id: "day52_phrase_008", phrase: "The motion carries with unanimous approval from all board members.", register: "Voting Outcome", meaningHi: "सभी बोर्ड सदस्यों की सर्वसम्मत स्वीकृति के साथ प्रस्ताव पारित होता है।" },
      { id: "day52_phrase_009", phrase: "What is the anticipated turnaround time for this software patch?", register: "Operational Inquiry", meaningHi: "इस सॉफ्टवेयर पैच के लिए अपेक्षित कार्य-पूर्णता समय (टर्नअराउंड) क्या है?" },
      { id: "day52_phrase_010", phrase: "We need cross-functional alignment among all stakeholders before launch.", register: "Strategic Coordination", meaningHi: "लॉन्च से पहले हमें सभी हितधारकों के बीच क्रॉस-फंक्शनल तालमेल की आवश्यकता है।" },
      { id: "day52_phrase_011", phrase: "Please summarize the key action items and assigned deliverables.", register: "Meeting Wrap-Up", meaningHi: "कृपया प्रमुख कार्य बिंदुओं और सौंपे गए दायित्वों का संक्षेप में विवरण दें।" },
      { id: "day52_phrase_012", phrase: "Hearing no objections, this meeting stands adjourned.", register: "Formal Adjournment", meaningHi: "कोई आपत्ति न होने पर, यह बैठक स्थगित की जाती है।" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day52_ex_001", english: "The chairperson formally called the quarterly executive review meeting to order at precisely 10:00 AM.", hindi: "अध्यक्ष ने ठीक सुबह 10:00 बजे त्रैमासिक कार्यकारी समीक्षा बैठक की कार्यवाही औपचारिक रूप से प्रारंभ की।" },
      { id: "day52_ex_002", english: "Before proceeding to new business, the committee voted to approve the minutes of the previous meeting.", hindi: "नए कार्यों पर आगे बढ़ने से पहले, समिति ने पिछली बैठक के कार्यवृत्त (Minutes) को मंजूरी देने के लिए मतदान किया।" },
      { id: "day52_ex_003", english: "The vice president proposed that the marketing team increase its digital outreach budget by fifteen percent.", hindi: "उपाध्यक्ष ने प्रस्ताव रखा कि मार्केटिंग टीम अपने डिजिटल आउटरीच बजट में पंद्रह प्रतिशत की वृद्धि करे।" },
      { id: "day52_ex_004", english: "A quorum of seven board members is required to validate any constitutional resolution.", hindi: "किसी भी संवैधानिक प्रस्ताव को मान्य करने के लिए सात बोर्ड सदस्यों का कोरम (गणपूर्ति) आवश्यक है।" },
      { id: "day52_ex_005", english: "The executive memorandum clearly outlined key project milestones and individual accountability metrics.", hindi: "कार्यकारी ज्ञापन ने प्रमुख परियोजना मील के पत्थरों और व्यक्तिगत जवाबदेही मानकों को स्पष्ट रूप से रेखांकित किया।" },
      { id: "day52_ex_006", english: "Supply chain bottlenecks have extended the turnaround time for our flagship consumer electronics.", hindi: "आपूर्ति श्रृंखला की अड़चनों ने हमारे प्रमुख उपभोक्ता इलेक्ट्रॉनिक्स के लिए टर्नअराउंड समय को बढ़ा दिया है।" },
      { id: "day52_ex_007", english: "All key stakeholders expressed strong support for the proposed renewable energy transition.", hindi: "सभी प्रमुख हितधारकों ने प्रस्तावित नवीकरणीय ऊर्जा संक्रमण के लिए दृढ़ समर्थन व्यक्त किया।" },
      { id: "day52_ex_008", english: "It is imperative that every department head submit their annual budgetary forecast before Friday.", hindi: "यह अनिवार्य है कि प्रत्येक विभागाध्यक्ष शुक्रवार से पहले अपना वार्षिक बजटीय पूर्वानुमान प्रस्तुत करे।" },
      { id: "day52_ex_009", english: "She acted as the primary liaison between executive management and regional field directors.", hindi: "उन्होंने कार्यकारी प्रबंधन और क्षेत्रीय फील्ड निदेशकों के बीच प्राथमिक संपर्क अधिकारी के रूप में कार्य किया।" },
      { id: "day52_ex_010", english: "After extensive cross-departmental deliberations, the leadership reached an overarching consensus.", hindi: "व्यापक अंतर-विभागीय विचार-विमर्श के बाद, नेतृत्व एक व्यापक आम सहमति पर पहुंचा।" },
      { id: "day52_ex_011", english: "The lead auditor discovered a significant discrepancy in the third-quarter ledger entries.", hindi: "मुख्य लेखा परीक्षक ने तीसरी तिमाही की बहीखाता प्रविष्टियों में एक महत्वपूर्ण विसंगति की खोज की।" },
      { id: "day52_ex_012", english: "The project deliverable includes comprehensive technical documentation, user manuals, and test scripts.", hindi: "परियोजना देय में व्यापक तकनीकी दस्तावेज़ीकरण, उपयोगकर्ता नियमावली और परीक्षण स्क्रिप्ट शामिल हैं।" },
      { id: "day52_ex_013", english: "Management established a contingency reserve fund to mitigate unforeseen currency market fluctuations.", hindi: "प्रबंधन ने अप्रत्याशित मुद्रा बाजार के उतार-चढ़ाव को कम करने के लिए एक आकस्मिक आरक्षित निधि की स्थापना की।" },
      { id: "day52_ex_014", english: "The meeting was adjourned at 4:30 PM due to the lack of further agenda items.", hindi: "कार्यसूची में आगे कोई बिंदु न होने के कारण बैठक शाम 4:30 बजे स्थगित कर दी गई।" },
      { id: "day52_ex_015", english: "The director recommended that the development team conduct automated regression testing every night.", hindi: "निदेशक ने सिफारिश की कि विकास टीम हर रात स्वचालित प्रतिगमन परीक्षण आयोजित करे।" },
      { id: "day52_ex_016", english: "We must establish clear KPI benchmarks to evaluate quarterly employee productivity.", hindi: "तिमाही कर्मचारी उत्पादकता का मूल्यांकन करने के लिए हमें स्पष्ट KPI बेंचमार्क स्थापित करने चाहिए।" },
      { id: "day52_ex_017", english: "The committee decided to table the acquisition proposal until the legal audit is concluded.", hindi: "समिति ने कानूनी ऑडिट समाप्त होने तक अधिग्रहण प्रस्ताव को स्थगित रखने का निर्णय लिया।" },
      { id: "day52_ex_018", english: "Effective governance requires transparent reporting across all tiers of the corporate hierarchy.", hindi: "प्रभावी शासन के लिए कॉर्पोरेट पदानुक्रम के सभी स्तरों पर पारदर्शी रिपोर्टिंग की आवश्यकता होती है।" },
      { id: "day52_ex_019", english: "Our cross-functional synergy enabled us to launch the mobile application two weeks ahead of schedule.", hindi: "हमारी क्रॉस-फंक्शनल सहक्रिया ने हमें निर्धारित समय से दो सप्ताह पहले मोबाइल एप्लिकेशन लॉन्च करने में सक्षम बनाया।" },
      { id: "day52_ex_020", english: "The operations lead circulated the finalized action items via email immediately following the meeting.", hindi: "संचालन प्रमुख ने बैठक के तुरंत बाद ईमेल के माध्यम से अंतिम कार्य बिंदुओं को प्रसारित किया।" },
      { id: "day52_ex_021", english: "I have a reservation regarding the timeline proposed for the European market rollout.", hindi: "यूरोपीय बाजार में शुरुआत के लिए प्रस्तावित समय-सीमा के संबंध में मेरी एक आपत्ति/शंका है।" },
      { id: "day52_ex_022", english: "The feasibility study confirmed that the solar plant will yield positive returns within three years.", hindi: "व्यावहारिकता अध्ययन ने पुष्टि की कि सौर संयंत्र तीन वर्षों के भीतर सकारात्मक रिटर्न देगा।" },
      { id: "day52_ex_023", english: "Please ensure that all confidential briefing packets are shredded following the board session.", hindi: "कृपया सुनिश्चित करें कि बोर्ड सत्र के बाद सभी गोपनीय ब्रीफिंग पैकेट नष्ट (श्रेड) कर दिए जाएं।" },
      { id: "day52_ex_024", english: "The chief financial officer demanded that the accounting team provide an itemized expenditure breakdown.", hindi: "मुख्य वित्तीय अधिकारी ने मांग की कि लेखांकन टीम मदवार व्यय विवरण प्रदान करे।" },
      { id: "day52_ex_025", english: "A comprehensive restructuring memo will be published on the corporate intranet on Monday morning.", hindi: "सोमवार सुबह कॉर्पोरेट इंट्रानेट पर एक व्यापक पुनर्गठन ज्ञापन (मेमो) प्रकाशित किया जाएगा।" }
    ]
  },
  pronunciation: {
    focusSound: "Corporate Multisyllabic Stress, Subjunctive Cadence & Reduced Vowels in Institutional Meetings",
    phoneticNotes: "1. Syllable Stress in Corporate Nouns:\n   - /ˈkwɔː.rəm/ (Stress on 1st syllable)\n   - /ˈhaɪə.rɑː.ki/ (Stress on 1st syllable)\n   - /ˌmem.əˈræn.dəm/ (Stress on 3rd syllable)\n   - /dɪˌlɪb.əˈreɪ.ʃən/ (Stress on 4th syllable)\n   - /kənˈsen.səs/ (Stress on 2nd syllable)\n2. Mandative Subjunctive Intonation: Avoid adding '-s' to verbs in clauses following 'demand', 'recommend', 'propose' ('I recommend that he **attend** /əˈtend/', NOT 'attends').\n3. Weak vowel reduction: In 'memorandum', the second syllable is reduced to a schwa /ə/.",
    minimalPairs: [
      { wordA: "Quorum", ipaA: "/ˈkwɔː.rəm/", wordB: "Forum", ipaB: "/ˈfɔː.rəm/" },
      { wordA: "Adjourn", ipaA: "/əˈdʒɜːn/", wordB: "Adjoin", ipaB: "/əˈdʒɔɪn/" },
      { wordA: "Consensus", ipaA: "/kənˈsen.səs/", wordB: "Census", ipaB: "/ˈsen.səs/" },
      { wordA: "Liaison", ipaA: "/liˈeɪ.zɒn/", wordB: "Lesson", ipaB: "/ˈles.ən/" },
      { wordA: "Hierarchy", ipaA: "/ˈhaɪə.rɑː.ki/", wordB: "Higher key", ipaB: "/ˈhaɪ.ə kiː/" }
    ],
    drills: [
      { sentence: "The board established a quorum and approved the meeting minutes.", focus: "Stress in /ˈkwɔː.rəm/ and /ˈmɪn.ɪts/" },
      { sentence: "I move that the committee adopt the revised budgetary allocations.", focus: "Mandative subjunctive base verb 'adopt'" },
      { sentence: "All key stakeholders reached a unanimous consensus after deliberation.", focus: "Stress in /kənˈsen.səs/ & /dɪˌlɪb.əˈreɪ.ʃən/" },
      { sentence: "The meeting stands adjourned until next Tuesday morning.", focus: "Definitive downward pitch on /əˈdʒɜːnd/" },
      { sentence: "She serves as the primary executive liaison across the corporate hierarchy.", focus: "Pronunciation of /liˈeɪ.zɒn/ and /ˈhaɪə.rɑː.ki/" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day52_ex_001",
        type: "error_correction",
        prompt: "Correct the sentence: 'Sir, I am having one doubt in the third agenda point.'",
        correctAnswer: "Sir, I have a question regarding the third agenda item.",
        acceptableAnswers: [
          "I have a question regarding the third item on the agenda.",
          "I have a query about the third agenda item."
        ],
        explanationEn: "In professional English, use 'I have a question / query / reservation' instead of '*I am having a doubt*'. Use 'agenda item' instead of 'agenda point'.",
        explanationHi: "'I am having a doubt' के स्थान पर 'I have a question / query regarding the third agenda item' कहें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day52_ex_002",
        type: "error_correction",
        prompt: "Correct the sentence: 'Who will sit on the chair of the meeting today?'",
        correctAnswer: "Who will chair today's meeting?",
        acceptableAnswers: [
          "Who will preside over today's meeting?",
          "Who is chairing the meeting today?"
        ],
        explanationEn: "Use the verb 'chair' or 'preside over' (not '*sit on the chair of the meeting*').",
        explanationHi: "बैठक की अध्यक्षता करने के लिए 'chair' या 'preside over' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day52_ex_003",
        type: "error_correction",
        prompt: "Correct the sentence: 'The director recommended that he submits the report tomorrow.'",
        correctAnswer: "The director recommended that he submit the report tomorrow.",
        acceptableAnswers: [
          "The director recommended that the report be submitted tomorrow."
        ],
        explanationEn: "Mandative subjunctive rule: Verbs following 'recommended that' require the base form without '-s' ('submit', not 'submits').",
        explanationHi: "सबजंक्टिव मूड के तहत 'recommended that' के बाद क्रिया का मूल रूप 'submit' आएगा ('submits' नहीं)।",
        difficulty: "medium",
        skillTag: "SUBJUNCTIVE_SYNTAX"
      },
      {
        id: "day52_ex_004",
        type: "multiple_choice",
        prompt: "What is a 'Quorum' in corporate governance?",
        options: [
          "The minimum number of members required to conduct official business and cast valid votes",
          "The list of snacks ordered for the conference",
          "The software used to record video conferences",
          "The total financial profit made in a quarter"
        ],
        correctAnswer: "The minimum number of members required to conduct official business and cast valid votes",
        explanationEn: "A quorum is the minimum attendance required for legal and parliamentary decisions.",
        explanationHi: "किसी बैठक में आधिकारिक निर्णय लेने के लिए आवश्यक सदस्यों की न्यूनतम संख्या को कोरम कहते हैं।",
        difficulty: "easy",
        skillTag: "CORPORATE_GOVERNANCE"
      },
      {
        id: "day52_ex_005",
        type: "fill_blank",
        prompt: "The official written record of discussions and decisions taken during a meeting is called the _______ of the meeting.",
        correctAnswer: "minutes",
        acceptableAnswers: ["MoM"],
        explanationEn: "Minutes of the Meeting (MoM) is the official record.",
        explanationHi: "बैठक के आधिकारिक लिखित रिकॉर्ड को 'minutes' (MoM) कहा जाता है।",
        difficulty: "easy",
        skillTag: "MEETING_OPERATIONS"
      },
      {
        id: "day52_ex_006",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'मैं प्रस्ताव रखता हूँ कि हम इस बैठक को कल सुबह 10:00 बजे तक के लिए स्थगित करें।'",
        correctAnswer: "I move that we adjourn this meeting until 10:00 AM tomorrow.",
        acceptableAnswers: [
          "I propose that we adjourn this meeting until tomorrow at 10:00 AM.",
          "I move to adjourn the meeting until 10:00 AM tomorrow."
        ],
        explanationEn: "'I move that we adjourn this meeting until 10:00 AM tomorrow.'",
        explanationHi: "'I move that we adjourn this meeting...' सही औपचारिक प्रस्ताव है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day52_ex_007",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'All key stakeholders reached a unanimous consensus regarding the project deliverables.'",
        correctAnswer: "सभी प्रमुख हितधारक परियोजना के देय परिणामों (डिलीवरेबल्स) के संबंध में एक सर्वसम्मत सहमति पर पहुंचे।",
        acceptableAnswers: [
          "सभी हितधारकों ने प्रोजेक्ट के परिणामों पर एकमत सहमति व्यक्त की।"
        ],
        explanationEn: "'All key stakeholders reached a unanimous consensus regarding the project deliverables.'",
        explanationHi: "सटीक कॉर्पोरेट हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day52_ex_008",
        type: "sentence_ordering",
        prompt: "Order into a formal opening: [meeting / order / call / this / to / I]",
        correctAnswer: "I call this meeting to order.",
        explanationEn: "Canonical parliamentary formula to open a meeting.",
        explanationHi: "सही क्रम: I call this meeting to order.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day52_ex_009",
        type: "multiple_choice",
        prompt: "What does 'Table a proposal' mean in formal meeting procedures?",
        options: [
          "Formally place a topic on the floor for discussion or postpone it for future consideration",
          "Put physical documents on top of the wooden table",
          "Throw away the proposal permanently",
          "Order everyone to leave the room"
        ],
        correctAnswer: "Formally place a topic on the floor for discussion or postpone it for future consideration",
        explanationEn: "'To table' a motion means to submit it for consideration (or in US English, to set it aside temporarily).",
        explanationHi: "प्रस्ताव को औपचारिक रूप से विचार के लिए प्रस्तुत करना या स्थगित करना।",
        difficulty: "medium",
        skillTag: "MEETING_OPERATIONS"
      },
      {
        id: "day52_ex_010",
        type: "fill_blank",
        prompt: "Delays in chip manufacturing have created a critical _______ for vehicle production.",
        correctAnswer: "bottleneck",
        acceptableAnswers: ["obstacle", "impediment"],
        explanationEn: "A bottleneck is a point of congestion that slows an entire system down.",
        explanationHi: "पूरी प्रक्रिया को बाधित करने वाली अड़चन को 'bottleneck' कहते हैं।",
        difficulty: "easy",
        skillTag: "OPERATIONS_VOCABULARY"
      },
      {
        id: "day52_ex_011",
        type: "error_correction",
        prompt: "Correct the sentence: 'We have to pass the meeting minutes of last week.'",
        correctAnswer: "We need to approve the minutes of last week's meeting.",
        acceptableAnswers: [
          "We must adopt the minutes of the previous meeting.",
          "We have to review and approve the meeting minutes."
        ],
        explanationEn: "Minutes are 'approved' or 'adopted' (not '*passed*').",
        explanationHi: "कार्यवृत्त को 'approve' या 'adopt' किया जाता है ('pass' नहीं)।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day52_ex_012",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nChairperson: 'Are there any objections to adopting the revised agenda?'\nMember: 'Hearing no objections, the motion _______.'",
        options: ["carries", "runs", "flies", "cancels"],
        correctAnswer: "carries",
        explanationEn: "In parliamentary procedure, a successful motion 'carries'.",
        explanationHi: "प्रस्ताव पारित होने पर 'the motion carries' कहा जाता है।",
        difficulty: "easy",
        skillTag: "MEETING_PROCEDURE"
      },
      {
        id: "day52_ex_013",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The committee resolved that all project deliverables be completed by Q4.'",
        correctAnswer: "The committee resolved that all project deliverables be completed by Q4.",
        explanationEn: "'The committee resolved that all project deliverables be completed by Q4.' (Notice subjunctive 'be completed').",
        explanationHi: "सबजंक्टिव वाक्य संरचना का श्रुतलेख।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day52_ex_014",
        type: "matching",
        prompt: "Match the corporate role with its functional definition:",
        pairs: [
          { left: "Chairperson", right: "Presides over the meeting and enforces procedural rules" },
          { left: "Minute-Taker", right: "Records official resolutions and action items" },
          { left: "Liaison", right: "Coordinates communication between distinct teams" },
          { left: "Stakeholder", right: "Has a legitimate financial or operational interest in outcomes" }
        ],
        explanationEn: "Corporate role matching.",
        explanationHi: "कॉर्पोरेट भूमिकाओं और उनके दायित्वों का सही मिलान।",
        difficulty: "easy",
        skillTag: "ORGANIZATIONAL_ROLES"
      },
      {
        id: "day52_ex_015",
        type: "fill_blank",
        prompt: "It is essential that every executive _______ present at the annual shareholder briefing.",
        correctAnswer: "be",
        acceptableAnswers: ["remain"],
        explanationEn: "Subjunctive after 'essential that': base form 'be' (not 'is').",
        explanationHi: "'It is essential that' के बाद सबजंक्टिव 'be' का प्रयोग होगा ('is' नहीं)।",
        difficulty: "medium",
        skillTag: "SUBJUNCTIVE_SYNTAX"
      },
      {
        id: "day52_ex_016",
        type: "multiple_choice",
        prompt: "What does 'KPI' stand for in business operations?",
        options: [
          "Key Performance Indicator",
          "Knowledge Protocol Index",
          "Kernel Production Interface",
          "Key Personnel Identity"
        ],
        correctAnswer: "Key Performance Indicator",
        explanationEn: "KPI = Key Performance Indicator, a quantifiable measure of performance.",
        explanationHi: "KPI का अर्थ 'Key Performance Indicator' (प्रमुख प्रदर्शन संकेतक) है।",
        difficulty: "easy",
        skillTag: "BUSINESS_ACRONYMS"
      },
      {
        id: "day52_ex_017",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'मुख्य कार्यकारी अधिकारी ने एक आंतरिक ज्ञापन (मेमो) जारी किया।'",
        correctAnswer: "The Chief Executive Officer issued an internal memorandum.",
        acceptableAnswers: [
          "The CEO released an internal memo.",
          "The Chief Executive Officer circulated an internal memorandum."
        ],
        explanationEn: "'The Chief Executive Officer issued an internal memorandum.'",
        explanationHi: "'Issued an internal memorandum' सही कॉर्पोरेट भाषा है।",
        difficulty: "easy",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day52_ex_018",
        type: "error_correction",
        prompt: "Correct the sentence: 'It is vital that she attends the client negotiation.'",
        correctAnswer: "It is vital that she attend the client negotiation.",
        acceptableAnswers: [
          "It is imperative that she attend the client negotiation."
        ],
        explanationEn: "Mandative subjunctive: 'vital that she attend' (base verb, not 'attends').",
        explanationHi: "'Vital that' के बाद सबजंक्टिव आधार क्रिया 'attend' आएगी ('attends' नहीं)।",
        difficulty: "medium",
        skillTag: "SUBJUNCTIVE_SYNTAX"
      },
      {
        id: "day52_ex_019",
        type: "sentence_building",
        prompt: "Build an executive statement: [action items / circulated / following / the / will be / meeting]",
        correctAnswer: "Action items will be circulated following the meeting.",
        acceptableAnswers: [
          "Following the meeting, action items will be circulated."
        ],
        explanationEn: "Subject + Future Passive + Prepositional Phrase.",
        explanationHi: "सही वाक्य: Action items will be circulated following the meeting.",
        difficulty: "medium",
        skillTag: "SYNTAX_BUILDING"
      },
      {
        id: "day52_ex_020",
        type: "multiple_choice",
        prompt: "What is the primary objective of an Executive Summary at the start of a memo or proposal?",
        options: [
          "To provide a concise overview of key findings, decisions, and recommendations for busy leaders",
          "To list all employee birthdays for the month",
          "To copy and paste all raw data tables without explanation",
          "To write a creative fictional story"
        ],
        correctAnswer: "To provide a concise overview of key findings, decisions, and recommendations for busy leaders",
        explanationEn: "An executive summary synthesizes main conclusions and actionable takeaways.",
        explanationHi: "कार्यकारी सारांश व्यस्त अधिकारियों को त्वरित निर्णय लेने के लिए मुख्य निष्कर्ष और सिफारिशें प्रदान करता है।",
        difficulty: "easy",
        skillTag: "EXECUTIVE_WRITING"
      },
      {
        id: "day52_ex_021",
        type: "fill_blank",
        prompt: "Before investing capital in the new plant, management commissioned a comprehensive _______ study.",
        correctAnswer: "feasibility",
        explanationEn: "'Feasibility study' evaluates whether a proposed project is technically and financially viable.",
        explanationHi: "प्रोजेक्ट की साध्यता जांचने के लिए 'feasibility study' कराई जाती है।",
        difficulty: "easy",
        skillTag: "PROJECT_OPERATIONS"
      },
      {
        id: "day52_ex_022",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The team achieved a critical milestone by completing the core backend architecture ahead of schedule.'",
        correctAnswer: "टीम ने निर्धारित समय से पहले कोर बैकएंड आर्किटेक्चर पूरा करके एक महत्वपूर्ण मील का पत्थर हासिल किया।",
        acceptableAnswers: [
          "समय से पहले बैकएंड संरचना पूरी करके टीम ने एक बड़ा पड़ाव पार किया।"
        ],
        explanationEn: "'Achieved a critical milestone' = एक महत्वपूर्ण मील का पत्थर हासिल किया.",
        explanationHi: "सटीक व्यावसायिक हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day52_ex_023",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nProject Lead: 'We are running short on time for today's agenda.'\nManager: 'Let us take the detailed software architecture discussion _______ and connect individually.'",
        options: ["offline", "upside down", "backwards", "underwater"],
        correctAnswer: "offline",
        explanationEn: "'Take discussion offline' means to discuss it separately outside the main meeting.",
        explanationHi: "बैठक में समय बचाने के लिए विषय को अलग से चर्चा करने हेतु 'take it offline' कहा जाता है।",
        difficulty: "easy",
        skillTag: "CORPORATE_IDIOMS"
      },
      {
        id: "day52_ex_024",
        type: "error_correction",
        prompt: "Correct the sentence: 'Please let me know the TAT time of this deliverable.'",
        correctAnswer: "Please let me know the turnaround time for this deliverable.",
        acceptableAnswers: [
          "Please inform me of the turnaround time for this deliverable."
        ],
        explanationEn: "'TAT time' is a tautology (TurnAround Time time). Say 'turnaround time' or 'TAT'.",
        explanationHi: "'TAT time' में time दो बार हो जाता है; केवल 'turnaround time' या 'TAT' कहें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day52_ex_025",
        type: "speaking_pronunciation",
        prompt: "Read aloud with formal executive articulation: 'The chairperson adjourned the deliberation after the board reached unanimous consensus.'",
        targetText: "The chairperson adjourned the deliberation after the board reached unanimous consensus.",
        phoneticFocus: "Crisp stress on /əˈdʒɜːnd/, /dɪˌlɪb.əˈreɪ.ʃən/, and /kənˈsen.səs/",
        explanationEn: "Emphasize clear rhythmic pauses between prepositional and adverbial phrases.",
        explanationHi: "औपचारिक लय और सटीक उच्चारण का अभ्यास।",
        difficulty: "medium",
        skillTag: "PRONUNCIATION_SPEAKING"
      },
      {
        id: "day52_ex_026",
        type: "fill_blank",
        prompt: "The auditor identified a three-thousand-dollar _______ between the billing invoice and bank statement.",
        correctAnswer: "discrepancy",
        acceptableAnswers: ["difference", "variance"],
        explanationEn: "'Discrepancy' means an illogical difference or mismatch between two sets of numbers.",
        explanationHi: "दो आंकड़ों के अंतर या विसंगति को 'discrepancy' कहते हैं।",
        difficulty: "easy",
        skillTag: "FINANCIAL_OPERATIONS"
      },
      {
        id: "day52_ex_027",
        type: "multiple_choice",
        prompt: "Which phrase is the most appropriate way for a meeting participant to ask for clarification?",
        options: [
          "Could you please clarify the third-quarter revenue projection on slide four?",
          "Sir, I am having full doubt in your slide.",
          "Explain why you wrote wrong numbers.",
          "Tell me the truth right now."
        ],
        correctAnswer: "Could you please clarify the third-quarter revenue projection on slide four?",
        explanationEn: "Polite, specific, and objective inquiry phrasing.",
        explanationHi: "स्पष्टीकरण मांगने का यह सबसे विनम्र और पेशेवर तरीका है।",
        difficulty: "easy",
        skillTag: "MEETING_ETIQUETTE"
      },
      {
        id: "day52_ex_028",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'बैठक की कार्यसूची सभी प्रतिभागियों को पहले ही भेज दी गई थी।'",
        correctAnswer: "The meeting agenda was circulated to all participants in advance.",
        acceptableAnswers: [
          "The agenda for the meeting had already been sent to all attendees in advance.",
          "The meeting agenda was distributed to all attendees beforehand."
        ],
        explanationEn: "'The meeting agenda was circulated to all participants in advance.'",
        explanationHi: "'Circulated to all participants in advance' प्राकृतिक व्यावसायिक वाक्य है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day52_ex_029",
        type: "sentence_ordering",
        prompt: "Order the executive directive: [budget / recommended / committee / that / the / increase / the / CEO]",
        correctAnswer: "The CEO recommended that the committee increase the budget.",
        explanationEn: "Subject + Reporting Verb + Subjunctive Clause (base verb 'increase').",
        explanationHi: "सही क्रम: The CEO recommended that the committee increase the budget.",
        difficulty: "medium",
        skillTag: "SUBJUNCTIVE_SYNTAX"
      },
      {
        id: "day52_ex_030",
        type: "fill_blank",
        prompt: "A project manager must establish a _______ plan to handle sudden vendor supply shortages.",
        correctAnswer: "contingency",
        acceptableAnswers: ["backup"],
        explanationEn: "'Contingency plan' is a prepared response to potential emergencies or crises.",
        explanationHi: "संकट से निपटने की पूर्व योजना को 'contingency plan' कहते हैं।",
        difficulty: "easy",
        skillTag: "PROJECT_OPERATIONS"
      },
      {
        id: "day52_ex_031",
        type: "multiple_choice",
        prompt: "What does 'Cross-functional synergy' mean in corporate projects?",
        options: [
          "The enhanced collaborative effectiveness achieved when different departments work harmoniously together",
          "When two employees argue over who uses the printer",
          "Working completely alone without communicating with anyone",
          "Cancelling all inter-departmental meetings"
        ],
        correctAnswer: "The enhanced collaborative effectiveness achieved when different departments work harmoniously together",
        explanationEn: "Cross-functional synergy leverages diverse skillsets across departments for superior results.",
        explanationHi: "अलग-अलग विभागों के मिलकर काम करने से मिलने वाले बेहतर परिणाम को 'cross-functional synergy' कहते हैं।",
        difficulty: "easy",
        skillTag: "CORPORATE_CONCEPTS"
      },
      {
        id: "day52_ex_032",
        type: "error_correction",
        prompt: "Correct the sentence: 'He moved that the meeting is adjourned.'",
        correctAnswer: "He moved that the meeting be adjourned.",
        acceptableAnswers: [
          "He moved to adjourn the meeting."
        ],
        explanationEn: "Subjunctive rule: 'moved that the meeting be adjourned' (use 'be', not 'is').",
        explanationHi: "औपचारिक प्रस्ताव में सबजंक्टिव 'be adjourned' का प्रयोग होगा ('is adjourned' नहीं)।",
        difficulty: "medium",
        skillTag: "SUBJUNCTIVE_SYNTAX"
      },
      {
        id: "day52_ex_033",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The board exercised strict regulatory oversight throughout the corporate acquisition process.'",
        correctAnswer: "बोर्ड ने कॉर्पोरेट अधिग्रहण प्रक्रिया के दौरान सख्त विनियामक निगरानी (ओवरसाइट) रखी।",
        acceptableAnswers: [
          "बोर्ड ने पूरी अधिग्रहण प्रक्रिया में कड़ा विनियामक नियंत्रण बनाए रखा।"
        ],
        explanationEn: "'Exercised strict regulatory oversight' = सख्त विनियामक निगरानी रखी.",
        explanationHi: "सटीक कॉर्पोरेट हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day52_ex_034",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nDirector: 'Have we tracked why the mobile release is two weeks late?'\nLead Engineer: 'The major _______ was the third-party payment gateway integration.'",
        options: ["bottleneck", "decorum", "trespasser", "syllable"],
        correctAnswer: "bottleneck",
        explanationEn: "A bottleneck is the point of blockage that delays progress.",
        explanationHi: "देरी का मुख्य कारण अड़चन (bottleneck) था।",
        difficulty: "easy",
        skillTag: "PROJECT_DIAGNOSTICS"
      },
      {
        id: "day52_ex_035",
        type: "fill_blank",
        prompt: "She was appointed as the official corporate _______ to coordinate with international regulatory agencies.",
        correctAnswer: "liaison",
        acceptableAnswers: ["representative", "officer"],
        explanationEn: "A liaison facilitates communication and alignment between distinct bodies.",
        explanationHi: "विभिन्न संस्थाओं के बीच संपर्क अधिकारी को 'liaison' कहते हैं।",
        difficulty: "easy",
        skillTag: "CORPORATE_ROLES"
      },
      {
        id: "day52_ex_036",
        type: "matching",
        prompt: "Match the meeting term with its standard formula:",
        pairs: [
          { left: "Calling to order", right: "I call this meeting to order." },
          { left: "Proposing a motion", right: "I move that we adopt the proposal." },
          { left: "Approving minutes", right: "I propose we approve the minutes as circulated." },
          { left: "Adjourning", right: "Hearing no objections, the meeting stands adjourned." }
        ],
        explanationEn: "Standard meeting procedural formulas.",
        explanationHi: "संसदीय और कॉर्पोरेट बैठक के मानक वाक्यांशों का मिलान।",
        difficulty: "easy",
        skillTag: "MEETING_FORMULAS"
      },
      {
        id: "day52_ex_037",
        type: "error_correction",
        prompt: "Correct the sentence: 'The manager gave order that everyone must do overtime.'",
        correctAnswer: "The manager directed that all team members work overtime.",
        acceptableAnswers: [
          "The manager requested that staff work overtime to meet the deadline.",
          "The manager instructed everyone to work overtime."
        ],
        explanationEn: "Use professional corporate verbs ('directed that', 'instructed', 'mandated') rather than clumsy '*gave order that*'.",
        explanationHi: "'Gave order that' के स्थान पर 'directed that / instructed' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day52_ex_038",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'Executive management issued a memorandum regarding the revised telecommuting policy.'",
        correctAnswer: "Executive management issued a memorandum regarding the revised telecommuting policy.",
        explanationEn: "'Executive management issued a memorandum regarding the revised telecommuting policy.'",
        explanationHi: "कॉर्पोरेट शब्दावली का श्रुतलेख अभ्यास।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day52_ex_039",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'वित्तीय विसंगतियों के कारण ऑडिट रिपोर्ट को अंतिम रूप देने में देरी हुई।'",
        correctAnswer: "The finalization of the audit report was delayed due to financial discrepancies.",
        acceptableAnswers: [
          "Finalizing the audit report was delayed because of financial discrepancies.",
          "Financial discrepancies caused a delay in finalizing the audit report."
        ],
        explanationEn: "'The finalization of the audit report was delayed due to financial discrepancies.'",
        explanationHi: "'Financial discrepancies' (वित्तीय विसंगतियां) का सही प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day52_ex_040",
        type: "sentence_building",
        prompt: "Build an executive statement: [milestones / tracked / all / were / dashboard / the / on]",
        correctAnswer: "All milestones were tracked on the dashboard.",
        acceptableAnswers: [
          "On the dashboard, all milestones were tracked."
        ],
        explanationEn: "Subject + Passive Verb + Prepositional Location.",
        explanationHi: "सही वाक्य: All milestones were tracked on the dashboard.",
        difficulty: "medium",
        skillTag: "SYNTAX_BUILDING"
      },
      {
        id: "day52_ex_041",
        type: "multiple_choice",
        prompt: "What is an 'Action Item' in meeting documentation?",
        options: [
          "A specific discrete task assigned to an individual with a defined deadline",
          "An action scene in a corporate promotional video",
          "A list of complaints about office furniture",
          "The company's social media password list"
        ],
        correctAnswer: "A specific discrete task assigned to an individual with a defined deadline",
        explanationEn: "Action items define who does what by when.",
        explanationHi: "बैठक में तय किया गया वह विशिष्ट कार्य जो किसी व्यक्ति को निश्चित समय सीमा के साथ सौंपा जाता है।",
        difficulty: "easy",
        skillTag: "MEETING_OPERATIONS"
      },
      {
        id: "day52_ex_042",
        type: "fill_blank",
        prompt: "The board reached unanimous _______ to approve the international acquisition.",
        correctAnswer: "consensus",
        acceptableAnswers: ["agreement"],
        explanationEn: "'Unanimous consensus' indicates 100% agreement among all participants.",
        explanationHi: "पूर्ण सर्वसम्मति को 'unanimous consensus' कहते हैं।",
        difficulty: "easy",
        skillTag: "GOVERNANCE"
      },
      {
        id: "day52_ex_043",
        type: "error_correction",
        prompt: "Correct the sentence: 'It is important that every employee takes care of punctuality.'",
        correctAnswer: "It is important that every employee maintain punctuality.",
        acceptableAnswers: [
          "It is essential that all employees be punctual.",
          "It is important that every employee be punctual."
        ],
        explanationEn: "Subjunctive syntax: 'important that every employee maintain' (base form 'maintain', not 'takes care').",
        explanationHi: "'Important that' के बाद सबजंक्टिव 'maintain' या 'be punctual' का प्रयोग होगा।",
        difficulty: "medium",
        skillTag: "SUBJUNCTIVE_SYNTAX"
      },
      {
        id: "day52_ex_044",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'A robust contingency plan mitigates operational risks during supply chain disruptions.'",
        correctAnswer: "एक मजबूत आकस्मिक योजना आपूर्ति श्रृंखला में व्यवधान के दौरान परिचालन जोखिमों को कम करती है।",
        acceptableAnswers: [
          "मजबूत बैकअप प्लान सप्लाई चेन की रुकावटों में ऑपरेशनल रिस्क को कम करता है।"
        ],
        explanationEn: "'A robust contingency plan mitigates operational risks during supply chain disruptions.'",
        explanationHi: "सटीक तकनीकी और व्यावसायिक हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day52_ex_045",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nExecutive: 'Have the minutes of yesterday's emergency session been published?'\nSecretary: 'Yes, sir. I have compiled the MoM and emailed the _______ list to all attendees.'",
        options: ["action item", "turnstile", "prohibition", "syndicate"],
        correctAnswer: "action item",
        explanationEn: "Meeting minutes are accompanied by an action item list.",
        explanationHi: "बैठक के कार्यवृत्त के साथ 'action item list' भेजी जाती है।",
        difficulty: "easy",
        skillTag: "MEETING_OPERATIONS"
      },
      {
        id: "day52_ex_046",
        type: "fill_blank",
        prompt: "The committee established a strict twenty-four-hour _______ time for client dispute resolutions.",
        correctAnswer: "turnaround",
        explanationEn: "'Turnaround time' measures the elapsed time from request to fulfillment.",
        explanationHi: "कार्य पूर्णता अवधि को 'turnaround time' कहते हैं।",
        difficulty: "easy",
        skillTag: "OPERATIONS_VOCABULARY"
      },
      {
        id: "day52_ex_047",
        type: "multiple_choice",
        prompt: "Which sentence correctly demonstrates the formal mandative subjunctive in a corporate policy?",
        options: [
          "Management mandates that every department submit its audit quarterly.",
          "Management mandates that every department submits its audit quarterly.",
          "Management mandates that every department will submit its audit quarterly.",
          "Management mandates that every department submitted its audit quarterly."
        ],
        correctAnswer: "Management mandates that every department submit its audit quarterly.",
        explanationEn: "'Mandates that [noun] submit' uses the bare subjunctive infinitive 'submit'.",
        explanationHi: "सबजंक्टिव में क्रिया का मूल रूप 'submit' आता है ('submits' या 'will submit' नहीं)।",
        difficulty: "medium",
        skillTag: "SUBJUNCTIVE_SYNTAX"
      },
      {
        id: "day52_ex_048",
        type: "error_correction",
        prompt: "Correct the sentence: 'We have to discuss on the deliverables today.'",
        correctAnswer: "We must discuss the deliverables today.",
        acceptableAnswers: [
          "We need to discuss the project deliverables today."
        ],
        explanationEn: "'Discuss' is a transitive verb; do NOT add the preposition 'on' or 'about' after it. Say 'discuss the deliverables'.",
        explanationHi: "'Discuss' सकर्मक क्रिया है, इसके बाद 'on' या 'about' न लगाएं। 'Discuss the deliverables' कहें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day52_ex_049",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'परियोजना की सफलता सुनिश्चित करने के लिए सभी हितधारकों का तालमेल आवश्यक है।'",
        correctAnswer: "Alignment among all stakeholders is essential to ensure project success.",
        acceptableAnswers: [
          "Stakeholder alignment is critical for ensuring project success.",
          "Aligning all stakeholders is essential to guarantee project success."
        ],
        explanationEn: "'Alignment among all stakeholders is essential to ensure project success.'",
        explanationHi: "'Stakeholder alignment' का सटीक उपयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day52_ex_050",
        type: "sentence_ordering",
        prompt: "Order the resolution: [board / the / acquisition / approved / unanimously / the]",
        correctAnswer: "The board unanimously approved the acquisition.",
        acceptableAnswers: [
          "Unanimously, the board approved the acquisition."
        ],
        explanationEn: "Subject + Adverb + Verb + Object.",
        explanationHi: "सही क्रम: The board unanimously approved the acquisition.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day52_ex_051",
        type: "fill_blank",
        prompt: "The executive team must eliminate the software procurement _______ before launching Phase 2.",
        correctAnswer: "bottleneck",
        acceptableAnswers: ["obstacle"],
        explanationEn: "'Bottleneck' is the standard operational descriptor for workflow constraints.",
        explanationHi: "कार्यप्रवाह की रुकावट को 'bottleneck' कहते हैं।",
        difficulty: "easy",
        skillTag: "PROJECT_OPERATIONS"
      },
      {
        id: "day52_ex_052",
        type: "multiple_choice",
        prompt: "Which abbreviation stands for 'Minutes of the Meeting'?",
        options: ["MoM", "KPI", "SOP", "NDA"],
        correctAnswer: "MoM",
        explanationEn: "MoM = Minutes of Meeting.",
        explanationHi: "MoM का पूर्ण रूप 'Minutes of the Meeting' है।",
        difficulty: "easy",
        skillTag: "BUSINESS_ACRONYMS"
      },
      {
        id: "day52_ex_053",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Hearing no further motions from the floor, this quarterly review stands adjourned.'",
        correctAnswer: "सदन से कोई अन्य प्रस्ताव न होने पर, यह त्रैमासिक समीक्षा बैठक स्थगित की जाती है।",
        acceptableAnswers: [
          "कोई अन्य प्रस्ताव न आने के कारण, यह बैठक यहीं समाप्त/स्थगित की जाती है।"
        ],
        explanationEn: "'Hearing no further motions from the floor, this quarterly review stands adjourned.'",
        explanationHi: "संसदीय कार्यप्रणाली का मानक हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day52_ex_054",
        type: "active_recall",
        prompt: "What is the mandative subjunctive rule in English, and how does it apply to the sentence: 'The director demanded that he (be / is) on time'?",
        correctAnswer: "In mandative subjunctive clauses following verbs of demand, recommendation, or urgency, the base form of the verb is used regardless of the subject. Therefore, the correct sentence is: 'The director demanded that he BE on time.'",
        acceptableAnswers: [
          "The subjunctive requires the base form of the verb. Thus, 'demanded that he be on time'."
        ],
        explanationEn: "The subjunctive mood uses the bare infinitive (be, submit, attend) without third-person -s or modal changes.",
        explanationHi: "सबजंक्टिव नियम के अनुसार मांग/सिफारिश वाले वाक्यों में क्रिया का आधार रूप (be, attend) आता है, अतः 'demanded that he be on time' सही है।",
        difficulty: "hard",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day52_ex_055",
        type: "error_correction",
        prompt: "Correct the sentence: 'We need to prepone the meeting because manager is having doubt.'",
        correctAnswer: "We need to advance the meeting because the manager has a question.",
        acceptableAnswers: [
          "We need to move the meeting forward because the manager has a query.",
          "We should reschedule the meeting earlier as the manager has questions."
        ],
        explanationEn: "Eliminates both 'prepone' (use 'advance / move forward') and 'having doubt' (use 'has a question / query').",
        explanationHi: "'Prepone' और 'having doubt' दोनों गलतियों को एक साथ सुधारना।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day52_diag_001",
        title: "Controlled Dialogue: Calling a Formal Board Meeting to Order",
        context: "The Chairperson verifies the quorum, reviews previous minutes, and introduces the quarterly agenda.",
        characters: ["Chairperson (Ms. Sterling)", "Board Secretary (Mr. Kapoor)"],
        lines: [
          { speaker: "Chairperson (Ms. Sterling)", text: "Good morning, ladies and gentlemen. It is 10:00 AM, and I call this meeting of the executive committee to order. Mr. Kapoor, have we established a quorum?", hindi: "शुभ प्रभात, देवियो और सज्जनो। सुबह के 10:00 बज चुके हैं, और मैं कार्यकारी समिति की इस बैठक की कार्यवाही प्रारंभ करती हूँ। श्री कपूर, क्या हमारा कोरम पूरा हो गया है?" },
          { speaker: "Board Secretary (Mr. Kapoor)", text: "Yes, Madam Chair. Nine out of eleven voting members are present, confirming a legal quorum.", hindi: "हाँ, मैडम चेयर। ग्यारह में से नौ मतदान सदस्य उपस्थित हैं, जो कानूनी कोरम की पुष्टि करते हैं।" },
          { speaker: "Chairperson (Ms. Sterling)", text: "Thank you. The minutes of our previous session were circulated via email on Friday. Are there any corrections or additions?", hindi: "धन्यवाद। हमारे पिछले सत्र का कार्यवृत्त शुक्रवार को ईमेल द्वारा प्रसारित किया गया था। क्या कोई सुधार या जोड़ है?" },
          { speaker: "Board Secretary (Mr. Kapoor)", text: "There were no corrections submitted. I move that the committee adopt the minutes as circulated.", hindi: "कोई सुधार प्रस्तुत नहीं किया गया था। मैं प्रस्ताव करता हूँ कि समिति प्रसारित कार्यवृत्त को स्वीकृत करे।" },
          { speaker: "Chairperson (Ms. Sterling)", text: "Seconded. Hearing no objections, the motion carries and the minutes stand approved. Let us proceed to agenda item number one.", hindi: "समर्थन किया गया। कोई आपत्ति न होने पर, प्रस्ताव पारित होता है और कार्यवृत्त स्वीकृत माना जाता है। आइए कार्यसूची के बिंदु संख्या एक पर आगे बढ़ें।" }
        ]
      },
      {
        id: "day52_diag_002",
        title: "Guided Dialogue: Addressing a Project Bottleneck in a Strategy Session",
        context: "A project lead and operations director identify a supply chain obstacle and agree on action items.",
        characters: ["Project Lead (Arjun)", "Operations Director (Elena)"],
        lines: [
          { speaker: "Project Lead (Arjun)", text: "Elena, our software engineering sprint is on track, but hardware component procurement has created a critical bottleneck.", hindi: "ऐलेना, हमारा सॉफ्टवेयर इंजीनियरिंग स्प्रिंट सही रास्ते पर है, लेकिन हार्डवेयर घटक खरीद ने एक गंभीर अड़चन (बॉटलनेक) पैदा कर दी है।" },
          { speaker: "Operations Director (Elena)", text: "I share your concern, Arjun. What is the current turnaround time from our secondary supplier in Taiwan?", hindi: "मैं आपकी चिंता से सहमत हूँ, अर्जुन। ताइवान में हमारे द्वितीयक आपूर्तिकर्ता से वर्तमान टर्नअराउंड समय क्या है?" },
          { speaker: "Project Lead (Arjun)", text: "They project a six-week delivery window. I move that we allocate an expedited shipping budget to compress that timeframe to fourteen days.", hindi: "वे छह सप्ताह के डिलीवरी समय का अनुमान लगाते हैं। मैं प्रस्ताव करता हूँ कि उस समय-सीमा को चौदह दिनों तक कम करने के लिए हम एक त्वरित शिपिंग बजट आवंटित करें।" },
          { speaker: "Operations Director (Elena)", text: "That is a sound mitigation strategy. I recommend that you submit the expedited budget request by 3:00 PM today so I can sign off immediately.", hindi: "यह एक उचित शमन रणनीति है। मैं सिफारिश करती हूँ कि आप आज दोपहर 3:00 बजे तक त्वरित बजट अनुरोध प्रस्तुत करें ताकि मैं तुरंत हस्ताक्षर कर सकूं।" },
          { speaker: "Project Lead (Arjun)", text: "Understood. I will draft the formal authorization memorandum right away.", hindi: "समझ गया। मैं तुरंत औपचारिक प्राधिकरण ज्ञापन (मेमो) तैयार करूँगा।" }
        ]
      },
      {
        id: "day52_diag_003",
        title: "Free Problem-Solving Dialogue: Facilitating Multi-Stakeholder Consensus",
        context: "A Chief Information Officer moderates a debate between finance and engineering regarding cloud infrastructure migration.",
        characters: ["CIO (Dr. Mehra)", "Finance Lead (Sarah)", "Lead Architect (Tariq)"],
        lines: [
          { speaker: "CIO (Dr. Mehra)", text: "Let us maintain our focus on long-term institutional value. Sarah, what are the finance department's primary reservations regarding cloud migration?", hindi: "आइए दीर्घकालिक संस्थागत मूल्य पर अपना ध्यान केंद्रित रखें। सारा, क्लाउड माइग्रेशन के संबंध में वित्त विभाग की प्राथमिक आपत्तियां क्या हैं?" },
          { speaker: "Finance Lead (Sarah)", text: "Our primary discrepancy lies in recurring operating expenditure forecasts versus our capital expenditure cap.", hindi: "हमारी प्राथमिक विसंगति हमारे पूंजीगत व्यय की सीमा की तुलना में आवर्ती परिचालन व्यय के पूर्वानुमानों में निहित है।" },
          { speaker: "Lead Architect (Tariq)", text: "Our feasibility metrics demonstrate that automated server auto-scaling will reduce idle overhead by thirty-two percent within nine months.", hindi: "हमारे व्यावहारिकता मानक प्रदर्शित करते हैं कि स्वचालित सर्वर ऑटो-स्केलिंग नौ महीनों के भीतर निष्क्रिय ओवरहेड को बत्तीस प्रतिशत कम कर देगा।" },
          { speaker: "CIO (Dr. Mehra)", text: "It is imperative that engineering provide Sarah's team with a detailed month-by-month financial projection before our Friday executive briefing.", hindi: "यह अनिवार्य है कि इंजीनियरिंग हमारी शुक्रवार की कार्यकारी ब्रीफिंग से पहले सारा की टीम को महीने-दर-महीने का विस्तृत वित्तीय अनुमान प्रदान करे।" },
          { speaker: "Finance Lead (Sarah)", text: "If those numbers substantiate the thirty-two percent reduction, finance will gladly sign off on the transition milestone.", hindi: "यदि वे आंकड़े बत्तीस प्रतिशत की कमी को प्रमाणित करते हैं, तो वित्त विभाग सहर्ष संक्रमण मील के पत्थर पर हस्ताक्षर कर देगा।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are presiding over a corporate department meeting. Deliver a 60-second opening statement establishing the agenda, confirming previous minutes, and requesting concise updates on project deliverables.",
      prompts: [
        "Call the meeting to order formally.",
        "Confirm that the minutes of the previous meeting were reviewed and approved.",
        "Highlight the main agenda items: Q3 deliverables and addressing the procurement bottleneck.",
        "Remind participants to stick to the allocated time slots and maintain professional decorum."
      ],
      targetExpressions: [
        "I call this meeting to order.",
        "The minutes of the previous meeting stand approved.",
        "Our primary deliverable for today's session...",
        "Let us stick to the agreed agenda items.",
        "I recommend that each lead summarize their action items concisely."
      ]
    },
    roleplay: {
      scenario: "Roleplay a negotiation between a project manager proposing a budget increase and a skeptical financial controller during an executive review.",
      roleA: "Project Manager: Presenting feasibility data, outlining bottlenecks, and proposing a motion for an emergency contingency fund.",
      roleB: "Financial Controller: Questioning discrepancies, asking for strict KPI deliverables, and conditionally approving the proposal.",
      sampleDialogue: "PM: 'I move that we allocate twenty thousand dollars from the contingency reserve to resolve our server bottleneck.' | Controller: 'I will approve this motion provided that the engineering team guarantee a twenty-four-hour turnaround on all client deliverables.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day52_bm_001",
        title: "Drafting Formal Minutes of the Meeting (MoM)",
        prompt: "Draft a formal, structured 5–6 sentence Minutes of the Meeting (MoM) extract documenting the call to order, quorum verification, adoption of minutes, discussion of a procurement bottleneck, and adjournment.",
        sampleAnswerEn: "MINUTES OF THE EXECUTIVE OPERATIONS COMMITTEE MEETING\nDate: October 24 | Presiding: Ms. E. Sterling, Chairperson\n\n1. CALL TO ORDER & QUORUM: The Chairperson called the meeting to order at 10:00 AM. The Secretary confirmed the presence of a quorum with nine voting members in attendance.\n2. ADOPTION OF PREVIOUS MINUTES: The minutes of the previous session were unanimously approved without amendments upon a motion by Mr. Kapoor.\n3. MATTERS ARISING & DELIVERABLES: Mr. Arjun presented the Q3 hardware deliverable status, highlighting a critical supply chain bottleneck from overseas vendors. The committee resolved that an emergency contingency budget of $25,000 be allocated to expedite shipping.\n4. ACTION ITEMS: The Project Lead is tasked with finalizing vendor contracts by Friday noon.\n5. ADJOURNMENT: Hearing no further business, the Chairperson adjourned the meeting at 11:30 AM until next Tuesday.",
        sampleAnswerHi: "कार्यकारी संचालन समिति की बैठक का कार्यवृत्त (MoM)\nदिनांक: 24 अक्टूबर | अध्यक्षता: सुश्री ई. स्टर्लिंग, अध्यक्ष\n\n1. बैठक प्रारंभ एवं कोरम: अध्यक्ष ने सुबह 10:00 बजे बैठक की कार्यवाही प्रारंभ की। सचिव ने नौ मतदान सदस्यों की उपस्थिति के साथ कोरम पूरा होने की पुष्टि की।\n2. पिछले कार्यवृत्त की स्वीकृति: श्री कपूर के प्रस्ताव पर पिछले सत्र के कार्यवृत्त को बिना किसी संशोधन के सर्वसम्मति से अनुमोदित किया गया।\n3. विचारणीय विषय एवं परिणाम: श्री अर्जुन ने विदेशी विक्रेताओं से गंभीर आपूर्ति बाधा को रेखांकित करते हुए Q3 हार्डवेयर परिणामों की स्थिति प्रस्तुत की। समिति ने निर्णय लिया कि शिपिंग में तेजी लाने के लिए $25,000 का आपातकालीन आकस्मिक बजट आवंटित किया जाए।\n4. कार्य सूची (Action Items): प्रोजेक्ट लीड को शुक्रवार दोपहर तक विक्रेता अनुबंधों को अंतिम रूप देने का काम सौंपा गया है।\n5. स्थगन: कोई अन्य कार्य न होने पर, अध्यक्ष ने बैठक को सुबह 11:30 बजे अगले मंगलवार तक के लिए स्थगित कर दिया।",
        evaluationCriteria: "Flawless institutional MoM structure, perfect reported speech, accurate subjunctive syntax ('budget be allocated'), professional corporate formatting."
      },
      {
        id: "day52_bm_002",
        title: "Drafting an Executive Action Memorandum",
        prompt: "Write a 5–6 sentence Executive Memorandum from an Operations Director to all department heads outlining a new turnaround time benchmark and clean-desk compliance mandate.",
        sampleAnswerEn: "MEMORANDUM\nTO: All Department Heads & Project Leads\nFROM: Directorate of Global Operations\nDATE: November 4\nSUBJECT: Implementation of Enhanced Turnaround Benchmarks and Compliance Oversight\n\nEXECUTIVE SUMMARY: To optimize cross-functional efficiency and strengthen client data confidentiality, management is implementing revised operational guidelines effective immediately. All client support escalations must achieve a strict twenty-four-hour turnaround benchmark. Furthermore, to maintain regulatory compliance, it is imperative that each department head enforce our clean-desk policy across all physical workstations. The compliance committee will conduct bi-weekly audits to ensure complete adherence to these security protocols. We appreciate your leadership in driving cross-departmental synergy and operational excellence.",
        sampleAnswerHi: "ज्ञापन (MEMORANDUM)\nप्रति: सभी विभागाध्यक्ष एवं प्रोजेक्ट लीड्स\nप्रेषक: वैश्विक संचालन निदेशालय\nदिनांक: 4 नवंबर\nविषय: उन्नत टर्नअराउंड बेंचमार्क और अनुपालन निरीक्षण का कार्यान्वयन\n\nकार्यकारी सारांश: क्रॉस-फंक्शनल दक्षता को अनुकूलित करने और क्लाइंट डेटा गोपनीयता को मजबूत करने के लिए, प्रबंधन तत्काल प्रभाव से संशोधित परिचालन दिशानिर्देश लागू कर रहा है। सभी ग्राहक सहायता मामलों को चौबीस घंटे के सख्त टर्नअराउंड बेंचमार्क को प्राप्त करना होगा। इसके अलावा, विनियामक अनुपालन बनाए रखने के लिए, यह अनिवार्य है कि प्रत्येक विभागाध्यक्ष सभी वर्कस्टेशन पर हमारी क्लीन-डेस्क नीति को लागू करे। इन सुरक्षा प्रोटोकॉल का पूर्ण पालन सुनिश्चित करने के लिए अनुपालन समिति पाक्षिक ऑडिट आयोजित करेगी। हम क्रॉस-विभागीय तालमेल और परिचालन उत्कृष्टता को आगे बढ़ाने में आपके नेतृत्व की सराहना करते हैं।",
        evaluationCriteria: "Exemplary executive memorandum formatting, high-level business lexicon ('escalations', 'turnaround benchmark', 'bi-weekly audits', 'synergy'), pristine grammatical coherence."
      },
      {
        id: "day52_bm_003",
        title: "Subjunctive Proposal and Debate Synthesis",
        prompt: "Construct a 5–6 sentence synthesis of a boardroom debate where a CIO proposes an infrastructure modernization plan, responds to financial discrepancies, and secures executive consensus.",
        sampleAnswerEn: "During the annual strategy summit, the Chief Information Officer moved that the board authorize a comprehensive cloud migration initiative. While the finance director noted a minor initial expenditure discrepancy, the engineering leadership demonstrated that automated infrastructure scaling would generate long-term fiscal synergies. The committee recommended that the technical team conduct an exhaustive feasibility assessment prior to full deployment. Recognizing the strategic necessity of modernizing legacy systems, all stakeholders reached a unanimous consensus to approve the first phase. The chairperson resolved that a progress briefing be delivered at the forthcoming quarterly review.",
        sampleAnswerHi: "वार्षिक रणनीति शिखर सम्मेलन के दौरान, मुख्य सूचना अधिकारी ने प्रस्ताव रखा कि बोर्ड एक व्यापक क्लाउड माइग्रेशन पहल को अधिकृत करे। जबकि वित्त निदेशक ने एक मामूली प्रारंभिक व्यय विसंगति का उल्लेख किया, इंजीनियरिंग नेतृत्व ने प्रदर्शित किया कि स्वचालित अवसंरचना स्केलिंग दीर्घकालिक वित्तीय सहक्रियाएं उत्पन्न करेगी। समिति ने सिफारिश की कि तकनीकी टीम पूर्ण तैनाती से पहले एक संपूर्ण व्यावहारिकता मूल्यांकन आयोजित करे। पुरानी प्रणालियों को आधुनिक बनाने की रणनीतिक आवश्यकता को पहचानते हुए, सभी हितधारक पहले चरण को मंजूरी देने के लिए एक सर्वसम्मत सहमति पर पहुंचे। अध्यक्ष ने निर्णय लिया कि आगामी त्रैमासिक समीक्षा में एक प्रगति ब्रीफिंग प्रस्तुत की जाए।",
        evaluationCriteria: "Advanced mandative subjunctive mastery ('moved that the board authorize', 'briefing be delivered'), zero Indian English traps, seamless argumentative cohesion."
      }
    ]
  },
  review: {
    quickRecall: [
      {
        q: "What is the mandative subjunctive and how is it used in corporate meetings?",
        a: "It is the use of the base form of the verb (without -s or to) after verbs/adjectives of proposal or demand: 'I recommend that he submit the report', 'It is imperative that everyone be present'."
      },
      {
        q: "Why should you say 'I have a question' instead of 'I am having a doubt'?",
        a: "'Doubt' implies suspicion or disbelief in English. For professional inquiries or clarification, use 'question', 'query', or 'reservation'."
      },
      {
        q: "What does 'Quorum' mean?",
        a: "The minimum number of voting members required to be present to make the proceedings of a meeting legally valid."
      },
      {
        q: "What does 'Table a motion' mean?",
        a: "To formally introduce a proposal for discussion, or to set it aside temporarily for future consideration."
      },
      {
        q: "What does MoM stand for and what does it include?",
        a: "Minutes of the Meeting: the official written record including attendees, quorum confirmation, resolutions adopted, action items, and adjournment time."
      }
    ],
    spacedTips: [
      "Always use 'chair a meeting' or 'preside over a meeting', never '*sit on the head of the meeting*'.",
      "In executive summaries, use nominalization ('The implementation was completed') for brevity and objective impact.",
      "Meeting minutes are written in formal past reported speech, capturing consensus and action items with absolute precision."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day52.js'), `export const day52 = ${JSON.stringify(day52, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day52.js with 55 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks");
