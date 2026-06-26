import { getImageUrl } from '@/Api'
import type { Episode } from '@/Api'
import { Wrapper, Still, StillFallback, Content, TopRow, Name, AirDate, Checkbox, Overview } from './StyledComponents'

interface Props {
  episode: Episode
}

export const EpisodeListItem = ({ episode }: Props) => {
  const stillUrl = getImageUrl(episode.still_path, 'still')

  return (
    <Wrapper>
      {stillUrl ? <Still src={stillUrl} alt={episode.name} /> : <StillFallback>🎞️</StillFallback>}
      <Content>
        <TopRow>
          <Name>{episode.episode_number}. {episode.name}</Name>
          <Checkbox type="checkbox" aria-label="Mark as watched" disabled />
        </TopRow>
        {episode.air_date && <AirDate>{episode.air_date}</AirDate>}
        <Overview>{episode.overview}</Overview>
      </Content>
    </Wrapper>
  )
}