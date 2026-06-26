import { getImageUrl } from '@/Api'
import type { MovieDetail } from '@/Api'
import {
  Wrapper, Backdrop, Gradient, Content, Title, Tagline,
  MetaRow, TrailerButton, WatchlistButton,
} from './StyledComponents'

interface Props {
  movie: MovieDetail
  onPlayTrailer: () => void
}

export const MovieHero = ({ movie, onPlayTrailer }: Props) => {
  const backdropUrl = getImageUrl(movie.backdrop_path, 'backdrop')

  return (
    <Wrapper>
      {backdropUrl && <Backdrop src={backdropUrl} alt="" />}
      <Gradient />
      <Content>
        <Title>{movie.title}</Title>
        {movie.tagline && <Tagline>{movie.tagline}</Tagline>}
        <MetaRow>
          <span>★ {movie.vote_average.toFixed(1)}</span>
          {movie.runtime && <span>{movie.runtime} min</span>}
          {movie.release_date && <span>{movie.release_date.slice(0, 4)}</span>}
          <span>{movie.genres.map((g) => g.name).join(', ')}</span>
        </MetaRow>
        <p style={{ maxWidth: 600, color: '#ccc', fontSize: '0.9375rem' }}>{movie.overview}</p>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <TrailerButton onClick={onPlayTrailer}>▶ Play Trailer</TrailerButton>
          <WatchlistButton aria-label="Add to watchlist">＋ Watchlist</WatchlistButton>
        </div>
      </Content>
    </Wrapper>
  )
}