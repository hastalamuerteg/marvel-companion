'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const GoBackToCharacterListPage = () => {
  const router = useRouter()
  return (
    <div className="flex gap-4">
      <button
        className="bg-red-600 hover:bg-red-700 px-4 py-2 text-white flex items-center rounded-lg"
        onClick={() => router.back()}
      >
        <ChevronLeft /> Go back
      </button>
    </div>
  )
}
