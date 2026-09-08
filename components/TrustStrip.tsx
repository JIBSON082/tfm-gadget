"use client";

import { motion } from "framer-motion";

// NOTE: placeholder specifics below (delivery timeframe, warranty length) —
// swap for TFM's real policies before launch.
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
    title: "Flexible payment",
    detail: "We work with your budget",
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
        gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
        gap: 8,
        marginTop: 26,
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
            borderRadius: 12,
            padding: "10px 8px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 15, marginBottom: 4 }}>{b.icon}</div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            {b.title}
          </p>
          <p
            style={{
              fontSize: 9.5,
              color: "var(--text-muted)",
              margin: "2px 0 0",
              lineHeight: 1.3,
            }}
          >
            {b.detail}
          </p>
        </div>
      ))}
    </motion.div>
  );
}