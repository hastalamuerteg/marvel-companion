'use client'

import { getCharacterSummaryGeneratedByAi } from 'app/services/ai'
import { Wand2 } from 'lucide-react'
import { useEffect, useState } from 'react'

interface IAiGeneratedCharacterInfoProps {
  characterName: string
}
export default function AiGeneratedCharacterInfo({
  characterName,
}: IAiGeneratedCharacterInfoProps) {
  const [messages, setMessages] = useState<string[]>([])

  async function getCharacterSummary(characterName: string) {
    const response = await getCharacterSummaryGeneratedByAi(characterName)
    const stream = response.body
    const decoder = new TextDecoder('utf-8')

    if (stream) {
      const reader = stream.getReader()
      const processStream = async () => {
        while (true) {
          const { done, value } = await reader.read()

          const message = decoder.decode(value)
          setMessages((prevMessages) => [...prevMessages, message])

          if (done) break
        }
      }
      processStream()
    }
  }

  useEffect(() => {
    getCharacterSummary(characterName)
  }, [characterName])

  return (
    <div className="flex flex-col gap-4">
      <p className="flex justify-start items-center capitalize font-semibold gap-2 text-zinc-700">
        <Wand2 className="w-6 h-6" /> ai generated character info
      </p>
      <div className="p-4 border-2 border-zinc-500/20 rounded-lg">
        {messages.map((msg, index) => (
          <p className="inline" key={`${msg}-${index}`}>
            {msg}
          </p>
        ))}
        {messages.length === 0 && (
          <p>Please, wait while generating ai response...</p>
        )}
      </div>
    </div>
  )
}
