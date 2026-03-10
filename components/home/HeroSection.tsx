"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useHero } from "@/lib/HeroContext";

const HERO_PRODUCTS = [
  { id: 1, name: "Lumière Royale", category: "Chandelier", slug: "lumiere-royale" },
  { id: 2, name: "Aurèle Twin", category: "Wall Sconces", slug: "aurele-twin" },
  { id: 3, name: "Solène Arc", category: "Floor Lamp", slug: "solene-arc" },
  { id: 4, name: "Élara Noir", category: "Table Lamp", slug: "elara-noir" },
] as const;

const FIXTURE_BUTTONS = [
  { id: 1, name: "Chandelier", x: 53.16, y: 39.23 },
  { id: 2, name: "Wall Sconces", x: 17.45, y: 37.42 },
  { id: 3, name: "Floor Lamp", x: 88.75, y: 46.45 },
  { id: 4, name: "Table Lamp", x: 18.83, y: 60.69 },
];

export default function HeroSection() {
  const { setLit } = useHero();
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      data-hero-section
    >
      {/* Background images */}
      <div className="absolute inset-0">
        <Image
          src="/room-dark.jpg"
          alt="Room in darkness"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <LitOverlay />
      </div>

      {/* Power button + "TURN ON THE LIGHTS" - visible only when dark */}
      <PowerButton onLit={() => setLit(true)} />

      {/* Content after lights on */}
      <LitContent
        activeProduct={activeProduct}
        setActiveProduct={setActiveProduct}
      />
    </section>
  );
}

function LitOverlay() {
  const { isLit } = useHero();
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={false}
      animate={{
        opacity: isLit ? 1 : 0,
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <Image
        src="/room-light.jpg"
        alt=""
        fill
        className="object-cover pointer-events-none"
        sizes="100vw"
        priority
      />
    </motion.div>
  );
}

function PowerButton({ onLit }: { onLit: () => void }) {
  const { isLit } = useHero();

  return (
    <AnimatePresence>
      {!isLit && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-20"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
      <p
        className="font-syncopate text-[10px] tracking-[0.35em] text-white uppercase mb-6"
        style={{ letterSpacing: "0.35em" }}
      >
        TURN ON THE LIGHTS
      </p>
      <button
        type="button"
        onClick={onLit}
        className="relative w-[100px] h-[100px] rounded-full border-[1.5px] border-white flex items-center justify-center cursor-none hover:scale-105 transition-transform cursor-pointer"
        data-cursor-hover
        style={{
          boxShadow: "0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2)",
          animation: "pulse-glow 2s ease-in-out infinite",
        }}
        aria-label="Turn on the lights"
      >
        <Image
          src="/roro_icon.png"
          alt=""
          width={48}
          height={48}
          className="brightness-0 invert"
        />
      </button>
    </motion.div>
      )}
    </AnimatePresence>
  );
}

function LitContent({
  activeProduct,
  setActiveProduct,
}: {
  activeProduct: number | null;
  setActiveProduct: (id: number | null) => void;
}) {
  const { isLit } = useHero();

  if (!isLit) return null;

  return (
    <>
      {/* Hero text + buttons - always visible */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pt-[12vh] pointer-events-none">
        <motion.div
          className="flex flex-col items-center justify-center text-center px-6 max-w-[600px] pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
        >
          <p
            className="font-cormorant italic text-white mb-6 sm:mb-8"
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              lineHeight: 1.2,
            }}
          >
            Every Room Deserves a Masterpiece.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/about"
                className="inline-flex items-center justify-center min-w-[180px] sm:min-w-[200px] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-syncopate text-white text-[0.5rem] tracking-[0.2em] uppercase transition-opacity hover:opacity-90 bg-roro-black border-2 border-white"
                data-cursor-hover
              >
                Experience the Collection
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/products"
                className="inline-flex items-center justify-center min-w-[180px] sm:min-w-[200px] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-syncopate text-white text-[0.5rem] tracking-[0.2em] uppercase transition-opacity hover:opacity-80"
                style={{
                  background: "rgba(245, 240, 232, 0.1)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(245, 240, 232, 0.15)",
                }}
                data-cursor-hover
              >
                Shop Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Numbered fixture buttons with card next to each */}
      {FIXTURE_BUTTONS.map((btn, i) => {
        const product = HERO_PRODUCTS.find((p) => p.id === btn.id)!;
        const isActive = activeProduct === btn.id;
        return (
          <div
            key={btn.id}
            className="absolute z-30"
            style={{
              left: `${btn.x}%`,
              top: `${btn.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={`relative flex items-center gap-3 ${
                  btn.x > 70 ? "flex-row-reverse" : ""
              }`}
            >
              <motion.button
                type="button"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white flex items-center justify-center font-syncopate text-white text-xs sm:text-sm bg-white/10 backdrop-blur-sm cursor-pointer hover:scale-110 active:scale-95 border-roro-white/90 transition-transform shrink-0"
                style={{
                  boxShadow: "0 0 12px rgba(255,255,255,0.3)",
                  animation: "pulse-ring 2s ease-in-out infinite",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 2.2 + i * 0.15,
                  ease: "easeOut",
                }}
                onClick={() => setActiveProduct(isActive ? null : btn.id)}
                aria-label={`View ${btn.name}`}
                data-cursor-hover
              >
                {btn.id}
              </motion.button>
              <AnimatePresence>
                {isActive && (
                  <Link href={`/products/${product.slug}`}>
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="rounded-lg px-3 py-2 sm:px-4 sm:py-3 bg-white shadow-xl whitespace-nowrap"
                      style={{
                        boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
                      }}
                      data-cursor-hover
                    >
                      <p className="font-cormorant italic text-roro-black text-base">
                        {product.name}
                      </p>
                      <p className="font-syncopate text-roro-grey text-[0.45rem] tracking-[0.2em] uppercase mt-0.5">
                        {product.category}
                      </p>
                    </motion.div>
                  </Link>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </>
  );
}
