import {
  BarModel,
  ChordProgression,
  ChordSymbol,
  PitchedNote,
} from '../model/types'

export type BarsState = Record<string, BarModel>
export type ChordSymbolsState = Record<string, ChordSymbol>
export type ProgressionsState = Record<string, ChordProgression>

export type ConfigState = {
  tuning: PitchedNote[]
  volume: number
  isLooping: boolean
}

export type AppState = {
  bars: BarsState
  progressions: ProgressionsState
  chords: ChordSymbolsState
  config: ConfigState
}
