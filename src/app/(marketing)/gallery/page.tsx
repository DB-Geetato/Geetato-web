import Image from "next/image";

const GALLERY_IMAGES = [
  { 
    src: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?q=80&w=2070&auto=format&fit=crop", 
    category: "Artisan Breads", 
    title: "Fresh Sourdough",
    alt: "Freshly baked artisan sourdough bread with a crispy crust and soft interior - Geetato Bakery Ghaziabad"
  },
  { 
    src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070&auto=format&fit=crop", 
    category: "Artisan Breads", 
    title: "Multigrain Loaf",
    alt: "Nutritious multigrain bread loaf sliced and ready for serving - Premium Bakery Supplier Delhi NCR"
  },
  { 
    src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1964&auto=format&fit=crop", 
    category: "Healthy Snacks", 
    title: "Ragi Cookies",
    alt: "Healthy ragi cookies made with no refined sugar and no preservatives - Geetato Bakes & Bliss"
  },
  { 
    src: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=2012&auto=format&fit=crop", 
    category: "Corporate Hampers", 
    title: "Festive Gift Box",
    alt: "Premium corporate gift hamper with assorted bakery treats and festive packaging"
  },
  { 
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089&auto=format&fit=crop", 
    category: "Custom Cakes", 
    title: "Celebration Cake",
    alt: "Exquisite custom celebration cake with elegant frosting and decorations - Bespoke Cakes Indirapuram"
  },
  { 
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop", 
    category: "Production", 
    title: "Artisan Methods",
    alt: "Behind the scenes at Geetato bakery production facility showing professional artisan baking methods"
  },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-geetato-cream py-20 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-geetato-charcoal sm:text-6xl">
            Our <span className="text-geetato-pink">Gallery</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A visual journey through our artisan bakes, healthy snacks, and professional production facility.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Artisan Breads", "Healthy Snacks", "Corporate Hampers", "Custom Cakes", "Production"].map((tab) => (
              <button
                key={tab}
                className="px-6 py-2 rounded-full border border-geetato-charcoal/20 text-sm font-bold hover:bg-geetato-pink hover:text-white hover:border-geetato-pink transition-all"
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-geetato-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-geetato-pink text-xs font-bold uppercase tracking-widest mb-2">{img.category}</span>
                  <h3 className="text-white text-xl font-bold">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
