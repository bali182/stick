import { configureStore } from '@reduxjs/toolkit'
import { BarsState, barsReducer } from './bars'
import { ProgressionsState, progressionsReducer } from './progressions'
import { ChordSymbolsState, chordsReducer } from './chords'
import { ConfigState, configReducer } from './config'

export const store = configureStore({
  reducer: {
    bars: barsReducer,
    progressions: progressionsReducer,
    chords: chordsReducer,
    config: configReducer,
  },
})

export type AppState = {
  bars: BarsState
  progressions: ProgressionsState
  chords: ChordSymbolsState
  config: ConfigState
}

export type AppDispatch = typeof store.dispatch
