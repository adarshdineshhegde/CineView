import styled from 'styled-components'

export const RowWrapper = styled.section`
  margin: 1.5rem 0;
`

export const RowTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.75rem 2rem;
  text-transform: capitalize;
`

export const ScrollArea = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 0 2rem 0.5rem;
  scrollbar-width: thin;
`

export const SkeletonCard = styled.div`
  width: 160px;
  aspect-ratio: 2 / 3;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--bg-secondary);
  animation: pulse 1.4s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.9; }
  }
`

export const EmptyMessage = styled.p`
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-left: 2rem;
`