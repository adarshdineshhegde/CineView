import { makeAutoObservable } from 'mobx'
import type { Preferences, Theme, Locale, Region } from '../../../core/types/Preferences.types'
import { DEFAULT_PREFERENCES } from '../../../core/constants/Preferences.constants'
import { LOCAL_STORAGE_KEYS } from '@/Common'

export class PreferencesStore {
  preferences: Preferences = { ...DEFAULT_PREFERENCES }

  constructor() {
    makeAutoObservable(this)
    this.restore()
    this.applyTheme()
  }

  get theme(): Theme {
    return this.preferences.theme
  }

  get locale(): Locale {
    return this.preferences.locale
  }

  get region(): Region {
    return this.preferences.region
  }

  setTheme(theme: Theme): void {
    this.preferences.theme = theme
    this.persist()
    this.applyTheme()
  }

  setLocale(locale: Locale): void {
    this.preferences.locale = locale
    this.persist()
  }

  setRegion(region: Region): void {
    this.preferences.region = region
    this.persist()
  }

  private applyTheme(): void {
    const root = document.documentElement
    if (this.preferences.theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  private persist(): void {
    localStorage.setItem(LOCAL_STORAGE_KEYS.PREFERENCES, JSON.stringify(this.preferences))
  }

  private restore(): void {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.PREFERENCES)
      if (!raw) {
        // Default to OS preference on first load
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        this.preferences.theme = prefersDark ? 'dark' : 'light'
        return
      }
      this.preferences = { ...DEFAULT_PREFERENCES, ...(JSON.parse(raw) as Partial<Preferences>) }
    } catch {
      // corrupted storage — use defaults
    }
  }
}
