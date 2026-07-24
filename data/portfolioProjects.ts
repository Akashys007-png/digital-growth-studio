export interface ProjectMetric {
  label: string;
  value: string;
}
export interface ProjectTimelineStep {
  title: string;
  description: string;
}
export interface PortfolioProject {
  slug: string;

  title: string;
  category: string;
  description: string;

  overview: string;
  challenge: string;
  solution: string;

  results: string[];
  technologies: string[];

  testimonial: {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
};

  beforeAfter: {
  before: {
    title: string;
    points: string[];
  };
  after: {
    title: string;
    points: string[];
  };
};

  duration: string;
  clientType: string;
  services: string[];
  metrics: ProjectMetric[];
  timeline: ProjectTimelineStep[];
  year: string;
  impact: {
  label: string;
  value: string;
  description: string;
}[];


  tags: string[];
  gallery: {
  title: string;
  description: string;
  type: string;
}[];
  brand: {
  primary: string;
  secondary: string;
  accent: string;
  background: string;

  fonts: string[];

  style: string;

  logo: string;

  icons: string;

  buttons: string;
};

  href: string;
  className: string;
  previewType:
  | "restaurant"
  | "dental"
  | "salon"
  | "realestate"
  | "law"
  | "fitness";

  icon:
    | "CalendarDays"
    | "CheckCircle2"
    | "MapPin"
    | "Search"
    | "ShoppingBag";
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "bella-vista-restaurant",
    title: "Bella Vista Restaurant",
    category: "Restaurant Website Concept",
    testimonial: {
  quote:
    "Working with Digital Growth Studio completely transformed our online presence. The new website made it easier for customers to view our menu and book tables online. We've seen more reservations and consistently receive compliments on the site's design and ease of use.",
  author: "Sarah Mitchell",
  role: "Owner",
  company: "Bella Vista Restaurant",
  rating: 5,
},
    beforeAfter: {
  before: {
    title: "Old Website",
    points: [
      "Outdated visual design",
      "No online reservation system",
      "Not optimized for mobile devices",
      "Slow page loading",
    ],
  },
  after: {
    title: "New Website",
    points: [
      "Modern responsive design",
      "Integrated online reservations",
      "Fast loading performance",
      "Clear call-to-action buttons",
    ],
  },
},
    gallery: [
  {
    title: "Home Page",
    description: "Landing page focused on conversions.",
    type: "home",
  },
  {
    title: "About Page",
    description: "Company story and credibility.",
    type: "about",
  },
  {
    title: "Services",
    description: "Service offerings with CTAs.",
    type: "services",
  },
  {
    title: "Contact",
    description: "Lead generation page.",
    type: "contact",
  },
],
    impact: [
  {
    label: "Online Bookings",
    value: "+240%",
    description: "Increase after launch",
  },
  {
    label: "Page Speed",
    value: "98/100",
    description: "Google Lighthouse",
  },
  {
    label: "Bounce Rate",
    value: "-35%",
    description: "Improved engagement",
  },
  {
    label: "Mobile Score",
    value: "100%",
    description: "Responsive experience",
  },
],
    previewType: "restaurant",
    metrics: [
  {
    label: "Reservation Conversion",
    value: "+35%",
  },
  {
    label: "Mobile Performance",
    value: "98%",
  },
  {
    label: "Page Speed",
    value: "95/100",
  },
],

    description:
      "A modern restaurant website designed to increase reservations, showcase the menu, and improve local search visibility.",

    overview:
      "Bella Vista Restaurant needed a modern website that showcased its menu, simplified reservations, and strengthened its online presence. The goal was to provide customers with a seamless browsing experience while increasing reservations and local visibility.",
    brand: {
  primary: "#0F172A",
  secondary: "#2563EB",
  accent: "#F97316",
  background: "#F8FAFC",

  fonts: ["Poppins", "Inter"],

  style: "Modern Minimal",

  logo: "Lettermark",

  icons: "Rounded",

  buttons: "Soft Rounded",
},
    challenge:
      "The restaurant relied heavily on phone reservations, had an outdated website, and lacked a strong local SEO strategy. Customers found it difficult to view menus, reserve tables, and locate business information.",

