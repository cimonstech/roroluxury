"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function CustomCursor() {
  const pathname = usePathname();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor-hover]")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const related = e.relatedTarget as HTMLElement | null;
      if (!related?.closest("[data-cursor-hover]") && !target.closest("[data-cursor-hover]")) {
        setIsHovering(false);
      }
    };

    const handleScroll = () => {
      if (pathname !== "/") {
        const isProductDetail = /^\/products\/[^/]+$/.test(pathname);
        setIsDark(isProductDetail);
        return;
      }
      const hero = document.querySelector("[data-hero-section]");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setIsDark(rect.bottom > 0);
      }
    };

    const isProductDetail = /^\/products\/[^/]+$/.test(pathname);
    if (pathname !== "/") setIsDark(isProductDetail);
    else setIsDark(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const color = isDark ? "#F5F0E8" : "#0A0805";
  const contrastColor = isDark ? "#0A0805" : "#F5F0E8";
  const ringSize = isHovering ? 48 : 32;

  return (
    <>
      {/* Inner dot - 8px, contrasting border for visibility on any background */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        initial={false}
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ duration: 0 }}
      >
        <div
          className="absolute w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundColor: color,
            border: `1px solid ${contrastColor}`,
          }}
        />
      </motion.div>
      {/* Outer ring - contrasting border for visibility on any background */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        initial={false}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <motion.div
          className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            border: `1px solid ${color}`,
            boxShadow: `0 0 0 1px ${contrastColor}`,
          }}
          initial={{ width: 32, height: 32 }}
          animate={{
            width: ringSize,
            height: ringSize,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        />
      </motion.div>
    </>
  );
}
