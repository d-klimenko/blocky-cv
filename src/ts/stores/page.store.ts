import { defineStore } from 'pinia'
import { type Page } from '../types'
import { Contact, type ContactShape, ContactType, contactDefinitions } from '../models/contact'
import { defaultEducation, defaultExperience, defaultPage, defaultRepeatable } from "./defaults";

export const usePageStore = defineStore('page', {
  state: (): Page => {
    return defaultPage as Page
  },
  actions: {
    addContact() {
      const shape: ContactShape = contactDefinitions[ContactType.Location]
      const newContact = new Contact(shape, '22002, Sample Town, SC')
      this.contacts.push(newContact)
    },
    changeContactType(index: number, type: ContactType) {
      this.contacts[index].shape = contactDefinitions[type]
    },
    removeContact() {
      this.contacts.pop()
    },
    addRepeatable() {
      this.repeatables.push({ ...defaultRepeatable })
    },
    addExperience() {
      this.experience.splice(0, 0, { ...defaultExperience })
    },
    addEducation() {
      this.education.splice(0, 0, { ...defaultEducation })
    }
  }
})
