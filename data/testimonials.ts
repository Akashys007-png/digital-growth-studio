export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  industry: string;
  image: string;
  rating: number;
  quote: string;
  result: string;
  projectType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Carter",
    role: "Owner",
    company: "Bella Vista Restaurant",
    industry: "Restaurant Concept",
    image: "/images/testimonials/avatar-1.jpg",
    rating: 5,
    quote:
      "The redesigned website concept demonstrates how a modern online experience can increase customer engagement and simplify reservations.",
    result: "+185% Potential Online Reservations",
    projectType: "Portfolio Concept",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    role: "Founder",
    company: "BrightSmile Dental",
    industry: "Healthcare Concept",
    image: "/images/testimonials/avatar-2.jpg",
    rating: 5,
    quote:
      "A clean and trustworthy patient experience with online appointment scheduling and accessibility-focused design.",
    result: "+240% Potential Appointment Requests",
    projectType: "Portfolio Concept",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Owner",
    company: "StyleCraft Salon",
    industry: "Salon Concept",
    image: "/images/testimonials/avatar-3.jpg",
    rating: 5,
    quote:
      "The booking-focused layout highlights services beautifully and creates a seamless experience for potential clients.",
    result: "+160% Potential Bookings",
    projectType: "Portfolio Concept",
  },
  {
    id: 4,
    name: "James Walker",
    role: "Broker",
    company: "Prime Realty Group",
    industry: "Real Estate Concept",
    image: "/images/testimonials/avatar-4.jpg",
    rating: 5,
    quote:
      "An elegant property showcase with lead generation features designed for modern real estate professionals.",
    result: "+310% Potential Property Inquiries",
    projectType: "Portfolio Concept",
  },
];