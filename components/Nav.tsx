"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "Shop", href: "#shop" },
  { label: "Find My Gadget", href: "#finder" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 24px",
        }}
      >
        <motion.span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 28,
            letterSpacing: "-0.02em",
            backgroundImage:
              "linear-gradient(90deg, var(--text-primary) 0%, var(--text-primary) 30%, var(--accent) 50%, var(--text-primary) 70%, var(--text-primary) 100%)",
            backgroundSize: "250% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            filter:
              "drop-shadow(0 0 6px rgba(61,217,255,0.55)) drop-shadow(0 0 16px rgba(61,217,255,0.3))",
          }}
          animate={{ backgroundPosition: ["200% 0%", "-50% 0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          TFM.
        </motion.span>

        <motion.button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.85 }}
          style={{
            background: "none",
            border: "none",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            padding: 10,
          }}
        >
          <span style={{ width: 30, height: 2.5, background: "var(--text-primary)" }} />
          <span style={{ width: 30, height: 2.5, background: "var(--text-primary)" }} />
          <span style={{ width: 30, height: 2.5, background: "var(--text-primary)" }} />
        </motion.button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 90% 5%)" }}
            animate={{ clipPath: "circle(150% at 90% 5%)" }}
            exit={{ clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "var(--bg)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              overflow: "hidden",
            }}
          >
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 50% 40%, rgba(61,217,255,0.15) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />

            <motion.button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileTap={{ scale: 0.85, rotate: 90 }}
              style={{
                position: "absolute",
                top: 20,
                right: 24,
                background: "none",
                border: "none",
                color: "var(--text-primary)",
                fontSize: 32,
                padding: 8,
                zIndex: 2,
              }}
            >
              ×
            </motion.button>

            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 60, rotateX: -40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  scale: 1.08,
                  color: "var(--accent)",
                  textShadow: "0 0 20px rgba(61,217,255,0.8)",
                }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  padding: "10px 0",
                  zIndex: 2,
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}