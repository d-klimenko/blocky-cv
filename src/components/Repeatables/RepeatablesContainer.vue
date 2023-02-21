<template lang="pug">
div.b-section.b-section--sidebar
  div.b-section__header.b-section__header--sidebar
    h3.b-section__title.b-section__title--sidebar=`{{ store.repeatables[storeKey].title }}`
    div.b-button-group
      button.b-button.b-button--sidebar(@click='editRepeatables()')
        font-awesome-icon.b-button__icon(icon="fas fa-edit")
      button.b-button.b-button--sidebar(@click='deleteRepeatables()')
        font-awesome-icon.b-button__icon(icon="fas fa-trash")
  drag-drop-list-wrapper(
    :render-as='RepeatableBlock'
    :list-key='"repeatables_" + storeKey'
    v-model='store.repeatables[storeKey].items'
  )
</template>

<script setup lang="ts">
import RepeatableBlock from './RepeatableBlock.vue'
import DragDropListWrapper from '../DragDropListWrapper.vue'
import { usePageStore } from '../../ts/stores/page.store'
import { useSidebarStore } from '../../ts/stores/sidebar.store'

const store = usePageStore()
const menu = useSidebarStore()

const props = defineProps<{
  storeKey: number
}>()

const editRepeatables: VoidFunction = () => {
  menu.toggle()
  menu.$patch({ title: 'Edit Block', component: 'RepeatableForm', index: props.storeKey })
}
const deleteRepeatables: VoidFunction = () => {
  menu.toggle()
  menu.$patch({
    title: 'Remove Block',
    component: 'ConfirmPopup',
    index: props.storeKey,
    data: {
      message: 'Are you sure you want to remove this block?',
      callback: (index: number) => store.repeatables.splice(index, 1)
    }
  })
}
</script>
