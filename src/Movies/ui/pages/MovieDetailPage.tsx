import { useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { TmdbService, TmdbApiError } from '@/Api'
import { useAsync, SectionErrorBoundary, NotFoundState } from '@/Common'
import { TrailerModal } from '@/Common/ui/components/TrailerModal'
import { MovieHero } from '../components/MovieHero'
import { CastCarousel } from '../components/CastCarousel'
import { ContentRow } from '../components/ContentRow'

export const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const movieId = Number(id)
  const [trailerKey, setTrailerKey] = useState<string | null>(null)

  const detail = useAsync(
    () => TmdbService.getMovieDetail(movieId),
    [movieId],
    () => false
  )
  const videos = useAsync(() => TmdbService.getMovieVideos(movieId), [movieId])
  const cast = useAsync(() => TmdbService.getMovieCast(movieId), [movieId])
  const similar = useAsync(() => TmdbService.getSimilarMovies(movieId), [movieId])

  const handlePlayTrailer = useCallback(() => {
    const trailer = (videos.data ?? []).find((v) => v.type === 'Trailer' && v.official) ?? videos.data?.[0]
    if (trailer) setTrailerKey(trailer.key)
  }, [videos.data])

  if (detail.status === 'error' && detail.errorCode === 'NOT_FOUND') {
    return <NotFoundState message="We couldn't find that movie." />
  }

  if (detail.status === 'loading' || detail.status === 'idle') {
    return <div data-testid="movie-detail-page">Loading…</div>
  }

  if (detail.status === 'error' || !detail.data) {
    return <NotFoundState message="Something went wrong loading this movie." />
  }

  return (
    <div data-testid="movie-detail-page">
      <MovieHero movie={detail.data} onPlayTrailer={handlePlayTrailer} />

      <SectionErrorBoundary fallbackLabel="Cast">
        {cast.status === 'success' && <CastCarousel cast={cast.data ?? []} />}
      </SectionErrorBoundary>

      <SectionErrorBoundary fallbackLabel="Similar movies">
        <ContentRow title="Similar Movies" items={similar.data ?? []} status={similar.status} />
      </SectionErrorBoundary>

      <TrailerModal videoKey={trailerKey} onClose={() => setTrailerKey(null)} />
    </div>
  )
}