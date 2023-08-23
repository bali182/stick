import { createRoot } from 'react-dom/client'
import { Test } from './Test'

const rootDiv = document.getElementById('main')!

createRoot(rootDiv).render(
  <div>
    <Test />
  </div>,
)
