import { LessonConfig } from './unit4_builder_helper';

// =========================================================================
// LESSON 49: Banking, Money, Payments & Financial Transactions
// =========================================================================
export const CONFIG_49: LessonConfig = {
  num: 49,
  title: 'Banking, Money, Payments & Financial Transactions',
  icon: '🏦',
  estMin: 25,
  objTitle: 'Handle bank visits, ATM transactions, and payment methods',
  objDesc: 'Learn vocabulary for banking, checking balances, withdrawals, and digital payments using modal verbs and numbers.',
  objHi: 'बैंक लेनदेन, एटीएम का उपयोग और भुगतान विधियों के बारे में बात करना सीखें।',
  objEs: 'Aprende a realizar gestiones bancarias, usar cajeros automáticos y métodos de pago.',
  canDo: [
    'I can ask about account balances and transaction fees at a bank.',
    'I can use an ATM to withdraw or deposit cash.',
    'I can ask about payment methods (cash, card, contactless).'
  ],
  canDoHi: [
    'मैं बैंक में खाते की शेष राशि और लेनदेन शुल्क के बारे में पूछ सकता हूँ।',
    'मैं नकदी निकालने या जमा करने के लिए एटीएम का उपयोग कर सकता हूँ।',
    'मैं भुगतान विधियों (नकद, कार्ड, संपर्क रहित) के बारे में पूछ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo preguntar sobre saldos de cuentas y tarifas de transacción en un banco.',
    'Puedo usar un cajero automático para retirar o depositar efectivo.',
    'Puedo preguntar sobre métodos de pago (efectivo, tarjeta, sin contacto).'
  ],
  vocab: [
    { w: 'bank', p: '/bæŋk/', m: 'a financial establishment where money is deposited and borrowed', hi: 'बैंक', es: 'banco', fr: 'banque', de: 'Bank', pt: 'banco', zh: '银行', ar: 'بنك', ja: '銀行', ru: 'банк', ex: 'The bank opens at 9:00 AM.', exHi: 'बैंक सुबह 9:00 बजे खुलता है।', exEs: 'El banco abre a las 9:00 AM.', ic: '🏦' },
    { w: 'account', p: '/əˈkaʊnt/', m: 'an arrangement with a bank to keep funds for a customer', hi: 'खाता (अकाउंट)', es: 'cuenta', fr: 'compte', de: 'Konto', pt: 'conta', zh: '账户', ar: 'حساب', ja: '口座', ru: 'счет', ex: 'I want to open a new savings account.', exHi: 'मैं एक नया बचत खाता खोलना चाहता हूँ।', exEs: 'Quiero abrir una nueva cuenta de ahorros.', ic: '💳' },
    { w: 'balance', p: '/ˈbæl.əns/', m: 'the amount of money remaining in a bank account', hi: 'शेष राशि (बैलेंस)', es: 'saldo', fr: 'solde', de: 'Kontostand', pt: 'saldo', zh: '余额', ar: 'رصيد', ja: '残高', ru: 'баланс', ex: 'What is my current account balance?', exHi: 'मेरे खाते का वर्तमान बैलेंस क्या है?', exEs: '¿Cuál es el saldo actual de mi cuenta?', ic: '📊' },
    { w: 'cash', p: '/kæʃ/', m: 'money in coins or notes', hi: 'नकदी (कैश)', es: 'efectivo', fr: 'espèces', de: 'Bargeld', pt: 'dinheiro', zh: '现金', ar: 'نقود', ja: '現金', ru: 'наличные', ex: 'Do you have enough cash for the bus?', exHi: 'क्या आपके पास बस के लिए पर्याप्त नकदी है?', exEs: '¿Tienes suficiente efectivo para el autobús?', ic: '💵' },
    { w: 'card', p: '/kɑːd/', m: 'a small plastic card for making financial payments', hi: 'कार्ड', es: 'tarjeta', fr: 'carte', de: 'Karte', pt: 'cartão', zh: '卡片', ar: 'بطاقة', ja: 'カード', ru: 'карта', ex: 'You can pay by debit card or credit card.', exHi: 'आप डेबिट कार्ड या क्रेडिट कार्ड से भुगतान कर सकते हैं।', exEs: 'Puede pagar con tarjeta de débito o crédito.', ic: '💳' },
    { w: 'withdraw', p: '/wɪðˈdrɔː/', m: 'to take money out of a bank account or ATM', hi: 'पैसे निकालना', es: 'retirar', fr: 'retirer', de: 'abheben', pt: 'sacar', zh: '取款', ar: 'سحب', ja: '引き出す', ru: 'снимать деньги', ex: 'I need to withdraw fifty dollars from the ATM.', exHi: 'मुझे एटीएम से पचास डॉलर निकालने की आवश्यकता है।', exEs: 'Necesito retirar cincuenta dólares del cajero.', ic: '🏧' },
    { w: 'deposit', p: '/dɪˈpɒz.ɪt/', m: 'to put money into a bank account', hi: 'जमा करना', es: 'depositar', fr: 'déposer', de: 'einzahlen', pt: 'depositar', zh: '存款', ar: 'إيداع', ja: '預け入れる', ru: 'внести деньги', ex: 'She wants to deposit her paycheck.', exHi: 'वह अपना वेतन चेक जमा करना चाहती है।', exEs: 'Ella quiere depositar su cheque de sueldo.', ic: '📥' },
    { w: 'transfer', p: '/trænsˈfɜːr/', m: 'to move money from one account to another', hi: 'स्थानांतरित करना (ट्रांसफर)', es: 'transferir', fr: 'transférer', de: 'überweisen', pt: 'transferir', zh: '转账', ar: 'تحويل', ja: '振り込む', ru: 'перевести деньги', ex: 'Can I transfer money online?', exHi: 'क्या मैं ऑनलाइन पैसे ट्रांसफर कर सकता हूँ?', exEs: '¿Puedo transferir dinero en línea?', ic: '📲' },
    { w: 'fee', p: '/fiː/', m: 'an amount of money paid for a service', hi: 'शुल्क (फ़ीस)', es: 'comisión / tarifa', fr: 'frais', de: 'Gebühr', pt: 'taxa', zh: '手续费', ar: 'رسوم', ja: '手数料', ru: 'комиссия', ex: 'Is there a transaction fee for this transfer?', exHi: 'क्या इस ट्रांसफर के लिए कोई शुल्क है?', exEs: '¿Hay una comisión por esta transferencia?', ic: '🏷️' },
    { w: 'pin', p: '/pɪn/', m: 'a personal identification number for a security card', hi: 'पिन नंबर', es: 'número PIN', fr: 'code PIN', de: 'PIN-Code', pt: 'código PIN', zh: '密码', ar: 'رمز سري', ja: '暗証番号', ru: 'пин-код', ex: 'Please enter your four-digit PIN.', exHi: 'कृपया अपना चार अंकों का पिन दर्ज करें।', exEs: 'Por favor ingrese su PIN de cuatro dígitos.', ic: '🔢' },
    { w: 'teller', p: '/ˈtel.ər/', m: 'a person who works behind the counter in a bank', hi: 'बैंक टेलर / खजांची', es: 'cajero bancario', fr: 'guichetier', de: 'Bankangestellter', pt: 'caixa de banco', zh: '银行柜员', ar: 'صراف البنك', ja: '窓口係', ru: 'кассир в банке', ex: 'The bank teller helped me with my form.', exHi: 'बैंक टेलर ने फॉर्म भरने में मेरी मदद की।', exEs: 'El cajero del banco me ayudó con mi formulario.', ic: '💁‍♂️' },
    { w: 'currency', p: '/ˈkʌr.ən.si/', m: 'the system of money in general use in a country', hi: 'मुद्रा (करेंसी)', es: 'moneda', fr: 'devise', de: 'Währung', pt: 'moeda', zh: '货币', ar: 'عملة', ja: '通貨', ru: 'валюта', ex: 'What is the exchange rate for this currency?', exHi: 'इस मुद्रा की विनिमय दर क्या है?', exEs: '¿Cuál es el tipo de cambio para esta moneda?', ic: '💱' },
    { w: 'rate', p: '/reɪt/', m: 'the proportion between two amounts (e.g. exchange rate)', hi: 'दर (रेट)', es: 'tasa / tipo', fr: 'taux', de: 'Kurs', pt: 'taxa', zh: '汇率', ar: 'سعر الصرف', ja: 'レート', ru: 'курс', ex: 'The exchange rate is very favorable today.', exHi: 'आज विनिमय दर बहुत अनुकूल है।', exEs: 'El tipo de cambio es muy favorable hoy.', ic: '📈' },
    { w: 'receipt', p: '/rɪˈsiːt/', m: 'a slip of paper confirming a payment or transaction', hi: 'रसीद', es: 'recibo', fr: 'reçu', de: 'Beleg', pt: 'recibo', zh: '凭据', ar: 'إيصال', ja: '利用明細', ru: 'квитанция', ex: 'Would you like a receipt from the ATM?', exHi: 'क्या आप एटीएम से रसीद चाहेंगे?', exEs: '¿Desea un recibo del cajero?', ic: '🧾' },
    { w: 'savings', p: '/ˈseɪ.vɪŋz/', m: 'money that one has saved, especially in a bank', hi: 'बचत', es: 'ahorros', fr: 'économies', de: 'Ersparnisse', pt: 'poupança', zh: '储蓄', ar: 'مدخرات', ja: '貯金', ru: 'сбережения', ex: 'I put twenty percent into my savings account.', exHi: 'मैं अपने बचत खाते में बीस प्रतिशत डालता हूँ।', exEs: 'Pongo el veinte por ciento en mi cuenta de ahorros.', ic: '💰' },
    { w: 'loan', p: '/ləʊn/', m: 'money borrowed that must be paid back with interest', hi: 'ऋण / कर्ज़', es: 'préstamo', fr: 'prêt', de: 'Darlehen', pt: 'empréstimo', zh: '贷款', ar: 'قرض', ja: '融資', ru: 'кредит / займ', ex: 'He applied for a small personal loan.', exHi: 'उसने एक छोटे व्यक्तिगत ऋण के लिए आवेदन किया।', exEs: 'Él solicitó un pequeño préstamo personal.', ic: '📑' },
    { w: 'interest', p: '/ˈɪn.trəst/', m: 'money paid regularly at a particular rate for money lent', hi: 'ब्याज', es: 'interés', fr: 'intérêt', de: 'Zinsen', pt: 'juros', zh: '利息', ar: 'فائدة', ja: '利息', ru: 'проценты', ex: 'What is the annual interest rate?', exHi: 'वार्षिक ब्याज दर क्या है?', exEs: '¿Cuál es la tasa de interés anual?', ic: '📊' },
    { w: 'signature', p: '/ˈsɪɡ.nə.tʃər/', m: 'your name written in your own personal style', hi: 'हस्ताक्षर', es: 'firma', fr: 'signature', de: 'Unterschrift', pt: 'assinatura', zh: '签名', ar: 'توقيع', ja: '署名', ru: 'подпись', ex: 'Please provide your signature at the bottom.', exHi: 'कृपया नीचे अपना हस्ताक्षर करें।', exEs: 'Por favor proporcione su firma en la parte inferior.', ic: '✍️' },
    { w: 'passport', p: '/ˈpɑːs.pɔːt/', m: 'an official identity document for international travel', hi: 'पासपोर्ट', es: 'pasaporte', fr: 'passeport', de: 'Reisepass', pt: 'passaporte', zh: '护照', ar: 'جواز سفر', ja: 'パスポート', ru: 'паспорт', ex: 'I need to show my passport as photo ID.', exHi: 'मुझे फोटो आईडी के रूप में अपना पासपोर्ट दिखाना होगा।', exEs: 'Necesito mostrar mi pasaporte como identificación con foto.', ic: '🛂' },
    { w: 'identity', p: '/aɪˈden.tə.ti/', m: 'who a person is, confirmed by official documents', hi: 'पहचान (आईडी)', es: 'identidad', fr: 'identité', de: 'Identität', pt: 'identidade', zh: '身份', ar: 'هوية', ja: '身元', ru: 'удостоверение личности', ex: 'Please present two forms of identity.', exHi: 'कृपया पहचान के दो प्रमाण प्रस्तुत करें।', exEs: 'Por favor presente dos formas de identidad.', ic: '🪪' }
  ],
  chunks: [
    { phrase: 'withdraw cash', meaning: 'to take physical money out of an ATM or bank', hi: 'नकदी निकालना', es: 'retirar efectivo', fr: 'retirer de l\'argent', de: 'Bargeld abheben', pt: 'sacar dinheiro', zh: '取现金', ar: 'سحب نقود', ja: '現金を引き出す', ru: 'снять наличные', note: 'Standard ATM transaction phrase.', ic: '🏧' },
    { phrase: 'check my balance', meaning: 'to view available funds in an account', hi: 'बैलेंस जाँचना', es: 'consultar mi saldo', fr: 'consulter mon solde', de: 'Kontostand prüfen', pt: 'consultar saldo', zh: '查询余额', ar: 'التحقق من الرصيد', ja: '残高を確認する', ru: 'проверить баланс', note: 'Common banking screen selection.', ic: '📊' },
    { phrase: 'pay by card', meaning: 'to use a plastic card for payment', hi: 'कार्ड से भुगतान करना', es: 'pagar con tarjeta', fr: 'payer par carte', de: 'mit Karte zahlen', pt: 'pagar com cartão', zh: '刷卡支付', ar: 'الدفع بالبطاقة', ja: 'カードで支払う', ru: 'оплатить картой', note: 'Standard POS payment question/answer.', ic: '💳' },
    { phrase: 'open an account', meaning: 'to register a new bank account', hi: 'खाता खोलना', es: 'abrir una cuenta', fr: 'ouvrir un compte', de: 'ein Konto eröffnen', pt: 'abrir uma conta', zh: '开户', ar: 'فتح حساب', ja: '口座を開設する', ru: 'открыть счет', note: 'Branch customer service inquiry.', ic: '🏦' },
    { phrase: 'enter your PIN', meaning: 'to key in your 4-digit security code', hi: 'अपना पिन दर्ज करें', es: 'ingrese su PIN', fr: 'entrez votre code PIN', de: 'Geben Sie Ihre PIN ein', pt: 'digite seu PIN', zh: '输入密码', ar: 'أدخل الرمز السري', ja: '暗証番号を入力してください', ru: 'введите ваш пин-код', note: 'ATM machine screen instruction.', ic: '🔢' },
    { phrase: 'exchange currency', meaning: 'to convert money into another country\'s currency', hi: 'मुद्रा बदलना', es: 'cambiar divisa', fr: 'changer des devises', de: 'Geld wechseln', pt: 'trocar moeda', zh: '兑换外币', ar: 'صرف العملات', ja: '両替する', ru: 'обменять валюту', note: 'Travel and banking transaction.', ic: '💱' },
    { phrase: 'transaction fee', meaning: 'the cost charged for a bank transfer or ATM withdrawal', hi: 'लेनदेन शुल्क', es: 'comisión por transacción', fr: 'frais de transaction', de: 'Transaktionsgebühr', pt: 'taxa de transação', zh: '交易手续费', ar: 'رسوم المعاملة', ja: '取引手数料', ru: 'комиссия за операцию', note: 'Important fee inquiry concept.', ic: '🏷️' },
    { phrase: 'contactless payment', meaning: 'paying by tapping a card or phone near a reader', hi: 'संपर्क रहित भुगतान', es: 'pago sin contacto', fr: 'paiement sans contact', de: 'kontaktlose Zahlung', pt: 'pagamento por aproximação', zh: '非接触式支付', ar: 'الدفع بدون لمس', ja: '非接触決済', ru: 'бесконтактная оплата', note: 'Modern payment method term.', ic: '📲' }
  ],
  grammar: {
    title: 'Prepositions of Payment & How Much Inquiries',
    concept: 'Using "by card / in cash" and "How much is the fee / Can I...?" for monetary transactions.',
    patterns: [
      {
        title: 'Pay + by card / in cash',
        structure: 'pay by card (credit/debit) OR pay in cash',
        rule: 'Use "by" for payment instruments (by card, by transfer) and "in" for physical notes (in cash).',
        examples: [
          { en: 'Can I pay by credit card?', hi: 'क्या मैं क्रेडिट कार्ड से भुगतान कर सकता हूँ?', es: '¿Puedo pagar con tarjeta de crédito?' },
          { en: 'I prefer to pay in cash.', hi: 'मैं नकद में भुगतान करना पसंद करता हूँ।', es: 'Prefiero pagar en efectivo.' }
        ]
      },
      {
        title: 'How much + Uncountable Noun / Is Questions',
        structure: 'How much is the transaction fee? / How much money would you like to withdraw?',
        rule: 'Use "How much" for uncountable nouns like money, interest, fee, and cash.',
        examples: [
          { en: 'How much is the fee for an international transfer?', hi: 'अंतर्राष्ट्रीय ट्रांसफर के लिए कितना शुल्क है?', es: '¿Cuánto es la comisión por una transferencia internacional?' },
          { en: 'How much cash do you want to deposit?', hi: 'आप कितनी नकदी जमा करना चाहते हैं?', es: '¿Cuánto efectivo desea depositar?' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'I want to pay with cash.', cor: 'I want to pay in cash.', exp: 'Say "pay in cash" or "pay by cash/card" (standard: in cash, by card).', hi: 'नकद के लिए "pay in cash" का प्रयोग करें।', es: 'Se dice "pay in cash" o "pay by card".' },
    { inc: 'How many money do you have in account?', cor: 'How much money do you have in your account?', exp: '"Money" is uncountable, so use "How much".', hi: '"Money" के लिए "How much" का उपयोग करें।', es: '"Money" es incontable, usa "How much".' },
    { inc: 'I like to withdraw of 100 dollars.', cor: 'I would like to withdraw 100 dollars.', exp: 'Do not place "of" after the verb "withdraw".', hi: '"Withdraw" के बाद "of" न लगाएं।', es: 'No uses "of" después de "withdraw".' },
    { inc: 'Please entering your PIN.', cor: 'Please enter your PIN.', exp: 'Use the base imperative verb after "please".', hi: 'आदेशात्मक वाक्य में "please enter" का उपयोग करें।', es: 'Usa el verbo base después de "please".' },
    { inc: 'The bank are closed on Sunday.', cor: 'The bank is closed on Sunday.', exp: '"The bank" is singular, so use "is".', hi: '"The bank" एकवचन है, इसलिए "is" का प्रयोग करें।', es: '"The bank" es singular, usa "is".' }
  ],
  dialogues: [
    {
      title: 'At the Bank Counter',
      context: 'Sarah visits a branch to open a savings account and inquire about fees.',
      charA: { name: 'Sarah', av: '👩‍💼', role: 'Customer' },
      charB: { name: 'Teller', av: '👨‍💼', role: 'Bank Teller' },
      turns: [
        { spk: 'Teller', text: 'Good morning! How may I assist you today?', hi: 'सुप्रभात! आज मैं आपकी क्या मदद कर सकता हूँ?', es: '¡Buenos días! ¿Cómo puedo asistirle hoy?' },
        { spk: 'Sarah', text: 'Hello! I would like to open a savings account, please.', hi: 'नमस्ते! मैं एक बचत खाता खोलना चाहती हूँ, कृपया।', es: '¡Hola! Me gustaría abrir una cuenta de ahorros, por favor.' },
        { spk: 'Teller', text: 'Certainly. Do you have your passport and proof of address with you?', hi: 'ज़रूर। क्या आपके पास आपका पासपोर्ट और पते का प्रमाण है?', es: 'Ciertamente. ¿Tiene su pasaporte y comprobante de domicilio?' },
        { spk: 'Sarah', text: 'Yes, here are my documents and my initial deposit.', hi: 'हाँ, ये मेरे दस्तावेज़ और मेरी शुरुआती जमा राशि हैं।', es: 'Sí, aquí están mis documentos y mi depósito inicial.' }
      ]
    },
    {
      title: 'Using an ATM Machine',
      context: 'Alex helps James navigate an ATM screen to withdraw local currency.',
      charA: { name: 'James', av: '👨‍🎓', role: 'Traveler' },
      charB: { name: 'Alex', av: '👨‍💻', role: 'Local Friend' },
      turns: [
        { spk: 'James', text: 'Alex, how do I withdraw local cash from this machine?', hi: 'एलेक्स, मैं इस मशीन से स्थानीय नकदी कैसे निकालूँ?', es: 'Alex, ¿cómo retiro efectivo local de esta máquina?' },
        { spk: 'Alex', text: 'Insert your card here, select English, and enter your PIN.', hi: 'अपना कार्ड यहाँ डालें, अंग्रेजी चुनें और अपना पिन दर्ज करें।', es: 'Inserta tu tarjeta aquí, selecciona inglés e introduce tu PIN.' },
        { spk: 'James', text: 'Okay. It asks if I want to check my balance or withdraw.', hi: 'ठीक है। यह पूछ रहा है कि क्या मैं बैलेंस जाँचना चाहता हूँ या निकालना।', es: 'Bien. Pregunta si quiero consultar mi saldo o retirar.' },
        { spk: 'Alex', text: 'Select "Withdraw", choose one hundred, and don\'t forget your receipt!', hi: '"Withdraw" चुनें, सौ चुनें, और अपनी रसीद लेना न भूलें!', es: 'Selecciona "Retirar", elige cien, ¡y no olvides tu recibo!' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l49_p1', lessonId: 'lesson_a1_4_49', stage: 8, type: 'multiple_choice', prompt: 'Choose the correct preposition: "Can I pay ___ credit card?"', options: [{ id: 'o1', text: 'by', isCorrect: true }, { id: 'o2', text: 'on', isCorrect: false }, { id: 'o3', text: 'with to', isCorrect: false }] },
    { id: 'ex_u04_l49_p2', lessonId: 'lesson_a1_4_49', stage: 8, type: 'fill_blank', prompt: 'Complete the question about money amount:', sentenceTemplate: 'How ___ is the fee for an international transfer?', sourceSentence: 'How ___ is the fee for an international transfer?', options: [{ id: 'o1', text: 'much', isCorrect: true }, { id: 'o2', text: 'many', isCorrect: false }, { id: 'o3', text: 'any', isCorrect: false }] },
    { id: 'ex_u04_l49_p3', lessonId: 'lesson_a1_4_49', stage: 8, type: 'word_ordering', prompt: 'Order the words to ask to withdraw cash:', wordBank: ['I', 'would', 'like', 'to', 'withdraw', 'fifty', 'dollars.'], targetSentence: 'I would like to withdraw fifty dollars.' },
    { id: 'ex_u04_l49_p4', lessonId: 'lesson_a1_4_49', stage: 8, type: 'match_pairs', prompt: 'Match banking terms with their meanings:', pairs: [{ left: 'withdraw', right: 'take money out' }, { left: 'deposit', right: 'put money in' }, { left: 'balance', right: 'remaining funds' }, { left: 'fee', right: 'service cost' }] },
    { id: 'ex_u04_l49_p5', lessonId: 'lesson_a1_4_49', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'Please entering your four-digit PIN code.', options: [{ id: 'o1', text: 'Please enter your four-digit PIN code.', isCorrect: true }, { id: 'o2', text: 'Please enters your four-digit PIN code.', isCorrect: false }, { id: 'o3', text: 'Please entered your four-digit PIN code.', isCorrect: false }] },
    { id: 'ex_u04_l49_p6', lessonId: 'lesson_a1_4_49', stage: 9, type: 'listening', prompt: 'Listen and select what the speaker says:', audioText: 'What is the current exchange rate for US dollars?', options: [{ id: 'o1', text: 'What is the current exchange rate for US dollars?', isCorrect: true }, { id: 'o2', text: 'What is the current change rate for US doctors?', isCorrect: false }] },
    { id: 'ex_u04_l49_p7', lessonId: 'lesson_a1_4_49', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'I would like to check my account balance.', targetSentence: 'I would like to check my account balance.' },
    { id: 'ex_u04_l49_p8', lessonId: 'lesson_a1_4_49', stage: 10, type: 'multiple_choice', prompt: 'Choose the correct question to ask if contactless payment is accepted:', options: [{ id: 'o1', text: 'Do you accept contactless payments?', isCorrect: true }, { id: 'o2', text: 'Are you accept contactless payments?', isCorrect: false }, { id: 'o3', text: 'Do you accepting contactless payments?', isCorrect: false }] },
    { id: 'ex_u04_l49_p9', lessonId: 'lesson_a1_4_49', stage: 11, type: 'dialogue_completion', prompt: 'Complete the ATM interaction: "Would you like a printed receipt?"', options: [{ id: 'o1', text: 'Yes, please print my receipt.', isCorrect: true }, { id: 'o2', text: 'I am drinking tea.', isCorrect: false }, { id: 'o3', text: 'The weather is warm.', isCorrect: false }] },
    { id: 'ex_u04_l49_p10', lessonId: 'lesson_a1_4_49', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'Can I transfer money online to another account?', audioText: 'Can I transfer money online to another account?' },
    { id: 'ex_u04_l49_p11', lessonId: 'lesson_a1_4_49', stage: 13, type: 'translation', prompt: 'Translate: "मैं नकद में भुगतान करना पसंद करता हूँ।" / "Prefiero pagar en efectivo."', targetSentence: 'I prefer to pay in cash.' },
    { id: 'ex_u04_l49_p12', lessonId: 'lesson_a1_4_49', stage: 14, type: 'multiple_choice', prompt: 'What word refers to the person who works at the bank counter?', options: [{ id: 'o1', text: 'teller', isCorrect: true }, { id: 'o2', text: 'cashier', isCorrect: false }, { id: 'o3', text: 'waiter', isCorrect: false }] },
    { id: 'ex_u04_l49_p13', lessonId: 'lesson_a1_4_49', stage: 14, type: 'fill_blank', prompt: 'Complete with the correct word: "Please provide your ___ at the bottom of the form."', sentenceTemplate: 'Please provide your ___ at the bottom of the form.', sourceSentence: 'Please provide your ___ at the bottom of the form.', options: [{ id: 'o1', text: 'signature', isCorrect: true }, { id: 'o2', text: 'currency', isCorrect: false }, { id: 'o3', text: 'interest', isCorrect: false }] },
    { id: 'ex_u04_l49_p14', lessonId: 'lesson_a1_4_49', stage: 14, type: 'word_ordering', prompt: 'Order the words to make an inquiry:', wordBank: ['How', 'much', 'is', 'the', 'annual', 'interest', 'rate?'], targetSentence: 'How much is the annual interest rate?' },
    { id: 'ex_u04_l49_p15', lessonId: 'lesson_a1_4_49', stage: 14, type: 'speaking', prompt: 'Speak this complete sentence clearly into your microphone:', targetSentence: 'I need to exchange currency before traveling abroad.', audioText: 'I need to exchange currency before traveling abroad.' }
  ],
  review: [
    { id: 'ex_u04_l49_r1', lessonId: 'lesson_a1_4_49', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct request modal:', options: [{ id: 'o1', text: 'Could you please help me with this form?', isCorrect: true }, { id: 'o2', text: 'Do you help please me with this form?', isCorrect: false }, { id: 'o3', text: 'Are you helping please me?', isCorrect: false }] },
    { id: 'ex_u04_l49_r2', lessonId: 'lesson_a1_4_49', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "This jacket is ___ big for me."', sentenceTemplate: 'This jacket is ___ big for me.', sourceSentence: 'This jacket is ___ big for me.', options: [{ id: 'o1', text: 'too', isCorrect: true }, { id: 'o2', text: 'two', isCorrect: false }, { id: 'o3', text: 'to', isCorrect: false }] },
    { id: 'ex_u04_l49_r3', lessonId: 'lesson_a1_4_49', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['He', 'always', 'arrives', 'at', 'the', 'office', 'early.'], targetSentence: 'He always arrives at the office early.' },
    { id: 'ex_u04_l49_r4', lessonId: 'lesson_a1_4_49', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match shopping and banking terms:', pairs: [{ left: 'receipt', right: 'proof of purchase' }, { left: 'refund', right: 'money return' }, { left: 'balance', right: 'account funds' }, { left: 'withdraw', right: 'take out cash' }] },
    { id: 'ex_u04_l49_r5', lessonId: 'lesson_a1_4_49', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "क्या आपके पास रसीद है?"', targetSentence: 'Do you have the receipt?' }
  ],
  assessment: [
    { id: 'ex_u04_l49_a1', lessonId: 'lesson_a1_4_49', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the correct sentence about paying:', options: [{ id: 'o1', text: 'You can pay by debit card or in cash.', isCorrect: true }, { id: 'o2', text: 'You can pay on debit card or with cash.', isCorrect: false }, { id: 'o3', text: 'You can pay by cash or on card.', isCorrect: false }] },
    { id: 'ex_u04_l49_a2', lessonId: 'lesson_a1_4_49', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete the sentence: "I went to the ATM to ___ some cash for the weekend."', sentenceTemplate: 'I went to the ATM to ___ some cash for the weekend.', sourceSentence: 'I went to the ATM to ___ some cash for the weekend.', options: [{ id: 'o1', text: 'withdraw', isCorrect: true }, { id: 'o2', text: 'exchange', isCorrect: false }, { id: 'o3', text: 'spell', isCorrect: false }] },
    { id: 'ex_u04_l49_a3', lessonId: 'lesson_a1_4_49', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['Is', 'there', 'a', 'fee', 'for', 'this', 'transfer?'], targetSentence: 'Is there a fee for this transfer?' },
    { id: 'ex_u04_l49_a4', lessonId: 'lesson_a1_4_49', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Select the appropriate response: "How would you like to pay today?"', options: [{ id: 'o1', text: 'I would like to pay by credit card, please.', isCorrect: true }, { id: 'o2', text: 'I am going to work tomorrow.', isCorrect: false }, { id: 'o3', text: 'The bank opens at nine.', isCorrect: false }] },
    { id: 'ex_u04_l49_a5', lessonId: 'lesson_a1_4_49', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete sentence clearly:', targetSentence: 'Please enter your four-digit PIN code into the machine.', audioText: 'Please enter your four-digit PIN code into the machine.' }
  ]
};

// =========================================================================
// LESSON 50: Post Office, Deliveries, Mail & Sending Packages
// =========================================================================
export const CONFIG_50: LessonConfig = {
  num: 50,
  title: 'Post Office, Deliveries, Mail & Sending Packages',
  icon: '📦',
  estMin: 25,
  objTitle: 'Send letters, weigh parcels, and track package deliveries',
  objDesc: 'Learn postal vocabulary, delivery options, stamps, and shipping terms using prepositions and comparative adjectives.',
  objHi: 'पत्र भेजना, पार्सल तौलना और पैकेज डिलीवरी को ट्रैक करना सीखें।',
  objEs: 'Aprende a enviar cartas, pesar paquetes y rastrear entregas postales.',
  canDo: [
    'I can ask about postage rates for letters and parcels.',
    'I can understand shipping options (standard, express, tracking).',
    'I can fill out a shipping label with destination addresses.'
  ],
  canDoHi: [
    'मैं पत्रों और पार्सल के लिए डाक दरों के बारे में पूछ सकता हूँ।',
    'मैं शिपिंग विकल्पों (मानक, एक्सप्रेस, ट्रैकिंग) को समझ सकता हूँ।',
    'मैं गंतव्य पते के साथ शिपिंग लेबल भर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo preguntar sobre tarifas postales para cartas y paquetes.',
    'Puedo comprender opciones de envío (estándar, urgente, seguimiento).',
    'Puedo completar una etiqueta de envío con direcciones de destino.'
  ],
  vocab: [
    { w: 'package', p: '/ˈpæk.ɪdʒ/', m: 'an object or collection of objects wrapped in paper or in a box', hi: 'पैकेज / पार्सल', es: 'paquete', fr: 'colis', de: 'Paket', pt: 'pacote', zh: '包裹', ar: 'طرد', ja: '小包', ru: 'посылка', ex: 'I want to send this package to Canada.', exHi: 'मैं इस पैकेज को कनाडा भेजना चाहता हूँ।', exEs: 'Quiero enviar este paquete a Canadá.', ic: '📦' },
    { w: 'parcel', p: '/ˈpɑː.səl/', m: 'a package, especially one sent by mail', hi: 'पार्सल', es: 'paquete postal', fr: 'paquet', de: 'Päckchen', pt: 'encomenda', zh: '邮包', ar: 'طرد بريدي', ja: '荷物', ru: 'посылка', ex: 'The postal worker weighed the parcel.', exHi: 'डाक कर्मचारी ने पार्सल का वजन किया।', exEs: 'El empleado postal pesó el paquete.', ic: '📦' },
    { w: 'letter', p: '/ˈlet.ər/', m: 'a written message addressed to a person, sent in an envelope', hi: 'पत्र / चिट्ठी', es: 'carta', fr: 'lettre', de: 'Brief', pt: 'carta', zh: '信件', ar: 'رسالة', ja: '手紙', ru: 'письмо', ex: 'She wrote a letter to her grandmother.', exHi: 'उसने अपनी दादी को एक पत्र लिखा।', exEs: 'Ella escribió una carta a su abuela.', ic: '✉️' },
    { w: 'envelope', p: '/ˈen.və.ləʊp/', m: 'a flat paper container used for enclosing a letter', hi: 'लिफ़ाफ़ा', es: 'sobre', fr: 'enveloppe', de: 'Umschlag', pt: 'envelope', zh: '信封', ar: 'ظرف', ja: '封筒', ru: 'конверт', ex: 'Put the stamp on the top right corner of the envelope.', exHi: 'लिफाफे के ऊपरी दाएं कोने पर टिकट लगाएं।', exEs: 'Ponga el sello en la esquina superior derecha del sobre.', ic: '✉️' },
    { w: 'stamp', p: '/stæmp/', m: 'a small adhesive piece of paper stuck to mail to show payment', hi: 'डाक टिकट', es: 'sello / estampilla', fr: 'timbre', de: 'Briefmarke', pt: 'selo', zh: '邮票', ar: 'طابع', ja: '切手', ru: 'марка', ex: 'I need two stamps for international mail.', exHi: 'मुझे अंतर्राष्ट्रीय डाक के लिए दो टिकट चाहिए।', exEs: 'Necesito dos sellos para correo internacional.', ic: '📮' },
    { w: 'address', p: '/əˈdres/', m: 'the particulars of the place where someone lives or an organization is', hi: 'पता', es: 'dirección', fr: 'adresse', de: 'Adresse', pt: 'endereço', zh: '地址', ar: 'عنوان', ja: '住所', ru: 'адрес', ex: 'Please write the destination address clearly.', exHi: 'कृपया गंतव्य का पता स्पष्ट रूप से लिखें।', exEs: 'Por favor escriba la dirección de destino claramente.', ic: '🏠' },
    { w: 'postcode', p: '/ˈpəʊst.kəʊd/', m: 'a group of letters and numbers used in postal addresses', hi: 'पिन कोड / पोस्टकोड', es: 'código postal', fr: 'code postal', de: 'Postleitzahl', pt: 'código postal', zh: '邮政编码', ar: 'رمز بريدي', ja: '郵便番号', ru: 'почтовый индекс', ex: 'What is the postcode for this city?', exHi: 'इस शहर का पोस्टकोड क्या है?', exEs: '¿Cuál es el código postal de esta ciudad?', ic: '🔢' },
    { w: 'weigh', p: '/weɪ/', m: 'to find out how heavy something is using a scale', hi: 'वजन करना', es: 'pesar', fr: 'peser', de: 'wiegen', pt: 'pesar', zh: '称重', ar: 'وزن', ja: '重さを量る', ru: 'взвешивать', ex: 'Let me weigh your box on the scale.', exHi: 'मुझे तराजू पर आपके बॉक्स का वजन करने दें।', exEs: 'Déjeme pesar su caja en la báscula.', ic: '⚖️' },
    { w: 'scale', p: '/skeɪl/', m: 'an instrument for measuring weight', hi: 'तराजू / स्केल', es: 'báscula', fr: 'balance', de: 'Waage', pt: 'balança', zh: '秤', ar: 'ميزان', ja: 'はかり', ru: 'весы', ex: 'Place the parcel directly on the scale.', exHi: 'पार्सल को सीधे तराजू पर रखें।', exEs: 'Coloque el paquete directamente en la báscula.', ic: '⚖️' },
    { w: 'delivery', p: '/dɪˈlɪv.ər.i/', m: 'the action of bringing goods or letters to a destination', hi: 'वितरण / डिलीवरी', es: 'entrega', fr: 'livraison', de: 'Lieferung', pt: 'entrega', zh: '投递', ar: 'توصيل', ja: '配達', ru: 'доставка', ex: 'Express delivery takes two days.', exHi: 'एक्सप्रेस डिलीवरी में दो दिन लगते हैं।', exEs: 'La entrega urgente tarda dos días.', ic: '🚚' },
    { w: 'express', p: '/ɪkˈspres/', m: 'operating at high speed with few or no stops', hi: 'एक्सप्रेस (तीव्र गति)', es: 'urgente / exprés', fr: 'express', de: 'Express', pt: 'expresso', zh: '特快', ar: 'سريع', ja: '速達', ru: 'экспресс', ex: 'Express shipping is faster but costs more.', exHi: 'एक्सप्रेस शिपिंग तेज़ है लेकिन अधिक लागत आती है।', exEs: 'El envío urgente es más rápido pero cuesta más.', ic: '⚡' },
    { w: 'standard', p: '/ˈstæn.dəd/', m: 'used or done normally or ordinarily', hi: 'मानक (साधारण)', es: 'estándar', fr: 'standard', de: 'Standard', pt: 'padrão', zh: '标准', ar: 'عادي', ja: '普通', ru: 'стандартный', ex: 'Standard delivery takes five to seven business days.', exHi: 'साधारण डिलीवरी में पाँच से सात कार्य दिवस लगते हैं।', exEs: 'La entrega estándar tarda de cinco a siete días laborables.', ic: '📦' },
    { w: 'tracking', p: '/ˈtræk.ɪŋ/', m: 'the act of following the progress or movements of an item', hi: 'ट्रैकिंग', es: 'seguimiento', fr: 'suivi', de: 'Sendungsverfolgung', pt: 'rastreamento', zh: '追踪', ar: 'تتبع', ja: '追跡', ru: 'отслеживание', ex: 'Does this service include a tracking number?', exHi: 'क्या इस सेवा में ट्रैकिंग नंबर शामिल है?', exEs: '¿Este servicio incluye un número de seguimiento?', ic: '🔍' },
    { w: 'fragile', p: '/ˈfrædʒ.aɪl/', m: 'easily broken or damaged', hi: 'नाजुक (जल्दी टूटने वाला)', es: 'frágil', fr: 'fragile', de: 'zerbrechlich', pt: 'frágil', zh: '易碎的', ar: 'قابل للكسر', ja: '壊れやすい', ru: 'хрупкий', ex: 'Please mark the box as fragile.', exHi: 'कृपया बॉक्स पर नाजुक का निशान लगाएं।', exEs: 'Por favor marque la caja como frágil.', ic: '⚠️' },
    { w: 'mailbox', p: '/ˈmeɪl.bɒks/', m: 'a box into which mail is delivered or posted', hi: 'लेटर बॉक्स', es: 'buzón', fr: 'boîte aux lettres', de: 'Briefkasten', pt: 'caixa de correio', zh: '邮箱', ar: 'صندوق بريد', ja: '郵便受け', ru: 'почтовый ящик', ex: 'I dropped the postcard in the red mailbox.', exHi: 'मैंने पोस्टकार्ड को लाल लेटर बॉक्स में डाल दिया।', exEs: 'Eché la postal en el buzón rojo.', ic: '📬' },
    { w: 'sender', p: '/ˈsen.dər/', m: 'the person who sends a letter or package', hi: 'प्रेषक (भेजने वाला)', es: 'remitente', fr: 'expéditeur', de: 'Absender', pt: 'remetente', zh: '发件人', ar: 'المرسل', ja: '差出人', ru: 'отправитель', ex: 'Write the sender information on the back.', exHi: 'पीछे प्रेषक की जानकारी लिखें।', exEs: 'Escriba la información del remitente en el reverso.', ic: '👤' },
    { w: 'receiver', p: '/rɪˈsiː.vər/', m: 'the person who gets the letter or package', hi: 'प्राप्तकर्ता', es: 'destinatario', fr: 'destinataire', de: 'Empfänger', pt: 'destinatário', zh: '收件人', ar: 'المستلم', ja: '受取人', ru: 'получатель', ex: 'The receiver will sign for the parcel.', exHi: 'प्राप्तकर्ता पार्सल के लिए हस्ताक्षर करेगा।', exEs: 'El destinatario firmará por el paquete.', ic: '👥' },
    { w: 'customs', p: '/ˈkʌs.təmz/', m: 'the government department that checks goods arriving from other countries', hi: 'सीमा शुल्क (कस्टम्स)', es: 'aduanas', fr: 'douane', de: 'Zoll', pt: 'alfândega', zh: '海关', ar: 'الجمارك', ja: '税関', ru: 'таможня', ex: 'You must fill out a customs declaration form.', exHi: 'आपको एक सीमा शुल्क घोषणा प्रपत्र भरना होगा।', exEs: 'Debe completar un formulario de declaración de aduanas.', ic: '🛃' },
    { w: 'airmail', p: '/ˈeə.meɪl/', m: 'mail carried by aircraft to other countries', hi: 'हवाई डाक', es: 'correo aéreo', fr: 'poste aérienne', de: 'Luftpost', pt: 'correio aéreo', zh: '航空邮件', ar: 'بريد جوي', ja: '航空便', ru: 'авиапочта', ex: 'Sending this by airmail takes one week.', exHi: 'इसे हवाई डाक से भेजने में एक सप्ताह लगता है।', exEs: 'Enviar esto por correo aéreo tarda una semana.', ic: '✈️' },
    { w: 'clerk', p: '/klɑːk/', m: 'an employee who serves customers in an office or post office', hi: 'डाक कर्मचारी / क्लर्क', es: 'empleado postal', fr: 'employé', de: 'Schalterbeamter', pt: 'atendente', zh: '办事员', ar: 'موظف', ja: '係員', ru: 'служащий', ex: 'The postal clerk gave me my receipt.', exHi: 'डाक कर्मचारी ने मुझे मेरी रसीद दी।', exEs: 'El empleado postal me dio mi recibo.', ic: '🧑‍💼' }
  ],
  chunks: [
    { phrase: 'send a package', meaning: 'to mail a parcel to someone', hi: 'पैकेज भेजना', es: 'enviar un paquete', fr: 'envoyer un colis', de: 'ein Paket versenden', pt: 'enviar um pacote', zh: '寄包裹', ar: 'إرسال طرد', ja: '荷物を送る', ru: 'отправить посылку', note: 'Primary post office objective.', ic: '📦' },
    { phrase: 'tracking number', meaning: 'a reference code to follow shipment status online', hi: 'ट्रैकिंग नंबर', es: 'número de seguimiento', fr: 'numéro de suivi', de: 'Sendungsnummer', pt: 'código de rastreio', zh: '快递追踪号', ar: 'رقم التتبع', ja: '追跡番号', ru: 'номер отслеживания', note: 'Crucial ecommerce and postal phrase.', ic: '🔍' },
    { phrase: 'express delivery', meaning: 'fast priority courier shipment', hi: 'एक्सप्रेस डिलीवरी', es: 'entrega urgente', fr: 'livraison express', de: 'Expresslieferung', pt: 'entrega expressa', zh: '特快专递', ar: 'توصيل سريع', ja: '速達配達', ru: 'экспресс-доставка', note: 'Opposite of standard delivery.', ic: '⚡' },
    { phrase: 'How much does it cost to send...?', meaning: 'Inquiring about postal rates', hi: '... भेजने में कितना खर्च होता है?', es: '¿Cuánto cuesta enviar...?', fr: 'Combien coûte l\'envoi de... ?', de: 'Wie viel kostet es, ... zu verschicken?', pt: 'Quanto custa enviar...?', zh: '寄...要多少钱？', ar: 'كم تكلفة إرسال...؟', ja: '...を送るのにいくらかかりますか？', ru: 'Сколько стоит отправить...?', note: 'Standard postal inquiry formula.', ic: '💰' },
    { phrase: 'fill out a customs form', meaning: 'to write contents and value on an international label', hi: 'कस्टम्स फॉर्म भरना', es: 'llenar un formulario de aduana', fr: 'remplir une déclaration de douane', de: 'ein Zollformular ausfüllen', pt: 'preencher formulário de alfândega', zh: '填写海关申报单', ar: 'ملء استمارة الجمارك', ja: '税関申告書を記入する', ru: 'заполнить таможенную декларацию', note: 'Required for overseas shipping.', ic: '📝' },
    { phrase: 'buy stamps', meaning: 'to purchase postage stickers for envelopes', hi: 'डाक टिकट खरीदना', es: 'comprar sellos', fr: 'acheter des timbres', de: 'Briefmarken kaufen', pt: 'comprar selos', zh: '买邮票', ar: 'شراء طوابع', ja: '切手を買う', ru: 'купить марки', note: 'Traditional post office request.', ic: '📮' },
    { phrase: 'destination address', meaning: 'the final delivery location details', hi: 'गंतव्य का पता', es: 'dirección de destino', fr: 'adresse de destination', de: 'Zieladresse', pt: 'endereço de destino', zh: '目的地址', ar: 'عنوان الوجهة', ja: 'お届け先住所', ru: 'адрес назначения', note: 'Where the parcel is going.', ic: '🏠' },
    { phrase: 'Handle with care', meaning: 'Instruction for fragile shipments', hi: 'सावधानी से संभालें', es: 'Tratar con cuidado', fr: 'Manipuler avec soin', de: 'Mit Vorsicht behandeln', pt: 'Manuseie com cuidado', zh: '小心轻放', ar: 'التعامل بعناية', ja: '取扱注意', ru: 'Осторожно, хрупкое', note: 'Printed on fragile boxes.', ic: '⚠️' }
  ],
  grammar: {
    title: 'Comparative Adjectives & Shipping Inquiries (Faster / Cheaper)',
    concept: 'Using regular comparative adjectives (-er than) and question structures to compare shipping speeds and prices.',
    patterns: [
      {
        title: 'Comparative Adjectives (-er than / more ___ than)',
        structure: 'Express is faster than standard. / Standard is cheaper than express.',
        rule: 'Add -er to one-syllable adjectives (fast -> faster, cheap -> cheaper). Use "more" for longer adjectives.',
        examples: [
          { en: 'Express delivery is faster than standard mail.', hi: 'एक्सप्रेस डिलीवरी साधारण डाक से तेज़ है।', es: 'La entrega urgente es más rápida que el correo estándar.' },
          { en: 'Airmail is more expensive than sea freight.', hi: 'हवाई डाक समुद्री माल ढुलाई से अधिक महंगी है।', es: 'El correo aéreo es más caro que el flete marítimo.' }
        ]
      },
      {
        title: 'How long does it take + to arrive?',
        structure: 'How long does + subject + take to + verb?',
        rule: 'Use this question form to ask about shipping duration.',
        examples: [
          { en: 'How long does standard delivery take to arrive?', hi: 'साधारण डिलीवरी पहुँचने में कितना समय लेती है?', es: '¿Cuánto tarda en llegar la entrega estándar?' },
          { en: 'It takes three to five business days.', hi: 'इसमें तीन से पाँच कार्य दिवस लगते हैं।', es: 'Tarda de tres a cinco días laborables.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'Express delivery is more fast than standard.', cor: 'Express delivery is faster than standard.', exp: 'Short adjectives take -er (fast -> faster), not "more fast".', hi: 'एक शब्दांश वाले विशेषणों में -er जोड़ें (faster)।', es: 'Los adjetivos cortos llevan -er (faster), no "more fast".' },
    { inc: 'How many it costs to send this?', cor: 'How much does it cost to send this?', exp: 'Use "How much does it cost" for prices.', hi: 'लागत पूछने के लिए "How much does it cost" का प्रयोग करें।', es: 'Usa "How much does it cost" para precios.' },
    { inc: 'I want to send this to the Japan.', cor: 'I want to send this to Japan.', exp: 'Do not use the article "the" before country names like Japan or France.', hi: 'देशों के नाम से पहले "the" का प्रयोग न करें।', es: 'No uses "the" antes de nombres de países como Japón.' },
    { inc: 'Please weight this box.', cor: 'Please weigh this box.', exp: '"Weigh" is the verb; "weight" is the noun.', hi: 'क्रिया के रूप में "weigh" का उपयोग करें।', es: '"Weigh" es el verbo; "weight" es el sustantivo.' },
    { inc: 'This box is very fragile, please to handle carefully.', cor: 'This box is very fragile, please handle it carefully.', exp: 'Use base verb without "to" for polite requests with please.', hi: '"Please" के बाद बिना "to" के मूल क्रिया लगाएं।', es: 'Usa el verbo base sin "to" con please.' }
  ],
  dialogues: [
    {
      title: 'Sending a Parcel at the Post Office',
      context: 'Lucas sends a birthday present to his friend in Germany.',
      charA: { name: 'Lucas', av: '👨‍🦱', role: 'Sender' },
      charB: { name: 'Postal Clerk', av: '👩‍💼', role: 'Postal Clerk' },
      turns: [
        { spk: 'Postal Clerk', text: 'Next in line, please! How can I help you?', hi: 'कतार में अगला व्यक्ति, कृपया! मैं आपकी क्या मदद कर सकता हूँ?', es: '¡Siguiente en la fila, por favor! ¿En qué puedo ayudarle?' },
        { spk: 'Lucas', text: 'Hello, I would like to send this package to Germany.', hi: 'नमस्ते, मैं इस पैकेज को जर्मनी भेजना चाहता हूँ।', es: 'Hola, me gustaría enviar este paquete a Alemania.' },
        { spk: 'Postal Clerk', text: 'Please place it on the scale. Would you prefer standard or express?', hi: 'कृपया इसे तराजू पर रखें। क्या आप मानक या एक्सप्रेस पसंद करेंगे?', es: 'Por favor colóquelo en la báscula. ¿Prefiere estándar o urgente?' },
        { spk: 'Lucas', text: 'How long does express take, and does it include tracking?', hi: 'एक्सप्रेस में कितना समय लगता है, और क्या इसमें ट्रैकिंग शामिल है?', es: '¿Cuánto tarda el urgente y viene con seguimiento?' },
        { spk: 'Postal Clerk', text: 'Express takes three days and includes online tracking for twenty dollars.', hi: 'एक्सप्रेस में तीन दिन लगते हैं और बीस डॉलर में ऑनलाइन ट्रैकिंग शामिल है।', es: 'El urgente tarda tres días e incluye seguimiento en línea por veinte dólares.' }
      ]
    },
    {
      title: 'Buying Stamps for Postcards',
      context: 'Chloe buys stamps and envelopes for travel postcards.',
      charA: { name: 'Chloe', av: '👩‍🎨', role: 'Tourist' },
      charB: { name: 'Clerk', av: '👨‍💼', role: 'Postal Employee' },
      turns: [
        { spk: 'Chloe', text: 'Hi! Can I buy five international stamps and two envelopes, please?', hi: 'नमस्ते! क्या मुझे पाँच अंतर्राष्ट्रीय टिकट और दो लिफ़ाफ़े मिल सकते हैं, कृपया?', es: '¡Hola! ¿Puedo comprar cinco sellos internacionales y dos sobres, por favor?' },
        { spk: 'Clerk', text: 'Certainly. That will be six dollars and fifty cents altogether.', hi: 'ज़रूर। कुल मिलाकर छह डॉलर पचास सेंट होंगे।', es: 'Ciertamente. Serán seis dólares con cincuenta centavos en total.' },
        { spk: 'Chloe', text: 'Can I pay by debit card?', hi: 'क्या मैं डेबिट कार्ड से भुगतान कर सकता हूँ?', es: '¿Puedo pagar con tarjeta de débito?' },
        { spk: 'Clerk', text: 'Yes, just tap your card on the reader here.', hi: 'हाँ, बस अपना कार्ड यहाँ रीडर पर टैप करें।', es: 'Sí, solo toque su tarjeta en el lector aquí.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l50_p1', lessonId: 'lesson_a1_4_50', stage: 8, type: 'multiple_choice', prompt: 'Select the comparative form: "Express shipping is ___ than standard mail."', options: [{ id: 'o1', text: 'faster', isCorrect: true }, { id: 'o2', text: 'more fast', isCorrect: false }, { id: 'o3', text: 'fastest', isCorrect: false }] },
    { id: 'ex_u04_l50_p2', lessonId: 'lesson_a1_4_50', stage: 8, type: 'fill_blank', prompt: 'Complete the postal inquiry:', sentenceTemplate: 'How ___ does it take for standard delivery to arrive?', sourceSentence: 'How ___ does it take for standard delivery to arrive?', options: [{ id: 'o1', text: 'long', isCorrect: true }, { id: 'o2', text: 'much', isCorrect: false }, { id: 'o3', text: 'many', isCorrect: false }] },
    { id: 'ex_u04_l50_p3', lessonId: 'lesson_a1_4_50', stage: 8, type: 'word_ordering', prompt: 'Order the words to make a shipping statement:', wordBank: ['Please', 'place', 'the', 'box', 'on', 'the', 'scale.'], targetSentence: 'Please place the box on the scale.' },
    { id: 'ex_u04_l50_p4', lessonId: 'lesson_a1_4_50', stage: 8, type: 'match_pairs', prompt: 'Match postal items with their functions:', pairs: [{ left: 'scale', right: 'measures parcel weight' }, { left: 'stamp', right: 'proves postage payment' }, { left: 'envelope', right: 'holds a letter' }, { left: 'tracking number', right: 'follows delivery online' }] },
    { id: 'ex_u04_l50_p5', lessonId: 'lesson_a1_4_50', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'Standard mail is more cheap than airmail.', options: [{ id: 'o1', text: 'Standard mail is cheaper than airmail.', isCorrect: true }, { id: 'o2', text: 'Standard mail is most cheap than airmail.', isCorrect: false }, { id: 'o3', text: 'Standard mail is cheap than airmail.', isCorrect: false }] },
    { id: 'ex_u04_l50_p6', lessonId: 'lesson_a1_4_50', stage: 9, type: 'listening', prompt: 'Listen and select what the clerk says:', audioText: 'Please write the recipient address on the front of the envelope.', options: [{ id: 'o1', text: 'Please write the recipient address on the front of the envelope.', isCorrect: true }, { id: 'o2', text: 'Please write the resident address on the fruit of the envelope.', isCorrect: false }] },
    { id: 'ex_u04_l50_p7', lessonId: 'lesson_a1_4_50', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'Does this delivery include a tracking number?', targetSentence: 'Does this delivery include a tracking number?' },
    { id: 'ex_u04_l50_p8', lessonId: 'lesson_a1_4_50', stage: 10, type: 'multiple_choice', prompt: 'Choose the correct question to ask about sending costs:', options: [{ id: 'o1', text: 'How much does it cost to send this parcel to France?', isCorrect: true }, { id: 'o2', text: 'How many costs it to send this parcel?', isCorrect: false }, { id: 'o3', text: 'What is cost to send this parcel?', isCorrect: false }] },
    { id: 'ex_u04_l50_p9', lessonId: 'lesson_a1_4_50', stage: 11, type: 'dialogue_completion', prompt: 'Complete the dialogue: "Is there anything fragile inside the box?"', options: [{ id: 'o1', text: 'Yes, there is glass inside, so please mark it fragile.', isCorrect: true }, { id: 'o2', text: 'I am reading a book now.', isCorrect: false }, { id: 'o3', text: 'Tomorrow is Tuesday.', isCorrect: false }] },
    { id: 'ex_u04_l50_p10', lessonId: 'lesson_a1_4_50', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I would like to send this letter by airmail, please.', audioText: 'I would like to send this letter by airmail, please.' },
    { id: 'ex_u04_l50_p11', lessonId: 'lesson_a1_4_50', stage: 13, type: 'translation', prompt: 'Translate: "कृपया इस पार्सल को तराजू पर रखें।" / "Por favor coloque este paquete en la báscula."', targetSentence: 'Please place this parcel on the scale.' },
    { id: 'ex_u04_l50_p12', lessonId: 'lesson_a1_4_50', stage: 14, type: 'multiple_choice', prompt: 'What word describes an item that breaks easily if dropped?', options: [{ id: 'o1', text: 'fragile', isCorrect: true }, { id: 'o2', text: 'express', isCorrect: false }, { id: 'o3', text: 'standard', isCorrect: false }] },
    { id: 'ex_u04_l50_p13', lessonId: 'lesson_a1_4_50', stage: 14, type: 'fill_blank', prompt: 'Complete with the correct word: "You must fill out a ___ form for international packages."', sentenceTemplate: 'You must fill out a ___ form for international packages.', sourceSentence: 'You must fill out a ___ form for international packages.', options: [{ id: 'o1', text: 'customs', isCorrect: true }, { id: 'o2', text: 'mailbox', isCorrect: false }, { id: 'o3', text: 'stamp', isCorrect: false }] },
    { id: 'ex_u04_l50_p14', lessonId: 'lesson_a1_4_50', stage: 14, type: 'word_ordering', prompt: 'Order the words to make an inquiry:', wordBank: ['How', 'long', 'does', 'express', 'delivery', 'take?'], targetSentence: 'How long does express delivery take?' },
    { id: 'ex_u04_l50_p15', lessonId: 'lesson_a1_4_50', stage: 14, type: 'speaking', prompt: 'Speak this complete sentence clearly into your microphone:', targetSentence: 'The package arrived safely with online tracking.', audioText: 'The package arrived safely with online tracking.' }
  ],
  review: [
    { id: 'ex_u04_l50_r1', lessonId: 'lesson_a1_4_50', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct payment preposition:', options: [{ id: 'o1', text: 'I paid by credit card at the counter.', isCorrect: true }, { id: 'o2', text: 'I paid on credit card at the counter.', isCorrect: false }, { id: 'o3', text: 'I paid in credit card.', isCorrect: false }] },
    { id: 'ex_u04_l50_r2', lessonId: 'lesson_a1_4_50', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "How ___ money did you withdraw?"', sentenceTemplate: 'How ___ money did you withdraw?', sourceSentence: 'How ___ money did you withdraw?', options: [{ id: 'o1', text: 'much', isCorrect: true }, { id: 'o2', text: 'many', isCorrect: false }, { id: 'o3', text: 'any', isCorrect: false }] },
    { id: 'ex_u04_l50_r3', lessonId: 'lesson_a1_4_50', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['Could', 'you', 'please', 'repeat', 'the', 'price?'], targetSentence: 'Could you please repeat the price?' },
    { id: 'ex_u04_l50_r4', lessonId: 'lesson_a1_4_50', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match actions and items:', pairs: [{ left: 'buy', right: 'stamps' }, { left: 'weigh', right: 'a parcel' }, { left: 'enter', right: 'a PIN' }, { left: 'check', right: 'a balance' }] },
    { id: 'ex_u04_l50_r5', lessonId: 'lesson_a1_4_50', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "यह बहुत महंगा है।"', targetSentence: 'This is too expensive.' }
  ],
  assessment: [
    { id: 'ex_u04_l50_a1', lessonId: 'lesson_a1_4_50', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct comparative sentence:', options: [{ id: 'o1', text: 'Airmail is faster than surface transport.', isCorrect: true }, { id: 'o2', text: 'Airmail is more fast than surface transport.', isCorrect: false }, { id: 'o3', text: 'Airmail is fastest than surface transport.', isCorrect: false }] },
    { id: 'ex_u04_l50_a2', lessonId: 'lesson_a1_4_50', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete the sentence: "Please write the six-digit ___ next to the city name."', sentenceTemplate: 'Please write the six-digit ___ next to the city name.', sourceSentence: 'Please write the six-digit ___ next to the city name.', options: [{ id: 'o1', text: 'postcode', isCorrect: true }, { id: 'o2', text: 'scale', isCorrect: false }, { id: 'o3', text: 'envelope', isCorrect: false }] },
    { id: 'ex_u04_l50_a3', lessonId: 'lesson_a1_4_50', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['Does', 'this', 'service', 'include', 'online', 'tracking?'], targetSentence: 'Does this service include online tracking?' },
    { id: 'ex_u04_l50_a4', lessonId: 'lesson_a1_4_50', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Select the appropriate response: "Would you like standard or express shipping?"', options: [{ id: 'o1', text: 'I would prefer express shipping because it is faster.', isCorrect: true }, { id: 'o2', text: 'I am drinking water.', isCorrect: false }, { id: 'o3', text: 'My shoes are blue.', isCorrect: false }] },
    { id: 'ex_u04_l50_a5', lessonId: 'lesson_a1_4_50', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete sentence clearly:', targetSentence: 'I would like to buy five international stamps for my postcards.', audioText: 'I would like to buy five international stamps for my postcards.' }
  ]
};

// =========================================================================
// LESSON 51: Emergencies, Urgent Help, Safety & Reporting Incidents
// =========================================================================
export const CONFIG_51: LessonConfig = {
  num: 51,
  title: 'Emergencies, Urgent Help, Safety & Reporting Incidents',
  icon: '🚨',
  estMin: 25,
  objTitle: 'Call for emergency assistance, report incidents, and describe urgent situations',
  objDesc: 'Learn vocabulary for emergency services, reporting lost items, injuries, and urgent needs using imperatives and Past Simple.',
  objHi: 'आपातकालीन सहायता मांगना, घटनाओं की रिपोर्ट करना और आवश्यक सुरक्षा शब्दावली सीखें।',
  objEs: 'Aprende a pedir ayuda de emergencia, reportar incidentes y describir situaciones urgentes.',
  canDo: [
    'I can call emergency numbers and clearly state my location.',
    'I can report a lost or stolen item to the police.',
    'I can describe an injury or accident simply to first responders.'
  ],
  canDoHi: [
    'मैं आपातकालीन नंबरों पर कॉल कर सकता हूँ और अपना स्थान स्पष्ट रूप से बता सकता हूँ।',
    'मैं पुलिस को खोई या चोरी हुई वस्तु की रिपोर्ट कर सकता हूँ।',
    'मैं आपातकालीन कर्मियों को चोट या दुर्घटना का सरल वर्णन दे सकता हूँ।'
  ],
  canDoEs: [
    'Puedo llamar a números de emergencia e indicar claramente mi ubicación.',
    'Puedo reportar un objeto perdido o robado a la policía.',
    'Puedo describir una lesión o accidente a los socorristas.'
  ],
  vocab: [
    { w: 'emergency', p: '/ɪˈmɜː.dʒən.si/', m: 'a serious, unexpected situation requiring immediate action', hi: 'आपातकाल', es: 'emergencia', fr: 'urgence', de: 'Notfall', pt: 'emergência', zh: '紧急情况', ar: 'حالة طوارئ', ja: '緊急事態', ru: 'чрезвычайная ситуация', ex: 'In an emergency, dial 911 immediately.', exHi: 'आपातकाल में तुरंत 911 डायल करें।', exEs: 'En una emergencia, marque el 911 de inmediato.', ic: '🚨' },
    { w: 'police', p: '/pəˈliːs/', m: 'the official organization responsible for maintaining public order', hi: 'पुलिस', es: 'policía', fr: 'police', de: 'Polizei', pt: 'polícia', zh: '警察', ar: 'شرطة', ja: '警察', ru: 'полиция', ex: 'Please call the police right away.', exHi: 'कृपया तुरंत पुलिस को बुलाएं।', exEs: 'Por favor llame a la policía de inmediato.', ic: '👮' },
    { w: 'ambulance', p: '/ˈæm.bjə.ləns/', m: 'a special vehicle equipped for taking sick or injured people to hospital', hi: 'एम्बुलेंस', es: 'ambulancia', fr: 'ambulance', de: 'Krankenwagen', pt: 'ambulância', zh: '救护车', ar: 'سيارة إسعاف', ja: '救急車', ru: 'скорая помощь', ex: 'The ambulance arrived in five minutes.', exHi: 'एम्बुलेंस पाँच मिनट में पहुँच गई।', exEs: 'La ambulancia llegó en cinco minutos.', ic: '🚑' },
    { w: 'hospital', p: '/ˈhɒs.pɪ.təl/', m: 'an institution providing medical treatment and nursing care', hi: 'अस्पताल', es: 'hospital', fr: 'hôpital', de: 'Krankenhaus', pt: 'hospital', zh: '医院', ar: 'مستشفى', ja: '病院', ru: 'больница', ex: 'He was taken to the nearest hospital.', exHi: 'उसे नजदीकी अस्पताल ले जाया गया।', exEs: 'Lo llevaron al hospital más cercano.', ic: '🏥' },
    { w: 'firefighter', p: '/ˈfaɪəˌfaɪ.tər/', m: 'a person whose job is to extinguish fires', hi: 'दमकलकर्मी', es: 'bombero', fr: 'pompier', de: 'Feuerwehrmann', pt: 'bombeiro', zh: '消防员', ar: 'إطفائي', ja: '消防士', ru: 'пожарный', ex: 'The firefighters extinguished the fire quickly.', exHi: 'दमकलकर्मियों ने तुरंत आग बुझाई।', exEs: 'Los bomberos extinguieron el fuego rápidamente.', ic: '👨‍🚒' },
    { w: 'accident', p: '/ˈæk.sɪ.dənt/', m: 'an unfortunate incident that happens unexpectedly and causes damage or injury', hi: 'दुर्घटना', es: 'accidente', fr: 'accident', de: 'Unfall', pt: 'acidente', zh: '事故', ar: 'حادث', ja: '事故', ru: 'авария / несчастный случай', ex: 'There was a minor car accident on Main Street.', exHi: 'मेन स्ट्रीट पर एक छोटी कार दुर्घटना हुई थी।', exEs: 'Hubo un accidente automovilístico menor en la calle principal.', ic: '💥' },
    { w: 'injury', p: '/ˈɪn.dʒər.i/', m: 'physical harm or damage to someone\'s body', hi: 'चोट', es: 'lesión / herida', fr: 'blessure', de: 'Verletzung', pt: 'ferimento', zh: '伤害', ar: 'إصابة', ja: '怪我', ru: 'травма', ex: 'He suffered a minor injury to his arm.', exHi: 'उसके हाथ में मामूली चोट आई।', exEs: 'Sufrió una lesión menor en el brazo.', ic: '🩹' },
    { w: 'stolen', p: '/ˈstəʊ.lən/', m: 'taken by someone without permission', hi: 'चोरी हुआ', es: 'robado', fr: 'volé', de: 'gestohlen', pt: 'roubado', zh: '被偷的', ar: 'مسروق', ja: '盗まれた', ru: 'украденный', ex: 'My wallet was stolen on the bus.', exHi: 'मेरा बटुआ बस में चोरी हो गया था।', exEs: 'Mi billetera fue robada en el autobús.', ic: '👛' },
    { w: 'lost', p: '/lɒst/', m: 'unable to be found; misplaced', hi: 'खोया हुआ', es: 'perdido', fr: 'perdu', de: 'verloren', pt: 'perdido', zh: '丢失的', ar: 'مفقود', ja: '紛失した', ru: 'потерянный', ex: 'I have lost my passport and keys.', exHi: 'मैंने अपना पासपोर्ट और चाबियां खो दी हैं।', exEs: 'He perdido mi pasaporte y las llaves.', ic: '🔑' },
    { w: 'help', p: '/help/', m: 'the action of helping someone to do something', hi: 'मदद', es: 'ayuda', fr: 'aide', de: 'Hilfe', pt: 'ajuda', zh: '帮助', ar: 'مساعدة', ja: '助け', ru: 'помощь', ex: 'Please help me, I cannot stand up.', exHi: 'कृपया मेरी मदद करें, मैं खड़ा नहीं हो पा रहा हूँ।', exEs: 'Por favor ayúdeme, no puedo levantarme.', ic: '🆘' },
    { w: 'urgent', p: '/ˈɜː.dʒənt/', m: 'requiring immediate action or attention', hi: 'अत्यावश्यक', es: 'urgente', fr: 'urgent', de: 'dringend', pt: 'urgente', zh: '紧急的', ar: 'عاجل', ja: '緊急の', ru: 'срочный', ex: 'This is an urgent medical situation.', exHi: 'यह एक अत्यावश्यक चिकित्सीय स्थिति है।', exEs: 'Esta es una situación médica urgente.', ic: '⏰' },
    { w: 'safe', p: '/seɪf/', m: 'protected from or not exposed to danger or risk', hi: 'सुरक्षित', es: 'seguro', fr: 'en sécurité', de: 'sicher', pt: 'seguro', zh: '安全的', ar: 'آمن', ja: '安全な', ru: 'безопасный', ex: 'Everyone is safe now.', exHi: 'अब सब सुरक्षित हैं।', exEs: 'Todos están a salvo ahora.', ic: '🛡️' },
    { w: 'danger', p: '/ˈdeɪn.dʒər/', m: 'the possibility of suffering harm or injury', hi: 'खतरा', es: 'peligro', fr: 'danger', de: 'Gefahr', pt: 'perigo', zh: '危险', ar: 'خطر', ja: '危険', ru: 'опасность', ex: 'Keep away from the fire danger.', exHi: 'आग के खतरे से दूर रहें।', exEs: 'Manténgase alejado del peligro del fuego.', ic: '⚠️' },
    { w: 'location', p: '/ləʊˈkeɪ.ʃən/', m: 'a particular place or position', hi: 'स्थान', es: 'ubicación', fr: 'emplacement', de: 'Standort', pt: 'localização', zh: '位置', ar: 'موقع', ja: '場所', ru: 'местоположение', ex: 'What is your exact location?', exHi: 'आपका सटीक स्थान क्या है?', exEs: '¿Cuál es su ubicación exacta?', ic: '📍' },
    { w: 'doctor', p: '/ˈdɒk.tər/', m: 'a person qualified to treat people who are ill', hi: 'डॉक्टर', es: 'médico / doctor', fr: 'médecin', de: 'Arzt', pt: 'médico', zh: '医生', ar: 'طبيب', ja: '医師', ru: 'врач', ex: 'We need a doctor immediately.', exHi: 'हमें तुरंत एक डॉक्टर की जरूरत है।', exEs: 'Necesitamos un médico de inmediato.', ic: '👨‍⚕️' },
    { w: 'nurse', p: '/nɜːs/', m: 'a person trained to care for the sick or injured', hi: 'नर्स', es: 'enfermero/a', fr: 'infirmier/ère', de: 'Krankenschwester', pt: 'enfermeiro/a', zh: '护士', ar: 'ممرض', ja: '看護師', ru: 'медсестра', ex: 'The nurse bandaged the cut.', exHi: 'नर्स ने घाव पर पट्टी बांधी।', exEs: 'La enfermera vendó el corte.', ic: '👩‍⚕️' },
    { w: 'report', p: '/rɪˈpɔːt/', m: 'an official statement describing a crime or incident', hi: 'रिपोर्ट', es: 'denuncia / reporte', fr: 'signalement', de: 'Anzeige', pt: 'boletim de ocorrência', zh: '报案', ar: 'بلاغ', ja: '通報', ru: 'заявление в полицию', ex: 'I filed a police report for my stolen phone.', exHi: 'मैंने अपने चोरी हुए फोन की पुलिस रिपोर्ट दर्ज कराई।', exEs: 'Presenté una denuncia policial por mi teléfono robado.', ic: '📋' },
    { w: 'witness', p: '/ˈwɪt.nəs/', m: 'a person who sees an event, typically a crime or accident', hi: 'गवाह', es: 'testigo', fr: 'témoin', de: 'Zeuge', pt: 'testemunha', zh: '目击者', ar: 'شاهد', ja: '目撃者', ru: 'свидетель', ex: 'The witness saw what happened.', exHi: 'गवाह ने देखा कि क्या हुआ था।', exEs: 'El testigo vio lo que sucedió.', ic: '👀' },
    { w: 'pain', p: '/peɪn/', m: 'physical suffering caused by illness or injury', hi: 'दर्द', es: 'dolor', fr: 'douleur', de: 'Schmerz', pt: 'dor', zh: '疼痛', ar: 'ألم', ja: '痛み', ru: 'боль', ex: 'Where do you feel the pain?', exHi: 'आपको कहाँ दर्द महसूस हो रहा है?', exEs: '¿Dónde siente el dolor?', ic: '😣' },
    { w: 'medicine', p: '/ˈmed.sən/', m: 'a substance used in treating disease or illness', hi: 'दवा', es: 'medicina / medicamento', fr: 'médicament', de: 'Medikament', pt: 'remédio', zh: '药物', ar: 'دواء', ja: '薬', ru: 'лекарство', ex: 'The doctor prescribed some pain medicine.', exHi: 'डॉक्टर ने दर्द की कुछ दवा दी।', exEs: 'El médico recetó medicamentos para el dolor.', ic: '💊' }
  ],
  chunks: [
    { phrase: 'Call an ambulance!', meaning: 'Urgent imperative request for medical transport', hi: 'एम्बुलेंस बुलाओ!', es: '¡Llame a una ambulancia!', fr: 'Appelez une ambulance !', de: 'Rufen Sie einen Krankenwagen!', pt: 'Chame uma ambulância!', zh: '快叫救护车！', ar: 'اتصل بسيارة الإسعاف!', ja: '救急車を呼んでください！', ru: 'Вызовите скорую помощь!', note: 'Life-saving emergency phrase.', ic: '🚑' },
    { phrase: 'I need help.', meaning: 'Direct expression of urgent necessity', hi: 'मुझे मदद चाहिए।', es: 'Necesito ayuda.', fr: 'J\'ai besoin d\'aide.', de: 'Ich brauche Hilfe.', pt: 'Preciso de ajuda.', zh: '我需要帮助。', ar: 'أحتاج إلى مساعدة.', ja: '助けが必要です。', ru: 'Мне нужна помощь.', note: 'Clear and universally understood.', ic: '🆘' },
    { phrase: 'My wallet was stolen.', meaning: 'Reporting a theft to authorities', hi: 'मेरा बटुआ चोरी हो गया था।', es: 'Me robaron la billetera.', fr: 'On m\'a volé mon portefeuille.', de: 'Meine Brieftasche wurde gestohlen.', pt: 'Minha carteira foi roubada.', zh: '我的钱包被偷了。', ar: 'سرقت محفظتي.', ja: '財布が盗まれました。', ru: 'У меня украли кошелек.', note: 'Passive reporting structure.', ic: '👛' },
    { phrase: 'Where is the nearest hospital?', meaning: 'Asking directions to medical care', hi: 'निकटतम अस्पताल कहाँ है?', es: '¿Dónde está el hospital más cercano?', fr: 'Où est l\'hôpital le plus proche ?', de: 'Wo ist das nächste Krankenhaus?', pt: 'Onde fica o hospital mais próximo?', zh: '最近的医院在哪里？', ar: 'أين أقرب مستشفى؟', ja: '一番近い病院はどこですか？', ru: 'Где находится ближайшая больница?', note: 'Essential traveler safety question.', ic: '🏥' },
    { phrase: 'There has been an accident.', meaning: 'Alerting responders to a traffic collision or mishap', hi: 'एक दुर्घटना हो गई है।', es: 'Ha habido un accidente.', fr: 'Il y a eu un accident.', de: 'Es gab einen Unfall.', pt: 'Houve um acidente.', zh: '发生了一起事故。', ar: 'وقع حادث.', ja: '事故がありました。', ru: 'Произошла авария.', note: 'Present perfect notification formula.', ic: '💥' },
    { phrase: 'Stay calm.', meaning: 'Instruction to remain peaceful during emergencies', hi: 'शांत रहें।', es: 'Mantenga la calma.', fr: 'Restez calme.', de: 'Bleiben Sie ruhig.', pt: 'Mantenha a calma.', zh: '保持冷静。', ar: 'ابق هادئاً.', ja: '落ち着いてください。', ru: 'Сохраняйте спокойствие.', note: 'Crucial first-aid imperative.', ic: '🧘' },
    { phrase: 'What is your location?', meaning: 'Emergency dispatcher inquiry', hi: 'आपका स्थान क्या है?', es: '¿Cuál es su ubicación?', fr: 'Quelle est votre position ?', de: 'Wo befinden Sie sich?', pt: 'Qual é a sua localização?', zh: '你在什么位置？', ar: 'ما هو موقعك؟', ja: '現在地はどこですか？', ru: 'Где вы находитесь?', note: 'Standard 911/112 operator question.', ic: '📍' },
    { phrase: 'file a police report', meaning: 'to officially document a crime with officers', hi: 'पुलिस रिपोर्ट दर्ज कराना', es: 'presentar una denuncia policial', fr: 'déposer une plainte', de: 'eine Anzeige erstatten', pt: 'registrar ocorrência policial', zh: '做警察笔录', ar: 'تقديم بلاغ للشرطة', ja: '警察に被害届を出す', ru: 'подать заявление в полицию', note: 'Necessary for insurance claims.', ic: '📋' }
  ],
  grammar: {
    title: 'Imperatives for Safety & Reporting in Past Simple',
    concept: 'Using direct imperatives (Call, Stay, Don\'t touch) for urgent actions and Past Simple for incident reporting.',
    patterns: [
      {
        title: 'Emergency Imperatives (Positive & Negative)',
        structure: 'Call the police! / Stay calm! / Don\'t move!',
        rule: 'Use the base form of the verb for direct instructions. Use "Don\'t + verb" for prohibitions.',
        examples: [
          { en: 'Call an ambulance immediately!', hi: 'तुरंत एम्बुलेंस बुलाओ!', es: '¡Llame a una ambulancia de inmediato!' },
          { en: 'Don\'t move your injured leg.', hi: 'अपने घायल पैर को मत हिलाओ।', es: 'No mueva su pierna lesionada.' }
        ]
      },
      {
        title: 'Past Simple Incident Statements',
        structure: 'Subject + past verb (saw, lost, happened)',
        rule: 'Use Past Simple to state exactly what occurred during the accident or incident.',
        examples: [
          { en: 'A car hit the streetlight ten minutes ago.', hi: 'दस मिनट पहले एक कार स्ट्रीटलाइट से टकरा गई।', es: 'Un coche chocó contra la farola hace diez minutos.' },
          { en: 'I lost my bag on the train.', hi: 'मैंने ट्रेन में अपना बैग खो दिया।', es: 'Perdí mi bolso en el tren.' }
        ]
      }
    ]
  },
  mistakes: [
    { inc: 'Please to call police.', cor: 'Please call the police.', exp: 'Do not use "to" before the verb in an imperative request.', hi: 'आदेशात्मक वाक्य में "to" न लगाएं।', es: 'No uses "to" en oraciones imperativas.' },
    { inc: 'I am lost my passport yesterday.', cor: 'I lost my passport yesterday.', exp: 'Use simple past "lost", not "am lost" for an action in the past.', hi: 'बीते समय की क्रिया के लिए केवल "lost" का उपयोग करें।', es: 'Usa el pasado simple "lost", no "am lost".' },
    { inc: 'Where is nearest hospital?', cor: 'Where is the nearest hospital?', exp: 'Superlatives like "nearest" require the definite article "the".', hi: 'सुपरलेटिव "nearest" से पहले "the" लगाना आवश्यक है।', es: 'Los superlativos requieren el artículo "the" (the nearest).' },
    { inc: 'Don\'t to touch that wire.', cor: 'Don\'t touch that wire.', exp: 'Use "Don\'t + bare verb" for negative imperatives.', hi: '"Don\'t" के बाद मूल क्रिया का उपयोग करें।', es: 'Usa "Don\'t" seguido del verbo base sin "to".' },
    { inc: 'The ambulance come very fast.', cor: 'The ambulance came very fast.', exp: 'Use past tense "came" for past completed events.', hi: 'बीती घटना के लिए पास्ट टेंस "came" का प्रयोग करें।', es: 'Usa el pasado "came" para eventos completados.' }
  ],
  dialogues: [
    {
      title: 'Calling 911 for an Accident',
      context: 'David reports a car collision to the emergency operator.',
      charA: { name: 'Operator', av: '👩‍💼', role: '911 Dispatcher' },
      charB: { name: 'David', av: '👨‍💼', role: 'Caller' },
      turns: [
        { spk: 'Operator', text: 'Emergency Services. Do you need police, fire, or ambulance?', hi: 'आपातकालीन सेवाएं। क्या आपको पुलिस, अग्निशामक या एम्बुलेंस की आवश्यकता है?', es: 'Servicios de Emergencia. ¿Necesita policía, bomberos o ambulancia?' },
        { spk: 'David', text: 'I need an ambulance! There has been a car accident on Market Street.', hi: 'मुझे एक एम्बुलेंस की आवश्यकता है! मार्केट स्ट्रीट पर एक कार दुर्घटना हुई है।', es: '¡Necesito una ambulancia! Ha habido un accidente de coche en Market Street.' },
        { spk: 'Operator', text: 'Are there any injuries, and what is your exact location?', hi: 'क्या कोई घायल है, और आपका सटीक स्थान क्या है?', es: '¿Hay heridos y cuál es su ubicación exacta?' },
        { spk: 'David', text: 'One driver has an arm injury. We are in front of the central library.', hi: 'एक ड्राइवर के हाथ में चोट है। हम केंद्रीय पुस्तकालय के सामने हैं।', es: 'Un conductor tiene una lesión en el brazo. Estamos frente a la biblioteca central.' }
      ]
    },
    {
      title: 'Reporting a Stolen Backpack at the Police Station',
      context: 'Maria files a report for her stolen bag with Officer Reed.',
      charA: { name: 'Officer Reed', av: '👮‍♂️', role: 'Police Officer' },
      charB: { name: 'Maria', av: '👩‍🎓', role: 'Tourist' },
      turns: [
        { spk: 'Officer Reed', text: 'Good afternoon. How can I help you today, ma\'am?', hi: 'शुभ दोपहर। आज मैं आपकी क्या मदद कर सकता हूँ?', es: 'Buenas tardes. ¿Cómo puedo ayudarle hoy, señora?' },
        { spk: 'Maria', text: 'Hello, officer. My backpack was stolen at the cafe twenty minutes ago.', hi: 'नमस्ते, अधिकारी महोदय। मेरा बैकपैक बीस मिनट पहले कैफ़े में चोरी हो गया था।', es: 'Hola, oficial. Mi mochila fue robada en la cafetería hace veinte minutos.' },
        { spk: 'Officer Reed', text: 'Let us file a report. Can you describe the bag and what was inside?', hi: 'आइए एक रिपोर्ट दर्ज करें। क्या आप बैग और उसके अंदर क्या था, इसका वर्णन कर सकती हैं?', es: 'Vamos a presentar una denuncia. ¿Puede describir la mochila y lo que había dentro?' },
        { spk: 'Maria', text: 'It is black with my laptop, student card, and wallet inside.', hi: 'यह काला है जिसमें मेरा लैपटॉप, छात्र कार्ड और बटुआ अंदर है।', es: 'Es negra con mi computadora portátil, carné de estudiante y billetera dentro.' }
      ]
    }
  ],
  practice: [
    { id: 'ex_u04_l51_p1', lessonId: 'lesson_a1_4_51', stage: 8, type: 'multiple_choice', prompt: 'Select the imperative for urgent medical attention: "___ an ambulance immediately!"', options: [{ id: 'o1', text: 'Call', isCorrect: true }, { id: 'o2', text: 'Calling', isCorrect: false }, { id: 'o3', text: 'To call', isCorrect: false }] },
    { id: 'ex_u04_l51_p2', lessonId: 'lesson_a1_4_51', stage: 8, type: 'fill_blank', prompt: 'Complete the sentence with the correct article:', sentenceTemplate: 'Where is ___ nearest hospital?', sourceSentence: 'Where is ___ nearest hospital?', options: [{ id: 'o1', text: 'the', isCorrect: true }, { id: 'o2', text: 'a', isCorrect: false }, { id: 'o3', text: 'an', isCorrect: false }] },
    { id: 'ex_u04_l51_p3', lessonId: 'lesson_a1_4_51', stage: 8, type: 'word_ordering', prompt: 'Order the words to report an emergency:', wordBank: ['There', 'has', 'been', 'a', 'car', 'accident.'], targetSentence: 'There has been a car accident.' },
    { id: 'ex_u04_l51_p4', lessonId: 'lesson_a1_4_51', stage: 8, type: 'match_pairs', prompt: 'Match emergency words with their descriptions:', pairs: [{ left: 'ambulance', right: 'carries sick or injured people' }, { left: 'firefighter', right: 'puts out fires' }, { left: 'police', right: 'maintains public safety' }, { left: 'witness', right: 'saw what happened' }] },
    { id: 'ex_u04_l51_p5', lessonId: 'lesson_a1_4_51', stage: 8, type: 'error_correction', prompt: 'Identify the corrected sentence:', sentenceTemplate: 'My backpack was stole on the train yesterday.', options: [{ id: 'o1', text: 'My backpack was stolen on the train yesterday.', isCorrect: true }, { id: 'o2', text: 'My backpack was steal on the train yesterday.', isCorrect: false }, { id: 'o3', text: 'My backpack stole on the train yesterday.', isCorrect: false }] },
    { id: 'ex_u04_l51_p6', lessonId: 'lesson_a1_4_51', stage: 9, type: 'listening', prompt: 'Listen and select what the operator asks:', audioText: 'What is your exact location and are there any injuries?', options: [{ id: 'o1', text: 'What is your exact location and are there any injuries?', isCorrect: true }, { id: 'o2', text: 'What is your exit station and are there any industries?', isCorrect: false }] },
    { id: 'ex_u04_l51_p7', lessonId: 'lesson_a1_4_51', stage: 9, type: 'listen_and_type', prompt: 'Listen and type what you hear:', audioText: 'Please stay calm and wait for help.', targetSentence: 'Please stay calm and wait for help.' },
    { id: 'ex_u04_l51_p8', lessonId: 'lesson_a1_4_51', stage: 10, type: 'multiple_choice', prompt: 'Choose the correct question to ask about hospital directions:', options: [{ id: 'o1', text: 'Where is the nearest medical clinic?', isCorrect: true }, { id: 'o2', text: 'Where nearest is medical clinic?', isCorrect: false }, { id: 'o3', text: 'Where is near medical clinic?', isCorrect: false }] },
    { id: 'ex_u04_l51_p9', lessonId: 'lesson_a1_4_51', stage: 11, type: 'dialogue_completion', prompt: 'Complete the dispatcher interaction: "Help is on the way. Please do not move the patient."', options: [{ id: 'o1', text: 'Understood, I will stay with him right here.', isCorrect: true }, { id: 'o2', text: 'I am eating breakfast.', isCorrect: false }, { id: 'o3', text: 'The sun is shining.', isCorrect: false }] },
    { id: 'ex_u04_l51_p10', lessonId: 'lesson_a1_4_51', stage: 12, type: 'speaking', prompt: 'Speak this sentence clearly into your microphone:', targetSentence: 'I need to file a police report for my lost passport.', audioText: 'I need to file a police report for my lost passport.' },
    { id: 'ex_u04_l51_p11', lessonId: 'lesson_a1_4_51', stage: 13, type: 'translation', prompt: 'Translate: "कृपया शांत रहें और मदद की प्रतीक्षा करें।" / "Por favor mantenga la calma y espere ayuda."', targetSentence: 'Please stay calm and wait for help.' },
    { id: 'ex_u04_l51_p12', lessonId: 'lesson_a1_4_51', stage: 14, type: 'multiple_choice', prompt: 'What word refers to a person who witnessed a crime or accident?', options: [{ id: 'o1', text: 'witness', isCorrect: true }, { id: 'o2', text: 'sender', isCorrect: false }, { id: 'o3', text: 'teller', isCorrect: false }] },
    { id: 'ex_u04_l51_p13', lessonId: 'lesson_a1_4_51', stage: 14, type: 'fill_blank', prompt: 'Complete with the negative imperative: "___ touch the broken glass on the floor."', sentenceTemplate: '___ touch the broken glass on the floor.', sourceSentence: '___ touch the broken glass on the floor.', options: [{ id: 'o1', text: 'Don\'t', isCorrect: true }, { id: 'o2', text: 'No', isCorrect: false }, { id: 'o3', text: 'Not', isCorrect: false }] },
    { id: 'ex_u04_l51_p14', lessonId: 'lesson_a1_4_51', stage: 14, type: 'word_ordering', prompt: 'Order the words to state an urgent need:', wordBank: ['We', 'need', 'a', 'doctor', 'right', 'away.'], targetSentence: 'We need a doctor right away.' },
    { id: 'ex_u04_l51_p15', lessonId: 'lesson_a1_4_51', stage: 14, type: 'speaking', prompt: 'Speak this complete sentence clearly into your microphone:', targetSentence: 'The paramedics arrived quickly and helped the injured person.', audioText: 'The paramedics arrived quickly and helped the injured person.' }
  ],
  review: [
    { id: 'ex_u04_l51_r1', lessonId: 'lesson_a1_4_51', stage: 16, type: 'multiple_choice', prompt: 'Spaced Retrieval: Choose the correct comparative adjective:', options: [{ id: 'o1', text: 'An ambulance is faster than a standard car.', isCorrect: true }, { id: 'o2', text: 'An ambulance is more fast than a car.', isCorrect: false }, { id: 'o3', text: 'An ambulance is fastest than a car.', isCorrect: false }] },
    { id: 'ex_u04_l51_r2', lessonId: 'lesson_a1_4_51', stage: 16, type: 'fill_blank', prompt: 'Spaced Retrieval: Complete: "How ___ does express delivery take?"', sentenceTemplate: 'How ___ does express delivery take?', sourceSentence: 'How ___ does express delivery take?', options: [{ id: 'o1', text: 'long', isCorrect: true }, { id: 'o2', text: 'many', isCorrect: false }, { id: 'o3', text: 'much', isCorrect: false }] },
    { id: 'ex_u04_l51_r3', lessonId: 'lesson_a1_4_51', stage: 16, type: 'word_ordering', prompt: 'Spaced Retrieval: Order the words:', wordBank: ['I', 'would', 'like', 'to', 'withdraw', 'money.'], targetSentence: 'I would like to withdraw money.' },
    { id: 'ex_u04_l51_r4', lessonId: 'lesson_a1_4_51', stage: 16, type: 'match_pairs', prompt: 'Spaced Retrieval: Match emergency terms:', pairs: [{ left: 'call', right: 'the police' }, { left: 'stay', right: 'calm' }, { left: 'file', right: 'a report' }, { left: 'weigh', right: 'a parcel' }] },
    { id: 'ex_u04_l51_r5', lessonId: 'lesson_a1_4_51', stage: 16, type: 'translation', prompt: 'Spaced Retrieval: Translate into English: "क्या कोई घायल है?"', targetSentence: 'Is anyone injured?' }
  ],
  assessment: [
    { id: 'ex_u04_l51_a1', lessonId: 'lesson_a1_4_51', stage: 17, type: 'multiple_choice', prompt: 'Mastery Check: Select the grammatically correct emergency instruction:', options: [{ id: 'o1', text: 'Call an ambulance immediately and stay calm.', isCorrect: true }, { id: 'o2', text: 'To call ambulance immediately and staying calm.', isCorrect: false }, { id: 'o3', text: 'Calling ambulance and is calm.', isCorrect: false }] },
    { id: 'ex_u04_l51_a2', lessonId: 'lesson_a1_4_51', stage: 17, type: 'fill_blank', prompt: 'Mastery Check: Complete the sentence: "My wallet was ___ while I was on the subway."', sentenceTemplate: 'My wallet was ___ while I was on the subway.', sourceSentence: 'My wallet was ___ while I was on the subway.', options: [{ id: 'o1', text: 'stolen', isCorrect: true }, { id: 'o2', text: 'stole', isCorrect: false }, { id: 'o3', text: 'stealing', isCorrect: false }] },
    { id: 'ex_u04_l51_a3', lessonId: 'lesson_a1_4_51', stage: 17, type: 'word_ordering', prompt: 'Mastery Check: Order the words correctly:', wordBank: ['Where', 'is', 'the', 'nearest', 'emergency', 'hospital?'], targetSentence: 'Where is the nearest emergency hospital?' },
    { id: 'ex_u04_l51_a4', lessonId: 'lesson_a1_4_51', stage: 17, type: 'dialogue_completion', prompt: 'Mastery Check: Select the most appropriate response: "What is your emergency, caller?"', options: [{ id: 'o1', text: 'There is a fire in the kitchen at 45 Elm Street.', isCorrect: true }, { id: 'o2', text: 'I am playing tennis.', isCorrect: false }, { id: 'o3', text: 'I bought two tickets.', isCorrect: false }] },
    { id: 'ex_u04_l51_a5', lessonId: 'lesson_a1_4_51', stage: 17, type: 'speaking', prompt: 'Mastery Check: Speak this complete sentence clearly:', targetSentence: 'Please send police and medical help to Main Street right now.', audioText: 'Please send police and medical help to Main Street right now.' }
  ]
};

console.log('Configs for 49, 50, 51 ready.');
