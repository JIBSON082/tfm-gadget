"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ShowcaseItem {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  copy: string;
  spinDir: number;
}

const items: ShowcaseItem[] = [
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523797/lucid-origin_A_wireless_earbuds_charging_case_fully_closed_with_no_visible_seam_or_hinge_line-3_1_yexaqx.jpg",
    alt: "TFM wireless earbuds",
    eyebrow: "Earbuds",
    title: "Sound that fits your pocket, and your budget",
    copy: "From everyday buds to noise-cancelling picks — tell us what you want to spend, we'll show you what's real.",
    spinDir: 1,
  },
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523796/lucid-origin_A_pair_of_over-ear_headphones_floating_at_a_dynamic_diagonal_angle_in_a_complete-0_hefxs3.jpg",
    alt: "TFM headphones",
    eyebrow: "Headphones",
    title: "Studio sound, street price",
    copy: "JBL, Bose, and more — over-ear comfort without the over-the-top markup.",
    spinDir: -1,
  },
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523796/lucid-origin_A_cylindrical_portable_bluetooth_speaker_floating_at_a_dynamic_diagonal_angle_in-1_1_bgipyq.jpg",
    alt: "TFM bluetooth speaker",
    eyebrow: "Speakers",
    title: "Turn it up, without turning out your wallet",
    copy: "Portable speakers built for the party, priced for the plug.",
    spinDir: 1,
  },
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523796/lucid-origin_A_braided_charging_cable_neatly_coiled_and_secured_inside_a_small_open_zippered_-0_1_sdqdtp.jpg",
    alt: "TFM charging cable",
    eyebrow: "Chargers & Cables",
    title: "The small stuff, sorted",
    copy: "Cables, heads, and everyday essentials — the things you always need and never want to overpay for.",
    spinDir: -1,
  },
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523795/lucid-origin_A_modern_smartwatch_floating_at_a_dynamic_diagonal_angle_in_a_completely_dark_vo-0_1_zk69bp.jpg",
    alt: "TFM smartwatch",
    eyebrow: "Smartwatches",
    title: "Track everything. Overspend on nothing.",
    copy: "Itel, Oraimo, and more — smart features at a price that actually makes sense.",
    spinDir: 1,
  },
];

function SplitWord({
  text,
  progress,
  start,
  end,
}: {
  text: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => {
        const wStart = start + (i / words.length) * (end - start) * 0.6;
        const wEnd = wStart + 0.15;
        const y = useTransform(progress, [wStart, wEnd], [60, 0]);
        const opacity = useTransform(progress, [wStart, wEnd], [0, 1]);
        const blur = useTransform(progress, [wStart, wEnd], [8, 0]);
        return (
          <motion.span
            key={i}
            style={{
              display: "inline-block",
              marginRight: "0.25em",
              y,
              opacity,
              filter: useTransform(blur, (b) => `blur(${b}px)`),
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </>
  );
}

function Row({ item }: { item: ShowcaseItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.05"],
  });

  // Ordered reveal sequence — each stage fully completes before the next
  // begins: eyebrow (0–0.12) → title (0.12–0.32) → copy (0.32–0.48) →
  // image settles to a calm, fully-resolved resting state by 0.5, holds
  // neutral through the middle of its visible time, then eases back out
  // only as it approaches leaving the screen (0.85–1). This fixes the old
  // bug where the image stayed clamped at a rotated extreme the whole time
  // it was on screen instead of ever fully settling.
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [item.spinDir * -22, 0, item.spinDir * 22]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.82, 1, 0.82]);
  const skew = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [item.spinDir * 4, 0, item.spinDir * -4]
  );
  const imgOpacity = useTransform(
    scrollYProgress,
    [0.36, 0.5, 0.85, 1],
    [0.15, 1, 1, 0.3]
  );
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.2, 0.6]);

  const eyebrowOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);
  const copyOpacity = useTransform(scrollYProgress, [0.34, 0.48], [0, 1]);
  const copyY = useTransform(scrollYProgress, [0.34, 0.48], [30, 0]);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        padding: "48px 24px",
        maxWidth: 720,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <motion.span
        style={{
          color: "var(--accent)",
          fontSize: 13,
          fontWeight: 500,
          textShadow: "0 0 12px rgba(61,217,255,0.5)",
          opacity: eyebrowOpacity,
        }}
      >
        {item.eyebrow}
      </motion.span>

      <h3
        style={{
          fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
          marginTop: 10,
          marginBottom: 14,
          color: "var(--text-primary)",
          overflow: "hidden",
        }}
      >
        <SplitWord text={item.title} progress={scrollYProgress} start={0.12} end={0.32} />
      </h3>

      <motion.p
        style={{
          color: "var(--text-muted)",
          fontSize: 16,
          lineHeight: 1.7,
          maxWidth: 420,
          marginInline: "auto",
          opacity: copyOpacity,
          y: copyY,
        }}
      >
        {item.copy}
      </motion.p>

      <div
        style={{
          width: "min(380px, 78vw)",
          position: "relative",
          marginTop: 12,
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: "-20%",
            background:
              "radial-gradient(circle, rgba(61,217,255,0.18) 0%, transparent 70%)",
            scale: glowScale,
            zIndex: 0,
          }}
        />
        <motion.div
          style={{
            rotate,
            scale,
            skewX: skew,
            opacity: imgOpacity,
            maskImage:
              "radial-gradient(ellipse 50% 50% at center, black 20%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 50% at center, black 20%, transparent 85%)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Image
            src={item.image}
            alt={item.alt}
            width={500}
            height={500}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section style={{ background: "var(--bg)" }}>
      {items.map((item) => (
        <Row key={item.eyebrow} item={item} />
      ))}
    </section>
  );
}