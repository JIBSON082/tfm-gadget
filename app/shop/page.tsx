"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import {
  products,
  categories,
  getBrandsForCategory,
  type Category,
} from "@/data/products";
import { useCart } from "@/components/CartContext";

const currency = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export default function ShopPage() {
  const [category, setCategory] = useState<Category | "">("");
  const [brand, setBrand] = useState<string>("");
  const [justAdded, setJustAdded] = useState<string | null>(null);
  const { addItem, count } = useCart();

  const availableBrands = category ? getBrandsForCategory(category) : [];

  function handleCategoryChange(cat: Category | "") {
    setCategory(cat);
    setBrand("");
  }

  const results = useMemo(() => {
    return products.filter((p) => {
      if (category && p.category !== category) return false;
      if (brand && p.brand !== brand) return false;
      return true;
    });
  }, [category, brand]);

  function handleAddToCart(product: (typeof products)[number]) {
    addItem(product);
    setJustAdded(product.id);
    setTimeout(() => setJustAdded(null), 1500);
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
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 8,
          }}
        >
          <div>
            <span
              style={{
                color: "var(--accent)",
                fontSize: 13,
                fontWeight: 500,
                textShadow: "0 0 12px rgba(61,217,255,0.5)",
              }}
            >
              Full Catalogue
            </span>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
                marginTop: 8,
                color: "var(--text-primary)",
              }}
            >
              Everything we sell
            </h1>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 14,
                marginTop: 6,
              }}
            >
              {results.length} of {products.length} products
            </p>
          </div>

          <a href="/cart" style={{ textDecoration: "none" }}>
            <span
              style={{
                background: "var(--surface)",
                border: "1px solid var(--surface-border)",
                borderRadius: 999,
                padding: "10px 18px",
                color: "var(--text-primary)",
                fontSize: 14,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Cart {count > 0 && <span style={{ color: "var(--accent)" }}>({count})</span>}
            </span>
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginTop: 28,
            marginBottom: 32,
          }}
        >
          <select
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value as Category | "")}
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid var(--surface-border)",
              background: "var(--surface)",
              color: "var(--text-primary)",
              fontSize: 14,
              outline: "none",
              flex: "1 1 200px",
            }}
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            disabled={!category}
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid var(--surface-border)",
              background: "var(--surface)",
              color: "var(--text-primary)",
              fontSize: 14,
              outline: "none",
              flex: "1 1 200px",
              opacity: category ? 1 : 0.4,
            }}
          >
            <option value="">All brands</option>
            {availableBrands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 16,
          }}
        >
          {results.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.02, 0.4), duration: 0.35 }}
              style={{
                position: "relative",
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                border: "1px solid var(--surface-border)",
                borderRadius: 16,
                padding: 16,
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  color: "var(--accent)",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}
              >
                {p.brand}
              </span>
              <p
                style={{
                  fontSize: 13.5,
                  color: "var(--text-primary)",
                  margin: "6px 0 10px",
                  lineHeight: 1.4,
                  minHeight: 38,
                }}
              >
                {p.name}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>
                  {currency(p.price)}
                </span>
                <button
                  onClick={() => handleAddToCart(p)}
                  style={{
                    background: justAdded === p.id ? "var(--accent)" : "var(--surface)",
                    border: "1px solid var(--surface-border)",
                    borderRadius: 999,
                    padding: "6px 12px",
                    color: justAdded === p.id ? "#000" : "var(--text-primary)",
                    fontSize: 11.5,
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {justAdded === p.id ? "Added ✓" : "Add"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {results.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              fontSize: 14,
              marginTop: 40,
            }}
          >
            No products match this filter.
          </p>
        )}
      </motion.div>
    </main>
  );
    }
