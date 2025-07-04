import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4">
        Welcome to my website!
      </h1>
      <p className="text-[16px]">This is a Next.js site.</p>
      <div className=" flex justify-center mt-10 space-x-6">
        <div className="bg-[#acc990] rounded-full">
          <Image src="/Erik-headshot-transparent2.png" alt="headshot" width={350} height={350} priority objectFit="contain" className="rounded-full" />
        </div>
        <div>
          <p className="text-3xl capitalize font-bold">Hi, I&#39;m Erik Graybill</p>
          <p className="text-2xl capitalize">Software Developer</p>
        </div>
      </div>
    </div>
  );
}