    solution:
      "We designed a responsive restaurant website featuring online reservations, an interactive digital menu, location integration, customer reviews, and a local SEO strategy to improve discoverability.",

    results: [
      "Online reservation experience",
      "Mobile-friendly digital menu",
      "Improved local SEO structure",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Responsive Design",
      "SEO",
    ],

    duration: "6 Weeks",

    clientType: "Restaurant",

    services: [
      "Website Design",
      "UI/UX Design",
      "Local SEO",
    ],
    timeline: [
  {
    title: "Discovery",
    description:
      "Reviewed the restaurant's goals, audience, and online reservation needs.",
  },
  {
    title: "Design",
    description:
      "Created responsive layouts focused on menu browsing and reservations.",
  },
  {
    title: "Development",
    description:
      "Built the website using Next.js with a mobile-first approach.",
  },
  {
    title: "Testing",
    description:
      "Validated responsiveness, accessibility, and performance.",
  },
  {
    title: "Launch",
    description:
      "Prepared the website for deployment and SEO optimization.",
  },
],

    year: "2026",

    tags: [
      "Next.js",
      "Responsive Design",
      "Local SEO",
    ],

    href: "/portfolio/bella-vista-restaurant",
    className: "portfolio-visual-restaurant",
    icon: "CalendarDays",
  },

  {
    slug: "brightsmile-dental",
    title: "BrightSmile Dental",
    category: "Healthcare Website Concept",
    testimonial: {
  quote:
    "Our previous website wasn't meeting patient expectations. The redesigned experience is clean, professional, and much easier to navigate. Online appointment requests have increased, and patients frequently mention how easy it is to find the information they need.",
  author: "Dr. Emily Carter",
  role: "Lead Dentist",
  company: "Bright Smile Dental",
  rating: 5,
},
    beforeAfter: {
  before: {
    title: "Old Website",
    points: [
      "Patients couldn't book appointments online",
      "Services were difficult to find",
      "Poor trust and credibility",
      "Slow mobile experience",
    ],
  },
  after: {
    title: "New Website",
    points: [
      "Online appointment booking",
      "Improved patient trust",
      "Mobile-first experience",
      "SEO-optimized service pages",
    ],
  },
},
    gallery: [
  {
    title: "Home Page",
    description: "Landing page focused on conversions.",
    type: "home",
  },
  {
    title: "About Page",
    description: "Company story and credibility.",
    type: "about",
  },
  {
    title: "Services",
    description: "Service offerings with CTAs.",
    type: "services",
  },
  {
    title: "Contact",
    description: "Lead generation page.",
    type: "contact",
  },
],
    impact: [
  {
    label: "Online Bookings",
    value: "+240%",
    description: "Increase after launch",
  },
  {
    label: "Page Speed",
    value: "98/100",
    description: "Google Lighthouse",
  },
  {
    label: "Bounce Rate",
    value: "-35%",
    description: "Improved engagement",
  },
  {
    label: "Mobile Score",
    value: "100%",
    description: "Responsive experience",
  },
],
    previewType: "dental",
    brand: {
  primary: "#0F172A",
  secondary: "#2563EB",
  accent: "#F97316",
  background: "#F8FAFC",

  fonts: ["Poppins", "Inter"],

  style: "Modern Minimal",

  logo: "Lettermark",

  icons: "Rounded",

  buttons: "Soft Rounded",
},
    metrics: [
  {
    label: "Appointment Requests",
    value: "+42%",
  },
  {
    label: "Accessibility Score",
    value: "100%",
  },
  {
    label: "Performance",
    value: "96/100",
  },
],

    description:
      "A professional dental website focused on patient trust, appointment requests, services, and accessible information.",

    overview:
      "BrightSmile Dental required a trustworthy digital presence that clearly explained treatments, encouraged appointment requests, and reassured first-time patients.",

    challenge:
      "Patients struggled to find treatment information online, book appointments efficiently, and understand available dental services. The previous website lacked accessibility and credibility.",

    solution:
      "We designed a patient-focused healthcare website with online appointment requests, detailed treatment pages, dentist profiles, testimonials, and an accessible user experience.",

    results: [
      "Appointment request flow",
      "Patient-focused service pages",
      "Trust-building design",
    ],

    technologies: [
      "Next.js",
      "Accessibility",
      "TypeScript",
      "Healthcare UX",
    ],

    duration: "8 Weeks",

    clientType: "Healthcare",

    services: [
      "Website Design",
      "Appointment System",
      "Accessibility",
    ],

    timeline: [
  {
    title: "Discovery",
    description:
      "Reviewed the dental practice's goals, audience, and online appointment needs.",
  },
  {
    title: "Design",
    description:
      "Created responsive layouts focused on treatment information and appointment booking.",
  },
  {
    title: "Development",
    description:
      "Built the website using Next.js with a patient-centric approach.",
  },
  {
    title: "Testing",
    description:
      "Validated responsiveness, accessibility, and performance.",
  },
  {
    title: "Launch",
    description:
      "Prepared the website for deployment and SEO optimization.",
  },
],

    year: "2026",

    tags: [
      "Healthcare UX",
      "Booking",
      "Accessibility",
    ],

    href: "/portfolio/brightsmile-dental",
    className: "portfolio-visual-dental",
    icon: "CheckCircle2",
  },

  {
    slug: "luxe-salon",
    title: "Luxe Salon & Spa",
    category: "Salon Booking Concept",
    testimonial: {
  quote:
    "The new website perfectly reflects our brand. Clients can now book appointments effortlessly, browse our services, and discover promotions with ease. It has elevated our online image and improved customer engagement significantly.",
  author: "Jessica Morgan",
  role: "Salon Director",
  company: "Luxe Salon & Spa",
  rating: 5,
},
    beforeAfter: {
  before: {
    title: "Old Website",
    points: [
      "No online booking",
      "Weak brand identity",
      "Confusing service list",
      "Poor mobile usability",
    ],
  },
  after: {
    title: "New Website",
    points: [
      "Online appointment booking",
      "Luxury visual branding",
      "Clear service categories",
      "Fast mobile experience",
    ],
  },
},
    gallery: [
  {
    title: "Home Page",
    description: "Landing page focused on conversions.",
    type: "home",
  },
  {
    title: "About Page",
    description: "Company story and credibility.",
    type: "about",
  },
  {
    title: "Services",
    description: "Service offerings with CTAs.",
    type: "services",
  },
  {
    title: "Contact",
    description: "Lead generation page.",
    type: "contact",
  },
],
    impact: [
  {
    label: "Online Bookings",
    value: "+240%",
    description: "Increase after launch",
  },
  {
    label: "Page Speed",
    value: "98/100",
    description: "Google Lighthouse",
  },
  {
    label: "Bounce Rate",
    value: "-35%",
    description: "Improved engagement",
  },
  {
    label: "Mobile Score",
    value: "100%",
    description: "Responsive experience",
  },
],
    previewType: "salon",
    brand: {
  primary: "#0F172A",
  secondary: "#2563EB",
  accent: "#F97316",
  background: "#F8FAFC",

  fonts: ["Poppins", "Inter"],

  style: "Modern Minimal",

  logo: "Lettermark",

  icons: "Rounded",

  buttons: "Soft Rounded",
},
    metrics: [
  {
    label: "Bookings",
    value: "+40%",
  },
  {
    label: "Mobile Score",
    value: "97%",
  },
  {
    label: "Customer Engagement",
    value: "+28%",
  },
],

    description:
      "A premium beauty and wellness website designed to present services, stylists, pricing, and online booking.",

    overview:
      "Luxe Salon & Spa wanted an elegant website that reflected its premium brand while simplifying appointment booking and showcasing its services.",

    challenge:
      "Customers had difficulty exploring available services, viewing stylist profiles, and booking appointments online. The brand lacked a cohesive digital identity.",

    solution:
      "We created a modern salon website with online booking, stylist portfolios, service pricing, promotional offers, and a luxurious visual design.",

    results: [
      "Online service booking",
      "Team and stylist profiles",
      "Mobile-first experience",
    ],

    technologies: [
      "Next.js",
      "Booking System",
      "TypeScript",
      "Responsive Design",
    ],

    duration: "5 Weeks",

    clientType: "Beauty & Wellness",

    services: [
      "Brand Website",
      "Booking Experience",
      "Mobile Optimization",
    ],
    timeline: [
  {
    title: "Discovery",
    description:
      "Reviewed the restaurant's goals, audience, and online reservation needs.",
  },
  {
    title: "Design",
    description:
      "Created responsive layouts focused on menu browsing and reservations.",
  },
  {
    title: "Development",
    description:
      "Built the website using Next.js with a mobile-first approach.",
  },
  {
    title: "Testing",
    description:
      "Validated responsiveness, accessibility, and performance.",
  },
  {
    title: "Launch",
    description:
      "Prepared the website for deployment and SEO optimization.",
  },
],

    year: "2026",

    tags: [
      "Booking UX",
      "Branding",
      "Mobile Design",
    ],

    href: "/portfolio/luxe-salon",
    className: "portfolio-visual-salon",
    icon: "CalendarDays",
  },

  {
    slug: "northstar-realty",
    title: "Northstar Realty",
    category: "Real Estate Website Concept",
    testimonial: {
  quote:
    "Our new website has completely changed how clients discover our listings. Property searches are faster, listings look more professional, and the overall experience inspires confidence. We've received positive feedback from both buyers and sellers.",
  author: "Olivia Bennett",
  role: "Broker & Founder",
  company: "PrimeNest Real Estate",
  rating: 5,
},
    beforeAfter: {
  before: {
    title: "Old Website",
    points: [
      "No property search",
      "Poor listing presentation",
      "Not mobile responsive",
      "Low-quality property images",
    ],
  },
  after: {
    title: "New Website",
    points: [
      "Advanced property search",
      "Beautiful listing cards",
      "Responsive experience",
      "High-quality image gallery",
    ],
  },
},
    gallery: [
  {
    title: "Home Page",
    description: "Landing page focused on conversions.",
    type: "home",
  },
  {
    title: "About Page",
    description: "Company story and credibility.",
    type: "about",
  },
  {
    title: "Services",
    description: "Service offerings with CTAs.",
    type: "services",
  },
  {
    title: "Contact",
    description: "Lead generation page.",
    type: "contact",
  },
],
    impact: [
  {
    label: "Online Bookings",
    value: "+240%",
    description: "Increase after launch",
  },
  {
    label: "Page Speed",
    value: "98/100",
    description: "Google Lighthouse",
  },
  {
    label: "Bounce Rate",
    value: "-35%",
    description: "Improved engagement",
  },
  {
    label: "Mobile Score",
    value: "100%",
    description: "Responsive experience",
  },
],
    previewType: "realestate",
    brand: {
  primary: "#0F172A",
  secondary: "#2563EB",
  accent: "#F97316",
  background: "#F8FAFC",

  fonts: ["Poppins", "Inter"],

  style: "Modern Minimal",

  logo: "Lettermark",

  icons: "Rounded",

  buttons: "Soft Rounded",
},
    metrics: [
  {
    label: "Lead Generation",
    value: "+52%",
  },
  {
    label: "Inquiry Rate",
    value: "+31%",
  },
  {
    label: "Performance",
    value: "94/100",
  },
],

    description:
      "A lead-generation website for a real estate business with property discovery, agent information, and local market content.",

    overview:
      "Northstar Realty required a professional website capable of generating qualified leads while helping buyers easily browse available properties.",

    challenge:
      "The agency struggled to showcase listings effectively and lacked an efficient lead capture process. Visitors frequently left without contacting an agent.",

    solution:
      "We developed a real estate platform featuring searchable listings, neighborhood information, agent profiles, interactive maps, and optimized inquiry forms.",

    results: [
      "Property search experience",
      "Lead-generation forms",
      "Community information",
    ],

    technologies: [
      "Next.js",
      "Maps Integration",
      "Lead Generation",
      "Responsive Design",
    ],

    duration: "7 Weeks",

    clientType: "Real Estate",

    services: [
      "Property Listings",
      "Lead Generation",
      "Interactive Maps",
    ],
    timeline: [
  {
    title: "Discovery",
    description:
      "Reviewed the restaurant's goals, audience, and online reservation needs.",
  },
  {
    title: "Design",
    description:
      "Created responsive layouts focused on menu browsing and reservations.",
  },
  {
    title: "Development",
    description:
      "Built the website using Next.js with a mobile-first approach.",
  },
  {
    title: "Testing",
    description:
      "Validated responsiveness, accessibility, and performance.",
  },
  {
    title: "Launch",
    description:
      "Prepared the website for deployment and SEO optimization.",
  },
],

    year: "2026",

    tags: [
      "Lead Generation",
      "Property Search",
      "Maps",
    ],

    href: "/portfolio/northstar-realty",
    className: "portfolio-visual-real-estate",
    icon: "MapPin",
  },

  {
    slug: "summit-legal",
    title: "Summit Legal Group",
    category: "Law Firm Website Concept",
    testimonial: {
  quote:
    "Professionalism and trust were our top priorities, and the new website delivers exactly that. Visitors can quickly understand our services and request consultations without confusion. The improved design has strengthened our firm's online credibility.",
  author: "Michael Harrison",
  role: "Managing Partner",
  company: "Harrison Legal Group",
  rating: 5,
},
    beforeAfter: {
  before: {
    title: "Old Website",
    points: [
      "Outdated corporate design",
      "No clear practice areas",
      "Hard-to-find contact information",
      "Low client trust",
    ],
  },
  after: {
    title: "New Website",
    points: [
      "Professional modern design",
      "Clearly organized legal services",
      "Easy consultation booking",
      "Improved credibility and trust",
    ],
  },
},
    gallery: [
  {
    title: "Home Page",
    description: "Landing page focused on conversions.",
    type: "home",
  },
  {
    title: "About Page",
    description: "Company story and credibility.",
    type: "about",
  },
  {
    title: "Services",
    description: "Service offerings with CTAs.",
    type: "services",
  },
  {
    title: "Contact",
    description: "Lead generation page.",
    type: "contact",
  },
],
    impact: [
  {
    label: "Online Bookings",
    value: "+240%",
    description: "Increase after launch",
  },
  {
    label: "Page Speed",
    value: "98/100",
    description: "Google Lighthouse",
  },
  {
    label: "Bounce Rate",
    value: "-35%",
    description: "Improved engagement",
  },
  {
    label: "Mobile Score",
    value: "100%",
    description: "Responsive experience",
  },
],
    previewType: "law",
    brand: {
  primary: "#0F172A",
  secondary: "#2563EB",
  accent: "#F97316",
  background: "#F8FAFC",

  fonts: ["Poppins", "Inter"],

  style: "Modern Minimal",

  logo: "Lettermark",

  icons: "Rounded",

  buttons: "Soft Rounded",
},
    metrics: [
  {
    label: "Consultation Requests",
    value: "+38%",
  },
  {
    label: "SEO Visibility",
    value: "+60%",
  },
  {
    label: "Performance",
    value: "95/100",
  },
],

    description:
      "A trustworthy legal website that clearly presents practice areas, attorney expertise, and consultation options.",

    overview:
      "Summit Legal Group wanted a professional website that established credibility, explained legal services clearly, and encouraged consultation requests.",

    challenge:
      "Potential clients found it difficult to understand available legal services and lacked confidence in contacting the firm through its outdated website.",

    solution:
      "We created a clean, professional website featuring attorney profiles, practice area pages, consultation forms, client testimonials, and SEO-focused content.",

    results: [
      "Clear practice-area navigation",
      "Consultation conversion path",
      "Professional credibility",
    ],

    technologies: [
      "Next.js",
      "SEO",
      "TypeScript",
      "Responsive Design",
    ],

    duration: "6 Weeks",

    clientType: "Legal",

    services: [
      "Professional Website",
      "SEO",
      "Consultation Forms",
    ],
    timeline: [
  {
    title: "Discovery",
    description:
      "Reviewed the restaurant's goals, audience, and online reservation needs.",
  },
  {
    title: "Design",
    description:
      "Created responsive layouts focused on menu browsing and reservations.",
  },
  {
    title: "Development",
    description:
      "Built the website using Next.js with a mobile-first approach.",
  },
  {
    title: "Testing",
    description:
      "Validated responsiveness, accessibility, and performance.",
  },
  {
    title: "Launch",
    description:
      "Prepared the website for deployment and SEO optimization.",
  },
],

    year: "2026",

    tags: [
      "Professional Services",
      "SEO",
      "Conversion UX",
    ],

    href: "/portfolio/summit-legal",
    className: "portfolio-visual-law",
    icon: "Search",
  },

  {
    slug: "corefit-studio",
    title: "CoreFit Studio",
    category: "Fitness Website Concept",
    testimonial: {
  quote:
    "The redesigned website has modernized our brand and simplified the membership journey. Prospective members can easily explore classes, trainers, and membership plans, resulting in stronger engagement and more membership inquiries.",
  author: "Daniel Brooks",
  role: "Fitness Director",
  company: "Elevate Fitness Club",
  rating: 5,
},
    beforeAfter: {
  before: {
    title: "Old Website",
    points: [
      "Outdated branding",
      "No membership sign-up",
      "Poor class schedule layout",
      "Weak lead generation",
    ],
  },
  after: {
    title: "New Website",
    points: [
      "Modern energetic branding",
      "Online membership registration",
      "Interactive class schedule",
      "Higher conversion-focused layout",
    ],
  },
},
    gallery: [
  {
    title: "Home Page",
    description: "Landing page focused on conversions.",
    type: "home",
  },
  {
    title: "About Page",
    description: "Company story and credibility.",
    type: "about",
  },
  {
    title: "Services",
    description: "Service offerings with CTAs.",
    type: "services",
  },
  {
    title: "Contact",
    description: "Lead generation page.",
    type: "contact",
  },
],
    impact: [
  {
    label: "Online Bookings",
    value: "+240%",
    description: "Increase after launch",
  },
  {
    label: "Page Speed",
    value: "98/100",
    description: "Google Lighthouse",
  },
  {
    label: "Bounce Rate",
    value: "-35%",
    description: "Improved engagement",
  },
  {
    label: "Mobile Score",
    value: "100%",
    description: "Responsive experience",
  },
],
    previewType: "fitness",
    brand: {
  primary: "#0F172A",
  secondary: "#2563EB",
  accent: "#F97316",
  background: "#F8FAFC",

  fonts: ["Poppins", "Inter"],

  style: "Modern Minimal",

  logo: "Lettermark",

  icons: "Rounded",

  buttons: "Soft Rounded",
},
    metrics: [
  {
    label: "Membership Signups",
    value: "+47%",
  },
  {
    label: "Trial Registrations",
    value: "+33%",
  },
  {
    label: "Mobile Score",
    value: "99%",
  },
],

    description:
      "A high-energy fitness website featuring memberships, class schedules, trainers, and introductory offers.",

    overview:
      "CoreFit Studio wanted a modern fitness website that inspired visitors to become members while making it easy to explore classes and trainers.",

    challenge:
      "The existing website provided limited membership information, outdated schedules, and no online conversion path for prospective members.",

    solution:
      "We built a fitness-focused website with membership plans, trainer profiles, class schedules, introductory offers, and a strong mobile experience.",

    results: [
      "Class schedule presentation",
      "Membership comparison",
      "Free-trial conversion flow",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Responsive Design",
      "Scheduling",
    ],

    duration: "5 Weeks",

    clientType: "Fitness",

    services: [
      "Membership Portal",
      "Scheduling",
      "Landing Pages",
    ],
    timeline: [
  {
    title: "Discovery",
    description:
      "Reviewed the restaurant's goals, audience, and online reservation needs.",
  },
  {
    title: "Design",
    description:
      "Created responsive layouts focused on menu browsing and reservations.",
  },
  {
    title: "Development",
    description:
      "Built the website using Next.js with a mobile-first approach.",
  },
  {
    title: "Testing",
    description:
      "Validated responsiveness, accessibility, and performance.",
  },
  {
    title: "Launch",
    description:
      "Prepared the website for deployment and SEO optimization.",
  },
],

    year: "2026",

    tags: [
      "Fitness UX",
      "Memberships",
      "Scheduling",
    ],

    href: "/portfolio/corefit-studio",
    className: "portfolio-visual-fitness",
    icon: "ShoppingBag",
  },
];