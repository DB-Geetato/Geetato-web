import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Geetato Bakes & Bliss Artisan Showcase",
  description: "Explore our gallery of artisan breads, healthy snacks, custom cakes, and corporate catering solutions. Visual proof of our commitment to quality and health.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
