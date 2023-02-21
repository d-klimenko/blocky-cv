<template lang="pug">
div.b-section.b-section--main
  div.b-section__header.b-section__header--main
    h3.b-section__title.b-section__title--main="Education"
    div.b-button-group
      button.b-button.b-button--add(@click='store.addEducation()')
        font-awesome-icon.b-button__icon(icon="fas fa-plus")
  drag-drop-list-wrapper(:render-as='EducationBlock' list-key='education' v-model='store.education')
</template>

<script setup lang="ts">
import EducationBlock from './EducationBlock.vue'
import DragDropListWrapper from '../DragDropListWrapper.vue'
import { usePageStore } from '../../ts/stores/page.store'
const store = usePageStore()
</script>
