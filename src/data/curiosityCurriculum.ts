import { CourseUnit, CEFRLevel, Exercise, InteractiveStory, NativeLanguageCode } from '../types';

export const CURIOSITY_UNITS: CourseUnit[] = [
  // ==========================================
  // CEFR A1 - STAGE 1: FOUNDATIONS (UNITS 1 - 3)
  // ==========================================
  {
    id: 'unit_a1_1',
    unitNumber: 1,
    title: 'Unit 1: First Words & Essential Greetings',
    description: 'Master basic hellos, introducing yourself, and saying goodbye.',
    cefr: 'A1',
    colorTheme: 'emerald',
    guidebook: {
      title: 'A1 Basics Guidebook: Present Tense of "To Be"',
      keyGrammarRule: 'In English, "To Be" changes based on the subject: I am, You are, He/She/It is, We are, They are.',
      rulesByLang: {
        hi: 'अंग्रेज़ी में "To Be" (होना) क्रिया कर्ता के अनुसार बदलती है: I am (मैं हूँ), You are (तुम हो), He/She is (वह है)।',
        es: 'En inglés, el verbo "To Be" cambia según el sujeto: I am (yo soy/estoy), You are (tú eres/estás), He/She is (él/ella es/está).',
        fr: 'En anglais, le verbe "To Be" varie selon le sujet : I am (je suis), You are (tu es), He/She is (il/elle est).',
        de: 'Im Englischen ändert sich das Verb "To Be" je nach Subjekt: I am (ich bin), You are (du bist), He/She is (er/sie ist).',
        pt: 'Em inglês, o verbo "To Be" muda conforme o sujeito: I am (eu sou/estou), You are (você é/está).',
        zh: '在英语中，“To Be”动词随主语变化：I am（我是），You are（你是），He/She is（他/ me是）。',
        ar: 'في اللغة الإنجليزية، يتغير فعل "To Be" حسب الفاعل: I am، You are، He/She is.',
        ja: '英語の be 動詞は主語によって変化します：I am、You are、He/She is。',
        ru: 'В английском языке глагол "To Be" изменяется по лицам: I am, You are, He/She is.'
      },
      examples: [
        {
          english: 'I am Sarah.',
          translation: 'Yo soy Sarah.',
          translationsByLang: {
            hi: 'मैं सारा हूँ।',
            es: 'Yo soy Sarah.',
            fr: 'Je suis Sarah.',
            de: 'Ich bin Sarah.',
            pt: 'Eu sou a Sarah.',
            zh: '我是萨拉。',
            ar: 'أنا سارة.',
            ja: '私はサラです。',
            ru: 'Я Сара.'
          },
          explanation: 'Use "I am" for personal names and identities.'
        },
        {
          english: 'You are welcome.',
          translation: 'De nada.',
          translationsByLang: {
            hi: 'आपका स्वागत है। / कोई बात नहीं।',
            es: 'De nada.',
            fr: 'De rien.',
            de: 'Bitte schön.',
            pt: 'De nada.',
            zh: '不客气。',
            ar: 'на على الرحب والسعة.',
            ja: 'どういたしまして。',
            ru: 'Пожалуйста / Не за что.'
          },
          explanation: 'Standard polite response to "Thank you".'
        },
        {
          english: 'How are you?',
          translation: '¿Cómo estás?',
          translationsByLang: {
            hi: 'आप कैसे हैं?',
            es: '¿Cómo estás?',
            fr: 'Comment allez-vous ?',
            de: 'Wie geht es dir?',
            pt: 'Como você está?',
            zh: '你好吗？',
            ar: 'كيف حالك؟',
            ja: 'お元気ですか？',
            ru: 'Как дела?'
          },
          explanation: 'Common informal and formal greeting question.'
        }
      ]
    },
    lessons: [
      {
        id: 'lesson_a1_1_1',
        unitId: 'unit_a1_1',
        title: 'Basic Greetings',
        description: 'Hello, Goodbye, Please & Thank you',
        icon: '👋',
        cefr: 'A1',
        totalSteps: 5,
        xpReward: 15,
        exercises: [
          {
            id: 'ex_a1_1_1',
            type: 'picture_choice',
            prompt: 'Which of these means "Hello"?',
            targetSentence: 'Hello',
            options: [
              { id: 'opt1', text: 'Hello', imageEmoji: '👋', isCorrect: true },
              { id: 'opt2', text: 'Goodbye', imageEmoji: '🚶', isCorrect: false },
              { id: 'opt3', text: 'Water', imageEmoji: '💧', isCorrect: false },
              { id: 'opt4', text: 'Apple', imageEmoji: '🍎', isCorrect: false }
            ]
          },
          {
            id: 'ex_a1_1_2',
            type: 'translate_tiles',
            prompt: 'Translate this sentence into English:',
            sourceSentence: 'Hola, mi nombre es John.',
            sourceTranslations: {
              hi: 'नमस्ते, मेरा नाम जॉन है।',
              es: 'Hola, mi nombre es John.',
              fr: 'Bonjour, mon nom est John.',
              de: 'Hallo, mein Name ist John.',
              pt: 'Olá, meu nome é John.',
              zh: '你好，我的名字叫约翰。',
              ar: 'مرحبا، اسمي جون.',
              ja: 'こんにちは、私の名前はジョンです。',
              ru: 'Здравствуйте, меня зовут Джон.'
            },
            targetSentence: 'Hello my name is John',
            wordBank: ['Hello', 'my', 'name', 'is', 'John', 'Goodbye', 'apple', 'she']
          },
          {
            id: 'ex_a1_1_3',
            type: 'listen_type',
            prompt: 'Listen and arrange what you hear:',
            audioText: 'Good morning, how are you?',
            targetSentence: 'Good morning how are you',
            wordBank: ['Good', 'morning', 'how', 'are', 'you', 'night', 'yes', 'no']
          },
          {
            id: 'ex_a1_1_4',
            type: 'fill_blank',
            prompt: 'Complete the greeting sentence:',
            sourceSentence: 'Nice to ____ you!',
            targetSentence: 'Nice to meet you!',
            blankIndex: 2,
            options: [
              { id: '1', text: 'meet', isCorrect: true },
              { id: '2', text: 'eat', isCorrect: false },
              { id: '3', text: 'see', isCorrect: false },
              { id: '4', text: 'drink', isCorrect: false }
            ],
            explanation: '"Nice to meet you" is standard when introduced to someone for the first time.'
          },
          {
            id: 'ex_a1_1_5',
            type: 'speak_sentence',
            prompt: 'Speak this sentence out loud into your microphone:',
            targetSentence: 'Thank you very much, goodbye!',
            audioText: 'Thank you very much, goodbye!'
          }
        ]
      },
      {
        id: 'lesson_a1_1_2',
        unitId: 'unit_a1_1',
        title: 'Introductions & Origin',
        description: 'Asking where someone is from and stating nationality',
        icon: '🏷️',
        cefr: 'A1',
        totalSteps: 5,
        xpReward: 15,
        exercises: [
          {
            id: 'ex_a1_1_6',
            type: 'translate_tiles',
            prompt: 'Translate into English:',
            sourceSentence: '¿De dónde eres tú?',
            sourceTranslations: {
              hi: 'आप कहाँ से हैं?',
              es: '¿De dónde eres tú?',
              fr: 'D\'où venez-vous ?',
              de: 'Woher kommst du?',
              pt: 'De onde você é?',
              zh: '你来自哪里？',
              ar: 'من أين أنت؟',
              ja: 'どちらのご出身ですか？',
              ru: 'Откуда вы?'
            },
            targetSentence: 'Where are you from',
            wordBank: ['Where', 'are', 'you', 'from', 'what', 'is', 'your', 'name']
          },
          {
            id: 'ex_a1_1_7',
            type: 'match_pairs',
            prompt: 'Match English vocabulary with meanings:',
            options: [
              { id: 'p1', text: 'I am' },
              { id: 'p1_m', text: 'Yo soy / मैं हूँ' },
              { id: 'p2', text: 'Name' },
              { id: 'p2_m', text: 'Nombre / नाम' },
              { id: 'p3', text: 'Friend' },
              { id: 'p3_m', text: 'Amigo / मित्र' },
              { id: 'p4', text: 'Country' },
              { id: 'p4_m', text: 'País / देश' }
            ]
          },
          {
            id: 'ex_a1_1_8',
            type: 'fill_blank',
            prompt: 'Select the correct pronoun:',
            sourceSentence: '___ am a student from Canada.',
            targetSentence: 'I am a student from Canada.',
            options: [
              { id: 'o1', text: 'I', isCorrect: true },
              { id: 'o2', text: 'You', isCorrect: false },
              { id: 'o3', text: 'He', isCorrect: false },
              { id: 'o4', text: 'They', isCorrect: false }
            ]
          },
          {
            id: 'ex_a1_1_9',
            type: 'listen_type',
            prompt: 'Listen and assemble the sentence:',
            audioText: 'My name is Alex and I am pleased to meet you',
            targetSentence: 'My name is Alex and I am pleased to meet you',
            wordBank: ['My', 'name', 'is', 'Alex', 'and', 'I', 'am', 'pleased', 'to', 'meet', 'you']
          },
          {
            id: 'ex_a1_1_10',
            type: 'speak_sentence',
            prompt: 'Read this phrase into your mic:',
            targetSentence: 'I am glad to meet you today.',
            audioText: 'I am glad to meet you today.'
          }
        ]
      },
      {
        id: 'lesson_a1_1_3',
        unitId: 'unit_a1_1',
        title: 'Family Members & Possessives',
        description: 'Family relationships, possessive \'s and possessive adjectives',
        icon: '👨‍👩‍👧‍👦',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_1_4',
        unitId: 'unit_a1_1',
        title: 'Everyday Objects & Demonstratives',
        description: 'Personal items, plurals, This/That/These/Those and ownership',
        icon: '🎒',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_1_5',
        unitId: 'unit_a1_1',
        title: 'Numbers 0–100, Age, Time & Contact',
        description: 'Numbers 0-100, age with BE, phone/email and telling time',
        icon: '🔢',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_1_6',
        unitId: 'unit_a1_1',
        title: 'Colors, Clothing & Physical Appearance',
        description: 'Describing clothes, primary/secondary colors, and adjective placement',
        icon: '👔',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_1_7',
        unitId: 'unit_a1_1',
        title: 'Places in the City & Directions',
        description: 'City landmarks, prepositions of place, and There is/There are',
        icon: '🏙️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_1_8',
        unitId: 'unit_a1_1',
        title: 'Daily Routines & Present Simple (I / You / We / They)',
        description: 'Morning to night routines, base verbs, and habit expressions',
        icon: '⏰',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_1_9',
        unitId: 'unit_a1_1',
        title: 'Present Simple 3rd Person Singular (He / She / It)',
        description: 'Describing others, spelling rules for -s/-es/-ies, and pronunciation',
        icon: '👤',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_1_10',
        unitId: 'unit_a1_1',
        title: 'Days of the Week & Adverbs of Frequency',
        description: '7 weekdays, weekend habits, and frequency scale (always to never)',
        icon: '📅',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_1_11',
        unitId: 'unit_a1_1',
        title: 'Present Simple Negative (Don\'t / Doesn\'t)',
        description: 'Expressing non-habits, auxiliary negation, and base verb retention',
        icon: '🚫',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_1_12',
        unitId: 'unit_a1_1',
        title: 'Present Simple Questions & Short Answers (Do / Does)',
        description: 'Yes/No questions, short answers, and WH- open questions',
        icon: '❓',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_1_13',
        unitId: 'unit_a1_1',
        title: 'Food, Drinks & Ordering at a Café (Some / Any / A / An)',
        description: 'Food vocabulary, countable/uncountable nouns, and café ordering',
        icon: '☕',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_1_14',
        unitId: 'unit_a1_1',
        title: 'Hobbies, Preferences & Free Time (Like / Love / Hate + -ing)',
        description: 'Leisure activities, degrees of preference, and gerund structures',
        icon: '🎨',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_1_15',
        unitId: 'unit_a1_1',
        title: 'Abilities, Skills & Polite Requests (Can / Can\'t)',
        description: 'Modal verb can/can\'t for skills, permissions, and polite requests',
        icon: '⚡',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      }
    ]
  },

  {
    id: 'unit_a1_2',
    unitNumber: 2,
    title: 'Unit 2: Home, City Living, Routines & Expanding Horizons',
    description: 'Master spatial descriptions, food ordering, city navigation, hobbies, past states, and future intentions.',
    cefr: 'A1',
    colorTheme: 'amber',
    guidebook: {
      title: 'A1 Stage 2 Guidebook: Spatial Existence & Expanding Horizons',
      keyGrammarRule: 'Use "There is" for singular items and "There are" for plural items. Use "I would like" for polite ordering, and "be going to" for future intentions.',
      rulesByLang: {
        hi: 'एकवचन के लिए "There is" और बहुवचन के लिए "There are" का प्रयोग करें। विनम्रता से ऑर्डर करने के लिए "I would like" और भविष्य की योजनाओं के लिए "be going to" का उपयोग करें।',
        es: 'Usa "There is" para singular y "There are" para plural. Usa "I would like" para pedir cortésmente y "be going to" para planes futuros.',
        fr: 'Utilisez "There is" pour le singulier et "There are" pour le pluriel. Utilisez "I would like" pour commander poliment et "be going to" pour les projets futurs.',
        de: 'Verwenden Sie "There is" für Einzahl und "There are" für Mehrzahl. Verwenden Sie "I would like" zum höflichen Bestellen und "be going to" für Zukunftspläne.',
        pt: 'Use "There is" para o singular e "There are" para o plural. Use "I would like" para pedir educadamente e "be going to" para planos futuros.',
        zh: '单数使用“There is”，复数使用“There are”。点餐礼貌用语使用“I would like”，表达未来计划使用“be going to”。',
        ar: 'استخدم "There is" للمفرد و "There are" للجمع. استخدم "I would like" للطلب بأدب و "be going to" للخطط المستقبلية.',
        ja: '単数には "There is"、複数には "There are" を用います。丁寧な注文には "I would like"、未来の予定には "be going to" を使います。',
        ru: 'Используйте "There is" для единственного числа и "There are" для множественного. Для вежливых заказов — "I would like", а для планов на будущее — "be going to".'
      },
      examples: [
        {
          english: 'There is a bakery next to the bank.',
          translation: 'Hay una panadería al lado del banco.',
          translationsByLang: {
            hi: 'बैंक के बगल में एक बेकरी है।',
            es: 'Hay una panadería al lado del banco.',
            fr: 'Il y a une boulangerie à côté de la banque.',
            de: 'Neben der Bank gibt es eine Bäckerei.',
            pt: 'Há uma padaria ao lado do banco.',
            zh: '银行旁边有一家面包店。',
            ar: 'توجد مخبزة بجوار البنك.',
            ja: '銀行の隣にパン屋があります。',
            ru: 'Рядом с банком находится пекарня.'
          },
          explanation: 'Existential "There is" with singular noun and location preposition.'
        },
        {
          english: 'I would like an iced coffee, please.',
          translation: 'Me gustaría un café helado, por favor.',
          translationsByLang: {
            hi: 'मुझे एक आइस्ड कॉफ़ी चाहिए, कृपया।',
            es: 'Me gustaría un café helado, por favor.',
            fr: 'Je voudrais un café glacé, s\'il vous plaît.',
            de: 'Ich hätte gerne einen Eiskaffee, bitte.',
            pt: 'Eu gostaria de um café gelado, por favor.',
            zh: '请给我一杯冰咖啡。',
            ar: 'أود الحصول على قهوة مثلجة، من فضلك.',
            ja: 'アイスコーヒーをお願いします。',
            ru: 'Я бы хотел(а) кофе со льдом, пожалуйста.'
          },
          explanation: 'Polite ordering structure in hospitality contexts.'
        },
        {
          english: 'We are going to travel to London tomorrow.',
          translation: 'Vamos a viajar a Londres mañana.',
          translationsByLang: {
            hi: 'हम कल लंदन की यात्रा करने जा रहे हैं।',
            es: 'Vamos a viajar a Londres mañana.',
            fr: 'Nous allons voyager à Londres demain.',
            de: 'Wir werden morgen nach London reisen.',
            pt: 'Nós vamos viajar para Londres amanhã.',
            zh: '我们明天打算去伦敦旅行。',
            ar: 'سنذهب في رحلة إلى لندن غداً.',
            ja: '私たちは明日ロンドンへ旅行する予定です。',
            ru: 'Мы собираемся поехать в Лондон завтра.'
          },
          explanation: 'Expressing planned future actions using "be going to + verb".'
        }
      ]
    },
    lessons: [
      {
        id: 'lesson_a1_2_16',
        unitId: 'unit_a1_2',
        title: 'Home & Rooms in the House (There is / There are)',
        description: 'Describing rooms, living spaces, and existential structures',
        icon: '🏠',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_2_17',
        unitId: 'unit_a1_2',
        title: 'Furniture, Appliances & Spatial Prepositions',
        description: 'Household furnishings, appliances, and location prepositions',
        icon: '🛋️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_2_18',
        unitId: 'unit_a1_2',
        title: 'Food, Ingredients & Countable/Uncountable Nouns (Some / Any)',
        description: 'Groceries, food categories, some/any, and kitchen items',
        icon: '🥗',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_2_19',
        unitId: 'unit_a1_2',
        title: 'Ordering Food, Drinks & Cafe Dialogues (Would like / Can I have)',
        description: 'Restaurant ordering, cafe dialogues, and polite requests',
        icon: '☕',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_2_20',
        unitId: 'unit_a1_2',
        title: 'Shopping for Groceries, Quantities & Containers (Much / Many / How much)',
        description: 'Quantifiers, food containers, grocery shopping, and prices',
        icon: '🛒',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_2_21',
        unitId: 'unit_a1_2',
        title: 'Clothes, Shopping & Demonstratives (This/That/These/Those)',
        description: 'Apparel, sizes, fitting rooms, and demonstrative pronouns',
        icon: '👕',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_2_22',
        unitId: 'unit_a1_2',
        title: 'Places in Town, Buildings & Navigating the City (Directions)',
        description: 'Urban landmarks, navigation directions, and wayfinding',
        icon: '🗺️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_2_23',
        unitId: 'unit_a1_2',
        title: 'Transport, Commuting & Travel Prepositions (By train / On foot)',
        description: 'Public transit, commuting methods, schedules, and tickets',
        icon: '🚆',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_2_24',
        unitId: 'unit_a1_2',
        title: 'Daily Routines & Time Expressions (Present Simple Review)',
        description: 'Schedules, habits, time adverbs, and routine consolidation',
        icon: '⏱️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_2_25',
        unitId: 'unit_a1_2',
        title: 'Hobbies, Free Time & Expressing Likes & Dislikes (Like / Love / Hate + -ing)',
        description: 'Leisure activities, hobbies, preferences, and gerund complements',
        icon: '🎨',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_2_26',
        unitId: 'unit_a1_2',
        title: 'Abilities, Skills & Permission (Modal "Can / Can\'t")',
        description: 'Modal abilities, asking permission, and skill discussions',
        icon: '⚡',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_2_27',
        unitId: 'unit_a1_2',
        title: 'Health, Physical Sensations & Doctor Visits (Have / Feel)',
        description: 'Ailments, symptoms, doctor conversations, and well-being',
        icon: '🩺',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_2_28',
        unitId: 'unit_a1_2',
        title: 'Past States & Whereabouts (Was / Were)',
        description: 'Past tense of TO BE, past locations, states, and yesterday stories',
        icon: '🏛️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_2_29',
        unitId: 'unit_a1_2',
        title: 'Past Actions & Stories (Simple Past Verbs)',
        description: 'Regular -ed and key irregular past verbs, narrative stories',
        icon: '📖',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_2_30',
        unitId: 'unit_a1_2',
        title: 'Future Plans & Capstone Review (Be Going To)',
        description: 'Intentions, future plans, capstone A1 review, and progression',
        icon: '🚀',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 35,
        exercises: []
      }
    ]
  },
  {
    id: 'unit_a1_3',
    unitNumber: 3,
    title: 'Unit 3: Daily Connections, Social Plans & Everyday Life',
    description: 'Master invitations, schedules, asking for help, shopping, health, travel, and social communication.',
    cefr: 'A1',
    colorTheme: 'teal',
    guidebook: {
      title: 'A1 Social & Practical Communication Guidebook',
      keyGrammarRule: 'Polite modals and requests: "Would you like to...", "Could you please...", and object pronouns (me, him, her, us, them).',
      rulesByLang: {
        hi: 'विनम्र निमंत्रण और अनुरोध: "Would you like to...", "Could you please...", और ऑब्जेक्ट सर्वनाम (me, him, her, us, them)।',
        es: 'Invitaciones y peticiones cordiales: "Would you like to...", "Could you please...", y pronombres objeto (me, him, her, us, them).',
        fr: 'Invitations et demandes polies : "Would you like to...", "Could you please...", et pronoms objets.',
        de: 'Höfliche Einladungen und Bitten: "Would you like to...", "Could you please...", und Objektpronomen.',
        pt: 'Convites e pedidos corteses: "Would you like to...", "Could you please...", e pronomes oblíquos.',
        zh: '礼貌邀请与请求："Would you like to...", "Could you please..." 以及宾格代词 (me, him, her, us, them)。',
        ar: 'الدعوات والطلبات المهذبة: "Would you like to...", "Could you please...", وضمائر المفعول به.',
        ja: '丁寧な誘いや依頼：「Would you like to...」「Could you please...」と目的格代名詞。',
        ru: 'Вежливые приглашения и просьбы: "Would you like to...", "Could you please...", и объектные местоимения.'
      },
      examples: [
        {
          english: 'Would you like to join us for dinner?',
          translation: '¿Te gustaría unirte a nosotros para cenar?',
          translationsByLang: {
            hi: 'क्या आप हमारे साथ रात के खाने में शामिल होना चाहेंगे?',
            es: '¿Te gustaría unirte a nosotros para cenar?',
            fr: 'Aimeriez-vous vous joindre à nous pour le dîner ?',
            de: 'Möchten Sie mit uns zu Abend essen?',
            pt: 'Gostaria de se juntar a nós para o jantar?',
            zh: '你想和我们一起吃晚饭吗？',
            ar: 'هل ترغب في الانضمام إلينا لتناول العشاء؟',
            ja: '私たちと夕食をご一緒しませんか？',
            ru: 'Не хотите ли присоединиться к нам за ужином?'
          },
          explanation: 'Use "Would you like to + base verb" for polite invitations.'
        }
      ]
    },
    lessons: [
      {
        id: 'lesson_a1_3_31',
        unitId: 'unit_a1_3',
        title: 'Making, Accepting & Declining Invitations',
        description: 'Polite invitations, social suggestions, accepting, and declining with reasons',
        icon: '💌',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_3_32',
        unitId: 'unit_a1_3',
        title: 'Appointments, Schedules & Making Reservations',
        description: 'Booking appointments, confirming time slots, and rescheduling',
        icon: '🗓️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_3_33',
        unitId: 'unit_a1_3',
        title: 'Object Pronouns & Giving Gifts or Help',
        description: 'Direct and indirect object pronouns (me, you, him, her, it, us, them)',
        icon: '🎁',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_3_34',
        unitId: 'unit_a1_3',
        title: 'Shopping for Groceries & Quantifiers',
        description: 'Countable/uncountable nouns, some/any, much/many, grocery shopping',
        icon: '🛒',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_3_35',
        unitId: 'unit_a1_3',
        title: 'Clothes, Colors, Sizes & Trying On',
        description: 'Clothing vocabulary, colors, sizes, fitting rooms, demonstratives',
        icon: '👗',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_3_36',
        unitId: 'unit_a1_3',
        title: 'Around Town, Landmarks & Giving Directions',
        description: 'City locations, asking for and giving street directions, prepositions of place',
        icon: '🗺️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_3_37',
        unitId: 'unit_a1_3',
        title: 'Public Transportation & Buying Tickets',
        description: 'Buses, trains, metro, schedules, buying tickets, transit navigation',
        icon: '🚆',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_3_38',
        unitId: 'unit_a1_3',
        title: 'Health, Illness, Body Parts & Pharmacy Advice',
        description: 'Common ailments, symptoms, body parts, asking for medicine at a pharmacy',
        icon: '🩺',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_3_39',
        unitId: 'unit_a1_3',
        title: 'Feelings, Moods, Emotions & Well-being',
        description: 'Expressing emotional states, moods, empathy, and asking how someone feels',
        icon: '😊',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_3_40',
        unitId: 'unit_a1_3',
        title: 'Home Rooms, Household Objects & Chores',
        description: 'House parts, furniture, daily chores, and household routines',
        icon: '🏡',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_3_41',
        unitId: 'unit_a1_3',
        title: 'Daily Routine Timing, Connectors & Sequence Words',
        description: 'Time sequencing (first, then, after that, finally) and complex daily routines',
        icon: '⏱️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_3_42',
        unitId: 'unit_a1_3',
        title: 'Free Time, Hobbies, Music & Weekend Plans',
        description: 'Leisure activities, hobbies, musical instruments, and expressing preferences',
        icon: '🎸',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_3_43',
        unitId: 'unit_a1_3',
        title: 'Vacation, Travel Packing & Packing Essentials',
        description: 'Packing suitcases, travel documents, vacation items, and holiday plans',
        icon: '🧳',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_3_44',
        unitId: 'unit_a1_3',
        title: 'Weather Forecasts, Seasons & Climate Vocabulary',
        description: 'Weather expressions, forecasts, seasonal activities, and temperatures',
        icon: '🌦️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_3_45',
        unitId: 'unit_a1_3',
        title: 'Unit 3 Comprehensive Mastery & Practical Fluency Review',
        description: 'Comprehensive integration of Unit 3 skills: social, travel, shopping, and everyday mastery',
        icon: '🏆',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 35,
        exercises: []
      }
    ]
  },
  {
    id: 'unit_a1_4',
    unitNumber: 4,
    title: 'Unit 4: Professional Life, Daily Services & Practical Fluency',
    description: 'Master workplace routines, polite requests, customer service, banking, postal services, health, emergencies, opinions, and life experiences.',
    cefr: 'A1',
    colorTheme: 'indigo',
    guidebook: {
      title: 'A1 Professional & Practical Life Guidebook',
      keyGrammarRule: 'Expressing routines, polite modals, past experiences, future intentions (going to / will), and connective reasons (because, so, but).',
      rulesByLang: {
        hi: 'कार्यस्थल और दैनिक जीवन की बातचीत: नियमित दिनचर्या, विनम्र अनुरोध, अतीत के अनुभव, भविष्य की योजनाएं (going to/will), और कारण बताने वाले संयोजक (because, so, but)।',
        es: 'Comunicación práctica y profesional: rutinas laborales, peticiones educadas, experiencias pasadas, planes futuros (going to / will) y conectores (because, so, but).',
        fr: 'Communication pratique et professionnelle : routines de travail, demandes polies, expériences passées, projets futurs et connecteurs.',
        de: 'Berufs- und Alltagsleben: Arbeitsroutinen, höfliche Bitten, vergangene Erfahrungen, Zukunftspläne und Konnektoren.',
        pt: 'Comunicação profissional e prática: rotinas de trabalho, pedidos educados, experiências passadas, planos futuros e conectivos.',
        zh: '职场与日常生活沟通：工作日常、礼貌请求、过去经历、未来计划与连接词。',
        ar: 'التواصل المهني والعملي: روتين العمل، الطلبات المهذبة، التجارب السابقة، الخطط المستقبلية والروابط.',
        ja: '職場と日常生活のコミュニケーション：仕事のルーティン、丁寧な依頼、過去の経験、将来の予定、接続詞。',
        ru: 'Профессиональное и повседневное общение: рабочая рутина, вежливые просьбы, прошлый опыт, планы на будущее и союзы.'
      },
      examples: [
        {
          english: 'Could you please send me the report by Friday?',
          translation: '¿Podrías enviarme el informe antes del viernes, por favor?',
          translationsByLang: {
            hi: 'क्या आप कृपया मुझे शुक्रवार तक रिपोर्ट भेज सकते हैं?',
            es: '¿Podrías enviarme el informe antes del viernes, por favor?',
            fr: 'Pourriez-vous m\'envoyer le rapport d\'ici vendredi s\'il vous plaît ?',
            de: 'Könnten Sie mir den Bericht bitte bis Freitag schicken?',
            pt: 'Você poderia me enviar o relatório até sexta-feira, por favor?',
            zh: '你能请在周五之前把报告发给我吗？',
            ar: 'هل يمكنك إرسال التقرير لي بحلول يوم الجمعة من فضلك؟',
            ja: '金曜日までにレポートを送っていただけますか？',
            ru: 'Не могли бы вы прислать мне отчет к пятнице, пожалуйста?'
          },
          explanation: 'Use "Could you please + base verb" for polite workplace requests.'
        }
      ]
    },
    lessons: [
      {
        id: 'lesson_a1_4_46',
        unitId: 'unit_a1_4',
        title: 'Workplace Routines, Office Items & Daily Professional Tasks',
        description: 'Office environment, equipment, daily responsibilities, and workplace communication',
        icon: '💼',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_4_47',
        unitId: 'unit_a1_4',
        title: 'Making Requests, Inquiries & Asking for Clarification',
        description: 'Polite requests with Could/Would, asking for help, and seeking clarification at work',
        icon: '❓',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_4_48',
        unitId: 'unit_a1_4',
        title: 'Customer Service, Returns, Exchanges & Store Policies',
        description: 'Store interactions, explaining problems, requesting refunds, and understanding receipts',
        icon: '🛍️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_4_49',
        unitId: 'unit_a1_4',
        title: 'Banking, Money, Payments & Financial Transactions',
        description: 'Opening accounts, ATM transactions, currency exchange, and payment methods',
        icon: '💳',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_4_50',
        unitId: 'unit_a1_4',
        title: 'Post Office, Deliveries, Mail & Sending Packages',
        description: 'Mailing letters, shipping parcels, postal terms, and tracking packages',
        icon: '📮',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_4_51',
        unitId: 'unit_a1_4',
        title: 'Emergencies, Urgent Help, Safety & Reporting Incidents',
        description: 'Emergency numbers, describing urgent problems, safety warnings, and calling for assistance',
        icon: '🚨',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_4_52',
        unitId: 'unit_a1_4',
        title: 'Neighborhood Places, Community Services & Local Facilities',
        description: 'Community buildings, municipal services, local directions, and neighborhood life',
        icon: '🏘️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_4_53',
        unitId: 'unit_a1_4',
        title: 'Describing Past Experiences, Holidays & Memorable Events',
        description: 'Narrating past events, vacations, and personal experiences with Simple Past',
        icon: '📸',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_4_54',
        unitId: 'unit_a1_4',
        title: 'Expressing Opinions, Giving Reasons & Connecting Ideas',
        description: 'Sharing viewpoints, agreeing/disagreeing, and using linking words (because, so, although)',
        icon: '💡',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_4_55',
        unitId: 'unit_a1_4',
        title: 'Future Intentions, Plans & Predictions (going to / will)',
        description: 'Expressing future goals, weekend plans, predictions, and scheduled activities',
        icon: '🚀',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_4_56',
        unitId: 'unit_a1_4',
        title: 'Hobbies, Free Time, Entertainment & Creative Passions',
        description: 'Leisure activities, sports, music, arts, and expressing passion/interests',
        icon: '🎨',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_4_57',
        unitId: 'unit_a1_4',
        title: 'Technology, Devices, The Internet & Digital Life',
        description: 'Smartphones, computers, apps, online security, and digital daily life',
        icon: '📱',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_4_58',
        unitId: 'unit_a1_4',
        title: 'Social Invitations, Plans, Accepting & Declining Politely',
        description: 'Inviting friends, confirming social dates, organizing meetups, and polite refusals',
        icon: '🎉',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_4_59',
        unitId: 'unit_a1_4',
        title: 'Life Milestones, Personal Biographies & Life Stories',
        description: 'Birthdays, graduations, career changes, moving cities, and personal timelines',
        icon: '🌱',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_4_60',
        unitId: 'unit_a1_4',
        title: 'A1 Comprehensive Capstone, Fluency Checkpoint & Graduation!',
        description: 'Complete synthesis of A1 English: workplace, social, daily life, travel, and personal communication',
        icon: '🎓',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 50,
        exercises: []
      }
    ]
  },
  {
    id: 'unit_a1_5',
    unitNumber: 5,
    title: 'Unit 5: Advanced Workplace, Daily Life Services & Social Fluency',
    description: 'Master team collaboration, phone calls, travel bookings, hotel stays, healthcare, renting, banking, emails, job applications, interview mastery, and emergencies.',
    cefr: 'A1',
    colorTheme: 'cyan',
    guidebook: {
      title: 'A1 Advanced Practical & Professional Communication Guidebook',
      keyGrammarRule: 'Applying continuous aspect for status updates, modal verbs for polite requests and phone etiquette, past simple & present perfect for career and experiences, and imperative conditionals in emergencies.',
      rulesByLang: {
        hi: 'उन्नत कार्यस्थल, दैनिक सेवाएँ और सामाजिक प्रवाह: टीम बैठकें, फोन कॉल, यात्रा बुकिंग, स्वास्थ्य परामर्श, बैंकिंग, ईमेल और नौकरी के साक्षात्कार।',
        es: 'Comunicación profesional y servicios cotidianos avanzados: reuniones de equipo, llamadas telefónicas, reservas de viajes, consultas médicas, banca, correos electrónicos y entrevistas de trabajo.',
        fr: 'Communication professionnelle avancée et services du quotidien : réunions d\'équipe, appels téléphoniques, réservations de voyage, santé, banque, courriels et entretiens d\'embauche.',
        de: 'Fortgeschrittene berufliche und alltägliche Kommunikation: Team-Meetings, Telefonate, Reisebuchungen, Gesundheit, Bankwesen, E-Mails und Vorstellungsgespräche.',
        pt: 'Comunicação profissional e serviços práticos avançados: reuniões de equipe, chamadas telefônicas, reservas de viagem, saúde, bancos, e-mails e entrevistas de emprego.',
        zh: '高级职场与日常生活服务交流：团队会议、电话沟通、差旅预订、就医咨询、银行理财、正式邮件与求职面试。',
        ar: 'التواصل المهني والخدمات اليومية المتقدمة: اجتماعات الفريق، المكالمات الهاتفية، حجوزات السفر، الاستشارات الصحية، المعاملات المصرفية، رسائل البريد الإلكتروني ومقابلات العمل.',
        ja: '高度な職場および日常生活のコミュニケーション：チームミーティング、電話応対、旅行の予約、医療相談、銀行手続き、メール作成、就職面接。',
        ru: 'Продвинутое профессиональное и повседневное общение: командные встречи, телефонные звонки, бронирование поездок, медицина, банки, деловая переписка и собеседования.'
      },
      examples: [
        {
          english: 'I am currently updating the project timeline and will share the report shortly.',
          translation: 'Actualmente estoy actualizando el cronograma del proyecto y compartiré el informe en breve.',
          translationsByLang: {
            hi: 'मैं वर्तमान में परियोजना समयरेखा को अपडेट कर रहा हूँ और शीघ्र ही रिपोर्ट साझा करूँगा।',
            es: 'Actualmente estoy actualizando el cronograma del proyecto y compartiré el informe en breve.',
            fr: 'Je mets actuellement à jour le calendrier du projet et je partagerai le rapport sous peu.',
            de: 'Ich aktualisiere derzeit den Projektzeitplan und werde den Bericht in Kürze weiterleiten.',
            pt: 'Estou atualizando o cronograma do projeto e compartilharei o relatório em breve.',
            zh: '我目前正在更新项目时间表，稍后将共享报告。',
            ar: 'أقوم حالياً بتحديث الجدول الزمني للمشروع وسأشارك التقرير قريباً.',
            ja: '現在プロジェクトのタイムラインを更新中であり、まもなくレポートを共有します。',
            ru: 'В настоящее время я обновляю график проекта и вскоре поделюсь отчетом.'
          },
          explanation: 'Use Present Continuous for in-progress workplace activities.'
        }
      ]
    },
    lessons: [
      {
        id: 'lesson_a1_5_61',
        unitId: 'unit_a1_5',
        title: 'Workplace Collaboration, Team Meetings & Status Updates',
        description: 'Master vocabulary and phrases for status updates, progress checks, and collaborative workplace discussions using present continuous for ongoing tasks.',
        icon: '💼',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_5_62',
        unitId: 'unit_a1_5',
        title: 'Telephone Calls, Voicemails & Taking Messages',
        description: 'Learn phone etiquette, opening greetings, leaving messages, taking down phone numbers and names, and managing call transfers.',
        icon: '📞',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_5_63',
        unitId: 'unit_a1_5',
        title: 'Scheduling Appointments, Confirmations & Rescheduling',
        description: 'Learn expressions for making dental, medical, or business appointments, proposing alternate times, confirming bookings, and canceling with advance notice.',
        icon: '📅',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_5_64',
        unitId: 'unit_a1_5',
        title: 'Transportation Inquiries, Ticket Booking & Travel Delays',
        description: 'Master transportation vocabulary, train/bus station questions, one-way versus round-trip tickets, departure boards, platform directions, and delay announcements.',
        icon: '🚆',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_5_65',
        unitId: 'unit_a1_5',
        title: 'Hotel Stays, Check-In, Room Amenities & Special Requests',
        description: 'Learn hotel vocabulary, front desk greetings, key card instructions, requesting extra towels/pillows, asking for Wi-Fi passwords, and requesting late checkout.',
        icon: '🏨',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_5_66',
        unitId: 'unit_a1_5',
        title: 'Dining Out Preferences, Food Allergies & Custom Orders',
        description: 'Learn dining expressions for dietary restrictions (gluten-free, vegetarian, nut allergy), requesting dressings on the side, asking for substitutions, and splitting the bill.',
        icon: '🍽️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_5_67',
        unitId: 'unit_a1_5',
        title: 'Describing Symptoms, Pharmacy & Healthcare Consultations',
        description: 'Master vocabulary for aches and pains (headache, sore throat, cough, fever, stomachache), dosage instructions, prescription terms, and frequency of medicine intake.',
        icon: '💊',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_5_68',
        unitId: 'unit_a1_5',
        title: 'Housing, Renting an Apartment & Household Repairs',
        description: 'Learn housing vocabulary (rent, lease, landlord, tenant, utilities, deposit), describe apartment features, and report maintenance problems (leaky faucet, broken heater, power outage).',
        icon: '🏡',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_5_69',
        unitId: 'unit_a1_5',
        title: 'Bank Services, Online Accounts & Financial Security',
        description: 'Learn banking vocabulary (checking account, savings, transfer, ATM, balance, deposit, withdraw, PIN, fraud alert), online banking steps, and reporting lost cards.',
        icon: '🏦',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_5_70',
        unitId: 'unit_a1_5',
        title: 'Formal & Informal Emails, Inquiries & Professional Tone',
        description: 'Distinguish between formal and informal registers in written English. Learn salutations (Dear Mr./Ms., Hi), subject lines, attachments, stating purpose, polite sign-offs (Sincerely, Best regards), and follow-ups.',
        icon: '✉️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_5_71',
        unitId: 'unit_a1_5',
        title: 'Job Applications, Resumes & Work Experience',
        description: 'Learn resume and job application vocabulary (resume/CV, qualifications, degree, position, duties, achievements, previous role, cover letter, references), using Past Simple for past roles and Present Perfect for ongoing career achievements.',
        icon: '💼',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_5_72',
        unitId: 'unit_a1_5',
        title: 'Job Interviews, Professional Strengths & Career Goals',
        description: 'Master job interview questions ("Tell me about yourself", "What are your strengths?", "Where do you see yourself in five years?"), expressing soft skills (team player, problem solver, detail-oriented), handling stress, and asking questions to the interviewer.',
        icon: '🤝',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_5_73',
        unitId: 'unit_a1_5',
        title: 'Community Services, Post Office, Local Library & Civic Inquiries',
        description: 'Master public service vocabulary (post office, parcel, stamps, tracking number, library card, borrow, renew, community center, civic hall), asking for operating hours, and sending international mail.',
        icon: '📬',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_5_74',
        unitId: 'unit_a1_5',
        title: 'Emergencies, Urgent Reporting, First Aid & Calling for Help',
        description: 'Learn high-stakes emergency vocabulary (ambulance, police, fire department, paramedic, emergency dispatch 911/112/999, accident, injury, bleed, conscious, location), giving exact location, stating nature of crisis, and following dispatcher instructions.',
        icon: '🚨',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_5_75',
        unitId: 'unit_a1_5',
        title: 'Comprehensive Unit 5 Milestone & A1 Capstone Mastery',
        description: 'The ultimate A1 milestone integrating workplace status updates, phone calls, travel bookings, hotel stays, restaurant dining, medical consults, apartment renting, banking transactions, formal emails, job applications, interview mastery, and civic emergencies.',
        icon: '🏆',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 50,
        exercises: []
      }
    ]
  },
  {
    id: 'unit_a1_6',
    unitNumber: 6,
    title: 'Unit 6: Professional Collaboration, Global Communication & A1 Bridge Mastery',
    description: 'Master workplace problem solving, feedback, schedules, IT support, client relationships, safety regulations, negotiations, and cross-cultural communication.',
    cefr: 'A1',
    colorTheme: 'indigo',
    guidebook: {
      title: 'A1 Unit 6 Professional Communication & Synthesis Guidebook',
      keyGrammarRule: 'Connecting cause and result with because/so, making polite requests with modal verbs (could, would, may), stating requirements with need to / have to, and synthesizing narrative tenses.',
      rulesByLang: {
        hi: 'कार्यस्थल में समस्या समाधान, प्रतिक्रिया, समय-सारणी, आईटी सहायता, ग्राहक संबंध, सुरक्षा नियम, बातचीत और बहु-सांस्कृतिक संवाद।',
        es: 'Resolución de problemas en el trabajo, retroalimentación, horarios, soporte de TI, relaciones con clientes, normas de seguridad y comunicación intercultural.',
        fr: 'Résolution de problèmes professionnels, retours constructifs, plannings, support informatique, relations clients, règles de sécurité et communication interculturelle.',
        de: 'Berufliche Problemlösung, konstruktives Feedback, Zeitpläne, IT-Support, Kundenbeziehungen, Sicherheitsvorschriften und interkulturelle Kommunikation.',
        pt: 'Resolução de problemas profissionais, feedback construtivo, cronogramas, suporte de TI, relacionamento com clientes, normas de segurança e comunicação intercultural.',
        zh: '职场问题解决、建设性反馈、时间规划、IT支持、客户关系、安全规程与跨文化沟通。',
        ar: 'حل المشكلات في مكان العمل، التعليقات البناءة، الجداول الزمنية، دعم تكنولوجيا المعلومات، علاقات العملاء، لوائح السلامة والتواصل بين الثقافات.',
        ja: '職場の問題解決、建設的なフィードバック、スケジュール管理、ITサポート、顧客対応、安全規定、異文化間コミュニケーション。',
        ru: 'Решение рабочих задач, конструктивная обратная связь, графики работы, IT-поддержка, работа с клиентами, техника безопасности и межкультурная коммуникация.'
      },
      examples: [
        {
          english: 'Could you please help me with this report?',
          translation: '¿Podrías ayudarme con este informe por favor?',
          translationsByLang: {
            hi: 'क्या आप कृपया इस रिपोर्ट में मेरी मदद कर सकते हैं?',
            es: '¿Podrías ayudarme con este informe por favor?',
            fr: 'Pourriez-vous m\'aider avec ce rapport s\'il vous plaît ?',
            de: 'Könnten Sie mir bitte bei diesem Bericht helfen?',
            pt: 'Você poderia me ajudar com este relatório, por favor?',
            zh: '请问你能帮我看一下这份报告吗？',
            ar: 'هل يمكنك مساعدتي في هذا التقرير من فضلك؟',
            ja: 'このレポートの作成を手伝っていただけますか？',
            ru: 'Не могли бы вы помочь мне с этим отчетом?'
          },
          explanation: 'Polite modal request in professional environments.'
        }
      ]
    },
    lessons: [
      {
        id: 'lesson_a1_6_76',
        unitId: 'unit_a1_6',
        title: 'Workplace Problem-Solving & Requesting Assistance',
        description: 'Explain work obstacles, request assistance politely, and coordinate problem resolution.',
        icon: '💡',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_6_77',
        unitId: 'unit_a1_6',
        title: 'Giving & Receiving Constructive Workplace Feedback',
        description: 'Deliver actionable feedback politely and respond professionally to constructive criticism.',
        icon: '🎯',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_6_78',
        unitId: 'unit_a1_6',
        title: 'Project Deadlines, Time Estimates & Work Schedules',
        description: 'Discuss delivery dates, estimate durations, negotiate timeline adjustments, and prioritize milestones.',
        icon: '⏱️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_6_79',
        unitId: 'unit_a1_6',
        title: 'Technical Inquiries, Software Issues & IT Support',
        description: 'Report software bugs, connectivity errors, password resets, and follow troubleshooting steps.',
        icon: '💻',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_6_80',
        unitId: 'unit_a1_6',
        title: 'Customer Onboarding & Product Demonstrations',
        description: 'Guide new users through basic software setups, explain features, and address first-time questions.',
        icon: '🤝',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_6_81',
        unitId: 'unit_a1_6',
        title: 'Resolving Customer Complaints & Difficult Situations',
        description: 'Acknowledge grievances, apologize professionally, and offer concrete resolutions or refunds.',
        icon: '🛡️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_6_82',
        unitId: 'unit_a1_6',
        title: 'Contract Renewals, Service Upgrades & Account Management',
        description: 'Discuss terms, compare tier benefits, request quotes, and confirm agreement extensions.',
        icon: '📋',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_6_83',
        unitId: 'unit_a1_6',
        title: 'Supply Chain, Inventory & Equipment Logistics',
        description: 'Track orders, verify inventory counts, report damaged goods, and manage delivery expectations.',
        icon: '📦',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_6_84',
        unitId: 'unit_a1_6',
        title: 'Safety Protocols, Workplace Regulations & Compliance',
        description: 'Explain emergency drills, hazard reporting, mandatory safety gear, and workplace policies.',
        icon: '⚠️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_6_85',
        unitId: 'unit_a1_6',
        title: 'Team Celebration, Achievements & Recognition',
        description: 'Congratulate peers, acknowledge milestones, deliver short toasts, and celebrate team victories.',
        icon: '🎉',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_6_86',
        unitId: 'unit_a1_6',
        title: 'Business Networking, Introductions & Small Talk',
        description: 'Exchange contact info, introduce companies, build rapport at industry events, and follow up.',
        icon: '🌐',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_6_87',
        unitId: 'unit_a1_6',
        title: 'Pitching an Idea, Proposals & Getting Buy-In',
        description: 'Outline key benefits, present solutions concisely, handle initial objections, and request support.',
        icon: '🚀',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_6_88',
        unitId: 'unit_a1_6',
        title: 'Formal Negotiations, Terms & Trade-offs',
        description: 'Propose counter-offers, discuss minimum requirements, find common ground, and reach consensus.',
        icon: '⚖️',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_6_89',
        unitId: 'unit_a1_6',
        title: 'Cross-Cultural Communication & Global Teams',
        description: 'Navigate cultural differences respectfully, clarify ambiguous terms, and collaborate globally.',
        icon: '🌍',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 25,
        exercises: []
      },
      {
        id: 'lesson_a1_6_90',
        unitId: 'unit_a1_6',
        title: 'A1 Mastery Milestone, Comprehensive Bridge Review & A2 Transition Synthesis',
        description: 'The definitive A1 graduation capstone! Synthesizes complete A1 competencies for seamless A2 progression.',
        icon: '🏆',
        cefr: 'A1',
        totalSteps: 18,
        xpReward: 50,
        exercises: []
      }
    ]
  },

  // ==========================================
    // ==========================================
  // CEFR A2 - STAGE 2: ELEMENTARY (UNITS 7 - 8)
  // ==========================================
  {
  "id": "unit_a2_7",
  "unitNumber": 7,
  "title": "Unit 7: Everyday Encounters, Hobbies, Routines & City Life",
  "description": "Master daily routines, ongoing habits, past events, storytelling, dining out, medical advice, and social arrangements in A2 Elementary English.",
  "cefr": "A2",
  "colorTheme": "teal",
  "guidebook": {
    "title": "A2 Unit 7 Everyday Encounters & Narrative Guidebook",
    "keyGrammarRule": "Expressing frequency, contrasting Present Simple with Present Continuous, sequencing past narratives with conjunctions, using modals of obligation/permission, and forming future intentions with going to.",
    "rulesByLang": {
      "hi": "दैनिक दिनचर्या, आदतें, पिछली घटनाएँ, कहानी सुनाना, खरीदारी, बाहर भोजन, स्वास्थ्य लक्षण और भविष्य की योजनाएँ।",
      "es": "Rutinas diarias, hábitos, eventos pasados, narraciones, compras, restaurantes, síntomas de salud y planes futuros.",
      "fr": "Routines quotidiennes, habitudes, événements passés, narration, achats, restaurants, santé et projets futurs.",
      "de": "Tagesabläufe, Gewohnheiten, vergangene Ereignisse, Erzählungen, Einkaufen, Restaurantbesuche, Gesundheit und Zukunftspläne.",
      "pt": "Rotinas diárias, hábitos, eventos passados, narrativa, compras, restaurantes, sintomas de saúde e planos futuros.",
      "zh": "日常作息、习惯、过去事件、叙事连接词、购物、外出就餐、健康症状与未来计划。",
      "ar": "الروتين اليومي، العادات، الأحداث الماضية، سرد القصص، التسوق، تناول الطعام بالخارج، الأعراض الصحية والخطط المستقبلية.",
      "ja": "日課、習慣、過去の出来事、物語の順序立て、買い物、外食、健康の症状、将来の予定。",
      "ru": "Распорядок дня, привычки, прошедшие события, повествование, покупки, рестораны, здоровье и планы на будущее."
    },
    "examples": [
      {
        "english": "I always have coffee, but right now I am drinking green tea.",
        "translation": "Siempre tomo café, pero ahora mismo estoy bebiendo té verde.",
        "translationsByLang": {
          "hi": "मैं हमेशा कॉफी पीता हूँ, लेकिन अभी मैं ग्रीन टी पी रहा हूँ।",
          "es": "Siempre tomo café, pero ahora mismo estoy bebiendo té verde.",
          "fr": "Je prends toujours du café, mais en ce moment je bois du thé vert.",
          "de": "Ich trinke immer Kaffee, aber im Moment trinke ich grünen Tee.",
          "pt": "Eu sempre tomo café, mas agora estou bebendo chá verde.",
          "zh": "我总是喝咖啡，但现在我正在喝绿茶。",
          "ar": "أنا دائما أشرب القهوة، ولكن الآن أنا أشرب الشاي الأخضر.",
          "ja": "私はいつもコーヒーを飲みますが、今は緑茶を飲んでいます。",
          "ru": "Я всегда пью кофе, но прямо сейчас я пью зеленый чай."
        },
        "explanation": "Contrast between habitual simple present and temporary continuous present."
      }
    ]
  },
  "lessons": [
    {
      "id": "lesson_a2_7_91",
      "unitId": "unit_a2_7",
      "title": "Daily Routines, Habits & Frequency Adverbs",
      "description": "Describe daily schedules, morning routines, and frequency of activities using adverbs of frequency and intensifiers.",
      "icon": "⏰",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_7_92",
      "unitId": "unit_a2_7",
      "title": "Ongoing Activities vs. Habits (Present Simple vs. Continuous)",
      "description": "Distinguish between permanent routines (Present Simple) and temporary or ongoing activities (Present Continuous), including stative verbs.",
      "icon": "🔄",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_7_93",
      "unitId": "unit_a2_7",
      "title": "Past Experiences & Completed Events (Past Simple)",
      "description": "Describe completed past experiences using regular and irregular Past Simple verbs, negative structures, questions, and specific past time markers.",
      "icon": "📜",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_7_94",
      "unitId": "unit_a2_7",
      "title": "Storytelling & Narrative Sequencing Connectors",
      "description": "Structure short personal stories and anecdotes using temporal connectors (first, then, after that, suddenly, meanwhile, finally) and compound linkers.",
      "icon": "📖",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_7_95",
      "unitId": "unit_a2_7",
      "title": "Giving Reasons, Causes & Results",
      "description": "Justify opinions and decisions using cause-and-effect connectors (because, because of, so, therefore, as a result) and concession (although).",
      "icon": "💡",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_7_96",
      "unitId": "unit_a2_7",
      "title": "Shopping, Quantities & Transactions",
      "description": "Express quantities with countable and uncountable nouns using much, many, a few, a little, plenty of, and handle customer transactions.",
      "icon": "🛒",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_7_97",
      "unitId": "unit_a2_7",
      "title": "Clothes, Styles & Shopping Comparisons",
      "description": "Compare items of clothing and accessories using comparative structures (more comfortable than, larger than, as stylish as, too small, not big enough).",
      "icon": "👗",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_7_98",
      "unitId": "unit_a2_7",
      "title": "Eating Out, Menus & Polite Dining Requests",
      "description": "Navigate restaurant menus, express dietary preferences/allergies, make polite dining requests with \"would like\" / \"could we have\", and settle the bill.",
      "icon": "🍽️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_7_99",
      "unitId": "unit_a2_7",
      "title": "Health, Symptoms & Medical Advice",
      "description": "Express physical symptoms, illness, and pain using \"have a/an...\", describe sensations with \"feel\", and give advice with \"should / shouldn't\".",
      "icon": "🩺",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_7_100",
      "unitId": "unit_a2_7",
      "title": "Future Plans, Intentions & Fixed Arrangements",
      "description": "Distinguish between personal intentions/plans with \"be going to\" and confirmed calendar arrangements with Present Continuous for future.",
      "icon": "🗓️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_7_101",
      "unitId": "unit_a2_7",
      "title": "Opinions, Agreement & Polite Disagreement",
      "description": "Formulate personal opinions (\"In my opinion\", \"I believe\", \"I think\"), agree gracefully (\"I completely agree\", \"That's true\"), and disagree politely (\"I see your point, but...\").",
      "icon": "💭",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_7_102",
      "unitId": "unit_a2_7",
      "title": "Rules, Obligations & Permissions",
      "description": "Master expressing legal/organizational obligations with \"must\" and \"have to\", absence of obligation with \"don't have to\", prohibitions with \"mustn't / cannot\", and permissions with \"can / be allowed to\".",
      "icon": "📋",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_7_103",
      "unitId": "unit_a2_7",
      "title": "Future Plans, Intentions & Predictions",
      "description": "Distinguish between planned future intentions (\"I am going to study tonight\"), spontaneous decisions/predictions (\"I will help you / It will rain\"), and scheduled arrangements (\"We are flying to London tomorrow\").",
      "icon": "🔮",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_7_104",
      "unitId": "unit_a2_7",
      "title": "Digital Life, Apps & Modern Communication",
      "description": "Master vocabulary for digital technology (smartphone, app, download, upload, password, wireless, notification, screen) and tech phrasal verbs (log in, sign up, back up, shut down, scroll through).",
      "icon": "📱",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_7_105",
      "unitId": "unit_a2_7",
      "title": "Unit 7 Milestone Review & A2 Communication Mastery",
      "description": "Synthesize all major A2 language functions from Unit 7 (Lessons 91–104): expressing frequency & habits, polite opinions & disagreement, obligations (must/have to), future intentions (be going to / will), and digital communication.",
      "icon": "🏆",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 50,
      "exercises": []
    }
  ]
},
  {
  "id": "unit_a2_8",
  "unitNumber": 8,
  "title": "Unit 8: Workplace Communication, Technology & Social Interactions",
  "description": "Master interpersonal descriptions, travel disruptions, polite workplace messages, schedule management, customer service complaints, and A2 capstone fluency.",
  "cefr": "A2",
  "colorTheme": "indigo",
  "guidebook": {
    "title": "A2 Unit 8 Workplace, Social & Comprehensive Capstone Guidebook",
    "keyGrammarRule": "Comparative and superlative adjectives, modal verbs for advice/recommendation (should/could/ought to), past continuous for travel disruptions, polite indirect requests, and full A2 functional synthesis.",
    "rulesByLang": {
      "hi": "लोगों का वर्णन, सामाजिक संबंध, यात्रा में समस्याएं, कार्यस्थल संचार, शिकायतें, तकनीकी सहायता और A2 प्रवीणता।",
      "es": "Descripción de personas, relaciones sociales, problemas de viaje, comunicación laboral, quejas, soporte técnico y maestría A2.",
      "fr": "Description de personnes, relations sociales, imprévus de voyage, communication au travail, réclamations, support technique et maîtrise A2.",
      "de": "Personenbeschreibungen, soziale Beziehungen, Reisezwischenfälle, Arbeitsplatzkommunikation, Reklamationen, technischer Support und A2-Abschluss.",
      "pt": "Descrição de pessoas, relações sociais, imprevistos de viagem, comunicação no trabalho, reclamações, suporte técnico e maestria A2.",
      "zh": "人物描写、社交圈、旅行突发状况、职场沟通、客户投诉、技术支持与A2综合毕业。",
      "ar": "وصف الأشخاص، العلاقات الاجتماعية، مشكلات السفر، التواصل في مكان العمل، الشكاوى، الدعم الفني وإتقان المستوى A2.",
      "ja": "人物の描写、人間関係、旅行のトラブル、職場のコミュニケーション、苦情対応、ITサポート、A2総合修了。",
      "ru": "Описание людей, социальные связи, проблемы в поездках, общение на работе, жалобы, техническая поддержка и сертификация A2."
    },
    "examples": [
      {
        "english": "Could you please let me know if we can reschedule our meeting to Thursday?",
        "translation": "¿Podría informarme si podemos reprogramar nuestra reunión para el jueves?",
        "translationsByLang": {
          "hi": "क्या आप मुझे बता सकते हैं कि क्या हम अपनी बैठक गुरुवार को पुनर्निर्धारित कर सकते हैं?",
          "es": "¿Podría informarme si podemos reprogramar nuestra reunión para el jueves?",
          "fr": "Pourriez-vous me faire savoir si nous pouvons reporter notre réunion à jeudi ?",
          "de": "Könnten Sie mir bitte mitteilen, ob wir unser Treffen auf Donnerstag verschieben können?",
          "pt": "Você poderia me avisar se podemos reagendar nossa reunião para quinta-feira?",
          "zh": "请问你能否告诉我我们是否可以把会议改到周四？",
          "ar": "هل يمكنك إخباري إذا كان بإمكاننا إعادة جدولة اجتماعنا إلى يوم الخميس؟",
          "ja": "会議を木曜日に変更できるかどうか教えていただけますか？",
          "ru": "Не могли бы вы сообщить, можем ли мы перенести нашу встречу на четверг?"
        },
        "explanation": "Polite indirect question for professional schedule coordination."
      }
    ]
  },
  "lessons": [
    {
      "id": "lesson_a2_8_106",
      "unitId": "unit_a2_8",
      "title": "Describing People: Appearance, Personality & Character Traits",
      "description": "Learn to describe physical appearance, clothing styles, and personality traits using compound adjectives and adverbs of degree.",
      "icon": "👤",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_8_107",
      "unitId": "unit_a2_8",
      "title": "Relationships, Social Circles & Keeping in Touch",
      "description": "Talk about maintaining friendships, staying in touch, family connections, and reciprocal interactions with friends and coworkers.",
      "icon": "👥",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_8_108",
      "unitId": "unit_a2_8",
      "title": "Home & Neighborhood Issues: Describing Problems & Repairs",
      "description": "Describe common household faults, plumbing and electrical problems, and communicate with landlords or technicians using passive adjectives and need + gerund/infinitive.",
      "icon": "🛠️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_8_109",
      "unitId": "unit_a2_8",
      "title": "Travel Experiences & Unforeseen Journey Problems",
      "description": "Describe past travel adventures, unexpected transit delays, lost luggage, and navigate travel emergencies using Past Simple vs Past Continuous with when/while.",
      "icon": "🧳",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_8_110",
      "unitId": "unit_a2_8",
      "title": "Making Recommendations, Suggestions & Giving Friendly Advice",
      "description": "Learn to suggest activities, recommend restaurants, tourist spots, and give friendly advice using modals (should, shouldn't, ought to) and suggestions (Why don't you..., How about + -ing).",
      "icon": "💡",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_8_111",
      "unitId": "unit_a2_8",
      "title": "Customer Service: Polite Complaints, Faulty Items & Returns",
      "description": "Communicate effectively in retail and customer service situations: requesting refunds, exchanging damaged goods, and expressing dissatisfaction politely using indirect questions and formal requests.",
      "icon": "🛍️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_8_112",
      "unitId": "unit_a2_8",
      "title": "Workplace Communication: Daily Tasks, Updates & Short Messages",
      "description": "Communicate effectively in professional work environments: drafting short updates, reporting task status, passing on requests using Verb + Object + Infinitive, and using workplace collocations.",
      "icon": "💼",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_8_113",
      "unitId": "unit_a2_8",
      "title": "Appointments, Scheduling & Rescheduling Meetings",
      "description": "Schedule doctor consultations, job interviews, client meetings, push back or bring forward appointment times, and confirm calendar dates using polite modal inquiries.",
      "icon": "📅",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_8_114",
      "unitId": "unit_a2_8",
      "title": "Education, Courses & Learning Experiences",
      "description": "Describe school memories, past study habits with \"used to\", enroll in training courses, and talk about mastering new practical skills using \"learn how to + verb\".",
      "icon": "🎓",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_8_115",
      "unitId": "unit_a2_8",
      "title": "Digital Life, Online Communication & Technical Problems",
      "description": "Communicate effectively about smartphones, computers, software errors, internet connections, and provide clear step-by-step troubleshooting steps using Zero and First Conditionals (If you press..., it will...).",
      "icon": "💻",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_8_116",
      "unitId": "unit_a2_8",
      "title": "Describing Objects, Materials & Everyday Inventions",
      "description": "Describe the shape, material, origin, and functionality of objects, tools, and everyday inventions using Present Simple Passive (is made of, are produced) and Past Simple Passive (was invented by).",
      "icon": "🔬",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_8_117",
      "unitId": "unit_a2_8",
      "title": "Health, Minor Illnesses & Pharmacy Advice",
      "description": "Communicate health symptoms, aches, and minor ailments to a doctor or pharmacist; understand prescriptions, dosage instructions (take two tablets every 8 hours after meals), and side effects.",
      "icon": "💊",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_8_118",
      "unitId": "unit_a2_8",
      "title": "Life Transitions, Celebrations, Festivals & Milestone Events",
      "description": "Discuss life transitions (graduation, weddings, anniversaries, promotions, retirement), describe cultural festivals, and offer warm congratulations and polite toasts using used to, present perfect, and future forms.",
      "icon": "🎉",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_8_119",
      "unitId": "unit_a2_8",
      "title": "Global Travel, Holidays, Airport Navigation & Hotel Situations",
      "description": "Navigate international flights, security checkpoints, customs declarations, delayed luggage, room upgrades, and local tourism inquiries using indirect questions and polite travel phrases.",
      "icon": "✈️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_8_120",
      "unitId": "unit_a2_8",
      "title": "Unit 8 Comprehensive A2 Capstone, Real-World Fluency Review & Mastery Assessment",
      "description": "Synthesize complete CEFR A2 language competencies: navigating urban landmarks, travel logistics, shopping & returns, culinary ordering, health & medicine, tenancy & housing, office work & meetings, weather & seasons, digital troubleshooting, interpersonal relationships, festive milestones, and global travel.",
      "icon": "🏆",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 50,
      "exercises": []
    }
  ]
},
  {
  "id": "unit_a2_9",
  "unitNumber": 9,
  "title": "Unit 9: Life Milestones, Present Perfect & Real-World Fluency",
  "description": "Master personal background narratives, life milestones, Present Perfect experiences and duration (for/since, just/already/yet), advice modals, customer service solutions, environmental discourse, and life ambitions.",
  "cefr": "A2",
  "colorTheme": "teal",
  "guidebook": {
    "title": "A2 Unit 9 Life Narratives, Present Perfect & Real-World Communication Guidebook",
    "keyGrammarRule": "Present Perfect for experiences, unfinished time, duration with 'for' and 'since', time markers ('just', 'already', 'yet'), contrasting Present Perfect with Past Simple, giving advice with modals ('should', 'ought to', 'could'), and articulating future ambitions.",
    "rulesByLang": {
      "hi": "जीवन के अनुभव, जीवन के बड़े पड़ाव, Present Perfect (for/since, just/already/yet), Past Simple के साथ अंतर, सलाह देना (should/could), ग्राहक सेवा और भविष्य की योजनाएं।",
      "es": "Experiencias de vida, hitos personales, Present Perfect (for/since, just/already/yet), contraste con Past Simple, dar consejos, servicio al cliente y aspiraciones futuras.",
      "fr": "Expériences de vie, étapes personnelles, Present Perfect (for/since, just/already/yet), contraste avec le Past Simple, conseils, service client et projets d'avenir.",
      "de": "Lebenserfahrungen, Meilensteine, Present Perfect (for/since, just/already/yet), Abgrenzung zum Past Simple, Ratschläge geben, Kundenservice und Zukunftspläne.",
      "pt": "Experiências de vida, marcos pessoais, Present Perfect (for/since, just/already/yet), contraste com Past Simple, dar conselhos, atendimento ao cliente e planos futuros.",
      "zh": "生活阅历、人生里程碑、现在完成时 (for/since, just/already/yet)、与一般过去时对比、提供建议、客户服务投诉与未来志向。",
      "ar": "تجارب الحياة، المحطات المهمة، المضارع التام (for/since, just/already/yet)، المقارنة مع الماضي البسيط، تقديم النصائح، خدمة العملاء والطموحات المستقبلية.",
      "ja": "人生経験、ライフイベント、現在完了形 (for/since, just/already/yet)、過去形との使い分け、アドバイスの表現、カスタマーサポート、将来の抱負。",
      "ru": "Жизненный опыт, важные вехи, Present Perfect (for/since, just/already/yet), сравнение с Past Simple, советы и рекомендации, работа с клиентами и планы на будущее."
    },
    "examples": [
      {
        "english": "Have you ever traveled abroad for an international conference?",
        "translation": "¿Alguna vez has viajado al extranjero para una conferencia internacional?",
        "translationsByLang": {
          "hi": "क्या आपने कभी किसी अंतर्राष्ट्रीय सम्मेलन के लिए विदेश यात्रा की है?",
          "es": "¿Alguna vez has viajado al extranjero para una conferencia internacional?",
          "fr": "Avez-vous déjà voyagé à l'étranger pour une conférence internationale ?",
          "de": "Sind Sie jemals für eine internationale Konferenz ins Ausland gereist?",
          "pt": "Você já viajou para o exterior para uma conferência internacional?",
          "zh": "你曾经出国参加过国际会议吗？",
          "ar": "هل سافرت يومًا إلى الخارج لحضور مؤتمر دولي؟",
          "ja": "国際会議のために海外へ旅行したことがありますか？",
          "ru": "Вы когда-нибудь выезжали за границу для участия в международной конференции?"
        },
        "explanation": "Present Perfect question asking about life experience with 'ever'."
      }
    ]
  },
  "lessons": [
    {
      "id": "lesson_a2_9_121",
      "unitId": "unit_a2_9",
      "title": "Life Milestones, Growing Up & Personal Background",
      "description": "Learn to describe personal background, childhood experiences, educational milestones, and major life changes using past narrative forms and time markers.",
      "icon": "🌱",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_9_122",
      "unitId": "unit_a2_9",
      "title": "Present Perfect for Life Experiences (\"Have you ever...?\")",
      "description": "Master asking and answering questions about life experiences using Present Perfect with 'ever' and 'never', regular/irregular participles, and switching to Past Simple for details.",
      "icon": "✨",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_9_123",
      "unitId": "unit_a2_9",
      "title": "Present Perfect vs. Past Simple (Unspecified vs. Specific Time)",
      "description": "Distinguish clearly between Present Perfect (unspecified past time, life experiences, continuing relevance) and Past Simple (completed past events at specific definite times).",
      "icon": "⚖️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_9_124",
      "unitId": "unit_a2_9",
      "title": "Present Perfect with \"Just\", \"Already\", and \"Yet\"",
      "description": "Use Present Perfect with 'just' (very recent actions), 'already' (actions completed sooner than expected), and 'yet' (actions expected to happen in negative sentences and questions).",
      "icon": "⏱️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_9_125",
      "unitId": "unit_a2_9",
      "title": "Expressing Duration: Present Perfect with \"For\" and \"Since\"",
      "description": "Master expressing duration of ongoing actions from the past into the present using Present Perfect with 'for' (periods of time) and 'since' (specific starting points), and 'How long...?' questions.",
      "icon": "⏳",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_9_126",
      "unitId": "unit_a2_9",
      "title": "Workplace Collaboration, Delegating Tasks & Status Updates",
      "description": "Communicate effectively in professional work environments: delegating responsibilities, checking progress on projects, giving concise status reports, and handling deadlines.",
      "icon": "💼",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_9_127",
      "unitId": "unit_a2_9",
      "title": "Travel Disruptions, Flight Delays & Lost Luggage Solutions",
      "description": "Navigate real-world travel emergencies: reporting missed connections, flight delays, cancelled bookings, baggage claims, and negotiating compensation or accommodations.",
      "icon": "🧳",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_9_128",
      "unitId": "unit_a2_9",
      "title": "Housing, Renting, Landlords & Household Maintenance",
      "description": "Communicate with property managers, landlords, and repair technicians regarding lease agreements, rent payments, plumbing/heating faults, and household maintenance issues.",
      "icon": "🏡",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_9_129",
      "unitId": "unit_a2_9",
      "title": "Giving Advice & Making Recommendations",
      "description": "Offer constructive advice and suggestions using modal verbs 'should', 'ought to', 'could', and conversational patterns 'Why don't you...', 'If I were you...', and 'How about...'.",
      "icon": "💡",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_9_130",
      "unitId": "unit_a2_9",
      "title": "Making Complaints & Seeking Solutions in Customer Service",
      "description": "Express dissatisfaction with products or services politely yet assertively, explain defects, request refunds or exchanges, and escalate issues when needed.",
      "icon": "🛎️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_9_131",
      "unitId": "unit_a2_9",
      "title": "Health, Minor Illnesses, Pharmacies & Medical Consultations",
      "description": "Describe physical symptoms, pain levels, and common ailments to healthcare professionals; understand prescription instructions, dosages, and over-the-counter medication advice.",
      "icon": "💊",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_9_132",
      "unitId": "unit_a2_9",
      "title": "Environmental Awareness, Sustainable Living & Recycling",
      "description": "Discuss environmental issues, climate conservation, waste reduction, recycling habits, energy saving, and sustainable daily lifestyle choices in English.",
      "icon": "🌿",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_9_133",
      "unitId": "unit_a2_9",
      "title": "Hobbies, Arts, Creativity & Musical Interests",
      "description": "Discuss leisure pursuits, artistic passions, musical genres, creative talents, and cultural entertainment preferences using expressive vocabulary and gerund/infinitive structures.",
      "icon": "🎨",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_9_134",
      "unitId": "unit_a2_9",
      "title": "Future Aspirations, Career Goals & Life Ambitions",
      "description": "Articulate long-term aspirations, career plans, educational goals, and life ambitions using future structures ('hope to', 'plan on', 'aim to', 'will definitely', 'might').",
      "icon": "🚀",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_9_135",
      "unitId": "unit_a2_9",
      "title": "Unit 9 Review, A2 Level Consolidation & Integrated Milestone Mastery",
      "description": "Comprehensive synthesis and consolidation of all Unit 9 competencies: life narratives, present perfect usage, professional communication, travel & housing problem-solving, environmental discourse, and future goal articulation.",
      "icon": "🏆",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 50,
      "exercises": []
    }
  ]
},
  {
  "id": "unit_a2_10",
  "unitNumber": 10,
  "title": "Unit 10: Practical Life, Civic Services & Everyday Independence",
  "description": "Master essential real-world life skills: banking, postal logistics, municipal services & civic registration, tenancy repairs, public transit disruptions, lost property recovery, energy & utility management, medical & pharmacy visits, health insurance, automotive rentals & breakdowns, emergency response, community volunteering, sustainability, and entry-level job applications.",
  "cefr": "A2",
  "colorTheme": "indigo",
  "guidebook": {
    "title": "A2 Unit 10 Practical Life, Civic Services & Real-World Independence Guidebook",
    "keyGrammarRule": "Modal verbs for official procedures (must, should, have to), passive voice for administrative actions (is required, are delivered, must be submitted), first and zero conditionals for environmental & practical decisions (If you recycle / When you register), suggestion formulas (Why don't we / How about / Let's), and career experience contrast (Present Perfect vs Past Simple).",
    "rulesByLang": {
      "hi": "व्यावहारिक जीवन कौशल, बैंकिंग और डाक सेवाएं, नागरिक और नगरपालिका पंजीकरण, स्वास्थ्य और आपातकालीन सेवाएं, पर्यावरण संरक्षण, और नौकरी साक्षात्कार में पूर्ण A2 प्रवीणता।",
      "es": "Habilidades prácticas reales, servicios bancarios y postales, trámites cívicos, emergencias y consultas médicas, sostenibilidad y entrevistas laborales con fluidez A2.",
      "fr": "Compétences de la vie pratique, services bancaires et postaux, démarches civiques, urgences et santé, développement durable et entretiens d'embauche A2.",
      "de": "Praktische Lebenskompetenzen, Bank- und Postdienste, Behördengänge, Notfälle und Arztbesuche, Nachhaltigkeit und Vorstellungsgespräche auf A2-Niveau.",
      "pt": "Competências da vida prática, serviços bancários e postais, registros cívicos, emergências e consultas médicas, sustentabilidade e entrevistas de emprego A2.",
      "zh": "掌握日常生活实用技能、银行业务、邮政物流、市政登记、医疗就诊、紧急救援、社区志愿、环保可持续及求职面试，达成 A2 全面精通。",
      "ar": "إتقان مهارات الحياة العملية، المعاملات المصرفية والبريدية، الخدمات المدنية، الطوارئ، الرعاية الصحية، الاستدامة البيئية، والمقابلات الوظيفية بمستوى A2.",
      "ja": "日常生活の実践的スキル、銀行・郵便・行政手続き、緊急対応、医療・保険、環境保全、求人応募と面接を総合的にマスターするA2完成ユニット。",
      "ru": "Практические жизненные навыки, банковские и почтовые услуги, муниципальная регистрация, экстренная помощь, медицина, экология и собеседования уровня A2."
    },
    "examples": [
      {
        "english": "If you register at the town hall, you will receive your official residence certificate.",
        "translation": "Si te registras en el ayuntamiento, recibirás tu certificado oficial de residencia.",
        "translationsByLang": {
          "hi": "यदि आप नगर पालिका में पंजीकरण कराएंगे, तो आपको अपना आधिकारिक निवास प्रमाण पत्र प्राप्त होगा।",
          "es": "Si te registras en el ayuntamiento, recibirás tu certificado oficial de residencia.",
          "fr": "Si vous vous inscrivez à la mairie, vous recevrez votre certificat de résidence officiel.",
          "de": "Wenn Sie sich im Rathaus anmelden, erhalten Sie Ihre offizielle Meldebescheinigung.",
          "pt": "Se você se registrar na prefeitura, receberá seu certificado oficial de residência.",
          "zh": "如果你在市政厅登记，你将收到正式的居住证明。",
          "ar": "إذا قمت بالتسجيل في البلدية، فستتلقى شهادة الإقامة الرسمية الخاصة بك.",
          "ja": "市役所で住民登録をすると、公式な居住証明書を受け取ることができます。",
          "ru": "Если вы зарегистрируетесь в мэрии, вы получите официальное свидетельство о регистрации."
        },
        "explanation": "First conditional sentence expressing cause and administrative outcome."
      }
    ]
  },
  "lessons": [
    {
      "id": "lesson_a2_10_136",
      "unitId": "unit_a2_10",
      "title": "Work Responsibilities, Team Roles & Daily Tasks",
      "description": "Describe daily workplace routines, job duties, team hierarchies, and collaborative tasks using professional collocations and obligation modals.",
      "icon": "💼",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_10_137",
      "unitId": "unit_a2_10",
      "title": "Workplace Problem-Solving & Dealing with Delays",
      "description": "Report workplace obstacles, explain project delays, propose practical solutions, and negotiate deadlines using polite conditional expressions.",
      "icon": "🛠️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_10_138",
      "unitId": "unit_a2_10",
      "title": "Scheduling Meetings, Appointments & Resolving Conflicts",
      "description": "Coordinate meeting times, send calendar invites, adjust agendas, and resolve scheduling conflicts with colleagues and clients.",
      "icon": "📅",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_10_139",
      "unitId": "unit_a2_10",
      "title": "Travel Logistics, Booking Adjustments & Itinerary Changes",
      "description": "Handle business and leisure travel logistics, rebook flight and hotel reservations, request itinerary changes, and navigate travel disruptions.",
      "icon": "✈️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_10_140",
      "unitId": "unit_a2_10",
      "title": "Navigating City Services, Public Transport & Local Facilities",
      "description": "Ask for transit assistance, purchase multi-zone passes, inquire about public library and municipal services, and report transit delays.",
      "icon": "🚆",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_10_141",
      "unitId": "unit_a2_10",
      "title": "Housing Problems, Repairs & Landlord Negotiations",
      "description": "Report household maintenance issues, communicate with landlords and contractors, schedule repair visits, and discuss lease terms.",
      "icon": "🏠",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_10_142",
      "unitId": "unit_a2_10",
      "title": "Managing Utility Bills, Energy Usage & Home Automation",
      "description": "Understand utility statements, submit smart meter readings, resolve billing errors, and practice energy-saving household habits.",
      "icon": "💡",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_10_143",
      "unitId": "unit_a2_10",
      "title": "Medical Consultations, Prescriptions & Describing Symptoms",
      "description": "Describe physical symptoms in detail, book GP appointments, understand prescription instructions, and follow doctor recommendations.",
      "icon": "🩺",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_10_144",
      "unitId": "unit_a2_10",
      "title": "Health Insurance, Claim Processes & Pharmacy Interactions",
      "description": "Navigate health insurance policies, file reimbursement claims with receipts, ask about deductibles, and consult with pharmacists.",
      "icon": "💳",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_10_145",
      "unitId": "unit_a2_10",
      "title": "Automotive Needs, Car Rentals & Roadside Assistance",
      "description": "Rent a vehicle, understand rental insurance and collision damage waivers, report car breakdowns, and request roadside assistance.",
      "icon": "🚗",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_10_146",
      "unitId": "unit_a2_10",
      "title": "Emergency Services, Reporting Incidents & Urgent Support",
      "description": "Call emergency dispatchers (999/911/112), provide precise incident locations, report accidents, fires, and urgent medical events calmly.",
      "icon": "🚨",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_10_147",
      "unitId": "unit_a2_10",
      "title": "Community Volunteering, Local Initiatives & Neighborhood Projects",
      "description": "Participate in local volunteer initiatives, coordinate charity food drives and park cleanups, and make collaborative suggestions.",
      "icon": "🤝",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_10_148",
      "unitId": "unit_a2_10",
      "title": "Environmental Sustainability, Waste Management & Green Living",
      "description": "Sort recyclables, compost food waste, adopt zero-waste habits, and discuss environmental cause and effect using conditionals.",
      "icon": "♻️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_10_149",
      "unitId": "unit_a2_10",
      "title": "Job Hunting, Basic CVs & Entry-Level Job Interviews",
      "description": "Apply for job vacancies, write a clear entry-level CV, highlight workplace strengths and availability, and answer interview questions.",
      "icon": "💼",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_10_150",
      "unitId": "unit_a2_10",
      "title": "Unit 10 Comprehensive Review & CEFR A2 Cumulative Mastery Synthesis",
      "description": "Consolidate all linguistic, lexical, and communicative competencies across Unit 10 and celebrate achieving full CEFR A2 English mastery.",
      "icon": "🏆",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 50,
      "exercises": []
    }
  ]
},
  {
  "id": "unit_a2_11",
  "unitNumber": 11,
  "title": "Unit 11: Team Dynamics, Social Decisions & Extended Everyday Fluency",
  "description": "Master collaborative teamwork, polite workplace inquiries & feedback, nuanced recommendations, social organizing, media discussions, personal finance & budgeting, wellness routines, administrative procedures, and digital remote communication.",
  "cefr": "A2",
  "colorTheme": "teal",
  "guidebook": {
    "title": "A2 Unit 11 Team Dynamics, Social Decisions & Extended Everyday Fluency Guidebook",
    "keyGrammarRule": "Infinitives of purpose (in order to / to + verb), polite clarification modals (could you possibly / would you mind), comparative intensifiers (far better / much more), suggestions and invitations (Shall we / How about / Why don't we), obligation and recommendation modals (ought to / had better / be supposed to), and passive news reporting frames (It is reported that / According to).",
    "rulesByLang": {
      "hi": "टीम सहयोग, रचनात्मक प्रतिक्रिया, विनम्र स्पष्टीकरण, सामाजिक योजनाएं, समाचार रिपोर्टिंग, व्यक्तिगत बजट, स्वास्थ्य दिनचर्या, और दूरस्थ डिजिटल संचार में पूर्ण A2 प्रवीणता।",
      "es": "Trabajo en equipo colaborativo, feedback constructivo, aclaraciones corteses, organización social, noticias, finanzas personales, bienestar y comunicación digital remota con fluidez A2.",
      "fr": "Dynamique d'équipe, feedback constructif, demandes polies, organisation d'événements, actualités, budget personnel, bien-être et collaboration à distance au niveau A2.",
      "de": "Teamdynamik, konstruktives Feedback, höfliche Klärungen, Veranstaltungsplanung, Nachrichten, persönliche Finanzen, Wohlbefinden und digitale Remote-Kommunikation auf A2-Niveau.",
      "pt": "Dinâmica de equipe, feedback construtivo, esclarecimentos corteses, organização social, notícias, finanças pessoais, bem-estar e comunicação digital remota no nível A2.",
      "zh": "掌握团队协作、建设性反馈、礼貌澄清、社交活动策划、新闻讨论、个人理财预算、健康日常及远程数字沟通，达成 A2 拓展流利度。",
      "ar": "إتقان ديناميكيات العمل الجماعي، الملاحظات البناءة، الاستفسارات المهذبة، التنظيم الاجتماعي، متابعة الأخبار، الميزانية الشخصية، العافية، والتواصل الرقمي عن بُعد بمستوى A2.",
      "ja": "チームワーク、建設的フィードバック、丁寧な確認、イベント企画、ニュース議論、家計管理、健康ルーティン、リモート協働を総合的にマスターするA2応用ユニット。",
      "ru": "Командная работа, конструктивная обратная связь, вежливые уточнения, организация мероприятий, новости, личный бюджет, здоровье и удаленная коммуникация уровня A2."
    },
    "examples": [
      {
        "english": "We hold weekly sync meetings in order to coordinate our project milestones efficiently.",
        "translation": "Nos reunimos semanalmente para coordinar los hitos de nuestro proyecto de manera eficiente.",
        "translationsByLang": {
          "hi": "हम अपने प्रोजेक्ट के मील के पत्थरों को कुशलतापूर्वक समन्वित करने के लिए साप्ताहिक बैठकें करते हैं।",
          "es": "Nos reunimos semanalmente para coordinar los hitos de nuestro proyecto de manera eficiente.",
          "fr": "Nous organisons des réunions hebdomadaires afin de coordonner efficacement les étapes de notre projet.",
          "de": "Wir halten wöchentliche Abstimmungen ab, um unsere Projektmeilensteine effizient zu koordinieren.",
          "pt": "Realizamos reuniões semanais para coordenar os marcos do nosso projeto com eficiência.",
          "zh": "我们每周举行同步会议，以便高效协调项目里程碑。",
          "ar": "نعقد اجتماعات أسبوعية لتنسيق معالم مشروعنا بكفاءة.",
          "ja": "プロジェクトのマイルストーンを効率的に調整するために、私たちは毎週ミーティングを行っています。",
          "ru": "Мы проводим еженедельные встречи, чтобы эффективно координировать ключевые этапы проекта."
        },
        "explanation": "Infinitive of purpose ('in order to + verb') expressing organizational objective."
      }
    ]
  },
  "lessons": [
    {
      "id": "lesson_a2_11_151",
      "unitId": "unit_a2_11",
      "title": "Teamwork Dynamics, Collaborating on Tasks & Dividing Roles",
      "description": "Express purpose using 'in order to' and 'to + verb', divide project roles among teammates, and coordinate collaborative workflows.",
      "icon": "🤝",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_11_152",
      "unitId": "unit_a2_11",
      "title": "Giving Constructive Feedback & Explaining Reasons",
      "description": "Offer constructive peer feedback tactfully using 'could consider', soften critique with qualifiers, and justify suggestions with 'because of' and 'due to'.",
      "icon": "💬",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_11_153",
      "unitId": "unit_a2_11",
      "title": "Handling Misunderstandings & Asking for Clarification",
      "description": "Resolve confusion professionally, request rephrasing with polite formulaic phrases ('Could you clarify...', 'What did you mean by...'), and confirm shared agreement.",
      "icon": "❓",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_11_154",
      "unitId": "unit_a2_11",
      "title": "Recommending Options & Comparing Alternatives",
      "description": "Evaluate products, venues, and solutions using comparative intensifiers ('much better', 'far cheaper') and equality structures ('not as... as').",
      "icon": "⚖️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_11_155",
      "unitId": "unit_a2_11",
      "title": "Planning Social Events, Celebrations & Organizing Activities",
      "description": "Propose event itineraries using 'Shall we', coordinate logistics, divide preparations, and build consensus for social gatherings.",
      "icon": "🎉",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_11_156",
      "unitId": "unit_a2_11",
      "title": "Social Invitations, Accepting, Declining & Giving Excuses",
      "description": "Extend formal and casual invitations, accept with enthusiasm, decline diplomatically, and provide polite justifications.",
      "icon": "💌",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_11_157",
      "unitId": "unit_a2_11",
      "title": "Discussing Current News, Local Events & Media Reports",
      "description": "Discuss headlines, summarize local developments, use passive reporting formulas ('It is said that...', 'According to...'), and share opinions on current events.",
      "icon": "📰",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_11_158",
      "unitId": "unit_a2_11",
      "title": "Personal Finance, Budgeting, Spending Habits & Smart Shopping",
      "description": "Discuss personal spending, categorize living expenses, evaluate bargains, and express financial conditions with First Conditional ('If I save...').",
      "icon": "💰",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_11_159",
      "unitId": "unit_a2_11",
      "title": "Health, Fitness Habits, Wellness Routines & Healthy Choices",
      "description": "Describe exercise habits, nutrition plans, mental wellness, and give health advice using 'ought to' and 'had better'.",
      "icon": "🏃",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_11_160",
      "unitId": "unit_a2_11",
      "title": "Unit 11 Review & Mid-Unit Progress Check",
      "description": "Consolidate teamwork strategies, comparative recommendations, social event planning, news discussion, budgeting, and wellness advice.",
      "icon": "🎯",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 30,
      "exercises": []
    },
    {
      "id": "lesson_a2_11_161",
      "unitId": "unit_a2_11",
      "title": "Narrating Personal Journeys, Memorable Trips & Travel Misadventures",
      "description": "Narrate memorable travel experiences, unexpected delays, and logistical mishaps by combining Past Continuous and Past Simple with narrative sequencers.",
      "icon": "✈️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_11_162",
      "unitId": "unit_a2_11",
      "title": "Environmental Awareness, Sustainability & Daily Green Habits",
      "description": "Discuss conservation practices, zero-waste initiatives, renewable energy, and environmental cause-and-effect with zero and first conditionals.",
      "icon": "🌱",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_11_163",
      "unitId": "unit_a2_11",
      "title": "Digital Communication, Remote Collaboration & Virtual Etiquette",
      "description": "Navigate remote video conferences, asynchronous messaging, technical troubleshooting, and workplace expectations using 'be supposed to'.",
      "icon": "💬",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_11_164",
      "unitId": "unit_a2_11",
      "title": "Customer Service, Returns, Exchanges & Formal Inquiries",
      "description": "Assert consumer rights, request refunds and replacements for defective goods, ask about warranties, and resolve merchant disputes constructively.",
      "icon": "🛡️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_11_165",
      "unitId": "unit_a2_11",
      "title": "Unit 11 Capstone, Comprehensive A2 Culmination & Mastery Gateway",
      "description": "Comprehensive synthesis and capstone evaluation of all CEFR A2 linguistic, communicative, and lexical competencies across Units 7 through 11.",
      "icon": "🏆",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 50,
      "exercises": []
    }
  ]
},
  {
  "id": "unit_a2_12",
  "unitNumber": 12,
  "title": "Unit 12: Advanced Project Collaboration, Strategic Problem Solving & A2 Mastery Gate",
  "description": "Master project updates, technical problem explanations, proposing solutions, negotiating compromises, making contingency plans, group logistics, presentation pitches, and comprehensive A2 graduation mastery.",
  "cefr": "A2",
  "colorTheme": "indigo",
  "guidebook": {
    "title": "A2 Unit 12 Advanced Collaboration & Strategic Problem Solving Guidebook",
    "keyGrammarRule": "Present Perfect with already/yet/just, modal verbs of deduction and possibility (must be, might be, could be), conditional structures for alternatives (If we... we could...), polite negotiation frames, and future plans with contingencies.",
    "rulesByLang": {
      "hi": "परियोजना अपडेट, तकनीकी समस्याओं का स्पष्टीकरण, रचनात्मक समाधान, समझौता वार्ता, आकस्मिक योजनाएं, और पूर्ण A2 प्रवीणता का अंतिम समापन।",
      "es": "Actualizaciones de proyectos, explicación de problemas técnicos, soluciones creativas, negociación de acuerdos, planes de contingencia y graduación completa de nivel A2.",
      "fr": "Mises à jour de projets, explications de problèmes techniques, solutions créatives, négociation de compromis, plans de secours et maîtrise globale A2.",
      "de": "Projektaktualisierungen, Erklärung technischer Probleme, kreative Lösungen, Kompromissverhandlungen, Notfallpläne und umfassende A2-Abschlussbeherrschung.",
      "pt": "Atualizações de projetos, explicação de problemas técnicos, propostas de soluções, negociação de acordos, planos de contingência e maestria completa do nível A2.",
      "zh": "掌握项目进展汇报、技术故障解释、创新方案提议、妥协协商、应急预案制定及 A2 阶段终极毕业通关。",
      "ar": "إتقان تحديثات المشاريع، وشرح المشكلات الفنية، واقتراح الحلول، والتفاوض، وخطط الطوارئ، واجتياز بوابة إتقان المستوى A2 بالكامل。",
      "ja": "プロジェクト進捗報告、技術的問題の説明、解決策の提案、妥協の交渉、代替案の計画、そしてA2修了総合マスタリーゲートの達成。",
      "ru": "Отчеты о ходе проектов, объяснение технических проблем, предложение решений, переговоры о компромиссах, планы на случай непредвиденных обстоятельств и полное овладение уровнем A2。"
    },
    "examples": [
      {
        "english": "We have already completed the initial milestone, but we might encounter delays if the server is down.",
        "translation": "Ya hemos completado el hito inicial, pero podríamos experimentar retrasos si el servidor se cae.",
        "translationsByLang": {
          "hi": "हमने पहले ही प्रारंभिक मील का पत्थर पूरा कर लिया है, लेकिन यदि सर्वर डाउन हो जाता है तो हमें देरी का सामना करना पड़ सकता है।",
          "es": "Ya hemos completado el hito inicial, pero podríamos experimentar retrasos si el servidor se cae.",
          "fr": "Nous avons déjà franchi la première étape, mais nous pourrions avoir du retard si le serveur tombe en panne.",
          "de": "Wir haben den ersten Meilenstein bereits abgeschlossen, könnten jedoch Verzögerungen erleben, falls der Server ausfällt.",
          "pt": "Já concluímos o marco inicial, mas podemos enfrentar atrasos se o servidor cair.",
          "zh": "我们已经完成了初始里程碑，但如果服务器宕机，我们可能会遇到延误。",
          "ar": "لقد أكملنا بالفعل المرحلة الأولى، ولكن قد نواجه تأخيرات إذا تعطل الخادم。",
          "ja": "最初のマイルストーンはすでに完了していますが、サーバーがダウンすると遅延が発生する可能性があります。",
          "ru": "Мы уже завершили начальный этап, но можем столкнуться с задержками, если сервер выйдет из строя。"
        },
        "explanation": "Combination of Present Perfect ('have completed') with modal deduction ('might encounter') and conditional contingency."
      }
    ]
  },
  "lessons": [
    {
      "id": "lesson_a2_12_166",
      "unitId": "unit_a2_12",
      "title": "Project Updates, Status Reports & Explaining Milestones",
      "description": "Report project progress using Present Perfect with 'already', 'yet', and 'just', describe milestones, and give status overviews.",
      "icon": "📊",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_12_167",
      "unitId": "unit_a2_12",
      "title": "Explaining Work & Technical Problems Clearly",
      "description": "Describe workflow bottlenecks, explain technical malfunctions accurately, and report root causes using passive and causative phrasing.",
      "icon": "⚙️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_12_168",
      "unitId": "unit_a2_12",
      "title": "Proposing Creative Solutions & Brainstorming Alternatives",
      "description": "Suggest innovative workarounds, weigh potential pros and cons, and pitch creative options using modal suggestions and conditional clauses.",
      "icon": "💡",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_12_169",
      "unitId": "unit_a2_12",
      "title": "Negotiating Simple Arrangements & Making Compromises",
      "description": "Find common ground, trade concessions, propose mutual compromises, and finalize agreements politely with conditional offers.",
      "icon": "🤝",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_12_170",
      "unitId": "unit_a2_12",
      "title": "Making Plans with Constraints & Contingencies",
      "description": "Create contingency plans using 'in case', 'as long as', and 'unless', managing project constraints and unpredictable risks.",
      "icon": "🛡️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_12_171",
      "unitId": "unit_a2_12",
      "title": "Organizing Group Trips, Itineraries & Logistics",
      "description": "Coordinate travel arrangements, divide group responsibilities, organize timetable schedules, and manage transportation logistics.",
      "icon": "🗺️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_12_172",
      "unitId": "unit_a2_12",
      "title": "Presenting Ideas, Pitches & Creative Concepts",
      "description": "Deliver structured brief presentations, introduce slide topics with signposting language, and engage listeners persuasively.",
      "icon": "🎤",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_12_173",
      "unitId": "unit_a2_12",
      "title": "Problem-Solving, Brainstorming & Action Items",
      "description": "Facilitate productive meetings, summarize key action items, assign deadlines, and document collective decisions clearly.",
      "icon": "📋",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_12_174",
      "unitId": "unit_a2_12",
      "title": "Formal Invitations, RSVPs & Event Etiquette",
      "description": "Write and respond to formal event invitations, specify dietary requirements and dress codes, and follow social protocol.",
      "icon": "✉️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_12_175",
      "unitId": "unit_a2_12",
      "title": "Navigating Cross-Cultural Etiquette & Social Nuances",
      "description": "Respect cultural differences, navigate polite small talk across cultures, and adjust conversational register appropriately.",
      "icon": "🌐",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_12_176",
      "unitId": "unit_a2_12",
      "title": "Modern Remote Collaboration, Tools & Async Work",
      "description": "Master asynchronous team communication, set remote work expectations, use collaborative digital workspaces, and manage threads.",
      "icon": "💻",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_12_177",
      "unitId": "unit_a2_12",
      "title": "Handling Constructive Feedback, Criticisms & Praise",
      "description": "Receive performance feedback gracefully, ask clarifying questions on evaluations, and acknowledge praise professionally.",
      "icon": "🌟",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_12_178",
      "unitId": "unit_a2_12",
      "title": "Giving Impactful Presentations & Pitching Ideas",
      "description": "Structure compelling presentations, highlight key data and benefits with visual aids, and handle Q&A questions confidently.",
      "icon": "📈",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_12_179",
      "unitId": "unit_a2_12",
      "title": "Complex Problem Solving & Decision Making",
      "description": "Analyze complex multi-factor challenges, evaluate risks and trade-offs systematically, and make justified group decisions.",
      "icon": "🧩",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_12_180",
      "unitId": "unit_a2_12",
      "title": "Unit 12 Capstone & A2 Level Comprehensive Graduation Mastery Gate",
      "description": "The definitive CEFR A2 mastery synthesis and graduation evaluation spanning all conversational, grammatical, and lexical competencies from Lessons 1 to 180.",
      "icon": "🎓",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 100,
      "exercises": []
    }
  ]
},
{
  "id": "unit_a2_13",
  "unitNumber": 13,
  "title": "Unit 13: Nature, Arts, Entertainment, Gastronomy & Global Cultural Traditions",
  "description": "Explore natural landscapes, weather phenomena, world cuisines, dining traditions, museum heritage, live music, cinema reviews, city sightseeing, social gatherings, outdoor adventures, visual photography, culinary arts, and global celebrations.",
  "cefr": "A2",
  "colorTheme": "teal",
  "guidebook": {
    "title": "A2 Unit 13 Nature, Arts, Gastronomy & Culture Guidebook",
    "keyGrammarRule": "Defining relative clauses (who, which, that, where), correlative conjunctions (both...and, either...or, neither...nor), comparative structures, preference frames (prefer to, would rather than), polite modal requests (would like, could we have), culinary imperatives, and sequencers.",
    "rulesByLang": {
      "hi": "प्राकृतिक परिदृश्य, मौसम की स्थिति, विश्व व्यंजन, भोजन परंपराएं, संग्रहालय धरोहर, लाइव संगीत, सिनेमा समीक्षा, शहर भ्रमण और वैश्विक सांस्कृतिक उत्सव।",
      "es": "Paisajes naturales, fenómenos meteorológicos, gastronomía mundial, tradiciones culinarias, patrimonio museístico, música en vivo, críticas de cine, turismo urbano y celebraciones globales.",
      "fr": "Paysages naturels, phénomènes météo, gastronomies du monde, traditions culinaires, patrimoine muséal, musique live, critiques de films, visites urbaines et célébrations mondiales.",
      "de": "Naturlandschaften, Wetterphänomene, Weltküchen, Esskulturen, Museumserbe, Live-Musik, Filmkritiken, Stadtbesichtigungen und weltweite Kulturfeste.",
      "pt": "Paisagens naturais, fenômenos climáticos, culinária mundial, tradições gastronômicas, patrimônio de museus, música ao vivo, resenhas de cinema, turismo urbano e celebrações culturais globais.",
      "zh": "探索自然风光、天气现象、世界美食、就餐传统、博物馆遗产、现场音乐、影评、城市观光、户外探险及全球节日庆典。",
      "ar": "استكشاف المناظر الطبيعية، والظواهر الجوية، والمطابخ العالمية، وتقاليد تناول الطعام، وتراث المتاحف، والموسيقى الحية، ومراجعات الأفلام، وجولات المدن، والاحتفالات الثقافية العالمية。",
      "ja": "自然景観、気象現象、世界の料理、食の伝統、博物館の遺産、ライブ音楽、映画レビュー、都市観光、アウトドアアドベンチャー、そして世界中の文化的な祝祭を探求します。",
      "ru": "Природные ландшафты, погодные явления, кухни мира, кулинарные традиции, музейное наследие, живая музыка, кинообзоры, осмотр городских достопримечательностей и мировые праздники。"
    },
    "examples": [
      {
        "english": "This is the national park where rare birds live, and we would rather explore it on foot than by bus.",
        "translation": "Este es el parque nacional donde viven aves raras, y preferiríamos explorarlo a pie que en autobús.",
        "translationsByLang": {
          "hi": "यह वह राष्ट्रीय उद्यान है जहाँ दुर्लभ पक्षी रहते हैं, और हम बस के बजाय पैदल ही इसका पता लगाना पसंद करेंगे।",
          "es": "Este es el parque nacional donde viven aves raras, y preferiríamos explorarlo a pie que en autobús.",
          "fr": "C'est le parc national où vivent des oiseaux rares, et nous préférerions l'explorer à pied qu'en bus.",
          "de": "Dies ist der Nationalpark, in dem seltene Vögel leben, und wir würden ihn lieber zu Fuß als mit dem Bus erkunden.",
          "pt": "Este é o parque nacional onde vivem aves raras, e preferiríamos explorá-lo a pé do que de ônibus.",
          "zh": "这是珍稀鸟类栖息的国家公园，我们宁愿步行探索也不愿坐巴士。",
          "ar": "هذه هي الحديقة الوطنية حيث تعيش الطيور النادرة، ونفضل استكشافها سيرًا على الأقدام بدلاً من الحافلة。",
          "ja": "ここは希少な鳥が生息する国立公園で、私たちはバスよりも徒歩で探索したいと思っています。",
          "ru": "Это национальный парк, где обитают редкие птицы, и мы предпочли бы исследовать его пешком, а не на автобусе。"
        },
        "explanation": "Defining relative clause ('where rare birds live') with modal preference ('would rather explore ... than')."
      }
    ]
  },
  "lessons": [
    {
      "id": "lesson_a2_13_181",
      "unitId": "unit_a2_13",
      "title": "Exploring Nature, Landscapes, National Parks & Wildlife",
      "description": "Describe natural landscapes, wildlife reserves, geography, and outdoor habitats using defining relative clauses with 'who', 'which', 'that', and 'where'.",
      "icon": "🌲",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_13_182",
      "unitId": "unit_a2_13",
      "title": "Weather Extremes, Seasonal Activities & Outdoor Adventures",
      "description": "Discuss extreme weather conditions, seasonal activities, forecasts, and outdoor preparations using cause-and-effect clauses with 'because of', 'due to', and 'as a result'.",
      "icon": "⛅",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_13_183",
      "unitId": "unit_a2_13",
      "title": "World Cuisines, Flavors, Ingredients & Cooking Techniques",
      "description": "Describe international dishes, diverse flavor profiles, fresh ingredients, and kitchen cooking methods using descriptive adjective order and sensory verbs.",
      "icon": "🍳",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_13_184",
      "unitId": "unit_a2_13",
      "title": "Ordering at Local Eateries, Food Markets & Dining Traditions",
      "description": "Navigate bustling food markets, local bistros, and authentic street food stalls, order meals politely using modal frames, and express dietary restrictions.",
      "icon": "🍽️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_13_185",
      "unitId": "unit_a2_13",
      "title": "Arts, Museums, Exhibitions & Cultural Heritage",
      "description": "Discuss art galleries, historical artifacts, museum exhibitions, and cultural heritage using passive voice constructions in present and past simple.",
      "icon": "🏛️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_13_186",
      "unitId": "unit_a2_13",
      "title": "Music, Concerts, Festivals & Live Performances",
      "description": "Talk about musical genres, live concerts, stage performances, and festival lineups using correlative conjunctions and descriptive qualifiers.",
      "icon": "🎵",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_13_187",
      "unitId": "unit_a2_13",
      "title": "Cinema, Films, Theater & Reviewing Entertainment",
      "description": "Discuss cinema, film genres, theatrical plays, acting, plots, and entertainment reviews while mastering 'prefer' and 'would rather'.",
      "icon": "🎬",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_13_188",
      "unitId": "unit_a2_13",
      "title": "City Sightseeing, Iconic Landmarks & Navigating Historic Quarters",
      "description": "Ask for and give directions to historic landmarks, monuments, and architecture using prepositional phrases of place and movement.",
      "icon": "🗺️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_13_189",
      "unitId": "unit_a2_13",
      "title": "Social Invitations, Weekend Outings & Making Group Plans",
      "description": "Extend, accept, and decline social invitations politely, suggest weekend leisure activities, and make group outing plans.",
      "icon": "🎈",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_13_190",
      "unitId": "unit_a2_13",
      "title": "Music Genres, Live Concerts, Gigs & Festivals",
      "description": "Discuss diverse musical genres, live concerts, stage performances, festival lineups, and artist collaborations using correlative conjunctions.",
      "icon": "🎸",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_13_191",
      "unitId": "unit_a2_13",
      "title": "Outdoor Adventures, Kayaking, Biking & Camping Expeditions",
      "description": "Discuss camping gear, trail navigation, water sports, and outdoor expeditions using modal verbs for permission, necessity, and safety.",
      "icon": "⛺",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_13_192",
      "unitId": "unit_a2_13",
      "title": "Photography, Framing Shots, Capturing Memories & Visual Storytelling",
      "description": "Discuss photography techniques, camera settings, framing shots, lighting, and sharing travel memories with descriptive visual language.",
      "icon": "📷",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_13_193",
      "unitId": "unit_a2_13",
      "title": "Culinary Arts, Cooking Styles, Recipes & World Cuisines",
      "description": "Explain cooking procedures, follow detailed recipes, describe global cuisines, and use culinary imperatives and sequence adverbs.",
      "icon": "🍲",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_13_194",
      "unitId": "unit_a2_13",
      "title": "Cultural Traditions, Global Celebrations, Rituals & Customs",
      "description": "Discuss global holidays, cultural traditions, folk dances, family customs, and festive celebrations across world societies.",
      "icon": "🎆",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_13_195",
      "unitId": "unit_a2_13",
      "title": "Unit 13 Comprehensive Review, Synthesis & Communicative Mastery",
      "description": "Consolidate all nature, gastronomy, arts, entertainment, outdoor adventures, photography, and cultural heritage competencies in a grand capstone.",
      "icon": "🏆",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 100,
      "exercises": []
    }
  ]
},
{
  "id": "unit_a2_14",
  "unitNumber": 14,
  "title": "Unit 14: Official Procedures, Higher Education & Nuanced Conversational Strategies",
  "description": "Official paperwork, administrative requests, customs declarations, university campus life, study habits, exam strategies, question tags, conversational echoes, repair strategies, diplomatic requests, and extended multi-paragraph writing.",
  "cefr": "A2",
  "colorTheme": "blue",
  "guidebook": {
    "title": "A2 Unit 14 Official Procedures, Higher Education & Conversational Strategies Guidebook",
    "keyGrammarRule": "Indirect polite questions (Could you tell me where...), question tags across all tenses and modals, conversational agreement rejoinders (So do I / Neither do I), clarification and repair markers, softening modal frames (Would you mind -ing), and transitional paragraph connectors (Furthermore, However, In conclusion).",
    "rulesByLang": {
      "hi": "आधिकारिक फॉर्म, सार्वजनिक प्रशासनिक पूछताछ, सीमा शुल्क घोषणाएं, विश्वविद्यालय जीवन, अध्ययन की आदतें, प्रश्न टैग, बातचीत की गूँज, सुधार रणनीतियाँ, विनम्र अनुरोध और सुसंगत लेखन।",
      "es": "Formularios oficiales, consultas administrativas públicas, declaraciones de aduanas, vida universitaria, hábitos de estudio, preguntas coletilla (tags), ecos conversacionales, estrategias de reparación, peticiones formales y redacción cohesionada.",
      "fr": "Formulaires officiels, démarches administratives, déclarations en douane, vie universitaire, méthodes de travail, question tags, relances conversationnelles, stratégies d'auto-correction, requêtes polies et rédaction structurée.",
      "de": "Offizielle Formulare, Behördengänge, Zollerklärungen, Universitätsleben, Lerntechniken, Question Tags, Gesprächsreaktionen, Reparaturstrategien, höfliche Bitten und kohärentes Schreiben.",
      "pt": "Formulários oficiais, consultas administrativas públicas, declarações alfandegárias, vida universitária, hábitos de estudo, question tags, ecos conversacionais, estratégias de reparação, pedidos educados e escrita coesa.",
      "zh": "官方表格填写、行政机构事务咨询、海关申报、大学校园生活、学习技巧、反意疑问句、对话回应与共鸣、对话修补技巧、委婉请求与连贯性段落写作。",
      "ar": "الاستمارات الرسمية، والاستفسارات الإدارية، والإقرارات الجمركية، والحياة الجامعية، وعادات الدراسة، والأسئلة المذيلة، والردود الحوارية، واستراتيجيات تصحيح التواصل، والطلبات المهذبة، والكتابة المترابطة。",
      "ja": "公式申請書の記入、公共機関での手続き、税関申告、大学生活、学習習慣、付加疑問文、会話の相づちと同意表現、会話修復戦略、丁寧な依頼表現、および論理的な段落記述。",
      "ru": "Официальные формы, запросы в государственные учреждения, таможенные декларации, университетская жизнь, учебные привычки, разделительные вопросы, разговорные реплики согласия, стратегии исправления недопонимания, вежливые просьбы и связное письмо。"
    },
    "examples": [
      {
        "english": "Could you tell me where counter number four is?",
        "translation": "¿Podría decirme dónde está la ventanilla número cuatro?",
        "translationsByLang": {
          "hi": "क्या आप मुझे बता सकते हैं कि काउंटर नंबर चार कहाँ है?",
          "es": "¿Podría decirme dónde está la ventanilla número cuatro?",
          "fr": "Pourriez-vous me dire où se trouve le guichet numéro quatre ?",
          "de": "Könnten Sie mir sagen, wo Schalter Nummer vier ist?",
          "pt": "Você poderia me dizer onde fica o guichê número quatro?",
          "zh": "请问四号窗口在哪里？",
          "ar": "هل يمكنك إخباري أين يقع الشباك رقم أربعة؟",
          "ja": "4番窓口がどこにあるか教えていただけますか？",
          "ru": "Не могли бы вы подсказать, где находится окно номер четыре?"
        },
        "explanation": "Polite indirect question using modal 'Could you tell me where...' with standard word order."
      },
      {
        "english": "You haven't submitted your registration form yet, have you?",
        "translation": "Todavía no has enviado tu formulario de registro, ¿verdad?",
        "translationsByLang": {
          "hi": "आपने अभी तक अपना पंजीकरण फॉर्म जमा नहीं किया है, है न?",
          "es": "Todavía no has enviado tu formulario de registro, ¿verdad?",
          "fr": "Vous n'avez pas encore soumis votre formulaire d'inscription, n'est-ce pas ?",
          "de": "Sie haben Ihr Anmeldeformular noch nicht eingereicht, oder?",
          "pt": "Você ainda não enviou seu formulário de inscrição, enviou?",
          "zh": "你还没提交注册表，对吧？",
          "ar": "لم تقدم استمارة التسجيل الخاصة بك بعد، أليس كذلك؟",
          "ja": "まだ登録用紙を提出していませんね？",
          "ru": "Вы ведь еще не подали регистрационную форму, не так ли?"
        },
        "explanation": "Negative present perfect statement with positive question tag ('have you?')."
      },
      {
        "english": "I enjoy studying in the campus library. — So do I!",
        "translation": "Disfruto estudiar en la biblioteca del campus. — ¡Yo también!",
        "translationsByLang": {
          "hi": "मुझे परिसर के पुस्तकालय में पढ़ना पसंद है। — मुझे भी!",
          "es": "Disfruto estudiar en la biblioteca del campus. — ¡Yo también!",
          "fr": "J'aime étudier à la bibliothèque du campus. — Moi aussi !",
          "de": "Ich lerne gerne in der Campusbibliothek. — Ich auch!",
          "pt": "Eu gosto de estudar na biblioteca do campus. — Eu também!",
          "zh": "我喜欢在大学图书馆学习。—— 我也是！",
          "ar": "أستمتع بالدراسة في مكتبة الحرم الجامعي. — وأنا كذلك!",
          "ja": "キャンパスの図書館で勉強するのが好きです。— 私もです！",
          "ru": "Мне нравится учиться в университетской библиотеке. — Мне тоже!"
        },
        "explanation": "Conversational agreement rejoinder using 'So + auxiliary verb + subject'."
      },
      {
        "english": "If I understand correctly, the deadline has been extended to Friday.",
        "translation": "Si entiendo correctamente, el plazo se ha ampliado hasta el viernes.",
        "translationsByLang": {
          "hi": "यदि मैं सही समझ पा रहा हूँ, तो अंतिम तिथि शुक्रवार तक बढ़ा दी गई है।",
          "es": "Si entiendo correctamente, el plazo se ha ampliado hasta el viernes.",
          "fr": "Si je comprends bien, la date limite a été reportée à vendredi.",
          "de": "Wenn ich das richtig verstehe, wurde die Frist bis Freitag verlängert.",
          "pt": "Se entendi corretamente, o prazo foi estendido até sexta-feira.",
          "zh": "如果我理解正确的话，截止日期已经延长到周五了。",
          "ar": "إذا فهمت بشكل صحيح، فقد تم تمديد الموعد النهائي إلى يوم الجمعة。",
          "ja": "私の理解が正しければ、締め切りは金曜日まで延長されました。",
          "ru": "Если я правильно понимаю, крайний срок был продлен до пятницы。"
        },
        "explanation": "Conversational repair and checking technique to confirm mutual understanding."
      }
    ]
  },
  "lessons": [
    {
      "id": "lesson_a2_14_196",
      "unitId": "unit_a2_14",
      "title": "Official Forms, Personal Details & Applications",
      "description": "Navigate official application forms, understand administrative instructions in block capitals, and accurately provide personal details and declarations.",
      "icon": "📝",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_14_197",
      "unitId": "unit_a2_14",
      "title": "Appointments, Public Offices & Administrative Requests",
      "description": "Master scheduling appointments, queuing at municipal counters, understanding administrative numbers, and making polite formal requests.",
      "icon": "🏛️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_14_198",
      "unitId": "unit_a2_14",
      "title": "Postal Services, Packages, Customs & Declarations",
      "description": "Send parcels, track shipments, calculate postage rates, and complete international customs declaration forms.",
      "icon": "📦",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_14_199",
      "unitId": "unit_a2_14",
      "title": "Higher Education, Universities, Degrees & Campus Life",
      "description": "Discuss university programs, degree qualifications, seminars, campus facilities, and academic requirements.",
      "icon": "🎓",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_14_200",
      "unitId": "unit_a2_14",
      "title": "Study Habits, Exams, Grades & Learning Goals",
      "description": "Develop expressions for revision techniques, exam strategies, understanding grading systems, and setting achievable academic goals.",
      "icon": "📊",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_14_201",
      "unitId": "unit_a2_14",
      "title": "Question Tags in Natural Conversation",
      "description": "Master question tags across present, past, and modal auxiliary verbs with falling and rising intonation.",
      "icon": "❓",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_14_202",
      "unitId": "unit_a2_14",
      "title": "Conversational Echoes, Agreement & Rejoinders",
      "description": "Use conversational echoes, rejoinders, and agreement patterns (So do I, Neither do I) to maintain engaging dialogues.",
      "icon": "💬",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_14_203",
      "unitId": "unit_a2_14",
      "title": "Conversational Repair: Clarifying, Paraphrasing & Checking",
      "description": "Learn strategic phrases to ask for repetition, check mutual understanding, paraphrase what was said, and repair misunderstandings smoothly.",
      "icon": "🔄",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_14_204",
      "unitId": "unit_a2_14",
      "title": "Softening Requests, Asking for Favours & Polite Declining",
      "description": "Master diplomatic language in English: 'Would you mind...', 'I was wondering if...', indirect questions, softeners, and declining invitations politely.",
      "icon": "🌸",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_14_205",
      "unitId": "unit_a2_14",
      "title": "Extended Writing: Paragraph Structure, Connectors & Linking Words",
      "description": "Construct cohesive, multi-paragraph essays and formal letters using topic sentences, supporting evidence, contrastive connectors, and concluding summaries.",
      "icon": "✍️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_14_206",
      "unitId": "unit_a2_14",
      "title": "Formal vs Informal Register, Email Correspondence & Digital Civility",
      "description": "Distinguish formal and informal linguistic registers, format professional emails, employ polite salutations, and communicate civilly.",
      "icon": "✉️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_14_207",
      "unitId": "unit_a2_14",
      "title": "Academic Seminars, Debate, Expressing Opinions & Agreeing/Disagreeing",
      "description": "Express viewpoints clearly, state supporting evidence, use diplomatic disagreement formulas, and participate actively in university seminars.",
      "icon": "🗣️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_14_208",
      "unitId": "unit_a2_14",
      "title": "Student Banking, Administrative Fees, Currency & Budgeting",
      "description": "Manage student finances, open bank accounts, understand fee breakdowns, handle international currency transfers, and budget monthly expenses.",
      "icon": "💳",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_14_209",
      "unitId": "unit_a2_14",
      "title": "Consular Services, Visas, Legal Documentation & Official Verification",
      "description": "Navigate consular services, understand visa renewal procedures, request certified document copies, and interact professionally with immigration authorities.",
      "icon": "📑",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_14_210",
      "unitId": "unit_a2_14",
      "title": "Unit 14 Capstone & CEFR A2 Stage Culmination Comprehensive Mastery Gate",
      "description": "The definitive CEFR A2 culmination and graduation mastery gate. Synthesizes official administration, academic seminars, formal correspondence, and diplomatic communication.",
      "icon": "🏆",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 100,
      "exercises": []
    }
  ]
},
{
  "id": "unit_a2_15",
  "unitNumber": 15,
  "title": "Unit 15: Education, Learning, Personal Development & Everyday Knowledge",
  "description": "Courses, subjects, study habits, exams, grades, learning strategies, asking for clarification, strengths, weaknesses, learning goals, step-by-step processes, comparing learning methods, recommendations, short presentations, and academic mediation.",
  "cefr": "A2",
  "colorTheme": "emerald",
  "guidebook": {
    "title": "A2 Unit 15 Education & Personal Development Guidebook",
    "keyGrammarRule": "Expressing preferences with 'prefer X to Y' and 'would rather', indirect questions for polite clarification (Could you please explain what...), gerund subjects for study strategies, verbs of future intention (aim/plan/intend to), and sequential discourse markers (First, Next, Then, Finally).",
    "rulesByLang": {
      "hi": "शैक्षणिक विषय, अध्ययन की आदतें, परीक्षा परिणाम, सीखने की रणनीतियाँ, स्पष्टीकरण मांगना, व्यक्तिगत ताकत और कमजोरियां, सीखने के लक्ष्य, चरणबद्ध प्रक्रियाएं, अध्ययन विधियों की तुलना, सिफारिशें और संक्षिप्त प्रस्तुतियां।",
      "es": "Asignaturas académicas, hábitos de estudio, resultados de exámenes, estrategias de aprendizaje, pedir aclaraciones, fortalezas y debilidades, objetivos de aprendizaje, procesos paso a paso, comparación de métodos de estudio y presentaciones breves."
    },
    "examples": [
      {
        "english": "I prefer interactive seminars to large lecture classes.",
        "translation": "Prefiero los seminarios interactivos a las clases magistrales numerosas.",
        "translationsByLang": {
          "hi": "मुझे बड़े व्याख्यान वर्गों की तुलना में इंटरैक्टिव सेमिनार अधिक पसंद हैं।",
          "es": "Prefiero los seminarios interactivos a las clases magistrales numerosas."
        },
        "explanation": "Preference using 'prefer [noun] to [noun]'."
      },
      {
        "english": "Could you please explain what this grammatical term means?",
        "translation": "¿Podría explicar qué significa este término gramatical?",
        "translationsByLang": {
          "hi": "क्या आप समझा सकते हैं कि इस व्याकरणिक शब्द का क्या अर्थ है?",
          "es": "¿Podría explicar qué significa este término gramatical?"
        },
        "explanation": "Polite indirect question with standard word order."
      }
    ]
  },
  "lessons": [
    {
      "id": "lesson_a2_15_211",
      "unitId": "unit_a2_15",
      "title": "Courses, Subjects & Learning Preferences",
      "description": "Talk about academic subjects, course choices, and express learning preferences using like/prefer/would rather.",
      "icon": "🎓",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_15_212",
      "unitId": "unit_a2_15",
      "title": "School, University & Campus Life",
      "description": "Describe campus buildings, student facilities, academic departments, and everyday student routines.",
      "icon": "🏛️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_15_213",
      "unitId": "unit_a2_15",
      "title": "Study Habits, Routines & Time Management",
      "description": "Describe daily study routines, prioritize tasks, overcome procrastination, and manage deadlines effectively.",
      "icon": "⏳",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_15_214",
      "unitId": "unit_a2_15",
      "title": "Exams, Tests, Results & Grades",
      "description": "Discuss exam formats, assessment criteria, understand grading scales, and talk about academic results.",
      "icon": "📊",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_15_215",
      "unitId": "unit_a2_15",
      "title": "Learning Strategies & How to Learn Effectively",
      "description": "Explain mnemonic devices, active recall, flashcards, and spaced repetition methods for optimal learning.",
      "icon": "🧠",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_15_216",
      "unitId": "unit_a2_15",
      "title": "Asking for Clarification & Understanding Explanations",
      "description": "Polite clarification questions, checking mutual understanding, asking teachers to elaborate or give examples.",
      "icon": "❓",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_15_217",
      "unitId": "unit_a2_15",
      "title": "Skills, Strengths, Weaknesses & Personal Progress",
      "description": "Assess linguistic strengths and weaknesses, describe competencies using good at/struggle with, and chart progress.",
      "icon": "⭐",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_15_218",
      "unitId": "unit_a2_15",
      "title": "Learning Goals, Plans & Personal Development",
      "description": "Formulate SMART learning goals, plan study roadmaps, and express future intentions with be going to / plan to / aim to.",
      "icon": "🎯",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_15_219",
      "unitId": "unit_a2_15",
      "title": "Achievements, Experiences & Changes Over Time",
      "description": "Describe personal milestones, past educational experiences, and changes using Present Perfect with for/since.",
      "icon": "🏆",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_15_220",
      "unitId": "unit_a2_15",
      "title": "Learning a New Skill: Explaining Steps & Processes",
      "description": "Explain procedural steps, instructional sequences, and methodologies using discourse connectors (First, Next, Then, Finally).",
      "icon": "🪜",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_15_221",
      "unitId": "unit_a2_15",
      "title": "Comparing Learning Methods & Making Choices",
      "description": "Compare traditional vs digital learning, online vs in-person classes, and evaluate pros and cons with comparative structures.",
      "icon": "⚖️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_15_222",
      "unitId": "unit_a2_15",
      "title": "Giving Recommendations About Courses, Books & Resources",
      "description": "Recommend educational resources, review study materials, and advise peers using recommend/suggest/ought to/worth.",
      "icon": "👍",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_15_223",
      "unitId": "unit_a2_15",
      "title": "Short Presentations & Explaining Simple Information",
      "description": "Structure short informational presentations, use signposting phrases (Today I will talk about, To conclude), and present topics clearly.",
      "icon": "🗣️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_15_224",
      "unitId": "unit_a2_15",
      "title": "Integrated Speaking, Writing & Mediation Practice",
      "description": "Synthesize educational messages, relay schedule changes, explain notices to peers, and draft formal academic emails.",
      "icon": "📝",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_15_225",
      "unitId": "unit_a2_15",
      "title": "Unit 15 Review & Communicative Mastery",
      "description": "Synthesize all Unit 15 educational concepts, study routines, exams, learning strategies, presentations, and mediation.",
      "icon": "🏆",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 100,
      "exercises": []
    }
  ]
},
{
  "id": "unit_a2_16",
  "unitNumber": 16,
  "title": "Unit 16: Social Communication, Community Life & Everyday Independence",
  "description": "Friendship, relationships, social invitations, celebrations, hobbies, community events, personal preferences, polite opinions, resolving misunderstandings, making decisions, memories, life changes, local services, recommendations, and integrated mediation.",
  "cefr": "A2",
  "colorTheme": "blue",
  "guidebook": {
    "title": "A2 Unit 16 Social Communication & Community Life Guidebook",
    "keyGrammarRule": "Expressing duration with 'have known for/since', polite invitations with 'would you like to' and 'how about + gerund', past narrative interruptions with 'while + Past Continuous', lifestyle contrasts with 'used to vs now', and indirect polite questions with 'Could you tell me where...'.",
    "rulesByLang": {
      "hi": "सामाजिक संबंध, निमंत्रण और योजनाएं, सांस्कृतिक उत्सव, शौक और स्थानीय गतिविधियाँ, सामुदायिक जीवन, व्यक्तिगत प्राथमिकताएं, विनम्र राय और असहमति, गलतफहमियों को सुलझाना, निर्णय लेना, व्यक्तिगत यादें, जीवन में परिवर्तन, स्थानीय सेवाएं और सिफारिशें।",
      "es": "Relaciones sociales, invitaciones y planes, celebraciones culturales, pasatiempos, vida comunitaria, preferencias personales, opiniones educadas, resolución de malentendidos, toma de decisiones, recuerdos y servicios locales."
    },
    "examples": [
      {
        "english": "We have been close friends since our school days.",
        "translation": "Hemos sido amigos cercanos desde nuestros días escolares.",
        "translationsByLang": {
          "hi": "हम स्कूल के दिनों से करीबी दोस्त हैं।",
          "es": "Hemos sido amigos cercanos desde nuestros días escolares."
        },
        "explanation": "Duration using Present Perfect with 'since'."
      },
      {
        "english": "Could you please tell me where the community center is?",
        "translation": "¿Podría decirme dónde está el centro comunitario?",
        "translationsByLang": {
          "hi": "क्या आप कृपया मुझे बता सकते हैं कि सामुदायिक केंद्र कहाँ है?",
          "es": "¿Podría decirme dónde está el centro comunitario?"
        },
        "explanation": "Polite indirect question with statement word order."
      }
    ]
  },
  "lessons": [
    {
      "id": "lesson_a2_16_226",
      "unitId": "unit_a2_16",
      "title": "Friendship, Relationships & Staying in Touch",
      "description": "Describe friendship qualities, maintain social connections, catch up on news, and use Present Perfect to talk about friendship duration.",
      "icon": "🤝",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_16_227",
      "unitId": "unit_a2_16",
      "title": "Social Invitations, Plans & Changing Arrangements",
      "description": "Extend, accept, and decline invitations politely; make joint plans and reschedule appointments using would you like to / how about / can we postpone.",
      "icon": "💌",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_16_228",
      "unitId": "unit_a2_16",
      "title": "Celebrations, Traditions & Special Occasions",
      "description": "Describe cultural festivals, family traditions, birthdays, and public holidays using descriptive adjectives and customary expressions.",
      "icon": "🎉",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_16_229",
      "unitId": "unit_a2_16",
      "title": "Hobbies, Leisure & Joining Local Activities",
      "description": "Talk about recreational interests, pastimes, sports clubs, and joining local hobby groups using enjoy/interested in/take up.",
      "icon": "🎨",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_16_230",
      "unitId": "unit_a2_16",
      "title": "Community Life, Neighborhood Events & Local Information",
      "description": "Describe neighborhood facilities, volunteer initiatives, community cleanups, and finding local civic information.",
      "icon": "🏡",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_16_231",
      "unitId": "unit_a2_16",
      "title": "Talking About Personal Preferences & Lifestyle Choices",
      "description": "Express habits, daily routines, dietary choices, living arrangements, and personal values using prefer/rather/tend to.",
      "icon": "🧘",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_16_232",
      "unitId": "unit_a2_16",
      "title": "Opinions, Agreement, Disagreement & Polite Discussion",
      "description": "Express personal viewpoints, agree wholeheartedly, disagree tactfully, and give reasoned justifications using in my opinion / I see your point / I am not so sure.",
      "icon": "💬",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_16_233",
      "unitId": "unit_a2_16",
      "title": "Social Problems, Misunderstandings & Conflict Repair",
      "description": "Apologize sincerely, clarify mistaken intentions, explain misunderstandings, and propose peaceful solutions using I didn't mean to / I misunderstood / let's resolve.",
      "icon": "🤝",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_16_234",
      "unitId": "unit_a2_16",
      "title": "Making Decisions, Comparing Options & Explaining Choices",
      "description": "Weigh pros and cons, compare alternatives, justify practical choices, and express certainty using on the one hand / on the other hand / the main reason is.",
      "icon": "⚖️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_16_235",
      "unitId": "unit_a2_16",
      "title": "Personal Experiences, Memories & Short Stories",
      "description": "Narrate memorable life experiences, past travels, childhood memories, and unexpected events using Past Simple and Past Continuous.",
      "icon": "📖",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_16_236",
      "unitId": "unit_a2_16",
      "title": "Describing Changes in Life, Habits & Circumstances",
      "description": "Describe life transformations, moving to a new area, career transitions, and lifestyle evolution using used to vs now / has changed.",
      "icon": "🔄",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_16_237",
      "unitId": "unit_a2_16",
      "title": "Local Services, Asking for Help & Everyday Independence",
      "description": "Interact with local public services, post office, dry cleaner, repair shop, library, and request assistance politely using could you please / do you know where.",
      "icon": "🏛️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_16_238",
      "unitId": "unit_a2_16",
      "title": "Making Recommendations & Sharing Personal Advice",
      "description": "Recommend local eateries, leisure spots, books, films, and offer sensible personal advice using you should definitely / I recommend / it is worth.",
      "icon": "⭐",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_16_239",
      "unitId": "unit_a2_16",
      "title": "Integrated Social Communication, Speaking & Writing",
      "description": "Synthesize interpersonal messages, draft informal email invitations, pass along community notices, and mediate spoken info.",
      "icon": "📝",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_16_240",
      "unitId": "unit_a2_16",
      "title": "Unit 16 Review & Communicative Mastery",
      "description": "Synthesize all Unit 16 social communication skills: invitations, relationships, community life, opinions, decisions, and narratives.",
      "icon": "🏆",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 100,
      "exercises": []
    }
  ]
},
{
  "id": "unit_a2_17",
  "unitNumber": 17,
  "title": "Unit 17: Media, Culture, Entertainment & Public Information",
  "description": "News headlines, movie storytelling, book reviews, live concerts, museum artifacts, cultural traditions, tourism itineraries, etiquette, weather reports, public notices, media debates, source comparison, reports, summaries, and integrated mediation.",
  "cefr": "A2",
  "colorTheme": "purple",
  "guidebook": {
    "title": "A2 Unit 17 Media, Culture & Public Information Guidebook",
    "keyGrammarRule": "Reporting media information with that-clauses ('reported that / announced that'), defining relative clauses ('a film that / a director who'), participle adjectives (-ed vs -ing), institutional passive voice ('is permitted / are requested'), time clauses with 'when / before / after', and contrastive linkers ('whereas / on balance').",
    "rulesByLang": {
      "hi": "समाचार सुर्खियाँ और मुख्य विचार, फिल्में और कहानियां, पुस्तकें और समीक्षाएं, संगीत और कॉन्सर्ट, संग्रहालय और ऐतिहासिक स्थल, सांस्कृतिक उत्सव और परंपराएं, पर्यटन और स्थानीय सिफारिशें, यात्रा शिष्टाचार, मौसम और सार्वजनिक सूचना, मीडिया पर राय और स्रोत तुलना, संक्षिप्त रिपोर्ट और सारांश।",
      "es": "Titulares de noticias e ideas principales, películas e historias, libros y reseñas, música y conciertos, museos y lugares históricos, festivales culturales, turismo, etiqueta de viaje, clima e información pública, opiniones sobre medios y mediación integrada."
    },
    "examples": [
      {
        "english": "The museum brochure states that guided tours are free for students.",
        "translation": "El folleto del museo indica que las visitas guiadas son gratuitas para estudiantes.",
        "translationsByLang": {
          "hi": "संग्रहालय विवरणिका में कहा गया है कि निर्देशित भ्रमण छात्रों के लिए निःशुल्क हैं।",
          "es": "El folleto del museo indica que las visitas guiadas son gratuitas para estudiantes."
        },
        "explanation": "Reporting factual institutional information with that-clauses."
      },
      {
        "english": "It is an inspiring documentary that explores ancient architectural wonders.",
        "translation": "Es un documental inspirador que explora maravillas arquitectónicas antiguas.",
        "translationsByLang": {
          "hi": "यह एक प्रेरक वृत्तचित्र है जो प्राचीन स्थापत्य चमत्कारों की खोज करता है।",
          "es": "Es un documental inspirador que explora maravillas arquitectónicas antiguas."
        },
        "explanation": "Relative clause describing media content."
      }
    ]
  },
  "lessons": [
    {
      "id": "lesson_a2_17_241",
      "unitId": "unit_a2_17",
      "title": "News, Headlines & Understanding Main Ideas",
      "description": "Read and understand newspaper and online news headlines, identify main story facts, and report breaking events.",
      "icon": "📰",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_17_242",
      "unitId": "unit_a2_17",
      "title": "Movies, Series & Describing Stories",
      "description": "Describe film genres, plot summaries, main characters, and evaluate cinematographic elements using relative clauses.",
      "icon": "🎬",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_17_243",
      "unitId": "unit_a2_17",
      "title": "Books, Reading Preferences & Simple Reviews",
      "description": "Discuss literary genres, favorite authors, reading habits, and write concise book reviews with recommendations.",
      "icon": "📚",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_17_244",
      "unitId": "unit_a2_17",
      "title": "Music, Concerts & Cultural Experiences",
      "description": "Describe musical styles, instruments, live performance venues, concert experiences, and sensory impressions.",
      "icon": "🎻",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_17_245",
      "unitId": "unit_a2_17",
      "title": "Museums, Exhibitions & Historical Places",
      "description": "Inquire about museum admission, exhibit sections, historical artifacts, guided tours, and passive signage.",
      "icon": "🏺",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_17_246",
      "unitId": "unit_a2_17",
      "title": "Festivals, Traditions & Cultural Celebrations",
      "description": "Explain festive customs, cultural heritage, seasonal carnivals, traditional attire, and ceremonial foods.",
      "icon": "🎉",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_17_247",
      "unitId": "unit_a2_17",
      "title": "Tourism, Sightseeing & Local Recommendations",
      "description": "Recommend must-see tourist landmarks, scenic viewpoints, local transit tips, and itineraries using superlatives.",
      "icon": "🗼",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_17_248",
      "unitId": "unit_a2_17",
      "title": "Travel Culture & Respectful Communication",
      "description": "Communicate respectfully in diverse cultural contexts, follow local etiquette, and handle intercultural interactions.",
      "icon": "🤝",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_17_249",
      "unitId": "unit_a2_17",
      "title": "Weather, Natural Events & Public Information",
      "description": "Understand meteorological bulletins, weather forecasts, severe weather warnings, and seasonal conditions.",
      "icon": "🌤️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_17_250",
      "unitId": "unit_a2_17",
      "title": "Everyday Information, Notices & Announcements",
      "description": "Read and decode municipal notices, public transit announcements, opening hours, and facility instructions.",
      "icon": "📢",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_17_251",
      "unitId": "unit_a2_17",
      "title": "Giving Opinions About Media & Cultural Topics",
      "description": "Debate cultural trends, streaming platforms, digital reading vs print, and cinema vs home entertainment.",
      "icon": "💬",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_17_252",
      "unitId": "unit_a2_17",
      "title": "Comparing Sources & Identifying Important Information",
      "description": "Cross-reference information across media channels, identify reliable sources, and compare differing news accounts.",
      "icon": "🔄",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_17_253",
      "unitId": "unit_a2_17",
      "title": "Short Narratives, Reports & Summaries",
      "description": "Synthesize cultural events, draft brief exhibition reviews, summarize news stories, and structure short reports.",
      "icon": "📝",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_17_254",
      "unitId": "unit_a2_17",
      "title": "Integrated Listening, Reading, Speaking & Mediation",
      "description": "Synthesize multimodal information: audio announcements, brochures, oral briefings, and visit itineraries.",
      "icon": "🌐",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_17_255",
      "unitId": "unit_a2_17",
      "title": "Unit 17 Review & Communicative Mastery",
      "description": "Synthesize all Unit 17 cultural and media communication skills: news, films, books, concerts, museums, traditions, and mediation.",
      "icon": "🏆",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 100,
      "exercises": []
    }
  ]
},
{
  "id": "unit_a2_18",
  "unitNumber": 18,
  "title": "Unit 18: Integrated Everyday Communication, Real-World Fluency & A2 Mastery Preparation",
  "description": "Comprehensive A2 communicative synthesis: practical problem-solving, making and altering plans, explaining causes and results, personal narratives, progress and achievements, expressing nuanced opinions, conversation repair, everyday services, connected listening, real-world reading notices, connected functional writing, spoken mediation, reduced-scaffolding speaking performance, integrated communication simulation, and complete A2 readiness.",
  "cefr": "A2",
  "colorTheme": "indigo",
  "guidebook": {
    "title": "A2 Unit 18 Real-World Fluency & Mastery Preparation Guidebook",
    "keyGrammarRule": "Synthesize all CEFR A2 linguistic frameworks: Present/Past Continuous, Present Perfect vs Past Simple, polite modals ('would/could/should'), conditional advice ('if... will/can'), cause/effect connectors ('because / because of / so / therefore'), reported statements for mediation, and cohesive discourse structuring for connected speech and writing.",
    "rulesByLang": {
      "hi": "व्यावहारिक समस्या समाधान, योजनाओं में बदलाव, कारण और परिणाम की व्याख्या, व्यक्तिगत अनुभव और कहानियाँ, प्रगति और उपलब्धियाँ, राय और विनम्र असहमति, बातचीत की मरम्मत, व्यावहारिक सेवाएँ, सुनने का अभ्यास, वास्तविक सूचना पढ़ना, जुड़ा हुआ लेखन, मौखिक मध्यस्थता, और पूर्ण A2 महारत तैयारी।",
      "es": "Resolución de problemas cotidianos, cambio de planes, causas y consecuencias, narración de experiencias personales, progreso y logros, opiniones y desacuerdo cortés, reparación conversacional, servicios prácticos, escucha conectada, lectura del mundo real, escritura funcional, mediación y dominio A2."
    },
    "examples": [
      {
        "english": "There seems to be a problem with the reservation, but we can resolve it quickly.",
        "translation": "Parece haber un problema con la reserva, pero podemos resolverlo rápidamente.",
        "translationsByLang": {
          "hi": "आरक्षण में कुछ समस्या लग रही है, लेकिन हम इसे जल्दी से हल कर सकते हैं।",
          "es": "Parece haber un problema con la reserva, pero podemos resolverlo rápidamente."
        },
        "explanation": "Polite problem-stating and solution formulation."
      },
      {
        "english": "Although it was raining heavily, we managed to catch our train on time.",
        "translation": "Aunque estaba lloviendo mucho, logramos tomar nuestro tren a tiempo.",
        "translationsByLang": {
          "hi": "हालाँकि भारी बारिश हो रही थी, हम समय पर अपनी ट्रेन पकड़ने में सफल रहे।",
          "es": "Aunque estaba lloviendo mucho, logramos tomar nuestro tren a tiempo."
        },
        "explanation": "Contrastive complex sentence joining past continuous and simple past."
      }
    ]
  },
  "lessons": [
    {
      "id": "lesson_a2_18_256",
      "unitId": "unit_a2_18",
      "title": "Everyday Life Problem Solving: Explaining a Situation Clearly",
      "description": "Explain practical everyday dilemmas, misunderstandings, household or transit issues, and state what needs to be fixed clearly.",
      "icon": "🛠️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_18_257",
      "unitId": "unit_a2_18",
      "title": "Making Plans Under Constraints & Changing Plans",
      "description": "Negotiate schedules, propose alternatives when conflicts arise, explain constraints (budget, timing, weather), and confirm updated arrangements.",
      "icon": "📅",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_18_258",
      "unitId": "unit_a2_18",
      "title": "Explaining Causes, Results & Solutions",
      "description": "Connect ideas logically using connectors like because, because of, so, therefore, and since to explain reasons, outcomes, and practical remedies.",
      "icon": "💡",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_18_259",
      "unitId": "unit_a2_18",
      "title": "Personal Experiences, Stories & What Happened",
      "description": "Narrate memorable personal experiences, mishaps, and past events using integrated Past Simple, Past Continuous, and sequence markers.",
      "icon": "📖",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_18_260",
      "unitId": "unit_a2_18",
      "title": "Talking About Changes, Progress & Achievements",
      "description": "Describe personal growth, habit changes, learning milestones, and life transitions contrasting past habits with present achievements.",
      "icon": "📈",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_18_261",
      "unitId": "unit_a2_18",
      "title": "Opinions, Reasons & Respectful Disagreement",
      "description": "State personal viewpoints on everyday topics, support them with reasons, ask others for their view, and disagree politely and constructively.",
      "icon": "🗣️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_18_262",
      "unitId": "unit_a2_18",
      "title": "Social Interaction, Follow-Up Questions & Conversation Repair",
      "description": "Maintain social dialogue, ask follow-up questions, react empathetically, clarify misunderstandings, and repair communication breakdowns.",
      "icon": "🤝",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_18_263",
      "unitId": "unit_a2_18",
      "title": "Practical Services & Solving Mixed Everyday Problems",
      "description": "Interact with service providers (reception, deliveries, repairs, returns, banking) to state issues, request remedies, and confirm outcomes.",
      "icon": "🏢",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_18_264",
      "unitId": "unit_a2_18",
      "title": "Listening to Connected Everyday Conversations",
      "description": "Extract key details, identify speaker intentions, follow narrative sequences, and decode spontaneous spoken English with connected speech.",
      "icon": "🎧",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_18_265",
      "unitId": "unit_a2_18",
      "title": "Reading Real-World Information & Identifying Key Points",
      "description": "Read and decode everyday practical texts: notices, emails, schedules, rules, reviews, and announcements to extract essential information.",
      "icon": "📑",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_18_266",
      "unitId": "unit_a2_18",
      "title": "Writing Connected Messages, Emails & Short Narratives",
      "description": "Write clear, coherent 50–80 word emails, messages, personal updates, and short narratives with logical connectors and paragraphing.",
      "icon": "✍️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_18_267",
      "unitId": "unit_a2_18",
      "title": "True Mediation: Relaying and Explaining Information",
      "description": "Relay schedules, instructions, notices, and spoken decisions to another person clearly, explaining the key points in simple English.",
      "icon": "🌐",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_18_268",
      "unitId": "unit_a2_18",
      "title": "Integrated Speaking Performance with Reduced Scaffolding",
      "description": "Speak spontaneously on familiar topics, answer open-ended questions, explain situations, and tell short stories without textual prompts.",
      "icon": "🎙️",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_18_269",
      "unitId": "unit_a2_18",
      "title": "Integrated A2 Communication Simulation",
      "description": "Handle end-to-end everyday scenarios: scheduling a meeting, solving a travel mishap, giving advice, and mediating information in real time.",
      "icon": "🎭",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 25,
      "exercises": []
    },
    {
      "id": "lesson_a2_18_270",
      "unitId": "unit_a2_18",
      "title": "Final Unit Review, A2 Preparation & Communicative Mastery",
      "description": "Comprehensive synthesis across all A2 communicative competencies: listening, reading, speaking, writing, grammar, vocabulary, and mediation.",
      "icon": "🏆",
      "cefr": "A2",
      "totalSteps": 18,
      "xpReward": 100,
      "exercises": []
    }
  ]
},

  // CEFR B1 - STAGE 3: INTERMEDIATE (UNITS 6 - 7)
  // ==========================================
  {
    id: 'unit_b1_1',
    unitNumber: 6,
    title: 'Unit 6: Work, Careers & Business English',
    description: 'Job interviews, writing emails, and professional collaboration.',
    cefr: 'B1',
    colorTheme: 'purple',
    guidebook: {
      title: 'B1 Business Guidebook: Present Perfect for Career Experience',
      keyGrammarRule: 'Use Present Perfect (have + past participle) to state career accomplishments without specifying an exact past time.',
      examples: [
        {
          english: 'I have managed software projects for 5 years.',
          translation: 'He gestionado proyectos de software durante 5 años.',
          translationsByLang: {
            hi: 'मैंने 5 वर्षों तक सॉफ़्टवेयर प्रोजेक्ट्स का प्रबंधन किया है।',
            es: 'He gestionado proyectos de software durante 5 años.',
            fr: 'J\'ai géré des projets logiciels pendant 5 ans.',
            de: 'Ich habe 5 Jahre lang Softwareprojekte geleitet.',
            pt: 'Gerenciei projetos de software por 5 anos.',
            zh: '我管理软件项目已经有5年了。',
            ar: 'لقد أدرت مشاريع البرمجيات لمدة 5 سنوات.',
            ja: '5年間ソフトウェアプロジェクトを管理してきました。',
            ru: 'Я управлял программными проектами в течение 5 лет.'
          },
          explanation: 'Action started in past and continues to present.'
        }
      ]
    },
    lessons: [
      {
        id: 'lesson_b1_1_1',
        unitId: 'unit_b1_1',
        title: 'Job Interview Essentials',
        description: 'Discussing strengths, experience & qualifications',
        icon: '💼',
        cefr: 'B1',
        totalSteps: 5,
        xpReward: 25,
        exercises: [
          {
            id: 'ex_b1_1_1',
            type: 'translate_tiles',
            prompt: 'Translate into professional English:',
            sourceSentence: 'Tengo experiencia liderando equipos globales.',
            sourceTranslations: {
              hi: 'मुझे वैश्विक टीमों का नेतृत्व करने का अनुभव है।',
              es: 'Tengo experiencia liderando equipos globales.',
              fr: 'J\'ai de l\'expérience dans la direction d\'équipes mondiales.',
              de: 'Ich habe Erfahrung in der Leitung globaler Teams.',
              pt: 'Tenho experiência em liderar equipes globais.',
              zh: '我有领导全球团队的经验。',
              ar: 'لدي خبرة في قيادة الفرق العالمية.',
              ja: 'グローバルチームを率いた経験があります。',
              ru: 'У меня есть опыт руководства международными командами.'
            },
            targetSentence: 'I have experience leading global teams',
            wordBank: ['I', 'have', 'experience', 'leading', 'global', 'teams', 'project', 'salary']
          },
          {
            id: 'ex_b1_1_2',
            type: 'fill_blank',
            prompt: 'Select formal workplace vocabulary:',
            sourceSentence: 'I look forward to ______ from you soon.',
            targetSentence: 'I look forward to hearing from you soon.',
            options: [
              { id: '1', text: 'hearing', isCorrect: true },
              { id: '2', text: 'listening', isCorrect: false },
              { id: '3', text: 'talking', isCorrect: false },
              { id: '4', text: 'shouting', isCorrect: false }
            ]
          },
          {
            id: 'ex_b1_1_3',
            type: 'listen_type',
            prompt: 'Listen to the interview question:',
            audioText: 'What are your greatest professional strengths?',
            targetSentence: 'What are your greatest professional strengths',
            wordBank: ['What', 'are', 'your', 'greatest', 'professional', 'strengths']
          },
          {
            id: 'ex_b1_1_4',
            type: 'speak_sentence',
            prompt: 'Speak this professional statement:',
            targetSentence: 'I am highly organized and detail-oriented.',
            audioText: 'I am highly organized and detail-oriented.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // CEFR B2 - STAGE 4: UPPER-INTERMEDIATE (UNITS 8 - 9)
  // ==========================================
  {
    id: 'unit_b2_1',
    unitNumber: 8,
    title: 'Unit 8: Advanced Nuance, Idioms & Debates',
    description: 'Expressing complex viewpoints, idioms, and formal arguments.',
    cefr: 'B2',
    colorTheme: 'rose',
    guidebook: {
      title: 'B2 Advanced Guidebook: Inverted Conditionals for Emphasis',
      keyGrammarRule: 'In formal registers, omit "if" and invert subject and verb: "Had I known..." instead of "If I had known...".',
      examples: [
        {
          english: 'Had I known, I would have prepared better.',
          translation: 'De haberlo sabido, me habría preparado mejor.',
          translationsByLang: {
            hi: 'अगर मुझे पता होता, तो मैं और बेहतर तैयारी करता।',
            es: 'De haberlo sabido, me habría preparado mejor.',
            fr: 'Si j\'avais su, je me serais mieux préparé.',
            de: 'Hätte ich das gewusst, hätte ich mich besser vorbereitet.',
            pt: 'Se eu soubesse, teria me preparado melhor.',
            zh: '要是早知道，我就准备得更好一些了。',
            ar: 'لو كنت أعلم، لأعددت نفسي بشكل أفضل.',
            ja: '知っていたら、もっと準備をしていたでしょう。',
            ru: 'Если бы я знал, я бы подготовился лучше.'
          },
          explanation: 'Formal inversion structure for hypothetical regret.'
        }
      ]
    },
    lessons: [
      {
        id: 'lesson_b2_1_1',
        unitId: 'unit_b2_1',
        title: 'Debates & Persuasive Discourse',
        description: 'Constructing logical, persuasive arguments in English',
        icon: '🗣️',
        cefr: 'B2',
        totalSteps: 5,
        xpReward: 30,
        exercises: [
          {
            id: 'ex_b2_1_1',
            type: 'translate_tiles',
            prompt: 'Translate this advanced sentence:',
            sourceSentence: 'Desde mi perspectiva, los beneficios superan los riesgos.',
            sourceTranslations: {
              hi: 'मेरे दृष्टिकोण से, लाभ जोखिमों से अधिक हैं।',
              es: 'Desde mi perspectiva, los beneficios superan los riesgos.',
              fr: 'De mon point de vue, les avantages l\'emportent sur les risques.',
              de: 'Aus meiner Sicht überwiegen die Vorteile die Risiken.',
              pt: 'Do meu ponto de vista, os benefícios superam os riscos.',
              zh: '在我看来，利大于弊。',
              ar: 'من وجهة نظري، الفوائد تفوق المخاطر.',
              ja: '私の視点からは、利点がリスクを上回っています。',
              ru: 'На мой взгляд, преимущества перевешивают риски.'
            },
            targetSentence: 'From my perspective the benefits outweigh the risks',
            wordBank: ['From', 'my', 'perspective', 'the', 'benefits', 'outweigh', 'the', 'risks']
          },
          {
            id: 'ex_b2_1_2',
            type: 'fill_blank',
            prompt: 'Select the idiomatic expression:',
            sourceSentence: 'We need to think outside the ____ to innovate.',
            targetSentence: 'We need to think outside the box to innovate.',
            options: [
              { id: '1', text: 'box', isCorrect: true },
              { id: '2', text: 'circle', isCorrect: false },
              { id: '3', text: 'room', isCorrect: false },
              { id: '4', text: 'door', isCorrect: false }
            ]
          },
          {
            id: 'ex_b2_1_3',
            type: 'speak_sentence',
            prompt: 'Deliver this speech with confident intonation:',
            targetSentence: 'It is imperative that we reach a consensus before the deadline.',
            audioText: 'It is imperative that we reach a consensus before the deadline.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // CEFR C1 - STAGE 5: ADVANCED FLUENCY (UNIT 10)
  // ==========================================
  {
    id: 'unit_c1_1',
    unitNumber: 10,
    title: 'Unit 10: Academic Writing & Complex Discourse',
    description: 'Master scholarly vocabulary, complex cohesion, and analytical nuance.',
    cefr: 'C1',
    colorTheme: 'cyan',
    guidebook: {
      title: 'C1 Advanced Guidebook: Cleft Sentences for Focus',
      keyGrammarRule: 'Use cleft sentences like "What strikes me most is..." or "It was only when..." to emphasize key argumentative points.',
      examples: [
        {
          english: 'What impressed the board was her visionary strategy.',
          translation: 'Lo que impresionó a la junta fue su estrategia visionaria.',
          translationsByLang: {
            hi: 'जिस बात ने बोर्ड को प्रभावित किया, वह उनकी दूरदर्शी रणनीति थी।',
            es: 'Lo que impresionó a la junta fue su estrategia visionaria.',
            fr: 'Ce qui a impressionné le conseil, c\'est sa stratégie visionnaire.',
            de: 'Was den Vorstand beeindruckte, war ihre visionäre Strategie.',
            pt: 'O que impressionou a diretoria foi sua estratégia visionária.',
            zh: '让董事会印象深刻的是她富有远见的战略。',
            ar: 'ما أثر في مجلس الإدارة هو استراتيجيتها الرؤيوية.',
            ja: '役員会を感銘させたのは、彼女の先見の明ある戦略でした。',
            ru: 'Что действительно впечатлило совет, так это ее прозорливая стратегия.'
          },
          explanation: 'Cleft sentence structure emphasizing the object.'
        }
      ]
    },
    lessons: [
      {
        id: 'lesson_c1_1_1',
        unitId: 'unit_c1_1',
        title: 'Analytical Exposition',
        description: 'Constructing C1 level essay rhetoric and cohesion',
        icon: '🎓',
        cefr: 'C1',
        totalSteps: 5,
        xpReward: 40,
        exercises: [
          {
            id: 'ex_c1_1_1',
            type: 'translate_tiles',
            prompt: 'Translate into C1 English:',
            sourceSentence: 'Es fundamental examinar las causas subyacentes del fenómeno.',
            sourceTranslations: {
              hi: 'घटना के अंतर्निहित कारणों की जांच करना सर्वोपरि है।',
              es: 'Es fundamental examinar las causas subyacentes del fenómeno.',
              fr: 'Il est primordial d\'examiner les causes sous-jacentes du phénomène.',
              de: 'Es ist von größter Bedeutung, die zugrunde liegenden Ursachen zu untersuchen.',
              pt: 'É primordial examinar as causas subjacentes do fenômeno.',
              zh: '审查该现象的潜在原因至关重要。',
              ar: 'من الأهمية بمكان فحص الأسباب الكامنة وراء هذه الظاهرة.',
              ja: 'その現象の根底にある原因を調べることが極めて重要です。',
              ru: 'Первостепенное значение имеет исследование глубинных причин феномена.'
            },
            targetSentence: 'It is paramount to examine the underlying causes of the phenomenon',
            wordBank: ['It', 'is', 'paramount', 'to', 'examine', 'the', 'underlying', 'causes', 'of', 'the', 'phenomenon']
          },
          {
            id: 'ex_c1_1_2',
            type: 'speak_sentence',
            prompt: 'Speak this academic sentence cleanly:',
            targetSentence: 'Notwithstanding the constraints, the hypothesis remains fundamentally valid.',
            audioText: 'Notwithstanding the constraints, the hypothesis remains fundamentally valid.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // CEFR C2 - STAGE 6: NATIVE MASTERY (UNIT 11)
  // ==========================================
  {
    id: 'unit_c2_1',
    unitNumber: 11,
    title: 'Unit 11: Executive Leadership & Native Eloquence',
    description: 'Effortless nuance, rhetorical eloquence, and C2 native mastery.',
    cefr: 'C2',
    colorTheme: 'amber',
    guidebook: {
      title: 'C2 Native Mastery Guidebook: Rhetorical Devices & Subtleties',
      keyGrammarRule: 'At C2 level, command subtle understatement, litotes, and complex metaphoric resonance.',
      examples: [
        {
          english: 'His contribution was by no means insignificant.',
          translation: 'Su contribución no fue de ninguna manera insignificante.',
          translationsByLang: {
            hi: 'उनका योगदान किसी भी तरह से नगण्य नहीं था।',
            es: 'Su contribución no fue de ninguna manera insignificante.',
            fr: 'Sa contribution n\'était en aucun cas insignifiante.',
            de: 'Sein Beitrag war keineswegs unbedeutend.',
            pt: 'Sua contribuição não foi de forma alguma insignificante.',
            zh: '他的贡献绝非微不足道。',
            ar: 'لم تكن مساهمته بأي حال من الأحوال ضئيلة.',
            ja: '彼の貢献は決して取るに足らないものではありませんでした。',
            ru: 'Его вклад ни в коем случае не был незначительным.'
          },
          explanation: 'Litotes (ironic understatement) to convey strong significance.'
        }
      ]
    },
    lessons: [
      {
        id: 'lesson_c2_1_1',
        unitId: 'unit_c2_1',
        title: 'Executive Rhetoric',
        description: 'C2 Masterclass in spontaneous, highly eloquent discourse',
        icon: '👑',
        cefr: 'C2',
        totalSteps: 5,
        xpReward: 50,
        exercises: [
          {
            id: 'ex_c2_1_1',
            type: 'speak_sentence',
            prompt: 'Deliver this C2 executive keynote sentence:',
            targetSentence: 'We must synthesize our technological prowess with an unyielding commitment to human integrity.',
            audioText: 'We must synthesize our technological prowess with an unyielding commitment to human integrity.'
          }
        ]
      }
    ]
  }
];

// Curiosity Interactive Audio Stories
export const CURIOSITY_STORIES: InteractiveStory[] = [
  {
    id: 'story_1',
    title: 'The Surprising Coffee Order',
    cefr: 'A1',
    icon: '☕',
    description: 'Oscar goes to a trendy cafe in New York and tries to order.',
    characters: [
      { name: 'Oscar', avatar: '👨‍🦱', role: 'Customer' },
      { name: 'Mia', avatar: '👩‍🦰', role: 'Barista' }
    ],
    steps: [
      {
        id: 's1',
        speaker: 'Mia',
        text: 'Good morning! Welcome to Curiosity Cafe. What can I get for you today?',
        translation: '¡Buenos días! Bienvenido. ¿Qué te sirvo hoy?',
        translationsByLang: {
          hi: 'शुभ प्रभात! क्यूरियोसिटी कैफे में आपका स्वागत है। आज मैं आपके लिए क्या लाऊँ?',
          es: '¡Buenos días! Bienvenido a Curiosity Cafe. ¿Qué te sirvo hoy?',
          fr: 'Bonjour ! Bienvenue au Curiosity Cafe. Que puis-je vous servir aujourd\'hui ?',
          de: 'Guten Morgen! Willkommen im Curiosity Cafe. Was darf ich Ihnen bringen?',
          pt: 'Bom dia! Bem-vindo ao Curiosity Cafe. O que posso pegar para você hoje?',
          zh: '早上好！欢迎来到 Curiosity 咖啡馆。今天想要点什么？',
          ar: 'صباح الخير! مرحبًا بكم في مقهى كيوريوسيتي. ماذا يمكنني أن أقدم لك اليوم؟',
          ja: 'おはようございます！キュリオシティカフェへようこそ。本日はご注文は何にいたしますか？',
          ru: 'Доброе утро! Добро пожаловать в кафе Curiosity. Что я могу вам предложить?'
        }
      },
      {
        id: 's2',
        speaker: 'Oscar',
        text: 'Hello! I would like a large iced latte with oat milk, please.',
        translation: 'Hola, me gustaría un latte helado grande con leche de avena.',
        translationsByLang: {
          hi: 'नमस्ते! मुझे ओट मिल्क के साथ एक बड़ा आइस्ड लैट चाहिए, कृपया।',
          es: 'Hola, me gustaría un latte helado grande con leche de avena, por favor.',
          fr: 'Bonjour ! Je voudrais un grand latte glacé au lait d\'avoine, s\'il vous plaît.',
          de: 'Hallo! Ich hätte gerne einen großen Eiskaffee mit Hafermilch, bitte.',
          pt: 'Olá! Eu gostaria de um latte gelado grande com leite de aveia, por favor.',
          zh: '你好！请给我一杯大杯燕麦奶冰拿铁。',
          ar: 'مرحباً! أود الحصول على لاتيه مثلج كبير بحليب الشوفان، من فضلك.',
          ja: 'こんにちは！オーツミルクのラージアイスラテをお願いします。',
          ru: 'Здравствуйте! Я бы хотел большой айс-латте с овсяным молоком, пожалуйста.'
        }
      },
      {
        id: 's3',
        speaker: 'Mia',
        text: 'Sure thing! Would you like a fresh croissant with that?',
        question: {
          prompt: 'What did the barista offer Oscar?',
          options: ['A fresh croissant', 'A glass of water', 'A sandwich', 'A cup of tea'],
          correctIndex: 0,
          explanation: 'Mia asked if Oscar would like a fresh croissant with his order.'
        }
      },
      { id: 's4', speaker: 'Oscar', text: 'Yes please! How much is that altogether?', translation: '¡Sí, por favor! ¿Cuánto es en total?' },
      { id: 's5', speaker: 'Mia', text: 'That will be $7.50. Have a wonderful day!', translation: 'Serán $7.50. ¡Que tengas un excelente día!' }
    ]
  },
  {
    id: 'story_2',
    title: 'Navigating London International Airport',
    cefr: 'A2',
    icon: '🧳',
    description: 'Elena is looking for her connecting flight to Tokyo at Terminal 5.',
    characters: [
      { name: 'Elena', avatar: '👩', role: 'Traveler' },
      { name: 'Officer Smith', avatar: '👮‍♂️', role: 'Airport Staff' }
    ],
    steps: [
      { id: 's1', speaker: 'Elena', text: 'Excuse me officer! I am looking for Terminal 5. Is it far from here?', translation: 'Disculpe oficial, busco la Terminal 5.' },
      { id: 's2', speaker: 'Officer Smith', text: 'It is about a 10-minute walk. Follow the purple signs overhead.', translation: 'Está a 10 minutos a pie. Siga las señales moradas.' },
      {
        id: 's3',
        speaker: 'Elena',
        text: 'Thank you! Do I need to go through security again?',
        question: {
          prompt: 'How long does it take to walk to Terminal 5?',
          options: ['10 minutes', '1 hour', '5 minutes', '30 minutes'],
          correctIndex: 0,
          explanation: 'Officer Smith stated it takes about a 10-minute walk.'
        }
      },
      { id: 's4', speaker: 'Officer Smith', text: 'Yes, please have your passport and boarding pass ready.', translation: 'Sí, tenga listo su pasaporte.' }
    ]
  }
];

export function getExpandedLessonExercises(lesson: { exercises: Exercise[]; title: string; cefr: CEFRLevel }): Exercise[] {
  if (lesson.exercises && lesson.exercises.length >= 5) {
    return lesson.exercises;
  }

  // Procedural exercise suite generator for continuous practice
  const fallbackExercises: Exercise[] = [
    {
      id: `${lesson.title}_p1`,
      type: 'translate_tiles',
      prompt: `Translate this ${lesson.cefr} sentence into English:`,
      sourceSentence: 'Practico inglés todos los días.',
      sourceTranslations: {
        hi: 'मैं हर रोज़ अंग्रेजी का अभ्यास करता हूँ।',
        es: 'Practico inglés todos los días.',
        fr: 'J\'étudie l\'anglais tous les jours.',
        de: 'Ich übe jeden Tag Englisch.',
        pt: 'Eu pratico inglês todos os dias.',
        zh: '我每天练习英语。',
        ar: 'أنا أمارس اللغة الإنجليزية كل يوم.',
        ja: '私は毎日英語を練習しています。',
        ru: 'Я практикую английский каждый день.'
      },
      targetSentence: 'I practice English every single day',
      wordBank: ['I', 'practice', 'English', 'every', 'single', 'day', 'night', 'speak']
    },
    {
      id: `${lesson.title}_p2`,
      type: 'fill_blank',
      prompt: 'Select the correct grammar form:',
      sourceSentence: 'She ____ fluent English very clearly.',
      targetSentence: 'She speaks fluent English very clearly.',
      options: [
        { id: '1', text: 'speaks', isCorrect: true },
        { id: '2', text: 'talked', isCorrect: false },
        { id: '3', text: 'listen', isCorrect: false },
        { id: '4', text: 'go', isCorrect: false }
      ]
    },
    {
      id: `${lesson.title}_p3`,
      type: 'listen_type',
      prompt: 'Listen and type or assemble what you hear:',
      audioText: 'Practice makes perfect in language learning.',
      targetSentence: 'Practice makes perfect in language learning',
      wordBank: ['Practice', 'makes', 'perfect', 'in', 'language', 'learning']
    },
    {
      id: `${lesson.title}_p4`,
      type: 'speak_sentence',
      prompt: 'Speak this sentence into your mic:',
      targetSentence: 'I am building my confidence step by step.',
      audioText: 'I am building my confidence step by step.'
    },
    {
      id: `${lesson.title}_p5`,
      type: 'match_pairs',
      prompt: 'Match English vocabulary with native translations:',
      options: [
        { id: 'm1', text: 'Fluency' },
        { id: 'm1_m', text: 'Fluidez / धाराप्रवाह' },
        { id: 'm2', text: 'Practice' },
        { id: 'm2_m', text: 'Práctica / अभ्यास' },
        { id: 'm3', text: 'Confidence' },
        { id: 'm3_m', text: 'Confianza / आत्मविश्वास' },
        { id: 'm4', text: 'Grammar' },
        { id: 'm4_m', text: 'Gramática / व्याकरण' }
      ]
    }
  ];

  return [...(lesson.exercises || []), ...fallbackExercises].slice(0, 5);
}
