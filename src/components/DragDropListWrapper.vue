<template lang="pug">
transition-group(name='b-dropzone__container' tag='div')
  template(v-for='index in data.length + 1' :key='"drop_" + listKey + "_" + index')
    div(:class='"b-dropzone b-dropzone--" + listKey' ref='droppables')
    component(:is='renderAs' v-if='index <= data.length' ref='draggables' :data-index='index - 1'  :item='data[index - 1]')
</template>

<script setup lang="ts">
import { type Component, computed, watchEffect } from 'vue'
import { useDragAndDropEvents, useDragAndDropObjects } from '../ts/drag-drop'

const props = defineProps<{
  renderAs: Component,
  listKey: string,
  modelValue: unknown[]
}>()

const emit = defineEmits<{
  (event: 'update:model-value', ...args: unknown[]): void
}>()

const list = computed({
  get: () => props.modelValue,
  set: (newList: unknown[]) => {
    emit('update:model-value', newList)
  }
})

const { draggables, droppables } = useDragAndDropObjects()
const data = useDragAndDropEvents(draggables, droppables, list)

watchEffect(() => {
  list.value = data.value
})
</script>
