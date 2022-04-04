import Grid from "./Grid.js"
import Tile from "./Tile.js"

const gameBoard = document.getElementById("game-board")

// new Grid(gameBoard)
const grid = new Grid(gameBoard)

//? console.log(grid.randomEmptyCell())

const setupInput = () => {
  //the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked.
  window.addEventListener("keydown", handleInput, { once: true })
}

const handleInput = (e) => {
  //? console.log(e.key)
  switch (e.key) {
    case "ArrowUp":
      moveUp()
      break
    case "ArrowDown":
      moveDown()
      break
    case "ArrowLeft":
      moveLeft()
      break
    case "ArrowRight":
      moveRight()
      break
    default: //* 如果不是方向鍵，再 call setupInput.
      setupInput()
      return
  }
}

const moveUp = () => {
  return slideTiles(grid.cellsByColumn)
}

const slideTiles = (cells) => {
  cells.forEach((group) => {
    for (let i = 1; i < group.length; i++) {
      const cell = group[i]
      let lastValidCell

      //give us the cell directly above that one.
      for (let j = i - 1; j >= 0; j--) {
        const moveToCell = group[j]
        if (!moveToCell.canAccept(cell.tile)) break
        lastValidCell = moveToCell
      }
      if (lastValidCell != null) {
        if (lastValidCell.tile != null) {
          lastValidCell.mergeTile = cell.tile
        } else {
          lastValidCell.tile = cell.tile
        }
        cell.tile = null
      }
    }
  })
}

//* logic
grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)
setupInput()

console.log(grid.cellsByColumn)
