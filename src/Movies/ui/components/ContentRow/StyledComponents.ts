import styled from 'styled-components'

export const RowWrapper = styled.section`
  margin: 1.5rem 0;
`

export const RowTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.75rem 2rem;
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
  background: #1a1a1a;
  animation: pulse 1.4s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.9; }
  }
`

export const EmptyMessage = styled.p`
  color: #666;
  font-size: 0.875rem;
  margin-left: 2rem;
`