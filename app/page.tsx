import Image from "next/image";
import { Bananas } from "./geometries";

export default function Home() {
  return (
    <main
      className="relative w-screen overflow-hidden"
      style={{ height: "2600px" }}
    >
      <Bananas />
      <div className="absolute h-full w-full z-10 flex flex-col top-0 left-0 px-4">
        {/* Author's section */}
        <div className="flex flex-col items-center justify-start mt-4 space-y-4">
          <div className="flex flex-col items-center justify-center p-5 rounded-md backdrop-blur-md bg-white/20">
            <Image
              src="/portrait.png"
              alt="Picture of the author"
              width={200}
              height={200}
              className="rounded-full"
            />
            <h1 className="text-5xl font-bold text-white">Feliks Mitish</h1>
            <p className="text-2xl text-white p-4 text-center">
              Passionate web developer, AI enthusiast. <br />
              Crafting beautiful sites in 2D and 3D.
            </p>
          </div>
          <h2 className="text-3xl font-bold text-white text-center">
            Here are some of my projects
          </h2>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col items-start justify-start mt-8 space-y-4">
          {/* Ecology monitor of Nice */}
          <h3 className="text-3xl font-bold text-white pl-5">
            Ecology monitor of Nice
          </h3>
          <div className="flex space-y-4 flex-col lg:flex-row">
            <div className="p-5 backdrop-blur-md bg-white/20 rounded-md w-[540px] h-[325px]">
              <a href="https://ai-web-project.vercel.app/">
                <Image
                  src="/ecologynice.png"
                  alt="Picture of website ecology monitor of Nice"
                  width={500}
                  height={500}
                  className="rounded-md"
                />
              </a>
            </div>
            <div className="text-xl text-white p-9 lg:w-[50%] flex-shrink-0 flex-grow-0">
              <h2>Explore the Ecological Landscape of Nice, France</h2>
              <p>
                Explore the ecological landscape of the beautiful city of Nice
                in the south of France with our data visualization tool using
                AI.
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
            </div>
          </div>

          {/* Bartender Portfolio */}
          <div className="flex flex-col space-y-4 ">
            <h3 className="text-3xl font-bold text-white pr-6">
              Web site portfolio of a bartender
            </h3>
            <div className="flex space-y-4 flex-col lg:flex-row">
              <div className="p-5 backdrop-blur-md bg-white/20 rounded-md w-[540px] h-[325px]">
                <a
                  href="https://catering-feliks.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/portfoliobartender.png"
                    alt="Bartender portfolio"
                    width={500}
                    height={500}
                    className="rounded-md"
                  />
                </a>
              </div>
            </div>

            <div className="text-xl text-white p-9 lg:w-[50%] flex-shrink-0 flex-grow-0">
              <p>
                Welcome to my bartender portfolio, where mixology meets
                craftsmanship. With a passion for creating memorable
                experiences, I bring expertise in mixology to elevate events and
                gatherings. As a seasoned bartender specializing in bar
                catering, I craft bespoke cocktails while ensuring a seamless
                and delightful drinking experience for your guests.
              </p>
              <p>Made using:</p>
              <ul>
                <li> -Next.js</li>
                <li> -Shadcn/ui</li>
                <li> -MDN</li>
                <li> -Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white text-center ">
            Hello! I&apos;m a web developer and programmer experienced in
            crafting functional and visually appealing websites. I specialize in
            sites of any complexity – from simple landing pages to intricate
            e-commerce platforms and corporate portals. Additionally, I have
            expertise in leveraging artificial intelligence for processing large
            datasets. My aim is to provide functional, uniquely designed
            websites tailored to your needs. Available for short-term and
            long-term projects. Contact information will be available below.
            Let&apos;s turn your concepts into digital reality together!
          </h4>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center justify-center mt-8 space-y-4">
          <div className="backdrop-blur-md bg-white/80 w-full p-7 rounded-md">
            <h2 className="text-4xl">Contacts:</h2>
            <p className="text-2xl mt-7">Email: felix.mitish@gmail.com</p>
            <p className="text-2xl">Phone: +33751470478</p>
            <p className="text-2xl">Upwork: Feliks Mitish</p>
          </div>
        </div>
      </div>
    </main>
  );
}
