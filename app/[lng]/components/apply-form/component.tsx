import { useEffect, useState } from "react";
import InputGroup from "@/app/[lng]/components/utils/InputGroup";
import InputCheckbox from "@/app/[lng]/components/utils/InputCheckbox";
import InputTextArea from "@/app/[lng]/components/utils/InputTextArea";
import { EmbedBuilder, WebhookClient } from "discord.js";
import { useParams, useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "@/app/i18n/client";

export default function ApplyForm({ position }: { position: string }) {
  const [teamPositions, setTeamPositions] = useState([] as any);
  const [singlePosition, setSinglePosition] = useState({} as any);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const randPassword = randomString(10);
  const application_uuid = uuidv4();
  const params = useParams();
  const { t } = useTranslation(params.lng);

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

  function randomString(len: any, charSet?: any) {
    charSet =
      charSet ||
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var randomString = "";
    for (var i = 0; i < len; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }
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
      application_uuid: application_uuid,
      application_password: randPassword,
    };

    request.send(JSON.stringify(params));
    router.push("/application/" + application_uuid + "/" + randPassword);
  };

  if (isLoading) return <p>Loading...</p>;
  if (!teamPositions && !singlePosition) return <h1>No position data</h1>;

  return (
    <main className=" rounded-md  mx-auto xl:w-3/4 w-6/6">
      <form
        className="mt-16 border-white/10 bg-white/5 rounded-xl xl:p-16 p-4 pt-12 xl:pt-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold xl:text-5xl lg:text-5xl text-3xl mb-20">
          {t("form.title")}
        </h1>

        <div className="grid xl:grid-cols-2  grid-cols-1 xl:gap-8 lg:gap-8 gap-8">
          <div className="col-span-2 xl:col-span-1">
            <InputGroup
              label={t("form.name")}
              placeholder="Steve"
              id="name"
              change={handleChange}
              required={true}
            />
          </div>

          <div className="col-span-2 xl:col-span-1">
            <InputGroup
              label={t("form.minecraft_ign")}
              id="minecraft_ign"
              placeholder="Steve"
              change={handleChange}
              required={true}
            />
          </div>

          <div className="col-span-2 xl:col-span-1">
            <InputGroup
              label={t("form.email")}
              id="email"
              placeholder="steve@lovesalex.de"
              change={handleChange}
              required={true}
            />
          </div>
          <div className="col-span-2 xl:col-span-1">
            <InputGroup
              label={t("form.discord_id")}
              id="discord_id"
              placeholder="Steve"
              change={handleChange}
              required={true}
            />
          </div>
          <hr className="col-span-2 mb-6" />
          <div className="xl:col-span-1 col-span-2">
            <h1 className="text-2xl">{t("form.check_basics")}</h1>
          </div>
          <div className="text-white ">
            <div className="col-span-2 xl:col-span-1">
              <InputCheckbox
                label={t("form.joined_discord")}
                id="have_discord"
                change={handleChange}
              />
            </div>
            <div className="col-span-2 xl:col-span-1">
              <InputCheckbox
                extraClass="mt-8"
                label={t("form.have_minecraft")}
                id="have_minecraft"
                change={handleChange}
              />
            </div>
            <div className="col-span-2 xl:col-span-1">
              <InputCheckbox
                extraClass="mt-8"
                label={t("form.have_microphone")}
                id="have_micro"
                change={handleChange}
              />
            </div>
          </div>
          <hr className="col-span-2 mt-6" />
          <div className="text-white col-span-2">
            <label className="text-[18px] block mb-2">
              {t("form.about_label_title")} <br />
              <ul className="list-none mt-2 mb-4 text-sm text-white/60">
                <li className="">{t("form.about_label_description")}</li>
              </ul>
            </label>
            <textarea
              placeholder={t("form.about_placeholder")}
              name={"about"}
              rows={12}
              id={"about"}
              className="px-6 w-full py-2 bg-white/10 placeholder:text-white/30 focus:border-white/30 focus:outline-0 border-2 hover:border-white/20 border-white/10 rounded"
              onChange={handleChange}
              required={true}
            ></textarea>
          </div>
          <InputTextArea
            label={t("form.werke")}
            placeholder={t("form.werke_placeholder")}
            rows={8}
            id="werke"
            change={handleChange}
            required={false}
          />

          <InputCheckbox
            extraClass="col-span-2"
            label={t("form.accept_privacy")}
            id="accept-privacy"
            required={true}
          />

          <div className="col-span-2 mx-auto">
            <button
              type="submit"
              className="px-12 py-4 text-black font-bold rounded bg-baltic-tuerkis hover:bg-baltic-tuerkis/90"
            >
              {t("form.submit")}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
