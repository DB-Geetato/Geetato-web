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
                  The Baker's Story: <span className="text-geetato-pink">A Journey of Pure Passion</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  From a small home-kitchen obsession to a global export-grade artisan bakery, the Geetato story is built on one non-negotiable principle: <span className="text-geetato-pink font-bold">Zero Compromise.</span>
                </p>
              </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=2070&auto=format&fit=crop"
                    alt="Artisan hands working with fresh dough at Geetato bakery"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
            </div>
          </div>
        </section>

        {/* Geetika's Narrative */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl flex flex-col gap-8 text-lg leading-relaxed text-muted-foreground">
              <h2 className="text-3xl font-bold text-geetato-charcoal">Obsession with Ingredients</h2>
              <p>
                Geetika's journey didn't start with a business plan; it started with an obsession. An obsession with what goes into our daily bread. In an era of industrial baking filled with palm oil, preservatives, and artificial enhancers, she set out to reclaim the purity of artisan baking.
              </p>
              <p>
                "I refuse to use ingredients I wouldn't feed my own children," Geetika often says. This philosophy is why you will never find palm oil, refined sugars, or chemical preservatives in any Geetato product. We believe that real taste comes from real ingredients: premium flours, pure butter, and the slow, natural fermentation of sourdough.
              </p>
              <p>
                What began in a humble home kitchen quickly transformed as corporate partners and premium hotels recognized the difference. Today, Geetato is a trusted B2B supplier for 50+ partners, scaling from local delivery to export-ready healthy snacks, all while maintaining the handcrafted touch that defines our brand.
              </p>
              <p>
                From Ghaziabad to the world, our narrative is one of growth without losing our soul. Every batch is still supervised with the same artisanal rigor, ensuring that every bite is as wholesome as it is delicious.
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
