import fs from 'fs';
import path from 'path';

export const day53 = {
  dayNumber: 53,
  id: "day_53",
  titleEn: "Banking Services, Commercial Transactions & Financial Terms",
  titleHi: "बैंकिंग सेवाएं, वाणिज्यिक लेनदेन एवं वित्तीय शब्दावली",
  cefr: "B1.1",
  estMinutes: 45,
  prerequisites: "Stage 6 Mastery (Days 51–52: Professional Etiquette & Corporate Operations)",
  objectivesEn: [
    "Navigate complex retail and commercial banking transactions: wire transfers (SWIFT/IBAN), overdraft facilities, letters of credit, escrow, and foreign exchange (Forex).",
    "Master high-level financial, accounting, and investment terminology: amortization, collateral, liquidity, solvency, debentures, dividends, disbursal, and reconciliation.",
    "Formulate precise financial inquiries, dispute unauthorized debit deductions, negotiate loan terms, and analyze balance sheets.",
    "Apply real-world financial conditional structures ('If interest rates rise, mortgage amortization will...') and formal transactional passives.",
    "Eliminate common Hindi-English banking colloquialisms (e.g., '*my money got cut*', '*cheque bounce*', '*passbook entry is not there*')."
  ],
  objectivesHi: [
    "जटिल खुदरा और वाणिज्यिक बैंकिंग लेनदेन में निपुण होना: वायर ट्रांसफर (SWIFT/IBAN), ओवरड्राफ्ट सुविधा, साख पत्र (Letter of Credit), एस्क्रो और विदेशी मुद्रा विनिमय (Forex)।",
    "उच्च स्तरीय वित्तीय, लेखांकन और निवेश शब्दावली (Amortization, Collateral, Liquidity, Solvency, Debenture, Dividend, Disbursal, Reconciliation) का सटीक प्रयोग।",
    "सटीक वित्तीय पूछताछ करना, अनधिकृत डेबिट कटौतियों पर विवाद दर्ज करना, ऋण शर्तों पर बातचीत करना और बैलेंस शीट का विश्लेषण करना।",
    "वित्तीय सशर्त वाक्य संरचनाओं (Financial Conditionals) और औपचारिक ट्रांजैक्शनल पैसिव का उपयोग करना।",
    "भारतीय अंग्रेजी के अनौपचारिक बैंकिंग प्रयोगों ('money got cut', 'cheque bounce', 'passbook entry not there') को समाप्त करना।"
  ],
  teach: {
    hindiExplanation: `डे 53 में हम **बैंकिंग सेवाएं (Banking Services)**, **वाणिज्यिक लेनदेन (Commercial Transactions)** और **वित्तीय शब्दावली (Financial Terms)** पर महारत हासिल करेंगे।

1. **बैंकिंग खाते एवं लेनदेन के प्रकार (Accounts & Transaction Types)**:
   - **Savings Account vs Current Account / Checking Account**: बचत खाता बनाम चालू/व्यावसायिक खाता।
   - **Wire Transfer / Remittance (SWIFT / IBAN)**: अंतरराष्ट्रीय इलेक्ट्रॉनिक धन हस्तांतरण।
   - **Direct Debit / Standing Instruction**: खाते से नियमित स्वतः कटौती।
   - **Overdraft Facility**: खाते में जमा राशि से अधिक धन निकालने की स्वीकृत सीमा।
   - **Collateral**: ऋण (Loan) की जमानत के रूप में रखी जाने वाली संपत्ति।
   - **Escrow Account**: सुरक्षित तृतीय-पक्ष खाता जिसमें लेनदेन पूरा होने तक धनराशि रखी जाती है।

2. **लेखांकन एवं वित्तीय अवधारणाएं (Accounting & Financial Concepts)**:
   - **Amortization**: ऋण की मूल राशि और ब्याज को किश्तों में चुकाने की अनुसूची।
   - **Liquidity**: संपत्ति को तुरंत नकदी में बदलने की क्षमता।
   - **Solvency**: सभी देनदारियों (Liabilities) को चुकाने की दीर्घकालिक वित्तीय क्षमता।
   - **Reconciliation**: बैंक स्टेटमेंट और आंतरिक बहीखाते (Ledger) के आंकड़ों का मिलान।
   - **Disbursal**: ऋण या धनराशि का वास्तविक वितरण/भुगतान।

3. **L1 हिंदी भाषियों के लिए सुधार (Eliminating Indian English Banking Traps)**:
   - ❌ '*Five thousand rupees got cut from my account.*' ➔ ✔️ "**An unauthorized deduction of five thousand rupees was debited from my account.**"
   - ❌ '*His cheque got bounced.*' ➔ ✔️ "**His cheque was dishonored / returned due to insufficient funds.**"
   - ❌ '*Passbook entry is not there.*' ➔ ✔️ "**The credit transaction does not appear on my bank statement.**"
   - ❌ '*Give me loan on interest.*' ➔ ✔️ "**I would like to apply for a loan at a competitive interest rate.**"`,
    englishExplanation: `Day 53 provides a comprehensive linguistic and conceptual foundation in institutional banking, commercial finance, accounting reconciliation, and consumer fiscal rights.

Linguistic & Pragmatic Focus:
1. **Commercial Banking Lexicon & Mechanics**: Articulating requests for credit facilities, amortized mortgage schedules, collateral hypothecation, SWIFT international remittances, and foreign currency hedging.
2. **Transaction Dispute & Financial Advocacy**: Registering formal claims regarding unauthorized debit deductions, chargebacks, disputed merchant fees, and billing statement discrepancies.
3. **Financial Conditionals & Numerical Precision**: Employing predictive first and mixed conditionals to analyze fiscal implications ('If the central bank raises the benchmark rate by 25 basis points, our floating mortgage repayment will adjust accordingly').`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Transactional Passive Voice in Financial Audits",
        description: "Official banking statements and audit reports utilize passive voice to maintain objective records: 'The sum of $10,000 has been credited to your checking account', 'The loan application was sanctioned subject to collateral verification.'",
        register: "Transactional Financial Syntax"
      },
      {
        ruleNumber: 2,
        title: "Financial Conditionals for Interest & Risk Projections",
        description: "Use First and Second Conditionals for monetary forecasts: 'If the prime lending rate increases (Present Simple), variable mortgage payments will rise (Future Simple)'. 'If the firm were insolvent (Subjunctive), creditors would claim the collateral (Conditional)'.",
        register: "Fiscal Forecasting"
      },
      {
        ruleNumber: 3,
        title: "Transitive Verbs: 'Debit' vs 'Credit' Collocations",
        description: "An amount is debited **from** an account (money subtracted) and credited **to** an account (money added): 'Ten thousand rupees were debited **from** my savings account and credited **to** the vendor's account.'",
        register: "Prepositional Collocations"
      },
      {
        ruleNumber: 4,
        title: "Formal Compound Fiscal Nouns",
        description: "Hyphenate compound fiscal modifiers before nouns: 'a thirty-year fixed-rate mortgage', 'a zero-balance corporate account', 'a multi-currency wire transfer'.",
        register: "Compound Modifiers"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Transaction Dispute Request",
        formula: "I am writing to formally dispute an unauthorized debit of [Amount] on [Date] under reference number [Number].",
        exampleEn: "I am writing to formally dispute an unauthorized debit of $450 on October 12th under transaction reference #8942.",
        meaningHi: "मैं 12 अक्टूबर को लेनदेन संदर्भ संख्या #8942 के तहत $450 की अनधिकृत कटौती पर औपचारिक रूप से विवाद दर्ज करने के लिए लिख रहा हूँ।"
      },
      {
        subjectGroup: "Wire Transfer Instruction",
        formula: "Please initiate an outward international wire transfer of [Amount] via SWIFT code [Code] to the designated beneficiary [Name].",
        exampleEn: "Please initiate an outward international wire transfer of €12,500 via SWIFT code DEUTDEDBFXX to the designated beneficiary, Hans Muller.",
        meaningHi: "कृपया नामित लाभार्थी, हंस मुलर को स्विफ्ट कोड DEUTDEDBFXX के माध्यम से €12,500 का अंतरराष्ट्रीय वायर ट्रांसफर शुरू करें।"
      },
      {
        subjectGroup: "Loan Term Negotiation",
        formula: "Could you provide an itemized amortization schedule for a [Term]-year loan with a [Fixed / Floating] interest rate?",
        exampleEn: "Could you provide an itemized amortization schedule for a fifteen-year loan with a fixed annual interest rate?",
        meaningHi: "क्या आप एक निश्चित वार्षिक ब्याज दर के साथ पंद्रह साल के ऋण के लिए एक विस्तृत परिशोधन (Amortization) अनुसूची प्रदान कर सकते हैं?"
      },
      {
        subjectGroup: "Account Reconciliation Notice",
        formula: "Following our audit, the discrepancies between the bank ledger and the invoice have been fully reconciled.",
        exampleEn: "Following our audit, the discrepancies between the bank ledger and the invoice have been fully reconciled.",
        meaningHi: "हमारे ऑडिट के बाद, बैंक बहीखाते और चालान के बीच की विसंगतियों का पूरी तरह से समाधान और मिलान कर लिया गया है।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Eliminating 'Money Got Cut' & 'Cheque Bounce'",
      hindiPattern: "1. '*From my account, two thousand rupees got cut yesterday.*'\n2. '*His cheque was bounced by the bank manager.*'\n3. '*Sir, passbook entry is not showing the salary.*'\n4. '*Bank people gave me loan on 8 percent interest.*'",
      potentialInterference: "Direct translation of Hindi phrases like 'पैसे कट गए', 'चेक बाउंस हो गया', and 'पासबुक एंट्री'.",
      explanation: "1. Money does not 'get cut'; it is 'debited from' or 'deducted from' an account. 2. A check is 'dishonored' or 'returned due to insufficient funds'. 3. Passbook entries are called 'statement line items' or 'transaction records'. 4. Say 'The bank approved a loan at an 8% interest rate'.",
      naturalSolution: "1. 'Two thousand rupees were debited from my account yesterday.' 2. 'The cheque was dishonored due to insufficient funds.' 3. 'The salary credit transaction does not appear on my bank statement.' 4. 'The bank sanctioned a loan at an annual interest rate of 8%.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day53_vocab_001", word: "Collateral", pos: "Noun", ipa: "/kəˈlæt.ər.əl/", meaningHi: "जमानत / बंधक संपत्ति (ऋण सुरक्षित करने के लिए)", exampleEn: "The bank required commercial real estate as collateral before approving the business expansion loan.", exampleHi: "व्यापार विस्तार ऋण को मंजूरी देने से पहले बैंक को संपार्श्विक (जमानत) के रूप में वाणिज्यिक अचल संपत्ति की आवश्यकता थी।" },
      { id: "day53_vocab_002", word: "Amortization", pos: "Noun", ipa: "/əˌmɔː.tɪˈzeɪ.ʃən/", meaningHi: "ऋण परिशोधन / किश्तों में मूल और ब्याज चुकाने की प्रक्रिया", exampleEn: "The loan officer presented a twenty-year amortization schedule detailing monthly principal and interest payments.", exampleHi: "ऋण अधिकारी ने मासिक मूलधन और ब्याज भुगतानों का विवरण देते हुए बीस साल की परिशोधन (Amortization) अनुसूची प्रस्तुत की।" },
      { id: "day53_vocab_003", word: "Liquidity", pos: "Noun", ipa: "/lɪˈkwɪd.ə.ti/", meaningHi: "तरलता / संपत्ति को तुरंत नकदी में बदलने की सुगमता", exampleEn: "The corporation maintains high liquidity to meet unexpected operational expenses without selling fixed assets.", exampleHi: "स्थिर संपत्तियों को बेचे बिना अप्रत्याशित परिचालन खर्चों को पूरा करने के लिए निगम उच्च तरलता बनाए रखता है।" },
      { id: "day53_vocab_004", word: "Solvency", pos: "Noun", ipa: "/ˈsɒl.vən.si/", meaningHi: "ऋणशोधन क्षमता / दीर्घकालिक देनदारियां चुकाने की वित्तीय मजबूती", exampleEn: "A thorough financial audit proved the company's long-term solvency despite temporary supply chain setbacks.", exampleHi: "एक संपूर्ण वित्तीय ऑडिट ने अस्थायी आपूर्ति श्रृंखला असफलताओं के बावजूद कंपनी की दीर्घकालिक ऋणशोधन क्षमता साबित की।" },
      { id: "day53_vocab_005", word: "Overdraft", pos: "Noun", ipa: "/ˈəʊ.və.drɑːft/", meaningHi: "ओवरड्राफ्ट / खाते की जमा से अधिक धन निकालने की बैंक सुविधा", exampleEn: "Our corporate checking account includes a fifty-thousand-dollar overdraft facility for working capital.", exampleHi: "हमारे कॉर्पोरेट चेकिंग खाते में कार्यशील पूंजी के लिए पचास हजार डॉलर की ओवरड्राफ्ट सुविधा शामिल है।" },
      { id: "day53_vocab_006", word: "Remittance", pos: "Noun", ipa: "/rɪˈmɪt.əns/", meaningHi: "धन प्रेषण / विदेश या अन्य स्थान पर भेजा गया धन", exampleEn: "Overseas workers contributed billions in foreign currency remittances to the national economy.", exampleHi: "विदेशी श्रमिकों ने राष्ट्रीय अर्थव्यवस्था में विदेशी मुद्रा प्रेषण (रेमिटेंस) के रूप में अरबों का योगदान दिया।" },
      { id: "day53_vocab_007", word: "Disbursal", pos: "Noun", ipa: "/dɪsˈbɜː.səl/", meaningHi: "धनराशि का वितरण / वास्तविक भुगतान", exampleEn: "The disbursal of the education loan is scheduled directly to the university's account on Monday.", exampleHi: "शिक्षा ऋण का वितरण सोमवार को सीधे विश्वविद्यालय के खाते में होना निर्धारित है।" },
      { id: "day53_vocab_008", word: "Reconcile", pos: "Verb", ipa: "/ˈrek.ən.saɪl/", meaningHi: "खातों का मिलान और समाधान करना", exampleEn: "The corporate accountant must reconcile monthly bank statements with the general sales ledger.", exampleHi: "कॉर्पोरेट लेखाकार को सामान्य बिक्री बहीखाते के साथ मासिक बैंक विवरणों का मिलान (Reconcile) करना होगा।" },
      { id: "day53_vocab_009", word: "Escrow", pos: "Noun", ipa: "/ˈes.krəʊ/", meaningHi: "एस्क्रो खाता / सुरक्षित तृतीय पक्ष खाता", exampleEn: "The purchase funds will be held in an escrow account until all contractual conditions are met.", exampleHi: "जब तक सभी संविदात्मक शर्तें पूरी नहीं हो जातीं, तब तक खरीद निधि को एस्क्रो खाते में रखा जाएगा।" },
      { id: "day53_vocab_010", word: "Foreclosure", pos: "Noun", ipa: "/fɔːˈkləʊ.ʒər/", meaningHi: "कुर्की / बंधक संपत्ति की जब्ती (ऋण न चुकाने पर)", exampleEn: "Failure to service the mortgage for six consecutive months resulted in property foreclosure.", exampleHi: "लगातार छह महीने तक बंधक ऋण न चुकाने के परिणामस्वरूप संपत्ति की कुर्की (फोरक्लोज़र) हो गई।" },
      { id: "day53_vocab_011", word: "Debenture", pos: "Noun", ipa: "/dɪˈben.tʃər/", meaningHi: "ऋणपत्र / बॉन्ड (दीर्घकालिक ऋण का प्रमाणपत्र)", exampleEn: "The enterprise raised twenty million dollars through the issuance of fixed-rate debentures.", exampleHi: "उद्यम ने निश्चित दर वाले ऋणपत्रों (डिबेंचर) को जारी करके बीस मिलियन डॉलर जुटाए।" },
      { id: "day53_vocab_012", word: "Dividend", pos: "Noun", ipa: "/ˈdɪv.ɪ.dend/", meaningHi: "लाभांश / शेयरधारकों को मिलने वाला कंपनी के लाभ का हिस्सा", exampleEn: "Shareholders received a quarterly dividend of two dollars and fifty cents per share.", exampleHi: "शेयरधारकों को प्रति शेयर दो डॉलर और पचास सेंट का त्रैमासिक लाभांश (डिविडेंड) प्राप्त हुआ।" },
      { id: "day53_vocab_013", word: "Beneficiary", pos: "Noun", ipa: "/ˌben.ɪˈfɪʃ.ər.i/", meaningHi: "लाभार्थी / जिसे धनराशि या लाभ प्राप्त होना है", exampleEn: "Please verify the international bank account number (IBAN) of the overseas beneficiary.", exampleHi: "कृपया विदेशी लाभार्थी के अंतरराष्ट्रीय बैंक खाता संख्या (IBAN) को सत्यापित करें।" },
      { id: "day53_vocab_014", word: "Dishonored", pos: "Adjective", ipa: "/dɪsˈɒn.əd/", meaningHi: "अस्वीकृत / अनादरित चेक (बाउंस हुआ चेक)", exampleEn: "The bank returned the dishonored cheque because the drawer's account had insufficient funds.", exampleHi: "बैंक ने अनादरित चेक वापस कर दिया क्योंकि आहरणकर्ता के खाते में अपर्याप्त धनराशि थी।" },
      { id: "day53_vocab_015", word: "Chargeback", pos: "Noun", ipa: "/ˈtʃɑːdʒ.bæk/", meaningHi: "रिफंड / विवादित लेनदेन पर बैंक द्वारा ग्राहक को धन वापसी", exampleEn: "The cardholder requested a chargeback after the merchant failed to deliver the ordered merchandise.", exampleHi: "व्यापारी द्वारा आदेशित सामान वितरित करने में विफल रहने के बाद कार्डधारक ने चार्जबैक का अनुरोध किया।" },
      { id: "day53_vocab_016", word: "Fiscal", pos: "Adjective", ipa: "/ˈfɪs.kəl/", meaningHi: "राजकोषीय / सरकारी या संस्थागत वित्त से संबंधित", exampleEn: "The central government introduced tax reforms to reduce the national fiscal deficit.", exampleHi: "केंद्र सरकार ने राष्ट्रीय राजकोषीय घाटे को कम करने के लिए कर सुधार पेश किए।" },
      { id: "day53_vocab_017", word: "Variable", pos: "Adjective", ipa: "/ˈveə.ri.ə.bəl/", meaningHi: "परिवर्तनीय / ब्याज दर जो बाजार के अनुसार बदलती है", exampleEn: "Borrowers with variable interest rate mortgages faced higher monthly payments when the central bank hiked rates.", exampleHi: "परिवर्तनीय (फ्लोटिंग) ब्याज दर वाले बंधक उधारकर्ताओं को केंद्रीय बैंक द्वारा दरें बढ़ाने पर उच्च मासिक किश्तों का सामना करना पड़ा।" },
      { id: "day53_vocab_018", word: "Ledger", pos: "Noun", ipa: "/ˈledʒ.ər/", meaningHi: "खाता बही / वित्तीय हिसाब-किताब की मुख्य पुस्तक", exampleEn: "All automated debit transactions are instantly recorded in the digital general ledger.", exampleHi: "सभी स्वचालित डेबिट लेनदेन तुरंत डिजिटल सामान्य खाता बही (लेज़र) में दर्ज हो जाते हैं।" },
      { id: "day53_vocab_019", word: "Direct Debit", pos: "Noun", ipa: "/daɪˈrekt ˈdeb.ɪt/", meaningHi: "प्रत्यक्ष डेबिट / स्वतः नियमित भुगतान की बैंक अनुमति", exampleEn: "I established a direct debit mandate to pay my municipal utility bills automatically on the first of each month.", exampleHi: "मैंने प्रत्येक महीने की पहली तारीख को स्वचालित रूप से अपने नगरपालिका उपयोगिता बिलों का भुगतान करने के लिए डायरेक्ट डेबिट मैंडेट स्थापित किया।" },
      { id: "day53_vocab_020", word: "Maturity", pos: "Noun", ipa: "/məˈtʃʊə.rə.ti/", meaningHi: "परिपक्वता / फिक्स्ड डिपॉजिट या बॉन्ड की अवधि पूरी होने की तिथि", exampleEn: "Upon maturity of the five-year fixed deposit, the total principal and accumulated interest were credited.", exampleHi: "पांच वर्षीय सावधि जमा की परिपक्वता (Maturity) पर, कुल मूलधन और संचित ब्याज खाते में जमा कर दिया गया।" }
    ],
    spokenPhrases: [
      { id: "day53_phrase_001", phrase: "I would like to initiate an outward international wire transfer via SWIFT.", register: "Banking Inquiries", meaningHi: "मैं स्विफ्ट के माध्यम से एक बाह्य अंतरराष्ट्रीय वायर ट्रांसफर शुरू करना चाहता हूँ।" },
      { id: "day53_phrase_002", phrase: "Could you please provide an itemized amortization schedule for this mortgage?", register: "Loan Consultation", meaningHi: "क्या आप कृपया इस बंधक ऋण के लिए एक विस्तृत परिशोधन (Amortization) अनुसूची प्रदान कर सकते हैं?" },
      { id: "day53_phrase_003", phrase: "An unauthorized charge of three hundred dollars was debited from my checking account.", register: "Dispute Claim", meaningHi: "मेरे चेकिंग खाते से तीन सौ डॉलर का एक अनधिकृत शुल्क काटा (डेबिट किया) गया था।" },
      { id: "day53_phrase_004", phrase: "What is the annual percentage rate for your fixed-rate commercial loans?", register: "Credit Inquiry", meaningHi: "आपके निश्चित दर वाले वाणिज्यिक ऋणों के लिए वार्षिक प्रतिशत दर (APR) क्या है?" },
      { id: "day53_phrase_005", phrase: "The cheque was returned unpaid due to insufficient funds in the issuer's account.", register: "Banking Formalities", meaningHi: "जारीकर्ता के खाते में अपर्याप्त धनराशि के कारण चेक बिना भुगतान के वापस कर दिया गया।" },
      { id: "day53_phrase_006", phrase: "Please ensure that the funds are held in escrow until the property deed is verified.", register: "Real Estate Finance", meaningHi: "कृपया सुनिश्चित करें कि संपत्ति के विलेख के सत्यापित होने तक धनराशि को एस्क्रो में रखा जाए।" },
      { id: "day53_phrase_007", phrase: "We need to reconcile the ledger entries against the monthly bank statement.", register: "Accounting Operations", meaningHi: "हमें मासिक बैंक विवरण के साथ खाता बही की प्रविष्टियों का मिलान करना होगा।" },
      { id: "day53_phrase_008", phrase: "The bank approved an overdraft facility of twenty thousand dollars for working capital.", register: "Corporate Banking", meaningHi: "बैंक ने कार्यशील पूंजी के लिए बीस हजार डॉलर की ओवरड्राफ्ट सुविधा स्वीकृत की।" },
      { id: "day53_phrase_009", phrase: "Upon maturity, the fixed deposit will automatically renew for another twelve months.", register: "Investment Inquiries", meaningHi: "परिपक्वता पर, सावधि जमा स्वचालित रूप से अगले बारह महीनों के लिए नवीनीकृत हो जाएगी।" },
      { id: "day53_phrase_010", phrase: "I would like to set up a direct debit mandate for my monthly insurance premiums.", register: "Retail Banking", meaningHi: "मैं अपने मासिक बीमा प्रीमियम के लिए डायरेक्ट डेबिट मैंडेट स्थापित करना चाहता हूँ।" },
      { id: "day53_phrase_011", phrase: "What collateral is accepted to secure a commercial line of credit?", register: "Credit Underwriting", meaningHi: "वाणिज्यिक ऋण सीमा को सुरक्षित करने के लिए कौन सा संपार्श्विक (जमानत) स्वीकार किया जाता है?" },
      { id: "day53_phrase_012", phrase: "The transaction reference number confirms the successful remittance of the funds.", register: "Transaction Verification", meaningHi: "लेनदेन संदर्भ संख्या धनराशि के सफल प्रेषण की पुष्टि करती है।" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day53_ex_001", english: "The company pledged its corporate headquarters as collateral to secure a multi-million-dollar syndicated loan.", hindi: "कंपनी ने बहु-मिलियन डॉलर के सिंडिकेटेड ऋण को सुरक्षित करने के लिए अपने कॉर्पोरेट मुख्यालय को संपार्श्विक (जमानत) के रूप में गिरवी रखा।" },
      { id: "day53_ex_002", english: "The banking portal displays an itemized amortization schedule indicating principal reduction over twenty years.", hindi: "बैंकिंग पोर्टल बीस वर्षों में मूलधन में कमी का संकेत देने वाली एक विस्तृत परिशोधन अनुसूची प्रदर्शित करता है।" },
      { id: "day53_ex_003", english: "Maintaining sufficient liquidity enables international corporations to navigate sudden economic downturns with stability.", hindi: "पर्याप्त तरलता (Liquidity) बनाए रखना अंतरराष्ट्रीय निगमों को स्थिरता के साथ अचानक आर्थिक मंदी से निपटने में सक्षम बनाता है।" },
      { id: "day53_ex_004", english: "The financial auditor verified the firm's balance sheet to confirm its solvency before the corporate acquisition.", hindi: "वित्तीय लेखा परीक्षक ने कॉर्पोरेट अधिग्रहण से पहले फर्म की शोधन क्षमता की पुष्टि करने के लिए उसकी बैलेंस शीट का सत्यापन किया।" },
      { id: "day53_ex_005", english: "Our commercial enterprise relies on an overdraft facility to manage seasonal working capital fluctuations.", hindi: "हमारा वाणिज्यिक उद्यम मौसमी कार्यशील पूंजी के उतार-चढ़ाव को प्रबंधित करने के लिए ओवरड्राफ्ट सुविधा पर निर्भर करता है।" },
      { id: "day53_ex_006", english: "Cross-border remittances through the SWIFT global messaging network typically settle within one to two business days.", hindi: "स्विफ्ट वैश्विक मैसेजिंग नेटवर्क के माध्यम से सीमा पार प्रेषण (रेमिटेंस) आमतौर पर एक से दो कार्यदिवसों में तय (सेटल) होते हैं।" },
      { id: "day53_ex_007", english: "The full disbursal of the construction loan is contingent upon municipal site inspections.", hindi: "निर्माण ऋण का पूर्ण वितरण (डिस्बर्सल) नगरपालिका स्थल निरीक्षण पर निर्भर है।" },
      { id: "day53_ex_008", english: "The senior accountant spent the entire afternoon reconciling discrepancies between the billing register and bank records.", hindi: "वरिष्ठ लेखाकार ने बिलिंग रजिस्टर और बैंक रिकॉर्ड के बीच विसंगतियों का मिलान करने में पूरी दोपहर बिताई।" },
      { id: "day53_ex_009", english: "Real estate acquisition funds are securely retained in an escrow account until title deeds are transferred.", hindi: "रियल एस्टेट अधिग्रहण निधि को सुरक्षित रूप से एक एस्क्रो खाते में रखा जाता है जब तक कि शीर्षक विलेख स्थानांतरित नहीं हो जाते।" },
      { id: "day53_ex_010", english: "Persistent loan defaults over twelve months forced the commercial lender to initiate foreclosure proceedings.", hindi: "बारह महीनों तक लगातार ऋण न चुकाने के कारण वाणिज्यिक ऋणदाता को कुर्की (फोरक्लोज़र) की कार्यवाही शुरू करने के लिए मजबूर होना पड़ा।" },
      { id: "day53_ex_011", english: "The industrial conglomerate issued five-year fixed-rate debentures yielding an attractive annual return.", hindi: "औद्योगिक समूह ने एक आकर्षक वार्षिक रिटर्न देने वाले पांच वर्षीय निश्चित दर वाले ऋणपत्र (डिबेंचर) जारी किए।" },
      { id: "day53_ex_012", english: "The board of directors declared an interim dividend of one dollar and twenty cents per ordinary share.", hindi: "निदेशक मंडल ने प्रति साधारण शेयर एक डॉलर और बीस सेंट के अंतरिम लाभांश (डिविडेंड) की घोषणा की।" },
      { id: "day53_ex_013", english: "Please specify the full legal name and IBAN of the overseas beneficiary before transmitting the funds.", hindi: "धनराशि प्रेषित करने से पहले कृपया विदेशी लाभार्थी का पूरा कानूनी नाम और IBAN निर्दिष्ट करें।" },
      { id: "day53_ex_014", english: "The vendor notified us that our corporate cheque was dishonored due to a signature discrepancy.", hindi: "विक्रेता ने हमें सूचित किया कि हस्ताक्षर में विसंगति के कारण हमारा कॉर्पोरेट चेक अस्वीकृत (अनादरित) हो गया था।" },
      { id: "day53_ex_015", english: "After discovering fraudulent online transactions, the consumer promptly filed a chargeback request with the credit card issuer.", hindi: "धोखाधड़ी वाले ऑनलाइन लेनदेन का पता चलने के बाद, उपभोक्ता ने क्रेडिट कार्ड जारीकर्ता के पास तुरंत चार्जबैक अनुरोध दायर किया।" },
      { id: "day53_ex_016", english: "The finance minister emphasized the urgent necessity of narrowing the nation's fiscal deficit.", hindi: "वित्त मंत्री ने देश के राजकोषीय घाटे को कम करने की तत्काल आवश्यकता पर बल दिया।" },
      { id: "day53_ex_017", english: "Borrowers with variable rate mortgages experienced increased monthly payments following the central bank's rate hike.", hindi: "केंद्रीय बैंक द्वारा दरों में वृद्धि के बाद परिवर्तनीय दर वाले बंधक उधारकर्ताओं को बढ़ी हुई मासिक किश्तों का सामना करना पड़ा।" },
      { id: "day53_ex_018", english: "Every commercial credit and debit entry is documented with a timestamp in the immutable electronic ledger.", hindi: "प्रत्येक वाणिज्यिक क्रेडिट और डेबिट प्रविष्टि को अपरिवर्तनीय इलेक्ट्रॉनिक बहीखाते (लेज़र) में टाइमस्टैम्प के साथ प्रलेखित किया जाता है।" },
      { id: "day53_ex_019", english: "I authorized a direct debit mandate to ensure that utility bills are settled automatically each month.", hindi: "मैंने यह सुनिश्चित करने के लिए डायरेक्ट डेबिट मैंडेट को अधिकृत किया कि उपयोगिता बिल प्रत्येक माह स्वचालित रूप से तय हो जाएं।" },
      { id: "day53_ex_020", english: "Upon maturity of the ten-year sovereign bond, investors received their full principal investment plus accrued interest.", hindi: "दस वर्षीय सॉवरेन बॉन्ड की परिपक्वता पर, निवेशकों को उनका पूरा मूल निवेश और अर्जित ब्याज प्राप्त हुआ।" },
      { id: "day53_ex_021", english: "An unexplained debit of five hundred dollars appeared on my checking account statement this morning.", hindi: "आज सुबह मेरे चेकिंग खाते के विवरण पर पांच सौ डॉलर की एक अस्पष्टीकृत डेबिट प्रविष्टि दिखाई दी।" },
      { id: "day53_ex_022", english: "The foreign exchange desk offers real-time spot rates for currency hedging and cross-border trade.", hindi: "विदेशी मुद्रा (Forex) डेस्क मुद्रा हेजिंग और सीमा पार व्यापार के लिए वास्तविक समय की हाजिर दरें प्रदान करता है।" },
      { id: "day53_ex_023", english: "A comprehensive credit underwriting assessment is required prior to sanctioning any high-value commercial credit line.", hindi: "किसी भी उच्च-मूल्य वाली वाणिज्यिक ऋण सीमा को स्वीकृत करने से पहले एक व्यापक क्रेडिट अंडरराइटिंग मूल्यांकन आवश्यक है।" },
      { id: "day53_ex_024", english: "The bank confirmed that the international wire transfer has been credited to the supplier's overseas account.", hindi: "बैंक ने पुष्टि की कि अंतरराष्ट्रीय वायर ट्रांसफर आपूर्तिकर्ता के विदेशी खाते में जमा (क्रेडिट) कर दिया गया है।" },
      { id: "day53_ex_025", english: "Financial discipline involves balancing operational expenditures against projected recurring revenues.", hindi: "वित्तीय अनुशासन में अनुमानित आवर्ती राजस्व के मुकाबले परिचालन व्यय को संतुलित करना शामिल है।" }
    ]
  },
  pronunciation: {
    focusSound: "Financial Terminology Stress, Syllabic Precision & Currency Numbering",
    phoneticNotes: "1. Syllable Stress in Banking Nouns:\n   - /əˌmɔː.tɪˈzeɪ.ʃən/ (Stress on 4th syllable)\n   - /ˈlɪdʒ.ər/ (1st syllable)\n   - /kəˈlæt.ər.əl/ (2nd syllable)\n   - /ˌben.ɪˈfɪʃ.ər.i/ (3rd syllable)\n   - /ˈsɒl.vən.si/ (1st syllable)\n2. Silent Letters and Glides:\n   - 'Debenture' /dɪˈben.tʃər/ (Pronounced with /tʃ/)\n   - 'Foreclosure' /fɔːˈkləʊ.ʒər/ (Voiced postalveolar fricative /ʒ/)\n   - 'Escrow' /ˈes.krəʊ/ (Diphthong /əʊ/)\n3. Numerical Intonation in Currencies: Rise on integer thousands, fall on decimal cents: '$12,450.75' (/ˈtwelv ˈθaʊ.zənd fɔː ˈhʌn.drəd ˈfɪf.ti ˈdɒl.əz ænd ˈsev.ən.ti faɪv ˈsents/).",
    minimalPairs: [
      { wordA: "Fiscal", ipaA: "/ˈfɪs.kəl/", wordB: "Physical", ipaB: "/ˈfɪz.ɪ.kəl/" },
      { wordA: "Ledger", ipaA: "/ˈledʒ.ər/", wordB: "Letter", ipaB: "/ˈlet.ər/" },
      { wordA: "Credit", ipaA: "/ˈkred.ɪt/", wordB: "Crater", ipaB: "/ˈkreɪ.tər/" },
      { wordA: "Debit", ipaA: "/ˈdeb.ɪt/", wordB: "Debate", ipaB: "/dɪˈbeɪt/" },
      { wordA: "Escrow", ipaA: "/ˈes.krəʊ/", wordB: "Scree", ipaB: "/skriː/" }
    ],
    drills: [
      { sentence: "The bank requires collateral to approve the commercial overdraft facility.", focus: "Stress in /kəˈlæt.ər.əl/ & /ˈəʊ.və.drɑːft/" },
      { sentence: "The loan officer provided an itemized amortization schedule.", focus: "Stress cadence in /əˌmɔː.tɪˈzeɪ.ʃən/" },
      { sentence: "We must reconcile all transactions recorded in the electronic ledger.", focus: "Pronunciation of /ˈrek.ən.saɪl/ & /ˈledʒ.ər/" },
      { sentence: "The beneficiary received the international remittance via SWIFT.", focus: "Stress in /ˌben.ɪˈfɪʃ.ər.i/ & /rɪˈmɪt.əns/" },
      { sentence: "The cheque was returned dishonored due to insufficient account liquidity.", focus: "Pronunciation of /dɪsˈɒn.əd/ & /lɪˈkwɪd.ə.ti/" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day53_ex_001",
        type: "error_correction",
        prompt: "Correct the sentence: 'From my bank account, five thousand rupees got cut yesterday.'",
        correctAnswer: "An amount of five thousand rupees was debited from my bank account yesterday.",
        acceptableAnswers: [
          "Five thousand rupees were debited from my account yesterday.",
          "An unauthorized deduction of five thousand rupees occurred in my account yesterday."
        ],
        explanationEn: "In English, money does not 'get cut'; it is 'debited from' or 'deducted from' an account.",
        explanationHi: "बैंक से पैसे कटने के लिए 'debited from' या 'deducted from' का प्रयोग करें ('got cut' गलत है)।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day53_ex_002",
        type: "error_correction",
        prompt: "Correct the sentence: 'His cheque was bounced by the manager.'",
        correctAnswer: "His cheque was dishonored due to insufficient funds.",
        acceptableAnswers: [
          "His cheque bounced due to lack of funds.",
          "The bank returned the cheque unpaid due to insufficient funds."
        ],
        explanationEn: "The formal banking term is 'dishonored' or 'returned unpaid due to insufficient funds'.",
        explanationHi: "औपचारिक बैंकिंग भाषा में 'dishonored' या 'returned due to insufficient funds' कहा जाता है।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day53_ex_003",
        type: "error_correction",
        prompt: "Correct the sentence: 'Sir, passbook entry is not there for my bonus payment.'",
        correctAnswer: "The bonus credit transaction does not appear on my bank statement.",
        acceptableAnswers: [
          "The bonus deposit is not reflected in my account statement.",
          "The transaction is missing from my bank statement."
        ],
        explanationEn: "In modern international banking, refer to 'bank statement' or 'credit transaction' rather than '*passbook entry is not there*'.",
        explanationHi: "आधुनिक बैंकिंग में 'does not appear on my bank statement' या 'is not reflected in my statement' कहें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day53_ex_004",
        type: "multiple_choice",
        prompt: "What is 'Collateral' in loan transactions?",
        options: [
          "An asset pledged by a borrower as security for loan repayment",
          "The color of the bank's debit card",
          "The signature of the cashier on a receipt",
          "A free gift given to new account holders"
        ],
        correctAnswer: "An asset pledged by a borrower as security for loan repayment",
        explanationEn: "Collateral is a tangible asset pledged to secure a loan against default.",
        explanationHi: "ऋण की सुरक्षा के लिए बंधक रखी गई संपत्ति को 'collateral' (संपार्श्विक) कहते हैं।",
        difficulty: "easy",
        skillTag: "BANKING_CONCEPTS"
      },
      {
        id: "day53_ex_005",
        type: "fill_blank",
        prompt: "A detailed table showing each scheduled loan repayment split between principal and interest is called an _______ schedule.",
        correctAnswer: "amortization",
        acceptableAnswers: ["amortisation", "repayment"],
        explanationEn: "An amortization schedule details loan payoff over time.",
        explanationHi: "मूलधन और ब्याज की किश्तों की अनुसूची को 'amortization schedule' कहते हैं।",
        difficulty: "easy",
        skillTag: "FINANCIAL_TERMS"
      },
      {
        id: "day53_ex_006",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'कृपया मेरे बचत खाते से ₹10,000 की अनधिकृत कटौती की जांच करें।'",
        correctAnswer: "Please investigate the unauthorized debit of ₹10,000 from my savings account.",
        acceptableAnswers: [
          "Please check the unauthorized deduction of ₹10,000 from my savings account.",
          "Kindly investigate the unauthorized ₹10,000 debit from my savings account."
        ],
        explanationEn: "'Please investigate the unauthorized debit of ₹10,000 from my savings account.'",
        explanationHi: "'Unauthorized debit from my savings account' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day53_ex_007",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The purchase funds will be held in an escrow account until title deeds are transferred.'",
        correctAnswer: "शीर्षक विलेख (दस्तावेज़) स्थानांतरित होने तक खरीद निधि को एक एस्क्रो खाते में रखा जाएगा।",
        acceptableAnswers: [
          "टाइटल डीड ट्रांसफर होने तक खरीद की रकम एस्क्रो अकाउंट में सुरक्षित रहेगी।"
        ],
        explanationEn: "'The purchase funds will be held in an escrow account until title deeds are transferred.'",
        explanationHi: "सटीक वित्तीय और कानूनी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day53_ex_008",
        type: "sentence_ordering",
        prompt: "Order into a formal instruction: [international / initiate / SWIFT / wire transfer / please / via / an]",
        correctAnswer: "Please initiate an international wire transfer via SWIFT.",
        acceptableAnswers: [
          "Via SWIFT, please initiate an international wire transfer."
        ],
        explanationEn: "Imperative verb + Object + Prepositional Route.",
        explanationHi: "सही क्रम: Please initiate an international wire transfer via SWIFT.",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day53_ex_009",
        type: "multiple_choice",
        prompt: "What does 'Liquidity' refer to in corporate finance?",
        options: [
          "The ease with which assets can be converted quickly into cash without significant loss of value",
          "The amount of water stored in the corporate office cooler",
          "The total weight of metal coins in the vault",
          "The number of liquid chemicals manufactured in a factory"
        ],
        correctAnswer: "The ease with which assets can be converted quickly into cash without significant loss of value",
        explanationEn: "Liquidity is how quickly an asset can be converted into ready cash.",
        explanationHi: "संपत्ति को बिना नुकसान के तुरंत नकदी में बदलने की क्षमता को 'Liquidity' (तरलता) कहते हैं।",
        difficulty: "easy",
        skillTag: "FINANCIAL_CONCEPTS"
      },
      {
        id: "day53_ex_010",
        type: "fill_blank",
        prompt: "The company's long-term ability to meet all financial obligations and debts is known as _______.",
        correctAnswer: "solvency",
        explanationEn: "'Solvency' is the ability to service long-term debts.",
        explanationHi: "दीर्घकालिक ऋण चुकाने की वित्तीय क्षमता को 'solvency' कहते हैं।",
        difficulty: "easy",
        skillTag: "FINANCIAL_TERMS"
      },
      {
        id: "day53_ex_011",
        type: "error_correction",
        prompt: "Correct the sentence: 'Ten thousand rupees were credited from my account.'",
        correctAnswer: "Ten thousand rupees were debited from my account.",
        acceptableAnswers: [
          "Ten thousand rupees were credited to my account."
        ],
        explanationEn: "Money is debited **from** an account (removed) or credited **to** an account (added).",
        explanationHi: "पैसे निकाले जाने पर 'debited from' और जमा होने पर 'credited to' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "PREPOSITIONAL_COLLOCATION"
      },
      {
        id: "day53_ex_012",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nCustomer: 'I noticed a recurring fee on my billing statement.'\nBanker: 'That is the monthly service fee for your corporate _______ facility.'",
        options: ["overdraft", "turnstile", "trespass", "hallmark"],
        correctAnswer: "overdraft",
        explanationEn: "An overdraft facility allows drawing beyond available funds, often carrying a fee.",
        explanationHi: "अतिरिक्त राशि आहरण की अनुमति 'overdraft facility' कहलाती है।",
        difficulty: "easy",
        skillTag: "BANKING_OPERATIONS"
      },
      {
        id: "day53_ex_013",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The accountant reconciled the bank statement with the general sales ledger.'",
        correctAnswer: "The accountant reconciled the bank statement with the general sales ledger.",
        explanationEn: "'The accountant reconciled the bank statement with the general sales ledger.'",
        explanationHi: "वित्तीय लेखांकन वाक्य का श्रुतलेख।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day53_ex_014",
        type: "matching",
        prompt: "Match the financial term with its appropriate definition:",
        pairs: [
          { left: "Dividend", right: "Distribution of corporate earnings to shareholders" },
          { left: "Debenture", right: "Unsecured long-term debt instrument issued by corporations" },
          { left: "Escrow", right: "Neutral third-party account holding funds until terms are fulfilled" },
          { left: "Foreclosure", right: "Legal process of seizing mortgaged property upon default" }
        ],
        explanationEn: "Matching financial definitions.",
        explanationHi: "वित्तीय शब्दों और उनकी परिभाषाओं का सही मिलान।",
        difficulty: "easy",
        skillTag: "FINANCIAL_TERMS"
      },
      {
        id: "day53_ex_015",
        type: "fill_blank",
        prompt: "Upon _______ of the three-year certificate of deposit, the principal and interest will be disbursed.",
        correctAnswer: "maturity",
        explanationEn: "'Maturity' is the date on which a financial instrument ceases to exist and principal is repaid.",
        explanationHi: "अवधि पूर्ण होने की तिथि को 'maturity' (परिपक्वता) कहते हैं।",
        difficulty: "easy",
        skillTag: "INVESTMENT_TERMS"
      },
      {
        id: "day53_ex_016",
        type: "multiple_choice",
        prompt: "What is a 'Chargeback'?",
        options: [
          "A reversal of a payment transaction returned to the cardholder by the issuing bank",
          "An extra fee charged when charging your phone battery at a bank",
          "The speed of charging a laptop in an office",
          "A fee charged to enter an ATM vestibule"
        ],
        correctAnswer: "A reversal of a payment transaction returned to the cardholder by the issuing bank",
        explanationEn: "A chargeback protects consumers from fraudulent or undelivered merchant transactions.",
        explanationHi: "विवादित या फर्जी लेनदेन पर बैंक द्वारा ग्राहक को धन वापसी की प्रक्रिया को 'chargeback' कहते हैं।",
        difficulty: "easy",
        skillTag: "CONSUMER_RIGHTS"
      },
      {
        id: "day53_ex_017",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'बैंक ने प्रतिस्पर्धी ब्याज दर पर व्यापार ऋण को मंजूरी दी।'",
        correctAnswer: "The bank sanctioned the business loan at a competitive interest rate.",
        acceptableAnswers: [
          "The bank approved the business loan at a competitive interest rate.",
          "The commercial loan was approved by the bank at a competitive interest rate."
        ],
        explanationEn: "'The bank approved/sanctioned the business loan at a competitive interest rate.'",
        explanationHi: "'Approved the business loan at a competitive interest rate' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day53_ex_018",
        type: "error_correction",
        prompt: "Correct the sentence: 'If interest rate will increase, our monthly payment will go up.'",
        correctAnswer: "If the interest rate increases, our monthly payment will go up.",
        acceptableAnswers: [
          "If the interest rate rises, our monthly mortgage payment will increase."
        ],
        explanationEn: "First conditional rule: Use Present Simple in the 'if'-clause ('If the interest rate increases'), NOT '*will increase*'.",
        explanationHi: "प्रथम कंडीशनल में if-क्लॉज में Present Simple ('if the rate increases') आता है ('will increase' नहीं)।",
        difficulty: "medium",
        skillTag: "CONDITIONAL_SYNTAX"
      },
      {
        id: "day53_ex_019",
        type: "sentence_building",
        prompt: "Build a financial statement: [debited / from / account / fee / service / was / the / monthly]",
        correctAnswer: "The monthly service fee was debited from the account.",
        acceptableAnswers: [
          "From the account, the monthly service fee was debited."
        ],
        explanationEn: "Subject + Passive Verb + Prepositional Phrase.",
        explanationHi: "सही वाक्य: The monthly service fee was debited from the account.",
        difficulty: "medium",
        skillTag: "SYNTAX_BUILDING"
      },
      {
        id: "day53_ex_020",
        type: "multiple_choice",
        prompt: "What does 'SWIFT' facilitate in global banking?",
        options: [
          "Standardized international messaging for secure cross-border wire transfers",
          "Fast printing of physical paper receipts",
          "Automated car parking at bank branches",
          "Counting coins with laser scanners"
        ],
        correctAnswer: "Standardized international messaging for secure cross-border wire transfers",
        explanationEn: "SWIFT (Society for Worldwide Interbank Financial Telecommunication) manages international remittances.",
        explanationHi: "SWIFT अंतरराष्ट्रीय सुरक्षित धन हस्तांतरण (रेमिटेंस) के लिए मैसेजिंग नेटवर्क है।",
        difficulty: "easy",
        skillTag: "INTERNATIONAL_BANKING"
      },
      {
        id: "day53_ex_021",
        type: "fill_blank",
        prompt: "Setting up a _______ debit mandate ensures your bills are automatically paid each billing cycle.",
        correctAnswer: "direct",
        explanationEn: "A 'direct debit' automatically draws funds for recurring payments.",
        explanationHi: "स्वतः मासिक भुगतान के लिए 'direct debit' स्थापित किया जाता है।",
        difficulty: "easy",
        skillTag: "RETAIL_BANKING"
      },
      {
        id: "day53_ex_022",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Overseas workers sent billions in remittances to support national foreign exchange reserves.'",
        correctAnswer: "विदेशी श्रमिकों ने राष्ट्रीय विदेशी मुद्रा भंडार का समर्थन करने के लिए प्रेषण (रेमिटेंस) में अरबों रुपये भेजे।",
        acceptableAnswers: [
          "विदेशी कामगारों ने विदेशी मुद्रा भंडार को सहारा देने के लिए अरबों का धन प्रेषित किया।"
        ],
        explanationEn: "'Remittances' translates as धन प्रेषण / रेमिटेंस.",
        explanationHi: "सटीक आर्थिक और वित्तीय हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day53_ex_023",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nLoan Officer: 'Have you selected a fixed or variable rate mortgage?'\nBorrower: 'I prefer a _______ rate so that my monthly amortization payments remain predictable.'",
        options: ["fixed", "dishonored", "congested", "subordinate"],
        correctAnswer: "fixed",
        explanationEn: "A fixed-rate mortgage ensures identical monthly payments throughout the term.",
        explanationHi: "मासिक किश्त को स्थिर रखने के लिए 'fixed rate' (निश्चित दर) चुना जाता है।",
        difficulty: "easy",
        skillTag: "MORTGAGE_FINANCE"
      },
      {
        id: "day53_ex_024",
        type: "error_correction",
        prompt: "Correct the sentence: 'Please give me bank account statement of last one year.'",
        correctAnswer: "Could you please provide my bank account statement for the past year?",
        acceptableAnswers: [
          "Please provide my account statement for the last twelve months.",
          "I would like to request my bank statement for the past year."
        ],
        explanationEn: "Polite formal request phrasing: 'Could you please provide my account statement for the past year?'.",
        explanationHi: "विनम्र और स्वाभाविक औपचारिक अनुरोध: 'Could you please provide my bank account statement for the past year?'",
        difficulty: "easy",
        skillTag: "POLITE_BANKING"
      },
      {
        id: "day53_ex_025",
        type: "speaking_pronunciation",
        prompt: "Read aloud with clear financial enunciation: 'The commercial lender verified the collateral and finalized the twenty-year amortization schedule.'",
        targetText: "The commercial lender verified the collateral and finalized the twenty-year amortization schedule.",
        phoneticFocus: "Stress on /kəˈlæt.ər.əl/ and /əˌmɔː.tɪˈzeɪ.ʃən/",
        explanationEn: "Maintain clear distinction between syllables in complex fiscal vocabulary.",
        explanationHi: "वित्तीय उच्चारण और धाराप्रवाह वाचन का अभ्यास।",
        difficulty: "medium",
        skillTag: "PRONUNCIATION_SPEAKING"
      },
      {
        id: "day53_ex_026",
        type: "fill_blank",
        prompt: "The government took measures to reduce the national _______ deficit by curtailing non-essential expenditures.",
        correctAnswer: "fiscal",
        explanationEn: "'Fiscal deficit' is the gap between government revenue and expenditure.",
        explanationHi: "सरकारी राजस्व और व्यय के अंतर को 'fiscal deficit' (राजकोषीय घाटा) कहते हैं।",
        difficulty: "easy",
        skillTag: "MACROECONOMICS"
      },
      {
        id: "day53_ex_027",
        type: "multiple_choice",
        prompt: "Which party receives the funds in an international wire transfer?",
        options: ["The Beneficiary", "The Remitter", "The Auditor", "The Underwriter"],
        correctAnswer: "The Beneficiary",
        explanationEn: "The beneficiary is the recipient of the transferred funds.",
        explanationHi: "धनराशि प्राप्त करने वाले पक्ष को 'Beneficiary' (लाभार्थी) कहते हैं।",
        difficulty: "easy",
        skillTag: "BANKING_TERMS"
      },
      {
        id: "day53_ex_028",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'यदि कंपनी डिफ़ॉल्ट करती है, तो बैंक बंधक संपत्ति की नीलामी कर सकता है।'",
        correctAnswer: "If the company defaults, the bank can auction the mortgaged collateral.",
        acceptableAnswers: [
          "If the firm defaults, the lender may initiate foreclosure on the pledged assets.",
          "In the event of a default, the bank may seize the mortgaged property."
        ],
        explanationEn: "'If the company defaults, the bank can auction the mortgaged collateral.'",
        explanationHi: "'Mortgaged collateral / foreclosure' का सटीक अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day53_ex_029",
        type: "sentence_ordering",
        prompt: "Order the transaction: [beneficiary's / credited / the / were / account / funds / to / the]",
        correctAnswer: "The funds were credited to the beneficiary's account.",
        explanationEn: "Subject + Passive Verb + Prepositional Recipient.",
        explanationHi: "सही वाक्य: The funds were credited to the beneficiary's account.",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day53_ex_030",
        type: "fill_blank",
        prompt: "A mortgage where the interest rate fluctuates based on central bank benchmark rates is called a _______ rate mortgage.",
        correctAnswer: "variable",
        acceptableAnswers: ["floating", "adjustable"],
        explanationEn: "A variable, floating, or adjustable rate mortgage fluctuates with the market.",
        explanationHi: "बाजार के अनुसार बदलने वाली दर को 'variable' या 'floating rate' कहते हैं।",
        difficulty: "easy",
        skillTag: "MORTGAGE_FINANCE"
      },
      {
        id: "day53_ex_031",
        type: "multiple_choice",
        prompt: "What does 'Foreclosure' mean?",
        options: [
          "A legal process in which a lender takes possession of mortgaged property when the borrower fails to pay",
          "Closing a bank branch for lunch",
          "Locking the entrance door of a residential building at night",
          "Opening a new bank account online"
        ],
        correctAnswer: "A legal process in which a lender takes possession of mortgaged property when the borrower fails to pay",
        explanationEn: "Foreclosure is the seizure of collateral upon mortgage default.",
        explanationHi: "ऋण न चुकाने पर बंधक रखी संपत्ति को जब्त करने की कानूनी प्रक्रिया को 'Foreclosure' (कुर्की) कहते हैं।",
        difficulty: "easy",
        skillTag: "LEGAL_BANKING"
      },
      {
        id: "day53_ex_032",
        type: "error_correction",
        prompt: "Correct the sentence: 'I am requesting for disbursal of my sanctioned loan amount.'",
        correctAnswer: "I request the disbursal of my sanctioned loan amount.",
        acceptableAnswers: [
          "I am requesting the disbursal of my approved loan funds.",
          "Please disburse my sanctioned loan amount."
        ],
        explanationEn: "'Request' is transitive; avoid '*requesting for*'. Say 'request the disbursal of...'.",
        explanationHi: "'Request' के बाद 'for' न लगाएं; 'request the disbursal of...' कहें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day53_ex_033",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The corporate board approved a quarterly dividend distribution for all registered shareholders.'",
        correctAnswer: "कॉर्पोरेट बोर्ड ने सभी पंजीकृत शेयरधारकों के लिए त्रैमासिक लाभांश वितरण को मंजूरी दी।",
        acceptableAnswers: [
          "बोर्ड ने सभी शेयरधारकों के लिए तिमाही डिविडेंड बांटने की स्वीकृति दी।"
        ],
        explanationEn: "'Quarterly dividend distribution' = त्रैमासिक लाभांश वितरण.",
        explanationHi: "सटीक कॉर्पोरेट वित्त अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day53_ex_034",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nAccountant: 'The invoice states $14,000, but our bank register records $13,500.'\nManager: 'Let us contact the supplier to _______ this five-hundred-dollar discrepancy.'",
        options: ["reconcile", "prosecute", "adjourn", "demolish"],
        correctAnswer: "reconcile",
        explanationEn: "'Reconcile' means to resolve discrepancies and bring records into agreement.",
        explanationHi: "विसंगति का समाधान और आंकड़ों का मिलान करने के लिए 'reconcile' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "ACCOUNTING_OPERATIONS"
      },
      {
        id: "day53_ex_035",
        type: "fill_blank",
        prompt: "A debt instrument issued by an enterprise to borrow long-term funds at a fixed rate of interest is a _______.",
        correctAnswer: "debenture",
        acceptableAnswers: ["bond"],
        explanationEn: "A debenture is a medium to long-term debt format used by companies.",
        explanationHi: "दीर्घकालिक ऋण के लिए जारी किए गए ऋणपत्र को 'debenture' कहते हैं।",
        difficulty: "easy",
        skillTag: "INVESTMENT_TERMS"
      },
      {
        id: "day53_ex_036",
        type: "matching",
        prompt: "Match the banking transaction with its standard documentation:",
        pairs: [
          { left: "International Wire Transfer", right: "SWIFT confirmation and MT103 record" },
          { left: "Mortgage Loan", right: "Amortization schedule and title deed hypothecation" },
          { left: "Unauthorized Card Charge", right: "Chargeback dispute form" },
          { left: "Automated Utility Payment", right: "Direct debit mandate" }
        ],
        explanationEn: "Matching banking instruments with documentation.",
        explanationHi: "बैंकिंग लेनदेन और उनके संबंधित आधिकारिक दस्तावेजों का मिलान।",
        difficulty: "easy",
        skillTag: "BANKING_DOCUMENTATION"
      },
      {
        id: "day53_ex_037",
        type: "error_correction",
        prompt: "Correct the sentence: 'Please debit the amount into my brother's account.'",
        correctAnswer: "Please credit the amount to my brother's account.",
        acceptableAnswers: [
          "Please transfer the funds into my brother's account."
        ],
        explanationEn: "When adding money to someone's account, use 'credit to' (debit means to subtract from).",
        explanationHi: "खाते में पैसे डालने के लिए 'credit to' का प्रयोग होता है ('debit into' गलत है)।",
        difficulty: "easy",
        skillTag: "BANKING_COLLOCATIONS"
      },
      {
        id: "day53_ex_038",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The central bank maintained benchmark interest rates to curb rising inflation.'",
        correctAnswer: "The central bank maintained benchmark interest rates to curb rising inflation.",
        explanationEn: "'The central bank maintained benchmark interest rates to curb rising inflation.'",
        explanationHi: "राजकोषीय और मौद्रिक वाक्य का श्रुतलेख अभ्यास।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day53_ex_039",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'चेक पर गलत हस्ताक्षर होने के कारण बैंक ने भुगतान रोक दिया।'",
        correctAnswer: "The bank withheld payment because of an irregular signature on the cheque.",
        acceptableAnswers: [
          "The bank stopped payment due to a signature mismatch on the cheque.",
          "Due to a signature discrepancy on the cheque, the bank declined the transaction."
        ],
        explanationEn: "'The bank withheld payment because of an irregular signature on the cheque.'",
        explanationHi: "'Withheld payment due to a signature mismatch' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day53_ex_040",
        type: "sentence_building",
        prompt: "Build an executive statement: [schedule / amortization / provided / was / customer / the / to / an]",
        correctAnswer: "An amortization schedule was provided to the customer.",
        acceptableAnswers: [
          "To the customer, an amortization schedule was provided."
        ],
        explanationEn: "Subject + Passive Verb + Prepositional Indirect Object.",
        explanationHi: "सही वाक्य: An amortization schedule was provided to the customer.",
        difficulty: "medium",
        skillTag: "SYNTAX_BUILDING"
      },
      {
        id: "day53_ex_041",
        type: "multiple_choice",
        prompt: "What does 'Forex' stand for?",
        options: ["Foreign Exchange", "Formal Execution", "Forward Expenditure", "Federal Extension"],
        correctAnswer: "Foreign Exchange",
        explanationEn: "Forex = Foreign Exchange (the trading and conversion of global currencies).",
        explanationHi: "Forex का पूर्ण रूप 'Foreign Exchange' (विदेशी मुद्रा विनिमय) है।",
        difficulty: "easy",
        skillTag: "FINANCIAL_ACRONYMS"
      },
      {
        id: "day53_ex_042",
        type: "fill_blank",
        prompt: "The borrower defaulted on three consecutive payments, leading to the _______ of the collateral.",
        correctAnswer: "foreclosure",
        acceptableAnswers: ["seizure", "liquidation"],
        explanationEn: "'Foreclosure / seizure / liquidation' of collateral.",
        explanationHi: "डिफ़ॉल्ट के बाद बंधक संपत्ति की जब्ती को 'foreclosure' कहते हैं।",
        difficulty: "easy",
        skillTag: "CREDIT_LEGAL"
      },
      {
        id: "day53_ex_043",
        type: "error_correction",
        prompt: "Correct the sentence: 'I am wanting to open one current account in your bank.'",
        correctAnswer: "I would like to open a checking account with your bank.",
        acceptableAnswers: [
          "I wish to open a current account at your branch.",
          "I would like to open a business account with your bank."
        ],
        explanationEn: "Use polite conditional 'I would like to open...' ('want' is a stative verb and shouldn't be in continuous '*am wanting*').",
        explanationHi: "'Want' स्टेटिव क्रिया है; 'I would like to open a checking/current account' कहें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day53_ex_044",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'A direct debit mandate ensures that your recurring utility bills are settled punctually.'",
        correctAnswer: "एक डायरेक्ट डेबिट मैंडेट यह सुनिश्चित करता है कि आपके नियमित उपयोगिता बिल समय पर चुकता हो जाएं।",
        acceptableAnswers: [
          "डायरेक्ट डेबिट से आपके आवर्ती बिल समय पर स्वतः भर जाते हैं।"
        ],
        explanationEn: "'Settled punctually' = समय पर चुकता हो जाना.",
        explanationHi: "सटीक बैंकिंग अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day53_ex_045",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nBanker: 'Your five-year deposit has matured today.'\nCustomer: 'Please credit the principal and accrued interest into my _______ account.'",
        options: ["checking", "turnstile", "bottleneck", "sanction"],
        correctAnswer: "checking",
        explanationEn: "Checking or savings account receives proceeds upon investment maturity.",
        explanationHi: "परिपक्वता राशि चेकिंग या बचत खाते में जमा (क्रेडिट) होती है।",
        difficulty: "easy",
        skillTag: "RETAIL_BANKING"
      },
      {
        id: "day53_ex_046",
        type: "fill_blank",
        prompt: "The bank requires two authorized signatures to approve any payment exceeding fifty thousand _______.",
        correctAnswer: "dollars",
        acceptableAnswers: ["rupees", "euros", "pounds"],
        explanationEn: "Standard dual-authorization currency amount.",
        explanationHi: "मुद्रा की इकाई।",
        difficulty: "easy",
        skillTag: "BANKING_PROCEDURES"
      },
      {
        id: "day53_ex_047",
        type: "multiple_choice",
        prompt: "Which statement correctly describes the difference between Liquidity and Solvency?",
        options: [
          "Liquidity is the ability to pay immediate short-term obligations in cash, whereas Solvency is the long-term ability of total assets to exceed total liabilities",
          "Liquidity means owning water bottling plants, while Solvency means dissolving sugar in tea",
          "There is no difference; both mean identical things in banking",
          "Liquidity applies only to coins, while solvency applies only to paper notes"
        ],
        correctAnswer: "Liquidity is the ability to pay immediate short-term obligations in cash, whereas Solvency is the long-term ability of total assets to exceed total liabilities",
        explanationEn: "Liquidity = short-term cash flow; Solvency = long-term asset-to-debt health.",
        explanationHi: "Liquidity अल्पकालिक नकदी की क्षमता है, जबकि Solvency दीर्घकालिक वित्तीय मजबूती और संपत्ति की देनदारियों से अधिक होने की स्थिति है।",
        difficulty: "medium",
        skillTag: "FINANCIAL_CONCEPTS"
      },
      {
        id: "day53_ex_048",
        type: "error_correction",
        prompt: "Correct the sentence: 'Kindly revert back with the SWIFT code at earliest.'",
        correctAnswer: "Please provide the SWIFT code at your earliest convenience.",
        acceptableAnswers: [
          "Please send the SWIFT code as soon as possible.",
          "Please get back to me with the SWIFT code."
        ],
        explanationEn: "Eliminates both 'revert back' (redundant) and 'at earliest' (say 'at your earliest convenience').",
        explanationHi: "'Revert back' और 'at earliest' दोनों को सुधारें; 'Please provide the SWIFT code at your earliest convenience' कहें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day53_ex_049",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'विदेशी मुद्रा विनिमय डेस्क अंतरराष्ट्रीय व्यापार के लिए वास्तविक समय की विनिमय दरें प्रदान करता है।'",
        correctAnswer: "The foreign exchange desk provides real-time spot rates for international trade.",
        acceptableAnswers: [
          "The Forex desk offers live exchange rates for cross-border trade.",
          "The foreign exchange division provides real-time conversion rates for international commerce."
        ],
        explanationEn: "'The foreign exchange desk provides real-time spot rates for international trade.'",
        explanationHi: "'Foreign exchange desk provides real-time spot rates' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day53_ex_050",
        type: "sentence_ordering",
        prompt: "Order the financial warning: [defaults / borrower / if / the / collateral / the / seized / is]",
        correctAnswer: "If the borrower defaults, the collateral is seized.",
        acceptableAnswers: [
          "The collateral is seized if the borrower defaults."
        ],
        explanationEn: "Conditional Clause + Main Passive Result Clause.",
        explanationHi: "सही क्रम: If the borrower defaults, the collateral is seized.",
        difficulty: "medium",
        skillTag: "CONDITIONAL_SYNTAX"
      },
      {
        id: "day53_ex_051",
        type: "fill_blank",
        prompt: "The merchant accepted full liability and processed an immediate _______ for the returned goods.",
        correctAnswer: "refund",
        acceptableAnswers: ["chargeback", "credit"],
        explanationEn: "'Refund / chargeback / credit' for returned merchandise.",
        explanationHi: "वापस किए गए सामान के लिए 'refund / credit' जारी किया गया।",
        difficulty: "easy",
        skillTag: "COMMERCIAL_TRANSACTIONS"
      },
      {
        id: "day53_ex_052",
        type: "multiple_choice",
        prompt: "Which code uniquely identifies an individual bank branch internationally for wire remittances?",
        options: ["SWIFT / BIC Code", "PIN Code", "Barcode", "CVV Number"],
        correctAnswer: "SWIFT / BIC Code",
        explanationEn: "SWIFT/BIC uniquely identifies financial institutions globally.",
        explanationHi: "अंतरराष्ट्रीय वायर ट्रांसफर के लिए बैंक शाखा की पहचान 'SWIFT / BIC' कोड से होती है।",
        difficulty: "easy",
        skillTag: "BANKING_CODES"
      },
      {
        id: "day53_ex_053",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The audited general ledger confirms that all debit transactions have been properly authorized.'",
        correctAnswer: "ऑडिट किए गए सामान्य बहीखाते ने पुष्टि की कि सभी डेबिट लेनदेन ठीक से अधिकृत किए गए हैं।",
        acceptableAnswers: [
          "लेखापरीक्षित लेज़र यह साबित करता है कि सभी डेबिट लेनदेन विधिवत स्वीकृत हैं।"
        ],
        explanationEn: "'Audited general ledger' = ऑडिट किया गया सामान्य बहीखाता.",
        explanationHi: "सटीक वित्तीय हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day53_ex_054",
        type: "active_recall",
        prompt: "Explain the difference between 'debited from' and 'credited to', and why saying 'money got cut' is inappropriate in professional English.",
        correctAnswer: "'Debited from' means funds are deducted or subtracted from an account, while 'credited to' means funds are added or deposited into an account. 'Money got cut' is an informal, non-standard literal translation from Hindi (पैसे कट गए). Professional English requires: 'An amount was debited from my account' or 'A fee was deducted'.",
        acceptableAnswers: [
          "'Debited from' means subtracted; 'credited to' means added. 'Money got cut' is poor English because money is debited or deducted formally."
        ],
        explanationEn: "Clear conceptual distinction between debit/credit and eradication of L1 literalism.",
        explanationHi: "'Debited from' का अर्थ खाते से कटना/घटना है और 'credited to' का अर्थ खाते में जुड़ना है। 'Money got cut' गलत है, 'amount was debited/deducted' कहना चाहिए।",
        difficulty: "hard",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day53_ex_055",
        type: "error_correction",
        prompt: "Correct the sentence: 'The bank cutted charges because cheque was bounced.'",
        correctAnswer: "The bank debited penalty charges because the cheque was dishonored.",
        acceptableAnswers: [
          "The bank deducted fees because the cheque was returned due to insufficient funds.",
          "Penalty charges were debited from my account because the check bounced."
        ],
        explanationEn: "Eliminates improper past tense '*cutted*' (use 'debited / deducted') and slang '*cheque was bounced*' (use 'cheque was dishonored').",
        explanationHi: "'Cutted' और 'cheque was bounced' दोनों अमान्य हैं; 'The bank debited charges because the cheque was dishonored' कहें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day53_diag_001",
        title: "Controlled Dialogue: Initiating an International SWIFT Wire Transfer",
        context: "A corporate client instructs a commercial bank officer to execute an overseas supplier remittance.",
        characters: ["Bank Relationship Manager (Ms. Patel)", "Corporate Treasurer (Mr. Adams)"],
        lines: [
          { speaker: "Corporate Treasurer (Mr. Adams)", text: "Good morning, Ms. Patel. I need to execute an urgent outward wire transfer of seventy-five thousand euros to our precision parts supplier in Munich.", hindi: "शुभ प्रभात, सुश्री पटेल। मुझे म्यूनिख में हमारे सटीक पार्ट्स आपूर्तिकर्ता को पिचहत्तर हजार यूरो का तत्काल बाह्य वायर ट्रांसफर निष्पादित करने की आवश्यकता है।" },
          { speaker: "Bank Relationship Manager (Ms. Patel)", text: "Good morning, Mr. Adams. Please provide the beneficiary's corporate legal name, German IBAN, and the recipient bank's SWIFT identifier.", hindi: "शुभ प्रभात, श्री एडम्स। कृपया लाभार्थी का कॉर्पोरेट कानूनी नाम, जर्मन IBAN और प्राप्तकर्ता बैंक का स्विफ्ट पहचानकर्ता प्रदान करें।" },
          { speaker: "Corporate Treasurer (Mr. Adams)", text: "Here is the official commercial invoice along with the verified SWIFT code and tax residency declaration.", hindi: "यह सत्यापित स्विफ्ट कोड और कर निवास घोषणा के साथ आधिकारिक वाणिज्यिक चालान है।" },
          { speaker: "Bank Relationship Manager (Ms. Patel)", text: "Excellent. The funds will be debited from your primary euro checking account, and the international settlement will conclude within twenty-four hours.", hindi: "बहुत अच्छा। धनराशि आपके प्राथमिक यूरो चेकिंग खाते से डेबिट की जाएगी, और अंतरराष्ट्रीय निपटान चौबीस घंटों के भीतर समाप्त हो जाएगा।" },
          { speaker: "Corporate Treasurer (Mr. Adams)", text: "Thank you. Please email me the SWIFT MT103 confirmation receipt as soon as the transmission is validated.", hindi: "धन्यवाद। जैसे ही ट्रांसमिशन सत्यापित हो जाए, कृपया मुझे स्विफ्ट MT103 पुष्टिकरण रसीद ईमेल करें।" }
        ]
      },
      {
        id: "day53_diag_002",
        title: "Guided Dialogue: Disputing an Unauthorized Debit Deduction",
        context: "A business owner contacts client services to contest a fraudulent charge on their corporate card ledger.",
        characters: ["Card Services Representative (Leo)", "Business Owner (Sunita)"],
        lines: [
          { speaker: "Business Owner (Sunita)", text: "Hello. I am calling to formally dispute an unauthorized debit of $2,400 recorded on my corporate card statement yesterday.", hindi: "नमस्ते। मैं कल अपने कॉर्पोरेट कार्ड विवरण पर दर्ज $2,400 की एक अनधिकृत डेबिट कटौती पर औपचारिक रूप से विवाद दर्ज करने के लिए कॉल कर रही हूँ।" },
          { speaker: "Card Services Representative (Leo)", text: "I can certainly assist you with that, Ms. Sunita. May I confirm the merchant descriptor and the transaction reference number?", hindi: "मैं निश्चित रूप से इसमें आपकी सहायता कर सकता हूँ, सुश्री सुनीता। क्या मैं व्यापारी विवरण और लेनदेन संदर्भ संख्या की पुष्टि कर सकता हूँ?" },
          { speaker: "Business Owner (Sunita)", text: "The merchant is listed as 'Apex Cloud Logistics' under transaction reference #89311. Our company has never transacted with this entity.", hindi: "व्यापारी को लेनदेन संदर्भ #89311 के तहत 'एपेक्स क्लाउड लॉजिस्टिक्स' के रूप में सूचीबद्ध किया गया है। हमारी कंपनी ने इस इकाई के साथ कभी कोई लेनदेन नहीं किया है।" },
          { speaker: "Card Services Representative (Leo)", text: "I have immediately blocked the compromised card and initiated a formal chargeback investigation with the merchant's acquiring bank.", hindi: "मैंने तुरंत प्रभावित कार्ड को ब्लॉक कर दिया है और मर्चेंट के अधिग्रहण बैंक के साथ एक औपचारिक चार्जबैक जांच शुरू कर दी है।" },
          { speaker: "Business Owner (Sunita)", text: "I appreciate your prompt intervention. Will a provisional credit be issued while the chargeback is processed?", hindi: "मैं आपके त्वरित हस्तक्षेप की सराहना करती हूँ। जब तक चार्जबैक की प्रक्रिया चल रही है, क्या एक अनंतिम क्रेडिट जारी किया जाएगा?" },
          { speaker: "Card Services Representative (Leo)", text: "Yes, ma'am. A temporary provisional credit of $2,400 will reflect in your account within two business days.", hindi: "हाँ, मैम। $2,400 का एक अस्थायी अनंतिम क्रेडिट दो कार्यदिवसों के भीतर आपके खाते में दिखाई देगा।" }
        ]
      },
      {
        id: "day53_diag_003",
        title: "Free Problem-Solving Dialogue: Negotiating Commercial Mortgage Loan Amortization",
        context: "A real estate developer and a commercial credit underwriter negotiate interest structures and collateral requirements.",
        characters: ["Commercial Underwriter (Vance)", "Developer (Kavita)"],
        lines: [
          { speaker: "Commercial Underwriter (Vance)", text: "Kavita, we have reviewed your commercial loan application for the logistics park. We can approve a $5 million facility at a floating rate of Prime plus 1.25%.", hindi: "कविता, हमने लॉजिस्टिक्स पार्क के लिए आपके वाणिज्यिक ऋण आवेदन की समीक्षा की है। हम प्राइम प्लस 1.25% की फ्लोटिंग दर पर $5 मिलियन की सुविधा को मंजूरी दे सकते हैं।" },
          { speaker: "Developer (Kavita)", text: "Given current macroeconomic volatility, our preference is a fifteen-year fixed-rate amortization schedule to insulate our balance sheet against rate hikes.", hindi: "वर्तमान व्यापक आर्थिक अस्थिरता को देखते हुए, दरों में बढ़ोतरी से हमारी बैलेंस शीट को सुरक्षित रखने के लिए हमारी प्राथमिकता पंद्रह साल की निश्चित दर वाली परिशोधन (Amortization) अनुसूची है।" },
          { speaker: "Commercial Underwriter (Vance)", text: "We can structure a fixed-rate facility at 6.4%, provided you pledge additional commercial real estate as unencumbered collateral.", hindi: "हम 6.4% पर एक निश्चित दर वाली सुविधा तैयार कर सकते हैं, बशर्ते आप अतिरिक्त वाणिज्यिक अचल संपत्ति को भारमुक्त संपार्श्विक (जमानत) के रूप में गिरवी रखें।" },
          { speaker: "Developer (Kavita)", text: "Our industrial warehouse in Leeds is fully unencumbered and appraised at $3.2 million. Will that satisfy your credit committee's loan-to-value ratio?", hindi: "लीड्स में हमारा औद्योगिक गोदाम पूरी तरह से भारमुक्त है और इसका मूल्य $3.2 मिलियन आंका गया है। क्या यह आपकी क्रेडिट समिति के ऋण-से-मूल्य (LTV) अनुपात को संतुष्ट करेगा?" },
          { speaker: "Commercial Underwriter (Vance)", text: "Yes, that appraisal meets our solvency thresholds. I will draft the formal term sheet with the fixed amortization schedule for board sign-off.", hindi: "हाँ, वह मूल्यांकन हमारे शोधन क्षमता मानकों को पूरा करता है। मैं बोर्ड की मंजूरी के लिए निश्चित परिशोधन अनुसूची के साथ औपचारिक टर्म शीट तैयार करूँगा।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are the Chief Financial Officer of an expanding enterprise delivering a verbal briefing to bank executives. Outline your financing request, specify the proposed collateral, and discuss debt amortization preferences.",
      prompts: [
        "State the exact loan facility required and the intended operational purpose.",
        "Highlight your firm's strong liquidity and solvency metrics based on the audited general ledger.",
        "Propose high-value unencumbered real estate assets as collateral.",
        "Specify your preference for a structured twenty-year amortization schedule with a fixed annual percentage rate."
      ],
      targetExpressions: [
        "We are seeking a commercial credit facility of...",
        "Our balance sheet demonstrates robust liquidity and long-term solvency.",
        "We are prepared to pledge unencumbered commercial real estate as collateral.",
        "An itemized amortization schedule will ensure predictable debt servicing.",
        "All transactions will be reconciled through our audited ledger."
      ]
    },
    roleplay: {
      scenario: "Roleplay a negotiation between a commercial customer requesting an increase in their overdraft facility and a bank branch manager assessing cash flow liquidity.",
      roleA: "Commercial Customer: Explaining seasonal revenue fluctuations, presenting accounts receivable ledgers, and requesting a $100,000 overdraft limit.",
      roleB: "Branch Manager: Reviewing debt service coverage ratios, asking for collateral guarantees, and approving an adjusted $75,000 limit with quarterly reviews.",
      sampleDialogue: "Customer: 'Due to quarterly export cycles, we require a temporary overdraft facility of $100,000 to maintain operational liquidity.' | Manager: 'Based on your audited receivables, we can approve an initial $75,000 facility, subject to an automatic direct debit for interest servicing.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day53_bm_001",
        title: "Drafting a Formal Banking Transaction Dispute Letter",
        prompt: "Draft a formal, structured 5–6 sentence dispute letter to a bank manager detailing an unauthorized debit deduction, quoting reference numbers, requesting a chargeback, and asserting consumer rights.",
        sampleAnswerEn: "To: The Dispute Resolution Directorate, Sovereign Commercial Bank\nSubject: Formal Notice of Unauthorized Debit Dispute — Account #4829-0192\n\nDear Sir/Madam,\n\nI am writing to formally dispute an unauthorized debit of $3,750 recorded against my commercial checking account on October 14th under transaction reference #TXN-99412. The descriptor indicates an electronic transfer to an unknown overseas merchant entity with whom our firm has no commercial affiliation. We immediately alerted your fraud monitoring department and revoked all existing electronic mandates associated with the compromised corporate card. In accordance with statutory banking regulations, we formally request an immediate chargeback initiation and the issuance of a provisional credit to restore our working capital liquidity. Please confirm receipt of this dispute dossier and provide a formal investigation reference number at your earliest convenience.\n\nSincerely,\nKaran Malhotra, Chief Financial Officer",
        sampleAnswerHi: "प्रति: विवाद समाधान निदेशालय, सॉवरेन कमर्शियल बैंक\nविषय: अनधिकृत डेबिट विवाद की औपचारिक सूचना — खाता #4829-0192\n\nप्रिय महोदय/महोदया,\n\nमैं 14 अक्टूबर को लेनदेन संदर्भ #TXN-99412 के तहत मेरे वाणिज्यिक चेकिंग खाते से दर्ज $3,750 की एक अनधिकृत डेबिट कटौती पर औपचारिक रूप से विवाद करने के लिए लिख रहा हूँ। विवरण एक अज्ञात विदेशी व्यापारी इकाई को इलेक्ट्रॉनिक हस्तांतरण का संकेत देता है जिसके साथ हमारी फर्म का कोई वाणिज्यिक संबंध नहीं है। हमने तुरंत आपके धोखाधड़ी निगरानी विभाग को सचेत किया और प्रभावित कॉर्पोरेट कार्ड से जुड़े सभी मौजूदा इलेक्ट्रॉनिक आदेशों को रद्द कर दिया। वैधानिक बैंकिंग नियमों के अनुसार, हम औपचारिक रूप से तत्काल चार्जबैक शुरू करने और हमारी कार्यशील पूंजी तरलता को बहाल करने के लिए एक अनंतिम क्रेडिट जारी करने का अनुरोध करते हैं। कृपया इस विवाद फाइल की प्राप्ति की पुष्टि करें और अपनी सुविधानुसार औपचारिक जांच संदर्भ संख्या प्रदान करें।\n\nसादर,\nकरण मल्होत्रा, मुख्य वित्तीय अधिकारी",
        evaluationCriteria: "Exemplary formal banking register, precise legal/financial lexicon ('unauthorized debit', 'chargeback initiation', 'provisional credit', 'working capital liquidity'), total elimination of Indian English clichés."
      },
      {
        id: "day53_bm_002",
        title: "Commercial Loan Proposal and Amortization Term Sheet",
        prompt: "Write a 5–6 sentence Executive Term Sheet Summary from a corporate borrower outlining a $2 million commercial credit facility request, specifying collateral assets, amortization timelines, and projected debt servicing.",
        sampleAnswerEn: "COMMERCIAL CREDIT FACILITY TERM SHEET SUMMARY\nBorrower: Apex Logistics International | Requested Facility: $2,000,000 Term Loan\n\n1. PURPOSE & AMORTIZATION: The proceeds will finance automated material handling infrastructure, structured over a ten-year fixed-rate amortization schedule at 5.75% per annum.\n2. COLLATERAL HYPOTHECATION: The facility will be secured through a first-ranking legal mortgage over our unencumbered distribution hub in Bristol, independently appraised at $3.8 million.\n3. LIQUIDITY & DEBT SERVICING: Our audited general ledger confirms an interest coverage ratio of 4.2x, demonstrating exceptional solvency and cash flow predictability.\n4. REPAYMENT MECHANISM: Principal and interest installments will be serviced monthly via automated direct debit mandates.\n5. COVENANTS: The borrower agrees to maintain minimum current asset liquidity of $500,000 throughout the loan tenure.",
        sampleAnswerHi: "वाणिज्यिक ऋण सुविधा टर्म शीट सारांश\nउधारकर्ता: एपेक्स लॉजिस्टिक्स इंटरनेशनल | अनुरोधित सुविधा: $2,000,000 टर्म लोन\n\n1. उद्देश्य एवं परिशोधन: प्राप्त राशि 5.75% प्रति वर्ष की दर से दस साल की निश्चित दर परिशोधन अनुसूची पर संरचित स्वचालित सामग्री हैंडलिंग अवसंरचना को वित्तपोषित करेगी।\n2. संपार्श्विक बंधक: यह सुविधा ब्रिस्टल में हमारे भारमुक्त वितरण केंद्र पर प्रथम-रैंकिंग कानूनी बंधक के माध्यम से सुरक्षित की जाएगी, जिसका स्वतंत्र रूप से $3.8 मिलियन का मूल्यांकन किया गया है।\n3. तरलता एवं ऋण भुगतान: हमारा ऑडिट किया गया सामान्य बहीखाता 4.2x के ब्याज कवरेज अनुपात की पुष्टि करता है, जो असाधारण शोधन क्षमता और नकदी प्रवाह की भविष्यवाणी प्रदर्शित करता है।\n4. पुनर्भुगतान तंत्र: मूलधन और ब्याज की किश्तों को स्वचालित डायरेक्ट डेबिट मैंडेट के माध्यम से मासिक रूप से चुकाया जाएगा।\n5. अनुबंध: उधारकर्ता ऋण अवधि के दौरान $500,000 की न्यूनतम चालू संपत्ति तरलता बनाए रखने के लिए सहमत है।",
        evaluationCriteria: "Flawless financial structure, advanced institutional terminology ('unencumbered', 'amortization schedule', 'debt servicing', 'direct debit mandates', 'covenants'), absolute professional precision."
      },
      {
        id: "day53_bm_003",
        title: "Financial Reconciliation and Balance Sheet Audit Synthesis",
        prompt: "Construct a 5–6 sentence analytical audit report reconciling discrepancies between a corporate bank statement and general sales ledger, documenting Forex adjustments and interest disbursals.",
        sampleAnswerEn: "During the quarterly fiscal audit, our accounting team performed a comprehensive reconciliation of the general ledger against corporate bank statements. A temporary $45,000 variance was identified, stemming from timing differences in international SWIFT wire transfers and foreign exchange rate fluctuations. Further analysis confirmed that all scheduled loan interest disbursals and dividend payments had been accurately debited in accordance with statutory accounting standards. Following the manual adjustment of pending escrow deposits, both registers achieved 100% balance sheet alignment. The audit committee confirmed that the corporation maintains exceptional solvency, robust asset liquidity, and uncompromised regulatory compliance.",
        sampleAnswerHi: "त्रैमासिक वित्तीय ऑडिट के दौरान, हमारी लेखांकन टीम ने कॉर्पोरेट बैंक विवरणों के मुकाबले सामान्य बहीखाते का एक व्यापक मिलान (Reconciliation) किया। अंतरराष्ट्रीय स्विफ्ट वायर ट्रांसफर में समय के अंतर और विदेशी मुद्रा विनिमय दर के उतार-चढ़ाव के कारण $45,000 के एक अस्थायी अंतर की पहचान की गई थी। आगे के विश्लेषण ने पुष्टि की कि सभी निर्धारित ऋण ब्याज वितरण और लाभांश भुगतान वैधानिक लेखांकन मानकों के अनुसार सटीक रूप से डेबिट किए गए थे। लंबित एस्क्रो जमा के मैन्युअल समायोजन के बाद, दोनों रजिस्टरों ने 100% बैलेंस शीट तालमेल हासिल किया। ऑडिट समिति ने पुष्टि की कि निगम असाधारण शोधन क्षमता, मजबूत परिसंपत्ति तरलता और असंदिग्ध विनियामक अनुपालन बनाए रखता है।",
        evaluationCriteria: "High-level accounting synthesis, mastery of fiscal terminology ('reconciliation', 'SWIFT wire transfers', 'escrow deposits', 'solvency', 'variance'), zero grammatical defects."
      }
    ]
  },
  review: {
    quickRecall: [
      {
        q: "What is the difference between an amount being 'debited from' versus 'credited to' an account?",
        a: "'Debited from' means money is subtracted/deducted from the account. 'Credited to' means money is added/deposited into the account."
      },
      {
        q: "What is an 'Amortization Schedule'?",
        a: "A complete table of periodic loan payments showing the amount of principal and the amount of interest comprising each payment until the loan is paid off."
      },
      {
        q: "What does 'Collateral' mean in commercial lending?",
        a: "An asset (such as real estate or securities) pledged by a borrower to a lender as security for the repayment of a loan."
      },
      {
        q: "Why is 'cheque got bounced' considered poor English, and what should be used instead?",
        a: "'Cheque bounced' is colloquial/slang. Formal standard English is: 'The cheque was dishonored' or 'returned unpaid due to insufficient funds'."
      },
      {
        q: "What is an 'Escrow Account'?",
        a: "A neutral third-party financial account holding funds safely until contractual obligations between buyers and sellers are fulfilled."
      }
    ],
    spacedTips: [
      "Never say 'money got cut from my bank'; always say 'an amount was debited from my account'.",
      "When discussing loans, use 'fixed rate' for predictable interest and 'variable/floating rate' for market-adjusted interest.",
      "SWIFT wire transfers and direct debit mandates are standard international instruments for secure commercial financial operations."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day53.js'), `export const day53 = ${JSON.stringify(day53, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day53.js with 55 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks");
