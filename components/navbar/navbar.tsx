"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  function mobileMenu(e: any) {
    // Grab HTML Elements
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    // @ts-ignore
    menu.classList.toggle("hidden");
  }

  return (
    <nav
      className="mx-auto hidden lg:flex xl:w-3/4 w-5/ items-center justify-between py-6 z-99999"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="/" className="">
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
        <Button variant="default" size="lg" className="rounded-full">
          BALTIC GALAXY besuchen
        </Button>
      </div>
    </nav>
  );
}
