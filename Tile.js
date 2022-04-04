export default class Tile {
  #tileElement

  // tileContainer
  constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) {
    this.#tileElement = document.createElement("div")
    this.#tileElement.classList.add("tile")
    tileContainer.append(this.#tileElement)
    this.#value = value
  }

  set x(value) {}

  set y(value) {}
}
