import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div className="border-black/10 border-b h-[60px] flex
        items-center justify-between px-5">
            <Link href={"/"}>
                <Image src="/EG-Logo.svg" alt="logo" width={40} height={40} priority />
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
    );
}