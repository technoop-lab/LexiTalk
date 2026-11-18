import fs from 'fs';
import path from 'path';

export const day55 = {
  dayNumber: 55,
  id: "day_55",
  titleEn: "Civic Inquiries, Postal Operations, Media & Legal Basics",
  titleHi: "नागरिक पूछताछ, डाक संचालन, मीडिया एवं कानूनी बुनियादी बातें",
  cefr: "B1.2",
  estMinutes: 45,
  prerequisites: "Stage 6 Mastery (Days 51–54: Professional, Commercial & Travel Fluency)",
  objectivesEn: [
    "Navigate postal and international courier logistics: registered post, consignment tracking, customs clearance slips, express mail, and certified postal documentation.",
    "Master municipal civic inquiries and public administrative processes: grievance redressal, zoning permits, domicile verification, and gazette notifications.",
    "Comprehend media, journalism, and public relations discourse: press releases, investigative journalism, editorial commentary, broadcast ethics, and defamation.",
    "Understand fundamental legal and contract terminology: litigation, plaintiff vs. defendant, jurisdiction, affidavits, power of attorney, indemnity, and breach of contract.",
    "Eliminate common Hindi-English civic/legal errors (e.g., '*did case on me*', '*do one police complaint*', '*sign on this document*', '*speed post send*')."
  ],
  objectivesHi: [
    "डाक एवं अंतरराष्ट्रीय कूरियर सेवाओं में निपुण होना: पंजीकृत डाक (Registered Post), ट्रैकिंग नंबर, सीमा शुल्क पर्ची, एक्सप्रेस पार्सल और प्रमाणित डाक।",
    "नगर निगम और नागरिक प्रशासनिक प्रक्रियाओं में आत्मविश्वास: शिकायत निवारण (Grievance Redressal), जोनिंग परमिट, निवास प्रमाण पत्र और राजपत्र (Gazette) अधिसूचना।",
    "मीडिया, पत्रकारिता और जनसंपर्क (PR) भाषा: प्रेस विज्ञप्ति, खोजी पत्रकारिता, संपादकीय, प्रसारण नैतिकता और मानहानि (Defamation)।",
    "बुनियादी कानूनी और संविदा शब्दावली: मुकदमेबाजी (Litigation), वादी बनाम प्रतिवादी (Plaintiff vs Defendant), अधिकार क्षेत्र (Jurisdiction), शपथ पत्र (Affidavit), पावर ऑफ अटॉर्नी और अनुबंध का उल्लंघन।",
    "भारतीय अंग्रेजी की कानूनी/नागरिक गलतियों ('did case on me', 'do police complaint', 'sign on the paper') को समाप्त करना।"
  ],
  teach: {
    hindiExplanation: `डे 55 में हम **नागरिक पूछताछ (Civic Inquiries)**, **डाक संचालन (Postal Operations)**, **मीडिया एवं जनसंपर्क (Media & PR)** और **कानूनी बुनियादी शब्दावली (Legal Basics)** सीखेंगे।

1. **डाक एवं कूरियर सेवाएं (Postal & Courier Services)**:
   - **Registered Mail / Certified Post**: पंजीकृत डाक जिसमें डिलीवरी की रसीद मिलती है।
   - **Consignment Tracking Number**: पार्सल की लाइव स्थिति देखने का नंबर।
   - **Customs Declaration Slip**: अंतरराष्ट्रीय पार्सल पर सामान का कानूनी विवरण।
   - **Notary Public & Affidavit**: नोटरी द्वारा सत्यापित शपथ पत्र।

2. **नागरिक एवं नगरपालिका प्रशासन (Civic & Municipal Terms)**:
   - **Grievance Redressal**: जन शिकायतों का औपचारिक निवारण।
   - **Zoning Permit & Building Code**: नगरपालिका से निर्माण या उपयोग की कानूनी अनुमति।
   - **Gazette Notification**: सरकारी राजपत्र में प्रकाशित आधिकारिक घोषणा।
   - **Domicile Certificate**: स्थायी निवास प्रमाण पत्र।

3. **मीडिया एवं पत्रकारिता (Media & Journalism)**:
   - **Press Release / Media Advisory**: समाचार पत्रों व टीवी को जारी की गई आधिकारिक विज्ञप्ति।
   - **Editorial vs Op-Ed**: संपादक का आधिकारिक विचार बनाम बाहरी लेखक का राय-स्तंभ।
   - **Defamation (Libel vs Slander)**: मानहानि (लिखित मानहानि = Libel; मौखिक मानहानि = Slander)।

4. **कानूनी बुनियादी बातें (Legal Fundamentals)**:
   - **Plaintiff vs Defendant**: वादी (मुकदमा करने वाला) बनाम प्रतिवादी (जिस पर मुकदमा किया गया है)।
   - **Power of Attorney (POA)**: किसी को कानूनी अधिकार देने वाला अधिकृत पत्र।
   - **Breach of Contract**: अनुबंध/समझौते की शर्तों का उल्लंघन।
   - **Indemnity Clause**: नुकसान की भरपाई की गारंटी देने वाली कानूनी धारा।

5. **L1 हिंदी भाषियों के लिए सुधार (Eliminating Indian English Civic/Legal Traps)**:
   - ❌ '*He did a case on me in court.*' ➔ ✔️ "**He filed a lawsuit against me in court / initiated legal proceedings against me.**"
   - ❌ '*Go and do one police complaint.*' ➔ ✔️ "**File a formal police report / lodge a complaint with law enforcement.**"
   - ❌ '*Please sign on this document.*' ➔ ✔️ "**Please sign this document.**" ('Sign' सकर्मक क्रिया है, 'on' न लगाएं)।
   - ❌ '*Send this paper by speed post.*' ➔ ✔️ "**Send this document via express mail / registered post.**"`,
    englishExplanation: `Day 55 provides comprehensive linguistic competency in civic engagement, postal logistics, journalistic media interactions, and foundational legal discourse.

Linguistic & Pragmatic Focus:
1. **Administrative & Municipal Interaction**: Registering civic complaints, requesting zoning permits, navigating public utility hearings, and obtaining notarized government documentation.
2. **Postal Logistics & Courier Services**: Dispatching certified mail, tracking consignments, executing customs declarations, and insuring high-value parcels.
3. **Legal Foundations & Contractual Syntax**: Interpreting rights and responsibilities, distinguishing civil vs criminal proceedings, formulating affidavits, understanding powers of attorney, and recognizing breach of contract liabilities.`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Transitive Nature of the Verb 'Sign'",
        description: "'Sign' is a transitive verb that directly takes an object without a preposition: 'Please **sign this contract**' (NOT '*sign on this contract*'). Use 'signature' with 'on': 'Please put your **signature on** this line.'",
        register: "Transitive Verb Syntax"
      },
      {
        ruleNumber: 2,
        title: "Legalistic Declarative & Prepositional Phrases",
        description: "Formal legal and civic writing employs standardized prepositional formulas: 'Pursuant to Section 4...', 'In accordance with municipal bylaws...', 'In witness whereof, the parties have executed this agreement...'.",
        register: "Legal Register"
      },
      {
        ruleNumber: 3,
        title: "Restrictive vs Non-Restrictive Relative Clauses in Contracts",
        description: "Restrictive clauses (using 'that', no commas) define essential legal conditions: 'All invoices that exceed $1,000 require director approval.' Non-restrictive clauses (using 'which', enclosed in commas) provide supplemental info: 'The annexure, which was drafted by legal counsel, specifies payment timelines.'",
        register: "Contractual Syntax"
      },
      {
        ruleNumber: 4,
        title: "Formal Verbs of Legal Action",
        description: "Use precise legal verbs: 'file a lawsuit against', 'lodge a complaint', 'issue a subpoena', 'render a verdict', 'grant power of attorney' (avoid vague colloquialisms like '*do case on*').",
        register: "Jurisprudential Collocations"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Municipal Grievance Submission",
        formula: "I am writing to lodge a formal grievance regarding [Issue] in Ward [Number] pursuant to municipal civic codes.",
        exampleEn: "I am writing to lodge a formal grievance regarding inadequate sanitation services in Ward 14 pursuant to municipal civic codes.",
        meaningHi: "मैं नगरपालिका नागरिक संहिताओं के अनुसार वार्ड 14 में अपर्याप्त स्वच्छता सेवाओं के संबंध में एक औपचारिक शिकायत दर्ज करने के लिए लिख रहा हूँ।"
      },
      {
        subjectGroup: "Legal Lawsuit / Notice Filing",
        formula: "Our legal counsel has filed a formal lawsuit against the defendant for breach of contract in the district court.",
        exampleEn: "Our legal counsel has filed a formal lawsuit against the defendant for breach of contract in the district court.",
        meaningHi: "हमारे कानूनी वकील ने जिला अदालत में अनुबंध के उल्लंघन के लिए प्रतिवादी के खिलाफ एक औपचारिक मुकदमा दायर किया है।"
      },
      {
        subjectGroup: "Registered Mail Dispatch",
        formula: "Please dispatch this consignment via registered express post with proof of delivery and tracking reference.",
        exampleEn: "Please dispatch this consignment via registered express post with proof of delivery and tracking reference.",
        meaningHi: "कृपया डिलीवरी के प्रमाण और ट्रैकिंग संदर्भ के साथ इस पार्सल को पंजीकृत एक्सप्रेस डाक के माध्यम से भेजें।"
      },
      {
        subjectGroup: "Notarized Affidavit Execution",
        formula: "The applicant submitted a sworn affidavit notarized by a certified notary public to establish proof of domicile.",
        exampleEn: "The applicant submitted a sworn affidavit notarized by a certified notary public to establish proof of domicile.",
        meaningHi: "आवेदक ने निवास का प्रमाण स्थापित करने के लिए एक प्रमाणित नोटरी पब्लिक द्वारा सत्यापित एक शपथ पत्र प्रस्तुत किया।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Eliminating 'Did Case on Me', 'Do Police Complaint' & 'Sign On'",
      hindiPattern: "1. '*The landlord did one case on me in court.*'\n2. '*You should go and do one police complaint immediately.*'\n3. '*Sir, please sign on this affidavit.*'\n4. '*Send this important document through speed post.*'",
      potentialInterference: "Direct translation of Hindi phrases: 'केस कर दिया (did case)', 'पुलिस शिकायत करो (do police complaint)', 'कागज़ पर साइन करो (sign on)', and 'स्पीड पोस्ट से भेजो'.",
      explanation: "1. A person 'files a lawsuit against' or 'sues' someone. 2. You 'file a police report' or 'lodge a complaint'. 3. 'Sign' takes a direct object: 'sign this affidavit' (not '*sign on*'). 4. Say 'via express mail' or 'registered post'.",
      naturalSolution: "1. 'The landlord filed a lawsuit against me in civil court.' 2. 'You should file a formal police report immediately.' 3. 'Sir, please sign this affidavit.' 4. 'Send this confidential document via registered post / express mail.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day55_vocab_001", word: "Litigation", pos: "Noun", ipa: "/ˌlɪt.ɪˈɡeɪ.ʃən/", meaningHi: "मुकदमेबाजी / अदालत में कानूनी कार्यवाही की प्रक्रिया", exampleEn: "Commercial litigation between the two multinational corporations dragged on for three years before a settlement was reached.", exampleHi: "दोनों बहुराष्ट्रीय निगमों के बीच वाणिज्यिक मुकदमेबाजी (Litigation) एक समझौते पर पहुंचने से पहले तीन साल तक चली।" },
      { id: "day55_vocab_002", word: "Plaintiff", pos: "Noun", ipa: "/ˈpleɪn.tɪf/", meaningHi: "वादी / अदालत में मुकदमा दायर करने वाला पक्ष", exampleEn: "The plaintiff presented documentary evidence proving that the contractor failed to meet safety standards.", exampleHi: "वादी (Plaintiff) ने दस्तावेजी साक्ष्य प्रस्तुत किए जिससे साबित हुआ कि ठेकेदार सुरक्षा मानकों को पूरा करने में विफल रहा।" },
      { id: "day55_vocab_003", word: "Defendant", pos: "Noun", ipa: "/dɪˈfen.dənt/", meaningHi: "प्रतिवादी / जिस पर अदालत में आरोप या मुकदमा लगाया गया है", exampleEn: "The defendant denied all allegations of intellectual property infringement in the civil lawsuit.", exampleHi: "प्रतिवादी (Defendant) ने दीवानी मुकदमे में बौद्धिक संपदा के उल्लंघन के सभी आरोपों से इनकार किया।" },
      { id: "day55_vocab_004", word: "Affidavit", pos: "Noun", ipa: "/ˌæf.ɪˈdeɪ.vɪt/", meaningHi: "शपथ पत्र / लिखित में दिया गया कानूनी हलफनामा", exampleEn: "The witness signed a sworn affidavit in the presence of a certified notary public.", exampleHi: "गवाह ने एक प्रमाणित नोटरी पब्लिक की उपस्थिति में एक शपथ पत्र (एफिडेविट) पर हस्ताक्षर किए।" },
      { id: "day55_vocab_005", word: "Jurisdiction", pos: "Noun", ipa: "/ˌdʒʊə.rɪsˈdɪk.ʃən/", meaningHi: "अधिकार क्षेत्र / किसी अदालत या संस्था की कानूनी शक्ति की सीमा", exampleEn: "The high court determined that it held territorial jurisdiction over the maritime dispute.", exampleHi: "उच्च न्यायालय ने निर्धारित किया कि समुद्री विवाद पर उसका क्षेत्रीय अधिकार क्षेत्र (Jurisdiction) है।" },
      { id: "day55_vocab_006", word: "Indemnity", pos: "Noun", ipa: "/ɪnˈdem.nə.ti/", meaningHi: "क्षतिपूर्ति / हानि या नुकसान की भरपाई की कानूनी गारंटी", exampleEn: "The commercial agreement contains an indemnity clause protecting the buyer against third-party patent claims.", exampleHi: "वाणिज्यिक समझौते में तीसरे पक्ष के पेटेंट दावों से खरीदार की रक्षा करने वाली एक क्षतिपूर्ति (Indemnity) धारा शामिल है।" },
      { id: "day55_vocab_007", word: "Grievance", pos: "Noun", ipa: "/ˈɡriː.vəns/", meaningHi: "शिकायत / अन्याय या अनुचित व्यवहार पर आधिकारिक आपत्ति", exampleEn: "Residents submitted a collective grievance regarding water contamination to the municipal commissioner.", exampleHi: "निवासियों ने नगर निगम आयुक्त को जल प्रदूषण के संबंध में एक सामूहिक शिकायत (Grievance) सौंपी।" },
      { id: "day55_vocab_008", word: "Consignment", pos: "Noun", ipa: "/kənˈsaɪn.mənt/", meaningHi: "प्रेषित माल / कूरियर या डाक द्वारा भेजा गया पार्सल", exampleEn: "You can track the international shipping progress of your parcel using the consignment tracking number.", exampleHi: "आप कंसाइनमेंट ट्रैकिंग नंबर का उपयोग करके अपने पार्सल की अंतरराष्ट्रीय शिपिंग प्रगति को ट्रैक कर सकते हैं।" },
      { id: "day55_vocab_009", word: "Defamation", pos: "Noun", ipa: "/ˌdef.əˈmeɪ.ʃən/", meaningHi: "मानहानि / किसी की प्रतिष्ठा को झूठे बयानों से नुकसान पहुंचाना", exampleEn: "The executive filed a civil defamation lawsuit against the newspaper for publishing unfounded allegations.", exampleHi: "कार्यकारी ने निराधार आरोप प्रकाशित करने के लिए समाचार पत्र के खिलाफ दीवानी मानहानि (Defamation) का मुकदमा दायर किया।" },
      { id: "day55_vocab_010", word: "Subpoena", pos: "Noun", ipa: "/səˈpiː.nə/", meaningHi: "समन / अदालत में पेश होने या साक्ष्य देने का कानूनी आदेश", exampleEn: "The corporate auditor received a judicial subpoena commanding him to testify before the parliamentary committee.", exampleHi: "कॉर्पोरेट ऑडिटर को संसदीय समिति के समक्ष गवाही देने का आदेश देने वाला एक न्यायिक समन (Subpoena) प्राप्त हुआ।" },
      { id: "day55_vocab_011", word: "Redressal", pos: "Noun", ipa: "/rɪˈdres.əl/", meaningHi: "निवारण / शिकायत या अन्याय को ठीक करने की प्रक्रिया", exampleEn: "The consumer forum provides an efficient mechanism for the redressal of unfair trade practices.", exampleHi: "उपभोक्ता मंच अनुचित व्यापार प्रथाओं के निवारण (Redressal) के लिए एक कुशल तंत्र प्रदान करता है।" },
      { id: "day55_vocab_012", word: "Domicile", pos: "Noun", ipa: "/ˈdɒm.ɪ.saɪl/", meaningHi: "स्थायी निवास / कानूनी तौर पर रहने का मूल स्थान", exampleEn: "Applicants must provide utility bills and tax filings to establish legal domicile within the province.", exampleHi: "प्रांत के भीतर कानूनी निवास (Domicile) स्थापित करने के लिए आवेदकों को उपयोगिता बिल और कर फाइलिंग प्रदान करनी होगी।" },
      { id: "day55_vocab_013", word: "Editorial", pos: "Noun", ipa: "/ˌed.ɪˈtɔː.ri.əl/", meaningHi: "संपादकीय / समाचार पत्र के मुख्य संपादक का आधिकारिक लेख", exampleEn: "Today's front-page editorial evaluated the economic implications of the proposed municipal tax reforms.", exampleHi: "आज के मुख्य पृष्ठ के संपादकीय ने प्रस्तावित नगरपालिका कर सुधारों के आर्थिक प्रभावों का मूल्यांकन किया।" },
      { id: "day55_vocab_014", word: "Gazette", pos: "Noun", ipa: "/ɡəˈzet/", meaningHi: "राजपत्र / सरकार का आधिकारिक समाचार पत्र या सूचना बुलेटिन", exampleEn: "The new environmental protection bylaws were formally published in the official government gazette.", exampleHi: "नए पर्यावरण संरक्षण उपनियम आधिकारिक सरकारी राजपत्र (Gazette) में औपचारिक रूप से प्रकाशित किए गए थे।" },
      { id: "day55_vocab_015", word: "Notary", pos: "Noun", ipa: "/ˈnəʊ.tər.i/", meaningHi: "नोटरी / दस्तावेजों और हस्ताक्षरों को प्रमाणित करने वाला कानूनी अधिकारी", exampleEn: "The deed must be signed in the physical presence of a certified notary public to be legally binding.", exampleHi: "कानूनी रूप से बाध्यकारी होने के लिए विलेख पर एक प्रमाणित नोटरी पब्लिक की भौतिक उपस्थिति में हस्ताक्षर होने चाहिए।" },
      { id: "day55_vocab_016", word: "Verdict", pos: "Noun", ipa: "/ˈvɜː.dɪkt/", meaningHi: "फैसला / अदालत या जूरी द्वारा सुनाया गया अंतिम निर्णय", exampleEn: "After five hours of deliberation, the jury delivered a unanimous verdict of not guilty.", exampleHi: "पांच घंटे के विचार-विमर्श के बाद, जूरी ने निर्दोष होने का सर्वसम्मत फैसला (Verdict) सुनाया।" },
      { id: "day55_vocab_017", word: "Sanitation", pos: "Noun", ipa: "/ˌsæn.ɪˈteɪ.ʃən/", meaningHi: "स्वच्छता एवं सार्वजनिक स्वास्थ्य व्यवस्था", exampleEn: "The municipal corporation launched an aggressive sanitation drive to clear urban storm drains before monsoon season.", exampleHi: "नगर निगम ने मानसून के मौसम से पहले शहरी नालों को साफ करने के लिए एक आक्रामक स्वच्छता अभियान शुरू किया।" },
      { id: "day55_vocab_018", word: "Broadcast", pos: "Noun", ipa: "/ˈbrɔːd.kɑːst/", meaningHi: "प्रसारण / रेडियो या टेलीविजन पर कार्यक्रम का संचार", exampleEn: "The prime minister's national address was transmitted live on public television broadcast channels.", exampleHi: "प्रधानमंत्री का राष्ट्रीय संबोधन सार्वजनिक टेलीविजन प्रसारण चैनलों पर सीधा प्रसारित किया गया था।" },
      { id: "day55_vocab_019", word: "Breach", pos: "Noun", ipa: "/briːtʃ/", meaningHi: "उल्लंघन / किसी कानून, अनुबंध या नियम को तोड़ना", exampleEn: "Failure to deliver the industrial components by Friday constitutes a material breach of contract.", exampleHi: "शुक्रवार तक औद्योगिक घटकों को वितरित करने में विफलता अनुबंध का एक महत्वपूर्ण उल्लंघन (Breach) है।" },
      { id: "day55_vocab_020", word: "Attorney", pos: "Noun", ipa: "/əˈtɜː.ni/", meaningHi: "वकील / कानूनी प्रतिनिधि (पावर ऑफ अटॉर्नी = कानूनी अधिकार पत्र)", exampleEn: "She granted power of attorney to her trusted solicitor to manage all property sales during her absence abroad.", exampleHi: "विदेश में अपनी अनुपस्थिति के दौरान सभी संपत्ति की बिक्री का प्रबंधन करने के लिए उसने अपने विश्वस्त वकील को पावर ऑफ अटॉर्नी दी।" }
    ],
    spokenPhrases: [
      { id: "day55_phrase_001", phrase: "I would like to dispatch this official document via registered post with acknowledgment due.", register: "Postal Services", meaningHi: "मैं इस आधिकारिक दस्तावेज को पावती सहित पंजीकृत डाक (Registered Post with AD) द्वारा भेजना चाहता हूँ।" },
      { id: "day55_phrase_002", phrase: "Could you provide the consignment tracking number for our international courier parcel?", register: "Logistics Inquiries", meaningHi: "क्या आप हमारे अंतरराष्ट्रीय कूरियर पार्सल के लिए कंसाइनमेंट ट्रैकिंग नंबर प्रदान कर सकते हैं?" },
      { id: "day55_phrase_003", phrase: "I am lodging a formal grievance regarding the disruption of municipal water supply.", register: "Civic Administration", meaningHi: "मैं नगरपालिका की जलापूर्ति में व्यवधान के संबंध में एक औपचारिक शिकायत दर्ज कर रहा हूँ।" },
      { id: "day55_phrase_004", phrase: "This affidavit must be signed and stamped by an authorized notary public.", register: "Legal Formalities", meaningHi: "इस शपथ पत्र पर एक अधिकृत नोटरी पब्लिक द्वारा हस्ताक्षर और मुहर लगाई जानी चाहिए।" },
      { id: "day55_phrase_005", phrase: "The plaintiff has filed a lawsuit in civil court alleging breach of commercial contract.", register: "Legal Discourse", meaningHi: "वादी ने वाणिज्यिक अनुबंध के उल्लंघन का आरोप लगाते हुए दीवानी अदालत में मुकदमा दायर किया है।" },
      { id: "day55_phrase_006", phrase: "Please sign this non-disclosure agreement before we share confidential project blueprints.", register: "Corporate Legal", meaningHi: "गोपनीय प्रोजेक्ट ब्लूप्रिंट साझा करने से पहले कृपया इस गैर-प्रकटीकरण समझौते (NDA) पर हस्ताक्षर करें।" },
      { id: "day55_phrase_007", phrase: "The government published the amended zoning regulations in the official gazette.", register: "Civic Governance", meaningHi: "सरकार ने आधिकारिक राजपत्र में संशोधित जोनिंग नियमों को प्रकाशित किया।" },
      { id: "day55_phrase_008", phrase: "Our legal department issued a formal cease-and-desist notice regarding defamation.", register: "Media & Legal", meaningHi: "हमारे कानूनी विभाग ने मानहानि के संबंध में एक औपचारिक रोक (Cease-and-Desist) नोटिस जारी किया।" },
      { id: "day55_phrase_009", phrase: "Where can I submit an application for an official domicile certificate?", register: "Civic Inquiries", meaningHi: "मैं आधिकारिक निवास प्रमाण पत्र के लिए आवेदन कहाँ जमा कर सकता हूँ?" },
      { id: "day55_phrase_010", phrase: "The consumer forum ordered the merchant to pay full indemnity and compensatory damages.", register: "Consumer Rights", meaningHi: "उपभोक्ता मंच ने व्यापारी को पूर्ण क्षतिपूर्ति और हरजाने का भुगतान करने का आदेश दिया।" },
      { id: "day55_phrase_011", phrase: "You can track the live postal transit status on the national logistics portal.", register: "Postal Logistics", meaningHi: "आप राष्ट्रीय रसद पोर्टल पर लाइव डाक पारगमन स्थिति को ट्रैक कर सकते हैं।" },
      { id: "day55_phrase_012", phrase: "The district magistrate holds legal jurisdiction over all municipal zoning disputes.", register: "Jurisprudential Authority", meaningHi: "जिला मजिस्ट्रेट के पास सभी नगरपालिका जोनिंग विवादों पर कानूनी अधिकार क्षेत्र है।" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day55_ex_001", english: "The plaintiff filed a civil lawsuit in the district court alleging breach of a software development contract.", hindi: "वादी ने सॉफ्टवेयर विकास अनुबंध के उल्लंघन का आरोप लगाते हुए जिला अदालत में एक दीवानी मुकदमा दायर किया।" },
      { id: "day55_ex_002", english: "The postal clerk weighed the international consignment and attached the mandatory customs declaration slip.", hindi: "डाक क्लर्क ने अंतरराष्ट्रीय पार्सल का वजन किया और अनिवार्य सीमा शुल्क घोषणा पर्ची संलग्न की।" },
      { id: "day55_ex_003", english: "Residents submitted a formal petition to the municipal commissioner demanding immediate grievance redressal for broken water pipelines.", hindi: "निवासियों ने टूटे हुए पानी के पाइपों की तत्काल शिकायत निवारण की मांग करते हुए नगर निगम आयुक्त को एक औपचारिक याचिका प्रस्तुत की।" },
      { id: "day55_ex_004", english: "The business owner executed a sworn affidavit before a certified notary public to verify the authenticity of commercial assets.", hindi: "व्यापार मालिक ने वाणिज्यिक संपत्तियों की प्रामाणिकता को सत्यापित करने के लिए एक प्रमाणित नोटरी पब्लिक के समक्ष एक शपथ पत्र निष्पादित किया।" },
      { id: "day55_ex_005", english: "The contract contains an indemnity clause stipulating that the supplier will reimburse all legal expenses incurred during litigation.", hindi: "अनुबंध में एक क्षतिपूर्ति धारा शामिल है जिसमें यह निर्धारित किया गया है कि आपूर्तिकर्ता मुकदमेबाजी के दौरान होने वाले सभी कानूनी खर्चों की प्रतिपूर्ति करेगा।" },
      { id: "day55_ex_006", english: "The investigative journalist published a hard-hitting expose on municipal corruption in the Sunday editorial.", hindi: "खोजी पत्रकार ने रविवार के संपादकीय में नगरपालिका के भ्रष्टाचार पर एक जोरदार खुलासा प्रकाशित किया।" },
      { id: "day55_ex_007", english: "The high court dismissed the petition because the administrative tribunal held exclusive jurisdiction over the matter.", hindi: "उच्च न्यायालय ने याचिका खारिज कर दी क्योंकि प्रशासनिक न्यायाधिकरण के पास इस मामले पर विशेष अधिकार क्षेत्र था।" },
      { id: "day55_ex_008", english: "Our dispatch department sent the legal notices via registered post with acknowledgment cards attached.", hindi: "हमारे प्रेषण विभाग ने कानूनी नोटिस संलग्न पावती कार्ड के साथ पंजीकृत डाक के माध्यम से भेजे।" },
      { id: "day55_ex_009", english: "The municipal corporation enacted stricter sanitation bylaws to penalize illegal industrial waste dumping.", hindi: "नगर निगम ने अवैध औद्योगिक कचरा डंपिंग को दंडित करने के लिए सख्त स्वच्छता उपनियम बनाए।" },
      { id: "day55_ex_010", english: "The defendant received a judicial subpoena ordering her to appear as a witness in the corporate fraud trial.", hindi: "प्रतिवादी को कॉर्पोरेट धोखाधड़ी के मुकदमे में एक गवाह के रूप में पेश होने का आदेश देने वाला एक न्यायिक समन प्राप्त हुआ।" },
      { id: "day55_ex_011", english: "To apply for civil service examinations, candidates must submit an authenticated domicile certificate issued by the district revenue authority.", hindi: "सिविल सेवा परीक्षाओं के लिए आवेदन करने के लिए, उम्मीदवारों को जिला राजस्व प्राधिकरण द्वारा जारी एक प्रमाणित निवास प्रमाण पत्र प्रस्तुत करना होगा।" },
      { id: "day55_ex_012", english: "The corporate spokesperson issued an official press release denying all allegations of financial impropriety.", hindi: "कॉर्पोरेट प्रवक्ता ने वित्तीय अनियमितता के सभी आरोपों से इनकार करते हुए एक आधिकारिक प्रेस विज्ञप्ति जारी की।" },
      { id: "day55_ex_013", english: "The jury delivered a unanimous verdict in favor of the plaintiff after evaluating three weeks of forensic evidence.", hindi: "तीन सप्ताह के फोरेंसिक साक्ष्य का मूल्यांकन करने के बाद जूरी ने वादी के पक्ष में सर्वसम्मत फैसला सुनाया।" },
      { id: "day55_ex_014", english: "The property owner granted power of attorney to his legal representative to execute commercial lease agreements.", hindi: "संपत्ति के मालिक ने वाणिज्यिक पट्टा समझौतों को निष्पादित करने के लिए अपने कानूनी प्रतिनिधि को पावर ऑफ अटॉर्नी प्रदान की।" },
      { id: "day55_ex_015", english: "Publishing unverified and damaging statements about an individual constitutes actionable defamation under civil law.", hindi: "किसी व्यक्ति के बारे में असत्यापित और नुकसानदेह बयान प्रकाशित करना दीवानी कानून के तहत कार्रवाई योग्य मानहानि है।" },
      { id: "day55_ex_016", english: "The parcel consignment can be tracked in real time using the eleven-digit barcode on the official postal receipt.", hindi: "आधिकारिक डाक रसीद पर ग्यारह अंकों के बारकोड का उपयोग करके पार्सल कंसाइनमेंट को वास्तविक समय में ट्रैक किया जा सकता है।" },
      { id: "day55_ex_017", english: "The new commercial building regulations were officially notified in the state government gazette on Friday.", hindi: "नए वाणिज्यिक भवन नियमों को शुक्रवार को राज्य सरकार के राजपत्र (गज़ट) में आधिकारिक रूप से अधिसूचित किया गया था।" },
      { id: "day55_ex_018", english: "Failure to deliver the contracted machinery by the stipulated deadline constituted a material breach of contract.", hindi: "निर्धारित समय सीमा तक अनुबंधित मशीनरी वितरित करने में विफलता अनुबंध का एक महत्वपूर्ण उल्लंघन थी।" },
      { id: "day55_ex_019", english: "Residents lodged a formal grievance with the public utility board regarding frequent electrical voltage surges.", hindi: "निवासियों ने बार-बार होने वाले विद्युत वोल्टेज के उतार-चढ़ाव के संबंध में सार्वजनिक उपयोगिता बोर्ड के पास एक औपचारिक शिकायत दर्ज कराई।" },
      { id: "day55_ex_020", english: "Please sign this contract on the dotted line indicated at the bottom of page four.", hindi: "कृपया पृष्ठ चार के नीचे दर्शाई गई बिंदुदार रेखा पर इस अनुबंध पर हस्ताक्षर करें।" },
      { id: "day55_ex_021", english: "The public relations team organized a national press broadcast to announce the corporate philanthropic foundation.", hindi: "जनसंपर्क टीम ने कॉर्पोरेट परोपकारी फाउंडेशन की घोषणा करने के लिए एक राष्ट्रीय प्रेस प्रसारण का आयोजन किया।" },
      { id: "day55_ex_022", english: "A notarized copy of the property deed is required before the bank can disburse the mortgage loan.", hindi: "बैंक द्वारा बंधक ऋण वितरित करने से पहले संपत्ति के विलेख की एक नोटरीकृत प्रति आवश्यक है।" },
      { id: "day55_ex_023", english: "The magistrate issued a stern warning that contempt of court proceedings would be initiated against non-compliant witnesses.", hindi: "मजिस्ट्रेट ने एक कड़ी चेतावनी जारी की कि गैर-अनुपालन करने वाले गवाहों के खिलाफ अदालत की अवमानना की कार्यवाही शुरू की जाएगी।" },
      { id: "day55_ex_024", english: "The municipal zoning board approved the commercial permit for building the new medical clinic.", hindi: "नगरपालिका जोनिंग बोर्ड ने नए मेडिकल क्लिनिक के निर्माण के लिए वाणिज्यिक परमिट को मंजूरी दी।" },
      { id: "day55_ex_025", english: "Postal express mail provides reliable door-to-door delivery with electronic recipient signature verification.", hindi: "डाक एक्सप्रेस मेल इलेक्ट्रॉनिक प्राप्तकर्ता हस्ताक्षर सत्यापन के साथ विश्वसनीय डोर-टू-डोर डिलीवरी प्रदान करता है।" }
    ]
  },
  pronunciation: {
    focusSound: "Legal & Administrative Lexical Stress, Affricates & Forensic Enunciation",
    phoneticNotes: "1. Stress and Phonetics in Legal Terms:\n   - 'Litigation' /ˌlɪt.ɪˈɡeɪ.ʃən/ (Stress on 3rd syllable)\n   - 'Affidavit' /ˌæf.ɪˈdeɪ.vɪt/ (Stress on 3rd syllable /deɪ/)\n   - 'Subpoena' /səˈpiː.nə/ (Stress on 2nd syllable /piː/; silent 'b')\n   - 'Jurisdiction' /ˌdʒʊə.rɪsˈdɪk.ʃən/ (Stress on 3rd syllable)\n   - 'Indemnity' /ɪnˈdem.nə.ti/ (Stress on 2nd syllable)\n2. Silent Letters and Glides:\n   - 'Subpoena': The letter 'b' is completely silent /səˈpiː.nə/.\n   - 'Consignment' /kənˈsaɪn.mənt/: Silent 'g' with long diphthong /aɪ/.\n3. Transitive Verb 'Sign': Crisp articulation of /saɪn ðɪs ˈdɒk.jʊ.mənt/, avoiding insertion of /*saɪn ɒn/.",
    minimalPairs: [
      { wordA: "Plaintiff", ipaA: "/ˈpleɪn.tɪf/", wordB: "Plaintive", ipaB: "/ˈpleɪn.tɪv/" },
      { wordA: "Libel", ipaA: "/ˈlaɪ.bəl/", wordB: "Label", ipaB: "/ˈleɪ.bəl/" },
      { wordA: "Verdict", ipaA: "/ˈvɜː.dɪkt/", wordB: "Vertical", ipaB: "/ˈvɜː.tɪ.kəl/" },
      { wordA: "Subpoena", ipaA: "/səˈpiː.nə/", wordB: "Supine", ipaB: "/ˈsuː.paɪn/" },
      { wordA: "Deed", ipaA: "/diːd/", wordB: "Dead", ipaB: "/ded/" }
    ],
    drills: [
      { sentence: "The witness signed the sworn affidavit in the presence of the notary public.", focus: "Stress in /ˌæf.ɪˈdeɪ.vɪt/ & /ˈnəʊ.tər.i/" },
      { sentence: "The court issued a subpoena commanding the defendant to testify.", focus: "Silent 'b' in /səˈpiː.nə/ & /dɪˈfen.dənt/" },
      { sentence: "The plaintiff initiated commercial litigation regarding breach of contract.", focus: "Cadence in /ˌlɪt.ɪˈɡeɪ.ʃən/ & /ˈpleɪn.tɪf/" },
      { sentence: "The municipal corporation established a fast-track grievance redressal portal.", focus: "Enunciation of /ˈɡriː.vəns/ & /rɪˈdres.əl/" },
      { sentence: "Please dispatch the consignment via registered post with tracking details.", focus: "Pronunciation of /kənˈsaɪn.mənt/" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day55_ex_001",
        type: "error_correction",
        prompt: "Correct the sentence: 'The contractor did a case on me in high court.'",
        correctAnswer: "The contractor filed a lawsuit against me in the high court.",
        acceptableAnswers: [
          "The contractor sued me in the high court.",
          "The contractor initiated legal proceedings against me in the high court."
        ],
        explanationEn: "In English, one does not '*do a case on*'; one 'files a lawsuit against' or 'sues' a party.",
        explanationHi: "मुकदमा करने के लिए 'filed a lawsuit against' या 'sued' कहें ('did case on' गलत है)।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day55_ex_002",
        type: "error_correction",
        prompt: "Correct the sentence: 'You should go to police station and do one complaint.'",
        correctAnswer: "You should go to the police station and file a formal complaint.",
        acceptableAnswers: [
          "You should lodge a police report immediately.",
          "You should file a report at the police station."
        ],
        explanationEn: "Use 'file a formal complaint' or 'lodge a police report' (not '*do one complaint*').",
        explanationHi: "शिकायत दर्ज करने के लिए 'file a formal complaint' या 'lodge a police report' कहें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day55_ex_003",
        type: "error_correction",
        prompt: "Correct the sentence: 'Sir, please sign on this contract agreement.'",
        correctAnswer: "Sir, please sign this contract agreement.",
        acceptableAnswers: [
          "Sir, please put your signature on this contract agreement.",
          "Sir, please sign this agreement."
        ],
        explanationEn: "'Sign' is a transitive verb that directly takes the object: 'sign this contract' (never '*sign on this contract*').",
        explanationHi: "'Sign' सकर्मक क्रिया है; सीधे 'sign this contract' कहें ('sign on' गलत है)।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day55_ex_004",
        type: "multiple_choice",
        prompt: "Who is the 'Plaintiff' in a civil court proceeding?",
        options: [
          "The party who initiates a lawsuit against another party",
          "The person accused or sued in court",
          "The security guard stationed at the courtroom door",
          "The clerk who photocopies court orders"
        ],
        correctAnswer: "The party who initiates a lawsuit against another party",
        explanationEn: "The plaintiff is the person or entity who brings a case against another in court.",
        explanationHi: "अदालत में मुकदमा दायर करने वाले पक्ष (वादी) को 'Plaintiff' कहते हैं।",
        difficulty: "easy",
        skillTag: "LEGAL_VOCABULARY"
      },
      {
        id: "day55_ex_005",
        type: "fill_blank",
        prompt: "A written statement of facts confirmed by an oath or affirmation before a notary is an _______.",
        correctAnswer: "affidavit",
        explanationEn: "An affidavit is a sworn written statement.",
        explanationHi: "नोटरी के समक्ष शपथ लेकर दिए गए कानूनी बयान को 'affidavit' (शपथ पत्र) कहते हैं।",
        difficulty: "easy",
        skillTag: "LEGAL_DOCUMENTS"
      },
      {
        id: "day55_ex_006",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'नगर निगम ने अवैध निर्माण के खिलाफ नोटिस जारी किया।'",
        correctAnswer: "The municipal corporation issued a notice against illegal construction.",
        acceptableAnswers: [
          "The municipal authority served a notice regarding unauthorized construction.",
          "The municipality issued a violation notice against illegal building."
        ],
        explanationEn: "'The municipal corporation issued a notice against illegal construction.'",
        explanationHi: "'Municipal corporation issued a notice against illegal construction' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day55_ex_007",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The consumer forum ordered full indemnity for the damages suffered due to deficient services.'",
        correctAnswer: "उपभोक्ता मंच ने दोषपूर्ण सेवाओं के कारण हुए नुकसान के लिए पूर्ण क्षतिपूर्ति का आदेश दिया।",
        acceptableAnswers: [
          "खराब सेवा से हुए नुकसान की पूरी भरपाई का आदेश कंज्यूमर फोरम ने दिया।"
        ],
        explanationEn: "'Full indemnity for the damages suffered' = नुकसान के लिए पूर्ण क्षतिपूर्ति.",
        explanationHi: "सटीक उपभोक्ता कानून और क्षतिपूर्ति अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day55_ex_008",
        type: "sentence_ordering",
        prompt: "Order into a legal directive: [lawsuit / plaintiff / civil / a / filed / the / has]",
        correctAnswer: "The plaintiff has filed a civil lawsuit.",
        acceptableAnswers: [
          "A civil lawsuit has been filed by the plaintiff."
        ],
        explanationEn: "Subject + Present Perfect + Object.",
        explanationHi: "सही क्रम: The plaintiff has filed a civil lawsuit.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day55_ex_009",
        type: "multiple_choice",
        prompt: "What is a 'Subpoena' in judicial proceedings?",
        options: [
          "A legal writ commanding a person to appear in court and give testimony or produce evidence",
          "A delicious Italian sandwich served to jurors",
          "A stamp used on registered postal letters",
          "A special badge worn by police captains"
        ],
        correctAnswer: "A legal writ commanding a person to appear in court and give testimony or produce evidence",
        explanationEn: "A subpoena is a court order compelling attendance or evidence production.",
        explanationHi: "अदालत में पेश होने या साक्ष्य देने के कानूनी आदेश (समन) को 'Subpoena' कहते हैं (उच्चारण: 'सपीना')।",
        difficulty: "easy",
        skillTag: "JURISPRUDENCE"
      },
      {
        id: "day55_ex_010",
        type: "fill_blank",
        prompt: "The legal authority of a court to hear and determine a case within a geographic or thematic scope is its _______.",
        correctAnswer: "jurisdiction",
        explanationEn: "'Jurisdiction' is legal authority and territorial remit.",
        explanationHi: "कानूनी अधिकार क्षेत्र को 'jurisdiction' कहते हैं।",
        difficulty: "easy",
        skillTag: "LEGAL_CONCEPTS"
      },
      {
        id: "day55_ex_011",
        type: "error_correction",
        prompt: "Correct the sentence: 'Send this envelope by speed post with acknowledge card.'",
        correctAnswer: "Send this envelope via registered post with an acknowledgment card.",
        acceptableAnswers: [
          "Dispatch this letter via express mail with acknowledgment due.",
          "Please send this parcel via registered post with acknowledgment."
        ],
        explanationEn: "Standard international postal terminology: 'via registered post with an acknowledgment card' (or 'express mail').",
        explanationHi: "मानक डाक भाषा: 'via registered post with an acknowledgment card' कहें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day55_ex_012",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nCitizen: 'Where can I resolve issues with contaminated public tap water?'\nOfficer: 'You must submit a formal petition to the municipal _______ redressal cell.'",
        options: ["grievance", "subpoena", "debenture", "carousel"],
        correctAnswer: "grievance",
        explanationEn: "Grievance redressal cell addresses public civic complaints.",
        explanationHi: "नागरिक समस्याओं के समाधान के लिए 'grievance redressal' सेल होता है।",
        difficulty: "easy",
        skillTag: "CIVIC_ADMINISTRATION"
      },
      {
        id: "day55_ex_013",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The witness signed a sworn affidavit in the presence of the certified notary public.'",
        correctAnswer: "The witness signed a sworn affidavit in the presence of the certified notary public.",
        explanationEn: "'The witness signed a sworn affidavit in the presence of the certified notary public.'",
        explanationHi: "कानूनी शपथ पत्र वाक्य का श्रुतलेख अभ्यास।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day55_ex_014",
        type: "matching",
        prompt: "Match the legal concept with its exact definition:",
        pairs: [
          { left: "Indemnity", right: "Contractual obligation to compensate for loss or damage" },
          { left: "Domicile", right: "Permanent legal residence of an individual" },
          { left: "Gazette", right: "Official publication containing government laws and notices" },
          { left: "Verdict", right: "Formal judicial decision delivered by a judge or jury" }
        ],
        explanationEn: "Matching legal terminology.",
        explanationHi: "कानूनी शब्दों और उनकी सटीक परिभाषाओं का मिलान।",
        difficulty: "easy",
        skillTag: "LEGAL_DEFINITIONS"
      },
      {
        id: "day55_ex_015",
        type: "fill_blank",
        prompt: "An unwritten, spoken defamatory statement is 'slander', whereas a published, written defamatory statement is '_______'.",
        correctAnswer: "libel",
        explanationEn: "Written defamation is 'libel'; spoken defamation is 'slander'.",
        explanationHi: "लिखित या प्रकाशित मानहानि को 'libel' और मौखिक मानहानि को 'slander' कहते हैं।",
        difficulty: "easy",
        skillTag: "MEDIA_LAW"
      },
      {
        id: "day55_ex_016",
        type: "multiple_choice",
        prompt: "What is a 'Power of Attorney' (POA)?",
        options: [
          "A formal legal authorization giving a designated person the power to act on another's behalf",
          "A powerful battery used in a courtroom laptop",
          "A certificate given to the best lawyer in town",
          "An electric generator installed at a police station"
        ],
        correctAnswer: "A formal legal authorization giving a designated person the power to act on another's behalf",
        explanationEn: "Power of Attorney authorizes a representative to manage legal/financial affairs.",
        explanationHi: "किसी अन्य व्यक्ति को अपनी ओर से कानूनी या वित्तीय कार्य करने का अधिकार देने वाले पत्र को 'Power of Attorney' कहते हैं।",
        difficulty: "easy",
        skillTag: "LEGAL_INSTRUMENTS"
      },
      {
        id: "day55_ex_017",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'अनुबंध की शर्तों का उल्लंघन करने पर कंपनी पर जुर्माना लगाया जा सकता है।'",
        correctAnswer: "If the company breaches contract terms, penalties may be imposed.",
        acceptableAnswers: [
          "The company may be penalized for a breach of contract terms.",
          "Breaching the terms of the contract may result in heavy penalties for the company."
        ],
        explanationEn: "'If the company breaches contract terms, penalties may be imposed.'",
        explanationHi: "'Breaches contract terms / breach of contract' का सटीक अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day55_ex_018",
        type: "error_correction",
        prompt: "Correct the sentence: 'Pursuant with Section 5, we are terminating the lease.'",
        correctAnswer: "Pursuant to Section 5, we are terminating the lease.",
        acceptableAnswers: [
          "In accordance with Section 5, we are terminating the lease."
        ],
        explanationEn: "Collocation error: 'Pursuant **to**' (never '*pursuant with*'). Alternatively, use 'in accordance with'.",
        explanationHi: "'Pursuant' के बाद हमेशा 'to' आता है ('pursuant with' गलत है)।",
        difficulty: "medium",
        skillTag: "LEGAL_PREPOSITIONS"
      },
      {
        id: "day55_ex_019",
        type: "sentence_building",
        prompt: "Build an official notice: [gazette / the / notification / official / published / was / in / the]",
        correctAnswer: "The notification was published in the official gazette.",
        acceptableAnswers: [
          "In the official gazette, the notification was published."
        ],
        explanationEn: "Subject + Passive Verb + Prepositional Publication.",
        explanationHi: "सही वाक्य: The notification was published in the official gazette.",
        difficulty: "medium",
        skillTag: "SYNTAX_BUILDING"
      },
      {
        id: "day55_ex_020",
        type: "multiple_choice",
        prompt: "Why should you say 'Please sign this document' instead of 'Please sign on this document'?",
        options: [
          "Because 'sign' is a transitive verb that takes a direct object without the preposition 'on'",
          "Because 'sign' is a noun",
          "Because documents cannot be touched",
          "Because 'on' can only be used with tables"
        ],
        correctAnswer: "Because 'sign' is a transitive verb that takes a direct object without the preposition 'on'",
        explanationEn: "'Sign' is transitive: 'sign the letter/document'. Preposition 'on' is only used with the noun 'signature' ('put your signature on this document').",
        explanationHi: "'Sign' सकर्मक क्रिया है जो बिना 'on' के सीधे ऑब्जेक्ट लेती है ('sign this document')।",
        difficulty: "easy",
        skillTag: "GRAMMAR_THEORY"
      },
      {
        id: "day55_ex_021",
        type: "fill_blank",
        prompt: "You can track the transit status of your registered parcel using the 13-digit consignment _______ number.",
        correctAnswer: "tracking",
        explanationEn: "Consignment tracking number.",
        explanationHi: "पार्सल की स्थिति देखने के लिए 'tracking number' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "POSTAL_LOGISTICS"
      },
      {
        id: "day55_ex_022",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The jury delivered a unanimous verdict declaring the defendant innocent of all charges.'",
        correctAnswer: "जूरी ने प्रतिवादी को सभी आरोपों से निर्दोष घोषित करते हुए सर्वसम्मत फैसला सुनाया।",
        acceptableAnswers: [
          "जूरी ने एकमत से फैसला देते हुए आरोपी को सभी आरोपों से बरी कर दिया।"
        ],
        explanationEn: "'Unanimous verdict' = सर्वसम्मत फैसला.",
        explanationHi: "सटीक न्यायिक हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day55_ex_023",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nJournalist: 'Will the ministry issue a formal clarification regarding the press reports?'\nSpokesperson: 'Yes, an official press _______ will be released to all accredited media correspondents this afternoon.'",
        options: ["release", "subpoena", "overdraft", "turnstile"],
        correctAnswer: "release",
        explanationEn: "A press release is issued to media correspondents.",
        explanationHi: "मीडिया को जारी की जाने वाली आधिकारिक विज्ञप्ति को 'press release' कहते हैं।",
        difficulty: "easy",
        skillTag: "MEDIA_COMMUNICATIONS"
      },
      {
        id: "day55_ex_024",
        type: "error_correction",
        prompt: "Correct the sentence: 'He is making defamation on our company reputation.'",
        correctAnswer: "He is defaming our company's reputation.",
        acceptableAnswers: [
          "He is committing defamation against our company.",
          "His statements constitute defamation of our corporate reputation."
        ],
        explanationEn: "Use the verb 'defame' ('defaming our reputation') or noun 'constitutes defamation' (not '*making defamation*').",
        explanationHi: "'Making defamation' के स्थान पर 'defaming our reputation' या 'committing defamation' कहें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day55_ex_025",
        type: "speaking_pronunciation",
        prompt: "Read aloud with judicial precision: 'Pursuant to municipal bylaws, the plaintiff submitted a sworn affidavit notarized by a certified notary public.'",
        targetText: "Pursuant to municipal bylaws, the plaintiff submitted a sworn affidavit notarized by a certified notary public.",
        phoneticFocus: "Stress on /pəˈsjuː.ənt/, /ˈpleɪn.tɪf/, /ˌæf.ɪˈdeɪ.vɪt/, and /ˈnəʊ.tər.i/",
        explanationEn: "Master the rhythm and formal enunciation of legal declarations.",
        explanationHi: "कानूनी शब्दावली का स्पष्ट और औपचारिक उच्चारण।",
        difficulty: "medium",
        skillTag: "PRONUNCIATION_SPEAKING"
      },
      {
        id: "day55_ex_026",
        type: "fill_blank",
        prompt: "Failure to deliver the goods on time constitutes a material _______ of contract.",
        correctAnswer: "breach",
        acceptableAnswers: ["violation"],
        explanationEn: "'Material breach of contract' is a standard legal term.",
        explanationHi: "अनुबंध का गंभीर उल्लंघन 'material breach of contract' कहलाता है।",
        difficulty: "easy",
        skillTag: "CONTRACT_LAW"
      },
      {
        id: "day55_ex_027",
        type: "multiple_choice",
        prompt: "Which government document formally establishes a citizen's permanent residency in a specific state or province?",
        options: ["Domicile Certificate", "Boarding Pass", "Postal Receipt", "Customs Slip"],
        correctAnswer: "Domicile Certificate",
        explanationEn: "A Domicile Certificate proves legal permanent residence in a state/jurisdiction.",
        explanationHi: "स्थायी निवास का प्रमाण देने वाले आधिकारिक प्रमाण पत्र को 'Domicile Certificate' कहते हैं।",
        difficulty: "easy",
        skillTag: "CIVIC_DOCUMENTS"
      },
      {
        id: "day55_ex_028",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'नोटरी पब्लिक ने पहचान पत्र की जांच करने के बाद शपथ पत्र को सत्यापित किया।'",
        correctAnswer: "The notary public authenticated the affidavit after verifying identity documents.",
        acceptableAnswers: [
          "The notary public certified the affidavit after checking identity credentials.",
          "After verifying identity cards, the notary public notarized the affidavit."
        ],
        explanationEn: "'The notary public authenticated the affidavit after verifying identity documents.'",
        explanationHi: "'Notary public authenticated the affidavit' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day55_ex_029",
        type: "sentence_ordering",
        prompt: "Order the legal statement: [subpoena / the / witness / received / judicial / a]",
        correctAnswer: "The witness received a judicial subpoena.",
        acceptableAnswers: [
          "A judicial subpoena was received by the witness."
        ],
        explanationEn: "Subject + Verb + Direct Object.",
        explanationHi: "सही क्रम: The witness received a judicial subpoena.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day55_ex_030",
        type: "fill_blank",
        prompt: "The municipal authority launched an intensive _______ drive to eliminate open garbage dumps in the ward.",
        correctAnswer: "sanitation",
        acceptableAnswers: ["cleanliness"],
        explanationEn: "'Sanitation drive' refers to public hygiene operations.",
        explanationHi: "सार्वजनिक स्वच्छता अभियान को 'sanitation drive' कहते हैं।",
        difficulty: "easy",
        skillTag: "CIVIC_ADMINISTRATION"
      },
      {
        id: "day55_ex_031",
        type: "multiple_choice",
        prompt: "What does an 'Indemnity Clause' in a business contract provide?",
        options: [
          "Protection and financial compensation against potential losses, liabilities, or damages",
          "A free lunch for contract signatories",
          "Permission to play music inside an office",
          "A guarantee that no taxes will ever be paid"
        ],
        correctAnswer: "Protection and financial compensation against potential losses, liabilities, or damages",
        explanationEn: "An indemnity clause holds one party harmless against liabilities.",
        explanationHi: "नुकसान या देनदारियों की भरपाई की कानूनी गारंटी को 'Indemnity Clause' (क्षतिपूर्ति धारा) कहते हैं।",
        difficulty: "easy",
        skillTag: "CONTRACT_LAW"
      },
      {
        id: "day55_ex_032",
        type: "error_correction",
        prompt: "Correct the sentence: 'The lawyer told that court has no authority on this matter.'",
        correctAnswer: "The lawyer stated that the court has no jurisdiction over this matter.",
        acceptableAnswers: [
          "The attorney explained that the court lacks jurisdiction in this case."
        ],
        explanationEn: "Use precise legal terminology: 'has no jurisdiction over this matter' (not '*no authority on*').",
        explanationHi: "कानूनी अधिकार क्षेत्र के लिए 'lacks jurisdiction over this matter' कहें।",
        difficulty: "medium",
        skillTag: "LEGAL_COLLOCATIONS"
      },
      {
        id: "day55_ex_033",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The municipal corporation approved the commercial zoning permit for the new distribution warehouse.'",
        correctAnswer: "नगर निगम ने नए वितरण गोदाम के लिए वाणिज्यिक जोनिंग परमिट को मंजूरी दी।",
        acceptableAnswers: [
          "नगरपालिका ने नए वेयरहाउस के कमर्शियल जोनिंग परमिट को स्वीकृत किया।"
        ],
        explanationEn: "'Commercial zoning permit' = वाणिज्यिक जोनिंग परमिट.",
        explanationHi: "सटीक नागरिक प्रशासनिक अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day55_ex_034",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nPostmaster: 'Would you like insurance coverage for this parcel?'\nSender: 'Yes, please insure this _______ up to five hundred dollars against transit damage.'",
        options: ["consignment", "verdict", "affidavit", "plaintiff"],
        correctAnswer: "consignment",
        explanationEn: "A parcel sent via postal logistics is a consignment.",
        explanationHi: "डाक द्वारा भेजे जाने वाले पार्सल को 'consignment' कहते हैं।",
        difficulty: "easy",
        skillTag: "POSTAL_LOGISTICS"
      },
      {
        id: "day55_ex_035",
        type: "fill_blank",
        prompt: "A newspaper article expressing the formal, institutional opinion of the editor-in-chief is an _______.",
        correctAnswer: "editorial",
        explanationEn: "An editorial expresses the official viewpoint of the publication's editorial board.",
        explanationHi: "संपादक के आधिकारिक विचार वाले लेख को 'editorial' (संपादकीय) कहते हैं।",
        difficulty: "easy",
        skillTag: "JOURNALISM"
      },
      {
        id: "day55_ex_036",
        type: "matching",
        prompt: "Match the public communication term with its definition:",
        pairs: [
          { left: "Press Release", right: "Official written statement distributed to news media" },
          { left: "Investigative Journalism", right: "Deep reporting exposing systemic issues or wrongdoing" },
          { left: "Broadcast", right: "Transmission of television or radio programs to the public" },
          { left: "Libel", right: "Defamation committed in published written or visual form" }
        ],
        explanationEn: "Matching media terminology.",
        explanationHi: "मीडिया शब्दावली और उनकी परिभाषाओं का सही मिलान।",
        difficulty: "easy",
        skillTag: "MEDIA_TERMS"
      },
      {
        id: "day55_ex_037",
        type: "error_correction",
        prompt: "Correct the sentence: 'Please sign on this affidavit paper with blue pen.'",
        correctAnswer: "Please sign this affidavit with a blue pen.",
        acceptableAnswers: [
          "Please sign this affidavit using blue ink.",
          "Please put your signature on this affidavit in blue ink."
        ],
        explanationEn: "Say 'sign this affidavit' (not '*sign on*') and eliminate redundant '*paper*'.",
        explanationHi: "'Sign this affidavit' कहें ('sign on' और 'affidavit paper' गलत है)।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day55_ex_038",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The state government published the amended environmental protection bylaws in the official gazette.'",
        correctAnswer: "The state government published the amended environmental protection bylaws in the official gazette.",
        explanationEn: "'The state government published the amended environmental protection bylaws in the official gazette.'",
        explanationHi: "राजपत्र अधिसूचना वाक्य का श्रुतलेख अभ्यास।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day55_ex_039",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'गवाह ने अदालत में पेश होने के लिए न्यायिक समन (Subpoena) प्राप्त किया।'",
        correctAnswer: "The witness received a judicial subpoena to appear in court.",
        acceptableAnswers: [
          "The witness was served with a judicial subpoena to testify in court.",
          "A court subpoena was issued commanding the witness to appear."
        ],
        explanationEn: "'The witness received a judicial subpoena to appear in court.'",
        explanationHi: "'Received a judicial subpoena to appear in court' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day55_ex_040",
        type: "sentence_building",
        prompt: "Build a civic notice: [redressal / citizens / fast-track / demand / grievance]",
        correctAnswer: "Citizens demand fast-track grievance redressal.",
        acceptableAnswers: [
          "Fast-track grievance redressal is demanded by citizens."
        ],
        explanationEn: "Subject + Verb + Compound Object.",
        explanationHi: "सही वाक्य: Citizens demand fast-track grievance redressal.",
        difficulty: "medium",
        skillTag: "SYNTAX_BUILDING"
      },
      {
        id: "day55_ex_041",
        type: "multiple_choice",
        prompt: "What is the difference between 'Libel' and 'Slander'?",
        options: [
          "Libel is permanent/published written or broadcast defamation, whereas Slander is transitory spoken defamation",
          "Libel is a musical instrument, while Slander is a type of car",
          "There is no legal difference whatsoever",
          "Libel applies only to animals, while slander applies to humans"
        ],
        correctAnswer: "Libel is permanent/published written or broadcast defamation, whereas Slander is transitory spoken defamation",
        explanationEn: "Libel = written/published defamation; Slander = spoken defamation.",
        explanationHi: "लिखित या प्रकाशित मानहानि को 'Libel' कहते हैं, जबकि मौखिक या बोली गई मानहानि को 'Slander' कहते हैं।",
        difficulty: "easy",
        skillTag: "LEGAL_DISTINCTIONS"
      },
      {
        id: "day55_ex_042",
        type: "fill_blank",
        prompt: "The landlord appointed a legal _______ with power of attorney to collect monthly rents.",
        correctAnswer: "representative",
        acceptableAnswers: ["attorney", "agent"],
        explanationEn: "A legal representative or attorney-in-fact.",
        explanationHi: "कानूनी प्रतिनिधि या मुख्तार।",
        difficulty: "easy",
        skillTag: "LEGAL_ROLES"
      },
      {
        id: "day55_ex_043",
        type: "error_correction",
        prompt: "Correct the sentence: 'The news channel did defamation against the minister.'",
        correctAnswer: "The news channel defamed the minister.",
        acceptableAnswers: [
          "The news channel committed defamation against the minister.",
          "The news channel broadcast defamatory statements about the minister."
        ],
        explanationEn: "Use the transitive verb 'defamed the minister' (not '*did defamation against*').",
        explanationHi: "'Did defamation' के स्थान पर 'defamed the minister' या 'broadcast defamatory statements' कहें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day55_ex_044",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'All official government notifications must be published in the state gazette to acquire legal validity.'",
        correctAnswer: "कानूनी वैधता प्राप्त करने के लिए सभी आधिकारिक सरकारी अधिसूचनाओं को राज्य के राजपत्र में प्रकाशित किया जाना चाहिए।",
        acceptableAnswers: [
          "सरकारी अधिसूचनाओं को वैध बनाने हेतु राजपत्र (गज़ट) में छपना आवश्यक है।"
        ],
        explanationEn: "'State gazette to acquire legal validity' = कानूनी वैधता प्राप्त करने के लिए राज्य के राजपत्र में.",
        explanationHi: "सटीक राजपत्र और विधिक हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day55_ex_045",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nDefendant: 'Can this lawsuit be resolved outside of court?'\nLegal Counsel: 'Yes, we can propose an out-of-court _______ with the plaintiff's lawyers.'",
        options: ["settlement", "carousel", "subpoena", "consignment"],
        correctAnswer: "settlement",
        explanationEn: "An out-of-court settlement resolves litigation without a trial verdict.",
        explanationHi: "अदालत के बाहर समझौते को 'out-of-court settlement' कहते हैं।",
        difficulty: "easy",
        skillTag: "LEGAL_RESOLUTIONS"
      },
      {
        id: "day55_ex_046",
        type: "fill_blank",
        prompt: "The jury reached a unanimous _______ of guilty after reviewing all forensic evidence.",
        correctAnswer: "verdict",
        explanationEn: "A jury reaches or delivers a 'verdict'.",
        explanationHi: "जूरी द्वारा दिए गए अंतिम निर्णय को 'verdict' (फैसला) कहते हैं।",
        difficulty: "easy",
        skillTag: "LEGAL_TERMS"
      },
      {
        id: "day55_ex_047",
        type: "multiple_choice",
        prompt: "Why is 'The landlord did a case on me' considered substandard English?",
        options: [
          "Because English requires specific collocations like 'filed a lawsuit against me' or 'initiated legal action against me'",
          "Because 'case' is not an English word",
          "Because landlords cannot go to court",
          "Because 'did' can only be used in sports"
        ],
        correctAnswer: "Because English requires specific collocations like 'filed a lawsuit against me' or 'initiated legal action against me'",
        explanationEn: "Collocations: 'file a lawsuit against', 'sue', 'take legal action against'.",
        explanationHi: "अंग्रेजी में 'did case on' नहीं कहा जाता; 'filed a lawsuit against me' या 'sued me' कहा जाता है।",
        difficulty: "easy",
        skillTag: "COLLOCATIONS"
      },
      {
        id: "day55_ex_048",
        type: "error_correction",
        prompt: "Correct the sentence: 'According with the contract, delivery must happen today.'",
        correctAnswer: "According to the contract, delivery must take place today.",
        acceptableAnswers: [
          "In accordance with the contract, delivery must occur today."
        ],
        explanationEn: "Say 'According **to**' or 'In accordance **with**' (never '*according with*').",
        explanationHi: "'According to' या 'In accordance with' सही है ('according with' गलत है)।",
        difficulty: "easy",
        skillTag: "PREPOSITIONAL_SYNTAX"
      },
      {
        id: "day55_ex_049",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'वादी ने अनुबंध के उल्लंघन के लिए मुआवजे की मांग करते हुए मुकदमा दायर किया।'",
        correctAnswer: "The plaintiff filed a lawsuit claiming damages for breach of contract.",
        acceptableAnswers: [
          "The plaintiff initiated legal action demanding compensation for breach of contract.",
          "The plaintiff sued for compensation due to a contract breach."
        ],
        explanationEn: "'The plaintiff filed a lawsuit claiming damages for breach of contract.'",
        explanationHi: "'Filed a lawsuit claiming damages for breach of contract' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day55_ex_050",
        type: "sentence_ordering",
        prompt: "Order the legal clause: [party / indemnify / the / other / agrees to / each]",
        correctAnswer: "Each party agrees to indemnify the other.",
        acceptableAnswers: [
          "The other party agrees to indemnify each."
        ],
        explanationEn: "Subject + Verb + Infinitive + Object.",
        explanationHi: "सही क्रम: Each party agrees to indemnify the other.",
        difficulty: "medium",
        skillTag: "CONTRACT_SYNTAX"
      },
      {
        id: "day55_ex_051",
        type: "fill_blank",
        prompt: "The municipal commissioner instructed the health department to inspect all local restaurants for food _______ standards.",
        correctAnswer: "safety",
        acceptableAnswers: ["hygiene", "sanitation"],
        explanationEn: "'Food safety / hygiene / sanitation' standards.",
        explanationHi: "खाद्य सुरक्षा और स्वच्छता मानक।",
        difficulty: "easy",
        skillTag: "CIVIC_REGULATION"
      },
      {
        id: "day55_ex_052",
        type: "multiple_choice",
        prompt: "Which postal service ensures that the sender receives an official signed physical card confirming parcel delivery?",
        options: [
          "Registered Post with Acknowledgment Due (AD)",
          "Unstamped ordinary letter",
          "Printed newspaper flyer",
          "Telegram"
        ],
        correctAnswer: "Registered Post with Acknowledgment Due (AD)",
        explanationEn: "Registered post with AD provides physical receipt confirmation.",
        explanationHi: "पंजीकृत डाक पावती (Registered Post with AD) में प्राप्तकर्ता के हस्ताक्षर वाली रसीद प्रेषक को मिलती है।",
        difficulty: "easy",
        skillTag: "POSTAL_SERVICES"
      },
      {
        id: "day55_ex_053",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'A sworn affidavit notarized by an authorized official is mandatory for obtaining a duplicate passport.'",
        correctAnswer: "डुप्लिकेट पासपोर्ट प्राप्त करने के लिए एक अधिकृत अधिकारी द्वारा नोटरीकृत शपथ पत्र अनिवार्य है।",
        acceptableAnswers: [
          "दूसरा पासपोर्ट लेने के लिए नोटरी से प्रमाणित शपथ पत्र जरूरी है।"
        ],
        explanationEn: "'Sworn affidavit notarized by an authorized official' = अधिकृत अधिकारी द्वारा नोटरीकृत शपथ पत्र.",
        explanationHi: "सटीक प्रशासनिक और कानूनी हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day55_ex_054",
        type: "active_recall",
        prompt: "Explain why saying 'He did a case on me' and 'Sign on this paper' are grammatically improper, and provide the correct professional English alternatives.",
        correctAnswer: "1. 'He did a case on me' is an unnatural literal translation of Hindi 'उसने मुझ पर केस कर दिया'. Professional English requires: 'He filed a lawsuit against me' or 'He sued me'.\n2. 'Sign on this paper' incorrectly treats 'sign' as intransitive. 'Sign' is transitive and directly takes the document object: 'Please sign this paper/document'. If using 'on', use the noun 'signature': 'Put your signature on this paper'.",
        acceptableAnswers: [
          "1. Use 'filed a lawsuit against me' instead of 'did a case on me'. 2. Use 'sign this document' (transitive) instead of 'sign on this paper'."
        ],
        explanationEn: "Deep diagnostic mastery of legal collocations and transitive syntax.",
        explanationHi: "1. 'Did a case on me' गलत है, 'filed a lawsuit against me' कहें। 2. 'Sign on' गलत है, 'sign this document' कहें।",
        difficulty: "hard",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day55_ex_055",
        type: "error_correction",
        prompt: "Correct the sentence: 'The court gave verdict that defendant did breach of contract.'",
        correctAnswer: "The court rendered a verdict that the defendant breached the contract.",
        acceptableAnswers: [
          "The court delivered a verdict finding the defendant guilty of a breach of contract.",
          "The judge rendered a verdict establishing that the defendant breached the agreement."
        ],
        explanationEn: "Courts 'render' or 'deliver' verdicts (not '*give verdict*') and defendants 'breached the contract' (not '*did breach of contract*').",
        explanationHi: "अदालत फैसला सुनाने के लिए 'rendered/delivered a verdict' और उल्लंघन के लिए 'breached the contract' का प्रयोग करती है।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day55_diag_001",
        title: "Controlled Dialogue: Postal Counter Consignment Dispatch",
        context: "A paralegal dispatches confidential legal notices via registered post with acknowledgment cards.",
        characters: ["Postal Officer (Mr. Sharma)", "Paralegal (Kavita)"],
        lines: [
          { speaker: "Paralegal (Kavita)", text: "Good afternoon. I need to dispatch three confidential legal notices via registered post with acknowledgment due.", hindi: "शुभ दोपहर। मुझे पावती सहित पंजीकृत डाक (Registered Post with AD) द्वारा तीन गोपनीय कानूनी नोटिस भेजने की आवश्यकता है।" },
          { speaker: "Postal Officer (Mr. Sharma)", text: "Good afternoon. Please ensure that the recipient addresses are written clearly and that the green acknowledgment cards are securely affixed to each envelope.", hindi: "शुभ दोपहर। कृपया सुनिश्चित करें कि प्राप्तकर्ता के पते स्पष्ट रूप से लिखे गए हैं और हरे रंग के पावती कार्ड प्रत्येक लिफाफे पर सुरक्षित रूप से चिपकाए गए हैं।" },
          { speaker: "Paralegal (Kavita)", text: "Yes, all three acknowledgment cards are pre-addressed and stamped with our law firm's return details.", hindi: "हाँ, तीनों पावती कार्डों पर हमारी लॉ फर्म का वापसी पता और मुहर पहले से लगी हुई है।" },
          { speaker: "Postal Officer (Mr. Sharma)", text: "Excellent. Here are your receipts with the thirteen-digit consignment tracking numbers. You can monitor delivery confirmation online.", hindi: "बहुत अच्छा। ये तेरह अंकों के कंसाइनमेंट ट्रैकिंग नंबर वाली आपकी रसीदें हैं। आप ऑनलाइन डिलीवरी पुष्टिकरण की निगरानी कर सकते हैं।" },
          { speaker: "Paralegal (Kavita)", text: "Thank you. We will track the transit progress and retain these receipts for our court filings.", hindi: "धन्यवाद। हम पारगमन प्रगति को ट्रैक करेंगे और इन रसीदों को अपनी अदालती फाइलिंग के लिए सुरक्षित रखेंगे।" }
        ]
      },
      {
        id: "day55_diag_002",
        title: "Guided Dialogue: Submitting a Municipal Civic Grievance Petition",
        context: "A community representative meets the municipal grievance officer to resolve neighborhood sanitation concerns.",
        characters: ["Grievance Officer (Ms. Iyer)", "Community Representative (Rahul)"],
        lines: [
          { speaker: "Community Representative (Rahul)", text: "Good morning, Ms. Iyer. On behalf of the Green Park Residents Association, I am submitting a formal grievance petition regarding sewage overflows in Ward 9.", hindi: "शुभ प्रभात, सुश्री अय्यर। ग्रीन पार्क रेजिडेंट्स एसोसिएशन की ओर से, मैं वार्ड 9 में सीवेज ओवरफ्लो के संबंध में एक औपचारिक शिकायत याचिका प्रस्तुत कर रहा हूँ।" },
          { speaker: "Grievance Officer (Ms. Iyer)", text: "Good morning, Rahul. Let me review your petition and photographic evidence. Has this matter been formally logged on the municipal online grievance redressal portal?", hindi: "शुभ प्रभात, राहुल। मुझे आपकी याचिका और फोटोग्राफिक साक्ष्य की समीक्षा करने दें। क्या यह मामला औपचारिक रूप से नगरपालिका ऑनलाइन शिकायत निवारण पोर्टल पर दर्ज किया गया है?" },
          { speaker: "Community Representative (Rahul)", text: "Yes, ticket reference #GR-8841 was registered last Monday, but no sanitary engineering team has been deployed to inspect the site.", hindi: "हाँ, टिकट संदर्भ #GR-8841 पिछले सोमवार को दर्ज किया गया था, लेकिन स्थल का निरीक्षण करने के लिए कोई सेनेटरी इंजीनियरिंग टीम तैनात नहीं की गई है।" },
          { speaker: "Grievance Officer (Ms. Iyer)", text: "I acknowledge the urgency of this civic health hazard. I am issuing an expedited work order to the public works division immediately.", hindi: "मैं इस नागरिक स्वास्थ्य खतरे की तात्कालिकता को स्वीकार करती हूँ। मैं तुरंत लोक निर्माण विभाग को एक त्वरित कार्य आदेश जारी कर रही हूँ।" },
          { speaker: "Community Representative (Rahul)", text: "Thank you, Ms. Iyer. We appreciate your proactive intervention in restoring community sanitation standards.", hindi: "धन्यवाद, सुश्री अय्यर। सामुदायिक स्वच्छता मानकों को बहाल करने में आपके सक्रिय हस्तक्षेप की हम सराहना करते हैं।" }
        ]
      },
      {
        id: "day55_diag_003",
        title: "Free Problem-Solving Dialogue: Legal Consultation on Breach of Contract and Defamation",
        context: "A corporate CEO consults senior litigation counsel regarding defamatory media broadcasts and contract violations by an ex-partner.",
        characters: ["Senior Litigation Counsel (Advocate Roy)", "Corporate CEO (Tanvi)"],
        lines: [
          { speaker: "Corporate CEO (Tanvi)", text: "Advocate Roy, our former joint-venture partner launched an aggressive smear campaign on broadcast media and unilaterally terminated our supply agreement.", hindi: "अधिवक्ता रॉय, हमारे पूर्व संयुक्त उद्यम साझेदार ने प्रसारण मीडिया पर एक आक्रामक दुष्प्रचार अभियान शुरू किया और हमारे आपूर्ति समझौते को एकतरफा समाप्त कर दिया।" },
          { speaker: "Senior Litigation Counsel (Advocate Roy)", text: "Tanvi, we must approach this along two distinct legal tracks: first, a civil lawsuit for material breach of contract, and second, an actionable defamation tort.", hindi: "तन्वी, हमें इसे दो अलग-अलग कानूनी रास्तों से देखना चाहिए: पहला, अनुबंध के गंभीर उल्लंघन के लिए एक दीवानी मुकदमा, और दूसरा, कार्रवाई योग्य मानहानि का दीवानी दावा।" },
          { speaker: "Corporate CEO (Tanvi)", text: "Does the commercial agreement contain an enforceable indemnity clause and an agreed dispute resolution mechanism?", hindi: "क्या वाणिज्यिक समझौते में एक लागू करने योग्य क्षतिपूर्ति धारा और एक सहमत विवाद समाधान तंत्र शामिल है?" },
          { speaker: "Senior Litigation Counsel (Advocate Roy)", text: "Yes. Clause 18 stipulates that the commercial court in Delhi holds exclusive territorial jurisdiction, and provides for full financial indemnity against consequential damages.", hindi: "हाँ। धारा 18 यह निर्धारित करती है कि दिल्ली की वाणिज्यिक अदालत के पास विशेष क्षेत्रीय अधिकार क्षेत्र है, और परिणामी नुकसान के खिलाफ पूर्ण वित्तीय क्षतिपूर्ति का प्रावधान है।" },
          { speaker: "Corporate CEO (Tanvi)", text: "Let us draft a comprehensive cease-and-desist notice immediately and file the civil suit before the end of the week.", hindi: "आइए तुरंत एक व्यापक रोक (Cease-and-Desist) नोटिस का मसौदा तैयार करें और सप्ताह के अंत से पहले दीवानी मुकदमा दायर करें।" },
          { speaker: "Senior Litigation Counsel (Advocate Roy)", text: "Agreed. I will prepare the sworn affidavits and petition dossier for your signature this afternoon.", hindi: "सहमत। मैं आज दोपहर आपके हस्ताक्षर के लिए शपथ पत्र और याचिका फाइल तैयार करूँगा।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are an executive presenting a formal briefing to your board of directors regarding a municipal zoning dispute and associated media defamation. Outline the legal steps initiated by your legal counsel.",
      prompts: [
        "State the nature of the municipal zoning permit controversy.",
        "Highlight that your legal counsel has filed a formal petition in the court of competent jurisdiction.",
        "Mention that sworn affidavits and certified notary documents have been submitted.",
        "Explain that an official press release was issued to media correspondents to refute defamatory broadcasts."
      ],
      targetExpressions: [
        "Pursuant to municipal zoning regulations...",
        "Our legal counsel has filed a lawsuit in the court of competent jurisdiction.",
        "We submitted a sworn affidavit notarized by a certified notary public.",
        "An official press release was broadcast to correct defamatory misrepresentations.",
        "We are seeking full indemnity for commercial damages."
      ]
    },
    roleplay: {
      scenario: "Roleplay a consultation between a citizen submitting a sworn domicile affidavit at a notary public's office and the notary verifying identity documentation.",
      roleA: "Citizen: Explaining the requirement for a verified domicile affidavit for civil service applications, presenting utility bills and government IDs.",
      roleB: "Notary Public: Reviewing credentials, administering the verbal oath, witnessing the physical signature, and applying the official legal seal.",
      sampleDialogue: "Citizen: 'I need to execute a sworn affidavit to establish legal domicile for my state examination dossier.' | Notary: 'Please present your original identity cards and sign this affidavit in my physical presence so I may attach the notary seal.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day55_bm_001",
        title: "Drafting a Formal Municipal Grievance and Sanitation Petition",
        prompt: "Draft a formal, structured 5–6 sentence civic grievance petition to a Municipal Commissioner demanding immediate intervention regarding hazardous public sanitation conditions and drainage blockages in your ward.",
        sampleAnswerEn: "To: The Municipal Commissioner, Municipal Corporation of Greater Mumbai\nSubject: Urgent Petition for Grievance Redressal — Hazardous Drainage Overflow in Ward 12\n\nRespected Sir/Madam,\n\nI am writing on behalf of the residents of Ward 12 to lodge a formal civic grievance regarding chronic drainage blockages and open sewage overflow along MG Road. Pursuant to municipal public health codes, the municipal corporation is statutorily obligated to maintain functional stormwater drainage and ensure basic urban sanitation. Despite multiple complaints registered under ticket reference #MGM-4402, no sanitation squad has visited the affected area, creating an acute public health hazard ahead of the monsoon season. We urgently request the immediate deployment of mechanized desilting machinery to clear the arterial storm drains. Furthermore, we request a formal written status report regarding the permanent infrastructure upgrades planned for our sector.\n\nRespectfully submitted,\nVivek Sharma, General Secretary, Ward 12 Civic Welfare Association",
        sampleAnswerHi: "प्रति: नगर निगम आयुक्त, बृहन्मुंबई नगर निगम\nविषय: शिकायत निवारण हेतु तत्काल याचिका — वार्ड 12 में खतरनाक जल निकासी ओवरफ्लो\n\nआदरणीय महोदय/महोदया,\n\nमैं एमजी रोड पर पुरानी जल निकासी रुकावटों और खुले सीवेज ओवरफ्लो के संबंध में एक औपचारिक नागरिक शिकायत दर्ज करने के लिए वार्ड 12 के निवासियों की ओर से लिख रहा हूँ। नगरपालिका सार्वजनिक स्वास्थ्य संहिताओं के अनुसार, नगर निगम कार्यात्मक वर्षा जल निकासी बनाए रखने और बुनियादी शहरी स्वच्छता सुनिश्चित करने के लिए वैधानिक रूप से बाध्य है। टिकट संदर्भ #MGM-4402 के तहत दर्ज कई शिकायतों के बावजूद, किसी भी स्वच्छता दल ने प्रभावित क्षेत्र का दौरा नहीं किया है, जिससे मानसून के मौसम से पहले एक गंभीर सार्वजनिक स्वास्थ्य खतरा पैदा हो गया है। हम मुख्य नालों को साफ करने के लिए मशीनीकृत गाद निकालने वाली मशीनरी की तत्काल तैनाती का अनुरोध करते हैं। इसके अलावा, हम अपने क्षेत्र के लिए नियोजित स्थायी बुनियादी ढांचे के उन्नयन के संबंध में एक औपचारिक लिखित स्थिति रिपोर्ट का अनुरोध करते हैं।\n\nसादर प्रेषित,\nविवेक शर्मा, महासचिव, वार्ड 12 नागरिक कल्याण संघ",
        evaluationCriteria: "Exemplary civic administrative register, precise legal/municipal phrasing ('pursuant to municipal public health codes', 'statutorily obligated', 'grievance redressal'), total absence of Indian English errors."
      },
      {
        id: "day55_bm_002",
        title: "Formal Legal Notice for Breach of Contract and Defamation",
        prompt: "Write a 5–6 sentence formal legal notice from an advocate to a commercial counterparty demanding cessation of defamatory statements and remediation of a material breach of contract.",
        sampleAnswerEn: "LEGAL NOTICE — BY REGISTERED POST WITH ACKNOWLEDGMENT DUE\nTo: Apex Logistics Private Limited | Date: November 12th\n\nUnder instructions from and on behalf of our client, Solis Technologies Limited, we hereby serve you with this formal Legal Notice. Pursuant to the Master Service Agreement executed on January 15th, your company was contractually obligated to deliver mission-critical software architecture by October 31st. Your unilateral failure to perform these deliverables constitutes a material breach of contract under Section 12 of the agreement. Furthermore, your recent public statements broadcast on digital media platforms constitute actionable defamation, causing severe reputational and commercial damage to our client. You are hereby called upon to cease and desist from publishing defamatory remarks and to remit full contractual indemnity of $150,000 within fourteen days. In the event of non-compliance, our client has instructed us to initiate civil litigation and criminal defamation proceedings in the court of competent jurisdiction.\n\nAdvocate R. K. Nambiar, Supreme Court Bar Advocate",
        sampleAnswerHi: "कानूनी नोटिस — पावती सहित पंजीकृत डाक द्वारा\nप्रति: एपेक्स लॉजिस्टिक्स प्राइवेट लिमिटेड | दिनांक: 12 नवंबर\n\nहमारे मुवक्किल, सोलिस टेक्नोलॉजीज लिमिटेड के निर्देश पर और उनकी ओर से, हम आपको यह औपचारिक कानूनी नोटिस दे रहे हैं। 15 जनवरी को निष्पादित मास्टर सर्विस एग्रीमेंट के अनुसार, आपकी कंपनी 31 अक्टूबर तक मिशन-महत्वपूर्ण सॉफ्टवेयर आर्किटेक्चर देने के लिए संविदात्मक रूप से बाध्य थी। इन अनुबंधों को पूरा करने में आपकी एकतरफा विफलता समझौते की धारा 12 के तहत अनुबंध का एक गंभीर उल्लंघन है। इसके अलावा, डिजिटल मीडिया प्लेटफॉर्म पर प्रसारित आपके हालिया सार्वजनिक बयान कार्रवाई योग्य मानहानि हैं, जिससे हमारे मुवक्किल को गंभीर प्रतिष्ठा और व्यावसायिक नुकसान हुआ है। आपको एतद्द्वारा मानहानिकारक टिप्पणियां प्रकाशित करने से रोकने और चौदह दिनों के भीतर $150,000 की पूर्ण संविदात्मक क्षतिपूर्ति भेजने का आह्वान किया जाता है। गैर-अनुपालन की स्थिति में, हमारे मुवक्किल ने हमें सक्षम अधिकार क्षेत्र की अदालत में दीवानी मुकदमेबाजी और आपराधिक मानहानि की कार्यवाही शुरू करने का निर्देश दिया है।\n\nअधिवक्ता आर. के. नांबियार, सुप्रीम कोर्ट बार अधिवक्ता",
        evaluationCriteria: "Flawless jurisprudence register, mastery of contractual terminology ('material breach of contract', 'actionable defamation', 'indemnity', 'cease and desist', 'jurisdiction'), zero syntactic flaws."
      },
      {
        id: "day55_bm_003",
        title: "Postal Logistics and Legal Evidence Synthesis",
        prompt: "Construct a 5–6 sentence analytical evidentiary memo verifying that legal court notices were lawfully served via registered express postal dispatch with certified delivery receipts.",
        sampleAnswerEn: "This evidentiary memorandum confirms that the statutory legal notices were lawfully dispatched to all three named defendants on October 20th. Each dossier was transmitted via certified registered express mail with individual thirteen-digit consignment tracking barcodes and physical acknowledgment cards attached. Real-time postal logs verify that the consignments were successfully delivered and accepted by authorized corporate signatories on October 23rd. The physical acknowledgment cards, bearing the recipients' validated date stamps and signatures, have been returned by the postal service and annexed to our court petition as Exhibit B. This verified chain of postal custody establishes incontrovertible proof of service in full compliance with civil procedure rules.",
        sampleAnswerHi: "यह साक्ष्य ज्ञापन पुष्टि करता है कि 20 अक्टूबर को तीनों नामित प्रतिवादियों को वैधानिक कानूनी नोटिस कानूनी रूप से भेजे गए थे। प्रत्येक फाइल को अलग-अलग तेरह अंकों के कंसाइनमेंट ट्रैकिंग बारकोड और भौतिक पावती कार्ड के साथ प्रमाणित पंजीकृत एक्सप्रेस मेल के माध्यम से भेजा गया था। वास्तविक समय के डाक रिकॉर्ड सत्यापित करते हैं कि 23 अक्टूबर को अधिकृत कॉर्पोरेट हस्ताक्षरकर्ताओं द्वारा पार्सल सफलतापूर्वक वितरित और स्वीकार किए गए थे। प्राप्तकर्ताओं के मान्य तिथि टिकटों और हस्ताक्षरों वाले भौतिक पावती कार्ड डाक सेवा द्वारा वापस कर दिए गए हैं और हमारे अदालती आवेदन में प्रदर्श बी (Exhibit B) के रूप में संलग्न किए गए हैं। डाक हिरासत की यह सत्यापित श्रृंखला नागरिक प्रक्रिया नियमों के पूर्ण अनुपालन में कानूनी सूचना की निर्विवाद पुष्टि स्थापित करती है।",
        evaluationCriteria: "Exceptional legal and logistics synthesis, impeccable terminology ('proof of service', 'chain of custody', 'consignment tracking', 'civil procedure rules'), zero grammatical errors."
      }
    ]
  },
  review: {
    quickRecall: [
      {
        q: "Why is 'Please sign on this document' grammatically incorrect?",
        a: "'Sign' is a transitive verb that directly takes the object without the preposition 'on': 'Please sign this document'. Preposition 'on' is used with the noun 'signature': 'Please put your signature on this document'."
      },
      {
        q: "What is the difference between a 'Plaintiff' and a 'Defendant'?",
        a: "The plaintiff is the person or entity who initiates a legal lawsuit in court; the defendant is the party being sued or accused."
      },
      {
        q: "What is an 'Affidavit'?",
        a: "A written statement of facts sworn under oath before an authorized official such as a notary public."
      },
      {
        q: "What is the legal difference between 'Libel' and 'Slander'?",
        a: "Libel is defamation published in permanent written, printed, or broadcast form; Slander is defamation spoken orally in transitory form."
      },
      {
        q: "What does 'Breach of Contract' mean?",
        a: "The failure of a party to perform any promise, condition, or obligation stipulated in a legally binding contract."
      }
    ],
    spacedTips: [
      "Never say '*he did case on me*'; always use 'he filed a lawsuit against me' or 'he sued me'.",
      "For official complaints, say 'file a formal police report' or 'lodge a complaint' (not '*do one complaint*').",
      "In formal legal and civic writing, standard formulas like 'pursuant to' and 'in accordance with' establish high-level professional authority."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day55.js'), `export const day55 = ${JSON.stringify(day55, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day55.js with 55 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks");
