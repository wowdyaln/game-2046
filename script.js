import Grid from "./Grid.js"
import Tile from "./Tile.js"

const gameBoard = document.getElementById("game-board")

// new Grid(gameBoard)
const grid = new Grid(gameBoard)

console.log(grid.randomEmptyCell())

const setupInput = () => {
  //the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked.
  window.addEventListener("keydown", handleInput, { once: true })
}

const handleInput = (e) => {
  console.log(e.key)
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
  console.log("move up")
}

//* logic
grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)
setupInput()

console.log(grid.cellsByColumn)
