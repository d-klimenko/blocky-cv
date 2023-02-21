<template lang="pug">
div.b-section.b-section--main
  div.b-section__header.b-section__header--main
    h3.b-section__title="Work Experience"
    div.b-button-group
      button.b-button.b-button--add(@click='store.addExperience()')
        font-awesome-icon.b-button__icon(icon="fas fa-plus")
  drag-drop-list-wrapper(:render-as='ExperienceBlock' list-key='experience' v-model='store.experience')
</template>

<script setup lang="ts">
import ExperienceBlock from './ExperienceBlock.vue'
import DragDropListWrapper from '../DragDropListWrapper.vue'
import { usePageStore } from '../../ts/stores/page.store'
const store = usePageStore()
</script>
