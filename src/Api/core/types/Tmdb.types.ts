import { z } from 'zod'

export const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
})

export const movieSummarySchema = z.object({
  id: z.number(),
  title: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  vote_average: z.number(),
  release_date: z.string().optional().default(''),
  genre_ids: z.array(z.number()),
  overview: z.string().optional().default(''),
})

export const movieListResponseSchema = z.object({
  page: z.number(),
  results: z.array(movieSummarySchema),
  total_pages: z.number(),
})

export const movieDetailSchema = z.object({
  id: z.number(),
  title: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  vote_average: z.number(),
  release_date: z.string().optional().default(''),
  overview: z.string().optional().default(''),
  runtime: z.number().nullable(),
  genres: z.array(genreSchema),
  tagline: z.string().nullable(),
})

export const videoSchema = z.object({
  key: z.string(),
  site: z.string(),
  type: z.string(),
  official: z.boolean(),
  name: z.string(),
})

export const videoListResponseSchema = z.object({
  results: z.array(videoSchema),
})

export const castMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  character: z.string(),
  profile_path: z.string().nullable(),
})

export const creditsResponseSchema = z.object({
  cast: z.array(castMemberSchema),
})

export const tvShowSummarySchema = z.object({
  id: z.number(),
  name: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  vote_average: z.number(),
  first_air_date: z.string().optional().default(''),
  genre_ids: z.array(z.number()),
})

export const seasonSummarySchema = z.object({
  id: z.number(),
  season_number: z.number(),
  name: z.string(),
  episode_count: z.number(),
  poster_path: z.string().nullable(),
})

export const tvShowDetailSchema = z.object({
  id: z.number(),
  name: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  vote_average: z.number(),
  first_air_date: z.string().optional().default(''),
  genres: z.array(genreSchema),
  seasons: z.array(seasonSummarySchema),
  overview: z.string().optional().default(''),
})

export const episodeSchema = z.object({
  id: z.number(),
  episode_number: z.number(),
  name: z.string(),
  overview: z.string().optional().default(''),
  air_date: z.string().nullable(),
  still_path: z.string().nullable(),
})

export const seasonDetailSchema = z.object({
  id: z.number(),
  season_number: z.number(),
  name: z.string(),
  episodes: z.array(episodeSchema),
})

export const personSchema = z.object({
  id: z.number(),
  name: z.string(),
  known_for_department: z.string().optional().default(''),
  profile_path: z.string().nullable(),
})

export const searchMovieResultSchema = movieSummarySchema.extend({
  media_type: z.literal('movie'),
})

export const searchTvResultSchema = tvShowSummarySchema.extend({
  media_type: z.literal('tv'),
})

export const searchPersonResultSchema = personSchema.extend({
  media_type: z.literal('person'),
})

export const multiSearchResultSchema = z.discriminatedUnion('media_type', [
  searchMovieResultSchema,
  searchTvResultSchema,
  searchPersonResultSchema,
])

export const multiSearchResponseSchema = z.object({
  results: z.array(multiSearchResultSchema),
})

export type Genre = z.infer<typeof genreSchema>
export type Movie = z.infer<typeof movieSummarySchema>
export type MovieDetail = z.infer<typeof movieDetailSchema>
export type Video = z.infer<typeof videoSchema>
export type CastMember = z.infer<typeof castMemberSchema>
export type TVShow = z.infer<typeof tvShowSummarySchema>
export type TVShowDetail = z.infer<typeof tvShowDetailSchema>
export type SeasonSummary = z.infer<typeof seasonSummarySchema>
export type SeasonDetail = z.infer<typeof seasonDetailSchema>
export type Episode = z.infer<typeof episodeSchema>
export type SearchResult = z.infer<typeof multiSearchResultSchema>