import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
`

export const Still = styled.img`
  width: 160px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
`

export const StillFallback = styled.div`
  width: 160px;
  aspect-ratio: 16 / 9;
  border-radius: 6px;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const Content = styled.div`
  flex: 1;
`

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Name = styled.div`
  font-size: 0.9375rem;
  color: var(--text-primary);
  font-weight: 500;
`

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: not-allowed;
  opacity: 0.5;
`

export const AirDate = styled.div`
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin: 0.25rem 0;
`

export const Overview = styled.p`
  font-size: 0.8125rem;
  color: #b3b3b3;
  margin: 0;
`