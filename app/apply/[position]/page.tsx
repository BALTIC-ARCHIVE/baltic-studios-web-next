'use client'
import PositionTile from "@/app/apply/PositionTile";
import {useEffect, useState} from "react";
import ApplyPositionCard from "@/components/apply-position-card/card";
import InputGroup from "@/components/utils/InputGroup";
import InputCheckbox from "@/components/utils/InputCheckbox";
import InputTextArea from "@/components/utils/InputTextArea";
import {EmbedBuilder, WebhookClient} from "discord.js";
import { useRouter } from 'next/navigation'
export default function Home({ params }: { params: { position: string } }) {
    const [teamPositions, setTeamPositions] = useState(null)
    const [singlePosition, setSinglePosition] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setLoading(true);
        fetch('https://plexus.baltic-galaxy.de/api/tpos')
            .then((res) => res.json())
            .then((teamPositions) => {
                setTeamPositions(teamPositions)
            });
        fetch('https://plexus.baltic-galaxy.de/api/tpos/' + params.position)
            .then((res) => res.json())
            .then((singlePosition) => {
                setSinglePosition(singlePosition)
            });
        setLoading(false);

    }, [])

    const [inputs, setInputs] = useState({});

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event: any) => {

        event.preventDefault();
        console.log(inputs);

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1121458216577020087/r9oKTsayw_BZqFMXBWqsdWdf1AGEt41iAClhHW7N09aCda3xWZKeOfpqav2ZeyOPpIUs");
        request.setRequestHeader('Content-type', 'application/json');

        const params = {
            username: "Bewerbi",
            avatar_url: "https://www.baltic-galaxy.de/assets/images/logo.png",
            content: "Neue Bewerbung für " + singlePosition.position_name + " von " + inputs.name + " (" + inputs.minecraft_ign + ") @everyone \n\n" +
                "**E-Mail:** \n" + inputs.email + "\n\n" +
                "**Discord: **\n" + inputs.discord_id + "\n\n" +
                "**Ist dem Discord beigetreten:**\n " + (inputs.have_discord = "on" ? 'Ja': 'Nein') + "\n\n" +
                "**Hat ein Mikrofon:** \n" + (inputs.have_micro = "on" ? 'Ja': 'Nein') + "\n\n" +
                "**Hat einen Minecraft-Account:** \n" + (inputs.have_minecraft = "on" ? 'Ja': 'Nein') + "\n\n" +
                "**Vorstellung:**\n" + inputs.about + "\n\n" +
                "**Motivation:**\n" + inputs.motivation + "\n\n" +
                "**Warum möchtest du dich bewerben?**\n" + inputs.why + "\n\n" +
                "**Portfolio:**\n" + inputs.werke + "\n",

        }

        request.send(JSON.stringify(params));
        router.push('/apply/success');
    }

    if (isLoading) return <p>Loading...</p>
    if (!teamPositions && !singlePosition) return <h1>No profile data</h1>

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

            <ApplyPositionCard singlePosition={singlePosition}/>

            <form className="mt-16" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-8">

                    <InputGroup label="Wie lautet dein Name?" placeholder="Steve" id="name" change={handleChange} required={true} />

                    <InputGroup label="Wie lautet deine E-Mail Adreese?" id="email" placeholder="steve@lovesalex.de" change={handleChange} required={true}/>

                    <InputGroup label="Wie lautet dein Minecraft-Ingame Name?" id="minecraft_ign" placeholder="Steve" change={handleChange} required={true}/>


                    <div className="text-white row-span-2">
                        <InputCheckbox label="Ich bin bereits dem Baltic Galaxy Discord beigetreten." id="have_discord" change={handleChange}/>

                        <InputCheckbox extraClass="mt-8" label="Ich besitze bereits die Vollversion der Minecraft Java-Edition." id="have_minecraft" change={handleChange}/>

                        <InputCheckbox extraClass="mt-8" label="Ich besitze ein Mikrofon mit angemessener Tonqualität." id="have_micro" change={handleChange}/>

                    </div>

                    <InputGroup label="Wie lautet deine Discord-ID?" id="discord_id" placeholder="Steve#2009"  change={handleChange} required={true}/>

                    <InputTextArea label="Stelle dich und die spannendsten Dinge an dir vor. Kleiner Pro-Tipp: Kompakte Texte kommen sehr gut an!" placeholder="Tippe hier deinen Text ein..." rows={8} id="about" change={handleChange} required={true}/>
                    <InputTextArea label="Warum ist deine Motivation für diese Bewerbung?" placeholder="Tippe hier deinen Text ein..." rows={8} id="motivation" change={handleChange} required={true}/>
                    <InputTextArea label="Warum passt du ins Baltic Galaxy Team?" placeholder="Tippe hier deinen Text ein..." rows={8} id="why" change={handleChange} required={true}/>
                    <InputTextArea label="Möchtest du uns deine Werke zeigen? Dann füge hier die
                            Links zu den jeweiligen Websiten hinzu." placeholder="Tippe hier deinen Text ein..." rows={8} id="werke" change={handleChange} required={true}/>


                    <InputCheckbox label="Ich habe verstanden, dass nach dem Klicken des folgenden Buttons ich die Bewerbung nicht mehr bearbeiten kann. Ich habe ebenfalls in Kenntnis genommen, dass die Teammitglieder von Baltic Studios Zugang zu meiner Bewerbung haben." id="accept-privacy" required={true}/>


                    <div className="col-span-2 mx-auto">
                        <button type="submit" className="px-12 py-4 text-black rounded bg-baltic-tuerkis bg-white">Jetzt Bewerbung
                            abschicken!
                        </button>
                    </div>

                </div>
            </form>


        </main>
    )
}
