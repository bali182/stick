import { combineReducers } from '@reduxjs/toolkit'
import { AppActions } from './actionTypes'
import { barsSlice } from './bars'
import { AppState } from './types'
import { chordsSlice } from './chords'
import { configSlice } from './config'
import { progressionsSlice } from './progressions'
import { fillTransitionsReducer } from './reducers/fillTransitions'
import { clearTransitionsReducer } from './reducers/clearTransitions'
import { createProgressionFromTemplateReducer } from './reducers/createProgressionFromTemplate'
import { deleteChordsReducer } from './reducers/deleteChords'
import { deleteBarsReducer } from './reducers/deleteBars'
import { deleteProgressionsReducer } from './reducers/deleteProgressions'
import { cloneBarReducer } from './reducers/cloneBar'
import { moveBarReducer } from './reducers/moveBar'
import { setNoteCountReducer } from './reducers/setNoteCount'

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
      return createProgressionFromTemplateReducer(state, action)
    case 'global/deleteChords':
      return deleteChordsReducer(state, action)
    case 'global/deleteBars':
      return deleteBarsReducer(state, action)
    case 'global/deleteProgressions':
      return deleteProgressionsReducer(state, action)
    case 'global/cloneBar':
      return cloneBarReducer(state, action)
    case 'global/moveBar':
      return moveBarReducer(state, action)
    case 'global/setNoteCount':
      return setNoteCountReducer(state, action)
    default:
      return slicesReducer(state, action)
  }
}
