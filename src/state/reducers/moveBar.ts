import { isNil } from '../../model/isNil'
import { ChordProgression } from '../../model/types'
import { arrayMove, updateRecord } from '../../model/utils'
import { MoveBarAction } from '../actionTypes'
import { AppState } from '../types'
import { removeOrphanedTransitions } from './utils'

export function moveBarReducer(
  state: AppState,
  action: MoveBarAction,
): AppState {
  const { barId, overId, progressionId } = action.payload
  const progression = state.progressions[progressionId]

  if (isNil(progression)) {
    return state
  }

  const oldIndex = progression.bars.indexOf(barId)
  const newIndex = progression.bars.indexOf(overId)

  if (newIndex < 0 || oldIndex < 0) {
    return state
  }

  const updatedProg: ChordProgression = {
    ...progression,
    bars: arrayMove(progression.bars, oldIndex, newIndex),
  }

  return removeOrphanedTransitions({
    ...state,
    progressions: updateRecord(state.progressions, [updatedProg]),
  })
}
