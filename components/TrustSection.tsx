"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

const badges = [
  {
    key: "delivery",
    title: "Fast delivery",
    detail: "Delivered across Lagos in days, not weeks",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <motion.path
          d="M6 30V16a2 2 0 012-2h16v16"
          stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        />
        <motion.path
          d="M24 20h8l6 6v6h-4"
          stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
        />
        <motion.g
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 420, damping: 13, delay: 0.9 }}
        >
          <circle cx="15" cy="34" r="3.4" stroke="var(--accent)" strokeWidth="1.8" fill="var(--bg)" />
          <circle cx="33" cy="34" r="3.4" stroke="var(--accent)" strokeWidth="1.8" fill="var(--bg)" />
        </motion.g>
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={2 + i * 3} cy="24" r="1"
            fill="var(--accent)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0], x: [0, -8] }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              delay: 1.2 + i * 0.2,
              ease: "easeIn",
            }}
          />
        ))}
      </svg>
    ),
  },
  {
    key: "warranty",
    title: "Genuine warranty",
    detail: "Every item comes with cover, no exceptions",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <motion.path
          d="M24 6l13 5v10c0 10-6 15.5-13 21-7-5.5-13-11-13-21V11l13-5z"
          stroke="var(--accent)" strokeWidth="1.8" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        />
        <motion.circle
          cx="24" cy="22" r="9"
          stroke="var(--accent)" strokeWidth="1"
          opacity="0.35"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0, 1.4, 1], opacity: [0, 0.5, 0.35] }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.85, ease: "easeOut" }}
        />
        <motion.path
          d="M17.5 22.5l4.5 4.5 9-9.5"
          stroke="var(--accent)" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.85 }}
        />
      </svg>
    ),
  },
  {
    key: "support",
    title: "Real support",
    detail: "Speak to an actual person on WhatsApp, any time",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <motion.path
          d="M8 15a4 4 0 014-4h24a4 4 0 014 4v15a4 4 0 01-4 4H20l-8 6v-6h-0a4 4 0 01-4-4V15z"
          stroke="var(--accent)" strokeWidth="1.8" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
        />
        {[16, 24, 32].map((cx, i) => (
          <motion.circle
            key={cx}
            cx={cx} cy="22" r="2"
            fill="var(--accent)"
            initial={{ y: 0, opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 0.9,
              delay: 0.75 + i * 0.16,
              repeat: Infinity,
              repeatDelay: 1.4,
              ease: "easeInOut",
            }}
          />
        ))}
        <motion.circle
          cx="36" cy="10" r="4.5"
          fill="#22c55e"
          initial={{ scale: 0 }}
          whileInView={{ scale: [0, 1.3, 1] }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 380, damping: 12, delay: 1.1 }}
        />
      </svg>
    ),
  },
  {
    key: "payment",
    title: "Flexible payment",
    detail: "Full payment or part payment, whichever works for you",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <motion.rect
          x="5" y="12" width="38" height="25" rx="4"
          stroke="var(--accent)" strokeWidth="1.8"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        />
        <motion.rect
          x="5" y="18" width="38" height="6"
          fill="var(--accent)"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.6 }}
        />
        <motion.rect
          x="10" y="29" width="11" height="4" rx="2"
          fill="var(--accent)"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.95 }}
        />
        <motion.g
          initial={{ opacity: 0, scale: 0.3, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 14, delay: 1.05 }}
        >
          <circle cx="35" cy="31" r="6" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1.6" />
          <path d="M32.5 31l1.8 1.8L37.5 29" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </motion.g>
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 60, rotateX: -30, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const titleVariant = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.6 } },
};

const detailVariant = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.75 } },
};

const underline = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.68 } },
};

function TrustCard({ badge }: { badge: (typeof badges)[number] }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [16, -16]), { stiffness: 220, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-16, 16]), { stiffness: 220, damping: 20 });
  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);

  const [burst, setBurst] = useState(0);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      variants={card}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={() => setBurst((n) => n + 1)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      style={{
        rotateX: rx,
        rotateY: ry,
        position: "relative",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid var(--surface-border)",
        borderRadius: 18,
        padding: "26px 20px",
        textAlign: "center",
        transformStyle: "preserve-3d",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: useTransform(
            [glowX, glowY],
            ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(63,169,255,0.16), transparent 60%)`
          ),
          pointerEvents: "none",
        }}
      />

      {Array.from({ length: burst > 0 ? 6 : 0 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <motion.span
            key={`${burst}-${i}`}
            initial={{
              opacity: 0.9,
              x: 0,
              y: 0,
              scale: 1,
            }}
            animate={{
              opacity: 0,
              x: Math.cos(angle) * 46,
              y: Math.sin(angle) * 46,
              scale: 0.3,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "38%",
              left: "50%",
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "var(--accent)",
              pointerEvents: "none",
            }}
          />
        );
      })}

      <motion.div
        animate={
          badge.key === "delivery"
            ? { x: [0, 5, 0] }
            : badge.key === "warranty"
            ? { scale: [1, 1.08, 1] }
            : badge.key === "payment"
            ? { y: [0, -4, 0] }
            : {}
        }
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 44,
          height: 44,
          margin: "0 auto 14px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {badge.icon}
      </motion.div>

      <motion.p
        variants={titleVariant}
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: "var(--text-primary)",
          margin: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        {badge.title}
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
          position: "relative",
          zIndex: 1,
        }}
      />

      <motion.p
        variants={detailVariant}
        style={{
          fontSize: 13,
          color: "var(--text-muted)",
          margin: 0,
          lineHeight: 1.5,
          position: "relative",
          zIndex: 1,
        }}
      >
        {badge.detail}
      </motion.p>
    </motion.div>
  );
}

export default function TrustSection() {
  return (
    <section
      style={{
        padding: "24px 24px 80px",
        maxWidth: 1000,
        margin: "0 auto",
        perspective: 1400,
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
        {badges.map((b) => (
          <TrustCard key={b.key} badge={b} />
        ))}
      </motion.div>
    </section>
  );
}