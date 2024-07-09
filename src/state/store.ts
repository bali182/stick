import { configureStore, Middleware } from '@reduxjs/toolkit'
import { reducer } from './reducer'
import { AppState } from './types'
import { initialState } from './initialState'

const STATE_STORAGE_KEY = 'stick-app-data'

function saveState(state: AppState) {
  try {
    localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state))
  } catch (e) {
    console.error('Could not save state', e)
  }
}

// TODO validate schema
function loadState(): AppState {
  try {
    const serializedState = localStorage.getItem(STATE_STORAGE_KEY)
    if (serializedState === null) {
      return initialState
    }
    return JSON.parse(serializedState)
  } catch (e) {
    console.error('Could not load state', e)
    return initialState
  }
}

const saveStateMiddleware: Middleware<{}, AppState> =
  (store) => (next) => (action) => {
    const result = next(action)
    saveState(store.getState())
    return result
  }

export const store = configureStore({
  reducer: reducer as any,
  middleware: (deafult) => deafult().concat(saveStateMiddleware),
  preloadedState: loadState(),
})

export type AppDispatch = typeof store.dispatch
