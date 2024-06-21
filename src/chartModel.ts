import { ChordSymbol } from './types'

export type BarModel = {
  chords: ChordSymbol[]
}

export type ChordProgression = {
  bars: BarModel[]
}
