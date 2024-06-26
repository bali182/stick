import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './state/store'
import { Global } from '@emotion/react'
import { globalStyles } from './components/globalStyles'
import { App } from './components/App'

const rootDiv = document.getElementById('root')!

createRoot(rootDiv).render(
  <Provider store={store}>
    <>
      <Global styles={globalStyles} />
      <App />
    </>
  </Provider>,
)
