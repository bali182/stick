import { Bar, ChordProgression, ChordSymbol, Language } from '../model/types'

export type BarsState = Record<string, Bar>
export type ChordSymbolsState = Record<string, ChordSymbol>
export type ProgressionsState = Record<string, ChordProgression>

export type ConfigState = {
  masterVolume: number
  metronomeVolume: number
  bassVolume: number
  chordsVolume: number
  isLooping: boolean
  language?: Language
  showTooltips?: boolean
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
