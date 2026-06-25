import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from '@/Auth'
import { HomePage, MovieDetailPage } from '@/Movies'
import { TVShowDetailPage, SeasonDetailPage } from '@/TVShows'
import { SearchPage } from '@/Search'
import { WatchlistPage, MyListsPage, ListDetailPage } from '@/Collection'
import { SettingsPage } from '@/Preferences'
import { ShellLayout } from '@/Common/ui/layouts/ShellLayout'
import { ProtectedRoute } from '@/Common/ui/components/ProtectedRoute'

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