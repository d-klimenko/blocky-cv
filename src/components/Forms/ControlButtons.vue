<template lang="pug">
div.b-form__button-group
  button.b-form__button.b-form__button--secondary(@click='emit("cancel")')=`{{cancelText}}`
  button.b-form__button.b-form__button--primary(@click='emit("save")')=`{{saveText}}`
</template>

<script setup lang="ts">
const emit = defineEmits(['cancel', 'save'])
const props = defineProps({
  cancelText: {
    type: String,
    default: () => 'Cancel'
  },
  saveText: {
    type: String,
    default: () => 'Save'
  }
})
</script>
