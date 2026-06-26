import { getImageUrl } from '@/Api'
import type { TVShowDetail } from '@/Api'
import { Wrapper, Backdrop, Gradient, Content, Title, MetaRow } from './StyledComponents'

interface Props {
  show: TVShowDetail
}

export const TVShowHero = ({ show }: Props) => {
  const backdropUrl = getImageUrl(show.backdrop_path, 'backdrop')

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
      </Content>
    </Wrapper>
  )
}