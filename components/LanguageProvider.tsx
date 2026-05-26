"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type Language = "en" | "ar" | "fr" | "es";

const languageLabels: Record<Language, string> = {
  en: "EN",
  ar: "AR",
  fr: "FR",
  es: "ES"
};

const dictionary: Record<Exclude<Language, "en">, Record<string, string>> = {
  ar: {
    "United Kingdom 🇬🇧 • Global Operations": "المملكة المتحدة 🇬🇧 • عمليات عالمية",
    "AI-powered infrastructure for digital commerce and global growth.": "بنية تحتية مدعومة بالذكاء الاصطناعي للتجارة الرقمية والنمو العالمي.",
    "IAMILKAY® designs global digital infrastructure for modern enterprises: AI systems, software technologies, mobile applications, performance intelligence and commerce operations deployed with institutional discipline.": "تصمم IAMILKAY® بنية تحتية رقمية عالمية للشركات الحديثة: أنظمة ذكاء اصطناعي، تقنيات برمجية، تطبيقات جوال، ذكاء أداء وعمليات تجارة رقمية بانضباط مؤسسي.",
    "Explore Software": "استكشف البرمجيات",
    "View Operations": "عرض العمليات",
    "Years combined digital experience": "سنوات من الخبرة الرقمية المجمعة",
    "Campaign and project workflows": "سير عمل الحملات والمشاريع",
    "AI, software and commerce services": "خدمات الذكاء الاصطناعي والبرمجيات والتجارة",
    "Registered company infrastructure": "بنية شركة مسجلة",
    "IAMILKAY® Operations Console": "وحدة عمليات IAMILKAY®",
    "United Kingdom infrastructure desk": "مكتب البنية التحتية في المملكة المتحدة",
    "Online": "متصل",
    "Marketplace Revenue Systems": "أنظمة إيرادات الأسواق",
    "Performance Intelligence": "ذكاء الأداء",
    "Customer Operations": "عمليات العملاء",
    "Search demand": "طلب البحث",
    "Commerce feeds": "تدفقات التجارة",
    "CRM events": "أحداث CRM",
    "Executive view": "عرض تنفيذي",
    "Executive operating intelligence.": "ذكاء تشغيلي تنفيذي.",
    "Inquiry pipeline": "مسار الاستفسارات",
    "Marketplace control": "تحكم الأسواق",
    "Automation readiness": "جاهزية الأتمتة",
    "Connected products": "منتجات متصلة",
    "Commerce software, CRM intelligence and enterprise contact infrastructure operating as one control layer.": "برمجيات التجارة وذكاء CRM وبنية التواصل المؤسسية تعمل كطبقة تحكم واحدة.",
    "London-based": "مقرها لندن",
    "Secure mail routing": "توجيه بريد آمن",
    "Production deployment": "نشر إنتاجي",
    "Marketplace operations": "عمليات الأسواق",
    "Market Intelligence": "ذكاء السوق",
    "AI and search intelligence layer.": "طبقة ذكاء البحث والذكاء الاصطناعي.",
    "Market-inspired operating indicators for AI search, Google demand, marketplace commerce and automated data systems.": "مؤشرات تشغيلية مستوحاة من الأسواق للبحث بالذكاء الاصطناعي وطلب Google وتجارة الأسواق وأنظمة البيانات الآلية.",
    "Enterprise Data Processing": "معالجة بيانات مؤسسية",
    "Google Search Intelligence": "ذكاء بحث Google",
    "Marketplace Intelligence": "ذكاء الأسواق",
    "Automated Systems": "أنظمة مؤتمتة",
    "Operational Proof": "إثبات تشغيلي",
    "Real interfaces, real product evidence.": "واجهات حقيقية ودليل منتجات حقيقي.",
    "Corporate Operating System": "نظام تشغيل مؤسسي",
    "A serious enterprise stack for global growth.": "منظومة مؤسسية جادة للنمو العالمي.",
    "Enterprise Desk": "مكتب المؤسسات",
    "Start a serious infrastructure conversation.": "ابدأ حوارا جادا حول البنية التحتية.",
    "Contact IAMILKAY®": "تواصل مع IAMILKAY®",
    "Contact": "تواصل",
    "Home": "الرئيسية",
    "About": "حول الشركة",
    "Software": "البرمجيات",
    "Mobile": "الجوال",
    "Marketing": "التسويق",
    "Operations": "العمليات",
    "Technologies": "التقنيات",
    "Name": "الاسم",
    "Company": "الشركة",
    "Email": "البريد الإلكتروني",
    "Phone": "الهاتف",
    "Department Selection": "اختيار القسم",
    "Message": "الرسالة",
    "Send Enterprise Inquiry": "إرسال استفسار مؤسسي",
    "Sending...": "جار الإرسال...",
    "Your inquiry has been received. The enterprise desk will review it shortly.": "تم استلام طلبك. سيراجعه مكتب المؤسسات قريبا.",
    "The message could not be sent. Please check the fields or try again shortly.": "تعذر إرسال الرسالة. يرجى مراجعة الحقول أو المحاولة بعد قليل.",
    "Describe your business, channels, current systems and growth target.": "صف عملك وقنواتك وأنظمتك الحالية وهدف النمو.",
    "View Demo": "عرض العرض التوضيحي",
    "Get Information": "الحصول على معلومات",
    "Request Consultation": "طلب استشارة",
    "Deployment Model": "نموذج النشر",
    "ACTIVE": "نشط",
    "LIVE": "مباشر",
    "LEARNING": "يتعلم",
    "synced": "متزامن",
    "tracked": "متتبع",
    "Amazon / eBay / Etsy / Shopify": "Amazon / eBay / Etsy / Shopify",
    "Google Ads / Meta / TikTok / Search": "Google Ads / Meta / TikTok / Search",
    "AI CRM / Email Routing / WhatsApp Desk": "AI CRM / توجيه البريد / مكتب WhatsApp",
    "Software / Marketing / Commerce": "البرمجيات / التسويق / التجارة",
    "SKU, feed, ads and conversion layer": "طبقة SKU والتغذية والإعلانات والتحويل",
    "CRM routing and follow-up systems": "أنظمة توجيه CRM والمتابعة",
    "Smartmetrics and GetSmarty visuals are staged as an active software ecosystem for IAMILKAY®.": "يتم عرض مرئيات Smartmetrics وGetSmarty كمنظومة برمجية نشطة لـ IAMILKAY®.",
    "CRM, analytics and marketplace data translated into operating intelligence.": "تحويل بيانات CRM والتحليلات والأسواق إلى ذكاء تشغيلي.",
    "Search volume, intent and conversion signals inform performance architecture.": "حجم البحث والنية وإشارات التحويل تغذي بنية الأداء.",
    "Amazon, Etsy and eBay demand signals guide digital commerce expansion.": "إشارات الطلب من Amazon وEtsy وeBay توجه توسع التجارة الرقمية.",
    "Workflow automations connect media, CRM, software and reporting layers.": "تربط أتمتة سير العمل طبقات الإعلام وCRM والبرمجيات والتقارير.",
    "Operational Visual": "مرئي تشغيلي",
    "CRM and customer intelligence infrastructure.": "بنية CRM وذكاء العملاء.",
    "Dashboard-style operational interfaces support a credible enterprise story around leads, customer data and executive reporting.": "واجهات تشغيلية بأسلوب لوحات التحكم تدعم سردا مؤسسيا موثوقا حول العملاء المحتملين وبيانات العملاء والتقارير التنفيذية.",
    "Analytics tables": "جداول التحليلات",
    "Data Layer": "طبقة البيانات",
    "GetSmarty system layer": "طبقة نظام GetSmarty",
    "Commerce Software": "برمجيات التجارة",
    "Software, performance intelligence and commerce operations are organized into a single institutional digital identity.": "يتم تنظيم البرمجيات وذكاء الأداء وعمليات التجارة ضمن هوية رقمية مؤسسية واحدة.",
    "AI Systems": "أنظمة الذكاء الاصطناعي",
    "AI CRM and automation systems": "أنظمة AI CRM والأتمتة",
    "Lead scoring, customer intelligence, automated follow-up and executive reporting layers.": "طبقات تقييم العملاء المحتملين وذكاء العملاء والمتابعة الآلية والتقارير التنفيذية.",
    "Commerce": "التجارة",
    "Global commerce operations": "عمليات التجارة العالمية",
    "Amazon, eBay, Etsy, Shopify and dropshipping workflows shaped around international growth.": "سير عمل Amazon وeBay وEtsy وShopify والدروبشيبينغ مصمم حول النمو الدولي.",
    "Media": "الإعلام",
    "Google, Meta and TikTok advertising systems connected to analytics, CRM and conversion data.": "أنظمة إعلانات Google وMeta وTikTok متصلة بالتحليلات وCRM وبيانات التحويل.",
    "For software, AI CRM, performance media, marketplace commerce or global digital operations.": "للبرمجيات وAI CRM وإعلام الأداء وتجارة الأسواق أو العمليات الرقمية العالمية.",
    "Company No.": "رقم الشركة",
    "Registered Address": "العنوان المسجل",
    "WhatsApp / Telegram": "WhatsApp / Telegram",
    "Social": "حساب التواصل",
    "Brand": "العلامة",
    "Company data": "بيانات الشركة",
    "Enterprise Contact": "تواصل مؤسسي",
    "Start a serious digital infrastructure conversation.": "ابدأ حوارا جادا حول البنية الرقمية.",
    "For software, AI CRM, paid media, marketplace commerce, dropshipping systems or global digital operations, contact IAMILKAY® directly.": "للبرمجيات وAI CRM والإعلانات المدفوعة وتجارة الأسواق وأنظمة الدروبشيبينغ أو العمليات الرقمية العالمية، تواصل مباشرة مع IAMILKAY®.",
    "Communication": "التواصل",
    "Enterprise inquiry desk.": "مكتب الاستفسارات المؤسسية.",
    "Department-based contact structure with secure form handling and professional validation.": "هيكل تواصل حسب الأقسام مع معالجة نماذج آمنة وتحقق احترافي.",
    "Departments": "الأقسام",
    "Professional email structure.": "هيكل بريد إلكتروني احترافي.",
    "United Kingdom Corporate Position": "الموقع المؤسسي في المملكة المتحدة",
    "A serious digital infrastructure company.": "شركة بنية تحتية رقمية جادة.",
    "IAMILKAY® operates from the United Kingdom with a global execution mindset across software, commerce, performance intelligence and AI-supported operations.": "تعمل IAMILKAY® من المملكة المتحدة بعقلية تنفيذ عالمية عبر البرمجيات والتجارة وذكاء الأداء والعمليات المدعومة بالذكاء الاصطناعي.",
    "Company Data": "بيانات الشركة",
    "Registered identity with institutional clarity.": "هوية مسجلة بوضوح مؤسسي.",
    "The corporate presentation is structured for investors, enterprise clients, global partners and financial professionals.": "تم تنظيم العرض المؤسسي للمستثمرين والعملاء المؤسسيين والشركاء العالميين والمهنيين الماليين.",
    "Corporate registry": "السجل المؤسسي",
    "IAMILKAY® is presented as a serious corporate digital infrastructure identity with clear company data, defined operating geography and transparent communication channels.": "تقدم IAMILKAY® كهوية بنية تحتية رقمية مؤسسية جادة مع بيانات شركة واضحة ونطاق تشغيل محدد وقنوات تواصل شفافة.",
    "Company Number": "رقم الشركة",
    "Jurisdiction": "الاختصاص",
    "England and Wales": "إنجلترا وويلز",
    "Core Domains": "المجالات الأساسية",
    "AI Systems • Software Technologies • Mobile Applications • Global Commerce": "أنظمة الذكاء الاصطناعي • تقنيات البرمجيات • تطبيقات الجوال • التجارة العالمية",
    "Trust Architecture": "بنية الثقة",
    "Built to communicate scale, confidence and execution.": "مصممة لإيصال الحجم والثقة والتنفيذ.",
    "Every business area is framed as infrastructure rather than agency service delivery.": "يتم تقديم كل مجال عمل كبنية تحتية وليس كخدمة وكالة.",
    "UK Registered Entity": "كيان مسجل في المملكة المتحدة",
    "Company No. 17185529, registered in England and Wales.": "رقم الشركة 17185529، مسجلة في إنجلترا وويلز.",
    "Institutional Presentation": "عرض مؤسسي",
    "Clear operating domains, transparent communication and professional data structure.": "مجالات تشغيل واضحة وتواصل شفاف وهيكل بيانات احترافي.",
    "Executive Reporting": "تقارير تنفيذية",
    "Growth, software and commerce systems designed for decision visibility.": "أنظمة نمو وبرمجيات وتجارة مصممة لوضوح القرار.",
    "Mobile Operations": "عمليات الجوال",
    "Premium mobile systems for CRM, commerce, field teams and customer engagement.": "أنظمة جوال مميزة لـ CRM والتجارة وفرق الميدان وتفاعل العملاء.",
    "Global Operations": "العمليات العالمية",
    "Software Systems": "أنظمة البرمجيات",
    "Partnerships": "الشراكات",
    "Investor Relations": "علاقات المستثمرين",
    "Mobile Applications": "تطبيقات الجوال",
    "Language": "اللغة",
    "IAMILKAY® UK / GLOBAL INFRA": "IAMILKAY® UK / بنية عالمية",
    "AI SEARCH / ENTERPRISE DEMAND": "بحث الذكاء الاصطناعي / طلب المؤسسات",
    "GOOGLE INTEL / SEARCH SIGNALS": "ذكاء Google / إشارات البحث",
    "AMAZON GMV / MARKETPLACE SCALE": "Amazon GMV / حجم الأسواق",
    "ETSY DATA / CREATOR COMMERCE": "بيانات Etsy / تجارة المبدعين",
    "EBAY VOLUME / CROSS-BORDER": "حجم eBay / عابر للحدود",
    "GLOBAL SAAS / RECURRING SYSTEMS": "SaaS عالمي / أنظمة متكررة",
    "UK OPERATIONS / ACTIVE": "عمليات المملكة المتحدة / نشط"
  },
  fr: {
    "United Kingdom 🇬🇧 • Global Operations": "Royaume-Uni 🇬🇧 • Opérations mondiales",
    "AI-powered infrastructure for digital commerce and global growth.": "Infrastructure alimentée par l’IA pour le commerce digital et la croissance mondiale.",
    "IAMILKAY® designs global digital infrastructure for modern enterprises: AI systems, software technologies, mobile applications, performance intelligence and commerce operations deployed with institutional discipline.": "IAMILKAY® conçoit une infrastructure digitale mondiale pour les entreprises modernes : systèmes IA, technologies logicielles, applications mobiles, intelligence de performance et opérations commerce avec une discipline institutionnelle.",
    "Explore Software": "Explorer les logiciels",
    "View Operations": "Voir les opérations",
    "Years combined digital experience": "Années d’expérience digitale cumulée",
    "Campaign and project workflows": "Flux de campagnes et projets",
    "AI, software and commerce services": "Services IA, logiciels et commerce",
    "Registered company infrastructure": "Infrastructure de société enregistrée",
    "IAMILKAY® Operations Console": "Console d’opérations IAMILKAY®",
    "United Kingdom infrastructure desk": "Bureau infrastructure Royaume-Uni",
    "Online": "En ligne",
    "Marketplace Revenue Systems": "Systèmes de revenus marketplace",
    "Performance Intelligence": "Intelligence de performance",
    "Customer Operations": "Opérations clients",
    "Search demand": "Demande de recherche",
    "Commerce feeds": "Flux commerce",
    "CRM events": "Événements CRM",
    "Executive view": "Vue exécutive",
    "Executive operating intelligence.": "Intelligence opérationnelle exécutive.",
    "Inquiry pipeline": "Pipeline de demandes",
    "Marketplace control": "Contrôle marketplace",
    "Automation readiness": "Préparation automation",
    "Connected products": "Produits connectés",
    "Commerce software, CRM intelligence and enterprise contact infrastructure operating as one control layer.": "Logiciels commerce, intelligence CRM et infrastructure de contact d’entreprise opérant comme une seule couche de contrôle.",
    "London-based": "Basé à Londres",
    "Secure mail routing": "Routage mail sécurisé",
    "Production deployment": "Déploiement production",
    "Marketplace operations": "Opérations marketplace",
    "Market Intelligence": "Intelligence marché",
    "AI and search intelligence layer.": "Couche d’intelligence IA et recherche.",
    "Market-inspired operating indicators for AI search, Google demand, marketplace commerce and automated data systems.": "Indicateurs opérationnels inspirés des marchés pour la recherche IA, la demande Google, le commerce marketplace et les systèmes de données automatisés.",
    "Enterprise Data Processing": "Traitement de données d’entreprise",
    "Google Search Intelligence": "Intelligence Google Search",
    "Marketplace Intelligence": "Intelligence marketplace",
    "Automated Systems": "Systèmes automatisés",
    "Operational Proof": "Preuve opérationnelle",
    "Real interfaces, real product evidence.": "Interfaces réelles, preuves produit réelles.",
    "Corporate Operating System": "Système d’exploitation corporate",
    "A serious enterprise stack for global growth.": "Une architecture d’entreprise sérieuse pour la croissance mondiale.",
    "Enterprise Desk": "Bureau entreprise",
    "Start a serious infrastructure conversation.": "Démarrer une conversation sérieuse sur l’infrastructure.",
    "Contact IAMILKAY®": "Contacter IAMILKAY®",
    "Contact": "Contact",
    "Home": "Accueil",
    "About": "À propos",
    "Software": "Logiciels",
    "Mobile": "Mobile",
    "Marketing": "Marketing",
    "Operations": "Opérations",
    "Technologies": "Technologies",
    "Name": "Nom",
    "Company": "Entreprise",
    "Email": "Email",
    "Phone": "Téléphone",
    "Department Selection": "Sélection du département",
    "Message": "Message",
    "Send Enterprise Inquiry": "Envoyer la demande",
    "Sending...": "Envoi...",
    "Your inquiry has been received. The enterprise desk will review it shortly.": "Votre demande a été reçue. Le bureau entreprise l’examinera prochainement.",
    "The message could not be sent. Please check the fields or try again shortly.": "Le message n’a pas pu être envoyé. Vérifiez les champs ou réessayez bientôt.",
    "Describe your business, channels, current systems and growth target.": "Décrivez votre activité, vos canaux, vos systèmes actuels et votre objectif de croissance.",
    "View Demo": "Voir la démo",
    "Get Information": "Obtenir des informations",
    "Request Consultation": "Demander une consultation",
    "Deployment Model": "Modèle de déploiement",
    "ACTIVE": "ACTIF",
    "LIVE": "LIVE",
    "LEARNING": "APPRENTISSAGE",
    "synced": "synchronisé",
    "tracked": "suivi",
    "Amazon / eBay / Etsy / Shopify": "Amazon / eBay / Etsy / Shopify",
    "Google Ads / Meta / TikTok / Search": "Google Ads / Meta / TikTok / Search",
    "AI CRM / Email Routing / WhatsApp Desk": "CRM IA / routage email / bureau WhatsApp",
    "Software / Marketing / Commerce": "Logiciels / marketing / commerce",
    "SKU, feed, ads and conversion layer": "Couche SKU, flux, publicités et conversion",
    "CRM routing and follow-up systems": "Systèmes de routage CRM et de suivi",
    "Smartmetrics and GetSmarty visuals are staged as an active software ecosystem for IAMILKAY®.": "Les visuels Smartmetrics et GetSmarty sont présentés comme un écosystème logiciel actif pour IAMILKAY®.",
    "CRM, analytics and marketplace data translated into operating intelligence.": "Les données CRM, analytics et marketplace sont transformées en intelligence opérationnelle.",
    "Search volume, intent and conversion signals inform performance architecture.": "Le volume de recherche, l’intention et les signaux de conversion orientent l’architecture de performance.",
    "Amazon, Etsy and eBay demand signals guide digital commerce expansion.": "Les signaux de demande Amazon, Etsy et eBay guident l’expansion du commerce digital.",
    "Workflow automations connect media, CRM, software and reporting layers.": "Les automatisations relient les couches média, CRM, logiciels et reporting.",
    "Operational Visual": "Visuel opérationnel",
    "CRM and customer intelligence infrastructure.": "Infrastructure CRM et intelligence client.",
    "Dashboard-style operational interfaces support a credible enterprise story around leads, customer data and executive reporting.": "Des interfaces opérationnelles de type tableau de bord soutiennent une histoire d’entreprise crédible autour des leads, données clients et rapports exécutifs.",
    "Analytics tables": "Tables analytiques",
    "Data Layer": "Couche données",
    "GetSmarty system layer": "Couche système GetSmarty",
    "Commerce Software": "Logiciel commerce",
    "Software, performance intelligence and commerce operations are organized into a single institutional digital identity.": "Les logiciels, l’intelligence de performance et les opérations commerce sont organisés en une seule identité digitale institutionnelle.",
    "AI Systems": "Systèmes IA",
    "AI CRM and automation systems": "Systèmes CRM IA et automation",
    "Lead scoring, customer intelligence, automated follow-up and executive reporting layers.": "Couches de scoring des leads, intelligence client, suivi automatisé et reporting exécutif.",
    "Commerce": "Commerce",
    "Global commerce operations": "Opérations commerce mondiales",
    "Amazon, eBay, Etsy, Shopify and dropshipping workflows shaped around international growth.": "Flux Amazon, eBay, Etsy, Shopify et dropshipping structurés pour la croissance internationale.",
    "Media": "Média",
    "Google, Meta and TikTok advertising systems connected to analytics, CRM and conversion data.": "Systèmes publicitaires Google, Meta et TikTok connectés aux analytics, au CRM et aux données de conversion.",
    "For software, AI CRM, performance media, marketplace commerce or global digital operations.": "Pour les logiciels, le CRM IA, les médias de performance, le commerce marketplace ou les opérations digitales mondiales.",
    "Company No.": "N° d’entreprise",
    "Registered Address": "Adresse enregistrée",
    "WhatsApp / Telegram": "WhatsApp / Telegram",
    "Social": "Social",
    "Brand": "Marque",
    "Company data": "Données société",
    "Enterprise Contact": "Contact entreprise",
    "Start a serious digital infrastructure conversation.": "Démarrer une conversation sérieuse sur l’infrastructure digitale.",
    "For software, AI CRM, paid media, marketplace commerce, dropshipping systems or global digital operations, contact IAMILKAY® directly.": "Pour les logiciels, le CRM IA, les médias payants, le commerce marketplace, le dropshipping ou les opérations digitales mondiales, contactez directement IAMILKAY®.",
    "Communication": "Communication",
    "Enterprise inquiry desk.": "Bureau des demandes entreprise.",
    "Department-based contact structure with secure form handling and professional validation.": "Structure de contact par département avec traitement sécurisé des formulaires et validation professionnelle.",
    "Departments": "Départements",
    "Professional email structure.": "Structure email professionnelle.",
    "United Kingdom Corporate Position": "Position corporate Royaume-Uni",
    "A serious digital infrastructure company.": "Une entreprise sérieuse d’infrastructure digitale.",
    "IAMILKAY® operates from the United Kingdom with a global execution mindset across software, commerce, performance intelligence and AI-supported operations.": "IAMILKAY® opère depuis le Royaume-Uni avec une mentalité d’exécution mondiale dans les logiciels, le commerce, l’intelligence de performance et les opérations assistées par IA.",
    "Company Data": "Données société",
    "Registered identity with institutional clarity.": "Identité enregistrée avec clarté institutionnelle.",
    "The corporate presentation is structured for investors, enterprise clients, global partners and financial professionals.": "La présentation corporate est structurée pour les investisseurs, clients entreprise, partenaires mondiaux et professionnels financiers.",
    "Corporate registry": "Registre corporate",
    "IAMILKAY® is presented as a serious corporate digital infrastructure identity with clear company data, defined operating geography and transparent communication channels.": "IAMILKAY® est présentée comme une identité corporate sérieuse d’infrastructure digitale avec données claires, géographie opérationnelle définie et canaux de communication transparents.",
    "Company Number": "Numéro d’entreprise",
    "Jurisdiction": "Juridiction",
    "England and Wales": "Angleterre et Pays de Galles",
    "Core Domains": "Domaines clés",
    "AI Systems • Software Technologies • Mobile Applications • Global Commerce": "Systèmes IA • Technologies logicielles • Applications mobiles • Commerce mondial",
    "Trust Architecture": "Architecture de confiance",
    "Built to communicate scale, confidence and execution.": "Conçue pour communiquer échelle, confiance et exécution.",
    "Every business area is framed as infrastructure rather than agency service delivery.": "Chaque domaine est présenté comme une infrastructure plutôt qu’une prestation d’agence.",
    "UK Registered Entity": "Entité enregistrée au Royaume-Uni",
    "Company No. 17185529, registered in England and Wales.": "Société n° 17185529, enregistrée en Angleterre et au Pays de Galles.",
    "Institutional Presentation": "Présentation institutionnelle",
    "Clear operating domains, transparent communication and professional data structure.": "Domaines opérationnels clairs, communication transparente et structure de données professionnelle.",
    "Executive Reporting": "Reporting exécutif",
    "Growth, software and commerce systems designed for decision visibility.": "Systèmes de croissance, logiciels et commerce conçus pour la visibilité décisionnelle.",
    "Mobile Operations": "Opérations mobiles",
    "Premium mobile systems for CRM, commerce, field teams and customer engagement.": "Systèmes mobiles premium pour CRM, commerce, équipes terrain et engagement client.",
    "Global Operations": "Opérations mondiales",
    "Software Systems": "Systèmes logiciels",
    "Partnerships": "Partenariats",
    "Investor Relations": "Relations investisseurs",
    "Mobile Applications": "Applications mobiles",
    "Language": "Langue",
    "IAMILKAY® UK / GLOBAL INFRA": "IAMILKAY® UK / INFRA mondiale",
    "AI SEARCH / ENTERPRISE DEMAND": "Recherche IA / demande entreprise",
    "GOOGLE INTEL / SEARCH SIGNALS": "Intelligence Google / signaux recherche",
    "AMAZON GMV / MARKETPLACE SCALE": "Amazon GMV / échelle marketplace",
    "ETSY DATA / CREATOR COMMERCE": "Données Etsy / commerce créateurs",
    "EBAY VOLUME / CROSS-BORDER": "Volume eBay / transfrontalier",
    "GLOBAL SAAS / RECURRING SYSTEMS": "SaaS mondial / systèmes récurrents",
    "UK OPERATIONS / ACTIVE": "Opérations UK / ACTIF"
  },
  es: {
    "United Kingdom 🇬🇧 • Global Operations": "Reino Unido 🇬🇧 • Operaciones globales",
    "AI-powered infrastructure for digital commerce and global growth.": "Infraestructura impulsada por IA para comercio digital y crecimiento global.",
    "IAMILKAY® designs global digital infrastructure for modern enterprises: AI systems, software technologies, mobile applications, performance intelligence and commerce operations deployed with institutional discipline.": "IAMILKAY® diseña infraestructura digital global para empresas modernas: sistemas de IA, tecnologías de software, aplicaciones móviles, inteligencia de rendimiento y operaciones comerciales con disciplina institucional.",
    "Explore Software": "Explorar software",
    "View Operations": "Ver operaciones",
    "Years combined digital experience": "Años de experiencia digital combinada",
    "Campaign and project workflows": "Flujos de campañas y proyectos",
    "AI, software and commerce services": "Servicios de IA, software y comercio",
    "Registered company infrastructure": "Infraestructura de empresa registrada",
    "IAMILKAY® Operations Console": "Consola de operaciones IAMILKAY®",
    "United Kingdom infrastructure desk": "Mesa de infraestructura del Reino Unido",
    "Online": "En línea",
    "Marketplace Revenue Systems": "Sistemas de ingresos marketplace",
    "Performance Intelligence": "Inteligencia de rendimiento",
    "Customer Operations": "Operaciones de clientes",
    "Search demand": "Demanda de búsqueda",
    "Commerce feeds": "Feeds de comercio",
    "CRM events": "Eventos CRM",
    "Executive view": "Vista ejecutiva",
    "Executive operating intelligence.": "Inteligencia operativa ejecutiva.",
    "Inquiry pipeline": "Pipeline de consultas",
    "Marketplace control": "Control marketplace",
    "Automation readiness": "Preparación de automatización",
    "Connected products": "Productos conectados",
    "Commerce software, CRM intelligence and enterprise contact infrastructure operating as one control layer.": "Software de comercio, inteligencia CRM e infraestructura de contacto empresarial operando como una sola capa de control.",
    "London-based": "Con sede en Londres",
    "Secure mail routing": "Enrutamiento seguro de correo",
    "Production deployment": "Despliegue en producción",
    "Marketplace operations": "Operaciones marketplace",
    "Market Intelligence": "Inteligencia de mercado",
    "AI and search intelligence layer.": "Capa de inteligencia de IA y búsqueda.",
    "Market-inspired operating indicators for AI search, Google demand, marketplace commerce and automated data systems.": "Indicadores operativos inspirados en mercados para búsqueda IA, demanda de Google, comercio marketplace y sistemas de datos automatizados.",
    "Enterprise Data Processing": "Procesamiento de datos empresarial",
    "Google Search Intelligence": "Inteligencia de búsqueda Google",
    "Marketplace Intelligence": "Inteligencia marketplace",
    "Automated Systems": "Sistemas automatizados",
    "Operational Proof": "Prueba operativa",
    "Real interfaces, real product evidence.": "Interfaces reales, evidencia real de producto.",
    "Corporate Operating System": "Sistema operativo corporativo",
    "A serious enterprise stack for global growth.": "Una arquitectura empresarial seria para crecimiento global.",
    "Enterprise Desk": "Mesa empresarial",
    "Start a serious infrastructure conversation.": "Iniciar una conversación seria de infraestructura.",
    "Contact IAMILKAY®": "Contactar IAMILKAY®",
    "Contact": "Contacto",
    "Home": "Inicio",
    "About": "Acerca de",
    "Software": "Software",
    "Mobile": "Móvil",
    "Marketing": "Marketing",
    "Operations": "Operaciones",
    "Technologies": "Tecnologías",
    "Name": "Nombre",
    "Company": "Empresa",
    "Email": "Email",
    "Phone": "Teléfono",
    "Department Selection": "Selección de departamento",
    "Message": "Mensaje",
    "Send Enterprise Inquiry": "Enviar consulta empresarial",
    "Sending...": "Enviando...",
    "Your inquiry has been received. The enterprise desk will review it shortly.": "Tu consulta fue recibida. La mesa empresarial la revisará pronto.",
    "The message could not be sent. Please check the fields or try again shortly.": "El mensaje no se pudo enviar. Revisa los campos o inténtalo de nuevo pronto.",
    "Describe your business, channels, current systems and growth target.": "Describe tu negocio, canales, sistemas actuales y objetivo de crecimiento.",
    "View Demo": "Ver demo",
    "Get Information": "Solicitar información",
    "Request Consultation": "Solicitar consulta",
    "Deployment Model": "Modelo de despliegue",
    "ACTIVE": "ACTIVO",
    "LIVE": "EN VIVO",
    "LEARNING": "APRENDIENDO",
    "synced": "sincronizado",
    "tracked": "rastreado",
    "Amazon / eBay / Etsy / Shopify": "Amazon / eBay / Etsy / Shopify",
    "Google Ads / Meta / TikTok / Search": "Google Ads / Meta / TikTok / Search",
    "AI CRM / Email Routing / WhatsApp Desk": "CRM IA / email routing / mesa WhatsApp",
    "Software / Marketing / Commerce": "Software / marketing / comercio",
    "SKU, feed, ads and conversion layer": "Capa de SKU, feeds, anuncios y conversión",
    "CRM routing and follow-up systems": "Sistemas de routing CRM y seguimiento",
    "Smartmetrics and GetSmarty visuals are staged as an active software ecosystem for IAMILKAY®.": "Los visuales de Smartmetrics y GetSmarty se presentan como un ecosistema de software activo para IAMILKAY®.",
    "CRM, analytics and marketplace data translated into operating intelligence.": "Datos de CRM, analítica y marketplaces convertidos en inteligencia operativa.",
    "Search volume, intent and conversion signals inform performance architecture.": "Volumen de búsqueda, intención y señales de conversión informan la arquitectura de rendimiento.",
    "Amazon, Etsy and eBay demand signals guide digital commerce expansion.": "Señales de demanda de Amazon, Etsy y eBay guían la expansión del comercio digital.",
    "Workflow automations connect media, CRM, software and reporting layers.": "Automatizaciones conectan capas de medios, CRM, software y reporting.",
    "Operational Visual": "Visual operativo",
    "CRM and customer intelligence infrastructure.": "Infraestructura CRM e inteligencia de clientes.",
    "Dashboard-style operational interfaces support a credible enterprise story around leads, customer data and executive reporting.": "Interfaces operativas tipo dashboard respaldan una historia empresarial creíble sobre leads, datos de clientes y reporting ejecutivo.",
    "Analytics tables": "Tablas analíticas",
    "Data Layer": "Capa de datos",
    "GetSmarty system layer": "Capa de sistema GetSmarty",
    "Commerce Software": "Software de comercio",
    "Software, performance intelligence and commerce operations are organized into a single institutional digital identity.": "Software, inteligencia de rendimiento y operaciones comerciales se organizan en una sola identidad digital institucional.",
    "AI Systems": "Sistemas de IA",
    "AI CRM and automation systems": "Sistemas de CRM IA y automatización",
    "Lead scoring, customer intelligence, automated follow-up and executive reporting layers.": "Capas de scoring de leads, inteligencia de clientes, seguimiento automatizado y reporting ejecutivo.",
    "Commerce": "Comercio",
    "Global commerce operations": "Operaciones de comercio global",
    "Amazon, eBay, Etsy, Shopify and dropshipping workflows shaped around international growth.": "Flujos de Amazon, eBay, Etsy, Shopify y dropshipping diseñados para crecimiento internacional.",
    "Media": "Medios",
    "Google, Meta and TikTok advertising systems connected to analytics, CRM and conversion data.": "Sistemas publicitarios de Google, Meta y TikTok conectados a analítica, CRM y datos de conversión.",
    "For software, AI CRM, performance media, marketplace commerce or global digital operations.": "Para software, CRM IA, medios de rendimiento, comercio marketplace u operaciones digitales globales.",
    "Company No.": "N.º de empresa",
    "Registered Address": "Dirección registrada",
    "WhatsApp / Telegram": "WhatsApp / Telegram",
    "Social": "Social",
    "Brand": "Marca",
    "Company data": "Datos de empresa",
    "Enterprise Contact": "Contacto empresarial",
    "Start a serious digital infrastructure conversation.": "Iniciar una conversación seria sobre infraestructura digital.",
    "For software, AI CRM, paid media, marketplace commerce, dropshipping systems or global digital operations, contact IAMILKAY® directly.": "Para software, CRM IA, medios pagados, comercio marketplace, dropshipping u operaciones digitales globales, contacta directamente con IAMILKAY®.",
    "Communication": "Comunicación",
    "Enterprise inquiry desk.": "Mesa de consultas empresariales.",
    "Department-based contact structure with secure form handling and professional validation.": "Estructura de contacto por departamento con gestión segura de formularios y validación profesional.",
    "Departments": "Departamentos",
    "Professional email structure.": "Estructura profesional de email.",
    "United Kingdom Corporate Position": "Posición corporativa Reino Unido",
    "A serious digital infrastructure company.": "Una empresa seria de infraestructura digital.",
    "IAMILKAY® operates from the United Kingdom with a global execution mindset across software, commerce, performance intelligence and AI-supported operations.": "IAMILKAY® opera desde el Reino Unido con mentalidad de ejecución global en software, comercio, inteligencia de rendimiento y operaciones apoyadas por IA.",
    "Company Data": "Datos de empresa",
    "Registered identity with institutional clarity.": "Identidad registrada con claridad institucional.",
    "The corporate presentation is structured for investors, enterprise clients, global partners and financial professionals.": "La presentación corporativa está estructurada para inversores, clientes empresariales, socios globales y profesionales financieros.",
    "Corporate registry": "Registro corporativo",
    "IAMILKAY® is presented as a serious corporate digital infrastructure identity with clear company data, defined operating geography and transparent communication channels.": "IAMILKAY® se presenta como una identidad corporativa seria de infraestructura digital con datos claros, geografía operativa definida y canales transparentes.",
    "Company Number": "Número de empresa",
    "Jurisdiction": "Jurisdicción",
    "England and Wales": "Inglaterra y Gales",
    "Core Domains": "Dominios principales",
    "AI Systems • Software Technologies • Mobile Applications • Global Commerce": "Sistemas IA • Tecnologías de software • Aplicaciones móviles • Comercio global",
    "Trust Architecture": "Arquitectura de confianza",
    "Built to communicate scale, confidence and execution.": "Diseñada para comunicar escala, confianza y ejecución.",
    "Every business area is framed as infrastructure rather than agency service delivery.": "Cada área se presenta como infraestructura, no como servicio de agencia.",
    "UK Registered Entity": "Entidad registrada en Reino Unido",
    "Company No. 17185529, registered in England and Wales.": "Empresa n.º 17185529, registrada en Inglaterra y Gales.",
    "Institutional Presentation": "Presentación institucional",
    "Clear operating domains, transparent communication and professional data structure.": "Dominios operativos claros, comunicación transparente y estructura profesional de datos.",
    "Executive Reporting": "Reporting ejecutivo",
    "Growth, software and commerce systems designed for decision visibility.": "Sistemas de crecimiento, software y comercio diseñados para visibilidad de decisión.",
    "Mobile Operations": "Operaciones móviles",
    "Premium mobile systems for CRM, commerce, field teams and customer engagement.": "Sistemas móviles premium para CRM, comercio, equipos de campo y engagement de clientes.",
    "Global Operations": "Operaciones globales",
    "Software Systems": "Sistemas de software",
    "Partnerships": "Alianzas",
    "Investor Relations": "Relaciones con inversores",
    "Mobile Applications": "Aplicaciones móviles",
    "Language": "Idioma",
    "IAMILKAY® UK / GLOBAL INFRA": "IAMILKAY® UK / infra global",
    "AI SEARCH / ENTERPRISE DEMAND": "Búsqueda IA / demanda empresarial",
    "GOOGLE INTEL / SEARCH SIGNALS": "Inteligencia Google / señales de búsqueda",
    "AMAZON GMV / MARKETPLACE SCALE": "Amazon GMV / escala marketplace",
    "ETSY DATA / CREATOR COMMERCE": "Datos Etsy / comercio de creadores",
    "EBAY VOLUME / CROSS-BORDER": "Volumen eBay / transfronterizo",
    "GLOBAL SAAS / RECURRING SYSTEMS": "SaaS global / sistemas recurrentes",
    "UK OPERATIONS / ACTIVE": "Operaciones UK / ACTIVO"
  }
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
}>({
  language: "en",
  setLanguage: () => undefined,
  t: (text) => text
});

