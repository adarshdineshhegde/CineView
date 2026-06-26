import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0 2rem 1rem;
  scrollbar-width: thin;
`

export const Chip = styled.button<{ $active: boolean }>`
  flex-shrink: 0;
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  font-size: 0.8125rem;
  cursor: pointer;
  border: 1px solid ${(p) => (p.$active ? '#e50914' : '#3a3a3a')};
  background: ${(p) => (p.$active ? '#e50914' : 'transparent')};
  color: #ffffff;
  transition: border-color 0.15s, background 0.15s;
  white-space: nowrap;
`