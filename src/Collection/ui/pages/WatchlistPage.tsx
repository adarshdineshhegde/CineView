import { useState, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { useWatchlistController } from '../controllers/useWatchlistController'
import { WatchlistCard } from '../components/WatchlistCard'
import { EmptyWatchlist } from 'src/Collection/ui/components/EmptyWatchList/index.tsx'
import type { WatchlistEntry, WatchlistStatus } from '../../core/types/Collection.types'
import {
  Wrapper, Header, PageTitle, FilterTabs, FilterTab,
  SortRow, SortSelect, List,
} from './StyledComponents'

type FilterTab = 'all' | WatchlistStatus
type SortKey = 'addedAt' | 'updatedAt' | 'title'

const sortEntries = (entries: WatchlistEntry[], sort: SortKey): WatchlistEntry[] => {
  return [...entries].sort((a, b) => {
    if (sort === 'title') return a.media.title.localeCompare(b.media.title)
    return b[sort] - a[sort]
  })
}

export const WatchlistPage = observer(() => {
  const { t } = useTranslation('collection')
  const ctrl = useWatchlistController()
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all')
  const [sortKey, setSortKey] = useState<SortKey>('addedAt')

  const filtered = useMemo(() => {
    const base = activeFilter === 'all'
      ? ctrl.entries
      : ctrl.byStatus(activeFilter)
    return sortEntries(base, sortKey)
  }, [ctrl.entries, activeFilter, sortKey])

  return (
    <Wrapper data-testid="watchlist-page">
      <Header>
        <PageTitle>{t('pageTitle')}</PageTitle>
        <SortRow>
          <SortSelect
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            aria-label={t('sortLabel')}
          >
            <option value="addedAt">{t('sort.dateAdded')}</option>
            <option value="updatedAt">{t('sort.lastUpdated')}</option>
            <option value="title">{t('sort.title')}</option>
          </SortSelect>
        </SortRow>
      </Header>

      <FilterTabs>
        <FilterTab $active={activeFilter === 'all'} onClick={() => setActiveFilter('all')}>
          {t('filter.all')} ({ctrl.count})
        </FilterTab>
        <FilterTab $active={activeFilter === 'want_to_watch'} onClick={() => setActiveFilter('want_to_watch')}>
          {t('status.wantToWatch')} ({ctrl.wantToWatchCount})
        </FilterTab>
        <FilterTab $active={activeFilter === 'watching'} onClick={() => setActiveFilter('watching')}>
          {t('status.watching')} ({ctrl.watchingCount})
        </FilterTab>
        <FilterTab $active={activeFilter === 'completed'} onClick={() => setActiveFilter('completed')}>
          {t('status.completed')} ({ctrl.completedCount})
        </FilterTab>
      </FilterTabs>

      {filtered.length === 0 ? (
        <EmptyWatchlist />
      ) : (
        <List>
          {filtered.map((entry) => (
            <WatchlistCard key={entry.uuid} entry={entry} />
          ))}
        </List>
      )}
    </Wrapper>
  )
})