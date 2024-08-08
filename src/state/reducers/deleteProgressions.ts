import { isNil } from '../../model/isNil'
import { Bar, ChordProgression } from '../../model/types'
import { removeByKeys } from '../../model/utils'
import { DeleteProgressionsAction } from '../actionTypes'
import { AppState } from '../types'

export function deleteProgressions(
  state: AppState,
  action: DeleteProgressionsAction,
): AppState {
  const { progressionIds } = action.payload
  const barIds = progressionIds
    .map((id) => state.progressions[id])
    .filter((prog): prog is ChordProgression => !isNil(prog))
    .flatMap((prog) => prog.bars)

  const chordIds = barIds
    .map((id) => state.bars[id])
    .filter((bar): bar is Bar => !isNil(bar))
    .flatMap((bar) => bar.chords)

  return {
    ...state,
    progressions: removeByKeys(progressionIds, state.progressions),
    bars: removeByKeys(barIds, state.bars),
    chords: removeByKeys(chordIds, state.chords),
  }
}
