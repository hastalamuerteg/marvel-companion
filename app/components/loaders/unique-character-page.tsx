import { BaseSkeleton } from './base-skeleton'

export const UniqueCharacterPage = () => {
  return (
    <div className="max-w-[1200px] w-full h-screen mx-auto flex flex-col gap-8 py-16 px-4">
      <div className="flex flex-col bg-white text-zinc-700 p-10 gap-16 w-full rounded-xl">
        <div className="flex flex-col md:flex-row gap-8">
          <BaseSkeleton width="w-[250px]" height="h-[250px]" />
          <div className="flex flex-col gap-4 h-full w-full">
            <BaseSkeleton width="w-36" height="h-6" />
            <BaseSkeleton width="w-full" height="h-6" />
            <BaseSkeleton width="w-full" height="h-6" />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-4 h-full w-full">
            <div className="flex flex-col gap-10 h-full w-full">
              <BaseSkeleton width="w-72" height="h-6" />
              <div className="flex flex-wrap gap-8">
                <BaseSkeleton width="w-72" height="h-96" />
                <BaseSkeleton width="w-72" height="h-96" />
                <BaseSkeleton width="w-72" height="h-96" />
                <BaseSkeleton width="w-72" height="h-96" />
                <BaseSkeleton width="w-72" height="h-96" />
                <BaseSkeleton width="w-72" height="h-96" />
                <BaseSkeleton width="w-72" height="h-96" />
                <BaseSkeleton width="w-72" height="h-96" />
                <BaseSkeleton width="w-72" height="h-96" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
