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
  collections: {
    header: "Curated Collections",
    subtitle: "Explore our exclusive portfolio of hand-picked properties, designed for the discerning client.",
    items: [
      {
        title: "Waterfront Estates",
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
        subtitle: "COASTAL LIVING",
        button: "Contact for Details",
      },
      {
        title: "Urban Penthouses",
         img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80",
        subtitle: "CITY CENTER",
        button: "Contact for Details",
      },
      {
        title: "Modern Retreats",
         img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80",
        subtitle: "ARCHITECTURE",
        button: "Contact for Details",
      },
      {
        title: "Historic Manors",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
        subtitle: "CLASSIC DESIGN",
        button: "Contact for Details",
      },
    ],
  },
  whyChooseUs: {
    header: "Why stay with us",
    description: "Discover what makes our seaside retreat truly exceptional",
    highlights: [
      { title: "Near the Sea", icon: <IconBeach size={40} />, description: "Prime beachfront location with stunning ocean views and easy beach access." },
      { title: "Peaceful Location",icon: <IconMapPin size={40} />, description: "Tranquil setting away from the crowds, perfect for relaxation." },
      { title: "Clean & Comfortable Rooms",icon: <IconHome size={40} />, description: "Well-maintained spaces designed for your comfort and convenience." },
      { title: "Family Friendly",icon: <IconUsers size={40} />, description: "Safe and welcoming environment suitable for guests of all ages." },
      { title: "Easy Booking", icon: <IconCalendar size={40} />, description: "Simple reservation process with flexible options and instant confirmation." },
    ],
  },
  testimonials: {
    header: "What Our Clients Are Saying",
    description: "Professional service and personalized attention, delivering five-star experiences for guests and owners alike.",
  },
  faq: {
    header: "Frequently Asked Questions",
    description: "Everything you need to know about our premium management services and booking process.",
    callToAction: {
      title: "Still have questions?",
      text: "Can't find the answer you're looking for? Please chat to our friendly team.",
      button: "Get in touch",
    },
    items: [
      {
        q: "How far in advance should I book a vacation rental?",
        a: "We recommend booking at least 2-3 months in advance for popular destinations. However, for off-peak dates, shorter notice can be accommodated.",
      },
      {
        q: "Do you handle guest check-in and concierge services?",
        a: "Yes — we offer full guest services including check-in, key exchange, concierge for local experiences, and 24/7 support.",
      },
      {
        q: "Can you manage multiple properties for me?",
        a: "Absolutely — we handle portfolio management and can scale services across multiple properties while ensuring consistent guest experience.",
      },
      {
        q: "What is your pricing model for property management?",
        a: "We offer custom pricing based on property size, location, and the level of service. Contact us for a tailored proposal.",
      },
      {
        q: "Do you offer marketing and photography services?",
        a: "Yes — professional photography, optimized listing creation, and marketing across major channels are part of our service suite.",
      },
    ],
  },
  callToAction: {
    badge: "Accepting New Properties for 2025",
    header: "Ready to elevate your investment portfolio?",
    description: "Join the homeowners who earn 30% more revenue with our boutique management strategy. No stress, just results.",
    primaryButton: "Get a Free Proposal",
    secondaryButton: "Explore Services",
  },
};
