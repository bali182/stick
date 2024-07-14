import { isNil } from '../../model/isNil'
import { ChordProgression } from '../../model/types'
import { AppState } from '../types'

export function getActiveProgression(
  state: AppState,
): ChordProgression | undefined {
  const { progressionId } = state.config
  return isNil(progressionId) ? undefined : state.progressions[progressionId]
}
