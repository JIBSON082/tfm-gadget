"use client";

import { motion } from "framer-motion";
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
            fontSize: 20,
            letterSpacing: "-0.02em",
            backgroundImage:
              "linear-gradient(90deg, var(--text-primary) 0%, var(--text-primary) 35%, var(--accent) 50%, var(--text-primary) 65%, var(--text-primary) 100%)",
            backgroundSize: "250% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
          animate={{ backgroundPosition: ["200% 0%", "-50% 0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          TFM.
        </motion.span>

        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          style={{
            background: "none",
            border: "none",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            padding: 8,
          }}
        >
          <span style={{ width: 22, height: 2, background: "var(--text-primary)" }} />
          <span style={{ width: 22, height: 2, background: "var(--text-primary)" }} />
        </button>
      </header>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
          }}
        >
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: 20,
              right: 24,
              background: "none",
              border: "none",
              color: "var(--text-primary)",
              fontSize: 28,
              padding: 8,
            }}
          >
            ×
          </button>

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 28,
                color: "var(--text-primary)",
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}