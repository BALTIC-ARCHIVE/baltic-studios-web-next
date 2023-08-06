'use client';
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from "next/image";
import {MouseEvent} from "react";

export default function SuccessPage() {


    return (
        <main className="flex relative min-h-screen flex-col overflow-visible items-center justify-between">
            <div className="absolute top-52 right-96 w-[524px] h-[170px] blur-[150px] bg-purple-500/40 z-999 "></div>
            <div className="absolute top-24 left-[30vw] w-[272px] h-[272px] blur-[150px] bg-blue-500/40 z-999"></div>
            <div className="heading mx-auto max-w-4xl text-center">
                <motion.div
                    animate={{ scale: 1.5 }}
                    transition={{ type: "spring", damping: 3, delay: 0.1 }}
                    className="mt-52 mb-12 bg-gradient-to-b from-[#00FFB21B]/10 to-[#00FFB22F]/10 p-4 mx-auto h-20 w-20 rounded-full">
                    <Image src="/assets/images/r2d2.png" width={50} height={50} alt="Rocket" />
                </motion.div>
                <h4 className="text-center">Vielen Dank für deine Kontaktaufnahme!</h4>
                <h1>Deine Anfrage wird mit Lichtgeschwindigkeit bearbeitet!</h1>

            </div>



            <div className="relative h-[100vh]">
                <div className="absolute top-52 right-44 w-[460px] h-[460px] blur-[180px] bg-[#0085ff]/40 z-0 "></div>
                <div className="absolute top-24 left-[10vw] w-[460px] h-[460px] blur-[180px] bg-[#2400ff]/40 z-0"></div>

                <div className="mx-auto xl:w-3/4 w-5/6 text-center z-9999">

                    <h4 className="mt-72 text-center text-xl">Jetzt BALTIC GALAXY entdecken</h4>
                    <h1 className="text-6xl text-white font-bold">Stürze dich ins <br/> Abenteuer!</h1>

                </div>
            </div>
        </main>
    );
}