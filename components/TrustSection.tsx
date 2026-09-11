"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const badges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          d="M3 16V7a1 1 0 011-1h9v10"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        />
        <motion.path
          d="M13 10h5l3 3v3h-2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        />
        <motion.circle
          cx="7.5" cy="17.5" r="1.8"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.9 }}
        />
        <motion.circle
          cx="17.5" cy="17.5" r="1.8"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 12, delay: 1 }}
        />
      </svg>
    ),
    loop: { x: [0, 6, 0] },
    title: "Fast delivery",
    detail: "Delivered across Lagos in days, not weeks",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
    ),
    loop: { scale: [1, 1.12, 1] },
    title: "Genuine warranty",
    detail: "Every item comes with cover, no exceptions",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          d="M21 11.5a8.38 8.38 0 01-1.9 5.4L21 21l-4.1-1.1a8.5 8.5 0 11-3.9-16.1 8.5 8.5 0 018.9 7.7z"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
    ),
    loop: { rotate: [0, -8, 8, 0] },
    title: "Real support",
    detail: "Speak to an actual person on WhatsApp, any time",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <motion.rect
          x="3" y="6" width="18" height="13" rx="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        />
        <motion.path
          d="M3 10h18"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        />
        <motion.path
          d="M7 15h4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.9 }}
        />
      </svg>
    ),
    loop: { y: [0, -4, 0] },
    title: "Flexible payment",
    detail: "Full payment or part payment, whichever works for you",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 36, rotateX: -18, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TrustSection() {
  const [tilt, setTilt] = useState<{ [k: string]: { x: number; y: number } }>({});

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement>,
    key: string
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt((t) => ({ ...t, [key]: { x: px, y: py } }));
  };

  const resetTilt = (key: string) =>
    setTilt((t) => ({ ...t, [key]: { x: 0, y: 0 } }));

  return (
    <section
      style={{
        padding: "24px 24px 80px",
        maxWidth: 1000,
        margin: "0 auto",
        perspective: 1200,
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
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
        }}
      >
        {badges.map((b) => {
          const t = tilt[b.title] || { x: 0, y: 0 };
          return (
            <motion.div
              key={b.title}
              variants={card}
              onMouseMove={(e) => handleMove(e, b.title)}
              onMouseLeave={() => resetTilt(b.title)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                rotateY: t.x * 16,
                rotateX: -t.y * 16,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--surface-border)",
                borderRadius: 16,
                padding: "24px 20px",
                textAlign: "center",
                transformStyle: "preserve-3d",
                cursor: "default",
              }}
            >
              <motion.div
                animate={b.loop}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                style={{
                  width: 30,
                  height: 30,
                  margin: "0 auto 12px",
                }}
              >
                {b.icon}
              </motion.div>
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
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}