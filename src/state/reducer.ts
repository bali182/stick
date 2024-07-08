import { combineReducers } from '@reduxjs/toolkit'
import { AppActions } from './actionTypes'
import { barsSlice } from './bars'
import { AppState } from './types'
import { chordsSlice } from './chords'
import { configSlice } from './config'
import { progressionsSlice } from './progressions'
import { fillTransitionsReducer } from './reducers/fillTransitions'
import { clearTransitionsReducer } from './reducers/clearTransitions'

const slicesReducer = combineReducers({
  bars: barsSlice.reducer,
  chords: chordsSlice.reducer,
  config: configSlice.reducer,
  progressions: progressionsSlice.reducer,
})

export function reducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case 'global/fillTransitions':
      return fillTransitionsReducer(state, action)
    case 'global/clearTransitions':
      return clearTransitionsReducer(state, action)
    default:
      return slicesReducer(state, action)
  }
}
