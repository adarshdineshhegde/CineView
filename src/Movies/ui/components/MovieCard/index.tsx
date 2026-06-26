import { useNavigate } from 'react-router-dom'
import { getImageUrl } from '@/Api'
import type { Movie } from '@/Api'
import { Card, Poster, PosterFallback, Rating, Title, WatchlistButton } from './StyledComponents'

interface Props {
  movie: Movie
}

export const MovieCard = ({ movie }: Props) => {
  const navigate = useNavigate()
  const posterUrl = getImageUrl(movie.poster_path, 'poster')

  return (
    <Card onClick={() => navigate(`/movies/${movie.id}`)}>
      <WatchlistButton
        aria-label="Add to watchlist"
        onClick={(e) => e.stopPropagation()}
      >
        ＋
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
}