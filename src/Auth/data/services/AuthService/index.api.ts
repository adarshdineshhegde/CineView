import type { AuthService } from './index'
import type { Credentials, Session } from '../../../core/types/Auth.types'
import { AUTH_CREDENTIALS, SESSION_TTL_MS } from '../../../core/constants/Auth.constants'

/**
 * CineView uses client-side credential verification (hardwired per spec).
 * No network call is made — token is synthesised locally.
 */
export class AuthAPI implements AuthService {
  async login(credentials: Credentials): Promise<Session> {
    if (
      credentials.username !== AUTH_CREDENTIALS.username ||
      credentials.password !== AUTH_CREDENTIALS.password
    ) {
      throw new Error('Invalid username or password')
    }
    return {
      username: credentials.username,
      token: `session-${Date.now()}`,
      expiresAt: Date.now() + SESSION_TTL_MS,
    }
  }

  async logout(): Promise<void> {
    // Token is stored in sessionStorage — cleared by SessionStore
  }
}
