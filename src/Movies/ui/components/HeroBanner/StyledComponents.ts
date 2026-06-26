import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 320px;
  overflow: hidden;
`

export const Backdrop = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Gradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--bg-primary) 0%, rgba(15, 15, 15, 0.2) 50%, rgba(15, 15, 15, 0.6) 100%);
`

export const Content = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  max-width: 600px;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 0.5rem;
`

export const Rating = styled.div`
  color: #f5c518;
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const TrailerButton = styled.button`
  padding: 0.625rem 1.5rem;
  background: #ffffff;
  color: #0f0f0f;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }
`