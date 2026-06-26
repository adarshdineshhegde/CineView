import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  text-align: center;
`

export const Emoji = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

export const Message = styled.p`
  color: #b3b3b3;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`

export const BackLink = styled(Link)`
  color: #e50914;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }
`