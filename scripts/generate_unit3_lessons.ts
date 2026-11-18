import * as fs from 'fs';
import * as path from 'path';

// Master data definitions for Lessons 31–45
interface LessonDef {
  num: number;
  title: string;
  icon: string;
  objTitle: string;
  objDesc: string;
  objHi: string;
  objEs: string;
  canDo: string[];
  canDoHi: string[];
  canDoEs: string[];
  vocab: Array<{
    id: string;
    word: string;
    phonetic: string;
    meaning: string;
    hi: string;
    es: string;
    example: string;
    exampleHi: string;
    exampleEs: string;
    icon: string;
  }>;
  chunks: Array<{
    id: string;
    phrase: string;
    meaning: string;
    hi: string;
    es: string;
    usageNote: string;
    icon: string;
  }>;
  grammar: {
    concept: string;
    patterns: Array<{
      title: string;
      structure: string;
      rule: string;
      examples: Array<{ en: string; hi: string; es: string }>;
    }>;
  };
  mistakes: Array<{
    incorrect: string;
    correct: string;
    why: string;
    hi: string;
    es: string;
  }>;
  dialogues: Array<{
    id: string;
    title: string;
    context: string;
    charA: string;
    charB: string;
    lines: Array<{ speaker: string; text: string; hi: string; es: string }>;
  }>;
  practice: any[];
  review: any[];
  assessment: any[];
}

