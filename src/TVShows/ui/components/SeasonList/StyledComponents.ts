import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  padding: 1.5rem 2rem;
`

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 1rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
`

export const SeasonCard = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active div:first-of-type {
    outline: 2px solid #e50914;
  }
`

export const Poster = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 8px;
`

export const PosterFallback = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 8px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`

export const SeasonName = styled.div`
  font-size: 0.8125rem;
  color: #ffffff;
  margin-top: 0.5rem;
`

export const EpisodeCount = styled.div`
  font-size: 0.75rem;
  color: #666;
`