import { configureStore } from '@reduxjs/toolkit'
import { BarsState, barsReducer } from './bars'
import { ProgressionsState, progressionsReducer } from './progressions'
import { ChordSymbolsState, chordsReducer } from './chords'

export const store = configureStore({
  reducer: {
    bars: barsReducer,
    progressions: progressionsReducer,
    chords: chordsReducer,
  },
})

export type AppState = {
  bars: BarsState
  progressions: ProgressionsState
  chords: ChordSymbolsState
}

export type AppDispatch = typeof store.dispatch
