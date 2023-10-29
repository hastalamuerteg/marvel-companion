import { IComic } from 'app/models'
import Image from 'next/image'

interface IComicsParams {
  comics: IComic[]
}
export default async function ComicsList({ comics }: IComicsParams) {
  return (
    <div className="max-w-[1200px] w-full h-screen mx-auto flex flex-col items-center gap-4 p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg gap-4">
        {comics?.map((comic) => (
          <div key={comic.id}>
            <p>{comic.title}</p>
            <p>{comic.description}</p>
            <div>
              <Image
                width={300}
                height={300}
                src={comic.thumbnail.path + '.' + comic.thumbnail.extension}
                alt={comic.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
