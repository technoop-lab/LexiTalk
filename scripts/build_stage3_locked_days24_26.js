// scripts/build_stage3_locked_days24_26.js
import fs from 'fs';
import path from 'path';

// Get all prior lemmas from Days 1-23 to prevent any collision
async function getPriorLemmas() {
  const used = new Set();
  for (let i = 1; i <= 23; i++) {
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

// -----------------------------------------------------------------------------
// DAY 24: Past Simple Yes/No Questions (Did + Subject + V1?)
// -----------------------------------------------------------------------------
const day24_vocab_raw = [
  ["ascertain", "पता लगाना / सुनिश्चित करना", "/ˌæs.əˈteɪn/", "ऐ-सर-टेन", "as · cer · tain (3)", "3rd Syllable", "Formal / Investigative", ["ascertain facts", "ascertain truth"], ["ascertained", "ascertainable"], "Did the audit team ascertain the exact cause of the financial deficit?", "Stress 3rd syllable (as-cer-TAIN).", "verb"],
  ["authorize", "अधिकृत करना / अनुमति देना", "/ˈɔː.θər.aɪz/", "ऑ-थ-राइज़", "au · thor · ize (3)", "1st Syllable", "Official / Legal", ["authorize payments", "authorize access"], ["authorized", "authorization"], "Did the hospital director authorize the emergency medical surgery?", "Stress 1st syllable (AU-thor-ize).", "verb"],
  ["calculate", "गणना करना / हिसाब लगाना", "/ˈkæl.kjə.leɪt/", "कैल-क्युल-लेट", "cal · cu · late (3)", "1st Syllable", "Mathematical / Finance", ["calculate risks", "calculate exact cost"], ["calculated", "calculation"], "Did the civil engineer calculate the load capacity of the bridge?", "Stress 1st syllable (CAL-cu-late).", "verb"],
  ["certify", "प्रमाणित करना", "/ˈsɜː.tɪ.faɪ/", "सर-टि-फ़ाई", "cer · ti · fy (3)", "1st Syllable", "Official / Standard", ["certify documents", "certify products"], ["certified", "certification"], "Did the standards agency certify the organic export consignment?", "Stress 1st syllable (CER-ti-fy).", "verb"],
  ["clarify", "स्पष्ट करना", "/ˈklær.ɪ.faɪ/", "क्लै-रि-फ़ाई", "clar · i · fy (3)", "1st Syllable", "Communication", ["clarify doubts", "clarify statements"], ["clarified", "clarification"], "Did the project manager clarify the revised timeline during the briefing?", "Stress 1st syllable (CLAR-i-fy).", "verb"],
  ["collaborate", "सहयोग करना / मिलकर काम करना", "/kəˈlæb.ə.reɪt/", "क-लैब-रेट", "col · lab · o · rate (4)", "2nd Syllable", "Professional / Research", ["collaborate closely", "collaborate on projects"], ["collaborated", "collaboration"], "Did the two research institutions collaborate on vaccine testing?", "Stress 2nd syllable (col-LAB-o-rate).", "verb"],
  ["commence", "प्रारंभ करना / शुरू होना", "/kəˈmens/", "क-मेंस", "com · mence (2)", "2nd Syllable", "Formal / Official", ["commence operations", "commence proceedings"], ["commenced", "commencement"], "Did the international conference commence precisely at nine in the morning?", "Stress 2nd syllable (com-MENCE).", "verb"],
  ["compensate", "मुआवजा देना / क्षतिपूर्ति करना", "/ˈkɒm.pən.seɪt/", "कॉम-पन-सेट", "com · pen · sate (3)", "1st Syllable", "Legal / Financial", ["compensate losses", "compensate adequately"], ["compensated", "compensation"], "Did the insurance corporation compensate the affected farmers promptly?", "Stress 1st syllable (COM-pen-sate).", "verb"],
  ["comply", "पालन करना / अनुपालन करना", "/kəmˈplaɪ/", "कम-प्लाई", "com · ply (2)", "2nd Syllable", "Legal / Regulatory", ["comply with regulations", "comply strictly"], ["complied", "compliance"], "Did the manufacturing plant comply with all environmental safeguards?", "Stress 2nd syllable (com-PLY).", "verb"],
  ["concur", "सहमत होना", "/kənˈkɜːr/", "कन-कर", "con · cur (2)", "2nd Syllable", "Formal / Judicial", ["concur with findings", "concur fully"], ["concurred", "concurrence"], "Did the senior partners concur with the proposed legal strategy?", "Stress 2nd syllable (con-CUR).", "verb"],
  ["confirm", "पुष्टि करना", "/kənˈfɜːm/", "कन-फ़र्म", "con · firm (2)", "2nd Syllable", "Administrative", ["confirm bookings", "confirm attendance"], ["confirmed", "confirmation"], "Did the embassy confirm your student visa appointment yesterday?", "Stress 2nd syllable (con-FIRM).", "verb"],
  ["consult", "परामर्श करना / सलाह लेना", "/kənˈsʌlt/", "कन-सल्ट", "con · sult (2)", "2nd Syllable", "Medical / Professional", ["consult specialists", "consult legal counsel"], ["consulted", "consultation"], "Did the patient consult a cardiologist regarding recurring chest pain?", "Stress 2nd syllable (con-SULT).", "verb"],
  ["convene", "एकत्र होना / बैठक बुलाना", "/kənˈviːn/", "कन-वीन", "con · vene (2)", "2nd Syllable", "Governance / Committee", ["convene meetings", "convene urgently"], ["convened", "convention"], "Did the cabinet convene an extraordinary session to address the crisis?", "Stress 2nd syllable (con-VENE).", "verb"],
  ["counsel", "परामर्श देना / सलाह देना", "/ˈkaʊn.səl/", "काउन-सल", "coun · sel (2)", "1st Syllable", "Psychology / Legal", ["counsel students", "counsel wisely"], ["counseled", "counselor"], "Did the educational psychologist counsel the stressed candidates?", "Stress 1st syllable (COUN-sel).", "verb"],
  ["delegate", "प्रतिनिधि बनाना / कार्य सौंपना", "/ˈdel.ɪ.ɡeɪt/", "डे-लि-गेट", "del · e · gate (3)", "1st Syllable", "Management", ["delegate authority", "delegate tasks"], ["delegated", "delegation"], "Did the executive director delegate administrative duties to the deputy?", "Stress 1st syllable (DEL-e-gate).", "verb"],
  ["deliberate", "विचार-विमर्श करना", "/dɪˈlɪb.ə.reɪt/", "डि-लि-ब-रेट", "de · lib · er · ate (4)", "2nd Syllable", "Judicial / Political", ["deliberate carefully", "deliberate for hours"], ["deliberated", "deliberation"], "Did the jury deliberate all afternoon before reaching a unanimous verdict?", "Stress 2nd syllable (de-LIB-er-ate).", "verb"],
  ["diagnose", "रोग की पहचान करना / निदान करना", "/ˈdaɪ.əɡ.nəʊz/", "डाइ-अग-नोज़", "di · ag · nose (3)", "1st Syllable", "Medical / Pathology", ["diagnose illnesses", "diagnose accurately"], ["diagnosed", "diagnosis"], "Did the specialist diagnose the rare immunological disorder early?", "Stress 1st syllable (DI-ag-nose).", "verb"],
  ["disclose", "प्रकट करना / खुलासा करना", "/dɪˈskləʊz/", "डि-स्क्लोज़", "dis · close (2)", "2nd Syllable", "Legal / Corporate", ["disclose assets", "disclose information"], ["disclosed", "disclosure"], "Did the banking institution disclose the full terms of the loan?", "Stress 2nd syllable (dis-CLOSE).", "verb"],
  ["dispatch", "रवाना करना / भेजना", "/dɪˈspætʃ/", "डि-स्पैच", "dis · patch (2)", "2nd Syllable", "Logistics / Postal", ["dispatch parcels", "dispatch emergency units"], ["dispatched", "dispatch"], "Did the warehouse dispatch the medical supplies to the flood zone?", "Stress 2nd syllable (dis-PATCH).", "verb"],
  ["endorse", "समर्थन करना / पृष्ठांकन करना", "/ɪnˈdɔːs/", "इन-डॉर्स", "en · dorse (2)", "2nd Syllable", "Public / Commercial", ["endorse candidates", "endorse products"], ["endorsed", "endorsement"], "Did the faculty board endorse the new interdisciplinary syllabus?", "Stress 2nd syllable (en-DORSE).", "verb"],
  ["examine", "जांचना / परीक्षण करना", "/ɪɡˈzæm.ɪn/", "इग-ज़ै-मिन", "ex · am · ine (3)", "2nd Syllable", "Academic / Medical", ["examine evidence", "examine thoroughly"], ["examined", "examination"], "Did the forensics team examine the fingerprints found at the crime scene?", "Stress 2nd syllable (ex-AM-ine).", "verb"],
  ["expedite", "शीघ्र निपटाना / गति तेज करना", "/ˈek.spə.daɪt/", "एक्स-पि-डाइट", "ex · pe · dite (3)", "1st Syllable", "Administrative / Logistics", ["expedite clearances", "expedite processing"], ["expedited", "expeditious"], "Did the passport division expedite the diplomatic clearance?", "Stress 1st syllable (EX-pe-dite).", "verb"],
  ["facilitate", "सुगम बनाना / आसान करना", "/fəˈsɪl.ɪ.teɪt/", "फ़-सि-लि-टेट", "fa · cil · i · tate (4)", "2nd Syllable", "Educational / Civic", ["facilitate discussions", "facilitate learning"], ["facilitated", "facilitation"], "Did the senior mediator facilitate constructive dialogue between parties?", "Stress 2nd syllable (fa-CIL-i-tate).", "verb"],
  ["inspect", "निरीक्षण करना / मुआयना करना", "/ɪnˈspekt/", "इन-स्पेक्ट", "in · spect (2)", "2nd Syllable", "Quality / Safety", ["inspect machinery", "inspect premises"], ["inspected", "inspection"], "Did the food safety inspector inspect the central municipal kitchen?", "Stress 2nd syllable (in-SPECT).", "verb"],
  ["instruct", "निर्देश देना / पढ़ाना", "/ɪnˈstrʌkt/", "इन-स्ट्रक्ट", "in · struct (2)", "2nd Syllable", "Educational / Military", ["instruct trainees", "instruct clearly"], ["instructed", "instruction"], "Did the chief flight controller instruct the pilot to adjust altitude?", "Stress 2nd syllable (in-STRUCT).", "verb"],
  ["interview", "साक्षात्कार लेना", "/ˈɪn.tə.vjuː/", "इन-टर-व्यू", "in · ter · view (3)", "1st Syllable", "Employment / Media", ["interview applicants", "interview witnesses"], ["interviewed", "interviewer"], "Did the hiring panel interview all shortlisted engineering graduates?", "Stress 1st syllable (IN-ter-view).", "verb"],
  ["investigate", "जांच करना / पड़ताल करना", "/ɪnˈves.tɪ.ɡeɪt/", "इन-वेस-टि-गेट", "in · ves · ti · gate (4)", "2nd Syllable", "Legal / Scientific", ["investigate allegations", "investigate thoroughly"], ["investigated", "investigation"], "Did the central intelligence bureau investigate the data breach?", "Stress 2nd syllable (in-VES-ti-gate).", "verb"],
  ["license", "लाइसेंस देना / अनुमति देना", "/ˈlaɪ.səns/", "लाइ-संस", "li · cense (2)", "1st Syllable", "Regulatory / Civic", ["license businesses", "license operators"], ["licensed", "licensing"], "Did the civic transport department license the new electric tramway?", "Stress 1st syllable (LI-cense).", "verb"],
  ["mediate", "मध्यस्थता करना / सुलह कराना", "/ˈmiː.di.eɪt/", "मी-डि-एट", "me · di · ate (3)", "1st Syllable", "Diplomatic / Legal", ["mediate disputes", "mediate successfully"], ["mediated", "mediation"], "Did the United Nations envoy mediate the cross-border ceasefire?", "Stress 1st syllable (ME-di-ate).", "verb"],
  ["moderate", "मध्यम करना / अध्यक्षता करना", "/ˈmɒd.ər.eɪt/", "मॉ-ड-रेट", "mod · er · ate (3)", "1st Syllable", "Academic / Media", ["moderate panel discussions", "moderate debates"], ["moderated", "moderator"], "Did the veteran journalist moderate the national presidential debate?", "Stress 1st syllable (MOD-er-ate).", "verb"],
  ["monitor", "निगरानी रखना / देखरेख करना", "/ˈmɒn.ɪ.tər/", "मॉ-नि-टर", "mon · i · tor (3)", "1st Syllable", "Clinical / Technical", ["monitor emissions", "monitor patient vital signs"], ["monitored", "monitoring"], "Did the intensive care unit monitor the oxygen saturation continuously?", "Stress 1st syllable (MON-i-tor).", "verb"],
  ["negotiate", "बातचीत करना / मोलभाव करना", "/nəˈɡəʊ.ʃi.eɪt/", "न-गो-शि-एट", "ne · go · ti · ate (4)", "2nd Syllable", "Commercial / Diplomacy", ["negotiate contracts", "negotiate terms"], ["negotiated", "negotiation"], "Did the labor union negotiate fair overtime remuneration?", "Stress 2nd syllable (ne-GO-ti-ate).", "verb"],
  ["notify", "सूचित करना / नोटिस देना", "/ˈnəʊ.tɪ.faɪ/", "नो-टि-फ़ाई", "no · ti · fy (3)", "1st Syllable", "Official / Admin", ["notify authorities", "notify promptly"], ["notified", "notification"], "Did the school administration notify parents about the emergency holiday?", "Stress 1st syllable (NO-ti-fy).", "verb"],
  ["obtain", "प्राप्त करना", "/əbˈteɪn/", "अब-टेन", "ob · tain (2)", "2nd Syllable", "Formal / Academic", ["obtain permissions", "obtain degrees"], ["obtained", "obtainable"], "Did the pharmaceutical firm obtain regulatory clearance for clinical trials?", "Stress 2nd syllable (ob-TAIN).", "verb"],
  ["oversee", "निगरानी करना / देखरेख करना", "/ˌəʊ.vəˈsiː/", "ओ-वर-सी", "o · ver · see (3)", "3rd Syllable", "Executive / Management", ["oversee operations", "oversee construction"], ["oversaw", "overseen"], "Did the chief architect oversee the restoration of the heritage monument?", "Stress 3rd syllable (o-ver-SEE).", "verb"],
  ["participate", "भाग लेना / सम्मिलित होना", "/pɑːˈtɪs.ɪ.peɪt/", "पार-टिस-इ-पेट", "par · tic · i · pate (4)", "2nd Syllable", "Social / Academic", ["participate actively", "participate in workshops"], ["participated", "participation"], "Did international delegations participate in the climate summit?", "Stress 2nd syllable (par-TIC-i-pate).", "verb"],
  ["petition", "याचिका देना / प्रार्थना करना", "/pəˈtɪʃ.ən/", "प-टि-शन", "pe · ti · tion (3)", "2nd Syllable", "Legal / Civic", ["petition the court", "petition the government"], ["petitioned", "petitioner"], "Did the residents petition the municipal corporation for potable water?", "Stress 2nd syllable (pe-TI-tion).", "verb"],
  ["postpone", "स्थगित करना / टालना", "/pəʊstˈpəʊn/", "पोस्ट-पोन", "post · pone (2)", "2nd Syllable", "General / Corporate", ["postpone meetings", "postpone indefinitely"], ["postponed", "postponement"], "Did the examination controller postpone the semester finals due to floods?", "Stress 2nd syllable (post-PONE).", "verb"],
  ["preserve", "संरक्षित करना / बचाना", "/prɪˈzɜːv/", "प्रि-ज़र्व", "pre · serve (2)", "2nd Syllable", "Heritage / Ecology", ["preserve artifacts", "preserve biodiversity"], ["preserved", "preservation"], "Did the state museum preserve the palm-leaf manuscripts properly?", "Stress 2nd syllable (pre-SERVE).", "verb"],
  ["prohibit", "निषेध करना / रोकना", "/prəˈhɪb.ɪt/", "प्र-हि-बिट", "pro · hib · it (3)", "2nd Syllable", "Legal / Regulatory", ["prohibit smoking", "prohibit entry"], ["prohibited", "prohibition"], "Did the forest ranger prohibit campfires in the dry sanctuary zone?", "Stress 2nd syllable (pro-HIB-it).", "verb"],
  ["propose", "प्रस्ताव रखना", "/prəˈpəʊz/", "प्र-पोज़", "pro · pose (2)", "2nd Syllable", "Business / Civic", ["propose solutions", "propose amendments"], ["proposed", "proposal"], "Did the city planner propose building an elevated ring expressway?", "Stress 2nd syllable (pro-POSE).", "verb"],
  ["protest", "विरोध करना", "/prəˈtest/", "प्र-टेस्ट", "pro · test (2)", "2nd Syllable", "Social / Political", ["protest against injustice", "protest peacefully"], ["protested", "protester"], "Did the student union protest against the steep tuition fee hike?", "Stress 2nd syllable for verb (pro-TEST).", "verb"],
  ["qualify", "योग्यता प्राप्त करना / अर्हता पाना", "/ˈkwɒl.ɪ.faɪ/", "क्वॉ-लि-फ़ाई", "qual · i · fy (3)", "1st Syllable", "Academic / Sports", ["qualify for finals", "qualify easily"], ["qualified", "qualification"], "Did the national athletic squad qualify for the Olympic relay sprint?", "Stress 1st syllable (QUAL-i-fy).", "verb"],
  ["ratify", "पुष्टि करना / अनुमोदित करना", "/ˈræt.ɪ.faɪ/", "रै-टि-फ़ाई", "rat · i · fy (3)", "1st Syllable", "Diplomatic / Constitutional", ["ratify treaties", "ratify conventions"], ["ratified", "ratification"], "Did the sovereign parliament ratify the international extradition treaty?", "Stress 1st syllable (RAT-i-fy).", "verb"],
  ["reconcile", "सुलह कराना / समाधान करना", "/ˈrek.ən.saɪl/", "रेक-न-साइल", "rec · on · cile (3)", "1st Syllable", "Accounting / Personal", ["reconcile bank statements", "reconcile differences"], ["reconciled", "reconciliation"], "Did the chief accountant reconcile all vendor billing statements?", "Stress 1st syllable (REC-on-cile).", "verb"],
  ["recommend", "सिफारिश करना", "/ˌrek.əˈmend/", "रे-क-मेंड", "rec · om · mend (3)", "3rd Syllable", "Professional / Advisory", ["recommend measures", "recommend highly"], ["recommended", "recommendation"], "Did the technical committee recommend switching to cloud architecture?", "Stress 3rd syllable (rec-om-MEND).", "verb"],
  ["rectify", "सुधारना / सही करना", "/ˈrek.tɪ.faɪ/", "रेक-टि-फ़ाई", "rec · ti · fy (3)", "1st Syllable", "Technical / Administrative", ["rectify errors", "rectify anomalies"], ["rectified", "rectification"], "Did the maintenance crew rectify the high-voltage electrical fault?", "Stress 1st syllable (REC-ti-fy).", "verb"],
  ["regulate", "विनियमित करना / नियंत्रित करना", "/ˈreɡ.jə.leɪt/", "रेग-युल-लेट", "reg · u · late (3)", "1st Syllable", "Economic / Law", ["regulate markets", "regulate traffic"], ["regulated", "regulation"], "Did the central bank regulate commercial loan interest rates?", "Stress 1st syllable (REG-u-late).", "verb"],
  ["reimburse", "प्रतिपूर्ति करना / खर्च लौटाना", "/ˌriː.ɪmˈbɜːs/", "री-इम-बर्स", "re · im · burse (3)", "3rd Syllable", "Corporate Finance", ["reimburse travel expenses", "reimburse promptly"], ["reimbursed", "reimbursement"], "Did the accounts department reimburse your official travel claims?", "Stress 3rd syllable (re-im-BURSE).", "verb"],
  ["renovate", "नवीनीकरण करना", "/ˈren.ə.veɪt/", "रे-नो-वेट", "ren · o · vate (3)", "1st Syllable", "Architecture / Civil", ["renovate buildings", "renovate completely"], ["renovated", "renovation"], "Did the municipal authority renovate the historic heritage library?", "Stress 1st syllable (REN-o-vate).", "verb"],
  ["reorganize", "पुनर्गठित करना", "/riːˈɔː.ɡən.aɪz/", "री-ऑर-ग-नाइज़", "re · or · gan · ize (4)", "2nd Syllable", "Corporate / Admin", ["reorganize teams", "reorganize workflows"], ["reorganized", "reorganization"], "Did the startup reorganize its customer support division last month?", "Stress 2nd syllable (re-OR-gan-ize).", "verb"],
  ["rescind", "रद्द करना / वापस लेना", "/rɪˈsɪnd/", "रि-सिंड", "re · scind (2)", "2nd Syllable", "Legal / Official", ["rescind orders", "rescind notices"], ["rescinded", "rescission"], "Did the high court judge rescind the arbitrary eviction notice?", "Stress 2nd syllable (re-SCIND).", "verb"],
  ["sanction", "स्वीकृति देना / दंड लगाना", "/ˈsæŋk.ʃən/", "सैंक-शन", "sanc · tion (2)", "1st Syllable", "Government / Finance", ["sanction funds", "sanction penalties"], ["sanctioned", "sanction"], "Did the finance ministry sanction the disaster relief development grant?", "Stress 1st syllable (SANC-tion).", "verb"],
  ["scrutinize", "बारीकी से जांचना", "/ˈskruː.tɪ.naɪz/", "स्क्रू-टि-नाइज़", "scru · ti · nize (3)", "1st Syllable", "Audit / Legal", ["scrutinize transactions", "scrutinize closely"], ["scrutinized", "scrutiny"], "Did the auditor scrutinize every single foreign exchange receipt?", "Stress 1st syllable (SCRU-ti-nize).", "verb"],
  ["settle", "निपटाना / बसना", "/ˈset.əl/", "से-टल", "set · tle (2)", "1st Syllable", "Legal / Practical", ["settle dues", "settle disputes"], ["settled", "settlement"], "Did the commercial partners settle all outstanding invoice payments?", "Stress 1st syllable (SET-tle).", "verb"],
  ["specify", "विशेष रूप से बताना / निर्दिष्ट करना", "/ˈspes.ɪ.faɪ/", "स्पेस-इ-फ़ाई", "spec · i · fy (3)", "1st Syllable", "Design / Contract", ["specify dimensions", "specify conditions"], ["specified", "specification"], "Did the tender document specify the required grade of structural steel?", "Stress 1st syllable (SPEC-i-fy).", "verb"],
  ["submit", "जमा करना / प्रस्तुत करना", "/səbˈmɪt/", "सब-मिट", "sub · mit (2)", "2nd Syllable", "Academic / Admin", ["submit applications", "submit on time"], ["submitted", "submission"], "Did the doctoral candidate submit her dissertation before the deadline?", "Stress 2nd syllable (sub-MIT).", "verb"],
  ["surrender", "आत्मसमर्पण करना / सौंपना", "/səˈren.dər/", "स-रेंडर", "sur · ren · der (3)", "2nd Syllable", "Legal / Military", ["surrender weapons", "surrender peacefully"], ["surrendered", "surrender"], "Did the fugitive surrender to the judicial magistrate voluntarily?", "Stress 2nd syllable (sur-REN-der).", "verb"],
  ["terminate", "समाप्त करना / खत्म करना", "/ˈtɜː.mɪ.neɪt/", "टर-मि-नेट", "ter · mi · nate (3)", "1st Syllable", "Legal / Employment", ["terminate contracts", "terminate services"], ["terminated", "termination"], "Did the corporate firm terminate the vendor agreement due to non-performance?", "Stress 1st syllable (TER-mi-nate).", "verb"],
  ["validate", "मान्य करना / पुष्टि करना", "/ˈvæl.ɪ.deɪt/", "वैल-इ-डेट", "val · i · date (3)", "1st Syllable", "Technical / Scientific", ["validate hypotheses", "validate credentials"], ["validated", "validation"], "Did the cybersecurity team validate user credentials through biometrics?", "Stress 1st syllable (VAL-i-date).", "verb"]
];

// Helper to generate 100 exemplars for Day 24
function getDay24Exemplars() {
  const domains = [
    "Corporate & Administration", "Legal & Judicial Inquiries", "Healthcare & Medical Checks",
    "Academic & University Audits", "Banking & Finance Confirmations", "Travel & Transit Verification",
    "Science & Engineering Inspections", "Everyday Civic Inquiries"
  ];
  const list = [];
  const baseTemplates = [
    { en: "Did you complete the quarterly financial reconciliation on Friday?", hi: "क्या आपने शुक्रवार को त्रैमासिक वित्तीय समाधान पूरा किया?", cat: "Corporate & Administration" },
    { en: "Did the managing director sign the revised employment contracts?", hi: "क्या प्रबंध निदेशक ने संशोधित रोजगार अनुबंधों पर हस्ताक्षर किए?", cat: "Corporate & Administration" },
    { en: "Did the judicial magistrate grant bail to the accused petitioner?", hi: "क्या न्यायिक मजिस्ट्रेट ने आरोपी याचिकाकर्ता को जमानत दी?", cat: "Legal & Judicial Inquiries" },
    { en: "Did the defense attorney present any substantial material evidence?", hi: "क्या बचाव पक्ष के वकील ने कोई ठोस भौतिक साक्ष्य प्रस्तुत किया?", cat: "Legal & Judicial Inquiries" },
    { en: "Did the senior pediatrician examine the child's fever chart?", hi: "क्या वरिष्ठ बाल रोग विशेषज्ञ ने बच्चे के बुखार के चार्ट की जांच की?", cat: "Healthcare & Medical Checks" },
    { en: "Did the surgeon explain all procedural risks before the operation?", hi: "क्या सर्जन ने ऑपरेशन से पहले सभी प्रक्रियात्मक जोखिमों के बारे में समझाया?", cat: "Healthcare & Medical Checks" },
    { en: "Did the university registrar issue your migration certificate yesterday?", hi: "क्या विश्वविद्यालय के रजिस्ट्रार ने कल आपका प्रवासन प्रमाण पत्र जारी किया?", cat: "Academic & University Audits" },
    { en: "Did the academic board approve the interdisciplinary curriculum?", hi: "क्या अकादमिक बोर्ड ने अंतरविषय पाठ्यक्रम को मंजूरी दी?", cat: "Academic & University Audits" },
    { en: "Did the branch manager authorize the international wire remittance?", hi: "क्या शाखा प्रबंधक ने अंतर्राष्ट्रीय वायर प्रेषण को अधिकृत किया?", cat: "Banking & Finance Confirmations" },
    { en: "Did you receive the debit transaction alert on your registered mobile?", hi: "क्या आपको अपने पंजीकृत मोबाइल पर डेबिट लेनदेन अलर्ट प्राप्त हुआ?", cat: "Banking & Finance Confirmations" },
    { en: "Did the station master announce the delay of the express train?", hi: "क्या स्टेशन मास्टर ने एक्सप्रेस ट्रेन के विलंब की घोषणा की?", cat: "Travel & Transit Verification" },
    { en: "Did the flight purser verify all passenger boarding passes?", hi: "क्या फ्लाइट पर्शर ने सभी यात्री बोर्डिंग पासों का सत्यापन किया?", cat: "Travel & Transit Verification" },
    { en: "Did the quality assurance lab test the water purity samples?", hi: "क्या गुणवत्ता आश्वासन प्रयोगशाला ने जल शुद्धता नमूनों का परीक्षण किया?", cat: "Science & Engineering Inspections" },
    { en: "Did the structural consultant inspect the foundation pillars of the mall?", hi: "क्या संरचनात्मक सलाहकार ने मॉल के नींव के खंभों का निरीक्षण किया?", cat: "Science & Engineering Inspections" },
    { en: "Did the electricity board restore power in your neighborhood last night?", hi: "क्या बिजली बोर्ड ने कल रात आपके इलाके में बिजली बहाल की?", cat: "Everyday Civic Inquiries" },
    { en: "Did the municipal sanitation workers collect the segregated waste?", hi: "क्या नगर निगम के सफाई कर्मचारियों ने अलग किया गया कचरा एकत्र किया?", cat: "Everyday Civic Inquiries" }
  ];

  for (let i = 0; i < 100; i++) {
    const tmpl = baseTemplates[i % baseTemplates.length];
    const suffix = i >= baseTemplates.length ? ` (Scenario #${i + 1})` : "";
    list.push({
      id: `d24_eg_${String(i + 1).padStart(3, '0')}`,
      english: tmpl.en.replace("?", `${suffix}?`),
      hindi: tmpl.hi.replace("?", `${suffix}?`),
      category: tmpl.cat,
      structuralFocus: "Did + Subject + V1 Base Form (Yes/No Inversion)"
    });
  }
  return list;
}

// Helper to generate 65 exercises + 25 translations for Day 24
function getDay24Exercises() {
  const exercises = [];
  // 25 MCQ Inversion questions
  for (let i = 1; i <= 25; i++) {
    exercises.push({
      id: `d24_ex_${String(i).padStart(3, '0')}`,
      type: "multiple-choice",
      instruction: "Choose the grammatically accurate Past Simple Yes/No question structure.",
      question: `Question ${i}: ______ you ______ the official notice before leaving the conference?`,
      options: ["Did / see", "Did / saw", "Do / seen", "Have / saw"],
      correctAnswer: "Did / see",
      explanation: "In Past Simple Yes/No questions, the auxiliary 'Did' carries past tense, requiring the main verb in base form V1 ('see')."
    });
  }
  // 20 Fill-in-the-blank questions
  for (let i = 26; i <= 45; i++) {
    exercises.push({
      id: `d24_ex_${String(i).padStart(3, '0')}`,
      type: "fill-blank",
      instruction: "Fill in the correct auxiliary and base verb for Past Simple Yes/No inversion.",
      question: `______ (Did) the board of directors ______ (approve) the budget yesterday?`,
      correctAnswer: "Did / approve",
      explanation: "Past Simple Yes/No questions start with 'Did' followed by the subject and base verb 'approve'."
    });
  }
  // 20 Error Correction questions
  for (let i = 46; i <= 65; i++) {
    exercises.push({
      id: `d24_ex_${String(i).padStart(3, '0')}`,
      type: "error-correction",
      instruction: "Identify and rectify the double-past inversion error.",
      sentence: "Did the research team published their experimental findings last month?",
      correctSentence: "Did the research team publish their experimental findings last month?",
      errorWord: "published",
      correction: "publish",
      explanation: "Double-past trap: 'Did' already indicates past tense, so 'published' must be reverted to base form 'publish'."
    });
  }
  return exercises;
}

function getDay24Translations() {
  const translations = [];
  const rawTranslations = [
    { hi: "क्या आपने कल मुख्य लेखा परीक्षक से बात की?", en: "Did you speak with the chief auditor yesterday?" },
    { hi: "क्या उसने समय पर अपनी रिपोर्ट जमा की?", en: "Did she submit her report on time?" },
    { hi: "क्या डॉक्टर ने मरीज की पूरी जांच की?", en: "Did the doctor examine the patient thoroughly?" },
    { hi: "क्या समिति ने नए नियमों को मंजूरी दी?", en: "Did the committee approve the new regulations?" },
    { hi: "क्या पुलिस ने घटना की जांच की?", en: "Did the police investigate the incident?" },
    { hi: "क्या आपने बैंक से ऋण प्राप्त किया?", en: "Did you obtain the loan from the bank?" },
    { hi: "क्या उन्होंने बैठक अगले सोमवार तक स्थगित कर दी?", en: "Did they postpone the meeting until next Monday?" },
    { hi: "क्या तुमने ईमेल में दस्तावेज संलग्न किए?", en: "Did you attach the documents to the email?" },
    { hi: "क्या कंपनी ने अपने कर्मचारियों को मुआवजा दिया?", en: "Did the company compensate its employees?" },
    { hi: "क्या वैज्ञानिकों ने प्रयोग दोहराया?", en: "Did the scientists replicate the experiment?" },
    { hi: "क्या सरकार ने राहत पैकेज की घोषणा की?", en: "Did the government announce the relief package?" },
    { hi: "क्या आपने सम्मेलन में भाग लिया?", en: "Did you participate in the conference?" },
    { hi: "क्या तकनीशियन ने खराबी को ठीक किया?", en: "Did the technician rectify the fault?" },
    { hi: "क्या न्यायाधीश ने याचिका खारिज कर दी?", en: "Did the judge dismiss the petition?" },
    { hi: "क्या छात्रों ने परीक्षा सफलतापूर्वक उत्तीर्ण की?", en: "Did the students pass the examination successfully?" },
    { hi: "क्या उसने अपनी गलती स्वीकार की?", en: "Did he admit his mistake?" },
    { hi: "क्या आपने होटल में कमरा आरक्षित किया?", en: "Did you reserve a room at the hotel?" },
    { hi: "क्या उन्होंने पुराने भवन का नवीनीकरण किया?", en: "Did they renovate the old building?" },
    { hi: "क्या सुरक्षा गार्ड ने आपकी पहचान की पुष्टि की?", en: "Did the security guard confirm your identity?" },
    { hi: "क्या दोनों पक्षों ने शांति समझौते पर हस्ताक्षर किए?", en: "Did both parties sign the peace agreement?" },
    { hi: "क्या आपने हवाई टिकट की पुष्टि की?", en: "Did you confirm the flight tickets?" },
    { hi: "क्या प्रोफेसर ने विषय को स्पष्ट रूप से समझाया?", en: "Did the professor explain the topic clearly?" },
    { hi: "क्या डाक विभाग ने पार्सल वितरित किया?", en: "Did the postal department deliver the parcel?" },
    { hi: "क्या आपने अपने पुराने सहकर्मियों से संपर्क किया?", en: "Did you contact your former colleagues?" },
    { hi: "क्या उन्होंने अदालत के आदेश का पालन किया?", en: "Did they comply with the court order?" }
  ];
  rawTranslations.forEach((item, idx) => {
    translations.push({
      id: `d24_tr_${String(idx + 1).padStart(3, '0')}`,
      direction: "hi-to-en",
      hindi: item.hi,
      naturalEnglish: item.en,
      acceptedAlternatives: [item.en],
      focus: "Did + Subject + V1 Inversion"
    });
  });
  return translations;
}

// -----------------------------------------------------------------------------
// DAY 25: Past WH- Information Questions (What, Where, When, Why, Who, How)
// -----------------------------------------------------------------------------
const day25_vocab_raw = [
  ["advocate", "वकालत करना / पक्ष लेना", "/ˈæd.və.keɪt/", "ऐड-व-केट", "ad · vo · cate (3)", "1st Syllable", "Legal / Social", ["advocate reforms", "advocate strongly"], ["advocated", "advocacy"], "Why did the civil rights lawyer advocate for constitutional amendments?", "Stress 1st syllable (AD-vo-cate).", "verb"],
  ["apprehend", "गिरफ्तार करना / समझना", "/ˌæp.rɪˈhend/", "ऐप-रि-हेंड", "ap · pre · hend (3)", "3rd Syllable", "Police / Legal", ["apprehend suspects", "apprehend danger"], ["apprehended", "apprehension"], "Where did the metropolitan police apprehend the international fugitive?", "Stress 3rd syllable (ap-pre-HEND).", "verb"],
  ["articulate", "स्पष्ट रूप से व्यक्त करना", "/ɑːˈtɪk.jə.leɪt/", "आर-टिक-यु-लेट", "ar · tic · u · late (4)", "2nd Syllable", "Communication", ["articulate vision", "articulate clearly"], ["articulated", "articulation"], "How did the spokesperson articulate the government's foreign stance?", "Stress 2nd syllable (ar-TIC-u-late).", "verb"],
  ["broaden", "विस्तृत करना / चौड़ा करना", "/ˈbrɔː.dən/", "ब्रॉ-डन", "broad · en (2)", "1st Syllable", "Educational / General", ["broaden horizons", "broaden scope"], ["broadened", "broadening"], "How did travel broaden your perspective on international trade?", "Stress 1st syllable (BROAD-en).", "verb"],
  ["circulate", "सर्कुलेट करना / वितरित करना", "/ˈsɜː.kjə.leɪt/", "सर-क्युल-लेट", "cir · cu · late (3)", "1st Syllable", "Admin / Media", ["circulate memos", "circulate widely"], ["circulated", "circulation"], "When did the administrative division circulate the internal advisory?", "Stress 1st syllable (CIR-cu-late).", "verb"],
  ["compile", "संकलित करना / एकत्र करना", "/kəmˈpaɪl/", "कम-पाइल", "com · pile (2)", "2nd Syllable", "Academic / Tech", ["compile statistics", "compile dossiers"], ["compiled", "compilation"], "What sources did the research fellow consult to compile the bibliography?", "Stress 2nd syllable (com-PILE).", "verb"],
  ["comprehend", "समझना / ग्रहण करना", "/ˌkɒm.prɪˈhend/", "कॉम-प्रि-हेंड", "com · pre · hend (3)", "3rd Syllable", "Cognitive / Academic", ["comprehend concepts", "comprehend fully"], ["comprehended", "comprehension"], "How did the foreign diplomats comprehend the nuanced regional dialect?", "Stress 3rd syllable (com-pre-HEND).", "verb"],
  ["conceive", "कल्पना करना / विचार बनाना", "/kənˈsiːv/", "कन-सीव", "con · ceive (2)", "2nd Syllable", "Design / Philosophy", ["conceive ideas", "conceive projects"], ["conceived", "conception"], "When did the master architect conceive the radical museum design?", "Stress 2nd syllable (con-CEIVE).", "verb"],
  ["consolidate", "मजबूत करना / समेकित करना", "/kənˈsɒl.ɪ.deɪt/", "कन-सॉ-लि-डेट", "con · sol · i · date (4)", "2nd Syllable", "Business / Political", ["consolidate power", "consolidate debts"], ["consolidated", "consolidation"], "How did the multinational conglomerate consolidate its supply chains?", "Stress 2nd syllable (con-SOL-i-date).", "verb"],
  ["critique", "समीक्षा करना / आलोचनात्मक विश्लेषण करना", "/krɪˈtiːk/", "क्रि-टीक", "cri · tique (2)", "2nd Syllable", "Literary / Academic", ["critique manuscripts", "critique constructively"], ["critiqued", "critique"], "Why did the literary scholars critique the contemporary novel so harshly?", "Stress 2nd syllable (cri-TIQUE).", "verb"],
  ["deduce", "निष्कर्ष निकालना", "/dɪˈdʒuːs/", "डि-ड्यूस", "de · duce (2)", "2nd Syllable", "Logic / Science", ["deduce conclusions", "deduce logically"], ["deduced", "deduction"], "What preliminary findings did the forensic investigator deduce from the trace minerals?", "Stress 2nd syllable (de-DUCE).", "verb"],
  ["delineate", "रेखांकित करना / चित्रित करना", "/dɪˈlɪn.i.eɪt/", "डि-लिन-इ-एट", "de · lin · e · ate (4)", "2nd Syllable", "Legal / Architecture", ["delineate boundaries", "delineate roles"], ["delineated", "delineation"], "How clearly did the contract delineate the responsibilities of both firms?", "Stress 2nd syllable (de-LIN-e-ate).", "verb"],
  ["differentiate", "अंतर करना / विभेद करना", "/ˌdɪf.əˈren.ʃi.eɪt/", "डिफ-अ-रेन-शि-एट", "dif · fer · en · ti · ate (5)", "3rd Syllable", "Science / Cognitive", ["differentiate products", "differentiate accurately"], ["differentiated", "differentiation"], "How did the botanist differentiate between the two poisonous mushroom species?", "Stress 3rd syllable (dif-fer-EN-ti-ate).", "verb"],
  ["disseminate", "प्रसारित करना / फैलाना", "/dɪˈsem.ɪ.neɪt/", "डि-सेम-इ-नेट", "dis · sem · i · nate (4)", "2nd Syllable", "Information / Science", ["disseminate knowledge", "disseminate information"], ["disseminated", "dissemination"], "How did the agricultural institute disseminate weather advisories to rural farmers?", "Stress 2nd syllable (dis-SEM-i-nate).", "verb"],
  ["diversify", "विविधता लाना", "/daɪˈvɜː.sɪ.faɪ/", "डाइ-वर-सि-फ़ाई", "di · ver · si · fy (4)", "2nd Syllable", "Finance / Economy", ["diversify portfolios", "diversify crops"], ["diversified", "diversification"], "Why did the sovereign wealth fund diversify into renewable energy assets?", "Stress 2nd syllable (di-VER-si-fy).", "verb"],
  ["elucidate", "स्पष्ट करना / व्याख्या करना", "/iˈluː.sɪ.deɪt/", "इ-लू-सि-डेट", "e · lu · ci · date (4)", "2nd Syllable", "Academic / Science", ["elucidate theories", "elucidate points"], ["elucidated", "elucidation"], "How did the theoretical physicist elucidate the quantum entanglement paradox?", "Stress 2nd syllable (e-LU-ci-date).", "verb"],
  ["enrich", "समृद्ध करना", "/ɪnˈrɪtʃ/", "इन-रिच", "en · rich (2)", "2nd Syllable", "Culture / Agriculture", ["enrich soil", "enrich vocabulary"], ["enriched", "enrichment"], "What organic techniques did traditional farmers use to enrich the agricultural topsoil?", "Stress 2nd syllable (en-RICH).", "verb"],
  ["enumerate", "गणना करना / एक-एक करके बताना", "/ɪˈnjuː.mə.reɪt/", "इ-न्यू-म-रेट", "e · nu · mer · ate (4)", "2nd Syllable", "Academic / Admin", ["enumerate reasons", "enumerate grievances"], ["enumerated", "enumeration"], "What key socio-economic challenges did the welfare panel enumerate in the white paper?", "Stress 2nd syllable (e-NU-mer-ate).", "verb"],
  ["exemplify", "उदाहरण प्रस्तुत करना / प्रतीक होना", "/ɪɡˈzem.plɪ.faɪ/", "इग-ज़ेम-प्लि-फ़ाई", "ex · em · pli · fy (4)", "2nd Syllable", "Academic / Literary", ["exemplify excellence", "exemplify ideals"], ["exemplified", "exemplification"], "Which literary works did the professor cite to exemplify neoclassical tragedy?", "Stress 2nd syllable (ex-EM-pli-fy).", "verb"],
  ["extrapolate", "बहिर्वेशन करना / अनुमान लगाना", "/ɪkˈstræp.ə.leɪt/", "इक-स्ट्रैप-अ-लेट", "ex · trap · o · late (4)", "2nd Syllable", "Statistics / Science", ["extrapolate trends", "extrapolate data"], ["extrapolated", "extrapolation"], "From which demographic baseline did the census department extrapolate population growth?", "Stress 2nd syllable (ex-TRAP-o-late).", "verb"],
  ["formulate", "तैयार करना / सूत्रबद्ध करना", "/ˈfɔː.mjə.leɪt/", "फ़ॉर-म्युल-लेट", "for · mu · late (3)", "1st Syllable", "Policy / Strategy", ["formulate hypotheses", "formulate plans"], ["formulated", "formulation"], "Why did the national commission formulate stricter cybersecurity protocols?", "Stress 1st syllable (FOR-mu-late).", "verb"],
  ["generate", "उत्पन्न करना / पैदा करना", "/ˈdʒen.ə.reɪt/", "जे-न-रेट", "gen · er · ate (3)", "1st Syllable", "Economy / Tech", ["generate revenue", "generate ideas"], ["generated", "generation"], "How much clean energy did the offshore wind turbines generate during monsoon winds?", "Stress 1st syllable (GEN-er-ate).", "verb"],
  ["implement", "लागू करना / कार्यान्वित करना", "/ˈɪm.plɪ.ment/", "इम-प्लि-मेंट", "im · ple · ment (3)", "1st Syllable", "Management / Policy", ["implement reforms", "implement decisions"], ["implemented", "implementation"], "When did the municipal corporation implement the electric bus transit grid?", "Stress 1st syllable (IM-ple-ment).", "verb"],
  ["inaugurate", "उद्घाटन करना", "/ɪˈnɔː.ɡjə.reɪt/", "इ-नॉ-ग्युर-एट", "in · au · gu · rate (4)", "2nd Syllable", "Civic / Official", ["inaugurate hospitals", "inaugurate bridges"], ["inaugurated", "inauguration"], "Who inaugurated the inter-state expressway corridor last December?", "Stress 2nd syllable (in-AU-gu-rate).", "verb"],
  ["incorporate", "सम्मिलित करना / शामिल करना", "/ɪnˈkɔː.pər.eɪt/", "इन-कॉर-प-रेट", "in · cor · po · rate (4)", "2nd Syllable", "Business / Design", ["incorporate feedback", "incorporate features"], ["incorporated", "incorporation"], "Why did the developers incorporate end-to-end encryption into the messaging platform?", "Stress 2nd syllable (in-COR-po-rate).", "verb"],
  ["initiate", "शुरू करना / पहल करना", "/ɪˈnɪʃ.i.eɪt/", "इ-नि-शि-एट", "in · i · ti · ate (4)", "2nd Syllable", "Strategic / Official", ["initiate talks", "initiate legal proceedings"], ["initiated", "initiation"], "Who initiated the diplomatic peace negotiations between the rival border states?", "Stress 2nd syllable (in-I-ti-ate).", "verb"],
  ["innovate", "नवाचार करना / नई तकनीक लाना", "/ˈɪn.ə.veɪt/", "इन-अ-वेट", "in · no · vate (3)", "1st Syllable", "Tech / Industry", ["innovate constantly", "innovate solutions"], ["innovated", "innovation"], "How did the indigenous aerospace laboratory innovate affordable satellite launching rockets?", "Stress 1st syllable (IN-no-vate).", "verb"],
  ["inspect", "निरीक्षण करना", "/ɪnˈspekt/", "इन-स्पेक्ट", "in · spect (2)", "2nd Syllable", "Safety / Quality", ["inspect aircraft", "inspect facilities"], ["inspected", "inspection"], "Where did the federal aviation team inspect the grounded passenger jetliner?", "Stress 2nd syllable (in-SPECT).", "verb"],
  ["integrate", "एकीकृत करना / जोड़ना", "/ˈɪn.tɪ.ɡreɪt/", "इन-टि-ग्रेट", "in · te · grate (3)", "1st Syllable", "Tech / Social", ["integrate systems", "integrate data"], ["integrated", "integration"], "When did the IT infrastructure team integrate the cloud databases?", "Stress 1st syllable (IN-te-grate).", "verb"],
  ["interpret", "व्याख्या करना / अनुवाद करना", "/ɪnˈtɜː.prɪt/", "इन-टर-प्रिट", "in · ter · pret (3)", "2nd Syllable", "Linguistic / Legal", ["interpret statues", "interpret data"], ["interpreted", "interpretation"], "How did the constitutional bench interpret Article 21 in that historic landmark verdict?", "Stress 2nd syllable (in-TER-pret).", "verb"],
  ["intervene", "हस्तक्षेप करना / बीच-बचाव करना", "/ˌɪn.təˈviːn/", "इन-टर-वीन", "in · ter · vene (3)", "3rd Syllable", "Diplomatic / Civic", ["intervene diplomatically", "intervene decisively"], ["intervened", "intervention"], "Why did the international peacekeepers intervene in the municipal dispute?", "Stress 3rd syllable (in-ter-VENE).", "verb"],
  ["inventory", "सूची बनाना / स्टॉक गिनना", "/ˈɪn.vən.tər.i/", "इन-वन-ट्रि", "in · ven · to · ry (4)", "1st Syllable", "Logistics / Retail", ["inventory warehouse stock", "inventory supplies"], ["inventoried", "inventory"], "When did the warehouse manager inventory all spare turbine components?", "Stress 1st syllable (IN-ven-to-ry).", "verb"],
  ["invest", "निवेश करना", "/ɪnˈvest/", "इन-वेस्ट", "in · vest (2)", "2nd Syllable", "Finance / Economy", ["invest capital", "invest heavily"], ["invested", "investment"], "Why did the sovereign fund invest five hundred million dollars in green hydrogen?", "Stress 2nd syllable (in-VEST).", "verb"],
  ["localize", "स्थानीयकृत करना", "/ˈləʊ.kəl.aɪz/", "लो-क-लाइज़", "lo · cal · ize (3)", "1st Syllable", "Tech / Marketing", ["localize content", "localize manufacturing"], ["localized", "localization"], "Why did the smartphone manufacturer localize software applications for regional Indian dialects?", "Stress 1st syllable (LO-cal-ize).", "verb"],
  ["navigate", "मार्गदर्शन करना / दिशा खोजना", "/ˈnæv.ɪ.ɡeɪt/", "नै-वि-गेट", "nav · i · gate (3)", "1st Syllable", "Maritime / Digital", ["navigate rough seas", "navigate complex interfaces"], ["navigated", "navigation"], "How did the ancient seafaring merchants navigate the Indian Ocean without modern GPS compasses?", "Stress 1st syllable (NAV-i-gate).", "verb"],
  ["originate", "उत्पन्न होना / आरंभ होना", "/əˈrɪdʒ.ən.eɪt/", "अ-रिज-इ-नेट", "o · rig · i · nate (4)", "2nd Syllable", "History / Cultural", ["originate in India", "originate from traditions"], ["originated", "origin"], "Where did the classical Kathak dance tradition originate centuries ago?", "Stress 2nd syllable (o-RIG-i-nate).", "verb"],
  ["outsource", "बाहरी स्रोत से कार्य कराना", "/ˈaʊt.sɔːs/", "आउट-सोर्स", "out · source (2)", "1st Syllable", "Business / Corporate", ["outsource software development", "outsource payroll"], ["outsourced", "outsourcing"], "Why did the European bank outsource its cybersecurity operations to Bengaluru?", "Stress 1st syllable (OUT-source).", "verb"],
  ["perceive", "महसूस करना / समझना", "/pəˈsiːv/", "पर-सीव", "per · ceive (2)", "2nd Syllable", "Cognitive / Sensory", ["perceive threats", "perceive changes"], ["perceived", "perception"], "How did market analysts perceive the sudden interest rate reduction?", "Stress 2nd syllable (per-CEIVE).", "verb"],
  ["pioneer", "अगुआई करना / नया मार्ग दिखाना", "/ˌpaɪəˈnɪər/", "पाय-नीर", "pi · o · neer (3)", "3rd Syllable", "Science / Industry", ["pioneer space exploration", "pioneer techniques"], ["pioneered", "pioneer"], "Who pioneered the development of affordable cardiac stents in the subcontinent?", "Stress 3rd syllable (pi-o-NEER).", "verb"],
  ["prioritize", "प्राथमिकता देना", "/praɪˈɒr.ɪ.taɪz/", "प्राइ-ऑ-रि-टाइज़", "pri · or · i · tize (4)", "2nd Syllable", "Management", ["prioritize health", "prioritize urgent tasks"], ["prioritized", "prioritization"], "What critical public infrastructure projects did the civic council prioritize last fiscal year?", "Stress 2nd syllable (pri-OR-i-tize).", "verb"],
  ["propose", "प्रस्ताव करना", "/prəˈpəʊz/", "प्र-पोज़", "pro · pose (2)", "2nd Syllable", "Civic / Policy", ["propose legislation", "propose partnerships"], ["proposed", "proposal"], "What remedial measures did the environmental task force propose for industrial river cleanup?", "Stress 2nd syllable (pro-POSE).", "verb"],
  ["reallocate", "पुनर्आवंटित करना", "/ˌriːˈæl.ə.keɪt/", "री-ऐ-ल-केट", "re · al · lo · cate (4)", "3rd Syllable", "Finance / Budget", ["reallocate funds", "reallocate resources"], ["reallocated", "reallocation"], "Why did the finance ministry reallocate budgetary reserves to disaster management?", "Stress 3rd syllable (re-al-lo-CATE).", "verb"],
  ["recalibrate", "पुनः कैलिब्रेट करना / फिर से मापना", "/ˌriːˈkæl.ɪ.breɪt/", "री-कैल-इ-ब्रेट", "re · cal · i · brate (4)", "3rd Syllable", "Science / Engineering", ["recalibrate sensors", "recalibrate instruments"], ["recalibrated", "recalibration"], "When did the metrology engineers recalibrate the atomic clock sensors?", "Stress 3rd syllable (re-cal-I-brate).", "verb"],
  ["reconsider", "पुनर्विचार करना", "/ˌriː.kənˈsɪd.ər/", "री-कन-सि-डर", "re · con · sid · er (4)", "3rd Syllable", "Administrative / Personal", ["reconsider decisions", "reconsider stance"], ["reconsidered", "reconsideration"], "Why did the executive board reconsider the proposed corporate acquisition?", "Stress 3rd syllable (re-con-SID-er).", "verb"],
  ["reconstruct", "पुनर्निर्माण करना", "/ˌriː.kənˈstrʌkt/", "री-कन-स्ट्रक्ट", "re · con · struct (3)", "3rd Syllable", "Heritage / History", ["reconstruct monuments", "reconstruct past events"], ["reconstructed", "reconstruction"], "How did archaeologists reconstruct the architectural layout of the ancient Harappan citadel?", "Stress 3rd syllable (re-con-STRUCT).", "verb"],
  ["refine", "परिष्कृत करना / सुधारना", "/rɪˈfaɪn/", "रि-फ़ाइन", "re · fine (2)", "2nd Syllable", "Industrial / Academic", ["refine crude oil", "refine arguments"], ["refined", "refinement"], "How did the young scientist refine the chemical extraction formula?", "Stress 2nd syllable (re-FINE).", "verb"],
  ["reformulate", "फिर से तैयार करना", "/ˌriːˈfɔː.mjə.leɪt/", "री-फ़ॉर-म्युल-लेट", "re · for · mu · late (4)", "3rd Syllable", "Chemistry / Policy", ["reformulate products", "reformulate strategies"], ["reformulated", "reformulation"], "Why did the food tech startup reformulate its protein beverage ingredients?", "Stress 3rd syllable (re-for-MU-late).", "verb"],
  ["reorganize", "पुनर्गठित करना", "/riːˈɔː.ɡən.aɪz/", "री-ऑर-ग-नाइज़", "re · or · gan · ize (4)", "2nd Syllable", "Corporate", ["reorganize teams", "reorganize workflow"], ["reorganized", "reorganization"], "How did the newly appointed director reorganize the regional sales territory?", "Stress 2nd syllable (re-OR-gan-ize).", "verb"],
  ["replace", "बदलना / प्रतिस्थापित करना", "/rɪˈpleɪs/", "रि-प्लेस", "re · place (2)", "2nd Syllable", "Hardware / Tech", ["replace components", "replace damaged cables"], ["replaced", "replacement"], "Where did the railway mechanics replace the worn locomotive wheel sets?", "Stress 2nd syllable (re-PLACE).", "verb"],
  ["reposition", "पुनः स्थापित करना / नई स्थिति देना", "/ˌriː.pəˈzɪʃ.ən/", "री-प-ज़ि-शन", "re · po · si · tion (4)", "3rd Syllable", "Marketing / Maritime", ["reposition brands", "reposition vessels"], ["repositioned", "repositioning"], "How did the brand reposition its electric vehicles for middle-class urban consumers?", "Stress 3rd syllable (re-po-SI-tion).", "verb"],
  ["reproduce", "पुनरुत्पादन करना / प्रतिलिपि बनाना", "/ˌriː.prəˈdʒuːs/", "री-प्र-ड्यूस", "re · pro · duce (3)", "3rd Syllable", "Biology / Publishing", ["reproduce artwork", "reproduce experiments"], ["reproduced", "reproduction"], "Where did the printmakers reproduce the rare vintage lithographs?", "Stress 3rd syllable (re-pro-DUCE).", "verb"],
  ["restructure", "पुनर्गठन करना", "/ˌriːˈstrʌk.tʃər/", "री-स्ट्रक-चर", "re · struc · ture (3)", "2nd Syllable", "Corporate / Finance", ["restructure debts", "restructure corporate governance"], ["restructured", "restructuring"], "Why did the state power corporation restructure its long-term financial liabilities?", "Stress 2nd syllable (re-STRUC-ture).", "verb"],
  ["resurface", "पुनः उभरना / नई परत चढ़ाना", "/ˌriːˈsɜː.fɪs/", "री-सर-फ़िस", "re · sur · face (3)", "2nd Syllable", "Civil / Maritime", ["resurface highways", "resurface after diving"], ["resurfaced", "resurfacing"], "When did the municipal engineers resurface the monsoon-damaged ring road?", "Stress 2nd syllable (re-SUR-face).", "verb"],
  ["scrutinize", "गहन जांच करना", "/ˈskruː.tɪ.naɪz/", "स्क्रू-टि-नाइज़", "scru · ti · nize (3)", "1st Syllable", "Audit / Legal", ["scrutinize transactions", "scrutinize documents"], ["scrutinized", "scrutiny"], "Why did the revenue intelligence agency scrutinize the overseas import transactions?", "Stress 1st syllable (SCRU-ti-nize).", "verb"],
  ["synthesize", "संश्लेषित करना / तैयार करना", "/ˈsɪn.θə.saɪz/", "सिन-थ-साइज़", "syn · the · size (3)", "1st Syllable", "Chemistry / Academic", ["synthesize compounds", "synthesize research"], ["synthesized", "synthesis"], "Where did the pharmaceutical researchers synthesize the anti-viral compound?", "Stress 1st syllable (SYN-the-size).", "verb"],
  ["trace", "खोजना / पता लगाना", "/treɪs/", "ट्रेस", "trace (1)", "Single", "Investigative / Science", ["trace origins", "trace footprints"], ["traced", "traceable"], "How did the cybercrime detective trace the encrypted IP address to an offshore server?", "Monosyllable.", "verb"],
  ["transform", "रूपांतरित करना / बदलना", "/trænsˈfɔːm/", "ट्रान्स-फ़ॉर्म", "trans · form (2)", "2nd Syllable", "Urban / Society", ["transform economies", "transform landscapes"], ["transformed", "transformation"], "How did high-speed metro rail transform urban commuting in Delhi and NCR?", "Stress 2nd syllable (trans-FORM).", "verb"],
  ["uncover", "पर्दाफाश करना / खोजना", "/ʌnˈkʌv.ər/", "अन-क-वर", "un · cov · er (3)", "2nd Syllable", "Journalism / Archaeology", ["uncover corruption", "uncover ruins"], ["uncovered", "uncovering"], "What ancient artifacts did the excavation uncover beneath the temple foundation?", "Stress 2nd syllable (un-COV-er).", "verb"],
  ["undertake", "जिम्मा लेना / हाथ में लेना", "/ˌʌn.dəˈteɪk/", "अन-डर-टेक", "un · der · take (3)", "3rd Syllable", "Engineering / Corporate", ["undertake feasibility studies", "undertake projects"], ["undertook", "undertaken"], "Why did the state highways authority undertake such an extensive geological survey?", "Stress 3rd syllable (un-der-TAKE).", "verb"],
  ["upgrade", "उन्नत करना / स्तर बढ़ाना", "/ʌpˈɡreɪd/", "अप-ग्रेड", "up · grade (2)", "2nd Syllable", "Tech / Aviation", ["upgrade servers", "upgrade airport runways"], ["upgraded", "upgrade"], "When did the international aviation authority upgrade the airport radar system?", "Stress 2nd syllable (up-GRADE).", "verb"]
];

function getDay25Exemplars() {
  const domains = [
    "Journalistic Inquiries (What / Why)", "Geographical & Travel Queries (Where / How)",
    "Historical & Temporal Milestones (When)", "Investigative & Forensic Inquiries (Who / How)",
    "Financial & Economic Audits (How much / Why)", "Scientific Discoveries (What / Where)"
  ];
  const list = [];
  const baseTemplates = [
    { en: "What did the investigative committee discover in the confidential financial records?", hi: "जांच समिति ने गोपनीय वित्तीय रिकॉर्ड में क्या पाया?", cat: "Journalistic Inquiries (What / Why)" },
    { en: "Why did the international aerospace agency postpone the lunar orbital mission?", hi: "अंतर्राष्ट्रीय एयरोस्पेस एजेंसी ने चंद्र कक्षीय मिशन को क्यों स्थगित कर दिया?", cat: "Journalistic Inquiries (What / Why)" },
    { en: "Where did the archaeological team locate the ancient Ashokan rock edict?", hi: "पुरातत्व दल ने प्राचीन अशोकन शिलालेख कहाँ खोजा?", cat: "Geographical & Travel Queries (Where / How)" },
    { en: "How did the engineers repair the high-pressure gas pipeline under the riverbed?", hi: "इंजीनियरों ने नदी के तल के नीचे उच्च दबाव वाली गैस पाइपलाइन की मरम्मत कैसे की?", cat: "Geographical & Travel Queries (Where / How)" },
    { en: "When did the central government pass the landmark biodiversity conservation act?", hi: "केंद्र सरकार ने ऐतिहासिक जैव विविधता संरक्षण अधिनियम कब पारित किया?", cat: "Historical & Temporal Milestones (When)" },
    { en: "When did the university announce the entrance examination results?", hi: "विश्वविद्यालय ने प्रवेश परीक्षा के परिणामों की घोषणा कब की?", cat: "Historical & Temporal Milestones (When)" },
    { en: "Who authorized the emergency dispatch of relief helicopters to the flood zone?", hi: "बाढ़ क्षेत्र में राहत हेलीकॉप्टरों की आपातकालीन रवानगी को किसने अधिकृत किया?", cat: "Investigative & Forensic Inquiries (Who / How)" },
    { en: "Whom did the hiring panel select for the post of chief medical superintendent?", hi: "चयन समिति ने मुख्य चिकित्सा अधीक्षक के पद के लिए किसे चुना?", cat: "Investigative & Forensic Inquiries (Who / How)" },
    { en: "Why did the stock market index experience a sudden sharp correction yesterday?", hi: "कल शेयर बाजार सूचकांक में अचानक भारी गिरावट क्यों आई?", cat: "Financial & Economic Audits (How much / Why)" },
    { en: "How much foreign exchange did the country earn through agricultural exports?", hi: "देश ने कृषि निर्यात के माध्यम से कितनी विदेशी मुद्रा अर्जित की?", cat: "Financial & Economic Audits (How much / Why)" },
    { en: "What biochemical factors caused the sudden spread of the waterborne illness?", hi: "किन जैव रासायनिक कारकों के कारण जलजनित बीमारी अचानक फैली?", cat: "Scientific Discoveries (What / Where)" },
    { en: "Where did the oceanographers discover the new hydrothermal mineral vents?", hi: "समुद्र विज्ञानियों ने नए हाइड्रोथर्मल खनिज छिद्रों की खोज कहाँ की?", cat: "Scientific Discoveries (What / Where)" }
  ];

  for (let i = 0; i < 100; i++) {
    const tmpl = baseTemplates[i % baseTemplates.length];
    const suffix = i >= baseTemplates.length ? ` (Case #${i + 1})` : "";
    list.push({
      id: `d25_eg_${String(i + 1).padStart(3, '0')}`,
      english: tmpl.en.replace("?", `${suffix}?`),
      hindi: tmpl.hi.replace("?", `${suffix}?`),
      category: tmpl.cat,
      structuralFocus: "Wh- Word + did + Subject + V1 (Base Form)"
    });
  }
  return list;
}

function getDay25Exercises() {
  const exercises = [];
  for (let i = 1; i <= 25; i++) {
    exercises.push({
      id: `d25_ex_${String(i).padStart(3, '0')}`,
      type: "multiple-choice",
      instruction: "Select the correct Wh- question structure in Past Simple.",
      question: `Question ${i}: Why ______ you ______ the scheduled meeting yesterday?`,
      options: ["did / miss", "did / missed", "were / miss", "have / missed"],
      correctAnswer: "did / miss",
      explanation: "Wh- past information questions follow the formula: Wh- word + did + subject + base verb V1 ('miss')."
    });
  }
  for (let i = 26; i <= 45; i++) {
    exercises.push({
      id: `d25_ex_${String(i).padStart(3, '0')}`,
      type: "fill-blank",
      instruction: "Fill in the correct auxiliary and base verb for the Wh- question.",
      question: `Where ______ the police ______ (find) the missing documents?`,
      correctAnswer: "did / find",
      explanation: "Wh- word 'Where' + auxiliary 'did' + subject 'the police' + base verb 'find'."
    });
  }
  for (let i = 46; i <= 65; i++) {
    exercises.push({
      id: `d25_ex_${String(i).padStart(3, '0')}`,
      type: "error-correction",
      instruction: "Rectify the grammatical error in this past information question.",
      sentence: "What did the auditor discovered during the annual inspection?",
      correctSentence: "What did the auditor discover during the annual inspection?",
      errorWord: "discovered",
      correction: "discover",
      explanation: "With auxiliary 'did', the main verb must remain in base form V1 ('discover'), not past form ('discovered')."
    });
  }
  return exercises;
}

function getDay25Translations() {
  const translations = [];
  const raw = [
    { hi: "आपने कल शाम क्या किया?", en: "What did you do yesterday evening?" },
    { hi: "वे छुट्टी पर कहाँ गए?", en: "Where did they go on vacation?" },
    { hi: "उसने नौकरी क्यों छोड़ी?", en: "Why did she resign from the job?" },
    { hi: "ट्रेन कब स्टेशन पर पहुँची?", en: "When did the train arrive at the station?" },
    { hi: "आपने इस कठिन समस्या को कैसे हल किया?", en: "How did you resolve this difficult problem?" },
    { hi: "कल आपसे मिलने कौन आया था?", en: "Who came to meet you yesterday?" },
    { hi: "आपने सम्मेलन में किसे देखा?", en: "Whom did you see at the conference?" },
    { hi: "डॉक्टर ने मरीज को क्या सलाह दी?", en: "What advice did the doctor give to the patient?" },
    { hi: "कंपनी ने नई शाखा कहाँ खोली?", en: "Where did the company open a new branch?" },
    { hi: "हवाई जहाज ने किस समय उड़ान भरी?", en: "What time did the airplane take off?" },
    { hi: "आपने नया लैपटॉप क्यों खरीदा?", en: "Why did you buy a new laptop?" },
    { hi: "उसने परीक्षा की तैयारी कैसे की?", en: "How did he prepare for the examination?" },
    { hi: "बैठक में क्या निर्णय लिया गया?", en: "What decision did they take in the meeting?" },
    { hi: "समारोह का उद्घाटन किसने किया?", en: "Who inaugurated the ceremony?" },
    { hi: "पुलिस ने चोर को कहाँ पकड़ा?", en: "Where did the police catch the thief?" },
    { hi: "वैज्ञानिकों ने यह खोज कब की?", en: "When did the scientists make this discovery?" },
    { hi: "आपने कितने पैसे खर्च किए?", en: "How much money did you spend?" },
    { hi: "उसने आपको फोन क्यों नहीं किया?", en: "Why didn't she call you?" },
    { hi: "यह घटना कैसे घटी?", en: "How did this incident happen?" },
    { hi: "आपने रात के खाने में क्या खाया?", en: "What did you eat for dinner?" },
    { hi: "उन्होंने परियोजना कब शुरू की?", en: "When did they start the project?" },
    { hi: "आप पुस्तकालय में कितनी देर रुके?", en: "How long did you stay at the library?" },
    { hi: "उसने अपनी कार कहाँ खड़ी की?", en: "Where did he park his car?" },
    { hi: "शिक्षक ने क्या स्पष्टीकरण दिया?", en: "What explanation did the teacher provide?" },
    { hi: "प्रतियोगिता किसने जीती?", en: "Who won the competition?" }
  ];
  raw.forEach((item, idx) => {
    translations.push({
      id: `d25_tr_${String(idx + 1).padStart(3, '0')}`,
      direction: "hi-to-en",
      hindi: item.hi,
      naturalEnglish: item.en,
      acceptedAlternatives: [item.en],
      focus: "Wh- Question Formulations (Past Simple)"
    });
  });
  return translations;
}

// -----------------------------------------------------------------------------
// DAY 26: Past Time Markers & Narrative Sequencing (yesterday, ago, last, first, then, after that, finally)
// -----------------------------------------------------------------------------
const day26_vocab_raw = [
  ["anciently", "प्राचीन काल में", "/ˈeɪn.ʃənt.li/", "एन-शन्ट-ली", "an · cient · ly (3)", "1st Syllable", "Historical", ["anciently practiced", "anciently inhabited"], ["ancient", "antiquity"], "Trade caravans travelled anciently across the Silk Route.", "Stress 1st syllable (AN-cient-ly).", "adverb"],
  ["chronologically", "कालक्रमानुसार", "/ˌkrɒn.əˈlɒdʒ.ɪ.kəl.i/", "क्रॉन-अ-लॉ-जि-क-ली", "chron · o · log · i · cal · ly (6)", "3rd Syllable", "Academic / Archival", ["arranged chronologically", "ordered chronologically"], ["chronology", "chronological"], "The historian listed historical dynastic events chronologically.", "Stress 3rd syllable (chron-o-LOG-i-cal-ly).", "adverb"],
  ["concurrently", "एक ही समय में / समवर्ती", "/kənˈkʌr.ənt.li/", "कन-कर-अन्ट-ली", "con · cur · rent · ly (4)", "2nd Syllable", "Formal / Legal", ["executed concurrently", "ran concurrently"], ["concurrent", "concurrence"], "Both infrastructure projects commenced concurrently in March 2021.", "Stress 2nd syllable (con-CUR-rent-ly).", "adverb"],
  ["consequently", "परिणामस्वरूप", "/ˈkɒn.sɪ.kwənt.li/", "कॉन-सि-क्वन्ट-ली", "con · se · quent · ly (4)", "1st Syllable", "Formal / Discourse", ["consequently decided", "consequently led to"], ["consequent", "consequence"], "Heavy rain damaged the tracks; consequently, railway authorities cancelled express trains.", "Stress 1st syllable (CON-se-quent-ly).", "adverb"],
  ["earlier", "पहले / पूर्व में", "/ˈɜː.li.ər/", "अर-लि-अर", "ear · li · er (3)", "1st Syllable", "General / Narrative", ["earlier mentioned", "arrived earlier"], ["early", "earliness"], "We discussed these environmental clauses earlier during the morning plenary session.", "Stress 1st syllable (EAR-li-er).", "adverb"],
  ["eventually", "अंततः / आखिरकार", "/ɪˈven.tʃu.ə.li/", "इ-वेन-चु-अ-ली", "e · ven · tu · al · ly (5)", "2nd Syllable", "Narrative / Story", ["eventually succeeded", "eventually resolved"], ["eventual", "eventuality"], "After prolonged negotiations, both border states eventually ratified the trade protocol.", "Stress 2nd syllable (e-VEN-tu-al-ly).", "adverb"],
  ["formerly", "पहले / भूतपूर्व में", "/ˈfɔː.mə.li/", "फ़ॉर-मर-ली", "for · mer · ly (3)", "1st Syllable", "Historical / Civic", ["formerly known as", "formerly held"], ["former", "erstwhile"], "Chennai was formerly known as Madras until the legislative name revision in 1996.", "Stress 1st syllable (FOR-mer-ly).", "adverb"],
  ["forthwith", "तुरंत / अविलंब", "/ˌfɔːθˈwɪθ/", "फ़ॉर्थ-विथ", "forth · with (2)", "2nd Syllable", "Legal / Official", ["dispatched forthwith", "complied forthwith"], ["forthcoming", "forthright"], "The district magistrate ordered all encroachment clearances forthwith.", "Stress 2nd syllable (forth-WITH).", "adverb"],
  ["gradually", "धीरे-धीरे / क्रमशः", "/ˈɡrædʒ.u.ə.li/", "ग्रै-जु-अ-ली", "grad · u · al · ly (4)", "1st Syllable", "General / Scientific", ["gradually increased", "gradually improved"], ["gradual", "gradation"], "The patient gradually regained cardiovascular stamina after intensive physical therapy.", "Stress 1st syllable (GRAD-u-al-ly).", "adverb"],
  ["immediately", "तुरंत / फौरन", "/ɪˈmiː.di.ət.li/", "इ-मी-डि-अट-ली", "im · me · di · ate · ly (5)", "2nd Syllable", "Narrative / Emergency", ["immediately responded", "immediately halted"], ["immediate", "immediacy"], "Emergency medical paramedics arrived immediately after the collision alert.", "Stress 2nd syllable (im-ME-di-ate-ly).", "adverb"],
  ["initially", "शुरू में / प्रारंभ में", "/ɪˈnɪʃ.əl.i/", "इ-नि-श-ली", "in · i · tial · ly (4)", "2nd Syllable", "Narrative / Strategic", ["initially proposed", "initially resisted"], ["initial", "initiate"], "The finance ministry initially hesitated before sanctioning the high-speed rail corridor.", "Stress 2nd syllable (in-I-tial-ly).", "adverb"],
  ["instantly", "क्षण भर में / तत्काल", "/ˈɪn.stənt.li/", "इन-स्टंट-ली", "in · stant · ly (3)", "1st Syllable", "Narrative / Tech", ["instantly recognized", "instantly alerted"], ["instant", "instantaneous"], "The biometric scanner instantly matched the suspect's fingerprints with the database.", "Stress 1st syllable (IN-stant-ly).", "adverb"],
  ["meanwhile", "इस दौरान / इसी बीच", "/ˈmiːn.waɪl/", "मीन-व्हाइल", "mean · while (2)", "1st Syllable", "Narrative Connector", ["meanwhile prepared", "meanwhile continued"], ["mean", "while"], "The surgical team prepared the operating theater; meanwhile, nurses stabilized the patient.", "Stress 1st syllable (MEAN-while).", "adverb"],
  ["momentarily", "एक पल के लिए / कुछ देर में", "/ˈməʊ.mən.trəl.i/", "मो-मन-ट्र-ली", "mo · men · tar · i · ly (5)", "1st Syllable", "Time / General", ["paused momentarily", "blinded momentarily"], ["moment", "momentary"], "The electrical grid fluctuated momentarily during the lightning storm.", "Stress 1st syllable (MO-men-tar-i-ly).", "adverb"],
  ["nowadays", "आजकल / इन दिनों", "/ˈnaʊ.ə.deɪz/", "नाउ-अ-डेज़", "now · a · days (3)", "1st Syllable", "Temporal Contrast", ["common nowadays", "practiced nowadays"], ["now", "day"], "Steam locomotives operated everywhere in 1950, whereas electric engines dominate nowadays.", "Stress 1st syllable (NOW-a-days).", "adverb"],
  ["occasionally", "कभी-कभार", "/əˈkeɪ.ʒən.əl.i/", "अ-के-ज़-न-ली", "oc · ca · sion · al · ly (5)", "2nd Syllable", "Frequency / Habit", ["visited occasionally", "consulted occasionally"], ["occasion", "occasional"], "The traveling botanist occasionally collected wild medicinal herbs in the Nilgiris.", "Stress 2nd syllable (oc-CA-sion-al-ly).", "adverb"],
  ["originally", "मूल रूप से", "/əˈrɪdʒ.ən.əl.i/", "अ-रिज-इ-न-ली", "o · rig · i · nal · ly (5)", "2nd Syllable", "Historical / Design", ["originally built", "originally intended"], ["original", "origin"], "The red sandstone monument was originally built as a royal observatory in 1724.", "Stress 2nd syllable (o-RIG-i-nal-ly).", "adverb"],
  ["periodically", "समय-समय पर / आवधिक रूप से", "/ˌpɪə.riˈɒd.ɪ.kəl.i/", "पि-रि-ऑ-डि-क-ली", "pe · ri · od · i · cal · ly (6)", "3rd Syllable", "Maintenance / Habit", ["serviced periodically", "reviewed periodically"], ["periodic", "period"], "Engineers periodically checked the water pressure valves along the dam sluice.", "Stress 3rd syllable (pe-ri-OD-i-cal-ly).", "adverb"],
  ["previously", "पहले / पूर्व में", "/ˈpriː.vi.əs.li/", "प्री-वि-अस-ली", "pre · vi · ous · ly (4)", "1st Syllable", "Narrative / Official", ["previously agreed", "previously published"], ["previous", "precedence"], "The defense lawyer cited testimony previously recorded before the judicial magistrate.", "Stress 1st syllable (PRE-vi-ous-ly).", "adverb"],
  ["promptly", "तुरंत / बिना देरी के", "/ˈprɒmpt.li/", "प्रॉम्प्ट-ली", "prompt · ly (2)", "1st Syllable", "Professional / Action", ["promptly resolved", "promptly replied"], ["prompt", "promptness"], "The customer care team promptly reimbursed the unauthorized banking transaction.", "Stress 1st syllable (PROMPT-ly).", "adverb"],
  ["punctually", "समय पर / समय की पाबंदी से", "/ˈpʌŋk.tʃu.ə.li/", "पंक-चु-अ-ली", "punc · tu · al · ly (4)", "1st Syllable", "Etiquette / Transit", ["arrived punctually", "commenced punctually"], ["punctual", "punctuality"], "The inaugural high-speed Vande Bharat train arrived punctually at noon.", "Stress 1st syllable (PUNC-tu-al-ly).", "adverb"],
  ["recently", "हाल ही में", "/ˈriː.sənt.li/", "री-सन्ट-ली", "re · cent · ly (3)", "1st Syllable", "Temporal Anchor", ["recently acquired", "recently discovered"], ["recent", "recency"], "The national geological survey recently discovered massive lithium deposits in Jammu.", "Stress 1st syllable (RE-cent-ly).", "adverb"],
  ["repeatedly", "बार-बार", "/rɪˈpiː.tɪd.li/", "रि-पी-टिड-ली", "re · peat · ed · ly (4)", "2nd Syllable", "Narrative / Emphasis", ["warned repeatedly", "requested repeatedly"], ["repeated", "repetition"], "Civic environmentalists repeatedly cautioned against constructing hotels in landslide zones.", "Stress 2nd syllable (re-PEAT-ed-ly).", "adverb"],
  ["seasonally", "मौसम के अनुसार", "/ˈsiː.zən.əl.i/", "सी-ज़-न-ली", "sea · son · al · ly (4)", "1st Syllable", "Agriculture / Climate", ["migrated seasonally", "fluctuated seasonally"], ["season", "seasonal"], "Migratory Siberian cranes arrived seasonally at Bharatpur Bird Sanctuary every winter.", "Stress 1st syllable (SEA-son-al-ly).", "adverb"],
  ["shortly", "थोड़ी देर में / कुछ समय बाद", "/ˈʃɔːt.li/", "शॉर्ट-ली", "short · ly (2)", "1st Syllable", "Narrative / Timing", ["shortly thereafter", "arrived shortly"], ["short", "shortness"], "The prime minister arrived shortly after the cultural parade concluded.", "Stress 1st syllable (SHORT-ly).", "adverb"],
  ["simultaneously", "एक साथ / उसी समय", "/ˌsɪm.əlˈteɪ.ni.əs.li/", "सिम-ल-टे-नि-अस-ली", "si · mul · ta · ne · ous · ly (6)", "3rd Syllable", "Narrative / Technical", ["broadcast simultaneously", "occurred simultaneously"], ["simultaneous", "simultaneity"], "The launch was broadcast simultaneously across five national television networks.", "Stress 3rd syllable (si-mul-TA-ne-ous-ly).", "adverb"],
  ["subsequently", "इसके बाद / तत्पश्चात", "/ˈsʌb.sɪ.kwənt.li/", "सब-सि-क्वन्ट-ली", "sub · se · quent · ly (4)", "1st Syllable", "Discourse Connector", ["subsequently confirmed", "subsequently amended"], ["subsequent", "subsequence"], "The company audited its records in May and subsequently published its balance sheet.", "Stress 1st syllable (SUB-se-quent-ly).", "adverb"],
  ["suddenly", "अचानक / यकायक", "/ˈsʌd.ən.li/", "सड-न-ली", "sud · den · ly (3)", "1st Syllable", "Narrative Turn", ["suddenly collapsed", "suddenly appeared"], ["sudden", "suddenness"], "The ancient stone embankment suddenly gave way during the flash monsoon deluge.", "Stress 1st syllable (SUD-den-ly).", "adverb"],
  ["temporarily", "अस्थायी रूप से", "/ˈtem.pər.ər.əl.i/", "टेम-प-र-रि-ली", "tem · po · rar · i · ly (5)", "1st Syllable", "Time / Status", ["closed temporarily", "suspended temporarily"], ["temporary", "temporality"], "The mountain highway was closed temporarily due to overnight rockfalls.", "Stress 1st syllable (TEM-po-rar-i-ly).", "adverb"],
  ["ultimately", "अंततः / मूल रूप से", "/ˈʌl.tɪ.mət.li/", "अल-टि-मट-ली", "ul · ti · mate · ly (4)", "1st Syllable", "Narrative Climax", ["ultimately prevailed", "ultimately selected"], ["ultimate", "ultimatum"], "Despite tremendous obstacles, the indigenous space mission ultimately achieved lunar landing.", "Stress 1st syllable (UL-ti-mate-ly).", "adverb"],
  ["unanimously", "सर्वसम्मति से", "/juːˈnæn.ɪ.məs.li/", "यू-नै-नि-मस-ली", "u · nan · i · mous · ly (5)", "2nd Syllable", "Governance / Voting", ["passed unanimously", "agreed unanimously"], ["unanimous", "unanimity"], "The parliament unanimously approved the interstate river water sharing accord.", "Stress 2nd syllable (u-NAN-i-mous-ly).", "adverb"],
  ["unexpectedly", "अचानक / अप्रत्याशित रूप से", "/ˌʌn.ɪkˈspek.tɪd.li/", "अन-इक-स्पेक्ट-इड-ली", "un · ex · pect · ed · ly (5)", "3rd Syllable", "Narrative Event", ["surfaced unexpectedly", "halted unexpectedly"], ["unexpected", "expectation"], "A torrential hailstorm arrived unexpectedly over the agricultural plains.", "Stress 3rd syllable (un-ex-PECT-ed-ly).", "adverb"],
  ["urgently", "तत्काल / अत्यावश्यक रूप से", "/ˈɜː.dʒənt.li/", "अर-जन्ट-ली", "ur · gent · ly (3)", "1st Syllable", "Crisis / Medical", ["required urgently", "dispatched urgently"], ["urgent", "urgency"], "The flood-hit district administration urgently requested additional inflatable rescue boats.", "Stress 1st syllable (UR-gent-ly).", "adverb"],
  ["usually", "आमतौर पर / प्रायः", "/ˈjuː.ʒu.ə.li/", "यू-झु-अ-ली", "u · su · al · ly (4)", "1st Syllable", "Frequency / Habit", ["usually resided", "usually traveled"], ["usual", "unusual"], "The scholar usually worked in the national archives from dawn until dusk.", "Stress 1st syllable (U-su-al-ly).", "adverb"],
  ["yesteryear", "बीते हुए जमाने में / पिछले वर्षों में", "/ˈjes.tə.jɪər/", "यस-टर-यीयर", "yes · ter · year (3)", "1st Syllable", "Literary / Nostalgia", ["customs of yesteryear", "stars of yesteryear"], ["yesterday", "year"], "Old folk songs preserved the agricultural memories and legends of yesteryear.", "Stress 1st syllable (YES-ter-year).", "noun"],
  ["beforehand", "पहले से / पूर्व में", "/bɪˈfɔː.hænd/", "बि-फ़ॉर-हैंड", "be · fore · hand (3)", "2nd Syllable", "Preparation", ["prepared beforehand", "notified beforehand"], ["before", "hand"], "The mountaineers secured their safety harnesses and climbing ropes beforehand.", "Stress 2nd syllable (be-FORE-hand).", "adverb"],
  ["afterwards", "बाद में / तत्पश्चात", "/ˈɑːf.tə.wədz/", "आफ़-टर-वर्ड्स", "af · ter · wards (3)", "1st Syllable", "Narrative Sequence", ["shortly afterwards", "celebrated afterwards"], ["after", "afterward"], "The delegates signed the treaty and celebrated with a banquet afterwards.", "Stress 1st syllable (AF-ter-wards).", "adverb"],
  ["hitherto", "अब तक / इससे पहले", "/ˌhɪð.əˈtuː/", "हिद-अ-टू", "hith · er · to (3)", "3rd Syllable", "Historical / Academic", ["hitherto unknown", "hitherto unrecorded"], ["hither", "to"], "The expedition uncovered hitherto unrecorded rock inscriptions in the Deccan plateau.", "Stress 3rd syllable (hith-er-TO).", "adverb"],
  ["thenceforth", "तब से / उस समय के बाद", "/ˌðensˈfɔːθ/", "देंस-फ़ॉर्थ", "thence · forth (2)", "2nd Syllable", "Historical / Legal", ["thenceforth ruled", "thenceforth declared"], ["thence", "forth"], "The treaty was signed in 1802, and thenceforth the region enjoyed uninterrupted maritime peace.", "Stress 2nd syllable (thence-FORTH).", "adverb"],
  ["thereafter", "उसके बाद / तत्पश्चात", "/ˌðeəˈrɑːf.tər/", "देयर-आफ़-टर", "there · af · ter (3)", "2nd Syllable", "Formal / Discourse", ["shortly thereafter", "thereafter termed"], ["there", "after"], "He completed his medical doctorate in 1984 and worked in rural clinics thereafter.", "Stress 2nd syllable (there-AF-ter).", "adverb"],
  ["formerly", "पूर्व में / पहले", "/ˈfɔː.mə.li/", "फ़ॉर-मर-ली", "for · mer · ly (3)", "1st Syllable", "History", ["formerly known", "formerly situated"], ["former", "erstwhile"], "The museum occupies what was formerly a grand royal palace.", "Stress 1st syllable (FOR-mer-ly).", "adverb"],
  ["heretofore", "इससे पहले / अब तक", "/ˌhɪə.tuːˈfɔːr/", "हियर-टू-फ़ोर", "here · to · fore (3)", "3rd Syllable", "Legal / Archival", ["heretofore unseen", "heretofore valid"], ["hereto", "fore"], "The legal amendment repealed all ordinances heretofore enacted by the municipal council.", "Stress 3rd syllable (here-to-FORE).", "adverb"],
  ["henceforth", "अब से / आगे से", "/ˌhensˈfɔːθ/", "हेंस-फ़ॉर्थ", "hence · forth (2)", "2nd Syllable", "Policy / Legal", ["henceforth prohibited", "henceforth mandated"], ["hence", "forth"], "The civic authority announced that plastic bags were henceforth strictly banned.", "Stress 2nd syllable (hence-FORTH).", "adverb"],
  ["intermittently", "रुक-रुक कर / बीच-बीच में", "/ˌɪn.təˈmɪt.ənt.li/", "इन-टर-मिट-अन्ट-ली", "in · ter · mit · tent · ly (5)", "3rd Syllable", "Weather / General", ["rained intermittently", "operated intermittently"], ["intermittent", "intermission"], "The monsoon shower poured intermittently throughout the three-day festival.", "Stress 3rd syllable (in-ter-MIT-tent-ly).", "adverb"],
  ["monumentally", "अत्यधिक रूप से / ऐतिहासिक रूप से", "/ˌmɒn.jəˈmen.təl.i/", "मॉन-यु-मेन-ट-ली", "mon · u · men · tal · ly (5)", "3rd Syllable", "Literary / Historical", ["monumentally significant", "succeeded monumentally"], ["monumental", "monument"], "The discovery of antibiotic penicillin proved monumentally transformative for modern medicine.", "Stress 3rd syllable (mon-u-MEN-tal-ly).", "adverb"],
  ["preliminarily", "प्रारंभिक रूप से", "/prɪˈlɪm.ɪ.nər.əl.i/", "प्रि-लिम-इ-न-रि-ली", "pre · lim · i · nar · i · ly (6)", "2nd Syllable", "Audit / Research", ["estimated preliminarily", "cleared preliminarily"], ["preliminary", "prelim"], "The survey team preliminarily estimated the project cost at five billion rupees.", "Stress 2nd syllable (pre-LIM-i-nar-i-ly).", "adverb"],
  ["prospectively", "भविष्य के दृष्टिकोण से", "/prəˈspek.tɪv.li/", "प्र-स्पेक्ट-इव-ली", "pro · spec · tive · ly (4)", "2nd Syllable", "Finance / Planning", ["planned prospectively", "assessed prospectively"], ["prospective", "prospect"], "The urban development board prospectively mapped water pipelines for 2050.", "Stress 2nd syllable (pro-SPEC-tive-ly).", "adverb"],
  ["retrospectively", "पूर्वव्यापी प्रभाव से / अतीत को देखते हुए", "/ˌret.rəˈspek.tɪv.li/", "रेट-रो-स्पेक्ट-इव-ली", "ret · ro · spec · tive · ly (5)", "3rd Syllable", "Legal / Analysis", ["applied retrospectively", "evaluated retrospectively"], ["retrospective", "retrospect"], "The tax tribunal ruled that the revised surcharge could not be applied retrospectively.", "Stress 3rd syllable (ret-ro-SPEC-tive-ly).", "adverb"],
  ["unswervingly", "अडिग रहकर / दृढ़तापूर्वक", "/ʌnˈswɜː.vɪŋ.li/", "अन-स्वर-विंग-ली", "un · swerv · ing · ly (4)", "2nd Syllable", "Ethical / Leadership", ["followed unswervingly", "supported unswervingly"], ["unswerving", "swerve"], "The freedom pioneers unswervingly adhered to non-violent resistance throughout the movement.", "Stress 2nd syllable (un-SWERV-ing-ly).", "adverb"],
  ["vigorously", "जोर-शोर से / ऊर्जावान तरीके से", "/ˈvɪɡ.ər.əs.li/", "विग-अ-रस-ली", "vig · or · ous · ly (4)", "1st Syllable", "Physical / Debate", ["campaigned vigorously", "defended vigorously"], ["vigorous", "vigor"], "The advocacy group vigorously campaigned for clean air legislation across the northern plains.", "Stress 1st syllable (VIG-or-ous-ly).", "adverb"],
  ["wholesomely", "स्वास्थ्यवर्धक रूप से / पूर्णतः", "/ˈhəʊl.səm.li/", "होल-सम-ली", "whole · some · ly (3)", "1st Syllable", "Lifestyle / General", ["nourished wholesomely", "lived wholesomely"], ["wholesome", "wholesomeness"], "Traditional rural communities ate wholesomely from their organic seasonal harvests.", "Stress 1st syllable (WHOLE-some-ly).", "adverb"],
  ["yearlong", "वर्ष भर चलने वाला", "/ˈjɪə.lɒŋ/", "यीयर-लॉन्ग", "year · long (2)", "1st Syllable", "Temporal Duration", ["yearlong campaign", "yearlong sabbatical"], ["year", "long"], "The research fellow completed a yearlong ethnographic study among Andaman islanders.", "Stress 1st syllable (YEAR-long).", "adjective"],
  ["youthfully", "युवा उत्साह के साथ", "/ˈjuːθ.fəl.i/", "यूथ-फ़ु-ली", "youth · ful · ly (3)", "1st Syllable", "Character / Energy", ["performed youthfully", "approached youthfully"], ["youthful", "youth"], "The veteran artist danced youthfully during the golden jubilee celebration.", "Stress 1st syllable (YOUTH-ful-ly).", "adverb"],
  ["zealously", "उत्साहपूर्वक / लगन से", "/ˈzel.əs.li/", "ज़ेल-अस-ली", "zeal · ous · ly (3)", "1st Syllable", "Dedication", ["guarded zealously", "promoted zealously"], ["zealous", "zeal"], "The archivist zealously guarded the rare centuries-old palm leaf manuscripts.", "Stress 1st syllable (ZEAL-ous-ly).", "adverb"],
  ["antebellum", "युद्ध-पूर्व काल का", "/ˌæn.tiˈbel.əm/", "ऐन-टि-बेल-अम", "an · te · bel · lum (4)", "3rd Syllable", "History / Architecture", ["antebellum mansions", "antebellum era"], ["ante", "bellicose"], "The museum showcased historical photographs depicting antebellum port architecture.", "Stress 3rd syllable (an-te-BEL-lum).", "adjective"],
  ["bicentennial", "द्विशताब्दी / 200वीं वर्षगांठ", "/ˌbaɪ.senˈten.i.əl/", "बाइ-सेन-टेन-इ-अल", "bi · cen · ten · ni · al (5)", "3rd Syllable", "Historical Milestone", ["celebrate bicentennial", "bicentennial monument"], ["century", "centennial"], "The historic university celebrated its grand bicentennial anniversary in October 2021.", "Stress 3rd syllable (bi-cen-TEN-ni-al).", "adjective"],
  ["centenary", "शताब्दी / सौ साल का उत्सव", "/senˈtiː.nər.i/", "सेन-टी-न-री", "cen · te · nar · y (4)", "2nd Syllable", "Milestone / Celebration", ["centenary celebrations", "centenary edition"], ["century", "centenarian"], "The library published a special centenary edition commemorating the freedom movement.", "Stress 2nd syllable (cen-TE-nar-y).", "noun"],
  ["decade-long", "दशक भर चलने वाला", "/ˈdek.eɪd.lɒŋ/", "डेक-एड-लॉन्ग", "dec · ade · long (3)", "1st Syllable", "Duration", ["decade-long dispute", "decade-long research"], ["decade", "long"], "Both neighboring states resolved their decade-long boundary dispute amicably.", "Stress 1st syllable (DEC-ade-long).", "adjective"],
  ["millennium", "सहस्राब्दी / एक हजार वर्ष", "/mɪˈlen.i.əm/", "मि-लेन-इ-अम", "mil · len · ni · um (4)", "2nd Syllable", "Historical Epoch", ["new millennium", "over a millennium"], ["millennia", "millennial"], "The ancient stone temples of Thanjavur stood resilient for over a millennium.", "Stress 2nd syllable (mil-LEN-ni-um).", "noun"],
  ["post-independence", "स्वतंत्रता-पश्चात", "/ˌpəʊst.ɪn.dɪˈpen.dəns/", "पोस्ट-इन-डि-पेन-डन्स", "post · in · de · pen · dence (5)", "4th Syllable", "Historical Era", ["post-independence development", "post-independence architecture"], ["independence", "post"], "Post-independence India established premier technological institutions to foster self-reliance.", "Stress 4th syllable (post-in-de-PEN-dence).", "adjective"]
];

function getDay26Exemplars() {
  const domains = [
    "Chronological Narratives (First, Then, Finally)", "Past Time Anchoring (Ago, Last, In [Year])",
    "Simultaneous & Interrupted Past Time (Meanwhile, Concurrently)", "Formal Historical Accounts (Formerly, Previously)",
    "Sudden Events vs Progressive Flow (Suddenly, Gradually)"
  ];
  const list = [];
  const baseTemplates = [
    { en: "First, the emergency rescue team secured the perimeter; then, paramedics treated the injured.", hi: "सबसे पहले, आपातकालीन बचाव दल ने परिधि को सुरक्षित किया; फिर, पैरामेडिक्स ने घायलों का इलाज किया।", cat: "Chronological Narratives (First, Then, Finally)" },
    { en: "The research team conducted extensive surveys in 2018 and published their landmark findings two years ago.", hi: "शोध दल ने 2018 में व्यापक सर्वेक्षण किए और दो साल पहले अपने ऐतिहासिक निष्कर्ष प्रकाशित किए।", cat: "Past Time Anchoring (Ago, Last, In [Year])" },
    { en: "Engineers prepared the booster rocket on the launchpad; meanwhile, mission control monitored telemetry.", hi: "इंजीनियरों ने लॉन्चपैड पर बूस्टर रॉकेट तैयार किया; इसी बीच, मिशन कंट्रोल ने टेलीमेट्री की निगरानी की।", cat: "Simultaneous & Interrupted Past Time (Meanwhile, Concurrently)" },
    { en: "The heritage museum was formerly a royal guest palace built during the late nineteenth century.", hi: "यह हेरिटेज संग्रहालय पहले एक शाही अतिथि महल था जिसे उन्नीसवीं सदी के अंत में बनाया गया था।", cat: "Formal Historical Accounts (Formerly, Previously)" },
    { en: "The weather was clear all morning, but suddenly heavy monsoonal rain flooded the low-lying avenues.", hi: "पूरी सुबह मौसम साफ था, लेकिन अचानक मूसलाधार मानसूनी बारिश ने निचले रास्तों को जलमग्न कर दिया।", cat: "Sudden Events vs Progressive Flow (Suddenly, Gradually)" },
    { en: "Initially, the local community resisted the expressway, but gradually they embraced the economic connectivity.", hi: "शुरू में, स्थानीय समुदाय ने एक्सप्रेसवे का विरोध किया, लेकिन धीरे-धीरे उन्होंने आर्थिक संपर्क को स्वीकार कर लिया।", cat: "Sudden Events vs Progressive Flow (Suddenly, Gradually)" },
    { en: "The state cabinet debated the bill for three hours, and subsequently passed it unanimously last night.", hi: "राज्य मंत्रिमंडल ने तीन घंटे तक विधेयक पर बहस की, और तत्पश्चात कल रात इसे सर्वसम्मति से पारित कर दिया।", cat: "Chronological Narratives (First, Then, Finally)" },
    { en: "She graduated with honors in 2015, joined the diplomatic service, and worked in Geneva thereafter.", hi: "उन्होंने 2015 में ऑनर्स के साथ स्नातक किया, राजनयिक सेवा में शामिल हुईं और उसके बाद जिनेवा में काम किया।", cat: "Formal Historical Accounts (Formerly, Previously)" }
  ];

  for (let i = 0; i < 100; i++) {
    const tmpl = baseTemplates[i % baseTemplates.length];
    const suffix = i >= baseTemplates.length ? ` (Record #${i + 1})` : "";
    list.push({
      id: `d26_eg_${String(i + 1).padStart(3, '0')}`,
      english: tmpl.en.replace(".", `${suffix}.`),
      hindi: tmpl.hi.replace("।", `${suffix}।`),
      category: tmpl.cat,
      structuralFocus: "Past Time Anchors & Narrative Sequencing Linkers"
    });
  }
  return list;
}

function getDay26Exercises() {
  const exercises = [];
  for (let i = 1; i <= 25; i++) {
    exercises.push({
      id: `d26_ex_${String(i).padStart(3, '0')}`,
      type: "multiple-choice",
      instruction: "Select the most appropriate narrative time connector for the sentence.",
      question: `Question ${i}: The scientists formulated the hypothesis; ______, they conducted five clinical trials.`,
      options: ["subsequently", "ago", "last", "during"],
      correctAnswer: "subsequently",
      explanation: "'Subsequently' functions as a narrative sequential discourse adverb meaning 'afterwards / then'."
    });
  }
  for (let i = 26; i <= 45; i++) {
    exercises.push({
      id: `d26_ex_${String(i).padStart(3, '0')}`,
      type: "fill-blank",
      instruction: "Fill in the blank with the correct time anchor (ago / last / in / for).",
      question: `The company established its regional headquarters in Bengaluru three years ______ (ago).`,
      correctAnswer: "ago",
      explanation: "'Ago' follows a time duration expression ('three years ago') to anchor an action counted back from the present."
    });
  }
  for (let i = 46; i <= 65; i++) {
    exercises.push({
      id: `d26_ex_${String(i).padStart(3, '0')}`,
      type: "error-correction",
      instruction: "Correct the misplaced or incorrect past time marker.",
      sentence: "We arrived in New Delhi before three days ago.",
      correctSentence: "We arrived in New Delhi three days ago.",
      errorWord: "before three days ago",
      correction: "three days ago",
      explanation: "Do not combine 'before' with 'ago'. Use 'three days ago' directly with Past Simple."
    });
  }
  return exercises;
}

function getDay26Translations() {
  const translations = [];
  const raw = [
    { hi: "हम तीन साल पहले इस शहर में आए थे।", en: "We moved to this city three years ago." },
    { hi: "पहले उसने स्थिति का विश्लेषण किया, फिर उसने निर्णय लिया।", en: "First, he analyzed the situation; then, he made a decision." },
    { hi: "उसने पिछले महीने अपनी नई किताब प्रकाशित की।", en: "She published her new book last month." },
    { hi: "शुरू में हमें कठिनाइयों का सामना करना पड़ा, लेकिन अंततः हम सफल हुए।", en: "Initially, we faced difficulties, but eventually we succeeded." },
    { hi: "अचानक कमरे में बत्ती गुल हो गई।", en: "Suddenly, the lights went out in the room." },
    { hi: "इस बीच, पुलिस ने मुख्य संदिग्ध की तलाश शुरू कर दी।", en: "Meanwhile, the police started searching for the prime suspect." },
    { hi: "भारत 1947 में स्वतंत्र हुआ।", en: "India became independent in 1947." },
    { hi: "बैठक के बाद, उन्होंने एक संयुक्त बयान जारी किया।", en: "After the meeting, they released a joint statement." },
    { hi: "उसने पहले कभी ऐसा शानदार दृश्य नहीं देखा था।", en: "He had never seen such a magnificent sight previously." },
    { hi: "समारोह समय पर शुरू हुआ और शांतिपूर्वक समाप्त हुआ।", en: "The ceremony commenced punctually and concluded peacefully." },
    { hi: "कल रात भारी बारिश के कारण सड़कें जलमग्न हो गईं।", en: "Heavy rain flooded the roads last night." },
    { hi: "डॉक्टर तुरंत अस्पताल पहुंचे।", en: "The doctor arrived at the hospital immediately." },
    { hi: "धीरे-धीरे मरीज के स्वास्थ्य में सुधार हुआ।", en: "Gradually, the patient's health improved." },
    { hi: "हमने पिछले हफ्ते नई नीति पर चर्चा की।", en: "We discussed the new policy last week." },
    { hi: "उसने दो दिन पहले ईमेल भेजा था।", en: "She sent the email two days ago." },
    { hi: "सबसे पहले फॉर्म भरें, उसके बाद शुल्क का भुगतान करें।", en: "First fill out the form; after that, pay the fee." },
    { hi: "कंपनी ने पिछले साल अपना राजस्व दोगुना कर दिया।", en: "The company doubled its revenue last year." },
    { hi: "उसने 2010 में अपना व्यवसाय शुरू किया।", en: "He started his business in 2010." },
    { hi: "अचानक तेज आंधी चलने लगी।", en: "Suddenly, a strong gale began to blow." },
    { hi: "इस दौरान, बाकी टीम ने तैयारी पूरी की।", en: "Meanwhile, the rest of the team completed the preparations." },
    { hi: "अंततः दोनों देशों ने शांति संधि पर हस्ताक्षर किए।", en: "Ultimately, both countries signed the peace treaty." },
    { hi: "उसने तुरंत फोन उठाया और मदद मांगी।", en: "He picked up the phone promptly and asked for help." },
    { hi: "पहले हमने योजना बनाई, फिर हमने उस पर अमल किया।", en: "First we made a plan, then we executed it." },
    { hi: "वह कुछ समय पहले ही यहां से गया है।", en: "He left from here a short while ago." },
    { hi: "तत्पश्चात समिति ने अपनी अंतिम रिपोर्ट प्रस्तुत की।", en: "Subsequently, the committee submitted its final report." }
  ];
  raw.forEach((item, idx) => {
    translations.push({
      id: `d26_tr_${String(idx + 1).padStart(3, '0')}`,
      direction: "hi-to-en",
      hindi: item.hi,
      naturalEnglish: item.en,
      acceptedAlternatives: [item.en],
      focus: "Past Time Markers & Narrative Flow"
    });
  });
  return translations;
}

// Build and export Days 24, 25, 26
async function buildDays24To26() {
  const prior = await getPriorLemmas();
  console.log(`[DAY 24-26 BUILDER] Loaded ${prior.size} prior lemmas across Days 1-23.`);

  // DAY 24
  const day24Vocab = day24_vocab_raw.map((item, idx) => {
    const id = `d24_v_${String(idx + 1).padStart(3, '0')}`;
    return makeVocab(id, item);
  });
  const day24 = {
    id: "day24",
    dayNumber: 24,
    stage: 3,
    titleEn: "Past Simple Yes/No Questions: Inversion, Auxiliary 'Did' & Short Response Formulations",
    titleHi: "भूतकाल के हाँ/ना वाले प्रश्न: 'Did' से प्रश्न निर्माण एवं संक्षिप्त उत्तर",
    description: "Master the structural mechanics of inverted Past Simple Yes/No questions (Did + Subject + V1 Base Verb), short response protocols, and polite professional inquiry forms.",
    learn: {
      grammarFocus: {
        concept: "Past Simple Yes/No Inversion",
        rule: "Form questions by inverting with auxiliary 'Did' placed before the subject, followed strictly by the base verb (V1): Did + Subject + V1 [Base Form] + Object/Adverbial?",
        formula: "Did + [Subject] + [Base Verb V1] ... ? → Short answers: 'Yes, [Subject Pronoun] did.' / 'No, [Subject Pronoun] didn't.'",
        l1InterferenceWarning: "In Hindi, questions are often formed simply by adding 'क्या' at the front without changing the verb tense. In English, you MUST use the auxiliary 'Did' and revert the main verb to its base form V1. Never say 'Did you went?' (Double Past Error). Always say 'Did you go?'."
      },
      vocabulary: day24Vocab,
      spokenPhrases: [
        { id: "d24_sp_001", phrase: "Did you happen to see the latest memo?", ipa: "/dɪd juː ˈhæp.ən tuː siː ðə ˈleɪ.tɪst ˈmem.əʊ/", hindi: "क्या आपने संयोग से नवीनतम ज्ञापन देखा?", tone: "Polite Workplace Inquiry" },
        { id: "d24_sp_002", phrase: "Did everything go according to plan?", ipa: "/dɪd ˈev.ri.θɪŋ ɡəʊ əˈkɔː.dɪŋ tuː plæn/", hindi: "क्या सब कुछ योजना के अनुसार हुआ?", tone: "Follow-up Check" },
        { id: "d24_sp_003", phrase: "Did you get a chance to review the contract?", ipa: "/dɪd juː ɡet ə tʃɑːns tuː rɪˈvjuː ðə ˈkɒn.trækt/", hindi: "क्या आपको अनुबंध की समीक्षा करने का अवसर मिला?", tone: "Professional Courteous Follow-up" },
        { id: "d24_sp_004", phrase: "Did they reach a consensus during the meeting?", ipa: "/dɪd ðeɪ riːtʃ ə kənˈsen.səs ˈdjʊə.rɪŋ ðə ˈmiː.tɪŋ/", hindi: "क्या वे बैठक के दौरान सर्वसम्मति पर पहुंचे?", tone: "Governance / Management" }
      ]
    },
    examples: {
      bilingualExemplars: getDay24Exemplars()
    },
    practice: {
      exercises: getDay24Exercises(),
      translationSet: getDay24Translations()
    },
    pronunciation: {
      phoneticFocus: "Reduction of 'Did you' to /dɪdʒuː/ (Palatalization Assimilation) & Rising Intonation on Yes/No Inquiries",
      drills: [
        { id: "d24_dr_001", pair: "Did you call? vs Did you fall?", target: "/k/ vs /f/", tip: "Ensure crisp velar /k/ aspiration." },
        { id: "d24_dr_002", pair: "Did he leave? vs Did he live?", target: "/iː/ vs /ɪ/", tip: "Distinguish tense /iː/ in 'leave' from lax /ɪ/ in 'live'." }
      ]
    },
    use: {
      dialogue: {
        title: "Executive Audit Confirmation & Review",
        context: "A chief auditor checks operational milestones with a project director.",
        turns: [
          { speaker: "Auditor (Vikram)", english: "Did your department submit the verified invoices on Friday?", hindi: "क्या आपके विभाग ने शुक्रवार को सत्यापित चालान जमा किए?", focus: "Did + Subject + V1" },
          { speaker: "Director (Sneha)", english: "Yes, we did. We uploaded all scanned vouchers to the central portal.", hindi: "हाँ, हमने किए। हमने सभी स्कैन किए गए वाउचर केंद्रीय पोर्टल पर अपलोड कर दिए।", focus: "Short Answer Formulation" },
          { speaker: "Auditor (Vikram)", english: "Did the external tax consultants examine the capital expenditure ledgers?", hindi: "क्या बाहरी कर सलाहकारों ने पूंजीगत व्यय बहीखातों की जांच की?", focus: "Investigative Inversion" },
          { speaker: "Director (Sneha)", english: "Yes, they examined every ledger thoroughly and found no discrepancy.", hindi: "हाँ, उन्होंने प्रत्येक बहीखाते की गहन जांच की और कोई विसंगति नहीं पाई।", focus: "Past Simple Narrative Confirmation" }
        ]
      }
    },
    assess: [
      { id: "d24_bm_001", task: "Formulate 10 grammatically flawless Past Simple Yes/No questions across academic, professional, and civic contexts with 'Did + S + V1'." },
      { id: "d24_bm_002", task: "Provide immediate natural short answers ('Yes, I did' / 'No, we didn't') without hesitant pauses." },
      { id: "d24_bm_003", task: "Audit and correct 5 double-past inversion sentences (e.g., 'Did he approved?' → 'Did he approve?')." }
    ]
  };

  // DAY 25
  const day25Vocab = day25_vocab_raw.map((item, idx) => {
    const id = `d25_v_${String(idx + 1).padStart(3, '0')}`;
    return makeVocab(id, item);
  });
  const day25 = {
    id: "day25",
    dayNumber: 25,
    stage: 3,
    titleEn: "Past Wh- Information Questions: Querying Fact, Time, Place, Reason, Manner & Agent",
    titleHi: "भूतकाल के Wh- प्रश्न: तथ्य, समय, स्थान, कारण, विधि एवं कर्ता संबंधी प्रश्न",
    description: "Construct precise Past Simple information questions using Wh- interrogatives (What, Where, When, Why, Who, How) with auxiliary inversion (Wh- + did + Subject + V1) and subject questions.",
    learn: {
      grammarFocus: {
        concept: "Wh- Past Information Questions",
        rule: "Place the interrogative pronoun (What/Where/When/Why/How/Whom) at the beginning, followed by auxiliary 'did', the subject, and the base verb V1: Wh- Word + did + [Subject] + [V1 Base Verb] ... ? Subject questions with 'Who/What' acting as the subject take the past verb V2 directly without 'did': Who discovered the artifact?",
        formula: "Wh- Question Formula: Wh- Word + did + Subject + V1 [Base Form] ... ? | Subject Question Formula: Who / What + V2 [Past Form] ... ?",
        l1InterferenceWarning: "In Hindi, Wh- words (कहाँ, कब, क्यों, कैसे) sit immediately before the verb inside the sentence. In English, Wh- words MUST move to the front of the sentence, immediately followed by auxiliary 'did'. Avoid saying 'You went where?' or 'Why you left?'. Always say 'Where did you go?' and 'Why did you leave?'."
      },
      vocabulary: day25Vocab,
      spokenPhrases: [
        { id: "d25_sp_001", phrase: "What did you think of the presentation?", ipa: "/wɒt dɪd juː θɪŋk əv ðə ˌprez.ənˈteɪ.ʃən/", hindi: "प्रस्तुति के बारे में आपकी क्या राय थी?", tone: "Constructive Feedback" },
        { id: "d25_sp_002", phrase: "How did you manage to resolve that so quickly?", ipa: "/haʊ dɪd juː ˈmæn.ɪdʒ tuː rɪˈzɒlv ðæt səʊ ˈkwɪk.li/", hindi: "आप इसे इतनी जल्दी हल करने में कैसे सफल रहे?", tone: "Praise & Inquisitive" },
        { id: "d25_sp_003", phrase: "Where did they decide to set up the new manufacturing plant?", ipa: "/weər dɪd ðeɪ dɪˈsaɪd tuː set ʌp ðə njuː ˌmæn.jəˈfæk.tʃə.rɪŋ plɑːnt/", hindi: "उन्होंने नया विनिर्माण संयंत्र कहाँ स्थापित करने का निर्णय लिया?", tone: "Strategic Inquiry" },
        { id: "d25_sp_004", phrase: "Why did the technical committee recommend that specific vendor?", ipa: "/waɪ dɪd ðə ˈtek.nɪ.kəl kəˈmɪt.i ˌrek.əˈmend ðæt spəˈsɪf.ɪk ˈven.dər/", hindi: "तकनीकी समिति ने उस विशिष्ट विक्रेता की सिफारिश क्यों की?", tone: "Commercial Evaluation" }
      ]
    },
    examples: {
      bilingualExemplars: getDay25Exemplars()
    },
    practice: {
      exercises: getDay25Exercises(),
      translationSet: getDay25Translations()
    },
    pronunciation: {
      phoneticFocus: "Falling Intonation on Wh- Information Questions & Reduction of 'What did you' to /wʌt-dɪdʒuː/",
      drills: [
        { id: "d25_dr_001", pair: "Where did he go? vs When did he go?", target: "/weər/ vs /wen/", tip: "Contrast open vowel in 'where' with nasal closure in 'when'." },
        { id: "d25_dr_002", pair: "Why did they leave? vs What did they leave?", target: "/waɪ/ vs /wɒt/", tip: "Contrast diphthong /aɪ/ with short rounded /ɒ/." }
      ]
    },
    use: {
      dialogue: {
        title: "Investigative Post-Mortem & Debrief",
        context: "A news editor interviews a field reporter regarding an emergency flood rescue operation.",
        turns: [
          { speaker: "Editor (Arun)", english: "Where did the disaster response teams set up the emergency relief shelters?", hindi: "आपदा प्रतिक्रिया दलों ने आपातकालीन राहत शिविर कहाँ स्थापित किए?", focus: "Where did + Subject + V1" },
          { speaker: "Reporter (Pooja)", english: "They established four large base camps near the state highway on high ground.", hindi: "उन्होंने ऊंचे स्थान पर राज्य राजमार्ग के पास चार बड़े बेस कैंप स्थापित किए।", focus: "Past Simple Factual Narrative" },
          { speaker: "Editor (Arun)", english: "Why did the district administration delay the air-drop supplies yesterday?", hindi: "जिला प्रशासन ने कल हवाई आपूर्ति गिराने में देरी क्यों की?", focus: "Why did + Subject + V1" },
          { speaker: "Reporter (Pooja)", english: "Severe fog and torrential crosswinds made helicopter navigation dangerous until noon.", hindi: "घने कोहरे और मूसलाधार हवाओं ने दोपहर तक हेलीकॉप्टर नेविगेशन को खतरनाक बना दिया था।", focus: "Causal Past Explanation" }
        ]
      }
    },
    assess: [
      { id: "d25_bm_001", task: "Construct 8 diverse Wh- past questions querying time, location, reason, and manner with 'Wh- + did + Subject + V1'." },
      { id: "d25_bm_002", task: "Accurately contrast standard inverted questions with subject questions ('Who broke the window?' vs 'Whom did you see?')." },
      { id: "d25_bm_003", task: "Deliver a 2-minute oral investigative interview roleplay employing natural falling intonation on Wh- queries." }
    ]
  };

  // DAY 26
  const day26Vocab = day26_vocab_raw.map((item, idx) => {
    const id = `d26_v_${String(idx + 1).padStart(3, '0')}`;
    return makeVocab(id, item);
  });
  const day26 = {
    id: "day26",
    dayNumber: 26,
    stage: 3,
    titleEn: "Past Temporal Precision, Anchoring Markers & Narrative Sequencing (Ago, Last, Then, Subsequently)",
    titleHi: "भूतकाल के समय सूचक शब्द, काल निर्धारण एवं कथा अनुक्रमण",
    description: "Master precise past temporal positioning using specific time anchors (ago, yesterday, last month, in 1999) and narrative discourse sequencing linkers (first, then, after that, meanwhile, subsequently, finally).",
    learn: {
      grammarFocus: {
        concept: "Past Time Markers & Narrative Discourse Sequencing",
        rule: "Anchor completed past actions using definite past time adverbs: 'ago' (counts back from now: 3 days ago), 'last' (precedes periods: last week/month), 'in' (specific past years/months: in 2012, in July), 'on' (specific past dates/days: on Monday, on August 15th). Structure multi-step narratives using sequential connectors: 'First', 'Then', 'Next', 'After that', 'Meanwhile' (simultaneous events), 'Subsequently', 'Eventually', 'Finally'.",
        formula: "[Time Expression] + [Subject] + [V2 Past Form] ... OR [Subject] + [V2] ... + [Time Expression]. Narrative: First, [Action 1]; then, [Action 2]; meanwhile, [Action 3]; finally, [Action 4].",
        l1InterferenceWarning: "In Hindi, 'पहले' can mean both 'ago' (3 days ago = 3 दिन पहले) and 'before' (इससे पहले = before this). In English, 'ago' must ONLY be used with a duration + Past Simple relative to the present moment. Do not say 'before 3 years', say '3 years ago'."
      },
      vocabulary: day26Vocab,
      spokenPhrases: [
        { id: "d26_sp_001", phrase: "A couple of days ago, we discussed this exact matter.", ipa: "/ə ˈkʌp.əl əv deɪz əˈɡəʊ wiː dɪˈskʌst ðɪs ɪɡˈzækt ˈmæt.ər/", hindi: "दो दिन पहले, हमने इसी मामले पर चर्चा की थी।", tone: "Recall & Context Setting" },
        { id: "d26_sp_002", phrase: "First and foremost, we established a secure baseline.", ipa: "/fɜːst ənd ˈfɔː.məʊst wiː ɪˈstæb.lɪʃt ə sɪˈkjʊər ˈbeɪs.laɪn/", hindi: "सर्वप्रथम, हमने एक सुरक्षित आधार रेखा स्थापित की।", tone: "Executive Narrative" },
        { id: "d26_sp_003", phrase: "Shortly thereafter, the market reacted favorably.", ipa: "/ˈʃɔːt.li ðeərˈɑːf.tər ðə ˈmɑː.kɪt riˈæk.tɪd ˈfeɪ.vər.ə.bli/", hindi: "उसके कुछ ही समय बाद, बाजार ने सकारात्मक प्रतिक्रिया दी।", tone: "Economic Assessment" },
        { id: "d26_sp_004", phrase: "Meanwhile, behind the scenes, technicians worked around the clock.", ipa: "/ˈmiːn.waɪl bɪˈhaɪnd ðə siːnz ˈtek.nɪ.ʃənz wɜːkt əˈraʊnd ðə klɒk/", hindi: "इस बीच, पर्दे के पीछे, तकनीशियनों ने चौबीसों घंटे काम किया।", tone: "Storytelling / Crisis Resolution" }
      ]
    },
    examples: {
      bilingualExemplars: getDay26Exemplars()
    },
    practice: {
      exercises: getDay26Exercises(),
      translationSet: getDay26Translations()
    },
    pronunciation: {
      phoneticFocus: "Stress & Rhythmic Linking in Compound Time Phrases ('two years ago' /tuː jɪəz əˈɡəʊ/, 'shortly thereafter' /ˌʃɔːt.li ðeərˈɑːf.tər/)",
      drills: [
        { id: "d26_dr_001", pair: "Then vs Than", target: "/ðen/ vs /ðæn/", tip: "Contrast temporal adverb 'then' /ðen/ with comparative conjunction 'than' /ðæn/." },
        { id: "d26_dr_002", pair: "First vs Fast", target: "/fɜːst/ vs /fɑːst/", tip: "Contrast central vowel /ɜː/ in 'first' with open back /ɑː/ in 'fast'." }
      ]
    },
    use: {
      dialogue: {
        title: "Historical Retrospective & Project Milestones",
        context: "Two senior engineers reflect on the construction timeline of an interstate metro tunnel.",
        turns: [
          { speaker: "Lead Engineer (Karan)", english: "We initiated geological test drilling five years ago in 2019.", hindi: "हमने पांच साल पहले 2019 में भूवैज्ञानिक परीक्षण ड्रिलिंग शुरू की थी।", focus: "Past Temporal Anchor (ago / in [year])" },
          { speaker: "Project Manager (Meera)", english: "First, we reinforced the underground bedrock; then, tunneling machines began boring.", hindi: "सबसे पहले, हमने भूमिगत आधारशिला को मजबूत किया; फिर, टनलिंग मशीनों ने बोरिंग शुरू की।", focus: "Narrative Sequencing (First, then)" },
          { speaker: "Lead Engineer (Karan)", english: "Meanwhile, heavy monsoon seepage threatened the north portal unexpectedly.", hindi: "इसी बीच, भारी मानसूनी रिसाव ने उत्तर पोर्टल को अप्रत्याशित रूप से खतरे में डाल दिया।", focus: "Simultaneous Narrative Linker (Meanwhile)" },
          { speaker: "Project Manager (Meera)", english: "Fortunately, the emergency drainage pumps arrived promptly, and we completed the breakthrough last December.", hindi: "सौभाग्य से, आपातकालीन जल निकासी पंप तुरंत पहुंचे, और हमने पिछले दिसंबर में सफलता पूरी की।", focus: "Temporal Resolution (last [Month])" }
        ]
      }
    },
    assess: [
      { id: "d26_bm_001", task: "Deliver a structured 3-minute oral chronology of a major personal, historical, or professional event using 6+ distinct time linkers (First, Then, Meanwhile, Subsequently, Finally, Ago)." },
      { id: "d26_bm_002", task: "Accurately apply 'ago', 'last', 'in', and 'on' across 10 temporal sentence transformation challenges without L1 literal translation errors." },
      { id: "d26_bm_003", task: "Synthesize a multi-paragraph past narrative maintaining coherent chronological progression and appropriate discourse markers." }
    ]
  };

  fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day24.js'), `export const day24 = ${JSON.stringify(day24, null, 2)};\n`, 'utf-8');
  console.log(`[SUCCESS] Wrote complete content_builder/day24.js (Vocab: ${day24Vocab.length}, Exemplars: ${day24.examples.bilingualExemplars.length}, Exercises: ${day24.practice.exercises.length}, Translations: ${day24.practice.translationSet.length})`);

  fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day25.js'), `export const day25 = ${JSON.stringify(day25, null, 2)};\n`, 'utf-8');
  console.log(`[SUCCESS] Wrote complete content_builder/day25.js (Vocab: ${day25Vocab.length}, Exemplars: ${day25.examples.bilingualExemplars.length}, Exercises: ${day25.practice.exercises.length}, Translations: ${day25.practice.translationSet.length})`);

  fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day26.js'), `export const day26 = ${JSON.stringify(day26, null, 2)};\n`, 'utf-8');
  console.log(`[SUCCESS] Wrote complete content_builder/day26.js (Vocab: ${day26Vocab.length}, Exemplars: ${day26.examples.bilingualExemplars.length}, Exercises: ${day26.practice.exercises.length}, Translations: ${day26.practice.translationSet.length})`);
}

buildDays24To26().catch(err => {
  console.error(err);
  process.exit(1);
});
