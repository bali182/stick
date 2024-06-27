export type Transition = {
  id: string
  name: string
  steps: Step[]
}

export type Duration = 'WHOLE' | 'HALF' | 'QARTER' | 'EIGHT' | 'SIXTEENTH'
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

export type SimpleNoteName = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'
export type Accidental = '#' | 'b'

export type Note = {
  name: SimpleNoteName
  accidental?: Accidental
}

export type PitchedNote = Note & { pitch: number }

export type TimedNote = [Duration, PitchedNote | 'REST']
export type SolvedWalkPath = [Transition, TimedNote[]]


export type Chord = {
  root: PitchedNote
  third: Note
  fifth: Note
  seventh?: Note
  transition?: Transition
}