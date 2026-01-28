import Image from "next/image";
import Link from "next/link";
import { Star, Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials - Geetato Bakes & Bliss",
  description: "See what our 50+ corporate clients and hundreds of individuals say about Geetato. Trusted artisan bakery supplier in Ghaziabad.",
};

const TESTIMONIALS = [
  {
    quote: "Geetato has been our reliable bakery partner for 2 years. Their consistent quality and timely delivery make them stand out in the NCR market.",
    author: "Procurement Manager",
    company: "Panasonic India",
    rating: 5,
    category: "B2B"
  },
  {
    quote: "The best sourdough I've found in Indirapuram. You can tell they use traditional methods—the crust and crumb are exactly like what you get in Europe.",
    author: "Anjali Sharma",
    company: "Individual Client",
    rating: 5,
    category: "D2C"
  },
  {
    quote: "Our employees love the healthy snack hampers from Geetato. It's great to have a supplier that avoids palm oil and refined sugar while maintaining great taste.",
    author: "HR Director",
    company: "Barclays",
    rating: 5,
    category: "Corporate"
  },
  {
    quote: "For our corporate events, Geetato is our go-to for custom cakes and high-tea catering. Their professionalism and attention to detail are unmatched.",
    author: "Event Coordinator",
    company: "Amazon",
    rating: 5,
    category: "Events"
  },
  {
    quote: "Consistent, fresh, and reliable. As a cafe owner, I need a bread supplier I can trust every single morning. Geetato never misses a beat.",
    author: "Chef de Cuisine",
    company: "Premium Cafe Chain",
    rating: 5,
    category: "HORECA"
  },
  {
    quote: "Their roasted makhana and no-sugar cookies are a staple in our office pantry. Clean eating made easy and delicious.",
    author: "Facility Manager",
    company: "Ericsson",
    rating: 5,
    category: "Corporate"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-geetato-cream py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-geetato-charcoal sm:text-7xl mb-6">
            Trusted by <span className="text-geetato-pink">Leaders</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From Fortune 500 companies to neighborhood families, discover why hundreds trust Geetato for their artisan bakery needs.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="flex flex-col p-10 rounded-[3rem] bg-geetato-cream/20 border border-geetato-cream hover:bg-white hover:shadow-2xl transition-all group">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-geetato-pink text-geetato-pink" />
                  ))}
                </div>
                <div className="relative mb-8">
                  <Quote className="absolute -top-4 -left-4 h-12 w-12 text-geetato-pink/10 group-hover:text-geetato-pink/20 transition-colors" />
                  <p className="text-lg text-geetato-charcoal relative z-10 leading-relaxed font-medium italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-auto pt-8 border-t border-geetato-charcoal/5">
                  <h4 className="font-bold text-geetato-charcoal">{t.author}</h4>
                  <p className="text-sm text-geetato-pink font-bold uppercase tracking-widest">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-24 bg-geetato-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Voices from the Community</h2>
            <p className="text-white/60">Watch what our long-term partners have to say about the Geetato experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((v) => (
              <div key={v} className="aspect-video rounded-[3rem] bg-white/5 border border-white/10 flex items-center justify-center relative group cursor-pointer overflow-hidden">
                <Image 
                  src={`https://images.unsplash.com/photo-${v === 1 ? '1556910103-1c02745aae4d' : '1509440159596-0249088772ff'}?auto=format&fit=crop&w=1000&q=80`}
                  alt="Video Testimonial Thumbnail"
                  fill
                  className="object-cover opacity-30 group-hover:opacity-50 transition-opacity"
                />
                <div className="w-20 h-20 rounded-full bg-geetato-pink flex items-center justify-center shadow-2xl relative z-10 transition-transform group-hover:scale-110">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                </div>
                <div className="absolute bottom-8 left-8 text-left z-10">
                  <p className="font-bold text-xl">Success Story {v}</p>
                  <p className="text-sm text-white/60">B2B Partnership Overview</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Join 50+ Happy Corporate Partners</h2>
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              {[
                "Panasonic", "Amazon", "Barclays", "Ericsson", "Axis Bank", "Crowe", "Jabra"
              ].map((c) => (
                <div key={c} className="px-8 py-4 bg-geetato-cream/30 rounded-2xl font-black text-geetato-charcoal/40 text-xl">
                  {c}
                </div>
              ))}
            </div>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-12 py-5 bg-geetato-pink text-white rounded-full font-black text-xl hover:shadow-2xl transition-all"
            >
              Start Your Own Story <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
