<template lang="pug">
div.b-form.b-form--contact(v-for='(contact, index) in store.contacts' :key="index")
  p.b-form__label=`{{ index + 1 }}.`
  font-awesome-icon.b-form__icon(:icon="contact.shape.icon")
  select.b-form__select(:value="contact.type" @change="changeType(index, $event)")
    option(v-for='(shape, index) in shapes' :key="index" :value="shape[0]")=`{{ shape[0] }}`
  input.b-form__input.b-form__input--sm(type='text' v-model="contact.value")
add-remove-buttons(@add='store.addContact()' @remove='store.removeContact()')
control-buttons(@cancel="revert()" @save="save()" cancel-text='Revert')
</template>

<script setup lang="ts">
import { copyObject, savePageState } from '../../ts/stores/functions'
import { useSidebarStore } from '../../ts/stores/sidebar.store'
import { usePageStore } from '../../ts/stores/page.store'
import ControlButtons from '../Forms/ControlButtons.vue'
import AddRemoveButtons from '../Forms/AddRemoveButtons.vue'
import { Contact, ContactType, contactShapes } from '../../ts/models/contact'

const store = usePageStore()
const menu = useSidebarStore()

const shapes = contactShapes
const initial = {
  contacts: copyObject(store.contacts) as Contact[]
}

const revert = () => {
  menu.toggle()
  store.$patch(initial)
}
const save = () => {
  menu.toggle()
  savePageState(store)
}
const changeType = (index: number, event: Event) => {
  const target = event.target as HTMLSelectElement
  store.changeContactType(index, target.value as ContactType)
}

</script>
