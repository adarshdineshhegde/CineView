import { createContext, useContext, type ReactNode } from 'react'
import { RootStore } from './stores/RootStore'

const rootStore = new RootStore()

const RootStoreContext = createContext<RootStore>(rootStore)

export const RootStoreProvider = ({ children }: { children: ReactNode }) => (
  <RootStoreContext.Provider value={rootStore}>
    {children}
  </RootStoreContext.Provider>
)

export const useRootStore = (): RootStore => useContext(RootStoreContext)
