import { z } from 'zod'

export type WatchlistStatus = 'want_to_watch' | 'watching' | 'completed'
export type MediaType = 'movie' | 'tv'

export const mediaSnapshotSchema = z.object({
  id: z.number(),
  type: z.enum(['movie', 'tv']),
  title: z.string(),
  posterPath: z.string().nullable(),
})

export const watchlistEntrySchema = z.object({
  uuid: z.string(),
  media: mediaSnapshotSchema,
  status: z.enum(['want_to_watch', 'watching', 'completed']),
  note: z.string().max(300),
  addedAt: z.number(),
  updatedAt: z.number(),
})

export const watchlistStorageSchema = z.array(watchlistEntrySchema)

export type MediaSnapshot = z.infer<typeof mediaSnapshotSchema>
export type WatchlistEntry = z.infer<typeof watchlistEntrySchema>