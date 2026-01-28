import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Heart, Zap, Award, Factory, Truck, Users, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Geetato? - Quality, Health & Reliability in Bakery Supply",
  description: "Discover why 50+ corporations trust Geetato. We focus on clean ingredients, 48hr fermentation, export-grade quality, and reliable 24/7 supply chain capability.",
};

export default function WhyGeetatoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-geetato-cream py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-geetato-charcoal sm:text-7xl mb-6">
            Why <span className="text-geetato-pink">Geetato?</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are more than just a bakery. We are a reliable partner for your business, focusing on three core pillars: Quality, Health, and Reliability.
          </p>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
                alt="Quality Artisan Bakes"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 text-geetato-pink font-bold uppercase tracking-widest text-sm mb-6">
                <ShieldCheck className="h-6 w-6" />
                Commitment to Quality
              </div>
              <h2 className="text-4xl font-bold text-geetato-charcoal mb-8">Uncompromising Standards</h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  At Geetato, quality is not a metric—it's a lifestyle. Every loaf of bread, every batch of cookies, and every cake is crafted with precision.
                </p>
                <ul className="space-y-4">
                  {[
                    "FSSAI compliant production facility",
                    "Batch-wise quality control checks",
                    "Export-grade ingredient sourcing",
                    "Traditional 48-hour slow fermentation process",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-geetato-charcoal">
                      <CheckCircle2 className="h-5 w-5 text-geetato-pink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Focus */}
      <section className="py-24 bg-geetato-cream/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 text-geetato-pink font-bold uppercase tracking-widest text-sm mb-6">
                <Heart className="h-6 w-6" />
                Focus on Health
              </div>
              <h2 className="text-4xl font-bold text-geetato-charcoal mb-8">Clean Ingredients, Real Taste</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that food should nourish the body. That's why our products are designed with a "Clean Label" philosophy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "No Preservatives", desc: "No chemicals to extend shelf life." },
                  { title: "No Refined Sugar", desc: "Naturally sweetened options available." },
                  { title: "No Palm Oil", desc: "We use only premium fats like butter." },
                  { title: "Zero Trans Fats", desc: "Heart-healthy artisan bakes." },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-geetato-pink/10">
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80"
                alt="Healthy Ingredients"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reliability & Scale */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-geetato-pink font-bold uppercase tracking-widest text-sm mb-6">
              <Zap className="h-6 w-6" />
              Reliability at Scale
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-geetato-charcoal mb-8">Your 24/7 Supply Partner</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the pressures of running a large business. Our supply chain is built for resilience and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: Factory, 
                title: "Scalable Production", 
                desc: "Equipped to handle high-volume corporate and HORECA orders daily without compromising quality." 
              },
              { 
                icon: Truck, 
                title: "Reliable Logistics", 
                desc: "Daily fresh delivery across Ghaziabad, Noida, and Greater Noida with strict temperature control." 
              },
              { 
                icon: Users, 
                title: "Dedicated Support", 
                desc: "Every B2B partner gets a dedicated account manager for seamless ordering and customization." 
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-10 rounded-[3rem] bg-geetato-cream/30 border border-geetato-cream hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-geetato-pink text-white flex items-center justify-center mb-8 shadow-lg transition-transform group-hover:scale-110">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Badges */}
      <section className="py-24 bg-geetato-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-16 text-center">
            {[
              { title: "FSSAI Certified", icon: ShieldCheck },
              { title: "100% Pure Veg", icon: Award },
              { title: "Made in India", icon: Factory },
              { title: "Daily Fresh", icon: Zap },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full border-2 border-geetato-pink/30 flex items-center justify-center text-geetato-pink">
                  <item.icon className="h-10 w-10" />
                </div>
                <span className="font-bold uppercase tracking-widest text-sm">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-geetato-pink text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready for a better supply chain?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Experience the Geetato difference. Let's discuss how we can support your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/contact"
              className="px-12 py-5 bg-white text-geetato-pink rounded-full font-black text-xl hover:bg-geetato-cream transition-all shadow-2xl"
            >
              Get Started Today
            </Link>
            <Link 
              href="/products"
              className="px-12 py-5 bg-geetato-charcoal text-white rounded-full font-black text-xl hover:bg-black transition-all shadow-2xl flex items-center gap-2"
            >
              Browse Products <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
