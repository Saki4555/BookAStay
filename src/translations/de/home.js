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
  highlights: {
  header: "Über das Haus",
  subtitle: "Ein ruhiges Haus am Meer – ideal für Erholung, Privatsphäre und Komfort.",
  items: [
    {
      title: "Nur wenige Schritte zum Meer",
      subtitle: "LAGE",
      description:
        "Genießen Sie das Meer ganz in der Nähe – der Strand ist nur einen kurzen Spaziergang entfernt.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    },
    {
      title: "Ruhig & Privat",
      subtitle: "ATMOSPHÄRE",
      description:
        "Eine entspannte Umgebung, perfekt für Familien, Paare und längere Aufenthalte.",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    },
    {
      title: "Komfortables Wohnen",
      subtitle: "INNENBEREICH",
      description:
        "Helle, saubere Räume mit allem, was man für einen angenehmen Aufenthalt braucht.",
      img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1200&q=80",
    },
  ],
},

 whyChooseUs: {
  header: "Warum dieses Haus",
  description:
    "Ein ruhiges Strandhaus, in dem sich alles nach den Gezeiten, dem Licht und dem Rhythmus der Insel richtet.",
  highlights: [
    {
      title: "Direkt am Strand",
      icon: <IconBeach size={40} />,
      description:
        "Vom Haus aus direkt in den Sand treten und beobachten, wie die Gezeiten den Strand im Tagesverlauf verändern.",
    },
    {
      title: "Ruhiges Dorfleben",
      icon: <IconMapPin size={40} />,
      description:
        "Gelegen in Pwani Mchangani, einem kleinen Fischerdorf an der Ostküste Sansibars, fernab großer Resorts.",
    },
    {
      title: "Großzügige, luftige Räume",
      icon: <IconHome size={40} />,
      description:
        "Hohe Decken, Kingsize-Betten und natürliche Luftzirkulation sorgen für Ruhe und Komfort.",
    },
    {
      title: "Ganzes Haus für Sie allein",
      icon: <IconUsers size={40} />,
      description:
        "Sie mieten das komplette Haus – für Privatsphäre, Platz und ein entspanntes Wohnen ohne Gemeinschaftsbereiche.",
    },
    {
      title: "Persönliche Gastgeber",
      icon: <IconCalendar size={40} />,
      description:
        "Direkter Kontakt zu den Gastgebern sowie lokale Unterstützung bei Ausflügen, Massagen, Yoga oder privatem Koch.",
    },
  ],
},

  testimonials: {
  header: "Erfahrungen unserer Gäste",
  description:
    "Eindrücke von Menschen, die hier gewohnt haben, zur Ruhe kamen und Sansibar auf ihre Weise erlebt haben.",
},

faq: {
  header: "Häufig gestellte Fragen",
  description:
    "Praktische Informationen für einen entspannten und unkomplizierten Aufenthalt im Haus.",
  callToAction: {
    title: "Noch Fragen?",
    text:
      "Falls etwas unklar ist oder Sie einen besonderen Wunsch haben, melden Sie sich gerne direkt bei uns.",
    button: "Kontakt aufnehmen",
  },
  items: [
    {
      q: "Ist das Haus privat oder wird es mit anderen Gästen geteilt?",
      a:
        "Das Haus wird ausschließlich privat vermietet. Sie haben das gesamte Haus für sich, ohne Gemeinschaftsbereiche.",
    },
    {
      q: "Wie weit ist der Strand entfernt?",
      a:
        "Das Haus liegt direkt am Strand. Vom Haus aus gelangen Sie in wenigen Sekunden auf den Sand und ins Meer.",
    },
    {
      q: "Wie ist die Umgebung?",
      a:
        "Das Haus befindet sich in Pwani Mchangani, einem kleinen Fischerdorf an der Ostküste Sansibars. Die Umgebung ist ruhig, lokal und fernab großer Resorts.",
    },
    {
      q: "Eignet sich das Haus für längere Aufenthalte?",
      a:
        "Ja. Die großzügigen Räume, die natürliche Luftzirkulation und die ruhige Atmosphäre machen das Haus ideal für längere Aufenthalte.",
    },
    {
      q: "Können zusätzliche Services organisiert werden?",
      a:
        "Ja. Auf Wunsch können lokale Services wie ein privater Koch, Massagen, Yoga oder Ausflüge unkompliziert organisiert werden.",
    },
  ],
},

  callToAction: {
  badge: "Jetzt Buchungen für 2025",
  header: "Bereit für eine erholsame Auszeit am Meer?",
  description:
    "Reservieren Sie Ihren Aufenthalt und genießen Sie ruhige Umgebung, komfortable Zimmer und direkten Strandzugang. Einfach buchen, entspannt ankommen.",
  primaryButton: "Jetzt buchen",
  secondaryButton: "Zimmer ansehen",
},

};
