import { createRoot } from 'react-dom/client'
import { ChordChart } from './components/ChordChart'
import { Provider } from 'react-redux'
import { store } from './state/store'

const rootDiv = document.getElementById('root')!

createRoot(rootDiv).render(
  <Provider store={store}>
    <ChordChart progressionId="default" />
  </Provider>,
)
