import { ChordSymbol } from '../chartModel'
import { getBar } from './bars'
import { getChord } from './chords'
import { getProgression } from './progressions'
import { AppState } from './store'
import { isNil } from './utils'

export function getNextChord(
  state: AppState,
  progressionId: string,
  barId: string,
  chordId: string,
): ChordSymbol | undefined {
  const progression = getProgression(state, progressionId)
  const bar = getBar(state, barId)
  const chord = getChord(state, chordId)

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
    return getChord(state, nextChordInBarId)
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
  const nextInProgression = getBar(state, nextInProgressionId)
  if (isNil(nextInProgression) || nextInProgression.chords.length === 0) {
    return undefined
  }
  return getChord(state, nextInProgression.chords[0]!)
}
