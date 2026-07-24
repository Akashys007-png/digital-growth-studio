export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  button: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$999",
    description:
      "Perfect for small businesses starting their online presence.",
    button: "Get Started",
    features: [
      "Up to 5 Pages",
      "Responsive Website",
      "Basic SEO",
      "Contact Form",
      "Google Maps",
      "SSL Setup",
    ],
  },
  {
    name: "Business",
    price: "$2,499",
    description:
      "Ideal for growing businesses that need more functionality.",
    popular: true,
    button: "Most Popular",
    features: [
      "Up to 12 Pages",
      "Everything in Starter",
      "Advanced SEO",
      "Blog",
      "Booking Forms",
      "Speed Optimization",
      "Analytics Setup",
    ],
  },
  {
    name: "Premium",
    price: "Custom",
    description:
      "Tailored solutions for businesses needing advanced functionality.",
    button: "Book Consultation",
    features: [
      "Unlimited Pages",
      "Custom Design",
      "CRM Integration",
      "AI Chatbot",
      "Automation",
      "E-Commerce",
      "Priority Support",
    ],
  },
];