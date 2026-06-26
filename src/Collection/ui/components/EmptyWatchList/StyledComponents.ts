import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;
  text-align: center;
`

export const Emoji = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

export const Message = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 1.5rem;
`

export const BrowseLink = styled.a`
  padding: 0.625rem 1.5rem;
  background: #e50914;
  color: #ffffff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
`