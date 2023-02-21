<template lang="pug">
div.b-contact(:data-index='dataIndex' ref='draggable' draggable='true')
  b.b-contact__label=`{{ item.type }}:`
  div.b-contact__text-block
    font-awesome-icon.b-contact__icon(:icon="item.shape.icon")
    a.b-contact__text(v-if="item.shape.isLink" :href="item.link")=`{{ item.text }}`
    p.b-contact__text(v-else)=`{{ item.text }}`
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Contact } from '../../ts/models/contact'

defineProps<{
  item: Contact
  dataIndex: number
}>()
const draggable = ref<HTMLDivElement|null>(null)

defineExpose({
  draggable
})
</script>
