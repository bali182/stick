import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './state/store'
import { Global } from '@emotion/react'
import { globalStyles } from './components/globalStyles'
import { App } from './components/App'
import { HashRouter } from 'react-router-dom'
import './state/templates/printTemplate'

const rootDiv = document.getElementById('root')!

createRoot(rootDiv).render(
  <Provider store={store}>
    <HashRouter>
      <Global styles={globalStyles} />
      <App />
    </HashRouter>
  </Provider>,
)
