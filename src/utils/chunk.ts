/**
 * Splits an array into two bits, one with all the items up to `chunkSize` and the other with the rest (if there are more than `chunkSize` elements in the array)
 *
 * @param data Items to split in two
 * @param chunkSize Number of items for the first chunk
 * @returns An array with two items: one with all the items up to `chunkSize` and the other with the rest (if there are more than `chunkSize` items in the array)
 */
const chunk = (data: string[], chunkSize: number): string[][] => {
  const firstChunk = data.length === chunkSize ? data : data.slice(0, chunkSize)
  const secondChunk = data.length === chunkSize ? [] : data.slice(chunkSize)

  return [firstChunk, secondChunk]
}

export default chunk
