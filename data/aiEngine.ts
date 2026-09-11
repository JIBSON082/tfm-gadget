import {
  products,
  type Category,
  type Product,
} from "@/data/products";

const currency = (n: number) => `₦${n.toLocaleString("en-NG")}`;

const CATEGORY_ALIASES: Record<string, Category> = {
  "power bank": "Power Banks",
  "powerbank": "Power Banks",
  "power banks": "Power Banks",
  "battery": "Power Banks",
  "headphone": "Headphones & Headsets",
  "headphones": "Headphones & Headsets",
  "headset": "Headphones & Headsets",
  "earbud": "Earbuds & Earphones",
  "earbuds": "Earbuds & Earphones",
  "earphone": "Earbuds & Earphones",
  "earphones": "Earbuds & Earphones",
  "buds": "Earbuds & Earphones",
  "charger": "Chargers & Cables",
  "chargers": "Chargers & Cables",
  "cable": "Chargers & Cables",
  "cables": "Chargers & Cables",
  "cord": "Chargers & Cables",
  "fan": "Fans",
  "fans": "Fans",
  "clipper": "Hair Clippers",
  "clippers": "Hair Clippers",
  "hair clipper": "Hair Clippers",
  "memory card": "Memory Cards & Storage",
  "flash drive": "Memory Cards & Storage",
  "otg": "Memory Cards & Storage",
  "storage": "Memory Cards & Storage",
  "smartwatch": "Smartwatches",
  "smart watch": "Smartwatches",
  "watch": "Smartwatches",
  "watches": "Smartwatches",
  "speaker": "Speakers & Microphones",
  "speakers": "Speakers & Microphones",
  "microphone": "Speakers & Microphones",
  "mic": "Speakers & Microphones",
  "case": "Cases, Protectors & Accessories",
  "cases": "Cases, Protectors & Accessories",
  "protector": "Cases, Protectors & Accessories",
  "selfie stick": "Cases, Protectors & Accessories",
  "tripod": "Cases, Protectors & Accessories",
};

const BRANDS = Array.from(new Set(products.map((p) => p.brand.toLowerCase())));

export interface AIResponse {
  reply: string;
  products: Product[];
  finderLink?: string;
}

function extractBudget(text: string): number | null {
  const kMatch = text.match(/(\d+)\s*k\b/i);
  if (kMatch) return parseInt(kMatch[1], 10) * 1000;

  const numMatch = text.match(/₦?\s*(\d{1,3}(?:,\d{3})+|\d{4,})/);
  if (numMatch) return parseInt(numMatch[1].replace(/,/g, ""), 10);

  return null;
}

function extractCategory(text: string): Category | null {
  const lower = text.toLowerCase();
  for (const [alias, category] of Object.entries(CATEGORY_ALIASES)) {
    if (lower.includes(alias)) return category;
  }
  return null;
}

function extractBrand(text: string): string | null {
  const lower = text.toLowerCase();
  for (const brand of BRANDS) {
    if (brand !== "generic" && lower.includes(brand)) {
      const match = products.find((p) => p.brand.toLowerCase() === brand);
      return match ? match.brand : null;
    }
  }
  return null;
}

function hasProductIntent(text: string): boolean {
  const lower = text.toLowerCase();
  const signals = [
    "price",
    "cost",
    "cheap",
    "budget",
    "recommend",
    "suggest",
    "best",
    "have",
    "sell",
    "buy",
    "looking for",
    "want",
    "need",
    ...Object.keys(CATEGORY_ALIASES),
    ...BRANDS,
  ];
  return signals.some((s) => lower.includes(s)) || /\d/.test(lower);
}

export function getAIResponse(userText: string): AIResponse {
  const budget = extractBudget(userText);
  const category = extractCategory(userText);
  const brand = extractBrand(userText);

  if (!hasProductIntent(userText)) {
    return {
      reply:
        "I can only help with questions about TFM products, things like power banks, earbuds, headphones, chargers, speakers, and more. What are you shopping for?",
      products: [],
    };
  }

  let matches = products;
  if (category) matches = matches.filter((p) => p.category === category);
  if (brand) matches = matches.filter((p) => p.brand === brand);
  if (budget) matches = matches.filter((p) => p.price <= budget);

  matches = matches.sort((a, b) => a.price - b.price);

  const finderParams = new URLSearchParams();
  if (category) finderParams.set("category", category);
  const finderLink = category ? `/finder?${finderParams.toString()}` : "/finder";

  if (matches.length === 0) {
    if (category && budget) {
      const cheapestInCat = products
        .filter((p) => p.category === category)
        .sort((a, b) => a.price - b.price)[0];
      return {
        reply: cheapestInCat
          ? `${category} start from ${currency(cheapestInCat.price)}, a bit above ${currency(budget)}. Want me to show what's closest to your budget?`
          : `I don't have anything in ${category} right now.`,
        products: cheapestInCat ? [cheapestInCat] : [],
        finderLink,
      };
    }
    if (category) {
      return {
        reply: `I don't have any ${brand ? brand + " " : ""}${category} in stock right now.`,
        products: [],
        finderLink,
      };
    }
    return {
      reply:
        "I couldn't find anything matching that. Try naming a category, like earbuds or power banks, and a budget.",
      products: [],
    };
  }

  const shown = matches.slice(0, 4);
  const introParts: string[] = [];
  if (category) introParts.push(category.toLowerCase());
  if (brand) introParts.push(`from ${brand}`);
  if (budget) introParts.push(`under ${currency(budget)}`);

  const intro = introParts.length
    ? `Here's what I've got in ${introParts.join(", ")}:`
    : matches.length > 4
    ? `Here are a few options across our catalogue:`
    : "Here's what I found:";

  return {
    reply: intro,
    products: shown,
    finderLink,
  };
}