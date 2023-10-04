import { ICharacter } from 'app/models'
import Image from 'next/image'
import Link from 'next/link'

interface ICharacterCardProps {
  character: ICharacter
}

export const CharacterCard = ({ character }: ICharacterCardProps) => {
  return (
    <div className="flex flex-col h-[550px] w-80 m-2 text-white shadow-xl">
      <picture>
        <Image
          className="w-full h-80 object-cover"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          width={300}
          height={300}
        />
      </picture>
      <div className="h-full bg-white text-black before:block before:content-[''] before:bg-red-500 before:w-full before:h-4">
        <div className="flex flex-col gap-4 p-4 h-full">
          <h2 className="font-bold text-2xl">{character.name}</h2>
          <Link
            href={`/characters/${character.id}`}
            className="font-semibold text-red-500 mt-auto mb-8"
          >
            More about {character.name}
          </Link>
        </div>
      </div>
    </div>
  )
}
