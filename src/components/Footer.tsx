"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, MapPin, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-white pt-16 pb-8 dark:bg-geetato-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-file1-1769581155906.png?width=200&height=80&resize=contain"
                alt="Geetato Logo"
                width={140}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm font-semibold text-geetato-pink">Fresh Bakes, Real Taste</p>
            <p className="text-sm leading-6 text-muted-foreground">
              Premium artisan bakery trusted by 50+ corporate clients and HORECA establishments in Ghaziabad and NCR.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-geetato-pink transition-colors">Home</Link>
              <Link href="/products" className="text-sm text-muted-foreground hover:text-geetato-pink transition-colors">Products</Link>
              <Link href="/b2b" className="text-sm text-muted-foreground hover:text-geetato-pink transition-colors">B2B Solutions</Link>
              <Link href="/why-geetato" className="text-sm text-muted-foreground hover:text-geetato-pink transition-colors">Why Geetato?</Link>
              <Link href="/testimonials" className="text-sm text-muted-foreground hover:text-geetato-pink transition-colors">Testimonials</Link>
              <Link href="/gallery" className="text-sm text-muted-foreground hover:text-geetato-pink transition-colors">Gallery</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-geetato-pink transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Legal & Policies</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-geetato-pink transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-geetato-pink transition-colors">Terms & Conditions</Link>
              <Link href="/refund-policy" className="text-sm text-muted-foreground hover:text-geetato-pink transition-colors">Refund/Cancellation</Link>
            </nav>
            <h3 className="text-sm font-bold uppercase tracking-wider mt-4">Contact Info</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0 text-geetato-pink" />
                <span>Plot No-911, Shop No-4, Niti Khand-1, Indirapuram, Ghaziabad, UP 201014</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 shrink-0 text-geetato-pink" />
                <a href="tel:+919266093334" className="hover:text-geetato-pink transition-colors">+91 92660 93334</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://in.linkedin.com/in/geetato" target="_blank" className="rounded-full bg-geetato-pink/10 p-2.5 text-geetato-pink hover:bg-geetato-pink hover:text-white transition-all">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.facebook.com/geetatobakes1/" target="_blank" className="rounded-full bg-geetato-pink/10 p-2.5 text-geetato-pink hover:bg-geetato-pink hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://wa.me/919266093334" target="_blank" className="rounded-full bg-[#25D366]/10 p-2.5 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all">
                <Phone className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium mb-3">Order Online</p>
              <div className="flex flex-wrap gap-2">
                <a href="https://www.zomato.com/ncr/geetato-bakes-bliss-indirapuram-ghaziabad" target="_blank" className="text-[10px] font-black border-2 border-geetato-pink/20 rounded-lg px-3 py-1.5 hover:bg-geetato-pink hover:text-white transition-all uppercase tracking-tighter">Zomato</a>
                <a href="https://www.swiggy.com/city/noida-1/geetato-indirapuram-makanpur-rest986357" target="_blank" className="text-[10px] font-black border-2 border-[#FC8019]/20 rounded-lg px-3 py-1.5 hover:bg-[#FC8019] hover:text-white transition-all uppercase tracking-tighter">Swiggy</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Geetato Bakes & Bliss. Crafted with passion in India.</p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-bold text-geetato-charcoal hover:text-geetato-pink transition-colors"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full bg-geetato-cream flex items-center justify-center group-hover:bg-geetato-pink group-hover:text-white transition-all">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

