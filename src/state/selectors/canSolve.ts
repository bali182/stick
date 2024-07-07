import { isNil } from '../../model/isNil'
import { barsSlice } from '../bars'
import { chordsSlice } from '../chords'
import { progressionsSlice } from '../progressions'
import { AppState } from '../types'

export function canSolve(state: AppState, progressionId: string): boolean {
  const progression = progressionsSlice.selectors.getProgression(
    state,
    progressionId,
  )!
  const bars = progression.bars.map(
    (barId) => barsSlice.selectors.getBar(state, barId)!,
  )

  // No or missing bars, no solution
  if (bars.length === 0 || bars.some(isNil)) {
    return false
  }

  // Empty bars, no solution
  if (bars.some((bar) => bar.chords.length === 0)) {
    return false
  }

  const chords = bars
    .flatMap((bar) => bar.chords)
    .map((chordId) => chordsSlice.selectors.getChord(state, chordId)!)

  // Missing chords, no solution
  if (chords.some(isNil)) {
    return false
  }

  const initial = chords.slice(0, -1)
  const last = chords[chords.length - 1]!

  // Any chords (except the last) that has no path, no solution
  if (initial.some((chord) => isNil(chord.transitionId))) {
    return false
  }

  // Last path should not be set, there is no next chord.
  if (!isNil(last.transitionId)) {
    return false
  }

  return true
}
