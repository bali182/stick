import { Interval } from 'tonal'
import { ChordType, NoteIndex, NoteName, PitchedNoteName } from './types'
import { getPitchedNoteParts } from './utils'

/** All possible notes to play on a normal bass in the first octave */
const ROOT_NOTES: Record<PitchedNoteName, boolean> = {
  E1: true,
  F1: true,
  'F#1': true,
  Gb1: true,
  G1: true,
  'G#1': true,
  Ab1: true,
  A1: true,
  'A#1': true,
  Bb1: true,
  B1: true,
  C2: true,
  'C#2': true,
  Db2: true,
  D2: true,
  'D#2': true,
  Eb2: true,
  E2: true,
  F2: true,
  'F#2': true,
  Gb2: true,
  G2: true,
  'G#2': true,
  Ab2: true,
  A2: true,
  'A#2': true,
  Bb2: true,
  B2: true,
  C3: true,
  'C#3': true,
  Db3: true,
  D3: true,
  'D#3': true,
  Eb3: true,
  E3: true,
  F3: true,
  'F#3': true,
  Gb3: true,
  G3: true,
}

/** All possible notes to play on a normal bass in the first octave */
export const NOTES = Object.keys(ROOT_NOTES) as PitchedNoteName[]

/** Note names mapped to their pitched versions */
export const PITCHED_NOTE_MAP = NOTES.reduce(
  (map: Record<NoteName, PitchedNoteName[]>, rootNote: PitchedNoteName) => {
    const [note] = getPitchedNoteParts(rootNote)
    if (!Array.isArray(map[note])) {
      map[note] = []
    }
    map[note].push(rootNote)
    return map
  },
  {} as Record<NoteName, PitchedNoteName[]>,
)

const CHORD_TYPES_MAP: Record<ChordType, boolean> = {
  MAJOR: true,
  'DOMINANT-SEVENTH': true,
  'MAJOR-SEVENTH': true,
  MINOR: true,
  'MINOR-SEVENTH': true,
  DIMINISHED: true,
  'HALF-DIMINISHED': true,
  'DIMINISHED-SEVENTH': true,
  AUGMENTED: true,
  'AUGMENTED-SEVENTH': true,
}

export const CHORD_TYPES = Object.keys(CHORD_TYPES_MAP) as ChordType[]

export const INDEX_BY_NOTE: Record<NoteName, NoteIndex> = {
  C: 0,
  'C#': 1,
  Db: 1,
  D: 2,
  'D#': 3,
  Eb: 3,
  E: 4,
  F: 5,
  'F#': 6,
  Gb: 6,
  G: 7,
  'G#': 8,
  Ab: 8,
  A: 9,
  'A#': 10,
  Bb: 10,
  B: 11,
}

export const NOTE_BY_INDEX: Record<NoteIndex, NoteName[]> = {
  0: ['C'],
  1: ['C#', 'Db'],
  2: ['D'],
  3: ['D#', 'Eb'],
  4: ['E'],
  5: ['F'],
  6: ['F#', 'Gb'],
  7: ['G'],
  8: ['G#', 'Ab'],
  9: ['A'],
  10: ['A#', 'Bb'],
  11: ['B'],
}

export const CHORMATIC_SCALE_LENGTH = 12

export const OCTAVE_UP = Interval.fromSemitones(CHORMATIC_SCALE_LENGTH)

export const OCTAVE_DOWN = Interval.fromSemitones(CHORMATIC_SCALE_LENGTH)
