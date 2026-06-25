export interface Credentials {
  username: string
  password: string
}

export interface Session {
  username: string
  token: string
  expiresAt: number
}

export type AuthStatus = 'idle' | 'loading' | 'success' | 'error'
