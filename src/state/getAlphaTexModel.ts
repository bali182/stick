import { ATNote, ATTrack } from '../alphaTex/model'
import { BarModel, ChordSymbol } from '../model/types'
import { isNil } from '../model/utils'
import { getBar } from './bars'
import { getChord } from './chords'
import { getProgression } from './progressions'
import { AppState } from './store'

type IntermediateChord = {
  notes: ATNote[]
}

type IntermediateBar = {
  chords: IntermediateChord[]
}

function solve(bars: [BarModel, ChordSymbol[]][]) {
  const iBars: IntermediateBar[] = []
  for (let i = 0; i < bars.length; i += 1) {
    const [, chords] = bars[i]!
    const [, nextChords] = bars[i + 1] ?? []
  }
}

export function getAlphaTexModel(
  state: AppState,
  progressionId: string,
) /*: ATTrack*/ {
  const progression = getProgression(state, progressionId)!
  const bars = progression.bars.map((barId) => getBar(state, barId)!)
  const barsWithChords = bars.map((bar): [BarModel, ChordSymbol[]] => [
    bar,
    bar.chords.map((chordId) => getChord(state, chordId)!),
  ])
}
