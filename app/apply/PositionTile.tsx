'use client';
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from "next/image";
import {MouseEvent} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function PositionTile({positionName, positionDesc, positionId}: any) {
    const pathname = usePathname()
    const link: any = `/apply/${positionId}`;

    const isActive = pathname.startsWith(link)

    return (

        <Link href={`/apply/${positionId}`} className="text-white border-b border-black px-6 py-4 bg-white/10 grid grid-cols-4">
            <div className={isActive ? 'inline text-baltic-tuerkis': 'inline text-white/70'}>{positionName}</div>
            <div className="inline ml-12 xl:ml-1 xl:col-span-2 col-span-3 text-white/70">{positionDesc}</div>
            <div className="ml-24 xl:block hidden">
                {isActive ?
                    <a className="text-white py-2 px-4 cursor-pointer group">Ausgewählt</a>
                    :
                    <a className="text-baltic-tuerkis py-2 px-4 cursor-pointer group">Auswählen</a>}
            </div>
        </Link>
    );
}