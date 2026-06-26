import { useNavigate } from 'react-router-dom'
import { getImageUrl } from '@/Api'
import type { SearchResult } from '@/Api'
import { Wrapper, Title, List, Item, Thumb, ThumbFallback, Name, Sub } from './StyledComponents'

interface Props {
  title: string
  items: SearchResult[]
}

const getThumbAndPath = (item: SearchResult) => {
  if (item.media_type === 'movie') {
    return { path: item.poster_path, route: `/movies/${item.id}`, name: item.title, sub: item.release_date }
  }
  if (item.media_type === 'tv') {
    return { path: item.poster_path, route: `/tv/${item.id}`, name: item.name, sub: item.first_air_date }
  }
  return { path: item.profile_path, route: null, name: item.name, sub: item.known_for_department }
}

export const SearchResultGroup = ({ title, items }: Props) => {
  const navigate = useNavigate()
  if (items.length === 0) return null

  return (
    <Wrapper>
      <Title>{title}</Title>
      <List>
        {items.map((item) => {
          const { path, route, name, sub } = getThumbAndPath(item)
          const thumbUrl = getImageUrl(path, 'poster')
          return (
            <Item key={`${item.media_type}-${item.id}`} onClick={() => route && navigate(route)}>
              {thumbUrl ? <Thumb src={thumbUrl} alt={name} /> : <ThumbFallback>🎬</ThumbFallback>}
              <div>
                <Name>{name}</Name>
                <Sub>{sub}</Sub>
              </div>
            </Item>
          )
        })}
      </List>
    </Wrapper>
  )
}