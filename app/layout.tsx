import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
