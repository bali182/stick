import _i18n from 'i18next'
import { en } from './en'
import { hu } from './hu'
import { store } from '../state/store'
import { AppState } from '../state/types'

const storedLanguage = (store?.getState?.() as AppState)?.config?.language

_i18n.init({
  interpolation: { escapeValue: false },
  debug: true,
  lng: storedLanguage ?? window.navigator.language,
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    hu: { translation: hu },
  },
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
  },
})

export const i18n = _i18n
