"use client";

import Image from "next/image";

export default function Home() {
  return (
    <section className="md:flex block justify-center gap-[5rem] h-[60vh] m-8">
      <div className="my-auto">
        <Image src="/Erik-headshot-transparent2.png" alt="headshot" width={400} height={400} priority className="bg-erg-highlight-sage rounded-full" />
      </div>
      <div className="self-center text-center">
        <p className="text-2xl font-medium">Hi, I&#39;m</p>
        <p className="text-4xl capitalize font-bold text-erg-primary-accent-green">Erik Graybill</p>
        <p className="text-2xl capitalize font-semibold">Human-Centered Software Developer</p>
        <div className="space-x-4 pt-4">
          <button className="bg-transparent transition duration-300 border border-erg-primary-accent-green hover:bg-erg-highlight-sage text-erg-text-gray font-bold py-2 px-4 rounded-full cursor-pointer" onClick={() => window.open("/ErikGraybill_SoftwareDeveloper_Resume.pdf")}>
            Resume
          </button>
          <button className="bg-erg-primary-accent-green transition duration-300 hover:bg-erg-highlight-sage text-erg-background-white hover:text-erg-text-gray font-bold py-2 px-4 rounded-full cursor-pointer" onClick={() => document.location='/#contact'}>
            Let&#39;s talk
          </button>
        </div>
        <div className="flex justify-center gap-1 pt-2">
          <Image src="/LinkedIn.svg" alt="headshot" width={35} height={35} priority className="hover: cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/erik-graybill/")}/>
        </div>
      </div>
    </section>
  );
}
