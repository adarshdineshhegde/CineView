import type { Genre } from '@/Api'
import { useTranslation } from 'react-i18next'
import { Wrapper, Chip } from './StyledComponents'

interface Props {
  genres: Genre[]
  activeGenreId: number | null
  onSelect: (id: number | null) => void
}

export const GenreFilter = ({ genres, activeGenreId, onSelect }: Props) => {
  const { t } = useTranslation('movies')

  return (
    <Wrapper>
      <Chip $active={activeGenreId === null} onClick={() => onSelect(null)}>
        {t('genreFilterAll')}
      </Chip>
    {genres.map((genre) => (
      <Chip
        key={genre.id}
        $active={activeGenreId === genre.id}
        onClick={() => onSelect(genre.id)}
      >
        {genre.name}
      </Chip>
    ))}
  </Wrapper>
  )
}