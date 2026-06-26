import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from './locales/en/common.json'
import enAuth from './locales/en/auth.json'
import enMovies from './locales/en/movies.json'
import enTvshows from './locales/en/tvshows.json'
import enSearch from './locales/en/search.json'
import enPreferences from './locales/en/preferences.json'
import enCollection from './locales/en/collection.json'


import esCollection from './locales/es/collection.json'
import esCommon from './locales/es/common.json'
import esAuth from './locales/es/auth.json'
import esMovies from './locales/es/movies.json'
import esTvshows from './locales/es/tvshows.json'
import esSearch from './locales/es/search.json'
import esPreferences from './locales/es/preferences.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  defaultNS: 'common',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      common: enCommon,
      collection: enCollection,
      auth: enAuth,
      movies: enMovies,
      tvshows: enTvshows,
      search: enSearch,
      preferences: enPreferences,
    },
    es: {
      common: esCommon,
      collection: esCollection,
      auth: esAuth,
      movies: esMovies,
      tvshows: esTvshows,
      search: esSearch,
      preferences: esPreferences,
    },
  },
})

export default i18n