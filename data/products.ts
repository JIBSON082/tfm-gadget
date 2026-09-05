
// TFM Gadget — Product Catalogue
// Auto-generated from raw catalogue + brand-tagging session.
// Price = single number in NGN. Where the source had a range, the HIGHER
// end was used as the listed price (per your decision).
// brand = "Generic" where no real brand was identified/confirmed.

export type Category =
  | "Power Banks"
  | "Headphones & Headsets"
  | "Earbuds & Earphones"
  | "Chargers & Cables"
  | "Fans"
  | "Hair Clippers"
  | "Memory Cards & Storage"
  | "Smartwatches"
  | "Speakers & Microphones"
  | "Cases, Protectors & Accessories";

export interface Product {
  id: string;
  name: string;
  category: Category;
  brand: string;
  price: number;
}

export const products: Product[] = [
  // ───────────────── Power Banks ─────────────────
  { id: "pb-01", name: "Oraimo 20000 mAh", category: "Power Banks", brand: "Oraimo", price: 17000 },
  { id: "pb-02", name: "Realex 20000 mAh", category: "Power Banks", brand: "Realex", price: 15000 },
  { id: "pb-03", name: "itel 30000 mAh Digital", category: "Power Banks", brand: "Itel", price: 28000 },
  { id: "pb-04", name: "Infinix 30000 mAh", category: "Power Banks", brand: "Infinix", price: 26000 },
  { id: "pb-05", name: "LinkCo Powerbank", category: "Power Banks", brand: "LinkCo", price: 15000 },
  { id: "pb-06", name: "New Age 33000 mAh", category: "Power Banks", brand: "New Age", price: 27500 },
  { id: "pb-07", name: "Realex 36000 mAh (built-in cables)", category: "Power Banks", brand: "Realex", price: 29000 },
  { id: "pb-08", name: "Oraimo 40000 mAh", category: "Power Banks", brand: "Oraimo", price: 40000 },
  { id: "pb-09", name: "Dagoose 40000 mAh", category: "Power Banks", brand: "Dagoose", price: 30000 },
  { id: "pb-10", name: "Digital Itel 20000 mAh", category: "Power Banks", brand: "Itel", price: 16500 },
  { id: "pb-11", name: "New Age 12500 mAh", category: "Power Banks", brand: "New Age", price: 13000 },
  { id: "pb-12", name: "Itel 20000 mAh", category: "Power Banks", brand: "Itel", price: 16000 },
  { id: "pb-13", name: "Oraimo 50000 mAh (laptop charging)", category: "Power Banks", brand: "Oraimo", price: 60000 },
  { id: "pb-14", name: "New Age 22500 mAh / Turbo Pack", category: "Power Banks", brand: "New Age", price: 16500 },
  { id: "pb-15", name: "Realex 33000 mAh", category: "Power Banks", brand: "Realex", price: 26000 },
  { id: "pb-16", name: "New Age 44000 mAh", category: "Power Banks", brand: "New Age", price: 41000 },
  { id: "pb-17", name: "Magnetic 15000 mAh", category: "Power Banks", brand: "Magnetic", price: 15000 },

  // ───────────────── Headphones / Headsets ─────────────────
  { id: "hp-01", name: "JBL LIVE 660 (Active Noise Cancelling)", category: "Headphones & Headsets", brand: "JBL", price: 13500 },
  { id: "hp-02", name: "JBL E650BT", category: "Headphones & Headsets", brand: "JBL", price: 12000 },
  { id: "hp-03", name: "JBL 10B", category: "Headphones & Headsets", brand: "JBL", price: 12000 },
  { id: "hp-04", name: "P9 Headset", category: "Headphones & Headsets", brand: "Generic", price: 8000 },
  { id: "hp-05", name: "JBL Tune ZB-620", category: "Headphones & Headsets", brand: "JBL", price: 13000 },
  { id: "hp-06", name: "Bose Active Noise Cancelling", category: "Headphones & Headsets", brand: "Bose", price: 25000 },
  { id: "hp-07", name: "MS 881A Headset", category: "Headphones & Headsets", brand: "JBL", price: 10000 },
  { id: "hp-08", name: "JBL Harman JB7700", category: "Headphones & Headsets", brand: "JBL", price: 13000 },
  { id: "hp-09", name: "PG 29 Headset", category: "Headphones & Headsets", brand: "Generic", price: 12500 },
  { id: "hp-10", name: "JBL Stereo Headset", category: "Headphones & Headsets", brand: "JBL", price: 8000 },
  { id: "hp-11", name: "Oraimo Headset", category: "Headphones & Headsets", brand: "Oraimo", price: 8000 },
  { id: "hp-12", name: "JBL Bass Tune Headset", category: "Headphones & Headsets", brand: "JBL", price: 13000 },

  // ───────────────── Earbuds / Earphones / EarPods ─────────────────
  { id: "eb-01", name: "MG S28 / Itel MG S28", category: "Earbuds & Earphones", brand: "Itel", price: 10000 },
  { id: "eb-02", name: "Oraimo SpaceBuds Lite", category: "Earbuds & Earphones", brand: "Oraimo", price: 19000 },
  { id: "eb-03", name: "Earphones (various colors)", category: "Earbuds & Earphones", brand: "Generic", price: 1000 },
  { id: "eb-04", name: "Jamax High Quality Earphones", category: "Earbuds & Earphones", brand: "Jamax", price: 2500 },
  { id: "eb-05", name: "BudsGo", category: "Earbuds & Earphones", brand: "Itel", price: 15000 },
  { id: "eb-06", name: "Itel MG S38", category: "Earbuds & Earphones", brand: "Itel", price: 10000 },
  { id: "eb-07", name: "Samsung Led Buds", category: "Earbuds & Earphones", brand: "Samsung", price: 10000 },
  { id: "eb-08", name: "Android Earpieces", category: "Earbuds & Earphones", brand: "Generic", price: 1000 },
  { id: "eb-09", name: "Itel Budsneo 3", category: "Earbuds & Earphones", brand: "Itel", price: 15500 },
  { id: "eb-10", name: "Oraimo Earphones", category: "Earbuds & Earphones", brand: "Oraimo", price: 2500 },
  { id: "eb-11", name: "JBL MH S20 Earpod", category: "Earbuds & Earphones", brand: "JBL", price: 10000 },
  { id: "eb-12", name: "Jamax iPhone Earpiece", category: "Earbuds & Earphones", brand: "Jamax", price: 2500 },
  { id: "eb-13", name: "itel Wave 300", category: "Earbuds & Earphones", brand: "Itel", price: 10000 },
  { id: "eb-14", name: "JBL Earpods", category: "Earbuds & Earphones", brand: "JBL", price: 10000 },
  { id: "eb-15", name: "Airpod Pro (style)", category: "Earbuds & Earphones", brand: "Generic", price: 15000 },
  { id: "eb-16", name: "Itel Buds Air Pro", category: "Earbuds & Earphones", brand: "Itel", price: 10000 },
  { id: "eb-17", name: "Stereo Type-C Earphone", category: "Earbuds & Earphones", brand: "Generic", price: 3000 },
  { id: "eb-18", name: "iPhone Earpiece (ECOMATH / standard)", category: "Earbuds & Earphones", brand: "Generic", price: 2000 },
  { id: "eb-19", name: "Itel BudsAir 5e", category: "Earbuds & Earphones", brand: "Itel", price: 15000 },
  { id: "eb-20", name: "Oraimo Space buds Neo", category: "Earbuds & Earphones", brand: "Oraimo", price: 17500 },
  { id: "eb-21", name: "Itel Earpiece", category: "Earbuds & Earphones", brand: "Itel", price: 1000 },
  { id: "eb-22", name: "Oraimo Space buds", category: "Earbuds & Earphones", brand: "Oraimo", price: 45000 },
  { id: "eb-23", name: "EarPods pro", category: "Earbuds & Earphones", brand: "Generic", price: 5000 },

  // ───────────────── Chargers & Cables ─────────────────
  { id: "ch-01a", name: "Type-C to iPhone Cord", category: "Chargers & Cables", brand: "New Age", price: 2000 },
  { id: "ch-01b", name: "Type-C to iPhone Cord", category: "Chargers & Cables", brand: "Oraimo", price: 2000 },
  { id: "ch-01c", name: "Type-C to iPhone Cord (Fast Charging)", category: "Chargers & Cables", brand: "Generic", price: 2000 },
  { id: "ch-02", name: "Oraimo Type C Charger / Oraimo iPhone charger", category: "Chargers & Cables", brand: "Oraimo", price: 4500 },
  { id: "ch-03", name: "Type-C to Type-C cord", category: "Chargers & Cables", brand: "Generic", price: 1500 },
  { id: "ch-04", name: "Type-C + USB charger head", category: "Chargers & Cables", brand: "Generic", price: 3000 },
  { id: "ch-05", name: "New Age Type-C to Type-C", category: "Chargers & Cables", brand: "New Age", price: 2500 },
  { id: "ch-06", name: "Original Samsung charger", category: "Chargers & Cables", brand: "Samsung", price: 6000 },
  { id: "ch-07", name: "Amazon Charger Head", category: "Chargers & Cables", brand: "Generic", price: 1500 },
  { id: "ch-08", name: "Original iPhone Charger", category: "Chargers & Cables", brand: "Apple", price: 8000 },
  { id: "ch-09", name: "SHPLUS iPhone charger", category: "Chargers & Cables", brand: "SHPLUS", price: 6000 },
  { id: "ch-10", name: "Original Oraimo Type-C cord", category: "Chargers & Cables", brand: "Oraimo", price: 2500 },
  { id: "ch-11", name: "Android charger", category: "Chargers & Cables", brand: "Generic", price: 2500 },
  { id: "ch-12", name: "Original Oraimo iPhone Cord", category: "Chargers & Cables", brand: "Oraimo", price: 2500 },
  { id: "ch-13", name: "Oraimo Android cords", category: "Chargers & Cables", brand: "Oraimo", price: 2000 },
  { id: "ch-14", name: "SHPLUS Charger Head", category: "Chargers & Cables", brand: "SHPLUS", price: 3000 },
  { id: "ch-15", name: "Oraimo compact 2A Fast charger", category: "Chargers & Cables", brand: "Oraimo", price: 5500 },
  { id: "ch-16", name: "Oraimo Type-C to iPhone cord", category: "Chargers & Cables", brand: "Oraimo", price: 3500 },
  { id: "ch-17", name: "USB-C to Lightning Cable", category: "Chargers & Cables", brand: "Generic", price: 2000 },
  { id: "ch-18", name: "SHPLUS Android charger", category: "Chargers & Cables", brand: "SHPLUS", price: 4000 },

  // ───────────────── Fans ─────────────────
  { id: "fn-01", name: "Hand fan with touch light", category: "Fans", brand: "Generic", price: 6000 },
  { id: "fn-02", name: "Portable / Rechargeable Fan", category: "Fans", brand: "Generic", price: 6000 },

  // ───────────────── Hair Clippers ─────────────────
  { id: "hc-01", name: "Hair Clipper Classic 4", category: "Hair Clippers", brand: "Itel", price: 20000 },
  { id: "hc-02", name: "Hair Classic 2 Pro", category: "Hair Clippers", brand: "Itel", price: 18750 },
  { id: "hc-03", name: "Hair Clipper Classic 5", category: "Hair Clippers", brand: "Itel", price: 17000 },

  // ───────────────── Memory Cards & Storage ─────────────────
  { id: "ms-01", name: "8GB memory card", category: "Memory Cards & Storage", brand: "Generic", price: 6000 },
  { id: "ms-02", name: "64GB Memory card", category: "Memory Cards & Storage", brand: "Generic", price: 10000 },
  { id: "ms-03", name: "3-in-1 OTG drive", category: "Memory Cards & Storage", brand: "Generic", price: 8000 },
  { id: "ms-04", name: "Antivirus flash drive", category: "Memory Cards & Storage", brand: "Generic", price: 8000 },

  // ───────────────── Smartwatches ─────────────────
  { id: "sw-01", name: "Itel Smart Watch Fit 020", category: "Smartwatches", brand: "Itel", price: 21000 },
  { id: "sw-02", name: "Itel Smart Watch Storm Ultra", category: "Smartwatches", brand: "Itel", price: 23000 },
  { id: "sw-03", name: "Oraimo Watch 5 lite", category: "Smartwatches", brand: "Oraimo", price: 24000 },

  // ───────────────── Speakers & Microphones ─────────────────
  { id: "sp-01", name: "Wireless Microphone", category: "Speakers & Microphones", brand: "Generic", price: 17000 },
  { id: "sp-02", name: "W15 Speaker (with radio)", category: "Speakers & Microphones", brand: "WUF", price: 7000 },

  // ───────────────── Cases, Protectors & Accessories ─────────────────
  { id: "ac-01", name: "Camera Protector (all iPhones)", category: "Cases, Protectors & Accessories", brand: "Generic", price: 500 },
  { id: "ac-02", name: "Selfie Stick", category: "Cases, Protectors & Accessories", brand: "Generic", price: 16000 },
  { id: "ac-03", name: "Selfie Stick / Tripod", category: "Cases, Protectors & Accessories", brand: "Generic", price: 20000 },
  { id: "ac-04", name: "Extension (standard)", category: "Cases, Protectors & Accessories", brand: "Generic", price: 6500 },
  { id: "ac-05", name: "Extension with USB ports", category: "Cases, Protectors & Accessories", brand: "Generic", price: 7000 },
  { id: "ac-06", name: "iPhone case", category: "Cases, Protectors & Accessories", brand: "Generic", price: 2000 },
  { id: "ac-07", name: "Silicon pouches for all iPhones", category: "Cases, Protectors & Accessories", brand: "Generic", price: 1200 },
  { id: "ac-08", name: "EarPod cases", category: "Cases, Protectors & Accessories", brand: "Generic", price: 2000 },
];

export const categories: Category[] = [
  "Power Banks",
  "Headphones & Headsets",
  "Earbuds & Earphones",
  "Chargers & Cables",
  "Fans",
  "Hair Clippers",
  "Memory Cards & Storage",
  "Smartwatches",
  "Speakers & Microphones",
  "Cases, Protectors & Accessories",
];

export const brands: string[] = Array.from(
  new Set(products.map((p) => p.brand))
).sort();

export function getBrandsForCategory(category: Category): string[] {
  return Array.from(
    new Set(products.filter((p) => p.category === category).map((p) => p.brand))
  ).sort();
}

export function cheapestInCategory(category: Category): Product | undefined {
  return products
    .filter((p) => p.category === category)
    .sort((a, b) => a.price - b.price)[0];
}

export function cheapestForBrandInCategory(
  category: Category,
  brand: string
): Product | undefined {
  return products
    .filter((p) => p.category === category && p.brand === brand)
    .sort((a, b) => a.price - b.price)[0];
}