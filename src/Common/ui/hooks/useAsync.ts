import { useState, useEffect, useCallback, useRef } from 'react'
import { TmdbApiError } from '@/Api'

export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error' | 'empty'

interface AsyncState<T> {
  data: T | null
  status: AsyncStatus
  errorCode: TmdbApiError['code'] | null
}

export function useAsync<T>(
  fetcher: () => Promise<T>,
  deps: React.DependencyList,
  isEmpty: (data: T) => boolean = (d) => Array.isArray(d) && d.length === 0
) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    status: 'idle',
    errorCode: null,
  })
  const fetcherRef = useRef(fetcher)
  fetcherRef.current = fetcher

  const run = useCallback(() => {
    setState((s) => ({ ...s, status: 'loading', errorCode: null }))
    fetcherRef.current()
      .then((data) => {
        setState({
          data,
          status: isEmpty(data) ? 'empty' : 'success',
          errorCode: null,
        })
      })
      .catch((err: unknown) => {
        const code = err instanceof TmdbApiError ? err.code : 'UNKNOWN'
        setState({ data: null, status: 'error', errorCode: code })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  useEffect(() => {
    run()
  }, [run])

  return { ...state, refetch: run }
}