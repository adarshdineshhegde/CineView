import { SessionStore } from '@/Auth/data/stores/SessionStore'
import { PreferencesStore } from '@/Preferences/data/stores/PreferencesStore'
import { AuthAPI } from '@/Auth/data/services/AuthService/index.api'

/**
 * RootStore aggregates all module-level stores.
 * Instantiated once at application root and provided via React context.
 */
export class RootStore {
  sessionStore: SessionStore
  preferencesStore: PreferencesStore

  constructor() {
    this.preferencesStore = new PreferencesStore()
    this.sessionStore = new SessionStore(new AuthAPI())
  }
}
