'use client';
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from "next/image";
import {MouseEvent} from "react";

export default function ImpressumPage() {


    return (
        <main className="flex relative min-h-screen mb-20 flex-col overflow-visible items-center justify-between">
            <div className="heading xl:w-3/4 w-5/6">
                <h4 className="mt-32 xl:mt-52">Angaben aufgrund § 5 TMG</h4>
                <h1 className="text-[35px] xl:text-[35px] font-bold mt-0">IMPRESSUM</h1>
            </div>


            <div className="mt-10 xl:w-3/4 w-5/6">
                <h3 className="text-gray-300 mb-1">John-Phillip Delenschke</h3>
                <h3 className="text-gray-300 mb-1">Graf von Stauffenberg Straße 7</h3>
                <h3 className="text-gray-300 mb-1">18437 Stralsund</h3>
                <h3 className="text-gray-300 mb-1">Mecklenburg-Vorpommern</h3>
            </div>

            <div className="xl:w-3/4 w-5/6">
                <h1 className="text-2xl font-bold mb-3 mt-10">Vertreten durch:</h1>
                <h3 className="text-gray-300 mb-1">John-Phillip Delenschke</h3>
            </div>

            <div className="xl:w-3/4 w-5/6">
                <h1 className="text-2xl mb-3 font-bold mt-10">Kontakt:</h1>
                <h3 className="text-gray-300 mb-1"><b>Telefon:</b>  015770174294</h3>
                <h3 className="text-gray-300 mb-1"><b>E-Mail:</b> john@baltic-studios.de</h3>
            </div>

            <div className="xl:w-3/4 w-5/6">
                <h1 className="text-2xl mb-3 font-bold mt-10">Verantwortlich für den Inhalt:</h1>
                <h3 className="text-gray-300 mb-1">Siehe oben</h3>
            </div>

            <div className="xl:w-3/4 w-5/6">
                <h1 className="text-2xl mb-3 font-bold mt-10 mt-10">Datenschutzerklärung:</h1>
                <h3 className="text-gray-300 mb-1">Um die Datenschutzerklärung zu lesen, <a href="/datenschutz" className="link">klicke hier:</a></h3>
            </div>

        </main>
    );
}