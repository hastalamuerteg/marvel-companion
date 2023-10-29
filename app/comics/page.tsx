import { CharacterListSkeleton } from '@/components/loaders/character-list-skeleton'
import { getComics } from 'app/services'
import { Suspense } from 'react'
import ComicsList from './comics-list'

interface IPageParams {
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ searchParams }: IPageParams) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

  const { data } = await getComics({ offset: page })

  const lastPage = Math.ceil(data?.total / 20)

  console.log('comics', data)
  return (
    <div className="max-w-[1200px] h-screen mx-auto flex flex-col items-center gap-4 p-4">
      <h1>Comics</h1>
      <Suspense fallback={<CharacterListSkeleton />}>
        <ComicsList comics={data?.results} />
      </Suspense>
    </div>
  )
}
