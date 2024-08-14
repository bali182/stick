import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './state/store'
import { Global } from '@emotion/react'
import { globalStyles } from './components/globalStyles'
import { App } from './components/App'
import { HashRouter } from 'react-router-dom'
import './state/templates/printTemplate'
import { I18nextProvider } from 'react-i18next'
import { i18n } from './languages/i18n'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HashRouter>
      <Global styles={globalStyles} />
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </HashRouter>
  </Provider>,
)
