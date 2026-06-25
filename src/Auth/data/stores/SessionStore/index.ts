import { makeAutoObservable } from 'mobx'
import type { AuthService } from '../../services/AuthService'
import type { Session, AuthStatus } from '../../../core/types/Auth.types'
import type { Credentials } from '../../../core/types/Auth.types'
import { LOCAL_STORAGE_KEYS } from '@/Common'

export class SessionStore {
  session: Session | null = null
  loginStatus: AuthStatus = 'idle'
  errorMessage: string | null = null

  constructor(private service: AuthService) {
    makeAutoObservable(this)
    this.restoreSession()
  }

  get isAuthenticated(): boolean {
    if (!this.session) return false
    return Date.now() < this.session.expiresAt
  }

  async login(credentials: Credentials): Promise<void> {
    this.loginStatus = 'loading'
    this.errorMessage = null
    try {
      const session = await this.service.login(credentials)
      this.session = session
      sessionStorage.setItem(LOCAL_STORAGE_KEYS.SESSION, JSON.stringify(session))
      this.loginStatus = 'success'
    } catch (err) {
      this.errorMessage = err instanceof Error ? err.message : 'Login failed'
      this.loginStatus = 'error'
    }
  }

  async logout(): Promise<void> {
    await this.service.logout()
    this.session = null
    this.loginStatus = 'idle'
    sessionStorage.removeItem(LOCAL_STORAGE_KEYS.SESSION)
  }

  private restoreSession(): void {
    try {
      const raw = sessionStorage.getItem(LOCAL_STORAGE_KEYS.SESSION)
      if (!raw) return
      const parsed: Session = JSON.parse(raw) as Session
      if (Date.now() < parsed.expiresAt) {
        this.session = parsed
        this.loginStatus = 'success'
      }
    } catch {
      // corrupted storage — ignore
    }
  }
}
