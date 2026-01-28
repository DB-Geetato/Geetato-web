import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Eye, 
  ShoppingCart, 
  Package, 
  Globe, 
  Award, 
  Truck, 
  ShieldCheck,
  FileText,
  Zap,
  Gift,
  Utensils,
  Layers
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artisan Breads & Healthy Snacks - Bulk Orders | Geetato Ghaziabad",
  description: "85+ premium bread varieties, roasted makhana, cookies, dried fruits. No preservatives, export-ready quality. MOQ flexible, daily fresh delivery NCR.",
};

const ARTISAN_BREADS = [
  { 
    category: "Sourdough Collection", 
    items: ["Classic", "Whole Wheat", "Rye", "Jalapeño Cheddar"],
    desc: "Naturally leavened for 48 hours, our sourdough offers superior crust, airy crumb, and gut-friendly benefits.",
    image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  },
  { 
    category: "European Classics", 
    items: ["French Baguette", "Ciabatta", "Focaccia varieties"],
    desc: "Authentic continental textures and flavors, perfect for sandwiches, dipping, or as table bread.",
    image: "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  },
  { 
    category: "Brioche Collection", 
    items: ["Loaf", "Burger Buns", "Sweet Buns"],
    desc: "Enriched with premium butter and eggs for a soft, pillowy texture that melts in your mouth.",
    image: "https://images.unsplash.com/photo-1606101100171-89e4939b4f05?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  },
  { 
    category: "Sliced Breads", 
    items: ["Multigrain", "Whole Wheat", "Honey & Oat variants"],
    desc: "Daily staples reimagined with 100% whole grains and zero preservatives for the health-conscious family.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  },
  { 
    category: "Indian Specialty", 
    items: ["Pav (Ladi & Atta)", "Kulcha varieties"],
    desc: "Traditional Indian favorites made with artisan precision, ensuring consistent fluffiness and taste.",
    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  },
  { 
    category: "Flatbreads", 
    items: ["Pita", "Kuboos", "Tortillas"],
    desc: "Authentic middle-eastern and mexican flatbreads, perfect for wraps, falafels, and tacos.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  },
  { 
    category: "QSR Buns", 
    items: ["Burger buns (White/Black sesame, Multigrain)", "Hot Dog Buns"],
    desc: "Specially formulated for high-volume commercial use with excellent structural integrity.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  },
  { 
    category: "Pizza Bases", 
    items: ["Thin", "Thick", "Whole Wheat", "Ragi", "Neapolitan", "Gluten-Free"],
    desc: "Versatile bases that provide the perfect canvas for your culinary creations, from classic to healthy.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  },
  { 
    category: "Specialty", 
    items: ["Bagels", "Dinner Rolls", "Panini", "Crackers & Crostini"],
    desc: "A diverse range of bite-sized and specialty bakes to complete any menu or appetizer board.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  }
];

const HEALTHY_SNACKS = [
  {
    category: "Roasted Makhana",
    items: ["Plain", "Masala", "Peri Peri", "Cheese (Export Ready)"],
    desc: "Light, crunchy, and packed with protein. Our fox nuts are dry-roasted and seasoned with natural spices.",
    image: "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  },
  {
    category: "Premium Cookies",
    items: ["Ragi", "Multigrain", "Oats", "Sugar-Free (Stevia)", "Protein Cookies"],
    desc: "Gourmet cookies that balance indulgence with health, using alternative flours and natural sweeteners.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  },
  {
    category: "Health Snacks",
    items: ["Roasted Chana", "Seed Mix (Pumpkin, Sunflower, Flax)", "Trail Mix"],
    desc: "The perfect energy boost for busy days, filled with essential fatty acids and minerals.",
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  },
  {
    category: "Millet Products",
    items: ["Millet Puffs", "Jowar Crackers", "Millet Bread"],
    desc: "Harnessing the power of ancient Indian grains for a gluten-friendly, fiber-rich snacking experience.",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddf13cf?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  }
];

const EXPORT_READY = [
  {
    category: "Dried Fruits Range",
    items: ["Apple", "Banana", "Mango", "Pineapple", "Papaya", "Guava", "Orange", "Lemon slices"],
    desc: "Sustainably sourced and gently dried to preserve vitamins and natural sweetness without added sugar.",
    image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  },
  {
    category: "Superfruit Collection",
    items: ["Strawberry", "Blueberry", "Cranberry", "Cherry", "Raspberry", "Kiwi"],
    desc: "High-antioxidant superfruits available in low-sugar or unsweetened variants for global markets.",
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  },
  {
    category: "Indian Specialty",
    items: ["Jackfruit Chips", "Coconut Chips", "Amla slices", "Dried Dates"],
    desc: "Unique Indian produce processed to international quality standards for the global diaspora.",
    image: "https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  },
  {
    category: "Functional Ingredients",
    items: ["Psyllium Husk", "Inulin Fiber", "Oat Fiber", "Chia/Flax Fiber"],
    desc: "High-purity dietary fibers and superseeds for health-focused food manufacturing and retail.",
    image: "https://images.unsplash.com/photo-1623943094119-97f22619284d?auto=format&fit=crop&w=800&h=600&q=85&fm=webp"
  }
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Artisan Breads */}
        <section className="relative pt-32 pb-24 bg-geetato-cream overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1920&h=1080&q=85&fm=webp"
              alt="Artisan bakery spread variety overhead shot - Geetato Bakes & Bliss"
              fill
              className="object-cover"
              priority
              quality={85}
            />
          </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 bg-white/80 backdrop-blur-md p-12 rounded-[3rem] shadow-xl border border-white">
            <h1 className="text-5xl md:text-7xl font-bold text-geetato-charcoal mb-8 leading-tight">
              Artisan <span className="text-geetato-pink">Bread Collection</span> 🥖
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Our master bakers use 48-hour fermentation and traditional stone-baking techniques to create breads with exceptional character, flavor, and nutrition.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-geetato-charcoal/10 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-geetato-pink" /> FSSAI Certified
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-geetato-charcoal/10 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-geetato-pink" /> No Preservatives
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-geetato-charcoal/10 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-geetato-pink" /> Daily Fresh
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-geetato-charcoal/10 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-geetato-pink" /> Artisan Crafted
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTISAN_BREADS.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] border border-geetato-charcoal/5 hover:shadow-2xl transition-all group overflow-hidden flex flex-col">
                <div className="relative h-64 w-full">
                  <Image 
                    src={cat.image}
                    alt={`${cat.category} collection - Geetato Bakes & Bliss`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white">{cat.category}</h3>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{cat.desc}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-geetato-charcoal/80 font-medium">
                        <div className="w-1.5 h-1.5 bg-geetato-pink rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-geetato-pink hover:gap-3 transition-all">
                    Request Bulk Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export-Ready Banner Section */}
      <section className="bg-geetato-charcoal py-16 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <Globe className="absolute -right-20 -bottom-20 w-96 h-96 text-white" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-gradient-to-r from-geetato-pink to-[#ff4081] p-12 md:p-16 rounded-[3rem] shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-6">Global Standards</span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  EXPORT-READY <br />PRODUCTS 🌍
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg font-bold">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 shrink-0" /> International Quality Standards
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 shrink-0" /> FSSAI Certified
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 shrink-0" /> Export Documentation Support
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck className="h-6 w-6 shrink-0" /> Global Shipping Partners
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Link href="/contact" className="px-10 py-5 bg-white text-geetato-pink rounded-full font-black text-xl hover:scale-105 transition-transform shadow-xl">
                  Enquire for Export
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export-Ready Products Details */}
      <section id="export" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-geetato-charcoal mb-6">Superfruits & Functional Ingredients</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Geetato&apos;s export division specializes in premium dehydrated fruits, superfruit powders, and functional fibers processed at low temperatures to ensure maximum nutrient retention.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {EXPORT_READY.map((cat, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 p-6 bg-geetato-cream/20 rounded-[3rem] border border-geetato-cream group hover:bg-geetato-cream/40 transition-all overflow-hidden">
                <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                  <Image 
                    src={cat.image}
                    alt={`${cat.category} - Export Quality Geetato Bakes & Bliss`}
                    fill
                    className="object-cover rounded-2xl"
                    quality={85}
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
                  <button className="flex items-center gap-2 font-bold text-geetato-charcoal hover:text-geetato-pink transition-colors">
                    View Technical Specs <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthy Snacks Section */}
      <section id="snacks" className="py-24 bg-geetato-cream/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-black text-geetato-charcoal mb-8">HEALTHY SNACKS COLLECTION 🍪</h2>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Clean-label snacking for the modern lifestyle. No palm oil, no refined sugar, and zero preservatives—just pure goodness in every bite.
             </p>
             <div className="flex flex-wrap justify-center gap-6 mb-12">
                <span className="flex items-center gap-2 px-6 py-2 bg-white text-geetato-charcoal rounded-full font-bold text-sm shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-geetato-pink" /> Export Ready
                </span>
                <span className="flex items-center gap-2 px-6 py-2 bg-white text-geetato-charcoal rounded-full font-bold text-sm shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-geetato-pink" /> High Fiber
                </span>
                <span className="flex items-center gap-2 px-6 py-2 bg-white text-geetato-charcoal rounded-full font-bold text-sm shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-geetato-pink" /> Stevia Sweetened
                </span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HEALTHY_SNACKS.map((snack, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] border border-geetato-cream hover:shadow-xl transition-all relative overflow-hidden group flex flex-col">
                <div className="relative h-48 w-full">
                  <Image 
                    src={snack.image}
                    alt={`${snack.category} - Healthy snacks by Geetato`}
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-geetato-charcoal mb-4">{snack.category}</h3>
                  <p className="text-muted-foreground text-xs mb-6 leading-relaxed">{snack.desc}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {snack.items.map((item, i) => (
                      <li key={i} className="text-xs font-bold text-geetato-charcoal/60 uppercase tracking-widest">{item}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="w-full py-3 bg-geetato-charcoal text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-geetato-pink transition-colors">
                    Bulk Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate B2B Solutions */}
      <section id="b2b" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-3 text-geetato-pink font-bold uppercase tracking-widest text-sm mb-6">
                <span className="w-10 h-0.5 bg-geetato-pink"></span>
                Business Solutions
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-geetato-charcoal mb-8 leading-tight">
                CORPORATE B2B <br />SOLUTIONS 📦
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Geetato is more than a bakery; we are a strategic supply chain partner for leading HORECA and corporate entities, ensuring quality and consistency at scale.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-geetato-pink/10 flex items-center justify-center text-geetato-pink shrink-0">
                    <Utensils className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-geetato-charcoal mb-2">Bulk Bread Supply</h4>
                    <p className="text-sm text-muted-foreground">Daily fresh delivery for restaurants, hotels & cloud kitchens.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-geetato-pink/10 flex items-center justify-center text-geetato-pink shrink-0">
                    <Gift className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-geetato-charcoal mb-2">Corporate Gifting</h4>
                    <p className="text-sm text-muted-foreground">Curated healthy snack hampers for employees and clients.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-geetato-pink/10 flex items-center justify-center text-geetato-pink shrink-0">
                    <Package className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-geetato-charcoal mb-2">Catering Boxes</h4>
                    <p className="text-sm text-muted-foreground">Sandwiches, wraps, and breakfast items for events.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-geetato-pink/10 flex items-center justify-center text-geetato-pink shrink-0">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-geetato-charcoal mb-2">Custom Packaging</h4>
                    <p className="text-sm text-muted-foreground">White-label and custom branding available for bulk orders.</p>
                  </div>
                </div>
              </div>

              <Link href="/b2b" className="inline-flex items-center gap-3 px-10 py-5 bg-geetato-charcoal text-white rounded-full font-black text-lg hover:bg-black transition-all group">
                Explore B2B Partner Program <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-geetato-cream">
                <Image 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80"
                  alt="Premium B2B catering solutions and bulk supply - Geetato Bakes & Bliss"
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-geetato-pink text-white p-8 rounded-3xl shadow-xl max-w-[200px]">
                <p className="text-3xl font-black mb-1">50+</p>
                <p className="text-sm font-bold uppercase tracking-wider">Active B2B Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Cakes Section */}
      <section id="cakes" className="py-24 bg-geetato-cream/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-geetato-charcoal mb-6">CUSTOM CAKES 🎂</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Masterpieces crafted for your most significant moments. Our designer cakes blend artistic vision with premium gourmet flavors.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Birthday Cakes", desc: "Themed designs that make every birthday magical.", image: "https://images.unsplash.com/photo-1535141192574-5d4897c825a0?auto=format&fit=crop&w=600&h=800&q=85&fm=webp" },
                { title: "Wedding Cakes", desc: "Elegant multi-tier centerpieces for your special day.", image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&w=600&h=800&q=85&fm=webp" },
                { title: "Corporate Event Cakes", desc: "Branded cakes for milestones and office launches.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&h=800&q=85&fm=webp" },
                { title: "Themed Designer Cakes", desc: "Bespoke creations limited only by imagination.", image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=600&h=800&q=85&fm=webp" }
              ].map((cake, idx) => (
              <div key={idx} className="bg-white rounded-[3rem] border border-geetato-cream text-center hover:shadow-2xl transition-all group overflow-hidden flex flex-col">
                <div className="relative h-64 w-full">
                  <Image 
                    src={cake.image}
                    alt={`${cake.title} - Designer cake portfolio by Geetato`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <div className="p-8 flex-1 flex flex-col items-center">
                  <h3 className="text-xl font-black text-geetato-charcoal mb-4">{cake.title}</h3>
                  <p className="text-muted-foreground text-sm mb-8 leading-relaxed">{cake.desc}</p>
                  <Link href="/contact" className="font-bold text-geetato-pink border-b-2 border-geetato-pink pb-1 hover:text-geetato-charcoal hover:border-geetato-charcoal transition-all mt-auto">
                    Book Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-geetato-pink text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-8">Ready to order?</h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 font-medium">
            Download our complete 2026 product guide or connect with our sales team for custom requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-white text-geetato-pink rounded-full font-black text-xl hover:bg-geetato-cream transition-all shadow-2xl flex items-center gap-3">
              <Download className="h-6 w-6" /> Download Catalog PDF
            </button>
            <Link href="/contact" className="px-10 py-5 bg-geetato-charcoal text-white rounded-full font-black text-xl hover:bg-black transition-all shadow-2xl">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
