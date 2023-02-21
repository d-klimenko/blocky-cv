import { type Store } from 'pinia'
import { type Jsonable, type Page, type Settings } from '../types'
import { DataTransformer } from '../models/transformers'

export function loadPageState (store: Store<'page', Page>): void {
  const page = localStorage.getItem('page')
  if (page !== null) {
    const decoded = JSON.parse(page)
    store.$patch((new DataTransformer()).fromJson(decoded))
  }
}

export function savePageState (store: Store<'page', Page>): void {
  localStorage.setItem(
    'page',
    JSON.stringify((new DataTransformer()).toJson(store.$state as unknown as Record<string, Jsonable>))
  )
}

export function loadSettingsState (store: Store<'settings', Settings>): void {
  const settings = localStorage.getItem('settings')
  if (settings !== null) {
    store.$patch(JSON.parse(settings))
  }
}

export function saveSettingsState (store: Store<'settings', Settings>): void {
  localStorage.setItem('settings', JSON.stringify(store.$state))
}

export function copyObject<T> (obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function trimSemicolon (str: string): string {
  return str
    .replace(/^;+/, '')
    .replace(/;+$/, '')
}
