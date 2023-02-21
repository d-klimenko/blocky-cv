/*
* Repeatables are used for the skills and interests sections.
*/

import { type Contact } from './models/contact'

interface Repeatable {
  title: string
  items: string[] | Array<[string, string]>
}

type RepeatableFlattened = [string, string[] | Array<[string, string]>]

/*
 * Experiences are used for the work and education sections.
 */

interface AbstractExperience {
  title: string
  place: string
  location: string
  period: string
}

interface WorkExperience extends AbstractExperience {
  bulletpoints: string[]
}

interface EducationExperience extends AbstractExperience {
  memo: string
}

type Jsonable = string | string[] | Array<[string, string]> | RepeatableFlattened[] | WorkExperience[] | EducationExperience[]

interface Settings {
  theme: string
  controls: string
  sidebar: {
    position: string
    width: string
  }
  font: {
    family: string
    size: string
  }
}

interface Menu {
  open: boolean
  title: string
  component: string | null
  index?: number
  data?: Record<string, unknown>
}

interface Page {
  title: string
  subtitle: string
  summary: string
  contacts: Contact[]
  experience: WorkExperience[]
  education: EducationExperience[]
  repeatables: Repeatable[]
}

/*
 * We use transformers to convert between the JSONable types stored in LocalStorage
 * and the types used in the application (Vuex store).
 */

abstract class Transformer {
  public abstract toJsonable (obj: unknown): Jsonable
  public abstract fromJsonable (obj: Jsonable): unknown
}

export {
  Transformer,
  type Page,
  type Menu,
  type Settings,
  type Jsonable,
  type Repeatable,
  type RepeatableFlattened,
  type AbstractExperience,
  type WorkExperience,
  type EducationExperience
}
