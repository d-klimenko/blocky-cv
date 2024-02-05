import { WorkExperience } from "../types";
import { Contact, ContactType, contactDefinitions } from "../models/contact";

export const defaultFonts = [
  'PT Sans',
  'Roboto',
  'Helvetica',
  'Verdana',
  'Tahoma',
  'Arial'
]

export const defaultFontSizes = [
  { id: 'font-size-xs', value: '0.8rem', label: 'XS' },
  { id: 'font-size-sm', value: '0.9rem', label: 'S' },
  { id: 'font-size-md', value: '1rem', label: 'M' },
  { id: 'font-size-lg', value: '1.1rem', label: 'L' },
  { id: 'font-size-xl', value: '1.2rem', label: 'XL' }
]

export const defaultThemes = [
  { value: 'bluemoon-theme', label: 'Blue Moon' },
  { value: 'daybreak-theme', label: 'Daybreak' },
  { value: 'bubblegum-theme', label: 'Bubblegum' },
  { value: 'fuchsia-theme', label: 'Fuchsia' },
  { value: 'greentea-theme', label: 'Green Tea' },
  { value: 'solarized-theme', label: 'Solarized' },
  { value: 'contrast-theme', label: 'High Contrast' }
]

export const defaultExperience: WorkExperience = {
  title: 'New Experience',
  place: 'Sample Company',
  period: 'Current - Right Now',
  location: 'Sample Town, SC',
  bulletpoints: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  ]
}

export const defaultEducation = {
  title: 'New Education',
  place: 'Sample University',
  period: 'Current - Right Now',
  location: 'Sample Town, SC',
  memo: 'Sample Memo'
}

export const defaultRepeatable = {
  title: 'New Section',
  items: ['Item 1', 'Item 2', 'Item 3']
}

export const defaultPage = {
  title: 'John Doe',
  subtitle: 'Senior Frontend Developer',
  summary: 'Skillful and experienced Frontend Developer with a demonstrated history of working in the information technology and services industry. Skilled in JavaScript, React, Redux, TypeScript, and CSS. Strong engineering professional with a Bachelor of Science focused in Computer Science from Sample University.',
  contacts: [
    new Contact(contactDefinitions[ContactType.Location], '22002, Sample Town, SC'),
    new Contact(contactDefinitions[ContactType.Phone], '+1 555 555 5555'),
    new Contact(contactDefinitions[ContactType.GitHub], 'john-doe'),
  ],
  repeatables: [
    {
      title: 'Skills', items: [
        ['Frontend', 'JavaScript, React, Redux, TypeScript, CSS'],
        ['Backend', 'Node, Express, MongoDB, MySQL'],
        ['DevOps', 'Docker, Kubernetes, AWS, GCP'],
        ['Tools', 'Git, Jira, Confluence, Trello']
      ]
    },
    { title: 'Languages', items: ['English', 'Spanish', 'French'] },
    { title: 'Hobbies', items: ['Gaming', 'Reading', 'Traveling'] },
    { title: 'Interests', items: ['Technology', 'Music', 'Sports'] }
  ],
  experience: [
    { ...defaultExperience },
    { ...defaultExperience }
  ],
  education: [
    { ...defaultEducation }
  ]
}