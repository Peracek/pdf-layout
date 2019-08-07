import { Dimensions } from './App'

const sum = (arr: number[]) => arr.reduce((acc, x) => (acc += x), 0)

const findFirstLess = (coors: number[], idx: number) => {
  let result = 0

  for (let i = 0; i < coors.length; i++) {
    if (coors[i] < idx) {
      result++
    } else {
      break
    }
  }
  return result
}

export const calc = (pageSize: Dimensions, patternSize: Dimensions, copies: number[]) => {
  const patternsPerPage = {
    x: Math.floor(pageSize.x / patternSize.x),
    y: Math.floor(pageSize.y / patternSize.y),
  }

  const patternsColumns = copies.map(number => Math.ceil(number / patternsPerPage.y))
  const pages = Math.ceil(sum(patternsColumns) / patternsPerPage.x)

  const endIndices = patternsColumns
    .reduce(
      (acc, x) => {
        acc.push(acc[acc.length - 1] + x)
        return acc
      },
      [0],
    )
    .splice(1)
    .map(x => x - 1)

  const startYs = Array.from(Array(patternsPerPage.x).keys()).map(i => i * pages)

  const ys = endIndices.map(x => x % pages)
  ys.push(pages - 1)
  const distinctYs = ys.filter((y, idx) => ys.indexOf(y) === idx).sort((a, b) => a - b)

  const res = distinctYs.map((y, i) => {
    const layout = startYs.map(startY => findFirstLess(endIndices, startY + y))
    const count = y + 1 - (i > 0 ? distinctYs[i - 1] + 1 : 0)

    return { layout, count }
  })

  return res
}
