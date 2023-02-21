import { defineStore } from 'pinia'
import { type Settings } from '../types'

export const useSettingsStore = defineStore('settings', {
  state: (): Settings => {
    return {
      theme: 'bluemoon-theme',
      controls: 'none',
      sidebar: {
        position: 'left',
        width: '35%'
      },
      font: {
        family: 'PT Sans',
        size: '1rem'
      }
    }
  }
})
