import { Chord, transpose } from 'tonal'
import { getChordTypeSuffix } from './getChordTypeSuffix'
import {
  ChordSymbol,
  ChordTone,
  ChordToneDirection,
  PitchedNote,
} from './types'
import { OCTAVE_DOWN, OCTAVE_UP } from './constants'

function getPitchedChordToneUp(
  chord: ChordSymbol,
  tone: ChordTone,
): PitchedNote {
  const shortType = getChordTypeSuffix(chord.type, false)
  const notes = Chord.notes(shortType, chord.root) as PitchedNote[]
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
): PitchedNote {
  const note = getPitchedChordToneUp(chord, tone)
  switch (dir) {
    case 'NONE': {
      if (tone !== 'ROOT') {
        throw new TypeError('cannot be "NONE" unless referring a root')
      }
      return note
    }
    case 'UP': {
      const transposed = tone === 'ROOT' ? transpose(note, OCTAVE_UP) : note
      return transposed as PitchedNote
    }
    case 'DOWN': {
      const transposed = transpose(note, OCTAVE_DOWN)
      return transposed as PitchedNote
    }
  }
}
