import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Geetato Bakes & Bliss | Fresh Bakes, Real Taste",
  description: "Premium artisan bakery in Indirapuram, Ghaziabad. Trusted by 50+ corporate clients and HORECA establishments. Fresh artisan breads, healthy snacks, and bespoke catering.",
  icons: {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/site-icon-1769581178995.png?width=128&height=128&resize=contain",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="b13882df-3871-4226-a215-e0dd014ba4be"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {/* 
          ANALYTICS & TRACKING SETUP:
          1. Google Analytics 4: Add gtag.js script here.
          2. Google Tag Manager: Add GTM container script here and noscript in body.
          3. Facebook Pixel: Add pixel base code here.
          4. Conversion Tracking: Trigger events in form submission handlers.
        */}
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
