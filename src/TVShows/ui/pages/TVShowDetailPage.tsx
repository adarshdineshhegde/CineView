import { useParams, Outlet } from 'react-router-dom'
import { TmdbService } from '@/Api'
import { useAsync, NotFoundState } from '@/Common'
import { TVShowHero } from '../components/TVShowHero'
import { SeasonList } from '../components/SeasonList'

export const TVShowDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const showId = Number(id)

  const detail = useAsync(
    () => TmdbService.getTVShowDetail(showId),
    [showId],
    () => false
  )

  if (detail.status === 'error' && detail.errorCode === 'NOT_FOUND') {
    return <NotFoundState message="We couldn't find that TV show." />
  }

  if (detail.status === 'loading' || detail.status === 'idle') {
    return <div data-testid="tvshow-detail-page">Loading…</div>
  }

  if (detail.status === 'error' || !detail.data) {
    return <NotFoundState message="Something went wrong loading this show." />
  }

  return (
    <div data-testid="tvshow-detail-page">
      <TVShowHero show={detail.data} />
      <SeasonList seasons={detail.data.seasons} showId={showId} />
      <Outlet />
    </div>
  )
}