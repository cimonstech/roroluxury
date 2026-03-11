"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RoroStandardSection() {
  return (
    <motion.section
      className="relative w-full overflow-hidden bg-roro-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Image - same width as 4th section (max-w-[1440px]), fixed height, desktop ~2/3 of previous */}
      <div className="relative w-full max-w-[1440px] mx-auto h-[520px] sm:h-[560px] md:h-[1000px] lg:h-[1067px]">
        <Image
          src="/Wall-Sconces-Hall-1024x638.webp"
          alt="Wall sconces in hallway"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1440px) 100vw, 1440px"
        />
      </div>

      {/* Overlays - positioned within content area */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative h-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 pointer-events-auto">
      <div className="absolute top-6 left-6 right-6 sm:top-8 sm:left-8 sm:right-auto sm:max-w-md md:top-16 md:left-16 z-10">
        <p
          className="font-syncopate mb-1.5 text-roro-white md:text-[#8A8680]"
          style={{
            fontSize: "0.4rem",
            letterSpacing: "0.35em",
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

      <div className="absolute top-24 left-6 right-6 sm:top-8 sm:right-8 sm:left-auto md:top-16 md:right-16 max-w-sm sm:text-right z-10 hidden md:block">
        <p
          className="font-jost font-light text-roro-white/90"
          style={{ fontSize: "1rem", lineHeight: 1.65 }}
        >
          The hallway is where first impressions deepen. Wall sconces that flank
          your passage — subtle, elegant, and impossible to ignore.
        </p>
      </div>

      <Link
        href="/products"
        className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-auto md:bottom-16 md:left-16 max-w-xs z-10 rounded-lg p-4 sm:p-5 bg-roro-white flex flex-col transition-transform hover:scale-[1.02]"
        style={{
          boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
        }}
        data-cursor-hover
      >
        <h3 className="font-cormorant italic text-roro-black text-lg mb-2">
          Light the Way
        </h3>
        <p
          className="hidden md:block font-jost font-light text-roro-grey text-sm leading-relaxed mb-4"
          style={{ lineHeight: 1.6 }}
        >
          Hallway sconces that guide and welcome. Every passage, considered.
        </p>
        <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-roro-black text-roro-white font-syncopate text-[0.5rem] tracking-[0.2em] uppercase w-fit transition-opacity hover:opacity-90 mt-4 md:mt-0">
          Explore the Collection →
        </span>
      </Link>
        </div>
      </div>
    </motion.section>
  );
}
