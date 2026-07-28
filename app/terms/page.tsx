import type { Metadata } from "next";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms that govern your use of the Digital Growth Studio website and services.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        copy="Last updated July 2026. Please read these terms before using this website or engaging our services."
      />

      <section className="section">
        <div className="container legal prose">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using digitalgrowth.studio (the &quot;Site&quot;), operated
            by Digital Growth Studio (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to
            these Terms and Conditions. If you do not agree, please do not
            use the Site.
          </p>

          <h2>Use of the Website</h2>
          <p>
            You may use this Site for lawful, informational purposes,
            including learning about our services and submitting inquiries.
            You agree not to misuse the Site, interfere with its operation,
            or attempt to access it in unauthorized ways.
          </p>

          <h2>Services Described</h2>
          <p>
            Descriptions of our services, pricing, and portfolio on this
            Site are provided for general informational purposes. Portfolio
            items labeled as &quot;concept&quot; projects are demonstration designs
            created to illustrate our capabilities and do not represent
            completed client engagements unless stated otherwise. Actual
            project scope, timeline, and pricing are confirmed directly with
            each client in a separate written agreement.
          </p>

          <h2>No Guarantee of Results</h2>
          <p>
            While we aim to deliver high-quality digital solutions, we do
            not guarantee specific business outcomes, search rankings,
            traffic, or revenue results, as these depend on many factors
            outside our control. Statistics referenced in marketing
            materials are illustrative unless tied to a specific, named
            client result.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The content, design, graphics, and branding on this Site are
            owned by Digital Growth Studio or used with permission and are
            protected by applicable intellectual property laws. You may not
            copy, reproduce, or reuse this content without our prior written
            consent, except for personal, non-commercial reference.
          </p>

          <h2>Third-Party Links and Services</h2>
          <p>
            This Site may link to or rely on third-party services, including
            Calendly for scheduling and Resend for email delivery. We are
            not responsible for the content, availability, or practices of
            third-party services, which are governed by their own terms.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Digital Growth Studio
            will not be liable for any indirect, incidental, or
            consequential damages arising from your use of the Site or
            reliance on its content. The Site and its content are provided
            &quot;as is&quot; without warranties of any kind.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold Digital Growth Studio harmless
            from any claims, damages, or expenses arising from your misuse
            of the Site or violation of these Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of California,
            without regard to conflict-of-law principles. Any disputes
            arising from these Terms or the Site will be subject to the
            jurisdiction of the courts located in California.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of
            the Site after changes are posted constitutes acceptance of the
            revised Terms. The &quot;last updated&quot; date above reflects the most
            recent revision.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about these Terms can be sent to{" "}
            <a href="mailto:akash.yerehalli.satish@gmail.com">
              akash.yerehalli.satish@gmail.com
            </a>{" "}
            or (657) 525-8336.
          </p>
        </div>
      </section>
    </>
  );
}
