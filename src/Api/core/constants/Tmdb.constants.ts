export const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
export const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY as string
export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

export const TMDB_IMAGE_SIZES = {
  poster: 'w342',
  backdrop: 'w1280',
  profile: 'w185',
  still: 'w300',
} as const

export const getImageUrl = (
  path: string | null,
  size: keyof typeof TMDB_IMAGE_SIZES
) => (path ? `${TMDB_IMAGE_BASE_URL}/${TMDB_IMAGE_SIZES[size]}${path}` : null)