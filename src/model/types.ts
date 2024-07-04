export type Transition = {
  id: string
  name: string
  steps: Step[]
}

export const enum Duration {
  WHOLE = 1,
  HALF = 2,
  QUARTER = 4,
  EIGHT = 8,
  SIXTEENTH = 16,
}

export type ChordTone = 'ROOT' | 'THIRD' | 'FIFTH' | 'SEVENTH'
export type ChordToneDirection = 'UP' | 'DOWN' | 'NONE'
export type ChordReference = 'CURRENT' | 'NEXT'

export type Step = {
  interval: number
  reference: ChordReference
  chordTone: ChordTone
  direction: ChordToneDirection
}
export type NoteIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
export type OctaveIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type BaseNoteName = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'
export type Accidental = '#' | 'b'
export type Note =
  | 'C'
  | 'C#'
  | 'Db'
  | 'D'
  | 'D#'
  | 'Eb'
  | 'E'
  | 'F'
  | 'F#'
  | 'Gb'
  | 'G'
  | 'G#'
  | 'Ab'
  | 'A'
  | 'A#'
  | 'Bb'
  | 'B'

export type PitchedNote = `${Note}${OctaveIndex}`

export type ChordType =
  | 'MAJOR'
  | 'DOMINANT-SEVENTH'
  | 'MAJOR-SEVENTH'
  | 'MINOR'
  | 'MINOR-SEVENTH'
  | 'DIMINISHED'
  | 'HALF-DIMINISHED'
  | 'DIMINISHED-SEVENTH'
  | 'AUGMENTED'
  | 'AUGMENTED-SEVENTH'

export type BarModel = HasId & {
  chords: string[]
}

export type ChordProgression = HasId & {
  bars: string[]
}

export type HasId = {
  id: string
}

export type ChordSymbol = HasId & {
  root: PitchedNote
  name: Note
  type: ChordType
  path?: string
}

export type SelectItem<T> = {
  label: string
  value: T
}

export type FretboardLocation = {
  note: PitchedNote
  fret: number
  string: number
}

export type RawTransitionCategory = {
  id: string
  name: string
  transitions: string[]
}

export type _Pitch = {
  id: string
  progressionId: string
  barId: string
  chordId: string
  note: PitchedNote
  duration: number
  meta?: string
  fret: number
  string: number
}

export type _BarPitches = {
  barId: string
  chords: _ChordPitches[]
}

export type _ChordPitches = {
  chordId: string
  pitches: _Pitch[]
}