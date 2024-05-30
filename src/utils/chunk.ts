/**
 * Splits an array into two bits, one with all the items up to `chunkSize` and the other with the rest (if there are more than `chunkSize` elements in the array)
 *
 * @param data
 * @param chunkSize
 * @returns
 */
const chunk = (data: string[], chunkSize: number): string[][] => {
  const firstChunk = data.length === chunkSize ? data : data.slice(0, chunkSize)
  const secondChunk = data.length === chunkSize ? [] : data.slice(chunkSize)

  return [firstChunk, secondChunk]
}

export default chunk
