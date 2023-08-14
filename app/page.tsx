'use client';
import Image from 'next/image'
import {IoPlay} from "react-icons/io5";
import AudioListItem from "@/components/audio-list-item/comp";
import {useEffect, useState} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import InputGroup from "@/components/utils/InputGroup";
import InputTextArea from "@/components/utils/InputTextArea";
import {useRouter} from "next/navigation";


export default function Home() {
  const [tracks, setTracks] = useState([] as any)
  const router = useRouter()
  const [inputs, setInputs] = useState({} as any);

  useEffect(() => {
    fetch('https://plexus.baltic-galaxy.de/api/tracks')
        .then((res) => res.json())
        .then((tracks) => {
          setTracks(tracks)
        });
  })


  const handleChange = (event: any) => {
    const name = event.target.name;
    const value: any = event.target.value;
    setInputs((values: any) => ({...values, [name]: value}))
  }


  const handleSubmit = (event: any) => {

    event.preventDefault();
    console.log(inputs);

    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1122843083944497204/NLQDvSzpihYVgC4Zt963cjrWaf4P9etM-IBBJ0T-7hHEBTjELSRdLKWJNeQ6j1M3J1kW");
    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "Kontakti",
      avatar_url: "https://www.baltic-galaxy.de/assets/images/logo.png",
      content: "Neue Anfrage von " + inputs.name + " @everyone \n\n" +
          "**E-Mail:** \n" + inputs.email + "\n\n" +
          "**Anfrage: **\n" + inputs.anfrage + "\n\n",

    }

    request.send(JSON.stringify(params));
    router.push('/apply/success');
  }

  return (
    <main className="flex justify-center min-h-screen flex-col items-center justify-between">
      <div className="header w-full h-[100vh] bg-header-radial px-4 xl:px-0 justify-center items-center">
        <h1 className="text-[40px] xl:text-[60px] text-center font-bold mt-20">Ein Universum<br/>voller Ideen</h1>
        <h4 className="text-[14px] xl:text-[18px] mt-4 font-normal text-center">Wir schaffen großartiges für Augen und Ohren. Möchtest du Teil der Reise sein?</h4>

        <div className="flex justify-center mt-12 relative z-50">
          <Link href="/about-us"
             className="text-black/70 px-8 py-4 rounded-md bg-[#00FFA3] text-black border-[#7E89B1] text-sm font-medium mr-5">OFFENE POSITIONEN</Link>
        </div>


      </div>

      <div className="pt-0 xl:pt-24 w-full">
        <div className="h-[55vh] xl:h-[90vh] relative rounded-3xl mx-auto max-w-7xl bg-blog-heading-gradient bg-cover px-2 py-2 xl:px-20 xl:py-48">
          <div className="absolute bottom-10 xl:bottom-20 px-4">
            <h4 className="gradient-h4 drop-shadow-lg">Jetzt BALTIC GALAXY entdecken</h4>
            <h1 className="text-white text-4xl xl:text-6xl drop-shadow-lg font-medium leading-tight">Stürze dich ins Abenteuer</h1>
            <div className="w-3/3 xl:w-2/3 mt-7 mb-6 xl:mb-4">
              <p className="text-gray-100 drop-shadow-lg text-[16px] flex-wrap">Ein einzigartiges Star Wars MMORPG, basierend auf Minecraft - jemals davon geträumt? Wir auch!
                Kreiere deinen Charakter und gestalte deinen Weg, erkunde komplexe Dungeons, baue deine Heimat, gründe eine Fraktion, verteidige deine Flotte!</p>
            </div>
            <a className="text-baltic-tuerkis py-2 cursor-pointer group">BALTIC GALAXY entdecken <Image
                height={20} width={20} alt="alt"
                className="inline transition-all ease-in-out group-hover:ml-3 ml-2 h-4 w-4"
                src="/assets/images/icons/arrow_right.png"/></a>
          </div>
        </div>
      </div>

      <div className="mt-20 xl:mt-40 w-4/4 xl:w-3/4 mx-auto grid grid-cols-1 xl:grid-cols-2">
        <div className="mb-8">

          <div className="mb-8">
            <Image src="/assets/images/alex-44.png" alt="alt" width={44} height={44} className="rounded-full float-left mr-5"/>
            <p className="pt-2 pl-4 text-white/70 underline">Alexander Rose Music</p>
          </div>

          <h4 className="gradient-h4">Musikalisch genießen</h4>
          <h1 className="text-white text-4xl font-medium leading-tight">Unsere exklusiven Soundtracks</h1>
          <div className="w-3/3 xl:w-2/3 mt-7 mb-4">
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

        <div className="bg-white/5 h-fit rounded-2xl">
          <ul>
            {tracks && tracks.map((track: any, index: any) => (
                <AudioListItem key={index} title={track.title} author={track.author} duration="2:30" audioUrl={track.audioUrl}/>
            ))}

          </ul>

        </div>
      </div>

      <div className="mt-32 mb-24 h-1/2 w-4/4 xl:w-3/4 mx-auto text-white">
        <h1 className="text-white mb-8 text-[32px] font-bold">Du möchtest mit uns zusammenarbeiten?</h1>

        <form className="grid grid-cols-1 xl:grid-cols-2 gap-8" onSubmit={handleSubmit}>
          <div className="col-span-2 xl:col-span-1">
            <InputGroup label="Dein Name" placeholder="Lucas" id="name" change={handleChange} required={true} />
          </div>
          <div className="col-span-2 xl:col-span-1">
          <InputGroup label="E-Mail Adresse" placeholder="steve@liebtalex.de" id="email" change={handleChange} required={true} />
          </div>
          <InputTextArea label="Deine Anfrage" rows={16} placeholder="Schreib hier deine Anfrage.." change={handleChange} id="anfrage" required={true}/>

          <div className="col-span-2">
            <button type="submit" className="px-12 py-4 text-black rounded bg-baltic-tuerkis hover:bg-baltic-tuerkis/90">Anfrage abschicken
            </button>
          </div>
        </form>

      </div>

      <audio id="audio"></audio>
    </main>
  )
}
