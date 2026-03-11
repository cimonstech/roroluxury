"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export default function CTASection() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}`;

  return (
    <motion.section
      className="w-full py-16 sm:py-20 md:py-24 px-6 sm:px-12 md:px-20 bg-roro-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2
            className="font-cormorant italic text-roro-white mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.2,
            }}
          >
            Ready to Illuminate
            <br />
            Your Space?
          </h2>
          <p
            className="font-jost font-light text-roro-grey max-w-md mb-8"
            style={{ fontSize: "1rem", lineHeight: 1.7 }}
          >
            Let&apos;s bring the Roro collection into your home. Browse our
            fixtures or reach out — we&apos;re here to help you find the perfect
            light.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-roro-white text-roro-black font-syncopate text-[0.5rem] tracking-[0.2em] uppercase transition-opacity hover:opacity-90 cursor-none"
              data-cursor-hover
            >
              Explore the Collection
              <span>→</span>
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-roro-white text-roro-white font-syncopate text-[0.5rem] tracking-[0.2em] uppercase transition-colors hover:bg-roro-white hover:text-roro-black cursor-none"
              data-cursor-hover
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/roro_luxury_white.png"
            alt={SITE.name}
            width={200}
            height={60}
            className="object-contain opacity-80 w-32 sm:w-40 md:w-[200px]"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
