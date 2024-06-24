import { ChordType, NoteName } from './types'

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
