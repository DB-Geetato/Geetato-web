import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/photo-1568254183919-78a4f43a2877-resized-1769581213611.jpeg", category: "Artisan Breads", title: "Fresh Sourdough" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/photo-1568254183919-78a4f43a2877-resized-1769581213611.jpeg", category: "Artisan Breads", title: "Multigrain Loaf" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/photo-1568254183919-78a4f43a2877-resized-1769581213611.jpeg", category: "Healthy Snacks", title: "Ragi Cookies" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/photo-1568254183919-78a4f43a2877-resized-1769581213611.jpeg", category: "Corporate Hampers", title: "Festive Gift Box" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/photo-1568254183919-78a4f43a2877-resized-1769581213611.jpeg", category: "Custom Cakes", title: "Celebration Cake" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/photo-1568254183919-78a4f43a2877-resized-1769581213611.jpeg", category: "Production", title: "Artisan Methods" },
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
                  src={`${img.src}?width=800&height=800&resize=contain`}
                  alt={img.title}
                  fill
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
