import { ChordSymbol, PitchedNote } from './types'
import { getPitchedNote } from './getPitchedNote'
import { getTransition } from './getTransition'

export function getPitchedNotes(a: ChordSymbol, b: ChordSymbol): PitchedNote[] {
  return getTransition(a.path!).steps.map(({ pitch }) =>
    getPitchedNote(a, b, pitch!),
  )
}
