'use client';
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from "next/image";
import {MouseEvent, useEffect, useState} from "react";
import {IoPlay, IoPause} from "react-icons/io5";

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};
export default function AudioListItem({audioUrl, title}: any) {
    const [playing, toggle] = useAudio(audioUrl);
    return (
        <li className="bg-blue-500/10 px-8 py-5">
            <div className="inline" onClick={toggle}>
                {playing ? <IoPause className="inline mr-4" size="30px"/> : <IoPlay className="inline mr-4" size="30px"/>}
            </div>
            {title}
        </li>
    );
}