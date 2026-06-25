export type Theme = 'light' | 'dark'

export type Locale = 'en-US' | 'hi-IN'

export type Region = 'US' | 'IN' | 'GB' | 'AU'

export interface Preferences {
  theme: Theme
  locale: Locale
  region: Region
}
