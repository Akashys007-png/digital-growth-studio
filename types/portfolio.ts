import type { LucideIcon } from "lucide-react";

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  previewType: string;
  results: string[];
  technologies: string[];
  icon: LucideIcon;
}