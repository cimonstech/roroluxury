"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RoroStandardSection() {
  return (
    <motion.section
      className="relative w-full overflow-hidden"
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Full width image - shows entire image without cropping */}
      <div className="relative w-full" style={{ aspectRatio: "1024/638" }}>
        <Image
          src="/Wall-Sconces-Hall-1024x638.webp"
          alt="Wall sconces in hallway"
          fill
          className="object-contain"
        />
      </div>

      {/* Top left - label and main heading */}
      <div className="absolute top-12 left-12 md:top-16 md:left-16 max-w-md z-10">
        <p
          className="font-syncopate mb-1.5"
          style={{
            fontSize: "0.4rem",
            letterSpacing: "0.35em",
            color: "#8A8680",
          }}
        >
          THE RORO STANDARD
        </p>
        <h2
          className="font-cormorant italic text-roro-white"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.75rem)",
            lineHeight: 1.2,
          }}
        >
          Every Wall.
          <br />
          Every Passage.
          <br />
          Illuminated.
        </h2>
      </div>

      {/* Top right - sub text */}
      <div className="absolute top-12 right-12 md:top-16 md:right-16 max-w-sm text-right z-10">
        <p
          className="font-jost font-light text-roro-white/90"
          style={{ fontSize: "1rem", lineHeight: 1.65 }}
        >
          The hallway is where first impressions deepen. Wall sconces that flank
          your passage — subtle, elegant, and impossible to ignore.
        </p>
      </div>

      {/* Bottom left - white card */}
      <Link
        href="/products"
        className="absolute bottom-12 left-12 md:bottom-16 md:left-16 max-w-xs z-10 rounded-lg p-5 bg-roro-white cursor-none flex flex-col"
        style={{
          boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
        }}
        data-cursor-hover
      >
        <h3 className="font-cormorant italic text-roro-black text-lg mb-2">
          Light the Way
        </h3>
        <p
          className="font-jost font-light text-roro-grey text-sm leading-relaxed mb-4"
          style={{ lineHeight: 1.6 }}
        >
          Hallway sconces that guide and welcome. Every passage, considered.
        </p>
        <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-roro-black text-roro-white font-syncopate text-[0.5rem] tracking-[0.2em] uppercase w-fit transition-opacity hover:opacity-90">
          Shop the Look →
        </span>
      </Link>
    </motion.section>
  );
}
