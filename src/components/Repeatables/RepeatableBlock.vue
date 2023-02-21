<template lang="pug">
div.b-skill(:data-index='dataIndex' v-if='item' ref='draggable' draggable='true')
  template(v-if='isArray')
    b.b-skill__label=`{{item[0]}}: `
    p.b-skill__text=`{{item[1]}}`
  template(v-else)
    p.b-skill__text=`{{item}}`
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  item?: string | string[]
  dataIndex: number
}>()
const isArray = computed(() => Array.isArray(props.item))
const draggable = ref<HTMLDivElement|null>(null)

defineExpose({
  draggable
})
</script>
