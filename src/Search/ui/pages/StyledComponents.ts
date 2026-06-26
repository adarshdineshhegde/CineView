import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1.5rem 2rem 0.5rem;
`

export const Input = styled.input`
  width: 100%;
  max-width: 480px;
  padding: 0.75rem 1rem;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  color: #ffffff;
  font-size: 0.9375rem;
  outline: none;

  &:focus {
    border-color: #e50914;
  }
`

export const EmptyState = styled.p`
  color: #666;
  padding: 0 2rem;
  font-size: 0.875rem;
`