import ExperienceForm from './components/Experience/ExperienceForm.vue'
import RepeatableForm from './components/Repeatables/RepeatableForm.vue'
import EducationForm from './components/Education/EducationForm.vue'
import ConfirmPopup from './components/Forms/ConfirmPopup.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ContactsForm from './components/Contacts/ContactsForm.vue'
import SettingsForm from './components/Forms/SettingsForm.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import HeaderForm from './components/Forms/HeaderForm.vue'
import { registerIcons } from './ts/icons'
import MainView from './MainView.vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

registerIcons(library)
const app = createApp(MainView)
const pinia = createPinia()

app
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .component('RepeatableForm', RepeatableForm)
  .component('ExperienceForm', ExperienceForm)
  .component('EducationForm', EducationForm)
  .component('SettingsForm', SettingsForm)
  .component('ContactsForm', ContactsForm)
  .component('ConfirmPopup', ConfirmPopup)
  .component('HeaderForm', HeaderForm)
  .use(pinia)
  .mount('#app')
