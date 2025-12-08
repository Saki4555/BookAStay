import {
  IconBeach,
  IconCalendar,
  IconHome,
  IconMapPin,
  IconUsers,
} from "@tabler/icons-react";

// /translations/de/home.js
export const HOME_TRANSLATIONS_DE = {
  hero: {
    slides: [
      {
        title: "Exklusive Ferienvilla-Vermietung",
         image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80",
        alt: "Luxusvilla mit Meerblick",
        cta: "VILLA FINDEN",
      },
      {
        title: "Erleben Sie luxuriöses Leben am Meer",
        image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80",
        alt: "Modernes Villeninterieur",
        cta: "VILLA FINDEN",
      },
      {
        title: "Ihr perfekter Urlaub wartet",
         image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
        alt: "Villa mit Pool bei Sonnenuntergang",
        cta: "VILLA FINDEN",
      },
    ],
  },
  collections: {
    header: "Kuratierten Kollektionen",
    subtitle: "Entdecken Sie unser exklusives Portfolio handverlesener Immobilien für anspruchsvolle Kunden.",
    items: [
      {
        title: "Wasserfront-Anwesen",
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
        subtitle: "Leben am Meer",
        button: "Details anfragen",
      },
      {
        title: "Städtische Penthouses",
        img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80",
        subtitle: "Innenstadt",
        button: "Details anfragen",
      },
      {
        title: "Moderne Rückzugsorte",
         img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80",
        subtitle: "Architektur",
        button: "Details anfragen",
      },
      {
        title: "Historische Herrenhäuser",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
        subtitle: "Klassisches Design",
        button: "Details anfragen",
      },
    ],
  },
  whyChooseUs: {
    header: "Warum bei uns bleiben",
    description: "Entdecken Sie, was unser Ferienrefugium am Meer wirklich außergewöhnlich macht",
    highlights: [
      { title: "Am Meer", icon: <IconBeach size={40} />, description: "Erstklassige Lage direkt am Strand mit atemberaubendem Meerblick und einfachem Zugang zum Strand." },
      { title: "Ruhige Lage",icon: <IconMapPin size={40} />, description: "Ruhige Umgebung abseits der Menschenmassen, perfekt zur Entspannung." },
      { title: "Saubere & komfortable Zimmer",icon: <IconHome size={40} />, description: "Gut gepflegte Räume für Komfort und Bequemlichkeit." },
      { title: "Familienfreundlich",icon: <IconUsers size={40} />, description: "Sichere und einladende Umgebung für Gäste jeden Alters." },
      { title: "Einfache Buchung", icon: <IconCalendar size={40} />, description: "Einfacher Reservierungsprozess mit flexiblen Optionen und sofortiger Bestätigung." },
    ],
  },
  testimonials: {
    header: "Was unsere Kunden sagen",
    description: "Professioneller Service und persönliche Betreuung, die Fünf-Sterne-Erlebnisse für Gäste und Eigentümer liefert.",
  },
  faq: {
    header: "Häufig gestellte Fragen",
    description: "Alles, was Sie über unsere Premium-Management-Services und den Buchungsprozess wissen müssen.",
    callToAction: {
      title: "Noch Fragen?",
      text: "Sie finden nicht, wonach Sie suchen? Chatten Sie mit unserem freundlichen Team.",
      button: "Kontakt aufnehmen",
    },
    items: [
      {
        q: "Wie weit im Voraus sollte ich eine Ferienwohnung buchen?",
        a: "Wir empfehlen, mindestens 2-3 Monate im Voraus zu buchen. Für Nebensaison-Termine kann auch kurzfristig gebucht werden.",
      },
      {
        q: "Übernehmen Sie Check-in und Concierge-Service?",
        a: "Ja — wir bieten umfassende Gästeservices einschließlich Check-in, Schlüsselübergabe, Concierge für lokale Erlebnisse und 24/7 Unterstützung.",
      },
      {
        q: "Können Sie mehrere Immobilien für mich verwalten?",
        a: "Absolut — wir übernehmen die Portfoliomanagement und können Services über mehrere Immobilien skalieren, während ein konsistentes Gästeerlebnis gewährleistet bleibt.",
      },
      {
        q: "Wie sieht Ihr Preismodell für Immobilienverwaltung aus?",
        a: "Wir bieten individuelle Preise basierend auf Größe, Lage und Servicelevel. Kontaktieren Sie uns für ein maßgeschneidertes Angebot.",
      },
      {
        q: "Bieten Sie Marketing- und Fotografie-Services an?",
        a: "Ja — professionelle Fotografie, optimierte Inserate und Marketing über wichtige Kanäle gehören zu unserem Servicepaket.",
      },
    ],
  },
  callToAction: {
    badge: "Neue Immobilien für 2025 willkommen",
    header: "Bereit, Ihr Investment-Portfolio zu steigern?",
    description: "Schließen Sie sich Eigentümern an, die 30% mehr Umsatz mit unserer Boutique-Management-Strategie erzielen. Kein Stress, nur Ergebnisse.",
    primaryButton: "Kostenloses Angebot anfordern",
    secondaryButton: "Services entdecken",
  },
};
