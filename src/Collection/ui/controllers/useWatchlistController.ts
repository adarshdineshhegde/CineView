import { useRootStore } from 'src/data/providers.tsx'
import type { MediaSnapshot, WatchlistStatus } from '../../core/types/Collection.types'

export const useWatchlistController = () => {
  const { watchlistStore } = useRootStore()

  return {
    entries: watchlistStore.entries,
    count: watchlistStore.count,
    wantToWatchCount: watchlistStore.wantToWatchCount,
    watchingCount: watchlistStore.watchingCount,
    completedCount: watchlistStore.completedCount,
    isInWatchlist: (id: number, type: 'movie' | 'tv') =>
      watchlistStore.isInWatchlist(id, type),
    getEntry: (id: number, type: 'movie' | 'tv') =>
      watchlistStore.getEntry(id, type),
    toggle: (media: MediaSnapshot) => watchlistStore.toggle(media),
    remove: (uuid: string) => watchlistStore.remove(uuid),
    updateStatus: (uuid: string, status: WatchlistStatus) =>
      watchlistStore.updateStatus(uuid, status),
    updateNote: (uuid: string, note: string) =>
      watchlistStore.updateNote(uuid, note),
    byStatus: (status: WatchlistStatus) => watchlistStore.byStatus(status),
  }
}