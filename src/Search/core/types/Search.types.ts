export type SearchResultType = 'movie' | 'tv' | 'person'

export interface SearchResultItem {
  id: number
  mediaType: SearchResultType
  title: string
  posterPath: string | null
  overview: string
  releaseDate?: string
  firstAirDate?: string
}

export interface SearchResponse {
  page: number
  results: SearchResultItem[]
  totalPages: number
  totalResults: number
}

export type SearchStatus = 'idle' | 'loading' | 'success' | 'error'
