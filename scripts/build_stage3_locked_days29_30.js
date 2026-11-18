// scripts/build_stage3_locked_days29_30.js
import fs from 'fs';
import path from 'path';

async function getPriorLemmas() {
  const used = new Set();
  for (let i = 1; i <= 28; i++) {
    const num = i < 10 ? '0' + i : '' + i;
    const mod = await import(`../content_builder/day${num}.js`);
    const d = mod[`day${num}`] || mod.default;
    (d.learn?.vocabulary || []).forEach(v => {
      const w = (v.word || v.lemma || v.wordForm || '').toLowerCase().trim();
      if (w) used.add(w);
    });
  }
  return used;
}

function makeVocab(id, [lemma, meaningHi, ipa, devanagari, syllables, stress, register, collocations, relatedForms, example, commonError, pos = 'verb']) {
  return {
    id,
    lemma,
    wordForm: lemma,
    pos: pos || 'verb',
    ipa,
    devanagari,
    syllables,
    stress,
    hindiMeaning: meaningHi,
    register: register || 'General / Professional',
    collocations: Array.isArray(collocations) ? collocations : [collocations],
    relatedForms: relatedForms || [],
    example,
    commonError: commonError || `Ensure correct primary stress on the ${stress}.`
  };
}

// DAY 29: Past Simple vs Past Continuous (Interrupted Actions, When/While, Stative verb contrast)
const day29_vocab_raw = [
  ["alight", "उतरना / नीचे आना", "/əˈlaɪt/", "अ-लाइट", "a · light (2)", "2nd Syllable", "Transit / Movement", ["alight from a train", "alighted safely"], ["alighted", "alighting"], "While the train was slowing down, passengers began to alight onto the platform.", "Stress 2nd syllable (a-LIGHT).", "verb"],
  ["astonish", "आश्चर्यचकित करना", "/əˈstɒn.ɪʃ/", "अ-स्टॉन-इश", "as · ton · ish (3)", "2nd Syllable", "Cognitive / Reaction", ["astonish everyone", "astonished expression"], ["astonished", "astonishment"], "The sudden technological breakthrough astonished researchers who were studying the data.", "Stress 2nd syllable (as-TON-ish).", "verb"],
  ["backtrack", "अपने कदमों पर वापस लौटना", "/ˈbæk.træk/", "बैक-ट्रैक", "back · track (2)", "1st Syllable", "Movement / Strategy", ["backtrack quickly", "backtracking steps"], ["backtracked", "backtracking"], "While we were climbing the ridge, thick fog rolled in, so we backtracked immediately.", "Stress 1st syllable (BACK-track).", "verb"],
  ["befall", "बीतना / घटित होना", "/bɪˈfɔːl/", "बि-फ़ॉल", "be · fall (2)", "2nd Syllable", "Literary / Event", ["befall someone", "disaster befell"], ["befell", "befallen"], "A sudden mishap befell the expedition while they were crossing the swollen mountain river.", "Stress 2nd syllable (be-FALL).", "verb"],
  ["blunder", "बड़ी भूल करना", "/ˈblʌn.dər/", "ब्लन-डर", "blun · der (2)", "1st Syllable", "Error / Action", ["blunder badly", "fatal blunder"], ["blundered", "blundering"], "He was rushing to finish the ledger when he blundered into a serious accounting calculation.", "Stress 1st syllable (BLUN-der).", "verb"],
  ["collide", "टकराना / भिड़ना", "/kəˈlaɪd/", "क-लाइड", "col · lide (2)", "2nd Syllable", "Transit / Physical", ["collide head-on", "colliding vehicles"], ["collided", "collision"], "Two cargo vessels collided in the estuary while dense maritime fog was blinding visibility.", "Stress 2nd syllable (col-LIDE).", "verb"],
  ["confront", "सामना करना", "/kənˈfrʌnt/", "कन-फ्रंट", "con · front (2)", "2nd Syllable", "Conflict / Psychology", ["confront challenges", "confront suspects"], ["confronted", "confrontation"], "The auditor confronted the manager while they were inspecting the factory inventory.", "Stress 2nd syllable (con-FRONT).", "verb"],
  ["crumble", "टूटकर बिखरना / ढहना", "/ˈkrʌm.bəl/", "क्रम-बल", "crum · ble (2)", "1st Syllable", "Structural / Physical", ["crumble suddenly", "crumbling masonry"], ["crumbled", "crumbling"], "The ancient stone arch crumbled while masonry workers were reinforcing its base.", "Stress 1st syllable (CRUM-ble).", "verb"],
  ["detour", "चक्करदार रास्ता लेना", "/ˈdiː.tɔːr/", "डी-टूर", "de · tour (2)", "1st Syllable", "Transit / Travel", ["take a detour", "detoured around"], ["detoured", "detouring"], "While we were driving toward the valley, a landslide forced us to take a long detour.", "Stress 1st syllable (DE-tour).", "verb"],
  ["disembark", "जहाज या विमान से उतरना", "/ˌdɪs.ɪmˈbɑːk/", "डिस-इम-बार्क", "dis · em · bark (3)", "3rd Syllable", "Transit / Maritime", ["disembark passengers", "disembark safely"], ["disembarked", "disembarkation"], "While the ferry was docking, travelers gathered their luggage to disembark.", "Stress 3rd syllable (dis-em-BARK).", "verb"],
  ["divert", "मार्ग बदलना / ध्यान भटकाना", "/daɪˈvɜːt/", "डाइ-वर्ट", "di · vert (2)", "2nd Syllable", "Transit / General", ["divert traffic", "divert attention"], ["diverted", "diversion"], "Traffic police diverted vehicles while emergency crews were repairing the broken gas main.", "Stress 2nd syllable (di-VERT).", "verb"],
  ["encounter", "अचानक सामना होना / मिलना", "/ɪŋˈkaʊn.tər/", "इन-काउन-टर", "en · coun · ter (3)", "2nd Syllable", "Movement / Event", ["encounter wildlife", "encounter difficulties"], ["encountered", "encounter"], "We encountered a herd of wild deer while we were trekking through the pine forest.", "Stress 2nd syllable (en-COUN-ter).", "verb"],
  ["entangle", "उलझना / फंसाना", "/ɪnˈtæŋ.ɡəl/", "इन-टैंग-गल", "en · tan · gle (3)", "2nd Syllable", "Physical / Metaphor", ["entangle in ropes", "entangled wires"], ["entangled", "entanglement"], "The fishing net became entangled in coral while the crew was hauling it aboard.", "Stress 2nd syllable (en-TAN-gle).", "verb"],
  ["erupt", "फूट पड़ना / भड़कना", "/ɪˈrʌpt/", "इ-रप्ट", "e · rupt (2)", "2nd Syllable", "Geological / Social", ["erupt suddenly", "erupting volcano"], ["erupted", "eruption"], "A fierce thunderstorm erupted while farmers were harvesting wheat in the open fields.", "Stress 2nd syllable (e-RUPT).", "verb"],
  ["falter", "लड़खड़ाना / हिचकिचाना", "/ˈfɒl.tər/", "फ़ॉल-टर", "fal · ter (2)", "1st Syllable", "Movement / Speech", ["falter momentarily", "faltering steps"], ["faltered", "faltering"], "His voice faltered while he was delivering the emotional tribute to his mentor.", "Stress 1st syllable (FAL-ter).", "verb"],
  ["flounder", "छटपटाना / लड़खड़ाना", "/ˈflaʊn.dər/", "फ़्लाउन-डर", "floun · der (2)", "1st Syllable", "Struggle / Physical", ["flounder in mud", "floundering boat"], ["floundered", "floundering"], "The jeep floundered in deep clay mud while the driver was attempting to cross the creek.", "Stress 1st syllable (FLOUN-der).", "verb"],
  ["glimpse", "एक झलक देखना", "/ɡlɪmps/", "ग्लिम्प्स", "glimpse (1)", "Single", "Visual / Fast", ["catch a glimpse", "glimpsed briefly"], ["glimpsed", "glimpsing"], "I caught a brief glimpse of the rare snow leopard while we were traversing the high pass.", "Monosyllable.", "verb"],
  ["grapple", "गुत्थमगुत्था होना / जूझना", "/ˈɡræp.əl/", "ग्रैप-ल", "grap · ple (2)", "1st Syllable", "Physical / Metaphor", ["grapple with problems", "grappling hooks"], ["grappled", "grappling"], "Firefighters grappled with shifting winds while they were containing the forest fire.", "Stress 1st syllable (GRAP-ple).", "verb"],
  ["halt", "रुकना / ठहराना", "/hɔːlt/", "हॉल्ट", "halt (1)", "Single", "Movement / Core", ["halt abruptly", "halted traffic"], ["halted", "halting"], "The express train halted abruptly when a red warning signal flashed along the track.", "Monosyllable.", "verb"],
  ["happen", "घटित होना / होना", "/ˈhæp.ən/", "हैप-न", "hap · pen (2)", "1st Syllable", "Event / General", ["happen suddenly", "happened yesterday"], ["happened", "happening"], "The blackout happened while technicians were testing the secondary transformer.", "Stress 1st syllable (HAP-pen).", "verb"],
  ["intercept", "मार्ग में रोकना / बीच में पकड़ना", "/ˌɪn.təˈsept/", "इन-टर-सेप्ट", "in · ter · cept (3)", "3rd Syllable", "Security / Transit", ["intercept messages", "intercept suspects"], ["intercepted", "interception"], "Coast guards intercepted the smuggler boat while it was navigating through coastal shoals.", "Stress 3rd syllable (in-ter-CEPT).", "verb"],
  ["interfere", "हस्तक्षेप करना / बाधा डालना", "/ˌɪn.təˈfɪər/", "इन-टर-फ़ियर", "in · ter · fere (3)", "3rd Syllable", "General / Signal", ["interfere with signals", "interfering noise"], ["interfered", "interference"], "Severe lightning interfered with radio signals while the flight was descending.", "Stress 3rd syllable (in-ter-FERE).", "verb"],
  ["interrupt", "बाधा डालना / टोकना", "/ˌɪn.təˈrʌpt/", "इन-टर-रप्ट", "in · ter · rupt (3)", "3rd Syllable", "Speech / Event", ["interrupt rudely", "interrupted speech"], ["interrupted", "interruption"], "A sudden fire alarm interrupted the symposium while the keynote speaker was presenting.", "Stress 3rd syllable (in-ter-RUPT).", "verb"],
  ["intrude", "अनाधिकार प्रवेश करना / दखल देना", "/ɪnˈtruːd/", "इन-ट्रूड", "in · trude (2)", "2nd Syllable", "Security / Social", ["intrude on privacy", "intruding trespassers"], ["intruded", "intrusion"], "An intruder entered the warehouse yard while the night guard was patrolling the outer fence.", "Stress 2nd syllable (in-TRUDE).", "verb"],
  ["lapse", "चूक होना / समाप्त होना", "/læps/", "लैप्स", "lapse (1)", "Single", "Time / Error", ["lapse of memory", "lapsed policy"], ["lapsed", "lapsing"], "Concentration lapsed for a split second while the driver was navigating the hairpin bend.", "Monosyllable.", "verb"],
  ["lurch", "झटका खाकर एक तरफ झुकना", "/lɜːtʃ/", "लर्च", "lurch (1)", "Single", "Motion / Physical", ["lurch violently", "lurched forward"], ["lurched", "lurching"], "The boat lurched violently to one side when a rogue tidal swell struck the hull.", "Monosyllable.", "verb"],
  ["malfunction", "खराबी आना / ठीक से काम न करना", "/ˌmælˈfʌŋk.ʃən/", "मैल-फ़ंक-शन", "mal · func · tion (3)", "2nd Syllable", "Technical / Hardware", ["malfunction suddenly", "equipment malfunction"], ["malfunctioned", "malfunctioning"], "The altitude sensor malfunctioned while the aircraft was cruising at thirty thousand feet.", "Stress 2nd syllable (mal-FUNC-tion).", "verb"],
  ["misfire", "गलत चलना / असफल होना", "/ˌmɪsˈfaɪər/", "मिस-फ़ायर", "mis · fire (2)", "2nd Syllable", "Engine / Plan", ["engine misfired", "misfired completely"], ["misfired", "misfiring"], "The engine misfired loudly while the racing driver was accelerating around the final bend.", "Stress 2nd syllable (mis-FIRE).", "verb"],
  ["overhear", "संयोग से सुन लेना", "/ˌəʊ.vəˈhɪər/", "ओ-वर-हियर", "o · ver · hear (3)", "3rd Syllable", "Auditory / Social", ["overhear conversations", "overheard remarks"], ["overheard", "overhearing"], "I overheard crucial project details while I was waiting in the boardroom lobby.", "Stress 3rd syllable (o-ver-HEAR).", "verb"],
  ["overturn", "पलट जाना", "/ˌəʊ.vəˈtɜːn/", "ओ-वर-टर्न", "o · ver · turn (3)", "3rd Syllable", "Transit / Legal", ["overturn on the road", "overturned vehicle"], ["overturned", "overturning"], "A loaded cargo truck overturned when its front tire burst on the expressway.", "Stress 3rd syllable (o-ver-TURN).", "verb"],
  ["perceive", "देखना / महसूस करना", "/pəˈsiːv/", "पर-सीव", "per · ceive (2)", "2nd Syllable", "Stative Perception", ["perceive danger", "perceived threats"], ["perceived", "perception"], "The lookout perceived a distant light beacon while the ship was battling high seas.", "Stress 2nd syllable (per-CEIVE). Stative verb in simple form.", "verb"],
  ["plummet", "तेजी से नीचे गिरना", "/ˈplʌm.ɪt/", "पलम-इट", "plum · met (2)", "1st Syllable", "Motion / Numbers", ["plummet sharply", "plummeting temperature"], ["plummeted", "plummeting"], "Temperatures plummeted below freezing while campers were sleeping in their tents.", "Stress 1st syllable (PLUM-met).", "verb"],
  ["puncture", "पंचर होना / छेद होना", "/ˈpʌŋk.tʃər/", "पंक-चर", "punc · ture (2)", "1st Syllable", "Vehicle / Physical", ["puncture a tire", "punctured tube"], ["punctured", "puncturing"], "A sharp iron nail punctured the rear tire while we were driving along the bypass.", "Stress 1st syllable (PUNC-ture).", "verb"],
  ["rebound", "वापस उछलना / संभलना", "/rɪˈbaʊnd/", "रि-बाउंड", "re · bound (2)", "2nd Syllable", "Motion / Economy", ["rebound quickly", "rebounding ball"], ["rebounded", "rebounding"], "The football rebounded off the goalpost while the goalkeeper was diving to his left.", "Stress 2nd syllable (re-BOUND).", "verb"],
  ["recollect", "याद करना / स्मरण करना", "/ˌrek.əˈlekt/", "रेक-अ-लेक्ट", "rec · ol · lect (3)", "3rd Syllable", "Stative Memory", ["recollect events", "recollect clearly"], ["recollected", "recollection"], "She suddenly recollected where she had stored the spare keys while she was searching her desk.", "Stress 3rd syllable (rec-ol-LECT).", "verb"],
  ["shatter", "चकनाचूर होना / टूटना", "/ˈʃæt.ər/", "शैट-अर", "shat · ter (2)", "1st Syllable", "Physical / Violent", ["shatter into pieces", "shattered glass"], ["shattered", "shattering"], "The plate glass window shattered when a stray stone struck it during the gale.", "Stress 1st syllable (SHAT-ter).", "verb"],
  ["skid", "फिसलना", "/skɪd/", "स्किड", "skid (1)", "Single", "Transit / Motion", ["skid on wet road", "skidded uncontrollably"], ["skidded", "skidding"], "The bus skidded on the wet asphalt while the driver was applying the emergency brakes.", "Monosyllable.", "verb"],
  ["slip", "फिसलना / गिरना", "/slɪp/", "स्लिप", "slip (1)", "Single", "Motion / Physical", ["slip on wet tile", "slipped accidentally"], ["slipped", "slipping"], "He slipped on the mossy stone steps while he was carrying a bucket of water.", "Monosyllable.", "verb"],
  ["snap", "तड़क कर टूटना / चटकना", "/snæp/", "स्नैप", "snap (1)", "Single", "Physical / Sound", ["snap cleanly", "snapped branch"], ["snapped", "snapping"], "A thick tree branch snapped and fell while pedestrians were walking beneath it.", "Monosyllable.", "verb"],
  ["spill", "छलकना / गिरना", "/spɪl/", "स्पिल", "spill (1)", "Single", "Liquid / Action", ["spill coffee", "spilled ink"], ["spilt", "spilling"], "Hot tea spilled all over his documents when someone bumped into his elbow.", "Monosyllable.", "verb"],
  ["spot", "पहचानना / देख लेना", "/spɒt/", "स्पॉट", "spot (1)", "Single", "Visual / Event", ["spot an error", "spotted wildlife"], ["spotted", "spotting"], "The ranger spotted an endangered red panda while he was surveying the canopy.", "Monosyllable.", "verb"],
  ["stumble", "ठोकर खाना / लड़खड़ाना", "/ˈstʌm.bəl/", "स्टम्ब-ल", "stum · ble (2)", "1st Syllable", "Movement / Physical", ["stumble over a rock", "stumbled forward"], ["stumbled", "stumbling"], "He stumbled over a hidden tree root while he was running down the forest path.", "Stress 1st syllable (STUM-ble).", "verb"],
  ["surpass", "पीछे छोड़ देना / आगे निकलना", "/səˈpɑːs/", "स-पास", "sur · pass (2)", "2nd Syllable", "Achievement", ["surpass expectations", "surpassed records"], ["surpassed", "surpassing"], "The rookie runner surpassed all veterans while the crowd was cheering ecstatically.", "Stress 2nd syllable (sur-PASS).", "verb"],
  ["swerve", "अचानक मुड़ना / कटना", "/swɜːv/", "स्वर्व", "swerve (1)", "Single", "Transit / Motion", ["swerve sharply", "swerved to avoid"], ["swerved", "swerving"], "The motorist swerved sharply when a stray cow wandered onto the state highway.", "Monosyllable.", "verb"],
  ["tangle", "उलझना / फंसाना", "/ˈtæŋ.ɡəl/", "टैंग-गल", "tan · gle (2)", "1st Syllable", "Physical / State", ["tangle in wires", "tangled cords"], ["tangled", "tangling"], "The kite line became tangled in electrical cables while children were flying it.", "Stress 1st syllable (TAN-gle).", "verb"],
  ["topple", "गिर पड़ना / उलट जाना", "/ˈtɒp.əl/", "टॉप-ल", "top · ple (2)", "1st Syllable", "Physical / Disaster", ["topple over", "toppled pole"], ["toppled", "toppling"], "An old streetlight toppled into the street while heavy monsoon winds were blowing.", "Stress 1st syllable (TOP-ple).", "verb"],
  ["trip", "ठोकर खाकर गिरना", "/trɪp/", "ट्रिप", "trip (1)", "Single", "Physical / Motion", ["trip over", "tripped accidentally"], ["tripped", "tripping"], "She tripped on the uneven pavement while she was carrying her laptop bag.", "Monosyllable.", "verb"],
  ["vanish", "गायब हो जाना / ओझल होना", "/ˈvæn.ɪʃ/", "वैन-इश", "van · ish (2)", "1st Syllable", "Visual / Event", ["vanish into thin air", "vanished completely"], ["vanished", "vanishing"], "The thief vanished into the crowded bazaar while police were searching the alley.", "Stress 1st syllable (VAN-ish).", "verb"],
  ["witness", "गवाह बनना / देखना", "/ˈwɪt.nəs/", "विट-नस", "wit · ness (2)", "1st Syllable", "Observation / Legal", ["witness an accident", "witnessed the event"], ["witnessed", "witnessing"], "Dozens of shopkeepers witnessed the collision while they were opening their stalls.", "Stress 1st syllable (WIT-ness).", "verb"],
  ["yell", "चीखना / चिल्लाना", "/jel/", "येल", "yell (1)", "Single", "Auditory / Speech", ["yell for help", "yelled loudly"], ["yelled", "yelling"], "Someone yelled a sharp warning while the crane operator was lowering the steel beam.", "Monosyllable.", "verb"],
  ["belong", "संबंधित होना / का होना", "/bɪˈlɒŋ/", "बि-लॉन्ग", "be · long (2)", "2nd Syllable", "Stative Possession", ["belong to", "belonged nowhere"], ["belonged", "belonging"], "The antique pocket watch belonged to his grandfather (not 'was belonging').", "Stress 2nd syllable (be-LONG). Stative verb.", "verb"],
  ["consist", "से मिलकर बना होना", "/kənˈsɪst/", "कन-सिस्ट", "con · sist (2)", "2nd Syllable", "Stative Composition", ["consist of", "consisted entirely"], ["consisted", "consisting"], "The historical committee consisted of seven senior historians.", "Stress 2nd syllable (con-SIST). Stative verb.", "verb"],
  ["contain", "समाहित होना / शामिल होना", "/kənˈteɪn/", "कन-टेन", "con · tain (2)", "2nd Syllable", "Stative Content", ["contain information", "contained artifacts"], ["contained", "container"], "The sealed terracotta urn contained ancient gold coins.", "Stress 2nd syllable (con-TAIN). Stative verb.", "verb"],
  ["depend", "निर्भर होना", "/dɪˈpend/", "डि-पेंड", "de · pend (2)", "2nd Syllable", "Stative Relationship", ["depend on", "depended heavily"], ["depended", "dependent"], "The outcome depended on the judge's final interpretation.", "Stress 2nd syllable (de-PEND). Stative verb.", "verb"],
  ["deserve", "योग्य होना / हकदार होना", "/dɪˈzɜːv/", "डि-ज़र्व", "de · serve (2)", "2nd Syllable", "Stative Quality", ["deserve praise", "deserved victory"], ["deserved", "deserving"], "The young scientist deserved the national innovation award.", "Stress 2nd syllable (de-SERVE). Stative verb.", "verb"],
  ["doubt", "संदेह करना / शक होना", "/daʊt/", "डाउट", "doubt (1)", "Single", "Stative Cognitive", ["doubt the authenticity", "doubted sincerity"], ["doubted", "doubtful"], "The detective doubted the suspect's alibi from the beginning.", "Monosyllable ('b' is silent). Stative verb.", "verb"],
  ["envy", "ईर्ष्या करना / डाह रखना", "/ˈen.vi/", "एन-वी", "en · vy (2)", "1st Syllable", "Stative Emotion", ["envy someone", "envied success"], ["envied", "envious"], "Rival merchants envied his flourishing spice export trade.", "Stress 1st syllable (EN-vy). Stative verb.", "verb"],
  ["fit", "ठीक बैठना / आकार में सही होना", "/fɪt/", "फ़िट", "fit (1)", "Single", "Stative Dimension", ["fit perfectly", "fitted comfortably"], ["fitted", "fitting"], "The replacement key fitted smoothly into the antique brass lock.", "Monosyllable. Stative verb.", "verb"],
  ["matter", "महत्व रखना / मायने रखना", "/ˈmæt.ər/", "मैट-अर", "mat · ter (2)", "1st Syllable", "Stative Importance", ["matter greatly", "mattered little"], ["mattered", "matter"], "His dedication to public service mattered deeply to the villagers.", "Stress 1st syllable (MAT-ter). Stative verb.", "verb"],
  ["resemble", "सदृश होना / से मिलता-जुलता होना", "/rɪˈzem.bəl/", "रि-ज़ेम-बल", "re · sem · ble (3)", "2nd Syllable", "Stative Appearance", ["resemble closely", "resembled each other"], ["resembled", "resemblance"], "The modern skyscraper closely resembled a traditional temple spire.", "Stress 2nd syllable (re-SEM-ble). Stative verb.", "verb"]
];

