import { onBeforeUnmount, onMounted, type Ref, ref } from 'vue'
import { Draggable, Droppable, type DraggableRef } from './models/drag-drop'

/*
 * Note: With the following methods, our target is the element that's being dragged!
 */

function dragstart (event: DragEvent): void {
  const target = new Draggable(event.currentTarget as HTMLDivElement)
  if (event.dataTransfer !== null) {
    event.dataTransfer.dropEffect = event.dataTransfer.effectAllowed = 'move'
    target.setOpaque(false)
    setDataTransferValue(event, target.index)
  }
}

function dragend (event: DragEvent): void {
  const target = new Draggable(event.currentTarget as HTMLDivElement)
  target.setOpaque(true)
}

/*
 * Note: With the following methods, our target is the element over which the dragged element is being dragged!
 */

function drop (event: DragEvent, index: number, list: Ref<unknown[]>): void {
  const target = new Droppable(event.currentTarget as HTMLDivElement)
  target.setHovered(false)
  const [from, pos] = [getDataTransferValue(event), index]
  if (from === null || from === pos || from === pos - 1) {
    return
  }
  const temp = list.value.splice(from, 1)[0]
  list.value.splice(pos, 0, temp)
}

function dragenter (event: DragEvent): void {
  const target = new Droppable(event.currentTarget as HTMLDivElement)
  target.setHovered(true)
}

function dragleave (event: DragEvent): void {
  const target = new Droppable(event.currentTarget as HTMLDivElement)
  target.setHovered(false)
}

function getDataTransferValue (event: DragEvent): number | null {
  const val = event.dataTransfer?.getData('text/plain')
  return val !== null ? Number(val) : null
}

function setDataTransferValue (event: DragEvent, value: number): void {
  event.dataTransfer?.setData('text/plain', `${value}`)
}

function registerDroppableEvents (droppables: Ref<HTMLDivElement[]>, list: Ref<unknown[]>): void {
  droppables.value.forEach((item: HTMLDivElement, index: number) => {
    item.addEventListener('dragenter', (event: DragEvent): void => {
      event.preventDefault()
      dragenter(event)
    })
    item.addEventListener('dragover', (event: DragEvent): void => {
      event.preventDefault()
    })
    item.addEventListener('dragleave', (event: DragEvent): void => {
      dragleave(event)
    })
    item.addEventListener('drop', (event: DragEvent): void => {
      drop(event, index, list)
    })
  })
}

function dropDroppableEvents (droppables: Ref<HTMLDivElement[]>, list: Ref<unknown[]>): void {
  droppables.value.forEach((item: HTMLDivElement, index: number) => {
    item.removeEventListener('dragenter', (event: DragEvent): void => {
      event.preventDefault()
      dragenter(event)
    })
    item.removeEventListener('dragover', (event: DragEvent): void => {
      event.preventDefault()
    })
    item.removeEventListener('dragleave', (event: DragEvent): void => {
      dragleave(event)
    })
    item.removeEventListener('drop', (event: DragEvent): void => {
      drop(event, index, list)
    })
  })
}

function registerDraggableEvents (draggables: Ref<DraggableRef[]>): void {
  draggables.value.forEach((item: DraggableRef) => {
    item.draggable.addEventListener('dragstart', (event: DragEvent): void => {
      dragstart(event)
    })
    item.draggable.addEventListener('dragend', (event: DragEvent): void => {
      dragend(event)
    })
  })
}

function dropDraggableEvents (draggables: Ref<DraggableRef[]>): void {
  draggables.value.forEach((item: DraggableRef) => {
    item.draggable.removeEventListener('dragstart', (event: DragEvent): void => {
      dragstart(event)
    })
    item.draggable.removeEventListener('dragend', (event: DragEvent): void => {
      dragend(event)
    })
  })
}

export function useDragAndDropObjects (): {
  draggables: Ref<DraggableRef[]>
  droppables: Ref<HTMLDivElement[]>
} {
  const draggables = ref<DraggableRef[]>([])
  const droppables = ref<HTMLDivElement[]>([])

  return { draggables, droppables }
}

export function useDragAndDropEvents<T> (
  draggables: Ref<DraggableRef[]>,
  droppables: Ref<HTMLDivElement[]>,
  data: Ref<T[]>
): Ref<T[]> {
  onMounted(() => {
    registerDraggableEvents(draggables)
    registerDroppableEvents(droppables, data)
  })

  onBeforeUnmount(() => {
    dropDraggableEvents(draggables)
    dropDroppableEvents(droppables, data)
  })

  return data
}
