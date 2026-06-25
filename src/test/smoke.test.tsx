import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

// Smoke test: verify every placeholder page renders without crashing
import { LoginPage } from '@/Auth'
import { HomePage, MovieDetailPage } from '@/Movies'
import { TVShowDetailPage, SeasonDetailPage } from '@/TVShows'
import { SearchPage } from '@/Search'
import { WatchlistPage, MyListsPage, ListDetailPage } from '@/Collection'
import { SettingsPage } from '@/Preferences'

const wrap = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>)

describe('M1 Smoke Tests — Placeholder Pages', () => {
  it('renders LoginPage', () => {
    wrap(<LoginPage />)
    expect(screen.getByTestId('login-page')).toBeDefined()
  })

  it('renders HomePage', () => {
    wrap(<HomePage />)
    expect(screen.getByTestId('home-page')).toBeDefined()
  })

  it('renders MovieDetailPage', () => {
    wrap(<MovieDetailPage />)
    expect(screen.getByTestId('movie-detail-page')).toBeDefined()
  })

  it('renders TVShowDetailPage', () => {
    wrap(<TVShowDetailPage />)
    expect(screen.getByTestId('tv-show-detail-page')).toBeDefined()
  })

  it('renders SeasonDetailPage', () => {
    wrap(<SeasonDetailPage />)
    expect(screen.getByTestId('season-detail-page')).toBeDefined()
  })

  it('renders SearchPage', () => {
    wrap(<SearchPage />)
    expect(screen.getByTestId('search-page')).toBeDefined()
  })

  it('renders WatchlistPage', () => {
    wrap(<WatchlistPage />)
    expect(screen.getByTestId('watchlist-page')).toBeDefined()
  })

  it('renders MyListsPage', () => {
    wrap(<MyListsPage />)
    expect(screen.getByTestId('my-lists-page')).toBeDefined()
  })

  it('renders ListDetailPage', () => {
    wrap(<ListDetailPage />)
    expect(screen.getByTestId('list-detail-page')).toBeDefined()
  })

  it('renders SettingsPage', () => {
    wrap(<SettingsPage />)
    expect(screen.getByTestId('settings-page')).toBeDefined()
  })
})

describe('M1 Smoke Tests — Core Utilities', () => {
  it('formatDate returns a readable date string', async () => {
    const { formatDate } = await import('@/Common')
    const result = formatDate('2024-03-15', 'en-US')
    expect(result).toContain('2024')
  })

  it('formatYear extracts the year', async () => {
    const { formatYear } = await import('@/Common')
    expect(formatYear('2024-03-15')).toBe('2024')
  })

  it('AUTH_CREDENTIALS are defined', async () => {
    const { AUTH_CREDENTIALS } = await import('@/Auth/core/constants/Auth.constants')
    expect(AUTH_CREDENTIALS.username).toBeTruthy()
    expect(AUTH_CREDENTIALS.password).toBeTruthy()
  })
})
