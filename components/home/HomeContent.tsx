"use client";

import { useHero } from "@/lib/HeroContext";
import TrustBand from "@/components/home/TrustBand";
import ProductsSection from "@/components/home/ProductsSection";
import RoroStandardSection from "@/components/home/RoroStandardSection";
import FeaturedShowcase from "@/components/home/FeaturedShowcase";
import CTASection from "@/components/home/CTASection";

export function HomeContent() {
  const { isLit } = useHero();

  if (!isLit) return null;

  return (
    <>
      <TrustBand />
      <ProductsSection />
      <RoroStandardSection />
      <FeaturedShowcase />
      <CTASection />
    </>
  );
}
