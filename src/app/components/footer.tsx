import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-col justify-center text-center items-center mt-auto h-20 p-4 mb-10">
            <div id="nav-links" className="space-y-3">
                <div className="flex items-center justify-center gap-8 text-2xl font-semibold">
                    <Link href="#about">About</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#contact">Contact</Link>
                </div>
                <div>&#169; July 2025, Erik Graybill. Site designed and developed by Erik Graybill.</div>
            </div>
        </div>
    );
}