import { LessonConfigA2 } from './unit10_builder_helper';

// =========================================================================
// LESSON 142: Managing Utility Bills, Energy Usage & Home Automation
// =========================================================================
export const LESSON_142_CONFIG: LessonConfigA2 = {
  num: 142,
  title: 'Managing Utility Bills, Energy Usage & Home Automation',
  icon: '💡',
  estMin: 25,
  objTitle: 'Tracking Utilities, Smart Devices, Energy Efficiency & Inquiring about Billing',
  objDesc: 'Learn to discuss electricity, water, gas bills, smart meter readings, home energy conservation, and resolving billing discrepancies using modal verbs and comparative expressions.',
  objHi: 'बिजली, पानी, गैस बिल, स्मार्ट मीटर रीडिंग, ऊर्जा बचत और बिलिंग विसंगतियों को सुलझाने पर चर्चा करना सीखें।',
  objEs: 'Gestionar facturas de suministros, consumo energético, dispositivos inteligentes y resolver discrepancias de facturación.',
  canDo: [
    'I can read and understand utility bills (electricity, water, heating, broadband).',
    'I can discuss household energy efficiency and smart home settings.',
    'I can query unexpected billing charges or meter inaccuracies with utility providers.',
    'I can give tips on reducing utility consumption using modal verbs of advice.'
  ],
  canDoHi: [
    'मैं उपयोगिता बिलों (बिजली, पानी, हीटिंग, ब्रॉडबैंड) को पढ़ और समझ सकता हूँ।',
    'मैं घरेलू ऊर्जा दक्षता और स्मार्ट होम सेटिंग्स पर चर्चा कर सकता हूँ।',
    'मैं उपयोगिता प्रदाताओं के साथ अप्रत्याशित बिलिंग शुल्क या मीटर की गलतियों के बारे में पूछताछ कर सकता हूँ।',
    'मैं सलाह के मोडल क्रियाओं का उपयोग करके बिल कम करने के सुझाव दे सकता हूँ।'
  ],
  canDoEs: [
    'Puedo entender facturas de luz, agua, calefacción e internet.',
    'Puedo hablar de eficiencia energética y dispositivos inteligentes.',
    'Puedo reclamar cargos inesperados a las compañías suministradoras.',
    'Puedo dar consejos para reducir el consumo con verbos modales.'
  ],
  vocab: [
    { w: 'electricity bill', p: '/ɪˌlekˈtrɪsəti bɪl/', m: 'a statement of charges for electrical power consumed over a period', hi: 'बिजली का बिल', es: 'factura de electricidad / luz', fr: 'facture d\'électricité', de: 'Stromrechnung', pt: 'conta de luz / eletricidade', zh: '电费账单', ar: 'فاتورة الكهرباء', ja: '電気料金請求書', ru: 'счёт за электричество', ex: 'Our electricity bill was higher this month due to air conditioning usage.', exHi: 'एयर कंडीशनिंग के उपयोग के कारण इस महीने हमारा बिजली का बिल अधिक था।', exEs: 'Nuestra factura de la luz fue más alta este mes debido al aire acondicionado.', ic: '⚡' },
    { w: 'smart meter', p: '/smɑːt ˈmiːtə/', m: 'an electronic device that records consumption of electric energy and communicates info to the supplier', hi: 'स्मार्ट मीटर', es: 'contador inteligente', fr: 'compteur intelligent', de: 'intelligenter Stromzähler / Smart Meter', pt: 'medidor inteligente', zh: '智能电表', ar: 'عداد ذكي', ja: 'スマートメーター', ru: 'умный счётчик', ex: 'The new smart meter displays hourly energy consumption in real time.', exHi: 'नया स्मार्ट मीटर वास्तविक समय में प्रति घंटा ऊर्जा खपत प्रदर्शित करता है।', exEs: 'El nuevo contador inteligente muestra el consumo por horas en tiempo real.', ic: '📟' },
    { w: 'thermostat', p: '/ˈθɜːməstæt/', m: 'a device that automatically regulates temperature', hi: 'थर्मोस्टेट (तापमान नियंत्रक)', es: 'termostato', fr: 'thermostat', de: 'Thermostat', pt: 'termostato', zh: '恒温器', ar: 'منظم الحرارة', ja: 'サーモスタット', ru: 'термостат', ex: 'We programmed the smart thermostat to lower the temperature overnight.', exHi: 'हमने रात भर तापमान कम करने के लिए स्मार्ट थर्मोस्टेट को प्रोग्राम किया।', exEs: 'Programamos el termostato inteligente para bajar la temperatura por la noche.', ic: '🌡️' },
    { w: 'consumption', p: '/kənˈsʌmpʃn/', m: 'the action of using up a resource such as water, gas, or electricity', hi: 'खपत / उपभोग', es: 'consumo', fr: 'consommation', de: 'Verbrauch', pt: 'consumo', zh: '消耗 / 用量', ar: 'استهلاك', ja: '消費量', ru: 'потребление / расход', ex: 'Switching off appliances on standby reduces electricity consumption.', exHi: 'उपकरणों को स्टैंडबाय से बंद करने से बिजली की खपत कम होती है।', exEs: 'Apagar los aparatos en modo de espera reduce el consumo de electricidad.', ic: '📊' },
    { w: 'overcharge', p: '/ˌəʊvəˈtʃɑːdʒ/', m: 'charge someone too high a price for goods or services', hi: 'अधिक शुल्क लगाना / ज्यादा पैसे लेना', es: 'cobrar de más / sobrecargar', fr: 'surcharger / faire payer trop cher', de: 'zu viel berechnen / übervorteilen', pt: 'cobrar a mais / superfaturar', zh: '多收费 / 索价过高', ar: 'تقاضي سعر زائد', ja: '過剰請求する', ru: 'переплачивать / завышать счёт', ex: 'I called customer support because the gas company overcharged us by fifty pounds.', exHi: 'मैंने ग्राहक सहायता को फोन किया क्योंकि गैस कंपनी ने हमसे पचास पाउंड अधिक ले लिए थे।', exEs: 'Llamé a atención al cliente porque la compañía de gas nos cobró cincuenta libras de más.', ic: '💸' },
    { w: 'broadband', p: '/ˈbrɔːdbænd/', m: 'a high-capacity transmission technique using a wide range of frequencies, enabling high-speed internet', hi: 'ब्रॉडबैंड / हाई-स्पीड इंटरनेट', es: 'banda ancha / internet de alta velocidad', fr: 'haut débit / fibre', de: 'Breitband / Highspeed-Internet', pt: 'banda larga', zh: '宽带', ar: 'النطاق العريض / الإنترنت فائق السرعة', ja: 'ブロードバンド / 光回線', ru: 'широкополосный интернет', ex: 'We upgraded our home broadband package to ultra-fast fiber.', exHi: 'हमने अपने होम ब्रॉडबैंड पैकेज को अल्ट्रा-फास्ट फाइबर में अपग्रेड किया।', exEs: 'Actualizamos nuestro paquete de banda ancha doméstica a fibra ultrarrápida.', ic: '🌐' },
    { w: 'direct debit', p: '/dəˌrekt ˈdebɪt/', m: 'an arrangement made with a bank that allows a third party to transfer money from a person\'s account on agreed dates', hi: 'ऑटो-डेबिट / बैंक से स्वचालित भुगतान', es: 'domiciliación bancaria / débito automático', fr: 'prélèvement automatique', de: 'Lastschrift / Bankeinzug', pt: 'débito automático', zh: '自动扣款 / 直接借记', ar: 'الخصم المباشر', ja: '口座振替 / 自動引き落とし', ru: 'прямое дебетование / автоплатёж', ex: 'Setting up a monthly direct debit ensures our water bill is never overdue.', exHi: 'मासिक डायरेक्ट डेबिट सेट करने से यह सुनिश्चित होता है कि हमारे पानी के बिल का भुगतान कभी बकाया न रहे।', exEs: 'Configurar una domiciliación bancaria asegura que la factura del agua nunca venza.', ic: '💳' },
    { w: 'energy-efficient', p: '/ˈenədʒi ɪˌfɪʃnt/', m: 'using relatively little energy to provide the same level of energy service', hi: 'ऊर्जा-सक्षम / बिजली बचाने वाला', es: 'eficiente energéticamente / de bajo consumo', fr: 'économe en énergie', de: 'energieeffizient / energiesparend', pt: 'energeticamente eficiente / de baixo consumo', zh: '节能的 / 高能效的', ar: 'موفر للطاقة', ja: '省エネの / エネルギー効率の高い', ru: 'энергосберегающий / эффективный', ex: 'Energy-efficient LED light bulbs last longer and consume ninety percent less power.', exHi: 'ऊर्जा-कुशल एलईडी बल्ब अधिक समय तक चलते हैं और नब्बे प्रतिशत कम बिजली की खपत करते हैं।', exEs: 'Las bombillas LED de bajo consumo duran más y consumen un 90% menos de energía.', ic: '🌱' },
    { w: 'discrepancy', p: '/dɪˈskrepənsi/', m: 'an illogical or unexpected lack of compatibility or similarity between two facts', hi: 'विसंगति / फर्क / गड़बड़ी', es: 'discrepancia / incoherencia', fr: 'écart / divergence', de: 'Abweichung / Diskrepanz', pt: 'discrepância / divergência', zh: '差异 / 不一致', ar: 'تناقض / تباين', ja: '食い違い / 相違', ru: 'несоответствие / расхождение', ex: 'There is a noticeable discrepancy between the estimated and actual meter readings.', exHi: 'अनुमानित और वास्तविक मीटर रीडिंग के बीच एक ध्यान देने योग्य विसंगति है।', exEs: 'Hay una discrepancia notable entre la lectura estimada y la real del contador.', ic: '⚖️' },
    { w: 'provider', p: '/prəˈvaɪdə/', m: 'a company that provides a service such as electricity, water, or internet', hi: 'सेवा प्रदाता / कंपनी', es: 'proveedor de servicios / compañía suministradora', fr: 'fournisseur', de: 'Anbieter / Versorger', pt: 'provedor / fornecedor', zh: '供应商 / 服务商', ar: 'مزود الخدمة', ja: '供給業者 / プロバイダー', ru: 'провайдер / поставщик услуг', ex: 'We compared rates from three different energy providers to find the best deal.', exHi: 'हमने सबसे अच्छा सौदा खोजने के लिए तीन अलग-अलग ऊर्जा प्रदाताओं की दरों की तुलना की।', exEs: 'Comparamos las tarifas de tres compañías de energía para encontrar la mejor oferta.', ic: '🏢' },
    { w: 'due date', p: '/djuː deɪt/', m: 'the date on which a payment or bill falls due', hi: 'अंतिम तिथि / देय तिथि', es: 'fecha de vencimiento', fr: 'date d\'échéance', de: 'Fälligkeitsdatum', pt: 'data de vencimento', zh: '到期日 / 截止日期', ar: 'تاريخ الاستحقاق', ja: '期日 / 支払期日', ru: 'срок оплаты', ex: 'The utility bill due date is the twenty-fifth of every month.', exHi: 'उपयोगिता बिल की देय तिथि हर महीने की पच्चीस तारीख है।', exEs: 'La fecha de vencimiento de la factura es el 25 de cada mes.', ic: '📅' },
    { w: 'insulation', p: '/ˌɪnsjuˈleɪʃn/', m: 'material used to insulate something, especially a building, to retain heat', hi: 'इंसुलेशन / ऊष्मा रोधन', es: 'aislamiento térmico', fr: 'isolation thermique', de: 'Dämmung / Isolierung', pt: 'isolamento térmico', zh: '隔热 / 保温材料', ar: 'عزل حراري', ja: '断熱材 / 遮熱', ru: 'теплоизоляция', ex: 'Double-glazed windows provide excellent thermal insulation against winter cold.', exHi: 'डबल-ग्लेज़्ड खिड़कियां सर्दियों की ठंड के खिलाफ उत्कृष्ट थर्मल इन्सुलेशन प्रदान करती हैं।', exEs: 'Las ventanas de doble acristalamiento proporcionan un excelente aislamiento térmico.', ic: '🧱' },
    { w: 'tariff', p: '/ˈtærɪf/', m: 'a price or schedule of rates charged by a public utility', hi: 'टैरिफ / दर सूची', es: 'tarifa de precios', fr: 'grille tarifaire / tarif', de: 'Tarif', pt: 'tarifa', zh: '资费标准 / 电价表', ar: 'تعرفة', ja: '料金体系 / 料金表', ru: 'тариф', ex: 'We switched to a night-time tariff to charge our electric car more cheaply.', exHi: 'हमने अपनी इलेक्ट्रिक कार को सस्ते में चार्ज करने के लिए नाइट-टाइम टैरिफ अपनाया।', exEs: 'Cambiamos a una tarifa nocturna para cargar el coche eléctrico más barato.', ic: '🏷️' },
    { w: 'breakdown', p: '/ˈbreɪkdaʊn/', m: 'an itemized analysis or division into categorized parts', hi: 'मदवार विवरण / ब्रेकडाउन', es: 'desglose detallado', fr: 'détail / ventilation des coûts', de: 'Aufschlüsselung / Detailübersicht', pt: 'detalhamento / discriminação', zh: '费用明细', ar: 'تفصيل التكاليف', ja: '内訳 / 明細', ru: 'детализация / расшифровка счёта', ex: 'The monthly bill includes a clear breakdown of standing charges and unit costs.', exHi: 'मासिक बिल में स्थायी शुल्क और यूनिट लागत का स्पष्ट विवरण शामिल है।', exEs: 'La factura mensual incluye un desglose claro de los costes fijos y por unidad.', ic: '📋' },
    { w: 'standing charge', p: '/ˈstændɪŋ tʃɑːdʒ/', m: 'a fixed charge that you pay for a service in addition to the cost of units consumed', hi: 'स्थायी शुल्क / फिक्स्ड चार्ज', es: 'término fijo / cuota fija', fr: 'abonnement / part fixe', de: 'Grundgebühr', pt: 'tarifa fixa / assinatura básica', zh: '基本月租费', ar: 'الرسوم الثابتة', ja: '基本料金', ru: 'базовый тариф / фиксированная абонплата', ex: 'Even when you are away on holiday, you still pay the daily standing charge.', exHi: 'छुट्टियों पर बाहर रहने पर भी आप दैनिक स्थायी शुल्क का भुगतान करते हैं।', exEs: 'Incluso de vacaciones, sigues pagando la cuota fija diaria.', ic: '🧾' },
    { w: 'eco-friendly', p: '/ˌiːkəʊ ˈfrendli/', m: 'not harmful to the environment', hi: 'पर्यावरण-अनुकूल', es: 'ecológico / respetuoso con el medio ambiente', fr: 'écologique', de: 'umweltfreundlich', pt: 'ecológico / sustentável', zh: '环保的', ar: 'صديق للبيئة', ja: '環境に優しい / エコな', ru: 'экологичный', ex: 'Eco-friendly appliances use less water and help protect natural resources.', exHi: 'पर्यावरण-अनुकूल उपकरण कम पानी का उपयोग करते हैं और प्राकृतिक संसाधनों की रक्षा करने में मदद करते हैं।', exEs: 'Los electrodomésticos ecológicos usan menos agua y protegen los recursos.', ic: '🌿' },
    { w: 'solar panel', p: '/ˈsəʊlə ˈpænl/', m: 'a panel designed to absorb the sun\'s rays as a source of energy for generating electricity', hi: 'सौर पैनल / सोलर पैनल', es: 'panel solar / placa solar', fr: 'panneau solaire', de: 'Solarpanel / Photovoltaikmodul', pt: 'painel solar / placa solar', zh: '太阳能电池板', ar: 'لوحة شمسية', ja: 'ソーラーパネル / 太陽光パネル', ru: 'солнечная батарея / панель', ex: 'Rooftop solar panels generate green electricity for the whole apartment block.', exHi: 'छत पर लगे सोलर पैनल पूरे अपार्टमेंट ब्लॉक के लिए हरित बिजली पैदा करते हैं।', exEs: 'Los paneles solares en el tejado generan electricidad limpia para el edificio.', ic: '☀️' },
    { w: 'automated', p: '/ˈɔːtəmeɪtɪd/', m: 'converted to largely automatic operation', hi: 'स्वचालित', es: 'automatizado', fr: 'automatisé', de: 'automatisiert', pt: 'automatizado', zh: '自动化的', ar: 'مؤتمت / آلي', ja: '自動化された', ru: 'автоматизированный', ex: 'We installed automated lighting that turns off when no one is in the room.', exHi: 'हमने स्वचालित लाइटिंग लगाई है जो कमरे में किसी के न होने पर बंद हो जाती है।', exEs: 'Instalamos iluminación automatizada que se apaga cuando no hay nadie.', ic: '🤖' },
    { w: 'dispute', p: '/dɪˈspjuːt/', m: 'a disagreement, argument, or debate, especially over an invoice or payment', hi: 'विवाद / आपत्ति दर्ज करना', es: 'reclamar / disputar un cargo', fr: 'contester', de: 'anfechten / beanstanden', pt: 'contestar / disputar', zh: '对...提出异议 / 争议', ar: 'الاعتراض على فاتورة', ja: '異議を申し立てる', ru: 'оспаривать (счёт)', ex: 'I would like to dispute this extra ten-euro surcharge on my account.', exHi: 'मैं अपने खाते पर इस अतिरिक्त दस यूरो के अधिभार पर आपत्ति दर्ज करना चाहूँगा।', exEs: 'Me gustaría disputar este recargo adicional de diez euros en mi cuenta.', ic: '🗣️' },
    { w: 'surcharge', p: '/ˈsɜːtʃɑːdʒ/', m: 'an additional charge or payment', hi: 'अतिरिक्त शुल्क / अधिभार', es: 'recargo / sobretasa', fr: 'supplément / surtaxe', de: 'Aufschlag / Zusatzzahlung', pt: 'sobretaxa / taxa extra', zh: '附加费', ar: 'رسوم إضافية', ja: '追加料金 / サーチャージ', ru: 'дополнительный сбор / наценка', ex: 'Late payments may incur a five-percent late surcharge.', exHi: 'देर से भुगतान करने पर पांच प्रतिशत का विलंब शुल्क लग सकता है।', exEs: 'Los pagos atrasados pueden generar un recargo del cinco por ciento.', ic: '📈' }
  ],
  chunks: [
    { phrase: 'cut down on energy consumption', meaning: 'reduce the amount of power used at home', hi: 'ऊर्जा की खपत को कम करना', es: 'reducir el consumo de energía', fr: 'réduire sa consommation d\'énergie', de: 'den Energieverbrauch senken', pt: 'reduzir o consumo de energia', zh: '降低能源消耗', ar: 'خفض استهلاك الطاقة', ja: 'エネルギー消費を削減する', ru: 'сократить потребление энергии', note: 'High-frequency ecological and budget expression.', ic: '📉' },
    { phrase: 'set up a direct debit', meaning: 'arrange automatic recurring bank payments for bills', hi: 'ऑटो-डेबिट भुगतान सेट करना', es: 'domiciliar el pago', fr: 'mettre en place un prélèvement automatique', de: 'ein Lastschriftverfahren einrichten', pt: 'cadastrar débito automático', zh: '设置自动扣款', ar: 'إعداد الخصم المباشر', ja: '口座引き落としを設定する', ru: 'настроить автоплатёж', note: 'Essential administrative collocation.', ic: '🏦' },
    { phrase: 'submit a meter reading', meaning: 'send actual electricity or gas figures to the utility company', hi: 'मीटर रीडिंग जमा करना', es: 'enviar la lectura del contador', fr: 'transmettre son relevé de compteur', de: 'den Zählerstand übermitteln', pt: 'enviar a leitura do hidrômetro/relógio', zh: '提交电表读数', ar: 'إرسال قراءة العداد', ja: 'メーターの数値を送信する', ru: 'передать показания счётчика', note: 'Prevents inaccurate estimated bills.', ic: '🔢' },
    { phrase: 'turn down the heating', meaning: 'lower the temperature setting on a thermostat or radiator', hi: 'हीटिंग का तापमान कम करना', es: 'bajar la calefacción', fr: 'baisser le chauffage', de: 'die Heizung herunterdrehen', pt: 'abaixar o aquecimento', zh: '调低暖气温度', ar: 'خفض درجة حرارة التدفئة', ja: '暖房の温度を下げる', ru: 'убавить отопление', note: 'Everyday household action phrase.', ic: '🌡️' },
    { phrase: 'dispute a charge', meaning: 'formally question an incorrect billing item', hi: 'गलत शुल्क पर आपत्ति दर्ज करना', es: 'reclamar un cobro indebido', fr: 'contester une facture', de: 'eine Rechnung anfechten', pt: 'contestar uma cobrança', zh: '对收费提出申诉', ar: 'الاعتراض على رسوم', ja: '請求内容に異議を唱える', ru: 'оспорить начисление', note: 'Used when speaking with customer service.', ic: '📞' },
    { phrase: 'switch off standby mode', meaning: 'completely power down electronic appliances at the socket', hi: 'स्टैंडबाय मोड पूरी तरह बंद करना', es: 'apagar el modo de espera / desconectar', fr: 'éteindre les appareils en veille', de: 'den Standby-Modus ausschalten', pt: 'desligar o modo de espera', zh: '关闭待机模式', ar: 'إيقاف وضع الاستعداد', ja: '待機電力を切る', ru: 'выключить режим ожидания', note: 'Practical energy saving method.', ic: '🔌' },
    { phrase: 'keep track of expenses', meaning: 'monitor and record financial spending carefully', hi: 'खर्चों पर नज़र रखना', es: 'llevar un control de los gastos', fr: 'garder une trace des dépenses', de: 'die Ausgaben im Blick behalten', pt: 'manter o controle das despesas', zh: '记录和追踪开支', ar: 'متابعة النفقات', ja: '支出を記録・管理する', ru: 'вести учёт расходов', note: 'Useful financial habit collocation.', ic: '📒' },
    { phrase: 'unplug when not in use', meaning: 'remove electrical plugs to prevent phantom energy drain', hi: 'उपयोग में न होने पर प्लग निकाल देना', es: 'desenchufar cuando no se use', fr: 'débrancher lorsqu\'il n\'est pas utilisé', de: 'bei Nichtgebrauch den Stecker ziehen', pt: 'tirar da tomada quando não estiver em uso', zh: '不使用时拔掉插头', ar: 'فصل القابس عند عدم الاستخدام', ja: '使わない時はコンセントを抜く', ru: 'вынимать вилку из розетки, когда не используется', note: 'Common safety and efficiency guideline.', ic: '🛑' }
  ],
  grammar: {
    title: 'Giving Advice & Making Recommendations for Utilities: "Ought to", "Should", "Had better"',
    concept: 'Using varying degrees of modal advice to suggest energy savings and solve billing problems.',
    patterns: [
      {
        title: 'Mild to Strong Advice: "Should", "Ought to", and "Had better"',
        structure: 'Subject + should / ought to / had better + Base Verb',
        rule: '"Should" and "ought to" express standard recommendations. "Had better" implies a warning or negative consequence if ignored ("You had better pay the bill today or power will be cut").',
        examples: [
          { en: 'You should turn down the thermostat by one degree to save energy.', hi: 'ऊर्जा बचाने के लिए आपको थर्मोस्टेट को एक डिग्री कम करना चाहिए।', es: 'Deberías bajar el termostato un grado para ahorrar energía.' },
          { en: 'We ought to submit our meter reading before the deadline.', hi: 'हमें समय सीमा से पहले अपनी मीटर रीडिंग जमा करनी चाहिए।', es: 'Deberíamos enviar la lectura del contador antes de la fecha límite.' },
          { en: 'You had better check the bill for errors before paying it.', hi: 'भुगतान करने से पहले आपको गलतियों के लिए बिल की जांच कर लेनी चाहिए।', es: 'Más te vale revisar la factura antes de pagarla.' }
        ]
      },
      {
        title: 'Comparative Reductions: "Less... than", "Fewer... than", "As much as"',
        structure: 'Less + Uncountable Noun (energy/electricity/water) | Fewer + Countable Noun (units/appliances)',
        rule: 'Use "less" with uncountable commodities (electricity, fuel, money) and "fewer" with countable units.',
        examples: [
          { en: 'LED bulbs consume far less electricity than traditional bulbs.', hi: 'एलईडी बल्ब पारंपरिक बल्बों की तुलना में बहुत कम बिजली की खपत करते हैं।', es: 'Las bombillas LED consumen mucha menos electricidad que las tradicionales.' },
          { en: 'Smart homes use fewer kilowatt-hours per month.', hi: 'स्मार्ट होम प्रति माह कम किलोवाट-घंटे का उपयोग करते हैं।', es: 'Los hogares inteligentes usan menos kilovatios-hora al mes.' }
        ]
      },
      {
        title: 'Disputing Discrepancies Politely with "I believe there has been..."',
        structure: 'I believe there has been a mistake / discrepancy with + [Bill/Account].',
        rule: 'Polite assertion formula used when calling customer support regarding overcharges.',
        examples: [
          { en: 'I believe there has been an overcharge on our latest heating invoice.', hi: 'मेरा मानना ​​है कि हमारे नवीनतम हीटिंग चालान में अधिक शुल्क लगाया गया है।', es: 'Creo que ha habido un cobro excesivo en nuestra última factura.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'You had better to pay the electricity bill today.',
      cor: 'You had better pay the electricity bill today.',
      exp: '"Had better" is followed by a bare infinitive (WITHOUT "to").',
      hi: '"Had better" के बाद "to" का प्रयोग नहीं किया जाता।',
      es: '"Had better" se construye con infinitivo sin "to": "had better pay".'
    },
    {
      inc: 'We use fewer electricity than last winter.',
      cor: 'We use less electricity than last winter.',
      exp: '"Electricity" is uncountable, so use "less", not "fewer".',
      hi: '"Electricity" अगणनीय (uncountable) है, इसलिए "less" का प्रयोग करें।',
      es: '"Electricity" es incontable, por lo que se usa "less".'
    },
    {
      inc: 'I want to dispute of this charge on my invoice.',
      cor: 'I want to dispute this charge on my invoice.',
      exp: '"Dispute" is a transitive verb here and takes a direct object without "of".',
      hi: '"Dispute" के बाद "of" नहीं आता: "dispute this charge".',
      es: '"Dispute" es transitivo directo: "dispute this charge".'
    },
    {
      inc: 'The bill is due on 25 of this month.',
      cor: 'The bill is due on the 25th of this month.',
      exp: 'Ordinal dates take "the" and an ordinal ending ("the 25th").',
      hi: 'तिथियों के साथ "the 25th" लिखा जाता है।',
      es: 'Las fechas ordinales llevan "the 25th of...".'
    },
    {
      inc: 'Can you give me a breakdown for the charges?',
      cor: 'Can you give me a breakdown of the charges?',
      exp: 'The correct collocation is "a breakdown of the costs/charges".',
      hi: 'लागत के विवरण के लिए "breakdown of" का प्रयोग होता है।',
      es: 'La frase correcta es "a breakdown of the charges".'
    }
  ],
  dialogues: [
    {
      title: 'Calling Customer Service to Dispute an Estimated Energy Bill',
      context: 'Noah phones his electricity supplier, Spark Energy, after receiving an unexpectedly high estimated bill.',
      charA: { name: 'Noah', av: '👨‍💼', role: 'Customer' },
      charB: { name: 'Clara', av: '👩‍💼', role: 'Support Agent' },
      turns: [
        { spk: 'Noah', text: 'Hello, I am calling regarding invoice number 8842. I believe there has been a billing discrepancy.', hi: 'नमस्ते, मैं चालान संख्या 8842 के संबंध में फोन कर रहा हूँ। मेरा मानना ​​है कि बिलिंग में कोई गड़बड़ी हुई है।', es: 'Hola, llamo en relación con la factura número 8842. Creo que ha habido una discrepancia en la facturación.' },
        { spk: 'Clara', text: 'Hello! I can certainly assist you with that. Could you provide your actual meter reading from today?', hi: 'नमस्ते! मैं निश्चित रूप से इसमें आपकी सहायता कर सकती हूँ। क्या आप आज की अपनी वास्तविक मीटर रीडिंग प्रदान कर सकते हैं?', es: '¡Hola! Con gusto le ayudo. ¿Podría facilitarme su lectura real del contador hoy?' },
        { spk: 'Noah', text: 'Yes, my smart meter shows 4,120 kilowatt-hours, but the bill estimated 4,600 units.', hi: 'हाँ, मेरा स्मार्ट मीटर 4,120 किलोवाट-घंटे दिखाता है, लेकिन बिल में 4,600 यूनिट का अनुमान लगाया गया था।', es: 'Sí, mi contador muestra 4.120 kWh, pero la factura estimó 4.600 unidades.' },
        { spk: 'Clara', text: 'Thank you for providing that. I will recalculate your invoice based on the actual usage and credit the difference to your account.', hi: 'यह जानकारी देने के लिए धन्यवाद। मैं वास्तविक उपयोग के आधार पर आपके चालान की पुनर्गणना करूँगी और अंतर आपके खाते में जमा कर दूँगी।', es: 'Gracias por facilitarlo. Recalcularé su factura según el consumo real y abonaré la diferencia.' },
        { spk: 'Noah', text: 'That is wonderful. Thank you very much for your quick help!', hi: 'यह बहुत अच्छा है। आपकी त्वरित मदद के लिए बहुत-बहुत धन्यवाद!', es: 'Maravilloso. ¡Muchas gracias por su rápida ayuda!' }
      ]
    },
    {
      title: 'Discussing Smart Home Energy Savings with a Flatmate',
      context: 'Maya and Liam discuss ways to lower their winter electricity expenses.',
      charA: { name: 'Maya', av: '👩‍💻', role: 'Flatmate' },
      charB: { name: 'Liam', av: '👨‍💻', role: 'Flatmate' },
      turns: [
        { spk: 'Maya', text: 'Liam, our electricity bill was twenty percent higher this month. We ought to cut down on energy consumption.', hi: 'लियाम, इस महीने हमारा बिजली का बिल बीस प्रतिशत अधिक आया है। हमें ऊर्जा की खपत कम करनी चाहिए।', es: 'Liam, nuestra factura de luz fue un 20% más alta este mes. Deberíamos reducir el consumo de energía.' },
        { spk: 'Liam', text: 'I agree. We should program the smart thermostat to turn down the heating when we are at work.', hi: 'मैं सहमत हूँ। जब हम काम पर हों तो हीटिंग कम करने के लिए हमें स्मार्ट थर्मोस्टेट को प्रोग्राम करना चाहिए।', es: 'De acuerdo. Deberíamos programar el termostato inteligente para bajar la calefacción cuando estemos en el trabajo.' },
        { spk: 'Maya', text: 'Also, we had better unplug appliances on standby and switch completely to LED light bulbs.', hi: 'साथ ही, हमें स्टैंडबाय पर मौजूद उपकरणों को अनप्लग करना चाहिए और पूरी तरह से एलईडी बल्बों पर स्विच करना चाहिए।', es: 'Además, más nos vale desenchufar aparatos en espera y cambiar del todo a bombillas LED.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u10_l142_p01',
      type: 'multiple_choice',
      prompt: 'Select the correct sentence using "had better":',
      options: [
        { id: '1', text: 'You had better submit the meter reading before Friday.', isCorrect: true },
        { id: '2', text: 'You had better to submit the meter reading before Friday.', isCorrect: false },
        { id: '3', text: 'You have better submit the meter reading before Friday.', isCorrect: false },
        { id: '4', text: 'You had better submitting the meter reading before Friday.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Had better" is followed by a bare infinitive ("submit").'
    },
    {
      id: 'ex_u10_l142_p02',
      type: 'fill_blank',
      prompt: 'LED lighting consumes far _____ (less / fewer) electricity than older halogen bulbs.',
      correctAnswer: 'less',
      explanation: '"Electricity" is uncountable, so "less" is the correct comparative.'
    },
    {
      id: 'ex_u10_l142_p03',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a polite billing complaint:',
      tokens: ['I', 'believe', 'there', 'has', 'been', 'a', 'billing', 'discrepancy.'],
      correctAnswer: 'I believe there has been a billing discrepancy.',
      explanation: 'Polite discrepancy assertion formula.'
    },
    {
      id: 'ex_u10_l142_p04',
      type: 'error_correction',
      prompt: 'Fix the error in this advice sentence:',
      sentence: 'We ought turn down the radiator when leaving the flat.',
      correctAnswer: 'We ought to turn down the radiator when leaving the flat.',
      explanation: '"Ought" must be followed by "to + base verb".'
    },
    {
      id: 'ex_u10_l142_p05',
      type: 'translation',
      prompt: 'Translate into English: "ऊर्जा बचाने के लिए हमें स्टैंडबाय मोड बंद कर देना चाहिए।"',
      correctAnswer: 'We should switch off standby mode to save energy.',
      acceptableAnswers: ['We ought to switch off standby mode to save energy.'],
      explanation: '"Switch off standby mode" is the natural phrase.'
    },
    {
      id: 'ex_u10_l142_p06',
      type: 'listening',
      prompt: 'Listen to the customer service voice and identify the due date:',
      audioText: 'Your monthly broadband payment of forty pounds is due on the twenty-fifth of October.',
      options: [
        { id: '1', text: 'October 25th', isCorrect: true },
        { id: '2', text: 'October 15th', isCorrect: false },
        { id: '3', text: 'November 25th', isCorrect: false },
        { id: '4', text: 'October 5th', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The due date specified is October 25th.'
    },
    {
      id: 'ex_u10_l142_p07',
      type: 'match_pairs',
      prompt: 'Match utility terms with their definitions:',
      options: [
        { id: '1', text: 'smart meter → digital energy consumption monitor' },
        { id: '2', text: 'direct debit → automatic monthly bank transfer' },
        { id: '3', text: 'standing charge → fixed base rate fee' },
        { id: '4', text: 'tariff → rate schedule per unit consumed' }
      ],
      correctAnswer: 'matched',
      explanation: 'Core utility vocabulary.'
    },
    {
      id: 'ex_u10_l142_p08',
      type: 'dialogue_completion',
      prompt: 'Complete the sentence:\nCustomer: "My bill is estimated too high."\nAgent: "Please _____ so we can update your invoice."',
      options: [
        { id: '1', text: 'submit a meter reading', isCorrect: true },
        { id: '2', text: 'stand clear of the doors', isCorrect: false },
        { id: '3', text: 'take an aisle seat', isCorrect: false },
        { id: '4', text: 'rather to pay', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Submitting a meter reading resolves estimated bills.'
    },
    {
      id: 'ex_u10_l142_p09',
      type: 'speaking',
      prompt: 'Speak this advice on energy conservation:',
      targetText: 'We had better lower the thermostat by one degree to cut down on monthly utility costs.',
      explanation: 'Emphasize "had better lower" and "utility costs".'
    },
    {
      id: 'ex_u10_l142_p10',
      type: 'personal_production',
      prompt: 'Write an advice sentence using "ought to" about saving water or electricity:',
      sentenceTemplate: 'We ought to [action] to reduce our [utility] bill.',
      correctAnswer: 'We ought to turn off the tap to reduce our water bill.',
      explanation: 'Tests use of "ought to + base verb".'
    }
  ],
  review: [
    {
      id: 'ex_u10_l142_r01',
      type: 'multiple_choice',
      prompt: 'Which word completes the phrase: "We need a breakdown _____ the extra charges"?',
      options: [
        { id: '1', text: 'of', isCorrect: true },
        { id: '2', text: 'for', isCorrect: false },
        { id: '3', text: 'on', isCorrect: false },
        { id: '4', text: 'with', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The collocation is "a breakdown of".'
    },
    {
      id: 'ex_u10_l142_r02',
      type: 'fill_blank',
      prompt: 'You had better _____ (unplug) the charger when the battery is full.',
      correctAnswer: 'unplug',
      explanation: '"Had better" takes base verb "unplug".'
    },
    {
      id: 'ex_u10_l142_r03',
      type: 'word_ordering',
      prompt: 'Order the words to create a money-saving tip:',
      tokens: ['Setting', 'up', 'direct', 'debit', 'can', 'save', 'you', 'money.'],
      correctAnswer: 'Setting up direct debit can save you money.',
      explanation: 'Natural banking advice phrase.'
    },
    {
      id: 'ex_u10_l142_r04',
      type: 'error_correction',
      prompt: 'Correct the grammatical error:',
      sentence: 'This new solar heater uses fewer power than before.',
      correctAnswer: 'This new solar heater uses less power than before.',
      explanation: '"Power" is uncountable, so use "less".'
    },
    {
      id: 'ex_u10_l142_r05',
      type: 'translation',
      prompt: 'Translate into English: "बिजली का बिल हर महीने की पच्चीस तारीख को देय होता है।"',
      correctAnswer: 'The electricity bill is due on the twenty-fifth of every month.',
      acceptableAnswers: ['The electricity bill is due on the 25th of every month.'],
      explanation: '"Due on the 25th" expresses payment deadlines.'
    },
    {
      id: 'ex_u10_l142_r06',
      type: 'listening',
      prompt: 'Listen and identify how much energy was saved:',
      audioText: 'By installing double insulation and smart LED bulbs, we saved thirty percent on heating bills.',
      options: [
        { id: '1', text: '30%', isCorrect: true },
        { id: '2', text: '13%', isCorrect: false },
        { id: '3', text: '50%', isCorrect: false },
        { id: '4', text: '25%', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The audio explicitly states 30%.'
    },
    {
      id: 'ex_u10_l142_r07',
      type: 'listen_and_type',
      prompt: 'Listen and type what you hear:',
      audioText: 'Our smart meter helps us track hourly electricity consumption.',
      correctAnswer: 'Our smart meter helps us track hourly electricity consumption.',
      explanation: 'Focus on spelling of "consumption" and "hourly".'
    },
    {
      id: 'ex_u10_l142_r08',
      type: 'multiple_choice',
      prompt: 'What is a fixed charge paid regardless of consumption called?',
      options: [
        { id: '1', text: 'Standing charge', isCorrect: true },
        { id: '2', text: 'Direct debit', isCorrect: false },
        { id: '3', text: 'Notice period', isCorrect: false },
        { id: '4', text: 'Luggage allowance', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'A standing charge is the base rate fee.'
    }
  ],
  assessment: [
    {
      id: 'ex_u10_l142_a01',
      type: 'multiple_choice',
      prompt: 'Which advice sentence expresses strong urgency correctly?',
      options: [
        { id: '1', text: 'You had better pay the outstanding utility invoice before the power is disconnected.', isCorrect: true },
        { id: '2', text: 'You had better to pay the outstanding utility invoice before power is cut.', isCorrect: false },
        { id: '3', text: 'You have better paying the invoice today.', isCorrect: false },
        { id: '4', text: 'You ought pay the invoice without delay.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Option 1 correctly uses "had better + bare infinitive".'
    },
    {
      id: 'ex_u10_l142_a02',
      type: 'fill_blank',
      prompt: 'We ought _____ (switch) to an eco-friendly energy provider next month.',
      correctAnswer: 'to switch',
      explanation: '"Ought" requires the infinitive "to switch".'
    },
    {
      id: 'ex_u10_l142_a03',
      type: 'word_ordering',
      prompt: 'Assemble the tokens to make a logical statement:',
      tokens: ['Smart', 'thermostats', 'can', 'help', 'reduce', 'monthly', 'heating', 'expenses.'],
      correctAnswer: 'Smart thermostats can help reduce monthly heating expenses.',
      explanation: 'Standard word order.'
    },
    {
      id: 'ex_u10_l142_a04',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence:',
      sentence: 'I would like to dispute of the late fee on my broadband invoice.',
      correctAnswer: 'I would like to dispute the late fee on my broadband invoice.',
      explanation: 'Omit "of" after "dispute".'
    },
    {
      id: 'ex_u10_l142_a05',
      type: 'translation',
      prompt: 'Translate into English: "हमारे स्मार्ट मीटर में अनुमानित बिल की तुलना में बहुत कम रीडिंग है।"',
      correctAnswer: 'Our smart meter has a much lower reading than the estimated bill.',
      acceptableAnswers: ['Our smart meter shows a much lower reading than the estimated bill.'],
      explanation: 'Accurate comparative construction.'
    },
    {
      id: 'ex_u10_l142_a06',
      type: 'dialogue_completion',
      prompt: 'Complete the conversation:\nAgent: "How can I help you today?"\nCustomer: "Hello, I noticed a _____ on my latest gas statement and would like a recalculation."',
      options: [
        { id: '1', text: 'significant discrepancy', isCorrect: true },
        { id: '2', text: 'window seat', isCorrect: false },
        { id: '3', text: 'boarding pass', isCorrect: false },
        { id: '4', text: 'connecting flight', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Significant discrepancy" fits the billing context perfectly.'
    },
    {
      id: 'ex_u10_l142_a07',
      type: 'speaking',
      prompt: 'Read this household energy advice aloud:',
      targetText: 'We should set up a direct debit and submit regular meter readings to avoid unexpected energy bills.',
      explanation: 'Focus on clear pronunciation of "direct debit" and "unexpected".'
    }
  ]
};

// =========================================================================
// LESSON 143: Medical Consultations, Prescriptions & Describing Symptoms
// =========================================================================
export const LESSON_143_CONFIG: LessonConfigA2 = {
  num: 143,
  title: 'Medical Consultations, Prescriptions & Describing Symptoms',
  icon: '🩺',
  estMin: 25,
  objTitle: 'Describing Physical Symptoms, Consulting a Doctor & Understanding Dosage',
  objDesc: 'Learn to describe health symptoms in detail using present perfect continuous ("I have been feeling dizzy for three days"), understand doctor recommendations, and follow prescription dosage instructions.',
  objHi: 'विस्तार से स्वास्थ्य लक्षणों का वर्णन करना, डॉक्टर से परामर्श लेना और दवा की खुराक (dosage) के निर्देशों को समझना सीखें।',
  objEs: 'Describir síntomas de salud con detalle, consultar al médico y comprender instrucciones de dosificación de medicamentos.',
  canDo: [
    'I can describe physical symptoms and their duration using the present perfect continuous.',
    'I can explain pain levels, allergies, and medical history to a healthcare professional.',
    'I can understand doctor instructions and prescription labels (dosage, frequency, side effects).',
    'I can schedule or reschedule a clinic appointment politely.'
  ],
  canDoHi: [
    'मैं प्रेजेंट परफेक्ट कंटीन्यूअस का उपयोग करके शारीरिक लक्षणों और उनकी अवधि का वर्णन कर सकता हूँ।',
    'मैं डॉक्टर को दर्द का स्तर, एलर्जी और चिकित्सा इतिहास समझा सकता हूँ।',
    'मैं डॉक्टर के निर्देशों और नुस्खे के लेबल (खुराक, समय, दुष्प्रभाव) को समझ सकता हूँ।',
    'मैं क्लिनिक अपॉइंटमेंट को विनम्रतापूर्वक शेड्यूल या रीशेड्यूल कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo describir síntomas y su duración con el presente perfecto continuo.',
    'Puedo explicar niveles de dolor, alergias e historial médico al médico.',
    'Puedo entender instrucciones médicas y prospectos de recetas (dosis, efectos).',
    'Puedo pedir o cambiar citas médicas educadamente.'
  ],
  vocab: [
    { w: 'symptom', p: '/ˈsɪmptəm/', m: 'a physical or mental feature indicating a condition of disease', hi: 'लक्षण', es: 'síntoma', fr: 'symptôme', de: 'Symptom', pt: 'sintoma', zh: '症状', ar: 'عرض مرضي', ja: '症状', ru: 'симптом', ex: 'Common flu symptoms include high fever, chills, and muscle aches.', exHi: 'फ्लू के सामान्य लक्षणों में तेज बुखार, ठंड लगना और मांसपेशियों में दर्द शामिल हैं।', exEs: 'Los síntomas comunes de la gripe incluyen fiebre alta y dolores musculares.', ic: '🤒' },
    { w: 'prescription', p: '/prɪˈskrɪpʃn/', m: 'an instruction written by a medical practitioner that authorizes a patient to be provided a medicine', hi: 'दवा की पर्ची / नुस्खा', es: 'receta médica / prescripción', fr: 'ordonnance', de: 'Rezept / ärztliche Verordnung', pt: 'receita médica', zh: '处方 / 药方', ar: 'وصفة طبية / روشتة', ja: '処方箋', ru: 'рецепт врача', ex: 'The doctor gave me a prescription for five hundred milligram antibiotics.', exHi: 'डॉक्टर ने मुझे पांच सौ मिलीग्राम एंटीबायोटिक दवाओं की पर्ची दी।', exEs: 'El médico me dio una receta para antibióticos de 500 mg.', ic: '📝' },
    { w: 'dosage', p: '/ˈdəʊsɪdʒ/', m: 'the size or frequency of a dose of a medicine or drug', hi: 'खुराक / मात्रा', es: 'dosis / posología', fr: 'posologie / dosage', de: 'Dosierung', pt: 'dosagem / posologia', zh: '剂量 / 服用量', ar: 'جرعة الدواء', ja: '服用量 / 投与量', ru: 'дозировка', ex: 'Follow the prescribed dosage strictly: take one tablet twice daily after meals.', exHi: 'निर्धारित खुराक का सख्ती से पालन करें: भोजन के बाद दिन में दो बार एक गोली लें।', exEs: 'Siga la dosis prescrita: tome una pastilla dos veces al día después de comer.', ic: '💊' },
    { w: 'dizzy', p: '/ˈdɪzi/', m: 'having or involving a sensation of spinning around and losing one\'s balance', hi: 'चक्कर आना / सिर घूमना', es: 'mareado', fr: 'pris de vertige / étourdi', de: 'schwindelig', pt: 'tonto / com tontura', zh: '头晕目眩的', ar: 'دوار / دايخ', ja: 'めまいがする', ru: 'головокружительный / испытывающий головокружение', ex: 'I have been feeling dizzy whenever I stand up too quickly.', exHi: 'जब भी मैं बहुत जल्दी उठता हूँ तो मुझे चक्कर आने लगता है।', exEs: 'Me he estado sintiendo mareado cada vez que me levanto demasiado rápido.', ic: '💫' },
    { w: 'nausea', p: '/ˈnɔːziə/', m: 'a feeling of sickness with an inclination to vomit', hi: 'जी मिचलाना / उल्टी जैसा लगना', es: 'náuseas', fr: 'nausée', de: 'Übelkeit', pt: 'náusea / enjoo', zh: '恶心', ar: 'غثيان', ja: '吐き気 / 悪心', ru: 'тошнота', ex: 'The patient complained of severe nausea and stomach cramps.', exHi: 'मरीज ने गंभीर मतली और पेट में ऐंठन की शिकायत की।', exEs: 'El paciente se quejó de náuseas intensas y calambres estomacales.', ic: '🤢' },
    { w: 'consultation', p: '/ˌkɒnslˈteɪʃn/', m: 'a meeting with an expert or professional, such as a doctor, in order to seek advice', hi: 'परामर्श / डॉक्टर से मुलाकात', es: 'consulta médica', fr: 'consultation médicale', de: 'ärztliche Beratung / Sprechstunde', pt: 'consulta médica', zh: '问诊 / 咨询', ar: 'استشارة طبية', ja: '診察 / 相談', ru: 'консультация / приём врача', ex: 'A standard medical consultation lasts about fifteen minutes.', exHi: 'एक मानक चिकित्सा परामर्श लगभग पंद्रह मिनट तक चलता है।', exEs: 'Una consulta médica estándar dura unos quince minutos.', ic: '🩺' },
    { w: 'allergy', p: '/ˈælədʒi/', m: 'a damaging immune response by the body to a substance, especially pollen, fur, or a particular food', hi: 'एलर्जी', es: 'alergia', fr: 'allergie', de: 'Allergie', pt: 'alergia', zh: '过敏', ar: 'حساسية', ja: 'アレルギー', ru: 'аллергия', ex: 'Please inform the nurse if you have any known penicillin allergy.', exHi: 'यदि आपको पेनिसिलिन से कोई एलर्जी है तो कृपया नर्स को सूचित करें।', exEs: 'Por favor, informe a la enfermera si tiene alergia a la penicilina.', ic: '🤧' },
    { w: 'antibiotic', p: '/ˌæntibaɪˈɒtɪk/', m: 'a medicine that inhibits the growth of or destroys microorganisms', hi: 'एंटीबायोटिक दवा', es: 'antibiótico', fr: 'antibiotique', de: 'Antibiotikum', pt: 'antibiótico', zh: '抗生素', ar: 'مضاد حيوي', ja: '抗生物質', ru: 'антибиотик', ex: 'Make sure to finish the full seven-day course of antibiotics.', exHi: 'एंटीबायोटिक दवाओं का पूरा सात दिन का कोर्स समाप्त करना सुनिश्चित करें।', exEs: 'Asegúrese de terminar el tratamiento completo de antibióticos de 7 días.', ic: '💊' },
    { w: 'ointment', p: '/ˈɔɪntmənt/', m: 'a smooth oily substance that is rubbed on the skin for medicinal purposes', hi: 'मरहम / मलहम', es: 'pomada / ungüento', fr: 'pommade / onguent', de: 'Salbe', pt: 'pomada', zh: '药膏 / 软膏', ar: 'مرهم', ja: '軟膏 / 塗り薬', ru: 'мазь', ex: 'Apply this soothing ointment directly to the rash twice a day.', exHi: 'इस सुखदायक मरहम को दिन में दो बार सीधे दाने पर लगाएं।', exEs: 'Aplique esta pomada calmante directamente sobre la erupción dos veces al día.', ic: '🧴' },
    { w: 'side effect', p: '/saɪd ɪˈfekt/', m: 'a secondary, typically undesirable effect of a drug or medical treatment', hi: 'दुष्प्रभाव / साइड इफेक्ट', es: 'efecto secundario', fr: 'effet secondaire / indésirable', de: 'Nebenwirkung', pt: 'efeito colateral', zh: '副作用', ar: 'أثر جانبي', ja: '副作用', ru: 'побочный эффект', ex: 'Drowsiness is a common side effect of this antihistamine medication.', exHi: 'सुस्ती इस एंटीहिस्टामाइन दवा का एक सामान्य दुष्प्रभाव है।', exEs: 'La somnolencia es un efecto secundario común de este antihistamínico.', ic: '⚠️' },
    { w: 'fever', p: '/ˈfiːvə/', m: 'an abnormally high body temperature, usually accompanied by shivering and headache', hi: 'बुखार', es: 'fiebre', fr: 'fièvre', de: 'Fieber', pt: 'febre', zh: '发烧 / 发热', ar: 'حمى / حرارة', ja: '熱 / 発熱', ru: 'жар / температура / лихорадка', ex: 'His fever reached thirty-nine degrees Celsius during the night.', exHi: 'रात के दौरान उसका बुखार उनतालीस डिग्री सेल्सियस तक पहुँच गया।', exEs: 'Su fiebre alcanzó los treinta y nueve grados durante la noche.', ic: '🌡️' },
    { w: 'swollen', p: '/ˈswəʊlən/', m: 'become larger or rounder in size, typically as a result of an accumulation of fluid', hi: 'सूजा हुआ / सूजन युक्त', es: 'hinchado / inflamado', fr: 'gonflé / enflé', de: 'geschwollen', pt: 'inchado', zh: '肿胀的', ar: 'متورم', ja: '腫れた', ru: 'опухший / отёкший', ex: 'My left ankle is swollen and bruised after tripping on the stairs.', exHi: 'सीढ़ियों पर फिसलने के बाद मेरा बायां टखना सूज गया है और उस पर चोट के निशान हैं।', exEs: 'Mi tobillo izquierdo está hinchado y con moretones tras tropezar.', ic: '🦶' },
    { w: 'throat', p: '/θrəʊt/', m: 'the passage which leads from the back of the mouth of a person or animal', hi: 'गला', es: 'garganta', fr: 'gorge', de: 'Hals / Rachen', pt: 'garganta', zh: '喉咙', ar: 'حلق / حنجرة', ja: '喉 (のど)', ru: 'горло', ex: 'I have had a sore throat and dry cough since Monday.', exHi: 'मुझे सोमवार से गले में खराश और सूखी खांसी है।', exEs: 'Tengo dolor de garganta y tos seca desde el lunes.', ic: '🗣️' },
    { w: 'painkiller', p: '/ˈpeɪnkɪlə/', m: 'a drug or medicine for relieving pain', hi: 'दर्द निवारक दवा', es: 'analgésico / calmante', fr: 'analgésique / antidouleur', de: 'Schmerzmittel', pt: 'analgésico', zh: '止痛药', ar: 'مسكن آلام', ja: '鎮痛剤 / 痛み止め', ru: 'обезболивающее', ex: 'Take an over-the-counter painkiller if your headache persists.', exHi: 'यदि आपका सिरदर्द बना रहता है तो कोई सामान्य दर्द निवारक दवा लें।', exEs: 'Tome un analgésico de venta libre si el dolor de cabeza persiste.', ic: '💊' },
    { w: 'clinic', p: '/ˈklɪnɪk/', m: 'an establishment or hospital department where outpatients are given medical treatment or advice', hi: 'क्लिनिक / चिकित्सालय', es: 'clínica / ambulatorio', fr: 'clinique / dispensaire', de: 'Klinik / Praxis', pt: 'clínica / posto de saúde', zh: '诊所', ar: 'عيادة', ja: '診療所 / クリニック', ru: 'поликлиника / клиника', ex: 'The walk-in clinic is open from eight in the morning until eight at night.', exHi: 'वॉक-इन क्लिनिक सुबह आठ बजे से रात आठ बजे तक खुला रहता है।', exEs: 'La clínica sin cita está abierta de 8:00 a 20:00.', ic: '🏥' },
    { w: 'tablet', p: '/ˈtæblət/', m: 'a small disc or cylinder of compressed solid substance, typically a medicine', hi: 'गोली / टैबलेट', es: 'pastilla / comprimido', fr: 'comprimé / pastille', de: 'Tablette', pt: 'comprimido / pílula', zh: '药片', ar: 'قرص دواء', ja: '錠剤 / タブレット', ru: 'таблетка', ex: 'Swallow one tablet with a full glass of water every eight hours.', exHi: 'हर आठ घंटे में एक पूरे गिलास पानी के साथ एक गोली निगलें।', exEs: 'Trague un comprimido con un vaso de agua cada ocho horas.', ic: '💊' },
    { w: 'drowsy', p: '/ˈdraʊzi/', m: 'sleepy and lethargic; half asleep', hi: 'सुस्त / नींद में', es: 'somnoliento / adormilado', fr: 'somnolent / engourdi', de: 'schläfrig / benommen', pt: 'sonolento', zh: '昏昏欲睡的', ar: 'نعسان', ja: '眠気がある', ru: 'сонливый', ex: 'This cough syrup may make you feel drowsy, so avoid driving.', exHi: 'यह कफ सिरप आपको नींद का अहसास करा सकता है, इसलिए गाड़ी चलाने से बचें।', exEs: 'Este jarabe para la tos puede causar somnolencia, evite conducir.', ic: '😴' },
    { w: 'examination', p: '/ɪɡˌzæmɪˈneɪʃn/', m: 'a detailed inspection or investigation, especially medical', hi: 'चिकित्सा परीक्षण / जांच', es: 'reconocimiento / exploración médica', fr: 'examen médical / auscultation', de: 'ärztliche Untersuchung', pt: 'exame médico', zh: '体格检查', ar: 'فحص طبي', ja: '診察 / 検査', ru: 'медицинский осмотр / обследование', ex: 'After a physical examination, the doctor ordered blood tests.', exHi: 'शारीरिक परीक्षण के बाद डॉक्टर ने रक्त परीक्षण का आदेश दिया।', exEs: 'Tras el examen físico, el médico ordenó análisis de sangre.', ic: '📋' },
    { w: 'remedy', p: '/ˈremədi/', m: 'a medicine or treatment for a disease or injury', hi: 'उपचार / घरेलू उपाय', es: 'remedio / tratamiento casero', fr: 'remède / traitement', de: 'Heilmittel / Hausmittel', pt: 'remédio caseiro', zh: '疗法 / 补救措施', ar: 'علاج / دواء', ja: '治療法 / 救済策', ru: 'лекарство / средство', ex: 'Warm tea with honey and lemon is a traditional home remedy for a cough.', exHi: 'शहद और नींबू के साथ गर्म चाय खांसी के लिए एक पारंपरिक घरेलू उपाय है।', exEs: 'El té caliente con miel y limón es un remedio casero para la tos.', ic: '☕' },
    { w: 'capsule', p: '/ˈkæpsjuːl/', m: 'a small gelatinous case enclosing a dose of medication', hi: 'कैप्सूल', es: 'cápsula', fr: 'gélule / capsule', de: 'Kapsel', pt: 'cápsula', zh: '胶囊', ar: 'كبسولة', ja: 'カプセル剤', ru: 'капсула', ex: 'Take one vitamin D capsule daily with your breakfast.', exHi: 'रोजाना अपने नाश्ते के साथ एक विटामिन डी कैप्सूल लें।', exEs: 'Tome una cápsula de vitamina D al día con el desayuno.', ic: '💊' }
  ],
  chunks: [
    { phrase: 'I have been feeling unwell for', meaning: 'describing symptoms ongoing from a past point until now', hi: 'मैं ... से अस्वस्थ महसूस कर रहा हूँ', es: 'me he estado sintiendo mal desde hace...', fr: 'je ne me sens pas bien depuis...', de: 'ich fühle mich seit... unwohl', pt: 'tenho me sentido mal há...', zh: '我已经觉得不舒服好几天了', ar: 'أشعر بتوعك منذ...', ja: '〜の間、体調がすぐれません', ru: 'я плохо себя чувствую уже...', note: 'Present perfect continuous: "I have been feeling dizzy for three days."', ic: '⏳' },
    { phrase: 'take after meals', meaning: 'consume medication following food intake to prevent stomach upset', hi: 'भोजन के बाद लेना', es: 'tomar después de las comidas', fr: 'prendre après les repas', de: 'nach den Mahlzeiten einnehmen', pt: 'tomar após as refeições', zh: '饭后服用', ar: 'يؤخذ بعد الوجبات', ja: '食後に服用する', ru: 'принимать после еды', note: 'Standard medical dosage direction.', ic: '🍽️' },
    { phrase: 'on an empty stomach', meaning: 'without having eaten any food beforehand', hi: 'खाली पेट', es: 'en ayunas / con el estómago vacío', fr: 'à jeun / l\'estomac vide', de: 'auf nüchternen Magen', pt: 'em jejum / com o estômago vazio', zh: '空腹', ar: 'على معدة فارغة', ja: '空腹時に', ru: 'натощак / на голодный желудок', note: 'Vital instruction for specific medications.', ic: '🚫' },
    { phrase: 'allergic to penicillin', meaning: 'having an adverse immune reaction to specific antibiotics', hi: 'पेनिसिलिन से एलर्जी होना', es: 'alérgico a la penicilina', fr: 'allergique à la pénicilline', de: 'allergisch gegen Penicillin', pt: 'alérgico à penicilina', zh: '对青霉素过敏', ar: 'حساسية من البنسلين', ja: 'ペニシリンアレルギーがある', ru: 'аллергия на пенициллин', note: 'Crucial medical history disclosure.', ic: '⚠️' },
    { phrase: 'make an appointment with', meaning: 'schedule a consultation with a specific physician or specialist', hi: 'के साथ अपॉइंटमेंट लेना', es: 'pedir cita con', fr: 'prendre rendez-vous avec', de: 'einen Termin vereinbaren mit', pt: 'marcar uma consulta com', zh: '与...预约看诊', ar: 'حجز موعد مع', ja: '〜の予約を取る', ru: 'записаться на приём к', note: 'Standard healthcare interaction phrase.', ic: '📅' },
    { phrase: 'run a fever', meaning: 'have an elevated body temperature', hi: 'बुखार होना', es: 'tener fiebre', fr: 'avoir de la fièvre', de: 'Fieber haben', pt: 'estar com febre', zh: '发烧', ar: 'يعاني من الحمى', ja: '熱を出す', ru: 'температурить', note: 'Common colloquial medical idiom.', ic: '🌡️' },
    { phrase: 'over the counter', meaning: 'medicines obtainable without a physician\'s prescription', hi: 'बिना पर्ची के मिलने वाली दवा (ओटीसी)', es: 'sin receta / de venta libre', fr: 'en vente libre / sans ordonnance', de: 'rezeptfrei / frei verkäuflich', pt: 'sem receita / de venda livre', zh: '非处方药 (OTC)', ar: 'دون وصفة طبية', ja: '市販の / 処方箋なしで買える', ru: 'безрецептурный', note: 'Standard retail pharmacy phrase.', ic: '🏪' },
    { phrase: 'finish the whole course', meaning: 'complete all prescribed doses of a medicine without stopping early', hi: 'दवा का पूरा कोर्स खत्म करना', es: 'terminar todo el tratamiento', fr: 'terminer tout le traitement', de: 'die Behandlung vollständig abschließen', pt: 'terminar todo o tratamento', zh: '服完整个疗程', ar: 'إكمال دورة العلاج كاملة', ja: '薬を最後まで飲み切る', ru: 'пропить полный курс', note: 'Essential instruction for antibiotics.', ic: '✔️' }
  ],
  grammar: {
    title: 'Describing Symptoms & Durations: Present Perfect Continuous ("have been feeling... for / since")',
    concept: 'Using the Present Perfect Continuous (have/has been + verb-ing) to describe physical sensations that began in the past and continue into the present.',
    patterns: [
      {
        title: 'Present Perfect Continuous for Ongoing Symptoms',
        structure: 'Subject + have / has been + Verb-ing + for [Duration] / since [Specific Time]',
        rule: 'Use "have/has been + -ing" to show that a symptom started in the past and is still happening right now.',
        examples: [
          { en: 'I have been coughing continuously for three days.', hi: 'मुझे तीन दिनों से लगातार खांसी आ रही है।', es: 'He estado tosiendo continuamente durante tres días.' },
          { en: 'She has been feeling dizzy since yesterday morning.', hi: 'वह कल सुबह से चक्कर महसूस कर रही है।', es: 'Ella se ha estado sintiendo mareada desde ayer por la mañana.' }
        ]
      },
      {
        title: 'Expressing Medical Instructions with Imperatives & Modals',
        structure: 'Take + [Dosage] + [Frequency] + [Condition: before/after meals] | You must / should + Base Verb',
        rule: 'Doctor prescriptions rely on concise imperative patterns and modal obligations.',
        examples: [
          { en: 'Take one tablet twice daily with water after meals.', hi: 'भोजन के बाद पानी के साथ दिन में दो बार एक गोली लें।', es: 'Tome una pastilla dos veces al día con agua después de las comidas.' },
          { en: 'You must finish the entire course even if you feel better.', hi: 'आपको पूरा कोर्स खत्म करना होगा भले ही आप बेहतर महसूस करें।', es: 'Debe terminar todo el tratamiento aunque se sienta mejor.' }
        ]
      },
      {
        title: 'Stating Allergies & Disclosures: "I am allergic to..."',
        structure: 'I am allergic to + [Medication / Substance]. | I have a history of + [Condition].',
        rule: 'Vital patient safety structures for doctor and pharmacist consultations.',
        examples: [
          { en: 'I am allergic to penicillin and aspirin.', hi: 'मुझे पेनिसिलिन और एस्पिरिन से एलर्जी है।', es: 'Soy alérgico a la penicilina y a la aspirina.' },
          { en: 'I have a history of high blood pressure.', hi: 'मेरा उच्च रक्तचाप का इतिहास रहा है।', es: 'Tengo antecedentes de hipertensión arterial.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'I am feeling dizzy since three days.',
      cor: 'I have been feeling dizzy for three days.',
      exp: 'Use Present Perfect Continuous ("have been feeling") with "for + duration", not present continuous with "since".',
      hi: 'अवधि के लिए "have been feeling... for three days" का प्रयोग करें।',
      es: 'Usa el presente perfecto continuo con "for": "have been feeling dizzy for three days".'
    },
    {
      inc: 'The doctor gave to me a prescription.',
      cor: 'The doctor gave me a prescription.',
      exp: '"Give" takes indirect object directly: "gave me a prescription".',
      hi: '"Gave me a prescription" लिखा जाता है, "gave to me" नहीं।',
      es: 'Se dice "gave me a prescription", sin "to".'
    },
    {
      inc: 'You should stop antibiotics when you feel good.',
      cor: 'You must finish the full course of antibiotics.',
      exp: 'Medically and grammatically, antibiotics require completing "the full course".',
      hi: 'एंटीबायोटिक का पूरा कोर्स खत्म करना जरूरी होता है ("finish the full course")।',
      es: 'Se debe completar el tratamiento: "finish the full course".'
    },
    {
      inc: 'I have allergy for peanuts.',
      cor: 'I am allergic to peanuts. / I have an allergy to peanuts.',
      exp: 'Use the preposition "to": "allergic to" or "an allergy to".',
      hi: 'एलर्जी के लिए "allergic to" का प्रयोग होता है।',
      es: 'Se usa la preposición "to": "allergic to" / "an allergy to".'
    },
    {
      inc: 'Take this pill in empty stomach.',
      cor: 'Take this pill on an empty stomach.',
      exp: 'The correct idiom is "on an empty stomach".',
      hi: 'खाली पेट के लिए सही मुहावरा "on an empty stomach" है।',
      es: 'La expresión fija es "on an empty stomach".'
    }
  ],
  dialogues: [
    {
      title: 'Consulting a Doctor About Persistent Flu Symptoms',
      context: 'Dr. Evans examines Daniel, who has been feeling ill for several days.',
      charA: { name: 'Dr. Evans', av: '👨‍⚕️', role: 'Doctor' },
      charB: { name: 'Daniel', av: '👨‍💼', role: 'Patient' },
      turns: [
        { spk: 'Dr. Evans', text: 'Good morning Daniel. What seems to be the trouble today?', hi: 'शुभ प्रभात डेनियल। आज क्या परेशानी लग रही है?', es: 'Buenos días Daniel. ¿Qué le ocurre hoy?' },
        { spk: 'Daniel', text: 'Good morning Doctor. I have been feeling exhausted and running a mild fever for the past four days.', hi: 'शुभ प्रभात डॉक्टर। मैं पिछले चार दिनों से थकान महसूस कर रहा हूँ और हल्का बुखार आ रहा है।', es: 'Buenos días doctor. Me he estado sintiendo agotado y con fiebre leve los últimos cuatro días.' },
        { spk: 'Dr. Evans', text: 'Let me check your temperature and listen to your chest... Are you experiencing any throat pain or coughing?', hi: 'मुझे आपका तापमान जांचने दीजिए और आपकी छाती की जांच करने दीजिए... क्या आपको गले में दर्द या खांसी हो रही है?', es: 'Déjeme tomarle la temperatura y auscultarle... ¿Tiene dolor de garganta o tos?' },
        { spk: 'Daniel', text: 'Yes, I have had a dry cough, and my throat feels swollen, especially in the morning.', hi: 'हाँ, मुझे सूखी खांसी है और मेरा गला सूजा हुआ महसूस होता है, खासकर सुबह में।', es: 'Sí, he tenido tos seca y siento la garganta inflamada, sobre todo por la mañana.' },
        { spk: 'Dr. Evans', text: 'You have a mild upper respiratory infection. I will write a prescription for an anti-inflammatory tablet. Take one tablet twice daily after meals.', hi: 'आपको हल्का ऊपरी श्वसन संक्रमण है। मैं एक सूजनरोधी गोली का नुस्खा लिखूँगा। भोजन के बाद दिन में दो बार एक गोली लें।', es: 'Tiene una infección respiratoria leve. Le recetaré un antiinflamatorio. Tome una pastilla dos veces al día después de comer.' }
      ]
    },
    {
      title: 'Picking Up Prescription Medication at the Pharmacy',
      context: 'Hannah collects her prescribed medication and asks the pharmacist about side effects.',
      charA: { name: 'Hannah', av: '👩‍💼', role: 'Patient' },
      charB: { name: 'Sanjay', av: '👨‍🔬', role: 'Pharmacist' },
      turns: [
        { spk: 'Hannah', text: 'Hello, I would like to collect this prescription from Dr. Evans.', hi: 'नमस्ते, मैं डॉ. इवांस से यह नुस्खा लेना चाहूँगी।', es: 'Hola, me gustaría recoger esta receta del Dr. Evans.' },
        { spk: 'Sanjay', text: 'Hello! Here is your medication. Take one capsule every eight hours with a full glass of water.', hi: 'नमस्ते! यह आपकी दवा है। एक पूरे गिलास पानी के साथ हर आठ घंटे में एक कैप्सूल लें।', es: '¡Hola! Aquí tiene su medicina. Tome una cápsula cada ocho horas con un vaso entero de agua.' },
        { spk: 'Hannah', text: 'Thank you. Are there any common side effects I should watch out for?', hi: 'धन्यवाद। क्या कोई सामान्य दुष्प्रभाव हैं जिनका मुझे ध्यान रखना चाहिए?', es: 'Gracias. ¿Hay algún efecto secundario común que deba tener en cuenta?' },
        { spk: 'Sanjay', text: 'It might cause mild drowsiness, so avoid driving or heavy machinery while taking it.', hi: 'इससे हल्की नींद आ सकती है, इसलिए इसे लेते समय गाड़ी चलाने या भारी मशीनरी चलाने से बचें।', es: 'Puede causar somnolencia leve, evite conducir o manejar maquinaria mientras lo tome.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u10_l143_p01',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct symptom description:',
      options: [
        { id: '1', text: 'I have been coughing for three days.', isCorrect: true },
        { id: '2', text: 'I am coughing since three days.', isCorrect: false },
        { id: '3', text: 'I have cough for three days.', isCorrect: false },
        { id: '4', text: 'I had been cough since three days.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Have been coughing for three days" uses Present Perfect Continuous correctly.'
    },
    {
      id: 'ex_u10_l143_p02',
      type: 'fill_blank',
      prompt: 'She has been _____ (feel) nauseous since yesterday evening.',
      correctAnswer: 'feeling',
      explanation: 'Present perfect continuous structure: has been + feeling.'
    },
    {
      id: 'ex_u10_l143_p03',
      type: 'word_ordering',
      prompt: 'Arrange the tokens to form a doctor instruction:',
      tokens: ['Take', 'one', 'tablet', 'twice', 'daily', 'after', 'meals.'],
      correctAnswer: 'Take one tablet twice daily after meals.',
      explanation: 'Standard medical dosage instruction.'
    },
    {
      id: 'ex_u10_l143_p04',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sentence: 'I am allergic for penicillin and aspirin.',
      correctAnswer: 'I am allergic to penicillin and aspirin.',
      explanation: 'Use the preposition "to" with "allergic".'
    },
    {
      id: 'ex_u10_l143_p05',
      type: 'translation',
      prompt: 'Translate into English: "यह दवा खाली पेट ली जानी चाहिए।"',
      correctAnswer: 'This medicine should be taken on an empty stomach.',
      acceptableAnswers: ['This medication must be taken on an empty stomach.'],
      explanation: '"On an empty stomach" is the medical idiom.'
    },
    {
      id: 'ex_u10_l143_p06',
      type: 'listening',
      prompt: 'Listen to the doctor\'s advice and select the dosage:',
      audioText: 'Take two teaspoons of cough syrup every six hours before going to bed.',
      options: [
        { id: '1', text: '2 teaspoons every 6 hours', isCorrect: true },
        { id: '2', text: '1 tablet twice a day', isCorrect: false },
        { id: '3', text: '3 capsules once a day', isCorrect: false },
        { id: '4', text: '1 teaspoon every 12 hours', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The audio explicitly instructs 2 teaspoons every 6 hours.'
    },
    {
      id: 'ex_u10_l143_p07',
      type: 'match_pairs',
      prompt: 'Match medical terms with their meanings:',
      options: [
        { id: '1', text: 'dosage → amount and frequency of medicine' },
        { id: '2', text: 'side effect → secondary undesirable reaction' },
        { id: '3', text: 'prescription → doctor\'s written medicine order' },
        { id: '4', text: 'drowsiness → feeling sleepy or lethargic' }
      ],
      correctAnswer: 'matched',
      explanation: 'Key clinical vocabulary.'
    },
    {
      id: 'ex_u10_l143_p08',
      type: 'dialogue_completion',
      prompt: 'Complete the consultation:\nDoctor: "How long have you had this high fever?"\nPatient: "I _____ since Tuesday morning."',
      options: [
        { id: '1', text: 'have been running a fever', isCorrect: true },
        { id: '2', text: 'would rather to run a fever', isCorrect: false },
        { id: '3', text: 'must change trains', isCorrect: false },
        { id: '4', text: 'need fixing', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Have been running a fever" is natural and grammatically accurate.'
    },
    {
      id: 'ex_u10_l143_p09',
      type: 'speaking',
      prompt: 'Read this patient statement aloud:',
      targetText: 'I have been experiencing severe headaches and dizziness for the last three days.',
      explanation: 'Pronounce "experiencing", "severe", and "dizziness" clearly.'
    },
    {
      id: 'ex_u10_l143_p10',
      type: 'personal_production',
      prompt: 'Write a sentence describing a symptom using "I have been feeling... for":',
      sentenceTemplate: 'I have been feeling [symptom] for [duration].',
      correctAnswer: 'I have been feeling tired for two weeks.',
      explanation: 'Tests application of Present Perfect Continuous for health.'
    }
  ],
  review: [
    {
      id: 'ex_u10_l143_r01',
      type: 'multiple_choice',
      prompt: 'Which preposition completes: "Take this antibiotic _____ an empty stomach"?',
      options: [
        { id: '1', text: 'on', isCorrect: true },
        { id: '2', text: 'in', isCorrect: false },
        { id: '3', text: 'with', isCorrect: false },
        { id: '4', text: 'at', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The set phrase is "on an empty stomach".'
    },
    {
      id: 'ex_u10_l143_r02',
      type: 'fill_blank',
      prompt: 'He has been _____ (suffer) from back pain since his workout yesterday.',
      correctAnswer: 'suffering',
      explanation: 'Present perfect continuous: has been + suffering.'
    },
    {
      id: 'ex_u10_l143_r03',
      type: 'word_ordering',
      prompt: 'Reorder the tokens into an instruction:',
      tokens: ['You', 'must', 'finish', 'the', 'entire', 'course', 'of', 'antibiotics.'],
      correctAnswer: 'You must finish the entire course of antibiotics.',
      explanation: 'Standard medical advice.'
    },
    {
      id: 'ex_u10_l143_r04',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence:',
      sentence: 'She is having a fever since yesterday.',
      correctAnswer: 'She has had a fever since yesterday. / She has been running a fever since yesterday.',
      explanation: 'Use present perfect with "since yesterday".'
    },
    {
      id: 'ex_u10_l143_r05',
      type: 'translation',
      prompt: 'Translate into English: "क्या इस दर्द निवारक दवा के कोई दुष्प्रभाव हैं?"',
      correctAnswer: 'Are there any side effects to this painkiller?',
      acceptableAnswers: ['Are there any side effects of this painkiller?'],
      explanation: '"Side effects of/to this painkiller" is accurate.'
    },
    {
      id: 'ex_u10_l143_r06',
      type: 'listening',
      prompt: 'Listen and select the instruction given by the pharmacist:',
      audioText: 'Apply this soothing ointment directly to the swollen area twice daily after washing.',
      options: [
        { id: '1', text: 'Apply ointment to swollen area twice daily', isCorrect: true },
        { id: '2', text: 'Swallow two tablets with milk', isCorrect: false },
        { id: '3', text: 'Take one pill before bedtime only', isCorrect: false },
        { id: '4', text: 'Do not use water on the area', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The audio explicitly instructs applying ointment twice daily.'
    },
    {
      id: 'ex_u10_l143_r07',
      type: 'listen_and_type',
      prompt: 'Listen and type what you hear:',
      audioText: 'Please inform the doctor if you are allergic to any medication.',
      correctAnswer: 'Please inform the doctor if you are allergic to any medication.',
      explanation: 'Check spelling of "allergic" and "medication".'
    },
    {
      id: 'ex_u10_l143_r08',
      type: 'multiple_choice',
      prompt: 'What does "over the counter" medication mean?',
      options: [
        { id: '1', text: 'Available without a doctor\'s prescription', isCorrect: true },
        { id: '2', text: 'Extremely hazardous', isCorrect: false },
        { id: '3', text: 'Free of charge', isCorrect: false },
        { id: '4', text: 'Only sold in hospitals', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Over the counter" means non-prescription medication.'
    }
  ],
  assessment: [
    {
      id: 'ex_u10_l143_a01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes a medical condition duration?',
      options: [
        { id: '1', text: 'I have been feeling exhausted and running a fever for four days.', isCorrect: true },
        { id: '2', text: 'I am feeling exhausted and running a fever since four days.', isCorrect: false },
        { id: '3', text: 'I have felt exhausted and run a fever for since four days.', isCorrect: false },
        { id: '4', text: 'I feel exhausted for four days ago.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Option 1 uses "have been feeling... for four days" correctly.'
    },
    {
      id: 'ex_u10_l143_a02',
      type: 'fill_blank',
      prompt: 'The pharmacist advised him to take one capsule _____ (on / in) an empty stomach.',
      correctAnswer: 'on',
      explanation: 'Collocation: "on an empty stomach".'
    },
    {
      id: 'ex_u10_l143_a03',
      type: 'word_ordering',
      prompt: 'Order the words to make a medical statement:',
      tokens: ['I', 'am', 'allergic', 'to', 'penicillin', 'and', 'sulfa', 'drugs.'],
      correctAnswer: 'I am allergic to penicillin and sulfa drugs.',
      explanation: 'Clear allergy disclosure.'
    },
    {
      id: 'ex_u10_l143_a04',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence:',
      sentence: 'I have been having this cough since three weeks.',
      correctAnswer: 'I have been having this cough for three weeks. / I have had this cough for three weeks.',
      explanation: 'Use "for" with durations ("three weeks").'
    },
    {
      id: 'ex_u10_l143_a05',
      type: 'translation',
      prompt: 'Translate into English: "यह कफ सिरप आपको सुस्त महसूस करा सकता है।"',
      correctAnswer: 'This cough syrup may make you feel drowsy.',
      acceptableAnswers: ['This cough syrup might make you feel drowsy.'],
      explanation: '"Drowsy" translates to sleepiness/lethargy.'
    },
    {
      id: 'ex_u10_l143_a06',
      type: 'dialogue_completion',
      prompt: 'Complete the consultation dialogue:\nDoctor: "How often do you take this painkiller?"\nPatient: "I only take it _____ when the headache is severe."',
      options: [
        { id: '1', text: 'as needed', isCorrect: true },
        { id: '2', text: 'subject to availability', isCorrect: false },
        { id: '3', text: 'with aisle seat', isCorrect: false },
        { id: '4', text: 'included in the rent', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"As needed" (pro re nata) is the standard clinical frequency term.'
    },
    {
      id: 'ex_u10_l143_a07',
      type: 'speaking',
      prompt: 'Speak this clinic dialogue turn clearly:',
      targetText: 'I have been feeling dizzy and nauseous for the past two days, and I would like to see a doctor.',
      explanation: 'Pronounce "dizzy", "nauseous", and "past two days" accurately.'
    }
  ]
};
