export const TV_ROUTES = {
  DETAIL: (id: number | string) => `/tv/${id}`,
  SEASON: (id: number | string, seasonNumber: number | string) =>
    `/tv/${id}/season/${seasonNumber}`,
} as const
