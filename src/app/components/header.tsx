import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <nav id="desktop-nav">
            <div className="h-[60px] flex items-center justify-between px-5">
                <Link href={"/"}>
                    <Image
                        src="/EG-Logo-Full.svg"
                        alt="logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "10%", height: "auto" }}
                    />
                </Link>

                <ul className="flex items-center gap-3">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}