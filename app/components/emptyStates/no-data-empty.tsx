import Image from 'next/image'

import empty from '@/public/empty.png'

interface INoDataEmptyProps {
  text: string
}
export const NoDataEmpty = ({ text }: INoDataEmptyProps) => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[500px] w-full p-4">
      <h2 className="font-bold text-xl">{text}</h2>
      <Image src={empty} alt="no data" width={350} height={350} />
    </div>
  )
}
