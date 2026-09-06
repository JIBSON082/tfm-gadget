"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  products,
  categories,
  getBrandsForCategory,
  cheapestInCategory,
  cheapestForBrandInCategory,
  type Category,
  type Product,
} from "@/data/products";
import { useCart } from "@/components/CartContext";

const currency = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export default function FinderContent() {
  const params = useSearchParams();
  const router = useRouter();
  const { addItem, count } = useCart();

  const initialCategory = (params.get("category") as Category | null) ?? "";

  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState<Category | "">(initialCategory);
  const [brand, setBrand] = useState<string>("");
  const [justAdded, setJustAdded] = useState<string | null>(null);

  useEffect(() => {
    if (initialCategory) setCategory(initialCategory);
  }, [initialCategory]);

  const numericBudget = budget ? Number(budget) : null;
  const availableBrands = category ? getBrandsForCategory(category) : [];

  function handleCategoryChange(cat: Category | "") {
    setCategory(cat);
    setBrand("");
  }

  function handleAddToCart(product: Product) {
    addItem(product);
    setJustAdded(product.id);
    setTimeout(() => setJustAdded(null), 1500);
  }

  const { results, message } = useMemo(() => {
    if (!numericBudget || numericBudget <= 0) {
      return { results: [] as Product[], message: null as string | null };
    }

    if (!category) {
      const matches = products.filter((p) => p.price <= numericBudget);
      if (matches.length === 0) {
        const cheapest = [...products].sort((a, b) => a.price - b.price)[0];
        return {
          results: [],
          message: `Nothing fits ${currency(
            numericBudget
          )} yet — our cheapest item overall is ${cheapest.name} at ${currency(
            cheapest.price
          )}. Try raising your budget.`,
        };
      }
      return { results: matches.slice(0, 9), message: null };
    }

    if (category && !brand) {
      const matches = products.filter(
        (p) => p.category === category && p.price <= numericBudget
      );
      if (matches.length === 0) {
        const cheapest = cheapestInCategory(category);
        return {
          results: [],
          message: cheapest
            ? `${category} start from ${currency(
                cheapest.price
              )} — try raising your budget, or explore a different category.`
            : `No items found in ${category} right now.`,
        };
      }
      return { results: matches, message: null };
    }

    const matches = products.filter(
      (p) => p.category === category && p.brand === brand && p.price <= numericBudget
    );
    if (matches.length === 0) {
      const cheapestBrand = cheapestForBrandInCategory(category, brand);
      const cheapestOverall = cheapestInCategory(category);
      return {
        results: [],
        message: cheapestBrand
          ? `${brand} ${category} start from ${currency(
              cheapestBrand.price
            )} — try another brand, or raise your budget.${
              cheapestOverall && cheapestOverall.brand !== brand
                ? ` Cheapest option in ${category} overall: ${cheapestOverall.name} (${currency(
                    cheapestOverall.price
                  )}).`
                : ""
            }`
          : `No ${brand} items found in ${category}.`,
      };
    }
    return { results: matches, message: null };
  }, [numericBudget, category, brand]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: "120px 24px 100px",
        maxWidth: 840,
        margin: "0 auto",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
        <div>
          <span
            style={{
              color: "var(--accent)",
              fontSize: 13,
              fontWeight: 500,
              textShadow: "0 0 12px rgba(61,217,255,0.5)",
            }}
          >
            Smart Finder
          </span>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
              marginTop: 8,
              color: "var(--text-primary)",
            }}
          >
            Name your price.
          </h1>
        </div>

        <button
          onClick={() => router.push("/cart")}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--surface-border)",
            borderRadius: 999,
            padding: "10px 18px",
            color: "var(--text-primary)",
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          Cart {count > 0 && <span style={{ color: "var(--accent)" }}>({count})</span>}
        </button>
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid var(--surface-border)",
          borderRadius: 20,
          padding: 24,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          display: "flex",
          flexDirection: "column",
          gap: 18,
          marginTop: 28,
        }}
      >
        <div>
          <label style={{ display: "block", fontSize: 13, color: "var(--text-muted)", marginBottom: 8 }}>
            Your budget (₦)
          </label>
          <input
            type="number"
            inputMode="numeric"
            placeholder="e.g. 15000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 12,
              border: "1px solid var(--surface-border)",
              background: "var(--surface)",
              color: "var(--text-primary)",
              fontSize: 16,
              outline: "none",
            }}
          />
        </div>

        <div style={{ opacity: numericBudget ? 1 : 0.4, pointerEvents: numericBudget ? "auto" : "none" }}>
          <label style={{ display: "block", fontSize: 13, color: "var(--text-muted)", marginBottom: 8 }}>
            Category {category && <span style={{ color: "var(--accent)" }}>· pre-selected</span>}
          </label>
          <select
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value as Category | "")}
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 12,
              border: "1px solid var(--surface-border)",
              background: "var(--surface)",
              color: "var(--text-primary)",
              fontSize: 16,
              outline: "none",
            }}
          >
            <option value="">Any category</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div style={{ opacity: category ? 1 : 0.4, pointerEvents: category ? "auto" : "none" }}>
          <label style={{ display: "block", fontSize: 13, color: "var(--text-muted)", marginBottom: 8 }}>
            Brand
          </label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 12,
              border: "1px solid var(--surface-border)",
              background: "var(--surface)",
              color: "var(--text-primary)",
              fontSize: 16,
              outline: "none",
            }}
          >
            <option value="">Any brand</option>
            {availableBrands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ marginTop: 32 }}>
        <AnimatePresence mode="wait">
          {message && (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{
                textAlign: "center",
                color: "var(--text-muted)",
                fontSize: 15,
                lineHeight: 1.6,
                padding: "18px 22px",
                border: "1px solid var(--surface-border)",
                borderRadius: 14,
              }}
            >
              {message}
            </motion.div>
          )}

          {!message && results.length > 0 && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 18,
              }}
            >
              {results.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  style={{
                    position: "relative",
                    background:
                      "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    border: "1px solid var(--surface-border)",
                    borderRadius: 18,
                    padding: 20,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: -30,
                      right: -30,
                      width: 100,
                      height: 100,
                      background:
                        "radial-gradient(circle, rgba(61,217,255,0.15) 0%, transparent 70%)",
                      pointerEvents: "none",
                    }}
                  />
                  <span
                    style={{
                      fontSize: 11,
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
                      fontSize: 15,
                      color: "var(--text-primary)",
                      margin: "8px 0 14px",
                      lineHeight: 1.4,
                      minHeight: 42,
                    }}
                  >
                    {p.name}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>
                      {currency(p.price)}
                    </span>
                    <motion.button
                      onClick={() => handleAddToCart(p)}
                      whileTap={{ scale: 0.92 }}
                      style={{
                        background: justAdded === p.id ? "var(--accent)" : "var(--surface)",
                        border: "1px solid var(--surface-border)",
                        borderRadius: 999,
                        padding: "8px 16px",
                        color: justAdded === p.id ? "#000" : "var(--text-primary)",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {justAdded === p.id ? "Added ✓" : "Add to Cart"}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {!numericBudget && (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 14 }}
            >
              Enter your budget above to see what fits.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}