import Image from "next/image";
import { Bananas } from "./geometries";

export default function Home() {
  return (
    <main className="relative w-screen overflow-hidden h-[2500px]">
      <Bananas />
      {/* Here I want to add my photo on top of the page, title, name, and short description */}
      <div className="absolute mt-4 flex flex-col top-0 left-0 w-screen justify-start items-center space-y-4 pt-8 overflow-y-auto">
        <div className="backdrop-blur-md bg-white/20 rounded-md z-10 flex flex-col justify-center items-center p-5 pt-8">
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
        <h2 className="text-3xl font-bold text-white text-center">
          Here are some of my projects
        </h2>
      </div>
      <div className=" absolute mt-4 top-0 flex  flex-col left-5 w-screen space-y-4 pt-[560px] items-start overflow-y-auto h-full">
        <h3 className="text-3xl font-bold text-white left-20 pl-[90px]">
          Ecology monitor of Nice
        </h3>
        <div className="backdrop-blur-md bg-white/20 rounded-md p-5">
          <Image
            src="/ecologynice.png"
            alt="Picture of website ecology monitor of Nice"
            width={500}
            height={500}
            className="rounded-md"
            style={{ marginLeft: "0" }} // Inline style to reset any potential margin
          />
        </div>
        <p className=" absolute text-xl text-white p-9 text-start max-w-xl left-[510px]">
          <h2>Explore the Ecological Landscape of Nice, France</h2>
          <p>
            Explore the ecological landscape of the beautiful city of Nice in
            the south of France with our data visualization tool using AI.
          </p>
          <p>Made using:</p>
          <ul>
            <li>Next.js</li>
            <li>Amazon Web Services</li>
            <li>Google Maps API</li>
            <li>Mapbox GL JS API</li>
            <li>CSS</li>
            <li>Python</li>
            <li>AI Detection Tool</li>
            <li>Tailwind CSS</li>
            <li>TensorFlow</li>
            <li>PixelLib</li>
          </ul>
        </p>
      </div>
      <div className=" absolute mt-4 top-0 flex  flex-col right-6 w-screen space-y-4 pt-[1200px] items-end overflow-y-auto h-full">
        <h3 className="text-3xl font-bold text-white left-20 pr-[35px]">
          Web site portfolio of a bartender
        </h3>
        <div className="backdrop-blur-md bg-white/20 rounded-md p-5">
          <Image
            src="/portfoliobartender.png"
            alt="Picture of website ecology monitor of Nice"
            width={500}
            height={500}
            className="rounded-md"
            style={{ marginLeft: "0" }} // Inline style to reset any potential margin
          />
        </div>
        <p className=" absolute text-xl text-white p-9 text-start items-start max-w-xl right-[520px]">
          <p>
            Welcome to my bartender portfolio, where mixology meets
            craftsmanship. With a passion for creating memorable experiences, I
            bring expertise in mixology to elevate events and gatherings. As a
            seasoned bartender specializing in bar catering, I craft bespoke
            cocktails while ensuring a seamless and delightful drinking
            experience for your guests.
          </p>
          <p>Made using:</p>
          <ul>
            <li> -Next.js</li>
            <li> -Shadcn/ui</li>
            <li> -MDN</li>
            <li> -Tailwind CSS</li>
          </ul>
        </p>
      </div>
      <div className=" absolute mt-4 top-0 flex  flex-col p-4 w-screen space-y-4 pt-[2100px] items-end overflow-y-auto h-full">
        <h4 className="text-xl font-bold text-white text-center ">
          Hello! I&apos;m a web developer and programmer experienced in crafting
          functional and visually appealing websites. I specialize in sites of
          any complexity – from simple landing pages to intricate e-commerce
          platforms and corporate portals. Additionally, I have expertise in
          leveraging artificial intelligence for processing large datasets. My
          aim is to provide functional, uniquely designed websites tailored to
          your needs. Available for short-term and long-term projects. Contact
          information will be available below. Let&apos;s turn your concepts
          into digital reality together!
        </h4>
      </div>
    </main>
  );
}
