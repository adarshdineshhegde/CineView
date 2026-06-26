import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 10px;
`

export const Poster = styled.img`
  width: 80px;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
`

export const PosterFallback = styled.div`
  width: 80px;
  aspect-ratio: 2 / 3;
  border-radius: 6px;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Title = styled.h3`
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
`

export const Meta = styled.span`
  font-size: 0.75rem;
  color: var(--text-secondary);
`

export const NoteArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const NoteInput = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--text-primary);
  font-size: 0.8125rem;
  resize: vertical;
  outline: none;
  font-family: inherit;

  &:focus {
    border-color: #e50914;
  }
`

export const NoteCount = styled.span<{ $warn: boolean }>`
  font-size: 0.75rem;
  color: ${(p) => (p.$warn ? '#f59e0b' : 'var(--text-secondary)')};
  align-self: flex-end;
`

export const NoteActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const SaveButton = styled.button`
  padding: 0.25rem 0.75rem;
  background: #e50914;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 0.8125rem;
  cursor: pointer;
`

export const CancelButton = styled.button`
  padding: 0.25rem 0.75rem;
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  font-size: 0.8125rem;
  cursor: pointer;
`

export const NoteText = styled.p`
  font-size: 0.8125rem;
  color: var(--text-secondary);
  margin: 0;
  font-style: italic;
`

export const EditNoteButton = styled.button`
  background: none;
  border: none;
  color: #e50914;
  font-size: 0.8125rem;
  cursor: pointer;
  padding: 0;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 0.75rem;
  cursor: pointer;
  padding: 0;
  align-self: flex-start;
  margin-top: auto;

  &:hover {
    color: #f87171;
  }
`