export type IndustryIcon =
  | "UtensilsCrossed"
  | "ShoppingBag"
  | "Stethoscope"
  | "Scissors"
  | "Dumbbell"
  | "Building2"
  | "Scale"
  | "Hammer";

export interface Industry {
  slug: string;
  title: string;
  description: string;
  icon: IndustryIcon;
  href: string;
  pain: string;
  features: string[];
}
export const services = [
 {slug:"website-development",title:"Website Development",short:"Professional, mobile-first websites built to earn trust and generate inquiries.",benefit:"Turn online visitors into confident prospects.",icon:"Code2",features:["Custom responsive design","Conversion-focused pages","Analytics and SEO foundation","Accessible, maintainable build"]},
 {slug:"website-redesign",title:"Website Redesign",short:"Modernize an outdated site without losing the business value you have already built.",benefit:"Improve credibility, usability, and performance.",icon:"RefreshCw",features:["UX audit","Visual modernization","Content restructuring","Performance improvements"]},
 {slug:"ecommerce",title:"E-commerce",short:"Simple, reliable online stores designed around clear products and easy checkout.",benefit:"Create a stronger path from discovery to purchase.",icon:"ShoppingCart",features:["Product architecture","Checkout integration","Mobile commerce","Store analytics"]},
 {slug:"seo",title:"Search Engine Optimization",short:"Practical SEO foundations that help local customers discover your business.",benefit:"Strengthen visibility for relevant searches.",icon:"Search",features:["Technical SEO","Local SEO setup","Metadata and schema","Measurement plan"]},
 {slug:"website-maintenance",title:"Website Maintenance",short:"Ongoing updates, backups, monitoring, and support after launch.",benefit:"Keep your website dependable and current.",icon:"ShieldCheck",features:["Updates and backups","Uptime monitoring","Content support","Priority troubleshooting"]},
 {slug:"ai-chatbots",title:"AI Chatbots",short:"Helpful conversational tools for common questions, lead capture, and routing.",benefit:"Make customer support easier without adding friction.",icon:"Bot",features:["FAQ assistance","Lead qualification","Human handoff","Knowledge-base setup"]},
 {slug:"crm-integration",title:"CRM Integration",short:"Connect website inquiries to the systems your team uses to manage relationships.",benefit:"Reduce missed leads and manual entry.",icon:"Users",features:["Lead routing","Pipeline setup","Form integration","Workflow mapping"]},
 {slug:"business-automation",title:"Business Automation",short:"Streamline repetitive digital tasks with practical, low-risk automation.",benefit:"Save time and improve consistency.",icon:"Workflow",features:["Process mapping","Notification workflows","Data handoffs","Automation documentation"]},
 {slug:"analytics-dashboards",title:"Analytics Dashboards",short:"Clear dashboards that turn website and business data into useful decisions.",benefit:"Understand what is working and what needs attention.",icon:"BarChart3",features:["KPI definition","Dashboard design","Data integration","Action-focused reporting"]}
];
export const industries: Industry[] = [
  {
    slug: "restaurants",
    title: "Restaurants & Cafés",
    description:
      "Modern websites, digital menus, reservations, and local SEO that help attract more customers.",
    icon: "UtensilsCrossed",
    href: "/industries/restaurants",
    pain:
      "Menus, reservations, hours, and local discovery are often scattered.",
    features: [
      "Mobile menu",
      "Reservation links",
      "Location and hours",
      "Local SEO",
    ],
  },
  {
    slug: "retail",
    title: "Retail Stores",
    description:
      "Professional websites and e-commerce experiences that showcase products and increase sales.",
    icon: "ShoppingBag",
    href: "/industries/retail",
    pain:
      "Products may be difficult to browse before a customer visits.",
    features: [
      "Product showcase",
      "Store information",
      "E-commerce readiness",
      "Promotions",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Dental",
    description:
      "Professional healthcare websites with appointment requests and patient-friendly information.",
    icon: "Stethoscope",
    href: "/industries/healthcare",
    pain:
      "Patients need trustworthy information and clear appointment paths.",
    features: [
      "Service pages",
      "Appointment requests",
      "Accessible design",
      "Practice information",
    ],
  },
  {
    slug: "salons-spas",
    title: "Salons & Spas",
    description:
      "Elegant booking websites that highlight services, stylists, and customer reviews.",
    icon: "Scissors",
    href: "/industries/salons-spas",
    pain:
      "Social media alone can make services, pricing, and booking hard to navigate.",
    features: [
      "Service menu",
      "Online booking",
      "Gallery",
      "Reviews integration",
    ],
  },
  {
    slug: "fitness",
    title: "Fitness Businesses",
    description:
      "Websites for gyms and fitness studios with memberships, schedules, and lead generation.",
    icon: "Dumbbell",
    href: "/industries/fitness",
    pain:
      "Schedules, memberships, and programs need a clear digital home.",
    features: [
      "Class schedules",
      "Membership inquiries",
      "Trainer profiles",
      "Lead capture",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description:
      "Professional websites that generate qualified leads and showcase properties beautifully.",
    icon: "Building2",
    href: "/industries/real-estate",
    pain:
      "Agents need a credible personal brand and organized lead flow.",
    features: [
      "Property highlights",
      "Lead forms",
      "Neighborhood pages",
      "CRM readiness",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    description:
      "Modern websites for consultants, accountants, lawyers, and other service professionals.",
    icon: "Scale",
    href: "/industries/professional-services",
    pain:
      "Expertise can be difficult to communicate without a structured website.",
    features: [
      "Authority content",
      "Consultation forms",
      "Case-study structure",
      "Trust signals",
    ],
  },
  {
    slug: "home-services",
    title: "Contractors & Home Services",
    description:
      "Lead-focused websites that make it easy for homeowners to request quotes and contact your business.",
    icon: "Hammer",
    href: "/industries/home-services",
    pain:
      "Customers need quick proof of service quality, coverage area, and availability.",
    features: [
      "Quote requests",
      "Service-area pages",
      "Project gallery",
      "Call-first mobile UX",
    ],
  },
];
export const caseStudies = [
 {slug:"harbor-table",title:"Harbor Table Restaurant",industry:"Restaurant",summary:"A concept website focused on menus, reservations, and local credibility.",challenge:"The fictional restaurant depended on social profiles and phone calls for basic information.",solution:"A mobile-first experience with clear menus, reservation actions, location details, and event promotion.",features:["Responsive menu","Reservation CTA","Local information","Seasonal events"],stack:["Next.js","TypeScript","Tailwind CSS"],accent:"from-orange-100 to-amber-50"},
 {slug:"bright-smile-dental",title:"Bright Smile Dental",industry:"Dental Clinic",summary:"A concept practice website designed to reduce uncertainty and simplify appointment requests.",challenge:"Prospective patients needed a clearer understanding of services, insurance, and what to expect.",solution:"A calm, accessible site with service explanations, trust-building content, and a guided appointment form.",features:["Service education","Appointment intake","Accessible layout","FAQ structure"],stack:["Next.js","React Hook Form","Zod"],accent:"from-cyan-100 to-blue-50"},
 {slug:"luna-salon",title:"Luna Salon & Spa",industry:"Salon",summary:"A concept booking-focused website that organizes services and strengthens brand presentation.",challenge:"Service details, stylist information, and booking links were spread across multiple channels.",solution:"A refined visual system with categorized services, stylist profiles, and a direct booking path.",features:["Service catalog","Booking flow","Gallery system","Team profiles"],stack:["Next.js","Motion","Tailwind CSS"],accent:"from-pink-100 to-violet-50"}
];
export const posts = [
  {
    slug: "professional-website",

    title: "Why Every Small Business Needs a Professional Website",

    excerpt:
      "A practical explanation of credibility, control, discoverability, and customer convenience.",

    date: "July 2026",

    category: "Web Design",

    author: "Digital Growth Studio",

    readingTime: "6 min read",

    featured: true,

    content: [
      "A professional website is often the first place potential customers learn about your business. It helps establish credibility by presenting clear information, consistent branding, and an easy way to get in touch.",

      "Unlike social media, your website is fully under your control. You decide how information is organized, how your brand is presented, and how visitors move through your services.",

      "A modern website should load quickly, work on all devices, and guide visitors toward meaningful actions such as requesting a quote, booking an appointment, or making a purchase.",

      "Investing in a professional website is one of the most effective long-term decisions a small business can make because it supports marketing, customer service, and business growth simultaneously."
    ],
  },

  {
    slug: "website-vs-social",

    title: "Website vs. Social Media: Why Businesses Need Both",

    excerpt:
      "Understand the different roles owned websites and social platforms play in growth.",

    date: "July 2026",

    category: "Marketing",

    author: "Digital Growth Studio",

    readingTime: "5 min read",

    featured: false,

    content: [
      "Social media helps businesses reach new audiences and build community, while a website provides a permanent home for accurate business information and conversions.",

      "The strongest digital strategies combine both platforms rather than treating them as competitors.",

      "A website acts as the central destination where customers can learn about services, pricing, testimonials, and contact information."
    ],
  },

  {
    slug: "local-seo",

    title: "How Local SEO Helps Small Businesses",

    excerpt:
      "The basics of helping nearby customers find accurate, useful business information.",

    date: "July 2026",

    category: "SEO",

    author: "Digital Growth Studio",

    readingTime: "5 min read",

    featured: false,

    content: [
      "Local SEO improves visibility when nearby customers search for products and services.",

      "Accurate business information, reviews, location pages, and technical optimization all contribute to stronger local rankings.",

      "Businesses that invest in local SEO are more likely to appear in Google Maps and local search results."
    ],
  },

  {
    slug: "website-mistakes",

    title: "Common Website Mistakes That Cost Customers",

    excerpt:
      "Avoid unclear messaging, slow mobile pages, hidden contact details, and weak calls to action.",

    date: "July 2026",

    category: "Web Design",

    author: "Digital Growth Studio",

    readingTime: "7 min read",

    featured: false,

    content: [
      "Many websites lose customers because visitors cannot quickly understand what the business offers.",

      "Improving page speed, simplifying navigation, and making contact options obvious can significantly improve conversions.",

      "Regular usability reviews help identify friction before it affects business growth."
    ],
  },

  {
    slug: "ai-small-business",

    title: "Practical Uses of AI for Small Businesses",

    excerpt:
      "Low-risk ways to use AI for FAQs, drafting, organization, and customer support.",

    date: "July 2026",

    category: "AI",

    author: "Digital Growth Studio",

    readingTime: "6 min read",

    featured: false,

    content: [
      "AI can automate repetitive tasks such as answering common questions, organizing information, and generating first drafts of content.",

      "Businesses should focus on practical improvements rather than adopting AI simply because it is popular.",

      "Successful AI adoption starts with solving real business problems."
    ],
  },

  {
    slug: "website-package",

    title: "How to Choose the Right Website Package",

    excerpt:
      "Match your website investment to your goals, content needs, and operational complexity.",

      date: "July 2026",

      category: "Business",

      author: "Digital Growth Studio",

      readingTime: "5 min read",

      featured: false,

      content: [
        "The best website package depends on your business goals rather than the number of pages.",

        "Growing businesses often benefit from scalable solutions that can evolve over time.",

        "Choosing the right foundation today reduces redesign costs in the future."
      ],
  },
];
