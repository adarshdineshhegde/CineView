import { useState, useCallback } from 'react'
import { TmdbService } from '@/Api'
import type { Movie } from '@/Api'
import { useAsync, SectionErrorBoundary } from '@/Common'
import { TrailerModal } from '@/Common/ui/components/TrailerModal'
import { HeroBanner } from '../components/HeroBanner'
import { ContentRow } from '../components/ContentRow'
import { GenreFilter } from '../components/GenreFilter'
import { TmdbService as Service } from '@/Api'
import { useTranslation } from 'react-i18next'

const filterByGenre = (items: Movie[], genreId: number | null) =>
  genreId === null ? items : items.filter((m) => m.genre_ids.includes(genreId))

export const HomePage = () => {
  const { t } = useTranslation('movies')
  const [activeGenreId, setActiveGenreId] = useState<number | null>(null)
  const [trailerKey, setTrailerKey] = useState<string | null>(null)

  const trending = useAsync(() => TmdbService.getTrendingMovies(), [])
  const popular = useAsync(() => TmdbService.getPopularMovies(), [])
  const topRated = useAsync(() => TmdbService.getTopRatedMovies(), [])
  const upcoming = useAsync(() => TmdbService.getUpcomingMovies(), [])
  const genres = useAsync(() => TmdbService.getGenres(), [])

  const heroMovie = trending.data?.[0] ?? null

  const handlePlayTrailer = useCallback(async () => {
    if (!heroMovie) return
    const videos = await Service.getMovieVideos(heroMovie.id)
    const trailer = videos.find((v) => v.type === 'Trailer' && v.official) ?? videos[0]
    if (trailer) setTrailerKey(trailer.key)
  }, [heroMovie])

  return (
    <div data-testid="home-page">
      {heroMovie && <HeroBanner movie={heroMovie} onPlayTrailer={handlePlayTrailer} />}

      {genres.status === 'success' && (
        <GenreFilter
          genres={genres.data ?? []}
          activeGenreId={activeGenreId}
          onSelect={setActiveGenreId}
        />
      )}

      <SectionErrorBoundary fallbackLabel={t('trending')}>
        <ContentRow
          title={t('trending')}
          items={filterByGenre(trending.data ?? [], activeGenreId)}
          status={trending.status}
        />
      </SectionErrorBoundary>

      <SectionErrorBoundary fallbackLabel={t('popular')}>
        <ContentRow
          title={t('popular')}
          items={filterByGenre(popular.data ?? [], activeGenreId)}
          status={popular.status}
        />
      </SectionErrorBoundary>

      <SectionErrorBoundary fallbackLabel={t('topRated')}>
        <ContentRow
          title={t('topRated')}
          items={filterByGenre(topRated.data ?? [], activeGenreId)}
          status={topRated.status}
        />
      </SectionErrorBoundary>

      <SectionErrorBoundary fallbackLabel={t('upcoming')}>
        <ContentRow
          title={t('upcoming')}
          items={filterByGenre(upcoming.data ?? [], activeGenreId)}
          status={upcoming.status}
        />
      </SectionErrorBoundary>

      <TrailerModal videoKey={trailerKey} onClose={() => setTrailerKey(null)} />
    </div>
  )
}