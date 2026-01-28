"use client";

import Link from "next/link";
import { Facebook, Instagram, Send, Upload, Heart } from "lucide-react";
import FacebookPage from "@/components/FacebookPage";
import { useState, useEffect } from "react";

export default function GalleryPage() {
  const [fbHeight, setFbHeight] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      setFbHeight(window.innerWidth < 768 ? 600 : 800);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col bg-geetato-cream min-h-screen">
      {/* UPDATE FACEBOOK PAGE URL: https://www.facebook.com/geetatobakes1/ */}
      
      {/* 1. HERO SECTION */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-geetato-charcoal sm:text-7xl mb-6">
            Our <span className="text-[#E91E63]">Fresh Updates</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our daily bakes, new products, and behind-the-scenes moments on Facebook
          </p>
        </div>
      </section>

      {/* 2. FACEBOOK PAGE PLUGIN SECTION */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FacebookPage 
              href="https://www.facebook.com/geetatobakes1/"
              tabs="timeline,messages"
              height={fbHeight}
              smallHeader={false}
              adaptContainerWidth={true}
              hideCover={false}
              showFacepile={true}
              lazy={true}
            />
          </div>
        </div>
      </section>

      {/* 4. FALLBACK SECTION */}
      <section className="py-24 bg-white/50 border-y border-geetato-pink/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Fallback Button */}
            <div className="flex flex-col items-center text-center space-y-6 p-8 rounded-[2.5rem] bg-white shadow-sm border border-geetato-pink/10">
              <div className="p-4 bg-geetato-pink/10 rounded-full text-geetato-pink">
                <Facebook className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Stay Connected</h3>
              <p className="text-muted-foreground">Can&apos;t see the feed? Visit our official Facebook page directly.</p>
              <Link 
                href="https://www.facebook.com/geetatobakes1/"
                target="_blank"
                className="w-full py-4 bg-[#E91E63] text-white rounded-full font-bold hover:shadow-lg transition-all"
              >
                View Our Facebook Page
              </Link>
            </div>

            {/* Instagram Feed Option Placeholder */}
            <div className="flex flex-col items-center text-center space-y-6 p-8 rounded-[2.5rem] bg-white shadow-sm border border-geetato-pink/10">
              <div className="p-4 bg-geetato-pink/10 rounded-full text-geetato-pink">
                <Instagram className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Instagram Feed</h3>
              <p className="text-muted-foreground">Explore our visual gallery of freshly baked artisan goodness.</p>
              <Link 
                href="#"
                className="w-full py-4 border-2 border-geetato-pink text-geetato-pink rounded-full font-bold hover:bg-geetato-pink hover:text-white transition-all"
              >
                Follow @geetato
              </Link>
            </div>

            {/* Email Signup Form */}
            <div className="flex flex-col items-center text-center space-y-6 p-8 rounded-[2.5rem] bg-white shadow-sm border border-geetato-pink/10">
              <div className="p-4 bg-geetato-pink/10 rounded-full text-geetato-pink">
                <Send className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Subscribe</h3>
              <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-6 py-4 rounded-full bg-geetato-cream border-none focus:ring-2 focus:ring-geetato-pink"
                />
                <button 
                  type="submit"
                  className="w-full py-4 bg-geetato-charcoal text-white rounded-full font-bold hover:bg-geetato-pink transition-all"
                >
                  Subscribe to Updates
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION BELOW */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Share Your Geetato Moment</h2>
              <div className="p-12 rounded-[3rem] bg-white shadow-2xl border border-geetato-pink/10">
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-24 h-24 bg-geetato-cream rounded-full flex items-center justify-center">
                    <Upload className="h-10 w-10 text-geetato-pink" />
                  </div>
                  <p className="text-lg text-muted-foreground max-w-md">Upload a photo of your favorite Geetato treat and get featured on our social wall!</p>
                  <button className="px-12 py-4 bg-[#E91E63] text-white rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center gap-2">
                    <Upload className="h-5 w-5" /> Select Photo
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8">
              <Link 
                href="https://www.facebook.com/geetatobakes1/"
                target="_blank"
                className="px-10 py-5 bg-[#E91E63] text-white rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform text-lg shadow-lg"
              >
                <Heart className="h-6 w-6 fill-current" /> Like Our Page
              </Link>
              <div className="flex items-center gap-6">
                <Link 
                  href="https://www.facebook.com/geetatobakes1/" 
                  target="_blank"
                  className="p-5 bg-white rounded-full text-geetato-charcoal hover:text-geetato-pink shadow-md hover:shadow-xl transition-all"
                >
                  <Facebook className="h-8 w-8" />
                </Link>
                <Link 
                  href="#" 
                  className="p-5 bg-white rounded-full text-geetato-charcoal hover:text-geetato-pink shadow-md hover:shadow-xl transition-all"
                >
                  <Instagram className="h-8 w-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
