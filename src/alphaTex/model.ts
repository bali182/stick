import { Duration } from '../model/types'

export type ATNote = {
  fret?: number
  string?: number
  rest?: boolean
  duration: Duration
  chord?: string
}

export type ATBar = {
  notes: ATNote[]
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
