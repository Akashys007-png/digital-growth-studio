import type { LucideIcon } from "lucide-react";
import {
  UtensilsCrossed,
  Stethoscope,
  Scissors,
  Home,
  Scale,
  Dumbbell,
} from "lucide-react";
import type { PortfolioProject } from "@/data/portfolioProjects";

export interface IndustryPreviewMeta {
  tint: [string, string];
  icon: LucideIcon;
  image: string;
}

export const industryPreviewMeta: Record<
  PortfolioProject["previewType"],
  IndustryPreviewMeta
> = {
  restaurant: {
    tint: ["#fb923c", "#9a3412"],
    icon: UtensilsCrossed,
    image: "/images/portfolio/restaurant.svg",
  },
  dental: {
    tint: ["#38bdf8", "#0369a1"],
    icon: Stethoscope,
    image: "/images/portfolio/dental.svg",
  },
  salon: {
    tint: ["#e879f9", "#7e22ce"],
    icon: Scissors,
    image: "/images/portfolio/salon.svg",
  },
  realestate: {
    tint: ["#2dd4bf", "#0f766e"],
    icon: Home,
    image: "/images/portfolio/realestate.svg",
  },
  law: {
    tint: ["#3b82f6", "#172554"],
    icon: Scale,
    image: "/images/portfolio/law.svg",
  },
  fitness: {
    tint: ["#ef4444", "#111827"],
    icon: Dumbbell,
    image: "/images/portfolio/fitness.svg",
  },
};
