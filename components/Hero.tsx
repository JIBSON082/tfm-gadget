"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 0.55]);
  const imgX = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "92vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 40px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(61,217,255,0.05) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          color: "var(--text-muted)",
          fontSize: 15,
          marginBottom: 18,
          textAlign: "center",
        }}
      >
        Lagos's best plug
      </motion.p>

      <div
        style={{
          fontSize: "clamp(2.2rem, 6vw, 4.2rem)",
          textAlign: "center",
          maxWidth: 780,
          color: "var(--text-primary)",
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          overflow: "hidden",
        }}
      >
        {["Name", "your", "price."].map((word, i) => (
          <motion.span
            key={word}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15 + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: "inline-block", marginRight: "0.28em" }}
          >
            {word}
          </motion.span>
        ))}
        <br />
        {["Get", "your", "gadget."].map((word, i) => (
          <motion.span
            key={word}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.45 + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: "inline-block", marginRight: "0.28em" }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        style={{
          color: "var(--text-muted)",
          fontSize: 17,
          maxWidth: 480,
          textAlign: "center",
          marginTop: 18,
          lineHeight: 1.6,
        }}
      >
        Tell us your budget. We'll show you exactly what fits — power banks,
        earbuds, chargers, and more.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -120, rotate: -18, filter: "blur(14px)" }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          scale: imgScale,
          x: imgX,
          y: imgY,
          marginTop: 48,
          width: "min(520px, 80vw)",
          position: "relative",
        }}
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            maskImage:
              "radial-gradient(ellipse 50% 50% at center, black 20%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 50% at center, black 20%, transparent 85%)",
          }}
        >
          <Image
            src="https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523796/lucid-origin_A_matte_black_power_bank_floating_at_a_dynamic_diagonal_angle_in_a_completely_da-3_w6nrkh.jpg"
            alt="TFM power bank"
            width={800}
            height={800}
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </motion.div>
      </motion.div>

      <motion.div style={{ opacity: textOpacity, marginTop: 8 }}>
        <span style={{ color: "var(--text-muted)", fontSize: 13 }}>
          scroll to explore ↓
        </span>
      </motion.div>
    </section>
  );
}