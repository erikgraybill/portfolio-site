"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="sm:flex block justify-center gap-[5rem] h-[70vh] mx-6">
        <div className="my-auto">
          <Image src="/Erik-headshot-transparent2.png" alt="Headshot" width={400} height={400} priority className="bg-erg-highlight-sage rounded-full" />
        </div>
        <div className="self-center text-center mt-2">
          <div className="space-y-2">
            <p className="text-3xl">Hi, I&#39;m</p>
            <p className="text-5xl capitalize font-bold text-erg-primary-accent-green">Erik Graybill</p>
            <p className="text-3xl capitalize">Human-Centered Software Developer</p>
          </div>
          <div className="space-x-4 pt-4">
            <button className="bg-transparent transition duration-300 border border-erg-primary-accent-green hover:bg-erg-highlight-sage text-erg-text-gray font-bold py-2 px-4 rounded-full cursor-pointer" onClick={() => window.open("/ErikGraybill_SoftwareDeveloper_Resume.pdf")}>
              Resume
            </button>
            <button className="bg-erg-primary-accent-green transition duration-300 hover:bg-erg-highlight-sage text-erg-background-white hover:text-erg-text-gray font-bold py-2 px-4 rounded-full cursor-pointer" onClick={() => document.location='/#contact'}>
              Let&#39;s talk
            </button>
          </div>
          <div className="flex justify-center gap-1 pt-2">
            <Image src="/LinkedIn.svg" alt="LinkedIn Icon" width={35} height={35} priority className="hover:cursor-pointer hover:animate-pulse" onClick={() => window.open("https://www.linkedin.com/in/erik-graybill/")}/>
          </div>
        </div>
      </section>
      <section id="contact" className="flex justify-center flex-col text-center h-[70vh] mb-[20vh]">
        <p className="text-xl">Have a project in mind?</p>
        <p className="text-5xl font-bold pb-2 text-erg-primary-accent-green">Reach Out</p>
        <div className="md:flex block justify-center border rounded-4xl border-erg-second-accent-tan mx-auto mt-8 p-4">
          <div className="flex items-center justify-center gap-2 m-4">
            <Image src="/Email.svg" alt="Email Icon" width={25} height={25} priority />
            <a href="mailto:graybiller&#64;gmail.com">graybiller&#64;gmail.com</a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image src="/LinkedIn.svg" alt="LinkedIn Icon" width={25} height={25} priority />
            <a href="https://www.linkedin.com/in/erik-graybill/">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
