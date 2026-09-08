"use client";

import { motion } from "framer-motion";

const badges = [
  { icon: "🚚", title: "Fast delivery" },
  { icon: "🛡️", title: "Warranty included" },
  { icon: "💬", title: "Real support" },
  { icon: "✅", title: "Flexible payment" },
];

export default function TrustStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
        gap: 6,
        marginTop: 16,
        maxWidth: 620,
        width: "100%",
      }}
    >
      {badges.map((b) => (
        <div
          key={b.title}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--surface-border)",
            borderRadius: 10,
            padding: "8px 6px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 13, marginBottom: 3 }}>{b.icon}</div>
          <p
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "var(--text-primary)",
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            {b.title}
          </p>
        </div>
      ))}
    </motion.div>
  );
}