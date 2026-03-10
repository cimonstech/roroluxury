"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductsSection() {
  return (
    <motion.section
      className="w-full max-w-[1440px] mx-auto py-16 sm:py-20 md:py-[120px] px-6 sm:px-12 md:px-20"
      style={{ background: "#F5F0E8" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top area */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12">
        <div>
          <p
            className="font-syncopate mb-4"
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.4em",
              color: "#8A8680",
            }}
          >
            OUR COLLECTIONS
          </p>
          <p
            className="font-cormorant italic max-w-[500px]"
            style={{
              fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
              color: "#0A0805",
              lineHeight: 1.1,
            }}
          >
            Where Light Meets
            <br />
            Luxury.
          </p>
        </div>
        <div className="w-full md:max-w-[360px]">
          <p
            className="font-jost font-light"
            style={{
              fontSize: "0.9rem",
              color: "#8A8680",
              lineHeight: 1.8,
            }}
          >
            Each piece in the Roro collection is chosen for its ability to
            transform a room. Not just to light it — but to define it.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-full bg-roro-black text-roro-white font-syncopate text-[0.5rem] tracking-[0.2em] uppercase transition-opacity hover:opacity-90 cursor-none w-fit"
            data-cursor-hover
          >
            View All Products →
          </Link>
        </div>
      </div>

      {/* Three-column layout - 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Column 1 */}
        <div className="relative rounded-lg overflow-hidden min-h-[280px] md:min-h-[400px] lg:min-h-[520px]">
          <Image
            src="/indoor_wall_light.jpg"
            alt="Indoor wall lighting"
            fill
            className="object-cover"
          />
          <div
            className="absolute bottom-4 left-4 right-4 p-5 rounded-lg max-w-sm"
            style={{
              background: "rgba(10, 8, 5, 0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(245, 240, 232, 0.1)",
            }}
          >
            <h3 className="font-cormorant italic text-roro-white text-xl mb-2">
              Walls That Speak
            </h3>
            <p className="font-jost font-light text-roro-white/90 text-sm leading-relaxed">
              A great wall light does more than illuminate. It sculpts the room
              around it — turning empty walls into statements of taste.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <div className="relative rounded-lg overflow-hidden flex-1 min-h-[200px] md:min-h-[250px]">
            <Image
              src="/wall_lamp.webp"
              alt="Wall lamp"
              fill
              className="object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-5 rounded-b-lg"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,8,5,0.85) 0%, transparent 100%)",
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 flex-1 min-h-[200px] md:min-h-[250px]">
            {/* Left - avenila-luxury-outdoorLight.jpg */}
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/avenila-luxury-outdoorLight.jpg"
                alt="Outdoor lighting"
                fill
                className="object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-5 rounded-b-lg"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,8,5,0.85) 0%, transparent 100%)",
                }}
              />
            </div>
            {/* Right - Black card with roro_icon.png */}
            <Link
              href="/products"
              className="relative rounded-lg overflow-hidden flex items-center justify-center bg-roro-black min-h-[250px] cursor-pointer"
              data-cursor-hover
            >
              <Image
                src="/roro_icon.png"
                alt="Roro Luxury"
                width={80}
                height={80}
                className="brightness-0 invert object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Column 3 */}
        <div className="relative rounded-lg overflow-hidden min-h-[280px] md:min-h-[400px] lg:min-h-[520px]">
          <Image
            src="/lady_indoor_light.jpeg"
            alt="Lifestyle indoor lighting"
            fill
            className="object-cover"
          />
          <div
            className="absolute bottom-4 left-4 right-4 p-5 rounded-lg max-w-sm"
            style={{
              background: "rgba(10, 8, 5, 0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(245, 240, 232, 0.1)",
            }}
          >
            <h3 className="font-cormorant italic text-roro-white text-xl mb-2">
              Your Finest Moments, Lit Perfectly.
            </h3>
            <p className="font-jost font-light text-roro-white/90 text-sm leading-relaxed">
              Roro brings the kind of light that makes every quiet evening feel
              like a scene worth remembering.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
