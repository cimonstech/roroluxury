"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AVATARS = [
  "/members/person1.webp",
  "/members/person2.webp",
  "/members/person3.webp",
  "/members/person4.webp",
  "/members/person5.webp",
  "/members/person6.webp",
  "/members/person7.webp",
];

const STATS = [
  { number: "200+", label: "Homes Transformed" },
  { number: "4", label: "Signature Collections" },
  { number: "100%", label: "Bespoke Service" },
];

export default function TrustBand() {
  return (
    <motion.section
      className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-16 py-8"
      style={{
        background: "#0A0805",
        borderTop: "1px solid rgba(245,240,232,0.08)",
        borderBottom: "1px solid rgba(245,240,232,0.08)",
      }}
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-4">
        <div className="flex">
          {AVATARS.map((src, i) => (
            <div
              key={src}
              className="rounded-full overflow-hidden shrink-0"
              style={{
                width: 36,
                height: 36,
                border: "2px solid #0A0805",
                marginLeft: i === 0 ? 0 : -10,
                zIndex: AVATARS.length - i,
              }}
            >
              <Image
                src={src}
                alt=""
                width={36}
                height={36}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        <div>
          <p
            className="font-cormorant italic"
            style={{ fontSize: "1.1rem", color: "#F5F0E8" }}
          >
            Trusted by Accra&apos;s Finest Homes
          </p>
          <p
            className="font-jost font-light"
            style={{
              fontSize: "0.75rem",
              color: "#8A8680",
              letterSpacing: "0.05em",
            }}
          >
            Over 200+ luxury spaces transformed
          </p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-8">
            <div>
              <p
                className="font-cormorant"
                style={{ fontSize: "2rem", color: "#F5F0E8" }}
              >
                {stat.number}
              </p>
              <p
                className="font-syncopate"
                style={{
                  fontSize: "0.45rem",
                  color: "#8A8680",
                  letterSpacing: "0.15em",
                }}
              >
                {stat.label}
              </p>
            </div>
            {i < STATS.length - 1 && (
              <div
                style={{
                  width: 1,
                  height: 32,
                  background: "rgba(245,240,232,0.1)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
