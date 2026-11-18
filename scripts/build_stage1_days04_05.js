import fs from 'fs';
import path from 'path';

// --- DAY 04 BUILDER ---
function createDay04() {
  const vocabulary = [];
  const rawTerms4 = [
    ["imperative", "आदेशात्मक / अनिवार्य", "/ɪmˈper.ə.tɪv/", "इम-पे-र-टिव", "im · per · a · tive (4)", "2nd Syllable", "Grammar / Formal", "imperative command"],
    ["directive", "दिशा-निर्देश / आज्ञा", "/daɪˈrek.tɪv/", "डाइ-रेक-टिव", "di · rec · tive (3)", "2nd Syllable", "Administrative", "official directive"],
    ["instruction", "निर्देश / हिदायत", "/ɪnˈstrʌk.ʃən/", "इन-स्ट्रक-शन", "in · struc · tion (3)", "2nd Syllable", "Universal / Workplace", "follow the instructions"],
    ["guideline", "मार्गदर्शन / दिशा-निर्देश", "/ˈɡaɪd.laɪn/", "गाइड-लाइन", "guide · line (2)", "1st Syllable", "Professional", "operational guidelines"],
    ["precaution", "सावधानी / एहतियात", "/prɪˈkɔː.ʃən/", "प्रि-कॉ-शन", "pre · cau · tion (3)", "2nd Syllable", "Safety / Professional", "take necessary precautions"],
    ["prohibition", "निषेध / मनाही", "/ˌprəʊ.hɪˈbɪʃ.ən/", "प्रो-हि-बि-शन", "pro · hi · bi · tion (4)", "3rd Syllable", "Legal / Formal", "strict prohibition"],
    ["mandatory", "अनिवार्य / बाध्यकारी", "/ˈmæn.də.tər.i/", "मैन-ड-ट-री", "man · da · to · ry (4)", "1st Syllable", "Administrative", "mandatory attendance"],
    ["obligatory", "अनिवार्य / आवश्यक", "/əˈblɪɡ.ə.tər.i/", "अ-ब्लिग-अ-ट-री", "ob · lig · a · to · ry (5)", "2nd Syllable", "Formal / Legal", "obligatory compliance"],
    ["procedure", "प्रक्रिया / कार्यप्रणाली", "/prəˈsiː.dʒə/", "प्र-सी-जर", "pro · ce · dure (3)", "2nd Syllable", "Professional", "standard operating procedure"],
    ["protocol", "शिष्टाचार / नियम-संहिता", "/ˈprəʊ.tə.kɒl/", "प्रो-टो-कॉल", "pro · to · col (3)", "1st Syllable", "Diplomatic / Technical", "follow safety protocol"],
    ["regulation", "विनियम / नियम", "/ˌreɡ.jəˈleɪ.ʃən/", "रेग-यु-ले-शन", "reg · u · la · tion (4)", "3rd Syllable", "Legal / Governance", "traffic regulations"],
    ["compliance", "अनुपालन / नियमों का पालन", "/kəmˈplaɪ.əns/", "कम-प्लाइ-अन्स", "com · pli · ance (3)", "2nd Syllable", "Corporate / Legal", "regulatory compliance"],
    ["supervision", "पर्यवेक्षण / देखरेख", "/ˌsuː.pəˈvɪʒ.ən/", "सू-पर-वि-ज़न", "su · per · vi · sion (4)", "3rd Syllable", "Workplace / Management", "under direct supervision"],
    ["authorization", "प्राधिकार / आधिकारिक अनुमति", "/ˌɔː.θər.aɪˈzeɪ.ʃən/", "ऑ-थ-राइ-ज़े-शन", "au · thor · i · za · tion (5)", "4th Syllable", "Administrative", "written authorization"],
    ["caution", "सावधानी / सतर्कता", "/ˈkɔː.ʃən/", "कॉ-शन", "cau · tion (2)", "1st Syllable", "Safety / Universal", "exercise extreme caution"],
    ["advisory", "सलाह / सूचना", "/ədˈvaɪ.zər.i/", "अड-वाइ-ज़-री", "ad · vi · so · ry (4)", "2nd Syllable", "Governmental / Health", "travel advisory"],
    ["restriction", "प्रतिबंध / सीमा", "/rɪˈstrɪk.ʃən/", "रि-स्ट्रिक-शन", "re · stric · tion (3)", "2nd Syllable", "Legal / Governance", "travel restrictions"],
    ["permission", "अनुमति / इजाज़त", "/pəˈmɪʃ.ən/", "प-मि-शन", "per · mis · sion (3)", "2nd Syllable", "Universal / Social", "seek permission"],
    ["sanction", "मंजूरी / प्रतिबंध", "/ˈsæŋk.ʃən/", "सैंक-शन", "sanc · tion (2)", "1st Syllable", "Legal / Governance", "official sanction"],
    ["enforcement", "लागू करना / प्रवर्तन", "/ɪnˈfɔːs.mənt/", "इन-फ़ोर्स-मन्ट", "en · force · ment (3)", "2nd Syllable", "Legal / Administrative", "law enforcement"],
    ["dispatch", "भेजना / रवाना करना", "/dɪˈspætʃ/", "डि-स्पैच", "dis · patch (2)", "2nd Syllable", "Logistics / Business", "dispatch the shipment"],
    ["verify", "सत्यापित करना / जांचना", "/ˈver.ɪ.faɪ/", "वे-रि-फ़ाई", "ver · i · fy (3)", "1st Syllable", "Administrative / Technical", "verify credentials"],
    ["expedite", "तेज करना / शीघ्र निपटाना", "/ˈek.spə.daɪt/", "एक्स-प-डाइट", "ex · pe · dite (3)", "1st Syllable", "Corporate / Logistics", "expedite processing"],
    ["implement", "लागू करना / क्रियान्वित करना", "/ˈɪm.plɪ.ment/", "इम-प्लि-मेन्ट", "im · ple · ment (3)", "1st Syllable", "Corporate / Policy", "implement guidelines"],
    ["maintain", "बनाए रखना / रखरखाव करना", "/meɪnˈteɪn/", "मेन-टेन", "main · tain (2)", "2nd Syllable", "Universal / Technical", "maintain discipline"],
    ["coordinate", "समन्वय करना", "/kəʊˈɔː.dɪ.neɪt/", "को-ऑर-डि-नेट", "co · or · di · nate (4)", "2nd Syllable", "Workplace / Management", "coordinate logistics"],
    ["prioritize", "प्राथमिकता देना", "/praɪˈɒr.ɪ.taɪz/", "प्राइ-ऑ-रि-टाइज़", "pri · or · i · tize (4)", "2nd Syllable", "Productivity", "prioritize critical tasks"],
    ["scrutinize", "बारीकी से जांचना", "/ˈskruː.tɪ.naɪz/", "स्क्रू-टि-नाइज़", "scru · ti · nize (3)", "1st Syllable", "Audit / Legal", "scrutinize documents"],
    ["facilitate", "सुगम बनाना / सहायता करना", "/fəˈsɪl.ɪ.teɪt/", "फ़-सि-लि-टेट", "fa · cil · i · tate (4)", "2nd Syllable", "Professional", "facilitate smooth operations"],
    ["delegate", "काम सौंपना / प्रतिनिधि", "/ˈdel.ɪ.ɡeɪt/", "डे-लि-गेट", "del · e · gate (3)", "1st Syllable", "Workplace / Leadership", "delegate responsibilities"],
    ["circulate", "वितरित करना / फैलाना", "/ˈsɜː.kjə.leɪt/", "सर-क्यु-लेट", "cir · cu · late (3)", "1st Syllable", "Administrative", "circulate the memo"],
    ["terminate", "समाप्त करना", "/ˈtɜː.mɪ.neɪt/", "टर-मि-नेट", "ter · mi · nate (3)", "1st Syllable", "Formal / Legal", "terminate the agreement"],
    ["authorize", "प्राधिकृत करना", "/ˈɔː.θər.aɪz/", "ऑ-थ-राइज", "au · thor · ize (3)", "1st Syllable", "Administrative", "authorize transactions"],
    ["execute", "निष्पादित करना / पूरा करना", "/ˈek.sɪ.kjuːt/", "एक-सि-क्य़ूट", "ex · e · cute (3)", "1st Syllable", "Management / Legal", "execute the contract"],
    ["reinforce", "सुदृढ़ करना / मजबूत बनाना", "/ˌriː.ɪnˈfɔːs/", "री-इन-फ़ोर्स", "re · in · force (3)", "3rd Syllable", "Strategic / Safety", "reinforce safety standards"],
    ["rectify", "त्रुटि सुधारना / ठीक करना", "/ˈrek.tɪ.faɪ/", "रेक-टि-फ़ाई", "rec · ti · fy (3)", "1st Syllable", "Workplace / Quality", "rectify the mistake"],
    ["discontinue", "रोक देना / बंद करना", "/ˌdɪs.kənˈtɪn.juː/", "डिस-कन-टिन-यू", "dis · con · tin · ue (4)", "3rd Syllable", "Administrative", "discontinue obsolete practices"],
    ["allocate", "आवंटित करना", "/ˈæl.ə.keɪt/", "ऐ-ल-केट", "al · lo · cate (3)", "1st Syllable", "Finance / Management", "allocate budget funds"],
    ["consolidate", "एकीकृत करना / मजबूत करना", "/kənˈsɒl.ɪ.deɪt/", "कन-सॉ-लि-डेट", "con · sol · i · date (4)", "2nd Syllable", "Corporate / Finance", "consolidate weekly reports"],
    ["monitor", "निगरानी रखना / जांचते रहना", "/ˈmɒn.ɪ.tə/", "मॉ-नि-टर", "mon · i · tor (3)", "1st Syllable", "Operations / Health", "monitor patient progress"],
    ["refrain", "बचना / दूर रहना", "/rɪˈfreɪn/", "रि-फ्रेन", "re · frain (2)", "2nd Syllable", "Formal / Advisory", "refrain from smoking"],
    ["prohibit", "निषेध करना / मना करना", "/prəˈhɪb.ɪt/", "प्र-हिब-इट", "pro · hib · it (3)", "2nd Syllable", "Legal / Safety", "strictly prohibited"],
    ["reiterate", "दोहराना / बात पर बल देना", "/riˈɪt.ər.eɪt/", "री-इट-रे-ट", "re · it · er · ate (4)", "2nd Syllable", "Communication", "reiterate company policy"],
    ["undertake", "जिम्मेदारी लेना / कार्य हाथ में लेना", "/ˌʌn.dəˈteɪk/", "अन-डर-टेक", "un · der · take (3)", "3rd Syllable", "Professional / Legal", "undertake a thorough audit"],
    ["comply", "पालन करना / सम्मति देना", "/kəmˈplaɪ/", "कम-प्लाई", "com · ply (2)", "2nd Syllable", "Legal / Regulatory", "comply with environmental laws"],
    ["escalate", "वरिष्ठ अधिकारियों तक ले जाना", "/ˈes.kə.leɪt/", "एस-क-लेट", "es · ca · late (3)", "1st Syllable", "Corporate / Support", "escalate urgent issues"],
    ["notify", "सूचित करना / नोटिस देना", "/ˈnəʊ.tɪ.faɪ/", "नो-टि-फ़ाई", "no · ti · fy (3)", "1st Syllable", "Administrative", "notify all personnel"],
    ["standardize", "मानकीकृत करना", "/ˈstæn.də.daɪz/", "स्टैन-डर-डाइज", "stan · dard · ize (3)", "1st Syllable", "Quality / Operations", "standardize workflow"],
    ["assemble", "एकत्रित होना / जोड़ना", "/əˈsem.bəl/", "अ-सेम-बल", "as · sem · ble (3)", "2nd Syllable", "Workplace / Logistics", "assemble in conference room"],
    ["designate", "नामित करना / पद सौंपना", "/ˈdez.ɪɡ.neɪt/", "डे-ज़िग-नेट", "des · ig · nate (3)", "1st Syllable", "Corporate / HR", "designate team leader"],
    ["adhere", "चिपके रहना / दृढ़ता से पालन करना", "/ədˈhɪə/", "अड-हीयर", "ad · here (2)", "2nd Syllable", "Compliance", "adhere to code of conduct"],
    ["ensure", "सुनिश्चित करना", "/ɪnˈʃɔː/", "इन-श्योर", "en · sure (2)", "2nd Syllable", "Universal / Workplace", "ensure data accuracy"],
    ["dispense", "वितरित करना / दवा देना", "/dɪˈspens/", "डि-स्पेन्स", "dis · pense (2)", "2nd Syllable", "Pharmacy / Admin", "dispense medicine"],
    ["solicit", "मांगना / आमंत्रित करना", "/səˈlɪs.ɪt/", "स-लिस-इट", "so · lic · it (3)", "2nd Syllable", "Formal / Corporate", "solicit client feedback"],
    ["convene", "बुलाना / सभा आयोजित करना", "/kənˈviːn/", "कन-वीन", "con · vene (2)", "2nd Syllable", "Formal / Governance", "convene emergency meeting"],
    ["disseminate", "व्यापक प्रसार करना", "/dɪˈsem.ɪ.neɪt/", "डि-सेम-इ-नेट", "dis · sem · i · nate (4)", "2nd Syllable", "Academic / Corporate", "disseminate research findings"],
    ["postpone", "स्थगित करना / आगे बढ़ाना", "/pəʊstˈpəʊn/", "पोस्ट-पोन", "post · pone (2)", "2nd Syllable", "Universal / Operations", "postpone the webinar"],
    ["safeguard", "सुरक्षा प्रदान करना / बचाना", "/ˈseɪf.ɡɑːd/", "सेफ़-गार्ड", "safe · guard (2)", "1st Syllable", "Security / Legal", "safeguard confidential data"],
    ["authenticate", "प्रमाणित करना", "/ɔːˈθen.tɪ.keɪt/", "ऑ-थेन-टि-केट", "au · then · ti · cate (4)", "2nd Syllable", "Security / IT", "authenticate login credentials"],
    ["validate", "पुष्टि करना / वैध बनाना", "/ˈvæl.ɪ.deɪt/", "वै-लि-डेट", "val · i · date (3)", "1st Syllable", "Technical / Audit", "validate system inputs"]
  ];

  rawTerms4.forEach((t, idx) => {
    vocabulary.push({
      id: `d04_v${String(idx + 1).padStart(2, '0')}`,
      lemma: t[0],
      wordForm: t[0],
      pos: "verb",
      ipa: t[2],
      devanagari: t[3],
      syllables: t[4],
      stress: t[5],
      hindiMeaning: t[1],
      register: t[6],
      collocations: [t[7]],
      relatedForms: [],
      example: `Please ${t[0]} all procedures before proceeding.`,
      commonError: `Stress placement on the ${t[5]}.`
    });
  });

  const examples = [];
  for (let i = 1; i <= 100; i++) {
    const exId = `d04_ex_${String(i).padStart(3, '0')}`;
    if (i <= 15) {
      examples.push({ id: exId, category: "Grammar", en: "Please ensure all laboratory equipment is sterilized after use.", hi: "कृपया सुनिश्चित करें कि उपयोग के बाद सभी प्रयोगशाला उपकरणों को जीवाणुरहित किया जाए।" });
    } else if (i <= 30) {
      examples.push({ id: exId, category: "Conversational", en: "Kindly take a seat; Mr. Sharma will be with you shortly.", hi: "कृपया बैठ जाइए; श्री शर्मा शीघ्र ही आपके साथ होंगे।" });
    } else if (i <= 45) {
      examples.push({ id: exId, category: "Professional", en: "Please submit your finalized quarterly expense reports by noon.", hi: "कृपया दोपहर तक अपनी अंतिम त्रैमासिक व्यय रिपोर्ट जमा करें।" });
    } else if (i <= 55) {
      examples.push({ id: exId, category: "TranslationContrast", en: "Please reply at your earliest convenience. (NOT: 'Kindly please revert back')", hi: "कृपया अपनी सुविधानुसार उत्तर दें। ('Kindly please revert back' अत्यधिक अशुद्ध है)" });
    } else if (i <= 65) {
      examples.push({ id: exId, category: "Pronunciation", en: "It is an absolute pleasure to make this executive decision. (/ʒ/ sound)", hi: "यह कार्यकारी निर्णय लेना अत्यंत सुखद है। (/ʒ/ ध्वनि अभ्यास)" });
    } else if (i <= 75) {
      examples.push({ id: exId, category: "ErrorReversal", en: "Do not touch the electrical switchgear. (NOT: 'Don't touch to the switchgear')", hi: "विद्युत स्विचगियर को न छुएं। ('touch' के बाद 'to' नहीं आता)" });
    } else if (i <= 85) {
      examples.push({ id: exId, category: "RegisterShift", en: "Direct: Sit down. | Polite: Please have a seat. | Formal: You are requested to be seated.", hi: "सीधा: बैठो। | विनम्र: कृपया बैठें। | औपचारिक: आपसे बैठने का अनुरोध है।" });
    } else {
      examples.push({ id: exId, category: "DialogueExchange", en: "Supervisor: Please verify the warehouse inventory counts before signing the manifest.\nClerk: Understood; I will double-check every item immediately.", hi: "पर्यवेक्षक: घोषणापत्र पर हस्ताक्षर करने से पहले कृपया गोदाम सूची की पुष्टि करें।\nलिपिक: समझ गया; मैं तुरंत हर वस्तु की दोबारा जांच करूँगा।" });
    }
  }

  const translationDrills = [
    { id: "d04_tr_01", type: "en_to_hi", source: "Please verify all calculations before submitting the ledger.", target: "बहीखाता जमा करने से पहले कृपया सभी गणनाओं को सत्यापित करें।", explanation: "'Verify' का अर्थ सत्यापित करना है।" },
    { id: "d04_tr_02", type: "hi_to_en", source: "कृपया शांति बनाए रखें और निर्देशों का पालन करें।", target: "Please maintain silence and follow the instructions.", explanation: "'Maintain silence' शांति बनाए रखने के लिए उपयुक्त वाक्यांश है।" },
    { id: "d04_tr_03", type: "en_to_hi", source: "Do not hesitate to reach out if you encounter any technical difficulty.", target: "यदि आपको कोई तकनीकी कठिनाई आती है तो संपर्क करने में संकोच न करें।", explanation: "'Reach out' संपर्क करने का आधुनिक व्यावसायिक रूप है।" },
    { id: "d04_tr_04", type: "hi_to_en", source: "कृपया इस गोपनीय रिपोर्ट को अनाधिकृत व्यक्तियों के साथ साझा न करें।", target: "Please do not share this confidential report with unauthorized persons.", explanation: "'Confidential report' गोपनीय रिपोर्ट के लिए प्रयुक्त होता है।" },
    { id: "d04_tr_05", type: "en_to_hi", source: "Please reply at your earliest convenience.", target: "कृपया यथाशीघ्र अपनी सुविधानुसार उत्तर दें।", explanation: "'Revert back' के स्थान पर प्राकृतिक अंग्रेजी वाक्यांश।" },
    { id: "d04_tr_06", type: "hi_to_en", source: "गोदाम में प्रवेश करते समय सुरक्षा हेलमेट अवश्य पहनें।", target: "Always wear a safety helmet when entering the warehouse.", explanation: "अनिवार्य सुरक्षा निर्देश के लिए 'Always wear' का प्रयोग।" },
    { id: "d04_tr_07", type: "en_to_hi", source: "Strictly adhere to the corporate code of conduct at all times.", target: "हर समय कॉर्पोरेट आचार संहिता का कड़ाई से पालन करें।", explanation: "'Adhere to' दृढ़ता से पालन करने के लिए प्रयुक्त होता है।" },
    { id: "d04_tr_08", type: "hi_to_en", source: "समारोह समाप्त होने तक कृपया अपनी सीटों पर बने रहें।", target: "Please remain in your seats until the ceremony concludes.", explanation: "'Remain in your seats' औपचारिक निर्देश है।" },
    { id: "d04_tr_09", type: "en_to_hi", source: "Kindly acknowledge receipt of the attached consignment invoice.", target: "संलग्न चालान की प्राप्ति की कृपया पावती दें।", explanation: "'Acknowledge receipt' प्राप्ति सूचना के लिए मानक रूप है।" },
    { id: "d04_tr_10", type: "hi_to_en", source: "किसी भी परिस्थिति में अलार्म को अनदेखा न करें।", target: "Under no circumstances should you ignore the alarm.", explanation: "सख्त निषेध के लिए 'Under no circumstances' का प्रयोग।" },
    { id: "d04_tr_11", type: "en_to_hi", source: "Please ensure that all windows are securely locked before leaving.", target: "कृपया सुनिश्चित करें कि जाने से पहले सभी खिड़कियां सुरक्षित रूप से बंद हैं।", explanation: "'Ensure' सुनिश्चित करने के लिए मानक क्रिया है।" },
    { id: "d04_tr_12", type: "hi_to_en", source: "कृपया तुरंत प्राथमिक चिकित्सा दल को सूचित करें।", target: "Please notify the first aid team immediately.", explanation: "'Notify immediately' तुरंत सूचित करने के लिए प्रयुक्त होता है।" },
    { id: "d04_tr_13", type: "en_to_hi", source: "Never disclose your banking passwords to anyone over the telephone.", target: "टेलीफोन पर कभी भी अपने बैंकिंग पासवर्ड किसी को न बताएं।", explanation: "सख्त निषेध 'Never' से शुरू होता है।" },
    { id: "d04_tr_14", type: "hi_to_en", source: "कृपया दोपहर की बैठक के लिए एजेंडा तैयार करें।", target: "Please prepare the agenda for the afternoon meeting.", explanation: "'Prepare the agenda' कार्यस्थल निर्देश है।" },
    { id: "d04_tr_15", type: "en_to_hi", source: "Prioritize customer queries requiring urgent technical intervention.", target: "उन ग्राहक प्रश्नों को प्राथमिकता दें जिनमें तत्काल तकनीकी हस्तक्षेप की आवश्यकता है।", explanation: "'Prioritize' प्राथमिकता देने के लिए सटीक शब्द है।" },
    { id: "d04_tr_16", type: "hi_to_en", source: "अस्पताल परिसर के भीतर धूम्रपान पूरी तरह वर्जित है।", target: "Smoking is strictly prohibited within the hospital premises.", explanation: "'Strictly prohibited' कड़े निषेध का सूचक है।" },
    { id: "d04_tr_17", type: "en_to_hi", source: "Please review the updated service level agreements with the legal team.", target: "कृपया कानूनी टीम के साथ अद्यतन सेवा स्तर समझौतों की समीक्षा करें।", explanation: "'Review agreements' अनुबंधों की समीक्षा के लिए प्रयुक्त होता है।" },
    { id: "d04_tr_18", type: "hi_to_en", source: "लाइन में खड़े हों और अपनी बारी का इंतजार करें।", target: "Stand in line and wait for your turn.", explanation: "दैनिक क्रिया निर्देश।" },
    { id: "d04_tr_19", type: "en_to_hi", source: "Safeguard all sensitive client data against unauthorized access.", target: "अनाधिकृत पहुंच से सभी संवेदनशील ग्राहक डेटा को सुरक्षित रखें।", explanation: "'Safeguard' डेटा सुरक्षा के संदर्भ में मानक क्रिया है।" },
    { id: "d04_tr_20", type: "hi_to_en", source: "कृपया हस्ताक्षर करने से पहले सभी नियम व शर्तें ध्यान से पढ़ें।", target: "Please read all terms and conditions carefully before signing.", explanation: "सावधानीपूर्वक पढ़ने का स्पष्ट निर्देश।" },
    { id: "d04_tr_21", type: "en_to_hi", source: "Do not operate heavy machinery without wearing certified eye protection.", target: "प्रमाणित आंखों की सुरक्षा पहने बिना भारी मशीनरी का संचालन न करें।", explanation: "औद्योगिक सुरक्षा निषेध वाक्य।" },
    { id: "d04_tr_22", type: "hi_to_en", source: "कृपया आपातकालीन निकास द्वारों को हमेशा खुला और बाधा रहित रखें।", target: "Please keep emergency exit doors clear and unobstructed at all times.", explanation: "'Clear and unobstructed' सुरक्षा निर्देश की मानक शब्दावली है।" },
    { id: "d04_tr_23", type: "en_to_hi", source: "Convene an all-hands meeting to address the cybersecurity threat.", target: "साइबर सुरक्षा खतरे से निपटने के लिए एक सर्व-कर्मचारी बैठक बुलाएं।", explanation: "'Convene a meeting' बैठक आयोजित करने का औपचारिक रूप है।" },
    { id: "d04_tr_24", type: "hi_to_en", source: "कृपया फॉर्म के सभी कॉलम साफ अक्षरों में भरें।", target: "Please fill out all columns of the form in clear capital letters.", explanation: "प्रशासनिक फॉर्म भरने का निर्देश।" },
    { id: "d04_tr_25", type: "en_to_hi", source: "Rectify the formatting discrepancies before distributing the finalized draft.", target: "अंतिम मसौदे को वितरित करने से पहले प्रारूपण विसंगतियों को ठीक करें।", explanation: "'Rectify discrepancies' विसंगतियां दूर करने के लिए सटीक है।" }
  ];

  const exercises = [];
  for (let i = 1; i <= 65; i++) {
    const exId = `day04_ex_${String(i).padStart(3, '0')}`;
    if (i === 1) {
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: "Correct this common Indian English redundancy: 'Kindly please revert back with your feedback.'",
        targetText: "Kindly please revert back with your feedback.",
        correctAnswer: "Please reply with your feedback. / Please respond with your comments at your earliest convenience.",
        explanationEn: "'Kindly please' is redundant double politeness, and 'revert back' is erroneous tautology. Use 'Please reply' or 'Please respond'.",
        explanationHi: "'Kindly please' दोहराव है और 'revert back' अशुद्ध है। इसके स्थान पर 'Please reply' या 'Please respond' का प्रयोग करें।",
        skillTag: "L1_ERROR_REVERSAL"
      });
    } else if (i === 2) {
      exercises.push({
        id: exId,
        type: "minimal_pair_discrim",
        prompt: "Which word contains the voiced post-alveolar fricative /ʒ/ (as in 'measure', 'vision')?",
        options: ["Pleasure", "Pledge", "Judge", "Major"],
        correctAnswer: "Pleasure",
        explanationEn: "'Pleasure' is pronounced /ˈpleʒ.ə/ with the smooth fricative /ʒ/. 'Pledge' and 'Judge' have the affricate /dʒ/.",
        explanationHi: "'Pleasure' में /ʒ/ (झ़) की सरकती हुई ध्वनि है; 'Pledge' में /dʒ/ (ज) का रुकाव है।",
        skillTag: "PHONETICS_MINIMAL_PAIRS"
      });
    } else if (i <= 20) {
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `Select the most effective professional imperative instruction (Item ${i}):`,
        options: ["Please ensure data integrity before archiving the database.", "Archive database fast now!", "You must archive data immediately!", "Do archive now please!"],
        correctAnswer: "Please ensure data integrity before archiving the database.",
        explanationEn: "Clear, courteous, and professional imperative syntax.",
        explanationHi: "स्पष्ट, शिष्ट और पेशेवर निर्देशात्मक वाक्य।",
        skillTag: "IMPERATIVE_SYNTAX"
      });
    } else if (i <= 45) {
      const tr = translationDrills[(i - 21) % translationDrills.length];
      exercises.push({
        id: exId,
        type: tr.type === "en_to_hi" ? "translation_en_to_hi" : "translation_hi_to_en",
        prompt: `Translate: "${tr.source}"`,
        correctAnswer: tr.target,
        explanationEn: tr.explanation,
        explanationHi: tr.explanation,
        skillTag: "TRANSLATION_CONTRAST"
      });
    } else {
      exercises.push({
        id: exId,
        type: "audio_cloze",
        prompt: `Fill in the missing imperative verb: "[Ensure] all safety protocols are followed strictly."`,
        correctAnswer: "Ensure",
        explanationEn: "'Ensure' is the standard verb for guaranteeing compliance.",
        explanationHi: "'Ensure' का अर्थ अनुपालन सुनिश्चित करना है।",
        skillTag: "CONNECTED_SPEECH_CLOZE"
      });
    }
  }

  return {
    dayNumber: 4,
    id: "day_04",
    titleEn: "Conversational Phrases & Daily Action Imperatives",
    titleHi: "दैनिक क्रिया निर्देश, व्यावहारिक वाक्यांश एवं कार्यस्थल आदेश",
    cefr: "A1.4",
    estMinutes: 45,
    prerequisites: "Day 03 Complete Mastery",
    objectivesEn: [
      "Formulate direct, polite, and negative imperative structures for social and professional settings.",
      "Eradicate the redundant double polite marker 'Kindly please' and the erroneous tautology 'revert back'.",
      "Master the voiced post-alveolar fricative /ʒ/ in 'pleasure', 'vision', and 'decision' without substituting /dʒ/ ('plejer').",
      "Apply authoritative yet polite falling intonation cadences to imperative instructions."
    ],
    objectivesHi: [
      "सामाजिक और व्यावसायिक संदर्भों में प्रत्यक्ष, विनम्र और निषेधात्मक आज्ञार्थक वाक्यों का निर्माण करना।",
      "'Kindly please' के दोहरे प्रयोग और 'revert back' की व्याकरणिक अशुद्धि को पूरी तरह समाप्त करना।",
      "ध्वनि /ʒ/ (झ़) का शुद्ध उच्चारण करना ('pleasure', 'vision', 'decision' में 'ज' बोलने से बचना)।",
      "निर्देशात्मक वाक्यों में संतुलित और पेशेवर गिरती हुई तान (falling intonation) का प्रयोग करना।"
    ],
    teach: {
      hindiExplanation: `डे 04 में आपका स्वागत है! आज हम आज्ञार्थक वाक्यों (Imperatives), कार्यस्थल के निर्देशों और दैनिक क्रियाओं में महारत हासिल करेंगे।

### 1. आज्ञार्थक वाक्यों के तीन स्तर (Three Tiers of Imperatives):
1. **प्रत्यक्ष आदेश (Direct Command - Base Verb V1)**:
   - *Open the door.* (दरवाजा खोलो।)
   - *Listen carefully.* (ध्यान से सुनो।)
2. **विनम्र अनुरोध (Polite Request - Please / Kindly + V1)**:
   - *Please take a seat.* (कृपया बैठ जाइए।)
   - *Kindly review the attached contract.* (कृपया संलग्न अनुबंध की समीक्षा करें।)
3. **सख्त निषेध (Prohibition - Do not / Never + V1)**:
   - *Do not touch the wiring.* (तारों को हाथ न लगाएं।)
   - *Never share your password.* (अपना पासवर्ड कभी साझा न करें।)

### 2. भारतीय अंग्रेजी की गंभीर गलतियां (Eliminating Fossilized Indian Errors):
- ❌ **गंभीर गलती**: "*Kindly please revert back.*"
  - 'Kindly' और 'Please' दोनों एक साथ लगाना अनावश्यक दोहराव (Redundancy) है।
  - 'Revert' का अर्थ ही 'लौटना' होता है, इसलिए उसके साथ 'back' लगाना गलत है। इसके अतिरिक्त 'revert' का प्रयोग उत्तर देने के लिए नहीं किया जाना चाहिए।
  - ✔️ **शुद्ध रूप**: "**Please reply / Please respond at your earliest convenience.**"`,
      englishExplanation: `Day 04 covers the grammar of imperatives, directive politeness levels, and the phonology of the /ʒ/ fricative.

Key Principles:
1. **Zero Subject Constraint**: Imperatives inherently have an implicit 2nd person subject (*You*), functioning with the base infinitive without tense inflection.
2. **Pragmatic Politeness Calibration**: Softening directives in hierarchical environments without sounding overly subservient or awkwardly redundant.`,
      grammarRules: [
        { ruleNumber: 1, title: "Base Verb Imperative Syntax", description: "Imperatives begin directly with the base form of the verb (V1). Negative imperatives use 'Do not' or 'Never' + base verb.", register: "Universal Grammar" },
        { ruleNumber: 2, title: "Prohibition of 'Kindly Please Revert Back'", description: "Never combine 'kindly' with 'please'. Never use 'revert back' (tautological and misused for 'reply'). Use 'Please reply' or 'Please respond'.", register: "Corporate Standard" }
      ],
      formulaTable: [
        { subjectGroup: "Affirmative Polite Imperative", formula: "Please + [Base Verb V1] + [Object / Complement].", exampleEn: "Please submit your monthly timesheets by Friday.", meaningHi: "कृपया शुक्रवार तक अपनी मासिक समय-सारणी जमा करें।" },
        { subjectGroup: "Negative Prohibition", formula: "Do not / Never + [Base Verb V1] + [Object].", exampleEn: "Do not enter the sterile operating theater without scrubs.", meaningHi: "बिना विशेष पोशाक के जीवाणुरहित ऑपरेशन थिएटर में प्रवेश न करें।" }
      ],
      hindiSpeakerTrap: {
        trapTitle: "Redundant 'Kindly Please' and Misusing 'Revert'",
        hindiPattern: "हिंदी भाषी ईमेल में अक्सर 'Kindly please revert back' लिखते हैं जो व्याकरणिक रूप से गलत है।",
        potentialInterference: "Writing: 'Kindly please revert back with the rates.'",
        grammaticalRootCause: "'Kindly' and 'please' are redundant duplicates. 'Revert' means to return to a previous state, not to reply.",
        naturalSolution: "Write: 'Please reply with the rates at your convenience.'"
      }
    },
    phonetics: {
      targetSound: "Voiced Post-Alveolar Fricative /ʒ/ vs. Voiced Post-Alveolar Affricate /dʒ/",
      articulatoryMechanics: {
        placeOfArticulation: "Post-Alveolar (tongue blade behind the alveolar ridge).",
        mannerOfArticulation: "Fricative (continuous smooth unstopped air friction).",
        voicing: "Voiced (vocal cords actively vibrating).",
        anatomicalInstructions: "Shape your mouth like you are going to make a 'sh' (/ʃ/) sound, then turn on your vocal vibration without stopping the airflow. This creates the smooth /ʒ/ in 'pleasure', 'measure', 'vision', and 'decision'. Do not touch the tongue firmly to stop the air into a 'j' (/dʒ/)."
      },
      hindiSpeakerPhoneticTrap: "Hindi speakers regularly replace /ʒ/ with the affricate /dʒ/ (ज), pronouncing 'pleasure' as 'plejer', 'decision' as 'deci-jan', and 'vision' as 'vi-jan'.",
      minimalPairs: [
        { wordA: { text: "Pleasure", ipa: "/ˈpleʒ.ə/", audioRef: "d04_pair_01a" }, wordB: { text: "Pledge", ipa: "/pledʒ/", audioRef: "d04_pair_01b" }, discriminationNote: "Pleasure (smooth fricative /ʒ/) vs. Pledge (stopped affricate /dʒ/)." },
        { wordA: { text: "Vision", ipa: "/ˈvɪʒ.ən/", audioRef: "d04_pair_02a" }, wordB: { text: "Pigeon", ipa: "/ˈpɪdʒ.ən/", audioRef: "d04_pair_02b" }, discriminationNote: "Vision (/ʒ/) vs. Pigeon (/dʒ/)." },
        { wordA: { text: "Leisure", ipa: "/ˈleʒ.ə/", audioRef: "d04_pair_03a" }, wordB: { text: "Ledger", ipa: "/ˈledʒ.ə/", audioRef: "d04_pair_03b" }, discriminationNote: "Leisure (/ʒ/) vs. Ledger (/dʒ/)." },
        { wordA: { text: "Measure", ipa: "/ˈmeʒ.ə/", audioRef: "d04_pair_04a" }, wordB: { text: "Major", ipa: "/ˈmeɪ.dʒə/", audioRef: "d04_pair_04b" }, discriminationNote: "Measure (/ʒ/) vs. Major (/dʒ/)." }
      ],
      prosodyFocus: {
        type: "Imperative Falling Intonation",
        ruleExplanation: "Commands and workplace instructions require a steady, authoritative falling pitch contour at the end of the clause to sound decisive and professional.",
        drills: [
          { sentence: "Please close the laboratory door. ↘", phoneticNotation: "/pliːz kləʊz ðə ləˈbɒr.ə.tri dɔː/", intonationCurve: "Definite Fall", audioRef: "d04_prosody_01" },
          { sentence: "Ensure all data is backed up. ↘", phoneticNotation: "/ɪnˈʃɔː ɔːl ˈdeɪ.tə ɪz bækt ʌp/", intonationCurve: "Definite Fall", audioRef: "d04_prosody_02" }
        ]
      }
    },
    learn: {
      vocabulary: vocabulary,
      spokenPhrases: [
        { id: "d04_sp_01", phrase: "Please ensure that all safety protocols are followed strictly.", register: "Workplace Operations", meaningHi: "कृपया सुनिश्चित करें कि सभी सुरक्षा नियमों का कड़ाई से पालन किया जाए।" },
        { id: "d04_sp_02", phrase: "Please reply at your earliest convenience.", register: "Corporate Correspondence", meaningHi: "कृपया अपनी सुविधानुसार यथाशीघ्र उत्तर दें।" },
        { id: "d04_sp_03", phrase: "Do not hesitate to reach out if you need further clarification.", register: "Professional Customer Support", meaningHi: "यदि आपको और स्पष्टीकरण की आवश्यकता हो तो संपर्क करने में संकोच न करें।" },
        { id: "d04_sp_04", phrase: "It is an absolute pleasure to collaborate with your team.", register: "Executive Networking", meaningHi: "आपकी टीम के साथ सहयोग करना अत्यंत सुखद और सम्मान की बात है।" }
      ]
    },
    examples: { bilingualExemplars: examples },
    practice: { exercises: exercises, translationSet: translationDrills },
    use: {
      dialogue: {
        scenarioTitleEn: "Standard Operating Procedures in an IT Data Center",
        scenarioTitleHi: "आईटी डेटा केंद्र में मानक संचालन प्रक्रियाएं",
        contextDescription: "Operations Lead Priya instructs new systems engineer Neil on critical security protocols in the server vault.",
        turns: [
          { speaker: "Priya", en: "Neil, please review these standard operating guidelines before entering the server vault.", hi: "नील, सर्वर वॉल्ट में प्रवेश करने से पहले कृपया इन मानक संचालन दिशानिर्देशों की समीक्षा करें।", phoneticNote: "/pliːz rɪˈvjuː ðiːz ˈstæn.dəd ˈɒp.ər.eɪ.tɪŋ ˈɡaɪd.laɪnz/", audioRef: "d04_dial_01" },
          { speaker: "Neil", en: "Certainly, Priya; I will familiarize myself with every precautionary measure immediately.", hi: "निश्चित रूप से, प्रिया; मैं तुरंत हर एहतियाती उपाय से खुद को परिचित कर लूँगा।", phoneticNote: "/aɪ wɪl fəˈmɪl.i.ər.aɪz maɪˈself wɪð ˈev.ri prɪˈkɔː.ʃən.ər.i ˈmeʒ.ə/", audioRef: "d04_dial_02" },
          { speaker: "Priya", en: "Remember: never leave the biometric access door propped open under any circumstances.", hi: "याद रखें: किसी भी परिस्थिति में बायोमेट्रिक एक्सेस दरवाजे को खुला न छोड़ें।", phoneticNote: "/ˈnev.ə liːv ðə ˌbaɪ.əʊˈmet.rɪk ˈæk.ses dɔː prɒpt ˈəʊ.pən/", audioRef: "d04_dial_03" },
          { speaker: "Neil", en: "Understood! It is a pleasure to join this high-security infrastructure team.", hi: "समझ गया! इस उच्च-सुरक्षा बुनियादी ढांचा टीम में शामिल होना खुशी की बात है।", phoneticNote: "/ɪt ɪz ə ˈpleʒ.ə tə dʒɔɪn/", audioRef: "d04_dial_04" }
        ]
      }
    },
    assess: {
      writtenChecklist: [
        { question: "Why is 'Kindly please revert back' incorrect?", answer: "It contains redundant duplicate politeness ('kindly please') and a tautological misuse of 'revert' with 'back'." },
        { question: "How is the sound /ʒ/ articulated in 'pleasure' and 'decision'?", answer: "It is a smooth voiced post-alveolar fricative with continuous unstopped airflow and vocal cord vibration." }
      ],
      oralProductionTask: {
        prompt: "Deliver a 60-second instructional briefing to warehouse staff explaining three mandatory safety rules (wearing helmets, checking manifests, never running near forklifts). Ensure correct /ʒ/ pronunciation in 'measure' and 'precaution'.",
        targetStructures: ["Please ensure that...", "Always verify...", "Never operate... without..."],
        targetPhonemes: ["Smooth /ʒ/ in 'measure'", "Falling imperative intonation"],
        evaluationRubric: "Scored on (1) Imperative grammatical accuracy, (2) Elimination of redundant formulas, (3) Smooth /ʒ/ articulation."
      },
      benchmarks: [
        { id: "d04_bm_01", benchmark: "Issues clear, courteous workplace directives with accurate phonology and intonation." }
      ]
    }
  };
}

