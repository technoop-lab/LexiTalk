import { LessonConfigA2 } from './unit10_builder_helper';

// =========================================================================
// LESSON 144: Health Insurance, Claim Processes & Pharmacy Interactions
// =========================================================================
export const LESSON_144_CONFIG: LessonConfigA2 = {
  num: 144,
  title: 'Health Insurance, Claim Processes & Pharmacy Interactions',
  icon: '💳',
  estMin: 25,
  objTitle: 'Managing Health Insurance, Submitting Reimbursement Claims & Buying Prescriptions',
  objDesc: 'Learn to navigate medical insurance policies, explain deductibles and co-payments, submit reimbursement claims, and interact with pharmacists using passive structures and conditional inquiries.',
  objHi: 'स्वास्थ्य बीमा पॉलिसियों को समझना, कटौती (deductible) और सह-भुगतान (co-payment) समझाना, प्रतिपूर्ति दावे जमा करना और फार्मेसी में बातचीत करना सीखें।',
  objEs: 'Gestionar seguros médicos, copagos, reclamaciones de reembolso e interacciones en la farmacia.',
  canDo: [
    'I can explain health insurance coverage terms (policy, deductible, co-pay, in-network).',
    'I can submit an insurance claim with itemized medical receipts.',
    'I can inquire whether a treatment or medication is covered by insurance.',
    'I can ask a pharmacist for generic alternatives or dosage clarifications.'
  ],
  canDoHi: [
    'मैं स्वास्थ्य बीमा कवरेज की शर्तों (पॉलिसी, डिडक्टिबल, सह-भुगतान, नेटवर्क अस्पताल) को समझा सकता हूँ।',
    'मैं विस्तृत चिकित्सा रसीदों के साथ बीमा दावा प्रस्तुत कर सकता हूँ।',
    'मैं पूछ सकता हूँ कि क्या कोई उपचार या दवा बीमा द्वारा कवर की गई है।',
    'मैं फार्मासिस्ट से जेनेरिक विकल्पों या खुराक के स्पष्टीकरण के लिए पूछ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo explicar términos de seguros médicos (póliza, deducible, copago).',
    'Puedo presentar una reclamación con facturas médicas desglosadas.',
    'Puedo consultar si un tratamiento o fármaco está cubierto.',
    'Puedo pedir al farmacéutico genéricos o aclaraciones de dosis.'
  ],
  vocab: [
    { w: 'health insurance', p: '/helθ ɪnˈʃʊərəns/', m: 'insurance that covers the whole or a part of the risk of a person incurring medical expenses', hi: 'स्वास्थ्य बीमा / हेल्थ इंश्योरेंस', es: 'seguro médico / de salud', fr: 'assurance maladie', de: 'Krankenversicherung', pt: 'plano de saúde / seguro de saúde', zh: '医疗保险', ar: 'التأمين الصحي', ja: '健康保険', ru: 'медицинская страховка', ex: 'My employer provides comprehensive health insurance for all staff members.', exHi: 'मेरा नियोक्ता सभी स्टाफ सदस्यों के लिए व्यापक स्वास्थ्य बीमा प्रदान करता है।', exEs: 'Mi empleador ofrece un seguro médico integral para todo el personal.', ic: '🏥' },
    { w: 'policy', p: '/ˈpɒləsi/', m: 'a document detailing the terms and conditions of a contract of insurance', hi: 'बीमा पॉलिसी / अनुबंध पत्र', es: 'póliza de seguro', fr: 'police d\'assurance', de: 'Versicherungspolice', pt: 'apólice de seguro', zh: '保险单 / 保单', ar: 'بوليصة تأمين', ja: '保険証券 / 保険規約', ru: 'страховой полис', ex: 'Please read your insurance policy carefully to see what dental care is included.', exHi: 'यह देखने के लिए कि कौन सा दंत उपचार शामिल है, अपनी बीमा पॉलिसी को ध्यान से पढ़ें।', exEs: 'Lea atentamente su póliza de seguro para ver la cobertura dental.', ic: '📄' },
    { w: 'claim', p: '/kleɪm/', m: 'a formal request to an insurance company asking for a payment based on the terms of the policy', hi: 'दावा / क्लेम', es: 'reclamación de seguro / siniestro', fr: 'demande de remboursement / sinistre', de: 'Versicherungsanspruch / Schadensmeldung', pt: 'sinistro / pedido de reembolso', zh: '保险理赔申请', ar: 'مطالبة تأمينية', ja: '保険金請求', ru: 'страховая претензия / требование о выплате', ex: 'I submitted an online claim for my emergency hospital visit.', exHi: 'मैंने अपने आपातकालीन अस्पताल दौरे के लिए एक ऑनलाइन दावा प्रस्तुत किया।', exEs: 'Presenté una reclamación por internet para mi visita de urgencias.', ic: '📝' },
    { w: 'coverage', p: '/ˈkʌvərɪdʒ/', m: 'the extent of the protection provided by an insurance policy', hi: 'कवरेज / बीमा सुरक्षा का दायरा', es: 'cobertura del seguro', fr: 'couverture d\'assurance', de: 'Versicherungsschutz / Deckung', pt: 'cobertura do seguro', zh: '承保范围', ar: 'تغطية تأمينية', ja: '補償範囲', ru: 'страховое покрытие', ex: 'Does this insurance plan provide international travel coverage?', exHi: 'क्या यह बीमा योजना अंतर्राष्ट्रीय यात्रा कवरेज प्रदान करती है?', exEs: '¿Este plan de seguro ofrece cobertura internacional para viajes?', ic: '🛡️' },
    { w: 'deductible', p: '/dɪˈdʌktəbl/', m: 'a specified amount of money that the insured must pay before an insurance company will pay a claim', hi: 'डिडक्टिबल / स्वयं वहन की जाने वाली न्यूनतम राशि', es: 'franquicia / deducible', fr: 'franchise', de: 'Selbstbeteiligung', pt: 'franquia', zh: '免赔额 / 自付款', ar: 'مبلغ التحمل', ja: '免責額 / 自己負担額', ru: 'франшиза / сумма собственного участия', ex: 'Our annual policy has a two-hundred-dollar deductible.', exHi: 'हमारी वार्षिक पॉलिसी में दो सौ डॉलर का डिडक्टिबल है।', exEs: 'Nuestra póliza anual tiene un deducible de doscientos dólares.', ic: '💵' },
    { w: 'co-pay', p: '/ˈkəʊ peɪ/', m: 'a payment made by a beneficiary (especially for health services) in addition to that made by an insurer', hi: 'सह-भुगतान / को-पे', es: 'copago', fr: 'copaiement / ticket modérateur', de: 'Zuzahlung', pt: 'coparticipação', zh: '自付比例 / 挂号费分担', ar: 'الدفع المشترك', ja: '自己負担金 / 一部負担金', ru: 'доплата / соплатеж', ex: 'There is a fifteen-euro co-pay for each general practitioner visit.', exHi: 'प्रत्येक सामान्य चिकित्सक के दौरे के लिए पंद्रह यूरो का सह-भुगतान है।', exEs: 'Hay un copago de quince euros por cada visita al médico de cabecera.', ic: '💳' },
    { w: 'reimbursement', p: '/ˌriːɪmˈbɜːsmənt/', m: 'the act of compensating someone for an expense incurred', hi: 'प्रतिपूर्ति / धन वापसी', es: 'reembolso', fr: 'remboursement', de: 'Kostenerstattung / Rückvergütung', pt: 'reembolso', zh: '报销款 / 偿还金', ar: 'استرداد المصاريف', ja: '払い戻し / 弁償', ru: 'возмещение расходов', ex: 'The insurance company processed our medical reimbursement within five business days.', exHi: 'बीमा कंपनी ने पांच व्यावसायिक दिनों के भीतर हमारी चिकित्सा प्रतिपूर्ति को संसाधित किया।', exEs: 'La aseguradora procesó nuestro reembolso médico en cinco días laborables.', ic: '💰' },
    { w: 'itemized receipt', p: '/ˈaɪtəmaɪzd rɪˈsiːt/', m: 'a receipt detailing every single service or medicine charged', hi: 'मदवार रसीद / विस्तृत रसीद', es: 'recibo / factura desglosada', fr: 'facture détaillée', de: 'detaillierte Quittung / Einzelrechnung', pt: 'recibo detalhado / nota fiscal discriminada', zh: '逐项列出的收据', ar: 'إيصال مفصل', ja: '項目別領収書 / 明細書', ru: 'детализированная квитанция', ex: 'You must upload an itemized receipt to support your insurance claim.', exHi: 'अपने बीमा दावे का समर्थन करने के लिए आपको एक विस्तृत रसीद अपलोड करनी होगी।', exEs: 'Debe subir un recibo desglosado para respaldar su reclamación.', ic: '🧾' },
    { w: 'generic', p: '/dʒəˈnerɪk/', m: 'a non-brand medicine that is equivalent to a brand-name drug in dosage, safety, and quality', hi: 'जेनेरिक दवा (बिना ब्रांड वाली)', es: 'genérico (medicamento)', fr: 'générique', de: 'Generikum / wirkstoffgleich', pt: 'genérico', zh: '非专利药 / 仿制药', ar: 'دواء جنيس / بديل', ja: 'ジェネリック医薬品 / 後発医薬品', ru: 'дженерик (аналог)', ex: 'The pharmacist asked if I wanted the brand name or the cheaper generic version.', exHi: 'फार्मासिस्ट ने पूछा कि क्या मुझे ब्रांड नाम चाहिए या सस्ता जेनेरिक संस्करण।', exEs: 'El farmacéutico preguntó si quería la marca comercial o el genérico más barato.', ic: '💊' },
    { w: 'in-network', p: '/ɪn ˈnetwɜːk/', m: 'doctors and hospitals that have agreed to provide services at pre-negotiated rates with an insurer', hi: 'नेटवर्क में शामिल (अस्पताल/डॉक्टर)', es: 'dentro de la red médica', fr: 'conventionné / du réseau', de: 'im Partnernetzwerk', pt: 'credenciado / na rede conveniada', zh: '网络内 (定点医疗机构)', ar: 'ضمن الشبكة المعتمدة', ja: '提携医療機関の', ru: 'входящий в сеть страховой компании', ex: 'Visiting an in-network clinic ensures your consultation is covered up to ninety percent.', exHi: 'नेटवर्क क्लिनिक में जाने से यह सुनिश्चित होता है कि आपका परामर्श नब्बे प्रतिशत तक कवर हो।', exEs: 'Visitar una clínica dentro de la red garantiza una cobertura de hasta el 90%.', ic: '🏥' },
    { w: 'out-of-pocket', p: '/ˌaʊt əv ˈpɒkɪt/', m: 'paid for with one\'s own money rather than by an insurance provider', hi: 'जेब से किया गया खर्च', es: 'de su propio bolsillo', fr: 'de sa poche / à sa charge', de: 'aus eigener Tasche', pt: 'do próprio bolso', zh: '自费的', ar: 'من الجيب الخاص', ja: '自費の / 実費負担の', ru: 'из собственного кармана', ex: 'My total out-of-pocket medical expenses for the year were under one hundred euros.', exHi: 'साल के लिए मेरा कुल जेब से चिकित्सा खर्च एक सौ यूरो से कम था।', exEs: 'Mis gastos médicos de bolsillo fueron menos de cien euros.', ic: '👛' },
    { w: 'referral', p: '/rɪˈfɜːrəl/', m: 'the act of directing a patient to a medical specialist for consultation', hi: 'रेफरल / विशेषज्ञ डॉक्टर के पास भेजने का पत्र', es: 'volante / derivación médica a especialista', fr: 'lettre d\'orientation / adressage', de: 'Überweisung zum Facharzt', pt: 'encaminhamento médico', zh: '转诊单', ar: 'إحالة طبية', ja: '紹介状 / 専門医への紹介', ru: 'направление к специалисту', ex: 'You need a referral from your general practitioner to see a cardiologist.', exHi: 'हृदय रोग विशेषज्ञ से मिलने के लिए आपको अपने सामान्य चिकित्सक से एक रेफरल की आवश्यकता होती है।', exEs: 'Necesita una derivación de su médico de cabecera para ver a un cardiólogo.', ic: '📋' },
    { w: 'pharmacy', p: '/ˈfɑːməsi/', m: 'a shop or hospital dispensary where medicinal drugs are prepared or sold', hi: 'दवा की दुकान / फार्मेसी', es: 'farmacia', fr: 'pharmacie', de: 'Apotheke', pt: 'farmácia', zh: '药店 / 药房', ar: 'صيدلية', ja: '薬局 / ドラッグストア', ru: 'аптека', ex: 'The 24-hour emergency pharmacy is located near Central Hospital.', exHi: '24 घंटे की आपातकालीन फार्मेसी सेंट्रल अस्पताल के पास स्थित है।', exEs: 'La farmacia de guardia 24 horas está cerca del Hospital Central.', ic: '🏪' },
    { w: 'pharmacist', p: '/ˈfɑːməsɪst/', m: 'a person who is professionally qualified to prepare and dispense medicinal drugs', hi: 'दवासाज़ / फार्मासिस्ट', es: 'farmacéutico', fr: 'pharmacien', de: 'Apotheker', pt: 'farmacêutico', zh: '药剂师', ar: 'صيدلي', ja: '薬剤師', ru: 'фармацевт / провизор', ex: 'The pharmacist explained how to apply the topical cream properly.', exHi: 'फार्मासिस्ट ने समझाया कि सामयिक क्रीम को सही तरीके से कैसे लगाया जाए।', exEs: 'El farmacéutico explicó cómo aplicar la crema correctamente.', ic: '👨‍🔬' },
    { w: 'refill', p: '/ˈriːfɪl/', m: 'an additional supply of a prescription drug', hi: 'दवा का दोबारा भरना / रीफिल', es: 'renovación de receta / recarga', fr: 'renouvellement d\'ordonnance', de: 'Nachfüllung / Folgerezept', pt: 'renovação de receita', zh: '再配处方药', ar: 'إعادة صرف الدواء', ja: '処方薬の再調剤', ru: 'повторный отпуск лекарства / продление рецепта', ex: 'The doctor authorized three refills for my blood pressure medication.', exHi: 'डॉक्टर ने मेरे रक्तचाप की दवा के लिए तीन रीफिल अधिकृत किए।', exEs: 'El médico autorizó tres renovaciones para mi medicación de la tensión.', ic: '🔄' },
    { w: 'proof of purchase', p: '/pruːf əv ˈpɜːtʃəs/', m: 'a document such as a receipt verifying that an item was bought', hi: 'खरीद का प्रमाण', es: 'comprobante de compra', fr: 'preuve d\'achat', de: 'Kaufnachweis', pt: 'comprovante de compra', zh: '购买凭证', ar: 'إثبات الشراء', ja: '購入証明書', ru: 'документ, подтверждающий покупку', ex: 'Attach your proof of purchase to the claim form.', exHi: 'दावा फॉर्म के साथ अपना खरीद प्रमाण संलग्न करें।', exEs: 'Adjunte su comprobante de compra al formulario de reclamación.', ic: '🧾' },
    { w: 'premium', p: '/ˈpriːmiəm/', m: 'an amount to be paid for an insurance policy regularly', hi: 'बीमा प्रीमियम / मासिक किस्त', es: 'prima del seguro', fr: 'prime d\'assurance / cotisation', de: 'Versicherungsbeitrag / Prämie', pt: 'prêmio do seguro / mensalidade', zh: '保险费', ar: 'قسط التأمين', ja: '保険料', ru: 'страховой взнос / премия', ex: 'Our monthly health insurance premium is deducted directly from payroll.', exHi: 'हमारा मासिक स्वास्थ्य बीमा प्रीमियम सीधे वेतन से काटा जाता है।', exEs: 'Nuestra prima mensual de seguro médico se descuenta de la nómina.', ic: '💳' },
    { w: 'exclusion', p: '/ɪkˈskluːʒn/', m: 'an item or condition not covered by an insurance policy', hi: 'अपवर्जन / जो पॉलिसी में शामिल नहीं है', es: 'exclusión de la póliza', fr: 'exclusion de garantie', de: 'Ausschlussklausel', pt: 'exclusão da apólice', zh: '除外责任 / 免除条款', ar: 'استثناءات البوليصة', ja: '免責事項 / 対象外項目', ru: 'исключение из покрытия', ex: 'Pre-existing chronic conditions may be subject to a policy exclusion.', exHi: 'पहले से मौजूद पुरानी स्थितियां पॉलिसी अपवर्जन के अधीन हो सकती हैं।', exEs: 'Las enfermedades crónicas previas pueden ser una exclusión de la póliza.', ic: '🚫' },
    { w: 'underwriter', p: '/ˈʌndəraɪtə/', m: 'a person or company that evaluates and assumes another\'s risk for a fee', hi: 'बीमा जोखिम मूल्यांकनकर्ता', es: 'asegurador / evaluador de riesgos', fr: 'souscripteur d\'assurance', de: 'Versicherer / Risikoprüfer', pt: 'subscritor de seguros', zh: '核保人 / 保险承保机构', ar: 'مكتتب التأمين', ja: '引受人 / アンダーライター', ru: 'страховщик / андеррайтер', ex: 'The insurance underwriter approved the compensation after reviewing the clinical notes.', exHi: 'क्लिनिकल नोट्स की समीक्षा करने के बाद बीमा अंडरराइटर ने मुआवजे को मंजूरी दी।', exEs: 'El asegurador aprobó la compensación tras revisar el informe.', ic: '👔' },
    { w: 'expiration date', p: '/ˌekspəˈreɪʃn deɪt/', m: 'the date after which a medicine or policy is no longer valid', hi: 'समाप्ति तिथि / एक्सपायरी डेट', es: 'fecha de caducidad / vencimiento', fr: 'date d\'expiration / péremption', de: 'Ablaufdatum / Verfallsdatum', pt: 'data de validade', zh: '有效期截止日', ar: 'تاريخ انتهاء الصلاحية', ja: '有効期限 / 使用期限', ru: 'срок годности / дата окончания действия', ex: 'Always check the expiration date on the medication box before consumption.', exHi: 'उपभोग करने से पहले हमेशा दवा के डिब्बे पर समाप्ति तिथि की जांच करें।', exEs: 'Compruebe siempre la fecha de caducidad en la caja del medicamento.', ic: '📅' }
  ],
  chunks: [
    { phrase: 'is this covered by insurance?', meaning: 'asking if a treatment or medicine is reimbursed by a policy', hi: 'क्या यह बीमा द्वारा कवर किया गया है?', es: '¿esto está cubierto por el seguro?', fr: 'est-ce couvert par l\'assurance ?', de: 'wird das von der Versicherung übernommen?', pt: 'isso é coberto pelo plano de saúde?', zh: '这在保险报销范围内吗？', ar: 'هل هذا مشمول في التأمين؟', ja: 'これは保険の対象になりますか？', ru: 'покрывается ли это страховкой?', note: 'Standard inquiry at pharmacies and clinics.', ic: '❓' },
    { phrase: 'submit an insurance claim', meaning: 'file a reimbursement request with proof of expenses', hi: 'बीमा दावा जमा करना', es: 'presentar una reclamación al seguro', fr: 'déposer une demande de remboursement', de: 'einen Versicherungsanspruch einreichen', pt: 'dar entrada no reembolso do seguro', zh: '提交理赔申请', ar: 'تقديم مطالبة تأمينية', ja: '保険金を請求する', ru: 'подать заявку на страховую выплату', note: 'Standard procedure after medical visits.', ic: '📤' },
    { phrase: 'pay out of pocket', meaning: 'pay medical expenses directly from personal funds', hi: 'अपनी जेब से भुगतान करना', es: 'pagar de su propio bolsillo', fr: 'payer de sa poche', de: 'selbst bezahlen', pt: 'pagar do próprio bolso', zh: '自费支付', ar: 'الدفع من الجيب الخاص', ja: '全額自己負担する', ru: 'платить за свой счёт', note: 'Used when insurance does not cover an expense.', ic: '💵' },
    { phrase: 'a generic alternative', meaning: 'a chemically equivalent, lower-cost unbranded drug', hi: 'एक जेनेरिक विकल्प', es: 'una alternativa genérica', fr: 'une alternative générique', de: 'eine wirkstoffgleiche Alternative', pt: 'uma alternativa genérica', zh: '通用名药 / 仿制替代药', ar: 'بديل جنيس', ja: 'ジェネリックの代替薬', ru: 'дженерик-аналог', note: 'Common question asked to pharmacists.', ic: '💊' },
    { phrase: 'keep the original receipt', meaning: 'retain the official paper payment document for audit or claim', hi: 'मूल रसीद संभाल कर रखना', es: 'guardar el recibo original', fr: 'conserver le reçu original', de: 'die Originalquittung aufbewahren', pt: 'guardar o recibo original', zh: '保留原始收据', ar: 'الاحتفاظ بالإيصال الأصلي', ja: '領収書の原本を保管する', ru: 'сохранить оригинал чека', note: 'Requirement for all insurance reimbursements.', ic: '🧾' },
    { phrase: 'get a referral from your doctor', meaning: 'obtain a formal recommendation letter for a specialist', hi: 'अपने डॉक्टर से रेफरल प्राप्त करना', es: 'obtener un volante / derivación del médico', fr: 'obtenir une lettre d\'orientation du médecin', de: 'eine Überweisung vom Arzt holen', pt: 'pegar um encaminhamento do médico', zh: '获取医生的转诊证明', ar: 'الحصول على تحويل طبي من الطبيب', ja: '医師から紹介状をもらう', ru: 'получить направление от врача', note: 'Mandatory step for many in-network policies.', ic: '📄' },
    { phrase: 'process the reimbursement', meaning: 'review and approve returning funds to the policyholder', hi: 'प्रतिपूर्ति को संसाधित करना', es: 'tramitar el reembolso', fr: 'traiter le remboursement', de: 'die Erstattung bearbeiten', pt: 'processar o reembolso', zh: '办理报销手续', ar: 'معالجة الاسترداد', ja: '払い戻しを処理する', ru: 'обработать выплату', note: 'Used by insurance claims adjusters.', ic: '⚙️' },
    { phrase: 'consult the policy terms', meaning: 'read through the formal insurance contract clauses', hi: 'पॉलिसी की शर्तों को देखना', es: 'consultar las condiciones de la póliza', fr: 'consulter les termes du contrat', de: 'die Versicherungsbedingungen prüfen', pt: 'consultar os termos da apólice', zh: '查阅保单条款', ar: 'مراجعة شروط البوليصة', ja: '保険規約を確認する', ru: 'свериться с условиями полиса', note: 'Recommended before receiving major treatment.', ic: '📖' }
  ],
  grammar: {
    title: 'Passive Structures in Insurance & Medical Rules: "is covered", "was reimbursed", "must be submitted"',
    concept: 'Using passive voice (be + Past Participle) to discuss regulations, coverage terms, and claim processing where the actor is general or institutional.',
    patterns: [
      {
        title: 'Present Passive for General Rules & Coverage',
        structure: 'Subject + is / are + [covered / reimbursed / excluded / required]',
        rule: 'Use present passive when stating what insurance policies standardly cover or require.',
        examples: [
          { en: 'Prescription medications are covered up to eighty percent.', hi: 'पर्चे वाली दवाएं अस्सी प्रतिशत तक कवर की जाती हैं।', es: 'Los medicamentos recetados están cubiertos hasta un ochenta por ciento.' },
          { en: 'A doctor\'s referral is required for specialist consultations.', hi: 'विशेषज्ञ परामर्श के लिए डॉक्टर के रेफरल की आवश्यकता होती है।', es: 'Se requiere una derivación médica para consultas con especialistas.' }
        ]
      },
      {
        title: 'Modal Passive for Requirements & Obligations',
        structure: 'Subject + must / should / can + be + Past Participle',
        rule: 'Form modal passives by placing "be" directly after the modal verb followed by the past participle.',
        examples: [
          { en: 'All medical claims must be submitted within thirty days of treatment.', hi: 'सभी चिकित्सा दावे उपचार के तीस दिनों के भीतर प्रस्तुत किए जाने चाहिए।', es: 'Todas las reclamaciones deben presentarse dentro de los 30 días posteriores al tratamiento.' },
          { en: 'The itemized receipt can be uploaded through the mobile app.', hi: 'मदवार रसीद मोबाइल ऐप के माध्यम से अपलोड की जा सकती है।', es: 'El recibo desglosado se puede subir a través de la aplicación móvil.' }
        ]
      },
      {
        title: 'Inquiring About Coverage: "Is [treatment] covered by...?"',
        structure: 'Is / Are + Subject + covered by + [Insurance / Plan]?',
        rule: 'Inverted passive question formula used at hospital reception and pharmacy desks.',
        examples: [
          { en: 'Is this blood test covered by my health insurance?', hi: 'क्या यह रक्त परीक्षण मेरे स्वास्थ्य बीमा द्वारा कवर किया गया है?', es: '¿Este análisis de sangre está cubierto por mi seguro médico?' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'Is this medicine covers by insurance?',
      cor: 'Is this medicine covered by insurance?',
      exp: 'Use the past participle "covered" with the auxiliary "is" in passive questions.',
      hi: 'Passive प्रश्न में "is" के साथ past participle "covered" आता है।',
      es: 'En voz pasiva con "is" se usa el participio: "is covered".'
    },
    {
      inc: 'All claims must submit within thirty days.',
      cor: 'All claims must be submitted within thirty days.',
      exp: 'Claims do not submit themselves. Use the modal passive: "must be submitted".',
      hi: 'दावे अपने आप प्रस्तुत नहीं होते, modal passive "must be submitted" का प्रयोग करें।',
      es: 'Las reclamaciones no se presentan solas: "must be submitted" (pasiva).'
    },
    {
      inc: 'I paid fifty euros of my pocket.',
      cor: 'I paid fifty euros out of pocket.',
      exp: 'The correct idiom is "out of pocket".',
      hi: 'जेब से भुगतान के लिए सही मुहावरा "out of pocket" है।',
      es: 'La expresión correcta es "out of pocket".'
    },
    {
      inc: 'Do I need a referral to seeing the cardiologist?',
      cor: 'Do I need a referral to see the cardiologist?',
      exp: 'Use the infinitive "to see", not "to seeing".',
      hi: 'उद्देश्य के लिए infinitive "to see" का प्रयोग करें।',
      es: 'Usa el infinitivo "to see", no "to seeing".'
    },
    {
      inc: 'Can you give to me a generic alternative?',
      cor: 'Can you give me a generic alternative?',
      exp: '"Give" takes indirect object directly: "give me".',
      hi: '"Give me a generic alternative" लिखा जाता है।',
      es: 'Se dice "give me", sin "to".'
    }
  ],
  dialogues: [
    {
      title: 'Asking About Insurance Coverage at a Dental Clinic',
      context: 'Chloe asks the dental receptionist whether her cleaning and X-rays are covered by her provider.',
      charA: { name: 'Chloe', av: '👩‍💼', role: 'Patient' },
      charB: { name: 'Julian', av: '👨‍💼', role: 'Receptionist' },
      turns: [
        { spk: 'Chloe', text: 'Good morning! Here is my health insurance card. Are routine cleanings and dental X-rays covered by my plan?', hi: 'शुभ प्रभात! यह मेरा स्वास्थ्य बीमा कार्ड है। क्या नियमित सफाई और डेंटल एक्स-रे मेरी योजना में शामिल हैं?', es: '¡Buenos días! Aquí tiene mi tarjeta del seguro médico. ¿Las limpiezas y radiografías están cubiertas por mi plan?' },
        { spk: 'Julian', text: 'Let me check your policy details... Yes, preventative dental care is fully covered with zero co-pay at our in-network clinic.', hi: 'मुझे आपके पॉलिसी विवरण की जांच करने दीजिए... हाँ, हमारे नेटवर्क क्लिनिक में बिना किसी सह-भुगतान के निवारक दंत देखभाल पूरी तरह से कवर की जाती है।', es: 'Déjeme revisar su póliza... Sí, el cuidado preventivo está totalmente cubierto sin copago en nuestra clínica concertada.' },
        { spk: 'Chloe', text: 'That is great. If I need any fillings, how will that be handled?', hi: 'यह बहुत अच्छा है। यदि मुझे किसी भराई (filling) की आवश्यकता हो, तो उसे कैसे संभाला जाएगा?', es: 'Estupendo. Si necesito algún empaste, ¿cómo se gestionará?' },
        { spk: 'Julian', text: 'Fillings are covered up to seventy percent. We will give you an itemized receipt so you can claim the remaining balance.', hi: 'भराई सत्तर प्रतिशत तक कवर की जाती है। हम आपको एक विस्तृत रसीद देंगे ताकि आप शेष राशि का दावा कर सकें।', es: 'Los empastes están cubiertos hasta un 70%. Le daremos un recibo desglosado para reclamar el resto.' }
      ]
    },
    {
      title: 'Inquiring About Generic Medication at the Pharmacy',
      context: 'Arthur asks the pharmacist if there is a cheaper generic alternative for his prescription.',
      charA: { name: 'Arthur', av: '👨‍💼', role: 'Customer' },
      charB: { name: 'Rina', av: '👩‍🔬', role: 'Pharmacist' },
      turns: [
        { spk: 'Arthur', text: 'Hello! I have a prescription for this brand-name cholesterol medication. Is there a generic alternative available?', hi: 'नमस्ते! मेरे पास इस ब्रांड-नाम कोलेस्ट्रॉल दवा का नुस्खा है। क्या कोई जेनेरिक विकल्प उपलब्ध है?', es: '¡Hola! Tengo una receta para este medicamento de marca para el colesterol. ¿Hay alguna alternativa genérica disponible?' },
        { spk: 'Rina', text: 'Hello! Yes, the generic version contains the exact same active ingredient but costs seventy percent less.', hi: 'नमस्ते! हाँ, जेनेरिक संस्करण में बिल्कुल वही सक्रिय तत्व है लेकिन इसकी लागत सत्तर प्रतिशत कम है।', es: '¡Hola! Sí, la versión genérica contiene exactamente el mismo principio activo pero cuesta un setenta por ciento menos.' },
        { spk: 'Arthur', text: 'That sounds perfect. I will take the generic one. Will my receipt include the prescription details for insurance reimbursement?', hi: 'यह बिल्कुल सही लगता है। मैं जेनेरिक दवा लूँगा। क्या मेरी रसीद में बीमा प्रतिपूर्ति के लिए नुस्खे का विवरण शामिल होगा?', es: 'Suena perfecto. Me llevaré el genérico. ¿El recibo incluirá los datos de la receta para el reembolso?' },
        { spk: 'Rina', text: 'Yes, I will print an official itemized pharmacy receipt for your records.', hi: 'हाँ, मैं आपके रिकॉर्ड के लिए एक आधिकारिक विस्तृत फार्मेसी रसीद प्रिंट कर दूँगी।', es: 'Sí, imprimiré un recibo oficial desglosado de farmacia para sus registros.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u10_l144_p01',
      type: 'multiple_choice',
      prompt: 'Select the correct passive sentence:',
      options: [
        { id: '1', text: 'Medical claims must be submitted with original receipts.', isCorrect: true },
        { id: '2', text: 'Medical claims must submit with original receipts.', isCorrect: false },
        { id: '3', text: 'Medical claims must to be submitted with original receipts.', isCorrect: false },
        { id: '4', text: 'Medical claims is submit with original receipts.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Modal passive formula: must + be + past participle ("must be submitted").'
    },
    {
      id: 'ex_u10_l144_p02',
      type: 'fill_blank',
      prompt: 'Is this blood test _____ (cover) by our health insurance policy?',
      correctAnswer: 'covered',
      explanation: 'Passive question uses the past participle "covered".'
    },
    {
      id: 'ex_u10_l144_p03',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a polite inquiry at the pharmacy:',
      tokens: ['Is', 'there', 'a', 'generic', 'alternative', 'for', 'this', 'medicine?'],
      correctAnswer: 'Is there a generic alternative for this medicine?',
      explanation: 'Standard request for non-brand medication.'
    },
    {
      id: 'ex_u10_l144_p04',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sentence: 'I had to pay thirty euros of my pocket for the prescription.',
      correctAnswer: 'I had to pay thirty euros out of pocket for the prescription.',
      explanation: 'Use the set phrase "out of pocket".'
    },
    {
      id: 'ex_u10_l144_p05',
      type: 'translation',
      prompt: 'Translate into English: "बीमा दावा जमा करने के लिए आपको मूल रसीद रखनी चाहिए।"',
      correctAnswer: 'You should keep the original receipt to submit an insurance claim.',
      acceptableAnswers: ['You must keep the original receipt to submit an insurance claim.'],
      explanation: '"Keep the original receipt" is standard documentation advice.'
    },
    {
      id: 'ex_u10_l144_p06',
      type: 'listening',
      prompt: 'Listen to the clinic receptionist and identify the co-pay amount:',
      audioText: 'Your consultation is covered by insurance, but there is a fifteen-euro co-pay payable today.',
      options: [
        { id: '1', text: '€15 co-pay', isCorrect: true },
        { id: '2', text: '€50 co-pay', isCorrect: false },
        { id: '3', text: '€0 co-pay', isCorrect: false },
        { id: '4', text: '€25 co-pay', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The co-pay is €15.'
    },
    {
      id: 'ex_u10_l144_p07',
      type: 'match_pairs',
      prompt: 'Match insurance terms with their definitions:',
      options: [
        { id: '1', text: 'deductible → amount paid by patient before insurance starts' },
        { id: '2', text: 'co-pay → fixed fee paid per medical visit' },
        { id: '3', text: 'premium → regular recurring insurance policy cost' },
        { id: '4', text: 'generic → non-branded equivalent medicine' }
      ],
      correctAnswer: 'matched',
      explanation: 'Essential insurance terminology.'
    },
    {
      id: 'ex_u10_l144_p08',
      type: 'dialogue_completion',
      prompt: 'Complete the response:\nPatient: "How do I get my money back for the prescription?"\nPharmacist: "You should _____ online through your insurance portal."',
      options: [
        { id: '1', text: 'submit an insurance claim', isCorrect: true },
        { id: '2', text: 'stand clear of doors', isCorrect: false },
        { id: '3', text: 'change trains at Victoria', isCorrect: false },
        { id: '4', text: 'turn down the heating', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Submitting a claim initiates reimbursement.'
    },
    {
      id: 'ex_u10_l144_p09',
      type: 'speaking',
      prompt: 'Speak this pharmacy inquiry clearly:',
      targetText: 'Could you please check if there is a cheaper generic alternative for this prescription medication?',
      explanation: 'Emphasize "cheaper generic alternative" and "prescription medication".'
    },
    {
      id: 'ex_u10_l144_p10',
      type: 'personal_production',
      prompt: 'Write a passive sentence about an insurance rule using "must be submitted":',
      sentenceTemplate: 'All medical receipts must be submitted [condition/timeframe].',
      correctAnswer: 'All medical receipts must be submitted within thirty days.',
      explanation: 'Tests modal passive construction.'
    }
  ],
  review: [
    {
      id: 'ex_u10_l144_r01',
      type: 'multiple_choice',
      prompt: 'Which preposition completes: "I paid for the doctor\'s visit out _____ pocket"?',
      options: [
        { id: '1', text: 'of', isCorrect: true },
        { id: '2', text: 'from', isCorrect: false },
        { id: '3', text: 'with', isCorrect: false },
        { id: '4', text: 'by', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Set phrase: "out of pocket".'
    },
    {
      id: 'ex_u10_l144_r02',
      type: 'fill_blank',
      prompt: 'The reimbursement was _____ (process) and transferred to our bank account.',
      correctAnswer: 'processed',
      explanation: 'Past passive: was + processed.'
    },
    {
      id: 'ex_u10_l144_r03',
      type: 'word_ordering',
      prompt: 'Reorder the words to form a policy statement:',
      tokens: ['Consultations', 'at', 'in-network', 'clinics', 'are', 'fully', 'covered.'],
      correctAnswer: 'Consultations at in-network clinics are fully covered.',
      explanation: 'Passive coverage statement.'
    },
    {
      id: 'ex_u10_l144_r04',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence:',
      sentence: 'The dental check-up is not cover by our policy.',
      correctAnswer: 'The dental check-up is not covered by our policy.',
      explanation: 'Change "cover" to past participle "covered".'
    },
    {
      id: 'ex_u10_l144_r05',
      type: 'translation',
      prompt: 'Translate into English: "क्या मुझे किसी विशेषज्ञ से मिलने के लिए डॉक्टर से रेफरल की आवश्यकता है?"',
      correctAnswer: 'Do I need a referral from a doctor to see a specialist?',
      acceptableAnswers: ['Do I need a referral from my doctor to visit a specialist?'],
      explanation: '"Referral to see a specialist" is the correct medical phrase.'
    },
    {
      id: 'ex_u10_l144_r06',
      type: 'listening',
      prompt: 'Listen and select how much the insurance company reimbursed:',
      audioText: 'The claims department reimbursed eighty percent of the hospital bill directly to the patient.',
      options: [
        { id: '1', text: '80%', isCorrect: true },
        { id: '2', text: '18%', isCorrect: false },
        { id: '3', text: '100%', isCorrect: false },
        { id: '4', text: '50%', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The audio explicitly mentions 80%.'
    },
    {
      id: 'ex_u10_l144_r07',
      type: 'listen_and_type',
      prompt: 'Listen and type what you hear:',
      audioText: 'Always keep an itemized receipt to submit with your insurance claim.',
      correctAnswer: 'Always keep an itemized receipt to submit with your insurance claim.',
      explanation: 'Focus on spelling of "itemized" and "receipt".'
    },
    {
      id: 'ex_u10_l144_r08',
      type: 'multiple_choice',
      prompt: 'What is an unbranded, lower-cost equivalent medicine called?',
      options: [
        { id: '1', text: 'A generic medicine', isCorrect: true },
        { id: '2', text: 'A standing charge', isCorrect: false },
        { id: '3', text: 'A notice period', isCorrect: false },
        { id: '4', text: 'An out-of-pocket ticket', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Generic medicines are unbranded equivalents.'
    }
  ],
  assessment: [
    {
      id: 'ex_u10_l144_a01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses passive voice for an insurance requirement?',
      options: [
        { id: '1', text: 'All reimbursement claims must be submitted with an itemized invoice.', isCorrect: true },
        { id: '2', text: 'All reimbursement claims must submit with an itemized invoice.', isCorrect: false },
        { id: '3', text: 'All reimbursement claims must to be submitted with an invoice.', isCorrect: false },
        { id: '4', text: 'All reimbursement claims is submitted with an invoice.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Option 1 correctly forms the modal passive ("must be submitted").'
    },
    {
      id: 'ex_u10_l144_a02',
      type: 'fill_blank',
      prompt: 'Emergency dental surgery is _____ (cover) up to one thousand euros.',
      correctAnswer: 'covered',
      explanation: 'Present passive: is + covered.'
    },
    {
      id: 'ex_u10_l144_a03',
      type: 'word_ordering',
      prompt: 'Order the words to form a polite question:',
      tokens: ['Do', 'I', 'need', 'a', 'referral', 'to', 'consult', 'a', 'cardiologist?'],
      correctAnswer: 'Do I need a referral to consult a cardiologist?',
      explanation: 'Standard medical referral query.'
    },
    {
      id: 'ex_u10_l144_a04',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence:',
      sentence: 'The insurance company will reimbursed us for the medication.',
      correctAnswer: 'The insurance company will reimburse us for the medication.',
      explanation: 'After modal "will", use base verb "reimburse".'
    },
    {
      id: 'ex_u10_l144_a05',
      type: 'translation',
      prompt: 'Translate into English: "जेनेरिक संस्करण में ब्रांडेड दवा के समान ही सक्रिय तत्व होते हैं।"',
      correctAnswer: 'The generic version contains the same active ingredients as the brand-name medicine.',
      acceptableAnswers: ['The generic version has the same active ingredients as the brand name drug.'],
      explanation: 'Clear pharmaceutical comparison.'
    },
    {
      id: 'ex_u10_l144_a06',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nPatient: "Will I have to pay anything today?"\nReceptionist: "No, your treatment is _____ because this is an in-network hospital."',
      options: [
        { id: '1', text: 'fully covered by your policy', isCorrect: true },
        { id: '2', text: 'subject to missing connection', isCorrect: false },
        { id: '3', text: 'in need of fixing', isCorrect: false },
        { id: '4', text: 'turning down the thermostat', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Logical completion regarding full insurance coverage.'
    },
    {
      id: 'ex_u10_l144_a07',
      type: 'speaking',
      prompt: 'Read this insurance inquiry aloud:',
      targetText: 'Is this prescription covered by my health insurance, or do I need to pay out of pocket?',
      explanation: 'Ensure crisp delivery of "prescription", "health insurance", and "out of pocket".'
    }
  ]
};

// =========================================================================
// LESSON 145: Automotive Needs, Car Rentals & Roadside Assistance
// =========================================================================
export const LESSON_145_CONFIG: LessonConfigA2 = {
  num: 145,
  title: 'Automotive Needs, Car Rentals & Roadside Assistance',
  icon: '🚗',
  estMin: 25,
  objTitle: 'Renting Vehicles, Describing Mechanical Breakdowns & Requesting Roadside Aid',
  objDesc: 'Learn to hire cars, understand insurance excess and mileage policies, describe mechanical problems (flat tire, dead battery, engine overheating), and call roadside breakdown assistance.',
  objHi: 'कार किराए पर लेना, बीमा और माइलेज की शर्तें समझना, यांत्रिक खराबी (पंचर, खराब बैटरी, गर्म इंजन) का वर्णन करना और सड़क किनारे सहायता (roadside assistance) को कॉल करना सीखें।',
  objEs: 'Alquilar coches, entender franquicias de seguro, describir averías mecánicas y solicitar asistencia en carretera.',
  canDo: [
    'I can rent a car, choose insurance options (collision damage waiver), and understand fuel policies.',
    'I can describe vehicle breakdowns clearly (flat tire, dead battery, engine overheating).',
    'I can call emergency roadside assistance and give my exact highway location.',
    'I can understand road safety instructions and vehicle inspection checklists.'
  ],
  canDoHi: [
    'मैं कार किराए पर ले सकता हूँ, बीमा विकल्प चुन सकता हूँ और ईंधन नीतियों को समझ सकता हूँ।',
    'मैं वाहन की खराबी (फ्लैट टायर, खराब बैटरी, इंजन गर्म होना) का स्पष्ट वर्णन कर सकता हूँ।',
    'मैं आपातकालीन सड़क किनारे सहायता को कॉल कर सकता हूँ और अपना सटीक राजमार्ग स्थान बता सकता हूँ।',
    'मैं सड़क सुरक्षा निर्देशों और वाहन निरीक्षण चेकलिस्ट को समझ सकता हूँ।'
  ],
  canDoEs: [
    'Puedo alquilar un coche, elegir coberturas de seguro y entender la política de combustible.',
    'Puedo describir averías del coche (pinchazo, batería descargada, calentamiento).',
    'Puedo llamar al servicio de grúa y dar mi ubicación en carretera.',
    'Puedo entender instrucciones de seguridad vial y hojas de inspección.'
  ],
  vocab: [
    { w: 'car rental', p: '/kɑː ˈrentl/', m: 'a company that rents automobiles for short periods of time', hi: 'कार किराया सेवा / रेंट-ए-कार', es: 'alquiler de coches / rent a car', fr: 'location de voiture', de: 'Autovermietung', pt: 'aluguel de carros / locadora', zh: '租车服务', ar: 'تأجير سيارات', ja: 'レンタカー', ru: 'аренда / прокат автомобилей', ex: 'We booked a compact SUV at the airport car rental desk.', exHi: 'हमने हवाई अड्डे के कार रेंटल डेस्क पर एक कॉम्पैक्ट एसयूवी बुक की।', exEs: 'Reservamos un todocamino compacto en el mostrador de alquiler del aeropuerto.', ic: '🚗' },
    { w: 'breakdown', p: '/ˈbreɪkdaʊn/', m: 'a mechanical failure of a vehicle or machine', hi: 'गाड़ी खराब होना / ब्रेकडाउन', es: 'avería mecánica', fr: 'panne', de: 'Panne / Fahrzeugpanne', pt: 'pane / avaria mecânica', zh: '车辆故障 / 抛锚', ar: 'عطل في السيارة', ja: '故障 / エンスト', ru: 'поломка / авария', ex: 'The car had a sudden engine breakdown on the motorway.', exHi: 'मोटरवे पर कार का इंजन अचानक खराब हो गया।', exEs: 'El coche tuvo una avería repentina de motor en la autopista.', ic: '⚠️' },
    { w: 'flat tire', p: '/flæt ˈtaɪə/', m: 'a tire that has lost its air pressure due to a puncture or leak', hi: 'पंचर टायर / हवा निकला हुआ पहिया', es: 'pinchazo / rueda pinchada', fr: 'pneu crevé', de: 'Platten / Reifenpanne', pt: 'pneu furado', zh: '爆胎 / 瘪胎', ar: 'إطار مثقوب / بنشر', ja: 'パンクしたタイヤ', ru: 'спущенное колесо / прокол', ex: 'We pulled over onto the hard shoulder because of a flat tire.', exHi: 'टायर पंचर होने के कारण हमने गाड़ी को किनारे रोक लिया।', exEs: 'Nos detuvimos en el arcén debido a una rueda pinchada.', ic: '🛞' },
    { w: 'tow truck', p: '/təʊ trʌk/', m: 'a truck equipped with devices to move disabled or impounded motor vehicles', hi: 'टो ट्रक / टोइंग क्रेन', es: 'grúa de remolque', fr: 'dépanneuse', de: 'Abschleppwagen', pt: 'caminhão guincho', zh: '拖车', ar: 'شاحنة سحب / ونش', ja: 'レッカー車', ru: 'эвакуатор', ex: 'The roadside assistance operator dispatched a tow truck to our location.', exHi: 'सड़क किनारे सहायता ऑपरेटर ने हमारे स्थान पर एक टो ट्रक भेजा।', exEs: 'El operador de asistencia envió una grúa a nuestra ubicación.', ic: '🚛' },
    { w: 'dead battery', p: '/ded ˈbætəri/', m: 'a vehicle battery that has completely lost electrical charge', hi: 'डिस्चार्ज बैटरी / खराब बैटरी', es: 'batería descargada / muerta', fr: 'batterie à plat', de: 'leere Batterie', pt: 'bateria arriada / descarregada', zh: '电瓶没电', ar: 'بطارية فارغة', ja: 'バッテリー上がり', ru: 'разряженный аккумулятор', ex: 'I left the headlights on all night, resulting in a dead battery.', exHi: 'मैंने रात भर हेडलाइट्स चालू छोड़ दीं, जिसके परिणामस्वरूप बैटरी डिस्चार्ज हो गई।', exEs: 'Dejé las luces encendidas toda la noche, lo que descargó la batería.', ic: '🔋' },
    { w: 'mileage', p: '/ˈmaɪlɪdʒ/', m: 'a number of miles traveled or covered by a vehicle', hi: 'माइलेज / तय की गई दूरी', es: 'kilometraje', fr: 'kilométrage', de: 'Kilometerstand / Fahrleistung', pt: 'quilometragem', zh: '行驶里程', ar: 'المسافة المقطوعة', ja: '走行距離 / マイレージ', ru: 'пробег / километраж', ex: 'Our rental contract includes unlimited mileage across the country.', exHi: 'हमारे किराये के अनुबंध में पूरे देश में असीमित माइलेज शामिल है।', exEs: 'Nuestro contrato de alquiler incluye kilometraje ilimitado por todo el país.', ic: '🛣️' },
    { w: 'hard shoulder', p: '/hɑːd ˈʃəʊldə/', m: 'a paved strip beside a motorway for emergency stopping only', hi: 'इमरजेंसी लेन / हार्ड शोल्डर', es: 'arcén de emergencia', fr: 'bande d\'arrêt d\'urgence', de: 'Standstreifen / Pannenstreifen', pt: 'acostamento', zh: '应急车道', ar: 'كتف الطريق للطوارئ', ja: '路肩 (非常停止帯)', ru: 'обочина для аварийной остановки', ex: 'If your car breaks down on the highway, park safely on the hard shoulder.', exHi: 'यदि आपकी कार राजमार्ग पर खराब हो जाती है, तो हार्ड शोल्डर पर सुरक्षित रूप से पार्क करें।', exEs: 'Si el coche se avería en la autopista, aparque en el arcén.', ic: '🛑' },
    { w: 'hazard lights', p: '/ˈhæzəd laɪts/', m: 'a pair of flashing amber indicator lights on a vehicle used to warn of danger or breakdown', hi: 'हैज़र्ड लाइट्स / आपातकालीन इंडिकेटर', es: 'luces de emergencia / cuatro intermitentes', fr: 'feux de détresse / feux de warning', de: 'Warnblinkanlage', pt: 'pisca-alerta / luzes de emergência', zh: '危险报警闪光灯 (双闪)', ar: 'أضواء التحذير / الفلاشر', ja: 'ハザードランプ', ru: 'аварийная сигнализация', ex: 'Turn on your hazard lights immediately when stopping on the roadside.', exHi: 'सड़क के किनारे रुकते ही तुरंत अपनी हैज़र्ड लाइटें जलाएं।', exEs: 'Encienda las luces de emergencia de inmediato al detenerse.', ic: '🚨' },
    { w: 'overheating', p: '/ˌəʊvəˈhiːtɪŋ/', m: 'becoming too hot, especially of an internal combustion engine', hi: 'इंजन का अत्यधिक गर्म होना', es: 'sobrecalentamiento del motor', fr: 'surchauffe', de: 'Überhitzung', pt: 'superaquecimento', zh: '发动机过热', ar: 'ارتفاع حرارة المحرك', ja: 'オーバーヒート', ru: 'перегрев двигателя', ex: 'Steam was coming from under the hood because the engine was overheating.', exHi: 'बोनट के नीचे से भाप निकल रही थी क्योंकि इंजन बहुत गर्म हो रहा था।', exEs: 'Salía vapor del capó porque el motor se estaba sobrecalentando.', ic: '♨️' },
    { w: 'jump leads', p: '/dʒʌmp liːdz/', m: 'a pair of heavy cables used to start a vehicle with a dead battery from another vehicle\'s battery', hi: 'जंपर केबल / बैटरी जोड़ने वाले तार', es: 'pinzas de arranque / cables para puentear', fr: 'câbles de démarrage', de: 'Überbrückungskabel / Starthilfekabel', pt: 'cabos de chupeta / cabos de arranque', zh: '搭铁线 / 汽车搭线', ar: 'كابلات توصيل البطارية', ja: 'ブースターケーブル', ru: 'пусковые провода (провода для прикуривания)', ex: 'A friendly driver used his jump leads to help restart our battery.', exHi: 'एक मददगार ड्राइवर ने हमारी बैटरी को फिर से शुरू करने में मदद करने के लिए अपने जम्पर केबल का इस्तेमाल किया।', exEs: 'Un conductor amable usó sus pinzas para ayudarnos a arrancar.', ic: '🔌' },
    { w: 'excess', p: '/ˈekses/', m: 'the amount of an insurance claim that the policyholder must pay personally', hi: 'बीमा कटौती / एक्सेस राशि', es: 'franquicia del seguro de coche', fr: 'franchise d\'assurance', de: 'Selbstbeteiligung', pt: 'franquia do seguro', zh: '保险免赔额', ar: 'مبلغ التحمل في تأمين السيارات', ja: '自己負担額 (免責額)', ru: 'страховая франшиза при аренде авто', ex: 'You can purchase extra insurance to reduce the damage excess to zero.', exHi: 'नुकसान की एक्सेस राशि को शून्य करने के लिए आप अतिरिक्त बीमा खरीद सकते हैं।', exEs: 'Puede contratar un seguro adicional para reducir la franquicia a cero.', ic: '💰' },
    { w: 'windshield', p: '/ˈwɪndʃiːld/', m: 'the front window of a motor vehicle', hi: 'कार का सामने वाला शीशा / विंडशील्ड', es: 'parabrisas', fr: 'pare-brise', de: 'Windschutzscheibe', pt: 'para-brisa', zh: '挡风玻璃', ar: 'الزجاج الأمامي', ja: 'フロントガラス', ru: 'лобовое стекло', ex: 'A small stone hit the windshield and caused a tiny crack.', exHi: 'एक छोटा पत्थर विंडशील्ड से टकराया और उसमें एक छोटी सी दरार आ गई।', exEs: 'Una piedra golpeó el parabrisas y causó una pequeña grieta.', ic: '🪟' },
    { w: 'accelerator', p: '/əkˈseləreɪtə/', m: 'a pedal that controls the speed of a vehicle', hi: 'एक्सेलेरेटर / गति बढ़ाने वाला पैडल', es: 'acelerador', fr: 'accélérateur', de: 'Gaspedal', pt: 'acelerador', zh: '油门踏板', ar: 'دواسة السرعة', ja: 'アクセルペダル', ru: 'педаль газа / акселератор', ex: 'Press the accelerator gently when merging onto the motorway.', exHi: 'मोटरवे पर मिलते समय एक्सेलेरेटर को धीरे से दबाएं।', exEs: 'Pise el acelerador suavemente al incorporarse a la autopista.', ic: '🏎️' },
    { w: 'brakes', p: '/breɪks/', m: 'a device for slowing or stopping a moving vehicle', hi: 'ब्रेक', es: 'frenos', fr: 'freins', de: 'Bremsen', pt: 'freios', zh: '刹车 / 制动器', ar: 'فرامل / مكابح', ja: 'ブレーキ', ru: 'тормоза', ex: 'The mechanic checked the brakes and replaced the worn pads.', exHi: 'मैकेनिक ने ब्रेक की जांच की और घिसे हुए पैड को बदल दिया।', exEs: 'El mecánico revisó los frenos y cambió las pastillas desgastadas.', ic: '🛑' },
    { w: 'mechanic', p: '/məˈkænɪk/', m: 'a skilled worker who repairs and maintains vehicle engines and machinery', hi: 'मैकेनिक / मिस्त्री', es: 'mecánico', fr: 'mécanicien', de: 'Mechaniker / Kfz-Mechatroniker', pt: 'mecânico', zh: '机修工 / 汽修师傅', ar: 'ميكانيكي', ja: '整備士 / メカニック', ru: 'автомеханик', ex: 'The mechanic inspected the engine oil and coolant levels.', exHi: 'मैकेनिक ने इंजन ऑयल और कूलेंट के स्तर का निरीक्षण किया।', exEs: 'El mecánico inspeccionó los niveles de aceite y refrigerante.', ic: '🔧' },
    { w: 'fuel tank', p: '/ˈfjuːəl tæŋk/', m: 'the container holding the fuel for a motor vehicle', hi: 'ईंधन टैंक / पेट्रोल टंकी', es: 'depósito de combustible / gasolina', fr: 'réservoir d\'essence', de: 'Kraftstofftank', pt: 'tanque de combustível', zh: '油箱', ar: 'خزان الوقود', ja: '燃料タンク', ru: 'топливный бак', ex: 'The rental agreement requires returning the car with a full fuel tank.', exHi: 'किराये के समझौते में कार को भरे हुए ईंधन टैंक के साथ वापस करने की आवश्यकता होती है।', exEs: 'El contrato exige devolver el coche con el depósito de combustible lleno.', ic: '⛽' },
    { w: 'warning triangle', p: '/ˈwɔːnɪŋ ˈtraɪæŋɡl/', m: 'a red reflective triangle placed on the road to warn oncoming traffic of a breakdown', hi: 'चेतावनी त्रिकोण / रिफ्लेक्टर', es: 'triángulo de emergencia / señalización', fr: 'triangle de présignalisation', de: 'Warndreieck', pt: 'triângulo de sinalização', zh: '三角警示牌', ar: 'مثلث التحذير العاكس', ja: '非常停止表示板 (三角表示板)', ru: 'знак аварийной остановки', ex: 'Place the warning triangle fifty meters behind your stopped car.', exHi: 'अपनी रुकी हुई कार के पचास मीटर पीछे चेतावनी त्रिकोण रखें।', exEs: 'Coloque el triángulo de emergencia cincuenta metros detrás del coche.', ic: '🔺' },
    { w: 'roadside assistance', p: '/ˈrəʊdsaɪd əˈsɪstəns/', m: 'a service providing aid to drivers whose vehicles have suffered a mechanical breakdown', hi: 'सड़क किनारे आपातकालीन सहायता', es: 'asistencia en carretera', fr: 'dépannage / assistance routière', de: 'Pannenhilfe', pt: 'assistência 24 horas / socorro mecânico', zh: '道路救援服务', ar: 'خدمة المساعدة على الطريق', ja: 'ロードサービス (JAFなど)', ru: 'помощь на дорогах / техпомощь', ex: 'All rental contracts include twenty-four-hour roadside assistance.', exHi: 'सभी किराये के अनुबंधों में चौबीसों घंटे सड़क किनारे सहायता शामिल है।', exEs: 'Todos los contratos de alquiler incluyen asistencia en carretera 24h.', ic: '📞' },
    { w: 'spare wheel', p: '/speə wiːl/', m: 'an extra tire kept in a vehicle for use in the event of a puncture', hi: 'अतिरिक्त पहिया / स्टेपनी', es: 'rueda de repuesto / auxilio', fr: 'roue de secours', de: 'Reserverad / Ersatzrad', pt: 'estepe / pneu sobressalente', zh: '备用轮胎 (备胎)', ar: 'إطار احتياطي / إستبنة', ja: 'スペアタイヤ', ru: 'запасное колесо / запаска', ex: 'Check that the spare wheel is properly inflated before long road trips.', exHi: 'लंबी सड़क यात्राओं से पहले जांच लें कि स्पेयर व्हील में हवा ठीक से भरी है या नहीं।', exEs: 'Compruebe que la rueda de repuesto esté bien inflada antes del viaje.', ic: '🛞' },
    { w: 'puncture', p: '/ˈpʌŋktʃə/', m: 'a small hole in a tire caused by a sharp object', hi: 'पंचर', es: 'pinchazo en el neumático', fr: 'crevaison', de: 'Reifendurchstich / Panne', pt: 'furo no pneu', zh: '扎破 / 穿孔', ar: 'ثقب في الإطار', ja: 'パンク', ru: 'прокол шины', ex: 'A rusty nail caused a deep puncture in the front right tire.', exHi: 'एक जंग लगी कील के कारण आगे के दाहिने टायर में गहरा पंचर हो गया।', exEs: 'Un clavo oxidado causó un pinchazo en la rueda delantera.', ic: '🔩' }
  ],
  chunks: [
    { phrase: 'my car has broken down on', meaning: 'informing roadside rescue of a vehicular breakdown location', hi: 'मेरी कार ... पर खराब हो गई है', es: 'mi coche se ha averiado en...', fr: 'ma voiture est tombée en panne sur...', de: 'mein Auto hat eine Panne auf...', pt: 'meu carro quebrou na...', zh: '我的车在...抛锚了', ar: 'تعطلت سيارتي في...', ja: '私の車が〜で故障しました', ru: 'моя машина сломалась на...', note: 'Critical emergency phrase: "My car has broken down on the M4 motorway near Junction 8."', ic: '🛣️' },
    { phrase: 'pull over onto the hard shoulder', meaning: 'steer the vehicle to the emergency side lane safely', hi: 'गाड़ी को किनारे सुरक्षित लेन में लगाना', es: 'apartarse al arcén de emergencia', fr: 'se ranger sur la bande d\'arrêt d\'urgence', de: 'auf den Standstreifen fahren', pt: 'encostar no acostamento', zh: '靠边停在应急车道上', ar: 'التوقف على كتف الطريق', ja: '路肩に車を寄せる', ru: 'съехать на аварийную обочину', note: 'Vital motorway safety protocol.', ic: '🛑' },
    { phrase: 'turn on the hazard lights', meaning: 'activate the flashing amber safety indicators', hi: 'हैज़र्ड / आपातकालीन लाइटें जलाना', es: 'encender las luces de emergencia', fr: 'allumer les feux de détresse', de: 'die Warnblinkanlage einschalten', pt: 'ligar o pisca-alerta', zh: '打开危险报警闪光灯 (双闪)', ar: 'تشغيل أضواء التحذير', ja: 'ハザードランプをつける', ru: 'включить аварийку', note: 'Standard safety action.', ic: '🚨' },
    { phrase: 'dispatch a tow truck', meaning: 'send a breakdown recovery vehicle immediately', hi: 'टो ट्रक / क्रेन भेजना', es: 'enviar una grúa', fr: 'envoyer une dépanneuse', de: 'einen Abschleppwagen schicken', pt: 'enviar um guincho', zh: '派遣拖车', ar: 'إرسال ونش لسحب السيارة', ja: 'レッカー車を手配・派遣する', ru: 'направить эвакуатор', note: 'Used by roadside emergency dispatchers.', ic: '🚛' },
    { phrase: 'full-to-full fuel policy', meaning: 'receiving a rental car with a full tank and returning it full', hi: 'फुल-टू-फुल ईंधन नीति', es: 'política de combustible lleno a lleno', fr: 'politique de carburant plein à plein', de: 'Voll-zu-Voll-Tankregelung', pt: 'política de combustível cheio para cheio', zh: '满油取还政策', ar: 'سياسة الوقود من ممتلئ إلى ممتلئ', ja: '満タン返し (燃料規定)', ru: 'топливная политика "полный-полный"', note: 'Standard rental car contract term.', ic: '⛽' },
    { phrase: 'reduce the excess to zero', meaning: 'buy supplementary coverage so no out-of-pocket deductible applies', hi: 'बीमा कटौती शून्य करना', es: 'reducir la franquicia a cero', fr: 'racheter la franchise à zéro', de: 'die Selbstbeteiligung auf null reduzieren', pt: 'zerar a franquia do seguro', zh: '将免赔额降至零 (不计免赔)', ar: 'تخفيض مبلغ التحمل إلى الصفر', ja: '免責補償で自己負担をゼロにする', ru: 'снизить франшизу до нуля', note: 'Key decision when signing rental agreements.', ic: '🛡️' },
    { phrase: 'jump-start the car', meaning: 'start an engine with a dead battery using another vehicle\'s power', hi: 'कार को जंप-स्टार्ट करना', es: 'arrancar el coche con pinzas', fr: 'démarrer la voiture avec des câbles', de: 'dem Auto Starthilfe geben', pt: 'fazer chupeta / dar partida auxiliar', zh: '给汽车搭电启动', ar: 'تشغيل السيارة بالبطارية الإضافية', ja: '車をジャンプスタートする', ru: 'прикурить автомобиль / завести с толкача', note: 'Common fix for flat vehicle batteries.', ic: '⚡' },
    { phrase: 'inspect the vehicle for damage', meaning: 'check for existing scratches before driving away from a rental lot', hi: 'वाहन की किसी मौजूदा खराबी की जांच करना', es: 'revisar el vehículo en busca de daños', fr: 'vérifier l\'état du véhicule', de: 'das Fahrzeug auf Vorschäden untersuchen', pt: 'vistoriar o veículo em busca de avarias', zh: '验车检查是否有划痕损伤', ar: 'فحص السيارة للتأكد من خلوها من الأضرار', ja: '車体のキズや損傷を点検する', ru: 'осмотреть автомобиль на предмет повреждений', note: 'Essential consumer habit when hiring cars.', ic: '🔍' }
  ],
  grammar: {
    title: 'Conditional Advice for Emergencies & Describing Immediate Actions: "If your car breaks down, you should..."',
    concept: 'Using zero and first conditionals (If + Present, [Imperative / Modal + Verb]) to communicate road emergency procedures and instructions.',
    patterns: [
      {
        title: 'Emergency Conditionals with Imperatives and Modals',
        structure: 'If + Subject + Present Simple, + [Imperative / you should + Base Verb]',
        rule: 'Use this structure to provide clear, actionable emergency safety directions.',
        examples: [
          { en: 'If the engine overheats, pull over immediately and turn off the ignition.', hi: 'यदि इंजन अधिक गर्म हो जाता है, तो तुरंत गाड़ी किनारे रोकें और इग्निशन बंद करें।', es: 'Si el motor se sobrecalienta, apártese de inmediato y apague el contacto.' },
          { en: 'If you get a flat tire on the highway, you must turn on your hazard lights.', hi: 'यदि राजमार्ग पर आपका टायर पंचर हो जाता है, तो आपको अपनी हैज़र्ड लाइटें अवश्य जलानी चाहिए।', es: 'Si pinchas una rueda en la autopista, debes encender las luces de emergencia.' }
        ]
      },
      {
        title: 'Reporting Locations with Prepositions of Place & Proximity',
        structure: 'We are on + [Highway / Route Number] + heading [Direction], + near [Junction / Landmark].',
        rule: 'Give concise coordinates when calling breakdown dispatchers.',
        examples: [
          { en: 'We are on the M1 motorway heading north, about two miles before Junction 14.', hi: 'हम M1 मोटरवे पर उत्तर की ओर जा रहे हैं, जंक्शन 14 से लगभग दो मील पहले।', es: 'Estamos en la autopista M1 en dirección norte, a unas dos millas antes de la salida 14.' }
        ]
      },
      {
        title: 'Describing Mechanical States with Past Participles: "is drained", "is punctured", "is dented"',
        structure: 'The + [Part] + is + drained / punctured / cracked / overheated.',
        rule: 'Describe damaged automotive components clearly to technicians.',
        examples: [
          { en: 'The front windshield is cracked and the battery is completely drained.', hi: 'सामने की विंडशील्ड में दरार है और बैटरी पूरी तरह से डिस्चार्ज हो गई है।', es: 'El parabrisas delantero está agrietado y la batería totalmente descargada.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'If the car will break down, call the tow truck.',
      cor: 'If the car breaks down, call the tow truck.',
      exp: 'In conditional "if" clauses, use Present Simple ("breaks down"), not "will break down".',
      hi: 'शर्त वाले "if" खंड में Present Simple ("breaks down") का प्रयोग करें।',
      es: 'En la cláusula con "if" se usa presente simple: "If the car breaks down".'
    },
    {
      inc: 'We have a puncture tire on the highway.',
      cor: 'We have a flat tire on the highway. / The tire is punctured.',
      exp: 'Use "flat tire" as a noun phrase or "punctured" as a predicate adjective.',
      hi: '"Flat tire" या "punctured tire" का प्रयोग करें।',
      es: 'Se dice "a flat tire" o "the tire is punctured".'
    },
    {
      inc: 'Turn on the hazard lights for warning the drivers.',
      cor: 'Turn on the hazard lights to warn oncoming drivers.',
      exp: 'Use the infinitive of purpose ("to warn"), not "for + gerund".',
      hi: 'उद्देश्य बताने के लिए infinitive "to warn" का प्रयोग करें।',
      es: 'Usa el infinitivo de propósito ("to warn"), no "for warning".'
    },
    {
      inc: 'We must return the car by full tank.',
      cor: 'We must return the car with a full tank.',
      exp: 'Use the preposition "with": "with a full tank of fuel".',
      hi: '"With a full tank" का प्रयोग होता है।',
      es: 'Se dice "with a full tank".'
    },
    {
      inc: 'Can you jump the car with your battery?',
      cor: 'Can you jump-start the car with your battery / jump leads?',
      exp: 'The correct compound verb is "jump-start a vehicle".',
      hi: 'गाड़ी शुरू करने के लिए सही क्रिया "jump-start" है।',
      es: 'El verbo correcto es "jump-start".'
    }
  ],
  dialogues: [
    {
      title: 'Renting a Vehicle at an Airport Rental Desk',
      context: 'Oscar rents a sedan at EuroWheels and discusses insurance options with the agent, Mia.',
      charA: { name: 'Oscar', av: '👨‍💼', role: 'Customer' },
      charB: { name: 'Mia', av: '👩‍💼', role: 'Rental Agent' },
      turns: [
        { spk: 'Oscar', text: 'Good afternoon! I have a reservation for an intermediate automatic car under Oscar Bailey.', hi: 'शुभ दोपहर! मेरे पास ऑस्कर बेली के नाम से एक ऑटोमैटिक कार का आरक्षण है।', es: '¡Buenas tardes! Tengo una reserva para un coche automático a nombre de Oscar Bailey.' },
        { spk: 'Mia', text: 'Welcome Mr. Bailey! Here is your contract. The base rate includes unlimited mileage and standard third-party insurance.', hi: 'स्वागत है श्रीमान बेली! यह आपका अनुबंध है। आधार दर में असीमित माइलेज और मानक थर्ड-पार्टी बीमा शामिल है।', es: '¡Bienvenido Sr. Bailey! Aquí está su contrato. La tarifa base incluye kilometraje ilimitado y seguro a terceros.' },
        { spk: 'Oscar', text: 'Does the standard insurance include an excess in case of accidental scratches or damage?', hi: 'क्या मानक बीमा में आकस्मिक खरोंच या क्षति के मामले में कोई कटौती (excess) शामिल है?', es: '¿El seguro estándar incluye franquicia en caso de arañazos o daños?' },
        { spk: 'Mia', text: 'Yes, the standard excess is eight hundred euros. You can add comprehensive cover for ten euros a day to reduce the excess to zero.', hi: 'हाँ, मानक एक्सेस आठ सौ यूरो है। एक्सेस को शून्य करने के लिए आप दस यूरो प्रतिदिन में व्यापक कवर जोड़ सकते हैं।', es: 'Sí, la franquicia estándar es de 800€. Puede añadir seguro a todo riesgo por 10€ al día para reducirla a cero.' },
        { spk: 'Oscar', text: 'I will definitely add that for peace of mind. Also, is this a full-to-full fuel policy?', hi: 'मैं मन की शांति के लिए इसे निश्चित रूप से जोड़ूँगा। इसके अलावा, क्या यह फुल-टू-फुल ईंधन नीति है?', es: 'Sin duda lo añadiré para mayor tranquilidad. Además, ¿la política de combustible es lleno a lleno?' },
        { spk: 'Mia', text: 'Exactly. Return the car with a full tank and there will be no extra refueling charges. Here are your keys!', hi: 'बिल्कुल। कार को भरे हुए टैंक के साथ वापस करें और कोई अतिरिक्त ईंधन शुल्क नहीं लगेगा। यह आपकी चाबियां हैं!', es: 'Exactamente. Devuelva el coche con el depósito lleno y no habrá cargos adicionales. ¡Aquí tiene las llaves!' }
      ]
    },
    {
      title: 'Calling Roadside Assistance on a Motorway',
      context: 'Lisa phones emergency breakdown assistance after her vehicle overheats on the motorway.',
      charA: { name: 'Lisa', av: '👩‍💼', role: 'Driver' },
      charB: { name: 'Call Operator', av: '👨‍💼', role: 'Assistance Dispatcher' },
      turns: [
        { spk: 'Lisa', text: 'Hello! My car has broken down on the M25 motorway heading westbound between Junctions 10 and 11.', hi: 'नमस्ते! मेरी कार जंक्शन 10 और 11 के बीच पश्चिम की ओर जाने वाले M25 मोटरवे पर खराब हो गई है।', es: '¡Hola! Mi coche se ha averiado en la autopista M25 en dirección oeste, entre las salidas 10 y 11.' },
        { spk: 'Call Operator', text: 'Hello madam. First, are you parked safely on the hard shoulder with your hazard lights on?', hi: 'नमस्ते मैडम। सबसे पहले, क्या आप अपनी हैज़र्ड लाइट जलाकर हार्ड शोल्डर पर सुरक्षित रूप से पार्क हैं?', es: 'Hola señora. Primero, ¿está aparcada en el arcén con las luces de emergencia encendidas?' },
        { spk: 'Lisa', text: 'Yes, we are behind the safety barrier, and steam is coming from under the engine hood.', hi: 'हाँ, हम सुरक्षा बैरियर के पीछे खड़े हैं, और इंजन के बोनट के नीचे से भाप निकल रही है।', es: 'Sí, estamos detrás de la barrera de seguridad y sale vapor del capó.' },
        { spk: 'Call Operator', text: 'Do not attempt to open the radiator cap. I have dispatched a tow truck and patrol unit to your location. They will arrive in twenty-five minutes.', hi: 'रेडिएटर कैप खोलने का प्रयास न करें। मैंने आपके स्थान पर एक टो ट्रक और गश्ती दल भेजा है। वे पच्चीस मिनट में पहुंचेंगे।', es: 'No intente abrir el tapón del radiador. He enviado una grúa a su ubicación. Llegarán en veinticinco minutos.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u10_l145_p01',
      type: 'multiple_choice',
      prompt: 'Select the correct conditional emergency instruction:',
      options: [
        { id: '1', text: 'If your vehicle breaks down on the highway, pull over onto the hard shoulder.', isCorrect: true },
        { id: '2', text: 'If your vehicle will break down on the highway, pull over onto the hard shoulder.', isCorrect: false },
        { id: '3', text: 'If your vehicle breaking down on highway, pulling over.', isCorrect: false },
        { id: '4', text: 'If your vehicle break down on highway, to pull over.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Conditionals use Present Simple in the if-clause and an imperative in the main clause.'
    },
    {
      id: 'ex_u10_l145_p02',
      type: 'fill_blank',
      prompt: 'If the engine _____ (overheat), stop immediately and switch off the car.',
      correctAnswer: 'overheats',
      explanation: 'Third-person singular Present Simple in the conditional clause: "overheats".'
    },
    {
      id: 'ex_u10_l145_p03',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a roadside breakdown report:',
      tokens: ['My', 'car', 'has', 'broken', 'down', 'near', 'Junction', '12.'],
      correctAnswer: 'My car has broken down near Junction 12.',
      explanation: 'Standard emergency location report.'
    },
    {
      id: 'ex_u10_l145_p04',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sentence: 'We must return the rented vehicle by a full tank of fuel.',
      correctAnswer: 'We must return the rented vehicle with a full tank of fuel.',
      explanation: 'Use preposition "with a full tank".'
    },
    {
      id: 'ex_u10_l145_p05',
      type: 'translation',
      prompt: 'Translate into English: "सड़क के किनारे रुकते ही अपनी आपातकालीन लाइटें जलाएं।"',
      correctAnswer: 'Turn on your hazard lights when stopping on the roadside.',
      acceptableAnswers: ['Turn on the hazard lights as soon as you stop on the roadside.'],
      explanation: '"Hazard lights" are vehicle emergency indicators.'
    },
    {
      id: 'ex_u10_l145_p06',
      type: 'listening',
      prompt: 'Listen to the roadside operator and select the arrival time:',
      audioText: 'A tow truck has been dispatched and will arrive at your location in approximately thirty minutes.',
      options: [
        { id: '1', text: 'In about 30 minutes', isCorrect: true },
        { id: '2', text: 'In 10 minutes', isCorrect: false },
        { id: '3', text: 'Tomorrow morning', isCorrect: false },
        { id: '4', text: 'In over 2 hours', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The audio explicitly says "approximately thirty minutes".'
    },
    {
      id: 'ex_u10_l145_p07',
      type: 'match_pairs',
      prompt: 'Match automotive breakdown terms with their meanings:',
      options: [
        { id: '1', text: 'tow truck → vehicle recovery truck' },
        { id: '2', text: 'hard shoulder → emergency lane on motorway' },
        { id: '3', text: 'jump leads → cables for starting dead battery' },
        { id: '4', text: 'excess → deductible fee in car insurance' }
      ],
      correctAnswer: 'matched',
      explanation: 'Core automotive emergency terms.'
    },
    {
      id: 'ex_u10_l145_p08',
      type: 'dialogue_completion',
      prompt: 'Complete the sentence:\nCustomer: "My car won\'t start at all."\nMechanic: "Your battery seems completely dead. We can _____ with jump leads."',
      options: [
        { id: '1', text: 'jump-start the car', isCorrect: true },
        { id: '2', text: 'renew the lease', isCorrect: false },
        { id: '3', text: 'take an aisle seat', isCorrect: false },
        { id: '4', text: 'submit a meter reading', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Jump-start the car" is the correct automotive action.'
    },
    {
      id: 'ex_u10_l145_p09',
      type: 'speaking',
      prompt: 'Speak this emergency roadside statement:',
      targetText: 'My car has broken down on the hard shoulder, and I need a tow truck dispatched immediately.',
      explanation: 'Maintain clear pronunciation of "hard shoulder" and "dispatched immediately".'
    },
    {
      id: 'ex_u10_l145_p10',
      type: 'personal_production',
      prompt: 'Write a conditional safety sentence starting with "If you get a flat tire, you should...":',
      sentenceTemplate: 'If you get a flat tire, you should [action].',
      correctAnswer: 'If you get a flat tire, you should pull over onto the hard shoulder.',
      explanation: 'Tests conditional advice application.'
    }
  ],
  review: [
    {
      id: 'ex_u10_l145_r01',
      type: 'multiple_choice',
      prompt: 'What is the emergency side lane on a motorway called?',
      options: [
        { id: '1', text: 'Hard shoulder', isCorrect: true },
        { id: '2', text: 'Platform junction', isCorrect: false },
        { id: '3', text: 'Boarding gate', isCorrect: false },
        { id: '4', text: 'Standing charge', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The emergency side lane is the "hard shoulder".'
    },
    {
      id: 'ex_u10_l145_r02',
      type: 'fill_blank',
      prompt: 'You can purchase extra insurance to reduce the damage excess _____ zero.',
      correctAnswer: 'to',
      explanation: 'Collocation: "reduce the excess to zero".'
    },
    {
      id: 'ex_u10_l145_r03',
      type: 'word_ordering',
      prompt: 'Order the words to create an instruction:',
      tokens: ['Place', 'the', 'warning', 'triangle', 'behind', 'the', 'broken-down', 'vehicle.'],
      correctAnswer: 'Place the warning triangle behind the broken-down vehicle.',
      explanation: 'Standard road safety guideline.'
    },
    {
      id: 'ex_u10_l145_r04',
      type: 'error_correction',
      prompt: 'Correct the error in this conditional sentence:',
      sentence: 'If the battery will be dead, use the jump leads.',
      correctAnswer: 'If the battery is dead, use the jump leads.',
      explanation: 'Use Present Simple "is dead" in the if-clause.'
    },
    {
      id: 'ex_u10_l145_r05',
      type: 'translation',
      prompt: 'Translate into English: "हमारे किराये के अनुबंध में असीमित माइलेज शामिल है।"',
      correctAnswer: 'Our rental contract includes unlimited mileage.',
      acceptableAnswers: ['Our rental agreement includes unlimited mileage.'],
      explanation: '"Unlimited mileage" is the standard phrase.'
    },
    {
      id: 'ex_u10_l145_r06',
      type: 'listening',
      prompt: 'Listen and select the problem reported by the driver:',
      audioText: 'The temperature gauge is in the red zone and smoke is coming from the engine.',
      options: [
        { id: '1', text: 'Engine overheating', isCorrect: true },
        { id: '2', text: 'Flat tire', isCorrect: false },
        { id: '3', text: 'Broken windshield wiper', isCorrect: false },
        { id: '4', text: 'Empty fuel tank', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Smoke and high temperature indicate engine overheating.'
    },
    {
      id: 'ex_u10_l145_r07',
      type: 'listen_and_type',
      prompt: 'Listen and type what you hear:',
      audioText: 'Always inspect the vehicle for existing scratches before signing the agreement.',
      correctAnswer: 'Always inspect the vehicle for existing scratches before signing the agreement.',
      explanation: 'Focus on spelling of "inspect" and "scratches".'
    },
    {
      id: 'ex_u10_l145_r08',
      type: 'multiple_choice',
      prompt: 'What should you do if your car breaks down on a highway?',
      options: [
        { id: '1', text: 'Pull over onto the hard shoulder and turn on hazard lights', isCorrect: true },
        { id: '2', text: 'Stop in the middle lane', isCorrect: false },
        { id: '3', text: 'Accelerate as fast as possible', isCorrect: false },
        { id: '4', text: 'Leave the car in the fast lane', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Pulling over to the hard shoulder and using hazard lights is safe protocol.'
    }
  ],
  assessment: [
    {
      id: 'ex_u10_l145_a01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes a vehicle rental option?',
      options: [
        { id: '1', text: 'We purchased supplementary insurance to reduce the damage excess to zero.', isCorrect: true },
        { id: '2', text: 'We purchased supplementary insurance to reduce the damage excess for zero.', isCorrect: false },
        { id: '3', text: 'We purchased insurance for reducing damage excess until zero.', isCorrect: false },
        { id: '4', text: 'We purchase insurance reduce damage excess on zero.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Option 1 correctly uses "reduce the excess to zero".'
    },
    {
      id: 'ex_u10_l145_a02',
      type: 'fill_blank',
      prompt: 'If you _____ (experience) sudden brake failure, downshift gears and pull the handbrake gently.',
      correctAnswer: 'experience',
      explanation: 'Present simple in the conditional clause.'
    },
    {
      id: 'ex_u10_l145_a03',
      type: 'word_ordering',
      prompt: 'Assemble the tokens into a clear statement:',
      tokens: ['The', 'car', 'rental', 'desk', 'is', 'located', 'in', 'Terminal', 'Two.'],
      correctAnswer: 'The car rental desk is located in Terminal Two.',
      explanation: 'Airport facility direction statement.'
    },
    {
      id: 'ex_u10_l145_a04',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence:',
      sentence: 'If you will see steam from the engine, stop immediately.',
      correctAnswer: 'If you see steam from the engine, stop immediately.',
      explanation: 'Replace "will see" with "see" in the conditional clause.'
    },
    {
      id: 'ex_u10_l145_a05',
      type: 'translation',
      prompt: 'Translate into English: "सहायता ऑपरेटर ने हमारे स्थान पर एक टो ट्रक भेजा।"',
      correctAnswer: 'The assistance operator dispatched a tow truck to our location.',
      acceptableAnswers: ['The assistance operator sent a tow truck to our location.'],
      explanation: '"Dispatched a tow truck" is the precise terminology.'
    },
    {
      id: 'ex_u10_l145_a06',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nAgent: "How would you like to handle fuel?"\nCustomer: "I prefer the _____ where I return the vehicle with a full tank."',
      options: [
        { id: '1', text: 'full-to-full policy', isCorrect: true },
        { id: '2', text: 'standing charge', isCorrect: false },
        { id: '3', text: 'drowsy option', isCorrect: false },
        { id: '4', text: 'indirect question', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Full-to-full policy" is standard.'
    },
    {
      id: 'ex_u10_l145_a07',
      type: 'speaking',
      prompt: 'Read this emergency location report aloud:',
      targetText: 'We have a flat tire and are waiting on the hard shoulder of the M4 motorway near Junction 10.',
      explanation: 'Ensure clear articulation of "flat tire", "hard shoulder", and "Junction 10".'
    }
  ]
};

// =========================================================================
// LESSON 146: Emergency Services, Reporting Incidents & Urgent Support
// =========================================================================
export const LESSON_146_CONFIG: LessonConfigA2 = {
  num: 146,
  title: 'Emergency Services, Reporting Incidents & Urgent Support',
  icon: '🚨',
  estMin: 25,
  objTitle: 'Calling Emergency Dispatch (999/911/112), Reporting Incidents & Following Urgent Instructions',
  objDesc: 'Learn to contact emergency dispatchers, report accidents, fires, or thefts calmly, specify injuries and locations, and follow urgent first-aid and safety instructions using imperative and past narrative forms.',
  objHi: 'आपातकालीन नंबर (999/911/112) पर कॉल करना, दुर्घटनाओं, आग या चोरी की रिपोर्ट करना, घायलों और स्थान का विवरण देना और आपातकालीन प्राथमिक चिकित्सा निर्देशों का पालन करना सीखें।',
  objEs: 'Llamar a servicios de emergencia, reportar accidentes, incendios o robos y seguir instrucciones urgentes de primeros auxilios.',
  canDo: [
    'I can call emergency services (police, ambulance, fire department) and explain the nature of an emergency.',
    'I can give precise location coordinates, landmarks, and incident descriptions.',
    'I can describe casualties, consciousness, bleeding, and basic vital signs.',
    'I can follow urgent safety directives from a 911/999/112 dispatcher.'
  ],
  canDoHi: [
    'मैं आपातकालीन सेवाओं (पुलिस, एम्बुलेंस, दमकल विभाग) को कॉल कर सकता हूँ और आपातकाल की स्थिति समझा सकता हूँ।',
    'मैं सटीक स्थान, प्रमुख स्थल (लैंडमार्क) और घटना का विवरण दे सकता हूँ।',
    'मैं घायलों, उनकी चेतना (होश), रक्तस्राव और प्राथमिक स्वास्थ्य संकेतों का वर्णन कर सकता हूँ।',
    'मैं आपातकालीन डिस्पैचर के तत्काल सुरक्षा निर्देशों का पालन कर सकता हूँ।'
  ],
  canDoEs: [
    'Puedo llamar a emergencias y explicar el tipo de incidente.',
    'Puedo dar ubicaciones exactas, puntos de referencia y detalles del suceso.',
    'Puedo describir heridos, estado de consciencia y hemorragias.',
    'Puedo seguir instrucciones de primeros auxilios del operador de emergencias.'
  ],
  vocab: [
    { w: 'emergency', p: '/ɪˈmɜːdʒənsi/', m: 'a serious, unexpected, and often dangerous situation requiring immediate action', hi: 'आपातकाल / आपातकालीन स्थिति', es: 'emergencia / urgencia', fr: 'urgence', de: 'Notfall', pt: 'emergência / urgência', zh: '紧急情况', ar: 'حالة طوارئ', ja: '緊急事態 / 非常時', ru: 'чрезвычайная ситуация / экстренный случай', ex: 'In case of a life-threatening emergency, dial 999 or 112 immediately.', exHi: 'जीवन के लिए खतरनाक आपात स्थिति में तुरंत 999 या 112 डायल करें।', exEs: 'En caso de emergencia con riesgo vital, llame al 112 de inmediato.', ic: '🚨' },
    { w: 'dispatcher', p: '/dɪˈspætʃə/', m: 'a person responsible for receiving emergency calls and sending out police, fire, or ambulance units', hi: 'आपातकालीन डिस्पैचर / कॉल ऑपरेटर', es: 'operador de emergencias / despachador', fr: 'opérateur d\'urgence / régulateur', de: 'Leitstellendisponent / Notrufdisponent', pt: 'atendente do 190/192 / despachante', zh: '紧急调度员 / 接警员', ar: 'مأمور اللاسلكي / موجه الطوارئ', ja: '緊急指令員 / ディスパッチャー', ru: 'диспетчер экстренной службы', ex: 'The emergency dispatcher asked for our exact street address and current situation.', exHi: 'आपातकालीन डिस्पैचर ने हमारा सटीक सड़क का पता और वर्तमान स्थिति पूछी।', exEs: 'El operador de emergencias pidió nuestra dirección exacta y situación.', ic: '🎧' },
    { w: 'ambulance', p: '/ˈæmbjələns/', m: 'a vehicle equipped for taking sick or injured people to and from hospital', hi: 'एम्बुलेंस / रोगी वाहन', es: 'ambulancia', fr: 'ambulance', de: 'Krankenwagen / Rettungswagen', pt: 'ambulância', zh: '救护车', ar: 'سيارة إسعاف', ja: '救急車', ru: 'скорая помощь / санитарная машина', ex: 'An ambulance arrived at the scene of the accident within six minutes.', exHi: 'दुर्घटना स्थल पर छह मिनट के भीतर एक एम्बुलेंस पहुंच गई।', exEs: 'Una ambulancia llegó al lugar del accidente en seis minutos.', ic: '🚑' },
    { w: 'paramedic', p: '/ˌpærəˈmedɪk/', m: 'a healthcare professional trained to provide emergency medical treatment', hi: 'पैरामेडिक / आपातकालीन चिकित्सा सहायक', es: 'paramédico / técnico de emergencias sanitarias', fr: 'ambulancier / secouriste', de: 'Notfallsanitäter / Rettungsassistent', pt: 'paramédico / socorrista', zh: '急救医务人员', ar: 'مسعف', ja: '救急救命士', ru: 'парамедик / фельдшер скорой', ex: 'Paramedics provided immediate first aid to stabilize the injured pedestrian.', exHi: 'पैरामेडिक्स ने घायल पैदल यात्री को स्थिर करने के लिए तत्काल प्राथमिक उपचार प्रदान किया।', exEs: 'Los paramédicos brindaron primeros auxilios para estabilizar al peatón.', ic: '👨‍⚕️' },
    { w: 'fire brigade', p: '/ˈfaɪə brɪˌɡeɪd/', m: 'an organized body of people that is trained to extinguish fires', hi: 'दमकल विभाग / फायर ब्रिगेड', es: 'cuerpo de bomberos', fr: 'pompiers / brigade de sapeurs-pompiers', de: 'Feuerwehr', pt: 'corpo de bombeiros', zh: '消防队', ar: 'فرق الإطفاء / رجال المطافئ', ja: '消防隊', ru: 'пожарная команда / пожарная охрана', ex: 'The fire brigade evacuated residents safely from the burning building.', exHi: 'दमकल विभाग ने जलती हुई इमारत से निवासियों को सुरक्षित बाहर निकाला।', exEs: 'Los bomberos evacuaron a los residentes del edificio en llamas.', ic: '🚒' },
    { w: 'incident', p: '/ˈɪnsɪdənt/', m: 'an event or occurrence, especially one that is unusual or of serious importance', hi: 'घटना / हादसा', es: 'incidente / suceso', fr: 'incident / événement', de: 'Vorfall / Ereignis', pt: 'incidente / ocorrência', zh: '事件 / 突发事故', ar: 'حادث / واقعة', ja: '事故 / 出来事', ru: 'происшествие / инцидент', ex: 'Police officers are investigating a theft incident at the shopping mall.', exHi: 'पुलिस अधिकारी शॉपिंग मॉल में चोरी की घटना की जांच कर रहे हैं।', exEs: 'La policía está investigando un incidente de robo en el centro comercial.', ic: '🔍' },
    { w: 'casualty', p: '/ˈkæʒuəlti/', m: 'a person killed or injured in a war or accident', hi: 'घायल व्यक्ति / हताहत', es: 'víctima / herido', fr: 'victime / blessé', de: 'Opfer / Verletzter', pt: 'vítima / ferido', zh: '伤亡人员', ar: 'ضحية / مصاب', ja: '死傷者 / 被害者', ru: 'пострадавший / жертва', ex: 'Fortunately, there were no serious casualties in the collision.', exHi: 'सौभाग्य से, टक्कर में कोई गंभीर हताहत नहीं हुआ।', exEs: 'Afortunadamente, no hubo víctimas graves en la colisión.', ic: '🩹' },
    { w: 'conscious', p: '/ˈkɒnʃəs/', m: 'aware of and responding to one\'s surroundings; awake', hi: 'होश में / सचेत', es: 'consciente', fr: 'conscient', de: 'bei Bewusstsein / ansprechbar', pt: 'consciente', zh: '神志清醒的 / 有知觉的', ar: 'واعٍ / مدرك', ja: '意識がある', ru: 'в сознании', ex: 'The driver is conscious and able to answer basic questions.', exHi: 'ड्राइवर होश में है और बुनियादी सवालों के जवाब देने में सक्षम है।', exEs: 'El conductor está consciente y puede responder preguntas básicas.', ic: '🧠' },
    { w: 'unconscious', p: '/ʌnˈkɒnʃəs/', m: 'not awake and not aware of and responding to one\'s surroundings', hi: 'बेहोश / अचेत', es: 'inconsciente / desmayado', fr: 'inconscient / évanoui', de: 'bewusstlos', pt: 'inconsciente / desmaiado', zh: '昏迷的 / 失去知觉的', ar: 'فاقد الوعي / مغمى عليه', ja: '意識不明の / 気絶した', ru: 'без сознания / в обмороке', ex: 'The injured cyclist was unconscious for two minutes following the fall.', exHi: 'घायल साइकिल चालक गिरने के बाद दो मिनट तक बेहोश रहा।', exEs: 'El ciclista herido estuvo inconsciente durante dos minutos.', ic: '😵' },
    { w: 'bleeding', p: '/ˈbliːdɪŋ/', m: 'the loss of blood from damaged blood vessels', hi: 'खून बहना / रक्तस्राव', es: 'sangrado / hemorragia', fr: 'saignement / hémorragie', de: 'Blutung', pt: 'sangramento / hemorragia', zh: '流血 / 出血', ar: 'نزيف', ja: '出血', ru: 'кровотечение', ex: 'Apply firm, continuous pressure to the wound to stop the bleeding.', exHi: 'खून बहना रोकने के लिए घाव पर मजबूती से लगातार दबाव डालें।', exEs: 'Aplique presión firme y continua sobre la herida para detener el sangrado.', ic: '🩸' },
    { w: 'evacuate', p: '/ɪˈvækjueɪt/', m: 'remove someone from a place of danger to a safe place', hi: 'खाली करना / सुरक्षित स्थान पर ले जाना', es: 'evacuar / desalojar', fr: 'évacuer', de: 'evakuieren / räumen', pt: 'evacuar / desocupar', zh: '疏散 / 撤离', ar: 'إخلاء', ja: '避難させる / 退去させる', ru: 'эвакуировать', ex: 'Security ordered everyone to evacuate the building immediately through emergency exits.', exHi: 'सुरक्षा ने सभी को आपातकालीन निकास के माध्यम से तुरंत इमारत खाली करने का आदेश दिया।', exEs: 'Seguridad ordenó evacuar el edificio de inmediato por las salidas de emergencia.', ic: '🏃' },
    { w: 'first aid', p: '/fɜːst eɪd/', m: 'help given to a sick or injured person until full medical treatment is available', hi: 'प्राथमिक उपचार / प्राथमिक चिकित्सा', es: 'primeros auxilios', fr: 'premiers secours', de: 'Erste Hilfe', pt: 'primeiros socorros', zh: '急救', ar: 'الإسعافات الأولية', ja: '応急手当 / ファーストエイド', ru: 'первая медицинская помощь', ex: 'Knowing basic first aid skills can save a person\'s life during an emergency.', exHi: 'बुनियादी प्राथमिक चिकित्सा कौशल जानने से आपात स्थिति के दौरान किसी व्यक्ति की जान बचाई जा सकती है।', exEs: 'Saber primeros auxilios básicos puede salvar una vida.', ic: '🩹' },
    { w: 'witness', p: '/ˈwɪtnəs/', m: 'a person who sees an event, typically a crime or accident, take place', hi: 'गवाह / प्रत्यक्षदर्शी', es: 'testigo', fr: 'témoin', de: 'Zeuge', pt: 'testemunha', zh: '目击者 / 见证人', ar: 'شاهد عيان', ja: '目撃者 / 証人', ru: 'свидетель / очевидец', ex: 'Police interviewed three eyewitnesses who saw the collision occur.', exHi: 'पुलिस ने तीन प्रत्यक्षदर्शियों से पूछताछ की जिन्होंने टक्कर होते देखी थी।', exEs: 'La policía entrevistó a tres testigos presenciales del choque.', ic: '👁️' },
    { w: 'theft', p: '/θeft/', m: 'the action or crime of stealing', hi: 'चोरी', es: 'robo / hurto', fr: 'vol', de: 'Diebstahl', pt: 'furto / roubo', zh: '盗窃 / 偷窃', ar: 'سرقة', ja: '盗難 / 窃盗', ru: 'кража / воровство', ex: 'She reported the theft of her backpack and laptop to the local station.', exHi: 'उसने अपने बैकपैक और लैपटॉप की चोरी की रिपोर्ट स्थानीय स्टेशन में दर्ज कराई।', exEs: 'Denunció el robo de su mochila y portátil en la comisaría.', ic: '🦹' },
    { w: 'extinguish', p: '/ɪkˈstɪŋɡwɪʃ/', m: 'cause a fire or light to cease to burn or shine', hi: 'आग बुझाना', es: 'extinguir / apagar (fuego)', fr: 'éteindre', de: 'löschen / ersticken', pt: 'extinguir / apagar', zh: '扑灭 / 熄灭', ar: 'إخماد / إطفاء', ja: '消火する / 消す', ru: 'тушить / гасить (огонь)', ex: 'The building caretaker used a fire extinguisher to extinguish the small electrical blaze.', exHi: 'इमारत के केयरटेकर ने बिजली की छोटी आग को बुझाने के लिए अग्निशामक यंत्र का इस्तेमाल किया।', exEs: 'El conserje usó un extintor para apagar el fuego eléctrico.', ic: '🧯' },
    { w: 'choking', p: '/ˈtʃəʊkɪŋ/', m: 'having severe difficulty in breathing because of a constricted or obstructed throat', hi: 'दम घुटना / सांस न ले पाना (गले में कुछ अटकना)', es: 'atragantamiento / asfixia', fr: 'étouffement / suffocation', de: 'Ersticken / Verschlucken', pt: 'engasgo / sufocamento', zh: '窒息 / 噎住', ar: 'اختناق', ja: '窒息 / のどが詰まること', ru: 'удушье / поперхивание', ex: 'If someone is choking, perform back blows or the Heimlich maneuver.', exHi: 'यदि किसी का दम घुट रहा है, तो पीठ पर थपथपाएं या हेइमलिच पैंतरेबाज़ी करें।', exEs: 'Si alguien se está atragantando, realice palmadas en la espalda.', ic: '🗣️' },
    { w: 'collision', p: '/kəˈlɪʒn/', m: 'an instance of one moving object or person striking violently against another', hi: 'टक्कर / भिड़ंत', es: 'colisión / choque', fr: 'collision / choc', de: 'Zusammenstoß / Kollision', pt: 'colisão / batida', zh: '碰撞 / 相撞事故', ar: 'تصادم', ja: '衝突事故', ru: 'столкновение / авария', ex: 'The two-car collision blocked both northbound lanes of the highway.', exHi: 'दो कारों की टक्कर ने राजमार्ग की दोनों उत्तर की ओर जाने वाली लेनों को अवरुद्ध कर दिया।', exEs: 'La colisión de dos coches bloqueó ambos carriles hacia el norte.', ic: '💥' },
    { w: 'crime scene', p: '/kraɪm siːn/', m: 'the place where an offense has been committed and forensic evidence may be gathered', hi: 'अपराध स्थल / घटनास्थल', es: 'escena del crimen', fr: 'scène de crime', de: 'Tatort', pt: 'cena do crime', zh: '案发现场', ar: 'مسرح الجريمة', ja: '犯行現場 / 現場', ru: 'место преступления', ex: 'Police taped off the crime scene to preserve fingerprints and evidence.', exHi: 'उंगलियों के निशान और सबूतों को सुरक्षित रखने के लिए पुलिस ने अपराध स्थल की घेराबंदी कर दी।', exEs: 'La policía acordonó la escena del crimen para preservar huellas.', ic: '🚧' },
    { w: 'calm', p: '/kɑːm/', m: 'not showing or feeling nervousness, anger, or other strong emotions', hi: 'शांत / धैर्यवान', es: 'tranquilo / en calma', fr: 'calme', de: 'ruhig / gelassen', pt: 'calmo / tranquilo', zh: '冷静的 / 镇静的', ar: 'هادئ', ja: '冷静な / 落ち着いた', ru: 'спокойный', ex: 'Please remain calm while the emergency operator connects you with the medical team.', exHi: 'कृपया शांत रहें जब तक कि आपातकालीन ऑपरेटर आपको मेडिकल टीम से जोड़ता है।', exEs: 'Por favor mantenga la calma mientras el operador le comunica con el equipo médico.', ic: '🧘' },
    { w: 'siren', p: '/ˈsaɪrən/', m: 'a device that makes a loud prolonged sound as a signal or warning on emergency vehicles', hi: 'साइरन / आपातकालीन चेतावनी भोंपू', es: 'sirena de emergencia', fr: 'sirène', de: 'Sirene / Martinshorn', pt: 'sirene', zh: '警报声 / 警笛', ar: 'صفارة الإنذار', ja: 'サイレン', ru: 'сирена', ex: 'We could hear police sirens approaching in the distance.', exHi: 'हम दूर से पुलिस के सायरन की आवाज आती सुन सकते थे।', exEs: 'Podíamos oír las sirenas de la policía acercándose a lo lejos.', ic: '🚨' }
  ],
  chunks: [
    { phrase: 'which emergency service do you require?', meaning: 'standard opening question from emergency dispatch operators', hi: 'आपको किस आपातकालीन सेवा की आवश्यकता है? (पुलिस, एम्बुलेंस, दमकल)', es: '¿qué servicio de emergencia necesita?', fr: 'quel service d\'urgence demandez-vous ?', de: 'welchen Notdienst benötigen Sie?', pt: 'qual serviço de emergência você precisa?', zh: '请问您需要哪项紧急服务？', ar: 'ما هي خدمة الطوارئ التي تطلبها؟', ja: '警察、消防、救急のどれですか？', ru: 'какая экстренная служба вам требуется?', note: 'Standard response: "Police", "Ambulance", or "Fire".', ic: '📞' },
    { phrase: 'stay on the line', meaning: 'do not hang up the telephone during an emergency call', hi: 'फोन पर बने रहें / लाइन न काटें', es: 'permanezca en la línea', fr: 'restez en ligne', de: 'bleiben Sie bitte am Apparat', pt: 'permaneça na linha / não desligue', zh: '请保持通话不要挂断', ar: 'ابق على الخط', ja: '電話を切らずにお待ちください', ru: 'оставайтесь на линии', note: 'Critical instruction from dispatchers.', ic: '📱' },
    { phrase: 'apply direct pressure', meaning: 'press firmly on a bleeding wound with a clean cloth', hi: 'सीधा दबाव डालें', es: 'aplicar presión directa', fr: 'exercer une pression directe', de: 'direkten Druck ausüben', pt: 'fazer pressão direta', zh: '直接按压止血', ar: 'الضغط المباشر على الجرح', ja: '直接圧迫する', ru: 'надавить прямо на рану', note: 'Vital first-aid command.', ic: '🩹' },
    { phrase: 'is the person breathing and conscious?', meaning: 'checking vital signs of a casualty', hi: 'क्या व्यक्ति सांस ले रहा है और होश में है?', es: '¿la persona respira y está consciente?', fr: 'la personne respire-t-elle et est-elle consciente ?', de: 'atmet die Person und ist sie ansprechbar?', pt: 'a pessoa está respirando e consciente?', zh: '伤者是否有呼吸并保持清醒？', ar: 'هل الشخص يتنفس وواعٍ؟', ja: '息をしていて意識はありますか？', ru: 'человек дышит и находится в сознании?', note: 'Key question asked by medical dispatchers.', ic: '🫁' },
    { phrase: 'help is on the way', meaning: 'emergency response vehicles have already been dispatched', hi: 'मदद रास्ते में है', es: 'la ayuda está en camino', fr: 'les secours sont en route', de: 'Hilfe ist unterwegs', pt: 'o socorro está a caminho', zh: '救援已在途中', ar: 'المساعدة في طريقها إليك', ja: '救助隊が向かっています', ru: 'помощь уже в пути', note: 'Reassuring phrase from operators.', ic: '🚑' },
    { phrase: 'remain calm and do not move them', meaning: 'keep still and avoid shifting an injured person with potential spinal trauma', hi: 'शांत रहें और उन्हें न हिलाएं', es: 'mantenga la calma y no los mueva', fr: 'restez calme et ne le déplacez pas', de: 'bleiben Sie ruhig und bewegen Sie ihn nicht', pt: 'mantenha a calma e não o mova', zh: '保持冷静，切勿移动伤员', ar: 'ابق هادئًا ولا تحركه', ja: '落ち着いて、動かさないでください', ru: 'сохраняйте спокойствие и не двигайте пострадавшего', note: 'Crucial first-aid safety protocol.', ic: '🛑' },
    { phrase: 'at the intersection of', meaning: 'specifying a location where two streets cross', hi: 'के चौराहे पर', es: 'en la intersección / cruce de...', fr: 'au croisement de...', de: 'an der Kreuzung von...', pt: 'no cruzamento de...', zh: '在...与...的交叉路口', ar: 'عند تقاطع...', ja: '〜と〜の交差点で', ru: 'на перекрёстке улиц...', note: 'Precise location identifier for dispatchers.', ic: '🚦' },
    { phrase: 'file a police report', meaning: 'formally record a crime or lost property with authorities', hi: 'पुलिस रिपोर्ट / प्राथमिकी दर्ज करना', es: 'presentar una denuncia policial', fr: 'déposer une plainte', de: 'eine polizeiliche Anzeige erstatten', pt: 'fazer um boletim de ocorrência (B.O.)', zh: '向警方报案 / 做笔录', ar: 'تقديم بلاغ للشرطة', ja: '警察に被害届を出す', ru: 'подать заявление в полицию', note: 'Required after thefts and collisions.', ic: '📝' }
  ],
  grammar: {
    title: 'Emergency Communication: Direct Imperatives for First Aid & Narrative Past for Incidents',
    concept: 'Using clear imperative directives ("Press firmly", "Do not move him") and past continuous/simple combinations ("I was walking when I saw...") to report incidents.',
    patterns: [
      {
        title: 'Emergency First-Aid Imperatives',
        structure: 'Base Verb [Do this] | Do not + Base Verb [Do not do that]',
        rule: 'Dispatchers give short, unambiguous imperative instructions during emergencies.',
        examples: [
          { en: 'Apply direct pressure to the wound with a clean cloth.', hi: 'एक साफ कपड़े से घाव पर सीधा दबाव डालें।', es: 'Aplique presión directa sobre la herida con un paño limpio.' },
          { en: 'Do not give him any food or water until the ambulance arrives.', hi: 'जब तक एम्बुलेंस न आ जाए उसे कोई भोजन या पानी न दें।', es: 'No le dé comida ni agua hasta que llegue la ambulancia.' }
        ]
      },
      {
        title: 'Narrating Incident Sequences: Past Continuous + Past Simple',
        structure: 'Subject + was / were + Verb-ing + when + Subject + Past Simple',
        rule: 'Use past continuous for background actions interrupted by a sudden incident.',
        examples: [
          { en: 'We were driving along Elm Street when a car crossed the red light and struck us.', hi: 'हम एल्म स्ट्रीट पर गाड़ी चला रहे थे जब एक कार ने रेड लाइट पार की और हमसे टकरा गई।', es: 'Íbamos conduciendo por Elm Street cuando un coche se saltó el semáforo y nos golpeó.' },
          { en: 'I was walking past the bank when I heard an explosion.', hi: 'मैं बैंक के पास से गुजर रहा था जब मैंने एक विस्फोट की आवाज सुनी।', es: 'Pasaba por delante del banco cuando escuché una explosión.' }
        ]
      },
      {
        title: 'Describing Vital Signs and State: "Is breathing", "Is conscious"',
        structure: 'The casualty / person + is + conscious / breathing / bleeding.',
        rule: 'State current physiological conditions clearly without delay.',
        examples: [
          { en: 'The casualty is breathing but remains completely unconscious.', hi: 'घायल सांस ले रहा है लेकिन पूरी तरह बेहोश है।', es: 'La víctima respira pero sigue completamente inconsciente.' }
        ]
      }
    ]
  },
  mistakes: [
    {
      inc: 'Do not moving the injured person.',
      cor: 'Do not move the injured person.',
      exp: 'Negative imperatives use "Do not + base verb" ("Do not move"), not "-ing".',
      hi: 'नकारात्मक आज्ञा में "Do not + base verb" ("Do not move") का प्रयोग करें।',
      es: 'Los imperativos negativos usan "Do not + verbo base": "Do not move".'
    },
    {
      inc: 'I was walk when the accident happened.',
      cor: 'I was walking when the accident happened.',
      exp: 'Past Continuous requires "was + verb-ing": "was walking".',
      hi: 'Past Continuous में "was walking" का प्रयोग होता है।',
      es: 'El pasado continuo requiere "was + gerundio": "was walking".'
    },
    {
      inc: 'The ambulance arrived on the scene in six minutes.',
      cor: 'The ambulance arrived at the scene in six minutes.',
      exp: 'We arrive "at" a scene, building, or location.',
      hi: 'घटनास्थल पर पहुँचने के लिए "arrived at the scene" का प्रयोग होता है।',
      es: 'Se llega "at the scene", no "on the scene".'
    },
    {
      inc: 'The person is not conscious and not breath.',
      cor: 'The person is not conscious and not breathing.',
      exp: 'Maintain parallel structure: "not conscious and not breathing".',
      hi: '"Not breathing" का प्रयोग करें।',
      es: 'Usa la forma en -ing: "not breathing".'
    },
    {
      inc: 'I want to do a police report.',
      cor: 'I want to file a police report.',
      exp: 'The correct collocation is "file a police report".',
      hi: 'पुलिस रिपोर्ट दर्ज करने के लिए "file a police report" का प्रयोग होता है।',
      es: 'La frase correcta es "file a police report".'
    }
  ],
  dialogues: [
    {
      title: 'Reporting a Road Collision to Emergency Services (999/911)',
      context: 'David witnesses a car crash at a city crossroads and calls emergency dispatch.',
      charA: { name: 'David', av: '👨‍💼', role: 'Caller / Witness' },
      charB: { name: 'Dispatcher', av: '👩‍💼', role: 'Emergency Operator' },
      turns: [
        { spk: 'Dispatcher', text: 'Emergency services. Which service do you require: Police, Fire, or Ambulance?', hi: 'आपातकालीन सेवाएं। आपको किस सेवा की आवश्यकता है: पुलिस, दमकल, या एम्बुलेंस?', es: 'Servicios de emergencia. ¿Qué servicio necesita: Policía, Bomberos o Ambulancia?' },
        { spk: 'David', text: 'Ambulance and Police, please! There has just been a serious two-car collision at the intersection of Oak Street and 4th Avenue.', hi: 'एम्बुलेंस और पुलिस, कृपया! ओक स्ट्रीट और 4th एवेन्यू के चौराहे पर अभी दो कारों की गंभीर टक्कर हुई है।', es: '¡Ambulancia y Policía, por favor! Ha habido un choque grave de dos coches en el cruce de Oak Street y 4th Avenue.' },
        { spk: 'Dispatcher', text: 'Are there any casualties, and are the people conscious?', hi: 'क्या कोई हताहत है, और क्या लोग होश में हैं?', es: '¿Hay heridos y están conscientes?' },
        { spk: 'David', text: 'One driver is conscious with an arm injury, but the passenger in the second car appears unconscious.', hi: 'एक ड्राइवर हाथ में चोट के साथ होश में है, लेकिन दूसरी कार का यात्री बेहोश लग रहा है।', es: 'Un conductor está consciente con una lesión en el brazo, pero el pasajero del otro coche parece inconsciente.' },
        { spk: 'Dispatcher', text: 'Stay on the line. Paramedics and police units are already on the way. Do not move the unconscious person unless there is immediate fire danger.', hi: 'लाइन पर बने रहें। पैरामेडिक्स और पुलिस इकाइयाँ पहले से ही रास्ते में हैं। जब तक आग का तत्काल खतरा न हो, बेहोश व्यक्ति को न हिलाएं।', es: 'Permanezca en la línea. Los sanitarios y la policía ya están en camino. No mueva a la persona inconsciente a menos que haya peligro de incendio.' },
        { spk: 'David', text: 'Understood. I will stay right here and guide the ambulance when it arrives.', hi: 'समझ गया। मैं यहीं रुकूँगा और एम्बुलेंस के आने पर उसका मार्गदर्शन करूँगा।', es: 'Entendido. Me quedaré aquí y guiaré a la ambulancia cuando llegue.' }
      ]
    },
    {
      title: 'Reporting a Theft at a Police Station',
      context: 'Nina reports a stolen handbag to Officer Higgins at the central police station.',
      charA: { name: 'Nina', av: '👩‍💼', role: 'Victim' },
      charB: { name: 'Officer Higgins', av: '👮‍♂️', role: 'Police Officer' },
      turns: [
        { spk: 'Nina', text: 'Hello officer. I would like to file a police report. My handbag was stolen twenty minutes ago at the train station café.', hi: 'नमस्ते अधिकारी महोदय। मैं एक पुलिस रिपोर्ट दर्ज कराना चाहती हूँ। बीस मिनट पहले रेलवे स्टेशन कैफे में मेरा हैंडबैग चोरी हो गया था।', es: 'Hola oficial. Me gustaría presentar una denuncia policial. Me robaron el bolso hace veinte minutos en la cafetería de la estación.' },
        { spk: 'Officer Higgins', text: 'Please take a seat. Can you describe what the bag looks like and what was inside?', hi: 'कृपया बैठ जाइए। क्या आप बता सकती हैं कि बैग कैसा दिखता है और उसके अंदर क्या था?', es: 'Tome asiento por favor. ¿Puede describir cómo es el bolso y qué contenía?' },
        { spk: 'Nina', text: 'It is a black leather bag containing my passport, wallet with credit cards, and smartphone.', hi: 'यह एक काला चमड़े का बैग है जिसमें मेरा पासपोर्ट, क्रेडिट कार्ड वाला बटुआ और स्मार्टफोन है।', es: 'Es un bolso de cuero negro con mi pasaporte, billetera con tarjetas y teléfono.' },
        { spk: 'Officer Higgins', text: 'I will log this incident and give you an official crime reference number for your insurance company.', hi: 'मैं इस घटना को दर्ज करूँगा और आपकी बीमा कंपनी के लिए आपको एक आधिकारिक अपराध संदर्भ संख्या दूँगा।', es: 'Registraré el incidente y le daré un número de referencia oficial para su aseguradora.' }
      ]
    }
  ],
  practice: [
    {
      id: 'ex_u10_l146_p01',
      type: 'multiple_choice',
      prompt: 'Select the correct emergency first-aid instruction:',
      options: [
        { id: '1', text: 'Apply direct pressure to the wound with a clean bandage.', isCorrect: true },
        { id: '2', text: 'Applying direct pressure to the wound with a clean bandage.', isCorrect: false },
        { id: '3', text: 'To apply direct pressure to the wound with a clean bandage.', isCorrect: false },
        { id: '4', text: 'Apply direct pressure to the wound with clean bandage for stop.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Imperative sentences start with the base verb ("Apply direct pressure").'
    },
    {
      id: 'ex_u10_l146_p02',
      type: 'fill_blank',
      prompt: 'Do not _____ (move) the casualty if you suspect a neck or back injury.',
      correctAnswer: 'move',
      explanation: 'Negative imperative: "Do not + base verb (move)".'
    },
    {
      id: 'ex_u10_l146_p03',
      type: 'word_ordering',
      prompt: 'Arrange the words to form a dispatcher instruction:',
      tokens: ['Stay', 'on', 'the', 'line', 'while', 'help', 'is', 'dispatched.'],
      correctAnswer: 'Stay on the line while help is dispatched.',
      explanation: 'Standard emergency call instruction.'
    },
    {
      id: 'ex_u10_l146_p04',
      type: 'error_correction',
      prompt: 'Find and fix the error in the sentence:',
      sentence: 'I was walk in the park when I saw the fire.',
      correctAnswer: 'I was walking in the park when I saw the fire.',
      explanation: 'Use Past Continuous "was walking".'
    },
    {
      id: 'ex_u10_l146_p05',
      type: 'translation',
      prompt: 'Translate into English: "मदद रास्ते में है, कृपया लाइन पर बने रहें।"',
      correctAnswer: 'Help is on the way, please stay on the line.',
      acceptableAnswers: ['Help is on the way, please remain on the line.'],
      explanation: '"Help is on the way" is the reassurance formula.'
    },
    {
      id: 'ex_u10_l146_p06',
      type: 'listening',
      prompt: 'Listen to the emergency operator and identify the requested service:',
      audioText: 'Emergency services. Ambulance has been dispatched to 42 Maple Street.',
      options: [
        { id: '1', text: 'Ambulance to 42 Maple Street', isCorrect: true },
        { id: '2', text: 'Police to Oak Avenue', isCorrect: false },
        { id: '3', text: 'Fire brigade to Pine Road', isCorrect: false },
        { id: '4', text: 'Tow truck to highway', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The audio confirms an ambulance dispatched to 42 Maple Street.'
    },
    {
      id: 'ex_u10_l146_p07',
      type: 'match_pairs',
      prompt: 'Match emergency terms with their definitions:',
      options: [
        { id: '1', text: 'paramedic → emergency medical specialist' },
        { id: '2', text: 'unconscious → not awake and unresponsive' },
        { id: '3', text: 'theft → crime of stealing property' },
        { id: '4', text: 'dispatcher → emergency call operator' }
      ],
      correctAnswer: 'matched',
      explanation: 'Key emergency response vocabulary.'
    },
    {
      id: 'ex_u10_l146_p08',
      type: 'dialogue_completion',
      prompt: 'Complete the sentence:\nOperator: "Is anyone trapped inside?"\nCaller: "No, everyone has _____ safely through the fire exit."',
      options: [
        { id: '1', text: 'evacuated the building', isCorrect: true },
        { id: '2', text: 'switched to an aisle seat', isCorrect: false },
        { id: '3', text: 'paid out of pocket', isCorrect: false },
        { id: '4', text: 'disputed the meter reading', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: '"Evacuated the building" fits the fire emergency.'
    },
    {
      id: 'ex_u10_l146_p09',
      type: 'speaking',
      prompt: 'Speak this emergency report clearly:',
      targetText: 'There has been a collision at the intersection of Main Street and 5th Avenue, and an ambulance is needed.',
      explanation: 'Speak clearly with controlled pacing and proper intonation.'
    },
    {
      id: 'ex_u10_l146_p10',
      type: 'personal_production',
      prompt: 'Write an emergency imperative sentence telling someone not to panic:',
      sentenceTemplate: 'Please [action] and stay on the line.',
      correctAnswer: 'Please remain calm and stay on the line.',
      explanation: 'Tests application of calm emergency imperatives.'
    }
  ],
  review: [
    {
      id: 'ex_u10_l146_r01',
      type: 'multiple_choice',
      prompt: 'Which verb form is used in the instruction: "_____ direct pressure to the wound"?',
      options: [
        { id: '1', text: 'Apply', isCorrect: true },
        { id: '2', text: 'Applying', isCorrect: false },
        { id: '3', text: 'To apply', isCorrect: false },
        { id: '4', text: 'Applied', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Direct commands use the base verb "Apply".'
    },
    {
      id: 'ex_u10_l146_r02',
      type: 'fill_blank',
      prompt: 'We were driving home when we _____ (see) thick black smoke rising from the warehouse.',
      correctAnswer: 'saw',
      explanation: 'Past Simple "saw" for the interrupting event.'
    },
    {
      id: 'ex_u10_l146_r03',
      type: 'word_ordering',
      prompt: 'Reorder the words to form a question:',
      tokens: ['Is', 'the', 'injured', 'person', 'conscious', 'and', 'breathing?'],
      correctAnswer: 'Is the injured person conscious and breathing?',
      explanation: 'Vital signs query.'
    },
    {
      id: 'ex_u10_l146_r04',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence:',
      sentence: 'I went to the police station for to file a report.',
      correctAnswer: 'I went to the police station to file a report.',
      explanation: 'Use infinitive "to file", not "for to file".'
    },
    {
      id: 'ex_u10_l146_r05',
      type: 'translation',
      prompt: 'Translate into English: "दमकल विभाग ने जलती हुई इमारत से सभी को बाहर निकाल लिया।"',
      correctAnswer: 'The fire brigade evacuated everyone from the burning building.',
      acceptableAnswers: ['The firefighters evacuated everyone from the burning building.'],
      explanation: '"Evacuated everyone" is accurate.'
    },
    {
      id: 'ex_u10_l146_r06',
      type: 'listening',
      prompt: 'Listen and select what the caller reported:',
      audioText: 'I am calling to report a burglary at 14 King Street. The back window was smashed.',
      options: [
        { id: '1', text: 'A burglary with a smashed back window', isCorrect: true },
        { id: '2', text: 'A car collision on the highway', isCorrect: false },
        { id: '3', text: 'A broken heating unit', isCorrect: false },
        { id: '4', text: 'A medical prescription renewal', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'The caller reported a burglary at 14 King Street.'
    },
    {
      id: 'ex_u10_l146_r07',
      type: 'listen_and_type',
      prompt: 'Listen and type what you hear:',
      audioText: 'The emergency dispatcher dispatched paramedics to the scene of the accident.',
      correctAnswer: 'The emergency dispatcher dispatched paramedics to the scene of the accident.',
      explanation: 'Focus on spelling of "paramedics" and "dispatched".'
    },
    {
      id: 'ex_u10_l146_r08',
      type: 'multiple_choice',
      prompt: 'What should you never do if you suspect a casualty has a neck or spine injury?',
      options: [
        { id: '1', text: 'Move them unnecessarily', isCorrect: true },
        { id: '2', text: 'Call an ambulance', isCorrect: false },
        { id: '3', text: 'Stay on the line with the dispatcher', isCorrect: false },
        { id: '4', text: 'Check if they are breathing', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Casualties with suspected spinal injuries must not be moved.'
    }
  ],
  assessment: [
    {
      id: 'ex_u10_l146_a01',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes an emergency incident and response?',
      options: [
        { id: '1', text: 'The dispatcher told us to apply direct pressure and remain calm until paramedics arrived.', isCorrect: true },
        { id: '2', text: 'The dispatcher told us applying direct pressure and remaining calm.', isCorrect: false },
        { id: '3', text: 'The dispatcher tell us to apply direct pressure for arrived.', isCorrect: false },
        { id: '4', text: 'The dispatcher told to applying pressure.', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'Option 1 correctly uses the reported imperative "told us to apply... and remain...".'
    },
    {
      id: 'ex_u10_l146_a02',
      type: 'fill_blank',
      prompt: 'The police officer gave us a crime reference number after we _____ (file) the report.',
      correctAnswer: 'filed',
      explanation: 'Past Simple "filed".'
    },
    {
      id: 'ex_u10_l146_a03',
      type: 'word_ordering',
      prompt: 'Assemble the tokens into a clear statement:',
      tokens: ['Paramedics', 'arrived', 'at', 'the', 'scene', 'in', 'less', 'than', 'five', 'minutes.'],
      correctAnswer: 'Paramedics arrived at the scene in less than five minutes.',
      explanation: 'Incident response statement.'
    },
    {
      id: 'ex_u10_l146_a04',
      type: 'error_correction',
      prompt: 'Correct the error in this sentence:',
      sentence: 'Do not giving him water if he is unconscious.',
      correctAnswer: 'Do not give him water if he is unconscious.',
      explanation: 'Use base verb "give" after "Do not".'
    },
    {
      id: 'ex_u10_l146_a05',
      type: 'translation',
      prompt: 'Translate into English: "क्या कोई घायल है और क्या वे होश में हैं?"',
      correctAnswer: 'Are there any casualties and are they conscious?',
      acceptableAnswers: ['Are there any injured people and are they conscious?'],
      explanation: '"Casualties / conscious" are the standard medical emergency terms.'
    },
    {
      id: 'ex_u10_l146_a06',
      type: 'dialogue_completion',
      prompt: 'Complete the dialogue:\nDispatcher: "Help is on the way. What should you do right now?"\nCaller: "I will _____ and keep the casualty warm."',
      options: [
        { id: '1', text: 'apply direct pressure to the wound', isCorrect: true },
        { id: '2', text: 'submit a meter reading', isCorrect: false },
        { id: '3', text: 'change trains at Victoria', isCorrect: false },
        { id: '4', text: 'reduce the damage excess to zero', isCorrect: false }
      ],
      correctAnswer: '1',
      explanation: 'First-aid action fits the emergency dialogue.'
    },
    {
      id: 'ex_u10_l146_a07',
      type: 'speaking',
      prompt: 'Read this emergency call turn aloud:',
      targetText: 'I am reporting a two-car collision at the junction of Elm Street. One person is injured and requires immediate medical attention.',
      explanation: 'Ensure steady, calm, and clear delivery.'
    }
  ]
};
