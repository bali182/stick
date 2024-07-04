import { ChordSymbol, Step, PitchedNote } from './types'
import { getPitchedChordTone } from './getPitchedChordTone'
import { Interval, transpose } from 'tonal'

export function getPitchedNote(
  current: ChordSymbol,
  next: ChordSymbol,
  step: Step,
): PitchedNote {
  const chord = step.reference === 'CURRENT' ? current : next
  const chordTone = getPitchedChordTone(chord, step.chordTone, step.direction)
  const interval = Interval.fromSemitones(step.interval)
  return transpose(chordTone, interval) as PitchedNote
}
