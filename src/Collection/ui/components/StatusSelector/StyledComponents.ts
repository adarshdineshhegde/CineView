import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
`

export const Option = styled.button<{ $active: boolean }>`
  padding: 0.3rem 0.75rem;
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: ${(p) => (p.$active ? '600' : '400')};
  background: ${(p) => (p.$active ? '#e50914' : 'var(--bg-secondary)')};
  color: ${(p) => (p.$active ? '#ffffff' : 'var(--text-secondary)')};
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;

  &:hover:not([aria-pressed='true']) {
    color: var(--text-primary);
  }
`