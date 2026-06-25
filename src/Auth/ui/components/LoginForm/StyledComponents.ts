import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0f0f;
`

export const Card = styled.div`
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 2.5rem;
  width: 100%;
  max-width: 400px;
`

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e50914;
  margin-bottom: 1.5rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.25rem;
`

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #b3b3b3;
  margin: 0 0 1.5rem;
`

export const Field = styled.div`
  margin-bottom: 1rem;
`

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  color: #b3b3b3;
  margin-bottom: 0.375rem;
`

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.625rem 0.75rem;
  background: #0f0f0f;
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  color: #ffffff;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.15s;

  &:focus {
    border-color: #e50914;
  }

  &[aria-invalid='true'] {
    border-color: #f87171;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  flex-shrink: 0;
  padding: 0.25rem;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`

export const ErrorText = styled.span`
  display: block;
  font-size: 0.75rem;
  color: #f87171;
  margin-top: 0.25rem;
`

export const GlobalError = styled.div`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 6px;
  padding: 0.75rem;
  color: #f87171;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #e50914;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.15s;

  &:hover:not(:disabled) {
    background: #c40812;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`