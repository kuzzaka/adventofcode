import { getClosestOddSquare, getPathLength, getOffsetFromVertex, findPath } from './day3'

test('getClosestOddSquare', () => {
  expect(getClosestOddSquare(82)).toEqual(11)
  expect(getClosestOddSquare(81)).toEqual(9)
  expect(getClosestOddSquare(65)).toEqual(9)
})

test('getPathLength', () => {
  expect(getPathLength(82)).toEqual(10)
  expect(getPathLength(65)).toEqual(8)
})

test('getOffsetFromVertex', () => {
  expect(getOffsetFromVertex(46)).toEqual(3)
  expect(getOffsetFromVertex(71)).toEqual(2)
  expect(getOffsetFromVertex(81)).toEqual(0)
  expect(getOffsetFromVertex(63)).toEqual(2)
  expect(getOffsetFromVertex(58)).toEqual(1)
});

test('testFindPath', () => {
  expect(findPath(81)).toEqual(8)
  expect(findPath(69)).toEqual(4)
  expect(findPath(24)).toEqual(3)
});