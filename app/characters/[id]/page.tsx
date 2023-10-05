import CharacterInfo from './character-info'
import { GoBackToCharacterListPage } from './go-back-to-character-list-page'

interface IPageParams {
  params: { id: string }
}

export default function Page({ params }: IPageParams) {
  return (
    <div className="max-w-[1200px] w-full h-screen mx-auto flex flex-col gap-8 py-16 px-4">
      <div className="flex flex-col bg-white text-zinc-700 p-10 gap-16 rounded-xl">
        <GoBackToCharacterListPage />
        <CharacterInfo characterId={params.id} />
      </div>
    </div>
  )
}
