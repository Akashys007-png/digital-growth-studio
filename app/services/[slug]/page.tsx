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
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          {service.badge}
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          {service.headline}{" "}
          <span className="text-blue-600">
            {service.highlight}
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-600">
          {service.description}
        </p>
      </div>

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