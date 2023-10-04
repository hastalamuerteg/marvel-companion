export const CharacterCardSkeleton = () => {
  return (
    <div className="h-[450px] w-60 bg-zinc-800">
      <div className="flex flex-col animate-pulse h-full gap-4">
        <div className="bg-gray-300  w-full h-64" />
        <div className="flex flex-col gap-4 p-4 h-full">
          <div className="w-36 bg-gray-300 h-6" />
        </div>
      </div>
    </div>
  )
}
