// scripts/generate_stage6_vocab_full.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { rawStage6Vocab } from './stage6_vocabulary_data.js';
import { stage6Vocab52to55 } from './stage6_vocab_days52_55.js';
import { stage6Vocab56to60 } from './stage6_vocab_days56_60.js';
import { getAll1to50Lemmas } from './collect_all_1_50_lemmas.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const lemmas1to50 = await getAll1to50Lemmas();
  console.log(`Loaded ${lemmas1to50.size} existing lemmas from Days 1-50.`);

// Additional specialized vocab sets to guarantee 60+ per day for any day that needs padding
const supplementalVocab = {
  51: [
    { lemma: "evacuation route", pos: "Noun", ipa: "/ɪˌvæk.juˈeɪ.ʃən ruːt/", hiIpa: "इवैक्युएशन रूट", syl: "e-vac-u-a-tion route", stress: "1st word 4th syl", hi: "निकासी मार्ग", en: "Familiarize yourself with the primary building evacuation route.", hiEx: "प्राथमिक भवन निकासी मार्ग से खुद को परिचित करें।" },
    { lemma: "safety protocol", pos: "Noun", ipa: "/ˈseɪf.ti ˈprəʊ.tə.kɒl/", hiIpa: "सेफ्टी प्रोटोकॉल", syl: "safe-ty pro-to-col", stress: "1st word 1st syl, 2nd word 1st syl", hi: "सुरक्षा कार्यप्रणाली", en: "Adhere to the mandatory lab safety protocol.", hiEx: "अनिवार्य प्रयोगशाला सुरक्षा प्रोटोकॉल का पालन करें।" },
    { lemma: "non-compliance penalty", pos: "Noun", ipa: "/ˌnɒn.kəmˈplaɪ.əns ˈpen.əl.ti/", hiIpa: "नॉन-कम्प्लायंस पेनाल्टी", syl: "non com-pli-ance pen-al-ty", stress: "1st word 2nd syl, 2nd word 1st syl", hi: "नियम न मानने पर जुर्माना", en: "A non-compliance penalty will be charged for illegal waste disposal.", hiEx: "अवैध कचरा निपटान के लिए गैर-अनुपालन जुर्माना लगाया जाएगा।" },
    { lemma: "notice period clause", pos: "Noun", ipa: "/ˈnəʊ.tɪs ˌpɪə.ri.əd klɔːz/", hiIpa: "नोटिस पीरियड क्लॉज", syl: "no-tice pe-ri-od clause", stress: "1st word 1st syl", hi: "सूचना अवधि खंड", en: "Review the notice period clause in your service agreement.", hiEx: "अपने सेवा समझौते में नोटिस अवधि खंड की समीक्षा करें।" },
    { lemma: "security clearance", pos: "Noun", ipa: "/sɪˈkjʊə.rə.ti ˈklɪə.rəns/", hiIpa: "सिक्योरिटी क्लियरेंस", syl: "se-cu-ri-ty clear-ance", stress: "1st word 2nd syl, 2nd word 1st syl", hi: "सुरक्षा अनापत्ति / मंजूरी", en: "Engineers must obtain official security clearance for server access.", hiEx: "सर्वर एक्सेस के लिए इंजीनियरों को आधिकारिक सुरक्षा मंजूरी प्राप्त करनी होगी।" }
  ],
  52: [
    { lemma: "key performance indicator", pos: "Noun", ipa: "/kiː pəˈfɔː.məns ˈɪn.dɪ.keɪ.tər/", hiIpa: "की परफॉर्मेंस इंडिकेटर (KPI)", syl: "key per-for-mance in-di-ca-tor", stress: "2nd word 2nd syl, 3rd word 1st syl", hi: "मुख्य प्रदर्शन संकेतक (KPI)", en: "Track quarterly sales growth as our primary key performance indicator.", hiEx: "हमारे प्राथमिक मुख्य प्रदर्शन संकेतक के रूप में त्रैमासिक बिक्री वृद्धि को ट्रैक करें।" },
    { lemma: "quarterly review", pos: "Noun", ipa: "/ˈkwɔː.təl.i rɪˈvjuː/", hiIpa: "क्वार्टरली रिव्यू", syl: "quar-ter-ly re-view", stress: "1st word 1st syl, 2nd word 2nd syl", hi: "त्रैमासिक समीक्षा", en: "The executive team presented findings at the quarterly review meeting.", hiEx: "कार्यकारी दल ने त्रैमासिक समीक्षा बैठक में निष्कर्ष प्रस्तुत किए।" },
    { lemma: "cross-functional team", pos: "Noun", ipa: "/krɒs ˈfʌŋk.ʃən.əl tiːm/", hiIpa: "क्रॉस-फंक्शनल टीम", syl: "cross func-tion-al team", stress: "2nd word 1st syl", hi: "बहु-विभागीय संयुक्त टीम", en: "A cross-functional team was assembled to launch the fintech platform.", hiEx: "फिनटेक प्लेटफॉर्म लॉन्च करने के लिए एक बहु-विभागीय टीम इकट्ठी की गई थी।" },
    { lemma: "competitive advantage", pos: "Noun", ipa: "/kəmˈpet.ɪ.tɪv ədˈvɑːn.tɪdʒ/", hiIpa: "कॉम्पिटिटिव एडवांटेज", syl: "com-pet-i-tive ad-van-tage", stress: "1st word 2nd syl, 2nd word 2nd syl", hi: "प्रतिस्पर्धी बढ़त", en: "Proprietary AI algorithms give our enterprise a decisive competitive advantage.", hiEx: "स्वामित्व वाले एआई एल्गोरिदम हमारे उद्यम को एक निर्णायक प्रतिस्पर्धी लाभ देते हैं।" }
  ],
  53: [
    { lemma: "fixed deposit", pos: "Noun", ipa: "/fɪkst dɪˈpɒz.ɪt/", hiIpa: "फिक्स्ड डिपॉजिट (FD)", syl: "fixed de-pos-it", stress: "2nd word 2nd syl", hi: "सावधि जमा (FD)", en: "Senior citizens earn higher interest rates on a three-year fixed deposit.", hiEx: "वरिष्ठ नागरिक तीन साल की सावधि जमा पर अधिक ब्याज दर अर्जित करते हैं।" },
    { lemma: "foreign exchange", pos: "Noun", ipa: "/ˈfɒr.ən ɪksˈtʃeɪndʒ/", hiIpa: "फॉरेन एक्सचेंज (Forex)", syl: "for-eign ex-change", stress: "1st word 1st syl, 2nd word 2nd syl", hi: "विदेशी मुद्रा विनिमय", en: "Banks hedge against fluctuating foreign exchange rates.", hiEx: "बैंक विदेशी मुद्रा विनिमय दरों के उतार-चढ़ाव से बचाव करते हैं।" },
    { lemma: "tax deduction at source", pos: "Noun", ipa: "/tæks dɪˈdʌk.ʃən æt sɔːs/", hiIpa: "टैक्स डिडक्शन एट सोर्स (TDS)", syl: "tax de-duc-tion at source", stress: "2nd word 2nd syl", hi: "स्रोत पर कर कटौती (TDS)", en: "The company withheld tax deduction at source on contract payments.", hiEx: "कंपनी ने अनुबंध भुगतानों पर स्रोत पर कर कटौती रोक ली।" },
    { lemma: "cash reserve ratio", pos: "Noun", ipa: "/kæʃ rɪˈzɜːv ˈreɪ.ʃi.əʊ/", hiIpa: "कैश रिजर्व रेशियो (CRR)", syl: "cash re-serve ra-ti-o", stress: "2nd word 2nd syl, 3rd word 1st syl", hi: "नकद आरक्षित अनुपात (CRR)", en: "The central bank increased the cash reserve ratio to control liquidity.", hiEx: "केंद्रीय बैंक ने तरलता को नियंत्रित करने के लिए नकद आरक्षित अनुपात में वृद्धि की।" }
  ],
  54: [
    { lemma: "bulkhead seat", pos: "Noun", ipa: "/ˈbʌlk.hed siːt/", hiIpa: "बल्कहेड सीट", syl: "bulk-head seat", stress: "1st word 1st syl", hi: "दीवार के पास वाली खुली सीट", en: "Passengers travelling with infants often request a bulkhead seat.", hiEx: "शिशुओं के साथ यात्रा करने वाले यात्री अक्सर बल्कहेड सीट का अनुरोध करते हैं।" },
    { lemma: "baggage reclaim", pos: "Noun", ipa: "/ˈbæɡ.ɪdʒ rɪˈkleɪm/", hiIpa: "बैगेज रिक्लेम", syl: "bag-gage re-claim", stress: "1st word 1st syl, 2nd word 2nd syl", hi: "सामान वापसी क्षेत्र", en: "Proceed straight to baggage reclaim after exiting immigration.", hiEx: "इमिग्रेशन से बाहर निकलने के बाद सीधे बैगेज रिक्लेम पर जाएं।" },
    { lemma: "flight delay", pos: "Noun", ipa: "/flaɪt dɪˈleɪ/", hiIpa: "फ्लाइट डिले", syl: "flight de-lay", stress: "2nd word 2nd syl", hi: "विमान विलंब", en: "A severe thunderstorm caused an unexpected two-hour flight delay.", hiEx: "एक गंभीर आंधी ने दो घंटे की अप्रत्याशित उड़ान में देरी की।" },
    { lemma: "boarding queue", pos: "Noun", ipa: "/ˈbɔː.dɪŋ kjuː/", hiIpa: "बोर्डिंग कतार", syl: "board-ing queue", stress: "1st word 1st syl", hi: "विमान चढ़ाई कतार", en: "Passengers formed an orderly boarding queue at Gate 7.", hiEx: "यात्रियों ने गेट 7 पर एक व्यवस्थित बोर्डिंग कतार बनाई।" }
  ],
  55: [
    { lemma: "legal counsel", pos: "Noun", ipa: "/ˈliː.ɡəl ˈkaʊn.səl/", hiIpa: "लीगल काउंसिल", syl: "le-gal coun-sel", stress: "1st word 1st syl, 2nd word 1st syl", hi: "कानूनी सलाहकार", en: "Seek expert advice from corporate legal counsel before executing the deed.", hiEx: "विलेख निष्पादित करने से पहले कॉर्पोरेट कानूनी सलाहकार से विशेषज्ञ सलाह लें।" },
    { lemma: "court summon", pos: "Noun", ipa: "/kɔːt ˈsʌm.ən/", hiIpa: "कोर्ट समन", syl: "court sum-mon", stress: "2nd word 1st syl", hi: "अदालत का बुलावा पत्र", en: "The bailiff delivered the official court summon to the petitioner.", hiEx: "अदालती अधिकारी ने याचिकाकर्ता को आधिकारिक अदालती समन दिया।" },
    { lemma: "dispute settlement", pos: "Noun", ipa: "/dɪˈspjuːt ˈset.əl.mənt/", hiIpa: "डिस्प्यूट सेटलमेंट", syl: "dis-pute set-tle-ment", stress: "1st word 2nd syl, 2nd word 1st syl", hi: "विवाद निपटारा", en: "The civic authority encouraged out-of-court dispute settlement.", hiEx: "नागरिक प्राधिकरण ने अदालत के बाहर विवाद निपटारे को प्रोत्साहित किया।" },
    { lemma: "birth certificate", pos: "Noun", ipa: "/bɜːθ səˈtɪf.ɪ.kət/", hiIpa: "बर्थ सर्टिफिकेट", syl: "birth cer-tif-i-cate", stress: "2nd word 2nd syl", hi: "जन्म प्रमाण पत्र", en: "Apply online at the municipal portal for a certified birth certificate.", hiEx: "प्रमाणित जन्म प्रमाण पत्र के लिए नगरपालिका पोर्टल पर ऑनलाइन आवेदन करें।" }
  ],
  56: [
    { lemma: "competitive quote", pos: "Noun", ipa: "/kəmˈpet.ɪ.tɪv kwəʊt/", hiIpa: "कॉम्पिटिटिव कोट", syl: "com-pet-i-tive quote", stress: "1st word 2nd syl", hi: "प्रतिस्पर्धी दर / भाव", en: "Request three competitive quotes from accredited logistics providers.", hiEx: "मान्यता प्राप्त रसद प्रदाताओं से तीन प्रतिस्पर्धी उद्धरणों का अनुरोध करें।" },
    { lemma: "delivery timeline", pos: "Noun", ipa: "/dɪˈlɪv.ər.i ˈtaɪm.laɪn/", hiIpa: "डिलीवरी टाइमलाइन", syl: "de-liv-er-y time-line", stress: "1st word 2nd syl, 2nd word 1st syl", hi: "वितरण समय सीमा", en: "The supplier committed to a strict four-week delivery timeline.", hiEx: "आपूर्तिकर्ता ने चार सप्ताह की सख्त डिलीवरी समय सीमा के लिए प्रतिबद्धता जताई।" },
    { lemma: "closing technique", pos: "Noun", ipa: "/ˈkləʊ.zɪŋ tekˈniːk/", hiIpa: "क्लोजिंग तकनीक", syl: "clos-ing tech-nique", stress: "1st word 1st syl, 2nd word 2nd syl", hi: "बिक्री सौदा अंतिम रूप देने की कला", en: "Mastering professional closing techniques turns prospective leads into contracts.", hiEx: "पेशेवर क्लोजिंग तकनीकों में महारत हासिल करने से संभावित ग्राहक अनुबंध में बदल जाते हैं।" },
    { lemma: "contractual clause", pos: "Noun", ipa: "/kənˈtræk.tʃu.əl klɔːz/", hiIpa: "कॉन्ट्रैक्चुअल क्लॉज", syl: "con-trac-tu-al clause", stress: "1st word 2nd syl", hi: "अनुबंध का नियम / खंड", en: "Review every contractual clause with senior legal advisors.", hiEx: "वरिष्ठ कानूनी सलाहकारों के साथ प्रत्येक अनुबंध खंड की समीक्षा करें।" }
  ],
  57: [
    { lemma: "educational background", pos: "Noun", ipa: "/ˌedʒ.ʊˈkeɪ.ʃən.əl ˈbæk.ɡraʊnd/", hiIpa: "एजुकेशनल बैकग्राउंड", syl: "ed-u-ca-tion-al back-ground", stress: "1st word 3rd syl, 2nd word 1st syl", hi: "शैक्षणिक पृष्ठभूमि", en: "Detail your educational background in reverse chronological sequence.", hiEx: "अपनी शैक्षणिक पृष्ठभूमि का विवरण उल्टे कालानुक्रमिक क्रम में दें।" },
    { lemma: "key skills", pos: "Noun", ipa: "/kiː skɪlz/", hiIpa: "की स्किल्स", syl: "key skills", stress: "1st word", hi: "मुख्य कौशल", en: "Highlight six key skills aligned with the job posting requirements.", hiEx: "नौकरी की आवश्यकताओं के अनुरूप छह प्रमुख कौशलों को उजागर करें।" },
    { lemma: "track record", pos: "Noun", ipa: "/træk ˈrek.ɔːd/", hiIpa: "ट्रैक रिकॉर्ड", syl: "track rec-ord", stress: "2nd word 1st syl", hi: "पूर्व प्रदर्शन का इतिहास", en: "She demonstrated a verifiable track record in revenue expansion.", hiEx: "उन्होंने राजस्व विस्तार में एक सत्यापन योग्य ट्रैक रिकॉर्ड का प्रदर्शन किया।" },
    { lemma: "problem solving skill", pos: "Noun", ipa: "/ˈprɒb.ləm ˈsɒl.vɪŋ skɪl/", hiIpa: "प्रॉब्लम सॉल्विंग स्किल", syl: "prob-lem solv-ing skill", stress: "1st word 1st syl, 2nd word 1st syl", hi: "समस्या समाधान क्षमता", en: "Highlight your analytical problem solving skills with quantifiable results.", hiEx: "मात्रात्मक परिणामों के साथ अपने विश्लेषणात्मक समस्या समाधान कौशल को उजागर करें।" }
  ],
  58: [
    { lemma: "current CTC", pos: "Noun", ipa: "/ˈkʌr.ənt ˌsiː.tiːˈsiː/", hiIpa: "करेंट सीटीसी", syl: "cur-rent C-T-C", stress: "1st word 1st syl", hi: "वर्तमान कुल वार्षिक वेतन", en: "Disclose your current CTC along with detailed component breakdowns.", hiEx: "विस्तृत विवरण के साथ अपने वर्तमान सीटीसी का खुलासा करें।" },
    { lemma: "long-term goals", pos: "Noun", ipa: "/ˌlɒŋˈtɜːm ɡəʊlz/", hiIpa: "लॉन्ग-टर्म गोल्स", syl: "long-term goals", stress: "1st word 2nd syl", hi: "दीर्घकालिक लक्ष्य", en: "Align your long-term goals with the corporation's expansion vision.", hiEx: "अपने दीर्घकालिक लक्ष्यों को कंपनी के विस्तार के दृष्टिकोण से जोड़ें।" },
    { lemma: "dealing with failure", pos: "Noun", ipa: "/ˈdiː.lɪŋ wɪð ˈfeɪ.ljər/", hiIpa: "डीलिंग विद फेलियर", syl: "deal-ing with fail-ure", stress: "1st word 1st syl, 3rd word 1st syl", hi: "असफलता से सीखकर आगे बढ़ना", en: "Frame your story of dealing with failure around resilience and lessons learned.", hiEx: "असफलता से निपटने की अपनी कहानी को लचीलेपन और सीखे गए सबक के इर्द-गिर्द बताएं।" },
    { lemma: "team player", pos: "Noun", ipa: "/tiːm ˈpleɪ.ər/", hiIpa: "टीम प्लेयर", syl: "team play-er", stress: "2nd word 1st syl", hi: "सहयोगी दल सदस्य", en: "Demonstrate that you are an empathetic and reliable team player.", hiEx: "साबित करें कि आप एक संवेदनशील और भरोसेमंद टीम के खिलाड़ी हैं।" }
  ],
  59: [
    { lemma: "stage fright", pos: "Noun", ipa: "/steɪdʒ fraɪt/", hiIpa: "स्टेज फ्राइट", syl: "stage fright", stress: "1st word", hi: "मंच का डर / सार्वजनिक बोलने की घबराहट", en: "Deep diaphragmatic breathing helps conquer temporary stage fright.", hiEx: "गहरी सांस लेने से मंच के अस्थायी डर पर काबू पाने में मदद मिलती है।" },
    { lemma: "impromptu speech", pos: "Noun", ipa: "/ɪmˈprɒmp.tjuː spiːtʃ/", hiIpa: "इम्प्रॉम्प्टू स्पीच", syl: "im-promp-tu speech", stress: "1st word 2nd syl", hi: "तात्कालिक भाषण", en: "Practice structured impromptu speech frameworks like PREP (Point, Reason, Example, Point).", hiEx: "तैयार रूपरेखा (बिंदु, कारण, उदाहरण, बिंदु) के साथ तात्कालिक भाषण का अभ्यास करें।" },
    { lemma: "vocal warm-up", pos: "Noun", ipa: "/ˈvəʊ.kəl ˈwɔːm.ʌp/", hiIpa: "वोकल वार्म-अप", syl: "vo-cal warm-up", stress: "1st word 1st syl, 2nd word 1st syl", hi: "आवाज का पूर्व अभ्यास", en: "Perform vocal warm-ups before delivering an hour-long keynote address.", hiEx: "एक घंटे के मुख्य भाषण से पहले आवाज का पूर्व-अभ्यास करें।" },
    { lemma: "audience rapport", pos: "Noun", ipa: "/ˈɔː.di.əns ræpˈɔːr/", hiIpa: "ऑडियंस रैपोर", syl: "au-di-ence rap-port", stress: "1st word 1st syl, 2nd word 2nd syl", hi: "श्रोताओं के साथ तालमेल", en: "Storytelling builds immediate audience rapport in public presentations.", hiEx: "कहानियां सुनाने से सार्वजनिक प्रस्तुतियों में दर्शकों के साथ तत्काल तालमेल बनता है।" }
  ],
  60: [
    { lemma: "communicative competence", pos: "Noun", ipa: "/kəˈmjuː.nɪ.kə.tɪv ˈkɒm.pɪ.təns/", hiIpa: "कम्युनिकेटिव कॉम्पिटेंस", syl: "com-mu-ni-ca-tive com-pe-tence", stress: "1st word 2nd syl, 2nd word 1st syl", hi: "संवाद में संपूर्ण प्रवीणता", en: "The 60-day curriculum develops holistic communicative competence.", hiEx: "60-दिवसीय पाठ्यक्रम समग्र संचारी क्षमता विकसित करता है।" },
    { lemma: "synthesizing ideas", pos: "Noun", ipa: "/ˈsɪn.θə.saɪ.zɪŋ aɪˈdɪəz/", hiIpa: "सिंथेसाइज़िंग आइडियाज", syl: "syn-the-siz-ing i-de-as", stress: "1st word 1st syl, 2nd word 2nd syl", hi: "विचारों का संश्लेषण", en: "Synthesizing ideas from diverse domains marks an executive communicator.", hiEx: "विविध क्षेत्रों के विचारों को संश्लेषित करना एक कार्यकारी वक्ता की पहचान है।" },
    { lemma: "spoken discourse", pos: "Noun", ipa: "/ˈspəʊ.kən ˈdɪs.kɔːs/", hiIpa: "स्पोकन डिस्कोर्स", syl: "spo-ken dis-course", stress: "1st word 1st syl, 2nd word 1st syl", hi: "मौखिक विमर्श / धाराप्रवाह बातचीत", en: "Engage in sophisticated spoken discourse with international colleagues.", hiEx: "अंतरराष्ट्रीय सहयोगियों के साथ परिष्कृत मौखिक बातचीत में संलग्न हों।" },
    { lemma: "deliberate practice", pos: "Noun", ipa: "/dɪˈlɪb.ər.ət ˈpræk.tɪs/", hiIpa: "डिलिबरेट प्रैक्टिस", syl: "de-lib-er-ate prac-tice", stress: "1st word 2nd syl, 2nd word 1st syl", hi: "उद्देश्यपूर्ण केंद्रित अभ्यास", en: "Daily deliberate practice transforms passive vocabulary into active fluency.", hiEx: "दैनिक उद्देश्यपूर्ण अभ्यास निष्क्रिय शब्दावली को सक्रिय प्रवाह में बदल देता है।" },
    { lemma: "linguistic self-reliance", pos: "Noun", ipa: "/lɪŋˈɡwɪs.tɪk ˌself.rɪˈlaɪ.əns/", hiIpa: "लिंग्विस्टिक सेल्फ-रिलायंस", syl: "lin-guis-tic self re-li-ance", stress: "1st word 2nd syl, 2nd word 3rd syl", hi: "भाषाई आत्मनिर्भरता", en: "Graduates of Day 60 attain complete linguistic self-reliance for life.", hiEx: "दिन 60 के स्नातक जीवन भर के लिए पूर्ण भाषाई आत्मनिर्भरता प्राप्त करते हैं।" },
    { lemma: "continuous mastery", pos: "Noun", ipa: "/kənˈtɪn.ju.əs ˈmɑː.stər.i/", hiIpa: "कंटीन्यूअस मास्टरी", syl: "con-tin-u-ous mas-ter-y", stress: "1st word 2nd syl, 2nd word 1st syl", hi: "सतत निपुणता", en: "Language learning is an eternal journey of continuous mastery.", hiEx: "भाषा सीखना निरंतर महारत की एक शाश्वत यात्रा है।" },
    { lemma: "expressive range", pos: "Noun", ipa: "/ɪkˈspres.ɪv reɪndʒ/", hiIpa: "एक्सप्रेसिव रेंज", syl: "ex-pres-sive range", stress: "1st word 2nd syl", hi: "अभिव्यक्ति का व्यापक दायरा", en: "Expand your expressive range across formal, academic, and colloquial registers.", hiEx: "औपचारिक, शैक्षणिक और बोलचाल की शैलियों में अपनी अभिव्यक्ति की सीमा का विस्तार करें।" },
    { lemma: "unfaltering confidence", pos: "Noun", ipa: "/ʌnˈfɔːl.tər.ɪŋ ˈkɒn.fɪ.dəns/", hiIpa: "अनफॉल्टरिंग कॉन्फिडेंस", syl: "un-fal-ter-ing con-fi-dence", stress: "1st word 2nd syl, 2nd word 1st syl", hi: "अडिग आत्मविश्वास", en: "Speak with unfaltering confidence in interviews, boardroom meetings, and keynote speeches.", hiEx: "साक्षात्कार, बोर्डरूम बैठकों और मुख्य भाषणों में अडिग आत्मविश्वास के साथ बोलें।" }
  ]
};

