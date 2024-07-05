import { Note } from 'tonal'
import { getExtremePitches } from './getExtremePitches'
import { getPitchedNotes } from './getPitchedNotes'
import { ChordSymbol, PitchedNote, Transition } from './types'

export function canTransition(
  from: ChordSymbol,
  to: ChordSymbol,
  tuning: PitchedNote[],
  transition: Transition,
): boolean {
  const notes = getPitchedNotes(from, to, transition)
  const [minHz, maxHz] = getExtremePitches(tuning)
  return notes.every((note) => {
    const noteHz = Note.freq(note)!
    return noteHz >= minHz && noteHz <= maxHz
  })
}
