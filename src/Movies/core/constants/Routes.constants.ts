export const MOVIE_ROUTES = {
  HOME: '/',
  DETAIL: (id: number | string) => `/movies/${id}`,
} as const
