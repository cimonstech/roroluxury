"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
      data-cursor-hover
    >
      <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-roro-grey/10 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="border-b-2 border-transparent group-hover:border-roro-gold transition-colors duration-300 px-5 pt-3 pb-4 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="font-syncopate font-bold text-roro-grey text-[0.45rem] tracking-[0.2em] uppercase mb-1">
            {product.category}
          </p>
          <p className="font-cormorant italic text-roro-black text-lg sm:text-xl">
            {product.name}
          </p>
        </div>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-roro-gold shrink-0">
          →
        </span>
      </div>
    </Link>
  );
}
