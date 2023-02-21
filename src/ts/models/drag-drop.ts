export interface DraggableRef {
  draggable: HTMLDivElement
}

class DragDropTarget {
  element: HTMLDivElement

  constructor (element: HTMLDivElement) {
    this.element = element
  }

  get index (): number {
    return Number(this.element.getAttribute('data-index'))
  }

  set index (index: number) {
    this.element.setAttribute('data-index', `${index}`)
  }
}

export class Draggable extends DragDropTarget {
  public setOpaque (on: boolean): void {
    this.element.style.setProperty('opacity', on ? '1' : '0.2')
  }
}

export class Droppable extends DragDropTarget {
  public setHovered (on: boolean): void {
    const initial = this.element.classList[0]
    if (on) {
      this.element.classList.add(initial + '--hovered')
    } else {
      this.element.classList.remove(`${initial}--hovered`)
    }
  }
}
