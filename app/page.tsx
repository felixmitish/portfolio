import Image from "next/image";
import { Bananas } from "./geometries";
export default function Home() {
  return (
    <main className="relative min-h-screen w-screen h-screen">
      <Bananas />
      {/* Here I want to add my photo on top of the page, title, name and short description */}
      <div className="absolute top-6 left-0 w-full h-full flex-col justify-normal items-end">
        <Image
          src="/portrait.png"
          alt="Picture of the author"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-5xl font-bold text-white items-center">
          Feliks Mitish
        </h1>
        <p className="text-2xl text-white">
          Passionate web developer, AI enthusiast, Crafting beautiful sites,
          ready to help with any request, like to travel.
        </p>
      </div>
    </main>
  );
}
