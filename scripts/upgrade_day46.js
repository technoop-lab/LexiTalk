import fs from 'fs';
import path from 'path';

// Day 46: Pharmacy, Diagnostics & Medical Specialists
const day46 = {
  dayNumber: 46,
  id: "day_46",
  titleEn: "Pharmacy, Diagnostics & Medical Specialists",
  titleHi: "फार्मेसी, नैदानिक परीक्षण एवं विशेषज्ञ चिकित्सक",
  cefr: "A2.2",
  estMinutes: 60,
  prerequisites: "Day 45 Mastery (Symptom Vocabulary & Clinical Inquiries)",
  objectivesEn: [
    "Identify medical specialists accurately: cardiologist, dermatologist, neurologist, orthopedist, pediatrician, ENT specialist (otolaryngologist), and ophthalmologist.",
    "Navigate pharmacy interactions: prescription fulfillment, over-the-counter (OTC) drugs, generic substitutes, dosage frequencies, and expiration dates.",
    "Interpret diagnostic procedures and lab reports: MRI, CT scan, ultrasound, biopsy, blood lipid profile, pathology, and endoscopy.",
    "Master dosage and administration terminology: topical ointments, oral suspensions, capsules, sublingual tablets, fasting guidelines, and contraindications.",
    "Correct common Indian English medical errors such as '*eating medicine*', '*child specialist*', '*eye specialist*', and '*chemist shop*' nuances."
  ],
  objectivesHi: [
    "चिकित्सा विशेषज्ञों (Cardiologist, Dermatologist, Neurologist, Orthopedist, Pediatrician, ENT specialist, Ophthalmologist) के नाम और कार्य क्षेत्र समझना।",
    "फार्मेसी में पर्चे की दवाइयां (Prescription drugs), बिना पर्चे की दवाइयां (OTC), जेनेरिक विकल्प, खुराक (Dosage) और एक्सपायरी पर संवाद करना।",
    "डायग्नोस्टिक जांच और लैब रिपोर्ट (MRI, CT Scan, Ultrasound, Biopsy, Lipid Profile, Pathology, Endoscopy) को समझना और चर्चा करना।",
    "दवा लेने के निर्देश (त्वचा पर लगाने वाली Ointment, सिरप/सस्पेंशन, कैप्सूल, खाली पेट/भरे पेट) में पूर्ण स्पष्टता प्राप्त करना।",
    "भारतीय अंग्रेज़ी की आदतों ('eating medicine', 'child specialist', 'eye specialist') को मानक अंतर्राष्ट्रीय शब्दों से बदलना।"
  ],
  teach: {
    hindiExplanation: `डे 46 में हम चिकित्सा विशेषज्ञताओं (Medical Specialists), फार्मेसी संवाद (Pharmacy Interactions) और नैदानिक जांच (Diagnostics) की शब्दावली व व्याकरण में निपुण बनेंगे।

1. **विशेषज्ञ चिकित्सक (Medical Specialists)**:
   - **Cardiologist**: हृदय रोग विशेषज्ञ (Heart specialist).
   - **Dermatologist**: त्वचा रोग विशेषज्ञ (Skin specialist).
   - **Pediatrician**: बाल रोग विशेषज्ञ (भारतीय बोलचाल में अक्सर 'Child specialist' कहा जाता है; मानक शब्द Pediatrician है).
   - **Ophthalmologist**: नेत्र रोग विशेषज्ञ / आंखों के सर्जन (सामान्य बोलचाल: Eye doctor / Ophthalmologist).
   - **ENT Specialist (Otolaryngologist)**: कान, नाक और गले का विशेषज्ञ (Ear, Nose & Throat).
   - **Orthopedic Surgeon / Orthopedist**: हड्डियों और जोड़ों का विशेषज्ञ।
   - **Neurologist**: तंत्रिका तंत्र और मस्तिष्क का विशेषज्ञ।

2. **फार्मेसी एवं दवाइयां (Pharmacy & Medications)**:
   - **Prescription (Rx)**: डॉक्टर का आधिकारिक पर्चा।
   - **Over-the-counter (OTC)**: बिना डॉक्टर के पर्चे के सीधे मिलने वाली सुरक्षित दवाइयां (जैसे पेरासिटामोल, एंटासिड).
   - **Generic Drug**: मूल फॉर्मूले वाली सस्ती और समान प्रभावकारी दवा (ब्रांडेड के विपरीत).
   - **Dosage**: दवा की निर्धारित मात्रा व समय (उदा. 'Take 500mg twice daily').
   - **Expiry Date**: दवा की उपयोगिता समाप्त होने की तिथि।

3. **L1 हिंदी भाषियों की आम गलतियां**:
   - दवा खाने के लिए कभी '*I am eating medicine*' ❌ न कहें। अंग्रेज़ी में दवा ली जाती है: "**I am taking my medication.**" ✔️
   - 'Child specialist' ❌ के बजाय औपचारिक रूप से "**Pediatrician**" /ˌpiː.di.əˈtrɪʃ.ən/ बोलें।
   - 'Eye specialist' ❌ के बजाय "**Ophthalmologist**" /ˌɒf.θælˈmɒl.ə.dʒɪst/ या 'Optometrist' का प्रयोग करें।`,
    englishExplanation: `Day 46 focuses on the taxonomy of clinical specializations, pharmacology communication, diagnostic investigation interpretation, and prescription protocols.

Key Learning Dimensions:
1. **Specialist Consultations**: Cardiology, dermatology, neurology, orthopedic surgery, pediatrics, and otolaryngology.
2. **Pharmacy Logistics**: Dispensing prescriptions, generic bio-equivalents, OTC classifications, refill authorizations, and dosage instructions.
3. **Diagnostic Modalities**: Radiology (X-Ray, MRI, CT, Ultrasound), Pathology (CBC, Lipid profile, Biopsy), and Cardiology tests (Echo, ECG).`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "The Verb 'Take' with Medications",
        description: "Medication is always 'taken' (oral), 'applied' (topical), or 'administered' (intravenous), NEVER 'eaten': 'Take one tablet after dinner.'",
        register: "Pharmacology Collocations"
      },
      {
        ruleNumber: 2,
        title: "Prepositions with Specialist Referrals",
        description: "Doctors 'refer a patient TO a specialist': 'My general physician referred me to a cardiologist for further evaluation.'",
        register: "Referral Syntax"
      },
      {
        ruleNumber: 3,
        title: "Modal Instructions on Medicine Labels",
        description: "Use 'Must / Should / Do not' for prescription advisories: 'This medicine must be kept refrigerated' / 'Do not operate machinery after taking this sedative.'",
        register: "Prescription Warnings"
      },
      {
        ruleNumber: 4,
        title: "Compound Clinical Nouns",
        description: "Combine modality + report: 'blood panel', 'lipid profile', 'biopsy report', 'ultrasound scan'.",
        register: "Diagnostic Terminology"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Referral to Specialist",
        formula: "The general physician referred the patient to a + [Specialist: cardiologist / dermatologist].",
        exampleEn: "The physician referred me to an orthopedic surgeon for knee arthroscopy.",
        meaningHi: "चिकित्सक ने मुझे घुटने की आर्थोस्कोपी के लिए एक आर्थोपेडिक सर्जन के पास भेजा।"
      },
      {
        subjectGroup: "Pharmacy Inquiries",
        formula: "Do you have a generic substitute for + [Branded Medication]?",
        exampleEn: "Do you have a generic substitute for this brand of atorvastatin?",
        meaningHi: "क्या आपके पास एटोरवास्टेटिन के इस ब्रांड का कोई जेनेरिक विकल्प है?"
      },
      {
        subjectGroup: "Dosage Frequency",
        formula: "Take + [Quantity] + [form: tablet / teaspoon] + [Frequency: twice daily] + [Condition: before / after meals].",
        exampleEn: "Take one capsule twice daily after meals for five consecutive days.",
        meaningHi: "लगातार पांच दिनों तक भोजन के बाद दिन में दो बार एक कैप्सूल लें।"
      },
      {
        subjectGroup: "Diagnostic Results",
        formula: "The + [Test: MRI / blood test / biopsy] + results indicate that + [Clinical Finding].",
        exampleEn: "The MRI scan results indicate a minor ligament tear in the right shoulder.",
        meaningHi: "एमआरआई स्कैन के नतीजे बताते हैं कि दाहिने कंधे में एक मामूली लिगामेंट फट गया है।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Eating Medicine', 'Child Specialist', and 'Medical Store' Traps",
      hindiPattern: "1. '*I am eating medicine for my fever.*' (दवाई खा रहा हूँ)\n2. '*We took our baby to a child specialist.*'\n3. '*I bought this tablet from the medical store.*'\n4. '*Can you give me loose tablets?*'",
      potentialInterference: "Literal translations of colloquial Indian terms (दवाई खाना, चाइल्ड स्पेशलिस्ट, मेडिकल स्टोर, खुली गोली).",
      explanation: "In English, you 'take' medication. A doctor for children is a 'pediatrician'. Internationally, a store selling medicines is a 'pharmacy' or 'chemist'. Medications in blister packs are dispensed in prescribed quantities, not 'loose tablets'.",
      naturalSolution: "1. 'I am taking medication for my fever.' | 2. 'We took our baby to a pediatrician.' | 3. 'I bought this medication from the pharmacy.' | 4. 'I need a five-day supply of this prescription.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day46_vocab_001", word: "Cardiologist", pos: "Noun", ipa: "/ˌkɑː.diˈɒl.ə.dʒɪst/", meaningHi: "हृदय रोग विशेषज्ञ", exampleEn: "The cardiologist reviewed the patient's electrocardiogram and stress test.", exampleHi: "हृदय रोग विशेषज्ञ ने मरीज के इलेक्ट्रोकार्डियोग्राम और स्ट्रेस टेस्ट की समीक्षा की।" },
      { id: "day46_vocab_002", word: "Dermatologist", pos: "Noun", ipa: "/ˌdɜː.məˈtɒl.ə.dʒɪst/", meaningHi: "त्वचा रोग विशेषज्ञ", exampleEn: "Consult a dermatologist if the skin rash does not heal with topical creams.", exampleHi: "यदि त्वचा का दाना लगाने वाली क्रीम से ठीक नहीं होता है तो त्वचा विशेषज्ञ से परामर्श लें।" },
      { id: "day46_vocab_003", word: "Pediatrician", pos: "Noun", ipa: "/ˌpiː.di.əˈtrɪʃ.ən/", meaningHi: "बाल रोग विशेषज्ञ (बच्चों का डॉक्टर)", exampleEn: "The pediatrician administered the routine childhood immunizations.", exampleHi: "बाल रोग विशेषज्ञ ने बच्चों के नियमित टीकाकरण किए।" },
      { id: "day46_vocab_004", word: "Orthopedist", pos: "Noun", ipa: "/ˌɔː.θəˈpiː.dɪst/", meaningHi: "हड्डी व जोड़ रोग विशेषज्ञ (हड्डियों का डॉक्टर)", exampleEn: "The orthopedist set the fractured forearm in a fiberglass cast.", exampleHi: "हड्डी रोग विशेषज्ञ ने टूटे हुए हाथ को फाइबरग्लास प्लास्टर में सेट किया।" },
      { id: "day46_vocab_005", word: "Neurologist", pos: "Noun", ipa: "/njʊəˈrɒl.ə.dʒɪst/", meaningHi: "तंत्रिका तंत्र व मस्तिष्क रोग विशेषज्ञ", exampleEn: "A neurologist conducts diagnostic tests for chronic migraines and nerve disorders.", exampleHi: "एक न्यूरोलॉजिस्ट पुराने माइग्रेन और तंत्रिका विकारों के लिए नैदानिक परीक्षण करता है।" },
      { id: "day46_vocab_006", word: "Ophthalmologist", pos: "Noun", ipa: "/ˌɒf.θælˈmɒl.ə.dʒɪst/", meaningHi: "नेत्र रोग विशेषज्ञ व नेत्र सर्जन", exampleEn: "The ophthalmologist performed laser surgery to correct the patient's cataract.", exampleHi: "नेत्र रोग विशेषज्ञ ने मरीज के मोतियाबिंद को ठीक करने के लिए लेजर सर्जरी की।" },
      { id: "day46_vocab_007", word: "Pharmacist", pos: "Noun", ipa: "/ˈfɑː.mə.sɪst/", meaningHi: "औषधि विक्रेता / फार्मासिस्ट", exampleEn: "The pharmacist explained the potential side effects of the antibiotic.", exampleHi: "फार्मासिस्ट ने एंटीबायोटिक के संभावित दुष्प्रभावों के बारे में समझाया।" },
      { id: "day46_vocab_008", word: "Prescription", pos: "Noun", ipa: "/prɪˈskrɪp.ʃən/", meaningHi: "डॉक्टर का पर्चा / लिखित दवा निर्देश", exampleEn: "You cannot purchase these sleeping pills without a valid prescription.", exampleHi: "आप एक वैध पर्चे के बिना ये नींद की गोलियां नहीं खरीद सकते।" },
      { id: "day46_vocab_009", word: "Generic", pos: "Adjective/Noun", ipa: "/dʒəˈner.ɪk/", meaningHi: "जेनेरिक (बिना ब्रांड वाली मूल फॉर्मूला दवा)", exampleEn: "Generic medications contain the same active ingredients as brand-name drugs but cost significantly less.", exampleHi: "जेनेरिक दवाओं में ब्रांड-नाम वाली दवाओं के समान सक्रिय तत्व होते हैं लेकिन उनकी कीमत काफी कम होती है।" },
      { id: "day46_vocab_010", word: "Dosage", pos: "Noun", ipa: "/ˈdəʊ.sɪdʒ/", meaningHi: "दवा की निर्धारित खुराक", exampleEn: "Never exceed the recommended daily dosage stated on the bottle.", exampleHi: "बोतल पर बताई गई अनुशंसित दैनिक खुराक से अधिक कभी न लें।" },
      { id: "day46_vocab_011", word: "Over-the-counter", pos: "Adjective (OTC)", ipa: "/ˌəʊ.və.ðəˈkaʊn.tər/", meaningHi: "बिना पर्चे के मिलने वाली सामान्य दवा", exampleEn: "Pain relievers like ibuprofen are available over-the-counter.", exampleHi: "इबुप्रोफेन जैसे दर्द निवारक बिना पर्चे के (ओवर-द-काउंटर) उपलब्ध हैं।" },
      { id: "day46_vocab_012", word: "Ultrasound", pos: "Noun", ipa: "/ˈʌl.trə.saʊnd/", meaningHi: "अल्ट्रासाउंड (ध्वनि तरंगों द्वारा आंतरिक अंग जांच)", exampleEn: "The ultrasound scan confirmed that the abdominal organs were healthy.", exampleHi: "अल्ट्रासाउंड स्कैन ने पुष्टि की कि पेट के अंग स्वस्थ थे।" },
      { id: "day46_vocab_013", word: "Biopsy", pos: "Noun", ipa: "/ˈbaɪ.ɒp.si/", meaningHi: "बायोप्सी (ऊतक की सूक्ष्मदर्शी जांच)", exampleEn: "The surgeon performed a minor needle biopsy of the suspicious tissue.", exampleHi: "सर्जन ने संदिग्ध ऊतक की एक छोटी सुई बायोप्सी की।" },
      { id: "day46_vocab_014", word: "Pathology", pos: "Noun", ipa: "/pəˈθɒl.ə.dʒi/", meaningHi: "रोगविज्ञान / पैथोलॉजी लैब", exampleEn: "The pathology laboratory analyzed the blood samples for microbial cultures.", exampleHi: "पैथोलॉजी प्रयोगशाला ने माइक्रोबियल कल्चर के लिए रक्त के नमूनों का विश्लेषण किया।" },
      { id: "day46_vocab_015", word: "Sedative", pos: "Noun/Adjective", ipa: "/ˈsed.ə.tɪv/", meaningHi: "शामक / नींद या शांति देने वाली दवा", exampleEn: "Avoid driving after taking a sedative medication as it impairs reflexes.", exampleHi: "शामक दवा लेने के बाद गाड़ी चलाने से बचें क्योंकि यह सतर्कता को कम करती है।" },
      { id: "day46_vocab_016", word: "Ointment", pos: "Noun", ipa: "/ˈɔɪnt.mənt/", meaningHi: "मरहम / त्वचा पर लगाने वाला लेप", exampleEn: "Apply a thin layer of antibacterial ointment over the wound.", exampleHi: "घाव पर जीवाणुरोधी मरहम की एक पतली परत लगाएं।" },
      { id: "day46_vocab_017", word: "Refill", pos: "Noun/Verb", ipa: "/ˈriː.fɪl/", meaningHi: "पर्चे की दवा दोबारा भरवाना / रीफिल", exampleEn: "The doctor authorized three refills on my blood pressure prescription.", exampleHi: "डॉक्टर ने मेरे रक्तचाप के पर्चे पर तीन रीफिल को मंजूरी दी।" },
      { id: "day46_vocab_018", word: "Radiology", pos: "Noun", ipa: "/ˌreɪ.diˈɒl.ə.dʒi/", meaningHi: "रेडियोलॉजी / एक्स-रे व इमेजिंग विभाग", exampleEn: "The radiology department is located on the ground floor next to emergency triage.", exampleHi: "रेडियोलॉजी विभाग आपातकालीन ट्राइएज के बगल में भूतल पर स्थित है।" },
      { id: "day46_vocab_019", word: "Endoscopy", pos: "Noun", ipa: "/enˈdɒs.kə.pi/", meaningHi: "एंडोस्कोपी (कैमरे द्वारा आंतरिक जांच)", exampleEn: "An upper endoscopy was scheduled to investigate chronic stomach acidity.", exampleHi: "पेट की पुरानी एसिडिटी की जांच के लिए एक अपर एंडोस्कोपी तय की गई थी।" },
      { id: "day46_vocab_020", word: "Contraindication", pos: "Noun", ipa: "/ˌkɒn.trəˌɪn.dɪˈkeɪ.ʃən/", meaningHi: "निषेध / किसी स्थिति में दवा न लेने का चिकित्सीय कारण", exampleEn: "Pregnancy is a strict contraindication for this specific medication.", exampleHi: "गर्भावस्था इस विशिष्ट दवा के लिए एक सख्त निषेध (कॉन्ट्राइंडिकेशन) है।" }
    ],
    spokenPhrases: [
      { id: "day46_phrase_001", phrase: "I would like to fill this prescription, please.", register: "Pharmacy Interaction", meaningHi: "कृपया मैं यह डॉक्टर का पर्चा बनवाना/दवा लेना चाहता हूँ।" },
      { id: "day46_phrase_002", phrase: "Is there a generic equivalent available for this brand?", register: "Generic Inquiry", meaningHi: "क्या इस ब्रांड के लिए कोई जेनेरिक समतुल्य दवा उपलब्ध है?" },
      { id: "day46_phrase_003", phrase: "My physician referred me to a specialist for a second opinion.", register: "Medical Referral", meaningHi: "मेरे डॉक्टर ने मुझे दूसरी राय के लिए एक विशेषज्ञ के पास भेजा।" },
      { id: "day46_phrase_004", phrase: "Take one tablet orally twice daily after food.", register: "Dosage Instruction", meaningHi: "भोजन के बाद दिन में दो बार मुंह से एक गोली लें।" },
      { id: "day46_phrase_005", phrase: "Are these lozenges available over-the-counter without a prescription?", register: "OTC Drug Inquiry", meaningHi: "क्या ये गोलियां बिना डॉक्टर के पर्चे के सीधे मिल सकती हैं?" },
      { id: "day46_phrase_006", phrase: "The MRI scan showed no structural damage to the spinal cord.", register: "Diagnostic Findings", meaningHi: "एमआरआई स्कैन में रीढ़ की हड्डी को कोई संरचनात्मक क्षति नहीं दिखी।" },
      { id: "day46_phrase_007", phrase: "Please check the expiration date stamped on the packaging.", register: "Medication Safety", meaningHi: "कृपया पैकेजिंग पर छपी समाप्ति तिथि (एक्सपायरी डेट) की जांच करें।" },
      { id: "day46_phrase_008", phrase: "She scheduled a consultation with a pediatric cardiologist.", register: "Specialist Booking", meaningHi: "उसने बाल हृदय रोग विशेषज्ञ के साथ परामर्श तय किया।" },
      { id: "day46_phrase_009", phrase: "This ointment is for external topical application only.", register: "Topical Instruction", meaningHi: "यह मरहम केवल बाहरी त्वचा पर लगाने के लिए है।" },
      { id: "day46_phrase_010", phrase: "Fast for twelve hours prior to having your blood lipid profile drawn.", register: "Lab Preparation", meaningHi: "अपना ब्लड लिपिड प्रोफाइल टेस्ट कराने से पहले बारह घंटे का उपवास रखें।" },
      { id: "day46_phrase_011", phrase: "The biopsy confirmed that the tumor is completely benign.", register: "Pathology Results", meaningHi: "बायोप्सी ने पुष्टि की कि ट्यूमर पूरी तरह से सौम्य (कैंसर रहित) है।" },
      { id: "day46_phrase_012", phrase: "Does this medication cause any drowsiness or impair driving?", register: "Side Effect Inquiry", meaningHi: "क्या इस दवा से सुस्ती आती है या ड्राइविंग पर असर पड़ता है?" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day46_ex_001", english: "The general physician referred the patient to a renowned cardiologist for coronary angiography.", hindi: "सामान्य चिकित्सक ने कोरोनरी एंजियोग्राफी के लिए मरीज को एक प्रसिद्ध हृदय रोग विशेषज्ञ के पास भेजा।" },
      { id: "day46_ex_002", english: "Generic medicines must adhere to the same rigorous safety and bio-equivalence standards as branded ones.", hindi: "जेनेरिक दवाओं को ब्रांडेड दवाओं के समान ही कठोर सुरक्षा और जैव-समतुल्यता मानकों का पालन करना होगा।" },
      { id: "day46_ex_003", english: "The pharmacist warned that taking aspirin with blood thinners is strictly contraindicated.", hindi: "फार्मासिस्ट ने चेतावनी दी कि ब्लड थिनर (खून पतला करने वाली दवाओं) के साथ एस्पिरिन लेना सख्त मना है।" },
      { id: "day46_ex_004", english: "She made an appointment with an ophthalmologist to have her retinal vision thoroughly examined.", hindi: "उसने अपनी रेटिना दृष्टि की गहन जांच कराने के लिए एक नेत्र रोग विशेषज्ञ से अपॉइंटमेंट लिया।" },
      { id: "day46_ex_005", english: "An ultrasound scan of the abdomen revealed mild fatty liver changes and gallbladder sludge.", hindi: "पेट के अल्ट्रासाउंड स्कैन से हल्के फैटी लिवर के बदलाव और पित्ताशय में कीचड़ का पता चला।" },
      { id: "day46_ex_006", english: "Over-the-counter pain medications can be purchased at any licensed pharmacy without a doctor's note.", hindi: "बिना पर्चे वाले दर्द निवारक किसी भी लाइसेंस प्राप्त फार्मेसी से डॉक्टर के पर्चे के बिना खरीदे जा सकते हैं।" },
      { id: "day46_ex_007", english: "The pediatrician recommended administering the measles, mumps, and rubella vaccine at twelve months of age.", hindi: "बाल रोग विशेषज्ञ ने बारह महीने की उम्र में खसरा, कण्ठमाला और रूबेला (MMR) का टीका लगाने की सिफारिश की।" },
      { id: "day46_ex_008", english: "The biopsy specimen was sent to the pathology laboratory for histological staining and microscopic analysis.", hindi: "बायोप्सी के नमूने को हिस्टोलॉजिकल स्टेनिंग और सूक्ष्मदर्शीय विश्लेषण के लिए पैथोलॉजी लैब भेजा गया था।" },
      { id: "day46_ex_009", english: "He takes one blood pressure capsule every morning thirty minutes before breakfast.", hindi: "वह हर सुबह नाश्ते से तीस मिनट पहले रक्तचाप का एक कैप्सूल लेता है।" },
      { id: "day46_ex_010", english: "An ENT specialist examined her vocal cords using a flexible diagnostic laryngoscope.", hindi: "एक ईएनटी विशेषज्ञ ने लचीले डायग्नोस्टिक लैरींगोस्कोप का उपयोग करके उसके वोकल कॉर्ड की जांच की।" },
      { id: "day46_ex_011", english: "The orthopedic surgeon recommended physical therapy before contemplating elective knee surgery.", hindi: "हड्डी रोग विशेषज्ञ ने वैकल्पिक घुटने की सर्जरी पर विचार करने से पहले फिजियोथेरेपी की सिफारिश की।" },
      { id: "day46_ex_012", english: "Please store this liquid antibiotic in the refrigerator and discard any remainder after ten days.", hindi: "कृपया इस तरल एंटीबायोटिक को फ्रिज में रखें और दस दिनों के बाद बचे हुए हिस्से को फेंक दें।" },
      { id: "day46_ex_013", english: "The neurologist ordered an electroencephalogram (EEG) to monitor brain wave activity during sleep.", hindi: "न्यूरोलॉजिस्ट ने नींद के दौरान मस्तिष्क तरंग गतिविधि की निगरानी के लिए एक ईईजी का आदेश दिया।" },
      { id: "day46_ex_014", english: "You must swallow the capsule whole with water rather than crushing or chewing it.", hindi: "आपको कैप्सूल को कुचलने या चबाने के बजाय पानी के साथ पूरा निगलना चाहिए।" },
      { id: "day46_ex_015", english: "The pharmacy technician verified my insurance coverage before dispensing the prescription inhaler.", hindi: "फार्मेसी तकनीशियन ने नुस्खे का इनहेलर देने से पहले मेरे बीमा कवरेज को सत्यापित किया।" },
      { id: "day46_ex_016", english: "A comprehensive lipid profile measures total cholesterol, HDL, LDL, and triglyceride concentrations.", hindi: "एक व्यापक लिपिड प्रोफाइल कुल कोलेस्ट्रॉल, एचडीएल, एलडीएल और ट्राइग्लिसराइड सांद्रता को मापता है।" },
      { id: "day46_ex_017", english: "The dermatologist prescribed a topical retinoid gel to treat persistent adult acne.", hindi: "त्वचा विशेषज्ञ ने लगातार होने वाले मुँहासों के इलाज के लिए लगाने वाला रेटिनोइड जेल लिखा।" },
      { id: "day46_ex_018", english: "Make sure not to drink grapefruit juice while taking this cholesterol-lowering statin.", hindi: "सुनिश्चित करें कि इस कोलेस्ट्रॉल कम करने वाली स्टेटिन दवा को लेते समय अंगूर का रस न पिएं।" },
      { id: "day46_ex_019", english: "The radiology report stated that the chest X-ray showed clear lung fields without consolidation.", hindi: "रेडियोलॉजी रिपोर्ट में कहा गया है कि छाती के एक्स-रे में फेफड़े साफ दिखे।" },
      { id: "day46_ex_020", english: "How many refills remain on this prescription before I must visit the physician again?", hindi: "डॉक्टर के पास दोबारा जाने से पहले इस पर्चे पर कितनी बार दवा दोबारा ली (रिफिल कराई) जा सकती है?" },
      { id: "day46_ex_021", english: "The nurse drew three vials of venous blood for routine diagnostic testing.", hindi: "नर्स ने नियमित नैदानिक परीक्षण के लिए नसों से रक्त की तीन शीशियां निकालीं।" },
      { id: "day46_ex_022", english: "Applying an ice pack wrapped in a cloth helps reduce acute inflammation and bruising.", hindi: "कपड़े में लिपटे बर्फ के पैक को लगाने से तीव्र सूजन और नील को कम करने में मदद मिलती है।" },
      { id: "day46_ex_023", english: "She visited an audiologist to perform a pure-tone hearing evaluation for tinnitus.", hindi: "उसने कान में सीटी बजने (टिनिटस) के लिए शुद्ध-टोन सुनने की क्षमता की जांच कराने हेतु एक ऑडियोलॉजिस्ट से संपर्क किया।" },
      { id: "day46_ex_024", english: "The pathology results showed no evidence of malignancy in the excised lymph node.", hindi: "पैथोलॉजी के नतीजों ने निकाले गए लिम्फ नोड में कैंसर (घातकता) का कोई सबूत नहीं दिखाया।" },
      { id: "day46_ex_025", english: "Always read the patient information leaflet enclosed in the medicine packaging before administration.", hindi: "दवा लेने से पहले दवा की पैकेजिंग में संलग्न रोगी सूचना पत्रक को हमेशा पढ़ें।" }
    ]
  },
  pronunciation: {
    focusSound: "Pronouncing complex medical titles: /ˌɒf.θælˈmɒl.ə.dʒɪst/ 'Ophthalmologist', /ˌpiː.di.əˈtrɪʃ.ən/ 'Pediatrician', /ˌbaɪ.ɒp.si/ 'Biopsy'",
    phoneticNotes: "1. 'Ophthalmologist' starts with /ɒf/ or /ɒp/ followed by /θæl/: /ˌɒf.θælˈmɒl.ə.dʒɪst/.\n2. 'Pediatrician' stresses the third syllable: /ˌpiː.di.əˈtrɪʃ.ən/.\n3. 'Dermatologist' stresses the third syllable: /ˌdɜː.məˈtɒl.ə.dʒɪst/.",
    minimalPairs: [
      { wordA: "Dose", ipaA: "/dəʊs/", wordB: "Doze", ipaB: "/dəʊz/" },
      { wordA: "Pill", ipaA: "/pɪl/", wordB: "Peel", ipaB: "/piːl/" },
      { wordA: "Cast", ipaA: "/kɑːst/", wordB: "Cost", ipaB: "/kɒst/" },
      { wordA: "Scan", ipaA: "/skæn/", wordB: "Spam", ipaB: "/spæm/" },
      { wordA: "Drug", ipaA: "/drʌɡ/", wordB: "Drag", ipaB: "/dræɡ/" }
    ],
    drills: [
      { sentence: "The ophthalmologist examined her retina.", focus: "Stress in /ˌɒf.θælˈmɒl.ə.dʒɪst/" },
      { sentence: "The pediatrician vaccinated the infant.", focus: "Stress in /ˌpiː.di.əˈtrɪʃ.ən/" },
      { sentence: "The dermatologist prescribed a topical ointment.", focus: "Stress in /ˌdɜː.məˈtɒl.ə.dʒɪst/" },
      { sentence: "The pathologist examined the needle biopsy.", focus: "Stress in /pəˈθɒl.ə.dʒɪst/ & /ˈbaɪ.ɒp.si/" },
      { sentence: "The orthopedic surgeon repaired the fractured bone.", focus: "Stress in /ˌɔː.θəˈpiː.dɪk/" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day46_ex_001",
        type: "error_correction",
        prompt: "Correct the sentence: 'I am eating my blood pressure medicines every morning.'",
        correctAnswer: "I take my blood pressure medication every morning.",
        acceptableAnswers: [
          "I am taking my blood pressure medicine every morning.",
          "I take my blood pressure pills every morning."
        ],
        explanationEn: "In English, medication is 'taken' (oral), not 'eaten'.",
        explanationHi: "अंग्रेज़ी में दवा 'take' (लेना) की जाती है, 'eat' (खाना) नहीं।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day46_ex_002",
        type: "multiple_choice",
        prompt: "Which specialist treats diseases of the heart and blood vessels?",
        options: ["Cardiologist", "Dermatologist", "Pediatrician", "Orthopedist"],
        correctAnswer: "Cardiologist",
        explanationEn: "A cardiologist is a medical specialist in cardiovascular health.",
        explanationHi: "हृदय रोग विशेषज्ञ को 'Cardiologist' कहते हैं।",
        difficulty: "easy",
        skillTag: "SPECIALIST_IDENTIFICATION"
      },
      {
        id: "day46_ex_003",
        type: "fill_blank",
        prompt: "Medications that can be bought safely without a doctor's prescription are known as _______ drugs (OTC).",
        correctAnswer: "over-the-counter",
        acceptableAnswers: ["over the counter", "OTC"],
        explanationEn: "'Over-the-counter' (OTC) drugs require no prescription.",
        explanationHi: "बिना पर्चे मिलने वाली दवाइयों को 'over-the-counter' (OTC) कहते हैं।",
        difficulty: "easy",
        skillTag: "PHARMACY_TERMS"
      },
      {
        id: "day46_ex_004",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'क्या आपके पास इस ब्रांडेड दवा का सस्ता जेनेरिक विकल्प है?'",
        correctAnswer: "Do you have an affordable generic substitute for this branded medication?",
        acceptableAnswers: [
          "Do you have a generic equivalent for this brand name drug?",
          "Is there a cheaper generic alternative for this medicine?"
        ],
        explanationEn: "'Do you have an affordable generic substitute for this branded medication?'",
        explanationHi: "'Generic substitute' और 'branded medication' का सही प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day46_ex_005",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The orthopedic surgeon recommended physical therapy before considering surgery.'",
        correctAnswer: "हड्डी रोग विशेषज्ञ ने सर्जरी पर विचार करने से पहले फिजियोथेरेपी की सिफारिश की।",
        acceptableAnswers: [
          "ऑर्थोपेडिक सर्जन ने ऑपरेशन से पहले फिजियोथेरेपी कराने की सलाह दी।"
        ],
        explanationEn: "'Orthopedic surgeon' translates as हड्डी रोग विशेषज्ञ.",
        explanationHi: "'Orthopedic surgeon' का अर्थ हड्डी रोग विशेषज्ञ है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day46_ex_006",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [fill / like / prescription / to / I / would / this]",
        correctAnswer: "I would like to fill this prescription.",
        explanationEn: "Polite request + Infinitive verb phrase + Object.",
        explanationHi: "सही क्रम: I would like to fill this prescription.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day46_ex_007",
        type: "multiple_choice",
        prompt: "What is a 'biopsy'?",
        options: [
          "The surgical removal and microscopic examination of tissue to discover the presence or cause of a disease",
          "An eye examination using bright light",
          "A hearing test using headphones",
          "An X-ray of the teeth"
        ],
        correctAnswer: "The surgical removal and microscopic examination of tissue to discover the presence or cause of a disease",
        explanationEn: "A biopsy is the examination of tissue from a living body to discover the presence, cause, or extent of a disease.",
        explanationHi: "रोग की पहचान हेतु ऊतक (टिशू) की जांच को 'biopsy' कहते हैं।",
        difficulty: "medium",
        skillTag: "DIAGNOSTIC_TERMS"
      },
      {
        id: "day46_ex_008",
        type: "error_correction",
        prompt: "Correct the sentence: 'We took our child to the child specialist yesterday.'",
        correctAnswer: "We took our child to the pediatrician yesterday.",
        acceptableAnswers: [
          "We took our baby to a pediatrician yesterday."
        ],
        explanationEn: "In standard international English, a children's physician is a 'pediatrician'.",
        explanationHi: "'Child specialist' के स्थान पर मानक अंग्रेज़ी में 'pediatrician' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day46_ex_009",
        type: "fill_blank",
        prompt: "The medical doctor specializing in eye diseases and ophthalmic surgery is called an _______.",
        correctAnswer: "ophthalmologist",
        explanationEn: "An ophthalmologist is an eye specialist and surgeon.",
        explanationHi: "नेत्र रोग विशेषज्ञ को 'ophthalmologist' कहते हैं।",
        difficulty: "medium",
        skillTag: "SPECIALIST_IDENTIFICATION"
      },
      {
        id: "day46_ex_010",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nCustomer: 'Can I purchase these antibiotic capsules over-the-counter?'\nPharmacist: 'No, antibiotics require an official doctor's _______.'",
        options: ["prescription", "turnstile", "syllabus", "sublet"],
        correctAnswer: "prescription",
        explanationEn: "Antibiotics are prescription-only medications.",
        explanationHi: "एंटीबायोटिक लेने के लिए डॉक्टर का पर्चा (prescription) जरूरी है।",
        difficulty: "easy",
        skillTag: "PHARMACY_DISCOURSE"
      },
      {
        id: "day46_ex_011",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'कृपया यह मरहम दिन में दो बार प्रभावित त्वचा पर लगाएं।'",
        correctAnswer: "Please apply this ointment to the affected skin twice daily.",
        acceptableAnswers: [
          "Apply this ointment on the affected area twice a day.",
          "Please rub this ointment onto the affected skin twice daily."
        ],
        explanationEn: "'Please apply this ointment to the affected skin twice daily.'",
        explanationHi: "'Apply this ointment to the affected skin' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day46_ex_012",
        type: "multiple_choice",
        prompt: "What does a 'neurologist' specialize in?",
        options: [
          "Disorders of the brain, spinal cord, and nervous system",
          "Skin conditions and cosmetic allergies",
          "Foot and ankle fractures",
          "Dental cavities"
        ],
        correctAnswer: "Disorders of the brain, spinal cord, and nervous system",
        explanationEn: "A neurologist treats nervous system disorders.",
        explanationHi: "मस्तिष्क और तंत्रिका तंत्र के विशेषज्ञ को 'neurologist' कहते हैं।",
        difficulty: "easy",
        skillTag: "SPECIALIST_IDENTIFICATION"
      },
      {
        id: "day46_ex_013",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The ultrasound scan confirmed healthy internal organs.'",
        correctAnswer: "The ultrasound scan confirmed healthy internal organs.",
        explanationEn: "Focus on spelling 'ultrasound' and 'confirmed'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day46_ex_014",
        type: "sentence_transformation",
        prompt: "Rewrite replacing 'skin doctor' with the clinical term: 'She made an appointment with a skin doctor.'",
        correctAnswer: "She made an appointment with a dermatologist.",
        explanationEn: "Use 'dermatologist' for skin specialist.",
        explanationHi: "'Dermatologist' शब्द का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "LEXICAL_PRECISION"
      },
      {
        id: "day46_ex_015",
        type: "matching",
        prompt: "Match the diagnostic test to its clinical purpose:\n1. Lipid Profile\n2. Biopsy\n3. MRI Scan\n4. Endoscopy",
        options: [
          "1-Cholesterol & triglycerides, 2-Tissue examination for disease/malignancy, 3-Magnetic resonance soft tissue imaging, 4-Visual camera examination of gastrointestinal tract",
          "1-Tissue examination, 2-Cholesterol, 3-Camera exam, 4-Magnetic resonance",
          "1-Camera exam, 2-Magnetic resonance, 3-Cholesterol, 4-Tissue examination",
          "1-Magnetic resonance, 2-Camera exam, 3-Tissue examination, 4-Cholesterol"
        ],
        correctAnswer: "1-Cholesterol & triglycerides, 2-Tissue examination for disease/malignancy, 3-Magnetic resonance soft tissue imaging, 4-Visual camera examination of gastrointestinal tract",
        explanationEn: "Accurate matching of clinical diagnostic investigations.",
        explanationHi: "नैदानिक परीक्षणों का सही मिलान।",
        difficulty: "medium",
        skillTag: "DIAGNOSTIC_MATCHING"
      },
      {
        id: "day46_ex_016",
        type: "error_correction",
        prompt: "Correct the sentence: 'My doctor referred me towards a cardiologist.'",
        correctAnswer: "My doctor referred me to a cardiologist.",
        explanationEn: "The collocation is 'refer [patient] TO [specialist]', not 'towards'.",
        explanationHi: "'Referred to a specialist' सही प्रीपोजिशन है।",
        difficulty: "easy",
        skillTag: "PREPOSITION_COLLOCATION"
      },
      {
        id: "day46_ex_017",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Fast for twelve hours prior to having your blood sample drawn.'",
        correctAnswer: "अपना रक्त का नमूना देने से पहले बारह घंटे का उपवास रखें।",
        acceptableAnswers: [
          "ब्लड टेस्ट कराने से पहले 12 घंटे कुछ न खाएं-पिएं (खाली पेट रहें)।"
        ],
        explanationEn: "'Fast for twelve hours' translates as बारह घंटे का उपवास रखें / भूखे रहें.",
        explanationHi: "जांच पूर्व उपवास का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day46_ex_018",
        type: "active_recall",
        prompt: "What is the medical term for a condition or factor that serves as a reason to withhold a certain medical treatment (e.g., pregnancy or high blood pressure)?",
        correctAnswer: "Contraindication",
        acceptableAnswers: ["contraindication"],
        explanationEn: "A 'contraindication' makes a specific treatment or drug inadvisable.",
        explanationHi: "दवा न लेने के चिकित्सीय निषेध को 'contraindication' कहते हैं।",
        difficulty: "hard",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day46_ex_019",
        type: "multiple_choice",
        prompt: "What does 'ENT' stand for in medicine?",
        options: ["Ear, Nose, and Throat", "Emergency Nursing Treatment", "Endocrine Network Therapy", "Eye, Nerve, and Tissue"],
        correctAnswer: "Ear, Nose, and Throat",
        explanationEn: "ENT stands for Ear, Nose, and Throat (Otolaryngology).",
        explanationHi: "ENT का पूरा नाम 'Ear, Nose, and Throat' (कान, नाक और गला) है।",
        difficulty: "easy",
        skillTag: "ACRONYMS"
      },
      {
        id: "day46_ex_020",
        type: "speaking_pronunciation",
        prompt: "Articulate the five-syllable word 'ophthalmologist' /ˌɒf.θælˈmɒl.ə.dʒɪst/: 'She consulted an ophthalmologist for her vision.'",
        correctAnswer: "She consulted an ophthalmologist for her vision.",
        explanationEn: "Pronounce /ˌɒf.θælˈmɒl.ə.dʒɪst/ with stress on the third syllable.",
        explanationHi: "'Ophthalmologist' का सही उच्चारण करें।",
        difficulty: "hard",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day46_ex_021",
        type: "question_formation",
        prompt: "Form a polite inquiry at a pharmacy asking about potential side effects of a medication:",
        correctAnswer: "Does this medication have any common side effects?",
        acceptableAnswers: [
          "What are the possible side effects of this medicine?",
          "Are there any side effects associated with this medication?"
        ],
        explanationEn: "'Does this medication have any common side effects?'",
        explanationHi: "दवा के साइड इफ़ेक्ट की पूछताछ।",
        difficulty: "easy",
        skillTag: "QUESTION_FORMATION"
      },
      {
        id: "day46_ex_022",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'पैथोलॉजी रिपोर्ट में ट्यूमर में किसी भी दुर्दमता (कैंसर) का कोई संकेत नहीं मिला।'",
        correctAnswer: "The pathology report showed no evidence of malignancy in the tumor.",
        acceptableAnswers: [
          "The pathology results indicated no signs of cancer in the tumor.",
          "The biopsy report revealed no malignancy."
        ],
        explanationEn: "'The pathology report showed no evidence of malignancy in the tumor.'",
        explanationHi: "'No evidence of malignancy' का सही प्रयोग।",
        difficulty: "hard",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day46_ex_023",
        type: "sentence_building",
        prompt: "Build a sentence about dosage using [tablet / meal / one / take / after / every / daily].",
        correctAnswer: "Take one tablet daily after every meal.",
        acceptableAnswers: [
          "Take one tablet after every meal daily."
        ],
        correctAnswer: "Take one tablet daily after every meal.",
        explanationEn: "'Take one tablet daily after every meal.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day46_ex_024",
        type: "multiple_choice",
        prompt: "Which specialist performs operations to repair bone fractures, joint replacements, and spinal disorders?",
        options: ["Orthopedic surgeon", "Dermatologist", "Pediatrician", "Pharmacist"],
        correctAnswer: "Orthopedic surgeon",
        explanationEn: "An orthopedic surgeon operates on bones and musculoskeletal systems.",
        explanationHi: "हड्डियों के सर्जन को 'Orthopedic surgeon' कहते हैं।",
        difficulty: "easy",
        skillTag: "SPECIALIST_IDENTIFICATION"
      },
      {
        id: "day46_ex_025",
        type: "error_correction",
        prompt: "Correct the sentence: 'Can I get two strips of paracetamols?'",
        correctAnswer: "Can I get two strips of paracetamol?",
        explanationEn: "Drug names like 'paracetamol' are mass uncountable nouns (NOT plural '*paracetamols*').",
        explanationHi: "दवाओं के नाम अगणनीय होते हैं; 'paracetamol' बोलें।",
        difficulty: "easy",
        skillTag: "UNCOUNTABLE_NOUNS"
      },
      {
        id: "day46_ex_026",
        type: "fill_blank",
        prompt: "A liquid or substance given by injection to produce immunity against an infectious disease is called a _______.",
        correctAnswer: "vaccine",
        acceptableAnswers: ["immunization", "vaccination"],
        explanationEn: "A 'vaccine' produces immunity.",
        explanationHi: "टीके को 'vaccine' कहते हैं।",
        difficulty: "easy",
        skillTag: "PHARMACY_TERMS"
      },
      {
        id: "day46_ex_027",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Do not crush or chew this extended-release tablet.'",
        correctAnswer: "इस एक्सटेंडेड-रिलीज़ (लंबे समय तक असर करने वाली) गोली को कुचलें या चबाएं नहीं।",
        acceptableAnswers: [
          "इस गोली को बिना चबाए या तोड़े सीधे पानी से निगलें।"
        ],
        explanationEn: "'Do not crush or chew' translates as कुचलें या चबाएं नहीं.",
        explanationHi: "दवा सेवन निर्देश का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day46_ex_028",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [refrigerated / must / antibiotic / be / this / liquid]",
        correctAnswer: "This liquid antibiotic must be refrigerated.",
        explanationEn: "Subject + Modal passive verb.",
        explanationHi: "सही क्रम: This liquid antibiotic must be refrigerated.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day46_ex_029",
        type: "multiple_choice",
        prompt: "What is an 'inhaler' typically prescribed for?",
        options: ["Asthma and respiratory bronchospasms", "Skin rashes", "Bone fractures", "Headaches"],
        correctAnswer: "Asthma and respiratory bronchospasms",
        explanationEn: "Inhalers deliver aerosol medication directly to the bronchial airways.",
        explanationHi: "दमा (अस्थमा) और सांस की तकलीफ के लिए 'inhaler' का प्रयोग किया जाता है।",
        difficulty: "easy",
        skillTag: "MEDICAL_DEVICES"
      },
      {
        id: "day46_ex_030",
        type: "active_recall",
        prompt: "What is the term for a medicine that causes sleep or calmness and slows down the nervous system?",
        correctAnswer: "Sedative",
        acceptableAnswers: ["sedative", "tranquilizer"],
        explanationEn: "A 'sedative' or 'tranquilizer' induces sleep and calmness.",
        explanationHi: "शामक या नींद लाने वाली दवा को 'sedative' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day46_ex_031",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'इस दवा की एक्सपायरी डेट अगले महीने खत्म हो रही है।'",
        correctAnswer: "The expiration date of this medication is expiring next month.",
        acceptableAnswers: [
          "This medicine expires next month.",
          "The expiry date on this medication is next month."
        ],
        explanationEn: "'This medicine expires next month.' or 'The expiration date of this medication is next month.'",
        explanationHi: "'This medicine expires next month.' सटीक है।",
        difficulty: "easy",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day46_ex_032",
        type: "error_correction",
        prompt: "Correct the sentence: 'The chemist gave me expired medicines.'",
        correctAnswer: "The pharmacist gave me expired medication.",
        acceptableAnswers: [
          "The pharmacy gave me expired medicine."
        ],
        explanationEn: "Use 'pharmacist' or 'pharmacy' and uncountable 'medication' (or 'expired medicines').",
        explanationHi: "मानक शब्द 'pharmacist' और 'medication' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "VOCAB_ACCURACY"
      },
      {
        id: "day46_ex_033",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nPatient: 'Can I take this pill with coffee?'\nPharmacist: 'No, take it with a full glass of water because caffeine may cause _______.'",
        options: ["interactions", "syllabi", "dormitories", "turnstiles"],
        correctAnswer: "interactions",
        explanationEn: "Drug-nutrient 'interactions' alter medication efficacy.",
        explanationHi: "दवाओं के आपसी असर को 'interactions' कहते हैं।",
        difficulty: "medium",
        skillTag: "PHARMACOLOGY"
      },
      {
        id: "day46_ex_034",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The dermatologist prescribed a topical retinoid ointment.'",
        correctAnswer: "The dermatologist prescribed a topical retinoid ointment.",
        explanationEn: "Focus on spelling 'dermatologist' and 'ointment'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "hard",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day46_ex_035",
        type: "multiple_choice",
        prompt: "What is an 'endoscopy'?",
        options: [
          "A nonsurgical procedure used to examine a person's digestive tract using an endoscope camera",
          "An eye vision test",
          "A skin scratch allergy test",
          "A hearing evaluation"
        ],
        correctAnswer: "A nonsurgical procedure used to examine a person's digestive tract using an endoscope camera",
        explanationEn: "An endoscopy uses a flexible camera to inspect internal gastrointestinal organs.",
        explanationHi: "कैमरे द्वारा आहार नली व पेट की आंतरिक जांच को 'endoscopy' कहते हैं।",
        difficulty: "medium",
        skillTag: "DIAGNOSTIC_TERMS"
      },
      {
        id: "day46_ex_036",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'डॉक्टर ने मुझे दूसरी राय के लिए न्यूरोलॉजिस्ट से मिलने की सलाह दी।'",
        correctAnswer: "The doctor advised me to consult a neurologist for a second opinion.",
        acceptableAnswers: [
          "The physician recommended seeing a neurologist for a second opinion.",
          "The doctor suggested getting a second opinion from a neurologist."
        ],
        explanationEn: "'The doctor advised me to consult a neurologist for a second opinion.'",
        explanationHi: "'Consult a neurologist for a second opinion' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day46_ex_037",
        type: "error_correction",
        prompt: "Correct the sentence: 'She had done an MRI scan.'",
        correctAnswer: "She had an MRI scan done.",
        acceptableAnswers: [
          "She underwent an MRI scan.",
          "She had an MRI scan."
        ],
        explanationEn: "Use causative 'had an MRI scan done' or 'underwent an MRI scan'.",
        explanationHi: "'Underwent an MRI scan' या 'had an MRI scan done' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "CAUSATIVE_VERBS"
      },
      {
        id: "day46_ex_038",
        type: "sentence_building",
        prompt: "Build a sentence about immunization using [pediatrician / routine / administered / the / vaccines / the].",
        correctAnswer: "The pediatrician administered the routine vaccines.",
        explanationEn: "'The pediatrician administered the routine vaccines.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day46_ex_039",
        type: "fill_blank",
        prompt: "The department in a hospital specializing in X-rays, CT scans, and ultrasound imaging is _______.",
        correctAnswer: "radiology",
        acceptableAnswers: ["Radiology", "imaging"],
        explanationEn: "'Radiology' department.",
        explanationHi: "एक्स-रे और इमेजिंग विभाग को 'radiology' कहते हैं।",
        difficulty: "easy",
        skillTag: "HOSPITAL_DEPARTMENTS"
      },
      {
        id: "day46_ex_040",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Generic drugs provide identical therapeutic benefits at a substantially lower cost.'",
        correctAnswer: "जेनेरिक दवाएं काफी कम कीमत पर समान चिकित्सीय लाभ प्रदान करती हैं।",
        acceptableAnswers: [
          "जेनेरिक दवाइयां बहुत कम खर्च में वही उपचार लाभ देती हैं।"
        ],
        explanationEn: "'Identical therapeutic benefits' translates as समान चिकित्सीय लाभ.",
        explanationHi: "जेनेरिक दवाओं के लाभ का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day46_ex_041",
        type: "multiple_choice",
        prompt: "Which specialist would you consult for chronic sinus infections and hearing loss?",
        options: ["Otolaryngologist (ENT specialist)", "Dermatologist", "Cardiologist", "Pediatrician"],
        correctAnswer: "Otolaryngologist (ENT specialist)",
        explanationEn: "An otolaryngologist (ENT specialist) treats ear, nose, and throat conditions.",
        explanationHi: "कान, नाक और गले की समस्याओं के लिए ईएनटी विशेषज्ञ (Otolaryngologist) से परामर्श किया जाता है।",
        difficulty: "easy",
        skillTag: "SPECIALIST_IDENTIFICATION"
      },
      {
        id: "day46_ex_042",
        type: "active_recall",
        prompt: "What is the medical term for non-cancerous, non-malignant tissue growth in pathology?",
        correctAnswer: "Benign",
        acceptableAnswers: ["benign"],
        explanationEn: "'Benign' denotes a non-cancerous condition.",
        explanationHi: "कैंसर-रहित (हानिरहित) गांठ को 'benign' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day46_ex_043",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [machinery / sedative / after / do / operate / taking / not / this]",
        correctAnswer: "Do not operate machinery after taking this sedative.",
        explanationEn: "Imperative negative warning clause + Prepositional phrase.",
        explanationHi: "सही क्रम: Do not operate machinery after taking this sedative.",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day46_ex_044",
        type: "error_correction",
        prompt: "Correct the sentence: 'How much doses should I take?'",
        correctAnswer: "How many doses should I take?",
        acceptableAnswers: [
          "What dosage should I take?"
        ],
        explanationEn: "'Doses' is a countable noun, so use 'how many doses' or 'what dosage'.",
        explanationHi: "'Doses' गणनीय है; 'how many doses' या 'what dosage' बोलें।",
        difficulty: "easy",
        skillTag: "QUANTIFIERS"
      },
      {
        id: "day46_ex_045",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'डॉक्टर ने मेरे ब्लड प्रेशर के नुस्खे पर तीन रिफिल की अनुमति दी।'",
        correctAnswer: "The doctor authorized three refills on my blood pressure prescription.",
        acceptableAnswers: [
          "The physician approved three refills for my blood pressure medicine."
        ],
        explanationEn: "'The doctor authorized three refills on my blood pressure prescription.'",
        explanationHi: "'Authorized three refills' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day46_ex_046",
        type: "multiple_choice",
        prompt: "Which preposition correctly fills: 'She applied the cooling gel _______ her sunburned shoulders.'?",
        options: ["to", "at", "under", "during"],
        correctAnswer: "to",
        explanationEn: "Collocation: 'apply ointment/gel TO [skin]'.",
        explanationHi: "त्वचा पर मरहम लगाने के लिए 'apply to' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "PREPOSITIONS"
      },
      {
        id: "day46_ex_047",
        type: "speaking_pronunciation",
        prompt: "Read aloud with accurate stress on the third syllable: 'The pediatrician vaccinated the toddler against measles.'",
        correctAnswer: "The pediatrician vaccinated the toddler against measles.",
        explanationEn: "Stress pattern in /ˌpiː.di.əˈtrɪʃ.ən/.",
        explanationHi: "'Pediatrician' के तीसरे सिलेबल पर बल दें।",
        difficulty: "medium",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day46_ex_048",
        type: "fill_blank",
        prompt: "A written document from a doctor authorizing a patient to receive a specific medicine is a _______.",
        correctAnswer: "prescription",
        explanationEn: "A 'prescription' is the official medical order.",
        explanationHi: "डॉक्टर के पर्चे को 'prescription' कहते हैं।",
        difficulty: "easy",
        skillTag: "PHARMACY_TERMS"
      },
      {
        id: "day46_ex_049",
        type: "sentence_transformation",
        prompt: "Rewrite using 'authorized': 'The doctor gave permission for two more refills of the medicine.'",
        correctAnswer: "The doctor authorized two more refills of the medication.",
        explanationEn: "'Authorized' is the professional clinical term.",
        explanationHi: "'Authorized two more refills' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "LEXICAL_TRANSFORMATION"
      },
      {
        id: "day46_ex_050",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nTechnician: 'Please remove all metallic objects, jewelry, and belts.'\nPatient: 'Is that because I am entering the _______ imaging room?'",
        options: ["MRI", "syllabus", "auditorium", "turnstile"],
        correctAnswer: "MRI",
        explanationEn: "MRI uses powerful magnetic fields, requiring removal of all ferromagnetic metal.",
        explanationHi: "एमआरआई (MRI) मशीन में धातु की वस्तुएं प्रतिबंधित हैं।",
        difficulty: "easy",
        skillTag: "DIAGNOSTIC_SAFETY"
      },
      {
        id: "day46_ex_051",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The patient leaflet describes possible adverse interactions with alcohol.'",
        correctAnswer: "रोगी सूचना पत्रक शराब के साथ संभावित प्रतिकूल प्रभावों का वर्णन करता है।",
        acceptableAnswers: [
          "दवा की पर्ची में शराब के साथ होने वाले नुकसानदेह असर लिखे हैं।"
        ],
        explanationEn: "'Adverse interactions' translates as प्रतिकूल प्रभाव / नुकसानदेह परस्पर क्रिया.",
        explanationHi: "प्रतिकूल प्रभावों का अनुवाद।",
        difficulty: "hard",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day46_ex_052",
        type: "multiple_choice",
        prompt: "What does 'malignant' mean in a pathology biopsy report?",
        options: ["Cancerous and potentially invasive", "Non-cancerous and harmless", "Cured completely", "Healthy blood"],
        correctAnswer: "Cancerous and potentially invasive",
        explanationEn: "'Malignant' indicates a cancerous, harmful, invasive medical condition.",
        explanationHi: "घातक या कैंसरयुक्त गांठ को 'malignant' कहते हैं।",
        difficulty: "medium",
        skillTag: "PATHOLOGY_TERMS"
      },
      {
        id: "day46_ex_053",
        type: "error_correction",
        prompt: "Correct the sentence: 'She went to the eye specialist to test her eye sights.'",
        correctAnswer: "She went to an ophthalmologist to test her eyesight.",
        acceptableAnswers: [
          "She went to an optometrist to test her vision.",
          "She visited an ophthalmologist to have her vision tested."
        ],
        explanationEn: "Use 'ophthalmologist' (or optometrist) and uncountable 'eyesight' / 'vision'.",
        explanationHi: "'Eyesight' अगणनीय है और विशेषज्ञ को 'ophthalmologist' कहते हैं।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day46_ex_054",
        type: "active_recall",
        prompt: "What is the medical term for a physician who specializes in administering anesthesia before and during surgery?",
        correctAnswer: "Anesthesiologist",
        acceptableAnswers: ["anesthesiologist", "anaesthetist"],
        explanationEn: "An 'anesthesiologist' administers anesthesia.",
        explanationHi: "एनेस्थीसिया देने वाले विशेषज्ञ डॉक्टर को 'anesthesiologist' कहते हैं।",
        difficulty: "hard",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day46_ex_055",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'सभी रक्त जांच रिपोर्ट कल दोपहर तक तैयार हो जाएंगी।'",
        correctAnswer: "All blood test reports will be ready by tomorrow afternoon.",
        acceptableAnswers: [
          "All pathology test results will be ready by tomorrow afternoon.",
          "The blood test results will be available by tomorrow afternoon."
        ],
        explanationEn: "'All blood test reports will be ready by tomorrow afternoon.'",
        explanationHi: "'Blood test reports will be ready by tomorrow afternoon' सही है।",
        difficulty: "easy",
        skillTag: "TRANSLATION_HI_EN"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day46_dial_001",
        title: "Controlled Pharmacy Prescription Fulfillment & Generic Inquiries",
        context: "A customer (Vikram) filling a prescription at a pharmacy counter and asking the pharmacist (Sarah) about generic alternatives.",
        characters: ["Vikram", "Pharmacist Sarah"],
        lines: [
          { speaker: "Vikram", text: "Good morning. I would like to fill this prescription for my cholesterol medication, please.", hindi: "शुभ प्रभात। कृपया मैं अपनी कोलेस्ट्रॉल की दवा के लिए यह पर्चा बनवाना चाहता हूँ।" },
          { speaker: "Pharmacist Sarah", text: "Good morning! The doctor has prescribed brand-name Lipitor 20 milligrams. Would you prefer the branded version or an FDA-approved generic atorvastatin?", hindi: "शुभ प्रभात! डॉक्टर ने ब्रांड-नेम लिपिटर 20 मिलीग्राम लिखा है। क्या आप ब्रांडेड संस्करण पसंद करेंगे या एफडीए-अनुमोदित जेनेरिक एटोरवास्टेटिन?" },
          { speaker: "Vikram", text: "Is the generic substitute identical in efficacy and dosage?", hindi: "क्या जेनेरिक विकल्प प्रभावशीलता और खुराक में बिल्कुल समान है?" },
          { speaker: "Pharmacist Sarah", text: "Yes, exactly identical active ingredient and bio-equivalence, but it costs seventy percent less.", hindi: "हाँ, बिल्कुल समान सक्रिय तत्व और जैव-समतुल्यता, लेकिन इसकी कीमत सत्तर प्रतिशत कम है।" },
          { speaker: "Vikram", text: "That is wonderful. Please give me a thirty-day supply of the generic version.", hindi: "यह बहुत बढ़िया है। कृपया मुझे जेनेरिक संस्करण की तीस दिन की आपूर्ति दें।" },
          { speaker: "Pharmacist Sarah", text: "Here you go. Take one tablet orally at bedtime, and avoid consuming grapefruit while on this medication.", hindi: "यह लीजिए। सोते समय मुंह से एक गोली लें, और इस दवा को लेते समय अंगूर का सेवन करने से बचें।" }
        ]
      },
      {
        id: "day46_dial_002",
        title: "Guided Specialist Referral Consultation with an Orthopedic Surgeon",
        context: "A patient (Ananya) consulting an orthopedic surgeon (Dr. Patel) regarding persistent knee cartilage issues.",
        characters: ["Ananya", "Dr. Patel"],
        lines: [
          { speaker: "Ananya", text: "Good afternoon, Dr. Patel. My general physician referred me to you following my recent knee MRI scan.", hindi: "शुभ दोपहर, डॉ. पटेल। मेरे सामान्य चिकित्सक ने मेरे हालिया घुटने के एमआरआई स्कैन के बाद मुझे आपके पास भेजा।" },
          { speaker: "Dr. Patel", text: "Good afternoon, Ananya. I have reviewed your MRI imaging. You have a minor meniscus tear in your right knee joint.", hindi: "शुभ दोपहर, अनन्या। मैंने आपकी एमआरआई इमेजिंग की समीक्षा की है। आपके दाहिने घुटने के जोड़ में मेनिस्कस में एक मामूली चीरा (टियर) है।" },
          { speaker: "Ananya", text: "Does this condition require immediate surgical arthroscopy, or can we try conservative management first?", hindi: "क्या इस स्थिति में तत्काल सर्जिकल आर्थोस्कोपी की आवश्यकता है, या हम पहले गैर-सर्जिकल रूढ़िवादी उपचार आजमा सकते हैं?" },
          { speaker: "Dr. Patel", text: "Given that the tear is small and stable, I strongly recommend a six-week course of targeted physical therapy and anti-inflammatory medication before considering surgery.", hindi: "यह देखते हुए कि चीरा छोटा और स्थिर है, मैं सर्जरी पर विचार करने से पहले लक्षित फिजियोथेरेपी और सूजन-रोधी दवाओं के छह-सप्ताह के कोर्स की जोरदार सिफारिश करता हूँ।" },
          { speaker: "Ananya", text: "That sounds like a very sensible approach. I will schedule the physical therapy sessions immediately.", hindi: "यह बहुत समझदारी भरा तरीका लगता है। मैं तुरंत फिजियोथेरेपी सत्र तय करूँगी।" }
        ]
      },
      {
        id: "day46_dial_003",
        title: "Free Problem-Resolution: Diagnostic Lab Fasting Clarification & Pathology Results",
        context: "A patient clarifying fasting protocols before an ultrasound and blood lipid panel with a laboratory technician.",
        characters: ["Patient", "Lab Technician"],
        lines: [
          { speaker: "Patient", text: "Hello, I am scheduled for a comprehensive blood lipid panel and an abdominal ultrasound tomorrow morning.", hindi: "नमस्ते, कल सुबह मेरी एक व्यापक रक्त लिपिड प्रोफाइल और पेट के अल्ट्रासाउंड की जांच तय है।" },
          { speaker: "Lab Technician", text: "Hello! Please ensure that you observe complete overnight fasting for ten to twelve hours prior to your 8:00 AM appointment.", hindi: "नमस्ते! कृपया सुनिश्चित करें कि आप सुबह 8:00 बजे के अपने अपॉइंटमेंट से पहले दस से बारह घंटे का पूरा रात भर का उपवास रखें।" },
          { speaker: "Patient", text: "Am I permitted to drink plain water or take my regular morning blood pressure tablet?", hindi: "क्या मुझे सादा पानी पीने या अपनी नियमित सुबह की रक्तचाप की गोली लेने की अनुमति है?" },
          { speaker: "Lab Technician", text: "Yes, small sips of plain water and essential blood pressure medications are permitted. Avoid milk, tea, coffee, and all solid food.", hindi: "हाँ, सादे पानी के छोटे घूंट और आवश्यक रक्तचाप की दवाएं लेने की अनुमति है। दूध, चाय, कॉफी और सभी ठोस भोजन से बचें।" },
          { speaker: "Patient", text: "Understood. When can I expect the diagnostic imaging and pathology reports to be available?", hindi: "समझ गया। मैं डायग्नोस्टिक इमेजिंग और पैथोलॉजी रिपोर्ट कब तक उपलब्ध होने की उम्मीद कर सकता हूँ?" },
          { speaker: "Lab Technician", text: "The ultrasound radiologist will provide your report tomorrow afternoon, and the blood panel will be emailed to your patient portal within twenty-four hours.", hindi: "अल्ट्रासाउंड रेडियोलॉजिस्ट कल दोपहर आपकी रिपोर्ट प्रदान करेगा, और रक्त प्रोफाइल चौबीस घंटे के भीतर आपके रोगी पोर्टल पर ईमेल कर दी जाएगी।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are speaking with a pharmacist to fill a new prescription and inquire about dosage instructions, generic equivalents, and potential food/drug interactions.",
      prompts: [
        "Present your prescription and ask if generic bio-equivalents are available.",
        "Inquire about the exact dosage schedule (e.g., before meals, with water, at bedtime).",
        "Ask about potential side effects (e.g., drowsiness, dizziness) and drug contraindications.",
        "Confirm how many prescription refills are authorized by your doctor."
      ],
      targetExpressions: [
        "I would like to fill this prescription...",
        "Do you have a generic substitute for...?",
        "Should this be taken before or after meals?",
        "Are there any contraindications with...?"
      ]
    },
    roleplay: {
      scenario: "Specialist doctor consultation between a dermatologist and a patient with a chronic skin condition.",
      roleA: "Patient: Explaining rash symptoms, duration, prior ineffective OTC creams, and asking about prescription ointments.",
      roleB: "Dermatologist: Examining the skin, diagnosing eczema or contact dermatitis, prescribing topical steroids, and advising allergen avoidance.",
      sampleDialogue: "Dermatologist: 'How long have you noticed these red flaky patches?' | Patient: 'They flared up about three weeks ago and topical moisturizers haven't helped.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day46_bm_001",
        title: "Pharmacy Interaction & Generic Medication Benchmark",
        prompt: "Conduct a dialogue with a pharmacist requesting prescription fulfillment, asking for a generic equivalent, and clarifying dosage and side effects in 4–5 coherent sentences.",
        sampleAnswerEn: "Good morning. I would like to fill this prescription for amlodipine 5 milligrams. Could you please check whether an FDA-approved generic substitute is available? Also, could you clarify whether I should take this tablet in the morning or with evening meals? Lastly, please let me know if there are any specific food interactions or driving cautions associated with this medication.",
        sampleAnswerHi: "शुभ प्रभात। मैं एम्लोडिपिन 5 मिलीग्राम के लिए यह पर्चा बनवाना चाहता हूँ। क्या आप कृपया जांच सकते हैं कि क्या कोई एफडीए-अनुमोदित जेनेरिक विकल्प उपलब्ध है? इसके अलावा, क्या आप स्पष्ट कर सकते हैं कि मुझे यह गोली सुबह लेनी चाहिए या शाम के भोजन के साथ? अंत में, कृपया मुझे बताएं कि क्या इस दवा के साथ कोई विशिष्ट भोजन अंतःक्रिया (फूड इंटरैक्शन) या ड्राइविंग सावधानियां जुड़ी हैं।",
        evaluationCriteria: "Pharmacology register ('fill this prescription', 'FDA-approved generic substitute', 'specific food interactions', 'driving cautions'), natural syntactic flow."
      },
      {
        id: "day46_bm_002",
        title: "Medical Specialist Referral Benchmark",
        prompt: "Explain a specialist consultation referral (e.g., cardiologist, orthopedist, or neurologist) to a family member, detailing the medical rationale and proposed diagnostic testing.",
        sampleAnswerEn: "Following my routine annual health checkup, my general physician referred me to a cardiologist for comprehensive cardiac evaluation. Because my resting ECG showed minor irregularities, the specialist has ordered a 2D echocardiogram and a treadmill stress test. We want to ensure that my coronary arteries and heart valves are functioning optimally before starting an intensive cardiovascular exercise routine.",
        sampleAnswerHi: "मेरे नियमित वार्षिक स्वास्थ्य परीक्षण के बाद, मेरे सामान्य चिकित्सक ने मुझे व्यापक हृदय मूल्यांकन के लिए एक हृदय रोग विशेषज्ञ (कार्डियोलॉजिस्ट) के पास भेजा। चूंकि मेरे आराम के ईसीजी में मामूली अनियमितताएं दिखीं, विशेषज्ञ ने 2डी इकोकार्डियोग्राम और ट्रेडमिल स्ट्रेस टेस्ट लिखा है। हम यह सुनिश्चित करना चाहते हैं कि एक गहन कार्डियोवैस्कुलर व्यायाम दिनचर्या शुरू करने से पहले मेरी कोरोनरी धमनियां और हृदय के वाल्व बेहतर ढंग से काम कर रहे हैं।",
        evaluationCriteria: "Accurate clinical vocabulary ('referred me to a cardiologist', 'resting ECG', '2D echocardiogram', 'coronary arteries'), seamless structural logic."
      },
      {
        id: "day46_bm_003",
        title: "Diagnostic Investigation & Pathology Interpretation Benchmark",
        prompt: "Summarize diagnostic lab and biopsy results accurately in 4–5 sentences, conveying findings regarding pathology, radiology, and treatment recommendations.",
        sampleAnswerEn: "I received the official pathology and radiology reports from the hospital diagnostic center today. The abdominal ultrasound scan confirmed that all internal organs appear completely normal without structural abnormalities. Furthermore, the needle biopsy results showed benign tissue with no evidence of cellular malignancy. The physician advised a follow-up routine ultrasound in twelve months simply as a precautionary measure.",
        sampleAnswerHi: "मुझे आज अस्पताल के डायग्नोस्टिक सेंटर से आधिकारिक पैथोलॉजी और रेडियोलॉजी रिपोर्ट प्राप्त हुईं। पेट के अल्ट्रासाउंड स्कैन ने पुष्टि की कि सभी आंतरिक अंग बिना किसी संरचनात्मक असामान्यता के पूरी तरह से सामान्य दिखाई देते हैं। इसके अलावा, सुई बायोप्सी के नतीजों ने सेलुलर दुर्दमता (कैंसर) के किसी सबूत के बिना सौम्य (बेनाइन) ऊतक दिखाया। चिकित्सक ने केवल एहतियाती उपाय के रूप में बारह महीनों में एक फॉलो-अप नियमित अल्ट्रासाउंड की सलाह दी।",
        evaluationCriteria: "Clinical terminology ('pathology and radiology reports', 'no evidence of cellular malignancy', 'benign tissue', 'precautionary measure'), professional syntax."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "Why should you say 'I take medication' instead of '*I eat medicine*'?", a: "In English, medicines are 'taken', 'applied', or 'injected', never 'eaten'." },
      { q: "What is a 'pediatrician' vs an 'ophthalmologist'?", a: "A pediatrician specializes in children's medicine; an ophthalmologist specializes in eye diseases and eye surgery." },
      { q: "What is the difference between generic and brand-name drugs?", a: "Generic drugs contain identical active ingredients and bio-equivalence as brand-name drugs but cost significantly less." },
      { q: "What does 'benign' mean in a biopsy report?", a: "It means non-cancerous and harmless (the opposite of 'malignant')." },
      { q: "What does 'OTC' stand for?", a: "Over-The-Counter (medications available without a doctor's prescription)." }
    ],
    spacedTips: [
      "Review the names of medical specialists: Cardiologist, Dermatologist, Orthopedist, Neurologist, Pediatrician, ENT specialist, Ophthalmologist.",
      "Check your own medicine cabinet: identify active ingredients, expiry dates, and dosage warnings in English.",
      "Practice reading lab test names: Lipid Profile, Complete Blood Count (CBC), Ultrasound, MRI, Biopsy."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day46.js'), `export const day46 = ${JSON.stringify(day46, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Upgraded Day 46 (55 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks)");
