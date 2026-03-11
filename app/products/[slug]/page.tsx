import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { SITE } from "@/lib/constants";
import { ProductDetailClient } from "./ProductDetailClient";

interface ProductDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductDetailProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product | Roro Luxury" };
  return {
    title: `${product.name} | Roro Luxury`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hi Roro Luxury, I am interested in ${product.name}. Please share more details.`
  )}`;

  return (
    <main className="min-h-screen bg-roro-white">
      <ProductDetailClient
        product={product}
        related={related}
        whatsappUrl={whatsappUrl}
      />
    </main>
  );
}
