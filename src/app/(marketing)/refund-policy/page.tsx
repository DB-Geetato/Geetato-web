import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund and Cancellation Policy - Geetato Bakes & Bliss",
  description: "Refund and cancellation policy for Geetato Bakes & Bliss orders, including Zomato/Swiggy orders and B2B contracts.",
};

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-12 text-geetato-charcoal">Refund & <span className="text-geetato-pink">Cancellation</span></h1>
      <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">1. Order Cancellation</h2>
          <p>Orders can be cancelled within 30 minutes of placement for a full refund. For custom cakes, cancellations must be made at least 24 hours in advance to be eligible for a refund.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">2. Zomato & Swiggy Orders</h2>
          <p>For orders placed through third-party platforms like Zomato or Swiggy, the respective platform's refund and cancellation policies will apply. Please contact their customer support for any order-related issues.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">3. Quality Issues</h2>
          <p>If you receive a product that is damaged or does not meet our quality standards, please contact us immediately at +91 92660 93334 with photos of the product and packaging. We will investigate and provide a replacement or refund as appropriate.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">4. B2B Contracts</h2>
          <p>For our corporate and HORECA partners, the refund and cancellation terms specified in the individual service level agreements (SLA) will prevail.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">5. Processing Refunds</h2>
          <p>Approved refunds will be processed within 5-7 business days to the original payment method.</p>
        </section>
      </div>
    </div>
  );
}
