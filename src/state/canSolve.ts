import { isNil } from '../model/utils'
import { getBar } from './bars'
import { getChord } from './chords'
import { getProgression } from './progressions'
import { AppState } from './store'

export function canSolve(state: AppState, progressionId: string): boolean {
  const progression = getProgression(state, progressionId)!
  const bars = progression.bars.map((barId) => getBar(state, barId)!)

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
    .map((chordId) => getChord(state, chordId)!)

  // Missing chords, no solution
  if (chords.some(isNil)) {
    return false
  }

  const initial = chords.slice(0, -1)
  const last = chords[chords.length - 1]!

  // Any chords (except the last) that has no path, no solution
  if (initial.some((chord) => isNil(chord.path))) {
    return false
  }

  // Last path should not be set, there is no next chord.
  if (!isNil(last.path)) {
    return false
  }

  return true
}
