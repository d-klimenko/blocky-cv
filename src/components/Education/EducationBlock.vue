<template lang="pug">
div.b-experience(:data-index='dataIndex' ref='draggable' draggable='true')
  div.b-experience__header
    p.b-experience__period-text=`{{ item.period }}`
    div.b-experience__title
      h5.b-experience__title-text.b-experience__title-text--smaller=`{{ item.title }}`
      p.b-experience__title-subtext=`{{ item.place }}, {{ item.location }}`
      p.b-experience__title-memo=`{{ item.memo }}`
    div.b-button-group
      button.b-button.b-button--edit(@click='editEducation()')
        font-awesome-icon.b-button__icon(icon="fas fa-edit")
      button.b-button.b-button--delete(@click='deleteEducation()')
        font-awesome-icon.b-button__icon(icon="fas fa-trash")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type EducationExperience } from '../../ts/types'
import { usePageStore } from '../../ts/stores/page.store'
import { useSidebarStore } from '../../ts/stores/sidebar.store'

const store = usePageStore()
const menu = useSidebarStore()

const props = defineProps<{
  item: EducationExperience
  dataIndex: number
}>()

const draggable = ref<HTMLDivElement|null>(null)
const editEducation: VoidFunction = () => {
  menu.toggle()
  menu.$patch({ title: 'Edit Education', component: 'EducationForm', index: props.dataIndex })
}
const deleteEducation: VoidFunction = () => {
  menu.toggle()
  menu.$patch({
    title: 'Remove Experience',
    component: 'ConfirmPopup',
    index: props.dataIndex,
    data: {
      message: 'Are you sure you want to remove this education entry?',
      callback: (index: number) => store.education.splice(index, 1)
    }
  })
}
defineExpose({
  draggable
})
</script>