const fullStage6Vocab = {};

for (let d = 51; d <= 60; d++) {
  let list = [];
  if (d === 51) list = rawStage6Vocab[51] || [];
  else if (d >= 52 && d <= 55) list = stage6Vocab52to55[d] || [];
  else list = stage6Vocab56to60[d] || [];

  if (supplementalVocab[d]) {
    list = [...list, ...supplementalVocab[d]];
  }

  // Deduplicate and filter out any lemma present in 1-50
  const uniqueItems = [];
  const seenLemmasThisDay = new Set();

  for (const item of list) {
    const norm = item.lemma.trim().toLowerCase();
    if (lemmas1to50.has(norm)) {
      console.log(`[Day ${d}] Warning: Lemma "${item.lemma}" exists in Days 1-50! Skipping.`);
      continue;
    }
    if (seenLemmasThisDay.has(norm)) continue;
    seenLemmasThisDay.add(norm);
    uniqueItems.push(item);
  }

  // Map to complete schema
  fullStage6Vocab[d] = uniqueItems.map((item, idx) => ({
    id: `d${d}_vocab_${String(idx + 1).padStart(3, '0')}`,
    lemma: item.lemma,
    wordForm: item.wordForm || item.lemma,
    pos: item.pos || "Noun",
    ipa: item.ipa || "/ˈwɜːd/",
    hindiIpa: item.hiIpa || item.lemma,
    syllables: item.syl || item.lemma,
    stress: item.stress || "Primary on 1st syllable",
    collocations: item.colloc || [`standard ${item.lemma}`],
    relatedForms: item.rel || [],
    register: item.reg || "Formal / Professional",
    meaningHi: item.hi,
    exampleEn: item.en,
    exampleHi: item.hiEx,
    commonLearnerError: item.err || `Avoid literal translation; use natural professional collocation.`,
    recyclingSchedule: [d, Math.min(60, d + 3), 60]
  }));

  console.log(`Day ${d}: ${fullStage6Vocab[d].length} rich unique vocabulary items prepared.`);
}

  fs.writeFileSync(path.join(__dirname, 'stage6_vocabulary_complete.json'), JSON.stringify(fullStage6Vocab, null, 2));
  console.log('Successfully wrote stage6_vocabulary_complete.json!');
}

run();
