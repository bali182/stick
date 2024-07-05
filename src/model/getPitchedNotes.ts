import { ChordSymbol, PitchedNote, Transition } from './types'
import { getPitchedNote } from './getPitchedNote'

export function getPitchedNotes(
  a: ChordSymbol,
  b: ChordSymbol,
  transition: Transition,
): PitchedNote[] {
  return transition.steps.map((pitch) => getPitchedNote(a, b, pitch!))
}
