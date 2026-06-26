import { useState, useEffect, useMemo } from 'react'
import { TmdbService } from '@/Api'
import type { SearchResult } from '@/Api'
import { useDebounce } from '@/Common'
import { SEARCH_DEBOUNCE_MS } from '../../core/constants/Search.constants'
import { RecentSearches } from '../../data/RecentSearches'
import { RecentSearchesList } from '../components/RecentSearches'
import { SearchResultGroup } from '../components/SearchResultGroup'
import { Wrapper, Input, EmptyState } from './StyledComponents'

type Status = 'idle' | 'loading' | 'success' | 'error' | 'empty'

export const SearchPage = () => {
  const [input, setInput] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [status, setStatus] = useState<Status>('idle')
  const [recent, setRecent] = useState<string[]>(() => RecentSearches.get())

  const debouncedQuery = useDebounce(input, SEARCH_DEBOUNCE_MS)

  useEffect(() => {
    const query = debouncedQuery.trim()
    if (!query) {
      setStatus('idle')
      setResults([])
      return
    }

    let cancelled = false
    setStatus('loading')
    TmdbService.searchMulti(query)
      .then((data) => {
        if (cancelled) return
        setResults(data)
        setStatus(data.length === 0 ? 'empty' : 'success')
        setRecent(RecentSearches.add(query))
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => { cancelled = true }
  }, [debouncedQuery])

  const grouped = useMemo(
    () => ({
      movies: results.filter((r) => r.media_type === 'movie'),
      tv: results.filter((r) => r.media_type === 'tv'),
      people: results.filter((r) => r.media_type === 'person'),
    }),
    [results]
  )

  return (
    <div data-testid="search-page">
      <Wrapper>
        <Input
          type="search"
          placeholder="Search movies, TV shows, people…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </Wrapper>

      {status === 'idle' && (
        <RecentSearchesList
          queries={recent}
          onSelect={setInput}
          onClear={() => setRecent(RecentSearches.clear())}
        />
      )}

      {status === 'loading' && <EmptyState>Searching…</EmptyState>}
      {status === 'error' && <EmptyState>Something went wrong. Try again.</EmptyState>}
      {status === 'empty' && <EmptyState>No results for "{debouncedQuery}".</EmptyState>}

      {status === 'success' && (
        <>
          <SearchResultGroup title="Movies" items={grouped.movies} />
          <SearchResultGroup title="TV Shows" items={grouped.tv} />
          <SearchResultGroup title="People" items={grouped.people} />
        </>
      )}
    </div>
  )
}