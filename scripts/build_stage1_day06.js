import fs from 'fs';
import path from 'path';

// --- DAY 06 BUILDER ---
function createDay06() {
  const vocabulary = [];
  const rawTerms6 = [
    ["historical", "ऐतिहासिक", "/hɪˈstɒr.ɪ.kəl/", "हि-स्टॉ-रि-कल", "his · tor · i · cal (4)", "2nd Syllable", "Academic", "historical milestone"],
    ["predecessor", "पूर्ववर्ती / पूर्वज", "/ˈpriː.dɪˌses.ə/", "प्री-डि-सेस-अर", "pred · e · ces · sor (4)", "1st Syllable", "Professional / Formal", "distinguished predecessor"],
    ["former", "भूतपूर्व / पहला", "/ˈfɔː.mə/", "फ़ॉर-मर", "for · mer (2)", "1st Syllable", "Universal", "former prime minister"],
    ["ancestor", "पूर्वज", "/ˈæn.ses.tə/", "ऐन-सेस-टर", "an · ces · tor (3)", "1st Syllable", "Anthropology", "ancient ancestor"],
    ["antique", "प्राचीन / अनूठा", "/ænˈtiːk/", "ऐन-टीक", "an · tique (2)", "2nd Syllable", "Art / History", "antique furniture"],
    ["nostalgia", "बीते समय की सुखद यादें", "/nɒsˈtæl.dʒə/", "नॉ-स्टैल-ज्या", "nos · tal · gia (3)", "2nd Syllable", "Psychology / Universal", "wave of nostalgia"],
    ["previously", "पहले / पूर्व में", "/ˈpriː.vi.əs.li/", "प्री-वि-अस-ली", "pre · vi · ous · ly (4)", "1st Syllable", "Formal / Time", "previously mentioned"],
    ["antiquity", "प्राचीन काल", "/ænˈtɪk.wə.ti/", "ऐन-टिक-वि-टी", "an · tiq · ui · ty (4)", "2nd Syllable", "History", "relics of antiquity"],
    ["archaic", "पुरातन / अप्रचलित", "/ɑːˈkeɪ.ɪk/", "आर-के-इक", "ar · cha · ic (3)", "2nd Syllable", "Linguistic / Formal", "archaic terminology"],
    ["obsolete", "अप्रचलित / पुराना", "/ˌɒb.səˈliːt/", "ऑब-स-लीट", "ob · so · lete (3)", "3rd Syllable", "Technical / Workplace", "obsolete machinery"],
    ["reminisce", "पुरानी यादें ताजा करना", "/ˌrem.ɪˈnɪs/", "रे-मि-निस", "rem · i · nisce (3)", "3rd Syllable", "Literature / Social", "reminisce about childhood"],
    ["chronology", "कालक्रम", "/krəˈnɒl.ə.dʒi/", "क्र-नॉ-ल-जी", "chro · nol · o · gy (4)", "2nd Syllable", "Academic", "chronology of events"],
    ["legacy", "विरासत / देन", "/ˈleɡ.ə.si/", "ले-ग-सी", "leg · a · cy (3)", "1st Syllable", "Universal / History", "enduring legacy"],
    ["heritage", "धरोहर / सांस्कृतिक विरासत", "/ˈher.ɪ.tɪdʒ/", "हे-रि-टिज", "her · i · tage (3)", "1st Syllable", "Cultural / Legal", "world cultural heritage"],
    ["bygone", "बीता हुआ जमाना", "/ˈbaɪ.ɡɒn/", "बाइ-गॉन", "by · gone (2)", "1st Syllable", "Literary", "bygone era"],
    ["retrospective", "पूर्वव्यापी / पुनरावलोकन", "/ˌret.rəˈspek.tɪv/", "रेट-रो-स्पेक-टिव", "ret · ro · spec · tive (4)", "3rd Syllable", "Formal / Art", "retrospective analysis"],
    ["preliminary", "प्रारंभिक", "/prɪˈlɪm.ɪ.nər.i/", "प्रि-लिम-इ-न-री", "pre · lim · i · nar · y (5)", "2nd Syllable", "Workplace / Science", "preliminary investigation"],
    ["prior", "पूर्व / पिछला", "/praɪə/", "प्राइ-अर", "pri · or (2)", "1st Syllable", "Legal / Formal", "prior experience"],
    ["erstwhile", "भूतपूर्व / तत्कालीन", "/ˈɜːst.waɪl/", "अस्ट-वाइल", "erst · while (2)", "1st Syllable", "Literary / Journalistic", "erstwhile colleagues"],
    ["veteran", "अनुभवी व्यक्ति", "/ˈvet.ər.ən/", "वे-ट-रन", "vet · er · an (3)", "1st Syllable", "Professional / Military", "seasoned veteran"],
    ["epoch", "युग / काल", "/ˈiː.pɒk/", "ई-पॉक", "ep · och (2)", "1st Syllable", "History / Science", "new historical epoch"],
    ["ancient", "प्राचीन / पुरातन", "/ˈeɪn.ʃənt/", "एन-शन्ट", "an · cient (2)", "1st Syllable", "Universal", "ancient civilization"],
    ["antediluvian", "अति प्राचीन / दकियानूसी", "/ˌæn.ti.dɪˈluː.vi.ən/", "ऐन-टि-डि-लू-वि-अन", "an · te · di · lu · vi · an (6)", "4th Syllable", "Literary / Humorous", "antediluvian views"],
    ["prehistoric", "प्रागैतिहासिक", "/ˌpriː.hɪˈstɒr.ɪk/", "प्री-हि-स्टॉ-रिक", "pre · his · tor · ic (4)", "3rd Syllable", "Science", "prehistoric artifacts"],
    ["timeline", "समय-सीमा / घटनाक्रम", "/ˈtaɪm.laɪn/", "टाइम-लाइन", "time · line (2)", "1st Syllable", "Project Management", "project timeline"],
    ["tradition", "परंपरा / प्रथा", "/trəˈdɪʃ.ən/", "ट्र-डि-शन", "tra · di · tion (3)", "2nd Syllable", "Cultural", "time-honored tradition"],
    ["origin", "उत्पत्ति / मूल", "/ˈɒr.ɪ.dʒɪn/", "ऑ-रि-जिन", "or · i · gin (3)", "1st Syllable", "Science / History", "country of origin"],
    ["ancestral", "पैतृक / पुरखों का", "/ænˈses.trəl/", "ऐन-सेस-ट्रल", "an · ces · tral (3)", "2nd Syllable", "Cultural / Legal", "ancestral property"],
    ["monument", "स्मारक / ऐतिहासिक धरोहर", "/ˈmɒn.jə.mənt/", "मॉ-न्यु-मन्ट", "mon · u · ment (3)", "1st Syllable", "Architecture / History", "national monument"],
    ["chronological", "कालक्रमानुसार", "/ˌkrɒn.əˈlɒdʒ.ɪ.kəl/", "क्रॉ-न-लॉ-जि-कल", "chron · o · log · i · cal (5)", "3rd Syllable", "Academic", "chronological order"],
    ["generation", "पीढ़ी", "/ˌdʒen.əˈreɪ.ʃən/", "जे-न-रे-शन", "gen · er · a · tion (4)", "3rd Syllable", "Sociology", "younger generation"],
    ["custodian", "संरक्षक / रखवाला", "/kʌsˈtəʊ.di.ən/", "कस-टो-डि-अन", "cus · to · di · an (4)", "2nd Syllable", "Legal / Cultural", "custodian of records"],
    ["memoir", "संस्मरण / आत्मकथा", "/ˈmem.wɑː/", "मेम-वार", "mem · oir (2)", "1st Syllable", "Literature", "published memoirs"],
    ["inauguration", "उद्घाटन / शुभारंभ", "/ɪˌnɔː.ɡjəˈreɪ.ʃən/", "इ-नॉ-ग्यु-रे-शन", "in · au · gu · ra · tion (5)", "4th Syllable", "Formal / Government", "presidential inauguration"],
    ["millennium", "सहस्राब्दी (1000 वर्ष)", "/mɪˈlen.i.əm/", "मि-लेन-इ-अम", "mil · len · ni · um (4)", "2nd Syllable", "History / Time", "new millennium"],
    ["century", "शताब्दी (100 वर्ष)", "/ˈsen.tʃər.i/", "सेन-चु-री", "cen · tu · ry (3)", "1st Syllable", "Time", "twenty-first century"],
    ["decade", "दशक (10 वर्ष)", "/ˈdek.eɪd/", "डे-केड", "dec · ade (2)", "1st Syllable", "Time", "past decade"],
    ["immemorial", "अति प्राचीन / स्मरणातीत", "/ˌɪm.əˈmɔː.ri.əl/", "इम-अ-मॉ-रि-अल", "im · me · mo · ri · al (5)", "3rd Syllable", "Literary", "time immemorial"],
    ["annals", "इतिहास-ग्रंथ / वार्षिक विवरण", "/ˈæn.əlz/", "ऐन-अल्ज़", "an · nals (2)", "1st Syllable", "History", "annals of science"],
    ["primitive", "आदिम / प्रारंभिक", "/ˈprɪm.ɪ.tɪv/", "प्रि-मि-टिव", "prim · i · tive (3)", "1st Syllable", "Anthropology", "primitive tools"],
    ["pedigree", "वंशवृक्ष / वंशावली", "/ˈped.ɪ.ɡriː/", "पे-डि-ग्री", "ped · i · gree (3)", "1st Syllable", "Genetics / History", "impeccable pedigree"],
    ["lineage", "वंश परंपरा / कुल", "/ˈlɪn.i.ɪdʒ/", "लिन-इ-इज", "lin · e · age (3)", "1st Syllable", "Anthropology", "royal lineage"],
    ["forefather", "पूर्वज", "/ˈfɔːˌfɑː.ðə/", "फ़ॉर-फ़ा-दर", "fore · fa · ther (3)", "1st Syllable", "Universal", "our noble forefathers"],
    ["chronicle", "इतिहास लिखना / वृत्तांत", "/ˈkrɒn.ɪ.kəl/", "क्रॉ-नि-कल", "chron · i · cle (3)", "1st Syllable", "Literature / History", "chronicle of events"],
    ["vestige", "अवशेष / नामोनिशान", "/ˈves.tɪdʒ/", "वेस-टिज", "ves · tige (2)", "1st Syllable", "Archaeology", "vestiges of the past"],
    ["antiquated", "पुराने ढंग का", "/ˈæn.tɪ.kweɪ.tɪd/", "ऐन-टि-क्वे-टिड", "an · ti · quat · ed (4)", "1st Syllable", "Criticism", "antiquated software"],
    ["relic", "स्मृति-चिह्न / अवशेष", "/ˈrel.ɪk/", "रे-लिक", "rel · ic (2)", "1st Syllable", "History / Archaeology", "ancient holy relic"],
    ["remnant", "बचा-खुचा अंश", "/ˈrem.nənt/", "रेम-नन्ट", "rem · nant (2)", "1st Syllable", "Universal", "remnants of the wall"],
    ["provenance", "उत्पत्ति का स्रोत", "/ˈprɒv.ən.əns/", "प्रॉ-व-नन्स", "prov · e · nance (3)", "1st Syllable", "Art / Archaeology", "established provenance"],
    ["hereditary", "आनुवंशिक / पैतृक", "/hɪˈred.ɪ.tər.i/", "हि-रे-डि-ट-री", "he · red · i · tar · y (5)", "2nd Syllable", "Biology / Legal", "hereditary title"],
    ["precursor", "अग्रदूत / पूर्ववर्ती संकेत", "/priːˈkɜː.sə/", "प्री-कर-सर", "pre · cur · sor (3)", "2nd Syllable", "Science / History", "precursor to the internet"],
    ["bygone", "बीता हुआ", "/ˈbaɪ.ɡɒn/", "बाइ-गॉन", "by · gone (2)", "1st Syllable", "Literary", "bygone days"],
    ["antiquity", "पुरातन काल", "/ænˈtɪk.wə.ti/", "ऐन-टिक-वि-टी", "an · tiq · ui · ty (4)", "2nd Syllable", "History", "classical antiquity"],
    ["historical", "ऐतिहासिक तथ्य", "/hɪˈstɒr.ɪ.kəl/", "हि-स्टॉ-रि-कल", "his · tor · i · cal (4)", "2nd Syllable", "Academic", "historical context"],
    ["traditional", "पारंपरिक", "/trəˈdɪʃ.ən.əl/", "ट्र-डि-श-नल", "tra · di · tion · al (4)", "2nd Syllable", "Culture", "traditional methods"],
    ["chronological", "समयबद्ध", "/ˌkrɒn.əˈlɒdʒ.ɪ.kəl/", "क्रॉ-न-लॉ-जि-कल", "chron · o · log · i · cal (5)", "3rd Syllable", "Academic", "chronological sequence"],
    ["veteran", "अनुभवी", "/ˈvet.ər.ən/", "वे-ट-रन", "vet · er · an (3)", "1st Syllable", "Workplace", "veteran teacher"],
    ["legacy", "धरोहर", "/ˈleɡ.ə.si/", "ले-ग-सी", "leg · a · cy (3)", "1st Syllable", "Universal", "lasting legacy"],
    ["ancestral", "पैतृक", "/ænˈses.trəl/", "ऐन-सेस-ट्रल", "an · ces · tral (3)", "2nd Syllable", "Legal", "ancestral estate"],
    ["former", "पूर्व", "/ˈfɔː.mə/", "फ़ॉर-मर", "for · mer (2)", "1st Syllable", "Universal", "former champion"]
  ];

  rawTerms6.forEach((t, idx) => {
    vocabulary.push({
      id: `d06_v${String(idx + 1).padStart(2, '0')}`,
      lemma: t[0],
      wordForm: t[0],
      pos: "noun/adj",
      ipa: t[2],
      devanagari: t[3],
      syllables: t[4],
      stress: t[5],
      hindiMeaning: t[1],
      register: t[6],
      collocations: [t[7]],
      relatedForms: [],
      example: `This was a ${t[0]} milestone in the history of our institution.`,
      commonError: `Stress placement on the ${t[5]}.`
    });
  });

  const examples = [];
  for (let i = 1; i <= 100; i++) {
    const exId = `d06_ex_${String(i).padStart(3, '0')}`;
    if (i <= 15) {
      examples.push({ id: exId, category: "Grammar", en: "Dr. Vikram Sarabhai was a pioneer of the Indian space program.", hi: "डॉ. विक्रम साराभाई भारतीय अंतरिक्ष कार्यक्रम के अग्रणी थे।" });
    } else if (i <= 30) {
      examples.push({ id: exId, category: "Conversational", en: "We were in Delhi last winter for an academic seminar.", hi: "हम पिछली सर्दियों में एक अकादमिक सेमिनार के लिए दिल्ली में थे।" });
    } else if (i <= 45) {
      examples.push({ id: exId, category: "Professional", en: "The company had extensive manufacturing facilities across Gujarat.", hi: "कंपनी के पास गुजरात भर में व्यापक विनिर्माण सुविधाएं थीं।" });
    } else if (i <= 55) {
      examples.push({ id: exId, category: "TranslationContrast", en: "I had a car last year. (NOT: 'I was having a car last year')", hi: "पिछले साल मेरे पास एक कार थी। (स्वामित्व दर्शाने के लिए 'had' का प्रयोग)" });
    } else if (i <= 65) {
      examples.push({ id: exId, category: "Pronunciation", en: "He worked, played, and waited patiently. (Past '-ed' as /t/, /d/, /ɪd/)", hi: "उसने काम किया, खेला और धैर्यपूर्वक प्रतीक्षा की। (भूतकालिक '-ed' के तीन उच्चारण)" });
    } else if (i <= 75) {
      examples.push({ id: exId, category: "ErrorReversal", en: "Were you present at yesterday's board meeting? (NOT: 'You were present yesterday?')", hi: "क्या आप कल की बोर्ड बैठक में उपस्थित थे? (भूतकालिक प्रश्न में 'Were' पहले आएगा)" });
    } else if (i <= 85) {
      examples.push({ id: exId, category: "RegisterShift", en: "Informal: He was boss. | Formal: He was the managing director of the corporation.", hi: "अनौपचारिक: वह बॉस था। | औपचारिक: वह निगम के प्रबंध निदेशक थे।" });
    } else {
      examples.push({ id: exId, category: "DialogueExchange", en: "A: Was the previous financial audit completed on schedule?\nB: Yes, it was; all records were thoroughly verified.", hi: "A: क्या पिछला वित्तीय ऑडिट समय पर पूरा हो गया था?\nB: जी हाँ, हो गया था; सभी रिकॉर्ड पूरी तरह सत्यापित थे।" });
    }
  }

  const translationDrills = [
    { id: "d06_tr_01", type: "en_to_hi", source: "He was a distinguished member of the national planning commission.", target: "वह राष्ट्रीय योजना आयोग के एक प्रतिष्ठित सदस्य थे।", explanation: "'Was a member' भूतकाल की स्थिति दर्शाता है।" },
    { id: "d06_tr_02", type: "hi_to_en", source: "कल शाम हम सभी ऑडिटोरियम में उपस्थित थे।", target: "We were all present in the auditorium yesterday evening.", explanation: "बहुवचन कर्ता 'We' के साथ 'were' का प्रयोग।" },
    { id: "d06_tr_03", type: "en_to_hi", source: "The company had twenty branch offices across North America in 2010.", target: "2010 में उत्तरी अमेरिका में कंपनी के बीस शाखा कार्यालय थे।", explanation: "भूतकाल में अधिकार दर्शाने के लिए 'had' का प्रयोग।" },
    { id: "d06_tr_04", type: "hi_to_en", source: "क्या आप पिछली तिमाही में इस प्रोजेक्ट के प्रभारी थे?", target: "Were you in charge of this project last quarter?", explanation: "प्रश्नवाचक वाक्य में 'Were you' से शुरुआत।" },
    { id: "d06_tr_05", type: "en_to_hi", source: "I had a severe headache yesterday, so I was absent.", target: "कल मुझे बहुत तेज सिरदर्द था, इसलिए मैं अनुपस्थित था।", explanation: "'Had a headache' शारीरिक स्थिति के लिए मानक रूप है।" },
    { id: "d06_tr_06", type: "hi_to_en", source: "वह हमारे विद्यालय के सबसे प्रिय और सम्मानित शिक्षक थे।", target: "He was the most beloved and respected teacher in our school.", explanation: "भूतकाल में आदरणीय व्यक्ति का विवरण।" },
    { id: "d06_tr_07", type: "en_to_hi", source: "There were several crucial discrepancies in the preliminary audit report.", target: "प्रारंभिक ऑडिट रिपोर्ट में कई महत्वपूर्ण विसंगतियां थीं।", explanation: "'There were' बहुवचन अस्तित्व को दर्शाता है।" },
    { id: "d06_tr_08", type: "hi_to_en", source: "क्या उस समय आपके पास वैध पासपोर्ट था?", target: "Did you have a valid passport at that time? / Had you a valid passport?", explanation: "भूतकालिक स्वामित्व का प्रश्न।" },
    { id: "d06_tr_09", type: "en_to_hi", source: "The atmosphere during the peace negotiations was extremely cordial.", target: "शांति वार्ता के दौरान माहौल अत्यंत सौहार्दपूर्ण था।", explanation: "'Was cordial' स्थिति का भूतकालिक वर्णन।" },
    { id: "d06_tr_10", type: "hi_to_en", source: "वे दोनों पिछले वर्ष तक एक ही शोध दल में थे।", target: "They were both in the same research team until last year.", explanation: "भूतकालिक समयावधि का विवरण।" },
    { id: "d06_tr_11", type: "en_to_hi", source: "She was not only a brilliant mathematician but also a skilled musician.", target: "वह न केवल एक प्रतिभाशाली गणितज्ञ थीं बल्कि एक कुशल संगीतकार भी थीं।", explanation: "समानांतर भूतकालिक विशेषताएं।" },
    { id: "d06_tr_12", type: "hi_to_en", source: "कल रात भारी बारिश के कारण सड़कें पूरी तरह जलमग्न थीं।", target: "The roads were completely waterlogged due to heavy rain last night.", explanation: "'Were waterlogged' स्थिति का वर्णन।" },
    { id: "d06_tr_13", type: "en_to_hi", source: "We had immense respect for our founding chancellor.", target: "हमारे संस्थापक कुलाधिपति के प्रति हमारे मन में गहरा आदर था।", explanation: "'Had immense respect' मानसिक भाव का भूतकाल।" },
    { id: "d06_tr_14", type: "hi_to_en", source: "क्या कल का मौसम बहुत ठंडा और तूफानी था?", target: "Was yesterday's weather very cold and stormy?", explanation: "मौसम के भूतकाल का प्रश्न।" },
    { id: "d06_tr_15", type: "en_to_hi", source: "The ancient monument was surrounded by dense sal forests.", target: "प्राचीन स्मारक घने साल के जंगलों से घिरा हुआ था।", explanation: "'Was surrounded' निष्क्रिय स्थिति का वर्णन।" },
    { id: "d06_tr_16", type: "hi_to_en", source: "पिछले दशक में हमारे पास यह अत्याधुनिक तकनीक नहीं थी।", target: "We did not have this cutting-edge technology in the past decade.", explanation: "'Did not have' नकारात्मक भूतकालिक स्वामित्व।" },
    { id: "d06_tr_17", type: "en_to_hi", source: "He was once an Olympic gold medalist in wrestling.", target: "वह कभी कुश्ती में ओलंपिक स्वर्ण पदक विजेता थे।", explanation: "'Was once' पूर्व स्थिति को दर्शाता है।" },
    { id: "d06_tr_18", type: "hi_to_en", source: "क्या वे उस समय बैठक के लिए पूरी तरह तैयार थे?", target: "Were they fully prepared for the meeting at that time?", explanation: "तैयारी की पुष्टि का प्रश्न।" },
    { id: "d06_tr_19", type: "en_to_hi", source: "The original manuscript was preserved in a hermetically sealed vault.", target: "मूल पांडुलिपि को एक हवाबंद वॉल्ट में सुरक्षित रखा गया था।", explanation: "'Was preserved' संरक्षण का भूतकाल।" },
    { id: "d06_tr_20", type: "hi_to_en", source: "उस समय मेरे पास पर्याप्त वित्तीय संसाधन नहीं थे।", target: "I did not have adequate financial resources at that time.", explanation: "संसाधनों की कमी का भूतकाल।" },
    { id: "d06_tr_21", type: "en_to_hi", source: "Why was the flight delayed by three hours yesterday?", target: "कल उड़ान में तीन घंटे की देरी क्यों हुई थी?", explanation: "'Why was...' भूतकालिक कारण पूछने का प्रश्न।" },
    { id: "d06_tr_22", type: "hi_to_en", source: "हम सभी उनके अचानक इस्तीफे से हैरान थे।", target: "We were all surprised by his sudden resignation.", explanation: "'Were surprised' मानसिक प्रतिक्रिया का भूतकाल।" },
    { id: "d06_tr_23", type: "en_to_hi", source: "The historical museum had an extraordinary collection of Mughal coins.", target: "ऐतिहासिक संग्रहालय में मुगल सिक्कों का असाधारण संग्रह था।", explanation: "'Had an extraordinary collection' संग्रह का स्वामित्व।" },
    { id: "d06_tr_24", type: "hi_to_en", source: "क्या आप कल के उद्घाटन समारोह में मुख्य अतिथि थे?", target: "Were you the chief guest at yesterday's inaugural ceremony?", explanation: "पद की पुष्टि का प्रश्न।" },
    { id: "d06_tr_25", type: "en_to_hi", source: "It was a momentous decision that transformed the organization forever.", target: "यह एक युगांतकारी निर्णय था जिसने संगठन को हमेशा के लिए बदल दिया।", explanation: "'It was a momentous decision' महत्वपूर्ण घटना का वर्णन।" }
  ];

  const exercises = [];
  for (let i = 1; i <= 65; i++) {
    const exId = `day06_ex_${String(i).padStart(3, '0')}`;
    if (i === 1) {
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: "Correct this Indian English sentence: 'When I was in Mumbai, I was having two cars.'",
        targetText: "When I was in Mumbai, I was having two cars.",
        correctAnswer: "When I was in Mumbai, I had two cars.",
        explanationEn: "Stative verbs of possession like 'have' cannot be used in continuous tenses. Use simple past 'had'.",
        explanationHi: "स्वामित्व दर्शाने के लिए 'have' को continuous में नहीं लिखा जाता; इसके स्थान पर simple past 'had' का प्रयोग करें।",
        skillTag: "L1_STATIVE_VERB_ERROR"
      });
    } else if (i === 2) {
      exercises.push({
        id: exId,
        type: "minimal_pair_discrim",
        prompt: "Which past tense verb ends with the /ɪd/ syllable ('-ed' adding an extra vowel)?",
        options: ["Waited", "Worked", "Played", "Stopped"],
        correctAnswer: "Waited",
        explanationEn: "Verbs ending in /t/ or /d/ add the full syllable /ɪd/ in the past tense ('wait' -> 'waited' /ˈweɪ.tɪd/).",
        explanationHi: "/t/ या /d/ पर समाप्त होने वाली क्रियाओं में '-ed' का उच्चारण /ɪd/ होता है ('waited')।",
        skillTag: "PHONETICS_PAST_ED_ALLOMORPHS"
      });
    } else if (i <= 20) {
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `Select the correct past state copular verb (Item ${i}):`,
        options: ["They were present at the international symposium yesterday.", "They was present at the international symposium yesterday.", "They are present yesterday.", "They had present yesterday."],
        correctAnswer: "They were present at the international symposium yesterday.",
        explanationEn: "Plural subject 'They' takes 'were' in the past tense.",
        explanationHi: "बहुवचन कर्ता 'They' के साथ भूतकाल में 'were' आता है।",
        skillTag: "PAST_COPULA_CONCORD"
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
        prompt: `Fill in the missing past copula: "She [was] the principal investigator on the project."`,
        correctAnswer: "was",
        explanationEn: "3rd person singular subject 'She' takes 'was'.",
        explanationHi: "'She' के साथ भूतकाल में 'was' का प्रयोग होता है।",
        skillTag: "CONNECTED_SPEECH_CLOZE"
      });
    }
  }

  return {
    dayNumber: 6,
    id: "day_06",
    titleEn: "Past State of Being & Possession: Was / Were & Had",
    titleHi: "भूतकालिक स्थिति एवं स्वामित्व: 'Was / Were' एवं 'Had' का शुद्ध प्रयोग",
    cefr: "A1.6",
    estMinutes: 45,
    prerequisites: "Day 05 Complete Mastery",
    objectivesEn: [
      "Master the past copular verbs 'was' and 'were' across singular and plural subjects.",
      "Express past possession accurately using 'had' while eliminating the stative error 'was having'.",
      "Master the 3 phonetic allomorphs of regular past '-ed' (/t/, /d/, /ɪd/).",
      "Produce accurate weak forms of 'was' (/wəz/) and 'were' (/wə/) in connected speech."
    ],
    objectivesHi: [
      "एकवचन और बहुवचन कर्ताओं के साथ भूतकालिक संयोजक क्रियाओं 'was' और 'were' का सटीक प्रयोग करना।",
      "भूतकालिक स्वामित्व को 'had' द्वारा व्यक्त करना और 'was having' की अशुद्धि को पूरी तरह समाप्त करना।",
      "भूतकालिक प्रत्यय '-ed' के तीनों ध्वनि रूपों (/t/, /d/, /ɪd/) में पूर्ण महारत हासिल करना।",
      "धाराप्रवाह भाषण में 'was' (/wəz/) और 'were' (/wə/) के कमजोर रूपों का स्वाभाविक उच्चारण करना।"
    ],
    teach: {
      hindiExplanation: `डे 06 में आपका स्वागत है! आज हम भूतकाल में स्थिति, अस्तित्व, गुण और स्वामित्व (Past State & Possession) को व्यक्त करना सीखेंगे।

### 1. Was / Were का कर्ता अनुसार नियम:
- **I, He, She, It, Singular Noun** ➔ **was** (*I was in Delhi.* / वह दिल्ली में था।)
- **We, You, They, Plural Noun** ➔ **were** (*They were delighted.* / वे प्रसन्न थे।)

### 2. भूतकालिक स्वामित्व (Past Possession - Had):
- भूतकाल में किसी वस्तु पर अधिकार दर्शाने के लिए सभी कर्ताओं के साथ **had** का प्रयोग होता है:
  - *I had a laptop.* (मेरे पास एक लैपटॉप था।)
  - *They had sufficient resources.* (उनके पास पर्याप्त संसाधन थे।)

### 3. भारतीय अंग्रेजी की सबसे बड़ी गलती (Eliminating 'Was Having'):
- ❌ **गंभीर गलती**: "*When I was in college, I was having a bike.*"
  - 'Have' जब अधिकार (possession) दर्शाता है, तो यह एक Stative Verb होता है। इसका प्रयोग continuous (-ing) में नहीं किया जा सकता।
  - ✔️ **शुद्ध रूप**: "**When I was in college, I had a bike.**"`,
      englishExplanation: `Day 06 establishes past copular state (was/were), past possession (had), and the morphophonology of past '-ed' endings.

Key Principles:
1. **Stative Constraint on Possession**: Possession with 'have' is inherently non-dynamic and disallows progressive aspect (*I had*, never *I was having* for ownership).
2. **Allomorphic Conditioning of '-ed'**: Phonologically governed past tense suffix realizations based on voicing of the root-final segment.`,
      grammarRules: [
        { ruleNumber: 1, title: "Past Copula Concord", description: "Use 'was' with 1st and 3rd person singular subjects (I, he, she, it). Use 'were' with 2nd person (you) and all plural subjects (we, they).", register: "Universal Grammar" },
        { ruleNumber: 2, title: "Stative Past Possession", description: "Use 'had' for past possession. Never use 'was/were having' for static ownership.", register: "Grammatical Accuracy" }
      ],
      formulaTable: [
        { subjectGroup: "Past State Affirmative", formula: "Subject + was / were + [Complement].", exampleEn: "Dr. Raman was an exceptional physicist.", meaningHi: "डॉ. रमन एक असाधारण भौतिक विज्ञानी थे।" },
        { subjectGroup: "Past Possession", formula: "Subject + had + [Direct Object Noun Phrase].", exampleEn: "Our department had advanced spectrometry equipment.", meaningHi: "हमारे विभाग के पास उन्नत स्पेक्ट्रोमेट्री उपकरण थे।" }
      ],
      hindiSpeakerTrap: {
        trapTitle: "Using 'was having' for past possession",
        hindiPattern: "हिंदी में 'मेरे पास गाड़ी थी' को कई लोग 'I was having a car' बोल देते हैं।",
        potentialInterference: "Saying: 'Last year I was having a big office.'",
        grammaticalRootCause: "Stative verbs cannot take the progressive aspect in English.",
        naturalSolution: "Say: 'Last year I had a large office.'"
      }
    },
    phonetics: {
      targetSound: "Morphophonemic Pronunciation of Past Regular '-ed' (/t/, /d/, /ɪd/)",
      articulatoryMechanics: {
        placeOfArticulation: "Alveolar stop /t/ or /d/.",
        mannerOfArticulation: "Plosive.",
        voicing: "Rule 1 (/t/): After voiceless sounds /p, k, f, s, ʃ, tʃ/ ('worked' /wɜːkt/, 'stopped' /stɒpt/). Rule 2 (/d/): After voiced sounds and vowels ('played' /pleɪd/, 'cleaned' /kliːnd/). Rule 3 (/ɪd/): After roots ending in /t/ or /d/ ('waited' /ˈweɪtɪd/, 'decided' /dɪˈsaɪdɪd/).",
        anatomicalInstructions: "Only add an extra vowel sound (/ɪd/) if the word already ends in a 't' or 'd' sound. Otherwise, seamlessly snap directly to /t/ or /d/ without adding an extra syllable (say 'work-t', NOT 'work-ed')."
      },
      hindiSpeakerPhoneticTrap: "Hindi speakers frequently pronounce all '-ed' endings as a separate full syllable '-ed' (e.g., 'worked' pronounced as 'work-ed' /ˈwɜːk.ed/ instead of /wɜːkt/).",
      minimalPairs: [
        { wordA: { text: "Worked", ipa: "/wɜːkt/", audioRef: "d06_pair_01a" }, wordB: { text: "Waited", ipa: "/ˈweɪ.tɪd/", audioRef: "d06_pair_01b" }, discriminationNote: "Worked (1 syllable /t/) vs. Waited (2 syllables /ɪd/)." },
        { wordA: { text: "Played", ipa: "/pleɪd/", audioRef: "d06_pair_02a" }, wordB: { text: "Plated", ipa: "/ˈpleɪ.tɪd/", audioRef: "d06_pair_02b" }, discriminationNote: "Played (1 syllable /d/) vs. Plated (2 syllables /ɪd/)." },
        { wordA: { text: "Missed", ipa: "/mɪst/", audioRef: "d06_pair_03a" }, wordB: { text: "Misted", ipa: "/ˈmɪs.tɪd/", audioRef: "d06_pair_03b" }, discriminationNote: "Missed (1 syllable /t/) vs. Misted (2 syllables /ɪd/)." },
        { wordA: { text: "Laughed", ipa: "/lɑːft/", audioRef: "d06_pair_04a" }, wordB: { text: "Lasted", ipa: "/ˈlɑː.stɪd/", audioRef: "d06_pair_04b" }, discriminationNote: "Laughed (1 syllable /t/) vs. Lasted (2 syllables /ɪd/)." }
      ],
      prosodyFocus: {
        type: "Weak Form Reduction of 'Was' (/wəz/) and 'Were' (/wə/)",
        ruleExplanation: "In unstressed positions within connected speech, 'was' reduces to /wəz/ and 'were' reduces to /wə/.",
        drills: [
          { sentence: "He was late. ↘", phoneticNotation: "/hiː wəz ˈleɪt/", intonationCurve: "Weak 'was' /wəz/", audioRef: "d06_prosody_01" },
          { sentence: "They were ready. ↘", phoneticNotation: "/ðeɪ wə ˈred.i/", intonationCurve: "Weak 'were' /wə/", audioRef: "d06_prosody_02" }
        ]
      }
    },
    learn: {
      vocabulary: vocabulary,
      spokenPhrases: [
        { id: "d06_sp_01", phrase: "He was a pioneer in cardiovascular surgical techniques.", register: "Academic Tribute", meaningHi: "वह हृदय शल्य चिकित्सा तकनीकों में एक अग्रणी थे।" },
        { id: "d06_sp_02", phrase: "We had extensive experience managing multinational supply chains.", register: "Corporate Background", meaningHi: "हमारे पास बहुराष्ट्रीय आपूर्ति श्रृंखलाओं के प्रबंधन का व्यापक अनुभव था।" },
        { id: "d06_sp_03", phrase: "Were you present at yesterday's executive committee meeting?", register: "Formal Workplace", meaningHi: "क्या आप कल की कार्यकारी समिति की बैठक में उपस्थित थे?" },
        { id: "d06_sp_04", phrase: "The preliminary findings were exceptionally promising.", register: "Scientific Reporting", meaningHi: "प्रारंभिक निष्कर्ष असाधारण रूप से आशाजनक थे।" }
      ]
    },
    examples: { bilingualExemplars: examples },
    practice: { exercises: exercises, translationSet: translationDrills },
    use: {
      dialogue: {
        scenarioTitleEn: "Archival Review of an Historical Engineering Project",
        scenarioTitleHi: "एक ऐतिहासिक इंजीनियरिंग परियोजना की अभिलेखीय समीक्षा",
        contextDescription: "Senior Archivist Mr. Kulkarni briefs researcher Maya on the construction of the iconic railway viaduct.",
        turns: [
          { speaker: "Mr. Kulkarni", en: "Maya, in nineteen-fifty, this railway division had only three steam locomotives.", hi: "माया, उन्नीस सौ पचास में, इस रेलवे डिवीजन के पास केवल तीन भाप इंजन थे।", phoneticNote: "/ðɪs ˈreɪl.weɪ dɪˈvɪʒ.ən hæd ˈəʊn.li θriː stiːm ˈləʊ.kəˌməʊ.tɪvz/", audioRef: "d06_dial_01" },
          { speaker: "Maya", en: "Was the construction of the mountain viaduct completed under harsh weather conditions?", hi: "क्या पर्वतीय पुल का निर्माण भीषण मौसम की परिस्थितियों में पूरा हुआ था?", phoneticNote: "/wəz ðə kənˈstrʌk.ʃən əv ðə ˈmaʊn.tɪn ˈvaɪə.dʌkt kəmˈpliː.tɪd/", audioRef: "d06_dial_02" },
          { speaker: "Mr. Kulkarni", en: "Yes, it was; the chief engineer was exceptionally resilient and dedicated.", hi: "जी हाँ, हुआ था; मुख्य अभियंता असाधारण रूप से जुझारू और समर्पित थे।", phoneticNote: "/ðə tʃiːf ˌen.dʒɪˈnɪə wəz ɪkˈsep.ʃən.əl.i rɪˈzɪl.i.ənt/", audioRef: "d06_dial_03" },
          { speaker: "Maya", en: "They worked tirelessly until the entire line was operational.", hi: "वे तब तक अथक परिश्रम करते रहे जब तक कि पूरी लाइन चालू नहीं हो गई।", phoneticNote: "/ðeɪ wɜːkt ˈtaɪə.ləs.li/", audioRef: "d06_dial_04" }
        ]
      }
    },
    assess: {
      writtenChecklist: [
        { question: "Why is 'I was having two cars' grammatically incorrect?", answer: "'Have' is a stative verb when expressing possession and cannot be used in the continuous aspect; use simple past 'had'." },
        { question: "Explain the three pronunciation rules for past '-ed'.", answer: "'-ed' is pronounced /t/ after voiceless sounds ('worked'), /d/ after voiced sounds ('played'), and /ɪd/ after /t/ and /d/ roots ('waited')." }
      ],
      oralProductionTask: {
        prompt: "Deliver a 60-second narrative about your previous educational institution or workplace. Describe who was there, what resources you had, and activities completed, demonstrating correct '-ed' pronunciation in 'worked', 'studied', and 'graduated'.",
        targetStructures: ["I was a student at...", "We had excellent professors...", "I worked and studied..."],
        targetPhonemes: ["Correct /t/ in 'worked'", "Correct /ɪd/ in 'graduated'", "Weak 'was' /wəz/"],
        evaluationRubric: "Scored on (1) Past copula and possession concord, (2) Elimination of 'was having', (3) Precise '-ed' morphophonology."
      },
      benchmarks: [
        { id: "d06_bm_01", benchmark: "Fluently deploys past state and possession structures with precise past allomorph phonology." }
      ]
    }
  };
}

console.log("[BUILDER] Day 06 built successfully.");
const d06Data = `export const day06 = ${JSON.stringify(createDay06(), null, 2)};\n`;
fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day06.js'), d06Data, 'utf8');
console.log("[SAVED] content_builder/day06.js written successfully.");
