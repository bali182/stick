import { Duration } from '../model/types'

export type ATItem = ATNote | ATRest | ATChord

export type ATChordNote = {
  fret: number
  string: number
}

export type ATNote = {
  type: 'note'
  fret: number
  string: number
  duration: Duration
  label?: string
}

export type ATRest = {
  type: 'rest'
  duration: Duration
  label?: string
}

export type ATChord = {
  type: 'chord'
  notes: ATChordNote[]
  duration: Duration
  label?: string
}

export type ATBar = {
  items: ATItem[]
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
  instrument: 'AcousticBass' | 'AcousticGuitarSteel' | 'AcousticGrandPiano'
  name: string
  shortName: string
  clef: ATClef
  tuning: string[]
  keySignature: ATKeySignature
  timeSignature: ATTimeSignature
  bars: ATBar[]
}
