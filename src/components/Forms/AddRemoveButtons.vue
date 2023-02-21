<template lang="pug">
div.b-form__button-group.b-form__button-group--small
  button.b-form__button.b-form__button--small.b-form__button--secondary(@click='emit("remove")')
    font-awesome-icon.b-button__icon(icon="fas fa-trash")
    span=`{{removeText}}`
  button.b-form__button.b-form__button--small.b-form__button--primary(@click='emit("add")')
    font-awesome-icon.b-button__icon(icon="fas fa-plus")
    span=`{{addText}}`
</template>

<script setup lang="ts">
const emit = defineEmits(['remove', 'add'])
const props = defineProps({
  removeText: {
    type: String,
    default: () => 'Remove'
  },
  addText: {
    type: String,
    default: () => 'Add'
  }
})
</script>