export const UNIT_3_LESSONS: LessonDef[] = [
  // =========================================================================
  // LESSON 31: Making Social Plans & Invitations (Would you like to...? / Let's)
  // =========================================================================
  {
    num: 31,
    title: 'Making Social Plans & Invitations (Would you like to...? / Let\'s)',
    icon: '☕',
    objTitle: 'Inviting Friends, Proposing Social Activities and Accepting or Declining Plans',
    objDesc: 'Master inviting others using "Would you like to + base verb?" and "Let\'s + base verb", making casual proposals ("How about having lunch?"), accepting politely ("I\'d love to, thanks!"), and declining with gentle excuses ("I\'m afraid I\'m busy tonight", "Maybe another time").',
    objHi: 'दोस्तों को आमंत्रित करने के लिए "Would you like to + base verb?" और "Let\'s + verb" का प्रयोग सीखें। योजनाओं को विनम्रतापूर्वक स्वीकार करना ("I\'d love to") और विनम्र कारणों के साथ मना करना ("I\'m afraid I\'m busy") सीखें।',
    objEs: 'Aprende a invitar y proponer planes con "Would you like to + verbo" y "Let\'s + verbo". Domina cómo aceptar cortésmente ("I\'d love to") y cómo rechazar amablemente dando una excusa ("I\'m afraid I\'m busy").',
    canDo: [
      'Invite someone to an activity: "Would you like to have dinner with us tonight?"',
      'Make spontaneous proposals: "Let\'s grab a coffee before the movie starts"',
      'Accept invitations enthusiastically: "That sounds wonderful, I\'d love to come!"',
      'Decline invitations politely with reasons: "I\'m sorry, I can\'t. I have to work late"',
      'Suggest alternative times: "How about meeting this Saturday instead?"'
    ],
    canDoHi: [
      'किसी को आमंत्रित करना: "Would you like to join us for lunch?"',
      'योजना प्रस्तावित करना: "Let\'s meet at 6 PM"',
      'निमंत्रण स्वीकार करना: "I\'d love to come!"',
      'विनम्रतापूर्वक मना करना: "I\'m afraid I have plans tonight"'
    ],
    canDoEs: [
      'Invitar a alguien: "Would you like to join us for dinner?"',
      'Proponer un plan: "Let\'s go to the cinema tonight"',
      'Aceptar invitaciones: "I\'d love to, thank you!"',
      'Rechazar con cortesía: "I\'m afraid I\'m busy tomorrow"'
    ],
    vocab: [
      { id: 'v_u03_l31_invite', word: 'invite', phonetic: '/ɪnˈvaɪt/', meaning: 'To ask someone politely to go somewhere or do something', hi: 'आमंत्रित करना / न्योता देना', es: 'invitar', example: 'I want to invite my coworkers to my birthday party.', exampleHi: 'मैं अपने सहकर्मियों को अपनी जन्मदिन की पार्टी में आमंत्रित करना चाहता हूँ।', exampleEs: 'Quiero invitar a mis compañeros de trabajo a mi fiesta de cumpleaños.', icon: '💌' },
      { id: 'v_u03_l31_invitation', word: 'invitation', phonetic: '/ˌɪn.vəˈteɪ.ʃən/', meaning: 'A spoken or written request inviting someone', hi: 'निमंत्रण पत्र / न्योता', es: 'invitación', example: 'Thank you very much for the wedding invitation.', exampleHi: 'शादी के निमंत्रण के लिए आपका बहुत-बहुत धन्यवाद।', exampleEs: 'Muchas gracias por la invitación de boda.', icon: '📩' },
      { id: 'v_u03_l31_join', word: 'join', phonetic: '/dʒɔɪn/', meaning: 'To participate with someone in an activity', hi: 'शामिल होना / साथ आना', es: 'unirse / acompañar', example: 'Would you like to join us for a cup of tea?', exampleHi: 'क्या आप हमारे साथ एक कप चाय के लिए शामिल होना चाहेंगे?', exampleEs: '¿Te gustaría unirte a nosotros para tomar una taza de té?', icon: '🤝' },
      { id: 'v_u03_l31_plan', word: 'plan', phonetic: '/plæn/', meaning: 'An arrangement for something in the future', hi: 'योजना / प्लान', es: 'plan / planear', example: 'Do you have any plans for this weekend?', exampleHi: 'क्या आपके पास इस सप्ताहांत के लिए कोई योजना है?', exampleEs: '¿Tienes algún plan para este fin de semana?', icon: '📅' },
      { id: 'v_u03_l31_busy', word: 'busy', phonetic: '/ˈbɪz.i/', meaning: 'Having a lot of things to do', hi: 'व्यस्त / काम में लगा हुआ', es: 'ocupado/a', example: 'I am afraid she is very busy on Wednesday afternoon.', exampleHi: 'मुझे डर है कि वह बुधवार दोपहर बहुत व्यस्त है।', exampleEs: 'Me temo que ella está muy ocupada el miércoles por la tarde.', icon: '⏳' },
      { id: 'v_u03_l31_free', word: 'free / available', phonetic: '/friː/ /əˈveɪ.lə.bəl/', meaning: 'Not busy; having time available', hi: 'खाली / उपलब्ध', es: 'libre / disponible', example: 'Are you free tomorrow evening after six?', exampleHi: 'क्या आप कल शाम छह बजे के बाद खाली हैं?', exampleEs: '¿Estás libre mañana por la tarde después de las seis?', icon: '✨' },
      { id: 'v_u03_l31_cinema', word: 'cinema / movie theater', phonetic: '/ˈsɪn.ə.mə/', meaning: 'A building where movies are shown', hi: 'सिनेमा घर', es: 'cine', example: 'Let\'s go to the cinema and watch the new comedy.', exampleHi: 'चलो सिनेमा चलते हैं और नई कॉमेडी देखते हैं।', exampleEs: 'Vamos al cine a ver la nueva comedia.', icon: '🎬' },
      { id: 'v_u03_l31_concert', word: 'concert', phonetic: '/ˈkɑːn.sɚt/', meaning: 'A live music performance', hi: 'संगीत कार्यक्रम / कॉन्सर्ट', es: 'concierto', example: 'We have two extra tickets for the jazz concert.', exampleHi: 'हमारे पास जैज़ कॉन्सर्ट के लिए दो अतिरिक्त टिकट हैं।', exampleEs: 'Tenemos dos entradas adicionales para el concierto de jazz.', icon: '🎵' },
      { id: 'v_u03_l31_hangout', word: 'hang out', phonetic: '/hæŋ aʊt/', meaning: 'To spend relaxing leisure time together', hi: 'समय बिताना / घूमना-फिरना', es: 'pasar el rato / salir con amigos', example: 'My friends and I usually hang out in the park on Sundays.', exampleHi: 'मेरे दोस्त और मैं आमतौर पर रविवार को पार्क में समय बिताते हैं।', exampleEs: 'Mis amigos y yo solemos pasar el rato en el parque los domingos.', icon: '🛋️' },
      { id: 'v_u03_l31_grabbite', word: 'grab a bite', phonetic: '/ɡræb ə baɪt/', meaning: 'To quickly get something to eat', hi: 'कुछ हल्का-फुल्का खाना', es: 'comer algo rápido / picar algo', example: 'Let\'s grab a quick bite before our flight departs.', exampleHi: 'हमारी उड़ान रवाना होने से पहले चलो कुछ हल्का-फुल्का खा लेते हैं।', exampleEs: 'Comamos algo rápido antes de que salga nuestro vuelo.', icon: '🥪' },
      { id: 'v_u03_l31_meetup', word: 'meet up', phonetic: '/miːt ʌp/', meaning: 'To see each other at an agreed time and place', hi: 'मिलना / मुलाक़ात करना', es: 'reunirse / quedar', example: 'Where should we meet up after work today?', exampleHi: 'आज काम के बाद हमें कहाँ मिलना चाहिए?', exampleEs: '¿Dónde deberíamos quedar después del trabajo hoy?', icon: '📍' },
      { id: 'v_u03_l31_accept', word: 'accept', phonetic: '/əkˈsept/', meaning: 'To agree to take or do something', hi: 'स्वीकार करना / मानना', es: 'aceptar', example: 'She was happy to accept the dinner invitation.', exampleHi: 'वह रात के खाने के निमंत्रण को स्वीकार करके खुश थी।', exampleEs: 'Ella estuvo encantada de aceptar la invitación a cenar.', icon: '✅' },
      { id: 'v_u03_l31_decline', word: 'decline / refuse', phonetic: '/dɪˈklaɪn/', meaning: 'To politely say no to an offer or invitation', hi: 'अस्वीकार करना / मना करना', es: 'declinar / rechazar cortésmente', example: 'I had to decline because I was feeling sick.', exampleHi: 'मुझे मना करना पड़ा क्योंकि मेरी तबीयत ठीक नहीं थी।', exampleEs: 'Tuve que declinar porque me sentía enfermo.', icon: '🚫' },
      { id: 'v_u03_l31_excuse', word: 'reason / excuse', phonetic: '/ˈriː.zən/ /ɪkˈskjuːs/', meaning: 'An explanation for why you cannot attend', hi: 'कारण / बहाना', es: 'motivo / excusa cortés', example: 'He gave a polite reason for not attending the meeting.', exampleHi: 'उसने बैठक में शामिल न होने का एक विनम्र कारण बताया।', exampleEs: 'Dio una razón educada por no asistir a la reunión.', icon: '💡' },
      { id: 'v_u03_l31_maybe', word: 'maybe another time', phonetic: '/ˈmeɪ.bi əˈnʌð.ɚ taɪm/', meaning: 'Used to decline now but suggest a future possibility', hi: 'शायद अगली बार', es: 'tal vez en otra ocasión', example: 'I can\'t today, but maybe another time next week.', exampleHi: 'मैं आज नहीं आ सकता, लेकिन शायद अगले हफ्ते किसी और समय।', exampleEs: 'Hoy no puedo, pero tal vez en otra ocasión la próxima semana.', icon: '🔁' },
      { id: 'v_u03_l31_suggest', word: 'suggest', phonetic: '/səˈdʒest/', meaning: 'To mention an idea or plan for consideration', hi: 'सुझाव देना', es: 'sugerir / proponer', example: 'What restaurant do you suggest for dinner?', exampleHi: 'रात के खाने के लिए आप किस रेस्तरां का सुझाव देते हैं?', exampleEs: '¿Qué restaurante sugieres para cenar?', icon: '💬' },
      { id: 'v_u03_l31_together', word: 'together', phonetic: '/təˈɡeð.ɚ/', meaning: 'With each other', hi: 'साथ में / एक साथ', es: 'juntos / en grupo', example: 'We always enjoy having breakfast together on Saturdays.', exampleHi: 'हम हमेशा शनिवार को एक साथ नाश्ता करने का आनंद लेते हैं।', exampleEs: 'Siempre disfrutamos desayunar juntos los sábados.', icon: '👥' },
      { id: 'v_u03_l31_special', word: 'special event', phonetic: '/ˈspeʃ.əl ɪˈvent/', meaning: 'An important or unique occasion', hi: 'विशेष कार्यक्रम', es: 'evento especial', example: 'It is a special celebration for our graduation.', exampleHi: 'यह हमारे स्नातक स्तर की पढ़ाई के लिए एक विशेष उत्सव है।', exampleEs: 'Es una celebración especial por nuestra graduación.', icon: '🎉' },
      { id: 'v_u03_l31_afraid', word: 'I\'m afraid that...', phonetic: '/aɪm əˈfreɪd/', meaning: 'Polite phrase used to introduce disappointing news', hi: 'मुझे खेद है कि...', es: 'me temo que...', example: 'I\'m afraid I cannot attend the party tomorrow.', exampleHi: 'मुझे खेद है कि मैं कल पार्टी में शामिल नहीं हो सकता।', exampleEs: 'Me temo que no puedo asistir a la fiesta mañana.', icon: '😔' },
      { id: 'v_u03_l31_sounds_great', word: 'sounds great / fantastic', phonetic: '/saʊndz ɡreɪt/', meaning: 'Used to express enthusiasm about an idea', hi: 'यह बहुत अच्छा लग रहा है / बढ़िया', es: 'suena genial / excelente', example: 'A picnic in the park sounds great!', exampleHi: 'पार्क में पिकनिक बहुत अच्छी लग रही है!', exampleEs: '¡Un picnic en el parque suena genial!', icon: '🌟' }
    ],
    chunks: [
      { id: 'c_u03_l31_1', phrase: 'Would you like to join us?', meaning: 'Polite formal/informal invitation formula', hi: 'क्या आप हमारे साथ शामिल होना चाहेंगे?', es: '¿Te gustaría unirte a nosotros?', usageNote: 'Use base verb after "to" (join, come, eat)', icon: '💌' },
      { id: 'c_u03_l31_2', phrase: 'Let\'s grab some coffee.', meaning: 'Casual proposal for immediate or near-future activity', hi: 'चलो कॉफ़ी पीते हैं।', es: 'Vamos a tomar un café.', usageNote: '"Let\'s" = Let us + base verb (no "to")', icon: '☕' },
      { id: 'c_u03_l31_3', phrase: 'I\'d love to, thank you!', meaning: 'Enthusiastic polite acceptance', hi: 'मुझे बहुत खुशी होगी, धन्यवाद!', es: '¡Me encantaría, muchas gracias!', usageNote: 'Short for "I would love to"', icon: '✨' },
      { id: 'c_u03_l31_4', phrase: 'I\'m afraid I have plans.', meaning: 'Polite refusal with mild excuse', hi: 'मुझे खेद है, मेरी पहले से योजनाएँ हैं।', es: 'Me temo que ya tengo planes.', usageNote: 'Very polite way to say no in English', icon: '🙏' },
      { id: 'c_u03_l31_5', phrase: 'How about Friday evening?', meaning: 'Suggesting a specific day or time', hi: 'शुक्रवार शाम कैसा रहेगा?', es: '¿Qué tal el viernes por la noche?', usageNote: '"How about" + noun or verb-ing', icon: '🗓️' },
      { id: 'c_u03_l31_6', phrase: 'What time should we meet?', meaning: 'Coordinating meeting schedule', hi: 'हमें किस समय मिलना चाहिए?', es: '¿A qué hora deberíamos encontrarnos?', usageNote: 'Used after both agree on the plan', icon: '⏰' },
      { id: 'c_u03_l31_7', phrase: 'See you there at seven!', meaning: 'Confirming appointment closing phrase', hi: 'वहाँ सात बजे मिलते हैं!', es: '¡Nos vemos allí a las siete!', usageNote: 'Friendly closing confirmation', icon: '👋' },
      { id: 'c_u03_l31_8', phrase: 'Maybe another time.', meaning: 'Leaving the door open for future meetups', hi: 'शायद किसी और समय।', es: 'Tal vez en otra ocasión.', usageNote: 'Softens a rejection gracefully', icon: '🔁' }
    ],
    grammar: {
      concept: 'Invitations & Proposals with "Would you like to" and "Let\'s"',
      patterns: [
        {
          title: 'Polite Invitations: Would you like to + Base Verb',
          structure: 'Would you like to + [base verb] + [details]?',
          rule: 'Always use the infinitive with "to" followed by base verb. Do not add -s or -ing.',
          examples: [
            { en: 'Would you like to come to my house for dinner?', hi: 'क्या आप रात के खाने के लिए मेरे घर आना चाहेंगे?', es: '¿Te gustaría venir a mi casa a cenar?' },
            { en: 'Would you like to see a movie tonight?', hi: 'क्या आप आज रात कोई फिल्म देखना चाहेंगे?', es: '¿Te gustaría ver una película esta noche?' }
          ]
        },
        {
          title: 'Direct Suggestions: Let\'s + Base Verb',
          structure: 'Let\'s + [base verb] + (not / together)',
          rule: 'Use "Let\'s" (contraction of "let us") directly followed by base verb without "to". Negative: "Let\'s not..."',
          examples: [
            { en: 'Let\'s meet outside the station at six o\'clock.', hi: 'चलो छह बजे स्टेशन के बाहर मिलते हैं।', es: 'Encontrémonos fuera de la estación a las seis.' },
            { en: 'Let\'s not stay out too late tonight.', hi: 'चलो आज रात ज्यादा देर तक बाहर न रहें।', es: 'No nos quedemos fuera hasta muy tarde hoy.' }
          ]
        }
      ]
    },
    mistakes: [
      { incorrect: 'Would you like go to the cinema?', correct: 'Would you like to go to the cinema?', why: '"Would you like" requires "to + base verb".', hi: '"Would you like" के बाद "to" लगाना अनिवार्य है।', es: '"Would you like" siempre requiere "to + infinitivo".' },
      { incorrect: 'Let\'s to meet at the cafe.', correct: 'Let\'s meet at the cafe.', why: '"Let\'s" is followed directly by the base verb without "to".', hi: '"Let\'s" के तुरंत बाद बिना "to" के मूल क्रिया आती है।', es: '"Let\'s" va seguido directamente del verbo base sin "to".' },
      { incorrect: 'I love to come, thank you.', correct: 'I\'d love to come, thank you.', why: 'Use conditional "I\'d love to" (I would love to) to accept an invitation.', hi: 'निमंत्रण स्वीकार करते समय "I\'d love to" (I would love to) का प्रयोग करें।', es: 'Usa el condicional "I\'d love to" para aceptar una invitación.' },
      { incorrect: 'I am afraid I no can come.', correct: 'I am afraid I cannot come.', why: 'Negative modal is "cannot" or "can\'t", never "no can".', hi: 'नकारात्मक मोडल "cannot" या "can\'t" होता है, "no can" गलत है।', es: 'La negación modal es "cannot" o "can\'t", nunca "no can".' },
      { incorrect: 'How about meet tomorrow?', correct: 'How about meeting tomorrow? / How about tomorrow?', why: '"How about" is followed by a gerund (-ing) or a noun phrase.', hi: '"How about" के बाद -ing क्रिया या संज्ञा आती है।', es: '"How about" va seguido de gerundio (-ing) o sustantivo.' }
    ],
    dialogues: [
      {
        id: 'd_u03_l31_1',
        title: 'Friday Evening Coffee Invitation',
        context: 'Two colleagues, Mark and Sophie, are finishing their shift at work.',
        charA: 'Mark',
        charB: 'Sophie',
        lines: [
          { speaker: 'Mark', text: 'Hi Sophie! Are you free after work today?', hi: 'नमस्ते सोफी! क्या तुम आज काम के बाद खाली हो?', es: '¡Hola Sophie! ¿Estás libre después del trabajo hoy?' },
          { speaker: 'Sophie', text: 'Yes, I am. I finish at five o\'clock. Why?', hi: 'हाँ, मैं हूँ। मैं पाँच बजे काम खत्म करती हूँ। क्यों?', es: 'Sí, lo estoy. Termino a las cinco. ¿Por qué?' },
          { speaker: 'Mark', text: 'Would you like to grab some coffee at the new bakery down the street?', hi: 'क्या तुम सड़क के उस पार नई बेकरी में कॉफी पीने चलना चाहोगी?', es: '¿Te gustaría tomar un café en la nueva panadería de la calle?' },
          { speaker: 'Sophie', text: 'That sounds wonderful! I\'d love to. Let\'s meet in the lobby at five fifteen.', hi: 'यह बहुत बढ़िया लग रहा है! मुझे बहुत खुशी होगी। चलो सवा पांच बजे लॉबी में मिलते हैं।', es: '¡Suena maravilloso! Me encantaría. Encontrémonos en el vestíbulo a las cinco y cuarto.' },
          { speaker: 'Mark', text: 'Perfect! See you there in twenty minutes.', hi: 'बढ़िया! बीस मिनट में वहाँ मिलते हैं।', es: '¡Perfecto! Nos vemos allí en veinte minutos.' }
        ]
      },
      {
        id: 'd_u03_l31_2',
        title: 'Weekend Cinema Plan with an Excuse',
        context: 'Daniel calls his friend Clara on Friday evening.',
        charA: 'Daniel',
        charB: 'Clara',
        lines: [
          { speaker: 'Daniel', text: 'Hey Clara, would you like to see a movie with us on Saturday night?', hi: 'अरे क्लारा, क्या तुम शनिवार रात हमारे साथ कोई फिल्म देखना चाहोगी?', es: 'Hola Clara, ¿te gustaría ver una película con nosotros el sábado por la noche?' },
          { speaker: 'Clara', text: 'Oh, thank you for the invitation, Daniel, but I\'m afraid I can\'t. My parents are visiting.', hi: 'अरे, निमंत्रण के लिए धन्यवाद, डेनियल, लेकिन मुझे डर है कि मैं नहीं आ सकती। मेरे माता-पिता आ रहे हैं।', es: 'Oh, gracias por la invitación, Daniel, pero me temo que no puedo. Mis padres vienen de visita.' },
          { speaker: 'Daniel', text: 'No problem at all! How about having lunch on Sunday afternoon instead?', hi: 'कोई बात नहीं! इसके बजाय रविवार दोपहर को दोपहर का भोजन करने के बारे में क्या विचार है?', es: '¡No hay ningún problema! ¿Qué tal almorzar el domingo por la tarde en su lugar?' },
          { speaker: 'Clara', text: 'Sunday is great! Let\'s go to the Italian restaurant near the park.', hi: 'रविवार बहुत बढ़िया है! चलो पार्क के पास वाले इतालवी रेस्तरां में चलते हैं।', es: '¡El domingo está genial! Vamos al restaurante italiano cerca del parque.' }
        ]
      }
    ],
    practice: [
      { id: 'ex_u03_l31_p1', type: 'multiple_choice', prompt: 'Select the correct question formula to invite a friend to dinner:', targetSentence: 'Would you like to have dinner with us tonight?', options: [{ id: '1', text: 'Would you like to have dinner with us tonight?', isCorrect: true }, { id: '2', text: 'Would you like having dinner with us tonight?', isCorrect: false }, { id: '3', text: 'Do you like to having dinner with us tonight?', isCorrect: false }, { id: '4', text: 'Are you like have dinner with us tonight?', isCorrect: false }] },
      { id: 'ex_u03_l31_p2', type: 'fill_blank', prompt: 'Complete the suggestion with the correct word:', targetSentence: 'Let\'s meet outside the library at six.', options: [{ id: '1', text: 'meet', isCorrect: true }, { id: '2', text: 'to meet', isCorrect: false }, { id: '3', text: 'meeting', isCorrect: false }, { id: '4', text: 'met', isCorrect: false }] },
      { id: 'ex_u03_l31_p3', type: 'word_ordering', prompt: 'Assemble the polite acceptance sentence:', targetSentence: 'I would love to join you for lunch', wordBank: ['I', 'would', 'love', 'to', 'join', 'you', 'for', 'lunch', 'am', 'too'] },
      { id: 'ex_u03_l31_p4', type: 'listening', prompt: 'Listen to the audio and identify what is being suggested:', audioText: 'Let\'s grab a quick bite to eat before the show.', options: [{ id: '1', text: 'Getting something quick to eat', isCorrect: true }, { id: '2', text: 'Buying new show tickets', isCorrect: false }, { id: '3', text: 'Going home directly', isCorrect: false }, { id: '4', text: 'Canceling the evening plan', isCorrect: false }] },
      { id: 'ex_u03_l31_p5', type: 'error_correction', prompt: 'Correct the error in this invitation:', targetSentence: 'Would you like to come to my birthday party?', errorSentence: 'Would you like come to my birthday party?', options: [{ id: '1', text: 'Would you like to come to my birthday party?', isCorrect: true }, { id: '2', text: 'Would you liking to come to my party?', isCorrect: false }, { id: '3', text: 'Do you like come to my birthday party?', isCorrect: false }, { id: '4', text: 'Will you like come to my party?', isCorrect: false }] },
      { id: 'ex_u03_l31_p6', type: 'dialogue_completion', prompt: 'Choose the most natural polite response to the invitation:', dialogueContext: { speakerA: 'Would you like to go to the concert with us on Friday?', lineA: 'Would you like to go to the concert with us on Friday?', speakerB: 'I would love to, thank you!' }, options: [{ id: '1', text: 'I would love to, thank you! What time does it start?', isCorrect: true }, { id: '2', text: 'No, I want not.', isCorrect: false }, { id: '3', text: 'I am not like concerts.', isCorrect: false }, { id: '4', text: 'Let\'s to go away.', isCorrect: false }] },
      { id: 'ex_u03_l31_p7', type: 'translation', prompt: 'Translate this invitation into English:', sourceSentence: 'क्या आप आज रात हमारे साथ फिल्म देखना चाहेंगे?', sourceTranslations: { hi: 'क्या आप आज रात हमारे साथ फिल्म देखना चाहेंगे?', es: '¿Te gustaría ver una película con nosotros esta noche?' }, targetSentence: 'Would you like to see a movie with us tonight', wordBank: ['Would', 'you', 'like', 'to', 'see', 'a', 'movie', 'with', 'us', 'tonight', 'are', 'go'] },
      { id: 'ex_u03_l31_p8', type: 'speaking', prompt: 'Speak this enthusiastic acceptance clearly into your microphone:', targetSentence: 'That sounds fantastic, I would love to come!', audioText: 'That sounds fantastic, I would love to come!' },
      { id: 'ex_u03_l31_p9', type: 'listen_and_type', prompt: 'Listen to the audio and assemble the sentence:', audioText: 'How about meeting at the cafe tomorrow morning?', targetSentence: 'How about meeting at the cafe tomorrow morning', wordBank: ['How', 'about', 'meeting', 'at', 'the', 'cafe', 'tomorrow', 'morning', 'meet', 'on'] },
      { id: 'ex_u03_l31_p10', type: 'multiple_choice', prompt: 'Which sentence is grammatically correct for a group suggestion?', targetSentence: 'Let\'s go to the Italian restaurant tonight.', options: [{ id: '1', text: 'Let\'s go to the Italian restaurant tonight.', isCorrect: true }, { id: '2', text: 'Let\'s to go to the Italian restaurant tonight.', isCorrect: false }, { id: '3', text: 'Let\'s going to the Italian restaurant tonight.', isCorrect: false }, { id: '4', text: 'Let we go to the Italian restaurant tonight.', isCorrect: false }] },
      { id: 'ex_u03_l31_p11', type: 'fill_blank', prompt: 'Choose the correct preposition to complete the sentence:', targetSentence: 'I am afraid I have plans for this weekend.', options: [{ id: '1', text: 'for', isCorrect: true }, { id: '2', text: 'to', isCorrect: false }, { id: '3', text: 'at', isCorrect: false }, { id: '4', text: 'on', isCorrect: false }] },
      { id: 'ex_u03_l31_p12', type: 'match_pairs', prompt: 'Match the phrases with their conversational functions:', options: [{ id: 'm1', text: 'Would you like to...?' }, { id: 'm1_m', text: 'Polite invitation' }, { id: 'm2', text: 'I\'d love to!' }, { id: 'm2_m', text: 'Enthusiastic acceptance' }, { id: 'm3', text: 'I\'m afraid I can\'t.' }, { id: 'm3_m', text: 'Polite refusal' }, { id: 'm4', text: 'How about Friday?' }, { id: 'm4_m', text: 'Alternative suggestion' }] },
      { id: 'ex_u03_l31_p13', type: 'word_ordering', prompt: 'Assemble the polite refusal sentence:', targetSentence: 'I am afraid I cannot attend the meeting tonight', wordBank: ['I', 'am', 'afraid', 'I', 'cannot', 'attend', 'the', 'meeting', 'tonight', 'not', 'do'] },
      { id: 'ex_u03_l31_p14', type: 'multiple_choice', prompt: 'What does "Maybe another time" mean in a conversation?', targetSentence: 'It politely declines now while welcoming future plans.', options: [{ id: '1', text: 'It politely declines now while welcoming future plans.', isCorrect: true }, { id: '2', text: 'It means the person is angry.', isCorrect: false }, { id: '3', text: 'It means the person forgot the date.', isCorrect: false }, { id: '4', text: 'It confirms an immediate meeting.', isCorrect: false }] },
      { id: 'ex_u03_l31_p15', type: 'fill_blank', prompt: 'Fill in the blank with the correct verb form:', targetSentence: 'How about having dinner together on Sunday?', options: [{ id: '1', text: 'having', isCorrect: true }, { id: '2', text: 'have', isCorrect: false }, { id: '3', text: 'had', isCorrect: false }, { id: '4', text: 'to have', isCorrect: false }] }
    ],
    review: [
      { id: 'ex_u03_l31_rev1', type: 'multiple_choice', prompt: 'Which phrase is the most natural way to propose a casual meetup?', targetSentence: 'Let\'s grab a cup of coffee after work.', options: [{ id: '1', text: 'Let\'s grab a cup of coffee after work.', isCorrect: true }, { id: '2', text: 'Let us to drink coffee after work.', isCorrect: false }, { id: '3', text: 'Would you liking drink coffee after work?', isCorrect: false }, { id: '4', text: 'Let\'s we grab coffee after work.', isCorrect: false }] },
      { id: 'ex_u03_l31_rev2', type: 'word_ordering', prompt: 'Build the confirmation sentence:', targetSentence: 'Let us meet in the lobby at five fifteen', wordBank: ['Let', 'us', 'meet', 'in', 'the', 'lobby', 'at', 'five', 'fifteen', 'to', 'on'] },
      { id: 'ex_u03_l31_rev3', type: 'fill_blank', prompt: 'Complete the sentence with the correct phrase:', targetSentence: 'I would love to join your team for the project.', options: [{ id: '1', text: 'love to', isCorrect: true }, { id: '2', text: 'loving to', isCorrect: false }, { id: '3', text: 'loved to', isCorrect: false }, { id: '4', text: 'love', isCorrect: false }] },
      { id: 'ex_u03_l31_rev4', type: 'error_correction', prompt: 'Fix the grammar error:', targetSentence: 'Let\'s not stay out too late tonight.', errorSentence: 'Let\'s don\'t stay out too late tonight.', options: [{ id: '1', text: 'Let\'s not stay out too late tonight.', isCorrect: true }, { id: '2', text: 'Let\'s no stay out too late.', isCorrect: false }, { id: '3', text: 'Let\'s to not stay out late.', isCorrect: false }, { id: '4', text: 'Let us not to stay out late.', isCorrect: false }] },
      { id: 'ex_u03_l31_rev5', type: 'translation', prompt: 'Translate this suggestion into English:', sourceSentence: 'चलो पार्क के पास वाले नए कैफ़े में चलते हैं।', sourceTranslations: { hi: 'चलो पार्क के पास वाले नए कैफ़े में चलते हैं।', es: 'Vamos a la nueva cafetería cerca del parque.' }, targetSentence: 'Let us go to the new cafe near the park', wordBank: ['Let', 'us', 'go', 'to', 'the', 'new', 'cafe', 'near', 'the', 'park', 'going', 'at'] }
    ],
    assessment: [
      { id: 'ex_u03_l31_a1', type: 'multiple_choice', prompt: 'What is the correct structure for making an invitation with "Would you like"?', targetSentence: 'Would you like + to + base verb', options: [{ id: '1', text: 'Would you like + to + base verb', isCorrect: true }, { id: '2', text: 'Would you like + verb-ing', isCorrect: false }, { id: '3', text: 'Would you like + past tense verb', isCorrect: false }, { id: '4', text: 'Would you like + to + verb-ing', isCorrect: false }] },
      { id: 'ex_u03_l31_a2', type: 'fill_blank', prompt: 'Select the missing word for a polite decline:', targetSentence: 'I am afraid I am busy tomorrow evening.', options: [{ id: '1', text: 'afraid', isCorrect: true }, { id: '2', text: 'scared', isCorrect: false }, { id: '3', text: 'sorry for', isCorrect: false }, { id: '4', text: 'fear', isCorrect: false }] },
      { id: 'ex_u03_l31_a3', type: 'word_ordering', prompt: 'Assemble the sentence asking about a friend\'s weekend plans:', targetSentence: 'Do you have any plans for this coming weekend', wordBank: ['Do', 'you', 'have', 'any', 'plans', 'for', 'this', 'coming', 'weekend', 'are', 'some'] },
      { id: 'ex_u03_l31_a4', type: 'listening', prompt: 'Listen to the audio and answer the question:', audioText: 'Would you like to come to our house for dinner on Sunday at seven?', options: [{ id: '1', text: 'An invitation to Sunday dinner at 7 PM', isCorrect: true }, { id: '2', text: 'A request for lunch on Saturday', isCorrect: false }, { id: '3', text: 'A reminder about a work meeting', isCorrect: false }, { id: '4', text: 'A cancellation notice for dinner', isCorrect: false }] },
      { id: 'ex_u03_l31_a5', type: 'speaking', prompt: 'Speak this polite invitation clearly:', targetSentence: 'Would you like to have dinner with us this Friday?', audioText: 'Would you like to have dinner with us this Friday?' }
    ]
  }
];

console.log('Loaded base lesson 31 definition.');
