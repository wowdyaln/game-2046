/*
--grid-size: 4;
--cell-size: 20vmin;
--cell-gap: 2vmin;
*/

const GRID_SIZE = 4
const CELL_SIZE = 20
const CELL_GAP = 2

export default class Grid {
  constructor(gridElement) {
    gridElement.style.setProperty("--grid-size", GRID_SIZE)
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`)
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`)

    // create 12 cell elements
    this.cells = createCellElements(gridElement).map(
      (cellEle, index) => {
        return new Cell(
          cellEle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE)
        )
      }
    )
  }
}

//* 每個 cell 有自己的資料
class Cell {
  constructor(cellEle, x, y) {
    this.cellEle = cellEle
    this.x = x
    this.y = y
  }
}

const createCellElements = (gridEle) => {
  const cells = []
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement("div")
    cell.classList.add("cell")
    cells.push(cell)
    gridEle.append(cell) //* DOM div#game-board
  }
  return cells
}
