"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function AIPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              zIndex: 200,
            }}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 201,
              background: "var(--surface)",
              borderTop: "1px solid var(--surface-border)",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              padding: "24px 24px 32px",
              maxHeight: "75vh",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "var(--text-primary)",
                }}
              >
                TFM AI
              </span>
              <button
                onClick={onClose}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-muted)",
                  fontSize: 24,
                }}
              >
                ×
              </button>
            </div>

            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-muted)",
                fontSize: 15,
                textAlign: "center",
                padding: "20px 0",
              }}
            >
              Ask me anything about TFM products — coming soon.
            </div>

            <input
              disabled
              placeholder="Ask about a product..."
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: 12,
                border: "1px solid var(--surface-border)",
                background: "var(--bg)",
                color: "var(--text-muted)",
                fontSize: 15,
              }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}