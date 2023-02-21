<template lang="pug">
div.b-form
  p.b-form__label='Title'
  input.b-form__input.b-form__input--sm(type='text' v-model="store.experience[index].title")
  p.b-form__label='Company'
  input.b-form__input.b-form__input--sm(type='text' v-model="store.experience[index].place")
  p.b-form__label='Location'
  input.b-form__input.b-form__input--sm(type='text' v-model="store.experience[index].location")
  p.b-form__label='Period'
  input.b-form__input.b-form__input--sm(type='text' v-model="store.experience[index].period")
  p.b-form__label='Bulletpoints'
  textarea.b-form__input.b-form__input--lg(v-model="bulletpoints")
control-buttons(@cancel="revert()" @save="save()" cancel-text='Revert')
</template>

<script setup lang="ts">
import { copyObject, savePageState, trimSemicolon } from '../../ts/stores/functions'
import { useSidebarStore } from '../../ts/stores/sidebar.store'
import { usePageStore } from '../../ts/stores/page.store'
import ControlButtons from '../Forms/ControlButtons.vue'
import { onMounted, type Ref, ref } from 'vue'

const store = usePageStore()
const menu = useSidebarStore()

const bulletpoints: Ref = ref('')
const props = defineProps<{
  index: number
}>()
const initial = {
  experience: copyObject(store.experience[props.index])
}
const revert = () => {
  menu.toggle()
  store.experience[props.index] = initial.experience
}
const save = () => {
  menu.toggle()
  attemptChange(props.index, bulletpoints.value)
  savePageState(store)
}
const setup = () => {
  bulletpoints.value = formatContent(store.experience[props.index].bulletpoints)
}
onMounted(() => {
  setup()
})
const formatContent = (content: string[] | [string, string][]) => {
  return content.join(';\n')
}
const attemptChange = (index: number, payload: string) => {
  payload = trimSemicolon(payload)
  store.experience[props.index].bulletpoints = payload.split(';').map(item => item.trim())
}

</script>
