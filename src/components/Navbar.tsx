"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Corporate & Export", href: "/b2b" },
  { name: "Daily Breads", href: "/products#breads" },
  { name: "Occasion Cakes", href: "/products#cakes" },
  { name: "The Baker’s Story", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-file1-1769581155906.png?width=200&height=80&resize=contain"
            alt="Geetato Logo"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all hover:text-geetato-pink relative py-1 ${
                  isActive ? "text-geetato-pink" : "text-geetato-charcoal/80"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-geetato-pink animate-in fade-in slide-in-from-left-2 duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919266093334"
            className="flex items-center gap-2 text-sm font-semibold text-geetato-pink hover:opacity-80 transition-opacity mr-2"
          >
            <Phone className="h-4 w-4" />
            +91-9266093334
          </a>
          <Link
            href="/contact"
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:shadow-lg ${
              pathname === "/contact"
                ? "bg-geetato-charcoal text-white"
                : "bg-geetato-pink text-white hover:bg-geetato-pink/90"
            }`}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-geetato-charcoal hover:bg-geetato-pink/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-background z-40 animate-in fade-in slide-in-from-top duration-300">
          <nav className="flex flex-col items-center gap-6 py-12 px-6 h-full overflow-y-auto">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xl font-bold transition-all ${
                    isActive ? "text-geetato-pink scale-110" : "text-geetato-charcoal"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <hr className="w-1/2 border-geetato-pink/20 my-2" />
            <div className="flex flex-col items-center gap-6 w-full max-w-xs">
              <a
                href="tel:+919266093334"
                className="flex items-center gap-3 text-lg font-bold text-geetato-pink bg-geetato-pink/5 w-full justify-center py-4 rounded-2xl border border-geetato-pink/10"
              >
                <Phone className="h-5 w-5" />
                +91-9266093334
              </a>
              <Link
                href="/contact"
                className="rounded-2xl bg-geetato-pink px-8 py-4 text-lg font-bold text-white w-full text-center shadow-lg active:scale-95 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
            
            <div className="mt-auto py-8 text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Geetato Bakes & Bliss</p>
              <p className="text-xs text-muted-foreground mt-1">Fresh Bakes, Real Taste</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