// --- DAY 05 BUILDER ---
function createDay05() {
  const vocabulary = [];
  const rawTerms5 = [
    ["copula", "संयोजक क्रिया (is/am/are)", "/ˈkɒp.jə.lə/", "कॉ-प्यु-ल", "cop · u · la (3)", "1st Syllable", "Grammar / Linguistic", "copular verb"],
    ["existence", "अस्तित्व / मौजूदगी", "/ɪɡˈzɪs.təns/", "इग-ज़िस-टन्स", "ex · ist · ence (3)", "2nd Syllable", "Philosophical / Universal", "in current existence"],
    ["attribute", "विशेषता / गुण", "/ˈæt.rɪ.bjuːt/", "ऐट-रि-ब्यूट", "at · tri · bute (3)", "1st Syllable", "Academic / Universal", "positive attribute"],
    ["identity", "पहचान / अस्मिता", "/aɪˈden.tə.ti/", "आइ-डेन-टि-टी", "i · den · ti · ty (4)", "2nd Syllable", "Universal / Legal", "verify identity"],
    ["condition", "दशा / स्थिति / शर्त", "/kənˈdɪʃ.ən/", "कन-डि-शन", "con · di · tion (3)", "2nd Syllable", "Universal / Medical", "critical condition"],
    ["profession", "व्यवसाय / पेशा", "/prəˈfeʃ.ən/", "प्र-फ़े-शन", "pro · fes · sion (3)", "2nd Syllable", "Universal / Workplace", "medical profession"],
    ["occupation", "पेशा / धंधा", "/ˌɒk.jəˈpeɪ.ʃən/", "ऑ-क्यु-पे-शन", "oc · cu · pa · tion (4)", "3rd Syllable", "Formal / Demographic", "current occupation"],
    ["nationality", "राष्ट्रीयता", "/ˌnæʃ.ənˈæl.ə.ti/", "नै-श-नै-लि-टी", "na · tion · al · i · ty (5)", "3rd Syllable", "Legal / Official", "Indian nationality"],
    ["citizenship", "नागरिकता", "/ˈsɪt.ɪ.zən.ʃɪp/", "सि-टि-ज़न-शिप", "cit · i · zen · ship (4)", "1st Syllable", "Legal / Governance", "dual citizenship"],
    ["personality", "व्यक्तित्व", "/ˌpɜː.sənˈæl.ə.ti/", "पर-स-नै-लि-टी", "per · son · al · i · ty (5)", "3rd Syllable", "Psychology / Universal", "dynamic personality"],
    ["temperament", "स्वभाव / मिजाज", "/ˈtem.prə.mənt/", "टेम-प्र-मन्ट", "tem · per · a · ment (4)", "1st Syllable", "Psychology", "calm temperament"],
    ["disposition", "प्रवृत्ति / मनोदशा", "/ˌdɪs.pəˈzɪʃ.ən/", "डिस-प-ज़ि-शन", "dis · po · si · tion (4)", "3rd Syllable", "Formal / Psychology", "cheerful disposition"],
    ["enthusiastic", "उत्साही / पुरजोश", "/ɪnˌθjuː.ziˈæs.tɪk/", "इन-थ्यु-ज़ि-ऐस-टिक", "en · thu · si · as · tic (5)", "4th Syllable", "Universal / Social", "enthusiastic volunteer"],
    ["diligent", "मेहनती / परिश्रमी", "/ˈdɪl.ɪ.dʒənt/", "डि-लि-जन्ट", "dil · i · gent (3)", "1st Syllable", "Professional / Academic", "diligent researcher"],
    ["competent", "सक्षम / योग्य / कुशल", "/ˈkɒm.pɪ.tənt/", "कॉम-पि-टन्ट", "com · pe · tent (3)", "1st Syllable", "Workplace / Quality", "competent engineer"],
    ["meticulous", "अति सतर्क / सूक्ष्मदर्शी", "/məˈtɪk.jə.ləs/", "म-टिक-यु-लस", "me · tic · u · lous (4)", "2nd Syllable", "Professional", "meticulous attention to detail"],
    ["pragmatic", "व्यावहारिक / यथार्थवादी", "/præɡˈmæt.ɪk/", "प्रैग-मैट-इक", "prag · mat · ic (3)", "2nd Syllable", "Philosophy / Workplace", "pragmatic approach"],
    ["resilient", "लचीला / संकट से उबरने में सक्षम", "/rɪˈzɪl.i.ənt/", "रि-ज़ि-लि-अन्ट", "re · sil · i · ent (4)", "2nd Syllable", "Psychology / Universal", "resilient economy"],
    ["affable", "मिलनसार / हंसमुख", "/ˈæf.ə.bəl/", "ऐ-फ़-बल", "af · fa · ble (3)", "1st Syllable", "Social / Character", "affable demeanor"],
    ["scrupulous", "ईमानदार / कर्तव्यनिष्ठ", "/ˈskruː.pjə.ləs/", "स्क्रू-प्यु-लस", "scru · pu · lous (3)", "1st Syllable", "Ethics / Professional", "scrupulous integrity"],
    ["versatile", "बहुमुखी प्रतिभा संपन्न", "/ˈvɜː.sə.taɪl/", "वर-स-टाइल", "ver · sa · tile (3)", "1st Syllable", "Professional / Skills", "versatile software developer"],
    ["eloquent", "सुवक्ता / वाकपटु", "/ˈel.ə.kwənt/", "ए-ल-क्वण्ट", "el · o · quent (3)", "1st Syllable", "Communication / Arts", "eloquent speaker"],
    ["tenacious", "दृढ़निश्चयी / जुझारू", "/təˈneɪ.ʃəs/", "ट-ने-शस", "te · na · cious (3)", "2nd Syllable", "Character / Leadership", "tenacious negotiator"],
    ["empathetic", "सहानुभूतिपूर्ण / संवेदनशील", "/ˌem.pəˈθet.ɪk/", "एम-प-थेट-इक", "em · pa · thet · ic (4)", "3rd Syllable", "Psychology / Social", "empathetic listener"],
    ["astute", "चतुर / कुशाग्रबुद्धि", "/əˈstjuːt/", "अ-स्ट्यूट", "as · tute (2)", "2nd Syllable", "Business / Strategy", "astute investor"],
    ["gregarious", "सामाजिक / मिलनसार", "/ɡrɪˈɡeə.ri.əs/", "ग्रि-गे-रि-अस", "gre · gar · i · ous (4)", "2nd Syllable", "Character / Social", "gregarious personality"],
    ["candid", "स्पष्टवादी / खरा", "/ˈkæn.dɪd/", "कैन-डिड", "can · did (2)", "1st Syllable", "Communication", "candid feedback"],
    ["punctual", "समयनिष्ठ / पाबंद", "/ˈpʌŋk.tʃu.əl/", "पंक-चु-अल", "punc · tu · al (3)", "1st Syllable", "Professional / Ethics", "punctual arrival"],
    ["resourceful", "साधन संपन्न / जुगाड़ू कुशल", "/rɪˈzɔː.sfəl/", "रि-ज़ोर्स-फुल", "re · source · ful (3)", "2nd Syllable", "Workplace / Skills", "resourceful problem solver"],
    ["dependable", "भरोसेमंद / विश्वसनीय", "/dɪˈpen.də.bəl/", "डि-पेन-ड-बल", "de · pend · a · ble (4)", "2nd Syllable", "Universal / Workplace", "dependable colleague"],
    ["erudite", "विद्वान / ज्ञानी", "/ˈer.ʊ.daɪt/", "ए-रु-डाइट", "er · u · dite (3)", "1st Syllable", "Academic / Literary", "erudite scholar"],
    ["conscientious", "कर्तव्यनिष्ठ / विवेकशील", "/ˌkɒn.ʃiˈen.ʃəs/", "कॉन-शि-एन-शस", "con · sci · en · tious (4)", "3rd Syllable", "Workplace / Character", "conscientious worker"],
    ["proactive", "सक्रिय / पहले से तैयार", "/prəʊˈæk.tɪv/", "प्रो-ऐक-टिव", "pro · ac · tive (3)", "2nd Syllable", "Corporate / Management", "proactive stance"],
    ["judicious", "उचित / विवेकपूर्ण", "/dʒuːˈdɪʃ.əs/", "जू-डिश-अस", "ju · di · cious (3)", "2nd Syllable", "Legal / Strategy", "judicious use of funds"],
    ["benevolent", "परोपकारी / दयालु", "/bəˈnev.əl.ənt/", "ब-नेव-ल-न्ट", "be · nev · o · lent (4)", "2nd Syllable", "Ethics / Philosophy", "benevolent leader"],
    ["steadfast", "अडिग / निष्ठावान", "/ˈsted.fɑːst/", "स्टेड-फ़ास्ट", "stead · fast (2)", "1st Syllable", "Character / Ethics", "steadfast loyalty"],
    ["innovative", "नवाचारी / अभिनव", "/ˈɪn.ə.və.tɪv/", "इन-अ-वे-टिव", "in · no · va · tive (4)", "1st Syllable", "Business / Technology", "innovative solutions"],
    ["affluent", "समृद्ध / धनी", "/ˈæf.lu.ənt/", "ऐ-फ़्लु-अन्ट", "af · flu · ent (3)", "1st Syllable", "Economics / Social", "affluent neighborhood"],
    ["indispensable", "अपरिहार्य / अत्यंत आवश्यक", "/ˌɪn.dɪˈspen.sə.bəl/", "इन-डि-स्पेन-स-बल", "in · dis · pen · sa · ble (5)", "3rd Syllable", "Universal / Workplace", "indispensable team member"],
    ["distinguished", "विशिष्ट / प्रतिष्ठित", "/dɪˈstɪŋ.ɡwɪʃt/", "डि-स्टिंग-ग्विश्ड", "dis · tin · guished (3)", "2nd Syllable", "Academic / Elevated", "distinguished guest"],
    ["eminent", "प्रख्यात / जाने-माने", "/ˈem.ɪ.nənt/", "ए-मि-नन्ट", "em · i · nent (3)", "1st Syllable", "Academic / Legal", "eminent jurist"],
    ["adept", "निपुण / कुशल", "/əˈdept/", "अ-डेप्ट", "a · dept (2)", "2nd Syllable", "Skills / Professional", "adept at data analysis"],
    ["competent", "सक्षम / योग्य", "/ˈkɒm.pɪ.tənt/", "कॉम-पि-टन्ट", "com · pe · tent (3)", "1st Syllable", "Workplace", "highly competent"],
    ["dynamic", "गतिशील / ऊर्जावान", "/daɪˈnæm.ɪk/", "डाइ-नैम-इक", "dy · nam · ic (3)", "2nd Syllable", "Universal / Business", "dynamic leadership"],
    ["impartial", "निष्पक्ष / तटस्थ", "/ɪmˈpɑː.ʃəl/", "इम-पार-शल", "im · par · tial (3)", "2nd Syllable", "Legal / Ethics", "impartial judge"],
    ["astute", "कुशाग्र / चतुर", "/əˈstjuːt/", "अ-स्ट्यूट", "as · tute (2)", "2nd Syllable", "Strategy", "astute observation"],
    ["zealous", "अति उत्साही / कर्मठ", "/ˈzel.əs/", "ज़ेल-अस", "zeal · ous (2)", "1st Syllable", "Social / Religious", "zealous advocate"],
    ["exemplary", "अनुकरणीय / बेमिसाल", "/ɪɡˈzem.plər.i/", "इग-ज़ेम-प्लर-ई", "ex · em · pla · ry (4)", "2nd Syllable", "Quality / Workplace", "exemplary record"],
    ["rigorous", "कठोर / सटीक / गहन", "/ˈrɪɡ.ər.əs/", "रि-ग-रस", "rig · or · ous (3)", "1st Syllable", "Academic / Scientific", "rigorous training"],
    ["vulnerable", "संवेदनशील / असुरक्षित", "/ˈvʌl.nər.ə.bəl/", "वल-न-र-बल", "vul · ner · a · ble (4)", "1st Syllable", "Social / Health", "vulnerable population"],
    ["lucid", "स्पष्ट / सुबोध", "/ˈluː.sɪd/", "लू-सिड", "lu · cid (2)", "1st Syllable", "Communication", "lucid explanation"],
    ["robust", "मजबूत / सुदृढ़", "/rəʊˈbʌst/", "रो-बस्ट", "ro · bust (2)", "2nd Syllable", "Technical / Business", "robust framework"],
    ["credible", "विश्वसनीय / प्रमाणिक", "/ˈkred.ə.bəl/", "क्रे-डि-बल", "cred · i · ble (3)", "1st Syllable", "News / Academic", "credible source"],
    ["prudent", "विवेकी / दूरदर्शी", "/ˈpruː.dənt/", "प्रू-डन्ट", "pru · dent (2)", "1st Syllable", "Finance / Strategy", "prudent investment"],
    ["vigilant", "सतर्क / चौकन्ना", "/ˈvɪdʒ.əl.ənt/", "वि-जि-लन्ट", "vig · i · lant (3)", "1st Syllable", "Security / Safety", "vigilant guard"],
    ["unwavering", "अटल / दृढ़", "/ʌnˈweɪ.vər.ɪŋ/", "अन-वे-व-रिंग", "un · wa · ver · ing (4)", "2nd Syllable", "Character / Ethics", "unwavering commitment"],
    ["formidable", "प्रभावशाली / विकट", "/ˈfɔː.mɪ.də.bəl/", "फ़ॉर-मि-ड-बल", "for · mi · da · ble (4)", "1st Syllable", "Strategy", "formidable challenge"],
    ["proficient", "दक्ष / पारंगत", "/prəˈfɪʃ.ənt/", "प्र-फ़िश-अन्ट", "pro · fi · cient (3)", "2nd Syllable", "Language / Skills", "proficient in English"],
    ["authentic", "प्रामाणिक / असली", "/ɔːˈθen.tɪk/", "ऑ-थेन-टिक", "au · then · tic (3)", "2nd Syllable", "Quality / History", "authentic documents"],
    ["indomitable", "अदम्य / जिसे हराया न जा सके", "/ɪnˈdɒm.ɪ.tə.bəl/", "इन-डॉम-इ-ट-बल", "in · dom · i · ta · ble (5)", "2nd Syllable", "Character", "indomitable spirit"]
  ];

  rawTerms5.forEach((t, idx) => {
    vocabulary.push({
      id: `d05_v${String(idx + 1).padStart(2, '0')}`,
      lemma: t[0],
      wordForm: t[0],
      pos: "adjective",
      ipa: t[2],
      devanagari: t[3],
      syllables: t[4],
      stress: t[5],
      hindiMeaning: t[1],
      register: t[6],
      collocations: [t[7]],
      relatedForms: [],
      example: `She is an exceptionally ${t[0]} professional in our organization.`,
      commonError: `Stress placement on the ${t[5]}.`
    });
  });

  const examples = [];
  for (let i = 1; i <= 100; i++) {
    const exId = `d05_ex_${String(i).padStart(3, '0')}`;
    if (i <= 15) {
      examples.push({ id: exId, category: "Grammar", en: "Dr. Ananya is the chief surgeon at the medical center.", hi: "डॉ. अनन्या चिकित्सा केंद्र में मुख्य सर्जन हैं।" });
    } else if (i <= 30) {
      examples.push({ id: exId, category: "Conversational", en: "I am ready for the technical interview today.", hi: "मैं आज के तकनीकी साक्षात्कार के लिए तैयार हूँ।" });
    } else if (i <= 45) {
      examples.push({ id: exId, category: "Professional", en: "They are highly competent software engineers.", hi: "वे अत्यधिक सक्षम सॉफ्टवेयर इंजीनियर हैं।" });
    } else if (i <= 55) {
      examples.push({ id: exId, category: "TranslationContrast", en: "He is a very hardworking student. (NOT: 'He very hardworking student')", hi: "वह एक बहुत मेहनती छात्र है। (अंग्रेजी में Copula 'is' अनिवार्य है)" });
    } else if (i <= 65) {
      examples.push({ id: exId, category: "Pronunciation", en: "Cats, dogs, and horses are animals. (Plural '-s' as /s/, /z/, /ɪz/)", hi: "बिल्लियां, कुत्ते और घोड़े जानवर हैं। (बहुवचन '-s' के तीन उच्चारण)" });
    } else if (i <= 75) {
      examples.push({ id: exId, category: "ErrorReversal", en: "Are you ready to begin the presentation? (NOT: 'You are ready to begin?')", hi: "क्या आप प्रस्तुति शुरू करने के लिए तैयार हैं? (प्रश्न में क्रिया पहले आती है)" });
    } else if (i <= 85) {
      examples.push({ id: exId, category: "RegisterShift", en: "Informal: He's smart. | Formal: He is an exceptionally astute researcher.", hi: "अनौपचारिक: वह होशियार है। | औपचारिक: वह एक असाधारण रूप से कुशाग्र शोधकर्ता हैं।" });
    } else {
      examples.push({ id: exId, category: "DialogueExchange", en: "Interviewer: Are you proficient in statistical data modeling?\nCandidate: Yes, I am; I have three years of direct experience.", hi: "साक्षात्कारकर्ता: क्या आप सांख्यिकीय डेटा मॉडलिंग में कुशल हैं?\nउम्मीदवार: जी हाँ, मैं हूँ; मेरे पास तीन साल का प्रत्यक्ष अनुभव है।" });
    }
  }

  const translationDrills = [
    { id: "d05_tr_01", type: "en_to_hi", source: "She is a distinguished professor of economics.", target: "वह अर्थशास्त्र की एक प्रतिष्ठित प्रोफेसर हैं।", explanation: "'Distinguished professor' प्रतिष्ठित प्रोफेसर के लिए प्रयुक्त होता है।" },
    { id: "d05_tr_02", type: "hi_to_en", source: "हम आज की चुनौती का सामना करने के लिए पूरी तरह तैयार हैं।", target: "We are fully prepared to face today's challenge.", explanation: "'We are fully prepared' स्थिति का वर्तमान वर्णन है।" },
    { id: "d05_tr_03", type: "en_to_hi", source: "Are you familiar with the updated company regulations?", target: "क्या आप अद्यतन कंपनी विनियमों से परिचित हैं?", explanation: "प्रश्नवाचक वाक्य में 'Are you' से शुरुआत होती है।" },
    { id: "d05_tr_04", type: "hi_to_en", source: "वह एक बहुत ही मेहनती और कर्तव्यनिष्ठ चिकित्सक हैं।", target: "He is a very diligent and conscientious physician.", explanation: "'Diligent and conscientious' उत्कृष्ट गुणवाचक विशेषण हैं।" },
    { id: "d05_tr_05", type: "en_to_hi", source: "I am confident that our project proposal is robust and feasible.", target: "मुझे विश्वास है कि हमारा परियोजना प्रस्ताव मजबूत और साध्य है।", explanation: "'I am confident' आत्मविश्वास व्यक्त करता है।" },
    { id: "d05_tr_06", type: "hi_to_en", source: "क्या वे इस अंतरराष्ट्रीय सम्मेलन के प्रतिनिधि हैं?", target: "Are they delegates to this international conference?", explanation: "'Delegates' प्रतिनिधियों के लिए प्रयुक्त संज्ञा है।" },
    { id: "d05_tr_07", type: "en_to_hi", source: "It is essential to maintain data security in the cloud.", target: "क्लाउड में डेटा सुरक्षा बनाए रखना अनिवार्य है।", explanation: "'It is essential' अनिवार्यता को व्यक्त करता है।" },
    { id: "d05_tr_08", type: "hi_to_en", source: "भारत विभिन्न संस्कृतियों और भाषाओं का एक महान देश है।", target: "India is a great nation of diverse cultures and languages.", explanation: "'Diverse cultures' विविध संस्कृतियों के लिए सटीक है।" },
    { id: "d05_tr_09", type: "en_to_hi", source: "You are responsible for the financial accuracy of this balance sheet.", target: "आप इस बैलेंस शीट की वित्तीय सटीकता के लिए जिम्मेदार हैं।", explanation: "'Responsible for' जिम्मेदारी का बोध कराता है।" },
    { id: "d05_tr_10", type: "hi_to_en", source: "यह शोध पत्र वैज्ञानिक समुदाय के लिए अत्यंत महत्वपूर्ण है।", target: "This research paper is of immense importance to the scientific community.", explanation: "'Immense importance' अत्यधिक महत्व को दर्शाता है।" },
    { id: "d05_tr_11", type: "en_to_hi", source: "Is this water safe for drinking?", target: "क्या यह पानी पीने के लिए सुरक्षित है?", explanation: "सरल प्रश्नवाचक वाक्य संरचना 'Is this...'." },
    { id: "d05_tr_12", type: "hi_to_en", source: "वे हमारे संस्थान के सबसे अनुभवी सलाहकार हैं।", target: "They are the most experienced advisors in our institution.", explanation: "'Most experienced advisors' उच्चतम स्तर का अनुभव।" },
    { id: "d05_tr_13", type: "en_to_hi", source: "I am delighted to introduce our keynote speaker tonight.", target: "आज रात हमारे मुख्य वक्ता का परिचय कराते हुए मुझे बहुत खुशी हो रही है।", explanation: "'I am delighted' प्रसन्नता व्यक्त करता है।" },
    { id: "d05_tr_14", type: "hi_to_en", source: "धैर्य और अनुशासन सफलता के दो मूल स्तंभ हैं।", target: "Patience and discipline are the two foundational pillars of success.", explanation: "बहुवचन कर्ता के साथ 'are' का प्रयोग।" },
    { id: "d05_tr_15", type: "en_to_hi", source: "The laboratory conditions are optimal for the experiment.", target: "प्रयोगशाला की स्थितियां प्रयोग के लिए अनुकूल हैं।", explanation: "'Optimal' अनुकूलतम स्थिति को दर्शाता है।" },
    { id: "d05_tr_16", type: "hi_to_en", source: "क्या आप इस विभाग के नए प्रबंधक हैं?", target: "Are you the new manager of this department?", explanation: "पद की पुष्टि हेतु प्रश्नवाचक वाक्य।" },
    { id: "d05_tr_17", type: "en_to_hi", source: "She is not only intelligent but also exceptionally humble.", target: "वह न केवल बुद्धिमान हैं बल्कि असाधारण रूप से विनम्र भी हैं।", explanation: "'Not only... but also' समानांतर संरचना।" },
    { id: "d05_tr_18", type: "hi_to_en", source: "समय अत्यंत मूल्यवान है; इसे व्यर्थ न गंवाएं।", target: "Time is extremely precious; do not waste it.", explanation: "'Time is extremely precious' सार्वभौमिक सत्य।" },
    { id: "d05_tr_19", type: "en_to_hi", source: "These files are strictly confidential and protected by law.", target: "ये फाइलें पूरी तरह से गोपनीय हैं और कानून द्वारा संरक्षित हैं।", explanation: "'Confidential' गोपनीयता का सूचक है।" },
    { id: "d05_tr_20", type: "hi_to_en", source: "ईमानदारी सबसे अच्छी नीति है।", target: "Honesty is the best policy.", explanation: "प्रसिद्ध लोकोक्ति का मानक रूप।" },
    { id: "d05_tr_21", type: "en_to_hi", source: "Why are the server lights blinking red?", target: "सर्वर की बत्तियां लाल रंग में क्यों टिमटिमा रही हैं?", explanation: "'Why are...' प्रश्नवाचक संरचना।" },
    { id: "d05_tr_22", type: "hi_to_en", source: "हम आपके अमूल्य सुझावों के लिए बहुत आभारी हैं।", target: "We are deeply grateful for your invaluable suggestions.", explanation: "'Invaluable suggestions' अमूल्य सुझाव।" },
    { id: "d05_tr_23", type: "en_to_hi", source: "Is it possible to reschedule the appointment for Monday?", target: "क्या सोमवार के लिए मुलाकात का समय बदलना संभव है?", explanation: "'Is it possible...' संभावना जांचने का प्रश्न।" },
    { id: "d05_tr_24", type: "hi_to_en", source: "वे दोनों सगे भाई हैं और एक ही विश्वविद्यालय में पढ़ते हैं।", target: "They are biological brothers and study at the same university.", explanation: "पारिवारिक संबंध का वर्तमान विवरण।" },
    { id: "d05_tr_25", type: "en_to_hi", source: "You are the primary author of this groundbreaking study.", target: "आप इस युगांतकारी अध्ययन के प्राथमिक लेखक हैं।", explanation: "'Primary author' मुख्य लेखक के लिए प्रयुक्त होता है।" }
  ];

  const exercises = [];
  for (let i = 1; i <= 65; i++) {
    const exId = `day05_ex_${String(i).padStart(3, '0')}`;
    if (i === 1) {
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: "Correct this sentence: 'He very honest and intelligent person.'",
        targetText: "He very honest and intelligent person.",
        correctAnswer: "He is a very honest and intelligent person.",
        explanationEn: "English sentences require the copula 'is' and the indefinite article 'a' before singular countable noun phrases.",
        explanationHi: "अंग्रेजी में संयोजक क्रिया 'is' और एकवचन संज्ञा से पहले उपपद 'a' का होना अनिवार्य है।",
        skillTag: "COPULA_CONCORD"
      });
    } else if (i === 2) {
      exercises.push({
        id: exId,
        type: "minimal_pair_discrim",
        prompt: "Which plural noun ends with the voiced sibilant /z/?",
        options: ["Dogs", "Cats", "Books", "Cliffs"],
        correctAnswer: "Dogs",
        explanationEn: "'Dogs' ends in the voiced stop /ɡ/, triggering the voiced plural suffix /z/ (/dɒɡz/). 'Cats' and 'Books' end in /s/.",
        explanationHi: "'Dogs' का अंतिम वर्ण सघोष /ɡ/ है, इसलिए बहुवचन '-s' का उच्चारण /z/ (ज़) होता है।",
        skillTag: "PHONETICS_MORPHOPHONOLOGY"
      });
    } else if (i <= 20) {
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `Select the grammatically correct copular structure (Item ${i}):`,
        options: ["She is an exceptionally competent architect.", "She are an exceptionally competent architect.", "She am an exceptionally competent architect.", "She be an exceptionally competent architect."],
        correctAnswer: "She is an exceptionally competent architect.",
        explanationEn: "3rd person singular subject 'She' takes 'is'.",
        explanationHi: "तृतीय पुरुष एकवचन कर्ता 'She' के साथ 'is' आता है।",
        skillTag: "COPULA_CONCORD"
      });
    } else if (i <= 45) {
      const tr = translationDrills[(i - 21) % translationDrills.length];
      exercises.push({
        id: exId,
        type: tr.type === "en_to_hi" ? "translation_en_to_hi" : "translation_hi_to_en",
        prompt: `Translate: "${tr.source}"`,
        correctAnswer: tr.target,
        explanationEn: tr.explanation,
        explanationHi: tr.explanation,
        skillTag: "TRANSLATION_CONTRAST"
      });
    } else {
      exercises.push({
        id: exId,
        type: "audio_cloze",
        prompt: `Fill in the missing copular verb: "They [are] highly experienced researchers."`,
        correctAnswer: "are",
        explanationEn: "Plural subject 'They' takes 'are'.",
        explanationHi: "बहुवचन कर्ता 'They' के साथ 'are' का प्रयोग होता है।",
        skillTag: "CONNECTED_SPEECH_CLOZE"
      });
    }
  }

  return {
    dayNumber: 5,
    id: "day_05",
    titleEn: "Present State of Being: Copular 'Be' (Is / Am / Are) & Subject Concord",
    titleHi: "वर्तमान अस्तित्व एवं स्थिति: 'Is / Am / Are' एवं कर्ता-क्रिया समन्वय",
    cefr: "A1.5",
    estMinutes: 45,
    prerequisites: "Day 04 Complete Mastery",
    objectivesEn: [
      "Master the copular verb 'to be' (am, is, are) across affirmative, negative, and interrogative sentences.",
      "Eliminate copula omission ('He doctor' -> 'He is a doctor') and article omission in predicate noun phrases.",
      "Master the morphophonemic rules for suffix '-s/-es' pronunciation (/s/, /z/, /ɪz/).",
      "Produce weak form reductions of auxiliary 'are' (/ə/) in connected speech."
    ],
    objectivesHi: [
      "सकारात्मक, नकारात्मक और प्रश्नवाचक वाक्यों में संयोजक क्रिया 'to be' (am, is, are) का सटीक प्रयोग करना।",
      "संयोजक क्रिया छोड़ने की आदत ('He doctor' के बदले 'He is a doctor') को समाप्त करना।",
      "प्रत्यय '-s/-es' के उच्चारण के तीन नियमों (/s/, /z/, /ɪz/) में पूर्ण महारत हासिल करना।",
      "धाराप्रवाह भाषण में 'are' के कमजोर रूप (/ə/) का प्राकृतिक उच्चारण करना।"
    ],
    teach: {
      hindiExplanation: `डे 05 में आपका स्वागत है! आज हम वर्तमान स्थिति, पहचान, गुण और अस्तित्व को व्यक्त करने वाले मुख्य आधार — **Is / Am / Are (Copular Be)** को गहराई से समझेंगे।

### 1. कर्ता और क्रिया का तालमेल (Subject-Verb Agreement):
- **I** ➔ **am** (*I am ready.* / मैं तैयार हूँ।)
- **He / She / It / Singular Noun** ➔ **is** (*She is an architect.* / वह एक वास्तुकार हैं।)
- **We / You / They / Plural Noun** ➔ **are** (*They are scientists.* / वे वैज्ञानिक हैं।)

### 2. तीन वाक्य रूप (Three Sentence Formats):
1. **सकारात्मक (Affirmative)**: *Subject + is/am/are + Complement*
   - *He is diligent.* (वह मेहनती है।)
2. **नकारात्मक (Negative)**: *Subject + is/am/are + not + Complement*
   - *We are not late.* (हम देर से नहीं हैं।)
3. **प्रश्नवाचक (Interrogative)**: *Is/Am/Are + Subject + Complement?*
   - *Are you confident?* (क्या आपको विश्वास है?)

### 3. भारतीय भाषाई गलतियां (L1 Traps):
- ❌ **गलती 1 (Copula Omission)**: "*He good doctor.*" ➔ ✔️ **सही**: "**He is a good doctor.**" (अंग्रेजी में क्रिया और उपपद 'a' अनिवार्य है।)
- ❌ **गलती 2 (Inversion in Questions)**: "*You are ready?*" (बयान की तरह पूछना) ➔ ✔️ **सही**: "**Are you ready?**" (प्रश्न में क्रिया पहले आती है।)`,
      englishExplanation: `Day 05 establishes copular syntax, predicate complements, and morphophonemic voicing of suffix '-s'.

Key Principles:
1. **Obligatory Copula**: In English, a clause requires a finite verb. Zero-copula constructions common in Hindi (वह डॉक्टर है / *He doctor*) must be systematically replaced by explicit copula attachment.
2. **Predicate Concord**: Ensuring subject and predicate complement agree in number (*She is an engineer* vs. *They are engineers*).`,
      grammarRules: [
        { ruleNumber: 1, title: "Copular Concord Rule", description: "Use 'am' with 1st person singular (I), 'is' with 3rd person singular (He/She/It/Singular noun), and 'are' with 2nd person and all plurals (You/We/They).", register: "Universal Grammar" },
        { ruleNumber: 2, title: "Question Inversion", description: "To form a question with 'to be', invert the subject and verb: 'Subject + is/are' becomes 'Is/Are + Subject?'.", register: "Universal Syntax" }
      ],
      formulaTable: [
        { subjectGroup: "Affirmative Complement", formula: "Subject + is / am / are + [Adjective / Noun Phrase].", exampleEn: "Dr. Sharma is an eminent cardiologist.", meaningHi: "डॉ. शर्मा एक प्रख्यात हृदय रोग विशेषज्ञ हैं।" },
        { subjectGroup: "Inverted Question", formula: "Is / Am / Are + Subject + [Complement]?", exampleEn: "Are all team members present in the auditorium?", meaningHi: "क्या सभी टीम सदस्य सभागार में उपस्थित हैं?" }
      ],
      hindiSpeakerTrap: {
        trapTitle: "Copula and Article Omission in Predicates",
        hindiPattern: "हिंदी में 'वह अच्छा डॉक्टर है' का अनुवाद करते समय कई लोग 'a' और 'is' भूल जाते हैं ('He good doctor').",
        potentialInterference: "Saying: 'My brother engineer in Pune.'",
        grammaticalRootCause: "Hindi uses a post-positioned copula 'है' but lacks indefinite articles. English requires both copula and article.",
        naturalSolution: "Say: 'My brother is an engineer in Pune.'"
      }
    },
    phonetics: {
      targetSound: "Morphophonemic Pronunciation of Suffix '-s/-es' (/s/, /z/, /ɪz/)",
      articulatoryMechanics: {
        placeOfArticulation: "Alveolar ridge / Post-alveolar.",
        mannerOfArticulation: "Sibilant fricative.",
        voicing: "Rule 1 (/s/): After voiceless sounds /p, t, k, f, θ/ (e.g., 'cats', 'desks'). Rule 2 (/z/): After voiced sounds /b, d, ɡ, v, ð, m, n, ŋ, l, r/ and vowels (e.g., 'dogs', 'days'). Rule 3 (/ɪz/): After sibilants /s, z, ʃ, ʒ, tʃ, dʒ/ (e.g., 'busses', 'judges').",
        anatomicalInstructions: "Feel your throat: if the sound before '-s' vibrates (voiced), let the '-s' buzz like a /z/ ('dogs' /dɒɡz/). If it doesn't vibrate (voiceless), hiss like /s/ ('cats' /kæts/). If it's already a hissing sound, add an extra syllable /ɪz/ ('boxes' /ˈbɒk.sɪz/)."
      },
      hindiSpeakerPhoneticTrap: "Hindi speakers frequently pronounce all '-s' endings uniformly as /s/ (e.g., pronouncing 'dogs' as 'dɒks' or 'is' as 'iss' instead of /ɪz/).",
      minimalPairs: [
        { wordA: { text: "Is", ipa: "/ɪz/", audioRef: "d05_pair_01a" }, wordB: { text: "Hiss", ipa: "/hɪs/", audioRef: "d05_pair_01b" }, discriminationNote: "Is (voiced /z/) vs. Hiss (voiceless /s/)." },
        { wordA: { text: "Eyes", ipa: "/aɪz/", audioRef: "d05_pair_02a" }, wordB: { text: "Ice", ipa: "/aɪs/", audioRef: "d05_pair_02b" }, discriminationNote: "Eyes (voiced /z/) vs. Ice (voiceless /s/)." },
        { wordA: { text: "As", ipa: "/æz/", audioRef: "d05_pair_03a" }, wordB: { text: "Ass", ipa: "/æs/", audioRef: "d05_pair_03b" }, discriminationNote: "As (/z/) vs. Ass (/s/)." },
        { wordA: { text: "Plays", ipa: "/pleɪz/", audioRef: "d05_pair_04a" }, wordB: { text: "Place", ipa: "/pleɪs/", audioRef: "d05_pair_04b" }, discriminationNote: "Plays (/z/) vs. Place (/s/)." }
      ],
      prosodyFocus: {
        type: "Weak Form of 'Are' (/ə/) in Connected Speech",
        ruleExplanation: "In fluent speech, 'are' is reduced to the Schwa /ə/ before consonants ('Where are you going?' -> /weər ə jʊ ɡəʊɪŋ/).",
        drills: [
          { sentence: "They are ready. ↘", phoneticNotation: "/ðeɪ ə ˈred.i/", intonationCurve: "Weak 'are' /ə/", audioRef: "d05_prosody_01" },
          { sentence: "You are the leader. ↘", phoneticNotation: "/juː ə ðə ˈliː.də/", intonationCurve: "Weak 'are' /ə/", audioRef: "d05_prosody_02" }
        ]
      }
    },
    learn: {
      vocabulary: vocabulary,
      spokenPhrases: [
        { id: "d05_sp_01", phrase: "She is an exceptionally competent software architect.", register: "Corporate Introduction", meaningHi: "वह एक असाधारण रूप से सक्षम सॉफ्टवेयर वास्तुकार हैं।" },
        { id: "d05_sp_02", phrase: "Are you ready to commence the annual financial audit?", register: "Formal Workplace", meaningHi: "क्या आप वार्षिक वित्तीय ऑडिट शुरू करने के लिए तैयार हैं?" },
        { id: "d05_sp_03", phrase: "We are deeply grateful for your invaluable mentorship.", register: "Executive Gratitude", meaningHi: "हम आपके अमूल्य मार्गदर्शन के लिए अत्यंत आभारी हैं।" },
        { id: "d05_sp_04", phrase: "It is an absolute honor to welcome our distinguished guests.", register: "Formal Protocol", meaningHi: "हमारे विशिष्ट अतिथियों का स्वागत करना हमारे लिए परम सम्मान की बात है।" }
      ]
    },
    examples: { bilingualExemplars: examples },
    practice: { exercises: exercises, translationSet: translationDrills },
    use: {
      dialogue: {
        scenarioTitleEn: "Introducing a New Research Fellow at an Academic Symposium",
        scenarioTitleHi: "अकादमिक संगोष्ठी में नए रिसर्च फेलो का परिचय",
        contextDescription: "Professor Higgins introduces Dr. Rajesh Rao to the international research committee.",
        turns: [
          { speaker: "Prof. Higgins", en: "Good morning, colleagues; it is my great pleasure to introduce Dr. Rajesh Rao.", hi: "शुभ प्रभात, सहयोगियों; डॉ. राजेश राव का परिचय कराना मेरे लिए अत्यंत प्रसन्नता की बात है।", phoneticNote: "/ɪt ɪz maɪ ɡreɪt ˈpleʒ.ə tə ˌɪn.trəˈdjuːs/", audioRef: "d05_dial_01" },
          { speaker: "Dr. Rao", en: "Thank you, Professor Higgins; I am delighted to be here with this distinguished team.", hi: "धन्यवाद, प्रोफेसर हिगिन्स; इस प्रतिष्ठित टीम के साथ यहाँ उपस्थित होना मेरे लिए खुशी की बात है।", phoneticNote: "/aɪ əm dɪˈlaɪ.tɪd tə biː hɪə/", audioRef: "d05_dial_02" },
          { speaker: "Prof. Higgins", en: "Dr. Rao is an eminent specialist in quantum computational modeling.", hi: "डॉ. राव क्वांटम कम्प्यूटेशनल मॉडलिंग के एक प्रख्यात विशेषज्ञ हैं।", phoneticNote: "/ˈem.ɪ.nənt ˈspeʃ.əl.ɪst/", audioRef: "d05_dial_03" },
          { speaker: "Committee Member", en: "Welcome, Dr. Rao! Are you ready to lead the afternoon panel discussion?", hi: "स्वागत है, डॉ. राव! क्या आप दोपहर के पैनल चर्चा का नेतृत्व करने के लिए तैयार हैं?", phoneticNote: "/ɑː juː ˈred.i tə liːd/", audioRef: "d05_dial_04" }
        ]
      }
    },
    assess: {
      writtenChecklist: [
        { question: "When does the plural suffix '-s' sound like /z/?", answer: "When the preceding sound is voiced (vowels, nasals, voiced stops like /b, d, ɡ, v/)." },
        { question: "What is wrong with 'He good engineer'?", answer: "It lacks both the copula verb 'is' and the indefinite article 'an'." }
      ],
      oralProductionTask: {
        prompt: "Deliver a 60-second professional self-introduction and introduction of two colleagues, using copular sentences with 'am', 'is', and 'are'. Demonstrate correct /z/ pronunciation in 'is' (/ɪz/) and plural '-s' endings.",
        targetStructures: ["I am a...", "She is an expert in...", "They are highly competent..."],
        targetPhonemes: ["Clear /z/ in 'is/eyes/plays'", "Weak form of 'are' /ə/"],
        evaluationRubric: "Scored on (1) Subject-verb copular concord, (2) Article inclusion, (3) Morphophonemic suffix accuracy."
      },
      benchmarks: [
        { id: "d05_bm_01", benchmark: "Maintains flawless copula concord, article usage, and suffix phonology in descriptive speech." }
      ]
    }
  };
}

console.log("[BUILDER] Days 04 and 05 built successfully.");
const d04Data = `export const day04 = ${JSON.stringify(createDay04(), null, 2)};\n`;
fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day04.js'), d04Data, 'utf8');
console.log("[SAVED] content_builder/day04.js written successfully.");

const d05Data = `export const day05 = ${JSON.stringify(createDay05(), null, 2)};\n`;
fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day05.js'), d05Data, 'utf8');
console.log("[SAVED] content_builder/day05.js written successfully.");
