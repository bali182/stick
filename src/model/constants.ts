import { Interval } from 'tonal'
import { ChordType, NoteIndex, Note, OctaveIndex, PitchedNote } from './types'
import { getPitchedNoteParts } from './utils'

export const INDEX_BY_NOTE: Record<Note, NoteIndex> = {
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

export const NOTE_BY_INDEX: Record<NoteIndex, Note[]> = {
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

export const OCTAVES_INDICIES: OctaveIndex[] = [0, 1, 2, 3, 4, 5, 6, 7, 8]

/** All possible notes to play on a normal bass in the first octave */
export const NOTES = OCTAVES_INDICIES.flatMap((index) =>
  Object.keys(INDEX_BY_NOTE).map((note) => `${note}${index}` as PitchedNote),
)

/** Note names mapped to their pitched versions */
export const PITCHED_NOTE_MAP = NOTES.reduce(
  (map: Record<Note, PitchedNote[]>, rootNote: PitchedNote) => {
    const [note] = getPitchedNoteParts(rootNote)
    if (!Array.isArray(map[note])) {
      map[note] = []
    }
    map[note].push(rootNote)
    return map
  },
  {} as Record<Note, PitchedNote[]>,
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

export const CHORMATIC_SCALE_LENGTH = 12

export const OCTAVE_UP = Interval.fromSemitones(CHORMATIC_SCALE_LENGTH)

export const OCTAVE_DOWN = Interval.fromSemitones(CHORMATIC_SCALE_LENGTH)

export const INTERVALS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
  Interval.fromSemitones,
)
