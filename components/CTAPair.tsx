"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Category } from "@/data/products";

export default function CTAPair({
  category,
  onAskAI,
}: {
  category?: Category;
  onAskAI: () => void;
}) {
  const finderHref = category
    ? `/finder?category=${encodeURIComponent(category)}`
    : "/finder";

  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 24,
      }}
    >
      <Link href={finderHref} style={{ textDecoration: "none" }}>
        <motion.span
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-block",
            padding: "13px 26px",
            borderRadius: 999,
            background: "var(--accent)",
            color: "#000",
            fontWeight: 600,
            fontSize: 14.5,
            boxShadow: "0 0 24px rgba(61,217,255,0.35)",
          }}
        >
          Find My Gadget
        </motion.span>
      </Link>

      <motion.button
        onClick={onAskAI}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        style={{
          padding: "13px 26px",
          borderRadius: 999,
          background: "transparent",
          border: "1px solid var(--surface-border)",
          color: "var(--text-primary)",
          fontWeight: 600,
          fontSize: 14.5,
          cursor: "pointer",
        }}
      >
        Ask TFM AI
      </motion.button>
    </div>
  );
}