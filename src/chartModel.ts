import { ChordType, NoteName } from './types'

export type BarModel = {
  id: string
  chords: ChordSymbol[]
}

export type ChordProgression = {
  id: string
  bars: BarModel[]
}

export type ChordSymbol = {
  id: string
  root?: NoteName
  name: NoteName
  type: ChordType
  path?: string
}
