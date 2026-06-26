import { z } from 'zod'

export const recentSearchesSchema = z.array(z.string())

export type RecentSearches = z.infer<typeof recentSearchesSchema>