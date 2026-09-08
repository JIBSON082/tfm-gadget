"use client";

import { motion } from "framer-motion";

const badges = [
  {
    icon: "🚚",
    title: "Fast delivery",
    detail: "Across Lagos, in days not weeks",
  },
  {
    icon: "🛡️",
    title: "Warranty included",
    detail: "On every item we sell",
  },
  {
    icon: "💬",
    title: "Real support",
    detail: "A real person on WhatsApp",
  },
  {
    icon: "✅",
    title: "Pay on your terms",
    detail: "Name your price, we'll confirm fast",
  },
];

export default function TrustStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: 10,
        marginTop: 30,
        maxWidth: 560,
        width: "100%",
      }}
    >
      {badges.map((b) => (
        <div
          key={b.title}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--surface-border)",
            borderRadius: 14,
            padding: "14px 12px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 18, marginBottom: 6 }}>{b.icon}</div>
          <p
            style={{
              fontSize: 12.5,
              fontWeight: 600,
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            {b.title}
          </p>
          <p
            style={{
              fontSize: 11,
              color: "var(--text-muted)",
              margin: "3px 0 0",
              lineHeight: 1.4,
            }}
          >
            {b.detail}
          </p>
        </div>
      ))}
    </motion.div>
  );
}