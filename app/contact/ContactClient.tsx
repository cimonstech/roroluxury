"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/constants";
import { PageHeader } from "@/components/layout/PageHeader";

const whatsappUrl = `https://wa.me/${SITE.whatsapp}`;
const instagramUrl = `https://instagram.com/${SITE.instagram.replace("@", "")}`;

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-roro-white">
      <PageHeader
        title="Contact"
        subtitle="Get in Touch"
        lightImage="/room-light.jpg"
      />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-20 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left - Form + contact info */}
          <div>
            <h2
              className="font-cormorant italic text-roro-black mb-8"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Let&apos;s Illuminate Your Space.
            </h2>
            <p className="font-jost font-light text-roro-grey text-lg leading-relaxed mb-10">
              Have questions about our collection or ready to place an order?
              Reach out — we&apos;re here to help.
            </p>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-6 mb-12">
              <div>
                <label
                  htmlFor="name"
                  className="block font-syncopate text-roro-grey text-[0.5rem] tracking-[0.2em] uppercase mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-roro-grey/30 bg-roro-white font-jost text-roro-black placeholder:text-roro-grey/60 focus:outline-none focus:border-roro-black transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-syncopate text-roro-grey text-[0.5rem] tracking-[0.2em] uppercase mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-roro-grey/30 bg-roro-white font-jost text-roro-black placeholder:text-roro-grey/60 focus:outline-none focus:border-roro-black transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-syncopate text-roro-grey text-[0.5rem] tracking-[0.2em] uppercase mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-roro-grey/30 bg-roro-white font-jost text-roro-black placeholder:text-roro-grey/60 focus:outline-none focus:border-roro-black transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-roro-black text-roro-white font-syncopate text-[0.5rem] tracking-[0.2em] uppercase transition-opacity hover:opacity-90 cursor-none"
                data-cursor-hover
              >
                {submitted ? "Message Sent" : "Send Message"}
              </button>
            </form>

            {/* Contact links */}
            <div className="space-y-4 pt-8 border-t border-roro-grey/30">
              <a
                href={`mailto:${SITE.email}`}
                className="block group"
                data-cursor-hover
              >
                <p className="font-syncopate text-roro-grey text-[0.5rem] tracking-[0.2em] uppercase mb-1">
                  Email
                </p>
                <p className="font-jost font-light text-roro-black text-lg group-hover:text-roro-grey transition-colors">
                  {SITE.email}
                </p>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                data-cursor-hover
              >
                <p className="font-syncopate text-roro-grey text-[0.5rem] tracking-[0.2em] uppercase mb-1">
                  WhatsApp
                </p>
                <p className="font-jost font-light text-roro-black text-lg group-hover:text-roro-grey transition-colors">
                  Chat with us
                </p>
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                data-cursor-hover
              >
                <p className="font-syncopate text-roro-grey text-[0.5rem] tracking-[0.2em] uppercase mb-1">
                  Instagram
                </p>
                <p className="font-jost font-light text-roro-black text-lg group-hover:text-roro-grey transition-colors">
                  {SITE.instagram}
                </p>
              </a>
            </div>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-4 rounded-full bg-roro-black text-roro-white font-syncopate text-[0.5rem] tracking-[0.2em] uppercase w-fit transition-opacity hover:opacity-90 cursor-none"
              data-cursor-hover
            >
              Order via WhatsApp
              <span>→</span>
            </Link>
          </div>

          {/* Right - Map */}
          <div className="lg:sticky lg:top-32 self-start">
            <p className="font-syncopate text-roro-grey text-[0.5rem] tracking-[0.2em] uppercase mb-4">
              Find Us
            </p>
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-roro-grey/20 bg-roro-grey/5">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.2050%2C5.5500%2C-0.1500%2C5.6200&layer=mapnik&marker=5.6037,-0.1870"
                title="Roro Luxury - Accra, Ghana"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="font-jost font-light text-roro-grey mt-4">
              {SITE.location}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
