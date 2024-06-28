export type ATNote = {
  type: 'note'
  fret: number
  string: number
  duration: number
  chord?: string
}

export type ATRest = {
  type: 'rest'
  duration: number
}

export type ATBar = {
  notes: (ATNote | ATRest)[]
}

export type ATTimeSignature = {
  top: number
  bottom: number
}

export type ATKeySignature =
  | 'Cb'
  | 'Gb'
  | 'Db'
  | 'Ab'
  | 'Eb'
  | 'Bb'
  | 'F'
  | 'C'
  | 'G'
  | 'D'
  | 'A'
  | 'E'
  | 'B'
  | 'F#'
  | 'C#'

export type ATClef = 'Bass' | 'Treble' | 'Tenor' | 'Alto' | 'Neutral'

export type ATTrack = {
  instrument: 'AcousticBass' | 'AcousticGuitarSteel'
  clef: ATClef
  keySignature: ATKeySignature
  timeSignature: ATTimeSignature
  bars: ATBar[]
  title?: string
  subtitle?: string
  artist?: string
  album?: string
  words?: string
  music?: string
  copyright?: string
  tempo?: number
}
