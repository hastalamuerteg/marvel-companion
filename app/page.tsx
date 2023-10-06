export default function Home() {
  return (
    <div className="w-full min-h-screen mx-auto flex flex-col items-center">
      <div className="bg-cover bg-hero-home bg-fixed w-full h-screen">
        <div className="flex flex-col gap-4 h-full w-full">
          <div className="flex flex-col pt-64 items-center h-full gap-4">
            <h1 className="text-7xl font-bold text-white">Marvel Companion</h1>
            <p className="text-2xl">A companion app for Marvel Comics</p>
          </div>
        </div>
      </div>
      <section className="w-full h-screen bg-white"></section>
    </div>
  )
}
