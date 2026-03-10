"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  /** Path to background image. Defaults to room-dark.jpg */
  image?: string;
  /** Path to lit/illuminated image. If provided, crossfades to this. Omit for product images (overlay only). */
  lightImage?: string;
  /** Use "contain" for product images with transparent/white bg */
  objectFit?: "cover" | "contain";
}

export function PageHeader({
  title,
  subtitle,
  image = "/room-dark.jpg",
  lightImage,
  objectFit = "cover",
}: PageHeaderProps) {
  const [isLit, setIsLit] = useState(false);

  const objectClass =
    objectFit === "contain" ? "object-contain" : "object-cover";

  return (
    <header className="relative w-full h-[40vh] min-h-[280px] max-h-[420px] overflow-hidden">
      {/* Base (dark) image */}
      <Image
        src={image}
        alt=""
        fill
        className={objectClass}
        priority
        sizes="100vw"
      />
      {/* Lit image overlay - crossfades in over 2s when isLit (only when lightImage provided) */}
      {lightImage && (
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: isLit ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Image
            src={lightImage}
            alt=""
            fill
            className={objectClass}
            sizes="100vw"
          />
        </motion.div>
      )}
      {/* Black overlay - fades out over 2s when isLit */}
      <motion.div
        className="absolute inset-0 bg-black/60 pointer-events-none"
        initial={false}
        animate={{ opacity: isLit ? 0 : 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        aria-hidden
      />
      {/* Power button - right side, hidden once lit */}
      {!isLit && (
        <button
          type="button"
          onClick={() => setIsLit(true)}
          className="absolute top-1/2 right-6 md:right-10 -translate-y-1/2 z-[100] flex flex-col items-center gap-3 cursor-none group pointer-events-auto"
          data-cursor-hover
        >
          <p className="font-syncopate text-[9px] tracking-[0.3em] text-white/90 uppercase">
            TURN ON THE LIGHTS
          </p>
          <span
            className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform bg-black/20 backdrop-blur-sm"
            style={{
              boxShadow: "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.15)",
            }}
            aria-label="Turn on the lights"
          >
            <Image
              src="/roro_icon.png"
              alt=""
              width={24}
              height={24}
              className="brightness-0 invert"
            />
          </span>
        </button>
      )}
      {/* Title content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 pointer-events-none">
        <h1
          className="font-cormorant italic text-roro-white relative z-10 drop-shadow-lg"
          style={{
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            lineHeight: 1.15,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="font-syncopate text-roro-white/90 text-[0.5rem] tracking-[0.3em] uppercase mt-4 relative z-10 drop-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
