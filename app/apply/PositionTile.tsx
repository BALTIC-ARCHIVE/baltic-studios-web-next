'use client';
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from "next/image";
import {MouseEvent} from "react";

export default function PositionTile({positionName, positionDesc}: any) {


    return (
        <div className="text-white border-b border-black px-6 py-4 bg-white/10 grid grid-cols-4">
            <div className="inline">{positionName}</div>
            <div className="inline col-span-2 text-white/70">{positionDesc}</div>
            <div className="inline ml-24"> <a className="text-baltic-tuerkis py-2 px-4 cursor-pointer group">Auswählen</a></div>
        </div>
    );
}