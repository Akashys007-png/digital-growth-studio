import {
  UtensilsCrossed,
  Stethoscope,
  Dumbbell,
  Scale,
  Building2,
  Hammer,
  type LucideIcon,
} from "lucide-react";

export interface IndustryChallenge {
  title: string;
  description: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryProject {
  title: string;
  description: string;
  href: string;
}

export interface Industry {
  slug: string;
  name: string;
  badge: string;
  headline: string;
  highlight: string;
  description: string;
  icon: LucideIcon;
  challenges: IndustryChallenge[];
  solutions: IndustrySolution[];
  project: IndustryProject;
  faqs: IndustryFAQ[];
  ctaTitle: string;
  ctaDescription: string;
}

export const industries: Industry[] = [
  {
    slug: "restaurants",
    name: "Restaurants",
    badge: "Restaurant Digital Solutions",
    headline: "Grow Your Restaurant with a",
    highlight: "Better Digital Experience",
    description:
      "We build modern restaurant websites that help customers discover your menu, make reservations, find your location, and connect with your business online.",
    icon: UtensilsCrossed,

    challenges: [
      {
        title: "Outdated Website",
        description:
          "An old or difficult-to-use website can make customers question the quality and reliability of your restaurant.",
      },
      {
        title: "Hard-to-Find Menus",
        description:
          "Customers may leave when menus are difficult to access, outdated, or not optimized for mobile devices.",
      },
      {
        title: "Limited Online Visibility",
        description:
          "Without strong local SEO, nearby customers may never discover your restaurant through online searches.",
      },
    ],

    solutions: [
      {
        title: "Mobile-Friendly Menus",
        description:
          "Clear, responsive menus that are easy to browse from phones, tablets, and desktop devices.",
      },
      {
        title: "Reservation Integration",
        description:
          "Make it easy for customers to request or complete reservations directly from your website.",
      },
      {
        title: "Local SEO",
        description:
          "Improve your visibility in local search results and help nearby customers discover your restaurant.",
      },
      {
        title: "Location and Hours",
        description:
          "Display accurate business hours, maps, directions, contact details, and important restaurant information.",
      },
    ],

    project: {
      title: "Modern Restaurant Website",
      description:
        "A responsive restaurant website featuring an online menu, reservation options, location details, and local SEO improvements.",
      href: "/portfolio/restaurant-website",
    },

    faqs: [
      {
        question: "Can you add online ordering to my restaurant website?",
        answer:
          "Yes. We can integrate third-party ordering platforms or build a custom ordering experience depending on your needs and budget.",
      },
      {
        question: "Can I update the menu myself?",
        answer:
          "Yes. We can provide an easy content management setup so your team can update menu items, pricing, descriptions, and availability.",
      },
      {
        question: "Will the website work well on mobile phones?",
        answer:
          "Yes. Every restaurant website we build is designed to work smoothly across mobile phones, tablets, and desktop devices.",
      },
      {
        question: "Can you help my restaurant appear in local searches?",
        answer:
          "Yes. We use local SEO best practices and can help optimize location pages, business information, metadata, and content.",
      },
    ],

    ctaTitle: "Ready to Grow Your Restaurant Online?",
    ctaDescription:
      "Let’s create a digital experience that helps more customers discover your restaurant, explore your menu, and make a reservation.",
  },

  {
    slug: "healthcare",
    name: "Healthcare",
    badge: "Healthcare Digital Solutions",
    headline: "Build Patient Trust with a",
    highlight: "Modern Healthcare Website",
    description:
      "We create professional healthcare websites that make it easier for patients to understand services, request appointments, and connect with your practice.",
    icon: Stethoscope,

    challenges: [
      {
        title: "Difficult Navigation",
        description:
          "Patients may struggle to find services, contact information, insurance details, or appointment options.",
      },
      {
        title: "Low Patient Trust",
        description:
          "An outdated or unclear website can reduce confidence in the professionalism of a healthcare provider.",
      },
      {
        title: "Poor Accessibility",
        description:
          "Healthcare websites must provide clear, readable, and accessible experiences for a wide range of users.",
      },
    ],

    solutions: [
      {
        title: "Appointment Requests",
        description:
          "Simple appointment forms that make it easier for patients to connect with your practice.",
      },
      {
        title: "Service Pages",
        description:
          "Clear explanations of treatments, specialties, providers, and patient care options.",
      },
      {
        title: "Accessible Design",
        description:
          "Readable layouts, clear navigation, strong contrast, and mobile-friendly experiences.",
      },
      {
        title: "Patient Resources",
        description:
          "Organize forms, insurance information, FAQs, office policies, and helpful patient content.",
      },
    ],

    project: {
      title: "Dental Clinic Platform",
      description:
        "A professional healthcare website featuring appointment requests, treatment information, provider profiles, and patient resources.",
      href: "/portfolio/dental-clinic",
    },

    faqs: [
      {
        question: "Can you add online appointment requests?",
        answer:
          "Yes. We can create appointment request forms or integrate an existing scheduling platform used by your practice.",
      },
      {
        question: "Will the website be accessible?",
        answer:
          "We follow accessibility best practices, including readable typography, clear navigation, responsive layouts, and proper content structure.",
      },
      {
        question: "Can you add provider profiles and treatment pages?",
        answer:
          "Yes. We can create detailed provider profiles, treatment pages, insurance information, FAQs, and patient resources.",
      },
      {
        question: "Can you redesign an existing healthcare website?",
        answer:
          "Yes. We can improve the design, structure, performance, mobile experience, and clarity of your current website.",
      },
    ],

    ctaTitle: "Create a Better Patient Experience",
    ctaDescription:
      "Let’s build a professional healthcare website that strengthens trust and makes it easier for patients to connect with your practice.",
  },

  {
    slug: "fitness",
    name: "Fitness",
    badge: "Fitness Digital Solutions",
    headline: "Turn More Visitors into",
    highlight: "Active Members",
    description:
      "We build modern websites for gyms, trainers, and fitness studios that showcase memberships, classes, schedules, and results.",
    icon: Dumbbell,

    challenges: [
      {
        title: "Low Membership Conversion",
        description:
          "Visitors may leave without joining when pricing, classes, and membership options are unclear.",
      },
      {
        title: "Outdated Class Schedules",
        description:
          "Static or confusing schedules make it harder for customers to plan and attend classes.",
      },
      {
        title: "Weak Mobile Experience",
        description:
          "Fitness customers often browse on mobile devices and expect fast, simple access to information.",
      },
    ],

    solutions: [
      {
        title: "Membership Pages",
        description:
          "Showcase membership plans, benefits, pricing, promotions, and calls to action.",
      },
      {
        title: "Class Schedules",
        description:
          "Display class times, trainers, program details, and registration options.",
      },
      {
        title: "Lead Generation",
        description:
          "Capture trial requests, consultation bookings, and membership inquiries.",
      },
      {
        title: "Mobile-First Design",
        description:
          "Deliver fast, responsive experiences for customers browsing from their phones.",
      },
    ],

    project: {
      title: "Fitness Studio Website",
      description:
        "A modern fitness platform featuring memberships, class schedules, trainer information, and lead-generation forms.",
      href: "/portfolio/fitness-studio",
    },

    faqs: [
      {
        question: "Can you integrate class booking software?",
        answer:
          "Yes. We can integrate many popular scheduling and membership platforms or connect visitors to your existing booking system.",
      },
      {
        question: "Can you display membership plans?",
        answer:
          "Yes. We can create clear pricing and membership sections that explain benefits and encourage visitors to join.",
      },
      {
        question: "Can trainers have individual profile pages?",
        answer:
          "Yes. Trainer profiles can include specialties, certifications, schedules, biographies, and booking links.",
      },
      {
        question: "Can you help generate more membership leads?",
        answer:
          "Yes. We can add trial forms, consultation requests, promotional offers, calls to action, and conversion-focused landing pages.",
      },
    ],

    ctaTitle: "Ready to Grow Your Fitness Business?",
    ctaDescription:
      "Let’s build a digital experience that helps you attract new members, promote classes, and strengthen your fitness brand.",
  },

  {
    slug: "legal",
    name: "Legal",
    badge: "Legal Industry Solutions",
    headline: "Build Credibility and Generate",
    highlight: "More Qualified Leads",
    description:
      "We create professional websites for law firms and legal professionals that communicate expertise, build trust, and encourage potential clients to make contact.",
    icon: Scale,

    challenges: [
      {
        title: "Low Online Credibility",
        description:
          "An outdated website may make potential clients question the professionalism of a legal practice.",
      },
      {
        title: "Unclear Practice Areas",
        description:
          "Visitors may struggle to understand which legal services the firm provides.",
      },
      {
        title: "Weak Lead Generation",
        description:
          "Without clear calls to action, potential clients may leave without requesting a consultation.",
      },
    ],

    solutions: [
      {
        title: "Practice Area Pages",
        description:
          "Clearly explain services, legal specialties, case types, and client support.",
      },
      {
        title: "Attorney Profiles",
        description:
          "Highlight experience, education, credentials, memberships, and professional background.",
      },
      {
        title: "Consultation Requests",
        description:
          "Use focused contact forms and calls to action to generate qualified inquiries.",
      },
      {
        title: "Professional Content",
        description:
          "Present legal information in a structured, readable, and trustworthy format.",
      },
    ],

    project: {
      title: "Professional Law Firm Website",
      description:
        "A credibility-focused legal website featuring attorney profiles, practice areas, consultation requests, and educational content.",
      href: "/portfolio/law-firm",
    },

    faqs: [
      {
        question: "Can you create pages for each legal practice area?",
        answer:
          "Yes. We can create dedicated pages for each practice area to improve clarity, search visibility, and lead generation.",
      },
      {
        question: "Can you add attorney profile pages?",
        answer:
          "Yes. Profiles can include biographies, education, credentials, memberships, awards, and areas of practice.",
      },
      {
        question: "Can the website collect consultation requests?",
        answer:
          "Yes. We can create secure inquiry forms with appropriate fields and clear disclaimers.",
      },
      {
        question: "Can you improve local SEO for a law firm?",
        answer:
          "Yes. We can optimize location-based content, metadata, page structure, and local search information.",
      },
    ],

    ctaTitle: "Build a Stronger Legal Presence Online",
    ctaDescription:
      "Let’s create a professional website that communicates your expertise and helps potential clients take the next step.",
  },

  {
    slug: "real-estate",
    name: "Real Estate",
    badge: "Real Estate Digital Solutions",
    headline: "Showcase Properties and Generate",
    highlight: "More Real Estate Leads",
    description:
      "We build modern real estate websites that help agents, brokers, and property businesses present listings, establish trust, and connect with buyers and sellers.",
    icon: Building2,

    challenges: [
      {
        title: "Poor Property Presentation",
        description:
          "Listings may fail to attract interest when photos, details, and property information are poorly organized.",
      },
      {
        title: "Limited Lead Capture",
        description:
          "Potential buyers and sellers may leave without an easy way to contact the agent.",
      },
      {
        title: "Weak Personal Branding",
        description:
          "Agents need a strong digital presence that communicates local expertise and professional credibility.",
      },
    ],

    solutions: [
      {
        title: "Property Listings",
        description:
          "Showcase properties with high-quality images, details, locations, and inquiry options.",
      },
      {
        title: "Buyer and Seller Pages",
        description:
          "Provide useful resources and calls to action for both buyers and sellers.",
      },
      {
        title: "Lead Capture Forms",
        description:
          "Generate inquiries for property tours, valuations, consultations, and listing information.",
      },
      {
        title: "Agent Branding",
        description:
          "Create a professional online presence that highlights expertise, experience, and local knowledge.",
      },
    ],

    project: {
      title: "Real Estate Agent Website",
      description:
        "A lead-focused property website featuring listings, agent branding, buyer and seller resources, and inquiry forms.",
      href: "/portfolio/real-estate",
    },

    faqs: [
      {
        question: "Can you add property listings?",
        answer:
          "Yes. We can create custom listing pages or integrate a compatible property listing solution depending on your requirements.",
      },
      {
        question: "Can visitors request property tours?",
        answer:
          "Yes. We can add inquiry forms, tour requests, consultation booking, and contact options.",
      },
      {
        question: "Can you build pages for buyers and sellers?",
        answer:
          "Yes. We can create dedicated pages with guides, FAQs, lead forms, and helpful resources.",
      },
      {
        question: "Can the website highlight my personal brand?",
        answer:
          "Yes. We can showcase your experience, service areas, testimonials, professional story, and local market knowledge.",
      },
    ],

    ctaTitle: "Ready to Generate More Real Estate Leads?",
    ctaDescription:
      "Let’s build a modern real estate website that showcases your properties, strengthens your brand, and connects you with new clients.",
  },

  {
    slug: "home-services",
    name: "Home Services",
    badge: "Home Service Digital Solutions",
    headline: "Generate More Local Leads for Your",
    highlight: "Home Service Business",
    description:
      "We create high-converting websites for contractors and home service businesses that clearly present services, locations, reviews, and quote requests.",
    icon: Hammer,

    challenges: [
      {
        title: "Low Local Visibility",
        description:
          "Customers may not find your business when searching for services in their area.",
      },
      {
        title: "Unclear Service Information",
        description:
          "Visitors may leave when services, coverage areas, and pricing expectations are difficult to understand.",
      },
      {
        title: "Weak Trust Signals",
        description:
          "Homeowners want to see reviews, project examples, licensing information, and professional credibility.",
      },
    ],

    solutions: [
      {
        title: "Service Pages",
        description:
          "Create detailed pages for each service your business provides.",
      },
      {
        title: "Quote Request Forms",
        description:
          "Make it easy for homeowners to request estimates and describe their project.",
      },
      {
        title: "Local SEO Pages",
        description:
          "Target cities and service areas with useful, location-specific content.",
      },
      {
        title: "Trust-Building Content",
        description:
          "Highlight reviews, project galleries, certifications, warranties, and experience.",
      },
    ],

    project: {
      title: "Home Services Lead-Generation Website",
      description:
        "A conversion-focused contractor website featuring service pages, quote requests, local SEO, reviews, and project examples.",
      href: "/portfolio/home-services",
    },

    faqs: [
      {
        question: "Can you create a quote request form?",
        answer:
          "Yes. We can build a customized form that collects contact information, service needs, project details, location, and preferred timing.",
      },
      {
        question: "Can you create pages for each service area?",
        answer:
          "Yes. We can build structured location pages to improve relevance for customers searching in specific cities or communities.",
      },
      {
        question: "Can you add customer reviews and project photos?",
        answer:
          "Yes. We can create testimonial sections, review highlights, before-and-after galleries, and project portfolios.",
      },
      {
        question: "Can you help improve local search visibility?",
        answer:
          "Yes. We can optimize your page structure, service content, location content, metadata, and business information.",
      },
    ],

    ctaTitle: "Ready to Generate More Local Leads?",
    ctaDescription:
      "Let’s build a professional website that helps homeowners trust your business and request your services.",
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}