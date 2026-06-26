import { observer } from 'mobx-react-lite'
import { getImageUrl } from '@/Api'
import type { TVShowDetail } from '@/Api'
import { useRootStore } from '@/data/providers'
import { Wrapper, Backdrop, Gradient, Content, Title, MetaRow, WatchlistButton } from './StyledComponents'

interface Props {
  show: TVShowDetail
}

export const TVShowHero = observer(({ show }: Props) => {
  const { watchlistStore } = useRootStore()
  const backdropUrl = getImageUrl(show.backdrop_path, 'backdrop')
  const inWatchlist = watchlistStore.isInWatchlist(show.id, 'tv')

  const handleToggle = () => {
    watchlistStore.toggle({
      id: show.id,
      type: 'tv',
      title: show.name,
      posterPath: show.poster_path,
    })
  }

  return (
    <Wrapper>
      {backdropUrl && <Backdrop src={backdropUrl} alt="" />}
      <Gradient />
      <Content>
        <Title>{show.name}</Title>
        <MetaRow>
          <span>★ {show.vote_average.toFixed(1)}</span>
          {show.first_air_date && <span>{show.first_air_date.slice(0, 4)}</span>}
          <span>{show.genres.map((g) => g.name).join(', ')}</span>
        </MetaRow>
        <p style={{ maxWidth: 600, color: '#ccc', fontSize: '0.9375rem' }}>{show.overview}</p>
        <WatchlistButton onClick={handleToggle} $active={inWatchlist}>
          {inWatchlist ? '✓ In Watchlist' : '＋ Watchlist'}
        </WatchlistButton>
      </Content>
    </Wrapper>
  )
})