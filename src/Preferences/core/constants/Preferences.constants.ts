import type { Preferences } from '../types/Preferences.types'

export const DEFAULT_PREFERENCES: Preferences = {
  theme: 'dark',
  locale: 'en-US',
  region: 'US',
} as const

export const SUPPORTED_LOCALES = ['en-US', 'hi-IN'] as const

export const SUPPORTED_REGIONS = ['US', 'IN', 'GB', 'AU'] as const
