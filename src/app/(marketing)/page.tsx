import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Star, Users, Truck, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geetato Bakes & Bliss - Premium Bakery Supplier Ghaziabad | Trusted by 50+ Corporations",
  description: "FSSAI certified artisan breads, healthy snacks & export-quality dried fruits. Daily fresh production for restaurants, hotels, corporates. B2B bulk orders available.",
};

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
                        src="https://images.unsplash.com/photo-1623334042903-d4263970f83d?auto=format&fit=crop&w=1920&h=1080&q=85&fm=webp"
                        alt="Artisan croissants with flour dust and moody bakery lighting - Geetato Bakes & Bliss Ghaziabad"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                        priority
                        quality={85}
                        sizes="(max-width: 768px) 100vw, 50vw"
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
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
              {[
                { name: "Panasonic", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Panasonic_logo.svg/200px-Panasonic_logo.svg.png" },
                { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png" },
                { name: "Barclays", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Barclays_logo.svg/200px-Barclays_logo.svg.png" },
                { name: "Ericsson", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Ericsson_logo.svg/200px-Ericsson_logo.svg.png" },
                { name: "Axis Bank", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Axis_Bank_logo.svg/200px-Axis_Bank_logo.svg.png" },
              ].map((client) => (
                <div key={client.name} className="relative h-12 w-32 flex items-center justify-center grayscale brightness-0 opacity-50 transition-all hover:grayscale-0 hover:brightness-100 hover:opacity-100">
                  <Image
                    src={client.url}
                    alt={`${client.name} logo - Trusted B2B Partner of Geetato`}
                    fill
                    className="object-contain"
                  />
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
                      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&h=600&q=85&fm=webp",
                      href: "/products#breads",
                    },
                    {
                      title: "Healthy Snacks",
                      desc: "No preservatives, No refined sugar, No palm oil",
                      image: "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?auto=format&fit=crop&w=600&h=600&q=85&fm=webp",
                      href: "/products#snacks",
                    },
                    {
                      title: "Corporate Solutions",
                      desc: "Catering, Gifting, Bulk Orders",
                      image: "https://images.unsplash.com/photo-1594179047519-13ac9735a9d0?auto=format&fit=crop&w=600&h=600&q=85&fm=webp",
                      href: "/b2b",
                    },
                    {
                      title: "Custom Celebrations",
                      desc: "Bespoke Cakes for Special Moments",
                      image: "https://images.unsplash.com/photo-1535254973040-607b474cb83d?auto=format&fit=crop&w=600&h=600&q=85&fm=webp",
                      href: "/products#cakes",
                    },
                ].map((cat, i) => (
                <Link
                  key={i}
                  href={cat.href}
                  className="group relative flex flex-col items-center gap-4 rounded-3xl border bg-geetato-cream/30 p-0 text-center transition-all hover:-translate-y-2 hover:bg-white hover:shadow-xl overflow-hidden"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={`${cat.title} - Geetato Bakes & Bliss`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex flex-col items-center">
                    <h3 className="text-xl font-bold">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{cat.desc}</p>
                    <span className="mt-4 text-sm font-bold text-geetato-pink group-hover:underline">Explore Range</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Geetato */}
        <section className="relative bg-geetato-charcoal py-24 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image
              src="https://www.transparenttextures.com/patterns/dark-linen.png"
              alt="Texture"
              fill
              className="object-repeat"
            />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
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
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-geetato-pink/10 text-geetato-pink shadow-inner border border-geetato-pink/20">
                    <ShieldCheck className="h-10 w-10" />
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
