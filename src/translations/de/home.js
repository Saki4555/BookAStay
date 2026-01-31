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
        image: "/assets/19.webp",
        alt: "Luxusvilla mit Meerblick",
        cta: "VILLA FINDEN",
      },
      {
        title: "Erleben Sie luxuriöses Leben am Meer",
        image: "/assets/20.webp",
        alt: "Modernes Villeninterieur",
        cta: "VILLA FINDEN",
      },
      {
        title: "Ihr perfekter Urlaub wartet",
        image: "/assets/29.webp",
        alt: "Villa mit Pool bei Sonnenuntergang",
        cta: "VILLA FINDEN",
      },
    ],
  },

 
introduction: {
  title: "Einführung",
  paragraphs: [
    "Wir leben seit 2021 abwechselnd hier und können uns immer noch nicht an der Ruhe und Gelassenheit sattsehen.",
    "Mit den Gezeiten in einem kleinen Fischerdorf an der Küste Afrikas zu leben, ist etwas zutiefst Demütigendes und Schönes.",
    "Schon in den ersten Tagen vergisst man, welcher Wochentag ist, Zeit verliert an Bedeutung, und das Einzige, was zählt, ist der Moment – der Wind, der durch die Palmen streicht, das sanfte Rauschen der Wellen auf dem weißen Sand…",
    "Unser Haus spiegelt unseren vielfältigen Hintergrund wider: Deutsch, Schweizerisch, Kroatisch und Zanzibari fließen in Architektur, Einrichtung und Mentalität ein. Jeder Winkel wurde mit Aufmerksamkeit gestaltet, um ein Wohlfühlerlebnis für unsere Gäste zu schaffen.",
    "Egal ob Fragen, Tipps für Ausflüge, Massagen oder Yoga-Sessions – wir sind jederzeit für euch da, um euren Aufenthalt so entspannt, persönlich und unvergesslich wie möglich zu gestalten.",
    {
      beforeLink: "Für weitere Einblicke in unseren Alltag folgt uns gerne auf ",
      linkText: "Instagram",
      linkUrl: "https://www.instagram.com/windsofzanzibar/",
      afterLink: " oder schreibt uns direkt an.",
    },
  ],
},

  // ------------------------------

  highlights: {
    header: "Unser Haus am Meer",
    subtitle:
      "Ein ruhiges Zuhause am Meer – gestaltet für Komfort, Privatsphäre und entschleunigte Tage.",
    items: [
      {
        title: "Nur Schritte vom Meer entfernt",
        description:
          "Das Meer ist immer nah. Morgens hört man die Wellen und erreicht den Strand in nur wenigen Schritten.",
        img: "/assets/32.webp",
        subtitle: "ARCHITEKTUR",
      },
      {
        title: "Ruhig & Privat",
        description:
          "Gelegen in einer kleinen, ruhigen Nachbarschaft, in der die Tage langsam vergehen und Privatsphäre selbstverständlich ist.",
        img: "/assets/16.webp",
        subtitle: "HANDWERK",
      },
      {
        title: "Komfortables Wohnen",
        description:
          "Lichtdurchflutete Räume, hohe Decken und schlichte Bereiche, die sich leicht und wohnlich anfühlen.",
        img: "/assets/20.webp",
        subtitle: "LAGE",
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
      text: "Falls etwas unklar ist oder Sie einen besonderen Wunsch haben, melden Sie sich gerne direkt bei uns.",
      button: "Kontakt aufnehmen",
    },
    items: [
      {
        q: "Ist das Haus privat oder wird es mit anderen Gästen geteilt?",
        a: "Das Haus wird ausschließlich privat vermietet. Sie haben das gesamte Haus für sich, ohne Gemeinschaftsbereiche.",
      },
      {
        q: "Wie weit ist der Strand entfernt?",
        a: "Das Haus liegt direkt am Strand. Vom Haus aus gelangen Sie in wenigen Sekunden auf den Sand und ins Meer.",
      },
      {
        q: "Wie ist die Umgebung?",
        a: "Das Haus befindet sich in Pwani Mchangani, einem kleinen Fischerdorf an der Ostküste Sansibars. Die Umgebung ist ruhig, lokal und fernab großer Resorts.",
      },
      {
        q: "Eignet sich das Haus für längere Aufenthalte?",
        a: "Ja. Die großzügigen Räume, die natürliche Luftzirkulation und die ruhige Atmosphäre machen das Haus ideal für längere Aufenthalte.",
      },
      {
        q: "Können zusätzliche Services organisiert werden?",
        a: "Ja. Auf Wunsch können lokale Services wie ein privater Koch, Massagen, Yoga oder Ausflüge unkompliziert organisiert werden.",
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