import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
`

export const Option = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  background: ${(p) => (p.$active ? '#e50914' : 'var(--bg-secondary)')};
  color: ${(p) => (p.$active ? '#ffffff' : 'var(--text-primary)')};
`