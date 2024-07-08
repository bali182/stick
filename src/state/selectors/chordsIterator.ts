import { isNil } from '../../model/isNil'
import { BarModel, ChordSymbol } from '../../model/types'
import { barsSlice } from '../bars'
import { chordsSlice } from '../chords'
import { progressionsSlice } from '../progressions'
import { AppState } from '../types'

export type ChordsIteratorConfig = {
  allowEmptyProgression: boolean
  allowEmptyBars: boolean
}

const DEFAULT_CONFIG: ChordsIteratorConfig = {
  allowEmptyProgression: false,
  allowEmptyBars: false,
}

export function* chordsIterator(
  state: AppState,
  progressionId: string,
  config: Partial<ChordsIteratorConfig> = {},
): Generator<[ChordSymbol, BarModel]> {
  const cfg: ChordsIteratorConfig = { ...DEFAULT_CONFIG, ...config }
  const progression = progressionsSlice.selectors.getProgression(
    state,
    progressionId,
  )
  if (isNil(progression)) {
    throw new Error(`Progression with id "${progressionId}" doesn't exist.`)
  }
  if (!cfg.allowEmptyProgression && progression.bars.length === 0) {
    throw new TypeError(`Progression "${progressionId}" has no bars.`)
  }
  for (let barIdx = 0; barIdx < progression.bars.length; barIdx += 1) {
    const barId = progression.bars[barIdx]!
    const bar = barsSlice.selectors.getBar(state, barId)
    if (isNil(bar)) {
      throw new Error(`Bar with id "${barId}" doesn't exist.`)
    }
    if (
      !cfg.allowEmptyBars &&
      bar.chords.length === 0 &&
      barIdx !== progression.bars.length - 1
    ) {
      throw new Error(`Bar "${barId}" has no chords.`)
    }
    for (let chordIdx = 0; chordIdx < bar.chords.length; chordIdx += 1) {
      const chordId = bar.chords[chordIdx]!
      const chord = chordsSlice.selectors.getChord(state, chordId)
      if (isNil(chord)) {
        throw new Error(`Chord with id "${chordId}" doesn't exist.`)
      }
      yield [chord, bar]
    }
  }
}
