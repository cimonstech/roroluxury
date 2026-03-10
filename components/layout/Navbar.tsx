"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/CartContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** Header height on Products, About, Contact, Product detail (min 280px) */
const PAGE_HEADER_HEIGHT = 280;
/** Homepage: Hero (100vh) + TrustBand (~120px) */
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

  const isHome = pathname === "/";
  const isSubPage = !isHome;

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

  const useDarkNav = scrolledPast;

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-12 px-7 py-2.5 w-fit rounded-full cursor-none transition-all duration-300"
      style={{
        background: useDarkNav
          ? "rgba(10, 8, 5, 0.75)"
          : "rgba(245, 240, 232, 0.1)",
        backdropFilter: "blur(16px)",
        border: useDarkNav
          ? "1px solid rgba(245, 240, 232, 0.12)"
          : "1px solid rgba(245, 240, 232, 0.15)",
      }}
    >
      <Link href="/" className="cursor-none" data-cursor-hover>
        <Image
          src="/roro_luxury_white.png"
          alt="Roro Luxury"
          width={120}
          height={32}
          className="object-contain h-8"
        />
      </Link>
      <div className="flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-syncopate text-white uppercase transition-opacity duration-300 cursor-none hover:opacity-60"
            style={{
              fontSize: "0.5rem",
              letterSpacing: "0.25em",
            }}
            data-cursor-hover
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/cart"
          className="relative inline-flex items-center font-syncopate text-white transition-opacity duration-300 cursor-none hover:opacity-60"
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
    </nav>
  );
}
