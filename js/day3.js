const input = 277678

export const getClosestOddSquare = (number) => {
  let root = parseInt(Math.sqrt(number), 10)
  let result = root % 2 === 0 ? root + 1 : root + 2
  if (Math.pow(root, 2) === number) {
    result = root
  }
  return result
}

export const getPathLength = (number) => {
  return getClosestOddSquare(number) - 1
}

export const getOffsetFromVertex = (number) => {
  let root = getClosestOddSquare(number)
  let pathLength = root - 1
  let offset = parseInt((Math.pow(root, 2) - number) % pathLength, 10)
  offset = offset > (pathLength / 2) ? pathLength - offset : offset
  return offset
}

export const findPath = (number) => {
  let offset = getOffsetFromVertex(number)
  let pageLength = getPathLength(number)
  return pageLength - offset
}

console.log(findPath(277678))