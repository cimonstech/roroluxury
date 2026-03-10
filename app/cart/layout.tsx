import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart | Roro Luxury",
  description: "Your cart. Checkout via WhatsApp.",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
