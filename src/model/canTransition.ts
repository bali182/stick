import { distance, Interval, Note } from 'tonal'
import { getExtremePitches } from './getExtremePitches'
import { getPitchedNotes } from './getPitchedNotes'
import { ChordSymbol, PitchedNote, Transition } from './types'
import { isNil } from './isNil'

export function canTransition(
  from: ChordSymbol | undefined,
  to: ChordSymbol | undefined,
  tuning: PitchedNote[] | undefined,
  transition: Transition | undefined,
  noteCount: number | undefined = 4,
): boolean {
  if (isNil(from) || isNil(to) || isNil(tuning) || isNil(transition)) {
    return false
  }
  const notes = getPitchedNotes(from, to, transition)
  const [minHz, maxHz] = getExtremePitches(tuning)
  // All notes in the transition are in range of given tuning
  const inTuningRange = notes.every((note) => {
    const noteHz = Note.freq(note)!
    return noteHz >= minHz && noteHz <= maxHz
  })
  if (!inTuningRange) {
    return false
  }
  // If the transition defines what type of chord the source is, respect it.
  if (!isNil(transition.source) && !transition.source.includes(from.type)) {
    return false
  }
  // If the transition defines target distance, respect it.
  // TODO ensure, that not only roots are considered
  const dst = Interval.semitones(distance(from.root, to.root))
  if (!isNil(transition.target) && ![transition.target].includes(dst)) {
    return false
  }
  // Note count should match the amount steps in the transition
  if (transition.steps.length !== noteCount) {
    return false
  }

  return true
}