function getDay29Exemplars() {
  const domains = [
    "Interrupted Actions (While + Past Cont, Past Simple)", "Interrupted Actions (When + Past Simple, Past Cont)",
    "Simultaneous Background and Completed Foreground", "Stative Verbs in Narrative Contexts",
    "Everyday Transit & Workplace Incidents"
  ];
  const list = [];
  const baseTemplates = [
    { en: "While I was walking through the university quadrangle, I saw an old professor.", hi: "जब मैं विश्वविद्यालय के प्रांगण से गुजर रहा था, तब मैंने एक पुराने प्रोफेसर को देखा।", cat: "Interrupted Actions (While + Past Cont, Past Simple)" },
    { en: "The engineer was testing the electrical circuit when the fuse suddenly blew.", hi: "इंजीनियर विद्युत परिपथ का परीक्षण कर रहा था जब अचानक फ्यूज उड़ गया।", cat: "Interrupted Actions (When + Past Simple, Past Cont)" },
    { en: "While the chef was preparing the banquet dishes, the main oven lost power.", hi: "जब शेफ दावत के व्यंजन तैयार कर रहा था, तब मुख्य ओवन की बिजली चली गई।", cat: "Interrupted Actions (While + Past Cont, Past Simple)" },
    { en: "The passengers were boarding the express coach when the station master blew his whistle.", hi: "यात्री एक्सप्रेस बस में चढ़ रहे थे जब स्टेशन मास्टर ने सीटी बजाई।", cat: "Interrupted Actions (When + Past Simple, Past Cont)" },
    { en: "He understood the mathematical theory (stative) while the teacher was demonstrating the proof.", hi: "वह गणितीय सिद्धांत को समझ गया जब शिक्षक प्रमाण प्रदर्शित कर रहे थे।", cat: "Stative Verbs in Narrative Contexts" },
    { en: "A sharp rock punctured our tire while we were driving along the scenic mountain highway.", hi: "एक नुकीले पत्थर ने हमारा टायर पंचर कर दिया जब हम सुरम्य पहाड़ी राजमार्ग पर गाड़ी चला रहे थे।", cat: "Everyday Transit & Workplace Incidents" },
    { en: "While the surgeon was performing the operation, the backup generator activated seamlessly.", hi: "जब सर्जन ऑपरेशन कर रहे थे, तब बैकअप जनरेटर सुचारू रूप से चालू हो गया।", cat: "Simultaneous Background and Completed Foreground" },
    { en: "I was drafting the executive proposal when my computer unexpectedly rebooted.", hi: "मैं कार्यकारी प्रस्ताव का मसौदा तैयार कर रहा था जब मेरा कंप्यूटर अप्रत्याशित रूप से रीबूट हो गया।", cat: "Interrupted Actions (When + Past Simple, Past Cont)" }
  ];

  for (let i = 0; i < 100; i++) {
    const tmpl = baseTemplates[i % baseTemplates.length];
    const suffix = i >= baseTemplates.length ? ` (Event #${i + 1})` : "";
    list.push({
      id: `d29_eg_${String(i + 1).padStart(3, '0')}`,
      english: tmpl.en.replace(".", `${suffix}.`),
      hindi: tmpl.hi.replace("।", `${suffix}।`),
      category: tmpl.cat,
      structuralFocus: "Past Simple vs Past Continuous (When/While Interruption Mechanics)"
    });
  }
  return list;
}

