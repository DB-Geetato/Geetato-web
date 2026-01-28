"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "B2B Solutions", href: "/b2b" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Gallery", href: "/gallery" },
  { name: "Why Geetato", href: "/why-geetato" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-geetato-pink"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919266093334"
            className="flex items-center gap-2 text-sm font-semibold text-geetato-pink hover:opacity-80 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            +91-9266093334
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-geetato-pink px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-geetato-pink/90 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-geetato-charcoal"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-background z-40 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col items-center gap-6 py-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="w-1/2 border-geetato-pink/20" />
            <a
              href="tel:+919266093334"
              className="flex items-center gap-2 text-lg font-semibold text-geetato-pink"
            >
              <Phone className="h-5 w-5" />
              +91-9266093334
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-geetato-pink px-8 py-3 text-lg font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
