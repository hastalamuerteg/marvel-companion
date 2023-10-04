import { CharacterCardSkeleton } from '@/components/loaders/character-card-skeleton'

export default function Loading() {
  return (
    <div className="max-w-[1200px] h-screen mx-auto flex flex-col items-center gap-4 p-4">
      <div className="grid md:grid-cols-3 gap-4">
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
