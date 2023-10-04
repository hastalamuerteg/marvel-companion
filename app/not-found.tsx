import Link from 'next/link'

export default function HomeNotFound() {
  return (
    <div className="max-w-[1200px] h-screen mx-auto flex flex-col items-center gap-4 p-4">
      <h1>Page not found</h1>
      <Link href="/">Go back to home</Link>
    </div>
  )
}
