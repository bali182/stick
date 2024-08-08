import { isNil } from '../../model/isNil'
import { Bar, ChordProgression } from '../../model/types'
import { mapRecord, removeByKeys } from '../../model/utils'
import { DeleteBarsAction } from '../actionTypes'
import { AppState } from '../types'

export function deleteBars(
  state: AppState,
  action: DeleteBarsAction,
): AppState {
  const { barIds } = action.payload
  const chordIds = barIds
    .map((id) => state.bars[id])
    .filter((bar): bar is Bar => !isNil(bar))
    .flatMap((bar) => bar.chords)

  const bars = removeByKeys(barIds, state.bars)
  const chords = removeByKeys(chordIds, state.chords)
  const progressions = mapRecord(
    state.progressions,
    (prog): ChordProgression => {
      if (prog.bars.some((barId) => barIds.includes(barId))) {
        const brs = prog.bars.filter((barId) => !barIds.includes(barId))
        return { ...prog, bars: brs }
      }
      return prog
    },
  )
  return {
    ...state,
    bars,
    chords,
    progressions,
  }
}
