import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Award, Zap, Heart, Leaf, Users, ShieldCheck, ArrowRight } from "lucide-react";

export default function WhyGeetatoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-geetato-charcoal py-20 text-white lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              The <span className="text-geetato-pink">Geetato</span> Difference
            </h1>
            <p className="mt-6 text-xl text-white/70">
              Why 50+ corporations and thousands of individuals choose Geetato Bakes & Bliss for their daily and bespoke needs.
            </p>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-geetato-pink/10 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-geetato-pink/5 blur-3xl" />
      </section>

      {/* Core Philosophies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-[3rem] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
                alt="Artisan Baking Process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-geetato-charcoal/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-sm font-bold uppercase tracking-widest text-geetato-pink">Authenticity First</p>
                <h3 className="text-3xl font-bold">Hand-crafted Excellence</h3>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-bold tracking-tight text-geetato-charcoal sm:text-4xl">
                Real Ingredients, Real Taste. <br />
                <span className="text-geetato-pink">No Compromises.</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "No Preservatives or Chemicals",
                    desc: "We believe in the purity of ingredients. Our products are free from artificial preservatives, ensuring you get the freshest taste possible.",
                    icon: Leaf,
                  },
                  {
                    title: "Zero Refined Sugar Options",
                    desc: "For the health-conscious, we offer a wide range of snacks and bakes with zero refined sugar, using natural alternatives.",
                    icon: Heart,
                  },
                  {
                    title: "No Palm Oil",
                    desc: "We prioritize your health and the environment by completely avoiding palm oil in all our baking processes.",
                    icon: ShieldCheck,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-geetato-pink/10 text-geetato-pink">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-geetato-charcoal">{item.title}</h4>
                      <p className="mt-2 text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B & Corporate Focus */}
      <section className="bg-geetato-cream py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-geetato-charcoal sm:text-4xl">The Preferred Corporate Partner</h2>
            <p className="mt-4 text-lg text-muted-foreground">Why leading companies in India trust our supply chain</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Scalable Solutions",
                desc: "Whether you need 50 gift hampers or daily snacks for 5000 employees, our production scales seamlessly.",
                icon: Zap,
              },
              {
                title: "Reliable Logistics",
                desc: "Our 24/7 supply capability and specialized delivery fleet ensure your bakes arrive fresh, every single time.",
                icon: Award,
              },
              {
                title: "Bespoke Branding",
                desc: "We offer customized packaging and product development to align perfectly with your corporate identity.",
                icon: Users,
              },
            ].map((feature, i) => (
              <div key={feature.title} className="rounded-3xl bg-white p-10 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                <feature.icon className="mb-6 h-12 w-12 text-geetato-pink" />
                <h3 className="mb-4 text-2xl font-bold text-geetato-charcoal">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-[3rem] border-2 border-dashed border-geetato-pink/30 p-12 text-center">
            <h3 className="mb-8 text-2xl font-bold text-geetato-charcoal">FSSAI Certified & Compliant</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {["Quality Audited", "Safe Kitchen Practices", "Hygienic Packaging", "Pure Vegetarian"].map((cert) => (
                <div key={cert} className="flex items-center gap-2 rounded-full bg-geetato-pink/5 px-6 py-2 text-sm font-bold text-geetato-pink uppercase tracking-wider">
                  <CheckCircle2 className="h-4 w-4" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Snippet */}
      <section className="py-24 bg-geetato-charcoal text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((s) => <Award key={s} className="h-6 w-6 text-geetato-pink fill-geetato-pink" />)}
            </div>
            <p className="text-3xl font-medium italic leading-relaxed md:text-4xl">
              "Geetato has transformed our employee snack experience. The quality is unmatched, and their commitment to health aligns perfectly with our wellness goals."
            </p>
            <div className="mt-10">
              <p className="text-xl font-bold">HR Director</p>
              <p className="text-geetato-pink">Leading Tech Multinational</p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white/5 pointer-events-none">
          GEETATO
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-geetato-charcoal sm:text-5xl">Experience Excellence.</h2>
          <p className="mt-6 text-lg text-muted-foreground">Connect with us for your next bulk order or corporate partnership.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-geetato-pink px-10 py-5 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-2xl"
            >
              Partner with Us
            </Link>
            <Link
              href="/products"
              className="rounded-full border-2 border-geetato-charcoal px-10 py-5 text-lg font-bold text-geetato-charcoal transition-all hover:bg-geetato-charcoal hover:text-white"
            >
              View Full Range
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