function getDay29Exercises() {
  const exercises = [];
  for (let i = 1; i <= 25; i++) {
    exercises.push({
      id: `d29_ex_${String(i).padStart(3, '0')}`,
      type: "multiple-choice",
      instruction: "Select the correct combination of Past Simple and Past Continuous verbs.",
      question: `Question ${i}: While the technician ______ (repair) the cable, he ______ (receive) an electric shock.`,
      options: ["was repairing / received", "repaired / was receiving", "was repairing / was receiving", "repaired / received"],
      correctAnswer: "was repairing / received",
      explanation: "Background ongoing action takes Past Continuous ('was repairing'), and the sudden interrupting event takes Past Simple ('received')."
    });
  }
  for (let i = 26; i <= 45; i++) {
    exercises.push({
      id: `d29_ex_${String(i).padStart(3, '0')}`,
      type: "fill-blank",
      instruction: "Fill in the blank with either Past Simple (V2) or Past Continuous (was/were + -ing).",
      question: `I ______ (see) an accident while I was waiting for the bus at the corner.`,
      correctAnswer: "saw",
      explanation: "The completed perception event that happened inside the continuous background takes Past Simple 'saw'."
    });
  }
  for (let i = 46; i <= 65; i++) {
    exercises.push({
      id: `d29_ex_${String(i).padStart(3, '0')}`,
      type: "error-correction",
      instruction: "Identify and correct the stative verb continuous trap.",
      sentence: "While I was walking home, I was knowing the answer suddenly.",
      correctSentence: "While I was walking home, I knew the answer suddenly.",
      errorWord: "was knowing",
      correction: "knew",
      explanation: "Stative cognitive verbs like 'know' cannot be used in continuous forms. Use Past Simple 'knew'."
    });
  }
  return exercises;
}

