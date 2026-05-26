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
    "Your inquiry has been received. The enterprise desk will review it shortly.": "تم استلام طلبك. سيراجعه مكتب المؤسسات قريبا."
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
    "Your inquiry has been received. The enterprise desk will review it shortly.": "Votre demande a été reçue. Le bureau entreprise l’examinera prochainement."
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
    "Your inquiry has been received. The enterprise desk will review it shortly.": "Tu consulta fue recibida. La mesa empresarial la revisará pronto."
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
    node.nodeValue = source.replace(trimmed, translated);
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
    return () => timers.forEach(window.clearTimeout);
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
