import { makeAutoObservable } from 'mobx'
import { watchlistStorageSchema, type MediaSnapshot, type WatchlistEntry, type WatchlistStatus } from '../../../core/types/Collection.types'

const STORAGE_KEY = 'cineview:watchlist'

const generateUuid = (): string =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36)

export class WatchlistStore {
  entries: WatchlistEntry[] = []

  constructor() {
    makeAutoObservable(this)
    this.restore()
  }

  get count(): number {
    return this.entries.length
  }

  isInWatchlist(mediaId: number, mediaType: 'movie' | 'tv'): boolean {
    return this.entries.some(
      (e) => e.media.id === mediaId && e.media.type === mediaType
    )
  }

  getEntry(mediaId: number, mediaType: 'movie' | 'tv'): WatchlistEntry | undefined {
    return this.entries.find(
      (e) => e.media.id === mediaId && e.media.type === mediaType
    )
  }

  byStatus(status: WatchlistStatus): WatchlistEntry[] {
    return this.entries.filter((e) => e.status === status)
  }

  get wantToWatchCount(): number {
    return this.entries.filter((e) => e.status === 'want_to_watch').length
  }

  get watchingCount(): number {
    return this.entries.filter((e) => e.status === 'watching').length
  }

  get completedCount(): number {
    return this.entries.filter((e) => e.status === 'completed').length
  }

  add(media: MediaSnapshot): void {
    if (this.isInWatchlist(media.id, media.type)) return
    const entry: WatchlistEntry = {
      uuid: generateUuid(),
      media,
      status: 'want_to_watch',
      note: '',
      addedAt: Date.now(),
      updatedAt: Date.now(),
    }
    this.entries.unshift(entry)
    this.persist()
  }

  remove(uuid: string): void {
    this.entries = this.entries.filter((e) => e.uuid !== uuid)
    this.persist()
  }

  toggle(media: MediaSnapshot): void {
    const existing = this.getEntry(media.id, media.type)
    if (existing) {
      this.remove(existing.uuid)
    } else {
      this.add(media)
    }
  }

  updateStatus(uuid: string, status: WatchlistStatus): void {
    const entry = this.entries.find((e) => e.uuid === uuid)
    if (!entry) return
    entry.status = status
    entry.updatedAt = Date.now()
    this.persist()
  }

  updateNote(uuid: string, note: string): void {
    const entry = this.entries.find((e) => e.uuid === uuid)
    if (!entry) return
    entry.note = note.slice(0, 300)
    entry.updatedAt = Date.now()
    this.persist()
  }

  private persist(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.entries))
    } catch {
      // storage quota exceeded — fail silently
    }
  }

  private restore(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = watchlistStorageSchema.safeParse(JSON.parse(raw))
      if (parsed.success) {
        this.entries = parsed.data
      }
    } catch {
      // corrupted storage — start fresh
    }
  }
}