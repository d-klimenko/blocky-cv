/*
 * Contacts are used for the contact section. They differ by type, which
 * determines the icon and the way the link/line is formatted.
 */

enum ContactType {
  Location = 'location',
  Email = 'email',
  Phone = 'phone',
  Website = 'website',
  LinkedIn = 'linkedin',
  GitHub = 'github',
  GoogleChat = 'googlechat',
  Telegram = 'telegram',
  Twitter = 'twitter',
  Skype = 'skype',
}

type ContactShapeFlattened = [ContactType, boolean, string | null, null | ((val: string) => string), string]

interface ContactShape {
  type: ContactType
  isLink: boolean
  prefix: string | null
  format?: null | ((val: string) => string)
  icon: string
}

const contactShapes: ContactShapeFlattened[] = [
  [ContactType.Twitter, true, 'https://twitter.com/', (val: string) => '@' + val, 'fab fa-twitter'],
  [ContactType.Skype, true, 'skype:', null, 'fab fa-skype'],
  [ContactType.Email, true, 'mailto:', null, 'fas fa-envelope'],
  [ContactType.Phone, true, 'tel:', null, 'fas fa-phone'],
  [ContactType.Website, true, null, null, 'fas fa-globe'],
  [ContactType.LinkedIn, true, 'https://www.linkedin.com/in/', null, 'fab fa-linkedin'],
  [ContactType.GitHub, true, 'https://github.com/', null, 'fab fa-github'],
  [ContactType.GoogleChat, true, 'https://chat.google.com/', null, 'fab fa-google'],
  [ContactType.Telegram, true, 'https://t.me/', (val: string) => '@' + val, 'fab fa-telegram'],
  [ContactType.Location, false, null, null, 'fas fa-map-pin']
]

const contactDefinitions: Record<string, ContactShape> = {}
for (const [type, isLink, prefix, format, icon] of contactShapes) {
  contactDefinitions[type] = { type, isLink, prefix, format, icon }
}

class Contact {
  shape: ContactShape
  value: string

  constructor (shape: ContactShape, value: string) {
    this.shape = shape
    this.value = value
  }

  get type (): string {
    return this.shape.type
  }

  get link (): string {
    return (this.shape.prefix !== null) ? this.shape.prefix + this.value : this.value
  }

  get text (): string {
    return (this.shape.format != null) ? this.shape.format(this.value) : this.value
  }
}

export {
  Contact,
  ContactType,
  contactShapes,
  contactDefinitions,
  type ContactShape,
  type ContactShapeFlattened
}
