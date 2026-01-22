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
         image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80",
        alt: "Luxury villa with ocean view",
        cta: "FIND YOUR VILLA",
      },
      {
        title: "Experience luxury living by the sea",
         image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80",
        alt: "Modern villa interior",
        cta: "FIND YOUR VILLA",
      },
      {
        title: "Your perfect getaway awaits",
         image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
        alt: "Villa with pool at sunset",
        cta: "FIND YOUR VILLA",
      },
    ],
  },
 highlights: {
  header: "About the House",
  subtitle: "A peaceful seaside home designed for comfort, privacy, and slow living.",
  items: [
    {
      title: "Steps from the Sea",
      subtitle: "LOCATION",
      description:
        "Wake up to the sound of the ocean. The house is just a short walk from the beach.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    },
    {
      title: "Quiet & Private",
      subtitle: "ATMOSPHERE",
      description:
        "Set in a calm neighborhood, perfect for families, couples, and long stays.",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    },
    {
      title: "Comfortable Living",
      subtitle: "INTERIOR",
      description:
        "Clean, airy rooms with natural light and everything you need to feel at home.",
      img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1200&q=80",
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
    text:
      "If something isn’t clear or you have a specific request, feel free to reach out directly.",
    button: "Get in touch",
  },
  items: [
    {
      q: "Is the house rented privately or shared with others?",
      a:
        "The house is rented exclusively. You will have the entire property to yourself, with complete privacy and no shared spaces.",
    },
    {
      q: "How far is the house from the beach?",
      a:
        "The house is located directly on the beach. You can step straight from the property onto the sand and reach the sea within seconds.",
    },
    {
      q: "What is the area like?",
      a:
        "The house is located in Pwani Mchangani, a small fishing village on Zanzibar’s east coast. It is quiet, local, and far from large resorts or nightlife.",
    },
    {
      q: "Is the house suitable for longer stays?",
      a:
        "Yes. The house is well suited for longer stays, offering spacious rooms, natural airflow, and a calm environment ideal for slowing down.",
    },
    {
      q: "Can additional services be arranged?",
      a:
        "Yes. Upon request, local services such as a private cook, massages, yoga sessions, or excursions can be arranged in a simple and informal way.",
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
