interface IBaseSkeletonProps {
  width: string
  height: string
}

export const BaseSkeleton = ({ height, width }: IBaseSkeletonProps) => {
  return (
    <div
      className={`bg-zinc-300 animate-pulse ${width} ${height} rounded-lg`}
    />
  )
}
