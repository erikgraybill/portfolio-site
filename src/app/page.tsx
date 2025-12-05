"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section id="profile" className="md:relative h-[90vh] md:text-lg">
        <div className="sm:flex block justify-center gap-[5rem] md:pt-30 mx-6">
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
            <div className="flex justify-center gap-1 py-3">
              <Image src="/LinkedIn.svg" alt="LinkedIn Icon" width={35} height={35} priority className="hover:cursor-pointer hover:animate-pulse" onClick={() => window.open("https://www.linkedin.com/in/erik-graybill/")}/>
            </div>
            <p>This site is a work in progress...more to come!</p>
          </div>
        </div>
      <Image src="/Down-Arrow.svg" alt="Down Arrow" width={25} height={25} priority className="invisible md:visible animate-bounce hover:cursor-pointer absolute right-50" onClick={() => location.href="#about"} />
      </section>
      <section id="about" className="relative h-screen md:text-lg">
        <p className="text-xl pt-12 text-center">Learn More</p>
        <p className="text-5xl text-center font-bold pb-2 text-erg-primary-accent-green">About Me</p>
        <div className="md:flex block flex-col">
          <div className="md:flex block gap-2 md:mx-auto mx-5 my-2 md:space-x-8">
            <div className="my-5 p-4 flex-[1] border rounded-4xl border-erg-second-accent-tan text-center">
              <div className="flex justify-center mb-2">
                <Image src="/Education.svg" alt="Education Logo" width={30} height={30} priority />
              </div>
              <p className="text-2xl font-semibold">Education</p>
              <p><span className="font-semibold">B.S. </span>Human-Centered Design and Development</p>
              <p><span className="font-semibold">Minor </span>Security and Risk Analysis</p>
            </div>
            <div className="my-5 p-4 flex-[1] border rounded-4xl border-erg-second-accent-tan text-center">
              <div className="flex justify-center mb-2">
                <Image src="/Certs.svg" alt="Certification Logo" width={30} height={30} priority />
              </div>
              <p className="text-2xl font-semibold">Certifications</p>
              <p><span className="font-semibold">Microsoft Certified: </span>Azure AI Engineer Associate</p>
            </div>
          </div>
        </div>
        <p className="md:mx-70 mx-5">
          &emsp;&emsp;I&#39;m a software developer blending clean code with intentional design to create tools that are both scalable and intuitive. 
          With a background in Human-Centered Design and Development from Penn State and hands-on experience at High Steel Structures, 
          I&#39;ve led efforts in modernizing legacy applications and building new ones, maintaining databases, and prototyping AI-powered systems using Azure. 
          I believe good software starts with empathy and ends with elegance, whether I&#39;m structuring reusable components, refining user flows, or integrating automation to save hundreds of work hours. 
          I strive to craft experiences that are as reliable as they are meaningful for each user.
        </p>
        <Image src="/Down-Arrow.svg" alt="Down Arrow" width={25} height={25} priority className="invisible md:visible animate-bounce hover:cursor-pointer absolute right-50" onClick={() => location.href="#projects"} />
      </section>
      <section id="experience" className="">
        
      </section>
      <section id="projects" className="relative h-screen md:text-lg md:mb-0 mb-170">
        <p className="text-center pt-12 text-xl">See some of my</p>
        <p className="text-center text-5xl font-bold pb-2 text-erg-primary-accent-green">Projects</p>
        <div className="justify-center">
          <div className="md:flex block gap-6 md:space-y-0 space-y-4 mb-8 mt-4 mx-5 h-140 items-stretch">
            <div className="flex flex-col justify-between flex-1 p-8 border rounded-4xl border-erg-second-accent-tan text-center">
              <p className="text-2xl font-bold text-erg-primary-accent-green">Document Splitting and Naming using OCR</p>
              <div className="flex flex-wrap flex-row gap-2 justify-around text-left">
                <p>&#8226;Spearheaded R&D of a document processing system using Azure AI Document Intelligence to extract document names and descriptions from multi-page PDFs.</p>
                <p>&#8226;Utilized Azure Logic Apps to automate database storage, document splitting and renaming of each document.</p>
                <p>&#8226;Increased processing throughput by 800+ pages per month, reducing task time by 90% and significantly improving efficiency.</p>
              </div>
              <div className="flex justify-center gap-4 mt-8">
                <button disabled className="bg-transparent border border-erg-primary-accent-green text-erg-text-gray font-bold py-2 px-4 rounded-full opacity-50">
                  More coming soon...
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-1 p-8 border rounded-4xl border-erg-second-accent-tan text-center">
              <p className="text-2xl font-bold text-erg-primary-accent-green"><span className="">OneStop</span> Application Development</p>
              <div className="flex flex-wrap flex-row gap-2 justify-around text-left">
                <p>&#8226;Led a team in designing and developing a mobile app to improve public transportation usability in State College.</p>
                <p>&#8226;Applied the design thinking method to interpret use cases, define user needs, and prototype intuitive workflows.</p>
                <p>&#8226;Built a working prototype using Java in Android Studio, translating wireframes into functional, user-friendly features to be tested by prospective users.</p>
              </div>
              <div className="flex justify-center gap-4 mt-8">
                <button disabled className="bg-transparent border border-erg-primary-accent-green text-erg-text-gray font-bold py-2 px-4 rounded-full opacity-50">
                  More coming soon...
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-1 p-8 border rounded-4xl border-erg-second-accent-tan text-center">
              <p className="text-2xl font-bold text-erg-primary-accent-green">Full-Stack Laptop Rental Application</p>
              <div className="flex flex-wrap flex-row gap-2 justify-around text-left">
                <p>&#8226;Built a full-stack JavaScript application simulating a laptop rental service.</p>
                <p>&#8226;Designed and implemented a backend server to manage rental transactions and track inventory.</p>
                <p>&#8226;Developed a client-side interface to format and validate user inputs and display server responses.</p>
              </div>
              <div className="flex justify-center gap-4 mt-8">
                <button disabled className="bg-transparent border border-erg-primary-accent-green text-erg-text-gray font-bold py-2 px-4 rounded-full opacity-50">
                  More coming soon...
                </button>
              </div>
            </div>
          </div>
        </div>
        <Image src="/Down-Arrow.svg" alt="Down Arrow" width={25} height={25} priority className="invisible md:visible animate-bounce hover:cursor-pointer absolute right-50" onClick={() => location.href="#contact"} />
      </section>
      <section id="contact" className="flex justify-center flex-col text-center h-[85vh]">
        <p className="text-xl">Have a project in mind?</p>
        <p className="text-5xl font-bold pb-2 text-erg-primary-accent-green">Reach Out</p>
        <div className="md:flex block justify-center border rounded-3xl border-erg-second-accent-tan mx-auto mt-6 ">
          <div className="flex items-center justify-center gap-2 m-4">
            <Image src="/Email.svg" alt="Email Icon" width={25} height={25} priority />
            <a href="mailto:graybiller&#64;gmail.com">graybiller&#64;gmail.com</a>
          </div>
          <div className="flex items-center justify-center gap-2 m-4">
            <Image src="/LinkedIn.svg" alt="LinkedIn Icon" width={25} height={25} priority />
            <a href="https://www.linkedin.com/in/erik-graybill/">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
