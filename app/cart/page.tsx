"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import { useCart } from "@/components/CartContext";

const currency = (n: number) => `₦${n.toLocaleString("en-NG")}`;
const WHATSAPP_NUMBER = "2348136880920";

export default function CartPage() {
  const { items, removeItem, updateQty, total, clearCart } = useCart();

  function handleCheckout() {
    const lines = items.map(
      (i) => `• ${i.name} (${i.brand}) x${i.qty} — ${currency(i.price * i.qty)}`
    );
    const message = [
      "Hi TFM Gadget, I'd like to order:",
      "",
      ...lines,
      "",
      `Total: ${currency(total)}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <main>
      <Nav />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          padding: "120px 24px 100px",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        <span
          style={{
            color: "var(--accent)",
            fontSize: 13,
            fontWeight: 500,
            textShadow: "0 0 12px rgba(61,217,255,0.5)",
          }}
        >
          Your Cart
        </span>
        <h1
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
            marginTop: 8,
            marginBottom: 32,
            color: "var(--text-primary)",
          }}
        >
          {items.length === 0 ? "Nothing here yet" : "Ready when you are"}
        </h1>

        {items.length === 0 ? (
          <p style={{ color: "var(--text-muted)", fontSize: 15 }}>
            Head back to the{" "}
            <a href="/finder" style={{ color: "var(--accent)" }}>
              Smart Finder
            </a>{" "}
            to pick something that fits your budget.
          </p>
        ) : (
          <>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "var(--surface)",
                    border: "1px solid var(--surface-border)",
                    borderRadius: 16,
                    padding: 18,
                  }}
                >
                  <div>
                    <span style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600 }}>
                      {item.brand}
                    </span>
                    <p style={{ fontSize: 15, color: "var(--text-primary)", margin: "4px 0" }}>
                      {item.name}
                    </p>
                    <span style={{ fontSize: 14, color: "var(--text-muted)" }}>
                      {currency(item.price)} each
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "1px solid var(--surface-border)",
                        background: "none",
                        color: "var(--text-primary)",
                      }}
                    >
                      −
                    </button>
                    <span style={{ color: "var(--text-primary)", minWidth: 16, textAlign: "center" }}>
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "1px solid var(--surface-border)",
                        background: "none",
                        color: "var(--text-primary)",
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        marginLeft: 8,
                        background: "none",
                        border: "none",
                        color: "var(--text-muted)",
                        fontSize: 13,
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 28,
                paddingTop: 20,
                borderTop: "1px solid var(--surface-border)",
              }}
            >
              <span style={{ fontSize: 15, color: "var(--text-muted)" }}>Total</span>
              <span style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)" }}>
                {currency(total)}
              </span>
            </div>

            <motion.button
              onClick={handleCheckout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: "100%",
                marginTop: 20,
                padding: "16px",
                borderRadius: 999,
                background: "var(--accent)",
                color: "#000",
                fontWeight: 700,
                fontSize: 16,
                border: "none",
                boxShadow: "0 0 24px rgba(61,217,255,0.35)",
              }}
            >
              Checkout via WhatsApp
            </motion.button>

            <button
              onClick={clearCart}
              style={{
                display: "block",
                margin: "16px auto 0",
                background: "none",
                border: "none",
                color: "var(--text-muted)",
                fontSize: 13,
              }}
            >
              Clear cart
            </button>
          </>
        )}
      </motion.div>
    </main>
  );
                }
