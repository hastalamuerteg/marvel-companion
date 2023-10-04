import { ICharacter } from 'app/models'
import { CharacterCard } from './character-card'

interface ICharactersParams {
  characters: ICharacter[]
}
export default async function CharactersList({
  characters,
}: ICharactersParams) {
  return (
    <div className="max-w-[1200px] w-full h-screen mx-auto flex flex-col items-center gap-4 p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg gap-4">
        {characters?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}
