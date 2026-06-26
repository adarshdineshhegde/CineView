import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TmdbService } from '@/Api'
import { useAsync, NotFoundState } from '@/Common'
import { EpisodeListItem } from '../components/EpisodeListItem'
import { Wrapper, ProgressBar } from './StyledComponents'

export const SeasonDetailPage = () => {
  const { id, seasonNumber } = useParams<{ id: string; seasonNumber: string }>()
  const showId = Number(id)
  const season = Number(seasonNumber)
  const { t } = useTranslation('tvshows')

  const detail = useAsync(
    () => TmdbService.getSeasonDetail(showId, season),
    [showId, season],
    () => false
  )

  if (detail.status === 'error' && detail.errorCode === 'NOT_FOUND') {
    return <NotFoundState message="We couldn't find that season." />
  }

  if (detail.status === 'loading' || detail.status === 'idle') {
    return <div data-testid="season-detail-page">Loading…</div>
  }

  if (detail.status === 'error' || !detail.data) {
    return <NotFoundState message="Something went wrong loading this season." />
  }

  return (
    <Wrapper data-testid="season-detail-page">
      <ProgressBar>
        {t('watchedProgress', {
          watched: 0,
          total: detail.data.episodes.length,
        })}{' '}
        — {t('trackingComingSoon')}
      </ProgressBar>
      {detail.data.episodes.map((episode) => (
        <EpisodeListItem key={episode.id} episode={episode} />
      ))}
    </Wrapper>
  )
}