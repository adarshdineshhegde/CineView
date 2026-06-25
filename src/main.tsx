import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootStoreProvider } from './data/providers'
import { AppRouter } from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootStoreProvider>
      <AppRouter />
    </RootStoreProvider>
  </React.StrictMode>,
)
