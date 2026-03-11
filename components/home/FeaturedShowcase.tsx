"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/products";

const KEYWORDS = [
  { label: "Seamless", active: false },
  { label: "Intelligent", active: true },
  { label: "Effortless", active: false },
];

const FEATURES = [
  "Creating refined atmospheres with layered lighting, ambient control, and fixtures that adapt to every moment — from morning clarity to evening warmth.",
  "Controlling light, mood, and ambiance effortlessly through considered design. Each piece chosen to simplify living while elevating every space.",
  "Meet the collection that blends seamlessly into your home, responds to your style, and adapts to your life. Built to enhance comfort and deliver complete control over your environment.",
];

export default function FeaturedShowcase() {
  const [featuredProduct, ...otherProducts] = products;
  const displayProducts = otherProducts.slice(0, 2);

  return (
    <motion.section
      className="w-full max-w-[1440px] mx-auto py-16 sm:py-20 md:py-24 px-6 sm:px-12 md:px-20 bg-roro-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 mb-16 md:mb-24">
        {/* Left - Heading, copy, button */}
        <div className="flex flex-col justify-center">
          <h2
            className="font-cormorant italic text-roro-black mb-6"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.15,
            }}
          >
            Luxury Lighting.
            <br />
            <span className="text-roro-grey">Intelligent.</span> Elegant and Built
            for Everyday.
          </h2>
          <p
            className="font-jost font-normal text-roro-grey mb-8"
            style={{ fontSize: "1rem", lineHeight: 1.7 }}
          >
            Roro brings intelligence and elegance together, designed to simplify
            everyday living while giving you complete control, comfort, and peace
            of mind.
          </p>
          <Link
            href={`/products/${featuredProduct.slug}`}
            className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-full bg-roro-black text-roro-white font-syncopate text-[0.5rem] tracking-[0.2em] uppercase transition-opacity hover:opacity-90 cursor-none"
            data-cursor-hover
          >
            Explore the Collection
            <span className="text-sm">→</span>
          </Link>
        </div>

        {/* Right - Images and keywords */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            {displayProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="relative aspect-square rounded-xl overflow-hidden bg-roro-grey/10 border border-roro-grey/20 transition-shadow duration-300 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.03), 0 12px 30px -8px rgba(0,0,0,0.05), 0 24px 50px -12px rgba(0,0,0,0.04)",
                }}
                data-cursor-hover
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {KEYWORDS.map((kw) => (
              <span
                key={kw.label}
                className={`font-syncopate font-bold text-[0.5rem] tracking-[0.2em] uppercase ${
                  kw.active ? "text-roro-black" : "text-roro-grey"
                }`}
              >
                {kw.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
        {/* Left - Large product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
        <Link
          href={`/products/${featuredProduct.slug}`}
          className="relative aspect-square max-h-[400px] md:max-h-[500px] rounded-xl overflow-hidden bg-roro-grey/10 block border border-roro-grey/20 transition-shadow duration-300 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]"
          style={{
            boxShadow:
              "0 4px 6px -1px rgba(0,0,0,0.03), 0 12px 30px -8px rgba(0,0,0,0.05), 0 24px 50px -12px rgba(0,0,0,0.04)",
          }}
          data-cursor-hover
        >
          <Image
            src={featuredProduct.image}
            alt={featuredProduct.name}
            fill
            className="object-contain p-6 md:p-8"
          />
        </Link>
        </motion.div>

        {/* Right - Features and stats */}
        <div className="flex flex-col justify-between">
          <div className="space-y-6 mb-10">
            {FEATURES.map((text, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-roro-black shrink-0 flex items-center justify-center">
                  <span className="text-roro-white text-xs font-syncopate">
                    {i + 1}
                  </span>
                </div>
                <p
                  className="font-jost font-normal text-roro-grey pt-1"
                  style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Trust stats */}
          <div className="flex flex-wrap items-center gap-8">
            <div>
              <p className="font-syncopate font-bold text-roro-black text-[0.5rem] tracking-[0.2em] uppercase mb-2">
                Trusted by homeowners
              </p>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="relative w-8 h-8 rounded-full border-2 border-roro-white overflow-hidden bg-roro-grey/30"
                  >
                    <Image
                      src={`/members/person${i}.webp`}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-cormorant text-roro-black text-2xl font-semibold">
                100+
              </p>
              <p className="font-syncopate font-bold text-roro-grey text-[0.45rem] tracking-[0.15em] uppercase">
                Unique Lights
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
