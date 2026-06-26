import { recentSearchesSchema } from '../../core/types/Search.types'
import { RECENT_SEARCHES_KEY, MAX_RECENT_SEARCHES } from '../../core/constants/Search.constants'

export const RecentSearches = {
  get(): string[] {
    try {
      const raw = localStorage.getItem(RECENT_SEARCHES_KEY)
      if (!raw) return []
      const parsed = recentSearchesSchema.safeParse(JSON.parse(raw))
      return parsed.success ? parsed.data : []
    } catch {
      return []
    }
  },

  add(query: string): string[] {
    const trimmed = query.trim()
    if (!trimmed) return RecentSearches.get()
    const current = RecentSearches.get().filter((q) => q.toLowerCase() !== trimmed.toLowerCase())
    const updated = [trimmed, ...current].slice(0, MAX_RECENT_SEARCHES)
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated))
    return updated
  },

  clear(): string[] {
    localStorage.removeItem(RECENT_SEARCHES_KEY)
    return []
  },
}