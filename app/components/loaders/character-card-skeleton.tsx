import { BaseSkeleton } from './base-skeleton'

export const CharacterCardSkeleton = () => {
  return (
    <div className="h-[550px] w-80 bg-zinc-800">
      <BaseSkeleton width="w-full" height="h-80" />
      <div className="flex justify-around flex-col p-4 gap-4 h-64">
        <BaseSkeleton width="w-full" height="h-6" />
        <BaseSkeleton width="w-full" height="h-6" />
      </div>
    </div>
  )
}
