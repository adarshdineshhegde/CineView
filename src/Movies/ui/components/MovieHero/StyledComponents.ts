import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  min-height: 320px;
  overflow: hidden;
`

export const Backdrop = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Gradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--bg-primary) 0%, rgba(15, 15, 15, 0.3) 60%, rgba(15, 15, 15, 0.7) 100%);
`

export const Content = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
`

export const Tagline = styled.p`
  color: var(--text-secondary);
  font-style: italic;
  margin: 0;
`

export const MetaRow = styled.div`
  display: flex;
  gap: 1rem;
  color: #f5c518;
  font-size: 0.875rem;

  span:nth-child(2), span:nth-child(3), span:nth-child(4) {
    color: var(--text-secondary);
  }
`

export const TrailerButton = styled.button`
  padding: 0.625rem 1.5rem;
  background: #ffffff;
  color: #0f0f0f;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }
`
export const WatchlistButton = styled.button<{ $active?: boolean }>`
  padding: 0.625rem 1.5rem;
  background: ${(p) => (p.$active ? '#e50914' : 'rgba(255,255,255,0.15)')};
  color: #ffffff;
  border: 1px solid ${(p) => (p.$active ? '#e50914' : 'rgba(255,255,255,0.3)')};
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: ${(p) => (p.$active ? '#c40812' : 'rgba(255,255,255,0.25)')};
  }
`