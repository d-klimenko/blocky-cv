<template lang="pug">
div.b-form
  p.b-form__label='Color Scheme:'
  select.b-form__select.b-form__select--themepicker(v-model="settings.theme")
    option(disabled=true value="")='Select a theme'
    option(v-for="theme in defaultThemes" :value="theme.value")=`{{ theme.label }}`
div.b-form
  p.b-form__label='Document Font:'
  select.b-form__select.b-form__select--themepicker(v-model="settings.font.family")
    option(disabled=true value="")='Select a font'
    option(v-for="font in defaultFonts" :value="font")=`{{ font }}`
div.b-form
  p.b-form__label='Font Size:'
  div.b-form__radio-group
    template(v-for="size in defaultFontSizes")
      input(:id="size.id" class="b-form__radio" type="radio" :value="size.value" v-model="settings.font.size")
      label(:for="size.id" :style='"font-size: " + size.value')=`{{ size.label }}`
div.b-form
  p.b-form__label='Sidebar Position:'
  div.b-form__radio-group
    input#sidebar-pos-left.b-form__radio(type="radio" value="left" v-model="settings.sidebar.position")
    label(for="sidebar-pos-left")='Left'
    input#sidebar-pos-right.b-form__radio(type="radio" value="right" v-model="settings.sidebar.position")
    label(for="sidebar-pos-right")='Right'
div.b-form
  p.b-form__label='Sidebar Width:'
  div.b-form__radio-group
    input#sidebar-sm.b-form__radio(type="radio" value="30%" v-model="settings.sidebar.width")
    label(for="sidebar-sm")='Smaller'
    input#sidebar-md.b-form__radio(type="radio" value="35%" v-model="settings.sidebar.width")
    label(for="sidebar-md")='Regular'
    input#sidebar-lg.b-form__radio(type="radio" value="40%" v-model="settings.sidebar.width")
    label(for="sidebar-lg")='Larger'
div.b-form
  p.b-form__label='Field Controls:'
  div.b-form__radio-group
    input#controls-on.b-form__radio(type="radio" value="inline-block" v-model="settings.controls")
    label(for="controls-on")='Show'
    input#controls-off.b-form__radio(type="radio" value="none" v-model="settings.controls")
    label(for="controls-off")='Hide'
control-buttons(@cancel="revert()" @save="save()" cancel-text='Revert')
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type Settings } from '../../ts/types'
import ControlButtons from './ControlButtons.vue'
import { useSidebarStore } from '../../ts/stores/sidebar.store'
import { useSettingsStore } from '../../ts/stores/settings.store'
import { copyObject, saveSettingsState } from '../../ts/stores/functions'
import { defaultFonts, defaultFontSizes, defaultThemes } from '../../ts/stores/defaults'

const store = useSettingsStore()
const menu = useSidebarStore()
const settings = computed({
  get: () => store.$state,
  set: (newSettings: Settings) => store.$patch(newSettings)
})

const initial: Settings = copyObject(store.$state)
const revert = () => {
  menu.toggle()
  store.$patch(initial)
}
const save = () => {
  menu.toggle()
  saveSettingsState(store)
}
</script>
