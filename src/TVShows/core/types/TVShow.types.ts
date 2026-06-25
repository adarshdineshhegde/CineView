export interface TVShow {
  id: number
  name: string
  overview: string
  posterPath: string | null
  backdropPath: string | null
  firstAirDate: string
  voteAverage: number
  voteCount: number
  genreIds: number[]
  originCountry: string[]
  originalLanguage: string
  popularity: number
}

export interface Season {
  id: number
  name: string
  overview: string
  posterPath: string | null
  seasonNumber: number
  episodeCount: number
  airDate: string
}

export interface Episode {
  id: number
  name: string
  overview: string
  stillPath: string | null
  episodeNumber: number
  seasonNumber: number
  airDate: string
  runtime: number | null
}

export type TVShowStatus = 'idle' | 'loading' | 'success' | 'error'
