import { EventEmitter } from "./EventEmitter"

export class Sizes extends EventEmitter {
  constructor({ canvas }) {
    super()
    this.canvas = canvas
    this.pixelRatio = 0
    this.init()
    window.addEventListener("resize", () => {
      this.init()
      this.emit("resize")
    })
  }
  init() {
    const width = window.innerWidth - 600
    this.width = width
    this.height = 800
    this.pixelRatio = this.pixelRatio || Math.min(window.devicePixelRatio, 2)
  }
  destroy() {
    this.off("resize")
  }
}
