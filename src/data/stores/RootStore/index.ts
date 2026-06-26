import { SessionStore } from '@/Auth/data/stores/SessionStore'
import { PreferencesStore } from '@/Preferences/data/stores/PreferencesStore'
import { WatchlistStore } from '@/Collection/data/stores/WatchlistStore'
import { AuthAPI } from '@/Auth/data/services/AuthService/index.api'


export class RootStore {
  sessionStore: SessionStore
  preferencesStore: PreferencesStore
  watchlistStore: WatchlistStore

  constructor() {
    this.preferencesStore = new PreferencesStore()
    this.sessionStore = new SessionStore(new AuthAPI())
    this.watchlistStore = new WatchlistStore()
  }
}
