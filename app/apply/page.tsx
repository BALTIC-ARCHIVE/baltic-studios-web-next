'use client';
import Image from 'next/image'
import PositionTile from "@/app/apply/PositionTile";
import {useEffect, useState} from "react";
import {wait} from "next/dist/build/output/log";

export default function Home() {
    const [teamPositions, setTeamPositions] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        fetch('https://plexus.baltic-galaxy.de/api/tpos')
            .then((res) => res.json())
            .then((teamPositions) => {
                setTeamPositions(teamPositions)
            });
        setLoading(false);

    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!teamPositions) return <p>No profile data</p>

    return (
        <main className="bg-black mt-24 mx-auto max-w-6xl">

            <div>
                <div className="px-6 py-4 rounded-t-xl bg-white/5">
                    <h3 className="text-lg font-bold text-white">Wähle deine Position aus, für die du dich bewerben möchtest.</h3>
                </div>
                <div className="rounded-b-xl overflow-hidden">

                    {teamPositions.map((teamPosition: any, index: any) => (
                        <PositionTile key={index} positionName={teamPosition.position_name} positionDesc={teamPosition.short_description}/>
                    ))}
                </div>
            </div>
        </main>
    )
}
