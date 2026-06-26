import { useTranslation } from 'react-i18next'
import type { Movie } from '@/Api'
import type { AsyncStatus } from '@/Common'
import { MovieCard } from '../MovieCard'
import { RowWrapper, RowTitle, ScrollArea, SkeletonCard, EmptyMessage } from './StyledComponents'

interface Props {
  title: string
  items: Movie[]
  status: AsyncStatus
}

export const ContentRow = ({ title, items, status }: Props) => {
  const { t } = useTranslation('movies')
  if (status === 'error') return null

  return (
    <RowWrapper>
      <RowTitle>{title}</RowTitle>
      {status === 'loading' && (
        <ScrollArea>{Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}</ScrollArea>
      )}
      {status === 'empty' && <EmptyMessage>{t('noTitlesFound')}</EmptyMessage>}
      {status === 'success' && (
        <ScrollArea>{items.map((movie) => <MovieCard key={movie.id} movie={movie} />)}</ScrollArea>
      )}
    </RowWrapper>
  )
}