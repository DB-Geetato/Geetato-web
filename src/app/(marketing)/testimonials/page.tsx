import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Geetato is our go-to bread supplier. Fresh every morning, consistent quality, and they've never let us down. Highly recommended!",
    name: "Raj Kumar",
    position: "Owner, Premium Dining Restaurant",
    category: "Restaurant",
  },
  {
    quote: "Perfect for our employee gifting program. Quality, variety, and professional service. Our team loves the healthy snack options.",
    name: "Priya Singh",
    position: "HR Manager, Tech Corporate",
    category: "Corporate",
  },
  {
    quote: "Reliable supply, custom specs, quick turnaround—everything we need. Geetato is an essential partner for our cloud kitchen business.",
    name: "Amit Patel",
    position: "Founder, Gourmet Cloud Kitchen",
    category: "Cloud Kitchen",
  },
  {
    quote: "The focaccia and specialty breads are exceptional. Our guests comment on the quality. This is why we choose Geetato.",
    name: "Vikram Sharma",
    position: "Executive Chef, 5-Star Hotel",
    category: "Hotel",
  },
  {
    quote: "For our corporate events and catering, Geetato delivers premium quality with custom solutions. Excellent service!",
    name: "Neha Desai",
    position: "Event Manager, Financial Institution",
    category: "Institution",
  },
  {
    quote: "The festive hampers we gifted clients were absolutely premium. Geetato's attention to detail is remarkable.",
    name: "Rajesh Verma",
    position: "HR Director, Multi-national Corp",
    category: "Corporate",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-geetato-cream py-20 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-geetato-charcoal sm:text-6xl">
            What Our <span className="text-geetato-pink">Clients Say</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 50 corporations, restaurants, and institutions trust Geetato for premium, reliable bakery solutions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="relative flex flex-col p-8 rounded-3xl border bg-white shadow-sm transition-all hover:shadow-xl group">
                <Quote className="absolute top-6 right-6 h-12 w-12 text-geetato-pink/10 group-hover:text-geetato-pink/20 transition-colors" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-geetato-gold text-geetato-gold" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-geetato-charcoal mb-8 italic">"{t.quote}"</p>
                <div className="mt-auto pt-6 border-t flex flex-col gap-1">
                  <p className="font-bold text-geetato-pink">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.position}</p>
                  <span className="mt-2 inline-block text-[10px] font-bold uppercase tracking-widest text-geetato-charcoal/40 border border-geetato-charcoal/20 rounded-full px-2 py-0.5 w-fit">
                    {t.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-geetato-cream/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 italic">Join our list of satisfied partners</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
            {["Panasonic", "Amazon", "Barclays", "Ericsson", "Axis Bank", "Crowe", "Jabra"].map((client) => (
              <span key={client} className="text-2xl font-black">{client}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
