"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ShowcaseItem {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  copy: string;
  fromX: number;
  imageFirst: boolean;
}

const items: ShowcaseItem[] = [
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523797/lucid-origin_A_wireless_earbuds_charging_case_fully_closed_with_no_visible_seam_or_hinge_line-3_1_yexaqx.jpg",
    alt: "TFM wireless earbuds",
    eyebrow: "Earbuds",
    title: "Sound that fits your pocket, and your budget",
    copy: "From everyday buds to noise-cancelling picks — tell us what you want to spend, we'll show you what's real.",
    fromX: -80,
    imageFirst: true,
  },
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523796/lucid-origin_A_pair_of_over-ear_headphones_floating_at_a_dynamic_diagonal_angle_in_a_complete-0_hefxs3.jpg",
    alt: "TFM headphones",
    eyebrow: "Headphones",
    title: "Studio sound, street price",
    copy: "JBL, Bose, and more — over-ear comfort without the over-the-top markup.",
    fromX: 80,
    imageFirst: false,
  },
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523796/lucid-origin_A_cylindrical_portable_bluetooth_speaker_floating_at_a_dynamic_diagonal_angle_in-1_1_bgipyq.jpg",
    alt: "TFM bluetooth speaker",
    eyebrow: "Speakers",
    title: "Turn it up, without turning out your wallet",
    copy: "Portable speakers built for the party, priced for the plug.",
    fromX: -80,
    imageFirst: true,
  },
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523796/lucid-origin_A_braided_charging_cable_neatly_coiled_and_secured_inside_a_small_open_zippered_-0_1_sdqdtp.jpg",
    alt: "TFM charging cable",
    eyebrow: "Chargers & Cables",
    title: "The small stuff, sorted",
    copy: "Cables, heads, and everyday essentials — the things you always need and never want to overpay for.",
    fromX: 80,
    imageFirst: false,
  },
  {
    image:
      "https://res.cloudinary.com/dx3k7hbnc/image/upload/v1788523795/lucid-origin_A_modern_smartwatch_floating_at_a_dynamic_diagonal_angle_in_a_completely_dark_vo-0_1_zk69bp.jpg",
    alt: "TFM smartwatch",
    eyebrow: "Smartwatches",
    title: "Track everything. Overspend on nothing.",
    copy: "Itel, Oraimo, and more — smart features at a price that actually makes sense.",
    fromX: -80,
    imageFirst: true,
  },
];

function Row({ item }: { item: ShowcaseItem }) {
  const textBlock = (
    <motion.div
      initial={{ opacity: 0, x: item.fromX * -1, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ flex: 1, minWidth: 280 }}
    >
      <span
        style={{
          color: "var(--accent)",
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        {item.eyebrow}
      </span>
      <h3
        style={{
          fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
          marginTop: 10,
          marginBottom: 14,
          color: "var(--text-primary)",
        }}
      >
        {item.title}
      </h3>
      <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7, maxWidth: 420 }}>
        {item.copy}
      </p>
    </motion.div>
  );

  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, x: item.fromX, scale: 0.92 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ flex: 1, minWidth: 280, display: "flex", justifyContent: "center" }}
    >
      <Image
        src={item.image}
        alt={item.alt}
        width={500}
        height={500}
        style={{ width: "min(360px, 70vw)", height: "auto" }}
      />
    </motion.div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 48,
        padding: "80px 24px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {item.imageFirst ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
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
