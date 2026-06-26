import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
`

export const FilterTabs = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`

export const FilterTab = styled.button<{ $active: boolean }>`
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  font-size: 0.8125rem;
  cursor: pointer;
  border: 1px solid ${(p) => (p.$active ? '#e50914' : 'var(--border-color)')};
  background: ${(p) => (p.$active ? '#e50914' : 'transparent')};
  color: ${(p) => (p.$active ? '#ffffff' : 'var(--text-primary)')};
  transition: all 0.15s;
  white-space: nowrap;
`

export const SortRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const SortSelect = styled.select`
  padding: 0.375rem 0.625rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--text-primary);
  font-size: 0.8125rem;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`