import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
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
              <Link href="/about" className="text-sm text-muted-foreground hover:text-geetato-pink transition-colors">About Us</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-geetato-pink transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Contact Info</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0 text-geetato-pink" />
                <span>Plot No-911, Shop No-4, Niti Khand-1, Indirapuram, Ghaziabad, UP 201014</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 shrink-0 text-geetato-pink" />
                <a href="tel:+919266093334" className="hover:text-geetato-pink transition-colors">+91-9266093334</a>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 shrink-0 text-geetato-pink" />
                <a href="mailto:contactus@geetato.com" className="hover:text-geetato-pink transition-colors">contactus@geetato.com</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-geetato-pink/10 p-2.5 text-geetato-pink hover:bg-geetato-pink hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-geetato-pink/10 p-2.5 text-geetato-pink hover:bg-geetato-pink hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://wa.me/919266093334" className="rounded-full bg-geetato-pink/10 p-2.5 text-geetato-pink hover:bg-geetato-pink hover:text-white transition-all">
                <Phone className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Order on</p>
              <div className="flex gap-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <span className="text-xs font-bold border rounded px-2 py-1">ZOMATO</span>
                <span className="text-xs font-bold border rounded px-2 py-1">SWIGGY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Geetato Bakes & Bliss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
