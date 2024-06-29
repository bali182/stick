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
