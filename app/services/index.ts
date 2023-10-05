import { generateRequestHash, generateTimestamp } from 'app/helpers'
import {
  IGetCharacterByIdResponse,
  IGetCharactersRequest,
  IGetCharactersResponse,
  IGetComicsByCharacterIdResponse,
} from 'app/models'

export const getCharacters = async ({
  offset = 0,
  limit = 20,
}: IGetCharactersRequest) => {
  const skip = (offset - 1) * limit
  const timestamp = generateTimestamp()
  const hash = generateRequestHash()
  const response = await fetch(
    `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${process.env.PUBLIC_API_KEY}&hash=${hash}&offset=${skip}&limit=${limit}`,
  )
  const data: IGetCharactersResponse = await response.json()

  return data
}

export const getCharacterById = async (id: number) => {
  const timestamp = generateTimestamp()
  const hash = generateRequestHash()

  const response = await fetch(
    `http://gateway.marvel.com/v1/public/characters/${id}?ts=${timestamp}&apikey=${process.env.PUBLIC_API_KEY}&hash=${hash}`,
  )
  const data: IGetCharacterByIdResponse = await response.json()

  return data
}

export const getComicsByCharacterId = async (id: number) => {
  const timestamp = generateTimestamp()
  const hash = generateRequestHash()

  const response = await fetch(
    `http://gateway.marvel.com/v1/public/characters/${id}/comics?ts=${timestamp}&apikey=${process.env.PUBLIC_API_KEY}&hash=${hash}`,
  )
  const data: IGetComicsByCharacterIdResponse = await response.json()

  return data
}
