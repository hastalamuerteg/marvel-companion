import Image from 'next/image'

import { getCharacterById, getComicsByCharacterId } from 'app/services'
import { NoDataEmpty } from '@/components/emptyStates/no-data-empty'

interface ICharacterInfoParams {
  characterId: string
}
export default async function CharacterInfo({
  characterId,
}: ICharacterInfoParams) {
  const { data: dataCharacters } = await getCharacterById(Number(characterId))
  const { data: dataComics } = await getComicsByCharacterId(Number(characterId))

  const character = dataCharacters?.results[0]
  const comics = dataComics?.results

  // if (!character || !comics) {
  //   return <NoDataEmpty text="No data" />
  // }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <Image
          className="w-[250px] h-auto object-cover rounded-lg"
          src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
          alt={character?.name}
          width={250}
          height={250}
          priority
        />
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-4xl">{character?.name}</h1>
          <p>
            {character?.description === ''
              ? 'No description was provided for this character.'
              : character?.description}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="font-bold text-4xl">Comics with {character?.name}</h2>
          <div className="flex flex-wrap gap-4">
            {comics?.map((comic) => (
              <div
                key={comic.id}
                className="flex flex-col justify-between w-80 gap-4"
              >
                <h3 className="font-bold text-lg my-4">{comic.title}</h3>
                <Image
                  src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                  alt={comic?.title}
                  width={500}
                  height={500}
                />
              </div>
            ))}
            {comics?.length === 0 && (
              <NoDataEmpty
                text={`There's no comics for ${character?.name}...`}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
