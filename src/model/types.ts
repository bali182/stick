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

export type ChordTone = 'ROOT' | 'THIRD' | 'FIFTH'
export type ChordToneDirection = 'UP' | 'DOWN' | 'NONE'
export type ChordReference = 'CURRENT' | 'NEXT'

export type Step = {
  duration: Duration
  pitch?: Pitch
}

export type Pitch = {
  interval: number
  reference: ChordReference
  chordTone: ChordTone
  direction: ChordToneDirection
}
export type NoteIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
export type BaseNoteName = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'
export type Accidental = '#' | 'b'

export type NoteName =
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

export type PitchedNoteName =
  | 'E1'
  | 'F1'
  | 'F#1'
  | 'Gb1'
  | 'G1'
  | 'G#1'
  | 'Ab1'
  | 'A1'
  | 'A#1'
  | 'Bb1'
  | 'B1'
  | 'C2'
  | 'C#2'
  | 'Db2'
  | 'D2'
  | 'D#2'
  | 'Eb2'
  | 'E2'
  | 'F2'
  | 'F#2'
  | 'Gb2'
  | 'G2'
  | 'G#2'
  | 'Ab2'
  | 'A2'
  | 'A#2'
  | 'Bb2'
  | 'B2'
  | 'C3'
  | 'C#3'
  | 'Db3'
  | 'D3'
  | 'D#3'
  | 'Eb3'
  | 'E3'
  | 'F3'
  | 'F#3'
  | 'Gb3'
  | 'G3'

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
  root: PitchedNoteName
  name: NoteName
  type: ChordType
  path?: string
}

export type SelectItem<T> = {
  label: string
  value: T
}
