import Image from "next/image";
import Link from "next/link";
import { Globe, ShieldCheck, Award, FileText, Truck, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Quality Dried Fruits, Makhana & Healthy Snacks | Indian Exporter",
  description: "FSSAI & HACCP certified export range. Dried fruits, superfood powders, roasted makhana. Documentation support, global shipping partners.",
};

const EXPORT_PRODUCTS = [
  {
    category: "Dried Fruits Range",
    items: ["Apple", "Banana", "Mango", "Pineapple", "Papaya", "Guava", "Orange", "Lemon slices"],
    desc: "Sustainably sourced and gently dried to preserve vitamins and natural sweetness without added sugar.",
    image: "/images/products/export-fruit.jpg"
  },
  {
    category: "Superfruit Collection",
    items: ["Strawberry", "Blueberry", "Cranberry", "Cherry", "Raspberry", "Kiwi"],
    desc: "High-antioxidant superfruits available in low-sugar or unsweetened variants for global markets.",
    image: "/images/products/export-fruit.jpg"
  },
  {
    category: "Indian Specialty",
    items: ["Jackfruit Chips", "Coconut Chips", "Amla slices", "Dried Dates"],
    desc: "Unique Indian produce processed to international quality standards for the global diaspora.",
    image: "/images/products/export-fruit.jpg"
  },
  {
    category: "Functional Ingredients",
    items: ["Psyllium Husk", "Inulin Fiber", "Oat Fiber", "Chia/Flax Fiber"],
    desc: "High-purity dietary fibers and superseeds for health-focused food manufacturing and retail.",
    image: "/images/products/export-fruit.jpg"
  }
];

export default function ExportSolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-geetato-charcoal py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Globe className="absolute -right-20 -bottom-20 w-96 h-96 text-white" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Global <span className="text-geetato-pink">Export Solutions</span> 🌍
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12">
            Taking the best of Indian bakes and superfoods to the global stage. FSSAI & HACCP certified quality for international markets.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="px-10 py-5 bg-geetato-pink text-white rounded-full font-black text-xl hover:scale-105 transition-transform shadow-xl">
              Partner with Us
            </Link>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 bg-geetato-cream/30 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "FSSAI & HACCP", desc: "Certified production facilities following global safety standards." },
              { icon: Award, title: "Premium Grade", desc: "Only the highest quality raw materials processed for export." },
              { icon: FileText, title: "Full Documentation", desc: "End-to-end support for international shipping and customs." },
              { icon: Truck, title: "Global Logistics", desc: "Reliable shipping partners for air and sea freight worldwide." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start p-6 bg-white rounded-3xl shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-geetato-pink/10 flex items-center justify-center text-geetato-pink shrink-0">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-geetato-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Detail */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-geetato-charcoal mb-6">Our Export Range</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clean-label, nutrient-dense products designed for international retail and manufacturing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {EXPORT_PRODUCTS.map((cat, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 p-8 bg-geetato-cream/20 rounded-[3rem] border border-geetato-cream group hover:bg-geetato-cream/40 transition-all overflow-hidden">
                <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                  <Image 
                    src={cat.image}
                    alt={cat.category}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-geetato-charcoal mb-4">{cat.category}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cat.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-geetato-charcoal/70 border border-geetato-charcoal/5">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link href="/contact" className="flex items-center gap-2 font-bold text-geetato-charcoal hover:text-geetato-pink transition-colors">
                    Request Export Pricing <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Presence */}
      <section className="py-24 bg-geetato-cream/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest text-geetato-charcoal">Global Standards Compliance</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-60">
            {["FSSAI", "HACCP", "APEDA", "ISO 22000", "MSME"].map((cert) => (
              <span key={cert} className="text-2xl font-black">{cert}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-geetato-pink text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Start Your Export Inquiry</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Connect with our export division for technical specifications, documentation support, and global shipping quotes.
          </p>
          <Link href="/contact" className="px-10 py-5 bg-white text-geetato-pink rounded-full font-black text-xl hover:bg-geetato-cream transition-all shadow-2xl inline-block">
            Contact Export Team
          </Link>
        </div>
      </section>
    </div>
  );
}
