"use client";
import PositionTile from "@/app/apply/PositionTile";
import { useEffect, useState } from "react";
import InputGroup from "@/components/utils/InputGroup";
import InputCheckbox from "@/components/utils/InputCheckbox";
import InputTextArea from "@/components/utils/InputTextArea";
import { EmbedBuilder, WebhookClient } from "discord.js";
import { useRouter } from "next/navigation";
export default function ApplyForm({ position }: { position: string }) {
  const [teamPositions, setTeamPositions] = useState([] as any);
  const [singlePosition, setSinglePosition] = useState({} as any);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    fetch("https://plexus.baltic-galaxy.de/api/tpos")
      .then((res) => res.json())
      .then((teamPositions) => {
        setTeamPositions(teamPositions);
      });
    fetch("https://plexus.baltic-galaxy.de/api/tpos/" + position)
      .then((res) => res.json())
      .then((singlePosition) => {
        setSinglePosition(singlePosition);
      });
    setLoading(false);
  }, [position]);

  const [inputs, setInputs] = useState({} as any);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value: any = event.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(inputs);

    const request = new XMLHttpRequest();
    request.open("POST", "https://plexus.baltic-galaxy.de/api/application");
    request.setRequestHeader("Content-type", "application/json");

    const params = {
      position_name: singlePosition && singlePosition.position_name,
      first_name: inputs.name,
      minecraft_ign: inputs.minecraft_ign,
      email: inputs.email,
      discord_id: inputs.discord_id,
      have_discord: (inputs.have_discord = "on" ? 1 : 0),
      have_micro: (inputs.have_micro = "on" ? 1 : 0),
      have_minecraft: (inputs.have_minecraft = "on" ? 1 : 0),
      about: inputs.about,
      portfolio: inputs.werke,
    };

    request.send(JSON.stringify(params));
    router.push("/apply/success");
  };

  if (isLoading) return <p>Loading...</p>;
  if (!teamPositions && !singlePosition) return <h1>No profile data</h1>;

  return (
    <main className=" rounded-md  mx-auto xl:w-3/4 w-5/6">
      <form
        className="mt-16 border-white/10 bg-white/5 rounded-xl p-16"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold text-5xl mb-20">
          Schaffst du es in 5 Minuten?
        </h1>

        <div className="grid xl:grid-cols-2  grid-cols-1 gap-8">
          <div className="col-span-2 xl:col-span-1">
            <InputGroup
              label="Wie lautet dein Name?"
              placeholder="Steve"
              id="name"
              change={handleChange}
              required={true}
            />
          </div>

          <div className="col-span-2 xl:col-span-1">
            <InputGroup
              label="Wie lautet deine E-Mail Adreese?"
              id="email"
              placeholder="steve@lovesalex.de"
              change={handleChange}
              required={true}
            />
          </div>
          <div className="col-span-2 xl:col-span-1">
            <InputGroup
              label="Wie lautet dein Minecraft-Ingame Name?"
              id="minecraft_ign"
              placeholder="Steve"
              change={handleChange}
              required={true}
            />
          </div>

          <div className="text-white row-span-2">
            <div className="col-span-2 xl:col-span-1">
              <InputCheckbox
                label="Ich bin bereits dem BALTIC GALAXY Discord beigetreten."
                id="have_discord"
                change={handleChange}
              />
            </div>
            <div className="col-span-2 xl:col-span-1">
              <InputCheckbox
                extraClass="mt-8"
                label="Ich besitze bereits die Vollversion der Minecraft Java-Edition."
                id="have_minecraft"
                change={handleChange}
              />
            </div>
            <div className="col-span-2 xl:col-span-1">
              <InputCheckbox
                extraClass="mt-8"
                label="Ich besitze ein Mikrofon mit angemessener Tonqualität."
                id="have_micro"
                change={handleChange}
              />
            </div>
          </div>
          <div className="col-span-2 xl:col-span-1">
            <InputGroup
              label="Wie lautet deine Discord-ID?"
              id="discord_id"
              placeholder="Steve"
              change={handleChange}
              required={true}
            />
          </div>
          <div className="text-white col-span-2">
            <label className="text-[18px] block mb-2">
              Schreibe einen Text in kurzer aber spannender Form über dich und
              stelle dir dabei folgende Fragen: <br />
              <ul className="list-disc ml-8 mt-2 mb-4">
                <li className="">
                  Wer bist du? Wo stehst du im Leben? Was ist cool an dir?
                </li>
                <li>
                  Welche beeindruckenden Skills und Erfahrung bringst du so mit?
                </li>
              </ul>
            </label>
            <textarea
              placeholder={"Tippe hier deinen Text ein..."}
              name={"about"}
              rows={12}
              id={"about"}
              className="px-6 w-full py-2 bg-white/10 placeholder:text-white/30 focus:border-white/30 focus:outline-0 border-2 hover:border-white/20 border-white/10 rounded"
              onChange={handleChange}
              required={true}
            ></textarea>
          </div>
          <InputTextArea
            label="Möchtest du uns deine Werke zeigen? Dann füge hier die
                                Links zu den jeweiligen Websiten hinzu."
            placeholder="Tippe hier deinen Text ein..."
            rows={8}
            id="werke"
            change={handleChange}
            required={false}
          />

          <InputCheckbox
            extraClass="col-span-2"
            label="Ich habe verstanden, dass nach dem Klicken des folgenden Buttons ich die Bewerbung nicht mehr bearbeiten kann. Ich habe ebenfalls in Kenntnis genommen, dass die Teammitglieder von Baltic Studios Zugang zu meiner Bewerbung haben."
            id="accept-privacy"
            required={true}
          />

          <div className="col-span-2 mx-auto">
            <button
              type="submit"
              className="px-12 py-4 text-black font-bold rounded bg-baltic-tuerkis hover:bg-baltic-tuerkis/90"
            >
              Jetzt Bewerbung abschicken!
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
