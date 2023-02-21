<template lang="pug">
div.b-side-buttons
  button.b-side-buttons__button.b-side-buttons__button--print(@click='print()')
    font-awesome-icon.b-side-buttons__icon(icon="fas fa-print")
    span.b-side-buttons__tooltip Print
  button.b-side-buttons__button.b-side-buttons__button--settings(@click='settings()')
    font-awesome-icon.b-side-buttons__icon(icon="fas fa-cog")
    span.b-side-buttons__tooltip Settings
</template>

<script setup lang="ts">
import { useSidebarStore } from '../ts/stores/sidebar.store'

const menu = useSidebarStore()
const print: VoidFunction = () => window.print()
const settings: VoidFunction = () => {
  menu.toggle()
  menu.$patch({ title: 'Page Settings', component: 'SettingsForm' })
}
</script>
