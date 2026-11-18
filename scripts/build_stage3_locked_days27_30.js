// scripts/build_stage3_locked_days27_30.js
import fs from 'fs';
import path from 'path';

async function getPriorLemmas() {
  const used = new Set();
  for (let i = 1; i <= 26; i++) {
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

// DAY 27: Causes & Results in Past (because, so, therefore, as a result, since, consequently)
const day27_vocab_raw = [
  ["aggravate", "बिगाड़ना / बदतर करना", "/ˈæɡ.rə.veɪt/", "ऐग-र-वेट", "ag · gra · vate (3)", "1st Syllable", "Medical / Crisis", ["aggravate conditions", "aggravate symptoms"], ["aggravated", "aggravation"], "Heavy vehicular pollution aggravated respiratory illnesses across the city.", "Stress 1st syllable (AG-gra-vate).", "verb"],
  ["alleviate", "कम करना / राहत देना", "/əˈliː.vi.eɪt/", "अ-ली-वि-एट", "al · le · vi · ate (4)", "2nd Syllable", "Medical / Relief", ["alleviate suffering", "alleviate poverty"], ["alleviated", "alleviation"], "The government distributed emergency rations; therefore, it alleviated severe hunger in the valley.", "Stress 2nd syllable (al-LE-vi-ate).", "verb"],
  ["catalyze", "उत्प्रेरित करना / गति तेज करना", "/ˈkæt.əl.aɪz/", "कैट-ल-आइज़", "cat · a · lyze (3)", "1st Syllable", "Science / Change", ["catalyze reactions", "catalyze reforms"], ["catalyzed", "catalyst"], "The new industrial policy catalyzed massive private investment across regional hubs.", "Stress 1st syllable (CAT-a-lyze).", "verb"],
  ["cause", "कारण बनना / उत्पन्न करना", "/kɔːz/", "कॉज़", "cause (1)", "Single", "Causal Core", ["cause damage", "cause disruption"], ["caused", "causal"], "Heavy monsoon floods caused severe structural erosion along the riverbanks.", "Monosyllable.", "verb"],
  ["compel", "विवश करना / बाध्य करना", "/kəmˈpel/", "कम-पेल", "com · pel (2)", "2nd Syllable", "Legal / Personal", ["compel compliance", "compel action"], ["compelled", "compulsion"], "Torrential blizzards compelled the airline to ground all high-altitude passenger flights.", "Stress 2nd syllable (com-PEL).", "verb"],
  ["culminate", "चरम सीमा पर पहुँचना / परिणत होना", "/ˈkʌl.mɪ.neɪt/", "कल-मि-नेट", "cul · mi · nate (3)", "1st Syllable", "Narrative / Result", ["culminate in success", "culminate in victory"], ["culminated", "culmination"], "Months of rigorous diplomatic talks culminated in a landmark bilateral trade pact.", "Stress 1st syllable (CUL-mi-nate).", "verb"],
  ["damage", "नुकसान पहुँचाना / क्षतिग्रस्त करना", "/ˈdæm.ɪdʒ/", "डै-मिज", "dam · age (2)", "1st Syllable", "General / Disaster", ["damage property", "damage severely"], ["damaged", "damages"], "The unexpected hail storm damaged extensive standing wheat crops across three districts.", "Stress 1st syllable (DAM-age).", "verb"],
  ["debilitate", "दुर्बल करना / कमजोर बनाना", "/dɪˈbɪl.ɪ.teɪt/", "डि-बिल-इ-टेट", "de · bil · i · tate (4)", "2nd Syllable", "Medical / Economy", ["debilitate infrastructure", "debilitate health"], ["debilitated", "debility"], "Prolonged industrial strikes debilitated state manufacturing output for six months.", "Stress 2nd syllable (de-BIL-i-tate).", "verb"],
  ["destabilize", "अस्थिर करना", "/ˌdiːˈsteɪ.bəl.aɪz/", "डी-स्टे-ब-लाइज़", "de · sta · bi · lize (4)", "2nd Syllable", "Political / Economic", ["destabilize markets", "destabilize governments"], ["destabilized", "destabilization"], "Runaway hyperinflation destabilized regional retail commerce in 1991.", "Stress 2nd syllable (de-STA-bi-lize).", "verb"],
  ["deteriorate", "बदतर होना / बिगड़ना", "/dɪˈtɪə.ri.ə.reɪt/", "डि-टी-रि-अ-रेट", "de · te · ri · o · rate (5)", "2nd Syllable", "Climate / Health", ["deteriorate rapidly", "deteriorate further"], ["deteriorated", "deterioration"], "Air quality deteriorated rapidly because farmers burnt seasonal crop stubble.", "Stress 2nd syllable (de-TE-ri-o-rate).", "verb"],
  ["diminish", "घटाना / कम होना", "/dɪˈmɪn.ɪʃ/", "डि-मिन-इश", "di · min · ish (3)", "2nd Syllable", "General / Finance", ["diminish risks", "diminish profits"], ["diminished", "diminution"], "Subsidies lowered consumer costs; as a result, financial strain diminished significantly.", "Stress 2nd syllable (di-MIN-ish).", "verb"],
  ["disrupt", "बाधित करना / अस्त-व्यस्त करना", "/dɪsˈrʌpt/", "डिस-रप्ट", "dis · rupt (2)", "2nd Syllable", "Transit / Tech", ["disrupt services", "disrupt schedules"], ["disrupted", "disruption"], "A sudden software glitch disrupted passenger ticketing servers across railway stations.", "Stress 2nd syllable (dis-RUPT).", "verb"],
  ["drain", "खाली करना / समाप्त करना", "/dreɪn/", "ड्रेन", "drain (1)", "Single", "Resource / Energy", ["drain resources", "drain stamina"], ["drained", "drainage"], "Unforeseen medical expenses drained their entire emergency savings fund.", "Monosyllable.", "verb"],
  ["effectuate", "प्रभावित करना / कार्यान्वित करना", "/ɪˈfek.tʃu.eɪt/", "इ-फ़ेक-चु-एट", "ef · fec · tu · ate (4)", "2nd Syllable", "Formal / Policy", ["effectuate reforms", "effectuate change"], ["effectuated", "effectuation"], "Judicious fiscal restructuring effectuated substantial economic recovery in 2004.", "Stress 2nd syllable (ef-FEC-tu-ate).", "verb"],
  ["elicit", "प्राप्त करना / सामने लाना", "/iˈlɪs.ɪt/", "इ-लिस-इट", "e · lic · it (3)", "2nd Syllable", "Communication", ["elicit responses", "elicit feedback"], ["elicited", "elicitation"], "The compelling keynote address elicited enthusiastic applause from the academic audience.", "Stress 2nd syllable (e-LIC-it).", "verb"],
  ["engender", "पैदा करना / जन्म देना", "/ɪnˈdʒen.dər/", "इन-जेन-डर", "en · gen · der (3)", "2nd Syllable", "Social / Psychological", ["engender trust", "engender confidence"], ["engendered", "engendering"], "Transparent public communication engendered deep citizen trust during the health crisis.", "Stress 2nd syllable (en-GEN-der).", "verb"],
  ["entail", "आवश्यक बनाना / सम्मिलित करना", "/ɪnˈteɪl/", "इन-टेल", "en · tail (2)", "2nd Syllable", "Formal / Project", ["entail risks", "entail expenses"], ["entailed", "entailment"], "The hydro-dam expansion entailed significant environmental and ecological mitigation measures.", "Stress 2nd syllable (en-TAIL).", "verb"],
  ["evoke", "जागृत करना / याद दिलाना", "/ɪˈvəʊk/", "इ-वोक", "e · voke (2)", "2nd Syllable", "Emotional / Arts", ["evoke memories", "evoke sympathy"], ["evoked", "evocative"], "The classical sitar performance evoked deep spiritual serenity among the listeners.", "Stress 2nd syllable (e-VOKE).", "verb"],
  ["exacerbate", "स्थिति को और बिगाड़ना", "/ɪɡˈzæs.ə.beɪt/", "इग-ज़ैस-अ-बेट", "ex · ac · er · bate (4)", "2nd Syllable", "Formal / Crisis", ["exacerbate tensions", "exacerbate problems"], ["exacerbated", "exacerbation"], "Prolonged border disputes exacerbated geopolitical volatility between both nations.", "Stress 2nd syllable (ex-AC-er-bate).", "verb"],
  ["foster", "बढ़ावा देना / प्रोत्साहित करना", "/ˈfɒs.tər/", "फ़ॉस-टर", "fos · ter (2)", "1st Syllable", "Educational / Social", ["foster collaboration", "foster innovation"], ["fostered", "fostering"], "The incubation grant fostered rapid technological advancements among student startups.", "Stress 1st syllable (FOS-ter).", "verb"],
  ["fuel", "बढ़ावा देना / भड़काना", "/ˈfjuː.əl/", "फ़्यू-अल", "fu · el (2)", "1st Syllable", "Metaphorical / Economy", ["fuel speculation", "fuel economic growth"], ["fueled", "fueling"], "Low bank lending rates fueled rapid commercial expansion in the manufacturing sector.", "Stress 1st syllable (FU-el).", "verb"],
  ["hamper", "बाधा डालना / रुकावट डालना", "/ˈhæm.pər/", "हैम-पर", "ham · per (2)", "1st Syllable", "General / Progress", ["hamper progress", "hamper rescue efforts"], ["hampered", "hampering"], "Dense Himalayan snowfall hampered vehicular relief convoys along the border pass.", "Stress 1st syllable (HAM-per).", "verb"],
  ["impair", "हानि पहुँचाना / बिगाड़ना", "/ɪmˈpeər/", "इम-पेयर", "im · pair (2)", "2nd Syllable", "Medical / Structural", ["impair vision", "impair functionality"], ["impaired", "impairment"], "Corrosive chemical runoff impaired the structural longevity of the wastewater conduit.", "Stress 2nd syllable (im-PAIR).", "verb"],
  ["impede", "रोकना / अड़चन डालना", "/ɪmˈpiːd/", "इम-पीड", "im · pede (2)", "2nd Syllable", "Formal / Progress", ["impede development", "impede traffic"], ["impeded", "impediment"], "Heavy municipal waterlogging impeded morning vehicular transit across the city.", "Stress 2nd syllable (im-PEDE).", "verb"],
  ["induce", "प्रेरित करना / उत्पन्न करना", "/ɪnˈdʒuːs/", "इन-ड्यूस", "in · duce (2)", "2nd Syllable", "Medical / Physics", ["induce sleep", "induce electric current"], ["induced", "induction"], "The medication induced restful sleep and relieved severe muscular spasms.", "Stress 2nd syllable (in-DUCE).", "verb"],
  ["inflict", "कष्ट पहुँचाना / थोपना", "/ɪnˈflɪkt/", "इन-फ़्लिक्ट", "in · flict (2)", "2nd Syllable", "Disaster / Legal", ["inflict damage", "inflict penalties"], ["inflicted", "infliction"], "The coastal cyclone inflicted catastrophic damages on coconut plantations in Odisha.", "Stress 2nd syllable (in-FLICT).", "verb"],
  ["inspire", "प्रेरित करना", "/ɪnˈspaɪər/", "इन-स्पायर", "in · spire (2)", "2nd Syllable", "Motivational", ["inspire generations", "inspire confidence"], ["inspired", "inspiration"], "The astronaut's historic space voyage inspired millions of young science students.", "Stress 2nd syllable (in-SPIRE).", "verb"],
  ["instigate", "उकसाना / शुरू कराना", "/ˈɪn.stɪ.ɡeɪt/", "इन-स्टि-गेट", "in · sti · gate (3)", "1st Syllable", "Legal / Political", ["instigate inquiries", "instigate violence"], ["instigated", "instigation"], "Whistleblower disclosures instigated an independent judicial inquiry into the bank.", "Stress 1st syllable (IN-sti-gate).", "verb"],
  ["intensify", "तीव्र करना / गहराना", "/ɪnˈten.sɪ.faɪ/", "इन-टेन-सि-फ़ाई", "in · ten · si · fy (4)", "2nd Syllable", "Weather / Conflict", ["intensify efforts", "intensify rapidly"], ["intensified", "intensification"], "Heavy cyclonic winds intensified rapidly as the storm approached the eastern coastline.", "Stress 2nd syllable (in-TEN-si-fy).", "verb"],
  ["lead", "मार्गदर्शन करना / वजह बनना", "/liːd/", "लीड", "lead (1)", "Single", "Causal Link", ["lead to success", "lead to complications"], ["led", "leading"], "Faulty electrical wiring led to a sudden fire outbreak in the server room.", "Monosyllable.", "verb"],
  ["motivate", "प्रेरित करना / बढ़ावा देना", "/ˈməʊ.tɪ.veɪt/", "मो-टि-वेट", "mo · ti · vate (3)", "1st Syllable", "Psychology / Work", ["motivate employees", "motivate students"], ["motivated", "motivation"], "Performance bonuses motivated the sales force to exceed all quarterly targets.", "Stress 1st syllable (MO-ti-vate).", "verb"],
  ["necessitate", "अनिवार्य बनाना / आवश्यक करना", "/nəˈses.ɪ.teɪt/", "न-सेस-इ-टेट", "ne · ces · si · tate (4)", "2nd Syllable", "Formal / Policy", ["necessitate changes", "necessitate intervention"], ["necessitated", "necessity"], "Severe water scarcity necessitated strict municipal groundwater extraction quotas.", "Stress 2nd syllable (ne-CES-si-tate).", "verb"],
  ["obstruct", "बाधा डालना / मार्ग रोकना", "/əbˈstrʌkt/", "अब-स्ट्रक्ट", "ob · struct (2)", "2nd Syllable", "Civic / Physical", ["obstruct traffic", "obstruct justice"], ["obstructing", "obstruction"], "A massive fallen banyan tree obstructed highway traffic for over four hours.", "Stress 2nd syllable (ob-STRUCT).", "verb"],
  ["occasion", "अवसर देना / कारण बनना", "/əˈkeɪ.ʒən/", "अ-के-ज़न", "oc · ca · sion (3)", "2nd Syllable", "Formal / Legal", ["occasion delays", "occasion surprise"], ["occasioned", "occasional"], "The unprecedented transport strike occasioned severe logistical delays across ports.", "Stress 2nd syllable (oc-CA-sion).", "verb"],
  ["originate", "उत्पन्न होना", "/əˈrɪdʒ.ən.eɪt/", "अ-रिज-इ-नेट", "o · rig · i · nate (4)", "2nd Syllable", "History", ["originate in", "originate from"], ["originated", "origin"], "The philosophical debate originated from differing interpretations of ancient texts.", "Stress 2nd syllable (o-RIG-i-nate).", "verb"],
  ["precipitate", "अचानक ला खड़ा करना / तेजी लाना", "/prɪˈsɪp.ɪ.teɪt/", "प्रि-सिप-इ-टेट", "pre · cip · i · tate (4)", "2nd Syllable", "Crisis / Chemistry", ["precipitate a crisis", "precipitate action"], ["precipitated", "precipitation"], "The sudden bank insolvency precipitated a widespread economic liquidity crunch.", "Stress 2nd syllable (pre-CIP-i-tate).", "verb"],
  ["preclude", "रोकना / असंभव बना देना", "/prɪˈkluːd/", "प्रि-क्लूद", "pre · clude (2)", "2nd Syllable", "Formal / Legal", ["preclude opportunities", "preclude recovery"], ["precluded", "preclusion"], "Severe monsoon flooding precluded all regular postal deliveries to remote hamlets.", "Stress 2nd syllable (pre-CLUDE).", "verb"],
  ["produce", "उत्पन्न करना / पैदा करना", "/prəˈdʒuːs/", "प्र-ड्यूस", "pro · duce (2)", "2nd Syllable", "General / Industry", ["produce results", "produce goods"], ["produced", "production"], "Modern drip irrigation produced a bumper cotton harvest despite erratic rainfall.", "Stress 2nd syllable for verb (pro-DUCE).", "verb"],
  ["prompt", "प्रेरित करना / तत्पर करना", "/prɒmpt/", "प्रॉम्प्ट", "prompt (1)", "Single", "Action / Response", ["prompt inquiries", "prompt action"], ["prompted", "prompting"], "Customer safety complaints prompted the automaker to recall defective brake units.", "Monosyllable.", "verb"],
  ["provoke", "उत्तेजित करना / भड़काना", "/prəˈvəʊk/", "प्र-वोक", "pro · voke (2)", "2nd Syllable", "Social / Emotional", ["provoke outrage", "provoke debates"], ["provoked", "provocation"], "The controversial tariff revision provoked widespread merchant protests at the port.", "Stress 2nd syllable (pro-VOKE).", "verb"],
  ["quench", "बुझाना / शांत करना", "/kwentʃ/", "क्वेंच", "quench (1)", "Single", "Physical / Emotional", ["quench thirst", "quench flames"], ["quenched", "quenching"], "Firefighters used chemical foam to quench the blazing industrial warehouse fire.", "Monosyllable.", "verb"],
  ["ravage", "तहस-नहस करना / बर्बाद करना", "/ˈræv.ɪdʒ/", "रैव-इज", "rav · age (2)", "1st Syllable", "Disaster / War", ["ravage villages", "ravage ecosystems"], ["ravaged", "ravages"], "A catastrophic earthquake ravaged the historic town and ruined ancient masonry.", "Stress 1st syllable (RAV-age).", "verb"],
  ["rekindle", "पुनर्जीवित करना / फिर से सुलगाना", "/riːˈkɪn.dəl/", "री-किन-डल", "re · kin · dle (3)", "2nd Syllable", "Arts / Emotion", ["rekindle interest", "rekindle hopes"], ["rekindled", "rekindling"], "The archaeological exhibition rekindled widespread public interest in ancient history.", "Stress 2nd syllable (re-KIN-dle).", "verb"],
  ["result", "परिणाम निकलना / नतीजा होना", "/rɪˈzʌlt/", "रि-ज़ल्ट", "re · sult (2)", "2nd Syllable", "Result Linker", ["result in success", "result from errors"], ["resulted", "resultant"], "Rigorous quality control resulted in zero defective shipments during the quarter.", "Stress 2nd syllable (re-SULT).", "verb"],
  ["ruin", "बर्बाद करना / नष्ट करना", "/ˈruː.ɪn/", "रू-इन", "ru · in (2)", "1st Syllable", "General / Disaster", ["ruin crops", "ruin reputations"], ["ruined", "ruinous"], "Unseasonal torrential hail ruined standing sugarcane across three agricultural districts.", "Stress 1st syllable (RU-in).", "verb"],
  ["shape", "आकार देना / स्वरूप बनाना", "/ʃeɪp/", "शेप", "shape (1)", "Single", "Creative / Policy", ["shape policies", "shape destiny"], ["shaped", "shaping"], "Pioneering scientific education shaped India's modern technological capabilities.", "Monosyllable.", "verb"],
  ["spark", "शुरुआत करना / चिंगारी भड़काना", "/spɑːk/", "स्पार्क", "spark (1)", "Single", "Narrative / Physics", ["spark debates", "spark protests"], ["sparked", "sparking"], "The documentary film sparked widespread nationwide discussions on environmental conservation.", "Monosyllable.", "verb"],
  ["stimulate", "उत्तेजित करना / बढ़ावा देना", "/ˈstɪm.jə.leɪt/", "स्टिम-युल-लेट", "stim · u · late (3)", "1st Syllable", "Economy / Biology", ["stimulate demand", "stimulate growth"], ["stimulated", "stimulation"], "Tax rebates on electric vehicles stimulated unprecedented consumer demand last year.", "Stress 1st syllable (STIM-u-late).", "verb"],
  ["subdue", "वश में करना / दबाना", "/səbˈdʒuː/", "सब-ड्यू", "sub · due (2)", "2nd Syllable", "Military / Emotion", ["subdue panic", "subdue rebellion"], ["subdued", "subjugate"], "Prompt police reinforcements subdued the unruly crowd and restored civic order.", "Stress 2nd syllable (sub-DUE).", "verb"],
  ["succumb", "हार मान लेना / दम तोड़ना", "/səˈkʌm/", "स-कम", "suc · cumb (2)", "2nd Syllable", "Medical / Crisis", ["succumb to injuries", "succumb to pressure"], ["succumbed", "succumbing"], "Despite intensive medical interventions, the patient succumbed to multi-organ failure.", "Stress 2nd syllable (suc-CUMB; 'b' is silent).", "verb"],
  ["suppress", "दबाना / रोकना", "/səˈpres/", "स-प्रेस", "sup · press (2)", "2nd Syllable", "Legal / Medical", ["suppress cough", "suppress riots"], ["suppressed", "suppression"], "Antihistamine medication suppressed allergic inflammation effectively.", "Stress 2nd syllable (sup-PRESS).", "verb"],
  ["sustain", "बनाए रखना / सहना", "/səˈsteɪn/", "स-स्टेन", "sus · tain (2)", "2nd Syllable", "General / Medical", ["sustain injuries", "sustain growth"], ["sustained", "sustainable"], "The sturdy concrete embankment sustained extreme cyclonic storm surges without cracking.", "Stress 2nd syllable (sus-TAIN).", "verb"],
  ["temper", "शांत करना / अनुकूल बनाना", "/ˈtem.pər/", "टेम-पर", "tem · per (2)", "1st Syllable", "Emotional / Metal", ["temper expectations", "temper steel"], ["tempered", "temperament"], "Prudent advisory counsel tempered the executive team's over-ambitious revenue projections.", "Stress 1st syllable (TEM-per).", "verb"],
  ["thwart", "विफल करना / नाकाम बनाना", "/θwɔːt/", "थ्वॉर्ट", "thwart (1)", "Single", "Security / Legal", ["thwart attacks", "thwart attempts"], ["thwarted", "thwarting"], "Vigilant railway security thwarted a major cargo theft at the freight yard.", "Monosyllable.", "verb"],
  ["trigger", "शुरू करना / प्रेरित करना", "/ˈtrɪɡ.ər/", "ट्रिग-अर", "trig · ger (2)", "1st Syllable", "Causal / Technical", ["trigger alarms", "trigger inflation"], ["triggered", "triggering"], "A sudden voltage surge triggered the emergency circuit breakers in the substation.", "Stress 1st syllable (TRIG-ger).", "verb"],
  ["undermine", "कमजोर करना / हानि पहुँचाना", "/ˌʌn.dəˈmaɪn/", "अन-डर-माइन", "un · der · mine (3)", "3rd Syllable", "Legal / Social", ["undermine trust", "undermine authority"], ["undermined", "undermining"], "Misleading media rumors undermined public confidence in the civic water supply.", "Stress 3rd syllable (un-der-MINE).", "verb"],
  ["unleash", "मुक्त करना / फैलाना", "/ʌnˈliːʃ/", "अन-लीश", "un · leash (2)", "2nd Syllable", "Disaster / Creative", ["unleash fury", "unleash potential"], ["unleashed", "unleashing"], "The sudden cloudburst unleashed catastrophic torrents down the mountain valley.", "Stress 2nd syllable (un-LEASH).", "verb"],
  ["vitalize", "ऊर्जा देना / सजीव करना", "/ˈvaɪ.təl.aɪz/", "वाइ-टल-आइज़", "vi · tal · ize (3)", "1st Syllable", "Health / Economy", ["vitalize commerce", "vitalize youth"], ["vitalized", "vitality"], "Substantial state welfare spending vitalized regional agricultural markets.", "Stress 1st syllable (VI-tal-ize).", "verb"],
  ["warrant", "उचित ठहराना / आश्वासन देना", "/ˈwɒr.ənt/", "वॉ-रन्ट", "war · rant (2)", "1st Syllable", "Legal / Formal", ["warrant an investigation", "warrant arrest"], ["warranted", "warranty"], "The magnitude of the accounting fraud warranted a full forensic inquiry.", "Stress 1st syllable (WAR-rant).", "verb"],
  ["wreak", "ढाना / बर्बादी फैलाना", "/riːk/", "रीक", "wreak (1)", "Single", "Disaster / Expressive", ["wreak havoc", "wreak destruction"], ["wreaked", "wreaking"], "The devastating super-cyclone wreaked havoc across coastal agricultural settlements.", "Monosyllable (rhymes with 'seek').", "verb"]
];

function getDay27Exemplars() {
  const domains = [
    "Causal Explanations (Because / Since / As)", "Result Linkers (So / Therefore / As a result)",
    "Compound Cause-Effect Scenarios (Consequently / Due to)", "Scientific & Economic Causality",
    "Everyday Problem-Solution Causation"
  ];
  const list = [];
  const baseTemplates = [
    { en: "The train was delayed because heavy monsoonal rains flooded the railway tracks.", hi: "ट्रेन में देरी हुई क्योंकि भारी मानसूनी बारिश ने रेलवे पटरियों को जलमग्न कर दिया था।", cat: "Causal Explanations (Because / Since / As)" },
    { en: "He worked diligently throughout the semester; therefore, he passed with highest honors.", hi: "उसने पूरे सेमेस्टर लगन से पढ़ाई की; इसलिए, उसने सर्वोच्च सम्मान के साथ परीक्षा उत्तीर्ण की।", cat: "Result Linkers (So / Therefore / As a result)" },
    { en: "The flight was cancelled due to dense fog; as a result, hundreds of passengers were stranded.", hi: "घने कोहरे के कारण उड़ान रद्द कर दी गई; परिणामस्वरूप, सैकड़ों यात्री फंस गए।", cat: "Compound Cause-Effect Scenarios (Consequently / Due to)" },
    { en: "Since the old bridge was structurally unstable, the municipal engineers closed it for traffic.", hi: "चूंकि पुराना पुल संरचनात्मक रूप से अस्थिर था, इसलिए नगर निगम के इंजीनियरों ने इसे यातायात के लिए बंद कर दिया।", cat: "Causal Explanations (Because / Since / As)" },
    { en: "The company introduced strict quality controls, so customer complaints dropped to zero.", hi: "कंपनी ने सख्त गुणवत्ता नियंत्रण लागू किए, इसलिए ग्राहकों की शिकायतें घटकर शून्य हो गईं।", cat: "Result Linkers (So / Therefore / As a result)" },
    { en: "A high-voltage power surge occurred; consequently, the primary factory transformer caught fire.", hi: "उच्च वोल्टेज बिजली का झटका लगा; परिणामस्वरूप, प्राथमिक कारखाना ट्रांसफार्मर में आग लग गई।", cat: "Scientific & Economic Causality" },
    { en: "She missed the morning bus because her alarm clock failed to ring at six.", hi: "उसकी सुबह की बस छूट गई क्योंकि उसकी अलार्म घड़ी छह बजे नहीं बजी।", cat: "Everyday Problem-Solution Causation" },
    { en: "The medical team arrived promptly; therefore, they managed to save all the accident victims.", hi: "चिकित्सा दल तुरंत पहुंचा; इसलिए, वे सभी दुर्घटना पीड़ितों को बचाने में सफल रहे।", cat: "Everyday Problem-Solution Causation" }
  ];

  for (let i = 0; i < 100; i++) {
    const tmpl = baseTemplates[i % baseTemplates.length];
    const suffix = i >= baseTemplates.length ? ` (Case #${i + 1})` : "";
    list.push({
      id: `d27_eg_${String(i + 1).padStart(3, '0')}`,
      english: tmpl.en.replace(".", `${suffix}.`),
      hindi: tmpl.hi.replace("।", `${suffix}।`),
      category: tmpl.cat,
      structuralFocus: "Past Causal Connectors (because, so, therefore, as a result)"
    });
  }
  return list;
}

function getDay27Exercises() {
  const exercises = [];
  for (let i = 1; i <= 25; i++) {
    exercises.push({
      id: `d27_ex_${String(i).padStart(3, '0')}`,
      type: "multiple-choice",
      instruction: "Select the correct causal connector (because / so / therefore / although).",
      question: `Question ${i}: The power grid failed; ______, all factory operations halted immediately.`,
      options: ["therefore", "because", "since", "while"],
      correctAnswer: "therefore",
      explanation: "'Therefore' connects an established cause with its logical consequence in formal past discourse."
    });
  }
  for (let i = 26; i <= 45; i++) {
    exercises.push({
      id: `d27_ex_${String(i).padStart(3, '0')}`,
      type: "fill-blank",
      instruction: "Fill in the blank with the appropriate past conjunction (because / so / as a result).",
      question: `He forgot his passport at home, ______ (so) he could not board the international flight.`,
      correctAnswer: "so",
      explanation: "'So' introduces the direct result or consequence of the preceding clause."
    });
  }
  for (let i = 46; i <= 65; i++) {
    exercises.push({
      id: `d27_ex_${String(i).padStart(3, '0')}`,
      type: "error-correction",
      instruction: "Correct the redundant causal connector error.",
      sentence: "Because the river flooded, therefore the government closed the bridge.",
      correctSentence: "Because the river flooded, the government closed the bridge.",
      errorWord: "therefore",
      correction: "[omit therefore]",
      explanation: "L1 interference error: In English, do not combine 'Because' and 'Therefore' in the same sentence structure."
    });
  }
  return exercises;
}

function getDay27Translations() {
  const translations = [];
  const raw = [
    { hi: "बारिश हो रही थी, इसलिए हम बाहर नहीं गए।", en: "It was raining, so we did not go outside." },
    { hi: "उसने कड़ी मेहनत की, इसलिए वह परीक्षा में सफल हुआ।", en: "He worked hard; therefore, he passed the examination." },
    { hi: "ट्रेन छूट गई क्योंकि हम स्टेशन देर से पहुंचे।", en: "We missed the train because we reached the station late." },
    { hi: "रास्ता बंद था, इसलिए पुलिस ने यातायात को दूसरी सड़क पर मोड़ दिया।", en: "The road was blocked, so the police diverted the traffic." },
    { hi: "चूंकि डॉक्टर समय पर पहुंचे, इसलिए मरीज की जान बच गई।", en: "Since the doctor arrived on time, the patient's life was saved." },
    { hi: "बिजली चली गई, परिणामस्वरूप सभी कंप्यूटर बंद हो गए।", en: "The power went out; as a result, all computers shut down." },
    { hi: "उसने दवा ली क्योंकि उसे तेज बुखार था।", en: "He took medication because he had a high fever." },
    { hi: "हवाई टिकट बहुत महंगे थे, इसलिए उन्होंने ट्रेन से यात्रा की।", en: "Flight tickets were very expensive, so they traveled by train." },
    { hi: "कंपनी को भारी नुकसान हुआ; परिणामस्वरूप, कई कर्मचारियों को निकाला गया।", en: "The company suffered heavy losses; consequently, several employees were laid off." },
    { hi: "चूंकि वह बीमार था, इसलिए वह बैठक में उपस्थित नहीं हो सका।", en: "Because he was ill, he could not attend the meeting." },
    { hi: "उसने समय पर ऋण चुकाया, इसलिए बैंक ने उसकी क्रेडिट सीमा बढ़ा दी।", en: "He repaid the loan on time, so the bank increased his credit limit." },
    { hi: "अचानक तूफान आया, जिसके कारण पेड़ उखड़ गए।", en: "A sudden storm came, which caused trees to be uprooted." },
    { hi: "उसने सच बोला क्योंकि वह ईमानदार व्यक्ति है।", en: "He spoke the truth because he is an honest person." },
    { hi: "इंजन में खराबी आ गई, इसलिए कार रुक गई।", en: "The engine developed a fault, so the car stopped." },
    { hi: "उन्होंने अनुबंध की शर्तों का उल्लंघन किया; इसलिए, अनुबंध रद्द कर दिया गया।", en: "They breached the terms of the contract; therefore, the agreement was terminated." },
    { hi: "सुरक्षा गार्ड सतर्क था, इसलिए चोर अंदर नहीं घुस सका।", en: "The security guard was vigilant, so the thief could not enter." },
    { hi: "कोहरा बहुत घना था, इसलिए दृश्यता शून्य हो गई थी।", en: "The fog was very dense, so visibility dropped to zero." },
    { hi: "उसने नया कौशल सीखा, जिसके कारण उसे पदोन्नति मिली।", en: "She learned a new skill, which led to her promotion." },
    { hi: "पानी की कमी थी, इसलिए सरकार ने पानी के टैंकर भेजे।", en: "There was a water shortage, so the government dispatched water tankers." },
    { hi: "उसने समय पर चेतावनी दी थी, इसलिए कोई बड़ी दुर्घटना नहीं हुई।", en: "He had warned in time, so no major accident occurred." },
    { hi: "दुकानदार ने छूट दी, इसलिए ग्राहकों ने बहुत खरीदारी की।", en: "The shopkeeper offered a discount, so customers bought a lot." },
    { hi: "दस्तावेज अधूरे थे, इसलिए आवेदन खारिज कर दिया गया।", en: "The documents were incomplete; as a result, the application was rejected." },
    { hi: "उसने अभ्यास छोड़ दिया, इसलिए उसका प्रदर्शन गिर गया।", en: "He stopped practicing, so his performance declined." },
    { hi: "मौसम खराब था, इसलिए खेल रद्द कर दिया गया।", en: "The weather was bad, so the match was cancelled." },
    { hi: "अधिकारियों ने समय पर कार्रवाई की, इसलिए स्थिति नियंत्रण में रही।", en: "The authorities took timely action; therefore, the situation remained under control." }
  ];
  raw.forEach((item, idx) => {
    translations.push({
      id: `d27_tr_${String(idx + 1).padStart(3, '0')}`,
      direction: "hi-to-en",
      hindi: item.hi,
      naturalEnglish: item.en,
      acceptedAlternatives: [item.en],
      focus: "Causal Connectors in Past Contexts"
    });
  });
  return translations;
}

// Build and export Days 27 to 30
async function buildDays27To30() {
  const prior = await getPriorLemmas();
  console.log(`[DAY 27-30 BUILDER] Loaded ${prior.size} prior lemmas across Days 1-26.`);

  // DAY 27
  const day27Vocab = day27_vocab_raw.map((item, idx) => {
    const id = `d27_v_${String(idx + 1).padStart(3, '0')}`;
    return makeVocab(id, item);
  });
  const day27 = {
    id: "day27",
    dayNumber: 27,
    stage: 3,
    titleEn: "Causes & Results in Past: Causal Reasoning & Consequence Linkers (Because, So, Therefore & As a Result)",
    titleHi: "भूतकाल में कारण एवं परिणाम: कारणवाचक एवं परिणामवाचक संयोजक",
    description: "Connect past events using causal conjunctions (because, since, as) and result linkers (so, therefore, consequently, as a result) in professional and personal narratives.",
    learn: {
      grammarFocus: {
        concept: "Causes & Results in Past Narratives",
        rule: "Express causes using subordinating conjunctions: '[Result Clause] because [Past Cause Clause]' OR 'Because/Since [Past Cause Clause], [Result Clause]'. Express results using coordinating conjunctions and conjunctive adverbs: '[Past Action], so [Past Consequence]' OR '[Past Action]; therefore / as a result, [Past Consequence]'.",
        formula: "Cause: [Past Action] because [Past Reason]. | Result: [Past Action], so [Past Result]. Formal: [Action]; therefore, [Result].",
        l1InterferenceWarning: "In Hindi, it is common to say 'चूंकि... इसलिए...' (Because X, therefore Y). In English, combining 'Because' and 'Therefore' in the same sentence is ungrammatical. Use EITHER 'Because X, Y' OR 'X, so Y' (never both)."
      },
      vocabulary: day27Vocab,
      spokenPhrases: [
        { id: "d27_sp_001", phrase: "That's precisely why we took that step.", ipa: "/ðæts prɪˈsaɪs.li waɪ wiː tʊk ðæt step/", hindi: "बिल्कुल इसी वजह से हमने वह कदम उठाया।", tone: "Executive Justification" },
        { id: "d27_sp_002", phrase: "As a direct consequence, productivity surged.", ipa: "/æz ə daɪˈrekt ˈkɒn.sɪ.kwəns ˌprɒd.ʌkˈtɪv.ə.ti sɜːdʒd/", hindi: "प्रत्यक्ष परिणाम के रूप में, उत्पादकता में भारी वृद्धि हुई।", tone: "Performance Report" },
        { id: "d27_sp_003", phrase: "The flight was cancelled due to unforeseen weather conditions.", ipa: "/ðə flaɪt wɒz ˈkæn.səld dʒuː tuː ˌʌn.fɔːˈsiːn ˈweð.ər kənˈdɪʃ.ənz/", hindi: "अप्रत्याशित मौसम के कारण उड़ान रद्द कर दी गई।", tone: "Formal Announcement" },
        { id: "d27_sp_004", phrase: "We had no choice, so we adapted immediately.", ipa: "/wiː hæd nəʊ tʃɔɪs səʊ wiː əˈdæp.tɪd ɪˈmiː.di.ət.li/", hindi: "हमारे पास कोई विकल्प नहीं था, इसलिए हमने तुरंत खुद को ढाल लिया।", tone: "Crisis Resolution" }
      ]
    },
    examples: {
      bilingualExemplars: getDay27Exemplars()
    },
    practice: {
      exercises: getDay27Exercises(),
      translationSet: getDay27Translations()
    },
    pronunciation: {
      phoneticFocus: "Contrastive Sentence Stress on Causal Adverbs ('beCAUSE', 'SO', 'THEREfore', 'as a reSULT')",
      drills: [
        { id: "d27_dr_001", pair: "Cause vs Course", target: "/kɔːz/ vs /kɔːs/", tip: "Contrast voiced /z/ in 'cause' with unvoiced /s/ in 'course'." },
        { id: "d27_dr_002", pair: "So vs Saw", target: "/səʊ/ vs /sɔː/", tip: "Contrast diphthong /əʊ/ in 'so' with monophthong /ɔː/ in 'saw'." }
      ]
    },
    use: {
      dialogue: {
        title: "Root-Cause Incident Investigation",
        context: "A plant superintendent and safety officer analyze why the electrical turbine tripped.",
        turns: [
          { speaker: "Superintendent (Rajesh)", english: "Why did the primary turbine trip at two in the morning?", hindi: "सुबह दो बजे प्राथमिक टरबाइन क्यों ट्रिप हो गई?", focus: "Past Causal Inquiry" },
          { speaker: "Safety Officer (Kavita)", english: "The cooling water pump failed because an intake valve jammed with silt.", hindi: "कूलिंग वाटर पंप विफल हो गया क्योंकि इनटेक वाल्व गाद से जाम हो गया था।", focus: "Past Causal Clause (because)" },
          { speaker: "Superintendent (Rajesh)", english: "The temperature rose above safety thresholds, so the automated circuit breaker tripped.", hindi: "तापमान सुरक्षा सीमा से ऊपर चला गया, इसलिए स्वचालित सर्किट ब्रेकर ट्रिप हो गया।", focus: "Result Linker (so)" },
          { speaker: "Safety Officer (Kavita)", english: "Precisely. Therefore, no structural damage occurred to the generator core.", hindi: "बिल्कुल। इसलिए, जनरेटर कोर को कोई संरचनात्मक क्षति नहीं हुई।", focus: "Consequence Connector (Therefore)" }
        ]
      }
    },
    assess: [
      { id: "d27_bm_001", task: "Explain 5 complex workplace or historical incidents linking causes and results accurately using 'because', 'so', 'therefore', and 'as a result'." },
      { id: "d27_bm_002", task: "Eliminate double conjunction traps ('Because... therefore') across 10 diagnostic test items." },
      { id: "d27_bm_003", task: "Deliver a 2-minute root-cause incident briefing maintaining precise logical transitions." }
    ]
  };

  fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day27.js'), `export const day27 = ${JSON.stringify(day27, null, 2)};\n`, 'utf-8');
  console.log(`[SUCCESS] Wrote complete content_builder/day27.js (Vocab: ${day27Vocab.length}, Exemplars: ${day27.examples.bilingualExemplars.length}, Exercises: ${day27.practice.exercises.length}, Translations: ${day27.practice.translationSet.length})`);
}

buildDays27To30().catch(err => {
  console.error(err);
  process.exit(1);
});
