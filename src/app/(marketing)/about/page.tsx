import Link from "next/link";
import Image from "next/image";
import { Heart, Target, Lightbulb, Handshake, Leaf, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-geetato-cream py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-geetato-charcoal sm:text-6xl">
                Our Story - From Passion to <span className="text-geetato-pink">Premium Partnership</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                The journey of Geetato is built on a simple promise: Fresh Bakes, Real Taste.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/photo-1568254183919-78a4f43a2877-resized-1769581213611.jpeg?width=1000&height=750&resize=contain"
                alt="Geetika's Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Geetika's Narrative */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl flex flex-col gap-8 text-lg leading-relaxed text-muted-foreground">
            <h2 className="text-3xl font-bold text-geetato-charcoal">A Vision for Quality</h2>
            <p>
              Geetika's passion for fresh, healthy baking started in a small home kitchen. Driven by a commitment to quality ingredients and traditional artisan methods, she began sharing her creations with friends and family, quickly gaining a reputation for excellence.
            </p>
            <p>
              What started as a labor of love soon evolved into Geetato Bakes & Bliss. Geetika recognized a gap in the market for premium, clean-label baked goods that corporations and high-end establishments could rely on daily.
            </p>
            <p>
              Today, Geetato has grown from that small kitchen into a trusted supplier for over 50 major corporations and premium HORECA establishments across the NCR. Every loaf of bread, every cookie, and every gift hamper still carries the same artisan touch and dedication to health that defined the very first batch.
            </p>
            <p>
              Our vision remains clear: to be a global leader in premium bakery solutions, setting new standards in quality, innovation, and customer experience, while never compromising on the authentic taste that our clients love.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-geetato-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-6 rounded-3xl bg-white/5 p-12">
              <Target className="h-12 w-12 text-geetato-pink" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-lg text-white/70">
                To be a global leader in premium bakery solutions, setting new standards in quality, innovation, and customer experience.
              </p>
            </div>
            <div className="flex flex-col gap-6 rounded-3xl bg-white/5 p-12">
              <Heart className="h-12 w-12 text-geetato-pink" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-lg text-white/70">
                To consistently deliver world-class baked products combining exquisite flavors, premium ingredients, and impeccable presentation, exceeding customer expectations through innovation, sustainability, and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { title: "Quality Excellence", desc: "Precision, passion, and premium ingredients in every batch.", icon: Star },
              { title: "Health Focus", desc: "No compromises, clean labels, and pure nutrition.", icon: Leaf },
              { title: "Reliability", desc: "Consistent, on-time, and a trustworthy partner for your business.", icon: Handshake },
              { title: "Innovation", desc: "Unique flavors, custom solutions, and continuous improvement.", icon: Lightbulb },
              { title: "Sustainability", desc: "Eco-friendly packaging and responsible sourcing.", icon: Heart },
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-geetato-cream/20 transition-all hover:bg-geetato-cream/50">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-geetato-pink/10 text-geetato-pink">
                  <value.icon className="h-8 w-8" />
                </div>
                <h4 className="font-bold">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-geetato-cream/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Ready to join the Geetato family?</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Whether you are a corporate buyer or a bread lover, we invite you to experience the Geetato difference.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-geetato-pink px-8 py-4 text-lg font-bold text-white transition-all hover:shadow-xl"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="rounded-full border-2 border-geetato-charcoal px-8 py-4 text-lg font-bold text-geetato-charcoal transition-all hover:bg-geetato-charcoal hover:text-white"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const Star = (props: any) => (
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
