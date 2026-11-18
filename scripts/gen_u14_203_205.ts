import { buildDetailedLessonA2_Unit14, LessonConfigA2 } from './unit14_builder_helper';
import { saveUnit14Lesson } from './enrich_unit14_helper';

// =========================================================================
// LESSON 203: Conversational Repair: Clarifying, Paraphrasing & Checking
// =========================================================================
export const LESSON_203: LessonConfigA2 = {
  num: 203,
  title: 'Conversational Repair: Clarifying, Paraphrasing & Checking',
  icon: '🔄',
  estMin: 25,
  objTitle: 'Managing Communication Breakdowns with Clarification & Paraphrasing',
  objDesc: 'Learn strategic phrases to ask for repetition, check mutual understanding, paraphrase what was said, and repair misunderstandings smoothly.',
  objHi: 'संचार की बाधाओं को दूर करने, दोहराने का अनुरोध करने, आपसी समझ की जांच करने और गलतफहमियों को आसानी से सुधारने के लिए रणनीतिक वाक्यांश सीखें।',
  objEs: 'Aprender frases para pedir aclaraciones, parafrasear, verificar comprensión mutua y reparar malentendidos.',
  canDo: [
    'I can ask a speaker to repeat, slow down, or rephrase naturally.',
    'I can check if I have understood correctly using paraphrasing phrases ("If I understand correctly...", "In other words...").',
    'I can clarify my own words when misunderstood ("What I meant was...", "Let me put it another way").',
    'I can check if the listener is following along ("Does that make sense?", "Are you with me?").'
  ],
  canDoHi: [
    'मैं किसी वक्ता से दोहराने, धीरे बोलने या स्वाभाविक रूप से दोबारा समझाने का अनुरोध कर सकता हूँ।',
    'मैं पैराफ़्रेज़िंग वाक्यांशों का उपयोग करके जांच सकता हूँ कि क्या मैंने सही समझा है।',
    'गलत समझे जाने पर मैं अपने शब्दों को स्पष्ट कर सकता हूँ ("What I meant was...")।',
    'मैं जांच सकता हूँ कि क्या श्रोता मेरी बात समझ रहा है ("Does that make sense?")।'
  ],
  canDoEs: [
    'Puedo pedir al interlocutor que repita, hable más despacio o reformule.',
    'Puedo verificar si entendí bien parafraseando ("Si entendí bien...").',
    'Puedo aclarar lo que quise decir cuando hay un malentendido.',
    'Puedo comprobar si el oyente me sigue ("¿Tiene sentido?").'
  ],
  vocab: [
    { w: 'clarify', p: '/ˈklærəfaɪ/', m: 'to make a statement or situation less confused and more clearly understood', hi: 'स्पष्ट करना / साफ करना', es: 'aclarar / clarificar', fr: 'clarifier / préciser', de: 'klarstellen / verdeutlichen', pt: 'esclarecer / clarificar', zh: '澄清 / 阐明', ar: 'يوضح / يفسر', ja: '明確にする / 説明する', ru: 'уточнять / прояснять', ex: 'Could you clarify what you mean by that deadline?', exHi: 'क्या आप स्पष्ट कर सकते हैं कि उस समय सीमा से आपका क्या मतलब है?', exEs: '¿Podría aclarar a qué se refiere con ese plazo?', ic: '🔍' },
    { w: 'paraphrase', p: '/ˈpærəfreɪz/', m: 'to express the meaning of something using different words to achieve greater clarity', hi: 'अपने शब्दों में व्यक्त करना (पैराफ़्रेज़)', es: 'parafrasear', fr: 'paraphraser / reformuler', de: 'umschreiben / paraphrasieren', pt: 'parafrasear / reformular', zh: '转述 / 意译', ar: 'إعادة صياغة', ja: '言い換える', ru: 'перефразировать', ex: 'Let me paraphrase what you just explained to ensure I understand.', exHi: 'मुझे यह सुनिश्चित करने के लिए अपने शब्दों में कहने दें कि मैं समझ गया हूँ।', exEs: 'Déjame parafrasear lo que acabas de explicar para asegurarme de que lo entiendo.', ic: '🔄' },
    { w: 'misunderstanding', p: '/ˌmɪsʌndəˈstændɪŋ/', m: 'a failure to understand something correctly', hi: 'गलतफहमी / भ्रम', es: 'malentendido', fr: 'malentendu / quiproquo', de: 'Missverständnis', pt: 'mal-entendido', zh: '误解 / 误会', ar: 'سوء فهم', ja: '誤解 / すれ違い', ru: 'недопонимание / заблуждение', ex: 'Sorry about the misunderstanding; I thought you meant Tuesday.', exHi: 'गलतफहमी के लिए क्षमा करें; मुझे लगा कि आपका मतलब मंगलवार था।', exEs: 'Perdón por el malentendido; pensé que te referías al martes.', ic: '🤷' },
    { w: 'breakdown', p: '/ˈbreɪkdaʊn/', m: 'a failure of communication, relationship, or system', hi: 'संचार में रुकावट या विफलता', es: 'ruptura / fallo de comunicación', fr: 'rupture / échec de communication', de: 'Zusammenbruch / Störung', pt: 'falha / colapso na comunicação', zh: '（沟通）故障 / 障碍', ar: 'انهيار / تعطل التواصل', ja: '意思疎通の破綻', ru: 'сбой в общении / провал коммуникации', ex: 'Active listening prevents communication breakdown in team projects.', exHi: 'सक्रिय रूप से सुनना टीम परियोजनाओं में संचार की रुकावट को रोकता है।', exEs: 'La escucha activa evita los fallos de comunicación en proyectos de equipo.', ic: '⚡' },
    { w: 'repeat', p: '/rɪˈpiːt/', m: 'to say or do something again', hi: 'दोहराना', es: 'repetir', fr: 'répéter', de: 'wiederholen', pt: 'repetir', zh: '重复', ar: 'يكرر / يعيد', ja: '繰り返す', ru: 'повторять', ex: 'Could you repeat that last number, please?', exHi: 'क्या आप कृपया वह अंतिम नंबर दोहरा सकते हैं?', exEs: '¿Podría repetir ese último número, por favor?', ic: '🔁' },
    { w: 'rephrase', p: '/ˌriːˈfreɪz/', m: 'to express an idea in an alternative way', hi: 'दूसरे शब्दों में कहना', es: 'reformular', fr: 'reformuler', de: 'umformulieren', pt: 'reformular', zh: '改述 / 换个说法', ar: 'إعادة التعبير', ja: '言い直す', ru: 'сформулировать иначе', ex: 'Let me rephrase my question to make it simpler.', exHi: 'मुझे अपने प्रश्न को सरल बनाने के लिए इसे दूसरे शब्दों में कहने दें।', exEs: 'Permíteme reformular mi pregunta para hacerla más sencilla.', ic: '✍️' },
    { w: 'catch', p: '/kætʃ/', m: 'to hear and understand words accurately', hi: 'सुनकर समझना / पकड़ना', es: 'captar / escuchar bien', fr: 'saisir / attraper au vol', de: 'verstehen / mitbekommen', pt: 'pegar / captar', zh: '听清 / 捕捉到', ar: 'يلتقط / يسمع بوضوح', ja: '聞き取る', ru: 'расслышать / уловить', ex: 'Sorry, I didn\'t quite catch your surname.', exHi: 'क्षमा करें, मैं आपका उपनाम ठीक से सुन नहीं पाया।', exEs: 'Lo siento, no alcancé a captar su apellido.', ic: '👂' },
    { w: 'mean', p: '/miːn/', m: 'to intend to convey, indicate, or refer to a specific idea', hi: 'मतलब होना / आशय होना', es: 'significar / querer decir', fr: 'vouloir dire / signifier', de: 'meinen / bedeuten', pt: 'significar / querer dizer', zh: '意指 / 意思是', ar: 'يقصد / يعني', ja: '〜を意味する / 〜のつもりで言う', ru: 'иметь в виду / означать', ex: 'What do you mean by flexible working hours?', exHi: 'लचीले कामकाजी घंटों से आपका क्या मतलब है?', exEs: '¿Qué quieres decir con horario de trabajo flexible?', ic: '💭' },
    { w: 'specific', p: '/spəˈsɪfɪk/', m: 'clearly defined or identified; precise', hi: 'विशिष्ट / स्पष्ट', es: 'específico / concreto', fr: 'spécifique / précis', de: 'spezifisch / konkret', pt: 'específico / exato', zh: '具体的 / 明确的', ar: 'محدد / خاص', ja: '具体的な / 特定の', ru: 'конкретный / определенный', ex: 'Could you give me a more specific example?', exHi: 'क्या आप मुझे अधिक विशिष्ट उदाहरण दे सकते हैं?', exEs: '¿Podrías darme un ejemplo más específico?', ic: '🎯' },
    { w: 'confirm', p: '/kənˈfɜːm/', m: 'to establish the truth, correctness, or validity of something', hi: 'पुष्टि करना / पक्का करना', es: 'confirmar', fr: 'confirmer', de: 'bestätigen', pt: 'confirmar', zh: '确认 / 证实', ar: 'يؤكد / يثبت', ja: '確認する / 確かめる', ru: 'подтверждать', ex: 'Just to confirm: we are meeting at 4:30 PM outside the hall?', exHi: 'बस पुष्टि करने के लिए: हम शाम 4:30 बजे हॉल के बाहर मिल रहे हैं?', exEs: 'Solo para confirmar: ¿nos encontramos a las 4:30 PM fuera del salón?', ic: '✅' },
    { w: 'pardon', p: '/ˈpɑːdn/', m: 'used to politely ask someone to repeat what they have just said', hi: 'माफ़ कीजिए (पुनः कहने का अनुरोध)', es: 'perdón / disculpe', fr: 'pardon', de: 'Wie bitte? / Entschuldigung', pt: 'perdão / como?', zh: '请原谅 / 请再说一遍', ar: 'عفواً / معذرة', ja: 'すみません（聞き返し）', ru: 'прошу прощения / повторите пожалуйста', ex: 'Pardon? I didn\'t hear that because the room was noisy.', exHi: 'माफ़ कीजिए? कमरे में शोर होने के कारण मैं सुन नहीं पाया।', exEs: '¿Perdón? No escuché bien porque la sala era ruidosa.', ic: '👂' },
    { w: 'follow', p: '/ˈfɒləʊ/', m: 'to understand the logical progression or meaning of an explanation', hi: 'बात समझना / साथ चलना', es: 'seguir / entender el hilo', fr: 'suivre / comprendre', de: 'folgen / mitkommen', pt: 'acompanhar / seguir o raciocínio', zh: '跟上（思路）/ 理解', ar: 'يتابع / يستوعب', ja: '理解する / ついていく', ru: 'успевать понимать / следить за мыслью', ex: 'Are you following what I\'m saying, or should I explain again?', exHi: 'क्या आप समझ रहे हैं जो मैं कह रहा हूँ, या मुझे फिर से समझाना चाहिए?', exEs: '¿Estás siguiendo lo que digo, o debería explicarlo otra vez?', ic: '🧠' },
    { w: 'speed', p: '/spiːd/', m: 'the rate at which someone speaks or moves', hi: 'गति / रफ्तार', es: 'velocidad / ritmo de habla', fr: 'vitesse / rythme', de: 'Sprechtempo / Geschwindigkeit', pt: 'velocidade / ritmo', zh: '语速 / 速度', ar: 'سرعة الكلام', ja: '話す速さ / スピード', ru: 'скорость речи / темп', ex: 'Could you speak at a slightly slower speed, please?', exHi: 'क्या आप कृपया थोड़ी धीमी गति से बोल सकते हैं?', exEs: '¿Podría hablar a una velocidad un poco más lenta, por favor?', ic: '⏱️' },
    { w: 'signal', p: '/ˈsɪɡnəl/', m: 'a gesture, phrase, or action used to convey information', hi: 'संकेत / इशारा', es: 'señal / indicación', fr: 'signal / indice', de: 'Signal / Zeichen', pt: 'sinal / indício', zh: '信号 / 示意', ar: 'إشارة / علامة', ja: '合図 / シグナル', ru: 'сигнал / знак', ex: 'Nodding your head is a positive listening signal.', exHi: 'सिर हिलाना एक सकारात्मक सुनने का संकेत है।', exEs: 'Asentir con la cabeza es una señal positiva de escucha.', ic: '💡' },
    { w: 'reassurance', p: '/ˌriːəˈʃʊərəns/', m: 'the action of removing someone\'s doubts or fears', hi: 'आश्वासन / तसल्ली', es: 'tranquilidad / confirmación tranquilizadora', fr: 'rassurance / réconfort', de: 'Beruhigung / Bestätigung', pt: 'reafirmação / tranquilização', zh: '令人放心的话 / 安慰', ar: 'طمأنينة / تأكيد مهدئ', ja: '安心させる言葉', ru: 'заверение / успокоение', ex: 'She gave reassurance that the package had indeed arrived safely.', exHi: 'उसने आश्वासन दिया कि पैकेज वास्तव में सुरक्षित रूप से आ गया था।', exEs: 'Ella dio la seguridad de que el paquete había llegado a salvo.', ic: '🌸' }
  ],
  chunks: [
    { phrase: 'what I meant was', meaning: 'repairing a misunderstood statement by restating the true intention', hi: 'मेरा कहने का मतलब यह था कि...', es: 'lo que quise decir fue...', fr: 'ce que je voulais dire, c\'est que...', de: 'was ich meinte, war...', pt: 'o que eu quis dizer foi...', zh: '我的意思是...', ar: 'ما قصدته هو...', ja: '私が言いたかったのは...', ru: 'я имел в виду, что...', note: 'Repair: "Sorry, what I meant was tomorrow afternoon, not morning."', ic: '💬' },
    { phrase: 'if I understand correctly', meaning: 'checking comprehension by summarizing the speaker\'s point', hi: 'यदि मैं सही समझ पा रहा हूँ...', es: 'si he entendido bien...', fr: 'si je comprends bien...', de: 'wenn ich das richtig verstehe...', pt: 'se entendi corretamente...', zh: '如果我理解正确的话...', ar: 'إذا فهمت بشكل صحيح...', ja: '私の理解が正しければ...', note: 'Check: "If I understand correctly, we need three copies."', ic: '📋' },
    { phrase: 'could you say that again', meaning: 'polite request for repetition', hi: 'क्या आप वह दोबारा कह सकते हैं?', es: '¿podrías repetir eso?', fr: 'pourriez-vous répéter cela ?', de: 'könntest du das noch einmal sagen?', pt: 'você poderia dizer isso de novo?', zh: '你能再说一遍吗？', ar: 'هل يمكنك قول ذلك مرة أخرى؟', ja: 'もう一度言っていただけますか？', ru: 'не могли бы вы повторить?', note: 'Request: "Could you say that again a bit more slowly, please?"', ic: '🔁' },
    { phrase: 'does that make sense', meaning: 'checking if your explanation was clear to the listener', hi: 'क्या यह समझ में आया? / क्या यह स्पष्ट है?', es: '¿tiene sentido? / ¿se entiende?', fr: 'est-ce que cela a du sens ? / est-ce clair ?', de: 'ergibt das Sinn? / ist das verständlich?', pt: 'faz sentido? / está claro?', zh: '这样说清楚了吗？', ar: 'هل هذا واضح ومفهوم؟', ja: 'お分かりいただけましたか？', ru: 'это понятно? / имеет смысл?', note: 'Comprehension check: "I will email the file at noon. Does that make sense?"', ic: '💡' },
    { phrase: 'in other words', meaning: 'introducing a simplified paraphrase of what was stated', hi: 'दूसरे शब्दों में...', es: 'en otras palabras...', fr: 'en d\'autres termes...', de: 'mit anderen Worten...', pt: 'em outras palavras...', zh: '换句话说...', ar: 'بمعنى آخر / بعبارة أخرى...', ja: '言い換えると...', ru: 'другими словами...', note: 'Paraphrase: "In other words, the deadline has been extended."', ic: '✍️' },
    { phrase: 'sorry to interrupt but', meaning: 'polite phrase to pause someone and clarify a point immediately', hi: 'बाधा डालने के लिए क्षमा करें, लेकिन...', es: 'disculpe que interrumpa pero...', fr: 'désolé d\'interrompre mais...', de: 'entschuldige die Unterbrechung, aber...', pt: 'desculpe interromper, mas...', zh: '很抱歉打断一下，但是...', ar: 'عذراً على المقاطعة ولكن...', ja: '割り込んで申し訳ありませんが...', note: 'Clarification interruption: "Sorry to interrupt, but is this room 204?"', ic: '✋' }
  ],
  grammar: {
    title: 'Conversational Repair Strategies & Clarification Syntax',
    concept: 'Using framing clauses for checking (If I understand correctly / Do you mean that) and repairing (What I meant was / Let me put it another way).',
    patterns: [
      {
        title: 'Checking & Paraphrasing Formulas',
        structure: 'If I understand correctly, [Subject + Verb...] / In other words, [Subject + Verb...]',
        rule: 'Used to mirror back information to ensure 100% mutual alignment.',
        examples: [
          { en: 'If I understand correctly, the exam starts at 9:00 AM sharp.', hi: 'यदि मैं सही समझ पा रहा हूँ, तो परीक्षा ठीक सुबह 9:00 बजे शुरू होगी।', es: 'Si entiendo bien, el examen comienza puntualmente a las 9:00 AM.' },
          { en: 'In other words, we only need to write two essays instead of three.', hi: 'दूसरे शब्दों में, हमें तीन के बजाय केवल दो निबंध लिखने की आवश्यकता है।', es: 'En otras palabras, solo necesitamos escribir dos ensayos en lugar de tres.' }
        ]
      },
      {
        title: 'Repairing & Self-Correction Formulas',
        structure: 'What I meant was [Clause] / Let me put it another way: [Clause]',
        rule: 'Used when you notice the listener has misinterpreted your statement.',
        examples: [
          { en: 'What I meant was that the assignment is optional, not mandatory.', hi: 'मेरा मतलब यह था कि असाइनमेंट वैकल्पिक है, अनिवार्य नहीं।', es: 'Lo que quise decir fue que la tarea es opcional, no obligatoria.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'What means this word?',
      cor: 'What does this word mean?',
      exp: 'Questions in present simple require auxiliary "does": "What does this word mean?".',
      hi: 'वर्तमान काल के प्रश्नों में "does" का प्रयोग करें: "What does this word mean?".',
      es: 'Las preguntas en presente requieren "does": "What does this word mean?".'
    },
    {
      inc: 'If I understand correct, you will come.',
      cor: 'If I understand correctly, you will come.',
      exp: 'Use the adverb "correctly" to modify the verb "understand".',
      hi: 'क्रिया "understand" की विशेषता बताने के लिए क्रियाविशेषण "correctly" का प्रयोग करें।',
      es: 'Use el adverbio "correctly" para modificar el verbo "understand".'
    }
  ],
  dialogues: [
    {
      title: 'Clarifying Project Instructions with a Tutor',
      context: 'Hannah is asking her academic tutor for clarification on the final presentation format.',
      charA: { name: 'Hannah', av: '👩', role: 'Student' },
      charB: { name: 'Dr. Evans', av: '👨‍🏫', role: 'Tutor' },
      turns: [
        { spk: 'Hannah', text: 'Excuse me, Dr. Evans. Could I clarify the guidelines for our group presentation?', hi: 'माफ़ कीजिए, डॉ. इवांस। क्या मैं अपनी समूह प्रस्तुति के दिशा-निर्देशों को स्पष्ट कर सकती हूँ?', es: 'Disculpe, Dr. Evans. ¿Podría aclarar las pautas para nuestra presentación grupal?' },
        { spk: 'Dr. Evans', text: 'Certainly, Hannah. Each team will deliver a ten-minute talk followed by five minutes of questions.', hi: 'निश्चित रूप से, हन्ना। प्रत्येक टीम दस मिनट का भाषण देगी जिसके बाद पांच मिनट के प्रश्न होंगे।', es: 'Por supuesto, Hannah. Cada equipo expondrá diez minutos seguidos de cinco minutos de preguntas.' },
        { spk: 'Hannah', text: 'If I understand correctly, every group member needs to speak for at least two minutes?', hi: 'यदि मैं सही समझ पा रही हूँ, तो प्रत्येक समूह सदस्य को कम से कम दो मिनट बोलना होगा?', es: 'Si entiendo bien, ¿cada integrante debe hablar al menos dos minutos?' },
        { spk: 'Dr. Evans', text: 'Exactly. Does that make sense, or would you like me to share the grading rubric?', hi: 'बिल्कुल सही। क्या यह स्पष्ट है, या आप चाहते हैं कि मैं ग्रेडिंग रूब्रिक साझा करूँ?', es: 'Exactamente. ¿Tiene sentido, o quieres que comparta la rúbrica de evaluación?' },
        { spk: 'Hannah', text: 'That makes total sense now. Thank you for clarifying!', hi: 'अब यह पूरी तरह से स्पष्ट है। स्पष्ट करने के लिए धन्यवाद!', es: 'Ahora tiene todo el sentido. ¡Muchas gracias por aclararlo!' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_203_p1',
      type: 'multiple_choice',
      prompt: 'Which phrase is best when you did not hear what someone said on a noisy bus?',
      options: [
        { id: '1', text: 'Could you say that again a bit louder, please?', isCorrect: true },
        { id: '2', text: 'Stop talking right now!', isCorrect: false },
        { id: '3', text: 'Where is my passport?', isCorrect: false },
        { id: '4', text: 'Neither do I.', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_p2',
      type: 'fill_blank',
      prompt: 'Complete the conversational repair formula:',
      sourceSentence: 'What I ____ was that the office opens at nine, not eight.',
      targetSentence: 'What I meant was that the office opens at nine, not eight.',
      blankIndex: 2,
      options: [
        { id: '1', text: 'meant', isCorrect: true },
        { id: '2', text: 'meaning', isCorrect: false },
        { id: '3', text: 'means', isCorrect: false },
        { id: '4', text: 'mean to', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_p3',
      type: 'translate_tiles',
      prompt: 'Translate to English: क्या आप थोड़ा और धीरे बोल सकते हैं?',
      sourceSentence: '¿Podría hablar un poco más despacio?',
      targetSentence: 'Could you speak a bit more slowly please',
      wordBank: ['Could', 'you', 'speak', 'a', 'bit', 'more', 'slowly', 'please', 'fast', 'cram']
    },
    {
      id: 'ex_203_p4',
      type: 'word_order',
      prompt: 'Arrange into a checking phrase:',
      targetSentence: 'If I understand correctly we meet tomorrow',
      wordBank: ['If', 'I', 'understand', 'correctly', 'we', 'meet', 'tomorrow']
    },
    {
      id: 'ex_203_p5',
      type: 'error_correction',
      prompt: 'Fix the question structure error:',
      sentence: 'What means this word?',
      correctSentence: 'What does this word mean?',
      errorSentence: 'What means this word?',
      explanation: 'Use auxiliary "does" before the subject in present simple questions.'
    },
    {
      id: 'ex_203_p6',
      type: 'match_pairs',
      prompt: 'Match repair functions with typical phrases:',
      options: [
        { id: 'm1', text: 'Ask for repetition → Could you repeat that, please?' },
        { id: 'm2', text: 'Check comprehension → Does that make sense?' },
        { id: 'm3', text: 'Self-correction → What I meant was...' },
        { id: 'm4', text: 'Paraphrase → In other words...' }
      ]
    },
    {
      id: 'ex_203_p7',
      type: 'listening',
      prompt: 'Listen to the customer service agent clarifying an address:',
      audioText: 'Just to confirm, your apartment number is 4B on Oxford Street, is that correct?',
      options: [
        { id: '1', text: 'The agent is checking and confirming the exact address details', isCorrect: true },
        { id: '2', text: 'The agent is refusing to deliver the package', isCorrect: false },
        { id: '3', text: 'The customer is moving to Paris', isCorrect: false },
        { id: '4', text: 'The agent is ordering pizza', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_p8',
      type: 'speak_sentence',
      prompt: 'Speak this polite clarification question clearly:',
      targetSentence: 'Could you give a specific example of what you mean?',
      audioText: 'Could you give a specific example of what you mean?'
    },
    {
      id: 'ex_203_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the most natural phrase to repair the misunderstanding:',
      context: 'Colleague: "Wait, so you want me to cancel the meeting?" You: "No! ____"' ,
      options: [
        { id: '1', text: 'What I meant was we should postpone it by thirty minutes, not cancel it.', isCorrect: true },
        { id: '2', text: 'So do I!', isCorrect: false },
        { id: '3', text: 'Neither have I.', isCorrect: false },
        { id: '4', text: 'Yes, cancel my plane ticket.', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_p10',
      type: 'reading_comprehension',
      prompt: 'Email exchange: "Student: Dear Professor, just to clarify, is the word count 2,000 words including references or excluding them? Professor: It is 2,000 words excluding the reference list." What was the student clarifying?',
      options: [
        { id: '1', text: 'Whether references are counted inside the 2,000-word limit', isCorrect: true },
        { id: '2', text: 'Where the library is located', isCorrect: false },
        { id: '3', text: 'How to pay tuition fees', isCorrect: false },
        { id: '4', text: 'When the holiday starts', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_p11',
      type: 'fill_blank',
      prompt: 'Complete with the checking phrase:',
      sourceSentence: 'I will submit the file by noon. Does that ____ sense?',
      targetSentence: 'I will submit the file by noon. Does that make sense?',
      blankIndex: 8,
      options: [
        { id: '1', text: 'make', isCorrect: true },
        { id: '2', text: 'do', isCorrect: false },
        { id: '3', text: 'have', isCorrect: false },
        { id: '4', text: 'take', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_p12',
      type: 'translate_tiles',
      prompt: 'Translate to English: दूसरे शब्दों में, हमें कल फिर से मिलना होगा।',
      sourceSentence: 'En otras palabras, tendremos que reunirnos de nuevo mañana.',
      targetSentence: 'In other words we need to meet again tomorrow',
      wordBank: ['In', 'other', 'words', 'we', 'need', 'to', 'meet', 'again', 'tomorrow', 'fail']
    },
    {
      id: 'ex_203_p13',
      type: 'multiple_choice',
      prompt: 'When someone is speaking too quickly on a phone call, what should you say?',
      options: [
        { id: '1', text: 'I\'m sorry, could you slow down a little bit? The line is breaking up.', isCorrect: true },
        { id: '2', text: 'Hang up the phone immediately!', isCorrect: false },
        { id: '3', text: 'Neither can I!', isCorrect: false },
        { id: '4', text: 'So am I.', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_p14',
      type: 'dictation',
      prompt: 'Listen and transcribe the clarifying question:',
      audioText: 'Could you clarify the submission deadline for this report?',
      targetSentence: 'Could you clarify the submission deadline for this report?'
    },
    {
      id: 'ex_203_p15',
      type: 'speaking',
      prompt: 'Practice asking for clarification when you missed a key date:',
      targetSentence: 'Sorry, I didn\'t catch that date. Did you say Friday the fourteenth or the twenty-first?'
    },
    {
      id: 'ex_203_p16',
      type: 'word_order',
      prompt: 'Arrange into an interruption phrase for clarification:',
      targetSentence: 'Sorry to interrupt but which room is the exam in',
      wordBank: ['Sorry', 'to', 'interrupt', 'but', 'which', 'room', 'is', 'the', 'exam', 'in']
    },
    {
      id: 'ex_203_p17',
      type: 'fill_blank',
      prompt: 'Select the missing word in the clarification:',
      sourceSentence: 'Let me put it ____ way so it\'s easier to understand.',
      targetSentence: 'Let me put it another way so it\'s easier to understand.',
      blankIndex: 4,
      options: [
        { id: '1', text: 'another', isCorrect: true },
        { id: '2', text: 'other', isCorrect: false },
        { id: '3', text: 'others', isCorrect: false },
        { id: '4', text: 'anothers', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_p18',
      type: 'error_correction',
      prompt: 'Fix the adverb form error:',
      sentence: 'If I understand correct, the store is closed on Mondays.',
      correctSentence: 'If I understand correctly, the store is closed on Mondays.',
      errorSentence: 'If I understand correct, the store is closed on Mondays.',
      explanation: 'Use the adverb "correctly" to describe how you understand.'
    },
    {
      id: 'ex_203_p19',
      type: 'multiple_choice',
      prompt: 'What is the purpose of saying "Let me rephrase that"?',
      options: [
        { id: '1', text: 'To explain the same idea again using clearer, simpler words', isCorrect: true },
        { id: '2', text: 'To terminate the conversation and walk away', isCorrect: false },
        { id: '3', text: 'To accuse the listener of not paying attention', isCorrect: false },
        { id: '4', text: 'To ask for money', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_p20',
      type: 'translate_tiles',
      prompt: 'Translate to English: माफ़ कीजिए, मैं आपका अंतिम वाक्य ठीक से समझ नहीं पाया।',
      sourceSentence: 'Lo siento, no capté bien su última frase.',
      targetSentence: 'Sorry I didn\'t catch your last sentence',
      wordBank: ['Sorry', 'I', 'didn\'t', 'catch', 'your', 'last', 'sentence', 'fail', 'cram']
    }
  ],
  review: [
    {
      id: 'ex_203_r1',
      type: 'multiple_choice',
      prompt: 'Spaced Retrieval: How do you agree with "I don\'t eat seafood"?',
      options: [
        { id: '1', text: 'Neither do I.', isCorrect: true },
        { id: '2', text: 'So do I.', isCorrect: false },
        { id: '3', text: 'Neither am I.', isCorrect: false },
        { id: '4', text: 'So don\'t I.', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_r2',
      type: 'fill_blank',
      prompt: 'Spaced Retrieval: Complete the question tag:',
      sourceSentence: 'You have verified your student email address, ____ you?',
      targetSentence: 'You have verified your student email address, haven\'t you?',
      blankIndex: 7,
      options: [
        { id: '1', text: 'haven\'t', isCorrect: true },
        { id: '2', text: 'didn\'t', isCorrect: false },
        { id: '3', text: 'don\'t', isCorrect: false },
        { id: '4', text: 'isn\'t', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_r3',
      type: 'translate_tiles',
      prompt: 'Translate to English: बस पुष्टि करने के लिए, क्या हम दोपहर 2 बजे मिल रहे हैं?',
      sourceSentence: 'Solo para confirmar, ¿nos vemos a las 2:00 PM?',
      targetSentence: 'Just to confirm are we meeting at two PM',
      wordBank: ['Just', 'to', 'confirm', 'are', 'we', 'meeting', 'at', 'two', 'PM', 'fail']
    },
    {
      id: 'ex_203_r4',
      type: 'word_order',
      prompt: 'Arrange into a polite repair phrase:',
      targetSentence: 'Let me put it another way to be clear',
      wordBank: ['Let', 'me', 'put', 'it', 'another', 'way', 'to', 'be', 'clear']
    },
    {
      id: 'ex_203_r5',
      type: 'listening',
      prompt: 'Listen to the conversational check:',
      audioText: 'We will split the presentation slides evenly. Are you following me so far?',
      options: [
        { id: '1', text: 'The speaker is checking if the partner understands the plan', isCorrect: true },
        { id: '2', text: 'The speaker wants to work completely alone', isCorrect: false },
        { id: '3', text: 'The presentation was cancelled', isCorrect: false },
        { id: '4', text: 'The speaker is lost on campus', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_r6',
      type: 'speak_sentence',
      prompt: 'Speak this clarification phrase naturally:',
      targetSentence: 'Does that make sense, or would you like me to go over it again?',
      audioText: 'Does that make sense, or would you like me to go over it again?'
    },
    {
      id: 'ex_203_r7',
      type: 'error_correction',
      prompt: 'Fix the error in the clarification phrase:',
      sentence: 'Sorry, I am not catching your name.',
      correctSentence: 'Sorry, I didn\'t catch your name.',
      errorSentence: 'Sorry, I am not catching your name.',
      explanation: 'Use past simple "didn\'t catch" to express that you missed hearing it.'
    },
    {
      id: 'ex_203_r8',
      type: 'match_pairs',
      prompt: 'Match conversation problems with strategic repair solutions:',
      options: [
        { id: 'm1', text: 'Speaker is too fast → "Could you speak a bit more slowly?"' },
        { id: 'm2', text: 'Room is too loud → "Could you repeat that a bit louder?"' },
        { id: 'm3', text: 'You might have misunderstood → "If I understand correctly..."' },
        { id: 'm4', text: 'Your explanation was confusing → "Let me rephrase that."' }
      ]
    },
    {
      id: 'ex_203_r9',
      type: 'fill_blank',
      prompt: 'Select the missing preposition:',
      sourceSentence: 'What do you mean ____ that technical term?',
      targetSentence: 'What do you mean by that technical term?',
      blankIndex: 4,
      options: [
        { id: '1', text: 'by', isCorrect: true },
        { id: '2', text: 'at', isCorrect: false },
        { id: '3', text: 'for', isCorrect: false },
        { id: '4', text: 'with', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_r10',
      type: 'translate_tiles',
      prompt: 'Translate to English: क्या आप मुझे एक विशिष्ट उदाहरण दे सकते हैं?',
      sourceSentence: '¿Podrías darme un ejemplo específico?',
      targetSentence: 'Could you give me a specific example',
      wordBank: ['Could', 'you', 'give', 'me', 'a', 'specific', 'example', 'fail', 'cram']
    }
  ],
  assessment: [
    {
      id: 'ex_203_a1',
      type: 'reading_comprehension',
      prompt: 'Transcript: "Manager: All staff must submit their quarterly expense sheets by Thursday at 5:00 PM, or reimbursements will be delayed until next month. Employee: In other words, if we miss Thursday\'s deadline, we won\'t get our money back until next month? Manager: Precisely." What was the employee doing?',
      options: [
        { id: '1', text: 'Paraphrasing the policy to verify the financial consequence', isCorrect: true },
        { id: '2', text: 'Refusing to submit expenses', isCorrect: false },
        { id: '3', text: 'Asking for a loan from the manager', isCorrect: false },
        { id: '4', text: 'Quitting the job', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_a2',
      type: 'mediation',
      prompt: 'A friend who is nervous about speaking English in public is afraid of making mistakes or not understanding native speakers. What 2-3 practical conversational repair strategies should you advise them to use?',
      options: [
        { id: '1', text: 'Teach them polite repair phrases: 1) "Could you say that a bit more slowly, please?", 2) "If I understand correctly, you mean...", and 3) "What does that word mean?". Assure them that asking for clarification is completely normal and respected in English.', isCorrect: true },
        { id: '2', text: 'Tell them to stay silent and pretend they understand everything.', isCorrect: false },
        { id: '3', text: 'Advise them to never speak to native speakers again.', isCorrect: false },
        { id: '4', text: 'Tell them that asking for repetition is rude.', isCorrect: false }
      ],
      explanation: 'True mediation provides practical, empowering communication strategies.'
    },
    {
      id: 'ex_203_a3',
      type: 'fill_blank',
      prompt: 'Complete the clarifying question:',
      sourceSentence: 'Could you please ____ what you mean by that?',
      targetSentence: 'Could you please clarify what you mean by that?',
      blankIndex: 3,
      options: [
        { id: '1', text: 'clarify', isCorrect: true },
        { id: '2', text: 'fail', isCorrect: false },
        { id: '3', text: 'cram', isCorrect: false },
        { id: '4', text: 'weigh', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_a4',
      type: 'writing_prompt',
      prompt: 'Write a realistic 4-line phone dialogue where a caller asks for clarification about a flight time, uses a checking formula, and thanks the agent.',
      targetSentence: 'Caller: Hello, could I clarify the departure time for flight BA 204? Agent: Yes, the new departure time is 18:45 from Gate 12. Caller: If I understand correctly, the flight is delayed by thirty minutes? Agent: That\'s correct, sir. Caller: Thank you for clarifying!'
    },
    {
      id: 'ex_203_a5',
      type: 'speaking',
      prompt: 'Speak this sentence naturally when you need someone to repeat an address: "Sorry, I didn\'t catch that street name. Could you spell it for me, please?"',
      targetSentence: 'Sorry, I didn\'t catch that street name. Could you spell it for me, please?'
    },
    {
      id: 'ex_203_a6',
      type: 'dictation',
      prompt: 'Listen and transcribe the check of understanding:',
      audioText: 'Let me rephrase that so there is no misunderstanding.',
      targetSentence: 'Let me rephrase that so there is no misunderstanding.'
    },
    {
      id: 'ex_203_a7',
      type: 'multiple_choice',
      prompt: 'Which sentence is a natural way to check if your listener is following you?',
      options: [
        { id: '1', text: 'Does that make sense so far?', isCorrect: true },
        { id: '2', text: 'Are you deaf?', isCorrect: false },
        { id: '3', text: 'Neither do I.', isCorrect: false },
        { id: '4', text: 'So am I.', isCorrect: false }
      ]
    },
    {
      id: 'ex_203_a8',
      type: 'translate_tiles',
      prompt: 'Translate to English: मेरा मतलब यह था कि पुस्तकालय आज रात बंद है।',
      sourceSentence: 'Lo que quise decir fue que la biblioteca está cerrada esta noche.',
      targetSentence: 'What I meant was that the library is closed tonight',
      wordBank: ['What', 'I', 'meant', 'was', 'that', 'the', 'library', 'is', 'closed', 'tonight']
    },
    {
      id: 'ex_203_a9',
      type: 'error_correction',
      prompt: 'Fix the error in this repair sentence:',
      sentence: 'Sorry for interrupt you, but could you repeat that?',
      correctSentence: 'Sorry for interrupting you, but could you repeat that?',
      errorSentence: 'Sorry for interrupt you, but could you repeat that?',
      explanation: 'Preposition "for" is followed by the gerund (-ing): "for interrupting you".'
    },
    {
      id: 'ex_203_a10',
      type: 'dialogue_completion',
      prompt: 'Choose the best completion for the conversation:',
      context: 'Lecturer: "You must complete either assignment A or assignment B." Student: "____"' ,
      options: [
        { id: '1', text: 'So, in other words, we do not need to do both assignments?', isCorrect: true },
        { id: '2', text: 'I am eating an apple.', isCorrect: false },
        { id: '3', text: 'Neither did I yesterday.', isCorrect: false },
        { id: '4', text: 'Where is the bus stop?', isCorrect: false }
      ]
    }
  ]
};

// =========================================================================
// LESSON 204: Softening Requests, Asking for Favours & Polite Declining
// =========================================================================
export const LESSON_204: LessonConfigA2 = {
  num: 204,
  title: 'Softening Requests, Asking for Favours & Polite Declining',
  icon: '🌸',
  estMin: 25,
  objTitle: 'Polite Requests, Asking Favours, Softeners & Graceful Declining',
  objDesc: 'Master diplomatic language in English: "Would you mind...", "I was wondering if...", indirect questions, softeners, and declining invitations politely.',
  objHi: 'अंग्रेजी में शिष्टाचार की भाषा सीखें: "Would you mind...", "I was wondering if...", अप्रत्यक्ष प्रश्न, कोमल शब्द (softeners) और विनम्रता से मना करना।',
  objEs: 'Dominar el lenguaje diplomático en inglés: peticiones indirectas, favores, suavizadores y rechazo cortés de invitaciones.',
  canDo: [
    'I can ask for favours diplomatically using "Would you mind -ing...", "Could you possibly...", and "I was wondering if...".',
    'I can soften direct requests using phrases like "just", "a little bit", and "by any chance".',
    'I can decline invitations or requests politely without causing offense ("I\'d love to, but unfortunately...", "I wish I could, but...").',
    'I can respond appropriately when someone asks for permission or assistance.'
  ],
  canDoHi: [
    'मैं "Would you mind -ing...", "I was wondering if..." का उपयोग करके विनम्रता से मदद मांग सकता हूँ।',
    'मैं "just", "a little bit", "by any chance" जैसे शब्दों का उपयोग करके अनुरोधों को कोमल बना सकता हूँ।',
    'मैं बिना किसी को ठेस पहुँचाए विनम्रता से निमंत्रण या अनुरोध को अस्वीकार कर सकता हूँ।',
    'जब कोई अनुमति या सहायता मांगता है तो मैं उचित प्रतिक्रिया दे सकता हूँ।'
  ],
  canDoEs: [
    'Puedo pedir favores diplomáticamente con "Would you mind...", "I was wondering if...".',
    'Puedo suavizar peticiones directas con expresiones de cortesía.',
    'Puedo rechazar invitaciones o peticiones amablemente sin ofender.',
    'Puedo responder adecuadamente a solicitudes de ayuda o permisos.'
  ],
  vocab: [
    { w: 'favour', p: '/ˈfeɪvər/', m: 'an act of kindness beyond what is due or usual', hi: 'उपकार / मदद / एहसान (फेवर)', es: 'favor', fr: 'service / faveur', de: 'Gefallen', pt: 'favor', zh: '恩惠 / 帮忙', ar: 'معروف / خدمة', ja: '頼み事 / 親切', ru: 'одолжение / услуга', ex: 'Could you do me a quick favour if you have five minutes?', exHi: 'यदि आपके पास पांच मिनट हैं तो क्या आप मेरी थोड़ी मदद कर सकते हैं?', exEs: '¿Podrías hacerme un favor rápido si tienes cinco minutos?', ic: '🤝' },
    { w: 'mind', p: '/maɪnd/', m: 'to be distressed, annoyed, or worried by (used in polite questions: Would you mind...?)', hi: 'बुरा मानना / आपत्ति होना', es: 'importar / molestar', fr: 'déranger / voir d\'inconvénient', de: 'etwas ausmachen / stören', pt: 'importar-se', zh: '介意', ar: 'يمانع', ja: '気にする / 嫌がる', ru: 'возражать / быть против', ex: 'Would you mind closing the window? It\'s chilly in here.', exHi: 'क्या आप खिड़की बंद कर देंगे? यहाँ ठंड लग रही है।', exEs: '¿Te importaría cerrar la ventana? Hace frío aquí.', ic: '🪟' },
    { w: 'wonder', p: '/ˈwʌndər/', m: 'to feel curious or express polite inquiry (I was wondering if...)', hi: 'सोचना / विचार करना (विनम्र पूछताछ)', es: 'preguntarse / desear saber', fr: 'se demander', de: 'sich fragen', pt: 'perguntar-se', zh: '想知道 / 纳闷', ar: 'يتساءل', ja: '〜かしらと思う', ru: 'интересоваться / размышлять', ex: 'I was wondering if you could lend me your lecture notes.', exHi: 'मैं सोच रहा था कि क्या आप मुझे अपने लेक्चर नोट्स उधार दे सकते हैं।', exEs: 'Me preguntaba si podrías prestarme tus apuntes de clase.', ic: '💭' },
    { w: 'unfortunately', p: '/ʌnˈfɔːtʃənətli/', m: 'unluckily; by bad luck (used to soften bad news or declining)', hi: 'दुर्भाग्य से / खेदपूर्वक', es: 'desafortunadamente / lamentablemente', fr: 'malheureusement', de: 'leider / unglücklicherweise', pt: 'infelizmente', zh: '不幸地 / 遗憾地', ar: 'للأسف', ja: 'あいにく / 残念ながら', ru: 'к сожалению', ex: 'I\'d love to join you, but unfortunately I have an exam tomorrow.', exHi: 'मुझे आपके साथ शामिल होना अच्छा लगता, लेकिन दुर्भाग्य से कल मेरी परीक्षा है।', exEs: 'Me encantaría acompañarte, pero lamentablemente tengo un examen mañana.', ic: '😔' },
    { w: 'decline', p: '/dɪˈklaɪn/', m: 'to politely refuse an invitation or offer', hi: 'विनम्रता से अस्वीकार करना / मना करना', es: 'declinar / rechazar cortésmente', fr: 'décliner / refuser poliment', de: 'ablehnen / absagen', pt: 'recusar / declinar educadamente', zh: '婉言谢绝', ar: 'يرفض بلباقة / يعتذر عن', ja: '丁重に断る', ru: 'вежливо отклонять / отказываться', ex: 'She declined the dinner invitation due to prior commitments.', exHi: 'उसने पूर्व प्रतिबद्धताओं के कारण रात्रिभोज के निमंत्रण को विनम्रता से अस्वीकार कर दिया।', exEs: 'Ella declinó la invitación a cenar debido a compromisos previos.', ic: '✋' },
    { w: 'soften', p: '/ˈsɒfn/', m: 'to make speech less harsh, severe, or direct', hi: 'कोमल या मधुर बनाना', es: 'suavizar', fr: 'adoucir / atténuer', de: 'abmildern / abschwächen', pt: 'suavizar / abrandar', zh: '使语气委婉 / 软化', ar: 'يلطف / يخفف الحدة', ja: '（口調を）和らげる', ru: 'смягчать (тон, высказывание)', ex: 'Add "just" or "perhaps" to soften a direct request.', exHi: 'प्रत्यक्ष अनुरोध को कोमल बनाने के लिए "just" या "perhaps" जोड़ें।', exEs: 'Agrega "just" o "perhaps" para suavizar una petición directa.', ic: '🌸' },
    { w: 'diplomatic', p: '/ˌdɪpləˈmætɪk/', m: 'tactful, sensitive, and polite in dealing with others', hi: 'राजनयिक / कुशल और विनम्र', es: 'diplomático / tacto', fr: 'diplomatique / courtois', de: 'diplomatisch / taktvoll', pt: 'diplomático / cortês', zh: '圆通的 / 有分寸的', ar: 'دبلوماسي / لبق', ja: '如才ない / 外交的な', ru: 'дипломатичный / тактичный', ex: 'Using diplomatic language avoids conflict in professional teams.', exHi: 'राजनयिक भाषा का उपयोग पेशेवर टीमों में संघर्ष से बचाता है।', exEs: 'El uso de lenguaje diplomático evita conflictos en equipos profesionales.', ic: '🕊️' },
    { w: 'indirect', p: '/ˌɪndəˈrekt/', m: 'not straightforward; expressed through polite framing', hi: 'अप्रत्यक्ष / घुमावदार विनम्र', es: 'indirecto', fr: 'indirect', de: 'indirekt', pt: 'indireto', zh: '间接的 / 委婉的', ar: 'غير مباشر', ja: '間接的な', ru: 'косвенный / непрямой', ex: 'Indirect questions sound much more polite in English.', exHi: 'अप्रत्यक्ष प्रश्न अंग्रेजी में अधिक विनम्र लगते हैं।', exEs: 'Las preguntas indirectas suenan mucho más educadas en inglés.', ic: '↩️' },
    { w: 'commitment', p: '/kəˈmɪtmənt/', m: 'an engagement or obligation that restricts freedom of action', hi: 'प्रतिबद्धता / पहले से तय कार्यक्रम', es: 'compromiso / obligación', fr: 'engagement / obligation', de: 'Verpflichtung / Termin', pt: 'compromisso', zh: '约束 / 已有的安排', ar: 'التزام / ارتباط', ja: '約束 / 先約', ru: 'обязательство / договоренность', ex: 'I cannot attend due to a prior family commitment.', exHi: 'मैं पारिवारिक प्रतिबद्धता के कारण उपस्थित नहीं हो सकता।', exEs: 'No puedo asistir debido a un compromiso familiar previo.', ic: '🗓️' },
    { w: 'appreciate', p: '/əˈpriːʃieɪt/', m: 'to recognize full worth of something and feel grateful', hi: 'सराहना करना / आभारी होना', es: 'apreciar / agradecer', fr: 'apprécier / être reconnaissant', de: 'schätzen / dankbar sein für', pt: 'apreciar / agradecer', zh: '感激 / 感谢', ar: 'يقدر / يمتن لـ', ja: '感謝する / ありがたく思う', ru: 'ценить / быть благодарным', ex: 'I would really appreciate your help with this application form.', exHi: 'मैं इस आवेदन पत्र में आपकी मदद की बहुत सराहना करूँगा।', exEs: 'Apreciaría mucho tu ayuda con este formulario de solicitud.', ic: '🙏' },
    { w: 'bother', p: '/ˈbɒðər/', m: 'to annoy, worry, or cause trouble to someone', hi: 'परेशान करना / कष्ट देना', es: 'molestar / incomodar', fr: 'déranger / embêter', de: 'stören / belästigen', pt: 'incomodar / perturbar', zh: '打扰 / 麻烦', ar: 'يزعج / يضايق', ja: '邪魔する / 困らせる', ru: 'беспокоить / утруждать', ex: 'Sorry to bother you, but do you know where room 301 is?', exHi: 'आपको परेशान करने के लिए क्षमा करें, लेकिन क्या आप जानते हैं कि कमरा 301 कहाँ है?', exEs: 'Perdón por molestarte, pero ¿sabes dónde está la sala 301?', ic: '🚪' },
    { w: 'grateful', p: '/ˈɡreɪtfl/', m: 'feeling or showing an appreciation of kindness; thankful', hi: 'आभारी / कृतज्ञ', es: 'agradecido', fr: 'reconnaissant / plein de gratitude', de: 'dankbar', pt: 'grato / agradecido', zh: '感激的 / 感谢的', ar: 'شاكر / ممتن', ja: '感謝している', ru: 'благодарный', ex: 'I would be extremely grateful if you could write a reference letter.', exHi: 'यदि आप एक सिफारिश पत्र लिख सकें तो मैं बेहद आभारी रहूँगा।', exEs: 'Estaría sumamente agradecido si pudieras escribir una carta de recomendación.', ic: '💖' },
    { w: 'postpone', p: '/pəˈspəʊn/', m: 'to cause or arrange for something to take place at a later time', hi: 'स्थगित करना / आगे बढ़ाना', es: 'posponer / aplazar', fr: 'reporter / ajourner', de: 'verschieben / vertagen', pt: 'adiar / postergar', zh: '延期 / 推迟', ar: 'يؤجل / يرجئ', ja: '延期する', ru: 'переносить / откладывать', ex: 'Can we postpone our coffee meeting to Friday?', exHi: 'क्या हम अपनी कॉफ़ी मीटिंग को शुक्रवार तक के लिए टाल सकते हैं?', exEs: '¿Podemos posponer nuestro café para el viernes?', ic: '⏳' },
    { w: 'raincheck', p: '/ˈreɪntʃek/', m: 'a polite promise to accept an invitation at a later date', hi: 'अगली बार का वादा (टेक अ रेनचेक)', es: 'dejarlo para otra ocasión / posponer invitación', fr: 'remettre à une autre fois', de: 'auf ein andermal verschieben', pt: 'deixar para a próxima', zh: '改天再约', ar: 'تأجيل الدعوة لمناسبة قادمة', ja: 'またの機会にする', ru: 'перенос встречи на другой раз', ex: 'I\'m swamped with work today—can I take a raincheck on lunch?', exHi: 'मैं आज काम में बहुत व्यस्त हूँ—क्या हम दोपहर के भोजन को किसी और दिन के लिए टाल सकते हैं?', exEs: 'Hoy estoy saturado de trabajo, ¿podemos dejar el almuerzo para otra ocasión?', ic: '☔' },
    { w: 'tact', p: '/tækt/', m: 'skill and sensitivity in dealing with others or with difficult issues', hi: 'व्यवहार कुशलता / समझदारी', es: 'tacto / delicadeza', fr: 'tact / délicatesse', de: 'Taktgefühl / Feingefühl', pt: 'tato / delicadeza', zh: '圆滑 / 得体', ar: 'كياسة / ذوق', ja: '気配り / 機転', ru: 'такт / деликатность', ex: 'Declining a job offer requires tact and professional courtesy.', exHi: 'नौकरी के प्रस्ताव को अस्वीकार करने के लिए व्यवहार कुशलता और पेशेवर शिष्टाचार की आवश्यकता होती है।', exEs: 'Rechazar una oferta de trabajo requiere tacto y cortesía profesional.', ic: '🕊️' }
  ],
  chunks: [
    { phrase: 'would you mind', meaning: 'polite request followed by gerund (-ing)', hi: 'क्या आपको आपत्ति होगी...? / क्या आप कृपा करके...', es: '¿te importaría...? / ¿le importaría...?', fr: 'cela vous dérangerait-il de... ?', de: 'würde es Ihnen etwas ausmachen... ?', pt: 'você se importaria de... ?', zh: '你介意...吗？', ar: 'هل تمانع في...؟', ja: '〜していただけますか？', note: 'Grammar rule: "Would you mind opening the window?" (Gerund -ing)', ic: '🪟' },
    { phrase: 'I was wondering if', meaning: 'polite, indirect way to ask a favour or make a request', hi: 'मैं सोच रहा था कि क्या...', es: 'me preguntaba si...', fr: 'je me demandais si...', de: 'ich habe mich gefragt, ob...', pt: 'eu estava pensando se...', zh: '我想知道是否...', ar: 'كنت أتساءل عما إذا كان بإمكانك...', ja: '〜していただけないかと思いまして', note: 'Polite framing: "I was wondering if you could review my essay."', ic: '💭' },
    { phrase: 'could you possibly', meaning: 'adding "possibly" to make a request exceptionally gentle', hi: 'क्या आप संभवतः...', es: '¿podría posiblemente...?', fr: 'pourriez-vous éventuellement... ?', de: 'könnten Sie eventuell... ?', pt: 'você poderia possivelmente... ?', zh: '您能否尽量...', ar: 'هل من الممكن أن...؟', ja: 'もし可能でしたら〜', note: 'Softener: "Could you possibly give me a lift to the station?"', ic: '🚗' },
    { phrase: 'I\'d love to but', meaning: 'graceful formula to decline an invitation', hi: 'मुझे बहुत अच्छा लगता, लेकिन...', es: 'me encantaría pero...', fr: 'j\'aimerais beaucoup mais...', de: 'ich würde sehr gerne, aber...', pt: 'eu adoraria, mas...', zh: '我很想去，但是...', ar: 'أود ذلك كثيراً ولكن...', ja: 'ぜひそうしたいのですが、あいにく...', note: 'Decline formula: "I\'d love to, but I have a prior appointment."', ic: '🌸' },
    { phrase: 'take a raincheck', meaning: 'politely postpone an invitation to a future time', hi: 'अगली बार के लिए टालना (टेक अ रेनचेक)', es: 'dejarlo para otra ocasión', fr: 'remettre ça à une prochaine fois', de: 'auf ein andermal verschieben', pt: 'deixar para outra oportunidade', zh: '改天再约', ar: 'نؤجلها لمرة قادمة', ja: 'また次の機会にする', note: 'Idiom: "I can\'t make it tonight, but can I take a raincheck?"', ic: '☔' },
    { phrase: 'by any chance', meaning: 'softener used when asking about possibilities or availability', hi: 'संयोग से / क्या ऐसा हो सकता है', es: 'por casualidad', fr: 'par hasard', de: 'zufällig / vielleicht', pt: 'por acaso', zh: '碰巧 / 万一', ar: 'بالصدفة / يا ترى', ja: 'もしかして / ひょっとして', note: 'Soft inquiry: "Do you have a spare pen by any chance?"', ic: '🖊️' }
  ],
  grammar: {
    title: 'Indirect Request Structures & Gerunds with "Would you mind"',
    concept: 'Using "Would you mind + Verb-ing" (and answering "Not at all" for yes) and indirect clauses (I was wondering if you could + Base Verb).',
    patterns: [
      {
        title: 'Would you mind + Gerund (-ing)',
        structure: 'Would you mind + Verb-ing + Object?',
        rule: 'To agree to help, say "Not at all" or "Sure, no problem". Saying "Yes" means you mind (refusal)!',
        examples: [
          { en: '"Would you mind waiting a few minutes?" - "Not at all!"', hi: '"क्या आपको कुछ मिनट इंतजार करने में कोई आपत्ति है?" - "बिल्कुल नहीं!"', es: '"¿Te importaría esperar unos minutos?" - "¡Para nada!"' }
        ]
      },
      {
        title: 'Indirect Favour Requests (I was wondering if)',
        structure: 'I was wondering if you could + Base Verb',
        rule: 'Past continuous creates diplomatic psychological distance, making it very polite.',
        examples: [
          { en: 'I was wondering if you could help me proofread this email.', hi: 'मैं सोच रहा था कि क्या आप इस ईमेल को प्रूफरीड करने में मेरी मदद कर सकते हैं।', es: 'Me preguntaba si podrías ayudarme a revisar este correo.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'Would you mind to close the door?',
      cor: 'Would you mind closing the door?',
      exp: '"Would you mind" is always followed by the gerund (-ing), never the infinitive with "to".',
      hi: '"Would you mind" के बाद हमेशा -ing रूप का प्रयोग होता है: "closing".',
      es: '"Would you mind" siempre va seguido de gerundio (-ing): "closing".'
    },
    {
      inc: '"Would you mind helping me?" - "Yes, I help you." (when agreeing)',
      cor: '"Would you mind helping me?" - "Not at all, I\'d be happy to help!"',
      exp: 'If you say "Yes", it means "Yes, I mind (I refuse)". To agree politely, say "Not at all" or "Sure!".',
      hi: 'सहमति देने के लिए "Not at all" कहें। "Yes" का अर्थ होता है "हाँ, मुझे आपत्ति है"।',
      es: 'Para aceptar diga "Not at all" o "Sure". Responder "Yes" significa que le molesta ayudar.'
    }
  ],
  dialogues: [
    {
      title: 'Asking a Classmate for Study Notes Diplomatically',
      context: 'Lucas missed Monday\'s lecture because of a dentist appointment and asks Chloe for help.',
      charA: { name: 'Lucas', av: '👨', role: 'Student' },
      charB: { name: 'Chloe', av: '👩', role: 'Classmate' },
      turns: [
        { spk: 'Lucas', text: 'Hi Chloe! Sorry to bother you, but do you have a quick minute?', hi: 'नमस्ते क्लोई! आपको परेशान करने के लिए क्षमा करें, क्या आपके पास एक मिनट का समय है?', es: '¡Hola Chloe! Disculpa que te moleste, ¿tienes un minuto?' },
        { spk: 'Chloe', text: 'Hi Lucas! Sure, what\'s on your mind?', hi: 'नमस्ते लुकास! बिल्कुल, बताइए क्या बात है?', es: '¡Hola Lucas! Claro, ¿en qué te puedo ayudar?' },
        { spk: 'Lucas', text: 'I missed Monday\'s biology lecture due to a dental appointment. I was wondering if you could possibly share your notes with me?', hi: 'दांतों के डॉक्टर के पास जाने के कारण मेरी सोमवार की जीव विज्ञान की कक्षा छूट गई। मैं सोच रहा था कि क्या आप अपने नोट्स मेरे साथ साझा कर सकती हैं?', es: 'Me perdí la clase de biología del lunes por el dentista. Me preguntaba si de casualidad podrías compartir tus notas conmigo.' },
        { spk: 'Chloe', text: 'Not at all! I\'ve typed them into a PDF. Would you mind giving me your email address so I can send it over?', hi: 'बिल्कुल कोई आपत्ति नहीं! मैंने उन्हें पीडीएफ में टाइप किया है। क्या आप मुझे अपना ईमेल पता देंगे ताकि मैं भेज सकूँ?', es: '¡Para nada! Las tengo en un PDF. ¿Te importaría darme tu correo para enviártelo?' },
        { spk: 'Lucas', text: 'Not at all, it\'s lucas@campus.edu. I really appreciate your help!', hi: 'बिल्कुल नहीं, यह lucas@campus.edu है। मैं आपकी मदद की बहुत सराहना करता हूँ!', es: '¡Con gusto!, es lucas@campus.edu. ¡De verdad aprecio mucho tu ayuda!' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_204_p1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "Would you mind"?',
      options: [
        { id: '1', text: 'Would you mind turning down the volume a bit?', isCorrect: true },
        { id: '2', text: 'Would you mind to turn down the volume?', isCorrect: false },
        { id: '3', text: 'Would you mind turn down the volume?', isCorrect: false },
        { id: '4', text: 'Would you mind turned down the volume?', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_p2',
      type: 'fill_blank',
      prompt: 'Complete the polite decline formula:',
      sourceSentence: 'I\'d love to come to your party, but ____ I have to study for my final exam.',
      targetSentence: 'I\'d love to come to your party, but unfortunately I have to study for my final exam.',
      blankIndex: 8,
      options: [
        { id: '1', text: 'unfortunately', isCorrect: true },
        { id: '2', text: 'gladly', isCorrect: false },
        { id: '3', text: 'neither', isCorrect: false },
        { id: '4', text: 'so', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_p3',
      type: 'translate_tiles',
      prompt: 'Translate to English: क्या आपको दरवाज़ा बंद करने में कोई आपत्ति है?',
      sourceSentence: '¿Te importaría cerrar la puerta?',
      targetSentence: 'Would you mind closing the door',
      wordBank: ['Would', 'you', 'mind', 'closing', 'the', 'door', 'close', 'to', 'closed']
    },
    {
      id: 'ex_204_p4',
      type: 'word_order',
      prompt: 'Arrange into a polite request with "wondering":',
      targetSentence: 'I was wondering if you could help me',
      wordBank: ['I', 'was', 'wondering', 'if', 'you', 'could', 'help', 'me']
    },
    {
      id: 'ex_204_p5',
      type: 'error_correction',
      prompt: 'Fix the grammar error:',
      sentence: 'Would you mind to help me with this box?',
      correctSentence: 'Would you mind helping me with this box?',
      errorSentence: 'Would you mind to help me with this box?',
      explanation: '"Would you mind" requires the gerund form "helping", not "to help".'
    },
    {
      id: 'ex_204_p6',
      type: 'match_pairs',
      prompt: 'Match polite prompts with their best meanings:',
      options: [
        { id: 'm1', text: 'Would you mind waiting? → Polite request to wait' },
        { id: 'm2', text: 'Not at all! → Enthusiastic agreement to help' },
        { id: 'm3', text: 'Take a raincheck → Postpone invitation to another time' },
        { id: 'm4', text: 'By any chance → Soft question about possibility' }
      ]
    },
    {
      id: 'ex_204_p7',
      type: 'listening',
      prompt: 'Listen to the polite invitation decline:',
      audioText: 'Thank you so much for the dinner invitation. I\'d love to join, but unfortunately I have an early flight tomorrow morning. Can I take a raincheck?',
      options: [
        { id: '1', text: 'The speaker politely declines due to an early flight and asks to reschedule', isCorrect: true },
        { id: '2', text: 'The speaker is attending dinner tonight', isCorrect: false },
        { id: '3', text: 'The speaker is cancelling their flight', isCorrect: false },
        { id: '4', text: 'The speaker is angry at the host', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_p8',
      type: 'speak_sentence',
      prompt: 'Speak this indirect request with warm polite intonation:',
      targetSentence: 'I was wondering if you could possibly lend me a pen?',
      audioText: 'I was wondering if you could possibly lend me a pen?'
    },
    {
      id: 'ex_204_p9',
      type: 'dialogue_completion',
      prompt: 'Someone asks: "Would you mind moving your bag from the chair?" You are happy to move it. What do you reply?',
      options: [
        { id: '1', text: 'Not at all! Here, let me put it on the floor.', isCorrect: true },
        { id: '2', text: 'Yes, I mind very much!', isCorrect: false },
        { id: '3', text: 'Neither do I.', isCorrect: false },
        { id: '4', text: 'So am I.', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_p10',
      type: 'reading_comprehension',
      prompt: 'Message: "Hi Sarah, do you happen to have the textbook for economics by any chance? I forgot mine at home and our seminar starts in 15 minutes." What is the sender asking?',
      options: [
        { id: '1', text: 'If Sarah has the economics textbook available to share', isCorrect: true },
        { id: '2', text: 'If Sarah wants to sell her house', isCorrect: false },
        { id: '3', text: 'If Sarah passed the exam last week', isCorrect: false },
        { id: '4', text: 'If Sarah needs a doctor', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_p11',
      type: 'fill_blank',
      prompt: 'Complete with the softening idiom:',
      sourceSentence: 'I\'m really busy today, but could I take a ____ on lunch?',
      targetSentence: 'I\'m really busy today, but could I take a raincheck on lunch?',
      blankIndex: 8,
      options: [
        { id: '1', text: 'raincheck', isCorrect: true },
        { id: '2', text: 'discount', isCorrect: false },
        { id: '3', text: 'receipt', isCorrect: false },
        { id: '4', text: 'form', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_p12',
      type: 'translate_tiles',
      prompt: 'Translate to English: क्या आपके पास संयोग से एक अतिरिक्त पेन है?',
      sourceSentence: '¿Tienes un bolígrafo de repuesto por casualidad?',
      targetSentence: 'Do you have a spare pen by any chance',
      wordBank: ['Do', 'you', 'have', 'a', 'spare', 'pen', 'by', 'any', 'chance', 'fail']
    },
    {
      id: 'ex_204_p13',
      type: 'multiple_choice',
      prompt: 'How can you ask someone to do a quick favor in the most diplomatic way?',
      options: [
        { id: '1', text: 'Could you do me a quick favour if you have a spare moment?', isCorrect: true },
        { id: '2', text: 'Do this right now!', isCorrect: false },
        { id: '3', text: 'You must do my homework.', isCorrect: false },
        { id: '4', text: 'Neither did I.', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_p14',
      type: 'dictation',
      prompt: 'Listen and transcribe the diplomatic request:',
      audioText: 'Would you mind explaining that grammar point one more time?',
      targetSentence: 'Would you mind explaining that grammar point one more time?'
    },
    {
      id: 'ex_204_p15',
      type: 'speaking',
      prompt: 'Practice declining a coffee invitation politely because of an upcoming exam:',
      targetSentence: 'I\'d love to have coffee, but unfortunately I have an exam tomorrow morning. Can we take a raincheck?'
    },
    {
      id: 'ex_204_p16',
      type: 'word_order',
      prompt: 'Arrange into a polite request with "possibly":',
      targetSentence: 'Could you possibly send me the meeting link',
      wordBank: ['Could', 'you', 'possibly', 'send', 'me', 'the', 'meeting', 'link']
    },
    {
      id: 'ex_204_p17',
      type: 'fill_blank',
      prompt: 'Select the missing polite word:',
      sourceSentence: 'Sorry to ____ you, but could you tell me where the library is?',
      targetSentence: 'Sorry to bother you, but could you tell me where the library is?',
      blankIndex: 2,
      options: [
        { id: '1', text: 'bother', isCorrect: true },
        { id: '2', text: 'fail', isCorrect: false },
        { id: '3', text: 'cram', isCorrect: false },
        { id: '4', text: 'neither', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_p18',
      type: 'error_correction',
      prompt: 'Fix the response error:',
      sentence: 'Person A: "Would you mind if I sit here?" Person B: "Yes, please sit down!"',
      correctSentence: 'Person A: "Would you mind if I sit here?" Person B: "Not at all, please sit down!"',
      errorSentence: 'Person A: "Would you mind if I sit here?" Person B: "Yes, please sit down!"',
      explanation: 'Use "Not at all" or "Go ahead" to give permission, not "Yes".'
    },
    {
      id: 'ex_204_p19',
      type: 'multiple_choice',
      prompt: 'Which phrase adds polite softening to a request?',
      options: [
        { id: '1', text: 'I was just wondering if you had a second...', isCorrect: true },
        { id: '2', text: 'Listen to me right now!', isCorrect: false },
        { id: '3', text: 'You must answer immediately.', isCorrect: false },
        { id: '4', text: 'So did I.', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_p20',
      type: 'translate_tiles',
      prompt: 'Translate to English: मुझे शामिल होना अच्छा लगता, लेकिन मुझे काम करना है।',
      sourceSentence: 'Me encantaría unirme, pero tengo que trabajar.',
      targetSentence: 'I would love to join but I have to work',
      wordBank: ['I', 'would', 'love', 'to', 'join', 'but', 'I', 'have', 'to', 'work', 'fail']
    }
  ],
  review: [
    {
      id: 'ex_204_r1',
      type: 'multiple_choice',
      prompt: 'Spaced Retrieval: How do you check if your explanation made sense?',
      options: [
        { id: '1', text: 'Does that make sense?', isCorrect: true },
        { id: '2', text: 'What is this word?', isCorrect: false },
        { id: '3', text: 'So am I.', isCorrect: false },
        { id: '4', text: 'Neither have I.', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_r2',
      type: 'fill_blank',
      prompt: 'Spaced Retrieval: Complete the polite agreement:',
      sourceSentence: '"I really enjoy learning languages." - "So ____ I!"',
      targetSentence: '"I really enjoy learning languages." - "So do I!"',
      blankIndex: 8,
      options: [
        { id: '1', text: 'do', isCorrect: true },
        { id: '2', text: 'am', isCorrect: false },
        { id: '3', text: 'have', isCorrect: false },
        { id: '4', text: 'did', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_r3',
      type: 'translate_tiles',
      prompt: 'Translate to English: क्या आप मुझे स्टेशन तक लिफ्ट दे सकते हैं?',
      sourceSentence: '¿Podrías posiblemente llevarme a la estación?',
      targetSentence: 'Could you possibly give me a lift to the station',
      wordBank: ['Could', 'you', 'possibly', 'give', 'me', 'a', 'lift', 'to', 'the', 'station']
    },
    {
      id: 'ex_204_r4',
      type: 'word_order',
      prompt: 'Arrange into a polite request with "mind":',
      targetSentence: 'Would you mind checking my spelling',
      wordBank: ['Would', 'you', 'mind', 'checking', 'my', 'spelling']
    },
    {
      id: 'ex_204_r5',
      type: 'listening',
      prompt: 'Listen to the coworker asking for a favor:',
      audioText: 'I was wondering if you could help me format this spreadsheet before our meeting at three?',
      options: [
        { id: '1', text: 'The coworker is asking for assistance formatting a spreadsheet', isCorrect: true },
        { id: '2', text: 'The coworker is cancelling the three o\'clock meeting', isCorrect: false },
        { id: '3', text: 'The coworker is offering free coffee', isCorrect: false },
        { id: '4', text: 'The spreadsheet has been deleted', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_r6',
      type: 'speak_sentence',
      prompt: 'Speak this polite request:',
      targetSentence: 'Would you mind speaking a little more quietly, please?',
      audioText: 'Would you mind speaking a little more quietly, please?'
    },
    {
      id: 'ex_204_r7',
      type: 'error_correction',
      prompt: 'Fix the error in the sentence:',
      sentence: 'Would you mind to hold this elevator for me?',
      correctSentence: 'Would you mind holding this elevator for me?',
      errorSentence: 'Would you mind to hold this elevator for me?',
      explanation: 'Use the -ing form "holding" after "Would you mind".'
    },
    {
      id: 'ex_204_r8',
      type: 'match_pairs',
      prompt: 'Match requests with positive polite responses:',
      options: [
        { id: 'm1', text: 'Would you mind if I open the window? → Not at all, go ahead!' },
        { id: 'm2', text: 'Could you possibly give me a hand? → Sure, I\'d be glad to help.' },
        { id: 'm3', text: 'Do you have a minute to chat? → Of course, what\'s on your mind?' },
        { id: 'm4', text: 'Can I borrow your charger? → Yes, here you go.' }
      ]
    },
    {
      id: 'ex_204_r9',
      type: 'fill_blank',
      prompt: 'Select the missing verb form:',
      sourceSentence: 'Would you mind ____ the document to my email address?',
      targetSentence: 'Would you mind forwarding the document to my email address?',
      blankIndex: 3,
      options: [
        { id: '1', text: 'forwarding', isCorrect: true },
        { id: '2', text: 'forward', isCorrect: false },
        { id: '3', text: 'to forward', isCorrect: false },
        { id: '4', text: 'forwarded', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_r10',
      type: 'translate_tiles',
      prompt: 'Translate to English: मैं सोच रहा था कि क्या आप मेरी मदद कर सकते हैं।',
      sourceSentence: 'Me preguntaba si podrías ayudarme.',
      targetSentence: 'I was wondering if you could help me',
      wordBank: ['I', 'was', 'wondering', 'if', 'you', 'could', 'help', 'me', 'fail', 'cram']
    }
  ],
  assessment: [
    {
      id: 'ex_204_a1',
      type: 'reading_comprehension',
      prompt: 'Email: "Dear Dr. Miller, I hope this email finds you well. I was wondering if you might have ten minutes this Thursday during office hours to discuss my research proposal? I would be very grateful for your guidance. Sincerely, Alex." How does Alex make his request especially polite?',
      options: [
        { id: '1', text: 'By using "I was wondering if", "might have", and expressing gratitude in advance', isCorrect: true },
        { id: '2', text: 'By demanding an immediate response within five minutes', isCorrect: false },
        { id: '3', text: 'By sending a parcel with customs forms', isCorrect: false },
        { id: '4', text: 'By asking for a full refund', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_a2',
      type: 'mediation',
      prompt: 'A colleague wants to say "No" to an invitation from their team manager to go for drinks after work, but they are terrified of sounding rude. What diplomatic 3-step formula should they use to decline politely?',
      options: [
        { id: '1', text: '1) Thank the manager for the invitation, 2) State a polite softened reason ("I\'d love to, but unfortunately I have a family commitment tonight"), and 3) Offer a raincheck ("Could I take a raincheck for next week?").', isCorrect: true },
        { id: '2', text: 'Tell the manager that going for drinks is completely boring.', isCorrect: false },
        { id: '3', text: 'Ignore the message and turn off their phone for three days.', isCorrect: false },
        { id: '4', text: 'Say "Yes" and then not show up.', isCorrect: false }
      ],
      explanation: 'True mediation teaches diplomatic and professional communication.'
    },
    {
      id: 'ex_204_a3',
      type: 'fill_blank',
      prompt: 'Complete the polite decline:',
      sourceSentence: 'I wish I ____ come with you, but I have a doctor\'s appointment.',
      targetSentence: 'I wish I could come with you, but I have a doctor\'s appointment.',
      blankIndex: 3,
      options: [
        { id: '1', text: 'could', isCorrect: true },
        { id: '2', text: 'can', isCorrect: false },
        { id: '3', text: 'will', isCorrect: false },
        { id: '4', text: 'do', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_a4',
      type: 'writing_prompt',
      prompt: 'Write a polite 3-sentence message to a classmate asking to borrow their chemistry textbook for one evening because you forgot yours at home.',
      targetSentence: 'Hi Liam, sorry to bother you! I was wondering if you might have your chemistry textbook with you by any chance? Would you mind lending it to me just for tonight so I can finish chapter four?'
    },
    {
      id: 'ex_204_a5',
      type: 'speaking',
      prompt: 'Speak this polite request: "Would you mind holding the door for a moment, please?"',
      targetSentence: 'Would you mind holding the door for a moment, please?'
    },
    {
      id: 'ex_204_a6',
      type: 'dictation',
      prompt: 'Listen and transcribe the request:',
      audioText: 'Could you possibly give me some feedback on this draft?',
      targetSentence: 'Could you possibly give me some feedback on this draft?'
    },
    {
      id: 'ex_204_a7',
      type: 'multiple_choice',
      prompt: 'What does "Not at all" mean when responding to "Would you mind helping me?"',
      options: [
        { id: '1', text: 'It means "I do not mind at all, I am very happy to help you"', isCorrect: true },
        { id: '2', text: 'It means "I refuse to help you"', isCorrect: false },
        { id: '3', text: 'It means "I don\'t know you"', isCorrect: false },
        { id: '4', text: 'It means "I am busy all day"', isCorrect: false }
      ]
    },
    {
      id: 'ex_204_a8',
      type: 'translate_tiles',
      prompt: 'Translate to English: क्या आप मुझे यह फॉर्म भरने में मदद कर सकते हैं?',
      sourceSentence: '¿Te importaría ayudarme a rellenar este formulario?',
      targetSentence: 'Would you mind helping me fill out this form',
      wordBank: ['Would', 'you', 'mind', 'helping', 'me', 'fill', 'out', 'this', 'form', 'fail']
    },
    {
      id: 'ex_204_a9',
      type: 'error_correction',
      prompt: 'Fix the error in this request:',
      sentence: 'I was wonder if you could check this file.',
      correctSentence: 'I was wondering if you could check this file.',
      errorSentence: 'I was wonder if you could check this file.',
      explanation: 'Use the past continuous form "was wondering".'
    },
    {
      id: 'ex_204_a10',
      type: 'dialogue_completion',
      prompt: 'Choose the best completion for the conversation:',
      context: 'Colleague: "Would you mind if I turn on the air conditioning?"',
      options: [
        { id: '1', text: 'Not at all, it\'s quite warm in here!', isCorrect: true },
        { id: '2', text: 'Yes, please turn it on.', isCorrect: false },
        { id: '3', text: 'So did I.', isCorrect: false },
        { id: '4', text: 'Neither do I.', isCorrect: false }
      ]
    }
  ]
};

// =========================================================================
// LESSON 205: Extended Writing: Paragraph Structure, Connectors & Linking Words
// =========================================================================
export const LESSON_205: LessonConfigA2 = {
  num: 205,
  title: 'Extended Writing: Paragraph Structure, Connectors & Linking Words',
  icon: '📝',
  estMin: 25,
  objTitle: 'Writing Structured Paragraphs with Topic Sentences & Cohesive Connectors',
  objDesc: 'Learn how to build clear, well-linked paragraphs using topic sentences, supporting details, concluding sentences, and transition words (Furthermore, However, Therefore, In addition).',
  objHi: 'विषय वाक्यों (Topic Sentences), सहायक विवरणों और जोड़ने वाले शब्दों (Furthermore, However, Therefore, In addition) का उपयोग करके संरचित पैराग्राफ लिखना सीखें।',
  objEs: 'Aprender a estructurar párrafos con oraciones temáticas, detalles de apoyo y conectores discursivos (Furthermore, However, Therefore).',
  canDo: [
    'I can identify and write a clear topic sentence that states the main idea of a paragraph.',
    'I can support my main idea with 2-3 specific supporting details and examples.',
    'I can use cohesive linking words for addition (Furthermore, In addition), contrast (However, On the other hand), and result (Therefore, As a result).',
    'I can write a concluding sentence that summarizes the paragraph or gives a final thought.'
  ],
  canDoHi: [
    'मैं एक स्पष्ट विषय वाक्य (topic sentence) पहचान और लिख सकता हूँ जो पैराग्राफ के मुख्य विचार को बताता है।',
    'मैं 2-3 विशिष्ट उदाहरणों और सहायक विवरणों के साथ अपने विचार का समर्थन कर सकता हूँ।',
    'मैं जोड़ने (Furthermore), विरोध (However) और परिणाम (Therefore) के लिए संयोजक शब्दों का उपयोग कर सकता हूँ।',
    'मैं एक निष्कर्ष वाक्य लिख सकता हूँ जो पैराग्राफ का सारांश देता है।'
  ],
  canDoEs: [
    'Puedo escribir una oración temática que exprese la idea principal de un párrafo.',
    'Puedo apoyar mi idea con detalles y ejemplos concretos.',
    'Puedo usar conectores de adición (Furthermore), contraste (However) y resultado (Therefore).',
    'Puedo redactar una oración de conclusión que resuma el párrafo.'
  ],
  vocab: [
    { w: 'paragraph', p: '/ˈpærəɡrɑːf/', m: 'a distinct section of a piece of writing, usually dealing with a single theme', hi: 'अनुच्छेद / पैराग्राफ', es: 'párrafo', fr: 'paragraphe', de: 'Absatz / Paragraf', pt: 'parágrafo', zh: '段落', ar: 'فقرة', ja: '段落 / パラグラフ', ru: 'абзац / параграф', ex: 'A well-written paragraph focuses on one main topic sentence.', exHi: 'एक अच्छी तरह से लिखा गया पैराग्राफ एक मुख्य विषय वाक्य पर केंद्रित होता है।', exEs: 'Un párrafo bien escrito se enfoca en una oración temática principal.', ic: '📄' },
    { w: 'furthermore', p: '/ˌfɜːðəˈmɔːr/', m: 'in addition to what has been said; moreover', hi: 'इसके अलावा / और तो और (Furthermore)', es: 'además / es más', fr: 'de plus / en outre', de: 'darüber hinaus / ferner', pt: 'além disso / ademais', zh: '此外 / 而且', ar: 'علاوة على ذلك / فضلاً عن ذلك', ja: 'さらに / その上', ru: 'более того / кроме того', ex: 'The course is free; furthermore, all study materials are provided.', exHi: 'पाठ्यक्रम निःशुल्क है; इसके अलावा, सभी अध्ययन सामग्री प्रदान की जाती है।', exEs: 'El curso es gratuito; además, se proporcionan todos los materiales.', ic: '➕' },
    { w: 'however', p: '/haʊˈevər/', m: 'used to introduce a statement that contrasts with something said', hi: 'हालाँकि / तथापि (However)', es: 'sin embargo / no obstante', fr: 'cependant / toutefois', de: 'jedoch / allerdings', pt: 'no entanto / contudo', zh: '然而 / 不过', ar: 'ومع ذلك / لكن', ja: 'しかしながら / けれども', ru: 'однако / тем не менее', ex: 'He studied diligently; however, he felt anxious before the test.', exHi: 'उसने लगन से पढ़ाई की; हालाँकि, वह परीक्षा से पहले चिंतित महसूस कर रहा था।', exEs: 'Estudió con diligencia; sin embargo, se sentía ansioso antes del examen.', ic: '🔄' },
    { w: 'therefore', p: '/ˈðeəfɔːr/', m: 'for that reason; consequently; as a result', hi: 'इसलिए / अतः (Therefore)', es: 'por lo tanto / por consiguiente', fr: 'par conséquent / donc', de: 'daher / deshalb', pt: 'portanto / por isso', zh: '因此 / 所以', ar: 'لذلك / وبناءً عليه', ja: 'したがって / それゆえに', ru: 'следовательно / поэтому', ex: 'She practiced speaking daily; therefore, her fluency improved noticeably.', exHi: 'उसने प्रतिदिन बोलने का अभ्यास किया; इसलिए, उसके प्रवाह में उल्लेखनीय सुधार हुआ।', exEs: 'Practicaba conversación a diario; por lo tanto, su fluidez mejoró notablemente.', ic: '➡️' },
    { w: 'in addition', p: '/ɪn əˈdɪʃn/', m: 'used to introduce extra information supporting a point', hi: 'इसके अतिरिक्त / साथ ही', es: 'además / adicionalmente', fr: 'en plus / de surcroît', de: 'zusätzlich / außerdem', pt: 'além disso / em adição', zh: '此外 / 另外', ar: 'بالإضافة إلى ذلك', ja: '加えて / さらに', ru: 'в дополнение / кроме того', ex: 'In addition to lectures, students must attend weekly lab sessions.', exHi: 'व्याख्यानों के अतिरिक्त, छात्रों को साप्ताहिक प्रयोगशाला सत्रों में भाग लेना चाहिए।', exEs: 'Además de las clases magistrales, los estudiantes deben asistir a laboratorios semanales.', ic: '➕' },
    { w: 'structure', p: '/ˈstrʌktʃər/', m: 'the arrangement of and relations between the parts of a text', hi: 'संरचना / बनावट', es: 'estructura / organización', fr: 'structure / organisation', de: 'Struktur / Aufbau', pt: 'estrutura', zh: '结构 / 组织', ar: 'هيكل / بناء', ja: '構造 / 構成', ru: 'структура / построение', ex: 'Good essay structure makes your arguments persuasive and easy to follow.', exHi: 'निबंध की अच्छी संरचना आपके तर्कों को प्रेरक और समझने में आसान बनाती है।', exEs: 'Una buena estructura de ensayo hace que tus argumentos sean persuasivos y fáciles de seguir.', ic: '🏛️' },
    { w: 'connector', p: '/kəˈnektər/', m: 'a word that links clauses, sentences, or paragraphs logically', hi: 'संयोजक शब्द (Connector)', es: 'conector discursivo / enlace', fr: 'connecteur logique', de: 'Konnektor / Bindewort', pt: 'conector / conectivo', zh: '连接词 / 关联词', ar: 'رابط / أداة ربط', ja: '接続詞 / つなぎ言葉', ru: 'связующее слово / коннектор', ex: 'Use transitional connectors to guide the reader through your ideas.', exHi: 'पाठक को अपने विचारों के माध्यम से मार्गदर्शन करने के लिए जोड़ने वाले शब्दों का उपयोग करें।', exEs: 'Usa conectores de transición para guiar al lector a través de tus ideas.', ic: '🔗' },
    { w: 'topic sentence', p: '/ˈtɒpɪk ˈsentəns/', m: 'the first or main sentence that summarizes the paragraph\'s central idea', hi: 'मुख्य विषय वाक्य (Topic Sentence)', es: 'oración temática / idea principal', fr: 'phrase directrice / phrase clé', de: 'Themensatz / Leitgedanke', pt: 'tópico frasal / frase temática', zh: '主题句', ar: 'الجملة الرئيسية في الفقرة', ja: 'トピックセンテンス / 主題文', ru: 'тематическое предложение', ex: 'A strong topic sentence clearly states what the paragraph is about.', exHi: 'एक मजबूत विषय वाक्य स्पष्ट रूप से बताता है कि पैराग्राफ किस बारे में है।', exEs: 'Una oración temática sólida expresa claramente de qué trata el párrafo.', ic: '💡' },
    { w: 'supporting', p: '/səˈpɔːtɪŋ/', m: 'providing evidence, explanation, or examples to validate a point', hi: 'समर्थक / पुष्टिकारी', es: 'de apoyo / secundario', fr: 'de soutien / d\'appui', de: 'unterstützend / belegend', pt: 'de apoio / suporte', zh: '支持性的 / 辅助的', ar: 'داعم / مساند', ja: '裏付けとなる / 支持する', ru: 'поддерживающий / подтверждающий', ex: 'Write two supporting sentences with concrete facts.', exHi: 'ठोस तथ्यों के साथ दो सहायक वाक्य लिखें।', exEs: 'Escribe dos oraciones de apoyo con hechos concretos.', ic: '🧱' },
    { w: 'conclusion', p: '/kənˈkluːʒn/', m: 'the end or finish of an event, process, or text; summary', hi: 'निष्कर्ष / उपसंहार', es: 'conclusión / cierre', fr: 'conclusion', de: 'Schlussfolgerung / Fazit', pt: 'conclusão', zh: '结论 / 结尾', ar: 'خاتمة / استنتاج', ja: '結論 / 結び', ru: 'заключение / вывод', ex: 'In conclusion, regular study habits lead to academic success.', exHi: 'निष्कर्षतः, नियमित अध्ययन की आदतें शैक्षणिक सफलता की ओर ले जाती हैं।', exEs: 'En conclusión, los hábitos de estudio constantes conducen al éxito académico.', ic: '🏁' },
    { w: 'cohesive', p: '/kəʊˈhiːsɪv/', m: 'characterized by parts fitting together smoothly into a unified whole', hi: 'सुसंगत / आपस में जुड़ा हुआ', es: 'cohesivo / coherente', fr: 'cohésif / cohérent', de: 'zusammenhängend / kohäsiv', pt: 'coesivo / coerente', zh: '连贯的 / 有条理的', ar: 'متماسك / مترابط', ja: 'まとまりのある / 一貫した', ru: 'связный / целостный', ex: 'Linking words make your paragraph cohesive and pleasant to read.', exHi: 'जोड़ने वाले शब्द आपके पैराग्राफ को सुसंगत और पढ़ने में सुखद बनाते हैं।', exEs: 'Los conectores hacen que tu párrafo sea cohesivo y agradable de leer.', ic: '🧩' },
    { w: 'contrast', p: '/ˈkɒntrɑːst/', m: 'the state of comparing two things to show their differences', hi: 'तुलना / अंतर दिखाना', es: 'contraste / oposición', fr: 'contraste / opposition', de: 'Gegensatz / Kontrast', pt: 'contraste / oposição', zh: '对比 / 对照', ar: 'تناقض / تباين', ja: '対比 / コントラスト', ru: 'противопоставление', ex: 'Use "On the other hand" to show contrast between two ideas.', exHi: 'दो विचारों के बीच अंतर दिखाने के लिए "On the other hand" का उपयोग करें।', exEs: 'Usa "On the other hand" para mostrar contraste entre dos ideas.', ic: '🌓' },
    { w: 'consequently', p: '/ˈkɒnsɪkwəntli/', m: 'as a result; therefore', hi: 'फलस्वरूप / नतीजतन', es: 'por consiguiente / en consecuencia', fr: 'par conséquent / en conséquence', de: 'infolgedessen / folglich', pt: 'consequentemente', zh: '结果 / 因此', ar: 'نتيجة لذلك / بالتالي', ja: 'その結果 / 従って', ru: 'следовательно / как следствие', ex: 'He missed the deadline; consequently, his mark was deducted.', exHi: 'उसने समय सीमा गंवा दी; नतीजतन, उसके अंक काट लिए गए।', exEs: 'No cumplió con el plazo; por consiguiente, se le descontó nota.', ic: '📉' },
    { w: 'overall', p: '/ˌəʊvərˈɔːl/', m: 'taking everything into account; in general', hi: 'कुल मिलाकर / समग्र रूप से', es: 'en general / en conjunto', fr: 'dans l\'ensemble / globalement', de: 'insgesamt / im Großen und Ganzen', pt: 'no geral / em geral', zh: '总体上 / 大体来说', ar: 'بشكل عام / إجمالاً', ja: '全体として / 総じて', ru: 'в целом / в общем', ex: 'Overall, the research project was a great success.', exHi: 'कुल मिलाकर, शोध परियोजना एक बड़ी सफलता थी।', exEs: 'En general, el proyecto de investigación fue un gran éxito.', ic: '🌐' },
    { w: 'illustrate', p: '/ˈɪləstreɪt/', m: 'to explain or make something clear by using examples or charts', hi: 'उदाहरण देकर स्पष्ट करना', es: 'ilustrar / ejemplificar', fr: 'illustrer / donner un exemple', de: 'veranschaulichen / verdeutlichen', pt: 'ilustrar / exemplificar', zh: '举例说明 / 阐明', ar: 'يوضح بأمثلة', ja: '例示する / 説明する', ru: 'иллюстрировать / пояснять примером', ex: 'To illustrate this point, consider the following statistical chart.', exHi: 'इस बिंदु को स्पष्ट करने के लिए, निम्नलिखित सांख्यिकीय चार्ट पर विचार करें।', exEs: 'Para ilustrar este punto, considere la siguiente tabla estadística.', ic: '📊' }
  ],
  chunks: [
    { phrase: 'for example', meaning: 'introducing a specific illustration of a broader claim', hi: 'उदाहरण के लिए (For example)', es: 'por ejemplo', fr: 'par exemple', de: 'zum Beispiel', pt: 'por exemplo', zh: '例如', ar: 'على سبيل المثال', ja: '例えば', note: 'Example: "Many cities offer bike-sharing schemes; for example, London has Santander Cycles."', ic: '🚲' },
    { phrase: 'on the other hand', meaning: 'introducing a contrasting perspective or counter-argument', hi: 'दूसरी ओर (On the other hand)', es: 'por otro lado / por otra parte', fr: 'd\'autre part / en revanche', de: 'andererseits / auf der anderen Seite', pt: 'por outro lado', zh: '另一方面', ar: 'من ناحية أخرى', ja: 'その一方で / 他方では', note: 'Contrast: "Public transport is eco-friendly; on the other hand, it can be crowded."', ic: '🌓' },
    { phrase: 'as a result', meaning: 'showing the outcome or consequence of a situation', hi: 'इसके परिणामस्वरूप (As a result)', es: 'como resultado / en consecuencia', fr: 'en conséquence / comme résultat', de: 'als Ergebnis / infolgedessen', pt: 'como resultado / em consequência', zh: '结果是 / 因此', ar: 'نتيجة لذلك', ja: 'その結果として', note: 'Cause & effect: "She revised consistently; as a result, she earned top marks."', ic: '🏆' },
    { phrase: 'in conclusion', meaning: 'standard formal transition to introduce the final summary', hi: 'निष्कर्ष के रूप में (In conclusion)', es: 'en conclusión / para concluir', fr: 'en conclusion / pour conclure', de: 'zusammenfassend / zum Schluss', pt: 'em conclusão / para concluir', zh: '总而言之 / 结语', ar: 'في الختام / ختاماً', ja: '結論として', note: 'Summary: "In conclusion, online education offers flexibility and autonomy."', ic: '🏁' },
    { phrase: 'first of all', meaning: 'introducing the first of several points or reasons', hi: 'सबसे पहले (First of all)', es: 'en primer lugar / antes que nada', fr: 'tout d\'abord / premièrement', de: 'erstens / zuallererst', pt: 'em primeiro lugar / antes de tudo', zh: '首先', ar: 'أولاً وقبل كل شيء', ja: 'まず第一に', note: 'Sequence: "First of all, breakfast provides energy for the entire morning."', ic: '1️⃣' },
    { phrase: 'in addition to', meaning: 'linking extra nouns or gerunds to a main sentence', hi: 'के अतिरिक्त (In addition to)', es: 'además de', fr: 'en plus de', de: 'neben / zusätzlich zu', pt: 'além de', zh: '除了...之外', ar: 'بالإضافة إلى', ja: '〜に加えて', note: 'Prepositional link: "In addition to studying, he works part-time."', ic: '💼' }
  ],
  grammar: {
    title: 'Paragraph Anatomy & Transition Linking Punctuation',
    concept: 'Standard paragraph structure: Topic sentence -> Supporting details -> Concluding sentence, and punctuation rules for connectors (However, / Furthermore, / Therefore,).',
    patterns: [
      {
        title: 'Paragraph Anatomy (3-Part Structure)',
        structure: '1. Topic Sentence -> 2. Supporting Sentences (with Connectors) -> 3. Concluding Sentence',
        rule: 'Every paragraph must have one unified focus with logical transitions.',
        examples: [
          { en: 'Living on campus offers multiple advantages. First of all, students are within walking distance of lecture halls and the library. Furthermore, it is easier to make friends and participate in social events. In conclusion, campus accommodation enhances both academic and social life.', hi: 'परिसर में रहने के कई फायदे हैं। सबसे पहले, छात्र व्याख्यान कक्षों और पुस्तकालय से पैदल दूरी पर हैं। इसके अलावा, दोस्त बनाना आसान है। निष्कर्षतः, परिसर आवास दोनों को बेहतर बनाता है।', es: 'Vivir en el campus ofrece múltiples ventajas. En primer lugar, los estudiantes están a poca distancia a pie de las aulas y la biblioteca. Además, es más fácil hacer amigos. En conclusión, el alojamiento en el campus mejora la vida académica y social.' }
        ]
      },
      {
        title: 'Connector Punctuation (Sentence Starters)',
        structure: '[Sentence 1]. [Furthermore / However / Therefore], [Sentence 2].',
        rule: 'When transitional adverbs start a sentence, they are immediately followed by a comma.',
        examples: [
          { en: 'She was tired. However, she finished her essay before midnight.', hi: 'वह थकी हुई थी। हालाँकि, उसने आधी रात से पहले अपना निबंध पूरा कर लिया।', es: 'Estaba cansada. Sin embargo, terminó su ensayo antes de medianoche.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'She studied hard however she failed.',
      cor: 'She studied hard; however, she failed. (or: She studied hard. However, she failed.)',
      exp: '"However" cannot link two independent clauses with just a space or comma. Use a semicolon or start a new sentence with a comma after "However,".',
      hi: '"However" के बाद अल्पविराम (comma) का प्रयोग करें: "However, she failed".',
      es: '"However" al inicio de oración requiere coma: "However, she failed".'
    },
    {
      inc: 'In conclusion of, exercise is healthy.',
      cor: 'In conclusion, exercise is healthy.',
      exp: 'Say "In conclusion," (with a comma), not "In conclusion of".',
      hi: '"In conclusion," कहें, "In conclusion of" नहीं।',
      es: 'Diga "In conclusion,", no "In conclusion of".'
    }
  ],
  dialogues: [
    {
      title: 'Reviewing an Essay Draft in a Writing Workshop',
      context: 'Zack is asking the writing center tutor, Nina, for feedback on his paragraph transitions.',
      charA: { name: 'Zack', av: '👨', role: 'Student' },
      charB: { name: 'Nina', av: '👩‍🏫', role: 'Writing Tutor' },
      turns: [
        { spk: 'Zack', text: 'Hi Nina! Could you review this paragraph about public transportation?', hi: 'नमस्ते नीना! क्या आप सार्वजनिक परिवहन के बारे में इस पैराग्राफ की समीक्षा कर सकती हैं?', es: '¡Hola Nina! ¿Podrías revisar este párrafo sobre el transporte público?' },
        { spk: 'Nina', text: 'Of course, Zack. Your topic sentence is very clear! But look at sentences three and four—they feel slightly disconnected.', hi: 'बिल्कुल, ज़ैक। आपका विषय वाक्य बहुत स्पष्ट है! लेकिन तीसरे और चौथे वाक्य थोड़े असंबद्ध लगते हैं।', es: 'Por supuesto, Zack. ¡Tu oración temática es muy clara! Pero las oraciones tres y cuatro se sienten un poco desconectadas.' },
        { spk: 'Zack', text: 'What should I add to connect them more smoothly?', hi: 'उन्हें अधिक सुचारू रूप से जोड़ने के लिए मुझे क्या जोड़ना चाहिए?', es: '¿Qué debería agregar para conectarlas mejor?' },
        { spk: 'Nina', text: 'You can use a transition connector like "Furthermore," to add your second point, and "Therefore," before the conclusion.', hi: 'आप अपना दूसरा बिंदु जोड़ने के लिए "Furthermore," और निष्कर्ष से पहले "Therefore," जैसे कनेक्टर का उपयोग कर सकते हैं।', es: 'Puedes usar un conector como "Furthermore," para agregar tu segundo punto, y "Therefore," antes de la conclusión.' },
        { spk: 'Zack', text: 'That makes total sense. That will make the whole paragraph much more cohesive.', hi: 'यह बिल्कुल सही है। इससे पूरा पैराग्राफ बहुत अधिक सुसंगत हो जाएगा।', es: 'Tiene todo el sentido. Eso hará que todo el párrafo sea mucho más cohesivo.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_205_p1',
      type: 'multiple_choice',
      prompt: 'What is the primary role of a "topic sentence" in a paragraph?',
      options: [
        { id: '1', text: 'To clearly state the central idea or main argument of the paragraph', isCorrect: true },
        { id: '2', text: 'To list thirty random vocabulary words', isCorrect: false },
        { id: '3', text: 'To ask the reader for money', isCorrect: false },
        { id: '4', text: 'To conclude the entire book', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_p2',
      type: 'fill_blank',
      prompt: 'Complete with the appropriate addition connector:',
      sourceSentence: 'The library offers free Wi-Fi. ____, it has private study rooms for students.',
      targetSentence: 'The library offers free Wi-Fi. Furthermore, it has private study rooms for students.',
      blankIndex: 5,
      options: [
        { id: '1', text: 'Furthermore', isCorrect: true },
        { id: '2', text: 'However', isCorrect: false },
        { id: '3', text: 'Neither', isCorrect: false },
        { id: '4', text: 'Nor', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_p3',
      type: 'translate_tiles',
      prompt: 'Translate to English: उसने बहुत मेहनत की; हालाँकि, वह परीक्षा पास नहीं कर सका।',
      sourceSentence: 'Estudió mucho; sin embargo, no pudo aprobar el examen.',
      targetSentence: 'He studied hard However he couldn\'t pass the exam',
      wordBank: ['He', 'studied', 'hard', 'However', 'he', 'couldn\'t', 'pass', 'the', 'exam', 'cram']
    },
    {
      id: 'ex_205_p4',
      type: 'word_order',
      prompt: 'Arrange into a concluding sentence:',
      targetSentence: 'In conclusion regular exercise improves mental health',
      wordBank: ['In', 'conclusion', 'regular', 'exercise', 'improves', 'mental', 'health']
    },
    {
      id: 'ex_205_p5',
      type: 'error_correction',
      prompt: 'Fix the connector punctuation error:',
      sentence: 'He was late Therefore he missed the train.',
      correctSentence: 'He was late. Therefore, he missed the train.',
      errorSentence: 'He was late Therefore he missed the train.',
      explanation: '"Therefore" needs punctuation: a period before and a comma after when starting a sentence.'
    },
    {
      id: 'ex_205_p6',
      type: 'match_pairs',
      prompt: 'Match linking words with their logical functions:',
      options: [
        { id: 'm1', text: 'Furthermore / In addition → Adding extra supporting information' },
        { id: 'm2', text: 'However / On the other hand → Introducing contrast or counterpoints' },
        { id: 'm3', text: 'Therefore / As a result → Showing causes and consequences' },
        { id: 'm4', text: 'In conclusion / Overall → Summarizing key findings' }
      ]
    },
    {
      id: 'ex_205_p7',
      type: 'listening',
      prompt: 'Listen to the writing instructor explain paragraph structure:',
      audioText: 'Every good academic paragraph resembles a burger: the top bun is the topic sentence, the filling contains supporting details with connectors, and the bottom bun is the concluding sentence.',
      options: [
        { id: '1', text: 'Paragraphs need a topic sentence, supporting details, and a conclusion', isCorrect: true },
        { id: '2', text: 'Paragraphs should only be written about hamburgers', isCorrect: false },
        { id: '3', text: 'Never use concluding sentences in essays', isCorrect: false },
        { id: '4', text: 'Supporting details are not necessary', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_p8',
      type: 'speak_sentence',
      prompt: 'Speak this transitional sentence clearly:',
      targetSentence: 'Furthermore, regular revision prevents last-minute exam stress.',
      audioText: 'Furthermore, regular revision prevents last-minute exam stress.'
    },
    {
      id: 'ex_205_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the best connector to complete the argument:',
      context: 'Writer: "Cycling to work saves money on petrol. ____, it provides healthy cardiovascular exercise."' ,
      options: [
        { id: '1', text: 'In addition', isCorrect: true },
        { id: '2', text: 'However', isCorrect: false },
        { id: '3', text: 'Neither', isCorrect: false },
        { id: '4', text: 'Instead', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_p10',
      type: 'reading_comprehension',
      prompt: 'Short Paragraph: "Learning a second language provides significant cognitive benefits. Research shows bilingual individuals have better memory and multitasking abilities. Furthermore, it delays the onset of dementia in older adults. In conclusion, language learning protects long-term brain health." What is the main idea of this paragraph?',
      options: [
        { id: '1', text: 'Learning a second language provides substantial cognitive and brain health benefits', isCorrect: true },
        { id: '2', text: 'Older adults should not learn languages', isCorrect: false },
        { id: '3', text: 'Bilingual people only work in restaurants', isCorrect: false },
        { id: '4', text: 'Dementia has no connection to the brain', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_p11',
      type: 'fill_blank',
      prompt: 'Complete with the result connector:',
      sourceSentence: 'The storm damaged the power lines; ____, classes were cancelled.',
      targetSentence: 'The storm damaged the power lines; consequently, classes were cancelled.',
      blankIndex: 6,
      options: [
        { id: '1', text: 'consequently', isCorrect: true },
        { id: '2', text: 'furthermore', isCorrect: false },
        { id: '3', text: 'however', isCorrect: false },
        { id: '4', text: 'in addition', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_p12',
      type: 'translate_tiles',
      prompt: 'Translate to English: इसके अतिरिक्त, छात्र ऑनलाइन संसाधनों का उपयोग कर सकते हैं।',
      sourceSentence: 'Además, los estudiantes pueden acceder a recursos en línea.',
      targetSentence: 'In addition students can access online resources',
      wordBank: ['In', 'addition', 'students', 'can', 'access', 'online', 'resources', 'fail']
    },
    {
      id: 'ex_205_p13',
      type: 'multiple_choice',
      prompt: 'Which connector is best to introduce an opposite opinion?',
      options: [
        { id: '1', text: 'On the other hand, ...', isCorrect: true },
        { id: '2', text: 'Furthermore, ...', isCorrect: false },
        { id: '3', text: 'In addition, ...', isCorrect: false },
        { id: '4', text: 'Therefore, ...', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_p14',
      type: 'dictation',
      prompt: 'Listen and transcribe the concluding statement:',
      audioText: 'In conclusion, good time management is essential for academic success.',
      targetSentence: 'In conclusion, good time management is essential for academic success.'
    },
    {
      id: 'ex_205_p15',
      type: 'speaking',
      prompt: 'Practice reading this paragraph transition:',
      targetSentence: 'Public libraries offer books and quiet desks. Furthermore, they organize free community workshops.'
    },
    {
      id: 'ex_205_p16',
      type: 'word_order',
      prompt: 'Arrange into a cause-and-effect sentence:',
      targetSentence: 'She practiced speaking daily therefore her score improved',
      wordBank: ['She', 'practiced', 'speaking', 'daily', 'therefore', 'her', 'score', 'improved']
    },
    {
      id: 'ex_205_p17',
      type: 'fill_blank',
      prompt: 'Select the missing preposition in the transition:',
      sourceSentence: '____ the other hand, driving a car can be expensive.',
      targetSentence: 'On the other hand, driving a car can be expensive.',
      blankIndex: 0,
      options: [
        { id: '1', text: 'On', isCorrect: true },
        { id: '2', text: 'In', isCorrect: false },
        { id: '3', text: 'At', isCorrect: false },
        { id: '4', text: 'With', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_p18',
      type: 'error_correction',
      prompt: 'Fix the error in the concluding phrase:',
      sentence: 'To summarize up, daily revision helps memory.',
      correctSentence: 'To summarize, daily revision helps memory.',
      errorSentence: 'To summarize up, daily revision helps memory.',
      explanation: 'Use "To summarize," or "To sum up,", not "To summarize up".'
    },
    {
      id: 'ex_205_p19',
      type: 'multiple_choice',
      prompt: 'Why are linking words important in writing?',
      options: [
        { id: '1', text: 'They create logical flow, connect ideas smoothly, and make paragraphs cohesive', isCorrect: true },
        { id: '2', text: 'They make essays as long as possible without meaning', isCorrect: false },
        { id: '3', text: 'They replace all nouns and verbs in English', isCorrect: false },
        { id: '4', text: 'They are only used in poetry', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_p20',
      type: 'translate_tiles',
      prompt: 'Translate to English: परिणामतः, उसने छात्रवृत्ति जीत ली।',
      sourceSentence: 'Como resultado, ella ganó la beca.',
      targetSentence: 'As a result she won the scholarship',
      wordBank: ['As', 'a', 'result', 'she', 'won', 'the', 'scholarship', 'fail', 'cram']
    }
  ],
  review: [
    {
      id: 'ex_205_r1',
      type: 'multiple_choice',
      prompt: 'Spaced Retrieval: Which verb form follows "Would you mind"?',
      options: [
        { id: '1', text: 'The gerund (-ing form)', isCorrect: true },
        { id: '2', text: 'The infinitive with to', isCorrect: false },
        { id: '3', text: 'The past participle', isCorrect: false },
        { id: '4', text: 'The base verb alone', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_r2',
      type: 'fill_blank',
      prompt: 'Spaced Retrieval: Complete the polite indirect request:',
      sourceSentence: 'I was ____ if you could lend me your notes.',
      targetSentence: 'I was wondering if you could lend me your notes.',
      blankIndex: 2,
      options: [
        { id: '1', text: 'wondering', isCorrect: true },
        { id: '2', text: 'wonder', isCorrect: false },
        { id: '3', text: 'wondered', isCorrect: false },
        { id: '4', text: 'wonders', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_r3',
      type: 'translate_tiles',
      prompt: 'Translate to English: कुल मिलाकर, परिणाम बहुत सकारात्मक थे।',
      sourceSentence: 'En general, los resultados fueron muy positivos.',
      targetSentence: 'Overall the results were very positive',
      wordBank: ['Overall', 'the', 'results', 'were', 'very', 'positive', 'fail', 'cram']
    },
    {
      id: 'ex_205_r4',
      type: 'word_order',
      prompt: 'Arrange into an example sentence:',
      targetSentence: 'For example many students study in the library',
      wordBank: ['For', 'example', 'many', 'students', 'study', 'in', 'the', 'library']
    },
    {
      id: 'ex_205_r5',
      type: 'listening',
      prompt: 'Listen to the writing advice:',
      audioText: 'Always include a concluding sentence at the end of each body paragraph to reinforce your main point before moving to the next topic.',
      options: [
        { id: '1', text: 'Include a concluding sentence to reinforce the main point before the next topic', isCorrect: true },
        { id: '2', text: 'Never write more than one paragraph in an essay', isCorrect: false },
        { id: '3', text: 'Delete the topic sentence immediately', isCorrect: false },
        { id: '4', text: 'Conclusions are only used in novels', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_r6',
      type: 'speak_sentence',
      prompt: 'Speak this cohesive sentence clearly:',
      targetSentence: 'In addition to classroom lectures, practical workshops build valuable skills.',
      audioText: 'In addition to classroom lectures, practical workshops build valuable skills.'
    },
    {
      id: 'ex_205_r7',
      type: 'error_correction',
      prompt: 'Fix the error in the sentence:',
      sentence: 'He didn\'t study. Therefore he failed.',
      correctSentence: 'He didn\'t study. Therefore, he failed.',
      errorSentence: 'He didn\'t study. Therefore he failed.',
      explanation: 'Place a comma after the transition word "Therefore,".'
    },
    {
      id: 'ex_205_r8',
      type: 'match_pairs',
      prompt: 'Match transition words with their synonyms:',
      options: [
        { id: 'm1', text: 'Furthermore ↔ In addition' },
        { id: 'm2', text: 'However ↔ Nevertheless' },
        { id: 'm3', text: 'Therefore ↔ Consequently' },
        { id: 'm4', text: 'In conclusion ↔ To sum up' }
      ]
    },
    {
      id: 'ex_205_r9',
      type: 'fill_blank',
      prompt: 'Select the missing connector word:',
      sourceSentence: 'The weather was terrible. ____, the flight was delayed by two hours.',
      targetSentence: 'The weather was terrible. As a result, the flight was delayed by two hours.',
      blankIndex: 4,
      options: [
        { id: '1', text: 'As a result', isCorrect: true },
        { id: '2', text: 'However', isCorrect: false },
        { id: '3', text: 'Neither', isCorrect: false },
        { id: '4', text: 'On the other hand', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_r10',
      type: 'translate_tiles',
      prompt: 'Translate to English: संक्षेप में, दैनिक पढ़ना शब्दावली में सुधार करता है।',
      sourceSentence: 'En resumen, la lectura diaria mejora el vocabulario.',
      targetSentence: 'In summary daily reading improves vocabulary',
      wordBank: ['In', 'summary', 'daily', 'reading', 'improves', 'vocabulary', 'fail']
    }
  ],
  assessment: [
    {
      id: 'ex_205_a1',
      type: 'reading_comprehension',
      prompt: 'Paragraph Analysis: "Online language learning platforms offer remarkable convenience. Learners can study at their own pace from anywhere with an internet connection. Furthermore, interactive apps provide instant feedback on pronunciation and grammar. However, they may lack the spontaneous conversational practice of real-life classrooms. Overall, digital tools are an effective and flexible supplement to traditional language education." Which sentence introduces a limitation or contrast?',
      options: [
        { id: '1', text: '"However, they may lack the spontaneous conversational practice of real-life classrooms."', isCorrect: true },
        { id: '2', text: '"Online language learning platforms offer remarkable convenience."', isCorrect: false },
        { id: '3', text: '"Learners can study at their own pace from anywhere."', isCorrect: false },
        { id: '4', text: '"Furthermore, interactive apps provide instant feedback."', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_a2',
      type: 'mediation',
      prompt: 'A fellow student writes an essay paragraph where every sentence starts with "And" or "Also". Explain how they can elevate their academic writing using 3 more sophisticated transition connectors.',
      options: [
        { id: '1', text: 'Replace repetitive "And/Also" with formal academic connectors: 1) "Furthermore," or "In addition," for adding points, 2) "However," for contrasts, and 3) "Therefore," or "As a result," for showing outcomes.', isCorrect: true },
        { id: '2', text: 'Tell them that academic writing should have zero connectors.', isCorrect: false },
        { id: '3', text: 'Advise them to replace every word with emojis.', isCorrect: false },
        { id: '4', text: 'Tell them to write in all capital letters.', isCorrect: false }
      ],
      explanation: 'True mediation guides peer writing skills constructively.'
    },
    {
      id: 'ex_205_a3',
      type: 'fill_blank',
      prompt: 'Complete the transitional sentence:',
      sourceSentence: 'The train was fully booked. ____, we decided to take the express coach.',
      targetSentence: 'The train was fully booked. Therefore, we decided to take the express coach.',
      blankIndex: 5,
      options: [
        { id: '1', text: 'Therefore', isCorrect: true },
        { id: '2', text: 'Furthermore', isCorrect: false },
        { id: '3', text: 'In addition', isCorrect: false },
        { id: '4', text: 'Neither', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_a4',
      type: 'writing_prompt',
      prompt: 'Write a well-structured 4-sentence paragraph about the benefits of walking to university/work. Include a topic sentence, at least two connectors (e.g. Furthermore, Therefore), and a concluding sentence.',
      targetSentence: 'Walking to university every morning provides several important benefits. First of all, it gives you fresh air and healthy physical exercise before class begins. Furthermore, walking saves money on bus fares and avoids traffic delays. In conclusion, walking is an economical and energizing way to start your day.'
    },
    {
      id: 'ex_205_a5',
      type: 'speaking',
      prompt: 'Read this concluding argument aloud with confident emphasis: "In conclusion, time management, consistent revision, and adequate rest are the three keys to academic excellence."',
      targetSentence: 'In conclusion, time management, consistent revision, and adequate rest are the three keys to academic excellence.'
    },
    {
      id: 'ex_205_a6',
      type: 'dictation',
      prompt: 'Listen and transcribe the academic paragraph transition:',
      audioText: 'Furthermore, participating in group discussions builds confidence in public speaking.',
      targetSentence: 'Furthermore, participating in group discussions builds confidence in public speaking.'
    },
    {
      id: 'ex_205_a7',
      type: 'multiple_choice',
      prompt: 'Which transition correctly begins a summary sentence?',
      options: [
        { id: '1', text: 'In conclusion, ...', isCorrect: true },
        { id: '2', text: 'For example, ...', isCorrect: false },
        { id: '3', text: 'However, ...', isCorrect: false },
        { id: '4', text: 'Neither do I, ...', isCorrect: false }
      ]
    },
    {
      id: 'ex_205_a8',
      type: 'translate_tiles',
      prompt: 'Translate to English: इसलिए, नियमित अभ्यास भाषा सीखने के लिए आवश्यक है।',
      sourceSentence: 'Por lo tanto, la práctica regular es esencial para el aprendizaje de idiomas.',
      targetSentence: 'Therefore regular practice is essential for language learning',
      wordBank: ['Therefore', 'regular', 'practice', 'is', 'essential', 'for', 'language', 'learning', 'fail']
    },
    {
      id: 'ex_205_a9',
      type: 'error_correction',
      prompt: 'Fix the connector spelling and comma error:',
      sentence: 'Furthemore he submitted the paper on time.',
      correctSentence: 'Furthermore, he submitted the paper on time.',
      errorSentence: 'Furthemore he submitted the paper on time.',
      explanation: 'Correct spelling is "Furthermore," followed by a comma.'
    },
    {
      id: 'ex_205_a10',
      type: 'dialogue_completion',
      prompt: 'Choose the best phrase to conclude the written recommendation:',
      context: 'Review: "The campus gym has modern equipment and affordable student memberships."' ,
      options: [
        { id: '1', text: 'Overall, it is an excellent facility for maintaining physical fitness.', isCorrect: true },
        { id: '2', text: 'Neither did I yesterday.', isCorrect: false },
        { id: '3', text: 'I don\'t want soup.', isCorrect: false },
        { id: '4', text: 'Where is the postal worker?', isCorrect: false }
      ]
    }
  ]
};

console.log("Generating Lessons 203, 204, 205...");
saveUnit14Lesson(buildDetailedLessonA2_Unit14(LESSON_203));
saveUnit14Lesson(buildDetailedLessonA2_Unit14(LESSON_204));
saveUnit14Lesson(buildDetailedLessonA2_Unit14(LESSON_205));
