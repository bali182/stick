import { ChordSymbol, Step, PitchedNote } from './types'
import { getPitchedChordTone } from './getPitchedChordTone'
import { Interval, transpose } from 'tonal'

export function getPitchedNote(
  current: ChordSymbol,
  next: ChordSymbol,
  step: Step,
): PitchedNote {
  const chord = step.chordRef === 'CURRENT' ? current : next
  const chordTone = getPitchedChordTone(chord, step.tone, step.dir)
  const interval = Interval.fromSemitones(step.interval)
  return transpose(chordTone, interval) as PitchedNote
}
