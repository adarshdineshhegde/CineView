export interface Movie {
  id: number
  title: string
  overview: string
  posterPath: string | null
  backdropPath: string | null
  releaseDate: string
  voteAverage: number
  voteCount: number
  genreIds: number[]
  adult: boolean
  originalLanguage: string
  popularity: number
}

export interface Genre {
  id: number
  name: string
}

export interface MovieListResponse {
  page: number
  results: Movie[]
  totalPages: number
  totalResults: number
}

export type MovieStatus = 'idle' | 'loading' | 'success' | 'error'
