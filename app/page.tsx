import Image from "next/image";
import { Bananas } from "./geometries";
export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <Bananas />
      {/* Here I want to add my photo on top of the page, title, name and short description */}
      <div className="absolute mt-4 flex flex-col top-0 left-0 w-screen h-screen justify-start items-center space-y-4 pt-8">
        <div className=" backdrop-blur-md bg-white/20 rounded-md z-10 flex flex-col justify-center items-center p-5 pt-8">
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
          <p className="text-2xl text-white p-4 text-center max-w-xl">
            Passionate web developer, AI enthusiast. <br />
            Crafting beautiful sites in 2D and 3D.
          </p>
        </div>
      </div>
    </main>
  );
}
