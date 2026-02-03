import {
  IconBeach,
  IconCalendar,
  IconHome,
  IconMapPin,
  IconUsers,
} from "@tabler/icons-react";

// /translations/en/home.js
export const HOME_TRANSLATIONS_EN = {
  hero: {
    slides: [
      {
        title: "Finest holiday villa rental collection",
        image: "/assets/37.webp",
        alt: "Luxury villa with ocean view",
        cta: "FIND YOUR VILLA",
      },
      {
        title: "Experience luxury living by the sea",
        image: "/assets/20.webp",
        alt: "Modern villa interior",
        cta: "FIND YOUR VILLA",
      },
      {
        title: "Your perfect getaway awaits",
        image: "/assets/29.webp",
        alt: "Villa with pool at sunset",
        cta: "FIND YOUR VILLA",
      },
    ],
  },

  
 introduction: {
      "title": "Introduction",
      "paragraphs": [
        "We have lived here on and off since 2021, and we never tire of the serenity and peace. Living with the tides in a small fishing village off the coast of Africa is profoundly humbling. Within the first days, you forget what day of the week it is, time loses meaning, and very little matters more than being fully in the moment – the wind rustling through the palm trees, the waves gently crashing on the white sand…",
        "Our house reflects our diverse background – German, Swiss, Croatian, and Zanzibari – woven into its architecture, design, and spirit. Every corner has been crafted with care to create a feel-good experience for our guests.",
        "Whether you have questions, want advice on excursions, massages, or yoga sessions, we are always here to make your stay as relaxed, personal, and unforgettable as possible.",
        {
          "beforeLink": "For more insights into our daily life, feel free to follow us on ",
          "linkText": "Instagram",
          "linkUrl": "https://www.instagram.com/windsofzanzibar/",
          "afterLink": " or contact us directly."
        }
      ]
    },

  // ------------------------------

  highlights: {
    header: "Our House by the Sea",
    subtitle:
      "A quiet home by the sea, shaped for comfort, privacy, and unhurried days.",
    items: [
      {
        title: "Steps from the Sea",
        description:
          "The sea is always close. You hear the waves in the morning and reach the beach in just a few steps.",
        img: "/assets/32.webp",
        subtitle: "ARCHITECTURE",
      },
      {
        title: "Quiet & Private",
        description:
          "Set in a small, quiet neighborhood where days are slow and privacy comes naturally.",
        img: "/assets/16.webp",
        subtitle: "CRAFTSMANSHIP",
      },
      {
        title: "Comfortable Living",
        description:
          "Light-filled rooms, high ceilings, and simple spaces designed to feel easy and lived-in.",
        img: "/assets/20.webp",
        subtitle: "LOCATION",
      },
    ],
  },

  whyChooseUs: {
    header: "Why this house",
    description:
      "A quiet beachfront home where life follows the tides, the light, and the rhythm of the island.",
    highlights: [
      {
        title: "Right on the beach",
        icon: <IconBeach size={40} />,
        description:
          "Step straight from the house onto the sand and watch the tides shape the shoreline throughout the day.",
      },
      {
        title: "Peaceful village life",
        icon: <IconMapPin size={40} />,
        description:
          "Located in Pwani Mchangani, a small fishing village on Zanzibar’s east coast, far from busy resorts.",
      },
      {
        title: "Spacious & airy rooms",
        icon: <IconHome size={40} />,
        description:
          "High ceilings, king-size beds, and natural airflow create a calm and comfortable living space.",
      },
      {
        title: "Entire house, just for you",
        icon: <IconUsers size={40} />,
        description:
          "You book the whole house, ensuring privacy, space, and a relaxed stay without shared areas.",
      },
      {
        title: "Personal hosting",
        icon: <IconCalendar size={40} />,
        description:
          "Direct contact with the hosts and local support for excursions, massages, yoga, or a private cook.",
      },
    ],
  },

  testimonials: {
    header: "Guest experiences",
    description:
      "Thoughts from guests who stayed, slowed down, and made the house part of their Zanzibar story.",
  },

  faq: {
    header: "Frequently Asked Questions",
    description:
      "Practical details to help you plan a relaxed and uncomplicated stay at the house.",
    callToAction: {
      title: "Still have questions?",
      text: "If something isn’t clear or you have a specific request, feel free to reach out directly.",
      button: "Get in touch",
    },
    items: [
      {
        q: "Is the house rented privately or shared with others?",
        a: "The house is rented exclusively. You will have the entire property to yourself, with complete privacy and no shared spaces.",
      },
      {
        q: "How far is the house from the beach?",
        a: "The house is located directly on the beach. You can step straight from the property onto the sand and reach the sea within seconds.",
      },
      {
        q: "What is the area like?",
        a: "The house is located in Pwani Mchangani, a small fishing village on Zanzibar’s east coast. It is quiet, local, and far from large resorts or nightlife.",
      },
      {
        q: "Is the house suitable for longer stays?",
        a: "Yes. The house is well suited for longer stays, offering spacious rooms, natural airflow, and a calm environment ideal for slowing down.",
      },
      {
        q: "Can additional services be arranged?",
        a: "Yes. Upon request, local services such as a private cook, massages, yoga sessions, or excursions can be arranged in a simple and informal way.",
      },
    ],
  },

  callToAction: {
    badge: "Now Taking Reservations for 2025",
    header: "Ready for a peaceful stay by the sea?",
    description:
      "Book your getaway and enjoy calm surroundings, comfortable rooms, and easy access to the beach. Simple booking, no hassle.",
    primaryButton: "Book Your Stay",
    secondaryButton: "View Rooms",
  },
};