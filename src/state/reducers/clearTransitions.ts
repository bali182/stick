import { ClearTransitionsAction } from '../actionTypes'
import { chordsIterator } from '../selectors/chordsIterator'
import { AppState } from '../types'

export function clearTransitionsReducer(
  state: AppState,
  action: ClearTransitionsAction,
): AppState {
  try {
    const chordsState = { ...state.chords }
    const chordsGenerator = chordsIterator(
      state,
      action.payload.progressionId,
      { allowEmptyBars: true, allowEmptyProgression: true },
    )
    for (let [{ transitionId, ...chord }] of chordsGenerator) {
      chordsState[chord.id] = chord
    }
    return { ...state, chords: chordsState }
  } catch (e) {
    console.error(e)
    return state
  }
}
