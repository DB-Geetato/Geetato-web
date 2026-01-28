import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Geetato - Bulk Orders & Corporate Catering | Ghaziabad",
  description: "Get in touch with Geetato for bulk artisan bread supply, corporate catering, or custom celebration cakes. Trusted B2B partner in Indirapuram, Ghaziabad.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
