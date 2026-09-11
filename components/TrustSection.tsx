"use client";

import { motion } from "framer-motion";

const badges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 16V7a1 1 0 011-1h9v10" />
        <path d="M13 10h5l3 3v3h-2" />
        <circle cx="7.5" cy="17.5" r="1.8" />
        <circle cx="17.5" cy="17.5" r="1.8" />
      </svg>
    ),
    title: "Fast delivery",
    detail: "Delivered across Lagos in days, not weeks",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" />
      </svg>
    ),
    title: "Genuine warranty",
    detail: "Every item comes with cover, no exceptions",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-1.9 5.4L21 21l-4.1-1.1a8.5 8.5 0 11-3.9-16.1 8.5 8.5 0 018.9 7.7z" />
      </svg>
    ),
    title: "Real support",
    detail: "Speak to an actual person on WhatsApp, any time",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18" />
        <path d="M7 15h4" />
      </svg>
    ),
    title: "Flexible payment",
    detail: "Full payment or part payment, whichever works for you",
  },
];

export default function TrustSection() {
  return (
    <section
      style={{
        padding: "24px 24px 80px",
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontSize: 22,
          fontWeight: 600,
          color: "var(--text-primary)",
          textAlign: "center",
          margin: "0 0 24px",
        }}
      >
        Why buy from TFM
      </motion.h2>

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
            <div
              style={{
                width: 30,
                height: 30,
                margin: "0 auto 12px",
              }}
            >
              {b.icon}
            </div>
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