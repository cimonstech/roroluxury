import type { Metadata } from "next";
import { Cormorant_Garamond, Syncopate, Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { PageTransition } from "@/components/layout/PageTransition";
import { HeroProvider } from "@/lib/HeroContext";
import { CartProvider } from "@/lib/CartContext";
import { SITE } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const syncopate = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-syncopate",
});

const jost = Jost({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.tagline,
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${syncopate.variable} ${jost.variable}`}
    >
      <body className="font-jost antialiased">
        <HeroProvider>
          <CartProvider>
          <CustomCursor />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          </CartProvider>
        </HeroProvider>
      </body>
    </html>
  );
}
