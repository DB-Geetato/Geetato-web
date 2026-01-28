import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Geetato Bakes & Bliss",
  description: "Terms and conditions for using Geetato Bakes & Bliss website and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-12 text-geetato-charcoal">Terms & <span className="text-geetato-pink">Conditions</span></h1>
      <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">2. Provision of Services</h2>
          <p>Geetato Bakes & Bliss provides artisan bakery products and B2B supply services. We reserve the right to modify or terminate our services for any reason, without notice at any time.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">3. Orders and Payments</h2>
          <p>All orders placed through our website or direct channels are subject to availability and confirmation of the order price. For B2B partners, credit terms and payment cycles will be as per the signed contract.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">4. Intellectual Property</h2>
          <p>The content, organization, graphics, design, and other matters related to the Site are protected under applicable copyrights and other proprietary laws. The copying, redistribution, or use by you of any such matters or any part of the Site is strictly prohibited.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">5. Limitation of Liability</h2>
          <p>Geetato Bakes & Bliss shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products.</p>
        </section>
      </div>
    </div>
  );
}
