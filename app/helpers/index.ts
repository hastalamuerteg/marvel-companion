import { createHash } from 'node:crypto'

export const generateTimestamp = () => {
  const timestamp = new Date().getTime()
  return timestamp
}

export const generateRequestHash = () => {
  const timestamp = new Date().getTime()
  const hash = createHash('md5')
    .update(
      `${timestamp}${process.env.PRIVATE_API_KEY}${process.env.PUBLIC_API_KEY}`,
    )
    .digest('hex')

  return hash
}
