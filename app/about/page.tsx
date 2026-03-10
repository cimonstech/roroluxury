import { PageHeader } from "@/components/layout/PageHeader";
import { AboutContent } from "./AboutContent";

export const metadata = {
  title: "About | Roro Luxury",
  description: "Discover Roro Luxury — luxury lighting crafted for the exceptional.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-roro-white">
      <PageHeader
        title="About"
        subtitle="Our Story"
        lightImage="/room-light.jpg"
      />
      <AboutContent />
    </main>
  );
}
