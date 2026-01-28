import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Briefcase, Building2, Rocket, ArrowRight } from "lucide-react";

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
                  src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop"
                  alt="Premium Bakery B2B Solutions"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/photo-1568254183919-78a4f43a2877-resized-1769581213611.jpeg?width=800&height=600&resize=contain"
                  alt="Restaurant Supply"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* For Corporate Offices */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/photo-1568254183919-78a4f43a2877-resized-1769581213611.jpeg?width=800&height=600&resize=contain"
                  alt="Corporate Gifting"
                  fill
                  className="object-cover"
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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/photo-1568254183919-78a4f43a2877-resized-1769581213611.jpeg?width=800&height=600&resize=contain"
                  alt="Cloud Kitchen Supply"
                  fill
                  className="object-cover"
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
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {["Panasonic", "Amazon", "Barclays", "Ericsson", "Axis Bank", "Crowe", "Jabra"].map((l) => (
              <span key={l} className="text-2xl font-black">{l}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