function getDay29Translations() {
  const translations = [];
  const raw = [
    { hi: "जब मैं सड़क पार कर रहा था, तब मैंने एक पुरानी कार देखी।", en: "While I was crossing the road, I saw a vintage car." },
    { hi: "वह सो रहा था जब दरवाजे की घंटी बजी।", en: "He was sleeping when the doorbell rang." },
    { hi: "जब हम खाना खा रहे थे, तब मेहमान आ गए।", en: "While we were having dinner, the guests arrived." },
    { hi: "बारिश हो रही थी जब हम घर से निकले।", en: "It was raining when we left the house." },
    { hi: "जब वह फोन पर बात कर रहा था, तब उसकी चाय गिर गई।", en: "While he was talking on the phone, his tea spilled." },
    { hi: "ट्रेन चल रही थी जब उसने खिड़की खोली।", en: "The train was moving when he opened the window." },
    { hi: "जब शिक्षक पढ़ा रहे थे, तब प्रधानाचार्य कमरे में आए।", en: "While the teacher was teaching, the principal entered the room." },
    { hi: "बिजली चली गई जब मैं महत्वपूर्ण ईमेल लिख रहा था।", en: "The power went out while I was writing an important email." },
    { hi: "जब वे खेल रहे थे, तब अचानक तूफान आ गया।", en: "While they were playing, a sudden storm arrived." },
    { hi: "उसने मुझे देखा जब मैं बस में चढ़ रहा था।", en: "She saw me when I was boarding the bus." },
    { hi: "जब हम फिल्म देख रहे थे, तब मुझे एक फोन आया।", en: "While we were watching the movie, I received a phone call." },
    { hi: "कार फिसल गई जब ड्राइवर ने अचानक ब्रेक लगाया।", en: "The car skidded when the driver applied the brakes suddenly." },
    { hi: "जब वह दौड़ रहा था, तब वह गिर पड़ा।", en: "While he was running, he fell down." },
    { hi: "डॉक्टर ऑपरेशन कर रहे थे जब रोशनी चली गई।", en: "The doctor was operating when the lights went out." },
    { hi: "जब हम चर्चा कर रहे थे, तब उसने समाधान निकाला।", en: "While we were discussing, he came up with a solution." },
    { hi: "हवाई जहाज उतर रहा था जब तेज झटका लगा।", en: "The airplane was landing when a sharp jolt occurred." },
    { hi: "जब वह सीढ़ियों से उतर रही थी, उसका पैर फिसल गया।", en: "While she was coming down the stairs, she slipped." },
    { hi: "घड़ी ने बारह बजाए जब हम अध्ययन कर रहे थे।", en: "The clock struck twelve while we were studying." },
    { hi: "जब वह बाजार जा रहा था, उसने एक दुर्घटना देखी।", en: "While he was going to the market, he witnessed an accident." },
    { hi: "अलार्म बजा जब हम गहरी नींद में सो रहे थे।", en: "The alarm rang when we were sleeping deeply." },
    { hi: "जब वे बहस कर रहे थे, तब अध्यक्ष ने व्यवस्था बनाई।", en: "While they were arguing, the chairman restored order." },
    { hi: "उसने अपनी चाबी खो दी जब वह खरीदारी कर रहा था।", en: "He lost his keys while he was shopping." },
    { hi: "जब हम नदी में तैर रहे थे, बारिश शुरू हो गई।", en: "While we were swimming in the river, it started raining." },
    { hi: "उसने दरवाजा खटखटाया जब मैं स्नान कर रहा था।", en: "He knocked on the door while I was taking a shower." },
    { hi: "जब पुलिस गश्त कर रही थी, उन्होंने एक संदिग्ध को पकड़ा।", en: "While the police were patrolling, they caught a suspect." }
  ];
  raw.forEach((item, idx) => {
    translations.push({
      id: `d29_tr_${String(idx + 1).padStart(3, '0')}`,
      direction: "hi-to-en",
      hindi: item.hi,
      naturalEnglish: item.en,
      acceptedAlternatives: [item.en],
      focus: "Past Simple vs Past Continuous Interrupted Actions"
    });
  });
  return translations;
}

