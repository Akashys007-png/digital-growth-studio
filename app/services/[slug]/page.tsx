import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Hero from "@/components/service-detail/Hero";
import { services, getServiceBySlug } from "@/data/services";
import Features from "@/components/service-detail/Features";
import Process from "@/components/service-detail/Process";
import Technologies from "@/components/service-detail/Technologies";
import Benefits from "@/components/service-detail/Benefits";
import FeaturedProject from "@/components/service-detail/FeaturedProject";
import ServiceFAQ from "@/components/service-detail/ServiceFAQ";
import CTA from "@/components/service-detail/CTA";
import RelatedServices from "@/components/service-detail/RelatedServices";
interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} | Digital Growth Studio`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Hero service={service} />

      <Features service={service} />

      <Process service={service} />

      <Technologies service={service} />

      <Benefits service={service} />

      <FeaturedProject service={service} />
      <ServiceFAQ service={service} />
      <CTA service={service} />
      <RelatedServices service={service} />
    </main>
  );
}