import { Chord, note, transpose } from 'tonal'
import {
  _AccompanimentBar,
  _AccompanimentChord,
  _BarPitches,
  PitchedNote,
} from '../../model/types'
import { barsSlice } from '../bars'
import { chordsSlice } from '../chords'
import { progressionsSlice } from '../progressions'
import { AppState } from '../types'
import {
  DOUBLE_OCTAVE_UP,
  GUITAR_TUNING,
  OCTAVE_UP,
} from '../../model/constants'
import { getChordTypeSuffix } from '../../model/getChordTypeSuffix'
import { getFretboardLocations } from './getFretboardLocations'

export function prepareAlphaTexChords(
  state: AppState,
  progressionId: string,
): _AccompanimentBar[] {
  const progression = progressionsSlice.selectors.getProgression(
    state,
    progressionId,
  )!
  const bars = progression.bars.map(
    (barId) => barsSlice.selectors.getBar(state, barId)!,
  )

  return bars.map((bar): _AccompanimentBar => {
    const chords = bar.chords.map(
      (chordId) => chordsSlice.selectors.getChord(state, chordId)!,
    )
    const chordPitches = chords.map((chord): _AccompanimentChord => {
      const root = transpose(chord.root, DOUBLE_OCTAVE_UP)
      const shortType = getChordTypeSuffix(chord.type, false)
      const notes = Chord.notes(shortType, root) as PitchedNote[]
      const locations = notes.map(
        (note) => getFretboardLocations(note, GUITAR_TUNING, false)[0]!,
      )
      return {
        chordId: chord.id,
        pitches: locations,
        duration: chords.length,
      }
    })

    return {
      barId: bar.id,
      chords: chordPitches,
    }
  })
}
