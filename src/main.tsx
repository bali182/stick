import { createRoot } from 'react-dom/client'
import { ChordChart } from './components/ChordChart'
import { chart } from './chart'

const rootDiv = document.getElementById('root')!

createRoot(rootDiv).render(<ChordChart progression={chart} />)
