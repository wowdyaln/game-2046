/*
--grid-size: 4;
--cell-size: 20vmin;
--cell-gap: 2vmin;
*/

const GRID_SIZE = 4
const CELL_SIZE = 20
const CELL_GAP = 2

export default class Grid {
  #cells

  constructor(gridElement) {
    gridElement.style.setProperty("--grid-size", GRID_SIZE)
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`)
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`)

    // create 12 empty cells (without tiles)
    this.#cells = createCellElements(gridElement).map(
      (cellEle, index) => {
        return new Cell(
          cellEle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE)
        )
      }
    )
  }

  // 取得所有空的 cells （沒有 tile 在上方）
  get #emptyCells() {
    return this.#cells.filter((cell) => cell.tile == null)
  }

  // 從目前所有空的 cells, 隨機取一個 cell 出來
  randomEmptyCell() {
    const randomIndex = Math.floor(
      Math.random() * this.#emptyCells.length
    )
    return this.#emptyCells[randomIndex]
  }

  //* 使用2階 Array呈現目前每個 cell 的狀態
  get cellsByColumn() {
    return this.#cells.reduce((cellGrid, cell) => {
      // debugger //* 使用 debugger 一步步去思考

      cellGrid[cell.x] = cellGrid[cell.x] || []
      cellGrid[cell.x][cell.y] = cell
      return cellGrid
    }, [])

    /* 也可以改寫如下
    const cellGrid = []
    this.#cells.forEach((cell) => {
      cellGrid[cell.x] = cellGrid[cell.x] || []
      cellGrid[cell.x][cell.y] = cell
    })
    return cellGrid
    */
  }
}

//* 每個 cell 有自己的資料
class Cell {
  #cellEle
  #x
  #y
  #tile

  constructor(cellEle, x, y) {
    this.#cellEle = cellEle
    this.#x = x
    this.#y = y
  }

  get tile() {
    return this.#tile
  }

  set tile(value) {
    this.#tile = value
    if (value == null) return
    this.#tile.x = this.#x
    this.#tile.y = this.#y
  }
  get x() {
    return this.#x
  }
  get y() {
    return this.#y
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
