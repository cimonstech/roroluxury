import { PageHeader } from "@/components/layout/PageHeader";
import { FAQContent } from "./FAQContent";

export const metadata = {
  title: "FAQ | Roro Luxury",
  description: "Frequently asked questions about Roro Luxury lighting.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-roro-white">
      <PageHeader
        title="FAQ"
        subtitle="Frequently Asked Questions"
        lightImage="/room-light.jpg"
      />
      <FAQContent />
    </main>
  );
}
