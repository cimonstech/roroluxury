"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/cart", label: "Cart" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}`;
  const instagramUrl = `https://instagram.com/${SITE.instagram.replace("@", "")}`;

  return (
    <footer className="w-full bg-roro-black border-t border-roro-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/roro_luxury_white.png"
                alt={SITE.name}
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="font-jost font-light text-roro-grey text-sm leading-relaxed">
              {SITE.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-syncopate text-roro-white text-[0.5rem] tracking-[0.25em] uppercase mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-jost font-light text-roro-grey hover:text-roro-white transition-colors text-sm cursor-none"
                    data-cursor-hover
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syncopate text-roro-white text-[0.5rem] tracking-[0.25em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-jost font-light text-roro-grey hover:text-roro-white transition-colors text-sm cursor-none"
                  data-cursor-hover
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jost font-light text-roro-grey hover:text-roro-white transition-colors text-sm cursor-none"
                  data-cursor-hover
                >
                  WhatsApp
                </a>
              </li>
              <li className="font-jost font-light text-roro-grey text-sm">
                {SITE.location}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-syncopate text-roro-white text-[0.5rem] tracking-[0.25em] uppercase mb-6">
              Follow
            </h4>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost font-light text-roro-grey hover:text-roro-white transition-colors text-sm cursor-none"
              data-cursor-hover
            >
              {SITE.instagram}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-roro-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <p className="font-jost font-light text-roro-grey text-xs">
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
            <Link
              href="/faq"
              className="font-jost font-light text-roro-grey hover:text-roro-white transition-colors text-xs cursor-none"
              data-cursor-hover
            >
              FAQ
            </Link>
          </div>
          <p className="font-syncopate text-roro-grey text-[0.45rem] tracking-[0.2em] uppercase">
            Accra, Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
