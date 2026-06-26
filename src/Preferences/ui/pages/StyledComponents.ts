import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 2rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 2rem;
`

export const Field = styled.div`
  margin-bottom: 1.5rem;
`

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`

export const LogoutButton = styled.button`
  margin-top: 1rem;
  padding: 0.625rem 1.25rem;
  background: transparent;
  border: 1px solid #e50914;
  color: #e50914;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    background: rgba(229, 9, 20, 0.1);
  }
`