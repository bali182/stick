import { configureStore } from '@reduxjs/toolkit'
import { barsReducer } from './bars'
import { progressionsReducer } from './progressions'
import { chordsReducer } from './chords'

export const store = configureStore({
  reducer: {
    bars: barsReducer,
    progressions: progressionsReducer,
    chords: chordsReducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
