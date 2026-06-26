// UI components
export { ErrorBoundary } from './errors/ErrorBoundary'

// Utilities
export { formatDate, formatYear } from './utils/FormatDate.utils'

// Constants
export { TMDB_BASE_URL, TMDB_IMAGE_BASE_URL, TMDB_API_KEY, LOCAL_STORAGE_KEYS } from './constants/App.constants'

// New in M2:
export { Navbar } from './ui/components/Navbar'
export { ShellLayout } from './ui/layouts/ShellLayout'
export { ProtectedRoute } from './ui/components/ProtectedRoute'

export { useAsync } from './ui/hooks/useAsync'
export type { AsyncStatus } from './ui/hooks/useAsync'
export { useDebounce } from './ui/hooks/useDebounce'
export { NotFoundState } from './ui/components/NotFoundState'
export { SectionErrorBoundary } from './ui/components/SectionErrorBoundary'