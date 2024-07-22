import { canTransition } from '../../model/canTransition'
import { TRANSITIONS } from '../../model/constants'
import { isNil } from '../../model/isNil'
import { randomElement } from '../../model/randomElement'
import { ChordSymbol } from '../../model/types'
import { FillTransitionsAction } from '../actionTypes'
import { progressionsSlice } from '../progressions'
import { chordsIterator } from '../selectors/chordsIterator'
import { AppState } from '../types'

export function fillTransitionsReducer(
  state: AppState,
  action: FillTransitionsAction,
): AppState {
  try {
    const progression = progressionsSlice.selectors.getProgression(
      state,
      action.payload.progressionId,
    )
    const tuning = progression?.tuning
    if (isNil(progression) || isNil(tuning)) {
      return state
    }
    const updatedChords: ChordSymbol[] = []
    const chordsGenerator = chordsIterator(state, action.payload.progressionId)
    const chordsWithBars = Array.from(chordsGenerator)
    for (let i = 0; i < chordsWithBars.length; i += 1) {
      const [from] = chordsWithBars[i]!
      // Already has a transition or last chord
      if (!isNil(from.transitionId) || i === chordsWithBars.length - 1) {
        continue
      }
      const [to] = chordsWithBars[i + 1]!
      const preferredNoteCount = from.noteCount ?? progression.noteCount ?? 4
      const tags = Array.from(
        new Set([...(progression.tags ?? []), ...(from.tags ?? [])]),
      )

      const transitions = TRANSITIONS.filter((transition) =>
        canTransition(from, to, tuning, transition),
      )
        .filter((transition) => transition.steps.length === preferredNoteCount)
        .filter((transition) => tags.every((t) => transition.tags.includes(t)))
      // No viable transitions
      if (transitions.length === 0) {
        continue
      }
      const transition = randomElement(transitions)!
      updatedChords.push({ ...from, transitionId: transition.id })
    }
    const chordsState = { ...state.chords }
    for (let chord of updatedChords) {
      chordsState[chord.id] = chord
    }
    return { ...state, chords: chordsState }
  } catch (e) {
    console.error(e)
    return state
  }
}
