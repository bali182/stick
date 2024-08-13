import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './state/store'
import { Global } from '@emotion/react'
import { globalStyles } from './components/globalStyles'
import { App } from './components/App'
import { HashRouter } from 'react-router-dom'
import './state/templates/printTemplate'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import { en } from './languages/en'
import { hu } from './languages/hu'

i18n.init({
  interpolation: { escapeValue: false },
  debug: true,
  lng: window.navigator.language,
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    hu: { translation: hu },
  },
})

const rootDiv = document.getElementById('root')!

createRoot(rootDiv).render(
  <Provider store={store}>
    <HashRouter>
      <Global styles={globalStyles} />
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </HashRouter>
  </Provider>,
)
