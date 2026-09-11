"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getAIResponse } from "@/data/aiEngine";
import type { Product } from "@/data/products";
import { useCart } from "@/components/CartContext";

interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
  products?: Product[];
  finderLink?: string;
}

const STORAGE_KEY = "tfm-ai-chat";
const currency = (n: number) => `₦${n.toLocaleString("en-NG")}`;

const GREETING: Message = {
  id: "greeting",
  role: "ai",
  text: "Hi, I'm TFM AI. Ask me about any product, a budget, a category, or a brand, and I'll show you what fits.",
};

export default function AIPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const { addItem } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) setMessages(parsed);
      }
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages, hydrated]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function handleSend() {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: crypto.randomUUID(), role: "user", text };
    const ai = getAIResponse(text);
    const aiMsg: Message = {
      id: crypto.randomUUID(),
      role: "ai",
      text: ai.reply,
      products: ai.products,
      finderLink: ai.finderLink,
    };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
  }

  function handleClearChat() {
    setMessages([GREETING]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore storage errors
    }
  }

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
              padding: "20px 20px 20px",
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              gap: 14,
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

              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <button
                  onClick={handleClearChat}
                  disabled={messages.length <= 1}
                  style={{
                    background: "none",
                    border: "none",
                    color: messages.length <= 1 ? "var(--surface-border)" : "var(--text-muted)",
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: messages.length <= 1 ? "default" : "pointer",
                    padding: "4px 0",
                  }}
                >
                  Clear chat
                </button>
                <button
                  onClick={onClose}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--text-muted)",
                    fontSize: 24,
                    lineHeight: 1,
                  }}
                >
                  ×
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              style={{
                flex: 1,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                paddingRight: 4,
              }}
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  style={{
                    alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                    maxWidth: "85%",
                  }}
                >
                  <div
                    style={{
                      background:
                        m.role === "user" ? "var(--accent)" : "rgba(255,255,255,0.05)",
                      color: m.role === "user" ? "#000" : "var(--text-primary)",
                      borderRadius: 14,
                      padding: "10px 14px",
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}
                  >
                    {m.text}
                  </div>

                  {m.products && m.products.length > 0 && (
                    <div
                      style={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      {m.products.map((p) => (
                        <div
                          key={p.id}
                          style={{
                            background: "var(--bg)",
                            border: "1px solid var(--surface-border)",
                            borderRadius: 12,
                            padding: "10px 12px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <div>
                            <p style={{ fontSize: 12.5, color: "var(--text-primary)", margin: 0 }}>
                              {p.name}
                            </p>
                            <span style={{ fontSize: 11, color: "var(--accent)" }}>
                              {p.brand} · {currency(p.price)}
                            </span>
                          </div>
                          <button
                            onClick={() => addItem(p)}
                            style={{
                              background: "var(--surface)",
                              border: "1px solid var(--surface-border)",
                              borderRadius: 999,
                              padding: "5px 10px",
                              color: "var(--text-primary)",
                              fontSize: 11,
                              fontWeight: 600,
                              whiteSpace: "nowrap",
                            }}
                          >
                            Add
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {m.finderLink && (
                    <Link
                      href={m.finderLink}
                      onClick={onClose}
                      style={{
                        display: "inline-block",
                        marginTop: 8,
                        fontSize: 12.5,
                        color: "var(--accent)",
                      }}
                    >
                      See all in Smart Finder →
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about a product..."
                style={{
                  flex: 1,
                  padding: "14px 16px",
                  borderRadius: 12,
                  border: "1px solid var(--surface-border)",
                  background: "var(--bg)",
                  color: "var(--text-primary)",
                  fontSize: 15,
                  outline: "none",
                }}
              />
              <button
                onClick={handleSend}
                style={{
                  background: "var(--accent)",
                  border: "none",
                  borderRadius: 12,
                  padding: "0 18px",
                  color: "#000",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Send
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}