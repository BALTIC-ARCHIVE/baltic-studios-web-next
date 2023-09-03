'use client';
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from "next/image";
import {MouseEvent} from "react";

export default function Navbar() {
    function mobileMenu(e: any) {
        // Grab HTML Elements
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");
        // @ts-ignore
        menu.classList.toggle("hidden");
    }

    return (
        <nav className="mx-auto hidden lg:flex xl:w-3/4 w-5/6 items-center justify-between py-6 z-99999" aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Lol</span>
                    <Image
                        src="/assets/logo.png"
                        alt="Vercel Logo"
                        width={200}
                        height={48}
                        priority
                    />
                </a>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:gap-x-12 mt-2 lg:justify-end">
                <a href="/" className="text-white px-3 py-2 nav-link rounded-md text-sm font-medium">STARTSEITE</a>
                <a href="/about-us"
                   className="text-white px-3 py-2 nav-link text-[#ABABAB] rounded-md text-sm font-medium">TEAM</a>
                <a href="/apply"
                   className="text-white px-3 py-2 rounded-md bg-white/[.10] hover:border-white text-sm font-medium">🚀
                    Wir suchen dich!</a>

            </div>

        </nav>

    );
}