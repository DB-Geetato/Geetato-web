import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Briefcase, Building2, Rocket, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bakery Supplier for Restaurants, Hotels & Corporates | Ghaziabad NCR",
  description: "Reliable bakery partner for HORECA. Daily bread supply, custom packaging, flexible MOQ. Trusted by Panasonic, Amazon, Barclays. FSSAI certified.",
};

export default function B2BSolutionsPage() {
  return (
    <div className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-geetato-cream py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-6">
                <h1 className="text-4xl font-bold tracking-tight text-geetato-charcoal sm:text-6xl">
                  Your Reliable <span className="text-geetato-pink">Bakery Supplier</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Trusted by 50+ leading corporations and HORECA establishments. We provide consistent quality, daily fresh supply, and flexible MOQ.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="rounded-full bg-geetato-pink px-8 py-4 text-lg font-bold text-white transition-all hover:shadow-xl"
                  >
                    Start a Conversation
                  </Link>
                  <a
                    href="tel:+919266093334"
                    className="inline-flex items-center justify-center gap-2 font-bold text-geetato-charcoal hover:text-geetato-pink transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    +91-9266093334
                  </a>
                </div>
              </div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src="https://images.unsplash.com/photo-151152857478e-7428802460ef?auto=format&fit=crop&w=1920&h=1080&q=85&fm=webp"
                        alt="Professional bakery delivery and logistics for B2B partners - Geetato Bakes & Bliss"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority
                        quality={85}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-24">
              {/* For Restaurants & Cafes */}
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-geetato-pink/10 text-geetato-pink mb-6">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Daily Bread Supply for Premium Establishments</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    We are the trusted bread supplier for leading restaurants, cafes, and cloud kitchens across Ghaziabad and NCR. Our daily-fresh artisan breads—white, brown, multigrain, focaccia, ciabatta, pav, and specialty breads—are crafted to perfection.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[
                      "Fresh daily production",
                      "FSSAI compliant",
                      "Consistent quality",
                      "MOQ flexibility",
                      "Fast turnaround",
                      "Custom formulations",
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-geetato-pink" />
                        <span className="font-semibold text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="text-geetato-pink font-bold inline-flex items-center group">
                    Discuss Your Bread Supply Needs <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
                      alt="Artisan bread display for restaurant and cafe supply - Geetato Bakes & Bliss"
                      fill
                      className="object-cover"
                      quality={85}
                    />
                  </div>
              </div>

              {/* For Corporate Offices */}
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
                      alt="Corporate gifting and catering solutions for offices - Geetato Bakes & Bliss"
                      fill
                      className="object-cover"
                      quality={85}
                    />
                  </div>
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-geetato-pink/10 text-geetato-pink mb-6">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Corporate Gifting & Event Catering</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    From employee appreciation boxes to event catering, Geetato delivers premium solutions. Our corporate clients include Amazon, Panasonic, Barclays, Axis Bank, and many more.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "Premium snack boxes (healthy, gourmet, customized)",
                      "Festive & corporate hampers",
                      "Event catering & high-tea services",
                      "Bulk cookie and snack orders",
                    ].map((solution) => (
                      <div key={solution} className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-geetato-pink/10 flex items-center justify-center text-geetato-pink shrink-0">
                          <ArrowRight className="h-3 w-3" />
                        </div>
                        <span className="font-medium">{solution}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="text-geetato-pink font-bold inline-flex items-center group">
                    Request Custom Proposal <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Cloud Kitchens */}
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-geetato-pink/10 text-geetato-pink mb-6">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Specialized Bread & Base Supply</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Pizza bases, focaccia, flatbreads, and specialty breads—custom specs, reliable supply. MOQ flexibility, quick turnaround, consistent quality—perfect for your growing business.
                  </p>
                  <Link href="/contact" className="text-geetato-pink font-bold inline-flex items-center group">
                    Explore Specialized Supply <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80"
                    alt="Professional bread and pizza base supply for cloud kitchens - Geetato Bakes & Bliss"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-24 bg-geetato-cream/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-16">Why Partner with Geetato?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Quality Assurance", desc: "Batch-wise QC and export-grade standards." },
                { title: "Reliability", desc: "50+ corporate clients trust our 24/7 capability." },
                { title: "Flexibility", desc: "MOQ flexibility and custom formulations available." },
                { title: "Health", desc: "No preservatives, no refined sugar, no palm oil." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm transition-all hover:shadow-xl">
                  <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos Reprise */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
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
          </div>
        </section>
    </div>
  );
}
