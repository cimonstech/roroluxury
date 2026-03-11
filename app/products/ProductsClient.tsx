"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";

const FILTERS = [
  "All",
  "Lighting",
  "Switches & Sockets",
  "Track Systems",
] as const;

export function ProductsClient() {
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    if (category === "All") return products;
    return products.filter((p) => p.filterCategory === category);
  }, [category]);

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-20 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <p
          className="font-syncopate font-bold mb-3"
          style={{
            fontSize: "0.5rem",
            letterSpacing: "0.35em",
            color: "#8A8680",
          }}
        >
          OUR COLLECTIONS
        </p>
        <h1
          className="font-cormorant italic text-roro-black max-w-2xl mb-6"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 1.1,
          }}
        >
          Four Fixtures. Infinite Atmospheres.
        </h1>
        <p className="font-jost font-normal text-roro-grey max-w-xl" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
          Each piece chosen to transform a room — not just to light it, but to define it.
        </p>
      </div>

      {/* Filter Bar - minimal pills, animated underline on active */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 md:mb-16">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setCategory(filter)}
            className="relative px-5 py-3 min-h-[44px] rounded-full font-syncopate font-bold text-[0.5rem] tracking-[0.2em] uppercase transition-colors duration-300"
            data-cursor-hover
          >
            <span
              className={`transition-colors duration-300 ${
                category === filter ? "text-roro-black" : "text-roro-grey hover:text-roro-black"
              }`}
            >
              {filter}
            </span>
            {category === filter && (
              <motion.span
                layoutId="filter-underline"
                className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-roro-gold"
                style={{ width: "60%" }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Product Grid - Symmetric with shadows */}
      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 items-start"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                className="rounded-xl overflow-hidden border border-roro-grey/20 transition-shadow duration-300 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.03), 0 12px 30px -8px rgba(0,0,0,0.05), 0 24px 50px -12px rgba(0,0,0,0.04)",
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-jost font-light text-roro-grey text-center py-16"
          >
            No products in this category yet.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
