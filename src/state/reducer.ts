import { combineReducers } from '@reduxjs/toolkit'
import { AppActions } from './actionTypes'
import { barsSlice } from './bars'
import { AppState } from './types'
import { chordsSlice } from './chords'
import { configSlice } from './config'
import { progressionsSlice } from './progressions'
import { fillTransitionsReducer } from './reducers/fillTransitions'
import { clearTransitionsReducer } from './reducers/clearTransitions'
import { createProgressionFromTemplate } from './reducers/createProgressionFromTemplate'
import { deleteChords } from './reducers/deleteChords'
import { deleteBars } from './reducers/deleteBars'
import { deleteProgressions } from './reducers/deleteProgressions'
import { cloneBar } from './reducers/cloneBar'

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
    case 'global/createProgressionFromTemplate':
      return createProgressionFromTemplate(state, action)
    case 'global/deleteChords':
      return deleteChords(state, action)
    case 'global/deleteBars':
      return deleteBars(state, action)
    case 'global/deleteProgressions':
      return deleteProgressions(state, action)
    case 'global/cloneBar':
      return cloneBar(state, action)
    default:
      return slicesReducer(state, action)
  }
}
