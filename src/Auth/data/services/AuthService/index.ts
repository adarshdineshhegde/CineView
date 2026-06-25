import type { Credentials, Session } from '../../../core/types/Auth.types'

export interface AuthService {
  login(credentials: Credentials): Promise<Session>
  logout(): Promise<void>
}
