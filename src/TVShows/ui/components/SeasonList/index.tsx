//import { NavLink } from 'react-router-dom'
import { getImageUrl } from '@/Api'
import type { SeasonSummary } from '@/Api'
import { Wrapper, Title, Grid, SeasonCard, Poster, PosterFallback, SeasonName, EpisodeCount } from './StyledComponents'

interface Props {
  seasons: SeasonSummary[]
  showId: number
}

export const SeasonList = ({ seasons, showId }: Props) => (
  <Wrapper>
    <Title>Seasons</Title>
    <Grid>
      {seasons.map((season) => {
        const posterUrl = getImageUrl(season.poster_path, 'poster')
        return (
          <SeasonCard
            key={season.id}
            to={`/tv/${showId}/season/${season.season_number}`}
          >
            {posterUrl ? <Poster src={posterUrl} alt={season.name} /> : <PosterFallback>📺</PosterFallback>}
            <SeasonName>{season.name}</SeasonName>
            <EpisodeCount>{season.episode_count} episodes</EpisodeCount>
          </SeasonCard>
        )
      })}
    </Grid>
  </Wrapper>
)