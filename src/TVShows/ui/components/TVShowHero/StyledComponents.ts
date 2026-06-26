import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 45vh;
  min-height: 280px;
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
  background: linear-gradient(to top, var(--bg-primary) 0%, rgba(15, 15, 15, 0.3) 60%, rgba(15, 15, 15, 0.7) 100%);
`

export const Content = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`

export const MetaRow = styled.div`
  display: flex;
  gap: 1rem;
  color: #f5c518;
  font-size: 0.875rem;

  span:nth-child(2), span:nth-child(3) {
    color: #b3b3b3;
  }
`