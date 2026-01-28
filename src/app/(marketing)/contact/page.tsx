import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Geetato - Bulk Orders & Export Inquiries | Ghaziabad UP",
  description: "Get in touch for wholesale bread orders, corporate catering, export partnerships. Call: +91-9266093334. Located in Indirapuram, Ghaziabad.",
};

export default function ContactPage() {
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Geetato+Bakes+%26+Bliss+Plot+No-911+Shop+No-4+Niti+Khand-1+Indirapuram+Ghaziabad+UP+201014";

  return (
    <div className="flex flex-col">
      <section className="bg-geetato-cream py-20 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-geetato-charcoal sm:text-6xl">
            Get in <span className="text-geetato-pink">Touch</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your bakery supply chain? Whether you need samples, bulk quotes, or export partnerships, our team is standing by.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-geetato-cream/30 p-8 md:p-12 rounded-[3rem] shadow-inner">
              <h2 className="text-3xl font-bold mb-8 text-geetato-charcoal">Quick Inquiry Form</h2>
              <ContactForm />
            </div>

            {/* Direct Contact Info */}
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-geetato-charcoal">Connect Directly</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex gap-6 p-8 rounded-[2rem] bg-white border border-geetato-cream shadow-sm hover:shadow-lg transition-all group">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-geetato-pink/10 text-geetato-pink shrink-0 group-hover:bg-geetato-pink group-hover:text-white transition-all">
                      <MapPin className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 uppercase text-xs tracking-widest text-geetato-pink">Headquarters</h3>
                      <p className="text-geetato-charcoal font-bold text-lg leading-tight">Plot No-911, Shop No-4, Niti Khand-1, Indirapuram, Ghaziabad, UP 201014</p>
                      <a 
                        href={googleMapsUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm text-geetato-pink font-bold mt-3 hover:underline"
                      >
                        Get Directions <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6 p-8 rounded-[2rem] bg-white border border-geetato-cream shadow-sm hover:shadow-lg transition-all group">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-geetato-pink/10 text-geetato-pink shrink-0 group-hover:bg-geetato-pink group-hover:text-white transition-all">
                      <Phone className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 uppercase text-xs tracking-widest text-geetato-pink">Phone Support</h3>
                      <div className="flex flex-col gap-2">
                        <a href="tel:+919266093334" className="text-geetato-charcoal font-bold text-xl hover:text-geetato-pink transition-colors">+91 92660 93334</a>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">24/7 Support for B2B Partners</p>
                    </div>
                  </div>

                  <div className="flex gap-6 p-8 rounded-[2rem] bg-white border border-geetato-cream shadow-sm hover:shadow-lg transition-all group">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-geetato-pink/10 text-geetato-pink shrink-0 group-hover:bg-geetato-pink group-hover:text-white transition-all">
                      <Mail className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 uppercase text-xs tracking-widest text-geetato-pink">Email Inquiry</h3>
                      <div className="flex flex-col gap-1">
                        <a href="mailto:contact@geetato.com" className="text-geetato-charcoal font-bold text-xl hover:text-geetato-pink transition-colors">contact@geetato.com</a>
                        <a href="mailto:deepak@geetato.com" className="text-sm text-muted-foreground hover:text-geetato-pink transition-colors">CC: deepak@geetato.com</a>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Average response time: 2 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/919266093334"
                  target="_blank"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 font-bold text-white transition-all hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="h-6 w-6" />
                  WhatsApp Support
                </a>
                <a
                  href="tel:+919266093334"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-geetato-charcoal px-8 py-5 font-bold text-white transition-all hover:scale-105 shadow-lg"
                >
                  <Phone className="h-6 w-6" />
                  Instant Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="py-24 bg-geetato-cream/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-geetato-charcoal mb-4">Find Us on Google Maps</h2>
            <p className="text-muted-foreground">Plot No-911, Shop No-4, Niti Khand-1, Indirapuram, Ghaziabad</p>
          </div>
          <div className="w-full h-[500px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m11!1m3!1d3502.134563810292!2d77.3683058!3d28.6258055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf54f2c000001%3A0xe744e45d8000000!2sGeetato%20Bakes%20%26%20Bliss!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute top-6 left-6 p-6 bg-white rounded-2xl shadow-xl border max-w-xs hidden md:block">
              <p className="font-bold text-geetato-pink mb-2">Visit Our Experience Center</p>
              <p className="text-sm text-geetato-charcoal">Come taste our fresh batches daily from 9 AM to 9 PM at Indirapuram.</p>
              <a 
                href="https://www.google.com/maps/place/Geetato+Bakes+%26+Bliss/@28.6258055,77.3683058,17z/data=!3m1!4b1!4m6!3m5!1s0x390cf54f2c000001:0xe744e45d8000000!8m2!3d28.6258055!4d77.3683058!16s%2Fg%2F11vht7p8m8"
                target="_blank"
                className="text-xs font-bold text-geetato-pink hover:underline mt-4 inline-block"
              >
                View on Google Business Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
