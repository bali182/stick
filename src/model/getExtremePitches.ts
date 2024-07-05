import { Note, transpose } from 'tonal'
import { PitchedNote } from './types'
import { DOUBLE_OCTAVE_UP } from './constants'

export function getExtremePitches(pitches: PitchedNote[]): [number, number] {
  if (pitches.length === 0) {
    throw new Error(`Needs at least one note, was: ${pitches}`)
  }

  const withHz = pitches.map((p): [PitchedNote, number] => [p, Note.freq(p)!])
  let min = withHz[0]!
  let max = withHz[0]!

  for (let i = 1; i < withHz.length; i++) {
    const pitch = withHz[i]!
    if (pitch[1] < min[1]) {
      min = pitch
    }
    if (pitch[1] > max[1]) {
      max = pitch
    }
  }

  return [min[1], Note.freq(transpose(max[0], DOUBLE_OCTAVE_UP))!]
}
