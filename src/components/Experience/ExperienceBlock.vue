<template lang="pug">
div.b-experience(:data-index='dataIndex' ref='draggable' draggable='true')
  div.b-experience__header
    p.b-experience__period-text=`{{item.period}}`
    div.b-experience__title
      h4.b-experience__title-text=`{{item.title}}`
      p.b-experience__title-subtext=`{{item.place}}, {{item.location}}`
    div.b-button-group
      button.b-button.b-button--edit(@click='editExperience()')
        font-awesome-icon.b-button__icon(icon="fas fa-edit")
      button.b-button.b-button--delete(@click='deleteExperience()')
        font-awesome-icon.b-button__icon(icon="fas fa-trash")
  ul.b-experience__list
    li.b-experience__list-item(v-for='(bulletpoint, index) in item.bulletpoints' :key='index')=`{{ bulletpoint }}`
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type WorkExperience } from '../../ts/types'
import { useSidebarStore } from '../../ts/stores/sidebar.store'
import { usePageStore } from '../../ts/stores/page.store'

const menu = useSidebarStore()
const store = usePageStore()

const props = defineProps<{
  item: WorkExperience
  dataIndex: number
}>()

const draggable = ref<HTMLDivElement|null>(null)
const editExperience: VoidFunction = () => {
  menu.toggle()
  menu.$patch({ title: 'Edit Experience', component: 'ExperienceForm', index: props.dataIndex })
}
const deleteExperience: VoidFunction = () => {
  menu.toggle()
  menu.$patch({
    title: 'Remove Experience',
    component: 'ConfirmPopup',
    index: props.dataIndex,
    data: {
      message: 'Are you sure you want to remove this experience entry?',
      callback: (index: number) => store.experience.splice(index, 1)
    }
  })
}
defineExpose({
  draggable
})
</script>
