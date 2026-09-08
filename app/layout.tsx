import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { CartProvider } from "@/components/CartContext";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "TFM Gadget — Name Your Price. Get Your Gadget.",
  description:
    "Lagos's best plug for power banks, earbuds, headphones, and more. Set your budget, find your gadget, get it fast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SmoothScroll>{children}</SmoothScroll>
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}