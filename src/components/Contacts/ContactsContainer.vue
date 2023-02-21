<template lang="pug">
div.b-section.b-section--sidebar
  div.b-section__header.b-section__header--sidebar
    h3.b-section__title.b-section__title--sidebar="Contacts"
    div.b-button-group
      button.b-button.b-button--sidebar(@click='editContacts()')
        font-awesome-icon.b-button__icon(icon="fas fa-edit")
  drag-drop-list-wrapper(:render-as='ContactsBlock' list-key='contacts' v-model='store.contacts')
</template>

<script setup lang="ts">
import ContactsBlock from './ContactsBlock.vue'
import DragDropListWrapper from '../DragDropListWrapper.vue'
import { usePageStore } from '../../ts/stores/page.store'
import { useSidebarStore } from '../../ts/stores/sidebar.store'

const store = usePageStore()
const menu = useSidebarStore()

const editContacts: VoidFunction = () => {
  menu.toggle()
  menu.$patch({ title: 'Edit Contacts', component: 'ContactsForm' })
}
</script>
