"use client";

import { useState, useTransition, useCallback } from "react";
import Script from "next/script";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [phone, setPhone] = useState("");

  const executeRecaptcha = useCallback(async (): Promise<string | null> => {
    if (typeof window === "undefined" || !window.grecaptcha || !recaptchaReady) {
      console.warn("reCAPTCHA not ready");
      return "dummy-token-for-dev"; // Fallback for dev if key is missing
    }
    return new Promise((resolve) => {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", // fallback test key
            { action: "submit" }
          );
          resolve(token);
        } catch (err) {
          console.error("reCAPTCHA execution failed", err);
          resolve(null);
        }
      });
    });
  }, [recaptchaReady]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Phone validation
    const phoneVal = formData.get("phone") as string;
    if (!/^[6-9]\d{9}$/.test(phoneVal)) {
      setFormState("error");
      setErrorMessage("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    startTransition(async () => {
      const token = await executeRecaptcha();
      if (!token) {
        setFormState("error");
        setErrorMessage("Security verification failed. Please refresh and try again.");
        return;
      }
      
      formData.append("recaptchaToken", token);
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setFormState("success");
      } else {
        setFormState("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    });
  };

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-geetato-charcoal mb-2">Message Sent Successfully!</h3>
        <p className="text-muted-foreground mb-8">
          Thank you for contacting Geetato. We&apos;ve received your inquiry and will respond within 24 hours.
        </p>
        <button 
          onClick={() => setFormState("idle")}
          className="px-8 py-3 bg-geetato-pink text-white rounded-full font-bold hover:shadow-lg transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}`}
        strategy="afterInteractive"
        onLoad={() => {
          if (window.grecaptcha) {
            window.grecaptcha.ready(() => setRecaptchaReady(true));
          }
        }}
      />
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-geetato-charcoal/60">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="e.g. John Doe"
              className="rounded-xl border-none bg-white px-4 py-3 text-geetato-charcoal shadow-sm ring-1 ring-geetato-charcoal/10 focus:ring-2 focus:ring-geetato-pink outline-none transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-geetato-charcoal/60">Business Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="name@company.com"
              className="rounded-xl border-none bg-white px-4 py-3 text-geetato-charcoal shadow-sm ring-1 ring-geetato-charcoal/10 focus:ring-2 focus:ring-geetato-pink outline-none transition-all"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-geetato-charcoal/60">Phone (10 Digits)</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
              placeholder="92660XXXXX"
              className="rounded-xl border-none bg-white px-4 py-3 text-geetato-charcoal shadow-sm ring-1 ring-geetato-charcoal/10 focus:ring-2 focus:ring-geetato-pink outline-none transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="inquiry" className="text-sm font-bold uppercase tracking-wider text-geetato-charcoal/60">Requirement</label>
            <select
              id="inquiry"
              name="inquiry"
              className="rounded-xl border-none bg-white px-4 py-3 text-geetato-charcoal shadow-sm ring-1 ring-geetato-charcoal/10 focus:ring-2 focus:ring-geetato-pink outline-none transition-all cursor-pointer"
            >
              <option>Bulk Bread Supply</option>
              <option>Healthy Snack Hampers</option>
              <option>Corporate Catering</option>
              <option>Custom Celebration Cakes</option>
              <option>B2B Sample Box</option>
              <option>Export Inquiry</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-geetato-charcoal/60">Message / Specifications</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell us about your requirements (quantity, frequency, etc.)"
            className="rounded-xl border-none bg-white px-4 py-3 text-geetato-charcoal shadow-sm ring-1 ring-geetato-charcoal/10 focus:ring-2 focus:ring-geetato-pink outline-none transition-all"
          ></textarea>
        </div>
        
        {formState === "error" && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm font-bold">{errorMessage}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="mt-4 flex items-center justify-center gap-2 rounded-full bg-geetato-pink px-10 py-4 text-lg font-bold text-white transition-all hover:shadow-xl group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Verifying & Sending...
            </>
          ) : (
            <>
              Send Inquiry
              <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
        
        <p className="text-[10px] text-center text-muted-foreground mt-4">
          This form is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p>
      </form>
    </>
  );
}
