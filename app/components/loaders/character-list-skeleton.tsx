import { BaseSkeleton } from './base-skeleton'
import { CharacterCardSkeleton } from './character-card-skeleton'

export const CharacterListSkeleton = () => {
  return (
    <div className="max-w-[1200px] h-screen mx-auto flex flex-col items-center gap-4 p-4">
      <div className="flex justify-between w-full my-32">
        <BaseSkeleton width="w-96" height="h-8" />
        <div className="flex items-center gap-4">
          <BaseSkeleton width="w-28" height="h-10" />
          <BaseSkeleton width="w-28" height="h-10" />
          <BaseSkeleton width="w-28" height="h-10" />
          <BaseSkeleton width="w-28" height="h-10" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg gap-4">
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
      </div>
    </div>
  )
}
