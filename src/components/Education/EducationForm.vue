<template lang="pug">
div.b-form
  p.b-form__label='Title'
  input.b-form__input.b-form__input--sm(type='text' v-model="store.education[index].title")
  p.b-form__label='Company'
  input.b-form__input.b-form__input--sm(type='text' v-model="store.education[index].place")
  p.b-form__label='Location'
  input.b-form__input.b-form__input--sm(type='text' v-model="store.education[index].location")
  p.b-form__label='Period'
  input.b-form__input.b-form__input--sm(type='text' v-model="store.education[index].period")
  p.b-form__label='Memo'
  input.b-form__input.b-form__input--sm(type='text' v-model="store.education[index].memo")
control-buttons(@cancel="revert()" @save="save()" cancel-text='Revert')
</template>

<script setup lang="ts">
import { copyObject, savePageState } from '../../ts/stores/functions'
import { useSidebarStore } from '../../ts/stores/sidebar.store'
import { usePageStore } from '../../ts/stores/page.store'
import ControlButtons from '../Forms/ControlButtons.vue'

const store = usePageStore()
const menu = useSidebarStore()

const props = defineProps<{
  index: number
}>()
const initial = {
  education: copyObject(store.education[props.index])
}
const revert = () => {
  menu.toggle()
  store.education[props.index] = initial.education
}
const save = () => {
  menu.toggle()
  savePageState(store)
}
</script>
