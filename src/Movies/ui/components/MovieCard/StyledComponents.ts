import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  width: 160px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.15s;

  &:hover {
    transform: scale(1.05);
  }
`

export const Poster = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 8px;
  background: var(--bg-secondary);
`

export const PosterFallback = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 8px;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--border-color);
`

export const Rating = styled.div`
  font-size: 0.75rem;
  color: #f5c518;
  margin-top: 0.375rem;
`

export const Title = styled.div`
  font-size: 0.8125rem;
  color: var(--text-primary);
  margin-top: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const WatchlistButton = styled.button<{ $active?: boolean }>`
  position: absolute;
  top: 0.375rem;
  right: 0.375rem;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: ${(p) => (p.$active ? '#e50914' : 'rgba(0,0,0,0.6)')};
  color: #ffffff;
  font-size: 0.875rem;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;

  &:hover {
    background: #e50914;
  }
`

