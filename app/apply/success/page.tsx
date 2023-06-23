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
                <h4 className="text-center">Vielen Dank für dein Interesse!</h4>
                <h1>Deine Bewerbung wird mit Lichtgeschwindigkeit bearbeitet!</h1>

            </div>

            <div className="mt-20 w-full px-52 grid grid-cols-2 gap-x-5 gap-y-16">
                <div>
                    <h1 className="text-5xl text-white leading-relaxed">“Erzähle mir nicht, wie meine Chancen <br/> stehen!”</h1>
                    <h4 className="text-xl text-white/50">- Han Solo</h4>
                </div>
                <div>
                    <div className="bg-white/10 w-full px-8 py-12 rounded-xl">
                        <h3 className="text-baltic-tuerkis text-xl mb-4">Das passiert jetzt für dich...</h3>
                        <p className="text-[18px] text-white/70">Wahrscheinlich starren wir alle schon erstaunt auf deine Bewerbung! Du wirst zeitnah auf Discord von uns benachrichtigt und auf einen Tee in einem Gespräch eingeladen. Schaue dich in der Zeit ruhig etwas auf unserem Projekt um. Fühl dich wie Zuhause!</p>
                    </div>
                </div>
            </div>

            <div className="h-1/2 w-3/4 mt-32 mx-auto text-white">
                <h1 className="text-white text-[32px]">Stelle dir vor...</h1>
                <div className="mt-16 grid grid-cols-4 gap-8">

                    <div className=" hover:scale-105 cursor-pointer transition-all ease">
                        <span><Image className="h-8" src="/assets/images/icons/heart.png" alt="alt" width={40}
                                     height={80}/></span>
                        <p className="mt-6 text-[22px]">
                            Ein Umfeld, bei dem du dich wohlfühlst, Spaß hast und dein Talent frei entfalten kannst. Ohne Druck.
                        </p>
                    </div>

                    <div className=" hover:scale-105 cursor-pointer transition-all ease">
                        <span><Image className="h-8" src="/assets/images/icons/house.png" alt="alt" width={40}
                                     height={80}/></span>
                        <p className="mt-6 text-[22px]">
                            Ein Team, welches dir jederzeit unter die Arme greift und nicht das gesamte Projekt auf deinen Schultern lastet.
                        </p>
                    </div>

                    <div className=" hover:scale-105 cursor-pointer transition-all ease">
                        <span><Image className="h-8" src="/assets/images/icons/rocket.png" alt="alt" width={40}
                                     height={80}/></span>
                        <p className="mt-6 text-[22px]">
                            Ein Ort, bei dem dir niemand sagt, wie du dein Können in die Tat umsetzt. An dem du mitbestimmen darfst.
                        </p>
                    </div>

                    <div className=" hover:scale-105 cursor-pointer transition-all ease">
                        <span><Image className="h-8" src="/assets/images/icons/bulb.png" alt="alt" width={40}
                                     height={80}/></span>
                        <p className="mt-6 text-[22px]">
                            Ein Projekt, welches über jahrelange Planung und finanzielle Sicherheit verfügt.
                        </p>
                    </div>

                </div>
            </div>

            <div className="relative h-[100vh]">
                <div className="absolute top-52 right-44 w-[460px] h-[460px] blur-[180px] bg-[#0085ff]/40 z-0 "></div>
                <div className="absolute top-24 left-[10vw] w-[460px] h-[460px] blur-[180px] bg-[#2400ff]/40 z-0"></div>

                <div className="mx-auto max-w-4xl text-center z-9999">

                    <h4 className="mt-72 text-center text-xl">Jetzt BALTIC GALAXY entdecken</h4>
                    <h1 className="text-6xl text-white font-bold">Stürze dich ins <br/> Abenteuer!</h1>

                </div>
            </div>
        </main>
    );
}