'use client';
import Image from 'next/image'
import {IoPlay} from "react-icons/io5";
import AudioListItem from "@/components/audio-list-item/comp";
import {useEffect, useState} from "react";


export default function Home() {
  const [tracks, setTracks] = useState([] as any)

  useEffect(() => {
    fetch('https://plexus.baltic-galaxy.de/api/tracks')
        .then((res) => res.json())
        .then((tracks) => {
          setTracks(tracks)
        });
  })
  return (
    <main className="flex justify-center min-h-screen flex-col items-center justify-between">
      <div className="header w-full h-[100vh] bg-header-radial">
        <h1>Ein Universum <br/>voller Ideen</h1>
        <h4>Wir schaffen großartiges für Augen und Ohren. Möchtest du Teil der Reise sein?</h4>

        <div className="flex justify-center mt-12 relative z-50">
          <a href="#"
             className="text-black/70 px-8 py-4 rounded-md bg-[#00FFA3] text-black border-[#7E89B1] text-sm font-medium mr-5">DISCORD
            BEITRETEN</a>
        </div>


      </div>

      <div className="pt-24 w-full">
        <div className="h-[90vh] relative rounded-3xl mx-auto max-w-7xl bg-blog-heading-gradient bg-cover px-20 py-48">
          <div className="absolute bottom-20">
            <h4 className="gradient-h4">Jetzt BALTIC GALAXY entdecken</h4>
            <h1 className="text-white text-6xl font-medium leading-tight">Stürze dich ins Abenteuer</h1>
            <div className="w-2/3 mt-7 mb-4">
              <p className="text-gray-400 text-[20px] flex-wrap">Ein einzigartiges Star Wars MMORPG, basierend auf Minecraft - jemals davon geträumt? Wir auch!
                Kreiere deinen Charakter und gestalte deinen Weg, erkunde komplexe Dungeons, baue deine Heimat, gründe eine Fraktion, verteidige deine Flotte!</p>
            </div>
            <a className="text-baltic-tuerkis py-2 cursor-pointer group">BALTIC GALAXY entdecken <Image
                height={20} width={20} alt="alt"
                className="inline transition-all ease-in-out group-hover:ml-3 ml-2 h-4 w-4"
                src="/assets/images/icons/arrow_right.png"/></a>
          </div>
        </div>
      </div>

      <div className="mt-40 grid grid-cols-2 px-48">
        <div className="">

          <div className="mb-8">
            <Image src="/assets/images/alex-44.png" alt="alt" width={44} height={44} className="rounded-full float-left mr-5"/>
            <p className="pt-2 pl-4 text-white/70 underline">Alexander Rose Music</p>
          </div>

          <h4 className="gradient-h4">Musikalisch genießen</h4>
          <h1 className="text-white text-4xl font-medium leading-tight">Unsere exklusiven Soundtracks</h1>
          <div className="w-2/3 mt-7 mb-4">
            <p className="text-gray-400 text-[16px] flex-wrap">
              Wir möchten dich in eine atemberaubende Welt abtauchen lassen. Dafür braucht es mehr als eine große Leinwand.
              Seit Monaten arbeiten wir eng mit dem talentierten Komponisten Alexander Rose zusammen, um dir diese Meisterwerke zu präsentieren!
            </p>
          </div>
          <a className="text-baltic-tuerkis py-2 cursor-pointer group">Alle Tracks anhören <Image
              height={20} width={20} alt="alt"
              className="inline transition-all ease-in-out group-hover:ml-3 ml-2 h-4 w-4"
              src="/assets/images/icons/arrow_right.png"/></a>
        </div>
        <div className="bg-white/10 h-fit rounded-2xl">
          <ul>
            {tracks && tracks.map((track: any, index: any) => (
                <AudioListItem key={index} title={track.title} author={track.author} duration="2:30" audioUrl={track.audioUrl}/>
            ))}

          </ul>

        </div>
      </div>

      <audio id="audio"></audio>
    </main>
  )
}
