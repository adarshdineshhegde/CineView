import { z } from 'zod'

export const SUPPORTED_LOCALES = ['en', 'es'] as const
export const SUPPORTED_REGIONS = ['US', 'IN', 'ES', 'GB'] as const
export const THEMES = ['light', 'dark'] as const

export type Locale = (typeof SUPPORTED_LOCALES)[number]
export type Region = (typeof SUPPORTED_REGIONS)[number]
export type Theme = (typeof THEMES)[number]

export const persistedPreferencesSchema = z.object({
  locale: z.enum(SUPPORTED_LOCALES),
  region: z.enum(SUPPORTED_REGIONS),
  theme: z.enum(THEMES),
})

export type PersistedPreferences = z.infer<typeof persistedPreferencesSchema>