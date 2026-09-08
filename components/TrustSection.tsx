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
    title: "Flexible payment",
    detail: "We work with your budget",
  },
];

export default function TrustSection() {
  return (
    <section
      style={{
        padding: "60px 24px 80px",
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
        }}
      >
        {badges.map((b) => (
          <div
            key={b.title}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--surface-border)",
              borderRadius: 16,
              padding: "24px 20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 26, marginBottom: 10 }}>{b.icon}</div>
            <p
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              {b.title}
            </p>
            <p
              style={{
                fontSize: 13,
                color: "var(--text-muted)",
                margin: "6px 0 0",
                lineHeight: 1.5,
              }}
            >
              {b.detail}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}