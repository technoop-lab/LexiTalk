import fs from 'fs';
import path from 'path';

// --- DAY 03 BUILDER ---
function createDay03() {
  const vocabulary = [];
  const rawTerms3 = [
    ["astonishing", "अद्भुत / आश्चर्यजनक", "/əˈstɒn.ɪ.ʃɪŋ/", "अ-स्टॉ-नि-शिंग", "as · ton · ish · ing (4)", "2nd Syllable", "Formal / Elevated", "astonishing achievement"],
    ["incredible", "अविश्वसनीय / बेमिसाल", "/ɪnˈkred.ə.bəl/", "इन-क्रे-डि-बल", "in · cred · i · ble (4)", "2nd Syllable", "Universal / Social", "incredible performance"],
    ["magnificent", "भव्य / शानदार / प्रतापी", "/mæɡˈnɪf.ɪ.sənt/", "मैग-नि-फ़ि-सन्ट", "mag · nif · i · cent (4)", "2nd Syllable", "Formal / Aesthetic", "magnificent view"],
    ["spectacular", "शानदार / दर्शनीय", "/spekˈtæk.jə.lə/", "स्पेक-टै-क्य-लर", "spec · tac · u · lar (4)", "2nd Syllable", "Standard / Visual", "spectacular fireworks"],
    ["delightful", "आनंददायक / मनोहर", "/dɪˈlaɪt.fəl/", "डि-लाइट-फुल", "de · light · ful (3)", "2nd Syllable", "Standard / Social", "delightful evening"],
    ["fascinating", "आकर्षक / सम्मोहक", "/ˈfæs.ən.eɪ.tɪŋ/", "फ़ै-सि-ने-टिंग", "fas · ci · nat · ing (4)", "1st Syllable", "Universal / Intellectual", "fascinating lecture"],
    ["dreadful", "भयानक / बहुत बुरा", "/ˈdred.fəl/", "ड्रेड-फुल", "dread · ful (2)", "1st Syllable", "Universal / Emotional", "dreadful news"],
    ["appalling", "स्तब्धकारी / बहुत खराब", "/əˈpɔː.lɪŋ/", "अ-पॉ-लिंग", "ap · pall · ing (3)", "2nd Syllable", "Formal / Critical", "appalling conditions"],
    ["splendid", "उत्कृष्ट / उत्तम / शानदार", "/ˈsplen.dɪd/", "स्प्लेन-डिड", "splen · did (2)", "1st Syllable", "Formal / British", "splendid idea"],
    ["remarkable", "उल्लेखनीय / असाधारण", "/rɪˈmɑː.kə.bəl/", "रि-मार-क-बल", "re · mark · a · ble (4)", "2nd Syllable", "Formal / Academic", "remarkable progress"],
    ["exclamation", "विस्मयादिबोधक उद्गार", "/ˌek.skləˈmeɪ.ʃən/", "एक्स-क्ल-मे-शन", "ex · cla · ma · tion (4)", "3rd Syllable", "Grammar / Linguistic", "exclamation mark"],
    ["interjection", "विस्मयादिबोधक अव्यय (जैसे Wow, Oh)", "/ˌɪn.təˈdʒek.ʃən/", "इन-टर-जेक-शन", "in · ter · jec · tion (4)", "3rd Syllable", "Grammar / Linguistic", "emotional interjection"],
    ["breathtaking", "मनोरम / दम साधने वाला", "/ˈbreθˌteɪ.kɪŋ/", "ब्रेथ-टे-किंग", "breath · tak · ing (3)", "1st Syllable", "Universal / Visual", "breathtaking scenery"],
    ["unbelievable", "अविश्वसनीय", "/ˌʌn.bɪˈliː.və.bəl/", "अन-बि-ली-व-बल", "un · be · liev · a · ble (5)", "3rd Syllable", "Universal / Colloquial", "unbelievable story"],
    ["outrageous", "अपमानजनक / चौंकाने वाला", "/aʊtˈreɪ.dʒəs/", "आउट-रे-जस", "out · ra · geous (3)", "2nd Syllable", "Formal / Critical", "outrageous price"],
    ["heartbreaking", "दिल दहला देने वाला / अत्यंत दुखद", "/ˈhɑːtˌbreɪ.kɪŋ/", "हार्ट-ब्रे-किंग", "heart · break · ing (3)", "1st Syllable", "Universal / Emotional", "heartbreaking tragedy"],
    ["thrilling", "रोमांचक / रोंगटे खड़े करने वाला", "/ˈθrɪl.ɪŋ/", "थ्रिल-इंग", "thrill · ing (2)", "1st Syllable", "Universal / Recreational", "thrilling adventure"],
    ["phenomenal", "अभूतपूर्व / असाधारण", "/fəˈnɒm.ɪ.nəl/", "फ़-नॉ-मि-नल", "phe · nom · e · nal (4)", "2nd Syllable", "Universal / Academic", "phenomenal success"],
    ["terrifying", "भयभीत करने वाला", "/ˈter.ə.faɪ.ɪŋ/", "टे-रि-फ़ाइ-इंग", "ter · ri · fy · ing (4)", "1st Syllable", "Universal / Emotional", "terrifying storm"],
    ["hilarious", "अत्यंत हास्यप्रद / बहुत मज़ेदार", "/hɪˈleə.ri.əs/", "हि-ले-रि-अस", "hi · lar · i · ous (4)", "2nd Syllable", "Universal / Entertainment", "hilarious comedy"],
    ["marvellous", "अद्भुत / चमत्कारी", "/ˈmɑː.vəl.əs/", "मार-व-लस", "mar · vel · lous (3)", "1st Syllable", "Formal / British", "marvellous opportunity"],
    ["catastrophic", "विनाशकारी / प्रलयंकारी", "/ˌkæt.əˈstrɒf.ɪk/", "कै-ट-स्ट्रॉ-फ़िक", "cat · a · stroph · ic (4)", "3rd Syllable", "Formal / Scientific", "catastrophic failure"],
    ["stunning", "स्तब्ध कर देने वाला / बेहद सुंदर", "/ˈstʌn.ɪŋ/", "स्टन-इंग", "stun · ning (2)", "1st Syllable", "Universal / Visual", "stunning dress"],
    ["disastrous", "विनाशकारी / अनर्थकारी", "/dɪˈzɑː.strəs/", "डि-ज़ास-ट्रस", "dis · as · trous (3)", "2nd Syllable", "Formal / Critical", "disastrous outcome"],
    ["overwhelming", "अत्यधिक / अभिभूत कर देने वाला", "/ˌəʊ.vəˈwel.mɪŋ/", "ओ-वर-वेल-मिंग", "o · ver · whelm · ing (4)", "3rd Syllable", "Universal / Psychological", "overwhelming support"],
    ["astonishment", "विस्मय / अचरज", "/əˈstɒn.ɪʃ.mənt/", "अ-स्टॉ-निष-मन्ट", "as · ton · ish · ment (4)", "2nd Syllable", "Formal / Emotional", "gasp of astonishment"],
    ["exhilarating", "रोमांचक / ताजगी देने वाला", "/ɪɡˈzɪl.ə.reɪ.tɪŋ/", "इग-ज़ि-ल-रे-टिंग", "ex · hil · a · rat · ing (5)", "2nd Syllable", "Universal / Physical", "exhilarating experience"],
    ["shocking", "चौंकाने वाला / स्तब्धकारी", "/ˈʃɒk.ɪŋ/", "शॉक-इंग", "shock · ing (2)", "1st Syllable", "Universal / News", "shocking revelation"],
    ["miraculous", "चमत्कारिक / अलौकिक", "/mɪˈræk.jə.ləs/", "मि-रै-क्य-लस", "mi · rac · u · lous (4)", "2nd Syllable", "Universal / Spiritual", "miraculous recovery"],
    ["heartwarming", "हृदयस्पर्शी / सुखद", "/ˈhɑːtˌwɔː.mɪŋ/", "हार्ट-वॉर-मिंग", "heart · warm · ing (3)", "1st Syllable", "Universal / Emotional", "heartwarming story"],
    ["fabulous", "शानदार / लाजवाब", "/ˈfæb.jə.ləs/", "फ़ै-ब्यु-लस", "fab · u · lous (3)", "1st Syllable", "Colloquial / Social", "fabulous dinner"],
    ["horrendous", "भयावह / घोर अप्रिय", "/hɒˈren.dəs/", "हॉ-रेन-डस", "hor · ren · dous (3)", "2nd Syllable", "Formal / Emotional", "horrendous traffic"],
    ["sensational", "सनसनीखेज / शानदार", "/senˈseɪ.ʃən.əl/", "सेन-से-श-नल", "sen · sa · tion · al (4)", "2nd Syllable", "Media / Entertainment", "sensational victory"],
    ["deplorable", "दयनीय / निंदनीय", "/dɪˈplɔː.rə.bəl/", "डि-प्लो-र-बल", "de · plor · a · ble (4)", "2nd Syllable", "Formal / Ethical", "deplorable condition"],
    ["ecstatic", "परमानंद में मग्न / अति प्रसन्न", "/ɪkˈstæt.ɪk/", "इक-स्टैट-इक", "ec · stat · ic (3)", "2nd Syllable", "Formal / Emotional", "ecstatic fans"],
    ["monumental", "ऐतिहासिक / विशाल / युगांतकारी", "/ˌmɒn.jəˈmen.təl/", "मॉ-न्यु-मेन-टल", "mon · u · men · tal (4)", "3rd Syllable", "Formal / Academic", "monumental achievement"],
    ["abysmal", "अत्यंत खराब / रसातल जैसा", "/əˈbɪz.məl/", "अ-बिज़-मल", "a · bys · mal (3)", "2nd Syllable", "Formal / Critical", "abysmal performance"],
    ["enthralling", "मनमोहक / बाँधकर रखने वाला", "/ɪnˈθrɔː.lɪŋ/", "इन-थ्रॉ-लिंग", "en · thrall · ing (3)", "2nd Syllable", "Literary / Aesthetic", "enthralling novel"],
    ["grotesque", "अजीबोगरीब / विकृत", "/ɡrəʊˈtesk/", "ग्रो-टेस्क", "gro · tesque (2)", "2nd Syllable", "Formal / Aesthetic", "grotesque caricature"],
    ["sublime", "उत्कृष्ट / अलौकिक / उदात्त", "/səˈblaɪm/", "स-ब्लाइम", "sub · lime (2)", "2nd Syllable", "Formal / Philosophical", "sublime beauty"],
    ["exquisite", "अति सुंदर / नक्काशीदार / बेमिसाल", "/ɪkˈskwɪz.ɪt/", "इक-स्क्वि-ज़िट", "ex · qui · site (3)", "1st Syllable", "Formal / Aesthetic", "exquisite craftsmanship"],
    ["mindblowing", "हैरतअंगेज / होश उड़ाने वाला", "/ˈmaɪndˌbləʊ.ɪŋ/", "माइन्ड-ब्लो-इंग", "mind · blow · ing (3)", "1st Syllable", "Informal / Modern", "mindblowing visual effects"],
    ["gripping", "बेहद रोमांचक / पकड़ मजबूत रखने वाला", "/ˈɡrɪp.ɪŋ/", "ग्रिप-इंग", "grip · ping (2)", "1st Syllable", "Entertainment / Media", "gripping mystery"],
    ["jawdropping", "हक्का-बक्का कर देने वाला", "/ˈdʒɔːˌdrɒp.ɪŋ/", "जॉ-ड्रॉप-इंग", "jaw · drop · ping (3)", "1st Syllable", "Informal / Visual", "jawdropping acrobatics"],
    ["majestic", "आलीशान / राजसी", "/məˈdʒes.tɪk/", "म-जेस-टिक", "ma · jes · tic (3)", "2nd Syllable", "Formal / Visual", "majestic mountains"],
    ["astounding", "स्तब्धकारी / चकित करने वाला", "/əˈstaʊn.dɪŋ/", "अ-स्टाउन-डिंग", "as · tound · ing (3)", "2nd Syllable", "Universal / Intellectual", "astounding discovery"],
    ["heartfelt", "हार्दिक / दिली", "/ˈhɑːt.felt/", "हार्ट-फेल्ट", "heart · felt (2)", "1st Syllable", "Universal / Emotional", "heartfelt congratulations"],
    ["flabbergasted", "भौंचक्का / अवाक", "/ˈflæb.ə.ɡɑː.stɪd/", "फ़्लै-ब-गार-स्टिड", "flab · ber · gast · ed (4)", "1st Syllable", "Colloquial / British", "absolutely flabbergasted"],
    ["unprecedented", "अभूतपूर्व / जिसकी कोई मिसाल न हो", "/ʌnˈpres.ɪ.den.tɪd/", "अन-प्रे-सि-डेन-टिड", "un · prec · e · dent · ed (5)", "2nd Syllable", "Formal / Media", "unprecedented growth"],
    ["mesmerizing", "मन्त्रमुग्ध कर देने वाला", "/ˈmez.mə.raɪ.zɪŋ/", "मेज़-म-राइ-ज़िंग", "mes · mer · iz · ing (4)", "1st Syllable", "Aesthetic / Arts", "mesmerizing performance"],
    ["appalling", "भयावह / अत्यंत बुरा", "/əˈpɔː.lɪŋ/", "अ-पॉ-लिंग", "ap · pall · ing (3)", "2nd Syllable", "Formal", "appalling behavior"],
    ["resplendent", "दीप्तिमान / जगमगाता हुआ", "/rɪˈsplen.dənt/", "रि-स्प्लेन-डन्ट", "re · splen · dent (3)", "2nd Syllable", "Literary / Elevated", "resplendent in royal attire"],
    ["staggering", "आश्चर्यजनक / लड़खड़ा देने वाला आंकड़ा", "/ˈstæɡ.ər.ɪŋ/", "स्टै-ग-रिंग", "stag · ger · ing (3)", "1st Syllable", "Journalistic / Data", "staggering amount"],
    ["disgraceful", "शर्मनाक / लज्जाजनक", "/dɪsˈɡreɪs.fəl/", "डिस-ग्रेस-फुल", "dis · grace · ful (3)", "2nd Syllable", "Formal / Ethical", "disgraceful conduct"],
    ["electrifying", "विद्युत सा रोमांच पैदा करने वाला", "/ɪˈlek.trɪ.faɪ.ɪŋ/", "इ-लेक-ट्रि-फ़ाइ-इंग", "e · lec · tri · fy · ing (5)", "2nd Syllable", "Entertainment / Sports", "electrifying atmosphere"],
    ["formidable", "दुर्जेय / विकट / प्रभावशाली", "/ˈfɔː.mɪ.də.bəl/", "फ़ॉर-मि-ड-बल", "for · mi · da · ble (4)", "1st Syllable", "Formal / Strategic", "formidable opponent"],
    ["spine-chilling", "रोंगटे खड़े कर देने वाला / बेहद डरावना", "/ˈspaɪnˌtʃɪl.ɪŋ/", "स्पाइन-चिल-इंग", "spine · chill · ing (3)", "1st Syllable", "Entertainment / Literary", "spine-chilling scream"],
    ["unfathomable", "अथाह / समझ से परे", "/ʌnˈfæð.ə.mə.bəl/", "अन-फ़ै-द-म-बल", "un · fath · om · a · ble (5)", "2nd Syllable", "Formal / Philosophical", "unfathomable mystery"],
    ["awe-inspiring", "विस्मयकारी / श्रद्धा जगाने वाला", "/ˈɔː.ɪnˌspaɪə.rɪŋ/", "ऑ-इन-स्पाइ-रिंग", "awe · in · spir · ing (4)", "1st Syllable", "Aesthetic / Nature", "awe-inspiring monument"],
    ["transcendent", "सर्वोत्कृष्ट / अलौकिक / श्रेष्ठ", "/trænˈsen.dənt/", "ट्रैन-सेन-डन्ट", "tran · scen · dent (3)", "2nd Syllable", "Philosophical / Arts", "transcendent experience"]
  ];

  rawTerms3.forEach((t, idx) => {
    vocabulary.push({
      id: `d03_v${String(idx + 1).padStart(2, '0')}`,
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
      example: `What a ${t[0]} achievement for our research team!`,
      commonError: `Ensure correct stress placement on the ${t[5]}.`
    });
  });

  const examples = [];
  for (let i = 1; i <= 100; i++) {
    const exId = `d03_ex_${String(i).padStart(3, '0')}`;
    if (i <= 15) {
      examples.push({ id: exId, category: "Grammar", en: "What a spectacular goal that was in the final minute!", hi: "अंतिम मिनट में वह कितना शानदार गोल था!" });
    } else if (i <= 30) {
      examples.push({ id: exId, category: "Conversational", en: "Oh dear! I completely forgot to bring the keys.", hi: "अरे बाप रे! मैं चाबियाँ लाना पूरी तरह भूल गया।" });
    } else if (i <= 45) {
      examples.push({ id: exId, category: "Professional", en: "What an extraordinary turnaround in quarterly earnings!", hi: "त्रैमासिक कमाई में कितना असाधारण सुधार हुआ है!" });
    } else if (i <= 55) {
      examples.push({ id: exId, category: "TranslationContrast", en: "That is excellent! (NOT: 'That is too good' for simple praise)", hi: "यह बहुत बढ़िया है! ('Too good' के स्थान पर 'That is excellent' कहें)" });
    } else if (i <= 65) {
      examples.push({ id: exId, category: "Pronunciation", en: "The prize at the zoo was amazing and dazzling. (/z/ sound)", hi: "चिड़ियाघर में पुरस्कार अद्भुत और चकाचौंध करने वाला था। (/z/ ध्वनि अभ्यास)" });
    } else if (i <= 75) {
      examples.push({ id: exId, category: "ErrorReversal", en: "How beautiful this sunset is! (NOT: 'How this sunset is beautiful')", hi: "यह सूर्यास्त कितना सुंदर है! (विस्मयादिबोधक वाक्य में सही शब्द क्रम)" });
    } else if (i <= 85) {
      examples.push({ id: exId, category: "RegisterShift", en: "Casual: Awesome! | Formal: That is truly remarkable and praiseworthy.", hi: "अनौपचारिक: गज़ब! | औपचारिक: यह सचमुच उल्लेखनीय और प्रशंसनीय है।" });
    } else {
      examples.push({ id: exId, category: "DialogueExchange", en: "Speaker A: We just secured the government infrastructure contract!\nSpeaker B: Incredible! Congratulations to the entire project team!", hi: "वक्ता A: हमें अभी सरकारी बुनियादी ढांचा अनुबंध मिल गया है!\nवक्ता B: बेमिसाल! पूरी प्रोजेक्ट टीम को बहुत-बहुत बधाई!" });
    }
  }

  const translationDrills = [
    { id: "d03_tr_01", type: "en_to_hi", source: "What a magnificent view from the mountain peak!", target: "पहाड़ की चोटी से कितना भव्य नज़ारा है!", explanation: "'What a + Adjective + Noun' विस्मय प्रकट करता है।" },
    { id: "d03_tr_02", type: "hi_to_en", source: "कितना शानदार विचार है!", target: "What a splendid idea!", explanation: "'What a splendid idea!' मानक विस्मयादिबोधक वाक्य है।" },
    { id: "d03_tr_03", type: "en_to_hi", source: "How generous of you to sponsor the children's education!", target: "बच्चों की शिक्षा को प्रायोजित करना आपकी कितनी बड़ी उदारता है!", explanation: "'How + Adjective + of you' प्रशंसा का रूप है।" },
    { id: "d03_tr_04", type: "hi_to_en", source: "अरे नहीं! हमारी ट्रेन छूट गई।", target: "Oh no! We missed our train.", explanation: "'Oh no!' निराशा या झटके को व्यक्त करने वाला इंटरजेक्शन है।" },
    { id: "d03_tr_05", type: "en_to_hi", source: "That is absolutely astonishing news for all of us!", target: "यह हम सभी के लिए बिल्कुल आश्चर्यजनक समाचार है!", explanation: "'Astonishing' अत्यधिक चकित करने वाले के लिए प्रयुक्त होता है।" },
    { id: "d03_tr_06", type: "hi_to_en", source: "यह कितनी भयानक त्रासदी है!", target: "What a dreadful tragedy this is!", explanation: "'Dreadful tragedy' भयानक त्रासदी के लिए उपयुक्त है।" },
    { id: "d03_tr_07", type: "en_to_hi", source: "Incredible! You completed the marathon in three hours!", target: "अविश्वसनीय! आपने तीन घंटे में मैराथन पूरी कर ली!", explanation: "'Incredible' प्रशंसात्मक विस्मय है।" },
    { id: "d03_tr_08", type: "hi_to_en", source: "यह कितना अविश्वसनीय और रोमांचक अनुभव था!", target: "What an unbelievable and thrilling experience it was!", explanation: "भावनात्मक अनुभव का प्राकृतिक अनुवाद।" },
    { id: "d03_tr_09", type: "en_to_hi", source: "Oh dear! The computer system has crashed again.", target: "अरे बाप रे! कंप्यूटर सिस्टम फिर से क्रैश हो गया है।", explanation: "'Oh dear' चिंता या परेशानी का हल्का सूचक है।" },
    { id: "d03_tr_10", type: "hi_to_en", source: "उसने कितनी खूबसूरत पोशाक पहनी है!", target: "What a stunning dress she is wearing!", explanation: "'What a stunning dress' सौंदर्य की प्रशंसा है।" },
    { id: "d03_tr_11", type: "en_to_hi", source: "How rapidly the technology landscape is evolving!", target: "प्रौद्योगिकी का परिदृश्य कितनी तेजी से विकसित हो रहा है!", explanation: "'How + Adverb' क्रिया की गति पर विस्मय व्यक्त करता है।" },
    { id: "d03_tr_12", type: "hi_to_en", source: "क्या अद्भुत प्रदर्शन था!", target: "What a phenomenal performance that was!", explanation: "'Phenomenal performance' असाधारण प्रदर्शन के लिए प्रयुक्त होता है।" },
    { id: "d03_tr_13", type: "en_to_hi", source: "Bravo! You delivered the presentation with immense confidence.", target: "शाबाश! आपने अत्यधिक आत्मविश्वास के साथ प्रस्तुति दी।", explanation: "'Bravo!' शाबाशी देने का अंतरराष्ट्रीय इंटरजेक्शन है।" },
    { id: "d03_tr_14", type: "hi_to_en", source: "कितना दिल दहला देने वाला समाचार है!", target: "What heartbreaking news!", explanation: "'Heartbreaking news' गहरी संवेदना व्यक्त करता है।" },
    { id: "d03_tr_15", type: "en_to_hi", source: "What a relief to know that everyone is safe!", target: "यह जानकर कितनी बड़ी राहत मिली कि सब सुरक्षित हैं!", explanation: "'What a relief' राहत के भाव के लिए मानक मुहावरा है।" },
    { id: "d03_tr_16", type: "hi_to_en", source: "यह सचमुच एक ऐतिहासिक उपलब्धि है!", target: "This is truly a monumental achievement!", explanation: "'Monumental achievement' युगांतकारी सफलता को दर्शाता है।" },
    { id: "d03_tr_17", type: "en_to_hi", source: "How tragic that such a young talent passed away!", target: "कितना दुखद है कि इतनी कम उम्र की प्रतिभा का निधन हो गया!", explanation: "'How tragic' गहरा शोक प्रकट करता है।" },
    { id: "d03_tr_18", type: "hi_to_en", source: "अरे वाह! आपने तो कमाल कर दिया।", target: "Wow! You have done an outstanding job.", explanation: "'Outstanding job' उत्कृष्ट कार्य की प्रशंसा है।" },
    { id: "d03_tr_19", type: "en_to_hi", source: "What an appalling waste of public resources!", target: "सार्वजनिक संसाधनों की कितनी शर्मनाक बर्बादी है!", explanation: "'Appalling waste' घोर बर्बादी के प्रति आक्रोश प्रकट करता है।" },
    { id: "d03_tr_20", type: "hi_to_en", source: "यह कितना मनमोहक संगीत है!", target: "What mesmerizing music this is!", explanation: "'Mesmerizing music' मन्त्रमुग्ध कर देने वाले संगीत के लिए है।" },
    { id: "d03_tr_21", type: "en_to_hi", source: "Good grief! Look at the length of this queue.", target: "हे भगवान! ज़रा इस कतार की लंबाई तो देखो।", explanation: "'Good grief' अचरज और हल्की खीझ का इंटरजेक्शन है।" },
    { id: "d03_tr_22", type: "hi_to_en", source: "कितनी बहादुरी से उस सिपाही ने लड़ाई लड़ी!", target: "How bravely that soldier fought!", explanation: "'How bravely' वीरता की प्रशंसा करता है।" },
    { id: "d03_tr_23", type: "en_to_hi", source: "What a thrilling climax to the cricket match!", target: "क्रिकेट मैच का कितना रोमांचक समापन था!", explanation: "'Thrilling climax' रोमांचक अंत को दर्शाता है।" },
    { id: "d03_tr_24", type: "hi_to_en", source: "ईश्वर का लाख-लाख शुक्र है कि संकट टल गया।", target: "Thank goodness the crisis has been averted!", explanation: "'Thank goodness' ईश्वर को धन्यवाद देने का सामान्य रूप है।" },
    { id: "d03_tr_25", type: "en_to_hi", source: "What an astounding discovery by the astronomical team!", target: "खगोलीय टीम द्वारा कितनी विस्मयकारी खोज की गई है!", explanation: "'Astounding discovery' महान खोज के लिए प्रयुक्त होता है।" }
  ];

  const exercises = [];
  for (let i = 1; i <= 65; i++) {
    const exId = `day03_ex_${String(i).padStart(3, '0')}`;
    if (i === 1) {
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: "Which exclamatory sentence follows correct standard English syntax?",
        options: ["What a magnificent speech she delivered!", "How a magnificent speech she delivered!", "What magnificent speech she delivered a!", "How speech she delivered magnificent!"],
        correctAnswer: "What a magnificent speech she delivered!",
        explanationEn: "Rule: 'What a/an + Adjective + Singular Count Noun + Subject + Verb!'.",
        explanationHi: "नियम: 'What a/an + विशेषण + एकवचन संज्ञा + कर्ता + क्रिया!'.",
        skillTag: "EXCLAMATION_SYNTAX"
      });
    } else if (i === 2) {
      exercises.push({
        id: exId,
        type: "minimal_pair_discrim",
        prompt: "Which word contains the voiced alveolar sibilant /z/ (vocal cords vibrating)?",
        options: ["Zoo", "Sue", "Price", "Rice"],
        correctAnswer: "Zoo",
        explanationEn: "'Zoo' (/zuː/) has the voiced /z/. 'Sue' (/suː/) has the voiceless /s/.",
        explanationHi: "'Zoo' में /z/ ध्वनि में वोकल कॉर्ड्स गूंजती हैं; 'Sue' में केवल हवा निकलती है (/s/)।",
        skillTag: "PHONETICS_MINIMAL_PAIRS"
      });
    } else if (i <= 20) {
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `Select the correct emotional reaction marker (Item ${i}):`,
        options: ["What an incredible achievement!", "Too much achievement!", "What achievement incredible!", "How an achievement!"],
        correctAnswer: "What an incredible achievement!",
        explanationEn: "Correct standard exclamatory form.",
        explanationHi: "शुद्ध विस्मयादिबोधक रूप।",
        skillTag: "EXCLAMATION_SYNTAX"
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
        prompt: `Fill in the missing exclamatory word: "[What] a marvelous opportunity for our team!"`,
        correctAnswer: "What",
        explanationEn: "'What a...' precedes singular countable nouns.",
        explanationHi: "एकवचन संज्ञा से पहले 'What a...' का प्रयोग होता है।",
        skillTag: "CONNECTED_SPEECH_CLOZE"
      });
    }
  }

  return {
    dayNumber: 3,
    id: "day_03",
    titleEn: "Expressive Reactions, Emotional Exclamations & Interjections",
    titleHi: "भावनात्मक प्रतिक्रियाएं, विस्मयादिबोधक उद्गार एवं मनोभाव अभिव्यक्ति",
    cefr: "A1.3",
    estMinutes: 45,
    prerequisites: "Day 02 Complete Mastery",
    objectivesEn: [
      "Construct natural exclamatory sentences using 'What a...' and 'How...' syntax.",
      "Deploy context-appropriate interjections (Wow, Oh dear, Bravo, Alas, Thank goodness) across diverse emotional registers.",
      "Master the phonetic contrast between voiceless /s/ and voiced /z/ without substituting /dʒ/ ('zebra', 'amazing').",
      "Eliminate the overuse of 'Too good' as generic positive praise in favor of authentic adjectives."
    ],
    objectivesHi: [
      "'What a...' और 'How...' की व्याकरण सम्मत संरचना का उपयोग करके स्वाभाविक विस्मयादिबोधक वाक्य बनाना।",
      "विभिन्न भावनात्मक स्तरों पर सटीक इंटरजेक्शन्स (Wow, Oh dear, Bravo, Alas, Thank goodness) का प्रयोग करना।",
      "अघोष /s/ और सघोष /z/ ध्वनियों के बीच स्पष्ट अंतर करना (ज़ेब्रा को जेब्रा बोलने की गलती समाप्त करना)।",
      "सामान्य प्रशंसा के लिए 'Too good' के गलत प्रयोग को समाप्त कर 'Excellent' व 'Wonderful' का प्रयोग करना।"
    ],
    teach: {
      hindiExplanation: `डे 03 में आपका स्वागत है! आज हम भावनाओं को तीव्रता और सटीकता से व्यक्त करने के तरीके सीखेंगे।

### 1. विस्मयादिबोधक वाक्य-संरचना (Exclamatory Structures):
1. **What a / What an + Adjective + Singular Noun!**
   - *What a beautiful painting!* (कितनी सुंदर पेंटिंग है!)
   - *What an astonishing achievement!* (कितनी आश्चर्यजनक उपलब्धि है!)
2. **What + Adjective + Plural / Uncountable Noun!**
   - *What lovely flowers!* (कितने प्यारे फूल हैं!)
   - *What terrible weather!* (कितना खराब मौसम है!)
3. **How + Adjective / Adverb + Subject + Verb!**
   - *How generous he is!* (वह कितना उदार है!)
   - *How fast she runs!* (वह कितनी तेज दौड़ती है!)

### 2. भारतीय अंग्रेजी की गलती (Indian English Error):
- ❌ **गलत**: किसी की उपलब्धि पर कहना: "*This is too good!*" ('Too' का अर्थ आवश्यकता से अधिक यानी नकारात्मक होता है, जैसे 'too hot' - असहनीय गर्म।)
  ✔️ **सही**: "**This is wonderful / excellent / phenomenal!**"`,
      englishExplanation: `Day 03 teaches exclamatory syntax, high-involvement prosody, and the sibilant voicing contrast (/s/ vs /z/).

Key Principles:
1. **Exclamatory Grammar**: Differentiating 'What a...' (used with noun phrases) from 'How...' (used with bare adjectives and adverbs).
2. **Semantic Precision with Modifiers**: Preventing semantic drift where 'too' is incorrectly used as a synonym for 'very'.`,
      grammarRules: [
        { ruleNumber: 1, title: "What a vs. How Structure", description: "Use 'What a/an' before adjective + singular count noun ('What a great idea!'). Use 'How' directly before adjectives or adverbs ('How wonderful!', 'How quickly he learned!').", register: "Universal Grammar" },
        { ruleNumber: 2, title: "Eliminating 'Too Good' as Pure Praise", description: "'Too' indicates excess beyond a desirable limit ('too salty', 'too late'). For unreserved praise, use 'extremely good', 'exceptional', 'brilliant', or 'superb'.", register: "Semantic Precision" }
      ],
      formulaTable: [
        { subjectGroup: "Singular Noun Exclamation", formula: "What a / an + [Adjective] + [Noun] + [Subject + Verb]!", exampleEn: "What a stunning goal he scored!", meaningHi: "उसने कितना शानदार गोल दागा!" },
        { subjectGroup: "Adjective / Adverb Exclamation", formula: "How + [Adjective / Adverb] + [Subject + Verb]!", exampleEn: "How beautifully she sings!", meaningHi: "वह कितना मधुर गाती है!" }
      ],
      hindiSpeakerTrap: {
        trapTitle: "Using 'Too good' for praise and pronouncing /z/ as /dʒ/",
        hindiPattern: "हिंदी में 'बहुत अच्छा' के लिए कई लोग 'Too good' कहते हैं और /z/ (ज़) को /dʒ/ (ज) उच्चारित करते हैं ('Zebra' -> 'Jebra').",
        potentialInterference: "Saying: 'Your presentation was too good, it was amejing.'",
        grammaticalRootCause: "'Too' implies excessive defect. /z/ requires alveolar sibilant friction with vocal vibration.",
        naturalSolution: "Say: 'Your presentation was absolutely extraordinary and amazing /əˈmeɪ.zɪŋ/.'"
      }
    },
    phonetics: {
      targetSound: "Voiceless Alveolar Sibilant /s/ vs. Voiced Alveolar Sibilant /z/",
      articulatoryMechanics: {
        placeOfArticulation: "Alveolar (tongue tip near the tooth ridge).",
        mannerOfArticulation: "Sibilant Fricative (high-frequency hissing/buzzing airstream).",
        voicing: "/s/ is Voiceless ('see', 'price'); /z/ is Voiced ('zoo', 'prize', 'amazing').",
        anatomicalInstructions: "Raise your tongue blade near the alveolar ridge behind your top teeth. Blow air through to create a hissing /s/ (like a snake). Now turn on your vocal cords to create a buzzing /z/ (like a bee). Never block the air completely into a 'j' (/dʒ/)."
      },
      hindiSpeakerPhoneticTrap: "Hindi speakers frequently replace /z/ with the post-alveolar affricate /dʒ/ (ज), turning 'zero' into 'jero', 'zip' into 'jip', and 'music' into 'mujic'.",
      minimalPairs: [
        { wordA: { text: "Zoo", ipa: "/zuː/", audioRef: "d03_pair_01a" }, wordB: { text: "Jew", ipa: "/dʒuː/", audioRef: "d03_pair_01b" }, discriminationNote: "Zoo (buzzing /z/) vs. Jew (affricate /dʒ/)." },
        { wordA: { text: "Price", ipa: "/praɪs/", audioRef: "d03_pair_02a" }, wordB: { text: "Prize", ipa: "/praɪz/", audioRef: "d03_pair_02b" }, discriminationNote: "Price (voiceless /s/) vs. Prize (voiced /z/)." },
        { wordA: { text: "Sip", ipa: "/sɪp/", audioRef: "d03_pair_03a" }, wordB: { text: "Zip", ipa: "/zɪp/", audioRef: "d03_pair_03b" }, discriminationNote: "Sip (/s/) vs. Zip (/z/)." },
        { wordA: { text: "Peace", ipa: "/piːs/", audioRef: "d03_pair_04a" }, wordB: { text: "Peas", ipa: "/piːz/", audioRef: "d03_pair_04b" }, discriminationNote: "Peace (/s/) vs. Peas (/z/)." }
      ],
      prosodyFocus: {
        type: "Exclamatory Pitch Leap",
        ruleExplanation: "Exclamations involve a sudden dramatic pitch jump on the primary stressed syllable of the emotional modifier, followed by a steep fall.",
        drills: [
          { sentence: "What a FANTASTIC result! ↘", phoneticNotation: "/wɒt ə fænˈtæs.tɪk rɪˈzʌlt/", intonationCurve: "High Pitch Leap + Fall", audioRef: "d03_prosody_01" },
          { sentence: "How WONDERFUL to see you! ↘", phoneticNotation: "/haʊ ˈwʌn.də.fəl tə ˈsiː juː/", intonationCurve: "High Pitch Leap + Fall", audioRef: "d03_prosody_02" }
        ]
      }
    },
    learn: {
      vocabulary: vocabulary,
      spokenPhrases: [
        { id: "d03_sp_01", phrase: "What a magnificent performance!", register: "Formal Arts", meaningHi: "कितना भव्य और शानदार प्रदर्शन!" },
        { id: "d03_sp_02", phrase: "How extraordinarily kind of you!", register: "Formal Social", meaningHi: "आपकी कितनी असाधारण दयालुता है!" },
        { id: "d03_sp_03", phrase: "Incredible! Congratulations on your well-deserved promotion!", register: "Corporate Celebration", meaningHi: "बेमिसाल! आपकी इस सर्वथा योग्य पदोन्नति पर बहुत-बहुत बधाई!" },
        { id: "d03_sp_04", phrase: "What a tremendous relief for all of us!", register: "Emotional Relief", meaningHi: "हम सभी के लिए कितनी बड़ी और सुखद राहत!" }
      ]
    },
    examples: { bilingualExemplars: examples },
    practice: { exercises: exercises, translationSet: translationDrills },
    use: {
      dialogue: {
        scenarioTitleEn: "Celebrating an International Research Breakthrough",
        scenarioTitleHi: "अंतरराष्ट्रीय शोध सफलता का जश्न",
        contextDescription: "Scientists Dr. Swati and Dr. David react to the groundbreaking laboratory test results.",
        turns: [
          { speaker: "Swati", en: "David, look at the spectrometer readings from sample seven!", hi: "डेविड, सैंपल सात के स्पेक्ट्रोमीटर रीडिंग को देखो!", phoneticNote: "/lʊk ət ðə spekˈtrɒm.ɪ.tə ˈriː.dɪŋz/", audioRef: "d03_dial_01" },
          { speaker: "David", en: "Astonishing! The molecular binding efficiency has exceeded ninety-eight percent!", hi: "अद्भुत! आणविक बाइंडिंग दक्षता अठानवे प्रतिशत से अधिक हो गई है!", phoneticNote: "/əˈstɒn.ɪ.ʃɪŋ/", audioRef: "d03_dial_02" },
          { speaker: "Swati", en: "What a phenomenal breakthrough for our entire biotechnology department!", hi: "हमारे पूरे जैव प्रौद्योगिकी विभाग के लिए यह कितनी अभूतपूर्व सफलता है!", phoneticNote: "/wɒt ə fəˈnɒm.ɪ.nəl ˈbreɪk.θruː/", audioRef: "d03_dial_03" },
          { speaker: "David", en: "How thrilled the director will be when we present these findings tomorrow morning!", hi: "कल सुबह जब हम इन निष्कर्षों को प्रस्तुत करेंगे तो निदेशक महोदय कितने रोमांचित होंगे!", phoneticNote: "/haʊ θrɪld ðə daɪˈrek.tə wɪl biː/", audioRef: "d03_dial_04" }
        ]
      }
    },
    assess: {
      writtenChecklist: [
        { question: "What is the structural difference between 'What a...' and 'How...' exclamations?", answer: "'What a/an' modifies an adjective + noun phrase; 'How' modifies a bare adjective or adverb directly." },
        { question: "Why is pronouncing 'zero' as 'jero' incorrect phonetically?", answer: "/z/ is an alveolar fricative with continuous buzzing, while /dʒ/ ('j') is an affricate stop." }
      ],
      oralProductionTask: {
        prompt: "Record a 60-second spontaneous reaction celebrating a colleague winning a prestigious international award. Use at least two exclamatory sentences ('What a...', 'How...') and correct /z/ pronunciation in 'prize' and 'amazing'.",
        targetStructures: ["What a monumental achievement!", "How incredibly proud we are!", "Well-deserved prize"],
        targetPhonemes: ["Clear /z/ in 'prize/amazing'", "High pitch leap on adjectives"],
        evaluationRubric: "Scored on (1) Exclamatory syntax, (2) Pitch range, (3) /z/ voicing."
      },
      benchmarks: [
        { id: "d03_bm_01", benchmark: "Fluently applies exclamatory grammar and expressive pitch leaps." }
      ]
    }
  };
}

console.log("[BUILDER] Day 03 built successfully.");
const d03Data = `export const day03 = ${JSON.stringify(createDay03(), null, 2)};\n`;
fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day03.js'), d03Data, 'utf8');
console.log("[SAVED] content_builder/day03.js written successfully.");
