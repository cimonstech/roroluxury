"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";

const SWIPE_THRESHOLD = 50;

const useCaseSlideVariants = {
  enter: (direction: number) => ({ x: `${direction * 100}%` }),
  center: { x: 0 },
  exit: (direction: number) => ({ x: `${direction * -100}%` }),
};

interface ProductDetailClientProps {
  product: Product;
  related: Product[];
  whatsappUrl: string;
}

export function ProductDetailClient({
  product,
  related,
  whatsappUrl,
}: ProductDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [centerHovered, setCenterHovered] = useState(false);
  const [useCaseImageIndex, setUseCaseImageIndex] = useState(0);
  const [useCaseDirection, setUseCaseDirection] = useState<1 | -1>(1);
  const touchStartX = useRef<number>(0);

  const images = [product.image];
  const useCaseImages =
    product.useCaseImages ?? (product.useCaseImage ? [product.useCaseImage] : []);

  const goPrev = () =>
    setActiveImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () =>
    setActiveImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const goToPrevUseCase = () => {
    setUseCaseDirection(-1);
    setUseCaseImageIndex((i) =>
      i === 0 ? useCaseImages.length - 1 : i - 1
    );
  };
  const goToNextUseCase = () => {
    setUseCaseDirection(1);
    setUseCaseImageIndex((i) =>
      i === useCaseImages.length - 1 ? 0 : i + 1
    );
  };

  const handleUseCaseTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleUseCaseTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const delta = touchStartX.current - endX;
    if (delta > SWIPE_THRESHOLD) goToNextUseCase();
    else if (delta < -SWIPE_THRESHOLD) goToPrevUseCase();
  };

  const cards = product.cards;

  return (
    <>
      {/* Hero Section — Three columns */}
      <section
        className="relative w-full min-h-screen flex flex-col lg:flex-row"
        style={{ background: "#0A0805" }}
      >
        {/* Mobile: stacked order — product name → image → back link → cards → enquiry */}
        <div className="lg:hidden flex flex-col min-h-screen pt-28 pb-12 px-6">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p
              className="font-syncopate font-bold uppercase"
              style={{
                fontSize: "0.5rem",
                letterSpacing: "0.35em",
                color: "#8A8680",
              }}
            >
              {product.filterCategory} — {product.category}
            </p>
            <h1
              className="font-cormorant italic mt-3"
              style={{
                fontSize: "clamp(2.5rem, 3.5vw, 4rem)",
                lineHeight: 1.1,
                color: "#F5F0E8",
              }}
            >
              {product.name}
            </h1>
          </motion.div>

          <motion.div
            className="flex-1 flex items-center justify-center my-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative w-full max-w-[85%] aspect-square max-h-[75vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={images[activeImageIndex]}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
                    sizes="90vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <Link
            href="/products"
            className="font-syncopate font-bold text-[#8A8680] text-[0.5rem] tracking-[0.2em] uppercase hover:text-[#F5F0E8] transition-colors mb-3"
            data-cursor-hover
          >
            ← Back to Products
          </Link>

          {cards && (
            <motion.div
              className="flex flex-col gap-4 mb-8"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { label: "FINISH", value: cards.finish },
                { label: "ATMOSPHERE", value: cards.atmosphere },
                { label: "CRAFTSMANSHIP", value: cards.craftsmanship },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + i * 0.15,
                  }}
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(245, 240, 232, 0.05)",
                    border: "1px solid rgba(245, 240, 232, 0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <p
                    className="font-syncopate font-bold uppercase mb-2.5"
                    style={{
                      fontSize: "0.45rem",
                      letterSpacing: "0.3em",
                      color: "#8A8680",
                    }}
                  >
                    {card.label}
                  </p>
                  <p
                    className="font-jost font-light"
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(245,240,232,0.7)",
                      lineHeight: 1.7,
                    }}
                  >
                    {card.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center justify-center py-3.5 px-7 rounded-full bg-[#F5F0E8] font-syncopate font-bold text-[0.5rem] tracking-[0.25em] text-roro-black w-fit transition-all duration-300 hover:opacity-90"
            data-cursor-hover
          >
            Make an Enquiry
          </motion.a>
        </div>

        {/* Desktop: three columns */}
        <div className="hidden lg:flex w-full min-h-screen">
          {/* Left column — 25% */}
          <motion.div
            className="relative w-[25%] flex flex-col p-8"
            style={{ padding: "48px 32px" }}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <Link
                href="/products"
                className="font-syncopate font-bold text-[#8A8680] text-[0.5rem] tracking-[0.2em] uppercase hover:text-[#F5F0E8] transition-colors"
                data-cursor-hover
              >
                ← Back to Products
              </Link>
              <p
                className="font-syncopate font-bold uppercase mt-6"
                style={{
                  fontSize: "0.5rem",
                  letterSpacing: "0.35em",
                  color: "#8A8680",
                }}
              >
                {product.filterCategory} — {product.category}
              </p>
              <h1
                className="font-cormorant italic mt-3"
                style={{
                  fontSize: "clamp(2.5rem, 3.5vw, 4rem)",
                  lineHeight: 1.1,
                  color: "#F5F0E8",
                }}
              >
                {product.name}
              </h1>
            </div>

            <div
              className="rounded-xl p-5 my-8"
              style={{
                background: "rgba(245, 240, 232, 0.05)",
                border: "1px solid rgba(245, 240, 232, 0.1)",
                backdropFilter: "blur(12px)",
                padding: "20px 24px",
              }}
            >
              <p
                className="font-cormorant italic"
                style={{
                  fontSize: "1.1rem",
                  color: "rgba(245, 240, 232, 0.7)",
                  lineHeight: 1.6,
                }}
              >
                {product.description}
              </p>
            </div>

            <div className="mt-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center py-3.5 px-7 rounded-full bg-[#F5F0E8] font-syncopate font-bold text-[0.5rem] tracking-[0.25em] text-roro-black w-fit transition-all duration-300 hover:opacity-90"
                data-cursor-hover
              >
                Make an Enquiry
              </a>
            </div>
          </motion.div>

          {/* Center column — 50% */}
          <motion.div
            className="relative w-[50%] flex items-center justify-center"
            onMouseEnter={() => setCenterHovered(true)}
            onMouseLeave={() => setCenterHovered(false)}
          >
            {/* Thumbnail strip */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              {images.map((img, i) => (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => setActiveImageIndex(i)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 transition-all duration-300"
                  style={{
                    border: `1px solid ${i === activeImageIndex ? "#F5F0E8" : "transparent"}`,
                    opacity: i === activeImageIndex ? 1 : 0.4,
                  }}
                  whileHover={{ opacity: 1 }}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </motion.button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative w-full max-w-[85%] max-h-[75vh] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImageIndex}
                  className="relative w-full aspect-square max-h-[75vh]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={images[activeImageIndex]}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
                    sizes="50vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Nav arrows */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-14 top-1/2 -translate-y-1/2 p-2 transition-colors duration-300"
                  style={{
                    color: centerHovered ? "#F5F0E8" : "rgba(245,240,232,0.4)",
                  }}
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 transition-colors duration-300 z-10"
                  style={{
                    color: centerHovered ? "#F5F0E8" : "rgba(245,240,232,0.4)",
                  }}
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </motion.div>

          {/* Right column — 25% */}
          <div
            className="relative w-[25%] flex flex-col justify-center gap-4 p-8"
            style={{ padding: "48px 32px" }}
          >
            {cards &&
              [
                { label: "FINISH", value: cards.finish },
                { label: "ATMOSPHERE", value: cards.atmosphere },
                { label: "CRAFTSMANSHIP", value: cards.craftsmanship },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.15,
                  }}
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(245, 240, 232, 0.05)",
                    border: "1px solid rgba(245, 240, 232, 0.08)",
                    backdropFilter: "blur(12px)",
                    padding: "20px 24px",
                  }}
                >
                  <p
                    className="font-syncopate font-bold uppercase mb-2.5"
                    style={{
                      fontSize: "0.45rem",
                      letterSpacing: "0.3em",
                      color: "#8A8680",
                    }}
                  >
                    {card.label}
                  </p>
                  <p
                    className="font-jost font-light"
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(245,240,232,0.7)",
                      lineHeight: 1.7,
                    }}
                  >
                    {card.value}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Section 2 — The Use Case */}
      {useCaseImages.length > 0 && (
        <section
          className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:h-[760px] overflow-hidden bg-roro-black touch-pan-y"
          onTouchStart={handleUseCaseTouchStart}
          onTouchEnd={handleUseCaseTouchEnd}
        >
          <AnimatePresence initial={false} custom={useCaseDirection}>
            <motion.div
              key={useCaseImageIndex}
              className="absolute inset-0"
              custom={useCaseDirection}
              variants={useCaseSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            >
              <Image
                src={useCaseImages[useCaseImageIndex]}
                alt=""
                fill
                className="object-contain object-center"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(10,8,5,0.85) 0%, rgba(10,8,5,0.3) 50%, transparent 100%)",
            }}
          />
          <motion.div
            className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-6 sm:left-8 md:left-12 max-w-md pointer-events-none"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <p
              className="font-cormorant italic text-roro-white"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                lineHeight: 1.3,
              }}
            >
              {product.useCaseText}
            </p>
          </motion.div>
          {/* Dots above text on mobile so they don't overlap */}
          {useCaseImages.length > 1 && (
            <div className="absolute bottom-24 sm:bottom-28 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 pointer-events-auto z-10">
              {useCaseImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setUseCaseImageIndex(i)}
                  className="min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 sm:w-2 sm:h-2 flex items-center justify-center rounded-full group"
                  aria-label={`View image ${i + 1}`}
                >
                  <span
                    className={`block w-2.5 h-2.5 sm:w-full sm:h-full rounded-full transition-colors duration-300 ${
                      i === useCaseImageIndex
                        ? "bg-[#F5F0E8]"
                        : "bg-[#F5F0E8]/40 group-hover:bg-[#F5F0E8]/60"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Section 3 — The Details */}
      <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 py-16 md:py-24 bg-roro-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <p className="font-syncopate font-bold text-roro-grey text-[0.45rem] tracking-[0.25em] uppercase mb-3">
              Finish
            </p>
            <p className="font-jost font-light text-roro-black">
              {product.finish || "—"}
            </p>
          </div>
          <div>
            <p className="font-syncopate font-bold text-roro-grey text-[0.45rem] tracking-[0.25em] uppercase mb-3">
              Dimensions
            </p>
            <p className="font-jost font-light text-roro-black">
              {product.dimensions || "—"}
            </p>
          </div>
          <div>
            <p className="font-syncopate font-bold text-roro-grey text-[0.45rem] tracking-[0.25em] uppercase mb-3">
              Ideal For
            </p>
            <p className="font-jost font-light text-roro-black">
              {product.idealFor || "—"}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — You May Also Consider */}
      {related.length > 0 && (
        <section
          className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 py-16 md:py-24 bg-roro-white border-t border-roro-grey/20"
          style={{ background: "#F5F0E8" }}
        >
          <h2
            className="font-cormorant italic text-roro-black mb-12"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.2,
            }}
          >
            You May Also Consider
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {related.map((p) => (
              <div
                key={p.id}
                className="rounded-xl overflow-hidden border border-roro-grey/20 transition-shadow duration-300 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.03), 0 12px 30px -8px rgba(0,0,0,0.05), 0 24px 50px -12px rgba(0,0,0,0.04)",
                }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
