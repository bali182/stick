import { Interval } from 'tonal'
import {
  ChordType,
  NoteIndex,
  Note,
  OctaveIndex,
  PitchedNote,
  Transition,
} from './types'
import { getPitchedNoteParts } from './getPitchedNoteParts'
import { TRANSITION_CATEGORIES } from '../../generated/transitions'

export const DEFAULT_4_STRING_BASS_TUNING: PitchedNote[] = [
  'G2',
  'D2',
  'A1',
  'E1',
]

export const DEFAULT_5_STRING_BASS_TUNING: PitchedNote[] = [
  'G2',
  'D2',
  'A1',
  'E1',
  'B0',
]

export const GUITAR_TUNING: PitchedNote[] = ['E5', 'B4', 'G4', 'D4', 'A3', 'E3']

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

export const NOTE_NAMES = Object.keys(INDEX_BY_NOTE) as Note[]

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
  NOTE_NAMES.map((note) => `${note}${index}` as PitchedNote),
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

export const CHORD_TYPES_TO_NAMES: Record<ChordType, string> = {
  MAJOR: 'Major',
  'DOMINANT-SEVENTH': 'Dominant 7th',
  'MAJOR-SEVENTH': 'Major 7th',
  MINOR: 'Minor',
  'MINOR-SEVENTH': 'Minor 7th',
  DIMINISHED: 'Diminished',
  'HALF-DIMINISHED': 'Half-Diminished',
  'DIMINISHED-SEVENTH': 'Diminished 7th',
  AUGMENTED: 'Augmented',
  'AUGMENTED-SEVENTH': 'Augmented 7th',
}

export const CHORD_TYPES = Object.keys(CHORD_TYPES_MAP) as ChordType[]

export const CHORMATIC_SCALE_LENGTH = 12

export const OCTAVE_UP = Interval.fromSemitones(CHORMATIC_SCALE_LENGTH)
export const DOUBLE_OCTAVE_UP = Interval.fromSemitones(
  CHORMATIC_SCALE_LENGTH * 2,
)
export const OCTAVE_DOWN = Interval.fromSemitones(-CHORMATIC_SCALE_LENGTH)
export const DOUBLE_OCTAVE_DOWN = Interval.fromSemitones(
  -CHORMATIC_SCALE_LENGTH * 2,
)

export const INTERVALS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
  Interval.fromSemitones,
)

export const TRANSITION_MAP: Record<string, Transition> =
  TRANSITION_CATEGORIES.flatMap(({ transitions }) => transitions).reduce(
    (data, transition) => Object.assign(data, { [transition.id]: transition }),
    {},
  )

export const TRANSITIONS: Transition[] = Object.values(TRANSITION_MAP)
