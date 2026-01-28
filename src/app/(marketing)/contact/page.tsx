"use client";

import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-geetato-cream py-20 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-geetato-charcoal sm:text-6xl">
            Get in Touch - <span className="text-geetato-pink">Let's Connect</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking for bulk orders, catering, samples, or partnership opportunities, we're here to help.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-geetato-cream/30 p-8 md:p-12 rounded-[3rem]">
              <h2 className="text-2xl font-bold mb-8">Quick Contact Form</h2>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-geetato-charcoal/60">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      className="rounded-xl border-none bg-white px-4 py-3 text-geetato-charcoal shadow-sm ring-1 ring-geetato-charcoal/10 focus:ring-2 focus:ring-geetato-pink"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-geetato-charcoal/60">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="rounded-xl border-none bg-white px-4 py-3 text-geetato-charcoal shadow-sm ring-1 ring-geetato-charcoal/10 focus:ring-2 focus:ring-geetato-pink"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-geetato-charcoal/60">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+91-0000000000"
                      className="rounded-xl border-none bg-white px-4 py-3 text-geetato-charcoal shadow-sm ring-1 ring-geetato-charcoal/10 focus:ring-2 focus:ring-geetato-pink"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="inquiry" className="text-sm font-bold uppercase tracking-wider text-geetato-charcoal/60">Inquiry Type</label>
                    <select
                      id="inquiry"
                      className="rounded-xl border-none bg-white px-4 py-3 text-geetato-charcoal shadow-sm ring-1 ring-geetato-charcoal/10 focus:ring-2 focus:ring-geetato-pink"
                    >
                      <option>Bulk Bread Orders</option>
                      <option>Healthy Snacks/Cookies</option>
                      <option>Corporate Catering</option>
                      <option>Custom Cakes</option>
                      <option>Product Samples</option>
                      <option>Partnership Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-geetato-charcoal/60">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="rounded-xl border-none bg-white px-4 py-3 text-geetato-charcoal shadow-sm ring-1 ring-geetato-charcoal/10 focus:ring-2 focus:ring-geetato-pink"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-geetato-pink px-8 py-4 text-lg font-bold text-white transition-all hover:bg-geetato-pink/90 hover:shadow-xl group"
                >
                  Send Message
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Direct Contact Info */}
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-8">Connect With Us Directly</h2>
                <div className="grid grid-cols-1 gap-8">
                  <div className="flex gap-6 p-6 rounded-3xl bg-white border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-geetato-pink/10 text-geetato-pink shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 uppercase text-xs tracking-widest text-muted-foreground">Address</h3>
                      <p className="text-geetato-charcoal font-medium">Plot No-911, Shop No-4, Niti Khand-1, Opposite Orange County Club House, Indirapuram, Ghaziabad, UP 201014</p>
                    </div>
                  </div>

                  <div className="flex gap-6 p-6 rounded-3xl bg-white border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-geetato-pink/10 text-geetato-pink shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 uppercase text-xs tracking-widest text-muted-foreground">Phone</h3>
                      <div className="flex flex-col gap-1">
                        <a href="tel:+919266093334" className="text-geetato-charcoal font-bold hover:text-geetato-pink">+91-9266093334 (Deepak Joshi, Director)</a>
                        <a href="tel:+919266068080" className="text-geetato-charcoal font-bold hover:text-geetato-pink">+91-9266068080</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 p-6 rounded-3xl bg-white border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-geetato-pink/10 text-geetato-pink shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 uppercase text-xs tracking-widest text-muted-foreground">Email</h3>
                      <a href="mailto:contactus@geetato.com" className="text-geetato-charcoal font-bold hover:text-geetato-pink">contactus@geetato.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/919266093334"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 font-bold text-white transition-all hover:opacity-90"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Now
                </a>
                <a
                  href="tel:+919266093334"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-geetato-charcoal px-6 py-4 font-bold text-white transition-all hover:opacity-90"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-geetato-cream/20 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-3xl shadow-lg border">
          <MapPin className="h-12 w-12 text-geetato-pink mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Visit Our Bakery</h3>
          <p className="text-muted-foreground mb-6">Indirapuram, Ghaziabad, Uttar Pradesh</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            className="rounded-full bg-geetato-pink px-8 py-3 font-bold text-white inline-block hover:shadow-xl transition-all"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}
