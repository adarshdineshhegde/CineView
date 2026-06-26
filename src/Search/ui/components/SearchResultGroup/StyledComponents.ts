import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: 0 2rem;
  margin-bottom: 1.5rem;
`

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.75rem;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: var(--bg-secondary);
  }
`

export const Thumb = styled.img`
  width: 40px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`

export const ThumbFallback = styled.div`
  width: 40px;
  height: 60px;
  border-radius: 4px;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Name = styled.div`
  font-size: 0.875rem;
  color: var(--text-primary);
`

export const Sub = styled.div`
  font-size: 0.75rem;
  color: var(--text-secondary);
`