import { defineStore } from 'pinia'
import { type Menu } from '../types'

export const useSidebarStore = defineStore('sidebar', {
  state: (): Menu => {
    return {
      open: false,
      title: '',
      component: null,
      index: undefined,
      data: undefined
    }
  },
  actions: {
    toggle (): void {
      this.open = !this.open
      if (!this.open) {
        this.$reset()
      }
    }
  }
})
