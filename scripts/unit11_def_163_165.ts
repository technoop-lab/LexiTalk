import { LessonConfigA2 } from './unit11_builder_helper';

// =========================================================================
// LESSON 163: Digital Communication, Remote Collaboration & Virtual Etiquette
// =========================================================================
export const LESSON_163_CONFIG: LessonConfigA2 = {
  num: 163,
  title: 'Digital Communication, Remote Collaboration & Virtual Etiquette',
  icon: '💻',
  estMin: 25,
  objTitle: 'Expectation Modals ("be supposed to"), Screen Sharing & Remote Etiquette',
  objDesc: 'Master professional digital communication, virtual meetings, asynchronous messaging, and technical troubleshooting using "be supposed to" for team expectations and polite modal requests ("Could you possibly mute / share...?").',
  objHi: 'डिजिटल संचार, दूरस्थ सहयोग (रिमोट वर्क), वर्चुअल मीटिंग शिष्टाचार, "be supposed to" और विनम्र अनुरोधों ("Could you possibly...") का उपयोग करना सीखें।',
  objEs: 'Comunicación digital, teletrabajo, etiqueta en reuniones virtuales, "be supposed to" y peticiones corteses ("Could you possibly...?").',
  canDo: [
    'I can manage audio, video, and screen sharing politely during virtual video conferences.',
    'I can use "be supposed to" to explain schedules, workplace expectations, and technical guidelines.',
    'I can formulate polite remote requests with "Could you possibly...?" and "Would you mind...?"',
    'I can report technical difficulties like lag, audio echo, and connection drops professionally.'
  ],
  canDoHi: [
    'मैं वर्चुअल वीडियो सम्मेलनों के दौरान ऑडियो, वीडियो और स्क्रीन शेयरिंग को विनम्रता से प्रबंधित कर सकता हूँ।',
    'मैं शेड्यूल और कार्यस्थल की अपेक्षाओं को समझाने के लिए "be supposed to" का उपयोग कर सकता हूँ।',
    'मैं "Could you possibly...?" और "Would you mind...?" के साथ विनम्र अनुरोध बना सकता हूँ।',
    'मैं ऑडियो गूंज, लैग और कनेक्शन समस्याओं जैसी तकनीकी कठिनाइयों की रिपोर्ट कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo gestionar audio, vídeo y pantalla compartida educadamente en videollamadas.',
    'Puedo usar "be supposed to" para explicar expectativas y horarios laborales.',
    'Puedo formular peticiones remotas corteses con "Could you possibly...?" y "Would you mind...?"',
    'Puedo reportar problemas técnicos como retraso de audio y caídas de conexión.'
  ],
  vocab: [
    { w: 'mute', p: '/mjuːt/', m: 'turn off the sound or microphone of a device or call', hi: 'म्यूट करना / आवाज बंद करना', es: 'silenciar / mutear el micrófono', fr: 'couper le micro / mettre en sourdine', de: 'stummschalten', pt: 'mutar / silenciar microfone', zh: '静音', ar: 'كتم الصوت', ja: 'ミュートする / 消音する', ru: 'выключить микрофон / заглушить', ex: 'Please mute your microphone while the presenter is speaking.', exHi: 'जब प्रस्तुतकर्ता बोल रहा हो तो कृपया अपना माइक्रोफ़ोन म्यूट करें।', exEs: 'Por favor, silencia tu micrófono mientras el presentador esté hablando.', ic: '🎙️' },
    { w: 'unmute', p: '/ˌʌnˈmjuːt/', m: 'turn on a microphone that has been temporarily silenced', hi: 'अनम्यूट करना / आवाज चालू करना', es: 'activar el micrófono / reactivar sonido', fr: 'réactiver le micro', de: 'Stummschaltung aufheben', pt: 'desmutar / ativar microfone', zh: '取消静音', ar: 'إلغاء كتم الصوت', ja: 'ミュートを解除する', ru: 'включить микрофон', ex: 'You are on mute; could you please unmute yourself before answering?', exHi: 'आप म्यूट पर हैं; क्या आप उत्तर देने से पहले कृपया खुद को अनम्यूट कर सकते हैं?', exEs: 'Estás en silencio; ¿podrías reactivar tu micrófono antes de responder?', ic: '🔊' },
    { w: 'bandwidth', p: '/ˈbændwɪdθ/', m: 'the capacity for data transfer over an internet connection', hi: 'बैंडविड्थ / इंटरनेट क्षमता', es: 'ancho de banda', fr: 'bande passante', de: 'Bandbreite', pt: 'largura de banda', zh: '带宽', ar: 'عرض النطاق الترددي / سرعة النت', ja: '帯域幅 / 通信容量', ru: 'пропускная способность / трафик', ex: 'Turning off your video camera can help save internet bandwidth.', exHi: 'अपना वीडियो कैमरा बंद करने से इंटरनेट बैंडविड्थ बचाने में मदद मिल सकती है।', exEs: 'Apagar tu cámara de video puede ayudar a ahorrar ancho de banda de internet.', ic: '📶' },
    { w: 'glitch', p: '/ɡlɪtʃ/', m: 'a minor technical malfunction or temporary error in a digital system', hi: 'तकनीकी खराबी / अस्थायी त्रुटि', es: 'fallo técnico / glitch', fr: 'pépin technique / bug', de: 'technische Panne / kleiner Fehler', pt: 'falha técnica / bug', zh: '小故障', ar: 'عطل فني مؤقت', ja: '不具合 / 一時的エラー', ru: 'сбой / глюк', ex: 'There was a brief audio glitch, but the connection is clear now.', exHi: 'एक संक्षिप्त ऑडियो खराबी थी, लेकिन अब कनेक्शन स्पष्ट है।', exEs: 'Hubo un pequeño fallo de audio, pero la conexión ya está clara.', ic: '⚡' },
    { w: 'lag', p: '/læɡ/', m: 'a noticeable delay between an action and its appearance on a screen', hi: 'लैग / प्रसारण में देरी', es: 'retraso / lag', fr: 'décalage / ralentissement', de: 'Verzögerung / Lag', pt: 'atraso / lentidão / lag', zh: '延迟 / 掉帧', ar: 'تأخير في الاتصال / بطء', ja: '遅延 / タイムラグ', ru: 'задержка / отставание', ex: 'Your video feed is experiencing some lag because of the storm outside.', exHi: 'बाहर तूफान के कारण आपके वीडियो प्रसारण में कुछ देरी (लैग) हो रही है।', exEs: 'Tu transmisión de video está experimentando algo de retraso por la tormenta.', ic: '🐢' },
    { w: 'asynchronous', p: '/eɪˈsɪŋkrənəs/', m: 'communication where participants exchange messages at different times rather than live', hi: 'अतुल्यकालिक / अलग-अलग समय पर होने वाला संचार', es: 'asíncrono / no simultáneo', fr: 'asynchrone', de: 'asynchron', pt: 'assíncrono', zh: '异步的', ar: 'غير متزامن', ja: '非同期の', ru: 'асинхронный', ex: 'Asynchronous updates allow team members in different time zones to collaborate smoothly.', exHi: 'अतुल्यकालिक अपडेट विभिन्न समय क्षेत्रों में टीम के सदस्यों को आसानी से सहयोग करने की अनुमति देते हैं।', exEs: 'Las actualizaciones asíncronas permiten colaborar a miembros de diferentes zonas horarias.', ic: '⏳' },
    { w: 'screen', p: '/skriːn/', m: 'the flat display surface on which digital information is viewed and shared', hi: 'स्क्रीन / पर्दा', es: 'pantalla', fr: 'écran', de: 'Bildschirm', pt: 'tela', zh: '屏幕', ar: 'شاشة', ja: '画面 / スクリーン', ru: 'экран', ex: 'I will share my screen to show the quarterly sales presentation.', exHi: 'त्रैमासिक बिक्री प्रस्तुति दिखाने के लिए मैं अपनी स्क्रीन साझा करूँगा।', exEs: 'Compartiré mi pantalla para mostrar la presentación de ventas del trimestre.', ic: '🖥️' },
    { w: 'agenda', p: '/əˈdʒendə/', m: 'a list of items or topics to be discussed at a formal meeting', hi: 'कार्यसूची / एजेंडा', es: 'orden del día / agenda', fr: 'ordre du jour', de: 'Tagesordnung / Agenda', pt: 'pauta da reunião', zh: '会议议程', ar: 'جدول أعمال', ja: '議題 / アジェンダ', ru: 'повестка дня', ex: 'Let us stick strictly to the meeting agenda so we can finish on time.', exHi: 'आइए हम बैठक की कार्यसूची का सख्ती से पालन करें ताकि हम समय पर समाप्त कर सकें।', exEs: 'Ciñámonos estrictamente al orden del día de la reunión para terminar a tiempo.', ic: '📑' },
    { w: 'attachment', p: '/əˈtætʃmənt/', m: 'a computer file appended to an email or message', hi: 'संलग्नक / अटैचमेंट', es: 'archivo adjunto', fr: 'pièce jointe', de: 'Dateianhang', pt: 'anexo', zh: '附件', ar: 'ملف مرفق', ja: '添付ファイル', ru: 'вложение / прикрепленный файл', ex: 'Please review the PDF attachment before our scheduled video call.', exHi: 'कृपया हमारे निर्धारित वीडियो कॉल से पहले पीडीएफ अटैचमेंट की समीक्षा करें।', exEs: 'Por favor, revisa el archivo adjunto en PDF antes de nuestra videollamada.', ic: '📎' },
    { w: 'etiquette', p: '/ˈetɪket/', m: 'the customary code of polite behavior in society or among members of a profession', hi: 'शिष्टाचार / नियम', es: 'etiqueta / normas de cortesía', fr: 'étiquette / règles de bienséance', de: 'Etikette / Verhaltensregeln', pt: 'etiqueta / boas maneiras', zh: '礼仪 / 规范', ar: 'آداب السلوك / إتيكيت', ja: 'エチケット / 礼儀作法', ru: 'этикет / правила приличия', ex: 'Turning on your camera during group introductions is good virtual etiquette.', exHi: 'समूह परिचय के दौरान अपना कैमरा चालू करना अच्छा आभासी शिष्टाचार है।', exEs: 'Encender la cámara durante las presentaciones es una buena etiqueta virtual.', ic: '🤝' },
    { w: 'invitation', p: '/ˌɪnvɪˈteɪʃn/', m: 'a formal digital link or calendar request to join a meeting', hi: 'मीटिंग आमंत्रण / लिंक', es: 'invitación / enlace de reunión', fr: 'invitation', de: 'Einladung / Meeting-Link', pt: 'convite de reunião', zh: '邀请链接', ar: 'دعوة اجتماع', ja: '招待リンク', ru: 'приглашение на встречу', ex: 'I sent the video conference invitation link to your work email address.', exHi: 'मैंने आपके कार्य ईमेल पते पर वीडियो सम्मेलन आमंत्रण लिंक भेजा है।', exEs: 'Envié el enlace de invitación a la videoconferencia a tu correo de trabajo.', ic: '📩' },
    { w: 'troubleshoot', p: '/ˈtrʌblʃuːt/', m: 'analyze and solve serious problems for a company or system', hi: 'समस्या निवारण करना / खराबी ढूंढना', es: 'solucionar problemas técnicos', fr: 'dépanner / résoudre un problème', de: 'Fehler beheben', pt: 'solucionar problemas', zh: '排查故障', ar: 'حل المشكلات التقنية', ja: 'トラブルシューティングする', ru: 'устранять неполадки', ex: 'Let us troubleshoot the audio settings before starting the webinar.', exHi: 'वेबिनार शुरू करने से पहले आइए ऑडियो सेटिंग्स का निवारण करें।', exEs: 'Solucionemos los problemas de configuración de audio antes del seminario.', ic: '🛠️' },
    { w: 'notification', p: '/ˌnəʊtɪfɪˈkeɪʃn/', m: 'an automatic notice or alert sent by a computer program or mobile app', hi: 'अधिसूचना / अलर्ट', es: 'notificación / alerta', fr: 'notification / alerte', de: 'Benachrichtigung', pt: 'notificação', zh: '通知 / 提示', ar: 'إشعار / تنبيه', ja: '通知 / お知らせ', ru: 'уведомление / оповещение', ex: 'You can disable chat notifications during focused work hours.', exHi: 'आप केंद्रित कार्य के घंटों के दौरान चैट सूचनाओं को अक्षम कर सकते हैं।', exEs: 'Puedes desactivar las notificaciones de chat durante las horas de trabajo concentrado.', ic: '🔔' },
    { w: 'colleague', p: '/ˈkɒliːɡ/', m: 'a person with whom one works in a profession or business', hi: 'सहकर्मी / साथी', es: 'colega / compañero de trabajo', fr: 'collègue', de: 'Kollege / Kollegin', pt: 'colega de trabalho', zh: '同事', ar: 'زميل عمل', ja: '同僚', ru: 'коллега', ex: 'My colleague in Singapore will join our conference call shortly.', exHi: 'सिंगापुर में मेरे सहकर्मी जल्द ही हमारे कॉन्फ्रेंस कॉल में शामिल होंगे।', exEs: 'Mi colega en Singapur se unirá a nuestra llamada pronto.', ic: '👥' },
    { w: 'deadline', p: '/ˈdedlaɪn/', m: 'the latest time or date by which something should be completed', hi: 'अंतिम तिथि / समय सीमा', es: 'fecha límite / plazo', fr: 'date limite', de: 'Frist / Abgabetermin', pt: 'prazo final', zh: '截止日期', ar: 'الموعد النهائي', ja: '締め切り / 期限', ru: 'крайний срок / дедлайн', ex: 'We are supposed to submit the finished design before Friday\'s deadline.', exHi: 'हमें शुक्रवार की समय सीमा से पहले तैयार डिज़ाइन प्रस्तुत करना है।', exEs: 'Se supone que debemos enviar el diseño terminado antes del viernes.', ic: '⏰' },
    { w: 'feedback', p: '/ˈfiːdbæk/', m: 'helpful information or criticism about a person\'s performance or project', hi: 'प्रतिक्रिया / सुझाव', es: 'comentarios / retroalimentación', fr: 'retour / rétroaction', de: 'Feedback / Rückmeldung', pt: 'feedback / avaliação', zh: '反馈意见', ar: 'ملاحظات / تقييم', ja: 'フィードバック', ru: 'обратная связь / отзыв', ex: 'Leave your feedback directly in the shared document comments.', exHi: 'साझा किए गए दस्तावेज़ की टिप्पणियों में सीधे अपनी प्रतिक्रिया छोड़ें।', exEs: 'Deja tus comentarios directamente en el documento compartido.', ic: '💬' },
    { w: 'breakout', p: '/ˈbreɪkaʊt/', m: 'a small group discussion room within a larger digital conference', hi: 'ब्रेकआउट रूम / छोटा समूह कक्ष', es: 'sala de grupos pequeños / breakout room', fr: 'salle de sous-commission', de: 'Breakout-Raum', pt: 'sala temática / subgrupo', zh: '分组讨论室', ar: 'غرفة فرعية للنقاش', ja: '分科会ルーム / ブレイクアウト', ru: 'сессионный зал / мини-группа', ex: 'The workshop facilitator divided participants into three breakout rooms.', exHi: 'कार्यशाला के संचालक ने प्रतिभागियों को तीन ब्रेकआउट कमरों में विभाजित किया।', exEs: 'El facilitador del taller dividió a los participantes en tres salas.', ic: '🚪' },
    { w: 'remote', p: '/rɪˈməʊt/', m: 'operating or working from home or elsewhere rather than an employer\'s central office', hi: 'रिमोट / दूरस्थ', es: 'remoto / a distancia', fr: 'à distance / en télétravail', de: 'remote / fernab', pt: 'remoto / à distância', zh: '远程的', ar: 'عن بعد', ja: 'リモートの / 遠隔の', ru: 'удаленный (о работе)', ex: 'Our company transitioned to a flexible remote work model last year.', exHi: 'हमारी कंपनी पिछले साल एक लचीले रिमोट वर्क मॉडल में परिवर्तित हो गई।', exEs: 'Nuestra empresa hizo la transición a un modelo de trabajo remoto flexible el año pasado.', ic: '🏡' },
    { w: 'timezone', p: '/ˈtaɪmzəʊn/', m: 'a geographic region in which the same standard time is used', hi: 'समय क्षेत्र / टाइम ज़ोन', es: 'zona horaria', fr: 'fuseau horaire', de: 'Zeitzone', pt: 'fuso horário', zh: '时区', ar: 'منطقة زمنية', ja: 'タイムゾーン / 時差', ru: 'часовой пояс', ex: 'When scheduling global calls, please be mindful of everyone\'s timezone.', exHi: 'वैश्विक कॉल शेड्यूल करते समय, कृपया सभी के समय क्षेत्र का ध्यान रखें।', exEs: 'Al programar llamadas globales, ten en cuenta la zona horaria de todos.', ic: '🌐' },
    { w: 'efficiently', p: '/ɪˈfɪʃntli/', m: 'in a well-organized and competent manner with minimal wasted effort', hi: 'कुशलतापूर्वक / सुचारू रूप से', es: 'de manera eficiente', fr: 'efficacement', de: 'effizient', pt: 'eficientemente', zh: '高效地', ar: 'بكفاءة', ja: '効率的に', ru: 'эффективно', ex: 'Digital collaboration tools help distributed teams work efficiently.', exHi: 'डिजिटल सहयोग उपकरण वितरित टीमों को कुशलतापूर्वक काम करने में मदद करते हैं।', exEs: 'Las herramientas de colaboración digital ayudan a los equipos a trabajar de manera eficiente.', ic: '🚀' }
  ],
  chunks: [
    { phrase: 'be supposed to', meaning: 'expected or obliged according to rules, customs, or schedules', hi: 'अपेक्षित होना / नियम या योजना के अनुसार होना', es: 'suponerse que / tener el deber de', fr: 'être censé faire', de: 'sollen / eigentlich vorgesehen sein', pt: 'supõe-se que / dever', zh: '应该 / 按理说', ar: 'من المفترض أن', ja: '〜することになっている', ru: 'предполагается, что / должен', note: 'Expectation modal structure: "We are supposed to join at 10 AM."', ic: '📋' },
    { phrase: 'Could you possibly...?', meaning: 'very polite request formula for virtual and formal requests', hi: 'क्या आप कृपया ... कर सकते हैं?', es: '¿Podrías posiblemente...?', fr: 'Pourriez-vous éventuellement... ?', de: 'Könnten Sie möglicherweise...?', pt: 'Você poderia por gentileza...?', zh: '您能否尽量...？', ar: 'هل يمكنك من فضلك...؟', ja: '恐れ入りますが〜していただけますか？', ru: 'не могли бы вы, пожалуйста...?', note: 'Soft polite request.', ic: '🙏' },
    { phrase: 'share one\'s screen', meaning: 'broadcast one\'s computer display to other call participants', hi: 'अपनी स्क्रीन साझा करना', es: 'compartir pantalla', fr: 'partager son écran', de: 'seinen Bildschirm teilen', pt: 'compartilhar a tela', zh: '共享屏幕', ar: 'مشاركة الشاشة', ja: '画面を共有する', ru: 'демонстрировать экран', note: 'Tech conference collocation.', ic: '🖥️' },
    { phrase: 'You are on mute', meaning: 'standard alert when someone speaks while their microphone is silenced', hi: 'आप म्यूट पर हैं (आवाज बंद है)', es: 'Estás en silencio / Estás muteado', fr: 'Votre micro est coupé', de: 'Du bist stummgeschaltet', pt: 'Você está no mudo', zh: '你静音了', ar: 'أنت في وضع كتم الصوت', ja: 'ミュートになっていますよ', ru: 'вы на беззвучном режиме / микрофон выключен', note: 'Classic video call phrase.', ic: '🔇' },
    { phrase: 'break up', meaning: 'suffer audio/video interruptions or signal distortion during a call', hi: 'आवाज कटना / संपर्क टूटना', es: 'cortarse (la voz o imagen)', fr: 'avoir la voix qui coupe', de: 'abbrechen / stottern (Audio)', pt: 'a voz estar cortando', zh: '声音断断续续', ar: 'الصوت يتقطع', ja: '音声が途切れる', ru: 'звук прерывается', note: 'Phrasal verb: "Your voice is breaking up."', ic: '📶' },
    { phrase: 'Would you mind...?', meaning: 'polite request followed by a gerund (-ing)', hi: 'क्या आपको ... करने में कोई आपत्ति होगी?', es: '¿Te importaría...?', fr: 'Cela vous dérangerait-il de... ?', de: 'Würde es Ihnen etwas ausmachen,...?', pt: 'Você se importaria de...?', zh: '你介意...吗？', ar: 'هل تمانع في...؟', ja: '〜していただけないでしょうか？', ru: 'вы не возражаете против...?', note: 'Grammar rule: takes V-ing: "Would you mind muting your mic?"', ic: '🙇' },
    { phrase: 'follow up on', meaning: 'pursue or check progress on a previous matter or email', hi: 'का फॉलो-अप लेना / प्रगति की जांच करना', es: 'hacer seguimiento de', fr: 'assurer le suivi de', de: 'nachhaken bei / weiterverfolgen', pt: 'dar seguimento a', zh: '跟进', ar: 'متابعة أمر سابق', ja: '〜の進捗を確認する', ru: 'проследить за / вернуться к вопросу', note: 'Professional phrasal verb: "I am following up on our meeting."', ic: '🔍' },
    { phrase: 'touch base', meaning: 'briefly make contact with someone to check status or stay connected', hi: 'संपर्क करना / हालचाल या स्थिति जानना', es: 'ponerse en contacto brevemente', fr: 'faire un point rapide', de: 'sich kurz kurzschließen', pt: 'fazer um contato rápido', zh: '碰头 / 简短交流', ar: 'التواصل السريع للاطمئنان', ja: '近況を確認する / 連絡を取る', ru: 'связаться / переговорить', note: 'Business workplace idiom: "Let\'s touch base on Monday."', ic: '⚾' }
  ],
  grammar: {
    title: 'Expectation Modals ("be supposed to") & Polite Virtual Requests',
    concept: 'Using "be supposed to + base verb" to discuss duties, schedules, and virtual etiquette, paired with polite request structures ("Could you possibly...", "Would you mind + V-ing").',
    patterns: [
      {
        title: 'Workplace Expectations: "be supposed to + Base Verb"',
        structure: 'Subject + am/is/are (not) + supposed to + Base Verb',
        rule: 'Express rules, obligations, or scheduled events that someone expects you to do.',
        examples: [
          { en: 'We are supposed to join the video conference at nine o\'clock sharp.', hi: 'हमें ठीक नौ बजे वीडियो सम्मेलन में शामिल होना है।', es: 'Se supone que debemos unirnos a la videoconferencia a las nueve en punto.' },
          { en: 'You are not supposed to share confidential files on unencrypted channels.', hi: 'आपको अप्रमाणित चैनलों पर गोपनीय फाइलें साझा नहीं करनी चाहिए।', es: 'No se supone que debas compartir archivos confidenciales en canales no seguros.' }
        ]
      },
      {
        title: 'Polite Requests: "Would you mind + Verb-ing"',
        structure: 'Would you mind + Verb-ing ... ?',
        rule: 'Always use a gerund (-ing) after "Would you mind". Answering "No, not at all" means you agree politely.',
        examples: [
          { en: 'Would you mind muting your microphone while Priya speaks?', hi: 'जब प्रिया बोल रही हों तो क्या आपको अपना माइक्रोफ़ोन म्यूट करने में कोई आपत्ति होगी?', es: '¿Te importaría silenciar tu micrófono mientras habla Priya?' },
          { en: 'Would you mind sharing your screen so we can see the slide deck?', hi: 'क्या आप अपनी स्क्रीन साझा करने की कृपा करेंगे ताकि हम स्लाइड डेक देख सकें?', es: '¿Te importaría compartir tu pantalla para que podamos ver las diapositivas?' }
        ]
      },
      {
        title: 'Troubleshooting Formula: "Your voice is ... / Could you possibly ...?"',
        structure: 'Your audio is breaking up. Could you possibly + Base Verb?',
        rule: 'Combine a clear observation of the technical issue with a courteous request for action.',
        examples: [
          { en: 'Your voice is breaking up slightly. Could you possibly turn off your video camera?', hi: 'आपकी आवाज थोड़ी कट रही है। क्या आप कृपया अपना वीडियो कैमरा बंद कर सकते हैं?', es: 'Tu voz se está cortando un poco. ¿Podrías apagar tu cámara de video?' },
          { en: 'There is an echo on the line. Could everyone please check their headset settings?', hi: 'लाइन पर एक गूंज है। क्या हर कोई कृपया अपनी हेडसेट सेटिंग्स की जांच कर सकता है?', es: 'Hay un eco en la línea. ¿Podrían todos revisar la configuración de sus auriculares?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'Would you mind to mute your microphone?',
      cor: 'Would you mind muting your microphone?',
      exp: '"Would you mind" requires a gerund (-ing form), not an infinitive ("to mute").',
      hi: '"Would you mind" के बाद verb+ing ("muting") आता है।',
      es: '"Would you mind" va seguido de gerundio (-ing), no de infinitivo.'
    },
    {
      inc: 'We are suppose to start at 10 AM.',
      cor: 'We are supposed to start at 10 AM.',
      exp: 'The participle must end in "-d": "supposed to".',
      hi: 'हमेशा "supposed to" ("-d" के साथ) लिखें।',
      es: 'Debe escribirse "supposed to" con "-d".'
    },
    {
      inc: 'Your voice is breaking down.',
      cor: 'Your voice is breaking up.',
      exp: 'Audio interruptions use the phrasal verb "break up" (machines "break down").',
      hi: 'आवाज कटने के लिए "breaking up" का प्रयोग करें।',
      es: 'Usa "breaking up" para fallos de audio (los coches "break down").'
    },
    {
      inc: 'Could you possibly to share the link?',
      cor: 'Could you possibly share the link?',
      exp: '"Could you possibly" takes a bare infinitive without "to".',
      hi: '"Could you possibly" के बाद सीधे base verb आता है।',
      es: '"Could you possibly" va seguido del verbo base sin "to".'
    },
    {
      inc: 'I am on the mute.',
      cor: 'I am on mute.',
      exp: 'The fixed expression is "on mute" without the article "the".',
      hi: 'सही अभिव्यक्ति "on mute" है।',
      es: 'La frase fija es "on mute" sin "the".'
    }
  ],
  dialogues: [
    {
      title: 'Troubleshooting Audio in a Remote Meeting',
      context: 'Chloe hosts a project sync and helps Alex fix his connection issues.',
      charA: { name: 'Chloe', av: '👩‍💼', role: 'Team Lead' },
      charB: { name: 'Alex', av: '👨‍💼', role: 'Developer' },
      turns: [
        { spk: 'Chloe', text: 'Good morning everyone! Alex, we are supposed to review the sprint tasks, but you are currently on mute.', hi: 'सुप्रभात सबको! एलेक्स, हमें स्प्रिंट कार्यों की समीक्षा करनी है, लेकिन आप वर्तमान में म्यूट पर हैं।', es: '¡Buenos días a todos! Alex, se supone que debemos revisar las tareas, pero estás en silencio.' },
        { spk: 'Alex', text: 'Sorry about that! Can everyone hear me clearly now, or is my audio still breaking up?', hi: 'उसके लिए माफ़ी! क्या हर कोई मुझे स्पष्ट रूप से सुन सकता है, या मेरी आवाज़ अभी भी कट रही है?', es: '¡Disculpas! ¿Todos pueden oírme con claridad ahora o mi audio se sigue cortando?' },
        { spk: 'Chloe', text: 'You sound crystal clear now! Would you mind sharing your screen to walk us through the new interface?', hi: 'आपकी आवाज़ अब बिल्कुल स्पष्ट आ रही है! क्या आप नए इंटरफ़ेस को दिखाने के लिए अपनी स्क्रीन साझा करने की कृपा करेंगे?', es: '¡Te escuchas perfectamente! ¿Te importaría compartir tu pantalla para mostrarnos la nueva interfaz?' },
        { spk: 'Alex', text: 'Not at all! Let me pull up the design file right away.', hi: 'बिल्कुल नहीं! मैं तुरंत डिज़ाइन फ़ाइल खोलता हूँ।', es: '¡Para nada! Permíteme abrir el archivo de diseño de inmediato.' }
      ]
    },
    {
      title: 'Asynchronous Collaboration Across Time Zones',
      context: 'Maya in London and Kenji in Tokyo align on work deliverables.',
      charA: { name: 'Maya', av: '👩‍💻', role: 'Content Strategist' },
      charB: { name: 'Kenji', av: '👨‍💻', role: 'Product Manager' },
      turns: [
        { spk: 'Maya', text: 'Kenji, because of our eight-hour timezone difference, let us handle daily updates asynchronously.', hi: 'केन्जी, हमारे आठ घंटे के समय क्षेत्र के अंतर के कारण, आइए हम दैनिक अपडेट को अलग-अलग समय पर (asynchronously) संभालें।', es: 'Kenji, debido a nuestra diferencia de ocho horas, gestionemos las actualizaciones de forma asíncrona.' },
        { spk: 'Kenji', text: 'That sounds very practical. We are supposed to post our summaries in the team workspace by the end of our local day.', hi: 'यह बहुत व्यावहारिक लगता है। हमें अपने स्थानीय दिन के अंत तक टीम कार्यक्षेत्र में अपने सारांश पोस्ट करने हैं।', es: 'Eso suena muy práctico. Se supone que debemos publicar nuestros resúmenes al final de nuestro día local.' },
        { spk: 'Maya', text: 'Could you possibly upload the customer feedback report as a PDF attachment before you log off?', hi: 'क्या आप लॉग ऑफ़ करने से पहले ग्राहक प्रतिक्रिया रिपोर्ट को पीडीएफ अटैचमेंट के रूप में अपलोड कर सकते हैं?', es: '¿Podrías subir el informe de feedback de clientes como archivo adjunto en PDF antes de desconectarte?' },
        { spk: 'Kenji', text: 'I will do that right now. Let us touch base live on Thursday for the final client presentation.', hi: 'मैं अभी करता हूँ। आइए अंतिम क्लाइंट प्रस्तुति के लिए गुरुवार को सीधे संपर्क करें।', es: 'Lo haré ahora mismo. Pongámonos en contacto en vivo el jueves para la presentación final.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_11_163_p01',
      type: 'multiple_choice',
      prompt: 'Complete with the correct gerund structure: "Would you mind _____ your video camera to improve bandwidth?"',
      options: ['turning off', 'to turn off', 'turned off', 'turn off'],
      correctAnswer: 'turning off',
      explanation: '"Would you mind" must be followed by a gerund (-ing).'
    },
    {
      id: 'ex_a2_11_163_p02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "We are _____ to submit our quarterly reports before 5 PM."',
      correctAnswer: 'supposed',
      explanation: 'Fixed structure: "be supposed to".'
    },
    {
      id: 'ex_a2_11_163_p03',
      type: 'word_ordering',
      prompt: 'Arrange into a polite remote work request:',
      words: ['Could', 'you', 'possibly', 'share', 'your', 'screen', 'with', 'us?'],
      correctAnswer: 'Could you possibly share your screen with us?',
      explanation: 'Could you possibly + Base Verb + Object.'
    },
    {
      id: 'ex_a2_11_163_p04',
      type: 'translation',
      prompt: 'Translate into English: "आप म्यूट पर हैं; कृपया खुद को अनम्यूट करें।"',
      targetSentence: 'You are on mute; please unmute yourself.',
      correctAnswer: 'You are on mute; please unmute yourself.',
      explanation: 'Standard virtual meeting formula.'
    },
    {
      id: 'ex_a2_11_163_p05',
      type: 'error_correction',
      prompt: 'Correct the audio phrasal verb error:',
      errorSentence: 'Your audio is breaking down because of a weak Wi-Fi signal.',
      correctAnswer: 'Your audio is breaking up because of a weak Wi-Fi signal.',
      explanation: 'Use "breaking up" for audio/video cutting out.'
    },
    {
      id: 'ex_a2_11_163_p06',
      type: 'multiple_choice',
      prompt: 'What is the appropriate response to "Would you mind sharing the file?" if you agree to share it?',
      options: [
        'Not at all, I will send it right away.',
        'Yes, I mind very much.',
        'I am supposed to mind.',
        'According to me, no.'
      ],
      correctAnswer: 'Not at all, I will send it right away.',
      explanation: '"Not at all" means "I do not mind / I agree gladly".'
    },
    {
      id: 'ex_a2_11_163_p07',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Let us touch _____ on Monday to discuss project updates."',
      correctAnswer: 'base',
      explanation: 'Idiom: "touch base".'
    },
    {
      id: 'ex_a2_11_163_p08',
      type: 'word_ordering',
      prompt: 'Order the words to create an expectation sentence:',
      words: ['Employees', 'are', 'supposed', 'to', 'mute', 'their', 'microphones.'],
      correctAnswer: 'Employees are supposed to mute their microphones.',
      explanation: 'Subject + are supposed to + Base Verb + Object.'
    },
    {
      id: 'ex_a2_11_163_p09',
      type: 'translation',
      prompt: 'Translate into English: "क्या आप ईमेल में पीडीएफ संलग्नक की समीक्षा करने की कृपा करेंगे?"',
      targetSentence: 'Would you mind reviewing the PDF attachment in the email?',
      correctAnswer: 'Would you mind reviewing the PDF attachment in the email?',
      explanation: '"Would you mind reviewing..." uses the gerund.'
    },
    {
      id: 'ex_a2_11_163_p10',
      type: 'error_correction',
      prompt: 'Fix the spelling of the expectation modal:',
      errorSentence: 'We are suppose to attend the meeting at noon.',
      correctAnswer: 'We are supposed to attend the meeting at noon.',
      explanation: 'Change "suppose" to "supposed".'
    },
    {
      id: 'ex_a2_11_163_p11',
      type: 'multiple_choice',
      prompt: 'What does "asynchronous communication" mean?',
      options: [
        'Exchanging messages without needing everyone to be online at the same moment',
        'Calling everyone at midnight',
        'Having twenty people talk simultaneously on video',
        'Sending letters by postal mail only'
      ],
      correctAnswer: 'Exchanging messages without needing everyone to be online at the same moment',
      explanation: 'Asynchronous collaboration allows flexible response times.'
    },
    {
      id: 'ex_a2_11_163_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "I am writing to _____ up on our discussion from yesterday."',
      correctAnswer: 'follow',
      explanation: '"follow up on" means checking on previous matters.'
    },
    {
      id: 'ex_a2_11_163_p13',
      type: 'word_ordering',
      prompt: 'Arrange into a troubleshooting sentence:',
      words: ['There', 'is', 'a', 'slight', 'delay', 'on', 'your', 'video.'],
      correctAnswer: 'There is a slight delay on your video.',
      explanation: 'There is + Adjective + Noun + Prepositional phrase.'
    },
    {
      id: 'ex_a2_11_163_p14',
      type: 'translation',
      prompt: 'Translate into English: "आइए हम बैठक के एजेंडे का सख्ती से पालन करें।"',
      targetSentence: 'Let us stick strictly to the meeting agenda.',
      correctAnswer: 'Let us stick strictly to the meeting agenda.',
      explanation: '"stick strictly to the meeting agenda" translates बैठक के एजेंडे का सख्ती से पालन करना.'
    },
    {
      id: 'ex_a2_11_163_p15',
      type: 'multiple_choice',
      prompt: 'Choose the correct phrase: "When collaborating across continents, always respect everyone\'s _____."',
      options: ['timezone', 'glitch', 'breakout', 'bandwidth'],
      correctAnswer: 'timezone',
      explanation: '"Timezone" is the standard term for regional time differences.'
    }
  ],
  review: [
    {
      id: 'ex_a2_11_163_r01',
      type: 'multiple_choice',
      prompt: 'Which request is grammatically correct and polite?',
      options: [
        'Would you mind muting your microphone for a moment?',
        'Would you mind to mute your microphone for a moment?',
        'Could you possibly to mute your microphone for a moment?',
        'You are suppose to mute microphone now.'
      ],
      correctAnswer: 'Would you mind muting your microphone for a moment?',
      explanation: '"Would you mind + V-ing" is standard and correct.'
    },
    {
      id: 'ex_a2_11_163_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "You are not _____ to record the call without everyone\'s permission."',
      correctAnswer: 'supposed',
      explanation: '"not supposed to" expresses prohibition or rule expectation.'
    },
    {
      id: 'ex_a2_11_163_r03',
      type: 'error_correction',
      prompt: 'Correct the error:',
      errorSentence: 'Could you possibly sending the presentation link?',
      correctAnswer: 'Could you possibly send the presentation link?',
      explanation: '"Could you possibly" takes a base verb "send", not "sending".'
    },
    {
      id: 'ex_a2_11_163_r04',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      words: ['I', 'will', 'unmute', 'myself', 'to', 'answer', 'the', 'question.'],
      correctAnswer: 'I will unmute myself to answer the question.',
      explanation: 'Subject + will unmute + Object + Infinitive of purpose.'
    },
    {
      id: 'ex_a2_11_163_r05',
      type: 'translation',
      prompt: 'Translate into English: "हम सोमवार को प्रगति की समीक्षा के लिए संपर्क करेंगे।"',
      targetSentence: 'We will touch base on Monday to review progress.',
      correctAnswer: 'We will touch base on Monday to review progress.',
      explanation: '"touch base on Monday" translates सोमवार को संपर्क करेंगे.'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_11_163_a01',
      type: 'multiple_choice',
      prompt: 'How should you politely alert a speaker whose audio is cutting out?\nA: "____"',
      options: [
        'Excuse me, your audio is breaking up slightly. Would you mind turning off your video camera to save bandwidth?',
        'You are breaking down, stop talking now.',
        'Why are you suppose to speak with bad internet?',
        'According to me, nobody can hear you.'
      ],
      correctAnswer: 'Excuse me, your audio is breaking up slightly. Would you mind turning off your video camera to save bandwidth?',
      explanation: 'Professional, courteous, and grammatically accurate.'
    },
    {
      id: 'ex_a2_11_163_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Would you mind _____ the meeting link to the new team member?"',
      correctAnswer: 'forwarding',
      explanation: '"Would you mind + gerund (forwarding)".'
    },
    {
      id: 'ex_a2_11_163_a03',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nColleague: "Are we supposed to prepare presentation slides for tomorrow?"\nYou: "_____"',
      options: [
        'Yes, we are supposed to share a five-slide overview during the morning call.',
        'No, we are suppose to ignore the agenda.',
        'Would you mind to sleep tomorrow?',
        'I am on the mute yesterday.'
      ],
      correctAnswer: 'Yes, we are supposed to share a five-slide overview during the morning call.',
      explanation: 'Accurate and logical workplace reply.'
    },
    {
      id: 'ex_a2_11_163_a04',
      type: 'speaking',
      prompt: 'Read aloud with clear professional tone: "Good morning team! We are supposed to finalize our project roadmap today. Could you possibly share your screen, and would everyone else mind staying on mute during the demo?"',
      targetSentence: 'Good morning team! We are supposed to finalize our project roadmap today. Could you possibly share your screen, and would everyone else mind staying on mute during the demo?',
      correctAnswer: 'Good morning team! We are supposed to finalize our project roadmap today. Could you possibly share your screen, and would everyone else mind staying on mute during the demo?',
      explanation: 'Pronounce "supposed to", "possibly", and "etiquette" smoothly with polite intonation.'
    },
    {
      id: 'ex_a2_11_163_a05',
      type: 'translation',
      prompt: 'Translate into English: "क्या आप हमारे साथ मीटिंग का एजेंडा साझा करने की कृपा करेंगे?"',
      targetSentence: 'Would you mind sharing the meeting agenda with us?',
      correctAnswer: 'Would you mind sharing the meeting agenda with us?',
      explanation: 'Accurate "Would you mind + V-ing" polite formula.'
    }
  ]
};

// =========================================================================
// LESSON 164: Customer Service, Returns, Exchanges & Formal Inquiries
// =========================================================================
export const LESSON_164_CONFIG: LessonConfigA2 = {
  num: 164,
  title: 'Customer Service, Returns, Exchanges & Formal Inquiries',
  icon: '🛍️',
  estMin: 25,
  objTitle: 'Indirect Questions for Polite Inquiries ("Could you tell me if...?") & Consumer Transactions',
  objDesc: 'Navigate customer service scenarios, retail exchanges, refund requests, warranty claims, and formal transactional inquiries using indirect question frames ("Could you tell me if...?", "I was wondering whether...", "I would appreciate it if...").',
  objHi: 'ग्राहक सेवा, सामान की वापसी (रिटर्न), एक्सचेंज, रिफंड, वारंटी और अप्रत्यक्ष प्रश्नों ("Could you tell me if...?", "I was wondering whether...") का उपयोग करना सीखें।',
  objEs: 'Atención al cliente, devoluciones, cambios, garantías y preguntas indirectas de cortesía ("Could you tell me if...?", "I was wondering whether...").',
  canDo: [
    'I can ask polite indirect questions using "Could you tell me if / whether...?" and "Do you know where...?"',
    'I can explain product defects, request refunds, or arrange store exchanges calmly and assertively.',
    'I can use formal courteous requests like "I would appreciate it if you could..." in emails and calls.',
    'I can understand customer service policies regarding receipts, return windows, and warranties.'
  ],
  canDoHi: [
    'मैं "Could you tell me if...?" और "Do you know where...?" का उपयोग करके विनम्र अप्रत्यक्ष प्रश्न पूछ सकता हूँ।',
    'मैं उत्पाद की खराबी समझा सकता हूँ, रिफंड का अनुरोध कर सकता हूँ या स्टोर एक्सचेंज की व्यवस्था कर सकता हूँ।',
    'मैं "I would appreciate it if you could..." जैसे औपचारिक विनम्र अनुरोधों का उपयोग कर सकता हूँ।',
    'मैं रसीद, रिटर्न विंडो और वारंटी से संबंधित ग्राहक सेवा नीतियों को समझ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo hacer preguntas indirectas usando "Could you tell me if / whether...?" y "Do you know where...?"',
    'Puedo explicar defectos de productos, pedir reembolsos o solicitar cambios.',
    'Puedo usar fórmulas formales como "I would appreciate it if you could...".',
    'Puedo entender políticas de recibos, plazos de devolución y garantías.'
  ],
  vocab: [
    { w: 'receipt', p: '/rɪˈsiːt/', m: 'a printed or digital document acknowledging that goods or services have been paid for', hi: 'रसीद / पावती', es: 'recibo / comprobante de compra', fr: 'reçu / ticket de caisse', de: 'Kassenbon / Quittung', pt: 'recibo / comprovante', zh: '收据 / 发票', ar: 'إيصال دفع / فاتورة', ja: '領収書 / レシート', ru: 'чек / квитанция', ex: 'Please retain your original sales receipt in case you need to request an exchange.', exHi: 'यदि आपको एक्सचेंज का अनुरोध करने की आवश्यकता हो तो कृपया अपनी मूल बिक्री रसीद अपने पास रखें।', exEs: 'Por favor, conserva tu recibo original por si necesitas solicitar un cambio.', ic: '🧾' },
    { w: 'refund', p: '/ˈriːfʌnd/', m: 'a repayment of a sum of money, typically to a dissatisfied customer', hi: 'धनवापसी / रिफंड', es: 'reembolso / devolución de dinero', fr: 'remboursement', de: 'Rückerstattung', pt: 'reembolso', zh: '退款', ar: 'استرداد المبلغ', ja: '返金 / 払い戻し', ru: 'возврат средств / возмещение', ex: 'The store processed a full refund to my credit card within two business days.', exHi: 'स्टोर ने दो व्यावसायिक दिनों के भीतर मेरे क्रेडिट कार्ड में पूर्ण धनवापसी संसाधित की।', exEs: 'La tienda procesó un reembolso completo a mi tarjeta en dos días hábiles.', ic: '💳' },
    { w: 'exchange', p: '/ɪksˈtʃeɪndʒ/', m: 'the act of giving one thing and receiving another in its place', hi: 'बदलना / एक्सचेंज करना', es: 'cambio (de producto)', fr: 'échange', de: 'Umtausch', pt: 'troca (de mercadoria)', zh: '调换 / 退换', ar: 'استبدال', ja: '交換', ru: 'обмен (товара)', ex: 'I would like to exchange this medium shirt for a large size, please.', exHi: 'मैं कृपया इस मध्यम आकार की शर्ट को बड़े आकार से बदलना चाहूँगा।', exEs: 'Me gustaría cambiar esta camisa mediana por una talla grande, por favor.', ic: '🔄' },
    { w: 'defect', p: '/ˈdiːfekt/', m: 'a shortcoming, imperfection, or flaw in a manufactured product', hi: 'खराबी / दोष / त्रुटि', es: 'defecto / falla de fábrica', fr: 'défaut / vice de fabrication', de: 'Mangel / Defekt', pt: 'defeito / avaria', zh: '缺陷 / 瑕疵', ar: 'عيب تصنيع / خلل', ja: '欠陥 / 不具合', ru: 'дефект / брак', ex: 'The blender stopped working because of an internal manufacturing defect.', exHi: 'आंतरिक विनिर्माण दोष के कारण ब्लेंडर ने काम करना बंद कर दिया।', exEs: 'La licuadora dejó de funcionar debido a un defecto de fabricación interno.', ic: '⚠️' },
    { w: 'warranty', p: '/ˈwɒrənti/', m: 'a written guarantee promising to repair or replace an article if necessary within a specified period', hi: 'वारंटी / गारंटी पत्र', es: 'garantía', fr: 'garantie', de: 'Garantie / Gewährleistung', pt: 'garantia', zh: '保修 / 质保', ar: 'ضمان', ja: '保証 / ワランティ', ru: 'гарантия', ex: 'This microwave oven is covered by a comprehensive two-year warranty.', exHi: 'यह माइक्रोवेव ओवन व्यापक दो साल की वारंटी द्वारा कवर किया गया है।', exEs: 'Este horno microondas está cubierto por una garantía integral de dos años.', ic: '🛡️' },
    { w: 'policy', p: '/ˈpɒləsi/', m: 'a set of rules or principles agreed upon by a business or organization', hi: 'नीति / नियम', es: 'política (de la empresa)', fr: 'politique (de retour/vente)', de: 'Richtlinie / Geschäftsbedingungen', pt: 'política (de devolução)', zh: '政策 / 规章', ar: 'سياسة (المحل/الشركة)', ja: '規約 / ポリシー', ru: 'политика / правила', ex: 'Our return policy allows thirty days for returns in original packaging.', exHi: 'हमारी वापसी नीति मूल पैकेजिंग में वापसी के लिए तीस दिनों की अनुमति देती है।', exEs: 'Nuestra política de devolución permite treinta días con el embalaje original.', ic: '📜' },
    { w: 'dissatisfied', p: '/dɪsˈsætɪsfaɪd/', m: 'not content or pleased with something; disappointed', hi: 'असंतुष्ट / नाखुश', es: 'insatisfecho / descontento', fr: 'insatisfait / mécontent', de: 'unzufrieden', pt: 'insatisfeito', zh: '不满意', ar: 'غير راضٍ / مستاء', ja: '不満な', ru: 'недовольный / неудовлетворенный', ex: 'If you are dissatisfied with our service, please speak with our manager.', exHi: 'यदि आप हमारी सेवा से असंतुष्ट हैं, तो कृपया हमारे प्रबंधक से बात करें।', exEs: 'Si estás insatisfecho con nuestro servicio, habla con nuestro gerente.', ic: '😕' },
    { w: 'complaint', p: '/kəmˈpleɪnt/', m: 'a statement that something is unsatisfactory or unacceptable', hi: 'शिकायत', es: 'queja / reclamación', fr: 'plainte / réclamation', de: 'Beschwerde / Reklamation', pt: 'reclamação / queixa', zh: '投诉 / 申诉', ar: 'شكوى', ja: '苦情 / クレーム', ru: 'жалоба / претензия', ex: 'The customer filed a formal complaint regarding the delayed delivery.', exHi: 'ग्राहक ने विलंबित डिलीवरी के संबंध में एक औपचारिक शिकायत दर्ज की।', exEs: 'El cliente presentó una queja formal con respecto a la entrega retrasada.', ic: '📝' },
    { w: 'inquiry', p: '/ɪnˈkwaɪəri/', m: 'an act of asking for information or official assistance', hi: 'पूछताछ / जांच', es: 'consulta / indagación', fr: 'demande de renseignements', de: 'Anfrage / Erkundigung', pt: 'consulta / indagação', zh: '咨询 / 问询', ar: 'استفسار / سؤال', ja: '問い合わせ / 照会', ru: 'запрос / расспрос', ex: 'We respond to every customer inquiry within twenty-four hours.', exHi: 'हम चौबीस घंटे के भीतर हर ग्राहक पूछताछ का जवाब देते हैं।', exEs: 'Respondemos a cada consulta de los clientes en un plazo de veinticuatro horas.', ic: '❓' },
    { w: 'representative', p: '/ˌreprɪˈzentətɪv/', m: 'a person chosen or appointed to act or speak for an organization', hi: 'प्रतिनिधि / कस्टमर केयर एजेंट', es: 'representante de atención al cliente', fr: 'représentant / conseiller clientèle', de: 'Kundenberater / Vertreter', pt: 'representante / atendente', zh: '客服代表', ar: 'ممثل خدمة العملاء', ja: '担当者 / 窓口代表', ru: 'представитель службы поддержки', ex: 'A customer care representative will guide you through the return process.', exHi: 'एक ग्राहक सेवा प्रतिनिधि वापसी प्रक्रिया के माध्यम से आपका मार्गदर्शन करेगा।', exEs: 'Un representante de atención al cliente te guiará en el proceso de devolución.', ic: '🎧' },
    { w: 'damaged', p: '/ˈdæmɪdʒd/', m: 'inflicted with physical harm or injury reducing its value or usefulness', hi: 'क्षतिग्रस्त / टूटा-फूटा', es: 'dañado / averiado', fr: 'endommagé / abîmé', de: 'beschädigt', pt: 'danificado', zh: '损坏的', ar: 'تالف / متضرر', ja: '破損した / 傷んだ', ru: 'поврежденный / испорченный', ex: 'The parcel arrived with a damaged exterior box and broken glassware.', exHi: 'पार्सल क्षतिग्रस्त बाहरी डिब्बे और टूटे हुए कांच के बर्तनों के साथ आया था।', exEs: 'El paquete llegó con una caja exterior dañada y cristalería rota.', ic: '📦' },
    { w: 'compensation', p: '/ˌkɒmpenˈseɪʃn/', m: 'something, typically money, awarded to someone in recognition of loss or injury', hi: 'मुआवजा / क्षतिपूर्ति', es: 'compensación / indemnización', fr: 'dédommagement / compensation', de: 'Entschädigung / Kompensation', pt: 'compensação / indenização', zh: '补偿金 / 赔偿', ar: 'تعويض', ja: '補償 / 賠償', ru: 'компенсация / возмещение ущерба', ex: 'The airline offered travel vouchers as compensation for the cancelled flight.', exHi: 'एयरलाइन ने रद्द की गई उड़ान के मुआवजे के रूप में यात्रा वाउचर की पेशकश की।', exEs: 'La aerolínea ofreció cupones de viaje como compensación por el vuelo cancelado.', ic: '💰' },
    { w: 'courteous', p: '/ˈkɜːtiəs/', m: 'polite, respectful, and considerate in manner', hi: 'विनम्र / शिष्ट', es: 'cortés / educado', fr: 'courtois / poli', de: 'höflich / zuvorkommend', pt: 'cortês / educado', zh: '有礼貌的 / 谦恭的', ar: 'مهذب / لبق', ja: '礼儀正しい / 丁寧な', ru: 'вежливый / учтивый', ex: 'The store assistant was courteous and resolved our issue immediately.', exHi: 'दुकान सहायक विनम्र था और उसने हमारी समस्या का तुरंत समाधान किया।', exEs: 'El asistente de la tienda fue cortés y resolvió nuestro problema de inmediato.', ic: '😊' },
    { w: 'transaction', p: '/trænˈzækʃn/', m: 'an instance of buying or selling something; a business deal', hi: 'लेन-देन / सौदा', es: 'transacción / operación comercial', fr: 'transaction / opération', de: 'Transaktion / Geschäftsvorgang', pt: 'transação / operação', zh: '交易', ar: 'معاملة مالية / تجارية', ja: '取引 / 決済', ru: 'транзакция / сделка', ex: 'You will receive a confirmation code at the end of the transaction.', exHi: 'लेन-देन के अंत में आपको एक पुष्टिकरण कोड प्राप्त होगा।', exEs: 'Recibirás un código de confirmación al final de la transacción.', ic: '🏧' },
    { w: 'voucher', p: '/ˈvaʊtʃə/', m: 'a document or digital code that can be used instead of money for buying goods', hi: 'वाउचर / कूपन', es: 'vale / cupón de compra', fr: 'bon d\'achat / voucher', de: 'Gutschein', pt: 'vale-compras / cupom', zh: '代金券 / 优惠券', ar: 'قسيمة شراء', ja: '商品券 / バウチャー', ru: 'ваучер / купон', ex: 'She received a fifty-dollar store voucher for her next purchase.', exHi: 'उसे अपनी अगली खरीदारी के लिए पचास डॉलर का स्टोर वाउचर मिला।', exEs: 'Recibió un vale de cincuenta dólares para su próxima compra.', ic: '🏷️' },
    { w: 'resolve', p: '/rɪˈzɒlv/', m: 'settle or find a solution to a problem, dispute, or contentious matter', hi: 'सुलझाना / समाधान करना', es: 'resolver / solucionar', fr: 'résoudre / régler', de: 'lösen / beilegen', pt: 'resolver / solucionar', zh: '解决', ar: 'يحل مسألة', ja: '解決する', ru: 'разрешать / улаживать', ex: 'We aim to resolve all technical complaints on the first call.', exHi: 'हमारा उद्देश्य पहली ही कॉल पर सभी तकनीकी शिकायतों का समाधान करना है।', exEs: 'Nuestro objetivo es resolver todas las quejas en la primera llamada.', ic: '✅' },
    { w: 'eligible', p: '/ˈelɪdʒəbl/', m: 'having the right to do or obtain something; satisfying the appropriate conditions', hi: 'पात्र / योग्य', es: 'elegible / que cumple los requisitos', fr: 'éligible / qualifié', de: 'berechtigt / qualifiziert', pt: 'elegível / qualificado', zh: '符合条件的', ar: 'مؤهل / مستحق', ja: '資格がある / 対象となる', ru: 'имеющий право / подходящий', ex: 'Items returned within fourteen days are eligible for a full refund.', exHi: 'चौदह दिनों के भीतर लौटाए गए सामान पूर्ण धनवापसी के लिए पात्र हैं।', exEs: 'Los artículos devueltos dentro de los 14 días son elegibles para reembolso.', ic: '🏷️' },
    { w: 'escalate', p: '/ˈeskəleɪt/', m: 'refer a situation to a higher authority or supervisor for urgent resolution', hi: 'उच्च अधिकारी को भेजना / बढ़ाना', es: 'escalar (un caso al supervisor)', fr: 'transmettre à un supérieur / escalader', de: 'eskalieren / an Vorgesetzte weiterleiten', pt: 'escalar para um superior', zh: '向上升级（问题）', ar: 'تصعيد الشكوى للمشرف', ja: '上長にエスカレーションする', ru: 'эскалировать / передать выше', ex: 'If the issue cannot be resolved here, I will escalate it to my supervisor.', exHi: 'यदि समस्या का समाधान यहाँ नहीं हो पाता है, तो मैं इसे अपने पर्यवेक्षक के पास अग्रेषित करूँगा।', exEs: 'Si el problema no se puede resolver aquí, lo escalaré a mi supervisor.', ic: '📈' },
    { w: 'clarification', p: '/ˌklærɪfɪˈkeɪʃn/', m: 'the action of making a statement or situation clearer and easier to understand', hi: 'स्पष्टीकरण / सफाई', es: 'aclaración / explicación', fr: 'clarification / précision', de: 'Klarstellung / Erläuterung', pt: 'esclarecimento', zh: '澄清 / 说明', ar: 'توضيح', ja: '説明 / 明確化', ru: 'разъяснение / уточнение', ex: 'I am calling for clarification regarding the additional delivery fee.', exHi: 'मैं अतिरिक्त डिलीवरी शुल्क के संबंध में स्पष्टीकरण के लिए कॉल कर रहा हूँ।', exEs: 'Llamo para pedir una aclaración sobre el cargo adicional de envío.', ic: '💡' },
    { w: 'appreciate', p: '/əˈpriːʃieɪt/', m: 'recognize the full worth of; be grateful or thankful for', hi: 'आभार व्यक्त करना / सराहना करना', es: 'agradecer / apreciar', fr: 'apprécier / être reconnaissant', de: 'schätzen / dankbar sein für', pt: 'apreciar / agradecer', zh: '感谢 / 赞赏', ar: 'يقدّر / يمتن', ja: '感謝する', ru: 'ценить / быть признательным', ex: 'I would appreciate it if you could confirm my booking by email.', exHi: 'यदि आप ईमेल द्वारा मेरी बुकिंग की पुष्टि कर सकें तो मैं आभारी रहूँगा।', exEs: 'Agradecería que pudiera confirmar mi reserva por correo electrónico.', ic: '🌟' }
  ],
  chunks: [
    { phrase: 'Could you tell me if...?', meaning: 'indirect question formula used to make polite inquiries', hi: 'क्या आप मुझे बता सकते हैं कि क्या...?', es: '¿Podría decirme si...?', fr: 'Pourriez-vous me dire si... ?', de: 'Könnten Sie mir sagen, ob...?', pt: 'Poderia me dizer se...?', zh: '请问您能否告诉我是否...？', ar: 'هل يمكنك إخباري ما إذا كان...؟', ja: '〜かどうか教えていただけますか？', ru: 'не могли бы вы подсказать, ...?', note: 'Embedded clause uses normal subject-verb order.', ic: '❓' },
    { phrase: 'I was wondering whether...', meaning: 'tentative and extremely polite request or inquiry formula', hi: 'मैं सोच रहा था कि क्या...', es: 'Me preguntaba si...', fr: 'Je me demandais si...', de: 'Ich habe mich gefragt, ob...', pt: 'Eu estava me perguntando se...', zh: '我想知道是否...', ar: 'كنت أتساءل عما إذا كان...', ja: '〜かしらと思っていたのですが...', ru: 'я хотел поинтересоваться, ...', note: 'Soft polite opener for customer service.', ic: '💭' },
    { phrase: 'I would appreciate it if you could...', meaning: 'formal, courteous request for specific assistance', hi: 'यदि आप ... कर सकें तो मैं आभारी रहूँगा', es: 'Le agradecería si pudiera...', fr: 'Je vous saurais gré de bien vouloir...', de: 'Ich wäre Ihnen dankbar, wenn Sie... könnten', pt: 'Eu agradeceria se você pudesse...', zh: '如果您能...我将非常感激', ar: 'سأكون ممتناً لو استطعتم...', ja: '〜していただけますと幸いです', ru: 'я был бы признателен, если бы вы могли...', note: 'High-register customer request.', ic: '🙏' },
    { phrase: 'ask for a full refund', meaning: 'request a complete return of money paid for a defective or returned item', hi: 'पूर्ण धनवापसी की मांग करना', es: 'solicitar un reembolso completo', fr: 'demander un remboursement intégral', de: 'eine vollständige Rückerstattung verlangen', pt: 'pedir reembolso total', zh: '申请全额退款', ar: 'طلب استرداد كامل للمبلغ', ja: '全額返金を求める', ru: 'просить полный возврат средств', note: 'Consumer rights phrase.', ic: '💵' },
    { phrase: 'under warranty', meaning: 'protected by a manufacturer\'s formal guarantee of repair or replacement', hi: 'वारंटी के तहत', es: 'bajo garantía / cubierto por la garantía', fr: 'sous garantie', de: 'unter Garantie', pt: 'sob garantia', zh: '在保修期内', ar: 'تحت الضمان', ja: '保証期間中で', ru: 'на гарантии', note: 'Prepositional phrase: "The laptop is still under warranty."', ic: '🛡️' },
    { phrase: 'proof of purchase', meaning: 'official document (such as a receipt) verifying an item was bought', hi: 'खरीद का प्रमाण (रसीद)', es: 'comprobante de compra', fr: 'preuve d\'achat', de: 'Kaufnachweis', pt: 'comprovante de compra', zh: '购买凭证', ar: 'إثبات الشراء', ja: '購入証明書', ru: 'подтверждение покупки', note: 'Retail requirement for returns.', ic: '🧾' },
    { phrase: 'return window', meaning: 'the specific time period during which items may be returned or exchanged', hi: 'वापसी की समय सीमा', es: 'plazo de devolución', fr: 'délai de retour', de: 'Rückgabefrist', pt: 'prazo de devolução', zh: '退货期限', ar: 'مهلة الإرجاع', ja: '返品受付期間', ru: 'срок возврата', note: 'Retail policy term: "Within the thirty-day return window."', ic: '📅' },
    { phrase: 'speak to a supervisor', meaning: 'request to converse with a manager or senior team member', hi: 'पर्यवेक्षक / मैनेजर से बात करना', es: 'hablar con un supervisor', fr: 'parler à un responsable / superviseur', de: 'mit einem Vorgesetzten sprechen', pt: 'falar com o supervisor', zh: '与主管通话', ar: 'التحدث مع المشرف', ja: '責任者と話す', ru: 'поговорить с руководителем', note: 'Escalation phrase.', ic: '👔' }
  ],
  grammar: {
    title: 'Indirect Questions for Polite Inquiries & Customer Etiquette',
    concept: 'Forming indirect questions using polite introductory clauses ("Could you tell me if...?", "Do you know where...?", "I was wondering whether..."). In indirect questions, the word order reverts to affirmative (Subject + Verb) without "do/did" auxiliary inversion.',
    patterns: [
      {
        title: 'Yes/No Indirect Questions: "Could you tell me if / whether ...?"',
        structure: 'Introductory Phrase + if/whether + Subject + Verb',
        rule: 'In indirect questions, the question word order disappears. Do not invert the subject and auxiliary.',
        examples: [
          { en: 'Could you tell me if this electronic item is covered under warranty?', hi: 'क्या आप मुझे बता सकते हैं कि क्या यह इलेक्ट्रॉनिक सामान वारंटी के तहत कवर है?', es: '¿Podría decirme si este artículo electrónico está cubierto por la garantía?' },
          { en: 'I was wondering whether I can exchange this sweater without a paper receipt.', hi: 'मैं सोच रहा था कि क्या मैं बिना कागजी रसीद के इस स्वेटर को बदल सकता हूँ।', es: 'Me preguntaba si puedo cambiar este suéter sin un recibo en papel.' }
        ]
      },
      {
        title: 'Wh- Indirect Questions: "Do you know where / when / how ...?"',
        structure: 'Introductory Phrase + Question Word + Subject + Verb',
        rule: 'Drop "do/does/did" auxiliaries and conjugate the main verb according to the subject.',
        examples: [
          { en: 'Do you know when the replacement order will arrive?', hi: 'क्या आप जानते हैं कि प्रतिस्थापन आदेश कब आएगा?', es: '¿Sabe cuándo llegará el pedido de reemplazo?' },
          { en: 'Could you explain how I can track my returned parcel online?', hi: 'क्या आप समझा सकते हैं कि मैं अपने लौटाए गए पार्सल को ऑनलाइन कैसे ट्रैक कर सकता हूँ?', es: '¿Podría explicarme cómo puedo rastrear mi paquete devuelto en línea?' }
        ]
      },
      {
        title: 'Formal Politeness: "I would appreciate it if you could + Base Verb"',
        structure: 'I would appreciate it if you could + Base Verb',
        rule: 'Use this high-courtesy structure when making written inquiries or firm consumer requests.',
        examples: [
          { en: 'I would appreciate it if you could process my refund as soon as possible.', hi: 'यदि आप जल्द से जल्द मेरे रिफंड की प्रक्रिया कर सकें तो मैं आभारी रहूँगा।', es: 'Le agradecería que procesara mi reembolso lo antes posible.' },
          { en: 'I would appreciate it if you could escalate this case to your supervisor.', hi: 'यदि आप इस मामले को अपने पर्यवेक्षक को अग्रेषित कर सकें तो मैं आभारी रहूँगा।', es: 'Le agradecería si pudiera escalar este caso a su supervisor.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'Could you tell me where is the customer service desk?',
      cor: 'Could you tell me where the customer service desk is?',
      exp: 'In indirect questions, keep normal statement word order (Subject + Verb: "the desk is").',
      hi: 'Indirect questions में Subject पहले और Verb बाद में आता है ("where the desk is")।',
      es: 'En preguntas indirectas usa orden afirmativo: sujeto + verbo ("where the desk is").'
    },
    {
      inc: 'Do you know if does this shop accept returns?',
      cor: 'Do you know if this shop accepts returns?',
      exp: 'Do not use auxiliary "does" in the embedded clause of an indirect question.',
      hi: 'Embedded clause में auxiliary "does" न लगाएं; verb को सीधे conjugate करें ("accepts")।',
      es: 'No uses el auxiliar "does" en la cláusula indirecta; conjuga el verbo ("accepts").'
    },
    {
      inc: 'I would appreciate if you help me.',
      cor: 'I would appreciate it if you could help me.',
      exp: 'The formula requires dummy pronoun "it" and modal "could": "I would appreciate it if you could...".',
      hi: 'सही सूत्र "I would appreciate it if you could..." है।',
      es: 'La estructura correcta es "I would appreciate it if you could...".'
    },
    {
      inc: 'The item is under the warranty.',
      cor: 'The item is under warranty.',
      exp: 'The idiom is "under warranty" without the article "the".',
      hi: 'सही मुहावरा "under warranty" है।',
      es: 'La expresión fija es "under warranty" sin "the".'
    },
    {
      inc: 'I want a refund because the product has a defected.',
      cor: 'I want a refund because the product has a defect.',
      exp: 'Use the noun "defect" (or adjective "is defective").',
      hi: 'संज्ञा के रूप में "defect" या विशेषण के रूप में "defective" का प्रयोग करें।',
      es: 'Usa el sustantivo "defect" o el adjetivo "defective".'
    }
  ],
  dialogues: [
    {
      title: 'Requesting a Retail Exchange in Store',
      context: 'Victor visits customer support to exchange a damaged coffee maker.',
      charA: { name: 'Victor', av: '👨', role: 'Customer' },
      charB: { name: 'Grace', av: '👩‍💼', role: 'Customer Service Agent' },
      turns: [
        { spk: 'Victor', text: 'Good afternoon. Could you tell me if I can exchange this coffee maker? I bought it yesterday, but the water reservoir is cracked.', hi: 'शुभ दोपहर। क्या आप मुझे बता सकते हैं कि क्या मैं इस कॉफी मेकर को बदल सकता हूँ? मैंने इसे कल खरीदा था, लेकिन पानी का पात्र टूटा हुआ है।', es: 'Buenas tardes. ¿Podría decirme si puedo cambiar esta cafetera? La compré ayer, pero el depósito de agua está roto.' },
        { spk: 'Grace', text: 'I am very sorry for the inconvenience! Do you have your sales receipt or order number with you?', hi: 'असुविधा के लिए मुझे बहुत खेद है! क्या आपके पास आपकी बिक्री रसीद या ऑर्डर नंबर है?', es: '¡Lamento mucho las molestias! ¿Tiene consigo su recibo de compra o número de pedido?' },
        { spk: 'Victor', text: 'Yes, here is the printed receipt. I was wondering whether you have the same model in stock.', hi: 'हाँ, यह रही मुद्रित रसीद। मैं सोच रहा था कि क्या आपके पास स्टॉक में वही मॉडल उपलब्ध है।', es: 'Sí, aquí tiene el recibo impreso. Me preguntaba si tienen el mismo modelo en stock.' },
        { spk: 'Grace', text: 'We do! I will process the exchange immediately so you can take a brand-new, tested unit home.', hi: 'हमारे पास है! मैं तुरंत एक्सचेंज की प्रक्रिया पूरी करूंगी ताकि आप एक बिल्कुल नई, जांची हुई इकाई घर ले जा सकें।', es: '¡Sí lo tenemos! Procesaré el cambio de inmediato para que pueda llevarse una unidad nueva y probada.' }
      ]
    },
    {
      title: 'Inquiring About an Online Refund Policy',
      context: 'Liam contacts online support regarding a delayed package refund.',
      charA: { name: 'Liam', av: '👨‍💼', role: 'Online Shopper' },
      charB: { name: 'Priya', av: '👩‍💼', role: 'Support Specialist' },
      turns: [
        { spk: 'Liam', text: 'Hello Priya. I would appreciate it if you could check the status of my return parcel.', hi: 'नमस्ते प्रिया। यदि आप मेरे रिटर्न पार्सल की स्थिति की जांच कर सकें तो मैं आभारी रहूँगा।', es: 'Hola Priya. Le agradecería si pudiera verificar el estado de mi paquete de devolución.' },
        { spk: 'Priya', text: 'Certainly, Liam. Could you provide your tracking number so I can locate your record?', hi: 'निश्चित रूप से, लियाम। क्या आप अपना ट्रैकिंग नंबर प्रदान कर सकते हैं ताकि मैं आपका रिकॉर्ड ढूंढ सकूं?', es: 'Con gusto, Liam. ¿Podría proporcionar su número de seguimiento para que pueda localizar su registro?' },
        { spk: 'Liam', text: 'The tracking number is TRK-8821. Could you tell me when the full refund will appear in my bank account?', hi: 'ट्रैकिंग नंबर TRK-8821 है। क्या आप मुझे बता सकते हैं कि मेरे बैंक खाते में पूरा रिफंड कब दिखाई देगा?', es: 'El número de seguimiento es TRK-8821. ¿Podría decirme cuándo aparecerá el reembolso completo en mi cuenta?' },
        { spk: 'Priya', text: 'Our warehouse inspected the returned item today. The funds will be credited to your card within three business days.', hi: 'हमारे गोदाम ने आज लौटाए गए सामान का निरीक्षण किया। तीन व्यावसायिक दिनों के भीतर धनराशि आपके कार्ड में जमा कर दी जाएगी।', es: 'Nuestro almacén inspeccionó el artículo hoy. Los fondos se acreditarán en su tarjeta en tres días hábiles.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_11_164_p01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly forms an indirect question?',
      options: [
        'Could you tell me where the customer service counter is?',
        'Could you tell me where is the customer service counter?',
        'Could you tell me where does the customer service counter is?',
        'Could you to tell me where the customer service counter is?'
      ],
      correctAnswer: 'Could you tell me where the customer service counter is?',
      explanation: 'Indirect question retains subject-verb statement order: "where the counter is".'
    },
    {
      id: 'ex_a2_11_164_p02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "I would appreciate _____ if you could email me the receipt."',
      correctAnswer: 'it',
      explanation: 'The polite formula is "I would appreciate it if you could...".'
    },
    {
      id: 'ex_a2_11_164_p03',
      type: 'word_ordering',
      prompt: 'Arrange into an indirect question:',
      words: ['Could', 'you', 'tell', 'me', 'if', 'this', 'item', 'is', 'under', 'warranty?'],
      correctAnswer: 'Could you tell me if this item is under warranty?',
      explanation: 'Could you tell me if + Subject + Verb + Prepositional phrase.'
    },
    {
      id: 'ex_a2_11_164_p04',
      type: 'translation',
      prompt: 'Translate into English: "मैं सोच रहा था कि क्या मैं पूरा रिफंड प्राप्त कर सकता हूँ।"',
      targetSentence: 'I was wondering whether I can get a full refund.',
      correctAnswer: 'I was wondering whether I can get a full refund.',
      explanation: '"I was wondering whether..." is a polite inquiry formula.'
    },
    {
      id: 'ex_a2_11_164_p05',
      type: 'error_correction',
      prompt: 'Correct the word order in this indirect question:',
      errorSentence: 'Do you know when does the store close tonight?',
      correctAnswer: 'Do you know when the store closes tonight?',
      explanation: 'Remove auxiliary "does" and conjugate: "when the store closes".'
    },
    {
      id: 'ex_a2_11_164_p06',
      type: 'multiple_choice',
      prompt: 'What document is universally required as "proof of purchase"?',
      options: [
        'An original sales receipt or digital invoice',
        'A family photograph',
        'A handwritten note from a neighbor',
        'An expired passport'
      ],
      correctAnswer: 'An original sales receipt or digital invoice',
      explanation: 'A sales receipt verifies the date, price, and item purchased.'
    },
    {
      id: 'ex_a2_11_164_p07',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "The headphones stopped playing sound because of a manufacturing _____."',
      correctAnswer: 'defect',
      explanation: '"defect" refers to a product flaw.'
    },
    {
      id: 'ex_a2_11_164_p08',
      type: 'word_ordering',
      prompt: 'Order the words to create a polite customer request:',
      words: ['I', 'would', 'appreciate', 'it', 'if', 'you', 'could', 'help', 'me.'],
      correctAnswer: 'I would appreciate it if you could help me.',
      explanation: 'I would appreciate it if you could + Base Verb + Object.'
    },
    {
      id: 'ex_a2_11_164_p09',
      type: 'translation',
      prompt: 'Translate into English: "क्या आप मुझे बता सकते हैं कि रिफंड में कितना समय लगेगा?"',
      targetSentence: 'Could you tell me how long the refund will take?',
      correctAnswer: 'Could you tell me how long the refund will take?',
      explanation: 'Indirect question word order: "how long the refund will take".'
    },
    {
      id: 'ex_a2_11_164_p10',
      type: 'error_correction',
      prompt: 'Fix the prepositional phrase error:',
      errorSentence: 'My smartphone is still under the warranty for six months.',
      correctAnswer: 'My smartphone is still under warranty for six months.',
      explanation: 'Remove "the": the standard phrase is "under warranty".'
    },
    {
      id: 'ex_a2_11_164_p11',
      type: 'multiple_choice',
      prompt: 'What does "escalate a complaint" mean?',
      options: [
        'Pass the issue to a senior supervisor or manager for higher-level resolution',
        'Delete the complaint from the computer system',
        'Refuse to speak with the customer entirely',
        'Ask the customer to pay double'
      ],
      correctAnswer: 'Pass the issue to a senior supervisor or manager for higher-level resolution',
      explanation: '"Escalate" means transferring a matter to higher authorities.'
    },
    {
      id: 'ex_a2_11_164_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Items returned within the thirty-day return _____ are eligible for full refunds."',
      correctAnswer: 'window',
      explanation: 'Term: "return window".'
    },
    {
      id: 'ex_a2_11_164_p13',
      type: 'word_ordering',
      prompt: 'Arrange into an inquiry sentence:',
      words: ['I', 'am', 'calling', 'to', 'inquire', 'about', 'my', 'order', 'status.'],
      correctAnswer: 'I am calling to inquire about my order status.',
      explanation: 'Subject + am calling to inquire about + Object.'
    },
    {
      id: 'ex_a2_11_164_p14',
      type: 'translation',
      prompt: 'Translate into English: "मैं इस दोषपूर्ण उत्पाद के लिए पूर्ण धनवापसी का अनुरोध करना चाहता हूँ।"',
      targetSentence: 'I would like to request a full refund for this defective product.',
      correctAnswer: 'I would like to request a full refund for this defective product.',
      explanation: '"request a full refund" translates पूर्ण धनवापसी का अनुरोध करना.'
    },
    {
      id: 'ex_a2_11_164_p15',
      type: 'multiple_choice',
      prompt: 'Choose the most courteous customer service response: "I apologize for the delay. _____"',
      options: [
        'I will look into your order immediately and issue a replacement voucher.',
        'Why did you buy it if you did not want it?',
        'Do you know what is patience?',
        'According to me, wait longer.'
      ],
      correctAnswer: 'I will look into your order immediately and issue a replacement voucher.',
      explanation: 'Professional and courteous problem resolution.'
    }
  ],
  review: [
    {
      id: 'ex_a2_11_164_r01',
      type: 'multiple_choice',
      prompt: 'Which indirect question is formatted correctly?',
      options: [
        'Do you know if this jacket is available in blue?',
        'Do you know is this jacket available in blue?',
        'Do you know if is this jacket available in blue?',
        'Do you know does this jacket available in blue?'
      ],
      correctAnswer: 'Do you know if this jacket is available in blue?',
      explanation: 'Standard "if + Subject + Verb" structure.'
    },
    {
      id: 'ex_a2_11_164_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Could you please tell me _____ the manager will be available?"',
      correctAnswer: 'when',
      explanation: '"when" introduces the time inquiry.'
    },
    {
      id: 'ex_a2_11_164_r03',
      type: 'error_correction',
      prompt: 'Correct the error:',
      errorSentence: 'I was wondering whether can you check my account.',
      correctAnswer: 'I was wondering whether you can check my account.',
      explanation: 'Do not invert modal and subject in indirect clauses: "whether you can check".'
    },
    {
      id: 'ex_a2_11_164_r04',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      words: ['This', 'product', 'is', 'covered', 'by', 'a', 'two-year', 'warranty.'],
      correctAnswer: 'This product is covered by a two-year warranty.',
      explanation: 'Subject + is covered by + Noun phrase.'
    },
    {
      id: 'ex_a2_11_164_r05',
      type: 'translation',
      prompt: 'Translate into English: "यदि आप मेरे खाते की जांच कर सकें तो मैं आभारी रहूँगा।"',
      targetSentence: 'I would appreciate it if you could check my account.',
      correctAnswer: 'I would appreciate it if you could check my account.',
      explanation: 'Accurate translation of the polite formula.'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_11_164_a01',
      type: 'multiple_choice',
      prompt: 'Which response combines indirect question politeness and assertive consumer communication?\nA: "How can I help you today?"\nB: "____"',
      options: [
        'Good morning. Could you tell me if I can exchange this defective tablet? I have my receipt and the device is still under warranty.',
        'Give me money now because tablet is defected.',
        'Do you know why did you break my tablet?',
        'According to me, you give refund.'
      ],
      correctAnswer: 'Good morning. Could you tell me if I can exchange this defective tablet? I have my receipt and the device is still under warranty.',
      explanation: 'Uses indirect questions, retail terms, and formal courtesy.'
    },
    {
      id: 'ex_a2_11_164_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "I would appreciate it if you _____ process my cancellation request today."',
      correctAnswer: 'could',
      explanation: '"I would appreciate it if you could...".'
    },
    {
      id: 'ex_a2_11_164_a03',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nClerk: "Do you have the original packaging for the shoes?"\nCustomer: "_____"',
      options: [
        'Yes, I have the original box and receipt with me.',
        'No, but give me full refund without receipt.',
        'Where is customer service desk located is?',
        'I am suppose to throw it away.'
      ],
      correctAnswer: 'Yes, I have the original box and receipt with me.',
      explanation: 'Accurate and logical retail response.'
    },
    {
      id: 'ex_a2_11_164_a04',
      type: 'speaking',
      prompt: 'Read aloud with clear, courteous, and assertive intonation: "Good afternoon. I would appreciate it if you could assist me with an exchange. Could you please check whether you have this model in a larger size?"',
      targetSentence: 'Good afternoon. I would appreciate it if you could assist me with an exchange. Could you please check whether you have this model in a larger size?',
      correctAnswer: 'Good afternoon. I would appreciate it if you could assist me with an exchange. Could you please check whether you have this model in a larger size?',
      explanation: 'Deliver with confident enunciation, natural pauses after polite markers, and clear pronunciation of "appreciate" and "whether".'
    },
    {
      id: 'ex_a2_11_164_a05',
      type: 'translation',
      prompt: 'Translate into English: "क्या आप मुझे बता सकते हैं कि रिटर्न पॉलिसी कैसे काम करती है?"',
      targetSentence: 'Could you tell me how the return policy works?',
      correctAnswer: 'Could you tell me how the return policy works?',
      explanation: 'Accurate indirect question structure without auxiliary inversion.'
    }
  ]
};

// =========================================================================
// LESSON 165: Unit 11 Capstone, Comprehensive A2 Culmination & Mastery Gateway
// =========================================================================
export const LESSON_165_CONFIG: LessonConfigA2 = {
  num: 165,
  title: 'Unit 11 Capstone, Comprehensive A2 Culmination & Mastery Gateway',
  icon: '🏆',
  estMin: 35,
  objTitle: 'Grand Culmination: Complete CEFR A2 Communicative Fluency & Synthesis',
  objDesc: 'The ultimate integrative assessment and communicative synthesis across all 15 lessons of Unit 11 (Lessons 151–165): workplace collaboration, constructive feedback, clarifying misunderstandings, comparative recommendations, event planning, polite invitations and excuses, passive news reporting, personal financial budgeting, daily health and wellness advice, travel misadventures with Past Perfect, sustainability and environmental conditionals, virtual meeting etiquette, and indirect customer service inquiries.',
  objHi: 'यूनिट 11 का भव्य समापन और A2 महारत गेटवे: कार्यस्थल सहयोग, प्रतिक्रिया, तुलनात्मक सिफारिशें, योजनाएं, निमंत्रण, समाचार, बजट, स्वास्थ्य, यात्रा कथाएं, पर्यावरण, डिजिटल शिष्टाचार और ग्राहक सेवा पूछताछ का समग्र मूल्यांकन।',
  objEs: 'Culminación magistral de la Unidad 11 y umbral de maestría A2: síntesis de las 15 lecciones en contextos laborales, sociales, narrativos, ambientales y de atención al cliente.',
  canDo: [
    'I can fluidly navigate professional and social English across all CEFR A2 communication domains.',
    'I can integrate Past Perfect narration, conditional reasoning, expectation modals, and indirect inquiries.',
    'I can negotiate workplace roles, resolve misunderstandings, and provide tactful feedback with confidence.',
    'I can evaluate recommendations, coordinate complex events, and manage customer service interactions autonomously.'
  ],
  canDoHi: [
    'मैं सभी CEFR A2 संचार क्षेत्रों में पेशेवर और सामाजिक अंग्रेजी का धाराप्रवाह उपयोग कर सकता हूँ।',
    'मैं पास्ट परफेक्ट कथाओं, कंडीशनल सोच, अपेक्षा मोडाल्स और अप्रत्यक्ष पूछताछ को एकीकृत कर सकता हूँ।',
    'मैं कार्यस्थल की भूमिकाओं पर बातचीत कर सकता हूँ, गलतफहमियों को सुलझा सकता हूँ और विनम्र प्रतिक्रिया दे सकता हूँ।',
    'मैं सिफारिशों का मूल्यांकन कर सकता हूँ, कार्यक्रमों का समन्वय कर सकता हूँ और ग्राहक सेवा बातचीत का स्वतंत्र रूप से प्रबंधन कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo desenvolverme fluidamente en inglés profesional y social en todos los dominios de A2.',
    'Puedo integrar narración en Past Perfect, condicionales, modales de expectativa y preguntas indirectas.',
    'Puedo negociar roles laborales, resolver malentendidos y dar feedback constructivo.',
    'Puedo evaluar recomendaciones, coordinar eventos y gestionar atención al cliente de forma autónoma.'
  ],
  vocab: [
    { w: 'culmination', p: '/ˌkʌlmɪˈneɪʃn/', m: 'the highest or climactic point of something, especially attained after a long period', hi: 'चरमोत्कर्ष / पूर्णता / अंतिम उपलब्धि', es: 'culminación / punto cumbre', fr: 'culmination / aboutissement', de: 'Höhepunkt / Krönung', pt: 'culminação / ápice', zh: '顶点 / 最终成果', ar: 'ذروة / تتويج', ja: '集大成 / 最高潮', ru: 'кульминация / завершение', ex: 'Lesson 165 represents the proud culmination of your Unit 11 English mastery.', exHi: 'पाठ 165 आपकी यूनिट 11 अंग्रेजी दक्षता की गर्वपूर्ण पूर्णता का प्रतिनिधित्व करता है।', exEs: 'La lección 165 representa la orgullosa culminación de tu dominio del inglés.', ic: '🏆' },
    { w: 'gateway', p: '/ˈɡeɪtweɪ/', m: 'an entrance or a means of access to something greater', hi: 'प्रवेश द्वार / गेटवे', es: 'puerta de entrada / umbral', fr: 'passerelle / porte d\'accès', de: 'Tor / Zugang', pt: 'porta de entrada / portal', zh: '门户 / 关口', ar: 'بوابة عبور', ja: '玄関口 / 登竜門', ru: 'ворота / переходный рубеж', ex: 'Passing this assessment opens the gateway to confident independent communication.', exHi: 'इस मूल्यांकन को उत्तीर्ण करने से आत्मविश्वासी स्वतंत्र संचार का प्रवेश द्वार खुलता है।', exEs: 'Aprobar esta evaluación abre la puerta de entrada a una comunicación independiente y segura.', ic: '🚪' },
    { w: 'autonomy', p: '/ɔːˈtɒnəmi/', m: 'the capacity of a rational individual to make an informed, un-coerced decision', hi: 'स्वायत्तता / आत्मनिर्भरता', es: 'autonomía / independencia', fr: 'autonomie', de: 'Autonomie / Selbstständigkeit', pt: 'autonomia', zh: '自主性 / 独立性', ar: 'استقلالية', ja: '自立性 / 自律', ru: 'автономия / самостоятельность', ex: 'Achieving language autonomy allows you to travel and work with genuine ease.', exHi: 'भाषा की स्वायत्तता प्राप्त करने से आप वास्तविक सहजता से यात्रा और काम कर सकते हैं।', exEs: 'Lograr autonomía lingüística te permite viajar y trabajar con total tranquilidad.', ic: '🦅' },
    { w: 'mastery', p: '/ˈmɑːstəri/', m: 'comprehensive knowledge or skill in a subject or accomplishment', hi: 'महारत / निपुणता', es: 'maestría / dominio completo', fr: 'maîtrise', de: 'Beherrschung / Meisterschaft', pt: 'domínio / mestria', zh: '精通 / 掌握', ar: 'إتقان تام', ja: '熟達 / マスター', ru: 'мастерство / свободное владение', ex: 'Consistent practice transforms foundational grammar into communicative mastery.', exHi: 'लगातार अभ्यास बुनियादी व्याकरण को संवादात्मक महारत में बदल देता है।', exEs: 'La práctica constante transforma la gramática básica en maestría comunicativa.', ic: '👑' },
    { w: 'synthesize', p: '/ˈsɪnθəsaɪz/', m: 'combine a range of different components to form a coherent whole', hi: 'संश्लेषण करना / संयोजित करना', es: 'sintetizar / integrar', fr: 'synthétiser', de: 'synthetisieren / zusammenführen', pt: 'sintetizar', zh: '综合 / 合成', ar: 'يجمع / يركب', ja: '統合する / 総合する', ru: 'синтезировать / объединять', ex: 'This capstone enables you to synthesize grammar rules, idioms, and vocabulary effortlessly.', exHi: 'यह कैपस्टोन आपको व्याकरण के नियमों, मुहावरों और शब्दावली को सहजता से संश्लेषित करने में सक्षम बनाता है।', exEs: 'Este hito te permite sintetizar reglas gramaticales, modismos y vocabulario sin esfuerzo.', ic: '🧩' },
    { w: 'competence', p: '/ˈkɒmpɪtəns/', m: 'the ability to do something successfully or efficiently', hi: 'क्षमता / योग्यता', es: 'competencia / capacidad', fr: 'compétence', de: 'Kompetenz / Befähigung', pt: 'competência', zh: '能力 / 胜任力', ar: 'كفاءة / جدارة', ja: '能力 / 適性', ru: 'компетентность / способность', ex: 'Demonstrating conversational competence in diverse situations is our key objective.', exHi: 'विभिन्न स्थितियों में संवादात्मक क्षमता का प्रदर्शन करना हमारा प्रमुख उद्देश्य है।', exEs: 'Demostrar competencia conversacional en diversas situaciones es nuestro objetivo clave.', ic: '🎖️' },
    { w: 'diplomatic', p: '/ˌdɪpləˈmætɪk/', m: 'having or showing an ability to deal with people in a sensitive and tactful way', hi: 'राजनयिक / कूटनीतिक / व्यवहार कुशल', es: 'diplomático / tacto', fr: 'diplomatique', de: 'diplomatisch / taktvoll', pt: 'diplomático / cortês', zh: '圆滑的 / 有策略的', ar: 'دبلوماسي / لبق', ja: '如才ない / 外交的な', ru: 'дипломатичный / тактичный', ex: 'Use diplomatic phrasing when declining social invitations or giving constructive feedback.', exHi: 'सामाजिक आमंत्रणों को अस्वीकार करते समय या रचनात्मक प्रतिक्रिया देते समय विनम्र भाषा का प्रयोग करें।', exEs: 'Usa frases diplomáticas al rechazar invitaciones sociales o dar feedback constructivo.', ic: '🕊️' },
    { w: 'articulate', p: '/ɑːˈtɪkjuleɪt/', m: 'having or showing the ability to speak fluently and coherently', hi: 'स्पष्टवादी / सुवक्ता', es: 'articulado / elocuente', fr: 'éloquent / articulé', de: 'wortgewandt / artikuliert', pt: 'articulado / eloquente', zh: '善于表达的', ar: 'فصيح / قادر على التعبير بوضوح', ja: '歯切れの良い / 明瞭に話す', ru: 'членораздельный / красноречивый', ex: 'She delivered an articulate summary of the department\'s quarterly results.', exHi: 'उसने विभाग के त्रैमासिक परिणामों का एक स्पष्ट और प्रभावशाली सारांश प्रस्तुत किया।', exEs: 'Ella presentó un resumen elocuente de los resultados trimestrales del departamento.', ic: '🎙️' },
    { w: 'distinction', p: '/dɪˈstɪŋkʃn/', m: 'a difference or contrast between similar things or people', hi: 'अंतर / विशिष्टता', es: 'distinción / diferencia', fr: 'distinction / nuance', de: 'Unterscheidung / Nuance', pt: 'distinção / diferença', zh: '区别 / 差异', ar: 'تمييز / فرق', ja: '区別 / 特徴', ru: 'различие / нюанс', ex: 'Understand the subtle distinction between "ought to" and "had better".', exHi: '"ought to" और "had better" के बीच के सूक्ष्म अंतर को समझें।', exEs: 'Comprende la sutil distinción entre "ought to" y "had better".', ic: '🔍' },
    { w: 'versatile', p: '/ˈvɜːsətaɪl/', m: 'able to adapt or be adapted to many different functions or activities', hi: 'बहुमुखी / बहुगुणी', es: 'versátil / polivalente', fr: 'polyvalent / versatile', de: 'vielseitig', pt: 'versátil', zh: '多才多艺的 / 通用的', ar: 'متعدد الاستخدامات / مرن', ja: '多才な / 融通の利く', ru: 'универсальный / разносторонний', ex: 'English modal verbs are versatile tools for expressing permission, obligation, and advice.', exHi: 'अंग्रेजी मोडल क्रियाएं अनुमति, दायित्व और सलाह व्यक्त करने के लिए बहुमुखी उपकरण हैं।', exEs: 'Los verbos modales en inglés son herramientas versátiles para expresar permiso y obligación.', ic: '🛠️' },
    { w: 'perspective', p: '/pəˈspektɪv/', m: 'a particular attitude toward or way of regarding something; a point of view', hi: 'दृष्टिकोण / नजरिया', es: 'perspectiva / punto de vista', fr: 'perspective / point de vue', de: 'Perspektive / Blickwinkel', pt: 'perspectiva / ponto de vista', zh: '视角 / 观点', ar: 'وجهة نظر', ja: '視点 / 見解', ru: 'перспектива / точка зрения', ex: 'Sharing different perspectives in team meetings leads to innovative solutions.', exHi: 'टीम बैठकों में विभिन्न दृष्टिकोण साझा करने से अभिनव समाधान निकलते हैं।', exEs: 'Compartir diferentes perspectivas en las reuniones conduce a soluciones innovadoras.', ic: '🔭' },
    { w: 'clarity', p: '/ˈklærəti/', m: 'the quality of being coherent, intelligible, and easy to understand', hi: 'स्पष्टता', es: 'claridad / nitidez', fr: 'clarté', de: 'Klarheit / Deutlichkeit', pt: 'clareza', zh: '清晰度', ar: 'وضوح', ja: '明瞭さ / 分かりやすさ', ru: 'ясность / четкость', ex: 'Structure your questions with clarity to ensure smooth customer service exchanges.', exHi: 'सुचारू ग्राहक सेवा बातचीत सुनिश्चित करने के लिए अपने प्रश्नों को स्पष्टता से संरचित करें।', exEs: 'Estructura tus preguntas con claridad para garantizar una atención al cliente fluida.', ic: '💡' },
    { w: 'commitment', p: '/kəˈmɪtmənt/', m: 'the state or quality of being dedicated to a cause, activity, or promise', hi: 'प्रतिबद्धता / लगन', es: 'compromiso / dedicación', fr: 'engagement / dévouement', de: 'Hingabe / Verpflichtung', pt: 'compromisso / empenho', zh: '奉献 / 坚定承诺', ar: 'التزام / تفانٍ', ja: '献身 / 確約', ru: 'приверженность / обязательство', ex: 'Your learning commitment over 165 lessons is truly admirable.', exHi: '165 पाठों में आपकी सीखने की प्रतिबद्धता वास्तव में सराहनीय है।', exEs: 'Tu dedicación al aprendizaje a lo largo de 165 lecciones es admirable.', ic: '🌟' },
    { w: 'comprehensive', p: '/ˌkɒmprɪˈhensɪv/', m: 'including or dealing with all or nearly all elements or aspects of something', hi: 'व्यापक / समग्र', es: 'integral / exhaustivo', fr: 'complet / exhaustif', de: 'umfassend / vollständig', pt: 'abrangente / completo', zh: '全面的 / 综合的', ar: 'شامل / متكامل', ja: '包括的な / 総合的な', ru: 'всеобъемлющий / комплексный', ex: 'This comprehensive capstone assesses every key competency of Unit 11.', exHi: 'यह व्यापक कैपस्टोन यूनिट 11 की हर प्रमुख क्षमता का आकलन करता है।', exEs: 'Este hito integral evalúa cada competencia clave de la Unidad 11.', ic: '📚' },
    { w: 'celebration', p: '/ˌselɪˈbreɪʃn/', m: 'the action of marking one\'s pleasure at an important event or achievement', hi: 'उत्सव / जश्न', es: 'celebración / festejo', fr: 'célébration / fête', de: 'Feier / Zelebrierung', pt: 'celebração / comemoração', zh: '庆祝 / 盛典', ar: 'احتفال', ja: '祝賀 / 記念イベント', ru: 'празднование / торжество', ex: 'Completing Unit 11 deserves a proud personal celebration!', exHi: 'यूनिट 11 को पूरा करना एक गर्वपूर्ण व्यक्तिगत उत्सव का हकदार है!', exEs: '¡Completar la Unidad 11 merece una orgullosa celebración personal!', ic: '🎉' },
    { w: 'flourish', p: '/ˈflʌrɪʃ/', m: 'grow or develop in a healthy or vigorous way, especially as the result of a favorable environment', hi: 'फलना-फूलना / समृद्ध होना', es: 'prosperar / florecer', fr: 's\'épanouir / prospérer', de: 'gedeihen / aufblühen', pt: 'prosperar / florescer', zh: '繁荣 / 蓬勃发展', ar: 'يزدهر / ينمو بنجاح', ja: '繁栄する / 成長する', ru: 'процветать / преуспевать', ex: 'Your conversational English will flourish as you continue using these phrases in daily life.', exHi: 'जैसे-जैसे आप दैनिक जीवन में इन वाक्यांशों का उपयोग करना जारी रखेंगे, आपकी बातचीत की अंग्रेजी समृद्ध होगी।', exEs: 'Tu inglés conversacional florecerá a medida que sigas usando estas frases.', ic: '🌺' },
    { w: 'accomplished', p: '/əˈkʌmplɪʃt/', m: 'highly trained or skilled in a particular activity', hi: 'कुशल / निपुण / सफल', es: 'consumado / realizado', fr: 'accompli / qualifié', de: 'erfolgreich / versiert', pt: 'realizado / bem-sucedido', zh: '有造诣的 / 技艺高超的', ar: 'بارع / منجز', ja: '熟練した / 優れた', ru: 'квалифицированный / опытный', ex: 'You are now an accomplished A2 English communicator.', exHi: 'अब आप एक कुशल A2 अंग्रेजी संचारक हैं।', exEs: 'Ahora eres un comunicador consumado de inglés en nivel A2.', ic: '🎓' },
    { w: 'credential', p: '/krəˈdenʃl/', m: 'a qualification, achievement, or aspect of a person\'s background indicating suitability', hi: 'प्रमाणपत्र / योग्यता', es: 'credencial / certificado de logro', fr: 'attestation / certificat', de: 'Qualifikation / Nachweis', pt: 'credencial / certificado', zh: '资历 / 资格证明', ar: 'شهادة كفاءة / اعتماد', ja: '資格 / 実績', ru: 'квалификация / удостоверение', ex: 'Add your English learning milestones to your professional portfolio and credentials.', exHi: 'अपने अंग्रेजी सीखने के पड़ावों को अपने पेशेवर पोर्टफोलियो और साख में जोड़ें।', exEs: 'Agrega tus logros de aprendizaje de inglés a tu portafolio profesional.', ic: '📜' },
    { w: 'triumph', p: '/ˈtraɪʌmf/', m: 'a great victory or achievement', hi: 'महान विजय / भारी सफलता', es: 'triunfo / gran éxito', fr: 'triomphe / grand succès', de: 'Triumph / großer Erfolg', pt: 'triunfo / grande vitória', zh: '凯旋 / 巨大成功', ar: 'انتصار / فوز ساحق', ja: '大勝利 / 偉業', ru: 'триумф / выдающийся успех', ex: 'Mastering 165 structured lessons is an educational triumph!', exHi: '165 संरचित पाठों में महारत हासिल करना एक शैक्षिक विजय है!', exEs: '¡Dominar 165 lecciones estructuradas es un triunfo educativo!', ic: '🏆' },
    { w: 'forward', p: '/ˈfɔːwəd/', m: 'onward so as to make progress toward a successful future', hi: 'आगे की ओर / अग्रसर', es: 'hacia adelante / en progreso', fr: 'en avant / vers l\'avenir', de: 'vorwärts / weiter voran', pt: 'em frente / para a frente', zh: '向前迈进', ar: 'إلى الأمام / نحو المستقبل', ja: '前へ / 未来に向かって', ru: 'вперед / к будущему', ex: 'Carry these communication skills forward into every new opportunity.', exHi: 'इन संचार कौशलों को हर नए अवसर में आगे ले जाएं।', exEs: 'Lleva estas habilidades de comunicación hacia adelante en cada nueva oportunidad.', ic: '🚀' }
  ],
  chunks: [
    { phrase: 'all things considered', meaning: 'taking every relevant factor into balanced account', hi: 'सब बातों को ध्यान में रखते हुए', es: 'considerándolo todo', fr: 'tout bien considéré', de: 'alles in allem', pt: 'considerando tudo', zh: '综合考虑', ar: 'مع أخذ كل الأمور في الحسبان', ja: '総合的に判断して', ru: 'принимая все во внимание', note: 'Summary transition.', ic: '⚖️' },
    { phrase: 'by the time', meaning: 'before or at the exact instant a past event occurred', hi: 'जब तक... तब तक...', es: 'para cuando / en el momento en que', fr: 'au moment où', de: 'bis zu dem Zeitpunkt, als', pt: 'no momento em que', zh: '到...的时候', ar: 'بحلول الوقت الذي', ja: '〜する時までに', ru: 'к тому времени как', note: 'Past Perfect trigger.', ic: '⏰' },
    { phrase: 'Could you tell me if...?', meaning: 'standard indirect question framework', hi: 'क्या आप मुझे बता सकते हैं कि क्या...?', es: '¿Podría decirme si...?', fr: 'Pourriez-vous me dire si... ?', de: 'Könnten Sie mir sagen, ob...?', pt: 'Poderia me dizer se...?', zh: '请问您能否告诉我是否...？', ar: 'هل يمكنك إخباري إذا كان...؟', ja: '〜かどうか教えていただけますか？', ru: 'не могли бы вы сказать, ...?', note: 'Formal inquiry pattern.', ic: '❓' },
    { phrase: 'be supposed to', meaning: 'expected or obligated according to schedule or rules', hi: 'अपेक्षित होना / नियम या योजना के अनुसार होना', es: 'suponerse que / deber', fr: 'être censé faire', de: 'sollen / vorgesehen sein', pt: 'supõe-se que / ter que', zh: '应该 / 按计划', ar: 'من المفترض أن', ja: '〜することになっている', ru: 'предполагается, что', note: 'Workplace expectation.', ic: '📋' },
    { phrase: 'I would appreciate it if you could...', meaning: 'courteous formal request structure', hi: 'यदि आप ... कर सकें तो मैं आभारी रहूँगा', es: 'Le agradecería si pudiera...', fr: 'Je vous saurais gré de...', de: 'Ich wäre Ihnen dankbar, wenn Sie...', pt: 'Eu agradeceria se você pudesse...', zh: '如果您能...我将非常感激', ar: 'سأكون ممتناً لو تمكنتم من...', ja: '〜していただけますと幸いです', ru: 'я был бы признателен, если бы вы могли...', note: 'High-politeness customer/workplace formula.', ic: '🙏' },
    { phrase: 'in the long run', meaning: 'over an extended future timeframe; ultimately', hi: 'लंबे समय में / अंततः', es: 'a largo plazo', fr: 'à long terme', de: 'auf lange Sicht', pt: 'a longo prazo', zh: '长远来看', ar: 'على المدى البعيد', ja: '長期的に見れば', ru: 'в долгосрочной перспективе', note: 'Future perspective connector.', ic: '🔭' },
    { phrase: 'turn out to be', meaning: 'prove or conclude in the end to be', hi: 'साबित होना / निकलना', es: 'resultar ser', fr: 's\'avérer être', de: 'sich erweisen als', pt: 'revelar-se / acabar sendo', zh: '结果是 / 事实证明', ar: 'تبين أنه / انتهى إلى', ja: '〜であることが分かる', ru: 'оказаться в итоге', note: 'Narrative outcome verb.', ic: '✨' },
    { phrase: 'do one\'s part', meaning: 'take individual responsibility for contributing to a shared goal', hi: 'अपना योगदान देना / अपना कर्तव्य निभाना', es: 'hacer su parte / aportar su grano de arena', fr: 'faire sa part', de: 'seinen Beitrag leisten', pt: 'fazer a sua parte', zh: '尽自己的一份责任', ar: 'يقوم بدوره في العمل الجماعي', ja: '自分の役割を果たす', ru: 'внести свой вклад в общее дело', note: 'Collaborative commitment.', ic: '🤝' }
  ],
  grammar: {
    title: 'Unit 11 Master Grammar Synthesis & Grand Assessment Matrix',
    concept: 'Comprehensive integration of: 1) Past Perfect sequencing; 2) First Conditional cause-and-effect; 3) Indirect questions with statement word order; 4) Expectation and advice modals ("be supposed to", "ought to", "had better"); 5) Comparative precision ("far more ... than", "not as ... as"); 6) Polite request formulas ("Would you mind + V-ing", "Could you possibly").',
    patterns: [
      {
        title: 'Past Narration vs. Future Conditionals',
        structure: 'By the time + Past Simple, Past Perfect  |  If + Present Simple, will + Base Verb',
        rule: 'Contrast past actions (Past Perfect for prior event) with future probabilities (First Conditional).',
        examples: [
          { en: 'By the time the manager arrived, we had already resolved the client\'s complaint.', hi: 'जब तक प्रबंधक पहुंचे, हम ग्राहक की शिकायत का समाधान पहले ही कर चुके थे।', es: 'Para cuando llegó el gerente, ya habíamos resuelto la queja del cliente.' },
          { en: 'If we eliminate single-use plastic, our local ecosystem will flourish in the long run.', hi: 'यदि हम एकल-उपयोग वाले प्लास्टिक को समाप्त करते हैं, तो हमारा स्थानीय पारिस्थितिकी तंत्र लंबे समय में समृद्ध होगा।', es: 'Si eliminamos el plástico de un solo uso, nuestro ecosistema florecerá a largo plazo.' }
        ]
      },
      {
        title: 'Polite Inquiries & Work Modals',
        structure: 'Could you tell me if + Subject + Verb?  |  Subject + is/are supposed to + Base Verb',
        rule: 'Maintain statement word order in embedded clauses, and use "supposed to" for expected actions.',
        examples: [
          { en: 'Could you tell me if this laptop is still under warranty?', hi: 'क्या आप मुझे बता सकते हैं कि क्या यह लैपटॉप अभी भी वारंटी के तहत है?', es: '¿Podría decirme si esta computadora portátil todavía está bajo garantía?' },
          { en: 'We are supposed to mute our microphones during the keynote presentation.', hi: 'मुख्य प्रस्तुति के दौरान हमें अपने माइक्रोफ़ोन म्यूट रखने हैं।', es: 'Se supone que debemos silenciar nuestros micrófonos durante la presentación principal.' }
        ]
      },
      {
        title: 'High Courtesy & Tactful Requests',
        structure: 'Would you mind + Verb-ing?  |  I would appreciate it if you could + Base Verb',
        rule: 'Follow "Would you mind" with a gerund, and use "I would appreciate it if you could" for formal written/spoken requests.',
        examples: [
          { en: 'Would you mind sharing your screen to show the quarterly financial forecast?', hi: 'क्या आप त्रैमासिक वित्तीय पूर्वानुमान दिखाने के लिए अपनी स्क्रीन साझा करने की कृपा करेंगे?', es: '¿Te importaría compartir tu pantalla para mostrar el pronóstico financiero?' },
          { en: 'I would appreciate it if you could process my exchange by Friday.', hi: 'यदि आप शुक्रवार तक मेरे एक्सचेंज की प्रक्रिया कर सकें तो मैं आभारी रहूँगा।', es: 'Le agradecería si pudiera procesar mi cambio antes del viernes.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'Could you tell me where is the conference room?',
      cor: 'Could you tell me where the conference room is?',
      exp: 'Indirect questions require statement order (Subject + Verb: "where the conference room is").',
      hi: 'Indirect question में verb subject के बाद आता है ("where the conference room is")।',
      es: 'En preguntas indirectas usa orden afirmativo: "where the conference room is".'
    },
    {
      inc: 'By the time we arrived, they already started.',
      cor: 'By the time we arrived, they had already started.',
      exp: 'Use Past Perfect ("had already started") for the prior event.',
      hi: 'पहले घटी घटना के लिए Past Perfect ("had already started") का प्रयोग करें।',
      es: 'Usa Past Perfect ("had already started") para la acción anterior.'
    },
    {
      inc: 'Would you mind to unmute yourself?',
      cor: 'Would you mind unmuting yourself?',
      exp: '"Would you mind" takes a gerund (-ing form), not an infinitive.',
      hi: '"Would you mind" के बाद gerund ("unmuting") आता है।',
      es: '"Would you mind" va seguido de gerundio (-ing).'
    },
    {
      inc: 'If we will recycle, we save energy.',
      cor: 'If we recycle, we will save energy.',
      exp: 'Present Simple in the if-clause, "will" in the outcome clause.',
      hi: 'If-clause में Present Simple और मुख्य भाग में "will" आता है।',
      es: 'Presente simple tras if, "will" en el resultado.'
    },
    {
      inc: 'You had better to check the policy under the warranty.',
      cor: 'You had better check the policy under warranty.',
      exp: '"had better" takes a bare infinitive ("check"), and the phrase is "under warranty" without "the".',
      hi: '"had better check" और "under warranty" सही रूप हैं।',
      es: '"had better check" y "under warranty" son las formas correctas.'
    }
  ],
  dialogues: [
    {
      title: 'Grand Capstone: Cross-Functional Team Milestone',
      context: 'Sarah and Daniel synthesize their team accomplishments and plan their final presentation.',
      charA: { name: 'Sarah', av: '👩‍💼', role: 'Operations Director' },
      charB: { name: 'Daniel', av: '👨‍💼', role: 'Lead Analyst' },
      turns: [
        { spk: 'Sarah', text: 'Daniel, all things considered, our cross-functional team has achieved a remarkable milestone this quarter!', hi: 'डैनियल, सब बातों को ध्यान में रखते हुए, हमारी क्रॉस-फंक्शनल टीम ने इस तिमाही में एक उल्लेखनीय उपलब्धि हासिल की है!', es: 'Daniel, considerándolo todo, ¡nuestro equipo interfuncional ha logrado un hito notable este trimestre!' },
        { spk: 'Daniel', text: 'Indeed! By the time we submitted the final report, we had resolved every customer complaint and streamlined our remote workflow.', hi: 'वास्तव में! जब तक हमने अंतिम रिपोर्ट प्रस्तुत की, तब तक हम हर ग्राहक शिकायत का समाधान कर चुके थे और अपने दूरस्थ कार्यप्रवाह को सुव्यवस्थित कर चुके थे।', es: '¡En efecto! Para cuando enviamos el informe final, ya habíamos resuelto cada queja y optimizado el flujo de trabajo remoto.' },
        { spk: 'Sarah', text: 'Could you tell me if our presentation slides are ready for tomorrow\'s executive review?', hi: 'क्या आप मुझे बता सकते हैं कि क्या हमारी प्रस्तुति स्लाइड कल की कार्यकारी समीक्षा के लिए तैयार हैं?', es: '¿Podrías decirme si nuestras diapositivas están listas para la revisión ejecutiva de mañana?' },
        { spk: 'Daniel', text: 'They are finalized! If we present our data with clarity and confidence, the executives will be thoroughly impressed.', hi: 'वे अंतिम रूप ले चुकी हैं! यदि हम अपना डेटा स्पष्टता और आत्मविश्वास के साथ प्रस्तुत करते हैं, तो अधिकारी पूरी तरह प्रभावित होंगे।', es: '¡Están finalizadas! Si presentamos nuestros datos con claridad y confianza, los ejecutivos quedarán completamente impresionados.' }
      ]
    },
    {
      title: 'A2 Mastery Gateway: Looking Ahead with Confidence',
      context: 'Tariq and Mei reflect on their language transformation across 165 lessons.',
      charA: { name: 'Tariq', av: '👨‍🎓', role: 'A2 Learner' },
      charB: { name: 'Mei', av: '👩‍🎓', role: 'Study Partner' },
      turns: [
        { spk: 'Tariq', text: 'Mei, do you remember when we started? We were nervous about basic greetings and simple past verbs.', hi: 'मेई, क्या आपको याद है जब हमने शुरुआत की थी? हम बुनियादी अभिवादन और सरल भूतकाल की क्रियाओं को लेकर घबराए हुए थे।', es: 'Mei, ¿recuerdas cuando empezamos? Estábamos nerviosos por los saludos básicos y los verbos simples en pasado.' },
        { spk: 'Mei', text: 'Now we can narrate travel misadventures with Past Perfect, handle customer service diplomatically, and collaborate in remote meetings!', hi: 'अब हम पास्ट परफेक्ट के साथ यात्रा की घटनाओं का वर्णन कर सकते हैं, ग्राहक सेवा को विनम्रता से संभाल सकते हैं, और रिमोट मीटिंग्स में सहयोग कर सकते हैं!', es: '¡Ahora podemos narrar viajes con Past Perfect, gestionar atención al cliente y colaborar en reuniones remotas!' },
        { spk: 'Tariq', text: 'Mastering 165 lessons has given us genuine communicative autonomy and fluent self-assurance.', hi: '165 पाठों में महारत हासिल करने से हमें वास्तविक संवादात्मक स्वायत्तता और धाराप्रवाह आत्मविश्वास मिला है।', es: 'Dominar 165 lecciones nos ha dado auténtica autonomía comunicativa y seguridad fluida.' },
        { spk: 'Mei', text: 'Let us celebrate this educational triumph and carry our English mastery forward into our careers and travels!', hi: 'आइए हम इस शैक्षिक विजय का जश्न मनाएं और अपनी अंग्रेजी दक्षता को अपने करियर और यात्राओं में आगे ले जाएं!', es: '¡Celebremos este triunfo educativo y llevemos nuestro dominio del inglés a nuestras carreras y viajes!' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_a2_11_165_p01',
      type: 'multiple_choice',
      prompt: 'Which sentence demonstrates correct indirect question syntax?',
      options: [
        'Could you tell me if the replacement part is covered under warranty?',
        'Could you tell me is the replacement part covered under warranty?',
        'Could you tell me if is the replacement part covered under warranty?',
        'Could you to tell me if the replacement part is covered under warranty?'
      ],
      correctAnswer: 'Could you tell me if the replacement part is covered under warranty?',
      explanation: 'Statement word order is preserved inside indirect questions.'
    },
    {
      id: 'ex_a2_11_165_p02',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct past auxiliary: "By the time the ferry departed, we _____ already purchased our tickets."',
      correctAnswer: 'had',
      explanation: 'Past Perfect requires "had + past participle".'
    },
    {
      id: 'ex_a2_11_165_p03',
      type: 'word_ordering',
      prompt: 'Arrange into a correct First Conditional sentence:',
      words: ['If', 'everyone', 'recycles,', 'our', 'carbon', 'footprint', 'will', 'decrease.'],
      correctAnswer: 'If everyone recycles, our carbon footprint will decrease.',
      explanation: 'If-clause with Present Simple + outcome clause with will.'
    },
    {
      id: 'ex_a2_11_165_p04',
      type: 'translation',
      prompt: 'Translate into English: "सब बातों को ध्यान में रखते हुए, हमने एक उत्कृष्ट उपलब्धि हासिल की है।"',
      targetSentence: 'All things considered, we have achieved an outstanding milestone.',
      correctAnswer: 'All things considered, we have achieved an outstanding milestone.',
      explanation: '"All things considered" translates सब बातों को ध्यान में रखते हुए.'
    },
    {
      id: 'ex_a2_11_165_p05',
      type: 'error_correction',
      prompt: 'Find and correct the gerund error:',
      errorSentence: 'Would you mind to share your screen with the team?',
      correctAnswer: 'Would you mind sharing your screen with the team?',
      explanation: '"Would you mind" takes a gerund (-ing form: "sharing").'
    },
    {
      id: 'ex_a2_11_165_p06',
      type: 'multiple_choice',
      prompt: 'Choose the sentence that correctly uses "be supposed to":',
      options: [
        'We are supposed to join the virtual call at nine o\'clock.',
        'We are suppose to join the virtual call at nine o\'clock.',
        'We suppose to join the virtual call at nine o\'clock.',
        'We are supposed to joining the virtual call at nine o\'clock.'
      ],
      correctAnswer: 'We are supposed to join the virtual call at nine o\'clock.',
      explanation: '"are supposed to + base verb" is grammatically standard.'
    },
    {
      id: 'ex_a2_11_165_p07',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "I would appreciate _____ if you could process my return request today."',
      correctAnswer: 'it',
      explanation: 'Dummy pronoun "it" is mandatory in "I would appreciate it if you could...".'
    },
    {
      id: 'ex_a2_11_165_p08',
      type: 'word_ordering',
      prompt: 'Order the words to create an indirect inquiry:',
      words: ['Do', 'you', 'know', 'where', 'the', 'meeting', 'room', 'is?'],
      correctAnswer: 'Do you know where the meeting room is?',
      explanation: 'Do you know where + Subject + is?'
    },
    {
      id: 'ex_a2_11_165_p09',
      type: 'translation',
      prompt: 'Translate into English: "जब तक हम हवाई अड्डे पहुंचे, विमान पहले ही रवाना हो चुका था।"',
      targetSentence: 'By the time we reached the airport, the plane had already departed.',
      correctAnswer: 'By the time we reached the airport, the plane had already departed.',
      explanation: 'Sequencing with Past Simple ("reached") and Past Perfect ("had already departed").'
    },
    {
      id: 'ex_a2_11_165_p10',
      type: 'error_correction',
      prompt: 'Correct the modal verb error:',
      errorSentence: 'Renewable energy prices might to fall significantly next year.',
      correctAnswer: 'Renewable energy prices might fall significantly next year.',
      explanation: 'Modal "might" takes a bare infinitive without "to".'
    },
    {
      id: 'ex_a2_11_165_p11',
      type: 'multiple_choice',
      prompt: 'Which phrase is the most courteous way to decline an invitation diplomatically?',
      options: [
        'I\'d love to, but I\'m afraid I have a prior commitment.',
        'I will not come because I dislike events.',
        'According to me, no.',
        'You are supposed to cancel the event.'
      ],
      correctAnswer: 'I\'d love to, but I\'m afraid I have a prior commitment.',
      explanation: 'Diplomatic formula pairing appreciation with polite regret.'
    },
    {
      id: 'ex_a2_11_165_p12',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "In the long _____, sustainable habits save money and protect nature."',
      correctAnswer: 'run',
      explanation: 'Fixed idiom: "In the long run".'
    },
    {
      id: 'ex_a2_11_165_p13',
      type: 'word_ordering',
      prompt: 'Arrange into an advice sentence:',
      words: ['You', 'had', 'better', 'double-check', 'your', 'travel', 'itinerary.'],
      correctAnswer: 'You had better double-check your travel itinerary.',
      explanation: 'You had better + Base Verb + Object.'
    },
    {
      id: 'ex_a2_11_165_p14',
      type: 'translation',
      prompt: 'Translate into English: "यदि आप बजट का पालन करेंगे, तो आप अपना कर्ज जल्दी चुका देंगे।"',
      targetSentence: 'If you stick to the budget, you will pay off your debt quickly.',
      correctAnswer: 'If you stick to the budget, you will pay off your debt quickly.',
      explanation: 'First Conditional with financial phrasal verbs.'
    },
    {
      id: 'ex_a2_11_165_p15',
      type: 'multiple_choice',
      prompt: 'What does achieving "language autonomy" mean?',
      options: [
        'Being able to understand, speak, and resolve real-world situations independently without constant translation',
        'Memorizing a single dictionary page',
        'Refusing to speak with other people',
        'Only using automated machine translation tools'
      ],
      correctAnswer: 'Being able to understand, speak, and resolve real-world situations independently without constant translation',
      explanation: 'Autonomy represents true independent communicative competence.'
    }
  ],
  review: [
    {
      id: 'ex_a2_11_165_r01',
      type: 'multiple_choice',
      prompt: 'Which sentence has NO errors?',
      options: [
        'By the time we checked in, the hotel staff had prepared our room.',
        'By the time we had checked in, the hotel staff prepared our room.',
        'By the time we check in, the hotel staff had prepared our room.',
        'By the time we checked in, the hotel staff has prepared our room.'
      ],
      correctAnswer: 'By the time we checked in, the hotel staff had prepared our room.',
      explanation: 'Past Simple after "by the time", Past Perfect for the earlier event.'
    },
    {
      id: 'ex_a2_11_165_r02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "Could you please tell me _____ I can speak to a supervisor?"',
      correctAnswer: 'if',
      explanation: '"if" or "whether" introduces yes/no indirect questions.'
    },
    {
      id: 'ex_a2_11_165_r03',
      type: 'error_correction',
      prompt: 'Correct the error:',
      errorSentence: 'All of sudden, our team achieved the final milestone.',
      correctAnswer: 'All of a sudden, our team achieved the final milestone.',
      explanation: 'Include "a": "All of a sudden".'
    },
    {
      id: 'ex_a2_11_165_r04',
      type: 'word_ordering',
      prompt: 'Arrange into a correct sentence:',
      words: ['They', 'are', 'supposed', 'to', 'deliver', 'the', 'package', 'today.'],
      correctAnswer: 'They are supposed to deliver the package today.',
      explanation: 'Subject + are supposed to + Base Verb + Object + Time.'
    },
    {
      id: 'ex_a2_11_165_r05',
      type: 'translation',
      prompt: 'Translate into English: "यह हमारे पूरे अंग्रेजी पाठ्यक्रम की एक गर्वपूर्ण उपलब्धि है।"',
      targetSentence: 'This is a proud achievement of our entire English course.',
      correctAnswer: 'This is a proud achievement of our entire English course.',
      explanation: '"proud achievement" translates गर्वपूर्ण उपलब्धि.'
    }
  ],
  assessment: [
    {
      id: 'ex_a2_11_165_a01',
      type: 'multiple_choice',
      prompt: 'Select the statement that demonstrates mastery across workplace communication, narrative sequencing, and polite inquiry:\n\n"____"',
      options: [
        'Good afternoon. Could you tell me if the project report is ready? By the time we met yesterday, the analyst had finished the draft, and if we review it now, we will submit it on schedule.',
        'Good afternoon. Where is the report is? By the time we had met, analyst finished draft, and if we will review, we submit.',
        'According to me, nobody should to work on reports.',
        'Would you mind to tell me why you departed yesterday before we had arrive?'
      ],
      correctAnswer: 'Good afternoon. Could you tell me if the project report is ready? By the time we met yesterday, the analyst had finished the draft, and if we review it now, we will submit it on schedule.',
      explanation: 'Flawlessly integrates indirect question syntax, Past Perfect sequencing, and First Conditional reasoning.'
    },
    {
      id: 'ex_a2_11_165_a02',
      type: 'fill_blank',
      prompt: 'Fill in the blank: "I would appreciate it if you could _____ my certificate of completion."',
      correctAnswer: 'issue',
      explanation: 'Base verb "issue" completes the polite request.'
    },
    {
      id: 'ex_a2_11_165_a03',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nInterviewer: "How do you handle challenging situations at work or during travel?"\nCandidate: "_____"',
      options: [
        'I communicate with clarity and tact, ask polite questions, and focus on collaborative solutions to resolve problems smoothly.',
        'I am suppose to panic and blame others.',
        'By the time I arrive, I did not know anything.',
        'If I will work, I am angry.'
      ],
      correctAnswer: 'I communicate with clarity and tact, ask polite questions, and focus on collaborative solutions to resolve problems smoothly.',
      explanation: 'Expresses emotional maturity and A2 professional communicative competence.'
    },
    {
      id: 'ex_a2_11_165_a04',
      type: 'speaking',
      prompt: 'Read aloud with absolute confidence, clear pronunciation, and celebratory pride: "Congratulations on completing 165 lessons! All things considered, you have achieved true communicative autonomy across workplace collaboration, travel narration, sustainable living, and customer service. You are fully prepared to speak English with confidence and fluency worldwide!"',
      targetSentence: 'Congratulations on completing 165 lessons! All things considered, you have achieved true communicative autonomy across workplace collaboration, travel narration, sustainable living, and customer service. You are fully prepared to speak English with confidence and fluency worldwide!',
      correctAnswer: 'Congratulations on completing 165 lessons! All things considered, you have achieved true communicative autonomy across workplace collaboration, travel narration, sustainable living, and customer service. You are fully prepared to speak English with confidence and fluency worldwide!',
      explanation: 'Deliver with inspirational rhythm, clear enunciation of "congratulations", "autonomy", "sustainable", and "fluency", and enthusiastic cadence.'
    },
    {
      id: 'ex_a2_11_165_a05',
      type: 'translation',
      prompt: 'Translate into English: "165 पाठों को पूरा करना हमारी अंग्रेजी यात्रा में एक शानदार और अविस्मरणीय उपलब्धि है!"',
      targetSentence: 'Completing 165 lessons is a fantastic and unforgettable achievement in our English journey!',
      correctAnswer: 'Completing 165 lessons is a fantastic and unforgettable achievement in our English journey!',
      explanation: 'Inspiring translation celebrating total course milestone.'
    }
  ]
};
