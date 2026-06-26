import type { Movie } from '@/Api'
import { getImageUrl } from '@/Api'
import { Wrapper, Backdrop, Gradient, Content, Title, Rating, TrailerButton } from './StyledComponents'

interface Props {
  movie: Movie
  onPlayTrailer: () => void
}

export const HeroBanner = ({ movie, onPlayTrailer }: Props) => {
  const backdropUrl = getImageUrl(movie.backdrop_path, 'backdrop')

  return (
    <Wrapper>
      {backdropUrl && <Backdrop src={backdropUrl} alt="" />}
      <Gradient />
      <Content>
        <Title>{movie.title}</Title>
        <Rating>★ {movie.vote_average.toFixed(1)}</Rating>
        <TrailerButton onClick={onPlayTrailer}>▶ Play Trailer</TrailerButton>
      </Content>
    </Wrapper>
  )
}