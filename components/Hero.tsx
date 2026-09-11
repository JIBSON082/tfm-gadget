"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const badges = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <motion.path
          d="M4 26h4M4 26a3 3 0 106 0M10 26H24V13h-8l-4 5v8"
          stroke="var(--accent)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        />
        <motion.circle
          cx="26" cy="26" r="3.2"
          stroke="var(--accent)" strokeWidth="1.6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 380, damping: 14, delay: 0.75 }}
        />
        <motion.path
          d="M24 15h6l4 5v6h-4"
          stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.g
          initial={{ opacity: 0, x: 6 }}
          whileInView={{ opacity: [0, 1, 0], x: [6, -2, -10] }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
        >
          <path d="M0 20h4M-2 23h4" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
        </motion.g>
      </svg>
    ),
    loop: { x: [0, 5, 0] },
    title: "Fast delivery",
    detail: "Delivered across Lagos in days, not weeks",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <motion.path
          d="M20 5l11 4v9c0 8-5 13-11 17-6-4-11-9-11-17V9l11-4z"
          stroke="var(--accent)" strokeWidth="1.6" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        />
        <motion.path
          d="M14.5 20l4 4 7-8"
          stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.85 }}
        />
      </svg>
    ),
    loop: { scale: [1, 1.1, 1] },
    title: "Genuine warranty",
    detail: "Every item comes with cover, no exceptions",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <motion.path
          d="M6 12a3 3 0 013-3h18a3 3 0 013 3v13a3 3 0 01-3 3H15l-6 5v-5H9a3 3 0 01-3-3V12z"
          stroke="var(--accent)" strokeWidth="1.6" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
        />
        {[13, 20, 27].map((cx, i) => (
          <motion.circle
            key={cx}
            cx={cx} cy="18.5" r="1.6"
            fill="var(--accent)"
            initial={{ opacity: 0.2, y: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 1,
              delay: 0.9 + i * 0.15,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    ),
    loop: {},
    title: "Real support",
    detail: "Speak to an actual person on WhatsApp, any time",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <motion.rect
          x="4" y="10" width="32" height="21" rx="3"
          stroke="var(--accent)" strokeWidth="1.6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        />
        <motion.rect
          x="4" y="15" width="32" height="5"
          fill="var(--accent)"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        />
        <motion.rect
          x="8" y="24" width="9" height="3" rx="1.5"
          fill="var(--accent)"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.95 }}
        />
      </svg>
    ),
    loop: { y: [0, -3, 0] },
    title: "Flexible payment",
    detail: "Full payment or part payment, whichever works for you",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
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

const titleVariant = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.55 },
  },
};

const detailVariant = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.7 },
  },
};

const underline = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.65 },
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
                  width: 40,
                  height: 40,
                  margin: "0 auto 14px",
                }}
              >
                {b.icon}
              </motion.div>

              <motion.p
                variants={titleVariant}
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                {b.title}
              </motion.p>

              <motion.div
                variants={underline}
                style={{
                  width: 28,
                  height: 2,
                  background: "var(--accent)",
                  opacity: 0.5,
                  margin: "8px auto",
                  transformOrigin: "center",
                  borderRadius: 2,
                }}
              />

              <motion.p
                variants={detailVariant}
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {b.detail}
              </motion.p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}