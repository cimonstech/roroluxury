"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const PAGE_HEADER_HEIGHT = 280;
const HOME_TRUSTBAND_OFFSET = 120;

function CartBadge() {
  const { totalItems } = useCart();
  if (totalItems === 0) return null;
  return (
    <span className="absolute -top-1 -right-1.5 min-w-[14px] h-[14px] rounded-full bg-roro-gold text-roro-black flex items-center justify-center font-syncopate text-[9px] font-bold">
      {totalItems}
    </span>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolledPast, setScrolledPast] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const checkScroll = () => {
      const y = window.scrollY;
      if (isHome) {
        const threshold = window.innerHeight + HOME_TRUSTBAND_OFFSET;
        setScrolledPast(y > threshold);
      } else {
        setScrolledPast(y > PAGE_HEADER_HEIGHT);
      }
    };
    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, [isHome]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const useDarkNav = scrolledPast;

  return (
    <>
      <nav
        className="fixed top-4 left-4 right-4 md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50 flex items-center justify-between md:justify-center gap-4 md:gap-12 px-4 py-2.5 md:px-7 md:py-2.5 md:w-fit md:rounded-full rounded-xl transition-all duration-300"
        style={{
          background: useDarkNav
            ? "rgba(10, 8, 5, 0.9)"
            : "rgba(245, 240, 232, 0.1)",
          backdropFilter: "blur(16px)",
          border: useDarkNav
            ? "1px solid rgba(245, 240, 232, 0.12)"
            : "1px solid rgba(245, 240, 232, 0.15)",
        }}
      >
        <Link href="/" className="shrink-0" data-cursor-hover>
          <Image
            src="/roro_luxury_white.png"
            alt="Roro Luxury"
            width={100}
            height={28}
            className="object-contain h-6 md:h-8 w-[100px] md:w-[120px]"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-syncopate text-white uppercase transition-opacity duration-300 hover:opacity-60"
              style={{ fontSize: "0.5rem", letterSpacing: "0.25em" }}
              data-cursor-hover
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            className="relative inline-flex items-center text-white transition-opacity duration-300 hover:opacity-60"
            data-cursor-hover
            aria-label="Cart"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <CartBadge />
          </Link>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link href="/cart" className="relative p-2" aria-label="Cart">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <CartBadge />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 text-white"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-roro-black/95 backdrop-blur-md md:hidden pt-24 px-6 pb-8"
          >
            <motion.nav
              className="flex flex-col gap-6"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05 } },
                closed: {},
              }}
            >
              {NAV_LINKS.map((link) => (
                <motion.div key={link.href} variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 10 } }}>
                  <Link
                    href={link.href}
                    className="font-syncopate text-roro-white text-lg uppercase tracking-widest block py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
