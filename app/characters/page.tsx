import Link from 'next/link'
import { Suspense } from 'react'

import { getCharacters } from 'app/services'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CharacterListSkeleton } from '@/components/loaders/character-list-skeleton'
import CharactersList from './characters-list'

interface IPageParams {
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ searchParams }: IPageParams) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

  const { data } = await getCharacters({ offset: page })

  const lastPage = Math.ceil(data?.total / 20)

  if (isNaN(Number(page))) {
    throw new Error('Invalid page')
  }

  return (
    <div className="max-w-[1200px] w-full h-screen mx-auto flex flex-col items-center gap-4 p-4">
      <div className="w-full flex flex-col md:flex-row justify-between gap-4 my-16 p-4">
        <div>
          <h1 className="font-bold text-4xl text-white">Characters</h1>
          <p className="text-white">
            {data?.total} characters found in {lastPage} pages
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={{
              pathname: '/characters',
              query: { page: 1 },
            }}
            className={`flex justify-center items-center rounded-lg ${
              page === 1
                ? 'bg-zinc-700 pointer-events-none'
                : 'bg-red-500 hover:bg-red-600'
            } w-28 h-10  text-white`}
          >
            First
          </Link>
          <Link
            href={{
              pathname: '/characters',
              query: { page: page > 1 ? page - 1 : 1 },
            }}
            className={`flex justify-center items-center rounded-lg ${
              page === 1
                ? 'bg-zinc-700 pointer-events-none'
                : 'bg-red-500 hover:bg-red-600'
            } w-14 h-10  text-white`}
          >
            <ChevronLeft />
          </Link>
          <Link
            href={{
              pathname: '/characters',
              query: {
                page: page + 1,
              },
            }}
            className={`flex justify-center items-center rounded-lg ${
              page === lastPage
                ? 'bg-zinc-700 pointer-events-none'
                : 'bg-red-500 hover:bg-red-600'
            } w-14 h-10  text-white`}
          >
            <ChevronRight />
          </Link>
          <Link
            href={{
              pathname: '/characters',
              query: { page: lastPage },
            }}
            className={`flex justify-center items-center rounded-lg ${
              page === lastPage
                ? 'bg-zinc-700 pointer-events-none'
                : 'bg-red-500 hover:bg-red-600'
            } w-28 h-10  text-white`}
          >
            Last
          </Link>
        </div>
      </div>
      <Suspense fallback={<CharacterListSkeleton />}>
        <CharactersList characters={data?.results} />
      </Suspense>
    </div>
  )
}
