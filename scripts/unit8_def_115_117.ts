import { LessonConfigA2 } from './unit8_builder_helper';

// =========================================================================
// LESSON 115: Digital Life, Online Communication & Technical Problems
// =========================================================================
export const LESSON_115_CONFIG: LessonConfigA2 = {
  num: 115,
  title: 'Digital Life, Online Communication & Technical Problems',
  icon: '💻',
  estMin: 25,
  objTitle: 'Navigating Tech Devices, Online Accounts & Troubleshooting Glitches',
  objDesc: 'Communicate effectively about smartphones, computers, software errors, internet connections, and provide clear step-by-step troubleshooting steps using Zero and First Conditionals (If you press..., it will...).',
  objHi: 'डिजिटल उपकरण, ऑनलाइन खाते और तकनीकी समस्याओं (ग्लिच) के समाधान के निर्देश देना सीखें।',
  objEs: 'Navegar por dispositivos digitales, cuentas online y resolver problemas técnicos usando condicionales cero y primero.',
  canDo: [
    'I can describe digital hardware and software problems (freezing, crashing, weak signal).',
    'I can give technical troubleshooting instructions using Zero and First Conditionals ("If you click..., it will...").',
    'I can talk about online security, login credentials, passwords, and browser cache.',
    'I can ask IT technical support for assistance politely.'
  ],
  canDoHi: [
    'मैं डिजिटल हार्डवेयर और सॉफ्टवेयर की समस्याओं (स्क्रीन फ्रीज, क्रैश, कमजोर सिग्नल) का वर्णन कर सकता हूँ।',
    'मैं कंडीशनल वाक्यों ("If you click..., it will...") का उपयोग करके तकनीकी सुधार निर्देश दे सकता हूँ।',
    'मैं ऑनलाइन सुरक्षा, पासवर्ड और ब्राउज़र कैश के बारे में बात कर सकता हूँ।',
    'मैं आईटी सपोर्ट से विनम्रतापूर्वक तकनीकी सहायता मांग सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir problemas digitales (bloqueos, caídas de sistema, señal débil).',
    'Puedo dar instrucciones técnicas usando condicionales cero y primero.',
    'Puedo hablar de seguridad digital, contraseñas y caché del navegador.',
    'Puedo solicitar asistencia técnica a soporte de TI educadamente.'
  ],
  vocab: [
    { w: 'reboot', p: '/ˌriːˈbuːt/', m: 'restart a computer or device system', hi: 'पुनः आरंभ करना / रीबूट करना', es: 'reiniciar', fr: 'redémarrer', de: 'neustarten', pt: 'reiniciar', zh: '重启', ar: 'إعادة تشغيل', ja: '再起動する', ru: 'перезагружать', ex: 'If the app freezes, try to reboot your phone.', exHi: 'यदि ऐप रुक जाता है, तो अपने फोन को रीबूट करने का प्रयास करें।', exEs: 'Si la aplicación se congela, intenta reiniciar tu teléfono.', ic: '🔄' },
    { w: 'freeze', p: '/friːz/', m: 'temporarily become unresponsive or stuck during operation', hi: 'फ्रीज होना / हैंग होना', es: 'congelarse / bloquearse', fr: 'se figer / bloquer', de: 'einfrieren / hängen bleiben', pt: 'travar / congelar', zh: '卡死 / 冻结', ar: 'يتجمد / يتوقف عن الاستجابة', ja: 'フリーズする / 固まる', ru: 'зависать', ex: 'My computer screen freezes whenever I open large video files.', exHi: 'जब भी मैं बड़ी वीडियो फाइलें खोलता हूँ तो मेरी कंप्यूटर स्क्रीन फ्रीज हो जाती है।', exEs: 'Mi pantalla se congela cuando abro videos grandes.', ic: '❄️' },
    { w: 'crash', p: '/kræʃ/', m: 'suddenly stop functioning or close unexpectedly', hi: 'क्रैश होना / अचानक बंद होना', es: 'fallar / cerrarse inesperadamente', fr: 'planter / crasher', de: 'abstürzen', pt: 'travar / fechar abruptamente', zh: '崩溃 / 闪退', ar: 'يتعطل فجأة', ja: '強制終了する / クラッシュする', ru: 'давать сбой / вылетать', ex: 'The web browser crashed and I lost my unsaved draft.', exHi: 'वेब ब्राउज़र क्रैश हो गया और मैंने अपना बिना सहेजा हुआ ड्राफ्ट खो दिया।', exEs: 'El navegador falló y perdí mi borrador no guardado.', ic: '💥' },
    { w: 'password', p: '/ˈpɑːswɜːd/', m: 'a secret word or phrase that must be used to gain access', hi: 'पासवर्ड / कूटशब्द', es: 'contraseña', fr: 'mot de passe', de: 'Passwort / Kennwort', pt: 'senha', zh: '密码', ar: 'كلمة المرور', ja: 'パスワード', ru: 'пароль', ex: 'Never share your account password with anyone.', exHi: 'अपना खाता पासवर्ड कभी किसी के साथ साझा न करें।', exEs: 'Nunca compartas la contraseña de tu cuenta con nadie.', ic: '🔒' },
    { w: 'install', p: '/ɪnˈstɔːl/', m: 'set up software on a computer or mobile device', hi: 'इंस्टॉल करना / स्थापित करना', es: 'instalar', fr: 'installer', de: 'installieren', pt: 'instalar', zh: '安装', ar: 'تثبيت / تنصيب', ja: 'インストールする', ru: 'устанавливать', ex: 'Make sure to install the latest security updates.', exHi: 'नवीनतम सुरक्षा अपडेट इंस्टॉल करना सुनिश्चित करें।', exEs: 'Asegúrate de instalar las últimas actualizaciones.', ic: '📥' },
    { w: 'troubleshoot', p: '/ˈtrʌblʃuːt/', m: 'trace and resolve problems with software or machinery', hi: 'समस्या का निवारण करना', es: 'solucionar problemas / diagnosticar', fr: 'dépanner / résoudre', de: 'Fehler beheben / diagnostizieren', pt: 'solucionar problemas', zh: '排查故障', ar: 'استكشاف الأخطاء وإصلاحها', ja: 'トラブルシューティングする', ru: 'устранять неполадки', ex: 'The IT technician helped me troubleshoot the network connection.', exHi: 'आईटी तकनीशियन ने नेटवर्क कनेक्शन की समस्या निवारण में मेरी मदद की।', exEs: 'El técnico de TI me ayudó a solucionar la conexión.', ic: '🔧' },
    { w: 'connection', p: '/kəˈnekʃn/', m: 'a link between a device and the internet or a network', hi: 'इंटरनेट कनेक्शन / संपर्क', es: 'conexión', fr: 'connexion', de: 'Verbindung', pt: 'conexão', zh: '网络连接', ar: 'اتصال', ja: '接続', ru: 'соединение / связь', ex: 'We have a very high-speed fiber-optic internet connection.', exHi: 'हमारे पास बहुत हाई-स्पीड फाइबर-ऑप्टिक इंटरनेट कनेक्शन है।', exEs: 'Tenemos una conexión a internet de fibra óptica muy rápida.', ic: '🌐' },
    { w: 'router', p: '/ˈruːtər/', m: 'a device that forwards data packets between computer networks', hi: 'राउटर (इंटरनेट उपकरण)', es: 'enrutador / router', fr: 'routeur', de: 'Router', pt: 'roteador', zh: '路由器', ar: 'راوتر / موجه', ja: 'ルーター', ru: 'роутер / маршрутизатор', ex: 'Unplug the Wi-Fi router for ten seconds to reset it.', exHi: 'वाई-फाई राउटर को रीसेट करने के लिए दस सेकंड के लिए अनप्लग करें।', exEs: 'Desconecta el router diez segundos para restablecerlo.', ic: '📡' },
    { w: 'backup', p: '/ˈbækʌp/', m: 'a copy of data made in case the original is lost or damaged', hi: 'बैकअप / सुरक्षित प्रतिलिपि', es: 'copia de seguridad / respaldo', fr: 'sauvegarde', de: 'Sicherungskopie / Backup', pt: 'cópia de segurança / backup', zh: '备份', ar: 'نسخة احتياطية', ja: 'バックアップ', ru: 'резервная копия', ex: 'Always save a cloud backup of your essential files.', exHi: 'हमेशा अपनी आवश्यक फाइलों का क्लाउड बैकअप रखें।', exEs: 'Guarda siempre una copia de seguridad en la nube.', ic: '💾' },
    { w: 'settings', p: '/ˈsetɪŋz/', m: 'controls that allow you to adjust the operation of a device', hi: 'सेटिंग्स / विकल्प', es: 'configuración / ajustes', fr: 'paramètres / réglages', de: 'Einstellungen', pt: 'configurações / ajustes', zh: '设置', ar: 'الإعدادات', ja: '設定', ru: 'настройки', ex: 'Go to your account settings to change notification preferences.', exHi: 'अधिसूचना प्राथमिकताएँ बदलने के लिए अपनी खाता सेटिंग्स पर जाएँ।', exEs: 'Ve a la configuración de tu cuenta para cambiar las notificaciones.', ic: '⚙️' },
    { w: 'browser', p: '/ˈbraʊzər/', m: 'a computer program with a graphical user interface for displaying web pages', hi: 'ब्राउज़र / वेब ब्राउज़र', es: 'navegador web', fr: 'navigateur', de: 'Browser', pt: 'navegador', zh: '浏览器', ar: 'متصفح الإنترنت', ja: 'ブラウザ', ru: 'браузер', ex: 'Clear your browser cache if the website fails to load.', exHi: 'यदि वेबसाइट लोड होने में विफल रहती है तो अपना ब्राउज़र कैश साफ़ करें।', exEs: 'Borra la caché de tu navegador si la página no carga.', ic: '🌍' },
    { w: 'cache', p: '/kæʃ/', m: 'temporary files stored by software to speed up data retrieval', hi: 'कैश (अस्थायी मेमोरी)', es: 'memoria caché', fr: 'mémoire cache', de: 'Cache-Speicher', pt: 'memória cache', zh: '缓存', ar: 'ذاكرة تخزين مؤقت', ja: 'キャッシュ', ru: 'кэш / временные файлы', ex: 'Clearing your cache resolves most website display errors.', exHi: 'अपना कैश साफ़ करने से अधिकांश वेबसाइट डिस्प्ले त्रुटियां हल हो जाती हैं।', exEs: 'Borrar la caché resuelve la mayoría de los errores.', ic: '🗄️' },
    { w: 'charger', p: '/ˈtʃɑːdʒər/', m: 'a device for charging a battery or battery-powered equipment', hi: 'चार्जर', es: 'cargador', fr: 'chargeur', de: 'Ladegerät', pt: 'carregador', zh: '充电器', ar: 'شاحن', ja: '充電器', ru: 'зарядное устройство', ex: 'I left my phone charger in the meeting room.', exHi: 'मैं अपना फोन चार्जर मीटिंग रूम में छोड़ आया।', exEs: 'Dejé el cargador de mi teléfono en la sala.', ic: '🔌' },
    { w: 'software', p: '/ˈsɒftweər/', m: 'the programs and other operating information used by a computer', hi: 'सॉफ्टवेयर / प्रोग्राम', es: 'software / programas', fr: 'logiciel', de: 'Software', pt: 'software / programas', zh: '软件', ar: 'برمجيات', ja: 'ソフトウェア', ru: 'программное обеспечение', ex: 'Our company uses project management software every day.', exHi: 'हमारी कंपनी हर दिन प्रोजेक्ट मैनेजमेंट सॉफ्टवेयर का उपयोग करती है।', exEs: 'Nuestra empresa utiliza software de gestión a diario.', ic: '💻' },
    { w: 'hardware', p: '/ˈhɑːdweər/', m: 'the physical components of a computer or other electronic system', hi: 'हार्डवेयर (भौतिक उपकरण)', es: 'hardware / componentes físicos', fr: 'matériel informatique', de: 'Hardware / Geräteteile', pt: 'hardware', zh: '硬件', ar: 'عتاد الحاسوب', ja: 'ハードウェア', ru: 'аппаратное обеспечение', ex: 'The IT department is upgrading our office computer hardware.', exHi: 'आईटी विभाग हमारे कार्यालय के कंप्यूटर हार्डवेयर को अपग्रेड कर रहा है।', exEs: 'El departamento de TI está actualizando el hardware.', ic: '🖥️' },
    { w: 'download', p: '/ˌdaʊnˈləʊd/', m: 'copy data from one computer system to another, typically over the internet', hi: 'डाउनलोड करना', es: 'descargar', fr: 'télécharger', de: 'herunterladen', pt: 'baixar / descarregar', zh: '下载', ar: 'تنزيل / تحميل', ja: 'ダウンロードする', ru: 'скачивать / загружать', ex: 'You can download the mobile application for free from the app store.', exHi: 'आप ऐप स्टोर से मुफ्त में मोबाइल एप्लिकेशन डाउनलोड कर सकते हैं।', exEs: 'Puedes descargar la aplicación gratis desde la tienda.', ic: '⬇️' },
    { w: 'upload', p: '/ˌʌpˈləʊd/', m: 'transfer data from a device to a central computer or cloud network', hi: 'अपलोड करना', es: 'subir / cargar', fr: 'téléverser', de: 'hochladen', pt: 'fazer upload / enviar', zh: '上传', ar: 'رفع ملف', ja: 'アップロードする', ru: 'загружать на сервер', ex: 'Please upload the scanned PDF copy of your passport.', exHi: 'कृपया अपने पासपोर्ट की स्कैन की गई पीडीएफ प्रति अपलोड करें।', exEs: 'Por favor sube la copia escaneada en PDF de tu pasaporte.', ic: '⬆️' },
    { w: 'glitch', p: '/ɡlɪtʃ/', m: 'a sudden, usually temporary malfunction or fault in equipment', hi: 'गड़बड़ी / ग्लिच', es: 'fallo técnico / fallo temporal', fr: 'pépin / bogue temporaire', de: 'Panne / Glitch', pt: 'falha técnica / bug temporário', zh: '小故障', ar: 'خلل تقني بسيط', ja: '不具合 / グリッチ', ru: 'глюк / сбой', ex: 'A minor audio glitch occurred during the video conference.', exHi: 'वीडियो कॉन्फ्रेंस के दौरान एक छोटी ऑडियो गड़बड़ी हुई।', exEs: 'Ocurrió un pequeño fallo de audio durante la llamada.', ic: '⚡' },
    { w: 'sync', p: '/sɪŋk/', m: 'coordinate or match data between two or more devices', hi: 'सिंक करना / मिलाना', es: 'sincronizar', fr: 'synchroniser', de: 'synchronisieren', pt: 'sincronizar', zh: '同步', ar: 'مزامنة', ja: '同期する', ru: 'синхронизировать', ex: 'My calendar automatically syncs across my laptop and phone.', exHi: 'मेरा कैलेंडर मेरे लैपटॉप और फोन पर स्वचालित रूप से सिंक हो जाता है।', exEs: 'Mi calendario se sincroniza automáticamente en mi portátil y teléfono.', ic: '🔄' },
    { w: 'secure', p: '/sɪˈkjʊər/', m: 'protected against unauthorized access, theft, or risk', hi: 'सुरक्षित', es: 'seguro / protegido', fr: 'sécurisé', de: 'sicher / geschützt', pt: 'seguro', zh: '安全的', ar: 'آمن ومحمي', ja: '安全な / セキュリティの高い', ru: 'безопасный / защищенный', ex: 'Always use two-factor authentication to keep your account secure.', exHi: 'अपने खाते को सुरक्षित रखने के लिए हमेशा टू-फैक्टर प्रमाणीकरण का उपयोग करें।', exEs: 'Usa siempre autenticación de dos factores para mantener tu cuenta segura.', ic: '🛡️' }
  ],
  chunks: [
    { phrase: 'if you restart the device', meaning: 'condition for resolving basic system errors', hi: 'यदि आप डिवाइस को पुनः आरंभ करते हैं', es: 'si reinicias el dispositivo', fr: 'si vous redémarrez l\'appareil', de: 'wenn Sie das Gerät neu starten', pt: 'se você reiniciar o dispositivo', zh: '如果你重启设备', ar: 'إذا قمت بإعادة تشغيل الجهاز', ja: '端末を再起動すれば', ru: 'если вы перезагрузите устройство', note: 'Zero/First conditional conditional clause.', ic: '🔄' },
    { phrase: 'clear your browser cache', meaning: 'remove temporary web files to fix display issues', hi: 'अपने ब्राउज़र का कैश साफ़ करें', es: 'borrar la caché del navegador', fr: 'vider le cache du navigateur', de: 'den Browser-Cache leeren', pt: 'limpar o cache do navegador', zh: '清除浏览器缓存', ar: 'مسح ذاكرة التخزين المؤقت للمتصفح', ja: 'ブラウザのキャッシュを消去する', ru: 'очистить кэш браузера', note: 'Universal tech troubleshooting recommendation.', ic: '🗄️' },
    { phrase: 'run out of battery', meaning: 'have no electrical power remaining in a device', hi: 'बैटरी खत्म हो जाना', es: 'quedarse sin batería', fr: 'tomber en panne de batterie', de: 'der Akku ist leer', pt: 'ficar sem bateria', zh: '电量耗尽', ar: 'نفاد البطارية', ja: 'バッテリーが切れる', ru: 'разрядиться (о батарее)', note: '"My laptop ran out of battery during the presentation."', ic: '🪫' },
    { phrase: 'reset your password', meaning: 'create a new secure login code after forgetting the old one', hi: 'अपना पासवर्ड रीसेट करना', es: 'restablecer tu contraseña', fr: 'réinitialiser votre mot de passe', de: 'das Passwort zurücksetzen', pt: 'redefinir sua senha', zh: '重置密码', ar: 'إعادة تعيين كلمة المرور', ja: 'パスワードを再設定する', ru: 'сбросить пароль', note: 'Essential digital security procedure.', ic: '🔒' },
    { phrase: 'plug in the charger', meaning: 'connect power cable to an electrical socket', hi: 'चार्जर प्लग में लगाना', es: 'conectar el cargador', fr: 'brancher le chargeur', de: 'das Ladekabel einstecken', pt: 'conectar o carregador', zh: '插上充电器', ar: 'توصيل الشاحن بالكهرباء', ja: '充電器をコンセントにつなぐ', ru: 'вставить зарядку в розетку', note: 'Daily device operation.', ic: '🔌' },
    { phrase: 'it will automatically update', meaning: 'system will refresh without manual intervention', hi: 'यह स्वचालित रूप से अपडेट हो जाएगा', es: 'se actualizará automáticamente', fr: 'cela se mettra à jour automatiquement', de: 'es wird sich automatisch aktualisieren', pt: 'será atualizado automaticamente', zh: '它会自动更新', ar: 'سيتم التحديث تلقائياً', ja: '自動的に更新されます', ru: 'это обновится автоматически', note: 'First conditional result clause.', ic: '⚡' },
    { phrase: 'contact technical support', meaning: 'request professional help from IT helpdesk', hi: 'तकनीकी सहायता से संपर्क करना', es: 'contactar al soporte técnico', fr: 'contacter l\'assistance technique', de: 'den technischen Support kontaktieren', pt: 'entrar em contato com o suporte técnico', zh: '联系技术支持', ar: 'الاتصال بالدعم الفني', ja: 'テクニカルサポートに問い合わせる', ru: 'обратиться в техподдержку', note: 'Final troubleshooting step.', ic: '📞' },
    { phrase: 'back up all your files', meaning: 'save secondary copies of digital documents', hi: 'अपनी सभी फाइलों का बैकअप लेना', es: 'hacer copia de seguridad de todos tus archivos', fr: 'sauvegarder tous vos fichiers', de: 'alle Ihre Dateien sichern', pt: 'fazer backup de todos os seus arquivos', zh: '备份所有文件', ar: 'نسخ جميع ملفاتك احتياطياً', ja: 'すべてのファイルをバックアップする', ru: 'создать резервную копию всех файлов', note: 'Preventative security advice.', ic: '💾' }
  ],
  grammar: {
    title: 'Zero & First Conditionals for Technical Instructions & Real Possibilities',
    concept: 'Using Zero Conditional (facts & general truths: If + Present Simple, Present Simple) and First Conditional (real future possibilities: If + Present Simple, will + Verb).',
    patterns: [
      {
        title: 'Zero Conditional (General Tech Facts & System Rules)',
        structure: 'If / When + Present Simple, Present Simple',
        rule: 'Use Zero Conditional for automatic results and factual operations in technology.',
        examples: [
          { en: 'If you unplug the router, the internet disconnects.', hi: 'यदि आप राउटर को अनप्लग करते हैं, तो इंटरनेट डिस्कनेक्ट हो जाता है।', es: 'Si desconectas el router, internet se corta.' },
          { en: 'When the battery reaches twenty percent, the phone enters power saving mode.', hi: 'जब बैटरी बीस प्रतिशत तक पहुँचती है, तो फोन पावर सेविंग मोड में चला जाता है।', es: 'Cuando la batería llega al veinte por ciento, el teléfono entra en modo de ahorro.' }
        ]
      },
      {
        title: 'First Conditional (Troubleshooting Suggestions & Future Consequences)',
        structure: 'If + Present Simple, Subject + will / won\'t + Base Verb (or Imperative)',
        rule: 'Use First Conditional to describe specific actions and their predicted future results.',
        examples: [
          { en: 'If you clear your browser cache, the website will load faster.', hi: 'यदि आप अपना ब्राउज़र कैश साफ़ करते हैं, तो वेबसाइट तेजी से लोड होगी।', es: 'Si borras la caché de tu navegador, el sitio web cargará más rápido.' },
          { en: 'If the app freezes again, restart your smartphone immediately.', hi: 'यदि ऐप फिर से फ्रीज हो जाता है, तो अपने स्मार्टफोन को तुरंत रीस्टार्ट करें।', es: 'Si la aplicación se congela de nuevo, reinicia tu teléfono de inmediato.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'If you will restart the laptop, it works.',
      cor: 'If you restart the laptop, it will work. / If you restart the laptop, it works.',
      exp: 'Never use "will" in the "if" condition clause (use Present Simple after "if").',
      hi: '"If" क्लॉज में "will" का प्रयोग न करें: "If you restart...", "If you will restart" गलत है।'
    },
    {
      inc: 'My computer was crashed yesterday.',
      cor: 'My computer crashed yesterday.',
      exp: '"Crash" is an intransitive active verb here (not passive "was crashed").',
      hi: '"My computer crashed" कहें, "was crashed" गलत है।'
    },
    {
      inc: 'I am out of the battery.',
      cor: 'My battery ran out. / I ran out of battery.',
      exp: 'The correct collocation is "run out of battery" or "the battery died".',
      hi: 'बैटरी खत्म होने के लिए "I ran out of battery" कहें।'
    },
    {
      inc: 'If the screen freezes, pressing the power button.',
      cor: 'If the screen freezes, press the power button.',
      exp: 'Use the base imperative verb "press" for instructions in the main clause.',
      hi: 'निर्देश देने के लिए मुख्य क्लॉज में base verb (press) का प्रयोग करें।'
    },
    {
      inc: 'I forgot my pass-word and cannot log in.',
      cor: 'I forgot my password and cannot log in.',
      exp: 'Write "password" as a single compound word.',
      hi: '"Password" एक ही शब्द है।'
    }
  ],
  dialogues: [
    {
      title: 'Troubleshooting a Frozen Laptop',
      context: 'Pooja calls the company IT helpdesk because her work laptop is unresponsive.',
      charA: { name: 'Pooja', av: '👩‍💻', role: 'Staff Member' },
      charB: { name: 'IT Tech', av: '👨‍🔧', role: 'IT Support Engineer' },
      turns: [
        { spk: 'Pooja', text: 'Hello, IT support? My laptop screen suddenly froze while I was drafting a client report, and the mouse won\'t move.', hi: 'नमस्ते, आईटी सपोर्ट? क्लाइंट रिपोर्ट का मसौदा तैयार करते समय मेरे लैपटॉप की स्क्रीन अचानक फ्रीज हो गई, और माउस हिल नहीं रहा है।', es: 'Hola, ¿soporte de TI? Mi pantalla se congeló mientras redactaba un informe y el ratón no se mueve.' },
        { spk: 'IT Tech', text: 'Don\'t worry, Pooja. If you press and hold the power button for ten seconds, the machine will force a reboot.', hi: 'चिंता न करें, पूजा। यदि आप पावर बटन को दस सेकंड तक दबाकर रखती हैं, तो मशीन जबरन रीबूट हो जाएगी।', es: 'No te preocupes. Si mantienes presionado el botón de encendido 10 segundos, se reiniciará.' },
        { spk: 'Pooja', text: 'Okay, I am doing that now... Great, the screen went black and now the logo is loading!', hi: 'ठीक है, मैं अभी ऐसा कर रही हूँ... बढ़िया, स्क्रीन काली हो गई और अब लोगो लोड हो रहा है!', es: 'De acuerdo, lo hago ahora... ¡Bien, la pantalla se apagó y ahora carga el logo!' },
        { spk: 'IT Tech', text: 'Perfect. If you install the pending system update afterward, it will prevent this glitch from happening again.', hi: 'बिल्कुल सही। यदि आप बाद में लंबित सिस्टम अपडेट इंस्टॉल कर लेंगी, तो यह गड़बड़ी दोबारा होने से बचेगी।', es: 'Perfecto. Si instalas la actualización pendiente luego, evitarás que este fallo se repita.' }
      ]
    },
    {
      title: 'Setting Up Two-Factor Security',
      context: 'Leo helps his colleague Tara secure her online email account with two-factor authentication.',
      charA: { name: 'Leo', av: '👨‍💻', role: 'Security Lead' },
      charB: { name: 'Tara', av: '👩', role: 'Marketing Associate' },
      turns: [
        { spk: 'Tara', text: 'Leo, I received an alert saying someone tried to log into my account. What should I do?', hi: 'लियो, मुझे एक अलर्ट मिला जिसमें कहा गया कि किसी ने मेरे खाते में लॉग इन करने का प्रयास किया। मुझे क्या करना चाहिए?', es: 'Leo, recibí una alerta de que alguien intentó acceder a mi cuenta. ¿Qué hago?' },
        { spk: 'Leo', text: 'First, reset your password immediately using a combination of letters, numbers, and symbols.', hi: 'सबसे पहले, अक्षरों, संख्याओं और प्रतीकों के संयोजन का उपयोग करके तुरंत अपना पासवर्ड रीसेट करें।', es: 'Primero, restablece tu contraseña de inmediato usando letras, números y símbolos.' },
        { spk: 'Tara', text: 'Done! Should I also enable two-factor authentication?', hi: 'हो गया! क्या मुझे टू-फैक्टर प्रमाणीकरण भी सक्षम करना चाहिए?', es: '¡Hecho! ¿Debería activar también la autenticación en dos pasos?' },
        { spk: 'Leo', text: 'Yes, definitely. If you enable two-factor security, no one can access your data without your phone code.', hi: 'हाँ, निश्चित रूप से। यदि आप टू-फैक्टर सुरक्षा सक्षम करती हैं, तो कोई भी आपके फोन कोड के बिना आपके डेटा तक नहीं पहुँच सकता।', es: 'Sí, definitivamente. Si activas la seguridad en dos pasos, nadie podrá acceder sin tu código.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u08_l115_p1',
      type: 'multiple_choice',
      prompt: 'Select the sentence with correct First Conditional grammar:',
      question: 'Select the sentence with correct First Conditional grammar:',
      options: [
        'If you clear your cache, the website will load properly.',
        'If you will clear your cache, the website will load.',
        'If you clear cache, the website loads tomorrow.',
        'If you clearing cache, the website will load.'
      ],
      correctAnswer: 'If you clear your cache, the website will load properly.',
      explanation: 'Use Present Simple after "if" (clear) and "will + base verb" in the result clause.'
    },
    {
      id: 'ex_u08_l115_p2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct troubleshooting verb:',
      sourceSentence: 'If your smartphone freezes, press and hold the power key to _____ it.',
      targetSentence: 'If your smartphone freezes, press and hold the power key to reboot it.',
      options: [
        { id: '1', text: 'reboot', isCorrect: true },
        { id: '2', text: 'leak', isCorrect: false },
        { id: '3', text: 'overrate', isCorrect: false },
        { id: '4', text: 'landlord', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l115_p3',
      type: 'word_ordering',
      prompt: 'Assemble the troubleshooting instruction:',
      targetSentence: 'If you unplug the Wi-Fi router for ten seconds it resets',
      wordBank: ['If', 'you', 'unplug', 'the', 'Wi-Fi', 'router', 'for', 'ten', 'seconds', 'it', 'resets']
    },
    {
      id: 'ex_u08_l115_p4',
      type: 'error_correction',
      prompt: 'Fix the conditional clause error in the sentence:',
      sourceSentence: 'If you will download the new software, your computer will run faster.',
      targetSentence: 'If you download the new software, your computer will run faster.',
      explanation: 'Remove "will" from the if-clause: "If you download...".'
    },
    {
      id: 'ex_u08_l115_p5',
      type: 'translation',
      prompt: 'Translate into English: "यदि आप पासवर्ड भूल जाते हैं, तो आप इसे ईमेल द्वारा रीसेट कर सकते हैं।"',
      sourceSentence: 'यदि आप पासवर्ड भूल जाते हैं, तो आप इसे ईमेल द्वारा रीसेट कर सकते हैं।',
      targetSentence: 'If you forget your password, you can reset it by email.',
      wordBank: ['If', 'you', 'forget', 'your', 'password', 'you', 'can', 'reset', 'it', 'by', 'email']
    },
    {
      id: 'ex_u08_l115_p6',
      type: 'match_pairs',
      prompt: 'Match technology terms with their definitions:',
      options: [
        { id: 'm1', text: 'Reboot' },
        { id: 'm1_m', text: 'Restart device / पुनः आरंभ करना' },
        { id: 'm2', text: 'Browser cache' },
        { id: 'm2_m', text: 'Temporary web files / अस्थायी मेमोरी' },
        { id: 'm3', text: 'Troubleshoot' },
        { id: 'm3_m', text: 'Diagnose problems / निवारण करना' },
        { id: 'm4', text: 'Backup' },
        { id: 'm4_m', text: 'Secondary data copy / सुरक्षित प्रतिलिपि' }
      ]
    },
    {
      id: 'ex_u08_l115_p7',
      type: 'listening',
      prompt: 'Listen to the technical support instruction:',
      audioText: 'If the application continues to crash, uninstall it and download the latest version from the app store.',
      targetSentence: 'If the application continues to crash, uninstall it and download the latest version from the app store.',
      options: [
        { id: '1', text: 'Uninstall and download latest version if crashing continues', isCorrect: true },
        { id: '2', text: 'Buy a new computer immediately', isCorrect: false },
        { id: '3', text: 'Leave the device on without internet', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l115_p8',
      type: 'speaking',
      prompt: 'Speak this conditional technical instruction clearly:',
      targetSentence: 'If you restart the router, your internet connection will be restored.',
      audioText: 'If you restart the router, your internet connection will be restored.'
    },
    {
      id: 'ex_u08_l115_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the best response when helping with a tech issue:',
      sourceSentence: 'User: My browser displays an error message on this site.\nIT Tech: _____',
      targetSentence: 'IT Tech: If you clear your browser cache and refresh, it will work properly.',
      options: [
        { id: '1', text: 'If you clear your browser cache and refresh, it will work properly.', isCorrect: true },
        { id: '2', text: 'I lost my luggage at customs.', isCorrect: false },
        { id: '3', text: 'I am afraid I have no receipt.', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l115_p10',
      type: 'listen_and_type',
      prompt: 'Listen and write down the sentence:',
      audioText: 'Always back up your files before installing major updates.',
      targetSentence: 'Always back up your files before installing major updates.',
      wordBank: ['Always', 'back', 'up', 'your', 'files', 'before', 'installing', 'major', 'updates']
    }
  ],
  review: [
    {
      id: 'ex_u08_l115_r1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses a technical fact (Zero Conditional)?',
      question: 'Which sentence correctly expresses a technical fact (Zero Conditional)?',
      options: [
        'When you click the link, the webpage opens immediately.',
        'When you click the link, the webpage will opening.',
        'When you will click, it opens.',
        'When you clicked, it will open.'
      ],
      correctAnswer: 'When you click the link, the webpage opens immediately.',
      explanation: 'Zero conditional uses Present Simple in both clauses for universal system behaviors.'
    },
    {
      id: 'ex_u08_l115_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the phrasal verb:',
      sourceSentence: 'My smartphone ran _____ of battery during the long flight.',
      targetSentence: 'My smartphone ran out of battery during the long flight.',
      options: [
        { id: '1', text: 'out', isCorrect: true },
        { id: '2', text: 'off', isCorrect: false },
        { id: '3', text: 'away', isCorrect: false },
        { id: '4', text: 'down', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l115_r3',
      type: 'word_ordering',
      prompt: 'Assemble the digital security advice:',
      targetSentence: 'Use two-factor authentication to keep your online banking account secure',
      wordBank: ['Use', 'two-factor', 'authentication', 'to', 'keep', 'your', 'online', 'banking', 'account', 'secure']
    },
    {
      id: 'ex_u08_l115_r4',
      type: 'error_correction',
      prompt: 'Fix the verb form in this instruction:',
      sourceSentence: 'If the screen freezes, holding down the power button for ten seconds.',
      targetSentence: 'If the screen freezes, hold down the power button for ten seconds.',
      explanation: 'Use the base imperative verb "hold", not "holding".'
    },
    {
      id: 'ex_u08_l115_r5',
      type: 'translation',
      prompt: 'Translate into English: "यदि आप चार्जर प्लग करते हैं, तो बैटरी तुरंत चार्ज होने लगेगी।"',
      sourceSentence: 'यदि आप चार्जर प्लग करते हैं, तो बैटरी तुरंत चार्ज होने लगेगी।',
      targetSentence: 'If you plug in the charger, the battery will start charging immediately.',
      wordBank: ['If', 'you', 'plug', 'in', 'the', 'charger', 'the', 'battery', 'will', 'start', 'charging', 'immediately']
    },
    {
      id: 'ex_u08_l115_r6',
      type: 'speaking',
      prompt: 'Speak this sentence with clear pronunciation:',
      targetSentence: 'If you update your operating system, your device will run more efficiently.',
      audioText: 'If you update your operating system, your device will run more efficiently.'
    },
    {
      id: 'ex_u08_l115_r7',
      type: 'recognition',
      prompt: 'Identify what a "glitch" is:',
      question: 'What is a glitch in technology?',
      options: ['A temporary malfunction in software or hardware', 'A permanent destruction of a computer'],
      correctAnswer: 'A temporary malfunction in software or hardware',
      explanation: 'A glitch is a temporary minor fault or error.'
    },
    {
      id: 'ex_u08_l115_r8',
      type: 'fill_blank',
      prompt: 'Select the correct verb for data synchronization:',
      sourceSentence: 'My notes automatically _____ between my tablet and laptop.',
      targetSentence: 'My notes automatically sync between my tablet and laptop.',
      options: [
        { id: '1', text: 'sync', isCorrect: true },
        { id: '2', text: 'leak', isCorrect: false },
        { id: '3', text: 'rebook', isCorrect: false },
        { id: '4', text: 'postpone', isCorrect: false }
      ]
    }
  ],
  assessment: [
    {
      id: 'ex_u08_l115_a1',
      type: 'multiple_choice',
      prompt: 'Choose the sentence with correct conditional structure for troubleshooting:',
      question: 'Choose the sentence with correct conditional structure for troubleshooting:',
      options: [
        'If the Wi-Fi connection drops, restart the router.',
        'If the Wi-Fi connection will drop, restart router.',
        'If you will restart the router, the Wi-Fi will connects.',
        'If Wi-Fi drops, you restarting router.'
      ],
      correctAnswer: 'If the Wi-Fi connection drops, restart the router.',
      explanation: '"If + Present Simple, Imperative" is the classic technical instruction form.'
    },
    {
      id: 'ex_u08_l115_a2',
      type: 'word_ordering',
      prompt: 'Construct the assessment statement:',
      targetSentence: 'Always back up your important documents to cloud storage securely',
      wordBank: ['Always', 'back', 'up', 'your', 'important', 'documents', 'to', 'cloud', 'storage', 'securely']
    },
    {
      id: 'ex_u08_l115_a3',
      type: 'fill_blank',
      prompt: 'Complete with the appropriate term:',
      sourceSentence: 'The technician helped me _____ why the network connection failed.',
      targetSentence: 'The technician helped me troubleshoot why the network connection failed.',
      options: [
        { id: '1', text: 'troubleshoot', isCorrect: true },
        { id: '2', text: 'memorize', isCorrect: false },
        { id: '3', text: 'exchange', isCorrect: false },
        { id: '4', text: 'flicker', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l115_a4',
      type: 'translation',
      prompt: 'Translate into English: "यदि आप इस ऐप को इंस्टॉल करते हैं, तो यह आपकी फाइलों को स्वचालित रूप से सिंक करेगा।"',
      sourceSentence: 'यदि आप इस ऐप को इंस्टॉल करते हैं, तो यह आपकी फाइलों को स्वचालित रूप से सिंक करेगा।',
      targetSentence: 'If you install this app, it will sync your files automatically.',
      wordBank: ['If', 'you', 'install', 'this', 'app', 'it', 'will', 'sync', 'your', 'files', 'automatically']
    },
    {
      id: 'ex_u08_l115_a5',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sourceSentence: 'If you will contact technical support, they will help you immediately.',
      targetSentence: 'If you contact technical support, they will help you immediately.',
      explanation: 'Do not use "will" after "if".'
    },
    {
      id: 'ex_u08_l115_a6',
      type: 'listening',
      prompt: 'Listen to the technical advice:',
      audioText: 'If you enable automatic updates, your operating system will stay secure against vulnerabilities.',
      targetSentence: 'If you enable automatic updates, your operating system will stay secure against vulnerabilities.',
      options: [
        { id: '1', text: 'Automatic updates keep system secure against vulnerabilities', isCorrect: true },
        { id: '2', text: 'Turn off all updates permanently', isCorrect: false },
        { id: '3', text: 'Never connect your device to internet', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l115_a7',
      type: 'speaking',
      prompt: 'Speak this mastery statement clearly:',
      targetSentence: 'If you clear your browser cache, the technical glitch will disappear.',
      audioText: 'If you clear your browser cache, the technical glitch will disappear.'
    },
    {
      id: 'ex_u08_l115_a8',
      type: 'personal_production',
      prompt: 'Write two conditional sentences explaining how to solve a common computer or phone problem:',
      targetSentence: 'If your phone screen freezes, press and hold the power button to reboot it. If the problem continues, contact technical support.'
    }
  ]
};

// =========================================================================
// LESSON 116: Describing Objects, Materials & Everyday Inventions
// =========================================================================
export const LESSON_116_CONFIG: LessonConfigA2 = {
  num: 116,
  title: 'Describing Objects, Materials & Everyday Inventions',
  icon: '🔬',
  estMin: 25,
  objTitle: 'Describing Physical Objects, Sustainable Materials & Everyday Inventions',
  objDesc: 'Describe the shape, material, origin, and functionality of objects, tools, and everyday inventions using Present Simple Passive (is made of, are produced) and Past Simple Passive (was invented by).',
  objHi: 'वस्तुओं के आकार, सामग्री, उत्पत्ति और आविष्कारों का वर्णन करना सीखें।',
  objEs: 'Describir objetos, materiales e inventos cotidianos usando la Voz Pasiva (is made of, was invented by).',
  canDo: [
    'I can describe what objects are made of (wood, glass, ceramic, stainless steel, recycled plastic).',
    'I can talk about inventions and discoveries using Past Simple Passive ("It was invented in... by...").',
    'I can describe how products are produced and used using Present Simple Passive ("These are manufactured in...").',
    'I can describe object attributes (waterproof, durable, lightweight, eco-friendly).'
  ],
  canDoHi: [
    'मैं बता सकता हूँ कि वस्तुएं किस सामग्री से बनी हैं (लकड़ी, कांच, सिरेमिक, स्टेनलेस स्टील)।',
    'मैं "It was invented in... by..." का प्रयोग करके आविष्कारों के बारे में बात कर सकता हूँ।',
    'मैं "These are manufactured in..." का प्रयोग करके उत्पादन प्रक्रिया का वर्णन कर सकता हूँ।',
    'मैं वस्तुओं की विशेषताओं (वाटरप्रूफ, टिकाऊ, हल्का, पर्यावरण-अनुकूल) का वर्णन कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir de qué están hechos los objetos (madera, vidrio, acero inoxidable).',
    'Puedo hablar de inventos usando el Pasado Pasivo ("It was invented by...").',
    'Puedo describir cómo se producen y usan los productos con el Presente Pasivo.',
    'Puedo describir atributos (impermeable, duradero, ligero, ecológico).'
  ],
  vocab: [
    { w: 'material', p: '/məˈtɪəriəl/', m: 'the matter from which a thing is or can be made', hi: 'सामग्री / पदार्थ', es: 'material', fr: 'matière / matériau', de: 'Material / Werkstoff', pt: 'material', zh: '材料 / 材质', ar: 'مادة / قماش', ja: '素材 / 材料', ru: 'материал', ex: 'This eco-friendly bottle is made from sustainable materials.', exHi: 'यह पर्यावरण-अनुकूल बोतल टिकाऊ सामग्री से बनी है।', exEs: 'Esta botella ecológica está hecha de materiales sostenibles.', ic: '🧱' },
    { w: 'invent', p: '/ɪnˈvent/', m: 'create or design something that has not existed before', hi: 'आविष्कार करना', es: 'inventar', fr: 'inventer', de: 'erfinden', pt: 'inventar', zh: '发明', ar: 'يخترع', ja: '発明する', ru: 'изобретать', ex: 'The telephone was invented by Alexander Graham Bell in 1876.', exHi: 'टेलीफोन का आविष्कार 1876 में अलेक्जेंडर ग्राहम बेल द्वारा किया गया था।', exEs: 'El teléfono fue inventado por Alexander Graham Bell en 1876.', ic: '💡' },
    { w: 'manufacture', p: '/ˌmænjuˈfæktʃər/', m: 'make something on a large scale using machinery', hi: 'उत्पादन करना / निर्माण करना', es: 'fabricar / manufacturar', fr: 'fabriquer / confectionner', de: 'herstellen / produzieren', pt: 'fabricar / manufaturar', zh: '制造 / 生产', ar: 'يصنع / ينتج', ja: '製造する', ru: 'производить / изготовлять', ex: 'These electric vehicles are manufactured in a modern solar-powered factory.', exHi: 'इन इलेक्ट्रिक वाहनों का निर्माण एक आधुनिक सौर ऊर्जा चालित कारखाने में किया जाता है।', exEs: 'Estos vehículos eléctricos se fabrican en una fábrica moderna.', ic: '🏭' },
    { w: 'ceramic', p: '/səˈræmɪk/', m: 'made of clay and hardened by heat', hi: 'सिरेमिक / चीनी मिट्टी का', es: 'cerámica', fr: 'céramique', de: 'Keramik', pt: 'cerâmica', zh: '陶瓷的', ar: 'خزف / سيراميك', ja: '陶器の / セラミックの', ru: 'керамика / керамический', ex: 'She drinks her morning coffee from a handmade ceramic mug.', exHi: 'वह हस्तनिर्मित सिरेमिक मग से अपनी सुबह की कॉफी पीती है।', exEs: 'Ella bebe su café en una taza de cerámica hecha a mano.', ic: '☕' },
    { w: 'stainless steel', p: '/ˌsteɪnləs ˈstiːl/', m: 'a form of steel containing chromium, resistant to rust and corrosion', hi: 'स्टेनलेस स्टील (जंगरोधी इस्पात)', es: 'acero inoxidable', fr: 'acier inoxydable', de: 'Edelstahl / rostfreier Stahl', pt: 'aço inoxidável', zh: '不锈钢', ar: 'فولاذ مقاوم للصدأ', ja: 'ステンレス鋼', ru: 'нержавеющая сталь', ex: 'The kitchen cutlery is crafted from high-grade stainless steel.', exHi: 'रसोई के बर्तन उच्च श्रेणी के स्टेनलेस स्टील से तैयार किए गए हैं।', exEs: 'Los cubiertos están hechos de acero inoxidable de alta calidad.', ic: '🍴' },
    { w: 'durable', p: '/ˈdjʊərəbl/', m: 'able to withstand wear, pressure, or damage; hard-wearing', hi: 'टिकाऊ / मजबूत', es: 'duradero / resistente', fr: 'durable / résistant', de: 'langlebig / strapazierfähig', pt: 'durável / resistente', zh: '耐用的', ar: 'متين / يدوم طويلاً', ja: '耐久性のある / 丈夫な', ru: 'прочный / долговечный', ex: 'Leather boots are very durable and ideal for mountain hiking.', exHi: 'चमड़े के जूते बहुत टिकाऊ और पहाड़ी हाइकिंग के लिए आदर्श होते हैं।', exEs: 'Las botas de cuero son muy duraderas e ideales para montaña.', ic: '🥾' },
    { w: 'waterproof', p: '/ˈwɔːtəpruːf/', m: 'impervious to water; not allowing water to pass through', hi: 'वाटरप्रूफ / जलरोधी', es: 'impermeable / resistente al agua', fr: 'imperméable', de: 'wasserdicht', pt: 'impermeável', zh: '防水的', ar: 'مقاوم للماء', ja: '防水の', ru: 'водонепроницаемый', ex: 'This watch is waterproof up to fifty meters underwater.', exHi: 'यह घड़ी पानी के भीतर पचास मीटर तक वाटरप्रूफ है।', exEs: 'Este reloj es impermeable hasta cincuenta metros.', ic: '⌚' },
    { w: 'lightweight', p: '/ˈlaɪtweɪt/', m: 'of thin material or having little weight', hi: 'हल्का / कम वजन का', es: 'ligero / liviano', fr: 'léger', de: 'leicht / leichtgewichtig', pt: 'leve', zh: '轻巧的 / 轻便的', ar: 'خفيف الوزن', ja: '軽量の', ru: 'легкий / легковесный', ex: 'The new laptop is extremely lightweight and easy to carry.', exHi: 'नया लैपटॉप बेहद हल्का और ले जाने में आसान है।', exEs: 'El nuevo portátil es sumamente ligero y fácil de llevar.', ic: '🪶' },
    { w: 'recycle', p: '/ˌriːˈsaɪkl/', m: 'convert waste into reusable material', hi: 'पुनर्चक्रण करना / रीसायकल करना', es: 'reciclar', fr: 'recycler', de: 'wiederverwerten / recyceln', pt: 'reciclar', zh: '回收利用', ar: 'يعيد تدوير', ja: 'リサイクルする', ru: 'перерабатывать', ex: 'Glass bottles and aluminum cans can be recycled endlessly.', exHi: 'कांच की बोतलों और एल्युमिनियम के डिब्बों को बार-बार रीसायकल किया जा सकता है।', exEs: 'Las botellas de vidrio y latas se pueden reciclar.', ic: '♻️' },
    { w: 'discovery', p: '/dɪˈskʌvəri/', m: 'the action or process of finding something previously unknown', hi: 'खोज / नई जानकारी पाना', es: 'descubrimiento', fr: 'découverte', de: 'Entdeckung', pt: 'descoberta', zh: '发现', ar: 'اكتشاف', ja: '発見', ru: 'открытие', ex: 'Penicillin was a life-saving medical discovery made by Alexander Fleming.', exHi: 'पेनिसिलिन अलेक्जेंडर फ्लेमिंग द्वारा की गई एक जीवन रक्षक चिकित्सा खोज थी।', exEs: 'La penicilina fue un descubrimiento médico que salvó vidas.', ic: '🧪' },
    { w: 'synthetic', p: '/sɪnˈθetɪk/', m: 'made by chemical synthesis, especially to imitate a natural product', hi: 'सिंथेटिक / कृत्रिम', es: 'sintético / artificial', fr: 'synthétique', de: 'synthetisch / künstlich', pt: 'sintético', zh: '合成的 / 人造的', ar: 'اصطناعي / تركيبي', ja: '合成の / 人工の', ru: 'синтетический', ex: 'Nylon is a popular synthetic fabric used in athletic clothing.', exHi: 'नायलॉन एथलेटिक कपड़ों में इस्तेमाल होने वाला एक लोकप्रिय सिंथेटिक कपड़ा है।', exEs: 'El nailon es una tela sintética popular en ropa deportiva.', ic: '🧵' },
    { w: 'biodegradable', p: '/ˌbaɪəʊdɪˈɡreɪdəbl/', m: 'capable of being decomposed by biological agents like bacteria', hi: 'बायोडिग्रेडेबल / प्राकृतिक रूप से नष्ट होने योग्य', es: 'biodegradable', fr: 'biodégradable', de: 'biologisch abbaubar', pt: 'biodegradável', zh: '可生物降解的', ar: 'قابل للتحلل الحيوي', ja: '生分解性の', ru: 'биоразлагаемый', ex: 'These coffee cups are made from biodegradable plant starch.', exHi: 'ये कॉफी कप बायोडिग्रेडेबल पौधे के स्टार्च से बनाए गए हैं।', exEs: 'Estos vasos de café están hechos de almidón biodegradable.', ic: '🌱' },
    { w: 'gadget', p: '/ˈɡædʒɪt/', m: 'a small mechanical or electronic device with a practical purpose', hi: 'गैजेट / छोटा उपयोगी उपकरण', es: 'artilugio / aparato / gadget', fr: 'gadget / petit appareil', de: 'Gerät / Gadget', pt: 'dispositivo / gadget', zh: '小器具 / 小玩意', ar: 'أداة ذكية / جهاز صغير', ja: '小型電子機器 / ガジェット', ru: 'гаджет / приспособление', ex: 'This kitchen gadget chops vegetables in seconds.', exHi: 'यह किचन गैजेट सेकंडों में सब्जियां काट देता है।', exEs: 'Este aparato de cocina pica verduras en segundos.', ic: '📱' },
    { w: 'produce', p: '/prəˈdjuːs/', m: 'make or manufacture from components or raw materials', hi: 'उत्पादन करना / पैदा करना', es: 'producir', fr: 'produire', de: 'produzieren / herstellen', pt: 'produzir', zh: '出产 / 生产', ar: 'ينتج', ja: '生産する', ru: 'производить', ex: 'Solar panels produce clean renewable electricity.', exHi: 'सोलर पैनल स्वच्छ नवीकरणीय बिजली का उत्पादन करते हैं।', exEs: 'Los paneles solares producen electricidad limpia.', ic: '☀️' },
    { w: 'design', p: '/dɪˈzaɪn/', m: 'decide upon the look and functioning of a building or garment', hi: 'डिजाइन करना / रूपरेखा बनाना', es: 'diseñar', fr: 'concevoir / dessiner', de: 'entwerfen / designen', pt: 'projetar / desenhar', zh: '设计', ar: 'يصمم', ja: '設計する / デザインする', ru: 'проектировать / разрабатывать', ex: 'The ergonomic office chair was designed in Scandinavia.', exHi: 'एर्गोनोमिक कार्यालय कुर्सी स्कैंडिनेविया में डिजाइन की गई थी।', exEs: 'La silla de oficina ergonómica fue diseñada en Escandinavia.', ic: '📐' },
    { w: 'patent', p: '/ˈpætnt/', m: 'a government authority or licence conferring a sole right to make an invention', hi: 'पेटेंट / एकाधिकार', es: 'patente', fr: 'brevet', de: 'Patent', pt: 'patente', zh: '专利', ar: 'براءة اختراع', ja: '特許', ru: 'патент', ex: 'The engineer registered a patent for her new solar battery design.', exHi: 'इंजीनियर ने अपने नए सौर बैटरी डिजाइन के लिए पेटेंट पंजीकृत कराया।', exEs: 'La ingeniera registró una patente para su batería solar.', ic: '📜' },
    { w: 'portable', p: '/ˈpɔːtəbl/', m: 'easily carried or moved, especially because of being a lighter and smaller version', hi: 'पोर्टेबल / कहीं भी ले जाने योग्य', es: 'portátil / transportable', fr: 'portable', de: 'tragbar / mobil', pt: 'portátil', zh: '便携的', ar: 'محمول', ja: '携帯用の / 持ち運び可能な', ru: 'портативный / переносной', ex: 'A portable Bluetooth speaker is great for outdoor picnics.', exHi: 'पोर्टेबल ब्लूटूथ स्पीकर बाहरी पिकनिक के लिए बहुत बढ़िया है।', exEs: 'Un altavoz Bluetooth portátil es genial para picnics.', ic: '📻' },
    { w: 'timber', p: '/ˈtɪmbər/', m: 'wood prepared for use in building and carpentry', hi: 'इमारती लकड़ी (टिम्बर)', es: 'madera de construcción', fr: 'bois de charpente', de: 'Bauholz', pt: 'madeira', zh: '木材', ar: 'خشب البناء', ja: '材木 / 木材', ru: 'древесина / лесоматериалы', ex: 'The cabin was constructed using locally sourced timber.', exHi: 'केबिन का निर्माण स्थानीय रूप से प्राप्त लकड़ी का उपयोग करके किया गया था।', exEs: 'La cabaña fue construida con madera local.', ic: '🪵' },
    { w: 'texture', p: '/ˈtekstʃər/', m: 'the feel, appearance, or consistency of a surface or a substance', hi: 'बनावट / स्पर्श अहसास', es: 'textura', fr: 'texture', de: 'Textur / Oberflächenbeschaffenheit', pt: 'textura', zh: '质地 / 纹理', ar: 'ملمس / بنية', ja: '手触り / 質感', ru: 'текстура / фактура', ex: 'The handmade paper has a rough and natural texture.', exHi: 'हस्तनिर्मित कागज में एक खुरदरी और प्राकृतिक बनावट होती है।', exEs: 'El papel hecho a mano tiene una textura rugosa.', ic: '🖐️' },
    { w: 'eco-friendly', p: '/ˌiːkəʊ ˈfrendli/', m: 'not harmful to the environment', hi: 'पर्यावरण-अनुकूल (इको-फ्रेंडली)', es: 'ecológico / respetuoso con el medio ambiente', fr: 'écologique', de: 'umweltfreundlich', pt: 'ecológico', zh: '环保的', ar: 'صديق للبيئة', ja: '環境に優しい', ru: 'экологически чистый', ex: 'We prefer using eco-friendly reusable shopping bags.', exHi: 'हम पर्यावरण-अनुकूल पुन: प्रयोज्य शॉपिंग बैग का उपयोग करना पसंद करते हैं।', exEs: 'Preferimos usar bolsas de compras reutilizables y ecológicas.', ic: '🌿' }
  ],
  chunks: [
    { phrase: 'is made of / made from', meaning: 'composition of an object', hi: 'से बना है (सामग्री)', es: 'está hecho de', fr: 'est fait de / fabriqué à partir de', de: 'ist gemacht aus / besteht aus', pt: 'é feito de', zh: '由...制成', ar: 'مصنوع من', ja: '〜で作られている', ru: 'сделан из...', note: '"Made of" when material doesn\'t chemically change (wood/glass); "Made from" when it changes (paper from wood).', ic: '🧱' },
    { phrase: 'was invented by', meaning: 'originator of a technological breakthrough', hi: 'के द्वारा आविष्कार किया गया था', es: 'fue inventado por', fr: 'a été inventé par', de: 'wurde erfunden von', pt: 'foi inventado por', zh: '由...发明', ar: 'تم اختراعه بواسطة', ja: '〜によって発明された', ru: 'был изобретен (кем-то)', note: 'Past Simple Passive + by agent.', ic: '💡' },
    { phrase: 'was designed in', meaning: 'geographical or historical design origin', hi: 'में डिजाइन किया गया था', es: 'fue diseñado en', fr: 'a été conçu en', de: 'wurde entworfen in', pt: 'foi projetado em', zh: '在...设计', ar: 'تم تصميمه في', ja: '〜でデザインされた', ru: 'был спроектирован в...', note: '"This smartphone was designed in California."', ic: '📐' },
    { phrase: 'are manufactured in', meaning: 'place of industrial production', hi: 'में निर्मित/उत्पादित किए जाते हैं', es: 'son fabricados en', fr: 'sont fabriqués en', de: 'werden hergestellt in', pt: 'são fabricados em', zh: '在...制造', ar: 'يتم تصنيعها في', ja: '〜で製造されている', ru: 'производятся в...', note: 'Present Simple Passive for general facts.', ic: '🏭' },
    { phrase: 'it is used for', meaning: 'function and purpose of a tool', hi: 'इसका उपयोग... के लिए किया जाता है', es: 'se utiliza para / se usa para', fr: 'c\'est utilisé pour', de: 'es wird verwendet für', pt: 'é usado para', zh: '它用于...', ar: 'يُستخدم لـ...', ja: '〜のために使われる', ru: 'это используется для...', note: 'Followed by gerund: "It is used for measuring temperatures."', ic: '⚙️' },
    { phrase: 'resistant to water and heat', meaning: 'unaffected by moisture or high temperature', hi: 'पानी और गर्मी से अप्रभावित (प्रतिरोधी)', es: 'resistente al agua y al calor', fr: 'résistant à l\'eau et à la chaleur', de: 'wasser- und hitzebeständig', pt: 'resistente à água e ao calor', zh: '耐水耐热', ar: 'مقاوم للماء والحرارة', ja: '耐水性と耐熱性がある', ru: 'устойчив к воде и теплу', note: 'Quality description adjective phrase.', ic: '🛡️' },
    { phrase: 'made from recycled plastic', meaning: 'sustainable ecological product origin', hi: 'पुनर्चक्रित प्लास्टिक से बना हुआ', es: 'hecho de plástico reciclado', fr: 'fabriqué à partir de plastique recyclé', de: 'hergestellt aus recyceltem Kunststoff', pt: 'feito de plástico reciclado', zh: '由回收塑料制成', ar: 'مصنوع من البلاستيك المعاد تدويره', ja: '再生プラスチックから作られた', ru: 'сделан из переработанного пластика', note: 'Key green manufacturing collocation.', ic: '♻️' },
    { phrase: 'play a vital role in everyday life', meaning: 'be extremely important and common', hi: 'दैनिक जीवन में महत्वपूर्ण भूमिका निभाना', es: 'desempeñar un papel vital en la vida diaria', fr: 'jouer un rôle essentiel dans la vie quotidienne', de: 'eine wichtige Rolle im Alltag spielen', pt: 'desempenhar um papel vital no dia a dia', zh: '在日常生活中扮演重要角色', ar: 'يلعب دوراً حيوياً في الحياة اليومية', ja: '日常生活で極めて重要な役割を果たす', ru: 'играть важную роль в повседневной жизни', note: 'Evaluative concluding idiom.', ic: '🌟' }
  ],
  grammar: {
    title: 'Passive Voice (Present Simple & Past Simple) for Describing Objects & Inventions',
    concept: 'Forming the Passive Voice using BE (is/are/was/were) + Past Participle to focus on the object, process, or invention rather than the agent.',
    patterns: [
      {
        title: 'Present Simple Passive (Materials & Manufacturing)',
        structure: 'Subject + is / are + Past Participle (made / produced / manufactured)',
        rule: 'Use Present Simple Passive to describe general facts, regular production, and material compositions.',
        examples: [
          { en: 'These organic cotton shirts are manufactured in Portugal.', hi: 'ये जैविक सूती शर्ट पुर्तगाल में निर्मित की जाती हैं।', es: 'Estas camisas de algodón orgánico se fabrican en Portugal.' },
          { en: 'Glass is made from heated sand and minerals.', hi: 'कांच गर्म रेत और खनिजों से बनाया जाता है।', es: 'El vidrio se hace de arena y minerales calentados.' }
        ]
      },
      {
        title: 'Past Simple Passive (Inventions & Historical Discoveries)',
        structure: 'Subject + was / were + Past Participle + by + Agent',
        rule: 'Use Past Simple Passive with "by" to identify the inventor, designer, or creator of a past innovation.',
        examples: [
          { en: 'The World Wide Web was invented by Tim Berners-Lee in 1989.', hi: 'वर्ल्ड वाइड वेब का आविष्कार 1989 में टिम बर्नर्स-ली द्वारा किया गया था।', es: 'La World Wide Web fue inventada por Tim Berners-Lee en 1989.' },
          { en: 'These historic stone temples were built over a thousand years ago.', hi: 'ये ऐतिहासिक पत्थर के मंदिर एक हजार से अधिक वर्ष पहले बनाए गए थे।', es: 'Estos templos de piedra fueron construidos hace más de mil años.' }
        ]
      },
      {
        title: 'Describing Purpose with "Used for + -ing" vs "Used to + Verb"',
        structure: 'It is used for + Verb-ing / It is used to + Base Verb',
        rule: 'State function using either "used for" with a gerund or "used to" with a base infinitive.',
        examples: [
          { en: 'This laser sensor is used for detecting small cracks in steel.', hi: 'इस लेजर सेंसर का उपयोग स्टील में छोटी दरारों का पता लगाने के लिए किया जाता है।', es: 'Este sensor láser se usa para detectar grietas en acero.' },
          { en: 'It is used to measure ambient temperature.', hi: 'इसका उपयोग आसपास के तापमान को मापने के लिए किया जाता है।', es: 'Se utiliza para medir la temperatura ambiente.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'The electric car was invent in 1888.',
      cor: 'The electric car was invented in 1888.',
      exp: 'Passive voice requires the past participle (invented), not base form (invent).',
      hi: 'Passive voice में Past Participle (invented) का प्रयोग करें: "was invented"।'
    },
    {
      inc: 'These shoes are make from leather.',
      cor: 'These shoes are made from leather. / These shoes are made of leather.',
      exp: 'Use the irregular past participle "made" (not "make").',
      hi: '"Make" का past participle "made" है: "are made of leather"।'
    },
    {
      inc: 'The telephone was invented from Alexander Graham Bell.',
      cor: 'The telephone was invented by Alexander Graham Bell.',
      exp: 'Use the preposition "by" (not "from") to introduce the creator/agent in passive voice.',
      hi: 'Passive voice में कर्ता (agent) के पहले "by" आता है: "invented by..."।'
    },
    {
      inc: 'This tool is used for to cut glass.',
      cor: 'This tool is used for cutting glass. / This tool is used to cut glass.',
      exp: 'Use "used for + -ing" OR "used to + base verb", but never "used for to cut".',
      hi: '"Used for cutting" या "used to cut" कहें।'
    },
    {
      inc: 'This bottle is made by recycled glass.',
      cor: 'This bottle is made of recycled glass. / This bottle is made from recycled glass.',
      exp: 'Use "of / from" for materials, and reserve "by" for people/companies.',
      hi: 'सामग्री के लिए "made of / from" का प्रयोग करें, "made by" निर्माता के लिए आता है।'
    }
  ],
  dialogues: [
    {
      title: 'Discussing Modern Sustainable Product Design',
      context: 'Hannah shows a sustainable travel backpack to her friend Toby.',
      charA: { name: 'Hannah', av: '👩', role: 'Eco-Designer' },
      charB: { name: 'Toby', av: '👨', role: 'Curious Consumer' },
      turns: [
        { spk: 'Toby', text: 'Hannah, this backpack looks very sleek! What material is it made of?', hi: 'हन्ना, यह बैकपैक बहुत आकर्षक लग रहा है! यह किस सामग्री से बना है?', es: 'Hannah, ¡esta mochila se ve muy elegante! ¿De qué material está hecha?' },
        { spk: 'Hannah', text: 'The outer fabric is made entirely from recycled ocean plastic, and the zippers are crafted from durable stainless steel.', hi: 'बाहरी कपड़ा पूरी तरह से पुनर्चक्रित समुद्री प्लास्टिक से बना है, और ज़िप टिकाऊ स्टेनलेस स्टील से तैयार की गई हैं।', es: 'La tela exterior está hecha de plástico reciclado y las cremalleras son de acero inoxidable.' },
        { spk: 'Toby', text: 'That is incredible. Is it completely waterproof?', hi: 'यह अविश्वसनीय है। क्या यह पूरी तरह से वाटरप्रूफ है?', es: 'Es increíble. ¿Es completamente impermeable?' },
        { spk: 'Hannah', text: 'Yes, it was tested in heavy rainstorms, and the interior lining is coated with a waterproof barrier.', hi: 'हाँ, इसका भारी बारिश में परीक्षण किया गया था, और आंतरिक अस्तर एक जलरोधी परत से लेपित है।', es: 'Sí, fue probada bajo lluvia intensa y el interior tiene una barrera impermeable.' },
        { spk: 'Toby', text: 'Where was it designed and manufactured?', hi: 'इसे कहाँ डिजाइन और निर्मित किया गया था?', es: '¿Dónde fue diseñada y fabricada?' },
        { spk: 'Hannah', text: 'It was designed in Sweden and is manufactured ethically in Portugal.', hi: 'इसे स्वीडन में डिजाइन किया गया था और पुर्तगाल में नैतिक रूप से निर्मित किया जाता है।', es: 'Fue diseñada en Suecia y se fabrica éticamente en Portugal.' }
      ]
    },
    {
      title: 'Museum Tour of Famous Inventions',
      context: 'A museum guide explains the history of everyday communication devices to visitors.',
      charA: { name: 'Museum Guide', av: '👨‍🏫', role: 'Curator' },
      charB: { name: 'Visitor', av: '👩', role: 'Tourist' },
      turns: [
        { spk: 'Museum Guide', text: 'Welcome to the technology wing. Over here, we have the original radio transmitter.', hi: 'प्रौद्योगिकी विंग में आपका स्वागत है। यहाँ हमारे पास मूल रेडियो ट्रांसमीटर है।', es: 'Bienvenidos al ala de tecnología. Aquí tenemos el transmisor de radio original.' },
        { spk: 'Visitor', text: 'When was this first invented?', hi: 'इसका सबसे पहले आविष्कार कब हुआ था?', es: '¿Cuándo fue inventado por primera vez?' },
        { spk: 'Museum Guide', text: 'Long-distance wireless radio was demonstrated by Guglielmo Marconi in 1895. It was used to transmit emergency signals across oceans.', hi: 'लंबी दूरी के वायरलेस रेडियो का प्रदर्शन 1895 में गुग्लिल्मो मार्कोनी द्वारा किया गया था। इसका उपयोग महासागरों के पार आपातकालीन संकेत भेजने के लिए किया जाता था।', es: 'La radio inalámbrica fue demostrada por Marconi en 1895 para enviar señales de emergencia.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u08_l116_p1',
      type: 'multiple_choice',
      prompt: 'Select the sentence with correct Past Simple Passive voice:',
      question: 'Select the sentence with correct Past Simple Passive voice:',
      options: [
        'The printing press was invented by Johannes Gutenberg.',
        'The printing press was invent by Johannes Gutenberg.',
        'The printing press invented from Johannes Gutenberg.',
        'The printing press is invent by Gutenberg in 1440.'
      ],
      correctAnswer: 'The printing press was invented by Johannes Gutenberg.',
      explanation: 'Use "was + past participle (invented) + by + agent".'
    },
    {
      id: 'ex_u08_l116_p2',
      type: 'fill_blank',
      prompt: 'Complete with the correct material phrase:',
      sourceSentence: 'This lightweight water bottle is made _____ stainless steel.',
      targetSentence: 'This lightweight water bottle is made of stainless steel.',
      options: [
        { id: '1', text: 'of', isCorrect: true },
        { id: '2', text: 'by', isCorrect: false },
        { id: '3', text: 'for', isCorrect: false },
        { id: '4', text: 'with to', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l116_p3',
      type: 'word_ordering',
      prompt: 'Assemble the passive manufacturing description:',
      targetSentence: 'These electric bicycles are manufactured in a green solar-powered factory',
      wordBank: ['These', 'electric', 'bicycles', 'are', 'manufactured', 'in', 'a', 'green', 'solar-powered', 'factory']
    },
    {
      id: 'ex_u08_l116_p4',
      type: 'error_correction',
      prompt: 'Fix the passive voice agent preposition error:',
      sourceSentence: 'Penicillin was discovered from Alexander Fleming in 1928.',
      targetSentence: 'Penicillin was discovered by Alexander Fleming in 1928.',
      explanation: 'Use "by" (not "from") to introduce the discoverer/creator.'
    },
    {
      id: 'ex_u08_l116_p5',
      type: 'translation',
      prompt: 'Translate into English: "यह घड़ी वाटरप्रूफ है और टिकाऊ सिरेमिक से बनी है।"',
      sourceSentence: 'यह घड़ी वाटरप्रूफ है और टिकाऊ सिरेमिक से बनी है।',
      targetSentence: 'This watch is waterproof and made of durable ceramic.',
      wordBank: ['This', 'watch', 'is', 'waterproof', 'and', 'made', 'of', 'durable', 'ceramic']
    },
    {
      id: 'ex_u08_l116_p6',
      type: 'match_pairs',
      prompt: 'Match materials and qualities with their definitions:',
      options: [
        { id: 'm1', text: 'Stainless steel' },
        { id: 'm1_m', text: 'Rust-resistant metal / स्टेनलेस स्टील' },
        { id: 'm2', text: 'Biodegradable' },
        { id: 'm2_m', text: 'Decomposes naturally / नष्ट होने योग्य' },
        { id: 'm3', text: 'Waterproof' },
        { id: 'm3_m', text: 'Impervious to water / जलरोधी' },
        { id: 'm4', text: 'Portable' },
        { id: 'm4_m', text: 'Easy to carry / कहीं भी ले जाने योग्य' }
      ]
    },
    {
      id: 'ex_u08_l116_p7',
      type: 'listening',
      prompt: 'Listen to the product description:',
      audioText: 'These eco-friendly sneakers are made from recycled ocean plastic and organic cotton.',
      targetSentence: 'These eco-friendly sneakers are made from recycled ocean plastic and organic cotton.',
      options: [
        { id: '1', text: 'Sneakers made from recycled plastic and organic cotton', isCorrect: true },
        { id: '2', text: 'Heavy leather boots made in the desert', isCorrect: false },
        { id: '3', text: 'Plastic toys imported from abroad', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l116_p8',
      type: 'speaking',
      prompt: 'Speak this passive voice sentence clearly:',
      targetSentence: 'The modern smartphone was designed to combine a phone, camera, and computer.',
      audioText: 'The modern smartphone was designed to combine a phone, camera, and computer.'
    },
    {
      id: 'ex_u08_l116_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the appropriate passive answer:',
      sourceSentence: 'Customer: Where are these ceramic bowls crafted?\nArtisan: _____',
      targetSentence: 'Artisan: They are crafted by local potters in our mountain workshop.',
      options: [
        { id: '1', text: 'They are crafted by local potters in our mountain workshop.', isCorrect: true },
        { id: '2', text: 'I would like to reschedule my flight.', isCorrect: false },
        { id: '3', text: 'My internet router froze today.', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l116_p10',
      type: 'listen_and_type',
      prompt: 'Listen and write down the sentence:',
      audioText: 'Glass bottles can be recycled many times.',
      targetSentence: 'Glass bottles can be recycled many times.',
      wordBank: ['Glass', 'bottles', 'can', 'be', 'recycled', 'many', 'times']
    }
  ],
  review: [
    {
      id: 'ex_u08_l116_r1',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes the function of a tool?',
      question: 'Which sentence correctly describes the function of a tool?',
      options: [
        'This gadget is used for opening metal cans.',
        'This gadget is used for to open metal cans.',
        'This gadget is used to opening metal cans.',
        'This gadget is using for open cans.'
      ],
      correctAnswer: 'This gadget is used for opening metal cans.',
      explanation: '"Is used for" must be followed by a gerund (opening).'
    },
    {
      id: 'ex_u08_l116_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct adjective:',
      sourceSentence: 'Titanium is a metal that is both extremely strong and surprisingly _____.',
      targetSentence: 'Titanium is a metal that is both extremely strong and surprisingly lightweight.',
      options: [
        { id: '1', text: 'lightweight', isCorrect: true },
        { id: '2', text: 'overrated', isCorrect: false },
        { id: '3', text: 'stranded', isCorrect: false },
        { id: '4', text: 'dissatisfied', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l116_r3',
      type: 'word_ordering',
      prompt: 'Assemble the history of invention sentence:',
      targetSentence: 'The steam engine was improved by James Watt in Scotland',
      wordBank: ['The', 'steam', 'engine', 'was', 'improved', 'by', 'James', 'Watt', 'in', 'Scotland']
    },
    {
      id: 'ex_u08_l116_r4',
      type: 'error_correction',
      prompt: 'Fix the passive participle error in the sentence:',
      sourceSentence: 'These wooden chairs were make by hand in a small village.',
      targetSentence: 'These wooden chairs were made by hand in a small village.',
      explanation: 'Use the past participle "made", not base form "make".'
    },
    {
      id: 'ex_u08_l116_r5',
      type: 'translation',
      prompt: 'Translate into English: "यह पर्यावरण-अनुकूल पैकेजिंग बायोडिग्रेडेबल सामग्री से बनाई जाती है।"',
      sourceSentence: 'यह पर्यावरण-अनुकूल पैकेजिंग बायोडिग्रेडेबल सामग्री से बनाई जाती है।',
      targetSentence: 'This eco-friendly packaging is made from biodegradable materials.',
      wordBank: ['This', 'eco-friendly', 'packaging', 'is', 'made', 'from', 'biodegradable', 'materials']
    },
    {
      id: 'ex_u08_l116_r6',
      type: 'speaking',
      prompt: 'Speak this sentence with clear expression:',
      targetSentence: 'These solar panels are designed to produce renewable energy throughout the year.',
      audioText: 'These solar panels are designed to produce renewable energy throughout the year.'
    },
    {
      id: 'ex_u08_l116_r7',
      type: 'recognition',
      prompt: 'Identify the difference between "invented" and "discovered":',
      question: 'What is the key difference between something invented and something discovered?',
      options: ['Inventions are created by humans; discoveries already existed in nature', 'They mean the exact same thing'],
      correctAnswer: 'Inventions are created by humans; discoveries already existed in nature',
      explanation: 'Inventions are man-made creations; discoveries reveal things already existing.'
    },
    {
      id: 'ex_u08_l116_r8',
      type: 'fill_blank',
      prompt: 'Select the correct preposition for materials:',
      sourceSentence: 'Traditional log cabins are built out _____ solid timber.',
      targetSentence: 'Traditional log cabins are built out of solid timber.',
      options: [
        { id: '1', text: 'of', isCorrect: true },
        { id: '2', text: 'by', isCorrect: false },
        { id: '3', text: 'with to', isCorrect: false },
        { id: '4', text: 'for', isCorrect: false }
      ]
    }
  ],
  assessment: [
    {
      id: 'ex_u08_l116_a1',
      type: 'multiple_choice',
      prompt: 'Choose the sentence with correct passive grammar and preposition:',
      question: 'Choose the sentence with correct passive grammar and preposition:',
      options: [
        'The electric light bulb was patented by Thomas Edison.',
        'The electric light bulb patented from Thomas Edison.',
        'The light bulb was patent by Thomas Edison.',
        'The light bulb is patented of Edison in 1879.'
      ],
      correctAnswer: 'The electric light bulb was patented by Thomas Edison.',
      explanation: '"Was patented by" correctly combines Past Simple Passive with agent "by".'
    },
    {
      id: 'ex_u08_l116_a2',
      type: 'word_ordering',
      prompt: 'Construct the assessment statement:',
      targetSentence: 'This portable speaker is waterproof and made of recycled aluminum',
      wordBank: ['This', 'portable', 'speaker', 'is', 'waterproof', 'and', 'made', 'of', 'recycled', 'aluminum']
    },
    {
      id: 'ex_u08_l116_a3',
      type: 'fill_blank',
      prompt: 'Complete with the appropriate term:',
      sourceSentence: 'Leather is known for being extremely tough and _____ over many years.',
      targetSentence: 'Leather is known for being extremely tough and durable over many years.',
      options: [
        { id: '1', text: 'durable', isCorrect: true },
        { id: '2', text: 'unacceptable', isCorrect: false },
        { id: '3', text: 'overrated', isCorrect: false },
        { id: '4', text: 'urgent', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l116_a4',
      type: 'translation',
      prompt: 'Translate into English: "वर्ल्ड वाइड वेब का आविष्कार टिम बर्नर्स-ली द्वारा किया गया था।"',
      sourceSentence: 'वर्ल्ड वाइड वेब का आविष्कार टिम बर्नर्स-ली द्वारा किया गया था।',
      targetSentence: 'The World Wide Web was invented by Tim Berners-Lee.',
      wordBank: ['The', 'World', 'Wide', 'Web', 'was', 'invented', 'by', 'Tim', 'Berners-Lee']
    },
    {
      id: 'ex_u08_l116_a5',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sourceSentence: 'These organic ceramic plates are craft by local artists.',
      targetSentence: 'These organic ceramic plates are crafted by local artists.',
      explanation: 'Use the past participle "crafted", not base verb "craft".'
    },
    {
      id: 'ex_u08_l116_a6',
      type: 'listening',
      prompt: 'Listen to the product presentation:',
      audioText: 'This lightweight laptop case was designed in Denmark and is made from hundred percent recycled ocean plastics.',
      targetSentence: 'This lightweight laptop case was designed in Denmark and is made from hundred percent recycled ocean plastics.',
      options: [
        { id: '1', text: 'Designed in Denmark, made of 100% recycled ocean plastic', isCorrect: true },
        { id: '2', text: 'Made of heavy timber and steel', isCorrect: false },
        { id: '3', text: 'Imported from ancient Rome', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l116_a7',
      type: 'speaking',
      prompt: 'Speak this mastery statement clearly:',
      targetSentence: 'This device was invented to help people measure air quality in their homes.',
      audioText: 'This device was invented to help people measure air quality in their homes.'
    },
    {
      id: 'ex_u08_l116_a8',
      type: 'personal_production',
      prompt: 'Write two sentences describing an everyday object, what it is made of, and who invented or designed it:',
      targetSentence: 'My smartphone is made of glass and stainless steel. It was designed in California and is used for communication and work every day.'
    }
  ]
};

// =========================================================================
// LESSON 117: Health, Minor Illnesses & Pharmacy Advice
// =========================================================================
export const LESSON_117_CONFIG: LessonConfigA2 = {
  num: 117,
  title: 'Health, Minor Illnesses & Pharmacy Advice',
  icon: '💊',
  estMin: 25,
  objTitle: 'Describing Symptoms, Seeking Pharmacy Advice & Understanding Medication Dosage',
  objDesc: 'Communicate health symptoms, aches, and minor ailments to a doctor or pharmacist; understand prescriptions, dosage instructions (take two tablets every 8 hours after meals), and side effects.',
  objHi: 'स्वास्थ्य लक्षण, छोटी बीमारियों और फार्मेसी में दवा की खुराक और सलाह समझना सीखें।',
  objEs: 'Describir síntomas, consultar en la farmacia y comprender dosis de medicamentos y efectos secundarios.',
  canDo: [
    'I can describe physical symptoms (fever, sore throat, cough, dizzy, nausea, headache).',
    'I can ask a pharmacist for over-the-counter medicine for common ailments.',
    'I can understand dosage instructions ("Take one capsule every eight hours with water").',
    'I can ask about medication side effects and allergic reactions.'
  ],
  canDoHi: [
    'मैं शारीरिक लक्षणों (बुखार, गले में खराश, खांसी, चक्कर, सिरदर्द) का वर्णन कर सकता हूँ।',
    'मैं फार्मासिस्ट से सामान्य बीमारियों के लिए बिना पर्ची वाली दवा (OTC) मांग सकता हूँ।',
    'मैं खुराक के निर्देशों ("पानी के साथ हर आठ घंटे में एक कैप्सूल लें") को समझ सकता हूँ।',
    'मैं दवा के दुष्प्रभावों और एलर्जी के बारे में पूछताछ कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir síntomas físicos (fiebre, dolor de garganta, tos, mareo).',
    'Puedo pedir medicamentos de venta libre en la farmacia para dolencias comunes.',
    'Puedo entender instrucciones de dosificación ("Tomar una cápsula cada 8 horas").',
    'Puedo preguntar sobre efectos secundarios y alergias a medicamentos.'
  ],
  vocab: [
    { w: 'symptom', p: '/ˈsɪmptəm/', m: 'a physical or mental feature indicating a condition of disease', hi: 'लक्षण', es: 'síntoma', fr: 'symptôme', de: 'Symptom / Anzeichen', pt: 'sintoma', zh: '症状', ar: 'عَرَض مرض', ja: '症状', ru: 'симптом / признак', ex: 'A high fever and persistent cough are common flu symptoms.', exHi: 'तेज बुखार और लगातार खांसी फ्लू के आम लक्षण हैं।', exEs: 'Fiebre alta y tos persistente son síntomas de gripe.', ic: '🤒' },
    { w: 'prescription', p: '/prɪˈskrɪpʃn/', m: 'an instruction written by a medical practitioner that authorizes a patient to be issued medicine', hi: 'डॉक्टर का पर्चा / प्रिस्क्रिप्शन', es: 'receta médica / prescripción', fr: 'ordonnance médicale', de: 'Rezept / ärztliche Verordnung', pt: 'receita médica', zh: '处方 / 药方', ar: 'وصفة طبية / روجيتة', ja: '処方箋', ru: 'рецепт врача', ex: 'You need a doctor\'s prescription to buy this strong antibiotic.', exHi: 'इस मजबूत एंटीबायोटिक को खरीदने के लिए आपको डॉक्टर के पर्चे की आवश्यकता है।', exEs: 'Necesitas una receta médica para este antibiótico.', ic: '📄' },
    { w: 'pharmacist', p: '/ˈfɑːməsɪst/', m: 'a person who is professionally qualified to prepare and dispense medicinal drugs', hi: 'दवा विक्रेता / फार्मासिस्ट', es: 'farmacéutico', fr: 'pharmacien', de: 'Apotheker', pt: 'farmacêutico', zh: '药剂师', ar: 'صيدلي', ja: '薬剤師', ru: 'фармацевт / провизор', ex: 'The pharmacist explained how many tablets I should take daily.', exHi: 'फार्मासिस्ट ने समझाया कि मुझे रोजाना कितनी गोलियां लेनी चाहिए।', exEs: 'El farmacéutico explicó cuántas pastillas debo tomar.', ic: '👨‍⚕️' },
    { w: 'dosage', p: '/ˈdəʊsɪdʒ/', m: 'the size or frequency of a dose of a medicine or drug', hi: 'खुराक की मात्रा (डोसेज)', es: 'dosis / posología', fr: 'posologie / dosage', de: 'Dosierung', pt: 'dosagem / posologia', zh: '剂量', ar: 'جرعة الدواء', ja: '服用量 / 投与量', ru: 'дозировка', ex: 'The recommended dosage is one capsule twice a day after meals.', exHi: 'अनुशंसित खुराक भोजन के बाद दिन में दो बार एक कैप्सूल है।', exEs: 'La dosis recomendada es una cápsula dos veces al día.', ic: '💊' },
    { w: 'sore throat', p: '/ˌsɔː ˈθrəʊt/', m: 'pain or irritation in the throat, often worsened by swallowing', hi: 'गले में खराश या दर्द', es: 'dolor de garganta', fr: 'mal de gorge', de: 'Halsschmerzen', pt: 'dor de garganta', zh: '喉咙痛', ar: 'التهاب الحلق', ja: '喉の痛み', ru: 'боль в горле', ex: 'Drinking warm lemon honey tea soothes a sore throat.', exHi: 'गर्म नींबू शहद की चाय पीने से गले की खराश में राहत मिलती है।', exEs: 'Tomar té tibio con limón y miel alivia el dolor de garganta.', ic: '🍵' },
    { w: 'headache', p: '/ˈhedeɪk/', m: 'a continuous pain in the head', hi: 'सिरदर्द', es: 'dolor de cabeza', fr: 'mal de tête / céphalée', de: 'Kopfschmerzen', pt: 'dor de cabeça', zh: '头痛', ar: 'صداع', ja: '頭痛', ru: 'головная боль', ex: 'I took two painkiller tablets to relieve my throbbing headache.', exHi: 'मैंने अपने तेज सिरदर्द से राहत पाने के लिए दर्द निवारक की दो गोलियां लीं।', exEs: 'Tomé dos analgésicos para mi dolor de cabeza.', ic: '🤕' },
    { w: 'fever', p: '/ˈfiːvər/', m: 'an abnormally high body temperature, usually accompanied by shivering', hi: 'बुखार / ज्वर', es: 'fiebre', fr: 'fièvre', de: 'Fieber', pt: 'febre', zh: '发烧 / 发热', ar: 'حمى / ارتفاع حرارة', ja: '熱 / 発熱', ru: 'жар / температура', ex: 'The thermometer indicated a mild fever of 38 degrees Celsius.', exHi: 'थर्मामीटर ने 38 डिग्री सेल्सियस का हल्का बुखार दिखाया।', exEs: 'El termómetro indicó una fiebre leve de 38 grados.', ic: '🌡️' },
    { w: 'dizzy', p: '/ˈdɪzi/', m: 'having a sensation of spinning around and losing one\'s balance', hi: 'चक्कर आना', es: 'mareado', fr: 'étourdi / pris de vertige', de: 'schwindelig', pt: 'tonto / com vertigem', zh: '头晕的', ar: 'دوار / دايخ', ja: 'めまいがする', ru: 'головокружение', ex: 'If you feel dizzy, sit down and drink plenty of water.', exHi: 'यदि आपको चक्कर आ रहा है, तो बैठ जाएं और खूब पानी पिएं।', exEs: 'Si te sientes mareado, siéntate y bebe agua.', ic: '💫' },
    { w: 'cough', p: '/kɒf/', m: 'expel air from the lungs with a sudden sharp sound', hi: 'खांसी', es: 'tos / toser', fr: 'toux / tousser', de: 'Husten', pt: 'tosse', zh: '咳嗽', ar: 'سعال / كحة', ja: '咳', ru: 'кашель', ex: 'The doctor recommended a herbal syrup for dry cough.', exHi: 'डॉक्टर ने सूखी खांसी के लिए एक हर्बल सिरप की सिफारिश की।', exEs: 'El médico recomendó un jarabe para la tos seca.', ic: '😷' },
    { w: 'painkiller', p: '/ˈpeɪnkɪlər/', m: 'a medicine that decreases or removes physical pain', hi: 'दर्द निवारक दवा (पेनकिलर)', es: 'analgésico / calmante', fr: 'antidouleur / antalgique', de: 'Schmerzmittel', pt: 'analgésico', zh: '止痛药', ar: 'مسكن آلام', ja: '鎮痛剤 / 痛み止め', ru: 'обезболивающее', ex: 'Paracetamol is a common over-the-counter painkiller.', exHi: 'पैरासिटामोल एक आम दर्द निवारक दवा है।', exEs: 'El paracetamol es un analgésico de venta libre común.', ic: '💊' },
    { w: 'side effect', p: '/ˈsaɪd ɪfekt/', m: 'a secondary, typically undesirable effect of a drug or medical treatment', hi: 'दुष्प्रभाव (साइड इफेक्ट)', es: 'efecto secundario', fr: 'effet secondaire', de: 'Nebenwirkung', pt: 'efeito colateral', zh: '副作用', ar: 'أثر جانبي', ja: '副作用', ru: 'побочный эффект', ex: 'Drowsiness is a possible side effect of this allergy medicine.', exHi: 'नींद या सुस्ती आना इस एलर्जी दवा का एक संभावित दुष्प्रभाव है।', exEs: 'La somnolencia es un posible efecto secundario.', ic: '⚠️' },
    { w: 'ointment', p: '/ˈɔɪntmənt/', m: 'a smooth oily substance that is rubbed on the skin for medicinal purposes', hi: 'मरहम / बाम', es: 'ungüento / pomada', fr: 'pommade / onguent', de: 'Salbe', pt: 'pomada / unguento', zh: '药膏 / 软膏', ar: 'مرهم / دهان', ja: '軟膏 / 塗り薬', ru: 'мазь', ex: 'Apply this soothing ointment to the skin rash twice daily.', exHi: 'त्वचा के चकत्ते पर इस सुखदायक मरहम को दिन में दो बार लगाएं।', exEs: 'Aplica esta pomada en la erupción dos veces al día.', ic: '🧴' },
    { w: 'capsule', p: '/ˈkæpsjuːl/', m: 'a small gelatinous case enclosing a dose of medication', hi: 'कैप्सूल', es: 'cápsula', fr: 'gélule / capsule', de: 'Kapsel', pt: 'cápsula', zh: '胶囊', ar: 'كبسولة', ja: 'カプセル', ru: 'капсула', ex: 'Swallow the antibiotic capsule whole with a glass of water.', exHi: 'एंटीबायोटिक कैप्सूल को एक गिलास पानी के साथ पूरा निगल लें।', exEs: 'Trague la cápsula entera con un vaso de agua.', ic: '💊' },
    { w: 'allergic', p: '/əˈlɜːdʒɪk/', m: 'caused by or having an allergy to a substance', hi: 'एलर्जी से पीड़ित', es: 'alérgico', fr: 'allergique', de: 'allergisch', pt: 'alérgico', zh: '过敏的', ar: 'حساسية / متحسس', ja: 'アレルギーがある', ru: 'аллергический', ex: 'Please tell the doctor if you are allergic to penicillin.', exHi: 'यदि आपको पेनिसिलिन से एलर्जी है तो कृपया डॉक्टर को बताएं।', exEs: 'Por favor informe al médico si es alérgico a la penicilina.', ic: '🤧' },
    { w: 'stomachache', p: '/ˈstʌməkeɪk/', m: 'a pain in a person\'s belly or stomach', hi: 'पेट दर्द', es: 'dolor de estómago', fr: 'mal d\'estomac / de ventre', de: 'Magenschmerzen / Bauchschmerzen', pt: 'dor de estômago', zh: '胃痛 / 肚子痛', ar: 'مغص / ألم في المعدة', ja: '胃痛 / 腹痛', ru: 'боль в животе / желудке', ex: 'Eating spoiled seafood gave him a severe stomachache.', exHi: 'खराब सीफूड खाने से उसके पेट में तेज दर्द होने लगा।', exEs: 'Comer mariscos en mal estado le dio dolor de estómago.', ic: '😣' },
    { w: 'flu', p: '/fluː/', m: 'influenza, a contagious viral infection of the respiratory passages', hi: 'फ्लू (इन्फ्लूएंजा)', es: 'gripe / influenza', fr: 'grippe', de: 'Grippe', pt: 'gripe', zh: '流感', ar: 'أنفلونزا / نزلة وافدة', ja: 'インフルエンザ', ru: 'грипп', ex: 'I caught the flu and had to rest in bed for five days.', exHi: 'मुझे फ्लू हो गया और मुझे पांच दिनों तक बिस्तर पर आराम करना पड़ा।', exEs: 'Me dio gripe y tuve que guardar cama cinco días.', ic: '🛌' },
    { w: 'bandage', p: '/ˈbændɪdʒ/', m: 'a strip of material used to bind up a wound or protect an injury', hi: 'पट्टी / बैंडेज', es: 'venda / vendaje', fr: 'bandage / pansement', de: 'Verband / Bandage', pt: 'curativo / atadura', zh: '绷带', ar: 'ضمادة', ja: '包帯 / 絆創膏', ru: 'бинт / повязка', ex: 'The nurse cleaned the cut and applied a clean sterile bandage.', exHi: 'नर्स ने कट को साफ किया और एक साफ कीटाणुरहित पट्टी बांधी।', exEs: 'La enfermera limpió el corte y puso un vendaje limpio.', ic: '🩹' },
    { w: 'drowsy', p: '/ˈdraʊzi/', m: 'sleepy and lethargic; half asleep', hi: 'सुस्त / नींद में', es: 'somnoliento / adormilado', fr: 'somnolent / assoupi', de: 'schläfrig / benommen', pt: 'sonolento', zh: '昏昏欲睡的', ar: 'نعسان / يشعر بالنعاس', ja: '眠気がある', ru: 'сонливый / вялый', ex: 'Do not operate heavy machinery if this pill makes you drowsy.', exHi: 'यदि यह गोली आपको सुस्त बनाती है तो भारी मशीनरी न चलाएं।', exEs: 'No maneje maquinaria si esta pastilla le causa somnolencia.', ic: '🥱' },
    { w: 'recover', p: '/rɪˈkʌvər/', m: 'return to a normal state of health, mind, or strength', hi: 'ठीक होना / स्वस्थ होना', es: 'recuperarse / restablecerse', fr: 'se rétablir / guérir', de: 'sich erholen / genesen', pt: 'recuperar-se', zh: '康复 / 痊愈', ar: 'يتعافى / يشفى', ja: '回復する', ru: 'выздоравливать', ex: 'It took her two full weeks to recover from the viral infection.', exHi: 'वायरल संक्रमण से पूरी तरह ठीक होने में उसे दो सप्ताह लग गए।', exEs: 'Le tomó dos semanas recuperarse de la infección viral.', ic: '💪' },
    { w: 'over-the-counter', p: '/ˌəʊvə ðə ˈkaʊntər/', m: 'medicines sold directly to a consumer without a prescription', hi: 'बिना पर्चे मिलने वाली दवा (ओटीसी)', es: 'de venta libre / sin receta', fr: 'en vente libre', de: 'rezeptfrei', pt: 'de venda livre / sem receita', zh: '非处方药 (OTC)', ar: 'بدون وصفة طبية', ja: '市販の / 処方箋不要の', ru: 'безрецептурный', ex: 'You can buy these allergy tablets over-the-counter at any pharmacy.', exHi: 'आप इन एलर्जी की गोलियों को किसी भी फार्मेसी से बिना पर्ची के खरीद सकते हैं।', exEs: 'Puedes comprar estas pastillas de venta libre en la farmacia.', ic: '🏪' }
  ],
  chunks: [
    { phrase: 'I have got a terrible headache', meaning: 'expressing intense cranial pain', hi: 'मेरे सिर में बहुत तेज दर्द है', es: 'tengo un dolor de cabeza terrible', fr: 'j\'ai un terrible mal de tête', de: 'ich habe furchtbare Kopfschmerzen', pt: 'estou com uma dor de cabeça terrível', zh: '我头痛得厉害', ar: 'لدي صداع فظيع', ja: 'ひどい頭痛がします', ru: 'у меня ужасно болит голова', note: 'Natural health symptom complaint pattern.', ic: '🤕' },
    { phrase: 'take two tablets every eight hours', meaning: 'standard medical dosage instruction', hi: 'हर आठ घंटे में दो गोलियां लें', es: 'tomar dos pastillas cada ocho horas', fr: 'prendre deux comprimés toutes les huit heures', de: 'alle acht Stunden zwei Tabletten einnehmen', pt: 'tome dois comprimidos a cada oito horas', zh: '每八小时服用两片', ar: 'تناول قرصين كل ثماني ساعات', ja: '8時間ごとに2錠服用してください', ru: 'принимать по две таблетки каждые 8 часов', note: 'Standard prescription frequency format.', ic: '💊' },
    { phrase: 'take this medicine after meals', meaning: 'dietary timing requirement for pharmaceuticals', hi: 'यह दवा भोजन के बाद लें', es: 'tomar este medicamento después de las comidas', fr: 'prendre ce médicament après les repas', de: 'dieses Medikament nach den Mahlzeiten einnehmen', pt: 'tomar este medicamento após as refeições', zh: '饭后服用此药', ar: 'تناول هذا الدواء بعد الوجبات', ja: '食後にこの薬を飲んでください', ru: 'принимать это лекарство после еды', note: 'Common instruction to prevent gastric irritation.', ic: '🍽️' },
    { phrase: 'are you allergic to any medication', meaning: 'essential diagnostic safety question', hi: 'क्या आपको किसी दवा से एलर्जी है?', es: '¿es alérgico a algún medicamento?', fr: 'êtes-vous allergique à des médicaments ?', de: 'sind Sie gegen irgendwelche Medikamente allergisch?', pt: 'você é alérgico a algum medicamento?', zh: '您对什么药物过敏吗？', ar: 'هل لديك حساسية من أي دواء؟', ja: '何か薬のアレルギーはありますか？', ru: 'у вас есть аллергия на какие-либо лекарства?', note: 'Crucial question asked by doctors and pharmacists.', ic: '⚠️' },
    { phrase: 'make you feel drowsy', meaning: 'cause sluggishness or sleepiness', hi: 'आपको नींद या सुस्ती का अहसास कराना', es: 'hacerte sentir somnoliento', fr: 'vous faire sentir somnolent', de: 'Sie schläfrig machen', pt: 'fazer você se sentir sonolento', zh: '让你感到昏昏欲睡', ar: 'يجعلك تشعر بالنعاس', ja: '眠気を引き起こす', ru: 'вызывать сонливость', note: 'Frequent pharmaceutical warning.', ic: '🥱' },
    { phrase: 'available over-the-counter', meaning: 'purchasable without a formal doctor\'s note', hi: 'बिना डॉक्टर के पर्चे उपलब्ध', es: 'disponible sin receta médica', fr: 'disponible sans ordonnance', de: 'rezeptfrei erhältlich', pt: 'disponível sem receita', zh: '非处方即可买到', ar: 'متوفر بدون وصفة طبية', ja: '処方箋なしで購入できる', ru: 'доступно без рецепта', note: 'Retail pharmacy classification.', ic: '🏪' },
    { phrase: 'get plenty of rest and fluids', meaning: 'classic general medical advice for recovery', hi: 'भरपूर आराम करें और तरल पदार्थ पिएं', es: 'descansar mucho y beber abundantes líquidos', fr: 'se reposer et boire beaucoup de liquides', de: 'sich viel ausruhen und reichlich trinken', pt: 'descansar bastante e beber muitos líquidos', zh: '多休息、多喝水', ar: 'الحصول على قسط وافر من الراحة وشرب السوائل', ja: '十分な休養と水分をとる', ru: 'много отдыхать и пить жидкости', note: 'Standard self-care recommendation.', ic: '💧' },
    { phrase: 'if symptoms persist, see a doctor', meaning: 'escalation warning on medical labels', hi: 'यदि लक्षण बने रहें, तो डॉक्टर से मिलें', es: 'si los síntomas persisten, consulte a un médico', fr: 'si les symptômes persistent, consultez un médecin', de: 'wenn die Symptome anhalten, suchen Sie einen Arzt auf', pt: 'se os sintomas persistirem, consulte um médico', zh: '若症状持续，请就医', ar: 'إذا استمرت الأعراض، راجع الطبيب', ja: '症状が続く場合は医師に相談してください', ru: 'если симптомы сохраняются, обратитесь к врачу', note: 'Universal pharmaceutical packaging advisory.', ic: '🩺' }
  ],
  grammar: {
    title: 'Health Expressions (Have got a + Ailment), Imperatives & Frequency Prepositions for Dosage',
    concept: 'Describing pain and illness with "have got a headache / sore throat / cough", giving dosage instructions with imperatives and prepositions (every, after, with).',
    patterns: [
      {
        title: 'Describing Symptoms with "Have got a / an + Noun"',
        structure: 'Subject + have / has got + a [headache / stomachache / sore throat / fever / cough]',
        rule: 'Use "have got a" with countable ailment nouns (headache, fever, cold, cough).',
        examples: [
          { en: 'I have got a sore throat and a mild fever.', hi: 'मेरे गले में खराश और हल्का बुखार है।', es: 'Tengo dolor de garganta y fiebre leve.' },
          { en: 'He has got a terrible toothache since yesterday.', hi: 'कल से उसके दांत में बहुत तेज दर्द है।', es: 'Él tiene un dolor de muelas terrible desde ayer.' }
        ]
      },
      {
        title: 'Medication Dosage Instructions (Imperatives + Frequency)',
        structure: 'Take + Quantity + every + [Time duration] + [with water / after meals]',
        rule: 'Use imperatives to give direct, clear medical instructions.',
        examples: [
          { en: 'Take two tablets every six hours with water.', hi: 'पानी के साथ हर छह घंटे में दो गोलियां लें।', es: 'Tome dos pastillas cada seis horas con agua.' },
          { en: 'Apply this soothing cream three times a day.', hi: 'दिन में तीन बार इस सुखदायक क्रीम को लगाएं।', es: 'Aplique esta crema tres veces al día.' }
        ]
      },
      {
        title: 'Warning About Side Effects (May / Might + Verb)',
        structure: 'Subject (This medicine) + may / might + cause / make + Object',
        rule: 'Use "may" or "might" to describe possible pharmaceutical side effects.',
        examples: [
          { en: 'This cough syrup may make you feel drowsy.', hi: 'यह कफ सिरप आपको सुस्त महसूस करा सकता है।', es: 'Este jarabe para la tos puede causarle somnolencia.' },
          { en: 'These antibiotics might cause mild stomach upset.', hi: 'ये एंटीबायोटिक्स पेट में हल्की गड़बड़ी पैदा कर सकते हैं।', es: 'Estos antibióticos pueden causar molestias estomacales.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I am having a headache since morning.',
      cor: 'I have had a headache since morning. / I have got a headache.',
      exp: 'Do not use continuous "am having" for physical pains; use "have / have got".',
      hi: 'सिरदर्द के लिए "I have got a headache" कहें, "I am having a headache" नहीं।'
    },
    {
      inc: 'Take this pill before eat.',
      cor: 'Take this pill before eating. / Take this pill before meals.',
      exp: 'Prepositions like "before" take a gerund (-ing) or a noun (before meals).',
      hi: '"Before" के बाद gerund (before eating) या noun (before meals) आता है।'
    },
    {
      inc: 'I am allergic with penicillin.',
      cor: 'I am allergic to penicillin.',
      exp: 'The correct preposition after "allergic" is "to" (allergic to), not "with".',
      hi: '"Allergic" के साथ "to" आता है: "allergic to penicillin"।'
    },
    {
      inc: 'The doctor gave me a recipe for antibiotics.',
      cor: 'The doctor gave me a prescription for antibiotics.',
      exp: 'A doctor writes a "prescription"; a chef writes a "recipe".',
      hi: 'डॉक्टर की पर्ची को "prescription" कहते हैं, "recipe" नहीं।'
    },
    {
      inc: 'Eat two tablets every day.',
      cor: 'Take two tablets every day.',
      exp: 'In English, we "take" tablets/pills/medicine, not "eat" them.',
      hi: 'दवाइयों के लिए "take medicine/tablets" का प्रयोग करें, "eat" का नहीं।'
    }
  ],
  dialogues: [
    {
      title: 'Consulting a Pharmacist for Cold & Flu Relief',
      context: 'Arjun visits a neighborhood pharmacy to ask for advice regarding a persistent cough and sore throat.',
      charA: { name: 'Arjun', av: '👨', role: 'Patient' },
      charB: { name: 'Pharmacist', av: '👩‍⚕️', role: 'Chemist' },
      turns: [
        { spk: 'Arjun', text: 'Hello. I have got a sore throat, a dry cough, and a mild headache. What do you recommend over-the-counter?', hi: 'नमस्ते। मेरे गले में खराश, सूखी खांसी और हल्का सिरदर्द है। आप बिना पर्ची के क्या लेने की सलाह देती हैं?', es: 'Hola. Tengo dolor de garganta, tos seca y dolor de cabeza leve. ¿Qué me recomienda sin receta?' },
        { spk: 'Pharmacist', text: 'I can give you these lozenges for your throat and a paracetamol syrup for the headache. Are you allergic to any medication?', hi: 'मैं आपको गले के लिए ये लोजेंजेस और सिरदर्द के लिए पैरासिटामोल सिरप दे सकती हूँ। क्या आपको किसी दवा से एलर्जी है?', es: 'Le puedo dar estas pastillas para la garganta y paracetamol. ¿Es alérgico a algún medicamento?' },
        { spk: 'Arjun', text: 'No, I am not allergic to anything. How should I take them?', hi: 'नहीं, मुझे किसी भी चीज़ से एलर्जी नहीं है। मुझे इन्हें कैसे लेना चाहिए?', es: 'No, no soy alérgico a nada. ¿Cómo debería tomarlos?' },
        { spk: 'Pharmacist', text: 'Take two teaspoons of the syrup every six hours after meals. Be careful, as it may make you feel slightly drowsy.', hi: 'भोजन के बाद हर छह घंटे में दो चम्मच सिरप लें। सावधान रहें, क्योंकि इससे आपको थोड़ी सुस्ती महसूस हो सकती है।', es: 'Tome dos cucharaditas cada seis horas después de comer. Puede causarle algo de somnolencia.' },
        { spk: 'Arjun', text: 'Understood. Thank you very much for your help!', hi: 'समझ गया। आपकी मदद के लिए बहुत-बहुत धन्यवाद!', es: 'Entendido. ¡Muchas gracias por su ayuda!' }
      ]
    },
    {
      title: 'At the Clinic with a Sprained Ankle',
      context: 'Elena consults a nurse after hurting her ankle while running.',
      charA: { name: 'Elena', av: '👩', role: 'Injured Runner' },
      charB: { name: 'Nurse', av: '👨‍⚕️', role: 'Clinic Nurse' },
      turns: [
        { spk: 'Elena', text: 'Nurse, I twisted my ankle while jogging in the park. It is swollen and painful to walk on.', hi: 'नर्स, पार्क में जॉगिंग करते समय मेरा टखना मुड़ गया। यह सूज गया है और चलने में दर्द हो रहा है।', es: 'Enfermero, me torcí el tobillo corriendo. Está hinchado y duele al caminar.' },
        { spk: 'Nurse', text: 'Let me wrap a firm elastic bandage around it. You should rest your leg and apply an ice pack for twenty minutes.', hi: 'मुझे इसके चारों ओर एक मजबूत लोचदार पट्टी लपेटने दीजिए। आपको अपने पैर को आराम देना चाहिए और बीस मिनट के लिए बर्फ लगानी चाहिए।', es: 'Déjeme ponerle un vendaje elástico. Debe reposar y aplicar hielo veinte minutos.' },
        { spk: 'Elena', text: 'Should I take any painkillers for the swelling?', hi: 'क्या मुझे सूजन के लिए कोई दर्द निवारक दवा लेनी चाहिए?', es: '¿Debería tomar analgésicos para la inflamación?' },
        { spk: 'Nurse', text: 'You can take ibuprofen twice a day with food. If symptoms persist for more than three days, see a doctor for an X-ray.', hi: 'आप भोजन के साथ दिन में दो बार इबुप्रोफेन ले सकती हैं। यदि लक्षण तीन दिनों से अधिक समय तक बने रहते हैं, तो एक्स-रे के लिए डॉक्टर से मिलें।', es: 'Puede tomar ibuprofeno dos veces al día con comida. Si persiste más de 3 días, consulte al médico.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u08_l117_p1',
      type: 'multiple_choice',
      prompt: 'Select the correct question asked by a pharmacist:',
      question: 'Select the correct question asked by a pharmacist:',
      options: [
        'Are you allergic to any medication?',
        'Are you allergic with any medication?',
        'Do you have allergy from any medicines?',
        'Are you having allergic to pills?'
      ],
      correctAnswer: 'Are you allergic to any medication?',
      explanation: '"Allergic to [something]" is the correct prepositional pattern.'
    },
    {
      id: 'ex_u08_l117_p2',
      type: 'fill_blank',
      prompt: 'Complete the dosage instruction:',
      sourceSentence: '_____ two capsules every eight hours after meals with water.',
      targetSentence: 'Take two capsules every eight hours after meals with water.',
      options: [
        { id: '1', text: 'Take', isCorrect: true },
        { id: '2', text: 'Eat', isCorrect: false },
        { id: '3', text: 'Drink', isCorrect: false },
        { id: '4', text: 'Chew on to', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l117_p3',
      type: 'word_ordering',
      prompt: 'Assemble the symptom description:',
      targetSentence: 'I have got a sore throat and a high fever since yesterday',
      wordBank: ['I', 'have', 'got', 'a', 'sore', 'throat', 'and', 'a', 'high', 'fever', 'since', 'yesterday']
    },
    {
      id: 'ex_u08_l117_p4',
      type: 'error_correction',
      prompt: 'Fix the medical vocabulary confusion:',
      sourceSentence: 'The doctor gave me a recipe for my blood pressure medication.',
      targetSentence: 'The doctor gave me a prescription for my blood pressure medication.',
      explanation: 'Use "prescription" for medication, not "recipe" (cooking instructions).'
    },
    {
      id: 'ex_u08_l117_p5',
      type: 'translation',
      prompt: 'Translate into English: "यह खांसी का सिरप आपको सुस्त और नींद में महसूस करा सकता है।"',
      sourceSentence: 'यह खांसी का सिरप आपको सुस्त और नींद में महसूस करा सकता है।',
      targetSentence: 'This cough syrup may make you feel drowsy.',
      wordBank: ['This', 'cough', 'syrup', 'may', 'make', 'you', 'feel', 'drowsy', 'sleeping']
    },
    {
      id: 'ex_u08_l117_p6',
      type: 'match_pairs',
      prompt: 'Match medical ailments with appropriate treatments:',
      options: [
        { id: 'm1', text: 'Sore throat' },
        { id: 'm1_m', text: 'Warm tea with honey / शहद वाली चाय' },
        { id: 'm2', text: 'Headache' },
        { id: 'm2_m', text: 'Painkiller tablet / दर्द निवारक' },
        { id: 'm3', text: 'Sprained ankle' },
        { id: 'm3_m', text: 'Elastic bandage & ice / पट्टी और बर्फ' },
        { id: 'm4', text: 'Skin rash' },
        { id: 'm4_m', text: 'Soothing ointment / मरहम' }
      ]
    },
    {
      id: 'ex_u08_l117_p7',
      type: 'listening',
      prompt: 'Listen to the pharmacy instructions:',
      audioText: 'Take one tablet in the morning and one at night with plenty of water.',
      targetSentence: 'Take one tablet in the morning and one at night with plenty of water.',
      options: [
        { id: '1', text: 'One tablet in morning and one at night with water', isCorrect: true },
        { id: '2', text: 'Take ten tablets before sleeping', isCorrect: false },
        { id: '3', text: 'Do not drink water with this pill', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l117_p8',
      type: 'speaking',
      prompt: 'Speak this symptom complaint clearly:',
      targetSentence: 'I have got a severe headache and I feel slightly dizzy.',
      audioText: 'I have got a severe headache and I feel slightly dizzy.'
    },
    {
      id: 'ex_u08_l117_p9',
      type: 'dialogue_completion',
      prompt: 'Choose the best pharmacist reply:',
      sourceSentence: 'Customer: Can I buy these antibiotics without a prescription?\nPharmacist: _____',
      targetSentence: 'Pharmacist: I am afraid not; by law, you need an official prescription from a doctor.',
      options: [
        { id: '1', text: 'I am afraid not; by law, you need an official prescription from a doctor.', isCorrect: true },
        { id: '2', text: 'My laptop screen froze today.', isCorrect: false },
        { id: '3', text: 'These shoes are made from stainless steel.', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l117_p10',
      type: 'listen_and_type',
      prompt: 'Listen and write down the advisory:',
      audioText: 'If symptoms persist, see a doctor immediately.',
      targetSentence: 'If symptoms persist, see a doctor immediately.',
      wordBank: ['If', 'symptoms', 'persist', 'see', 'a', 'doctor', 'immediately']
    }
  ],
  review: [
    {
      id: 'ex_u08_l117_r1',
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct for stating an allergy?',
      question: 'Which sentence is grammatically correct for stating an allergy?',
      options: [
        'I am allergic to peanuts and shellfish.',
        'I am allergic with peanuts and shellfish.',
        'I have allergic to peanuts.',
        'I am allergy to peanuts.'
      ],
      correctAnswer: 'I am allergic to peanuts and shellfish.',
      explanation: 'Use "be + allergic + to + noun".'
    },
    {
      id: 'ex_u08_l117_r2',
      type: 'fill_blank',
      prompt: 'Fill in the blank with the correct term for over-the-counter drugs:',
      sourceSentence: 'You can purchase this mild painkiller _____ without a doctor\'s note.',
      targetSentence: 'You can purchase this mild painkiller over-the-counter without a doctor\'s note.',
      options: [
        { id: '1', text: 'over-the-counter', isCorrect: true },
        { id: '2', text: 'waterproof', isCorrect: false },
        { id: '3', text: 'biodegradable', isCorrect: false },
        { id: '4', text: 'urgent', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l117_r3',
      type: 'word_ordering',
      prompt: 'Assemble the advice for recovering from flu:',
      targetSentence: 'Drink warm fluids and get plenty of rest in bed',
      wordBank: ['Drink', 'warm', 'fluids', 'and', 'get', 'plenty', 'of', 'rest', 'in', 'bed']
    },
    {
      id: 'ex_u08_l117_r4',
      type: 'error_correction',
      prompt: 'Fix the verb error in the dosage instruction:',
      sourceSentence: 'You should eat one tablet after breakfast every day.',
      targetSentence: 'You should take one tablet after breakfast every day.',
      explanation: 'Use "take a tablet", not "eat a tablet".'
    },
    {
      id: 'ex_u08_l117_r5',
      type: 'translation',
      prompt: 'Translate into English: "यदि आपको चक्कर आ रहा है, तो कृपया बैठ जाएं और एक गिलास पानी पिएं।"',
      sourceSentence: 'यदि आपको चक्कर आ रहा है, तो कृपया बैठ जाएं और एक गिलास पानी पिएं।',
      targetSentence: 'If you feel dizzy, please sit down and drink a glass of water.',
      wordBank: ['If', 'you', 'feel', 'dizzy', 'please', 'sit', 'down', 'and', 'drink', 'a', 'glass', 'of', 'water']
    },
    {
      id: 'ex_u08_l117_r6',
      type: 'speaking',
      prompt: 'Speak this prescription instruction clearly:',
      targetSentence: 'Take two capsules twice daily with food to avoid stomach irritation.',
      audioText: 'Take two capsules twice daily with food to avoid stomach irritation.'
    },
    {
      id: 'ex_u08_l117_r7',
      type: 'recognition',
      prompt: 'Identify the meaning of "drowsy":',
      question: 'What does feeling drowsy mean?',
      options: ['Feeling sleepy and lethargic', 'Feeling very energetic and active'],
      correctAnswer: 'Feeling sleepy and lethargic',
      explanation: 'Drowsiness is a state of sleepiness often caused by antihistamines or painkillers.'
    },
    {
      id: 'ex_u08_l117_r8',
      type: 'fill_blank',
      prompt: 'Select the correct preposition for frequency:',
      sourceSentence: 'Apply the antiseptic ointment _____ four hours until the rash clears.',
      targetSentence: 'Apply the antiseptic ointment every four hours until the rash clears.',
      options: [
        { id: '1', text: 'every', isCorrect: true },
        { id: '2', text: 'at', isCorrect: false },
        { id: '3', text: 'on', isCorrect: false },
        { id: '4', text: 'between', isCorrect: false }
      ]
    }
  ],
  assessment: [
    {
      id: 'ex_u08_l117_a1',
      type: 'multiple_choice',
      prompt: 'Choose the sentence that correctly explains dosage and precaution:',
      question: 'Choose the sentence that correctly explains dosage and precaution:',
      options: [
        'Take one tablet every eight hours after meals with water.',
        'Eat one tablet every eight hours after meals with water.',
        'Take one tablet on eight hours before eat.',
        'Taking two tablets every eight hour.'
      ],
      correctAnswer: 'Take one tablet every eight hours after meals with water.',
      explanation: '"Take + quantity + every + duration + after meals" is grammatically precise.'
    },
    {
      id: 'ex_u08_l117_a2',
      type: 'word_ordering',
      prompt: 'Construct the assessment statement:',
      targetSentence: 'If symptoms persist for more than three days see a doctor',
      wordBank: ['If', 'symptoms', 'persist', 'for', 'more', 'than', 'three', 'days', 'see', 'a', 'doctor']
    },
    {
      id: 'ex_u08_l117_a3',
      type: 'fill_blank',
      prompt: 'Complete with the appropriate medical term:',
      sourceSentence: 'A high body temperature accompanied by shivering is known as a _____.',
      targetSentence: 'A high body temperature accompanied by shivering is known as a fever.',
      options: [
        { id: '1', text: 'fever', isCorrect: true },
        { id: '2', text: 'receipt', isCorrect: false },
        { id: '3', text: 'gadget', isCorrect: false },
        { id: '4', text: 'shuttle', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l117_a4',
      type: 'translation',
      prompt: 'Translate into English: "क्या मुझे इस दर्द निवारक दवा के लिए डॉक्टर के पर्चे की आवश्यकता है?"',
      sourceSentence: 'क्या मुझे इस दर्द निवारक दवा के लिए डॉक्टर के पर्चे की आवश्यकता है?',
      targetSentence: 'Do I need a prescription for this painkiller?',
      wordBank: ['Do', 'I', 'need', 'a', 'prescription', 'for', 'this', 'painkiller', 'recipe']
    },
    {
      id: 'ex_u08_l117_a5',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sourceSentence: 'I am allergic with aspirin and ibuprofen.',
      targetSentence: 'I am allergic to aspirin and ibuprofen.',
      explanation: 'Use "allergic to", not "allergic with".'
    },
    {
      id: 'ex_u08_l117_a6',
      type: 'listening',
      prompt: 'Listen to the doctor\'s advice:',
      audioText: 'You have a mild viral flu. Take paracetamol for the fever and get plenty of rest.',
      targetSentence: 'You have a mild viral flu. Take paracetamol for the fever and get plenty of rest.',
      options: [
        { id: '1', text: 'Mild flu; take paracetamol for fever and rest', isCorrect: true },
        { id: '2', text: 'Broken leg requiring immediate surgery', isCorrect: false },
        { id: '3', text: 'No treatment needed, go running', isCorrect: false }
      ]
    },
    {
      id: 'ex_u08_l117_a7',
      type: 'speaking',
      prompt: 'Speak this mastery statement clearly:',
      targetSentence: 'I have got a sore throat, but this herbal lozenge helps soothe the pain.',
      audioText: 'I have got a sore throat, but this herbal lozenge helps soothe the pain.'
    },
    {
      id: 'ex_u08_l117_a8',
      type: 'personal_production',
      prompt: 'Write two sentences asking a pharmacist for advice regarding a headache and asking about dosage:',
      targetSentence: 'Hello, I have got a bad headache. What over-the-counter painkiller do you recommend, and how often should I take it?'
    }
  ]
};
