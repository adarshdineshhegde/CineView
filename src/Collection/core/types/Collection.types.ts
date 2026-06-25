export type WatchlistStatus = 'want_to_watch' | 'watching' | 'completed'

export type MediaType = 'movie' | 'tv'

export interface MediaSnapshot {
  id: number
  type: MediaType
  title: string
  posterPath: string | null
}

export interface WatchlistEntry {
  uuid: string
  media: MediaSnapshot
  status: WatchlistStatus
  note: string
  addedAt: number
  updatedAt: number
}

export interface CustomList {
  uuid: string
  name: string
  description: string
  items: MediaSnapshot[]
  createdAt: number
  updatedAt: number
}

export type CollectionStatus = 'idle' | 'loading' | 'success' | 'error'
