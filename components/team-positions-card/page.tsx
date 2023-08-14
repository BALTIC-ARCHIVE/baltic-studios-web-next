'use client';
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from "next/image";
import {MouseEvent} from "react";
import flameImage from "@/public/assets/images/icons/flamme.png";
import {tag} from "postcss-selector-parser";
import Link from "next/link";

export default function TeamPositionsCard({tags, prio, position_name, description, requirements, positionId, is_public  }: any) {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);
    const is_high_priority = prio === 1;
    async function handleMouseMove({currentTarget, clientX, clientY,}: MouseEvent) {
        let {left, top} = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // @ts-ignore
    function getImageUrl(userName): any {
        return (
            'https://cravatar.eu/helmavatar/' + userName + '/250.png'
        );
    }

    return (
        <div
            className="mt-8 px-6 py-2 group border-2  border-white/10 rounded-xl relative bg-apply-card-radial grid grid-flow-row-dense grid-cols-10"
            onMouseMove={handleMouseMove}>
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
                }}
            />

            <div className="xl:px-8 px-2 py-6 col-span-10 xl:col-span-5">
                <div>
                    {tags && tags.map((tag: any, index: any) => (
                        <span key={index} className="px-2 text-[11px] py-1 bg-white/10 rounded mr-2">{tag}</span>
                    ))}

                </div>

                <div className="mt-4">
                    <h1 className="text-[22px]">{is_high_priority ? <Image className="inline h-7 w-7 -mt-1 mr-4" alt="alt"
                                                                           src={flameImage} /> : ''}{position_name}</h1>
                    <p className="mt-4 mb-4 text-[15px]">
                        {description}
                    </p>

                    <Link href={`/apply/${positionId}`} className="text-baltic-tuerkis py-2 hidden xl:block cursor-pointer group">Jetzt bewerben <Image
                        height={20} width={20} alt="alt"
                        className="inline transition-all ease-in-out group-hover:ml-3 ml-2 h-4 w-4"
                        src="/assets/images/icons/arrow_right.png"/></Link>
                </div>

            </div>
            <div className="xl:px-8 px-2 py-6 col-span-10 xl:col-span-5">


                <div className="mt-6 mb-6 xl:mb-0">
                    <h2 className="text-[18px]">Du bringst folgendes mit</h2>

                    <ul>


                        {requirements.map((req: any, index: any) => (
                            <li key={index} className="text-[12px] mt-4 text-white/70">
                                <Image height={12} width={12} alt="alt" className="inline mr-3 h-3 -mt-1" src="/assets/images/icons/check.png"/>
                                {req}
                            </li>
                        ))}
                        <li className="text-[12px] mt-2 text-white/70">Weitere Informationen siehst du im
                            Bewerbungsportal
                        </li>
                    </ul>



                </div>
                <Link href={`/apply/${positionId}`} className="text-baltic-tuerkis py-2 px-0 xl:hidden cursor-pointer group">Jetzt bewerben <Image
                    height={20} width={20} alt="alt"
                    className="inline transition-all ease-in-out group-hover:ml-3 ml-2 h-4 w-4"
                    src="/assets/images/icons/arrow_right.png"/></Link>
            </div>

        </div>

    );
}