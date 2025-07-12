"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Popover, PopoverBackdrop, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';

export default function Header() {
    return (
        <Popover className={"container mx-auto flex items-center px-6 py-6"}>
            <div>
                <Image
                    src="/EG-Logo-Full.svg"
                    alt="logo"
                    width={0}
                    height={0}
                    style={{ width: "150px", height: "10%" }}
                />
            </div>
            <div id="nav-links" className="grow">
                <div className="hidden sm:flex items-center justify-end gap-8 text-[110%] font-semibold">
                    <Link href="#about">About</Link>
                    <Link href="#experience">Experience</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#contact">Contact</Link>
                </div>
            </div>
            <div className="flex grow items-center justify-end sm:hidden">
                <PopoverButton className="inline-flex items-center justify-center rounded-md p-2 text-erg-text-gray
                hover:bg-erg-background-white hover:text-erg-highlight-sage focus:outline-none focus:bg-erg-highlight-sage">
                    <span className="sr-only">Open Menu</span>
                    <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                </PopoverButton>
            </div>
            <PopoverBackdrop className="sm:hidden fixed inset-0 bg-black opacity-30" />
            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <PopoverPanel focus className="absolute inset-x-auto top-0 right-0 origin-top-right transform p-2 transition md:hidden">
                    <div className="rounded-lg bg-erg-background-white shadow-lg ring-erg-primary-accent-green ring-opacity-5 divide-y-2 divide-erg-highlight-sage">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <Image
                                    src="/EG-Logo.svg"
                                    alt="logo"
                                    width={0}
                                    height={0}
                                    style={{ width: "50px", height: "10%" }}
                                />
                                <div className="-mr-2">
                                    <PopoverButton className="inline-flex items-center justify-center rounded-md p-2 text-erg-text-gray
                                    hover:bg-erg-background-white hover:text-erg-highlight-sage focus:outline-none focus:bg-erg-highlight-sage">
                                        <span className="sr-only">Close Menu</span>
                                        <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                                    </PopoverButton>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8 font-semibold">
                                    <PopoverButton as={Link} href="#about">About</PopoverButton>
                                    <PopoverButton as={Link} href="#experience">Experience</PopoverButton>
                                    <PopoverButton as={Link} href="#projects">Projects</PopoverButton>
                                    <PopoverButton as={Link} href="#contact">Contact</PopoverButton>
                                </nav>
                            </div>
                        </div>
                    </div>
                </PopoverPanel>
            </Transition>
        </Popover>
    );
}