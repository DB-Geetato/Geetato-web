import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Star, Users, Truck, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-geetato-cream py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-8 text-center lg:text-left">
              <div className="inline-flex items-center self-center lg:self-start rounded-full bg-geetato-pink/10 px-4 py-1.5 text-sm font-semibold text-geetato-pink">
                Premium Artisan Bakery
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-geetato-charcoal sm:text-6xl">
                Fresh Bakes for Every Taste. <br />
                <span className="text-geetato-pink">Trusted by 50+ Corporations.</span>
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                Premium artisan breads, healthy snacks, and bespoke catering solutions for restaurants, hotels, corporates, and individuals.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full bg-geetato-pink px-8 py-4 text-lg font-bold text-white transition-all hover:bg-geetato-pink/90 hover:shadow-xl group"
                >
                  Explore Bulk Orders
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-full border-2 border-geetato-charcoal px-8 py-4 text-lg font-bold text-geetato-charcoal transition-all hover:bg-geetato-charcoal hover:text-white"
                >
                  View Our Bakes
                </Link>
              </div>
            </div>
              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2052&auto=format&fit=crop"
                  alt="Premium Artisan Breads"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Client Logos */}
      <section className="border-y bg-white py-12 dark:bg-geetato-charcoal/50">
        <div className="container mx-auto px-4 md:px-6">
          <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Trusted by India's Leading Corporations & Premium Kitchens
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
            {["Panasonic", "Amazon", "Barclays", "Ericsson", "Axis Bank", "Crowe", "Jabra"].map((client) => (
              <div key={client} className="flex items-center justify-center px-4 py-2">
                <span className="text-xl font-black text-geetato-charcoal/40 dark:text-white/40">{client}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 border-t pt-8">
            {[
              { label: "50+ Corporate Clients", icon: Users },
              { label: "Daily Fresh Production", icon: Star },
              { label: "24/7 Supply Capability", icon: Truck },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <stat.icon className="h-6 w-6 text-geetato-pink" />
                <span className="font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Specializations</h2>
            <p className="mt-4 text-lg text-muted-foreground">Premium quality bakes for every business and occasion</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Artisan Breads",
                desc: "Trusted bakery supplier for leading kitchens",
                icon: "🥖",
                href: "/products#breads",
              },
              {
                title: "Healthy Snacks",
                desc: "No preservatives, No refined sugar, No palm oil",
                icon: "🍪",
                href: "/products#snacks",
              },
              {
                title: "Corporate Solutions",
                desc: "Catering, Gifting, Bulk Orders",
                icon: "📦",
                href: "/b2b",
              },
              {
                title: "Custom Celebrations",
                desc: "Bespoke Cakes for Special Moments",
                icon: "🎂",
                href: "/products#cakes",
              },
            ].map((cat, i) => (
              <Link
                key={i}
                href={cat.href}
                className="group relative flex flex-col items-center gap-4 rounded-3xl border bg-geetato-cream/30 p-8 text-center transition-all hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <div className="text-6xl mb-4 transition-transform group-hover:scale-110">{cat.icon}</div>
                <h3 className="text-xl font-bold">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">{cat.desc}</p>
                <span className="mt-auto text-sm font-bold text-geetato-pink group-hover:underline">Explore Range</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Geetato */}
      <section className="bg-geetato-charcoal py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Geetato?</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Hand-made, Fresh Daily", desc: "Premium quality, artisan craftsmanship in every batch." },
              { title: "No Compromises", desc: "No preservatives, no refined sugar, no palm oil. Ever." },
              { title: "Export-Grade Quality", desc: "International standards, FSSAI compliant production." },
              { title: "Bulk & Flexible MOQ", desc: "From small orders to 24/7 supply for large institutions." },
              { title: "Fast Turnaround", desc: "Quick response and reliable delivery when you need it." },
              { title: "Trusted by 50+ Clients", desc: "Proven track record with India's leading corporations." },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 rounded-2xl bg-white/5 p-6 transition-colors hover:bg-white/10">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-geetato-pink" />
                <div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-geetato-cream/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-12 text-center">
            {[
              "FSSAI Compliant",
              "Pure Vegetarian",
              "Fresh Daily",
              "No Preservatives",
              "Hand-Crafted",
            ].map((cert, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-geetato-pink/10 text-geetato-pink">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <span className="text-sm font-bold text-geetato-charcoal uppercase tracking-wider">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-[3rem] bg-geetato-pink px-8 py-16 text-center text-white shadow-2xl md:px-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Ready to Partner with Geetato?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              For bulk orders, catering, or product inquiries, let's connect. Elevate your business with our premium artisan solutions.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 text-lg font-bold text-geetato-pink transition-all hover:scale-105 hover:shadow-xl"
              >
                Get in Touch Today
              </Link>
              <a
                href="tel:+919266093334"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white hover:underline"
              >
                Call: +91-9266093334
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
