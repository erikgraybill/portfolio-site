"use client";

import Image from "next/image";

export default function Home() {
  return (
    <section id="profile" className="flex justify-center mt-6 text-center mx-3">
      <div id="headshot" className="align-middle">
        <Image src="/Erik-headshot-transparent2.png" alt="headshot" width={350} height={350} priority className="bg-erg-highlight-sage rounded-full" />
      </div>
      <div>
        <p className="text-2xl font-medium">Hi, I&#39;m</p>
        <p className="text-4xl capitalize font-bold text-erg-primary-accent-green">Erik Graybill</p>
        <p className="text-2xl capitalize font-semibold">Human-Centered Software Developer</p>
        <div id="btns" className="space-x-4">
          <button className="bg-transparent transition duration-300 border border-erg-primary-accent-green hover:bg-erg-highlight-sage text-erg-text-gray font-bold py-2 px-4 rounded-full cursor-pointer" onClick={() => window.open("/ErikGraybill_SoftwareDeveloper_Resume.pdf")}>
            Resume
          </button>
          <button className="bg-erg-primary-accent-green transition duration-300 hover:bg-erg-highlight-sage text-erg-background-white hover:text-erg-text-gray font-bold py-2 px-4 rounded-full cursor-pointer" onClick={() => document.location='/#contact'}>
            Let&#39;s talk
          </button>
        </div>
        <div id="socials" className="flex">
          <Image src="/LinkedIn.svg" alt="headshot" width={45} height={45} priority className="hover: cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/erik-graybill/")}/>
        </div>
      </div>
    </section>
  );
}
