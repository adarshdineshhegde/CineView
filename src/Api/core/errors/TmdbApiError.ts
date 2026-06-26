export class TmdbApiError extends Error {
  code: 'NOT_FOUND' | 'NETWORK' | 'VALIDATION' | 'UNKNOWN'

  constructor(message: string, code: TmdbApiError['code']) {
    super(message)
    this.name = 'TmdbApiError'
    this.code = code
  }
}