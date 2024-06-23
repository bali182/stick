import { createRoot } from 'react-dom/client'
import { ChordChart } from './components/ChordChart'
import { defaultChordProgression } from './defaultChordProgression'

const rootDiv = document.getElementById('root')!

createRoot(rootDiv).render(<ChordChart progression={defaultChordProgression} />)
