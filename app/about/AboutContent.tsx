"use client";

import Image from "next/image";
import { products } from "@/lib/products";
import { SITE } from "@/lib/constants";

export function AboutContent() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-20 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left - Story content */}
        <div>
          <h2
            className="font-cormorant italic text-roro-black mb-12"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
            }}
          >
            Luxury Lighting, Crafted for the Exceptional.
          </h2>
          <div className="space-y-6 font-jost font-light text-roro-grey text-lg leading-relaxed">
            <p>
              Based in Accra, Ghana, Roro Luxury brings a curated selection of
              world-class lighting fixtures to discerning homeowners and
              designers. Every piece in our collection is chosen for its ability
              to transform a space — not just to illuminate it, but to define
              it.
            </p>
            <p>
              From chandeliers that command a room to sconces that whisper
              elegance, we believe every ceiling deserves a crown and every wall
              deserves a statement. Our mission is simple: to make exceptional
              lighting accessible to those who refuse to settle for ordinary.
            </p>
          </div>
          <div className="mt-16 pt-8 border-t border-roro-grey/30">
            <p className="font-syncopate text-roro-black text-[0.5rem] tracking-[0.2em] uppercase mb-2">
              Location
            </p>
            <p className="font-jost font-light text-roro-grey">
              {SITE.location}
            </p>
          </div>
        </div>

        {/* Right - Blinking product images */}
        <div className="relative grid grid-cols-2 gap-4 lg:gap-6">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="relative aspect-square rounded-lg overflow-hidden bg-roro-grey/10 animate-blink"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
