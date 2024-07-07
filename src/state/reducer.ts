import { combineReducers } from '@reduxjs/toolkit'
import { AppActions } from './actionTypes'
import { barsSlice } from './bars'
import { AppState } from './types'
import { chordsSlice } from './chords'
import { configSlice } from './config'
import { progressionsSlice } from './progressions'

const slicesReducer = combineReducers({
  bars: barsSlice.reducer,
  chords: chordsSlice.reducer,
  config: configSlice.reducer,
  progressions: progressionsSlice.reducer,
})

export function reducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case 'global/fillTransitions':
      return state // TODO
    default:
      return slicesReducer(state, action)
  }
}
