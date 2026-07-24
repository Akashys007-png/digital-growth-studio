export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProject {
  title: string;
  description: string;
  href: string;
}

export interface ServiceTechnology {
  name: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  badge: string;
  headline: string;
  highlight: string;
  description: string;
  features: ServiceFeature[];
  process: ServiceProcessStep[];
  technologies: ServiceTechnology[];
  benefits: ServiceBenefit[];
  project: ServiceProject;
  faqs: ServiceFAQ[];
  ctaTitle: string;
  ctaDescription: string;
}

export const services: Service[] = [
  {
    slug: "web-development",

    name: "Website Development",

    badge: "Website Development",

    headline: "Professional Websites That",

    highlight: "Grow Your Business",

    description:
      "We build fast, responsive, and SEO-friendly websites that help businesses establish credibility, attract customers, and increase conversions.",

    features: [
      {
        title: "Responsive Design",
        description:
          "Your website will look and perform beautifully across desktops, tablets, and mobile devices.",
      },
      {
        title: "SEO-Ready Structure",
        description:
          "Your website will be built using modern technical SEO practices that support stronger search visibility.",
      },
      {
        title: "Fast Performance",
        description:
          "We optimize loading speed, Core Web Vitals, images, and code to deliver a smooth user experience.",
      },
      {
        title: "Conversion-Focused Pages",
        description:
          "Each page is structured to guide visitors toward contacting, booking, purchasing, or taking another valuable action.",
      },
      {
        title: "Easy Content Management",
        description:
          "Your website will use a flexible structure that makes future content updates and expansion easier.",
      },
      {
        title: "Secure Deployment",
        description:
          "We follow modern security and deployment practices to create a stable and dependable online presence.",
      },
    ],

    process: [
      {
        title: "Discovery",
        description:
          "We learn about your business, audience, competitors, goals, and current digital challenges.",
      },
      {
        title: "Planning",
        description:
          "We define the website structure, user journey, content requirements, and technical approach.",
      },
      {
        title: "Design",
        description:
          "We create a professional visual direction that matches your brand and supports your business objectives.",
      },
      {
        title: "Development",
        description:
          "We build the website using modern, scalable, and performance-focused technologies.",
      },
      {
        title: "Testing",
        description:
          "We test responsiveness, accessibility, browser compatibility, forms, links, and performance.",
      },
      {
        title: "Launch and Support",
        description:
          "We deploy your website and provide support for updates, maintenance, and future improvements.",
      },
    ],

    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "WordPress" },
      { name: "Vercel" },
      { name: "Google Analytics" },
    ],

    benefits: [
      {
        title: "Generate More Leads",
        description:
          "Turn more visitors into customers through clear messaging, strong calls to action, and optimized user journeys.",
      },
      {
        title: "Improve Search Visibility",
        description:
          "Build a strong technical foundation that helps search engines understand and rank your website.",
      },
      {
        title: "Build Customer Trust",
        description:
          "Create a polished and professional online presence that strengthens your business credibility.",
      },
      {
        title: "Deliver a Better Experience",
        description:
          "Give customers a fast, accessible, and mobile-friendly experience across every device.",
      },
    ],

    project: {
      title: "Small-Business Website Redesign",
      description:
        "A complete website redesign focused on improving usability, mobile responsiveness, performance, local SEO, and lead generation.",
      href: "/portfolio",
    },

    faqs: [
      {
        question: "How long does it take to build a website?",
        answer:
          "Most small-business website projects take approximately three to eight weeks. The final timeline depends on the number of pages, required features, content readiness, and project complexity.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. We can modernize your existing website while improving its design, speed, mobile experience, search visibility, and conversion potential.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Yes. Every website we build is responsive and tested across common desktop, tablet, and mobile screen sizes.",
      },
      {
        question: "Can I update the website after launch?",
        answer:
          "Yes. We can provide an easy-to-manage content system or continue supporting you through an ongoing maintenance plan.",
      },
      {
        question: "Do you provide website hosting?",
        answer:
          "We can help you select, configure, and manage an appropriate hosting or deployment solution based on your website requirements.",
      },
      {
        question: "Do you provide ongoing support?",
        answer:
          "Yes. We offer website maintenance, content updates, technical monitoring, security improvements, and ongoing optimization.",
      },
    ],

    ctaTitle: "Ready to Build Your New Website?",

    ctaDescription:
      "Let us create a professional website that strengthens your brand, attracts customers, and supports long-term business growth.",
  },

  {
    slug: "ui-ux-design",

    name: "UI/UX Design",

    badge: "UI/UX Design",

    headline: "Digital Experiences People",

    highlight: "Love to Use",

    description:
      "We design intuitive, accessible, and visually engaging digital experiences that make it easier for customers to understand your business and take action.",

    features: [
      {
        title: "User Research",
        description:
          "We study your audience, goals, challenges, and expectations to make informed design decisions.",
      },
      {
        title: "Information Architecture",
        description:
          "We organize pages, content, and navigation so users can find what they need quickly.",
      },
      {
        title: "Wireframes",
        description:
          "We create structured page layouts that define content placement and user flow before visual design begins.",
      },
      {
        title: "High-Fidelity Design",
        description:
          "We transform approved wireframes into polished, brand-aligned interfaces.",
      },
      {
        title: "Interactive Prototypes",
        description:
          "We create clickable prototypes that demonstrate how the final digital experience will work.",
      },
      {
        title: "Responsive Design Systems",
        description:
          "We create reusable visual patterns that deliver a consistent experience across devices and pages.",
      },
    ],

    process: [
      {
        title: "Research",
        description:
          "We identify user needs, business goals, competitors, and opportunities for improvement.",
      },
      {
        title: "User Flows",
        description:
          "We map the steps users take while navigating the website, application, or digital product.",
      },
      {
        title: "Wireframing",
        description:
          "We create low-fidelity layouts to establish structure, hierarchy, and functionality.",
      },
      {
        title: "Visual Design",
        description:
          "We develop polished interfaces using your brand identity, typography, colors, and visual style.",
      },
      {
        title: "Prototyping",
        description:
          "We build interactive prototypes to demonstrate key interactions and validate the experience.",
      },
      {
        title: "Design Handoff",
        description:
          "We prepare organized design files, reusable components, specifications, and assets for development.",
      },
    ],

    technologies: [
      { name: "Figma" },
      { name: "FigJam" },
      { name: "Adobe XD" },
      { name: "Photoshop" },
      { name: "Illustrator" },
      { name: "Miro" },
      { name: "Notion" },
      { name: "Maze" },
    ],

    benefits: [
      {
        title: "Improve User Satisfaction",
        description:
          "Make your digital experience easier to understand, navigate, and use.",
      },
      {
        title: "Increase Conversions",
        description:
          "Reduce friction and guide users toward completing important actions.",
      },
      {
        title: "Strengthen Your Brand",
        description:
          "Create a consistent visual experience that reflects the quality and personality of your business.",
      },
      {
        title: "Reduce Development Rework",
        description:
          "Validate structure and interactions before development begins, saving time and reducing costly revisions.",
      },
    ],

    project: {
      title: "Business Dashboard UX Redesign",
      description:
        "A user-centered dashboard redesign that simplified navigation, clarified key metrics, and improved usability across desktop and mobile devices.",
      href: "/portfolio",
    },

    faqs: [
      {
        question: "What is the difference between UI and UX design?",
        answer:
          "UX design focuses on how a digital product works and how easily users can complete tasks. UI design focuses on its visual appearance, including typography, colors, spacing, buttons, and other interface elements.",
      },
      {
        question: "Can you redesign an existing website or application?",
        answer:
          "Yes. We can evaluate your current experience, identify usability issues, and create a modern redesign that better supports users and business goals.",
      },
      {
        question: "Will I receive the original design files?",
        answer:
          "Yes. Final design files, prototypes, reusable components, and approved visual assets can be included in the project handoff.",
      },
      {
        question: "Do you create mobile application designs?",
        answer:
          "Yes. We can design responsive websites, web applications, dashboards, portals, and mobile application interfaces.",
      },
      {
        question: "Can you follow our existing brand guidelines?",
        answer:
          "Yes. We can work within your current brand system or help extend it with additional colors, typography, components, and digital usage guidelines.",
      },
    ],

    ctaTitle: "Ready to Improve Your User Experience?",

    ctaDescription:
      "Let us design an intuitive and professional digital experience that helps your customers achieve their goals.",
  },

  {
    slug: "ecommerce-development",

    name: "E-Commerce Development",

    badge: "E-Commerce Development",

    headline: "Powerful Online Stores That",

    highlight: "Convert Visitors Into Customers",

    description:
      "We create secure, mobile-friendly, and conversion-focused online stores that make it easier to sell products, manage operations, and grow revenue.",

    features: [
      {
        title: "Custom Storefront Design",
        description:
          "Create a professional shopping experience that matches your brand and product offering.",
      },
      {
        title: "Product Management",
        description:
          "Organize products, categories, variants, pricing, inventory, images, and descriptions efficiently.",
      },
      {
        title: "Secure Payment Integration",
        description:
          "Accept payments through trusted platforms such as Stripe, PayPal, Shopify Payments, and other supported providers.",
      },
      {
        title: "Shopping Cart and Checkout",
        description:
          "Provide customers with a clear, reliable, and easy-to-use purchasing experience.",
      },
      {
        title: "Order and Inventory Management",
        description:
          "Track orders, customer details, product availability, fulfillment, and transaction history.",
      },
      {
        title: "Sales Analytics",
        description:
          "Measure revenue, product performance, conversion rates, order values, and customer behavior.",
      },
    ],

    process: [
      {
        title: "Business Discovery",
        description:
          "We learn about your products, customers, operations, fulfillment process, and sales goals.",
      },
      {
        title: "Platform Selection",
        description:
          "We recommend the most appropriate platform and technical approach for your business.",
      },
      {
        title: "Store Design",
        description:
          "We design your storefront, product pages, cart, checkout process, and customer experience.",
      },
      {
        title: "Development and Integration",
        description:
          "We configure products, payments, shipping, taxes, analytics, and required third-party tools.",
      },
      {
        title: "Testing",
        description:
          "We test purchasing, payments, inventory, notifications, responsiveness, and order workflows.",
      },
      {
        title: "Launch and Optimization",
        description:
          "We launch your online store and help improve performance based on customer and sales data.",
      },
    ],

    technologies: [
      { name: "Shopify" },
      { name: "WooCommerce" },
      { name: "Next.js" },
      { name: "Stripe" },
      { name: "PayPal" },
      { name: "Square" },
      { name: "Google Analytics" },
      { name: "Meta Pixel" },
    ],

    benefits: [
      {
        title: "Increase Online Sales",
        description:
          "Give customers a simple and trustworthy way to explore products and complete purchases.",
      },
      {
        title: "Reach More Customers",
        description:
          "Sell beyond your physical location and make products available around the clock.",
      },
      {
        title: "Simplify Store Management",
        description:
          "Manage products, orders, customers, inventory, discounts, and reports from one system.",
      },
      {
        title: "Understand Customer Behavior",
        description:
          "Use sales and website analytics to identify popular products, improve marketing, and increase conversion rates.",
      },
    ],

    project: {
      title: "Retail E-Commerce Store",
      description:
        "A mobile-first online store featuring product categories, secure checkout, inventory management, promotional offers, and sales analytics.",
      href: "/portfolio",
    },

    faqs: [
      {
        question: "Which e-commerce platform should I use?",
        answer:
          "The best platform depends on your product catalog, budget, customization requirements, internal resources, and growth plans. We can help evaluate options such as Shopify, WooCommerce, or a custom solution.",
      },
      {
        question: "Can you redesign or migrate my existing online store?",
        answer:
          "Yes. We can redesign your current storefront or migrate products, customers, and other supported data to a more suitable platform.",
      },
      {
        question: "Can you integrate payment gateways?",
        answer:
          "Yes. We can configure supported payment services such as Stripe, PayPal, Shopify Payments, Square, and other providers.",
      },
      {
        question: "Will the store work on mobile devices?",
        answer:
          "Yes. Every store we build is designed and tested for desktop, tablet, and mobile shopping.",
      },
      {
        question: "Can you connect shipping and tax tools?",
        answer:
          "Yes. We can configure supported shipping rates, fulfillment options, tax settings, and third-party integrations based on your requirements.",
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. We can support product updates, promotions, technical maintenance, performance improvements, and conversion optimization.",
      },
    ],

    ctaTitle: "Ready to Start Selling Online?",

    ctaDescription:
      "Let us build an online store that makes shopping easier for your customers and management easier for your team.",
  },

  {
    slug: "seo-optimization",

    name: "SEO Optimization",

    badge: "SEO Optimization",

    headline: "Improve Your Visibility and",

    highlight: "Reach More Customers",

    description:
      "We improve the technical health, content structure, local presence, and search relevance of your website to help potential customers discover your business.",

    features: [
      {
        title: "Technical SEO Audit",
        description:
          "Identify indexing, crawling, performance, mobile usability, metadata, and site-structure issues.",
      },
      {
        title: "Keyword Research",
        description:
          "Discover relevant search terms based on your services, customers, competition, and geographic market.",
      },
      {
        title: "On-Page Optimization",
        description:
          "Improve page titles, descriptions, headings, content structure, internal links, and image information.",
      },
      {
        title: "Local SEO",
        description:
          "Strengthen your visibility for location-based searches and improve your local business presence.",
      },
      {
        title: "Content Recommendations",
        description:
          "Identify useful service pages, landing pages, articles, and questions your website should address.",
      },
      {
        title: "Performance Reporting",
        description:
          "Track rankings, impressions, clicks, engagement, leads, and other meaningful search metrics.",
      },
    ],

    process: [
      {
        title: "SEO Audit",
        description:
          "We evaluate your website, competitors, search visibility, content, and technical condition.",
      },
      {
        title: "Research",
        description:
          "We identify relevant keywords, customer search behavior, and realistic opportunities.",
      },
      {
        title: "Strategy",
        description:
          "We create a prioritized SEO plan based on business value, effort, and potential impact.",
      },
      {
        title: "Optimization",
        description:
          "We improve technical settings, page structure, metadata, content, internal links, and local signals.",
      },
      {
        title: "Measurement",
        description:
          "We monitor search performance, traffic quality, conversions, and implementation results.",
      },
      {
        title: "Continuous Improvement",
        description:
          "We refine the strategy as search behavior, competition, content, and business priorities change.",
      },
    ],

    technologies: [
      { name: "Google Search Console" },
      { name: "Google Analytics" },
      { name: "Google Business Profile" },
      { name: "PageSpeed Insights" },
      { name: "Lighthouse" },
      { name: "Screaming Frog" },
      { name: "Ahrefs" },
      { name: "Semrush" },
    ],

    benefits: [
      {
        title: "Increase Organic Traffic",
        description:
          "Help more potential customers discover your website through relevant search results.",
      },
      {
        title: "Attract Better Leads",
        description:
          "Target searches connected to your services, products, locations, and customer needs.",
      },
      {
        title: "Improve Website Quality",
        description:
          "Resolve technical and content issues that affect usability, performance, and search visibility.",
      },
      {
        title: "Build Long-Term Visibility",
        description:
          "Develop a sustainable search presence that supports your business beyond short-term advertising campaigns.",
      },
    ],

    project: {
      title: "Local Business SEO Growth",
      description:
        "A complete local SEO improvement project involving technical optimization, service-page updates, keyword research, and performance reporting.",
      href: "/portfolio",
    },

    faqs: [
      {
        question: "How long does SEO take to produce results?",
        answer:
          "SEO is a long-term process. Some technical improvements may be visible quickly, while meaningful growth in rankings, traffic, and leads often develops over several months.",
      },
      {
        question: "Can you guarantee the first position on Google?",
        answer:
          "No reputable SEO provider can guarantee a specific ranking. Search results depend on competition, website quality, relevance, location, search behavior, and search-engine algorithms.",
      },
      {
        question: "Do you provide local SEO services?",
        answer:
          "Yes. We can improve location-focused pages, local business information, Google Business Profile consistency, and other factors that support local visibility.",
      },
      {
        question: "Do I need to create new website content?",
        answer:
          "In many cases, new or improved content is necessary to address customer questions, explain services, target relevant topics, and compete effectively in search results.",
      },
      {
        question: "Will you provide SEO reports?",
        answer:
          "Yes. Reporting can include visibility, rankings, clicks, impressions, website traffic, conversions, technical issues, and completed work.",
      },
      {
        question: "Can SEO be added to my existing website?",
        answer:
          "Yes. We can audit and optimize an existing website without requiring a complete redesign, although major technical limitations may sometimes make redevelopment beneficial.",
      },
    ],

    ctaTitle: "Ready to Improve Your Search Visibility?",

    ctaDescription:
      "Let us build an SEO strategy that helps the right customers discover your business online.",
  },

  {
    slug: "ai-automation",

    name: "AI Automation",

    badge: "AI Automation",

    headline: "Automate Repetitive Work With",

    highlight: "Practical AI Solutions",

    description:
      "We help businesses reduce repetitive manual work, improve response times, organize information, and create more efficient workflows using AI and automation.",

    features: [
      {
        title: "AI Chatbots",
        description:
          "Provide customers or employees with immediate answers based on approved business information.",
      },
      {
        title: "Workflow Automation",
        description:
          "Connect tools and automate repetitive actions such as notifications, data entry, approvals, and follow-ups.",
      },
      {
        title: "Document Processing",
        description:
          "Extract, categorize, summarize, and organize information from documents and forms.",
      },
      {
        title: "Lead Management Automation",
        description:
          "Capture inquiries, organize prospect information, notify teams, and support timely follow-up.",
      },
      {
        title: "Reporting Automation",
        description:
          "Reduce manual report preparation by collecting, transforming, and distributing business information automatically.",
      },
      {
        title: "Custom AI Assistants",
        description:
          "Create specialized assistants that support internal knowledge, customer service, content, or operational tasks.",
      },
    ],

    process: [
      {
        title: "Workflow Assessment",
        description:
          "We identify repetitive, time-consuming, and error-prone tasks that may benefit from automation.",
      },
      {
        title: "Solution Design",
        description:
          "We define the workflow, data sources, integrations, human approvals, and expected outcomes.",
      },
      {
        title: "Prototype",
        description:
          "We build and test a controlled version of the automation before wider implementation.",
      },
      {
        title: "Implementation",
        description:
          "We connect approved tools, configure logic, and deploy the solution into the selected workflow.",
      },
      {
        title: "Testing and Training",
        description:
          "We validate output quality, permissions, failure handling, and user understanding.",
      },
      {
        title: "Monitoring and Improvement",
        description:
          "We evaluate performance and refine the workflow as business needs and usage patterns evolve.",
      },
    ],

    technologies: [
      { name: "OpenAI" },
      { name: "Python" },
      { name: "Zapier" },
      { name: "Make" },
      { name: "n8n" },
      { name: "Microsoft Power Automate" },
      { name: "Google Workspace" },
      { name: "REST APIs" },
    ],

    benefits: [
      {
        title: "Save Employee Time",
        description:
          "Reduce repetitive manual tasks so your team can focus on customers, decisions, and higher-value work.",
      },
      {
        title: "Improve Response Times",
        description:
          "Automatically route information, answer common questions, and trigger timely follow-up actions.",
      },
      {
        title: "Reduce Manual Errors",
        description:
          "Create consistent workflows for repetitive data movement, notifications, and processing tasks.",
      },
      {
        title: "Scale Operations",
        description:
          "Handle greater volumes of inquiries, documents, reports, and routine processes without proportional increases in manual effort.",
      },
    ],

    project: {
      title: "AI Customer Support Assistant",
      description:
        "A business knowledge assistant designed to answer common customer questions, collect lead information, and route complex requests to the appropriate team member.",
      href: "/portfolio",
    },

    faqs: [
      {
        question: "Is AI automation suitable for a small business?",
        answer:
          "Yes. Small businesses can benefit from focused automations involving customer inquiries, appointment follow-ups, reporting, document handling, and repetitive administrative tasks.",
      },
      {
        question: "Can AI connect with my existing tools?",
        answer:
          "Often, yes. Integration depends on whether your current software offers supported connectors, APIs, exports, webhooks, or other integration methods.",
      },
      {
        question: "Will AI completely replace employees?",
        answer:
          "Our goal is to support employees by reducing repetitive work and improving access to information. Important decisions, approvals, exceptions, and sensitive interactions should continue to include appropriate human oversight.",
      },
      {
        question: "How do you protect business information?",
        answer:
          "We design solutions around appropriate access controls, limited data collection, secure integrations, approved providers, and clear rules for how information may be used.",
      },
      {
        question: "Can you automate a completely custom process?",
        answer:
          "Potentially. We begin by reviewing the current workflow, systems, data, risks, and desired outcome to determine what can be automated reliably.",
      },
      {
        question: "Do AI systems require ongoing maintenance?",
        answer:
          "Yes. Workflows, integrations, business information, permissions, and AI behavior should be monitored and updated over time.",
      },
    ],

    ctaTitle: "Ready to Automate Repetitive Work?",

    ctaDescription:
      "Let us identify practical automation opportunities that save time and make your business more efficient.",
  },

  {
    slug: "analytics-business-intelligence",

    name: "Analytics & Business Intelligence",

    badge: "Analytics & Business Intelligence",

    headline: "Turn Business Data Into",

    highlight: "Clear Decisions",

    description:
      "We build dashboards, reports, and analytical solutions that help businesses understand performance, identify opportunities, and make better-informed decisions.",

    features: [
      {
        title: "Interactive Dashboards",
        description:
          "Monitor important business metrics through clear and interactive visual reports.",
      },
      {
        title: "KPI Development",
        description:
          "Define meaningful performance indicators connected to your business goals and decision-making needs.",
      },
      {
        title: "Data Integration",
        description:
          "Combine information from spreadsheets, databases, business systems, and supported cloud platforms.",
      },
      {
        title: "Automated Reporting",
        description:
          "Reduce repetitive report preparation through scheduled data refreshes and reusable reporting processes.",
      },
      {
        title: "Data Analysis",
        description:
          "Explore trends, customer behavior, operational performance, financial outcomes, and other business questions.",
      },
      {
        title: "Data Quality Improvement",
        description:
          "Identify missing, duplicated, inconsistent, and inaccurate information that affects reporting reliability.",
      },
    ],

    process: [
      {
        title: "Business Understanding",
        description:
          "We identify the decisions, challenges, users, and questions the analytics solution must support.",
      },
      {
        title: "Data Assessment",
        description:
          "We review available data sources, definitions, formats, quality issues, and access requirements.",
      },
      {
        title: "Data Preparation",
        description:
          "We clean, transform, combine, and model data for accurate and maintainable reporting.",
      },
      {
        title: "Dashboard Development",
        description:
          "We create visual reports, filters, calculations, KPIs, and drill-down capabilities.",
      },
      {
        title: "Validation",
        description:
          "We compare results with source systems and confirm calculations with business stakeholders.",
      },
      {
        title: "Deployment and Training",
        description:
          "We publish the solution, document important definitions, and show users how to interpret and maintain it.",
      },
    ],

    technologies: [
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "SQL" },
      { name: "Python" },
      { name: "Microsoft Excel" },
      { name: "Google Sheets" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
    ],

    benefits: [
      {
        title: "Make Faster Decisions",
        description:
          "Access important business information without manually combining multiple reports and spreadsheets.",
      },
      {
        title: "Identify Trends",
        description:
          "Understand changes in revenue, customers, products, operations, marketing, and other performance areas.",
      },
      {
        title: "Improve Reporting Accuracy",
        description:
          "Use consistent calculations, definitions, and validated data sources across recurring reports.",
      },
      {
        title: "Increase Accountability",
        description:
          "Give teams clear visibility into goals, results, progress, and areas that require attention.",
      },
    ],

    project: {
      title: "Executive Business Intelligence Dashboard",
      description:
        "An interactive dashboard combining sales, customer, product, and operational data to provide leadership with a unified view of business performance.",
      href: "/portfolio",
    },

    faqs: [
      {
        question: "What data sources can you connect?",
        answer:
          "Depending on access and compatibility, we can work with spreadsheets, CSV files, SQL databases, cloud platforms, CRM systems, accounting exports, e-commerce platforms, and other supported sources.",
      },
      {
        question: "Which dashboard platform should I use?",
        answer:
          "The right platform depends on your current systems, users, budget, sharing requirements, data volume, and internal technical resources. We can help evaluate Power BI, Tableau, Excel, or another appropriate option.",
      },
      {
        question: "Can dashboards update automatically?",
        answer:
          "Yes, when the selected data source, platform, permissions, and infrastructure support scheduled or live refreshes.",
      },
      {
        question: "Can you clean our existing data?",
        answer:
          "Yes. Data preparation may include removing duplicates, handling missing values, standardizing formats, validating calculations, and combining multiple sources.",
      },
      {
        question: "Do you provide dashboard training?",
        answer:
          "Yes. We can provide documentation and training covering filters, navigation, KPI definitions, interpretation, refreshing, and common maintenance tasks.",
      },
      {
        question: "Can you improve an existing dashboard?",
        answer:
          "Yes. We can review its layout, calculations, data model, performance, usability, and alignment with business decisions.",
      },
    ],

    ctaTitle: "Ready to Make Better Use of Your Data?",

    ctaDescription:
      "Let us transform your business information into clear dashboards and actionable insights.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}