export const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL ?? 'https://api.themoviedb.org/3'
export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'
export const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY ?? ''

export const LOCAL_STORAGE_KEYS = {
  SESSION: 'cineview_session',
  PREFERENCES: 'cineview_preferences',
  COLLECTION: 'cineview_collection',
  RECENT_SEARCHES: 'cineview_recent_searches',
} as const
