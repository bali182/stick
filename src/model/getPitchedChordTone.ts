import { Chord, transpose } from 'tonal'
import { getChordTypeSuffix } from './getChordTypeSuffix'
import {
  ChordSymbol,
  ChordTone,
  ChordToneDirection,
  PitchedNoteName,
} from './types'
import { OCTAVE_DOWN, OCTAVE_UP } from './constants'

function getPitchedChordToneBase(
  chord: ChordSymbol,
  tone: ChordTone,
): PitchedNoteName {
  const shortType = getChordTypeSuffix(chord.type, false)
  const notes = Chord.notes(shortType, chord.root) as PitchedNoteName[]
  switch (tone) {
    case 'ROOT':
      return notes[0]!
    case 'THIRD':
      return notes[1]!
    case 'FIFTH':
      return notes[2]!
  }
}

export function getPitchedChordTone(
  chord: ChordSymbol,
  tone: ChordTone,
  dir: ChordToneDirection,
): PitchedNoteName {
  const note = getPitchedChordToneBase(chord, tone)
  switch (dir) {
    case 'NONE': {
      if (tone !== 'ROOT') {
        throw new TypeError('cannot be "NONE" unless referring a root')
      }
      return note
    }
    case 'UP': {
      const transposed = tone === 'ROOT' ? transpose(note, OCTAVE_UP) : note
      return transposed as PitchedNoteName
    }
    case 'DOWN': {
      const transposed = transpose(note, OCTAVE_DOWN)
      return transposed as PitchedNoteName
    }
  }
}
