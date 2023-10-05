import Image from 'next/image'
import Link from 'next/link'

import image404 from '@/public/404.png'
export default function HomeNotFound() {
  return (
    <div className="w-full h-screen mx-auto flex flex-col items-center gap-4 p-4 bg-white">
      <div className="flex flex-col md:flex-row justify-around items-center p-4 gap-4 w-full">
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="text-2xl md:text-5xl font-bold text-zinc-500 uppercase text-center md:text-start">
            404 page not found
          </h1>
          <Link
            className="bg-red-600 hover:bg-red-700 px-4 py-2 text-white flex items-center rounded-lg"
            href="/"
          >
            Go back to home
          </Link>
        </div>
        <Image src={image404} alt="404" width={450} height={450} />
      </div>
    </div>
  )
}
