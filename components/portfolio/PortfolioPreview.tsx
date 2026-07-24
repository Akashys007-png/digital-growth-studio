import RestaurantPreview from "./RestaurantPreview";
import DentalPreview from "./DentalPreview";
import SalonPreview from "./SalonPreview";
import RealEstatePreview from "./RealEstatePreview";
import LawPreview from "./LawPreview";
import FitnessPreview from "./FitnessPreview";

interface PortfolioPreviewProps {
  type:
    | "restaurant"
    | "dental"
    | "salon"
    | "realestate"
    | "law"
    | "fitness";
}

export default function PortfolioPreview({
  type,
}: PortfolioPreviewProps) {
  switch (type) {
    case "restaurant":
      return <RestaurantPreview />;

    case "dental":
      return <DentalPreview />;

    case "salon":
      return <SalonPreview />;

    case "realestate":
      return <RealEstatePreview />;

    case "law":
      return <LawPreview />;

    case "fitness":
      return <FitnessPreview />;

    default:
      return null;
  }
}