import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { getImageUrl } from '@/Api'
import type { Movie } from '@/Api'
import { useRootStore } from '@/data/providers'
import { Card, Poster, PosterFallback, Rating, Title, WatchlistButton } from './StyledComponents'

interface Props {
  movie: Movie
}

export const MovieCard = observer(({ movie }: Props) => {
  const navigate = useNavigate()
  const { watchlistStore } = useRootStore()
  const posterUrl = getImageUrl(movie.poster_path, 'poster')
  const inWatchlist = watchlistStore.isInWatchlist(movie.id, 'movie')

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    watchlistStore.toggle({
      id: movie.id,
      type: 'movie',
      title: movie.title,
      posterPath: movie.poster_path,
    })
  }

  return (
    <Card onClick={() => navigate(`/movies/${movie.id}`)}>
      <WatchlistButton
        aria-label={inWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
        onClick={handleToggle}
        $active={inWatchlist}
      >
        {inWatchlist ? '✓' : '＋'}
      </WatchlistButton>
      {posterUrl ? (
        <Poster src={posterUrl} alt={movie.title} loading="lazy" />
      ) : (
        <PosterFallback>🎬</PosterFallback>
      )}
      <Rating>★ {movie.vote_average.toFixed(1)}</Rating>
      <Title>{movie.title}</Title>
    </Card>
  )
})