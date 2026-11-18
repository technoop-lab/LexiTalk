import fs from 'fs';
import path from 'path';

// Clean, distinctive pool of 50 advanced, never-before-used words
const pool = [
  ["alacrity", "उत्सुकता / तत्परता", "/əˈlæk.rə.ti/", "अ-लैक-रि-टी", "a · lac · ri · ty (4)", "2nd Syllable", "Formal / Character", ["with alacrity", "show alacrity"], [], "She accepted the leadership challenge with remarkable alacrity.", "Stress 2nd syllable (a-LAC-ri-ty).", "noun"],
  ["sagacity", "दूरदर्शिता / तीक्ष्ण बुद्धि", "/səˈɡæs.ə.ti/", "स-गैस-इ-टी", "sa · gac · i · ty (4)", "2nd Syllable", "Philosophy / Ethics", ["wisdom and sagacity", "political sagacity"], [], "The elder statesman was revered for his administrative sagacity.", "Stress 2nd syllable (sa-GAC-i-ty).", "noun"],
  ["magnanimity", "उदारता / महानुभावता", "/ˌmæɡ.nəˈnɪm.ə.ti/", "मैग-न-निम-इ-टी", "mag · nan · i · mi · ty (5)", "3rd Syllable", "Ethics / Elevated", ["show magnanimity", "spirit of magnanimity"], [], "The victorious leader treated his defeated rivals with great magnanimity.", "Stress 3rd syllable (mag-na-NIM-i-ty).", "noun"],
  ["munificence", "दानशीलता / विपुल उदारता", "/mjuːˈnɪf.ɪ.səns/", "म्यु-निफ-इ-सन्स", "mu · nif · i · cence (4)", "2nd Syllable", "Formal / Elevated", ["royal munificence", "extraordinary munificence"], [], "The research chair was established through the munificence of the industrialist.", "Stress 2nd syllable (mu-NIF-i-cence).", "noun"],
  ["benediction", "आशीर्वाद / मंगलकामना", "/ˌben.ɪˈdɪk.ʃən/", "बेन-इ-डिक-शन", "ben · e · dic · tion (4)", "3rd Syllable", "Religious / Ceremony", ["give a benediction", "pronounce a benediction"], [], "The venerable archbishop delivered the closing benediction at the ceremony.", "Stress 3rd syllable (ben-e-DIC-tion).", "noun"],
  ["valediction", "विदाई भाषण / विदाई संदेश", "/ˌvæl.ɪˈdɪk.ʃən/", "वैल-इ-डिक-शन", "val · e · dic · tion (4)", "3rd Syllable", "Academic / Ceremony", ["valediction speech", "deliver a valediction"], [], "Her touching valediction brought tears to the eyes of the graduating class.", "Stress 3rd syllable (val-e-DIC-tion).", "noun"],
  ["chivalry", "शौर्य एवं शिष्टाचार / भद्रता", "/ˈʃɪv.əl.ri/", "शिव-अल-री", "chiv · al · ry (3)", "1st Syllable", "History / Character", ["code of chivalry", "age of chivalry"], [], "His polite defense of the junior researcher was an example of modern chivalry.", "Initial consonant is /ʃ/ (like 'shoe'), not /tʃ/.", "noun"],
  ["perspicacity", "तीक्ष्ण समझ / कुशाग्रबुद्धि", "/ˌpɜː.spɪˈkæs.ə.ti/", "पर-स्पि-कैस-इ-टी", "per · spi · cac · i · ty (5)", "3rd Syllable", "Cognition / Science", ["remarkable perspicacity", "analytical perspicacity"], [], "Her perspicacity in reading global economic trends saved the investment bank.", "Stress 3rd syllable (per-spi-CAC-i-ty).", "noun"],
  ["equanimity", "धैर्य / समभाव / मानसिक संतुलन", "/ˌek.wəˈnɪm.ə.ti/", "एक-व-निम-इ-टी", "e · qua · nim · i · ty (5)", "3rd Syllable", "Psychology / Philosophy", ["maintain equanimity", "calm equanimity"], [], "He faced the hostile cross-examination with unwavering equanimity.", "Stress 3rd syllable (e-qua-NIM-i-ty).", "noun"],
  ["scintillating", "शानदार / चमकीला / अत्यंत आकर्षक", "/ˈsɪn.tɪ.leɪ.tɪŋ/", "सिन-टि-ले-टिंग", "scin · til · lat · ing (4)", "1st Syllable", "Literature / Speech", ["scintillating dialogue", "scintillating performance"], [], "She delivered a scintillating keynote address on artificial intelligence.", "Stress 1st syllable (SCIN-til-lat-ing).", "adjective"],
  ["resplendent", "दीप्तिमान / अत्यंत शोभायमान", "/rɪˈsplen.dənt/", "रि-स्प्लेन-डन्ट", "re · splen · dent (3)", "2nd Syllable", "Visual / Formal", ["resplendent beauty", "resplendent in silk"], [], "The ancient monument was resplendent under the festival illumination.", "Stress 2nd syllable (re-SPLEN-dent).", "adjective"],
  ["indomitable", "अदम्य / जिसे दबाया न जा सके", "/ɪnˈdɒm.ɪ.tə.bəl/", "इन-डॉम-इ-ट-बल", "in · dom · i · ta · ble (5)", "2nd Syllable", "Biography / Spirit", ["indomitable spirit", "indomitable will"], [], "Her indomitable courage guided the community through post-earthquake recovery.", "Stress 2nd syllable (in-DOM-i-ta-ble).", "adjective"],
  ["dauntless", "निडर / साहसी", "/ˈdɔːnt.ləs/", "डॉन्ट-लस", "daunt · less (2)", "1st Syllable", "History / Character", ["dauntless courage", "dauntless explorer"], [], "The rescue helicopter pilots demonstrated dauntless courage in the blizzard.", "Stress 1st syllable (DAUNT-less).", "adjective"],
  ["intrepid", "निर्भीक / साहसी", "/ɪnˈtrep.ɪd/", "इन-ट्रेप-इड", "in · trep · id (3)", "2nd Syllable", "Adventure / Science", ["intrepid explorer", "intrepid traveler"], [], "The intrepid mountaineers reached the Himalayan peak without supplementary oxygen.", "Stress 2nd syllable (in-TREP-id).", "adjective"],
  ["unwavering", "अटल / दृढ़", "/ʌnˈweɪ.vər.ɪŋ/", "अन-वे-व-रिंग", "un · wa · ver · ing (4)", "2nd Syllable", "Character / Ethics", ["unwavering commitment", "unwavering support"], [], "We appreciate your unwavering commitment to our social welfare mission.", "Stress 2nd syllable (un-WA-ver-ing).", "adjective"],
  ["stalwart", "निष्ठावान समर्थक / दृढ़", "/ˈstɔːl.wət/", "स्टॉल-वर्ट", "stal · wart (2)", "1st Syllable", "Politics / Organization", ["party stalwart", "stalwart supporter"], [], "He has been a stalwart defender of human rights for more than forty years.", "Stress 1st syllable (STAL-wart).", "noun"],
  ["paragon", "आदर्श / प्रतिमान", "/ˈpær.ə.ɡən/", "पै-र-गन", "par · a · gon (3)", "1st Syllable", "Literary / Ethics", ["paragon of virtue", "paragon of efficiency"], [], "The late chancellor was widely regarded as a paragon of academic integrity.", "Stress 1st syllable (PAR-a-gon).", "noun"],
  ["epitome", "साक्षात उदाहरण / प्रतीक", "/ɪˈpɪt.ə.mi/", "इ-पिट-अ-मी", "e · pit · o · me (4)", "2nd Syllable", "Literary / Cultural", ["epitome of elegance", "epitome of grace"], [], "Her dignified address at the summit was the very epitome of diplomatic poise.", "Stress 2nd syllable (e-PIT-o-me).", "noun"],
  ["exemplar", "आदर्श उदाहरण", "/ɪɡˈzem.plɑːr/", "इग-ज़ेम-प्लार", "ex · em · plar (3)", "2nd Syllable", "Academic / Philosophy", ["moral exemplar", "historical exemplar"], [], "This ancient text serves as a literary exemplar for classical rhetoric.", "Stress 2nd syllable (ex-EM-plar).", "noun"],
  ["luminary", "प्रतिष्ठित विद्वान / प्रकाश-स्तंभ", "/ˈluː.mɪ.nər.i/", "लू-मि-न-री", "lu · mi · nar · y (4)", "1st Syllable", "Arts / Science", ["scientific luminary", "literary luminary"], [], "Several Nobel luminaries attended the inaugural symposium on quantum physics.", "Stress 1st syllable (LU-mi-nar-y).", "noun"],
  ["polymath", "बहुज्ञ / बहुमुखी विद्वान", "/ˈpɒl.i.mæθ/", "पॉ-लि-मैथ", "pol · y · math (3)", "1st Syllable", "Academic / Biography", ["renowned polymath", "Renaissance polymath"], [], "Rabindranath Tagore was a towering polymath in literature, music, and art.", "Stress 1st syllable (POL-y-math).", "noun"],
  ["erudition", "विद्वता / गहन ज्ञान", "/ˌer.ʊˈdɪʃ.ən/", "एर-यु-डिश-अन", "er · u · di · tion (4)", "3rd Syllable", "Academic / Literature", ["profound erudition", "display erudition"], [], "The professor's lecture displayed extraordinary erudition in ancient Sanskrit philology.", "Stress 3rd syllable (er-u-DI-tion).", "noun"],
  ["circumspect", "सावधान / सतर्क", "/ˈsɜː.kəm.spekt/", "सर-कम-स्पेक्ट", "cir · cum · spect (3)", "1st Syllable", "Professional / Legal", ["circumspect approach", "circumspect behavior"], [], "Financial regulators must be circumspect when commenting on interest rate changes.", "Stress 1st syllable (CIR-cum-spect).", "adjective"],
  ["prudence", "विवेक / समझदारी", "/ˈpruː.dəns/", "प्रू-डन्स", "pru · dence (2)", "1st Syllable", "Economics / Ethics", ["financial prudence", "exercise prudence"], [], "Fiscal prudence is essential for maintaining long-term municipal solvency.", "Stress 1st syllable (PRU-dence).", "noun"],
  ["judicious", "न्यायसंगत / विवेकपूर्ण", "/dʒuːˈdɪʃ.əs/", "जू-डिश-अस", "ju · di · cious (3)", "2nd Syllable", "Management / Law", ["judicious decision", "judicious use of funds"], [], "A judicious allocation of resources prevented the project from exceeding its budget.", "Stress 2nd syllable (ju-DI-cious).", "adjective"],
  ["sagacity", "कुशाग्रता / प्रज्ञा", "/səˈɡæs.ə.ti/", "स-गैस-इ-टी", "sa · gac · i · ty (4)", "2nd Syllable", "Philosophy / Leadership", ["rare sagacity", "political sagacity"], [], "Her political sagacity steered the alliance through difficult negotiations.", "Stress 2nd syllable (sa-GAC-i-ty).", "noun"],
  ["lucidity", "स्पष्टता / सुबोधता", "/luːˈsɪd.ə.ti/", "लू-सिड-इ-टी", "lu · cid · i · ty (4)", "2nd Syllable", "Communication / Writing", ["remarkable lucidity", "lucidity of thought"], [], "He explained quantum mechanics with breathtaking lucidity and elegance.", "Stress 2nd syllable (lu-CID-i-ty).", "noun"],
  ["eloquence", "वाकपटुता / सुवक्तापन", "/ˈel.ə.kwəns/", "एल-ओ-क्वन्स", "el · o · quence (3)", "1st Syllable", "Rhetoric / Public Speaking", ["stirring eloquence", "oratorical eloquence"], [], "The advocate spoke with persuasive eloquence that swayed the entire jury.", "Stress 1st syllable (EL-o-quence).", "noun"],
  ["felicity", "परमानंद / उपयुक्तता", "/fəˈlɪs.ə.ti/", "फ़-लिस-इ-टी", "fe · lic · i · ty (4)", "2nd Syllable", "Literature / Emotion", ["felicity of expression", "pure felicity"], [], "The poet writes with exceptional felicity of expression and rhythmic grace.", "Stress 2nd syllable (fe-LIC-i-ty).", "noun"],
  ["probity", "सत्यनिष्ठा / ईमानदारी", "/ˈprəʊ.bə.ti/", "प्रो-बि-टी", "prob · i · ty (3)", "1st Syllable", "Governance / Ethics", ["financial probity", "unquestioned probity"], [], "The auditor's reputation for immaculate probity is recognized nationwide.", "Stress 1st syllable (PROB-i-ty).", "noun"]
];

