export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  featured: boolean;
  buttonText: string;
}