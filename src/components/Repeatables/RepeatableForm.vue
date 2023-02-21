<template lang="pug">
div.b-form
  p.b-form__label='Block Title'
  input.b-form__input.b-form__input--sm(type='text' v-model="store.repeatables[index].title")
  p.b-form__label='Block Content'
  textarea.b-form__input.b-form__input--lg(v-model="content")
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

const content: Ref = ref('')
const props = defineProps<{
  index: number
}>()
const initial = {
  repeatables: copyObject(store.repeatables[props.index])
}
const revert = () => {
  menu.toggle()
  store.repeatables[props.index] = initial.repeatables
}
const save = () => {
  menu.toggle()
  attemptChange(props.index, content.value)
  savePageState(store)
}
const setup = () => {
  content.value = formatContent(store.repeatables[props.index].items)
}
onMounted(() => {
  setup()
})
const formatContent = (content: string[] | [string, string][]) => {
  if (content[0] instanceof Array) {
    return content.map(([key, value]) => `${key}: ${value}`).join(';\n')
  } else {
    return content.join(';\n')
  }
}
const attemptChange = (index: number, payload: string) => {
  payload = trimSemicolon(payload)
  const type = payload.includes(':') ? 'map' : 'list'
  const list = payload.split(';').map(item => item.trim())
  if (type === 'map') {
    if (list.filter(item => !item.includes(':')).length > 0) {
      return
    }
    const map: Array<[string, string]> = []
    list.forEach(item => {
      const [key, value] = item.split(':').map(item => item.trim())
      if (!key || !value) {
        return
      }
      map.push([key, value])
    })
    store.repeatables[index].items = map
  } else {
    store.repeatables[index].items = list
  }
}

</script>
