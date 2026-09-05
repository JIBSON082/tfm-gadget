import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SmartFinder from "@/components/SmartFinder";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SmartFinder />
      <ProductShowcase />
    </main>
  );
}