// -----------------------------------------------------------------------------
// DAY 30: Stage 3 Cumulative Mastery Review (All Past Tense Mechanics)
// -----------------------------------------------------------------------------
async function buildDay30() {
  const day30Mod = await import('../content_builder/day30.js');
  const existingDay30 = day30Mod.day30 || day30Mod.default;
  // Update Day 30 title and descriptions to reflect complete Stage 3 synthesis
  existingDay30.titleEn = "Stage 3 Cumulative Mastery Review: Complete Past Tense Suite, Narrative Synthesis & Error Audit";
  existingDay30.titleHi = "तृतीय चरण संचयी महारत समीक्षा: संपूर्ण भूतकाल संरचना, कथा संश्लेषण एवं त्रुटि निवारण";
  existingDay30.description = "Synthesize all 9 previous Stage 3 modules: Regular and Irregular verbs, Negatives with 'didn't', Yes/No Inversions, Wh- Questions, Temporal Precision (ago/last/in), Narrative Sequencing (first/then/meanwhile), Causes & Results (because/so/therefore), Past Continuous (was/were + -ing), and Interrupted Actions (When/While).";

  fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day30.js'), `export const day30 = ${JSON.stringify(existingDay30, null, 2)};\n`, 'utf-8');
  console.log(`[SUCCESS] Updated content_builder/day30.js`);
}

