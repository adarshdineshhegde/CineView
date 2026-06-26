import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Frame = styled.div`
  position: relative;
  width: min(900px, 90vw);
  aspect-ratio: 16 / 9;
  background: #000;
`

export const CloseButton = styled.button`
  position: absolute;
  top: -2.5rem;
  right: 0;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
`