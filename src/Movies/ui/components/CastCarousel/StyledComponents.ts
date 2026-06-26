import styled from 'styled-components'

export const ScrollArea = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 0 2rem 0.5rem;
`

export const CastItem = styled.div`
  width: 110px;
  flex-shrink: 0;
  text-align: center;
`

export const Photo = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
`

export const PhotoFallback = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`

export const Name = styled.div`
  font-size: 0.8125rem;
  color: var(--text-primary);
  margin-top: 0.5rem;
`

export const Character = styled.div`
  font-size: 0.75rem;
  color: #666;
`