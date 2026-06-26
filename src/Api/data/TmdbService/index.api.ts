import { z } from 'zod'
import { TmdbApiError } from '../../core/errors/TmdbApiError'
import { TMDB_API_KEY, TMDB_BASE_URL } from '../../core/constants/Tmdb.constants'
import {
  movieListResponseSchema,
  movieDetailSchema,
  videoListResponseSchema,
  creditsResponseSchema,
  tvShowDetailSchema,
  seasonDetailSchema,
  multiSearchResponseSchema,
  genreSchema,
} from '../../core/types/Tmdb.types'

const request = async (path: string, params: Record<string, string> = {}) => {
  const url = new URL(`${TMDB_BASE_URL}${path}`)
  url.searchParams.set('api_key', TMDB_API_KEY)
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))

  let response: Response
  try {
    response = await fetch(url.toString())
  } catch {
    throw new TmdbApiError('Network request failed', 'NETWORK')
  }

  if (response.status === 404) {
    throw new TmdbApiError('Resource not found', 'NOT_FOUND')
  }
  if (!response.ok) {
    throw new TmdbApiError(`TMDB request failed: ${response.status}`, 'UNKNOWN')
  }

  return response.json()
}

const validate = <T extends z.ZodTypeAny>(schema: T, data: unknown): z.infer<T> => {
  const result = schema.safeParse(data)
  if (!result.success) {
    throw new TmdbApiError(`Response validation failed: ${result.error.message}`, 'VALIDATION')
  }
  return result.data
}

export const TmdbService = {
  async getTrendingMovies() {
    const json = await request('/trending/movie/week')
    return validate(movieListResponseSchema, json).results
  },

  async getPopularMovies() {
    const json = await request('/movie/popular')
    return validate(movieListResponseSchema, json).results
  },

  async getTopRatedMovies() {
    const json = await request('/movie/top_rated')
    return validate(movieListResponseSchema, json).results
  },

  async getUpcomingMovies() {
    const json = await request('/movie/upcoming')
    return validate(movieListResponseSchema, json).results
  },

  async getGenres() {
    const json = await request('/genre/movie/list')
    const parsed = z.object({ genres: z.array(genreSchema) }).safeParse(json)
    if (!parsed.success) throw new TmdbApiError('Genre validation failed', 'VALIDATION')
    return parsed.data.genres
  },

  async getMovieDetail(id: number) {
    const json = await request(`/movie/${id}`)
    return validate(movieDetailSchema, json)
  },

  async getMovieVideos(id: number) {
    const json = await request(`/movie/${id}/videos`)
    return validate(videoListResponseSchema, json).results
  },

  async getMovieCast(id: number) {
    const json = await request(`/movie/${id}/credits`)
    return validate(creditsResponseSchema, json).cast
  },

  async getSimilarMovies(id: number) {
    const json = await request(`/movie/${id}/similar`)
    return validate(movieListResponseSchema, json).results
  },

  async getTVShowDetail(id: number) {
    const json = await request(`/tv/${id}`)
    return validate(tvShowDetailSchema, json)
  },

  async getSeasonDetail(showId: number, seasonNumber: number) {
    const json = await request(`/tv/${showId}/season/${seasonNumber}`)
    return validate(seasonDetailSchema, json)
  },

  async searchMulti(query: string) {
    const json = await request('/search/multi', { query })
    return validate(multiSearchResponseSchema, json).results
  },
}