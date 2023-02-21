<template lang="pug">
div.b-form
  p.b-form__label='Title:'
  input.b-form__input.b-form__input--sm(type='text' v-model="store.title")
div.b-form
  p.b-form__label='Subtitle:'
  input.b-form__input.b-form__input--sm(type='text' v-model="store.subtitle")
div.b-form
  p.b-form__label='Summary:'
  textarea.b-form__input.b-form__input--lg(v-model="store.summary")
control-buttons(@cancel="revert()" @save="save()" cancel-text='Revert')
</template>

<script setup lang="ts">
import { copyObject, savePageState } from '../../ts/stores/functions'
import { useSidebarStore } from '../../ts/stores/sidebar.store'
import { usePageStore } from '../../ts/stores/page.store'
import ControlButtons from './ControlButtons.vue'

const store = usePageStore()
const menu = useSidebarStore()

const initial = {
  title: copyObject(store.title),
  subtitle: copyObject(store.subtitle),
  summary: copyObject(store.summary)
}
const revert = () => {
  menu.toggle()
  store.$patch(initial)
}
const save = () => {
  menu.toggle()
  savePageState(store)
}

</script>
