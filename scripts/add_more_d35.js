// scripts/add_more_d35.js
import { getPriorLemmas } from './stage4_lexicon_helper.js';

const prior = await getPriorLemmas();
for (let d = 31; d <= 34; d++) {
  const mod = (await import(`../content_builder/day${d}.js`))[`day${d}`];
  mod.learn.vocabulary.forEach(v => prior.add(v.lemma));
}

const extras = [
  ["chronometry", "समय-मापन विज्ञान", "/krəˈnɒm.ɪ.tri/", "क्रोनोमेट्री", "chro-nom-e-try (4)", "2nd Syllable (/nɒm/)", "Science", ["precision chronometry", "marine chronometry"], ["chronometer"], "Marine navigation in the eighteenth century was transformed by precision chronometry.", "Second syllable /nɒm/ is stressed.", "noun"],
  ["chronometer", "सटीक घड़ी / कालमापी", "/krəˈnɒm.ɪ.tər/", "क्रोनोमीटर", "chro-nom-e-ter (4)", "2nd Syllable (/nɒm/)", "Instruments", ["certified chronometer", "marine chronometer"], ["chronometry"], "Ship captains relied on a certified marine chronometer to calculate precise longitude at sea.", "Second syllable /nɒm/ is stressed.", "noun"],
  ["sesquicentennial", "150वीं वर्षगांठ", "/ˌses.kwɪ.senˈten.i.əl/", "सेस्क्विसेन्टेनियल", "ses-qui-cen-ten-ni-al (6)", "4th Syllable (/ten/)", "Historical", ["sesquicentennial year", "sesquicentennial celebration"], ["centennial"], "The historic engineering college marked its sesquicentennial with global alumni gatherings.", "Stress on fourth syllable /ten/.", "adjective"],
  ["bicentennial", "द्विशताब्दी", "/ˌbaɪ.senˈten.i.əl/", "बायसेंटेनियल", "bi-cen-ten-ni-al (5)", "3rd Syllable (/ten/)", "Historical", ["bicentennial jubilee", "bicentennial park"], ["century"], "The city celebrated its bicentennial with cultural pageants and laser shows.", "Stress on third syllable /ten/.", "adjective"],
  ["fleetingness", "क्षणभंगुरता", "/ˈfliː.tɪŋ.nəs/", "फ़्लीटिंगनेस", "fleet-ing-ness (3)", "1st Syllable (/fliː/)", "Philosophy", ["fleetingness of time", "sense of fleetingness"], ["fleeting"], "The poet lamented the fleetingness of worldly fame and physical youth.", "First syllable /ˈfliː/ is stressed.", "noun"],
  ["anachronism", "कालभ्रम / समय के प्रतिकूल", "/əˈnæk.rə.nɪ.zəm/", "एनैक्रोनिज्म", "a-nach-ro-nism (4)", "2nd Syllable (/næk/)", "Historical", ["historical anachronism", "glaring anachronism"], ["anachronistic"], "Using a modern smartphone in a play set in ancient Rome is a glaring anachronism.", "Second syllable /næk/ is stressed.", "noun"],
  ["anachronistic", "पुराना / समय के प्रतिकूल", "/əˌnæk.rəˈnɪs.tɪk/", "एनैक्रोनिस्टिक", "a-nach-ro-nis-tic (5)", "3rd Syllable (/nɪs/)", "Critical", ["anachronistic law", "anachronistic view"], ["anachronism"], "The supreme court struck down anachronistic provisions that infringed modern privacy rights.", "Stress on third syllable /nɪs/.", "adjective"],
  ["asynchronous", "असमकालिक", "/eɪˈsɪŋ.krə.nəs/", "असिंक्रोनस", "a-syn-chro-nous (4)", "2nd Syllable (/sɪŋ/)", "Workplace", ["asynchronous communication", "asynchronous tasks"], ["synchronous"], "Remote teams prefer asynchronous communication to respect varied global time zones.", "Stress on second syllable /sɪŋ/.", "adjective"],
  ["asynchronously", "असमकालिक रूप से", "/eɪˈsɪŋ.krə.nəs.li/", "असिंक्रोनसली", "a-syn-chro-nous-ly (5)", "2nd Syllable (/sɪŋ/)", "Adverbial", ["work asynchronously", "update asynchronously"], ["asynchronous"], "Software microservices handle database queries asynchronously to avoid UI latency.", "Stress on second syllable /sɪŋ/.", "adverb"],
  ["asynchrony", "असमकालता", "/eɪˈsɪŋ.krə.ni/", "असिंक्रोनी", "a-syn-chro-ny (4)", "2nd Syllable (/sɪŋ/)", "Technical", ["temporal asynchrony", "system asynchrony"], ["asynchronous"], "Network jitter caused temporal asynchrony during the high-definition video conference.", "Stress on second syllable /sɪŋ/.", "noun"],
  ["bimonthly", "द्विमासिक", "/baɪˈmʌnθ.li/", "बायमन्थली", "bi-month-ly (3)", "1st Syllable (/baɪ/)", "Periodicity", ["bimonthly review", "bimonthly magazine"], ["month"], "The monetary policy committee holds bimonthly meetings to regulate repo rates.", "First syllable /ˈbaɪ/ is stressed.", "adjective"],
  ["semiannual", "अर्धवार्षिक", "/ˌsem.iˈæn.ju.əl/", "सेमीएन्युअल", "sem-i-an-nu-al (5)", "3rd Syllable (/æn/)", "Corporate", ["semiannual audit", "semiannual report"], ["annual"], "All public corporations must release semiannual financial balance sheets.", "Stress on third syllable /æn/.", "adjective"],
  ["semiannually", "अर्धवार्षिक रूप से", "/ˌsem.iˈæn.ju.ə.li/", "सेमीएन्युअली", "sem-i-an-nu-al-ly (6)", "3rd Syllable (/æn/)", "Adverbial", ["audited semiannually", "meet semiannually"], ["semiannual"], "Safety equipment in chemical manufacturing facilities is inspected semiannually.", "Stress on third syllable /æn/.", "adverb"],
  ["quadrennial", "चतुर्वार्षिक", "/kwɒdˈren.i.əl/", "क्वाड्रेनियल", "quad-ren-ni-al (4)", "2nd Syllable (/ren/)", "Periodicity", ["quadrennial games", "quadrennial conference"], ["annual"], "The Olympic Games are a celebrated quadrennial sporting festival bringing nations together.", "Second syllable /ren/ is stressed.", "adjective"],
  ["perpetuity", "अनंत काल / शाश्वतता", "/ˌpɜː.pəˈtʃuː.ə.ti/", "पर्पेच्यूइटी", "per-pe-tu-i-ty (5)", "3rd Syllable (/tʃuː/)", "Legal", ["in perpetuity", "endowment in perpetuity"], ["perpetual"], "The royal heritage trust preserves ancient temple architecture in perpetuity for humanity.", "Stress on third syllable /tʃuː/.", "noun"],
  ["time-bound", "समयबद्ध", "/ˈtaɪm.baʊnd/", "टाइम-बाउंड", "time-bound (2)", "1st Syllable (/taɪm/)", "Governance", ["time-bound inquiry", "time-bound goals"], ["time"], "The district collector set strict time-bound milestones for rural electrification.", "Compound adjective with stress on 'time'.", "adjective"],
  ["timeliness", "समयबद्धता", "/ˈtaɪm.li.nəs/", "टाइमलीनेस", "time-li-ness (3)", "1st Syllable (/taɪm/)", "Professional", ["ensure timeliness", "exceptional timeliness"], ["timely"], "The manager commended the accounting staff for the exceptional timeliness of the quarterly report.", "First syllable /ˈtaɪm/ is stressed.", "noun"],
  ["centenary", "शताब्दी वर्ष", "/senˈtiː.nər.i/", "सेन्टीनरी", "cen-te-na-ry (4)", "2nd Syllable (/tiː/)", "Commemorative", ["centenary year", "birth centenary"], ["century"], "The scientific institute commemorated the birth centenary of its founding visionary.", "Long /iː/ in second syllable.", "noun"],
  ["centennial", "शताब्दी", "/senˈten.i.əl/", "सेंटेनियल", "cen-ten-ni-al (4)", "2nd Syllable (/ten/)", "Historical", ["centennial celebration", "centennial park"], ["century"], "The botanical society organized an international flower show for its centennial jubilee.", "Second syllable /ten/ is stressed.", "adjective"],
  ["millennium", "सहस्राब्दी", "/mɪˈlen.i.əm/", "मिलेनियम", "mil-len-ni-um (4)", "2nd Syllable (/len/)", "Scale", ["turn of the millennium", "third millennium"], ["millennia"], "The rock-cut temples of Ellora have withstood earthquakes and weather for over a millennium.", "Second syllable /len/ is stressed.", "noun"],
  ["millennial", "सहस्राब्दी संबंधी", "/mɪˈlen.i.əl/", "मिलेनियल", "mil-len-ni-al (4)", "2nd Syllable (/len/)", "Demographic", ["millennial generation", "millennial workforce"], ["millennium"], "Millennial professionals actively seek meaningful work and sustainable corporate values.", "Second syllable /len/ is stressed.", "adjective"]
];

let validCount = 0;
for (const x of extras) {
  if (!prior.has(x[0].toLowerCase())) {
    validCount++;
  }
}
console.log(`Extras valid count: ${validCount} / ${extras.length}`);
