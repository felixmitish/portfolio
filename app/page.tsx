import Image from "next/image";
import { Bananas } from "./geometries";
export default function Home() {
  return (
    <main className="relative min-h-screen w-screen h-screen">
      <Bananas />
    </main>
  );
}
