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

export type BassNoteOctave = 0 | 1 | 2 | 3

export type PitchedNoteName = `${NoteName}${BassNoteOctave}`

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
  root?: NoteName
  name: NoteName
  type: ChordType
  path?: string
}

export type SelectItem<T> = {
  label: string
  value: T
}