const originalText = new WeakMap<Text, string>();

function translateDocument(language: Language) {
  const map = language === "en" ? null : dictionary[language];
  document.documentElement.lang = language === "ar" ? "ar" : language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let current = walker.nextNode();

  while (current) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }

  for (const node of nodes) {
    const parent = node.parentElement;
    if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) continue;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue || "");

    const source = originalText.get(node) || "";
    const trimmed = source.trim();
    if (!trimmed) continue;

    const translated = map?.[trimmed] || trimmed;
    const nextValue = source.replace(trimmed, translated);
    if (node.nodeValue !== nextValue) node.nodeValue = nextValue;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("iamilkay-language") as Language | null;
    if (saved && saved in languageLabels) setLanguageState(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("iamilkay-language", language);
    const timers = [40, 240, 800].map((time) => window.setTimeout(() => translateDocument(language), time));
    let observerTimer: number | null = null;
    const observer = new MutationObserver(() => {
      if (observerTimer) window.clearTimeout(observerTimer);
      observerTimer = window.setTimeout(() => translateDocument(language), 80);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      timers.forEach(window.clearTimeout);
      if (observerTimer) window.clearTimeout(observerTimer);
      observer.disconnect();
    };
  }, [language, pathname]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (next: Language) => setLanguageState(next),
      t: (text: string) => (language === "en" ? text : dictionary[language][text] || text)
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function LanguageSelect({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <select
      aria-label="Language"
      value={language}
      onChange={(event) => setLanguage(event.target.value as Language)}
      className={`bg-transparent font-black text-white outline-none ${compact ? "text-sm" : "text-xs"}`}
    >
      {(Object.keys(languageLabels) as Language[]).map((key) => (
        <option key={key} value={key} className="bg-ink text-white">
          {languageLabels[key]}
        </option>
      ))}
    </select>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
