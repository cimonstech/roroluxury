"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";
import { SITE } from "@/lib/constants";
import { PageHeader } from "@/components/layout/PageHeader";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems } = useCart();

  const whatsappMessage = items
    .map(
      (i) =>
        `• ${i.product.name} (${i.product.category}) x${i.quantity}`
    )
    .join("\n");

  const checkoutUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hi! I'd like to place an order:\n\n${whatsappMessage}\n\nPlease confirm availability and pricing.`
  )}`;

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-roro-white">
        <PageHeader
          title="Cart"
          subtitle="Your Selection"
          lightImage="/room-light.jpg"
        />
        <div className="max-w-[1440px] mx-auto px-8 md:px-20 py-24 text-center">
          <p className="font-jost font-light text-roro-grey text-lg mb-8">
            Your cart is empty.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-roro-black text-roro-white font-syncopate text-[0.5rem] tracking-[0.2em] uppercase transition-opacity hover:opacity-90"
            data-cursor-hover
          >
            Browse Products
            <span>→</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-roro-white">
      <PageHeader
        title="Cart"
        subtitle="Your Selection"
        lightImage="/room-light.jpg"
      />
      <div className="max-w-[1440px] mx-auto px-8 md:px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-6 p-6 rounded-lg border border-roro-grey/20 bg-roro-white"
              >
                <div className="relative w-24 h-32 shrink-0 rounded overflow-hidden bg-roro-grey/10">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-syncopate text-roro-grey text-[0.45rem] tracking-[0.2em] uppercase mb-1">
                    {item.product.category}
                  </p>
                  <Link
                    href={`/products/${item.product.slug}`}
                    className="font-cormorant italic text-roro-black text-xl hover:opacity-80"
                  >
                    {item.product.name}
                  </Link>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-2 font-syncopate text-[0.5rem]">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-8 h-8 rounded-full border border-roro-grey/40 flex items-center justify-center hover:bg-roro-black hover:text-roro-white hover:border-roro-black transition-colors text-roro-black"
                        aria-label="Decrease quantity"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-8 h-8 rounded-full border border-roro-grey/40 flex items-center justify-center hover:bg-roro-black hover:text-roro-white hover:border-roro-black transition-colors text-roro-black"
                        aria-label="Increase quantity"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.product.id)}
                      className="font-syncopate text-roro-grey text-[0.45rem] tracking-[0.1em] uppercase hover:text-roro-black transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => clearCart()}
              className="font-syncopate text-roro-grey text-[0.45rem] tracking-[0.2em] uppercase hover:text-roro-black transition-colors"
            >
              Clear cart
            </button>
          </div>

          {/* Checkout summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-6 rounded-lg border border-roro-grey/20 bg-roro-grey/5">
              <h3 className="font-syncopate text-roro-black text-[0.5rem] tracking-[0.2em] uppercase mb-4">
                Order Summary
              </h3>
              <ul className="space-y-2 font-jost font-light text-roro-grey text-sm mb-6">
                {items.map((item) => (
                  <li key={item.product.id}>
                    {item.product.name} × {item.quantity}
                  </li>
                ))}
              </ul>
              <p className="font-syncopate text-roro-grey text-[0.45rem] tracking-[0.15em] uppercase mb-4">
                {totalItems} item{totalItems !== 1 ? "s" : ""}
              </p>
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 rounded-full bg-roro-black text-roro-white font-syncopate text-[0.5rem] tracking-[0.2em] uppercase transition-opacity hover:opacity-90"
                data-cursor-hover
              >
                Checkout via WhatsApp
              </a>
              <p className="font-jost font-light text-roro-grey text-xs mt-4 text-center">
                Your order summary will be sent to WhatsApp for confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
