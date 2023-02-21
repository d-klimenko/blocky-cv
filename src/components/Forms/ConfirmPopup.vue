<template lang="pug">
div.b-form
  p.b-form__label=`{{ data.message }}`
control-buttons(cancel-text="Back" save-text="OK" @cancel="menu.toggle()" @save="commit()")
</template>

<script setup lang="ts">
import ControlButtons from './ControlButtons.vue'
import { useSidebarStore } from '../../ts/stores/sidebar.store'

const menu = useSidebarStore()
const props = defineProps<{
  index: number
  data: {
    callback:(index: number) => void
    message: string
  }
}>()
const commit = () => {
  props.data.callback(props.index)
  menu.toggle()
}
</script>
