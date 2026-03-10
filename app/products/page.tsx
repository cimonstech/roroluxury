import { PageHeader } from "@/components/layout/PageHeader";
import { ProductsClient } from "./ProductsClient";

export const metadata = {
  title: "Products | Roro Luxury",
  description: "Explore our curated collection of luxury lighting fixtures.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-roro-white">
      <PageHeader
        title="Products"
        subtitle="Our Collections"
        lightImage="/room-light.jpg"
      />
      <ProductsClient />
    </main>
  );
}
