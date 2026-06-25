import type { AuthService } from './index'
import type { Credentials, Session } from '../../../core/types/Auth.types'
import { AUTH_CREDENTIALS, SESSION_TTL_MS } from '../../../core/constants/Auth.constants'

export class AuthFixture implements AuthService {
  async login(credentials: Credentials): Promise<Session> {
    if (
      credentials.username !== AUTH_CREDENTIALS.username ||
      credentials.password !== AUTH_CREDENTIALS.password
    ) {
      throw new Error('Invalid credentials')
    }
    return {
      username: credentials.username,
      token: 'fixture-token-123',
      expiresAt: Date.now() + SESSION_TTL_MS,
    }
  }

  async logout(): Promise<void> {
    // no-op in fixture
  }
}
