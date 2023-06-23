'use client';
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from "next/image";
import {MouseEvent} from "react";
import flameImage from "@/public/assets/images/icons/flamme.png";
import {tag} from "postcss-selector-parser";

export default function ApplyPositionCard({singlePosition}: any) {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);
    const is_high_priority = true;
    async function handleMouseMove({currentTarget, clientX, clientY,}: MouseEvent) {
        let {left, top} = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    if (!singlePosition) return <h1>No profile data</h1>

    return (
        <div
            className=" mt-12 px-6 py-2  border-white/10 bg-white/5 rounded-xl text-white relative grid grid-flow-row-dense grid-cols-10">

            <div className="px-8 py-6 col-span-5">

                <div>
                    <span className="text-[18px] text-white rounded mr-2">Du bewirbst dich für die Position</span>
                </div>


                <div className="mt-1">
                    <h1 className="text-[52px] font-bold text-blue-400">{singlePosition.position_name}</h1>
                    <p className="mt-4 mb-4 text-[15px] text-white">
                        {singlePosition.description}
                    </p>

                    <a className="text-gray-400 py-1 px-2 text-[15px] cursor-pointer group">Ich möchte mich für eine
                        andere Position bewerben <Image
                            height={20} width={20} alt="alt"
                            className="inline transition-all ease-in-out group-hover:ml-3 ml-2 h-4 w-4"
                            src="/assets/images/icons/arrow_right.png"/></a>
                </div>

            </div>
            <div className="px-8 py-6 col-span-5">


                <div className="mt-6">
                    <h2 className="text-[18px]">Du bringst folgendes mit:</h2>

                    <ul>
                        {singlePosition.requirements.map((req: any, index: any) => (
                            <li key={index} className="text-[12px] mt-4 text-white/70">
                                <Image height={12} width={12} alt="alt" className="inline mr-3 h-3 -mt-1" src="/assets/images/icons/check.png"/>
                                {req}
                            </li>
                        ))}
                    </ul>

                    <h2 className="mt-4 text-[18px]">Bonus:</h2>

                    <ul>
                        <li className="text-[12px] mt-2 text-white/70"> <Image height={12} width={12} alt="alt" className="inline mr-3 h-3 -mt-1" src="/assets/images/icons/check.png"/>
                            Pathfinding/AI
                            Erfahrung in Java</li>
                    </ul>

                </div>

            </div>

        </div>

    );
}