import HeroSection from "@/components/home/HeroSection";
import TrustBand from "@/components/home/TrustBand";
import ProductsSection from "@/components/home/ProductsSection";
import RoroStandardSection from "@/components/home/RoroStandardSection";
import FeaturedShowcase from "@/components/home/FeaturedShowcase";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBand />
      <ProductsSection />
      <RoroStandardSection />
      <FeaturedShowcase />
      <CTASection />
    </main>
  );
}
