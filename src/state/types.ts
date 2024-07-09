import { BarModel, ChordProgression, ChordSymbol } from '../model/types'

export type BarsState = Record<string, BarModel>
export type ChordSymbolsState = Record<string, ChordSymbol>
export type ProgressionsState = Record<string, ChordProgression>

export type ConfigState = {
  progressionId: string | undefined
  masterVolume: number
  metronomeVolume: number
  bassVolume: number
  chordsVolume: number
  isLooping: boolean
}

export type AppState = {
  bars: BarsState
  progressions: ProgressionsState
  chords: ChordSymbolsState
  config: ConfigState
}

export type ProgressionTemplate = {
  progression: ChordProgression
  bars: BarsState
  chords: ChordSymbolsState
}
