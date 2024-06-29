import { ChordSymbol, Pitch, PitchedNote } from './types'
import { getPitchedChordTone } from './getPitchedChordTone'
import { Interval, transpose } from 'tonal'

export function getPitchedNote(
  current: ChordSymbol,
  next: ChordSymbol,
  pitch: Pitch,
): PitchedNote {
  const chord = pitch.reference === 'CURRENT' ? current : next
  const chordTone = getPitchedChordTone(chord, pitch.chordTone, pitch.direction)
  const interval = Interval.fromSemitones(pitch.interval)
  return transpose(chordTone, interval) as PitchedNote
}
