'use client';
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {useState} from "react";

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="menu flex lg:hidden items-center justify-between w-4/4 py-6 px-4 z-99999"
        >
            <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Menu</span>
                    <Image
                        src="/assets/logo.png"
                        alt="Vercel Logo"
                        width={200}
                        height={48}
                        priority
                    />
                </a>
            </div>
            <div className="flex lg:hidden z-40">
            <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 bg-black"
            >
                <span className="sr-only">Open main menu</span>
                <motion.div
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                         aria-hidden="true">
                        <path  strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </motion.div>
            </motion.button>
            </div>
            <motion.ul
                className="absolute bg-black/90 text-center min-h-[15vh] py-6 w-96 top-20 left-2"
                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3
                        }
                    }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                <motion.li className="block text-sm px-2 py-4 hover:bg-white/10" variants={itemVariants}><a href="/">STARTSEITE</a></motion.li>
                <motion.li className="block text-sm px-2 py-4 hover:bg-white/10" variants={itemVariants}><a href="/about-us">TEAM</a></motion.li>
                <motion.li className="block text-sm px-2 py-4 hover:bg-white/10" variants={itemVariants}><a href="/apply">🚀 Wir suchen dich!</a></motion.li>
            </motion.ul>
        </motion.nav>
    );
}