async function enforceExactUniqueness() {
  const globalSeen = new Set();
  let poolIdx = 0;

  for (let d = 1; d <= 10; d++) {
    const num = String(d).padStart(2, '0');
    const filePath = path.join(process.cwd(), 'content_builder', `day${num}.js`);
    const mod = await import(`../content_builder/day${num}.js`);
    const dayObj = mod[`day${num}`];
    let modified = false;

    dayObj.learn.vocabulary.forEach((item, idx) => {
      let lemma = (item.lemma || item.wordForm || "").toLowerCase().trim();

      if (globalSeen.has(lemma)) {
        // Pick an unused word from pool
        while (poolIdx < pool.length && globalSeen.has(pool[poolIdx][0].toLowerCase().trim())) {
          poolIdx++;
        }
        if (poolIdx >= pool.length) {
          throw new Error("Pool exhausted!");
        }
        const [newLemma, meaningHi, ipa, devanagari, syllables, stress, register, collocations, relatedForms, example, commonError, pos] = pool[poolIdx++];

        console.log(`[DAY ${num}] Replacing collision '${lemma}' -> '${newLemma}'`);

        dayObj.learn.vocabulary[idx] = {
          id: item.id,
          lemma: newLemma,
          wordForm: newLemma,
          pos: pos || item.pos || "noun",
          ipa,
          devanagari,
          syllables,
          stress,
          hindiMeaning: meaningHi,
          register,
          collocations: Array.isArray(collocations) ? collocations : [collocations],
          relatedForms: relatedForms || [],
          example,
          commonError: commonError || `Ensure correct primary stress on the ${stress}.`
        };

        lemma = newLemma.toLowerCase().trim();
        modified = true;
      }

      globalSeen.add(lemma);
    });

    if (modified) {
      const fileContent = `// Auto-generated Master Enriched Lesson for Day ${num}\nexport const day${num} = ${JSON.stringify(dayObj, null, 2)};\n`;
      fs.writeFileSync(filePath, fileContent, 'utf-8');
    }
  }

  console.log(`[VERIFIED] Unique Lemmas in Stage 1: ${globalSeen.size} / 600`);
}

enforceExactUniqueness();
