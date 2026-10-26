/**
 * All public copy and links live in this file.
 * Edit text here, and replace every placeholder URL with a full link.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  body: string;
};

export type Trainer = {
  name: string;
  image: string;
  imageAlt: string;
  credentials: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Partner = {
  name: string;
  href: string;
  image: string;
  imageAlt: string;
  offer?: {
    text: string;
    code: string;
  };
};

export type SocialLink = {
  id: "instagram" | "telegram" | "email" | "maps";
  label: string;
  href: string;
};

const links = {
  tally: "https://tally.so/r/TALLY_URL",
  maps: "https://maps.google.com/?q=MAPS_URL",
  whatsapp: "https://wa.me/WHATSAPP_URL",
  instagram: "https://instagram.com/INSTAGRAM_URL",
  telegram: "https://t.me/TELEGRAM_URL",
  email: "mailto:EMAIL_URL",
  lftoff: "https://LFTOFF_URL",
  lts: "https://LTS_URL",
} as const;

export const site = {
  name: "Zone Fitness Collective",
  shortName: "ZFC",
  url: "https://zonefitnesscollective.com",
  links,
  assets: {
    logo: "/assets/logo.png",
    heroVideo: "/assets/hero-video.mp4",
    heroPoster: "/assets/hero-poster.jpg",
    og: "/og.png",
  },
  seo: {
    title: "Zone Fitness Collective | Premium Personal Training in Singapore",
    description:
      "Private personal training in Singapore. Strength, rehabilitation, and nutrition coaching from Zone Fitness Collective.",
  },
  ui: {
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    previousTestimonial: "Previous testimonial",
    nextTestimonial: "Next testimonial",
    showTestimonial: "Show testimonial",
    testimonialsLabel: "Client testimonials",
    whatsappLabel: "Chat on WhatsApp",
    copyCode: "Copy code",
    copied: "Copied!",
  },
  hero: {
    id: "hero",
    title: "Zone Fitness Collective",
    subtitle: "Strength. Precision. Transformation.",
    cta: { label: "Enter", href: "#about" },
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Trainers", href: "#trainers" },
    { label: "Enquire", href: "#enquire" },
  ] satisfies NavLink[],
  about: {
    id: "about",
    title: "About Us",
    paragraphs: [
      "At Zone Fitness Collective, we don't sell workouts. We deliver transformation.",
      "Our method blends precision strength training, targeted rehabilitation, and practical nutrition to create results that last.",
      "Every session is private. Every plan is tailored. Every result is measurable.",
    ],
    cta: { label: "Explore Services", href: "#services" },
  },
  services: {
    id: "services",
    title: "Services",
    items: [
      {
        title: "Strength & Conditioning",
        body: "Tailored training that builds durable strength and measurable performance",
      },
      {
        title: "Rehabilitation & Prehabilitation",
        body: "Corrective exercise and recovery coaching to fix pain and prevent setbacks",
      },
      {
        title: "Nutrition & Recomposition",
        body: "Coaching for fat loss, muscle gain and lifestyle balance",
      },
    ] satisfies Service[],
  },
  trainers: {
    id: "trainers",
    title: "Trainers",
    items: [
      {
        name: "Andy Toh",
        image: "/assets/trainer-andy.png",
        imageAlt: "Andy Toh",
        credentials: [
          "SEA Games & SG National Champion",
          "WBPF SG National Coach",
          "ABBF Judge",
        ],
      },
      {
        name: "Christophe Ang",
        image: "/assets/trainer-christophe.png",
        imageAlt: "Christophe Ang",
        credentials: [
          "Powerlifting SG National Champion",
          "Powerlifting SG National Coach",
          "WNBF BB FT-Classic Champion",
        ],
      },
      {
        name: "Rexmond Lim",
        image: "/assets/trainer-rexmond.png",
        imageAlt: "Rexmond Lim",
        credentials: [
          "Platform-Coached National Champions",
          "Certified PT & PL Coach",
          "Focuses on Strength & Rehab",
        ],
      },
    ] satisfies Trainer[],
  },
  testimonials: {
    id: "testimonials",
    title: "Testimonials",
    items: [
      {
        quote:
          "From constant back tightness to pain-free deadlifts. Technique coaching changed everything.",
        name: "Tan S.R.",
        role: "Consultant",
      },
    ] satisfies Testimonial[],
  },
  enquire: {
    id: "enquire",
    title: "Enquire",
    primary: { label: "Enquire Now", href: links.tally },
    secondary: { label: "Locate Us", href: links.maps },
  },
  partners: {
    id: "partners",
    title: "Partners",
    items: [
      {
        name: "LFTOFF Athletics",
        href: links.lftoff,
        image: "/assets/partner-lftoff.png",
        imageAlt: "LFTOFF Athletics",
        offer: {
          text: "ZFC10 for 10% off",
          code: "ZFC10",
        },
      },
      {
        name: "LTS",
        href: links.lts,
        image: "/assets/partner-lts.png",
        imageAlt: "LTS",
      },
    ] satisfies Partner[],
  },
  social: [
    { id: "instagram", label: "Instagram", href: links.instagram },
    { id: "telegram", label: "Telegram", href: links.telegram },
    { id: "email", label: "Email", href: links.email },
    { id: "maps", label: "Google Maps", href: links.maps },
  ] satisfies SocialLink[],
  footer: {
    rights: "All Rights Reserved.",
  },
} as const;
