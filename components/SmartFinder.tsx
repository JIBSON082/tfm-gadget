"use client";

import { useState, useMemo } from "react";
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

const currency = (n: number) =>
  `₦${n.toLocaleString("en-NG")}`;

export default function SmartFinder() {
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState<Category | "">("");
  const [brand, setBrand] = useState<string>("");

  const numericBudget = budget ? Number(budget) : null;
  const availableBrands = category ? getBrandsForCategory(category) : [];

  function handleCategoryChange(cat: Category | "") {
    setCategory(cat);
    setBrand("");
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
          message: `Nothing fits ₦${numericBudget.toLocaleString(
            "en-NG"
          )} yet — our cheapest item overall is ${cheapest.name} at ${currency(
            cheapest.price
          )}. Try raising your budget.`,
        };
      }
      return { results: matches.slice(0, 6), message: null };
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
            )} — try another brand, or raise your budget. ${
              cheapestOverall && cheapestOverall.brand !== brand
                ? `Cheapest option in ${category} overall: ${cheapestOverall.name} (${currency(
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
    <section
      id="finder"
      style={{
        padding: "60px 24px 100px",
        maxWidth: 720,
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 36 }}>
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
        <h2
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.3rem)",
            marginTop: 10,
            color: "var(--text-primary)",
          }}
        >
          Tell us your budget. We'll do the rest.
        </h2>
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
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              fontSize: 13,
              color: "var(--text-muted)",
              marginBottom: 8,
            }}
          >
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
          <label
            style={{
              display: "block",
              fontSize: 13,
              color: "var(--text-muted)",
              marginBottom: 8,
            }}
          >
            Category
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
          <label
            style={{
              display: "block",
              fontSize: 13,
              color: "var(--text-muted)",
              marginBottom: 8,
            }}
          >
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

      <div style={{ marginTop: 28 }}>
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
                padding: "16px 20px",
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
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: 14,
              }}
            >
              {results.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--surface-border)",
                    borderRadius: 14,
                    padding: 16,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      color: "var(--accent)",
                      fontWeight: 500,
                    }}
                  >
                    {p.brand}
                  </span>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--text-primary)",
                      margin: "6px 0 8px",
                      lineHeight: 1.4,
                    }}
                  >
                    {p.name}
                  </p>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    {currency(p.price)}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

          {!numericBudget && (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: "center",
                color: "var(--text-muted)",
                fontSize: 14,
              }}
            >
              Enter your budget above to see what fits.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}