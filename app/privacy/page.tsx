import type { Metadata } from "next";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Digital Growth Studio collects, uses, and protects information submitted through this website.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        copy="Last updated July 2026. This policy explains what information we collect through this website and how it is used."
      />

      <section className="section">
        <div className="container legal prose">
          <h2>Overview</h2>
          <p>
            Digital Growth Studio (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
            digitalgrowth.studio (the &quot;Site&quot;). This Privacy Policy describes
            how we collect, use, and protect information when you visit the
            Site, submit an inquiry, or book a consultation with us.
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you submit our contact form or book a consultation, we
            collect the information you provide directly, which may include
            your name, business name, email address, phone number, industry,
            current website, project details, estimated budget, and preferred
            timeline.
          </p>
          <p>
            When you browse the Site, we automatically collect limited
            technical information through Google Analytics, including pages
            visited, approximate location, device and browser type, and
            general usage patterns. This information is aggregated and does
            not directly identify you.
          </p>

          <h2>How We Use Information</h2>
          <p>
            We use the information you provide to respond to inquiries,
            prepare consultations, deliver requested services, and
            communicate with you about your project. We use analytics data
            to understand how visitors use the Site and to improve its
            content, performance, and design.
          </p>
          <p>
            We do not sell your personal information, and we do not use it
            for unrelated advertising purposes.
          </p>

          <h2>Cookies and Tracking</h2>
          <p>
            The Site uses cookies set by Google Analytics to measure traffic
            and usage. You can disable cookies through your browser settings
            at any time; doing so may not affect your ability to browse the
            Site or contact us, though some features may not function as
            intended.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We rely on trusted third-party providers to operate the Site and
            deliver our services: Vercel for website hosting, Resend for
            processing and delivering contact form submissions by email, and
            Calendly for scheduling consultations. Each provider processes
            information only as needed to perform these functions and
            maintains its own privacy and security practices.
          </p>

          <h2>Data Sharing</h2>
          <p>
            We do not share, rent, or sell your personal information to
            third parties for their own marketing purposes. Information may
            be disclosed if required by law, to protect our legal rights, or
            in connection with a business transition such as a merger or
            acquisition.
          </p>

          <h2>Data Security</h2>
          <p>
            We use industry-standard measures, including encrypted
            connections (HTTPS) and reputable hosting and email
            infrastructure, to help protect the information submitted
            through the Site. No method of transmission or storage is
            completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain inquiry information for as long as needed to respond
            to your request, provide services, and maintain business
            records, after which it is deleted or anonymized unless a longer
            retention period is required by law.
          </p>

          <h2>Your Choices</h2>
          <p>
            You may request access to, correction of, or deletion of the
            personal information you have submitted to us by contacting us
            using the details below. We will respond to reasonable requests
            within a reasonable timeframe.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            This Site is intended for business owners and is not directed
            at children. We do not knowingly collect personal information
            from individuals under the age of 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for legal, operational, or
            regulatory reasons. The &quot;last updated&quot; date at the top of this
            page reflects the most recent revision.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or how your
            information is handled, contact us at{" "}
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
