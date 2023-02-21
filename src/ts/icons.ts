import { type Library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faLinkedin, faTelegram, faGoogle, faSkype } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faPhone,
  faMapPin,
  faGlobe,
  faPrint,
  faCog,
  faTrash,
  faEdit, faPlus
} from '@fortawesome/free-solid-svg-icons'

export const registerIcons = (library: Library): void => {
  library.add(
    faGithub, faTwitter, faLinkedin,
    faTelegram, faGoogle, faSkype,
    faEnvelope, faPhone, faMapPin, faPlus,
    faGlobe, faPrint, faCog, faEdit, faTrash
  )
}
