import { isNil } from '../../model/isNil'
import { ChordSymbol } from '../../model/types'
import { updateRecord } from '../../model/utils'
import { AppState } from '../types'

export function removeOrphanedTransitions(
  state: AppState,
  progressionId: string | undefined,
): AppState {
  const { progressions: _progressions, chords, bars } = state
  const chordsWithoutFollowup: ChordSymbol[] = []

  const progressions = isNil(progressionId)
    ? Object.values(_progressions)
    : [_progressions[progressionId]]

  for (let p = 0; p < progressions.length; p++) {
    const progression = progressions[p]
    if (isNil(progression)) {
      continue
    }
    for (let b = 0; b < progression.bars.length; b++) {
      const barId = progression.bars[b]!
      const bar = bars[barId]
      if (isNil(bar)) {
        continue
      }
      const nextBarId = progression.bars[b + 1]
      const nextBar = isNil(nextBarId) ? undefined : bars[nextBarId]
      const isNextBarEmpty = isNil(nextBar) || nextBar.chords.length === 0

      if (isNextBarEmpty && bar.chords.length > 0) {
        const lastChordIdInBar = bar.chords[bar.chords.length - 1]!
        const lastChordInBar = chords[lastChordIdInBar]
        if (!isNil(lastChordInBar)) {
          chordsWithoutFollowup.push(lastChordInBar)
        }
      }
    }
  }

  const updatedChords = chordsWithoutFollowup
    .filter((chord) => !isNil(chord.transitionId))
    .map((chord): ChordSymbol => ({ ...chord, transitionId: undefined }))

  return {
    ...state,
    chords: updateRecord(chords, updatedChords),
  }
}
