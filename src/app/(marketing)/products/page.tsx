import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const PRODUCTS = {
    breads: [
      { name: "White Loaves", variants: "1kg, 700gm, 400gm" },
      { name: "Brown Loaves", variants: "1kg, 700gm, 400gm" },
      { name: "Multigrain Loaves", variants: "Daily Fresh" },
      { name: "Honey & Oat Bread", variants: "Premium Blend" },
      { name: "Garlic & Herbs Bread", variants: "Artisan" },
      { name: "Sourdough", variants: "Traditional" },
      { name: "Focaccia", variants: "Italian Style" },
      { name: "French Baguette", variants: "22-inch" },
      { name: "Burger Buns", variants: "Multigrain, Whole wheat" },
      { name: "Pita Bread", variants: "White, Brown" },
      { name: "Tortilla", variants: "Corn, Spinach, Beetroot" },
      { name: "Kuboos", variants: "3-inch to 6-inch" },
    ],
    snacks: [
      { name: "Oreo & Hazel Cookies", type: "Premium" },
      { name: "Chocolate Chip Cookies", type: "Classic" },
      { name: "Ragi Cookies", type: "Healthy" },
      { name: "Matcha & Pistachio", type: "Exotic" },
      { name: "Flavored Makhana", type: "Snack" },
      { name: "Mixed Nuts & Seeds", type: "Nutrition" },
      { name: "Dried Fig & Dates", type: "Natural" },
      { name: "Dried Pineapple & Amla", type: "Treats" },
    ],
    cakes: [
      { name: "Custom Celebration Cakes", type: "Bespoke" },
      { name: "Artisan Pastries", type: "Daily" },
      { name: "Tea Cakes", type: "Classic" },
      { name: "Premium Cupcakes", type: "Treats" },
    ]
  };
  
  export default function ProductsPage() {
    return (
      <div className="flex flex-col">
        <section className="bg-geetato-cream py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-geetato-charcoal sm:text-6xl">
              Premium Bakes for <span className="text-geetato-pink">Every Need</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              From artisan breads for professional kitchens to export-grade snacks and bespoke celebrations, Geetato delivers excellence across all categories.
            </p>
          </div>
        </section>
  
        {/* Artisan Breads */}
        <section id="breads" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Daily Breads (Artisan)</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Our daily-fresh artisan breads are FSSAI compliant, trusted by 50+ restaurants, hotels, and cloud kitchens. Consistent quality, bulk capability, and MOQ flexibility.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Daily Fresh Production",
                      "FSSAI Compliant",
                      "Bulk Order Capacity",
                      "MOQ Flexibility",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-geetato-pink" />
                        <span className="font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
                    alt="Assorted artisan bread collection - Freshly baked loaves for B2B supply"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
  
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {PRODUCTS.breads.map((product) => (
                <div key={product.name} className="flex flex-col p-6 rounded-2xl border bg-geetato-cream/10 transition-all hover:shadow-lg hover:border-geetato-pink/30">
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground italic mb-4">{product.variants}</p>
                  <Link 
                    href={`https://wa.me/919266093334?text=Hi%20Geetato,%20I%20am%20interested%20in%20bulk%20pricing%20for%20${encodeURIComponent(product.name)}...`}
                    target="_blank"
                    className="mt-auto block text-xs font-bold text-geetato-pink uppercase tracking-widest hover:underline"
                  >
                    Quick Inquiry
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Healthy Snacks */}
        <section id="snacks" className="py-24 bg-geetato-cream/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Export-Grade Snacks & Cookies</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                No preservatives. No refined sugar. No palm oil. Just premium ingredients and pure indulgence. Export-grade quality for corporate gifting and international wholesale.
              </p>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {PRODUCTS.snacks.map((snack) => (
                <div key={snack.name} className="flex flex-col gap-4 bg-white p-8 rounded-[2rem] shadow-sm transition-all hover:shadow-xl group">
                  <div className="h-12 w-12 rounded-full bg-geetato-pink/10 flex items-center justify-center text-geetato-pink group-hover:bg-geetato-pink group-hover:text-white transition-colors">
                    <span className="text-xs font-bold uppercase">{snack.type}</span>
                  </div>
                  <h3 className="font-bold text-xl">{snack.name}</h3>
                  <p className="text-sm text-muted-foreground italic mb-4">Pure ingredients, clean label.</p>
                  <Link 
                    href={`https://wa.me/919266093334?text=Hi%20Geetato,%20I%20am%20interested%20in%20bulk%20pricing%20for%20${encodeURIComponent(snack.name)}...`}
                    target="_blank"
                    className="mt-auto block text-center rounded-full bg-geetato-pink/10 py-3 text-sm font-bold text-geetato-pink transition-colors hover:bg-geetato-pink hover:text-white"
                  >
                    Quick Inquiry
                  </Link>
                </div>
              ))}
            </div>
  
            <div className="rounded-3xl bg-geetato-charcoal p-12 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <CheckCircle2 className="h-8 w-8 text-geetato-pink mx-auto mb-4" />
                  <h4 className="font-bold text-xl mb-2">No Refined Sugar</h4>
                  <p className="text-white/60">Naturally sweetened alternatives for guilt-free snacking.</p>
                </div>
                <div>
                  <CheckCircle2 className="h-8 w-8 text-geetato-pink mx-auto mb-4" />
                  <h4 className="font-bold text-xl mb-2">No Palm Oil</h4>
                  <p className="text-white/60">Healthy fats only. Good for you, good for the planet.</p>
                </div>
                <div>
                  <CheckCircle2 className="h-8 w-8 text-geetato-pink mx-auto mb-4" />
                  <h4 className="font-bold text-xl mb-2">No Preservatives</h4>
                  <p className="text-white/60">Freshly baked and packed with zero artificial additives.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Occasion Cakes */}
        <section id="cakes" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Occasion Cakes & Pastries</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Bespoke creations for your most special moments. From wedding tiers to corporate milestones, we bake memories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.cakes.map((cake) => (
                <div key={cake.name} className="flex flex-col gap-4 bg-geetato-cream/30 p-8 rounded-[2rem] shadow-sm transition-all hover:shadow-xl group">
                  <div className="h-12 w-12 rounded-full bg-geetato-pink/10 flex items-center justify-center text-geetato-pink group-hover:bg-geetato-pink group-hover:text-white transition-colors">
                    <span className="text-xs font-bold uppercase">{cake.type}</span>
                  </div>
                  <h3 className="font-bold text-xl">{cake.name}</h3>
                  <p className="text-sm text-muted-foreground italic mb-4">Handcrafted excellence.</p>
                  <Link 
                    href={`https://wa.me/919266093334?text=Hi%20Geetato,%20I%20am%20interested%20in%20a%20custom%20order%20for%20${encodeURIComponent(cake.name)}...`}
                    target="_blank"
                    className="mt-auto block text-center rounded-full bg-geetato-pink/10 py-3 text-sm font-bold text-geetato-pink transition-colors hover:bg-geetato-pink hover:text-white"
                  >
                    Quick Inquiry
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="py-24 bg-geetato-cream/20 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-geetato-charcoal">Ready to partner for bulk supply?</h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-geetato-pink px-10 py-5 text-xl font-bold text-white transition-all hover:shadow-2xl group"
            >
              Discuss Bulk Supply
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </div>
    );
  }
