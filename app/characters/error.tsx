'use client' // Error components must be Client Components

import { NoDataEmpty } from '@/components/emptyStates/no-data-empty'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen w-full text-zinc-700 p-10 gap-16">
      <NoDataEmpty text={error.message} />
      <div className="flex flex-col gap-4">
        <p>Error name: {error.name}</p>
        <p>Error stack: {error.stack}</p>
        <p>Error digest: {error.digest}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={reset}
          className="bg-white hover:bg-red-600 hover:text-white w-48 h-12 px-4 py-2 border-2 border-red-600 text-red-600 flex justify-center items-center rounded-lg"
        >
          Reload
        </button>
        <Link
          className="bg-red-600 hover:bg-red-700 w-48 h-12 px-4 py-2 text-white flex justify-center items-center rounded-lg"
          href="/"
        >
          Go back to home
        </Link>
      </div>
    </div>
  )
}
