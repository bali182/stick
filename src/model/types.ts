export type ChordProgression = HasId & {
  bars: string[]
  name: string
  tuning: PitchedNote[]
  tags?: Tag[]
  noteCount: number
  bpm?: number
}

export type Bar = HasId & {
  chords: string[]
}

export type ChordSymbol = HasId & {
  root: PitchedNote
  name: Note
  type: ChordType
  tags?: Tag[]
  noteCount?: number
  transitionId?: string
}

export type Transition = {
  id: string
  name: string
  steps: Step[]
  tags: Tag[]
  source?: ChordType[]
  target?: number
}

export type Step = {
  interval: number
  chordRef: ChordReference
  tone: ChordTone
  dir: ChordToneDirection
}

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

export type NoteIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
export type OctaveIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type BaseNoteName = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'
export type Accidental = '#' | 'b'

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

export type Tag =
  | 'CHROMATIC_APPROACH'
  | 'CHORD_TONE_ONLY'
  | 'ASCENDING'
  | 'DESCENDING'

export type HasId = {
  id: string
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
  name: string
  description: string
  tags: Tag[]
  transitions: string[]
}

export type RawTransitionCategory2 = {
  transitions: string[]
  tags?: Tag[]
  source?: ChordType[]
  target?: number
}

export type TransitionCategory = {
  id: string
  name: string
  description: string
  tags: Tag[]
  transitions: Transition[]
}
export type TransitionCategory2 = {
  id: string
  name: string
  sourceFileName: string
  variableName: string
  tags: Tag[]
  transitions: Transition[]
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

export type _AccompanimentBar = {
  barId: string
  chords: _AccompanimentChord[]
}

export type _AccompanimentChord = {
  chordId: string
  duration: number
  pitches: FretboardLocation[]
}

export type ProgressionsStatus = {
  canAutoFillTransitions: boolean
  canGenerateScore: boolean
  canClearTransitions: boolean
}

export type Language = 'hu' | 'en'
