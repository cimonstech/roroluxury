"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";

const CATEGORIES = [
  "All",
  "Chandelier",
  "Wall Sconces",
  "Floor Lamp",
  "Table Lamp",
] as const;

export function ProductsClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory =
        category === "All" || p.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-20 py-16 sm:py-24">
      <div className="mb-16">
        <h2
          className="font-cormorant italic text-roro-black max-w-2xl mb-10"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.15,
          }}
        >
          Four Fixtures. Infinite Atmospheres.
        </h2>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="relative max-w-md">
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-roro-grey/30 bg-roro-white font-jost text-roro-black placeholder:text-roro-grey/60 focus:outline-none focus:border-roro-black transition-colors"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-roro-grey"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full font-syncopate text-[0.5rem] tracking-[0.15em] uppercase transition-colors ${
                  category === cat
                    ? "bg-roro-black text-roro-white"
                    : "bg-roro-grey/10 text-roro-grey hover:bg-roro-grey/20"
                }`}
                data-cursor-hover
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
            hidden: {},
          }}
        >
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="font-jost font-light text-roro-grey text-center py-16">
          No products match your search.
        </p>
      )}
    </div>
  );
}
