const sheetDimensions = {
  x: 740,
  y: 1100,
}

const patternDimensions = {
  x: 170,
  y: 150,
}

const copies = [1000, 750, 250, 700, 800, 300, 200]

const findFirstLess = (coors, idx) => {
  let result = 0

  for (let i = 0; i < coors.length; i++) {
    if (coors[i].runningY < idx) {
      result++
    } else {
      break
    }
  }
  return result
}

export const calc = ({ pageSize, patternSize, copies }) => {
  const sheetPatternDimensions = {
    x: Math.floor(pageSize.x / patternSize.x),
    y: Math.floor(pageSize.y / patternSize.y),
  }

  const copiesColumns = copies.map(number => Math.ceil(number / sheetPatternDimensions.y))
  const columnCount = copiesColumns.reduce((acc, number) => (acc += number), 0)
  const sheetCount = Math.ceil(columnCount / sheetPatternDimensions.x)

  let acc = 0
  // FIXME: PROBLEM HERE BELOW
  const endIndices = copiesColumns.map(number => {
    const x = Math.floor((acc + number) / sheetCount)
    const y = (acc + number) % sheetCount
    const runningY = acc + number //% sheetCount
    acc += number
    return { x, y, runningY }
  })

  const ys = endIndices.map(({ x, y }) => y).sort((a, b) => a - b)
  const distinctYs = ys.filter((y, idx) => ys.indexOf(y) === idx)
  const startYs = [...Array(sheetPatternDimensions.x).keys()].map(i => i * sheetCount)

  debugger
  let lastY = 0
  const ultimateResult = distinctYs.map(y => {
    const copies = y - lastY + 1
    const layout = startYs.map(startY => {
      const i = startY + y
      const result = findFirstLess(endIndices, i)
      return result
    })
    return {
      layout,
      copies,
    }
  })

  return ultimateResult
}
