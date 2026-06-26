import { Wrapper, Title, Pills, Pill, ClearButton } from './StyledComponents'

interface Props {
  queries: string[]
  onSelect: (query: string) => void
  onClear: () => void
}

export const RecentSearchesList = ({ queries, onSelect, onClear }: Props) => {
  if (queries.length === 0) return null

  return (
    <Wrapper>
      <Title>
        Recent Searches
        <ClearButton onClick={onClear}>Clear all</ClearButton>
      </Title>
      <Pills>
        {queries.map((q) => (
          <Pill key={q} onClick={() => onSelect(q)}>{q}</Pill>
        ))}
      </Pills>
    </Wrapper>
  )
}