export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  featured: boolean;
  coverImage: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-small-businesses-need-modern-websites",

    title:
      "Why Every Small Business Needs a Modern Website in 2026",

    excerpt:
      "Discover how a professionally designed website helps small businesses attract more customers, build credibility, and increase conversions.",

    category: "Web Design",

    author: "Digital Growth Studio",

    publishedAt: "July 20, 2026",

    readingTime: "6 min read",

    featured: true,

    coverImage: "/images/blog/website-growth.svg",

    content: [
      "A modern website is often the first interaction a potential customer has with a business. Before visiting a physical location or making a phone call, customers usually search online to learn about the company, its services, reputation, and contact information.",

      "A professional website helps create trust by presenting clear information, consistent branding, customer testimonials, and easy ways to contact the business. An outdated or confusing website can make visitors question whether the company is active, reliable, or capable of meeting their needs.",

      "Modern websites are also designed to work properly across phones, tablets, and desktop computers. Since many customers search for local businesses using mobile devices, responsive design is essential for creating a smooth and accessible experience.",

      "Website performance also has a direct effect on customer behavior. Pages that load slowly can cause visitors to leave before reading the content or completing an action. Optimizing images, code, hosting, and page structure can improve both user experience and search visibility.",

      "A strong website should guide visitors toward a specific next step. Depending on the business, this may include booking an appointment, requesting a quote, purchasing a product, calling the company, or visiting a physical location.",

      "For small businesses, a modern website is not simply an online brochure. It is a long-term marketing and sales tool that can improve credibility, generate leads, support customer service, and help the business compete more effectively."
    ],
  },

  {
    slug: "seo-basics-for-local-businesses",

    title:
      "Local SEO Basics Every Business Owner Should Know",

    excerpt:
      "Learn simple SEO strategies that help your business appear in local search results and Google Maps.",

    category: "SEO",

    author: "Digital Growth Studio",

    publishedAt: "July 15, 2026",

    readingTime: "5 min read",

    featured: false,

    coverImage: "/images/blog/local-seo.svg",

    content: [
      "Local search engine optimization helps businesses appear when nearby customers search for products or services. It is especially important for restaurants, salons, clinics, contractors, retail stores, law firms, and other businesses that serve a specific geographic area.",

      "One of the most important steps is maintaining an accurate business profile across online platforms. The business name, address, phone number, opening hours, website, and service information should remain consistent wherever they appear.",

      "Business owners should also clearly describe their services and locations on their websites. Dedicated service pages and location-based content help search engines understand what the company offers and which customers it serves.",

      "Customer reviews are another major part of local visibility. Positive, genuine reviews can improve trust and influence purchasing decisions. Businesses should make it easy for satisfied customers to leave feedback and should respond professionally to both positive and negative reviews.",

      "Local SEO is not a one-time activity. Businesses should regularly update their information, publish useful content, monitor reviews, improve website performance, and ensure that customers can easily contact or visit them."
    ],
  },

  {
    slug: "website-speed-conversions",

    title:
      "How Website Speed Affects Sales and Conversions",

    excerpt:
      "A slow website can cost you customers. Learn how performance directly impacts revenue and user experience.",

    category: "Performance",

    author: "Digital Growth Studio",

    publishedAt: "July 10, 2026",

    readingTime: "4 min read",

    featured: false,

    coverImage: "/images/blog/performance.svg",

    content: [
      "Website speed plays an important role in how visitors experience a business online. When a page takes too long to load, users may leave before they can understand the company's services, products, or value.",

      "Slow performance can be caused by oversized images, unnecessary scripts, poor hosting, inefficient code, excessive animations, or too many external services. These problems are especially noticeable on mobile devices and slower internet connections.",

      "Performance affects more than convenience. A faster website can help visitors move through pages more easily, complete forms, schedule appointments, view products, and make purchasing decisions with less frustration.",

      "Improving website speed often begins with image optimization, reduced file sizes, efficient loading strategies, clean code, and reliable hosting. Developers should also test real pages instead of judging performance only by appearance.",

      "A visually attractive website is valuable, but design alone is not enough. The strongest digital experiences combine professional branding, useful content, accessibility, mobile responsiveness, and fast performance."
    ],
  },
];