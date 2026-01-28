import Link from "next/link";
import Image from "next/image";
import { Heart, Target, Lightbulb, Handshake, Leaf, Milestone, Users, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Geetato - The Story of Geetika Joshi & Bakes & Bliss",
  description: "Learn about Geetika Joshi's journey from a home kitchen to serving 50+ corporations. Discover the Geetato mission for healthy, artisan bakery products.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-geetato-cream py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-geetato-charcoal sm:text-6xl">
                The Story Behind <span className="text-geetato-pink">Geetato</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded by Geetika Joshi, Geetato Bakes & Bliss is the culmination of a lifelong passion for artisan baking and a commitment to clean, healthy nutrition.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=600&q=85&fm=webp"
                alt="Geetika Joshi - Founder of Geetato Bakes & Bliss Ghaziabad"
                fill
                className="object-cover"
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-geetato-pink/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Geetika's Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-12">
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <h2 className="text-3xl font-bold text-geetato-charcoal mb-8">From a Home Kitchen to 50+ Corporations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
                  <div className="space-y-6">
                    <p>
                      Geetika Joshi's journey began with a simple observation: the market was flooded with bakery products laden with preservatives, refined sugar, and palm oil. As a passionate baker, she knew there was a better way—one that didn't compromise health for taste.
                    </p>
                    <p>
                      In 2020, Geetika started experimenting with traditional artisan methods in her home kitchen in Ghaziabad. Her goal was to create breads and snacks that were as nutritious as they were delicious.
                    </p>
                  </div>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-geetato-cream">
                    <Image 
                      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
                      alt="Artisan baking process at Geetato Bakes & Bliss"
                      fill
                      className="object-cover"
                      quality={85}
                    />
                  </div>
                </div>
                <p>
                  Recognizing the growing demand for healthy, high-quality catering in the corporate sector, Geetika pivoted to include B2B solutions. She realized that corporate employees deserved better than the standard factory-produced snacks.
                </p>
                <p>
                  Today, Geetato operates from a state-of-the-art facility in Indirapuram, serving some of India's largest corporations and premium hotel chains. Every product is still overseen by Geetika herself, ensuring that the brand's core values—Quality, Health, and Reliability—are never compromised.
                </p>
              </div>

              {/* Founder's Quote */}
              <div className="bg-geetato-cream p-12 rounded-[2.5rem] relative italic text-2xl text-geetato-charcoal text-center shadow-inner">
                <span className="absolute top-4 left-8 text-8xl text-geetato-pink opacity-10">"</span>
                Our mission isn't just to bake bread; it's to provide the foundation for a healthier lifestyle, one artisan bite at a time.
                <span className="block mt-4 text-sm font-bold not-italic text-geetato-pink uppercase tracking-widest">— Geetika Joshi, Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-24 bg-geetato-charcoal text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-geetato-pink/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="group flex flex-col gap-8 rounded-[3rem] bg-white/5 p-12 border border-white/10 transition-all hover:bg-white/10 hover:border-geetato-pink/50">
              <div className="w-20 h-20 rounded-2xl bg-geetato-pink flex items-center justify-center shadow-lg shadow-geetato-pink/20">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold">Our Vision</h3>
              <p className="text-xl text-white/60 leading-relaxed">
                To be the global benchmark for artisan excellence, where every kitchen and corporation across India recognizes Geetato as the gold standard for premium, health-first bakery solutions.
              </p>
            </div>
            <div className="group flex flex-col gap-8 rounded-[3rem] bg-white/5 p-12 border border-white/10 transition-all hover:bg-white/10 hover:border-geetato-pink/50">
              <div className="w-20 h-20 rounded-2xl bg-geetato-pink flex items-center justify-center shadow-lg shadow-geetato-pink/20">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold">Our Mission</h3>
              <p className="text-xl text-white/60 leading-relaxed">
                To consistently deliver world-class baked products combining exquisite flavors, premium ingredients, and impeccable presentation, while empowering our corporate partners with reliable, sustainable supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">Our Journey of <span className="text-geetato-pink">Growth</span></h2>
          <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-geetato-pink before:to-transparent">
            {[
              { year: "2020", title: "The Beginning", desc: "Geetika starts baking artisan sourdough and healthy snacks from her home kitchen." },
              { year: "2021", title: "Corporate Launch", desc: "First B2B partnership signed with a leading MNC in Noida for healthy snacks." },
              { year: "2022", title: "Facility Expansion", desc: "Moved to a dedicated production facility in Indirapuram to handle growing B2B demand." },
              { year: "2023", title: "Portfolio Milestone", desc: "Product range expands to 100+ items, including custom corporate gifting solutions." },
              { year: "2024", title: "Trusted Partner", desc: "Celebrating 50+ active corporate clients and expansion into premium hotel chains." },
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-geetato-pink text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-xs">
                  {item.year}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-geetato-cream/30 border border-geetato-cream hover:bg-geetato-cream transition-all">
                  <h4 className="font-bold text-geetato-pink mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-geetato-cream/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-20">The Passionate <span className="text-geetato-pink">Minds</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: "Geetika Joshi", role: "Founder & Master Baker", icon: Users },
              { name: "Operations Head", role: "Quality & Logistics", icon: Handshake },
              { name: "Sales Director", role: "B2B Relations", icon: Award },
              { name: "Chef de Partie", role: "Artisan Production", icon: Milestone },
            ].map((member, i) => (
              <div key={i} className="group flex flex-col items-center">
                <div className="w-48 h-48 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 border-4 border-white transition-all group-hover:border-geetato-pink group-hover:-translate-y-2">
                  <member.icon className="h-16 w-16 text-geetato-charcoal/20 group-hover:text-geetato-pink transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-geetato-charcoal">{member.name}</h4>
                <p className="text-geetato-pink font-medium">{member.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-20 text-muted-foreground max-w-2xl mx-auto italic">
            Backed by a team of 15+ dedicated artisans and delivery experts ensuring your bakes reach you fresh, every single time.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-geetato-pink text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Work With a Partner Who Cares</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join the 50+ corporations that have transformed their bakery supply chain with Geetato.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/contact"
              className="px-10 py-4 bg-white text-geetato-pink rounded-full font-bold text-lg hover:bg-geetato-cream transition-all shadow-xl"
            >
              Get in Touch
            </Link>
            <Link 
              href="/b2b"
              className="px-10 py-4 bg-geetato-charcoal text-white rounded-full font-bold text-lg hover:bg-black transition-all shadow-xl"
            >
              B2B Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
