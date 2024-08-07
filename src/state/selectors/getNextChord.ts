import { isNil } from '../../model/isNil'
import { ChordSymbol } from '../../model/types'
import { barsSlice } from '../bars'
import { chordsSlice } from '../chords'
import { progressionsSlice } from '../progressions'
import { AppState } from '../types'

export function getNextChord(
  state: AppState,
  progressionId: string | undefined,
  barId: string | undefined,
  chordId: string | undefined,
): ChordSymbol | undefined {
  if (isNil(progressionId) || isNil(barId) || isNil(chordId)) {
    return undefined
  }
  const progression = progressionsSlice.selectors.getProgression(
    state,
    progressionId,
  )
  const bar = barsSlice.selectors.getBar(state, barId)
  const chord = chordsSlice.selectors.getChord(state, chordId)

  if (isNil(progression) || isNil(bar) || isNil(chord)) {
    return undefined
  }

  // Is there another chord in the same bar?
  const chordInBarIndex = bar.chords.indexOf(chord.id)
  if (chordInBarIndex < 0) {
    return undefined
  }
  const nextChordInBarId = bar.chords[chordInBarIndex + 1]
  if (!isNil(nextChordInBarId)) {
    return chordsSlice.selectors.getChord(state, nextChordInBarId)
  }

  // Is there another bar in the progression that has a chord?
  const barInProgressionIndex = progression.bars.indexOf(bar.id)
  if (barInProgressionIndex < 0) {
    return undefined
  }
  const nextInProgressionId = progression.bars[barInProgressionIndex + 1]
  if (isNil(nextInProgressionId)) {
    return undefined
  }
  const nextInProgression = barsSlice.selectors.getBar(
    state,
    nextInProgressionId,
  )
  if (isNil(nextInProgression) || nextInProgression.chords.length === 0) {
    return undefined
  }
  return chordsSlice.selectors.getChord(state, nextInProgression.chords[0]!)
}
