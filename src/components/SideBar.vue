<template lang="pug">
div.b-sidebar-menu(:class="{ 'b-sidebar-menu--open': settings.open }")
  h1.b-sidebar-menu__title=`{{settings.title}}`
  component(:is="settings.component" v-bind="{...props}")
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSidebarStore } from '../ts/stores/sidebar.store'

const store = useSidebarStore()
const settings = computed(() => store.$state)
const props = computed(() => {
  const res: Record<string, unknown> = {}
  Object.entries({
    key: settings.value.index,
    index: settings.value.index,
    data: settings.value.data
  }).forEach(([key, value]) => {
    if (value !== undefined) {
      res[key] = value
    }
  })
  return res
})
</script>
