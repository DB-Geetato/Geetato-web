"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

interface FacebookPageProps {
  href: string;
  tabs?: string;
  height?: number;
  smallHeader?: boolean;
  adaptContainerWidth?: boolean;
  hideCover?: boolean;
  showFacepile?: boolean;
  lazy?: boolean;
}

export default function FacebookPage({
  href,
  tabs = "timeline",
  height = 800,
  smallHeader = false,
  adaptContainerWidth = true,
  hideCover = false,
  showFacepile = true,
  lazy = true,
}: FacebookPageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Re-parse XFBML when the component mounts or href changes
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [href]);

  return (
    <div className="relative w-full flex justify-center bg-white rounded-3xl overflow-hidden shadow-xl border border-geetato-pink/10 min-h-[400px]">
      <Script
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        onLoad={() => {
          setIsLoaded(true);
          if (window.FB) {
            window.FB.XFBML.parse();
          }
        }}
      />
      
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-geetato-cream/20 animate-pulse p-8">
          <div className="w-full h-48 bg-geetato-cream rounded-t-2xl mb-4" />
          <div className="w-3/4 h-8 bg-geetato-cream rounded-full mb-4" />
          <div className="w-1/2 h-6 bg-geetato-cream rounded-full mb-8" />
          <div className="w-full flex-1 bg-geetato-cream rounded-2xl" />
        </div>
      )}

      <div
        className="fb-page w-full flex justify-center"
        data-href={href}
        data-tabs={tabs}
        data-width="500" // Meta max is 500, we use adapt_container_width
        data-height={height}
        data-small-header={smallHeader}
        data-adapt-container-width={adaptContainerWidth}
        data-hide-cover={hideCover}
        data-show-facepile={showFacepile}
        data-lazy={lazy}
      />
    </div>
  );
}

declare global {
  interface Window {
    FB: any;
  }
}
