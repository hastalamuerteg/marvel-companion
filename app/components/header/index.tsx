import Image from 'next/image'
import marvelLogo from '@/public/marvel-logo.png'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex flex-col items-center w-full gap-4 pt-4 bg-gradient-to-l from-red-500 via-red-700 to-red-500 shadow-xl">
      <Image
        src={marvelLogo}
        alt="logo marvel comics"
        width={200}
        height={200}
      />
      <ul className="flex items-center justify-center w-full h-10 p-4 gap-4 font-semibold bg-white text-red-500">
        <li>
          <Link className="text-lg" href="/">
            Home
          </Link>
        </li>
        <span>|</span>
        <li>
          <Link className="text-lg" href="/characters">
            Characters
          </Link>
        </li>
        <span>|</span>

        <li>
          <Link className="text-lg" href="/comics">
            Comics
          </Link>
        </li>
      </ul>
    </header>
  )
}
