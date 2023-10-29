import { NextRequest } from 'next/server'

import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'
export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const hasCharacterName = searchParams.has('characterName')
  if (hasCharacterName) {
    const character = searchParams.get('characterName')

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-16k',
      stream: true,
      temperature: 0.5,
      max_tokens: 100,
      messages: [
        {
          role: 'user',
          content: `
            Provide a small summary of the marvel comics character ${character}, keep it simple with general information.
          `,
        },
      ],
    })

    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
  }
}
