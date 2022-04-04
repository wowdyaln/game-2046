export default class Tile {
  #tileElement
  #x
  #y
  #value

  // tileContainer, 就是 gameBoard
  constructor(tileContainer) {
    this.#tileElement = document.createElement("div")
    this.#tileElement.classList.add("tile")
    tileContainer.append(this.#tileElement)
    this.value = Math.random() > 0.5 ? 2 : 4
  }

  set value(v) {
    this.#value = v
    this.#tileElement.textContent = v
  }

  set x(value) {
    this.#x = value
    this.#tileElement.style.setProperty("--x", value)
  }

  set y(value) {
    this.#y = value
    this.#tileElement.style.setProperty("--y", value)
  }
}
