import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { SITE } from "@/lib/constants";
import { PageHeader } from "@/components/layout/PageHeader";

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

  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hi, I'm interested in the ${product.name}. I'd like to place an order.`
  )}`;

  return (
    <main className="min-h-screen bg-roro-white">
      <PageHeader
        title={product.name}
        subtitle={product.category}
        image={product.image}
        objectFit="contain"
      />
      <div className="max-w-[1440px] mx-auto px-8 md:px-20 py-24">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 font-syncopate text-roro-grey text-[0.5rem] tracking-[0.2em] uppercase mb-12 hover:text-roro-black transition-colors cursor-none"
          data-cursor-hover
        >
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-roro-grey/10">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-8"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <p
              className="font-syncopate text-roro-grey text-[0.5rem] tracking-[0.3em] uppercase mb-4"
            >
              {product.category}
            </p>
            <h1
              className="font-cormorant italic text-roro-black mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.2 }}
            >
              {product.name}
            </h1>
            <p className="font-jost font-light text-roro-grey text-lg leading-relaxed mb-8">
              {product.longDescription}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-roro-black text-roro-white font-syncopate text-[0.5rem] tracking-[0.2em] uppercase w-fit transition-opacity hover:opacity-90 cursor-none"
              data-cursor-hover
            >
              Order via WhatsApp
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