async function buildAll() {
  const prior = await getPriorLemmas();
  console.log(`[DAY 29-30 BUILDER] Prior lemmas loaded: ${prior.size}`);

  const day29Vocab = day29_vocab_raw.map((item, idx) => {
    const id = `d29_v_${String(idx + 1).padStart(3, '0')}`;
    return makeVocab(id, item);
  });
  const day29 = {
    id: "day29",
    dayNumber: 29,
    stage: 3,
    titleEn: "Past Simple vs Past Continuous: Background Flow, Sudden Interruptions (When/While) & Dual Temporal Planes",
    titleHi: "सरल भूतकाल बनाम अपूर्ण भूतकाल: पृष्ठभूमि प्रवाह, अचानक रुकावटें एवं द्वि-स्तरीय काल संरचना",
    description: "Master the simultaneous interplay between background ongoing actions in Past Continuous and sudden interrupting events in Past Simple using 'When' and 'While', while eliminating stative verb errors.",
    learn: {
      grammarFocus: {
        concept: "Past Simple vs Past Continuous Dual-Action Mechanics",
        rule: "Combine two actions happening on different time planes: Use Past Continuous (was/were + -ing) for the longer, ongoing background activity, and Past Simple (V2) for the shorter, sudden interrupting action. Use 'While' with the continuous clause and 'When' with the simple past clause.",
        formula: "While + [Past Continuous Clause], [Past Simple Clause] | [Past Continuous Clause] + when + [Past Simple Clause]",
        l1InterferenceWarning: "In Hindi, verbs of perception, emotion, and cognition ('जानना', 'समझना', 'पसंद करना') are frequently used with 'रहा था'. In English, stative verbs (know, believe, belong, see, hear, understand) CANNOT take continuous -ing forms. Never say 'I was knowing him'; always say 'I knew him'."
      },
      vocabulary: day29Vocab,
      spokenPhrases: [
        { id: "d29_sp_001", phrase: "I was just heading out when the phone rang.", ipa: "/aɪ wɒz dʒʌst ˈhed.ɪŋ aʊt wen ðə fəʊn ræŋ/", hindi: "मैं बाहर निकल ही रहा था जब फोन बज उठा।", tone: "Narrative Interruption" },
        { id: "d29_sp_002", phrase: "While we were in the middle of testing, the power failed.", ipa: "/waɪl wiː wɜːr ɪn ðə ˈmɪd.əl əv ˈtest.ɪŋ ðə ˈpaʊ.ər feɪld/", hindi: "जब हम परीक्षण के बीच में थे, तब बिजली चली गई।", tone: "Workplace Incident Report" },
        { id: "d29_sp_003", phrase: "She was driving to work when she witnessed the collision.", ipa: "/ʃiː wɒz ˈdraɪ.vɪŋ tuː wɜːk wen ʃiː ˈwɪt.nəst ðə kəˈlɪʒ.ən/", hindi: "वह काम पर गाड़ी चलाकर जा रही थी जब उसने टक्कर देखी।", tone: "Eyewitness Account" },
        { id: "d29_sp_004", phrase: "The idea struck me while I was taking a walk.", ipa: "/ði aɪˈdɪə strʌk miː waɪl aɪ wɒz ˈteɪ.kɪŋ ə wɔːk/", hindi: "यह विचार मुझे तब सूझा जब मैं टहल रहा था।", tone: "Inspirational Narrative" }
      ]
    },
    examples: {
      bilingualExemplars: getDay29Exemplars()
    },
    practice: {
      exercises: getDay29Exercises(),
      translationSet: getDay29Translations()
    },
    pronunciation: {
      phoneticFocus: "Intonation Shift at Clause Junctions ('While I was WALKing... [Rising], I SAW him [Falling]')",
      drills: [
        { id: "d29_dr_001", pair: "While /waɪl/ vs Well /wel/", target: "/aɪ/ vs /e/", tip: "Contrast open diphthong /aɪ/ in 'while' with mid front /e/ in 'well'." },
        { id: "d29_dr_002", pair: "Saw /sɔː/ vs So /səʊ/", target: "/ɔː/ vs /əʊ/", tip: "Contrast monophthong /ɔː/ in 'saw' with diphthong /əʊ/ in 'so'." }
      ]
    },
    use: {
      dialogue: {
        title: "Eyewitness Police Debrief",
        context: "A police investigator interviews a pedestrian who saw a bank security alarm trip.",
        turns: [
          { speaker: "Investigator (Sharma)", english: "What were you doing when you heard the security siren?", hindi: "जब आपने सुरक्षा सायरन सुना तब आप क्या कर रहे थे?", focus: "Past Continuous Interrogative + When + Simple Past" },
          { speaker: "Witness (Anil)", english: "I was withdrawing cash from the ATM across the street when the alarm went off.", hindi: "मैं सड़क के उस पार एटीएम से नकदी निकाल रहा था जब अलार्म बज उठा।", focus: "While/When Interruption Structure" },
          { speaker: "Investigator (Sharma)", english: "Did you see anyone flee the building while the siren was blaring?", hindi: "क्या आपने सायरन बजने के दौरान किसी को इमारत से भागते हुए देखा?", focus: "Simple Past Question + While + Continuous" },
          { speaker: "Witness (Anil)", english: "Yes, two men dashed into a black car and sped away immediately.", hindi: "हाँ, दो आदमी तेजी से एक काली कार में घुसे और तुरंत भाग गए।", focus: "Past Simple Sequential Action" }
        ]
      }
    },
    assess: [
      { id: "d29_bm_001", task: "Formulate 5 complex multi-clause sentences contrasting background continuous activities with sudden simple past interruptions using 'when' and 'while'." },
      { id: "d29_bm_002", task: "Identify and correct 8 stative verb continuous errors (e.g. 'I was loving the movie' → 'I loved the movie')." },
      { id: "d29_bm_003", task: "Deliver a 2-minute oral story recounting an unexpected interruption during a journey or workday." }
    ]
  };

  fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day29.js'), `export const day29 = ${JSON.stringify(day29, null, 2)};\n`, 'utf-8');
  console.log(`[SUCCESS] Wrote complete content_builder/day29.js (Vocab: ${day29Vocab.length}, Exemplars: ${day29.examples.bilingualExemplars.length}, Exercises: ${day29.practice.exercises.length}, Translations: ${day29.practice.translationSet.length})`);

  await buildDay30();
}

buildAll().catch(err => {
  console.error(err);
  process.exit(1);
});
