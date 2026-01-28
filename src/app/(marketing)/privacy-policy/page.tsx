import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Geetato Bakes & Bliss",
  description: "Privacy policy for Geetato Bakes & Bliss. We value your privacy and are committed to protecting your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-12 text-geetato-charcoal">Privacy <span className="text-geetato-pink">Policy</span></h1>
      <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">1. Introduction</h2>
          <p>Welcome to Geetato Bakes & Bliss ("we", "our", "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at contactus@geetato.com.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">2. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on our website or otherwise contacting us.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and Contact Data (email, phone number)</li>
            <li>Business Information (company name, role)</li>
            <li>Delivery Address</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">3. How We Use Your Information</h2>
          <p>We use personal information collected via our website for a variety of business purposes described below:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To facilitate account creation and logon process</li>
            <li>To send administrative information to you</li>
            <li>To fulfill and manage your orders</li>
            <li>To respond to user inquiries and offer support</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">4. Sharing Your Information</h2>
          <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-geetato-charcoal mb-4">5. Contact Us</h2>
          <p>If you have questions or comments about this policy, you may email us at contactus@geetato.com or by post to:</p>
          <p className="font-bold text-geetato-charcoal">Geetato Bakes & Bliss<br />Plot No-911, Shop No-4, Niti Khand-1, Indirapuram, Ghaziabad, UP 201014</p>
        </section>
      </div>
    </div>
  );
}
