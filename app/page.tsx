import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-black header">
        <h1><span>KREATIONEN</span> mit lichtgeschwindigkeit</h1>
        <h4>Minecraft als Plattform zum Erzählen von galaktischen Geschichten.</h4>

        <div className="flex justify-center mt-24 relative z-50">
          <a href="#"
             className="text-white px-6 py-2 rounded-md bg-[#00FFA3] text-black border-[#7E89B1] text-sm font-medium mr-5">DISCORD
            BEITRETEN</a>
          <a href="#"
             className="text-white px-6 py-2 rounded-md border border-[#7E89B1] hover:border-white text-sm font-medium">TRAILER
            ANSEHEN</a>
        </div>
        <div className="ellipse">
        </div>


      </div>

      <div className="h-1/2 w-full z-50 bg-white section">

      </div>
    </main>
  )
}
