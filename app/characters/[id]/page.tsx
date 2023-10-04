interface IPageParams {
  params: { id: string }
}

export default async function Page({ params }: IPageParams) {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  )
}
