"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CTAPair from "@/components/CTAPair";
import AIPanel from "@/components/AIPanel";
import type { Category } from "@/data/products";

interface Slide {
  image: string;
  eyebrow: string;
  category: Category;
  title: string;
  copy: string;
}

const slides: Slide[] = [
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523796/lucid-origin_A_matte_black_power_bank_floating_at_a_dynamic_diagonal_angle_in_a_completely_da-3_w6nrkh.jpg",
    eyebrow: "Power Banks",
    category: "Power Banks",
    title: "Never run out of power.",
    copy: "Reliable power banks for everyday use, at prices that make sense.",
  },
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523797/lucid-origin_A_wireless_earbuds_charging_case_fully_closed_with_no_visible_seam_or_hinge_line-3_1_yexaqx.jpg",
    eyebrow: "Earbuds",
    category: "Earbuds & Earphones",
    title: "Great sound. Better price.",
    copy: "Quality earbuds for calls, music and everything in between.",
  },
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523796/lucid-origin_A_pair_of_over-ear_headphones_floating_at_a_dynamic_diagonal_angle_in_a_complete-0_hefxs3.jpg",
    eyebrow: "Headphones",
    category: "Headphones & Headsets",
    title: "Premium sound. Better value.",
    copy: "Enjoy great sound and comfort without overspending.",
  },
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523796/lucid-origin_A_cylindrical_portable_bluetooth_speaker_floating_at_a_dynamic_diagonal_angle_in-1_1_bgipyq.jpg",
    eyebrow: "Speakers",
    category: "Speakers & Microphones",
    title: "Make every moment louder.",
    copy: "Portable speakers with great sound at the right price.",
  },
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523796/lucid-origin_A_braided_charging_cable_neatly_coiled_and_secured_inside_a_small_open_zippered_-0_1_sdqdtp.jpg",
    eyebrow: "Chargers & Cables",
    category: "Chargers & Cables",
    title: "Get the essentials right.",
    copy: "Quality chargers and cables you can count on.",
  },
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523795/lucid-origin_A_modern_smartwatch_floating_at_a_dynamic_diagonal_angle_in_a_completely_dark_vo-0_1_zk69bp.jpg",
    eyebrow: "Smartwatches",
    category: "Smartwatches",
    title: "Track more. Spend less.",
    copy: "Smart features, trusted brands and prices that make sense.",
  },
];

const AUTO_ADVANCE_MS = 4500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [aiOpen, setAiOpen] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[index];

  const imageVariants = {
    enter: { rotateY: 90, opacity: 0, scale: 0.85 },
    center: { rotateY: 0, opacity: 1, scale: 1 },
    exit: { rotateY: -90, opacity: 0, scale: 0.85 },
  };

  const textVariants = {
    enter: { rotateX: 30, y: 24, opacity: 0 },
    center: { rotateX: 0, y: 0, opacity: 1 },
    exit: { rotateX: -30, y: -24, opacity: 0 },
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "84px 24px 16px",
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
          fontSize: 19,
          fontWeight: 600,
          letterSpacing: "-0.01em",
          marginBottom: 18,
          textAlign: "center",
        }}
      >
        Quality gadgets. Better prices.
      </motion.p>

      <div
        style={{
          perspective: 1000,
          minHeight: 160,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.eyebrow}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: "center" }}
          >
            <span
              style={{
                color: "var(--accent)",
                fontSize: 13,
                fontWeight: 600,
                textShadow: "0 0 12px rgba(61,217,255,0.5)",
              }}
            >
              {slide.eyebrow}
            </span>
            <h1
              style={{
                fontSize: "clamp(2rem, 5.5vw, 3.6rem)",
                marginTop: 10,
                maxWidth: 780,
                color: "var(--text-primary)",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              {slide.title}
            </h1>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 16,
                maxWidth: 460,
                margin: "16px auto 0",
                lineHeight: 1.6,
              }}
            >
              {slide.copy}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

     <div
        style={{
          perspective: 1200,
          width: "min(380px, 75vw)",
          height: 300,
          marginTop: 28,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              maskImage:
                "radial-gradient(ellipse 50% 50% at center, black 20%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 50% 50% at center, black 20%, transparent 85%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={slide.image}
              alt={slide.eyebrow}
              width={800}
              height={800}
              priority={index === 0}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
                display: "block",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginTop: 16 }}
      >
        <CTAPair category={slide.category} onAskAI={() => setAiOpen(true)} />
      </motion.div>

      <AIPanel open={aiOpen} onClose={() => setAiOpen(false)} />
    </section>
  );
}