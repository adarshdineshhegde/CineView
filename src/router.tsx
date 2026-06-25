import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { LoginPage } from '@/Auth'
import { HomePage, MovieDetailPage } from '@/Movies'
import { TVShowDetailPage, SeasonDetailPage } from '@/TVShows'
import { SearchPage } from '@/Search'
import { WatchlistPage, MyListsPage, ListDetailPage } from '@/Collection'
import { SettingsPage } from '@/Preferences'

// Shell layout placeholder — wired in Milestone 2
const ShellLayout = () => (
  <div>
    <header data-testid="shell-navbar" style={{ padding: '1rem', background: '#1a1a1a', color: '#fff' }}>
      CineView — Navbar (Milestone 2)
    </header>
    <main>
      <Outlet />
    </main>
  </div>
)

// Protected route placeholder — implemented in Milestone 2
const ProtectedRoute = () => <Outlet />

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <ShellLayout />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/movies/:id', element: <MovieDetailPage /> },
          {
            path: '/tv/:id',
            element: <TVShowDetailPage />,
            children: [
              { path: 'season/:seasonNumber', element: <SeasonDetailPage /> },
            ],
          },
          { path: '/search', element: <SearchPage /> },
          { path: '/watchlist', element: <WatchlistPage /> },
          { path: '/lists', element: <MyListsPage /> },
          { path: '/lists/:id', element: <ListDetailPage /> },
          { path: '/settings', element: <SettingsPage /> },
        ],
      },
    ],
  },
])

export const AppRouter = () => <RouterProvider router={router} />
