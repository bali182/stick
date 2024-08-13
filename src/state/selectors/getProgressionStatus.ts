import { isNil } from '../../model/isNil'
import { Bar, ChordSymbol, ProgressionsStatus } from '../../model/types'
import { barsSlice } from '../bars'
import { chordsSlice } from '../chords'
import { progressionsSlice } from '../progressions'
import { AppState } from '../types'

function canAutoFillTransitions(bars: Bar[], chords: ChordSymbol[]): boolean {
  // Empty bars, no solution
  if (bars.some((bar) => bar.chords.length === 0)) {
    return false
  }
  // All transitions filled, nothing to do
  if (chords.slice(0, -1).every((chord) => !isNil(chord.transitionId))) {
    return false
  }
  return true
}

function canGenerateScore(bars: Bar[], chords: ChordSymbol[]): boolean {
  // 1 bar and 1 chord slipped through the cracks, no progression then
  if (bars.length === 1 && bars[0]!.chords.length < 2) {
    return false
  }

  // Empty bars, no score
  if (bars.some((bar) => bar.chords.length === 0)) {
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

function canClearTransitions(_bars: Bar[], chords: ChordSymbol[]): boolean {
  return chords.some((chord) => chord.transitionId !== undefined)
}

const ALL_NEGATIVE_RESULT: ProgressionsStatus = {
  canAutoFillTransitions: false,
  canGenerateScore: false,
  canClearTransitions: false,
}

export function getProgressionStatus(
  state: AppState,
  progressionId?: string,
): ProgressionsStatus {
  if (isNil(progressionId)) {
    return ALL_NEGATIVE_RESULT
  }
  const progression = progressionsSlice.selectors.getProgression(
    state,
    progressionId,
  )

  // No progression, can't do either
  if (isNil(progression)) {
    return ALL_NEGATIVE_RESULT
  }

  const bars = progression.bars.map(
    (barId) => barsSlice.selectors.getBar(state, barId)!,
  )

  // No or missing bars, can't do either
  if (bars.length === 0 || bars.some(isNil)) {
    return ALL_NEGATIVE_RESULT
  }

  const chords = bars
    .flatMap((bar) => bar.chords)
    .map((chordId) => chordsSlice.selectors.getChord(state, chordId)!)

  // Missing chords, no solution
  if (chords.some(isNil)) {
    return ALL_NEGATIVE_RESULT
  }

  return {
    canAutoFillTransitions: canAutoFillTransitions(bars, chords),
    canGenerateScore: canGenerateScore(bars, chords),
    canClearTransitions: canClearTransitions(bars, chords),
  }
}
