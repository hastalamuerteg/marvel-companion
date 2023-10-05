interface IThumbnail {
  extension: string
  path: string
}

export interface ICharacter {
  id: number
  name: string
  description: string
  thumbnail: IThumbnail
}

export interface IGetCharactersResponse {
  data: {
    offset: number
    limit: number
    total: number
    count: number
    results: ICharacter[]
  }
}

export interface IGetCharactersRequest {
  offset: number
  limit?: number
}

export interface IGetCharacterByIdResponse {
  data: {
    offset: number
    limit: number
    total: number
    count: number
    results: ICharacter[]
  }
}

export interface IComic {
  id: number
  title: string
  description: string
  thumbnail: IThumbnail
  issueNumber: number
  images: {
    path: string
    extension: string
  }[]
}

export interface IGetComicsByCharacterIdResponse {
  data: {
    offset: number
    limit: number
    total: number
    count: number
    results: IComic[]
  }
}
