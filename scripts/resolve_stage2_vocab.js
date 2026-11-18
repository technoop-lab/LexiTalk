// scripts/resolve_stage2_vocab.js
import fs from 'fs';
import path from 'path';

async function main() {
  const stage1Set = new Set();
  for (let i = 1; i <= 10; i++) {
    const num = i < 10 ? '0' + i : '' + i;
    const mod = await import(`../content_builder/day${num}.js`);
    const day = mod[`day${num}`] || mod.default;
    if (day && day.learn && day.learn.vocabulary) {
      day.learn.vocabulary.forEach(v => {
        const w = (v.word || v.term || v.lemma || v.wordForm || '').toLowerCase();
        if (w) stage1Set.add(w);
      });
    }
  }
  console.log('Stage 1 total unique words in set:', stage1Set.size);

  const [d11_15, d16_20] = await Promise.all([
    import('./stage2_data_days11_15_clean.js'),
    import('./stage2_data_days16_20_clean.js')
  ]);

  const rawDayData = [
    { day: 11, terms: d11_15.getDay11RawTerms() },
    { day: 12, terms: d11_15.getDay12RawTerms() },
    { day: 13, terms: d11_15.getDay13RawTerms() },
    { day: 14, terms: d11_15.getDay14RawTerms() },
    { day: 15, terms: d11_15.getDay15RawTerms() },
    { day: 16, terms: d16_20.getDay16RawTerms() },
    { day: 17, terms: d16_20.getDay17RawTerms() },
    { day: 18, terms: d16_20.getDay18RawTerms() },
    { day: 19, terms: d16_20.getDay19RawTerms() },
    { day: 20, terms: d16_20.getDay20RawTerms() }
  ];

  // Global set of all used words across Stage 1 and Stage 2
  const usedWords = new Set(stage1Set);

  // Replacement vocabulary pool for any collision
  const replacementPool = [
    ["originate", "उत्पन्न होना / आरंभ होना", "/əˈrɪdʒ.ɪ.neɪt/", "अ-रिज-इ-नेट", "o · rig · i · nate (4)", "2nd Syllable", "Origins / History", ["originate in", "originate from"], ["origin"], "Many classical ragas originate from ancient temple traditions.", "Stress 2nd syllable (o-RIG-i-nate).", "verb"],
    ["inaugurate", "उद्घाटन करना / शुभारंभ करना", "/ɪˈnɔː.ɡjə.reɪt/", "इ-नॉ-ग्यु-रेट", "in · au · gu · rate (4)", "2nd Syllable", "Events / Civic", ["inaugurate a bridge", "inaugurate an exhibition"], ["inauguration"], "The governor will inaugurate the national book fair on Friday.", "Stress 2nd syllable (in-AU-gu-rate).", "verb"],
    ["commence", "प्रारंभ करना / शुरू होना", "/kəˈmens/", "क-मेन्स", "com · mence (2)", "2nd Syllable", "Formal / Business", ["commence work", "commence proceedings"], ["commencement"], "The university examinations will commence at nine sharp tomorrow morning.", "Stress 2nd syllable (com-MENCE).", "verb"],
    ["terminate", "समाप्त करना / अंत होना", "/ˈtɜː.mɪ.neɪt/", "टर-मि-नेट", "ter · mi · nate (3)", "1st Syllable", "Legal / Contracts", ["terminate a contract", "terminate employment"], ["termination"], "Either party may terminate the lease by giving two months' notice.", "Stress 1st syllable (TER-mi-nate).", "verb"],
    ["relinquish", "त्याग देना / छोड़ देना", "/rɪˈlɪŋ.kwɪʃ/", "रि-लिंग-क्विश", "re · lin · quish (3)", "2nd Syllable", "Formal / Rights", ["relinquish control", "relinquish rights"], [], "He decided to relinquish his executive post to pursue social work.", "Stress 2nd syllable (re-LIN-quish).", "verb"],
    ["forsake", "त्यागना / छोड़ना", "/fəˈseɪk/", "फ-सेक", "for · sake (2)", "2nd Syllable", "Literary / Morals", ["forsake duties", "forsake a friend"], [], "True mentors never forsake their students in moments of difficulty.", "Stress 2nd syllable (for-SAKE).", "verb"],
    ["embrace", "गले लगाना / सहर्ष स्वीकार करना", "/ɪmˈbreɪs/", "इम-ब्रेस", "em · brace (2)", "2nd Syllable", "Universal / Mindset", ["embrace change", "embrace diversity"], [], "Modern businesses must embrace digital innovation to stay competitive.", "Stress 2nd syllable (em-BRACE).", "verb"],
    ["relinquishment", "अधिकार त्याग", "/rɪˈlɪŋ.kwɪʃ.mənt/", "रि-लिंग-क्विश-मन्ट", "re · lin · quish · ment (4)", "2nd Syllable", "Legal / Property", ["deed of relinquishment"], ["relinquish"], "The brothers signed a deed of relinquishment for the ancestral estate.", "Stress 2nd syllable (re-LIN-quish-ment).", "noun"],
    ["divergence", "विचलन / भिन्नता", "/daɪˈvɜː.dʒəns/", "दाइ-वर-जन्स", "di · ver · gence (3)", "2nd Syllable", "Math / Ideas", ["divergence of opinion", "growing divergence"], ["diverge"], "A sharp divergence of opinion emerged during the board discussion.", "Stress 2nd syllable (di-VER-gence).", "noun"],
    ["convergence", "अभिसरण / मेल", "/kənˈvɜː.dʒəns/", "कन-वर-जन्स", "con · ver · gence (3)", "2nd Syllable", "Tech / Media", ["digital convergence", "convergence of interests"], ["converge"], "The convergence of telecommunications and computing transformed commerce.", "Stress 2nd syllable (con-VER-gence).", "noun"],
    ["juxtaposition", "तुलना के लिए निकटता", "/ˌdʒʌk.stə.pəˈzɪʃ.ən/", "जक्स-त-प-ज़िश-अन", "jux · ta · po · si · tion (5)", "4th Syllable", "Art / Literature", ["striking juxtaposition"], ["juxtapose"], "The museum exhibition featured a striking juxtaposition of old and new art.", "Stress 4th syllable (jux-ta-po-SI-tion).", "noun"],
    ["dichotomy", "दोतरफा विभाजन / द्विशाखन", "/daɪˈkɒt.ə.mi/", "दाइ-कॉत-अ-मी", "di · chot · o · my (4)", "2nd Syllable", "Philosophy / Logic", ["false dichotomy", "sharp dichotomy"], [], "Do not fall for the false dichotomy between economic growth and environmental care.", "Stress 2nd syllable (di-CHOT-o-my).", "noun"],
    ["disseminate", "प्रसारित करना / फैलाना", "/dɪˈsem.ɪ.neɪt/", "दि-सेम-इ-नेट", "dis · sem · i · nate (4)", "2nd Syllable", "Information / Science", ["disseminate knowledge", "disseminate news"], ["dissemination"], "Public health agencies disseminate vital wellness guidelines during monsoons.", "Stress 2nd syllable (dis-SEM-i-nate).", "verb"],
    ["promulgate", "घोषणा करना / जारी करना", "/ˈprɒm.əl.ɡeɪt/", "प्रॉम-अल-गेट", "prom · ul · gate (3)", "1st Syllable", "Law / Governance", ["promulgate an ordinance", "promulgate regulations"], ["promulgation"], "The president promulgated an emergency ordinance to protect consumers.", "Stress 1st syllable (PROM-ul-gate).", "verb"],
    ["enunciate", "स्पष्ट रूप से उच्चारण करना", "/ɪˈnʌn.si.eɪt/", "इ-नन-सि-एट", "e · nun · ci · ate (4)", "2nd Syllable", "Voice & Accent", ["enunciate each syllable", "enunciate clearly"], ["enunciation"], "Actors learn to enunciate vowels cleanly before speaking on stage.", "Stress 2nd syllable (e-NUN-ci-ate).", "verb"],
    ["modulate", "आवाज को नियंत्रित करना / बदलना", "/ˈmɒdʒ.ə.leɪt/", "मॉज-अ-लेट", "mod · u · late (3)", "1st Syllable", "Voice & Accent", ["modulate voice", "modulate tone"], ["modulation"], "Skillful public speakers modulate pitch to keep audiences engaged.", "Stress 1st syllable (MOD-u-late).", "verb"],
    ["intonate", "स्वर के उतार-चढ़ाव से बोलना", "/ˈɪn.tə.neɪt/", "इन-त-नेट", "in · to · nate (3)", "1st Syllable", "Voice & Accent", ["intonate accurately", "intonate phrases"], ["intonation"], "Singers and orators intonate expressive phrases with musical precision.", "Stress 1st syllable (IN-to-nate).", "verb"],
    ["inflect", "स्वर में बदलाव लाना / रूप बदलना", "/ɪnˈflekt/", "इन-फ्लेक्ट", "in · flect (2)", "2nd Syllable", "Voice & Grammar", ["inflect words", "inflect voice"], ["inflection"], "English speakers inflect pitch upward when asking yes-no questions.", "Stress 2nd syllable (in-FLECT).", "verb"],
    ["reverberate", "गूंजना / प्रतिध्वनित होना", "/rɪˈvɜː.bər.eɪt/", "रि-वर-बर-एट", "re · ver · ber · ate (4)", "2nd Syllable", "Acoustics / Events", ["reverberate through", "sound reverberates"], ["reverberation"], "Chants reverberated through the ancient stone corridors of the temple.", "Stress 2nd syllable (re-VER-ber-ate).", "verb"],
    ["resonate", "गूंजना / दिल को छूना", "/ˈrez.ən.eɪt/", "रेज़-अ-नेट", "res · o · nate (3)", "1st Syllable", "Acoustics / Emotion", ["resonate deeply", "resonate with"], ["resonance"], "His inspiring message of self-reliance resonated with thousands of students.", "Stress 1st syllable (RES-o-nate).", "verb"],
    ["oscillate", "दोलन करना / झूलना / डगमगाना", "/ˈɒs.ɪ.leɪt/", "ऑस-इ-लेट", "os · cil · late (3)", "1st Syllable", "Physics / Decision", ["oscillate between", "pendulum oscillates"], ["oscillation"], "He continued to oscillate between two attractive university career offers.", "Stress 1st syllable (OS-cil-late).", "verb"],
    ["fluctuate", "उतार-चढ़ाव होना", "/ˈflʌk.tʃu.eɪt/", "फ्लक-चु-एट", "fluc · tu · ate (3)", "1st Syllable", "Economics / Nature", ["prices fluctuate", "temperatures fluctuate"], ["fluctuation"], "Vegetable prices fluctuate depending on seasonal monsoon rainfall.", "Stress 1st syllable (FLUC-tu-ate).", "verb"],
    ["waver", "डगमगाना / हिचकिचाना", "/ˈweɪ.vər/", "वे-वर", "wa · ver (2)", "1st Syllable", "Psychology / Faith", ["never waver", "courage wavered"], [], "Her determination to become an aerospace engineer never wavered.", "Stress 1st syllable (WA-ver).", "verb"],
    ["vacillate", "अनिर्णय की स्थिति में होना", "/ˈvæs.ɪ.leɪt/", "वैस-इ-लेट", "vac · il · late (3)", "1st Syllable", "Psychology / Decisions", ["vacillate between", "tendency to vacillate"], ["vacillation"], "Leaders must make prompt decisions rather than vacillate indefinitely.", "Stress 1st syllable (VAC-il-late).", "verb"],
    ["equivocate", "गोलमोल बात करना", "/ɪˈkwɪv.ə.keɪt/", "इ-क्विव-अ-केट", "e · quiv · o · cate (4)", "2nd Syllable", "Speech / Politics", ["refuse to equivocate", "politicians equivocate"], ["equivocation"], "The spokesperson spoke directly without attempting to equivocate on facts.", "Stress 2nd syllable (e-QUIV-o-cate).", "verb"],
    ["circumlocution", "घुमा-फिराकर बात कहना", "/ˌsɜː.kəm.ləˈkjuː.ʃən/", "सर-कम-ल-क्यू-शन", "cir · cum · lo · cu · tion (5)", "4th Syllable", "Style / Writing", ["avoid circumlocution", "verbose circumlocution"], [], "Use simple concise words instead of confusing circumlocution in essays.", "Stress 4th syllable (cir-cum-lo-CU-tion).", "noun"],
    ["pleonasm", "अनावश्यक शब्दों का प्रयोग", "/ˈpliː.ə.næz.əm/", "प्ली-अ-नैज़-अम", "ple · o · nasm (3)", "1st Syllable", "Style / Grammar", ["avoid pleonasm", "rhetorical pleonasm"], [], "Phrases like 'free gift' or 'true fact' are examples of pleonasm.", "Stress 1st syllable (PLE-o-nasm).", "noun"],
    ["tautology", "पुनरुक्ति / व्यर्थ दोहराव", "/tɔːˈtɒl.ə.dʒi/", "टॉ-टॉल-अ-जी", "tau · tol · o · gy (4)", "2nd Syllable", "Logic / Writing", ["logical tautology", "avoid tautology"], ["tautological"], "Saying 'he arrived at 8 PM at night' is an unnecessary tautology.", "Stress 2nd syllable (tau-TOL-o-gy).", "noun"],
    ["concision", "संक्षिप्तता", "/kənˈsɪʒ.ən/", "कन-सिझ़-अन", "con · ci · sion (3)", "2nd Syllable", "Writing / Style", ["write with concision", "admirable concision"], ["concise"], "Good journalism demands high accuracy combined with remarkable concision.", "Stress 2nd syllable (con-CI-sion).", "noun"],
    ["brevity", "संक्षिप्तता / अल्पता", "/ˈbrev.ə.ti/", "ब्रेव-अ-टी", "brev · i · ty (3)", "1st Syllable", "Writing / Speech", ["brevity is wit", "admire brevity"], [], "Shakespeare famously observed that brevity is the soul of wit.", "Stress 1st syllable (BREV-i-ty).", "noun"],
    ["succinctness", "संक्षिप्तता एवं सटीकता", "/səkˈsɪŋkt.nəs/", "सक-सिंक्ट-नस", "suc · cinct · ness (3)", "2nd Syllable", "Communication", ["valued for succinctness"], ["succinct"], "Executive board summaries are valued for clarity and succinctness.", "Stress 2nd syllable (suc-CINCT-ness).", "noun"],
    ["perspicacity", "तीक्ष्ण बुद्धि / दूरदर्शिता", "/ˌpɜː.spɪˈkæs.ə.ti/", "पर-स्पि-कैल-इ-टी", "per · spi · cac · i · ty (5)", "3rd Syllable", "Intellect / Wisdom", ["mental perspicacity", "remarkable perspicacity"], ["perspicacious"], "The detective's perspicacity helped solve the complex mystery in days.", "Stress 3rd syllable (per-spi-CAC-i-ty).", "noun"],
    ["sagacity", "बुद्धिमत्ता / विवेक", "/səˈɡæs.ə.ti/", "स-गैस-इ-टी", "sa · gac · i · ty (4)", "2nd Syllable", "Wisdom / Leadership", ["great sagacity", "political sagacity"], ["sagacious"], "Elders in the council were respected for their long experience and sagacity.", "Stress 2nd syllable (sa-GAC-i-ty).", "noun"],
    ["discernment", "विवेक / परख", "/dɪˈsɜːn.mənt/", "दि-सर्न-मन्ट", "dis · cern · ment (3)", "2nd Syllable", "Mindset / Art", ["aesthetic discernment", "lack discernment"], ["discern"], "Art collectors develop keen discernment through years of studying originals.", "Stress 2nd syllable (dis-CERN-ment).", "noun"],
    ["acumen", "कुशाग्र बुद्धि / तीक्ष्णता", "/ˈæk.jə.mən/", "ऐक-यु-मन", "ac · u · men (3)", "1st Syllable", "Business / Intellect", ["business acumen", "financial acumen"], [], "Her razor-sharp business acumen turned the small startup into an industry giant.", "Stress 1st syllable (AC-u-men).", "noun"],
    ["erudition", "विद्वता / पांडित्य", "/ˌer.ʊˈdɪʃ.ən/", "एर-उ-दिश-अन", "er · u · di · tion (4)", "3rd Syllable", "Academics / Literature", ["profound erudition", "display erudition"], ["erudite"], "The Sanskrit scholar's profound erudition inspired international researchers.", "Stress 3rd syllable (er-u-DI-tion).", "noun"],
    ["pedagogy", "शिक्षण शास्त्र", "/ˈped.ə.ɡɒdʒ.i/", "पेड-अ-गॉ-जी", "ped · a · go · gy (4)", "1st Syllable", "Education / Methods", ["modern pedagogy", "innovative pedagogy"], ["pedagogical"], "Child-centered pedagogy emphasizes interactive experiential discovery.", "Stress 1st syllable (PED-a-go-gy).", "noun"],
    ["didacticism", "उपदेशात्मकता", "/daɪˈdæk.tɪ.sɪ.zəm/", "दाइ-दैक-ति-सि-ज़म", "di · dac · ti · cism (4)", "2nd Syllable", "Literature / Art", ["avoid didacticism", "moral didacticism"], ["didactic"], "Great fiction teaches empathy naturally without heavy-handed didacticism.", "Stress 2nd syllable (di-DAC-ti-cism).", "noun"],
    ["heuristics", "अनुमानी विधि / खोज नियम", "/hjuˈrɪs.tɪks/", "ह्यू-रिस-टिक्स", "heu · ris · tics (3)", "2nd Syllable", "Logic / Tech", ["problem-solving heuristics", "mental heuristics"], ["heuristic"], "Engineers apply practical heuristics when calculating complex bridge tolerances.", "Stress 2nd syllable (heu-RIS-tics).", "noun"],
    ["paradigmatic", "प्रतिमान संबंधी / आदर्श रूप", "/ˌpær.ə.dɪɡˈmæt.ɪk/", "पैर-अ-दिग-मैट-इक", "par · a · dig · mat · ic (5)", "4th Syllable", "Science / Philosophy", ["paradigmatic example", "paradigmatic shift"], ["paradigm"], "The invention of the transistor was a paradigmatic breakthrough in electronics.", "Stress 4th syllable (par-a-dig-MAT-ic).", "adjective"],
    ["epistemological", "ज्ञानमीमांसीय", "/ɪˌpɪs.tə.məˈlɒdʒ.ɪ.kəl/", "इ-पिस-त-म-लॉज-इ-कल", "e · pis · te · mo · log · i · cal (6)", "4th Syllable", "Philosophy / Science", ["epistemological foundations"], ["epistemology"], "Scientists debate the epistemological validity of simulated model conclusions.", "Stress 4th syllable (e-pis-te-mo-LOG-i-cal).", "adjective"],
    ["teleological", "प्रयोजनवादी / उद्देश्य संबंधी", "/ˌtiː.li.əˈlɒdʒ.ɪ.kəl/", "टी-लि-अ-लॉज-इ-कल", "tel · e · o · log · i · cal (6)", "4th Syllable", "Philosophy / Ethics", ["teleological argument", "teleological view"], ["teleology"], "Teleological ethics evaluate actions primarily based on their final consequences.", "Stress 4th syllable (tel-e-o-LOG-i-cal).", "adjective"],
    ["ontological", "सत्तामीमांसीय / अस्तित्व संबंधी", "/ˌɒn.təˈlɒdʒ.ɪ.kəl/", "ऑन-त-लॉज-इ-कल", "on · to · log · i · cal (5)", "3rd Syllable", "Philosophy / AI", ["ontological status", "ontological framework"], ["ontology"], "Computer scientists construct ontological frameworks to organize machine knowledge.", "Stress 3rd syllable (on-to-LOG-i-cal).", "adjective"],
    ["hermeneutic", "व्याख्यात्मक / अर्थमीमांसा संबंधी", "/ˌhɜː.məˈnjuː.tɪk/", "हर-म-न्यू-तिक", "her · me · neu · tic (4)", "3rd Syllable", "Literature / Law", ["hermeneutic analysis", "hermeneutic method"], ["hermeneutics"], "Legal scholars employ hermeneutic principles when interpreting constitutional clauses.", "Stress 3rd syllable (her-me-NEU-tic).", "adjective"],
    ["heuristic", "स्वयं सीखने में सहायक / अनुमानी", "/hjuˈrɪs.tɪk/", "ह्यू-रिस-तिक", "heu · ris · tic (3)", "2nd Syllable", "Tech / Education", ["heuristic algorithm", "heuristic device"], [], "A simple rule-of-thumb provides an effective heuristic for estimating travel times.", "Stress 2nd syllable (heu-RIS-tic).", "adjective"],
    ["empirical", "अनुभवजन्य / प्रायोगिक", "/ɪmˈpɪr.ɪ.kəl/", "इम-पिर-इ-कल", "em · pir · i · cal (4)", "2nd Syllable", "Science / Research", ["empirical evidence", "empirical study"], ["empiricism"], "Astronomers rely on empirical telescope observations rather than pure conjecture.", "Stress 2nd syllable (em-PIR-i-cal).", "adjective"],
    ["axiomatic", "स्वयंसिद्ध / स्वतः स्पष्ट", "/ˌæk.si.əˈmæt.ɪk/", "ऐक-सि-अ-मैट-इक", "ax · i · o · mat · ic (5)", "4th Syllable", "Math / Logic", ["axiomatic truth", "axiomatic assumption"], ["axiom"], "In mathematics, certain foundational propositions are treated as axiomatic.", "Stress 4th syllable (ax-i-o-MAT-ic).", "adjective"],
    ["indubitable", "संदेहरहित / निर्विवाद", "/ɪnˈdʒuː.bɪ.tə.bəl/", "इन-ड्यू-बित-अ-बल", "in · du · bi · ta · ble (5)", "2nd Syllable", "Logic / Truth", ["indubitable fact", "indubitable evidence"], [], "That regular exercise strengthens immunity is an indubitable scientific fact.", "Stress 2nd syllable (in-DU-bi-ta-ble).", "adjective"],
    ["irrefutable", "अकाट्य / जिसे झुठलाया न जा सके", "/ˌɪr.ɪˈfjuː.tə.bəl/", "इर-इ-फ्यू-त-बल", "ir · re · fut · a · ble (5)", "3rd Syllable", "Law / Science", ["irrefutable proof", "irrefutable logic"], ["refute"], "Forensic DNA evidence provided irrefutable proof of the suspect's presence.", "Stress 3rd syllable (ir-re-FUT-a-ble).", "adjective"],
    ["unequivocal", "स्पष्ट / असंदिग्ध", "/ˌʌn.ɪˈkwɪv.ə.kəl/", "अन-इ-क्विव-अ-कल", "un · e · quiv · o · cal (5)", "3rd Syllable", "Diplomacy / Universal", ["unequivocal support", "unequivocal statement"], ["equivocal"], "The board expressed unequivocal confidence in the CEO's growth strategy.", "Stress 3rd syllable (un-e-QUIV-o-cal).", "adjective"],
    ["unambiguous", "स्पष्ट / बिना किसी संशय का", "/ˌʌn.æmˈbɪɡ.ju.əs/", "अन-ऐम-बिग-यु-अस", "un · am · big · u · ous (5)", "3rd Syllable", "Law / Tech", ["unambiguous language", "unambiguous terms"], ["ambiguous"], "Software requirements should be written in clean, unambiguous language.", "Stress 3rd syllable (un-am-BIG-u-ous).", "adjective"],
    ["lucid", "स्पष्ट / सुबोध", "/ˈluː.sɪd/", "लू-सिद", "lu · cid (2)", "1st Syllable", "Communication / Mind", ["lucid explanation", "lucid thinking"], ["lucidity"], "The physics tutor gave a remarkably lucid explanation of thermodynamics.", "Stress 1st syllable (LU-cid).", "adjective"],
    ["perspicuous", "सुस्पष्ट / सहज बोधगम्य", "/pəˈspɪk.ju.əs/", "प-स्पिक-यु-अस", "per · spic · u · ous (4)", "2nd Syllable", "Style / Formal", ["perspicuous prose", "perspicuous style"], ["perspicuity"], "His perspicuous legal commentary made complex statutes accessible to laypeople.", "Stress 2nd syllable (per-SPIC-u-ous).", "adjective"],
    ["pellucid", "पारदर्शी / अत्यंत स्पष्ट", "/pəˈluː.sɪd/", "प-लू-सिद", "pel · lu · cid (3)", "2nd Syllable", "Nature / Style", ["pellucid waters", "pellucid prose"], [], "The high-altitude Himalayan mountain lake was renowned for pellucid water.", "Stress 2nd syllable (pel-LU-cid).", "adjective"],
    ["unfathomable", "अथाह / समझ से परे", "/ʌnˈfæð.ə.mə.bəl/", "अन-फैद-अ-म-बल", "un · fath · om · a · ble (5)", "2nd Syllable", "Mystery / Depth", ["unfathomable mystery", "unfathomable depths"], ["fathom"], "The true expanse of the cosmos remains unfathomable to human imagination.", "Stress 2nd syllable (un-FATH-om-a-ble).", "adjective"],
    ["inscrutable", "रहस्यमय / अगम्य", "/ɪnˈskruː.tə.bəl/", "इन-स्क्रू-त-बल", "in · scru · ta · ble (4)", "2nd Syllable", "Psychology / Mystery", ["inscrutable expression", "inscrutable smile"], [], "The seasoned diplomat maintained an inscrutable expression during negotiations.", "Stress 2nd syllable (in-SCRU-ta-ble).", "adjective"],
    ["enigmatic", "रहस्यमय / पहेलीनुमा", "/ˌen.ɪɡˈmæt.ɪk/", "एन-इग-मैट-इक", "en · ig · mat · ic (4)", "3rd Syllable", "Personality / Art", ["enigmatic smile", "enigmatic figure"], ["enigma"], "The Mona Lisa's enigmatic smile has fascinated art historians for centuries.", "Stress 3rd syllable (en-ig-MAT-ic).", "adjective"],
    ["abstruse", "गूढ़ / समझने में कठिन", "/æbˈstruːs/", "ऐब-स्ट्रूस", "ab · struse (2)", "2nd Syllable", "Philosophy / Academics", ["abstruse concepts", "abstruse mathematics"], [], "Quantum field equations can seem abstruse without strong linear algebra basics.", "Stress 2nd syllable (ab-STRUSE).", "adjective"],
    ["recondite", "गूढ़ / अल्पज्ञात", "/ˈrek.ən.daɪt/", "रेक-अन-दाइट", "rec · on · dite (3)", "1st Syllable", "Scholarship / Topics", ["recondite subject", "recondite knowledge"], [], "The ancient manuscript contained recondite lore on herbal alchemy.", "Stress 1st syllable (REC-on-dite).", "adjective"],
    ["arcane", "रहस्यमयी / गुप्त", "/ɑːˈkeɪn/", "आर-केन", "ar · cane (2)", "2nd Syllable", "Traditions / Knowledge", ["arcane rituals", "arcane rules"], [], "The secret society conducted its assemblies according to arcane medieval customs.", "Stress 2nd syllable (ar-CANE).", "adjective"],
    ["esoteric", "गूढ़ / केवल विशेषज्ञों के लिए", "/ˌes.əˈter.ɪk/", "एस-अ-तेर-इक", "es · o · ter · ic (4)", "3rd Syllable", "Academics / Philosophy", ["esoteric philosophy", "esoteric terminology"], [], "Theoretical metaphysics is an esoteric field studied by specialized scholars.", "Stress 3rd syllable (es-o-TER-ic).", "adjective"],
    ["cryptic", "गुप्त / दुर्बोध", "/ˈkrɪp.tɪk/", "क्रिप-तिक", "cryp · tic (2)", "1st Syllable", "Security / Puzzles", ["cryptic message", "cryptic clue"], ["crypto"], "The archaeologist discovered a cryptic inscription engraved on the granite pillar.", "Stress 1st syllable (CRYP-tic).", "adjective"],
    ["nebulous", "अस्पष्ट / धुंधला", "/ˈneb.jə.ləs/", "नेब-यु-लस", "neb · u · lous (3)", "1st Syllable", "Ideas / Astronomy", ["nebulous concept", "nebulous outline"], ["nebula"], "His startup pitch had ambitious goals but only nebulous operational timelines.", "Stress 1st syllable (NEB-u-lous).", "adjective"],
    ["tenuous", "कमजोर / अति सूक्ष्म", "/ˈten.ju.əs/", "टेन-यु-अस", "ten · u · ous (3)", "1st Syllable", "Logic / Relationships", ["tenuous link", "tenuous grasp"], [], "Police found only a tenuous link between the suspect and the stolen vehicle.", "Stress 1st syllable (TEN-u-ous).", "adjective"],
    ["specious", "दिखने में सही पर भ्रामक", "/ˈspiː.ʃəs/", "स्पी-शस", "spe · cious (2)", "1st Syllable", "Debate / Logic", ["specious argument", "specious reasoning"], [], "Do not be swayed by specious arguments that disguise hidden advertising agendas.", "Stress 1st syllable (SPE-cious).", "adjective"],
    ["fallacious", "भ्रामक / दोषपूर्ण तर्क", "/fəˈleɪ.ʃəs/", "फ-ले-शस", "fal · la · cious (3)", "2nd Syllable", "Logic / Philosophy", ["fallacious reasoning", "fallacious claim"], ["fallacy"], "The prosecutor demonstrated that the defense witness's logic was entirely fallacious.", "Stress 2nd syllable (fal-LA-cious).", "adjective"],
    ["spurious", "नकली / अप्रमाणिक", "/ˈspjʊə.ri.əs/", "स्प्यूर-इ-अस", "spu · ri · ous (3)", "1st Syllable", "Law / Products", ["spurious allegations", "spurious medicines"], [], "Government drug regulators launched crackdowns against spurious counterfeit drugs.", "Stress 1st syllable (SPU-ri-ous).", "adjective"],
    ["meretricious", "ऊपरी तौर पर आकर्षक पर निस्सार", "/ˌmer.ɪˈtrɪʃ.əs/", "मेर-इ-त्रिश-अस", "mer · e · tri · cious (4)", "3rd Syllable", "Art / Critique", ["meretricious glamor", "meretricious art"], [], "Beneath its meretricious surface glitter, the blockbuster movie lacked emotional depth.", "Stress 3rd syllable (mer-e-TRI-cious).", "adjective"],
    ["ostentatious", "दिखावटी / आडंबरपूर्ण", "/ˌɒs.tenˈteɪ.ʃəs/", "ऑस-तेन-ते-शस", "os · ten · ta · tious (4)", "3rd Syllable", "Lifestyle / Behavior", ["ostentatious display", "ostentatious luxury"], ["ostentation"], "True nobility avoids ostentatious displays of personal wealth.", "Stress 3rd syllable (os-ten-TA-tious).", "adjective"],
    ["pretentious", "घमंडी / आडंबरी", "/prɪˈten.ʃəs/", "प्रि-तेन-शस", "pre · ten · tious (3)", "2nd Syllable", "Personality / Art", ["pretentious attitude", "pretentious prose"], ["pretend"], "Avoid pretentious jargon when addressing beginner students in workshop lectures.", "Stress 2nd syllable (pre-TEN-tious).", "adjective"],
    ["bombastic", "आडंबरपूर्ण / भारी-भरकम शब्दों वाला", "/bɒmˈbæs.tɪk/", "बॉम-बैस-तिक", "bom · bas · tic (3)", "2nd Syllable", "Speech / Writing", ["bombastic rhetoric", "bombastic speech"], ["bombast"], "The candidate's bombastic speech failed to impress voters who sought concrete plans.", "Stress 2nd syllable (bom-BAS-tic).", "adjective"],
    ["grandiloquent", "भव्य पर आडंबरपूर्ण बोलने वाला", "/ɡrænˈdɪl.ə.kwənt/", "ग्रैन-दिल-अ-क्वन्ट", "gran · dil · o · quent (4)", "2nd Syllable", "Speech / Rhetoric", ["grandiloquent claims", "grandiloquent prose"], ["grandiloquence"], "Avoid grandiloquent promises and focus on delivering practical civic outcomes.", "Stress 2nd syllable (gran-DIL-o-quent).", "adjective"],
    ["magniloquent", "डींगमार / उच्च स्वर में बोलने वाला", "/mæɡˈnɪl.ə.kwənt/", "मैग-निल-अ-क्वन्ट", "mag · nil · o · quent (4)", "2nd Syllable", "Rhetoric / Formal", ["magniloquent oratory"], ["magniloquence"], "The orator's magniloquent style entertained the crowd with colorful vocabulary.", "Stress 2nd syllable (mag-NIL-o-quent).", "adjective"],
    ["turgid", "सूजा हुआ / नीरस एवं भारी-भरकम", "/ˈtɜː.dʒɪd/", "तर-जिद", "tur · gid (2)", "1st Syllable", "Style / Biology", ["turgid prose", "turgid cells"], ["turgidity"], "The editor revised the author's turgid prose into crisp, readable paragraphs.", "Stress 1st syllable (TUR-gid).", "adjective"],
    ["sonorous", "गंभीर एवं मधुर ध्वनि वाला", "/ˈsɒn.ər.əs/", "सॉन-अर-अस", "so · no · rous (3)", "1st Syllable", "Voice & Accent", ["sonorous voice", "sonorous tone"], [], "The classical theater narrator had a deep, sonorous speaking voice.", "Stress 1st syllable (SON-o-rous).", "adjective"],
    ["mellifluous", "मधुर / चाशनी जैसी मीठी बोली", "/meˈlɪf.lu.əs/", "म-लिफ-लु-अस", "mel · lif · lu · ous (4)", "2nd Syllable", "Music / Voice", ["mellifluous voice", "mellifluous flute"], [], "Her mellifluous voice captivated listeners across the concert amphitheater.", "Stress 2nd syllable (mel-LIF-lu-ous).", "adjective"],
    ["euphonious", "सुरीला / कर्णप्रिय", "/juːˈfəʊ.ni.əs/", "यू-फो-नि-अस", "eu · pho · ni · ous (4)", "3rd Syllable", "Phonetics / Poetry", ["euphonious sound", "euphonious name"], ["euphony"], "The poet chose euphonious word combinations that delight the ear.", "Stress 3rd syllable (eu-PHO-ni-ous).", "adjective"],
    ["cacophonous", "कर्कश / कान फाड़ू", "/kəˈkɒf.ən.əs/", "क-कॉफ-अन-अस", "ca · coph · o · nous (4)", "2nd Syllable", "Acoustics / Urban", ["cacophonous traffic", "cacophonous noise"], ["cacophony"], "The cacophonous clamor of blaring vehicle horns disturbed morning meditation.", "Stress 2nd syllable (ca-COPH-o-nous).", "adjective"],
    ["strident", "कर्कश / तीव्र", "/ˈstraɪ.dənt/", "स्ट्राइ-दन्ट", "stri · dent (2)", "1st Syllable", "Sound / Debate", ["strident voice", "strident criticism"], ["stridency"], "The referee's strident whistle pierced through the stadium's roar.", "Stress 1st syllable (STRI-dent).", "adjective"],
    ["vociferous", "जोरदार / मुखर", "/vəˈsɪf.ər.əs/", "व-सिफ-अर-अस", "vo · cif · er · ous (4)", "2nd Syllable", "Protests / Universal", ["vociferous opposition", "vociferous protests"], ["vociferously"], "Citizens voiced vociferous opposition against the proposed demolition of the park.", "Stress 2nd syllable (vo-CIF-er-ous).", "adjective"],
    ["clamorous", "शोरगुल भरा / कोलाहलपूर्ण", "/ˈklæm.ər.əs/", "क्लैम-अर-अस", "clam · or · ous (3)", "1st Syllable", "Urban / Crowds", ["clamorous market", "clamorous crowd"], ["clamor"], "The clamorous wholesale vegetable market opens at four every morning.", "Stress 1st syllable (CLAM-or-ous).", "adjective"],
    ["plaintive", "दर्दभरा / विलापपूर्ण", "/ˈpleɪn.tɪv/", "प्लेन-तिव", "plain · tive (2)", "1st Syllable", "Music / Emotion", ["plaintive melody", "plaintive cry"], [], "The shehnai played a plaintive classical tune during the farewell ritual.", "Stress 1st syllable (PLAIN-tive).", "adjective"],
    ["lugubrious", "उदासीन / अत्यंत शोकाकुल", "/luːˈɡuː.bri.əs/", "लू-गू-ब्रि-अस", "lu · gu · bri · ous (4)", "2nd Syllable", "Tone / Literature", ["lugubrious expression", "lugubrious music"], [], "The historic documentary opened with slow, lugubrious cello notes.", "Stress 2nd syllable (lu-GU-bri-ous).", "adjective"],
    ["sepulchral", "गंभीर / कब्र जैसा शांत", "/səˈpʌl.krəl/", "स-पल-क्रल", "se · pul · chral (3)", "2nd Syllable", "Tone / Atmosphere", ["sepulchral silence", "sepulchral voice"], ["sepulchre"], "A sepulchral silence descended upon the assembly hall as the verdict was read.", "Stress 2nd syllable (se-PUL-chral).", "adjective"],
    ["somber", "गंभीर / उदास", "/ˈsɒm.bər/", "सॉम-बर", "som · ber (2)", "1st Syllable", "Mood / Atmosphere", ["somber mood", "somber reflection"], [], "The memorial service was conducted in a dignified and somber atmosphere.", "Stress 1st syllable (SOM-ber).", "adjective"],
    ["tenacity", "दृढ़ता / लगन", "/təˈnæs.ə.ti/", "त-नैस-अ-टी", "te · nac · i · ty (4)", "2nd Syllable", "Character / Grit", ["admirable tenacity", "display tenacity"], ["tenacious"], "Her fierce academic tenacity helped her crack the civil services examination.", "Stress 2nd syllable (te-NAC-i-ty).", "noun"],
    ["resilience", "लचीलापन / पुनः संभलने की शक्ति", "/rɪˈzɪl.jəns/", "रि-ज़िल-यन्स", "re · sil · ience (3)", "2nd Syllable", "Psychology / Universal", ["mental resilience", "build resilience"], ["resilient"], "Communities displayed immense resilience in rebuilding after the tsunami.", "Stress 2nd syllable (re-SIL-ience).", "noun"],
    ["fortitude", "धैर्य / मानसिक शक्ति", "/ˈfɔː.tɪ.tjuːd/", "फॉर-ति-ट्यूड", "for · ti · tude (3)", "1st Syllable", "Character / Ethics", ["moral fortitude", "bear with fortitude"], [], "He bore the prolonged physical hardship with quiet fortitude.", "Stress 1st syllable (FOR-ti-tude).", "noun"],
    ["equanimity", "समभाव / मानसिक संतुलन", "/ˌek.wəˈnɪm.ə.ti/", "एक-व-निम-इ-टी", "eq · ua · nim · i · ty (5)", "3rd Syllable", "Mindfulness / Philosophy", ["maintain equanimity", "face crisis with equanimity"], [], "A seasoned pilot maintains absolute equanimity during severe air turbulence.", "Stress 3rd syllable (eq-ua-NIM-i-ty).", "noun"],
    ["magnanimity", "उदारता / महानुभावता", "/ˌmæɡ.nəˈnɪm.ə.ti/", "मैग-न-निम-इ-टी", "mag · na · nim · i · ty (5)", "3rd Syllable", "Character / Morals", ["act of magnanimity", "show magnanimity"], ["magnanimous"], "The victor demonstrated true magnanimity by treating opponents with respect.", "Stress 3rd syllable (mag-na-NIM-i-ty).", "noun"],
    ["benevolence", "परोपकार / दयालुता", "/bəˈnev.əl.əns/", "ब-नेव-अल-अन्स", "be · nev · o · lence (4)", "2nd Syllable", "Ethics / Charity", ["universal benevolence", "act of benevolence"], ["benevolent"], "The philanthropist's benevolence funded thousands of rural scholarships.", "Stress 2nd syllable (be-NEV-o-lence).", "noun"],
    ["altruism", "निःस्वार्थता / परोपकारिता", "/ˈæl.tru.ɪ.zəm/", "ऐल-त्रु-इ-ज़म", "al · tru · ism (3)", "1st Syllable", "Philosophy / Sociology", ["pure altruism", "act of altruism"], ["altruistic"], "Blood donors demonstrate noble altruism by saving unknown lives.", "Stress 1st syllable (AL-tru-ism).", "noun"],
    ["frugality", "मितव्ययिता / सादगी", "/fruːˈɡæl.ə.ti/", "फ्रू-गैल-इ-टी", "fru · gal · i · ty (4)", "2nd Syllable", "Lifestyle / Finance", ["practice frugality", "virtue of frugality"], ["frugal"], "Frugality in daily spending allowed the family to invest in higher education.", "Stress 2nd syllable (fru-GAL-i-ty).", "noun"],
    ["parsimony", "अति-कंजूसी / अल्पव्यय", "/ˈpɑː.sɪ.mən.i/", "पार-सि-म-नी", "par · si · mo · ny (4)", "1st Syllable", "Finance / Character", ["extreme parsimony"], ["parsimonious"], "Scientific models follow parsimony by choosing the simplest explanation.", "Stress 1st syllable (PAR-si-mo-ny).", "noun"],
    ["veracity", "सच्चाई / सत्यनिष्ठा", "/vəˈræs.ə.ti/", "व-रैस-इ-टी", "ve · rac · i · ty (4)", "2nd Syllable", "Ethics / Journalism", ["question the veracity", "test veracity"], ["veracious"], "Journalists must independently verify the veracity of leaked documents.", "Stress 2nd syllable (ve-RAC-i-ty).", "noun"],
    ["candor", "स्पष्टवादिता / निष्कपटता", "/ˈkæn.dər/", "कैन-दर", "can · dor (2)", "1st Syllable", "Speech / Character", ["speak with candor", "admirable candor"], ["candid"], "The CEO addressed shareholder concerns with refreshing honesty and candor.", "Stress 1st syllable (CAN-dor).", "noun"],
    ["probity", "ईमानदारी / सत्यनिष्ठा", "/ˈprəʊ.bə.ti/", "प्रो-ब-टी", "prob · i · ty (3)", "1st Syllable", "Governance / Ethics", ["financial probity", "unimpeachable probity"], [], "The civil servant was celebrated for decades of unimpeachable probity.", "Stress 1st syllable (PROB-i-ty).", "noun"],
    ["rectitude", "सदाचार / न्यायप्रियता", "/ˈrek.tɪ.tjuːd/", "रेक-ति-ट्यूड", "rec · ti · tude (3)", "1st Syllable", "Ethics / Philosophy", ["moral rectitude", "unyielding rectitude"], [], "A judge must embody unwavering moral rectitude inside and outside court.", "Stress 1st syllable (REC-ti-tude).", "noun"],
    ["assiduous", "परिश्रमी / कर्मठ", "/əˈsɪdʒ.u.əs/", "अ-सिज-यु-अस", "as · sid · u · ous (4)", "2nd Syllable", "Workplace / Character", ["assiduous research", "assiduous student"], ["assiduously"], "Through assiduous laboratory testing, the team identified the compound.", "Stress 2nd syllable (as-SID-u-ous).", "adjective"],
    ["meticulous", "अति-सावधान / बारीक", "/məˈtɪk.jə.ləs/", "म-तिक-यु-लस", "me · tic · u · lous (4)", "2nd Syllable", "Craft / Science", ["meticulous attention", "meticulous planning"], ["meticulously"], "The jeweler showed meticulous precision in polishing the cut diamond.", "Stress 2nd syllable (me-TIC-u-lous).", "adjective"],
    ["punctilious", "नियमों का पक्का / शिष्टाचारप्रिय", "/pʌŋkˈtɪl.i.əs/", "पंक्-तिल-इ-अस", "punc · til · i · ous (4)", "2nd Syllable", "Protocol / Etiquette", ["punctilious host", "punctilious observance"], [], "Diplomatic envoys follow punctilious state protocol at international summits.", "Stress 2nd syllable (punc-TIL-i-ous).", "adjective"],
    ["scrupulous", "ईमानदार / अत्यंत सतर्क", "/ˈskruː.pjə.ləs/", "स्क्रू-प्यु-लस", "scru · pu · lous (3)", "1st Syllable", "Ethics / Standards", ["scrupulous honesty", "scrupulous care"], ["scruple"], "The auditor conducted a scrupulous examination of company bank statements.", "Stress 1st syllable (SCRU-pu-lous).", "adjective"],
    ["intrepid", "निडर / साहसी", "/ɪnˈtrep.ɪd/", "इन-ट्रेप-इद", "in · trep · id (3)", "2nd Syllable", "Exploration / Courage", ["intrepid explorer", "intrepid journalist"], [], "The intrepid wildlife photographer traversed dense rainforests alone.", "Stress 2nd syllable (in-TREP-id).", "adjective"],
    ["audacious", "साहसी / दुस्साहसी", "/ɔːˈdeɪ.ʃəs/", "ऑ-डे-शस", "au · da · cious (3)", "2nd Syllable", "Strategy / Business", ["audacious plan", "audacious vision"], ["audacity"], "Launching an electric rocket startup was an audacious commercial move.", "Stress 2nd syllable (au-DA-cious).", "adjective"],
    ["dauntless", "अडिग / निर्भीक", "/ˈdɔːnt.ləs/", "डॉन्ट-लस", "daunt · less (2)", "1st Syllable", "Character / Heroism", ["dauntless courage", "dauntless spirit"], [], "Mountain climbers showed dauntless perseverance in reaching the peak.", "Stress 1st syllable (DAUNT-less).", "adjective"],
    ["unflinching", "दृढ़ / बिना हिचकिचाहट के", "/ʌnˈflɪn.tʃɪŋ/", "अन-फ्लिन-चिंग", "un · flinch · ing (3)", "2nd Syllable", "Morals / Journalism", ["unflinching dedication", "unflinching honesty"], ["flinch"], "The documentary presented an unflinching look at rural economic challenges.", "Stress 2nd syllable (un-FLINCH-ing).", "adjective"],
    ["resolute", "दृढ़संकल्प / अटल", "/ˈrez.ə.luːt/", "रेज़-अ-लूट", "res · o · lute (3)", "1st Syllable", "Character / Action", ["resolute leadership", "remain resolute"], ["resolution"], "Despite intense public opposition, the reformer remained resolute.", "Stress 1st syllable (RES-o-lute).", "adjective"],
    ["indomitable", "अदम्य / जिसे हराया न जा सके", "/ɪnˈdɒm.ɪ.tə.bəl/", "इन-दॉम-इ-त-बल", "in · dom · i · ta · ble (5)", "2nd Syllable", "Human Spirit", ["indomitable will", "indomitable spirit"], [], "Freedom fighters showed an indomitable will throughout the struggle.", "Stress 2nd syllable (in-DOM-i-ta-ble).", "adjective"],
    ["unyielding", "अटल / झुकने से इनकार करने वाला", "/ʌnˈjiːl.dɪŋ/", "अन-यील-डिंग", "un · yield · ing (3)", "2nd Syllable", "Ethics / Principles", ["unyielding principle", "unyielding determination"], ["yield"], "Her unyielding dedication to student welfare transformed the public school.", "Stress 2nd syllable (un-YIELD-ing).", "adjective"]
  ];

  let replIndex = 0;
  function getNextReplacement() {
    while (replIndex < replacementPool.length) {
      const candidate = replacementPool[replIndex++];
      const w = candidate[0].toLowerCase();
      if (!usedWords.has(w)) {
        usedWords.add(w);
        return candidate;
      }
    }
    throw new Error('Exhausted replacement pool!');
  }

  // Clean each day's vocabulary
  const finalDays = rawDayData.map(dObj => {
    const dayTerms = [];
    const localDaySet = new Set();

    dObj.terms.forEach(t => {
      const w = t[0].toLowerCase();
      if (usedWords.has(w) || localDaySet.has(w)) {
        // Find a fresh replacement
        const rep = getNextReplacement();
        dayTerms.push(rep);
        localDaySet.add(rep[0].toLowerCase());
      } else {
        usedWords.add(w);
        localDaySet.add(w);
        dayTerms.push(t);
      }
    });

    console.log(`Day ${dObj.day}: ${dayTerms.length} terms finalized. (Unique in day: ${localDaySet.size})`);
    return { day: dObj.day, terms: dayTerms };
  });

  // Verify total uniqueness across all 10 days
  const stage2MasterSet = new Set();
  let collisionsFound = 0;

  finalDays.forEach(d => {
    d.terms.forEach(t => {
      const w = t[0].toLowerCase();
      if (stage1Set.has(w)) {
        console.error(`COLLISION with Stage 1: Day ${d.day} -> ${w}`);
        collisionsFound++;
      }
      if (stage2MasterSet.has(w)) {
        console.error(`INTERNAL COLLISION in Stage 2: Day ${d.day} -> ${w}`);
        collisionsFound++;
      }
      stage2MasterSet.add(w);
    });
  });

  console.log(`=== Verification Complete ===`);
  console.log(`Stage 1 Words: ${stage1Set.size}`);
  console.log(`Stage 2 Words: ${stage2MasterSet.size}`);
  console.log(`Total Unique Combined: ${stage1Set.size + stage2MasterSet.size}`);
  console.log(`Collisions: ${collisionsFound}`);

  if (collisionsFound === 0) {
    // Write out the clean files
    const outD11_15 = `// Cleaned and Deduplicated Vocabulary for Days 11-15\n` +
      finalDays.filter(d => d.day >= 11 && d.day <= 15).map(d => {
        return `export function getDay${d.day}RawTerms() {\n  return ${JSON.stringify(d.terms, null, 4)};\n}\n`;
      }).join('\n');

    const outD16_20 = `// Cleaned and Deduplicated Vocabulary for Days 16-20\n` +
      finalDays.filter(d => d.day >= 16 && d.day <= 20).map(d => {
        return `export function getDay${d.day}RawTerms() {\n  return ${JSON.stringify(d.terms, null, 4)};\n}\n`;
      }).join('\n');

    fs.writeFileSync(path.join(process.cwd(), 'scripts/stage2_data_days11_15_clean.js'), outD11_15, 'utf8');
    fs.writeFileSync(path.join(process.cwd(), 'scripts/stage2_data_days16_20_clean.js'), outD16_20, 'utf8');
    console.log('Successfully written clean stage 2 vocabulary data files!');
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
