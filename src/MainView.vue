<template lang="pug">
div(:class="'b-wrapper ' + theme")
  side-bar
  div.b-container
    div.b-column.b-sidebar
      h1.b-title=`{{ page.title }}`
      p.b-subtitle=`{{ page.subtitle }}`
      contacts-container
      repeatables-container(v-for="key in repeatableKeys" :key="key" :store-key='Number(key)')
      div.b-button-group
        button.b-button.b-button--sidebar(@click='page.addRepeatable()')
          font-awesome-icon.b-button__icon(icon="fas fa-plus")
    div.b-column.b-main
      p.b-summary=`{{ page.summary }}`
      div.b-button-group
        button.b-button.b-button--summary(@click='editHeader()')
          font-awesome-icon.b-button__icon(icon="fas fa-edit")
      experience-container
      education-container
    side-buttons
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import ExperienceContainer from './components/Experience/ExperienceContainer.vue'
import RepeatablesContainer from './components/Repeatables/RepeatablesContainer.vue'
import ContactsContainer from './components/Contacts/ContactsContainer.vue'
import EducationContainer from './components/Education/EducationContainer.vue'
import SideButtons from './components/SideButtons.vue'
import SideBar from './components/SideBar.vue'
import { getPageHeight } from './ts/viewport'
import { loadPageState, loadSettingsState, savePageState } from './ts/stores/functions'
import { useSettingsStore } from './ts/stores/settings.store'
import { useSidebarStore } from './ts/stores/sidebar.store'
import { usePageStore } from './ts/stores/page.store'

const settings = useSettingsStore()
const menu = useSidebarStore()
const page = usePageStore()

const theme = computed(() => settings.theme)
const repeatableKeys = computed(() => Object.keys(page.repeatables))
const setPageHeight = () => {
  document.documentElement.style.setProperty('--base-print-height', getPageHeight() + 'px')
}
settings.$subscribe((_, state) => {
  document.documentElement.style.setProperty('--base-font-size', state.font.size)
  document.documentElement.style.setProperty('--base-font-family', state.font.family)
  document.documentElement.style.setProperty('--base-col-direction', state.sidebar.position === 'right' ? 'row-reverse' : 'row')
  document.documentElement.style.setProperty('--base-sidebar-width', state.sidebar.width)
  document.documentElement.style.setProperty('--base-show-controls', state.controls)
})
page.$subscribe(() => {
  savePageState(page)
  setPageHeight()
})

onMounted(() => {
  setPageHeight()
})
loadSettingsState(settings)
loadPageState(page)

const editHeader: VoidFunction = () => {
  menu.toggle()
  menu.$patch({ title: 'Edit Header', component: 'HeaderForm' })
}

</script>
