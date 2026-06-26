import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 2rem;
  margin-top: 1rem;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #b3b3b3;
  margin-bottom: 0.75rem;
`

export const ClearButton = styled.button`
  background: none;
  border: none;
  color: #e50914;
  font-size: 0.8125rem;
  cursor: pointer;
`

export const Pills = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const Pill = styled.button`
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  border: 1px solid #3a3a3a;
  background: transparent;
  color: #ffffff;
  font-size: 0.8125rem;
  cursor: pointer;

  &:hover {
    border-color: #e50914;
  }
`