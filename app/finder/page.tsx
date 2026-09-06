import { Suspense } from "react";
import Nav from "@/components/Nav";
import FinderContent from "@/components/FinderContent";

export default function FinderPage() {
  return (
    <main>
      <Nav />
      <Suspense fallback={null}>
        <FinderContent />
      </Suspense>
    </main>
  );
}
