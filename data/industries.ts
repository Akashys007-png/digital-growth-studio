import {
  UtensilsCrossed,
  Stethoscope,
  Dumbbell,
  Scale,
  Building2,
  Hammer,
  ShoppingBag,
  Scissors,
  Briefcase,
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
      href: "/portfolio/bella-vista-restaurant",
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
      href: "/portfolio/brightsmile-dental",
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
      href: "/portfolio/corefit-studio",
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
      href: "/portfolio/summit-legal",
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
      href: "/portfolio/northstar-realty",
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
      title: "Explore Our Portfolio",
      description:
        "See examples of conversion-focused websites we've designed with service pages, quote requests, local SEO, reviews, and project galleries.",
      href: "/portfolio",
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

  {
    slug: "retail",
    name: "Retail",
    badge: "Retail Digital Solutions",
    headline: "Turn Browsers Into Buyers With a",
    highlight: "Better Online Store",
    description:
      "We build modern retail and e-commerce websites that showcase products clearly, simplify checkout, and help shoppers find what they need.",
    icon: ShoppingBag,

    challenges: [
      {
        title: "Confusing Product Discovery",
        description:
          "Shoppers may leave when products are hard to browse, search, or filter across devices.",
      },
      {
        title: "Complicated Checkout",
        description:
          "A slow or unclear checkout process leads to abandoned carts and lost sales.",
      },
      {
        title: "Limited Online Visibility",
        description:
          "Without strong SEO and product data, potential customers may never discover your store online.",
      },
    ],

    solutions: [
      {
        title: "Clear Product Architecture",
        description:
          "Organized categories, filters, and search that help shoppers find products quickly.",
      },
      {
        title: "Streamlined Checkout",
        description:
          "A fast, mobile-friendly checkout experience that reduces cart abandonment.",
      },
      {
        title: "Inventory-Ready Structure",
        description:
          "A store structure that scales cleanly as your product catalog grows.",
      },
      {
        title: "SEO & Store Analytics",
        description:
          "Technical SEO and analytics setup so you can track what shoppers are doing and improve over time.",
      },
    ],

    project: {
      title: "Explore Our Portfolio",
      description:
        "See examples of conversion-focused websites we've designed with clear product presentation and simple checkout flows.",
      href: "/portfolio",
    },

    faqs: [
      {
        question: "Can you integrate a payment processor?",
        answer:
          "Yes. We can integrate providers such as Stripe, PayPal, Square, or platform-native checkout depending on your store.",
      },
      {
        question: "Can I manage products myself after launch?",
        answer:
          "Yes. We set up a content and inventory management workflow so your team can add, edit, and update products directly.",
      },
      {
        question: "Will my store work well on mobile devices?",
        answer:
          "Yes. Every store we build is designed mobile-first, since most shopping traffic happens on phones.",
      },
      {
        question: "Can you help my store rank in search results?",
        answer:
          "Yes. We apply technical and on-page SEO best practices to product and category pages to improve discoverability.",
      },
    ],

    ctaTitle: "Ready to Grow Your Online Store?",
    ctaDescription:
      "Let’s build a retail experience that makes it easy for shoppers to discover products and complete a purchase.",
  },

  {
    slug: "salons-spas",
    name: "Salons & Spas",
    badge: "Salon & Spa Digital Solutions",
    headline: "Elevate Your Brand With a",
    highlight: "Premium Booking Experience",
    description:
      "We build elegant salon and spa websites that showcase services, stylists, and pricing while making it effortless for clients to book online.",
    icon: Scissors,

    challenges: [
      {
        title: "No Online Booking",
        description:
          "Relying on phone-only bookings makes it harder for clients to schedule appointments on their own time.",
      },
      {
        title: "Weak Brand Presentation",
        description:
          "An outdated website can undersell a premium service experience and stylist expertise.",
      },
      {
        title: "Unclear Services & Pricing",
        description:
          "Clients may hesitate to book when services, pricing, and stylist information are hard to find.",
      },
    ],

    solutions: [
      {
        title: "Online Appointment Booking",
        description:
          "Let clients browse services and request or book appointments directly from your website.",
      },
      {
        title: "Elegant Visual Branding",
        description:
          "A polished visual design that reflects the quality and atmosphere of your salon or spa.",
      },
      {
        title: "Stylist & Service Profiles",
        description:
          "Highlight individual stylists, specialties, and clear service pricing.",
      },
      {
        title: "Reviews & Social Proof",
        description:
          "Showcase client reviews and before-and-after work to build trust with new clients.",
      },
    ],

    project: {
      title: "Luxe Salon & Spa",
      description:
        "A premium beauty and wellness website designed to present services, stylists, pricing, and online booking.",
      href: "/portfolio/luxe-salon",
    },

    faqs: [
      {
        question: "Can clients book appointments directly on the website?",
        answer:
          "Yes. We can integrate an online booking system or build a custom request flow depending on your preference.",
      },
      {
        question: "Can I showcase individual stylists?",
        answer:
          "Yes. We can build dedicated stylist profiles with specialties, portfolios, and booking links.",
      },
      {
        question: "Can I update services and pricing myself?",
        answer:
          "Yes. We set up a simple content management workflow so your team can update services and pricing directly.",
      },
      {
        question: "Will the website reflect our brand's premium feel?",
        answer:
          "Yes. We design every salon and spa website around your brand's visual identity and tone.",
      },
    ],

    ctaTitle: "Ready to Elevate Your Salon or Spa Online?",
    ctaDescription:
      "Let’s create a booking experience that matches the quality of the service you provide in person.",
  },

  {
    slug: "professional-services",
    name: "Professional Services",
    badge: "Professional Services Digital Solutions",
    headline: "Build Credibility With a",
    highlight: "Trustworthy Digital Presence",
    description:
      "We build professional websites for consultants, accountants, agencies, and service professionals that establish credibility and generate qualified leads.",
    icon: Briefcase,

    challenges: [
      {
        title: "Low Credibility Online",
        description:
          "An outdated or generic website can make prospective clients question your expertise.",
      },
      {
        title: "Unclear Service Offerings",
        description:
          "Visitors may leave when it's not immediately clear what services you provide or who you serve.",
      },
      {
        title: "Weak Lead Generation",
        description:
          "Without clear calls to action, interested visitors may never reach out to start a conversation.",
      },
    ],

    solutions: [
      {
        title: "Credibility-Focused Design",
        description:
          "A professional, modern design that reflects your expertise and builds client trust.",
      },
      {
        title: "Clear Service Pages",
        description:
          "Organized pages that explain your services, process, and ideal clients.",
      },
      {
        title: "Lead-Generation Forms",
        description:
          "Simple, structured contact and consultation forms that make it easy to start a conversation.",
      },
      {
        title: "Case Studies & Testimonials",
        description:
          "Showcase client results and testimonials to build trust with prospective clients.",
      },
    ],

    project: {
      title: "Summit Legal Group",
      description:
        "A trustworthy legal website that clearly presents practice areas, attorney expertise, and consultation options.",
      href: "/portfolio/summit-legal",
    },

    faqs: [
      {
        question: "Do you work with service professionals outside of legal?",
        answer:
          "Yes. We work with consultants, accountants, agencies, and other professional service providers.",
      },
      {
        question: "Can you help present my case studies or past results?",
        answer:
          "Yes. We can build dedicated case study or portfolio pages that highlight your work and outcomes.",
      },
      {
        question: "Can you add a consultation request form?",
        answer:
          "Yes. We can build a structured consultation or inquiry form tailored to the information you need from prospective clients.",
      },
      {
        question: "Can you help improve our visibility in search results?",
        answer:
          "Yes. We apply SEO best practices to service and location pages to help potential clients find your business.",
      },
    ],

    ctaTitle: "Ready to Build a More Credible Online Presence?",
    ctaDescription:
      "Let’s create a website that reflects your expertise and turns visitors into qualified leads.",
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}