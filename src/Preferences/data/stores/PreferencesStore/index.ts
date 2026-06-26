import { makeAutoObservable } from 'mobx'
import i18n from 'src/i18n'
import { TmdbService } from '@/Api'

import {
  persistedPreferencesSchema,
  type Locale,
  type Region,
  type Theme,
} from '../../../core/types/Preferences.types'
import { PREFERENCES_STORAGE_KEY } from '../../../core/constants/Preferences.constants'
const getOsPreferredTheme = (): Theme =>
  window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const readPersisted = () => {
  try {
    const raw = localStorage.getItem(PREFERENCES_STORAGE_KEY)
    if (!raw) return null
    const parsed = persistedPreferencesSchema.safeParse(JSON.parse(raw))
    return parsed.success ? parsed.data : null
  } catch {
    return null
  }
}

export class PreferencesStore {
  locale: Locale = 'en'
  region: Region = 'US'
  theme: Theme = 'light'

  constructor() {
    makeAutoObservable(this)
    this.initialize()
  }

  private initialize() {
    const persisted = readPersisted()
    if (persisted) {
      this.locale = persisted.locale
      this.region = persisted.region
      this.theme = persisted.theme
    } else {
      this.theme = getOsPreferredTheme()
    }

    this.applyTheme()
    this.applyLocale()
    this.applyTmdbParams()
  }

  private persist() {
    localStorage.setItem(
      PREFERENCES_STORAGE_KEY,
      JSON.stringify({ locale: this.locale, region: this.region, theme: this.theme })
    )
  }

  private applyTheme() {
    document.documentElement.classList.toggle('dark', this.theme === 'dark')
  }

  private applyLocale() {
    i18n.changeLanguage(this.locale)
  }

  private applyTmdbParams() {
    TmdbService.setLanguage(this.locale)
    TmdbService.setRegion(this.region)
  }

  setLocale = (locale: Locale) => {
    this.locale = locale
    this.applyLocale()
    this.applyTmdbParams()
    this.persist()
  }

  setRegion = (region: Region) => {
    this.region = region
    this.applyTmdbParams()
    this.persist()
  }

  setTheme = (theme: Theme) => {
    this.theme = theme
    this.applyTheme()
    this.persist()
  }

  toggleTheme = () => {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark')
  }
}