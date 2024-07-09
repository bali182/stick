import { Chord, distance, Interval } from 'tonal'
import {
  _AccompanimentBar,
  _AccompanimentChord,
  _BarPitches,
  ChordSymbol,
  FretboardLocation,
  Note,
} from '../../model/types'
import { barsSlice } from '../bars'
import { chordsSlice } from '../chords'
import { progressionsSlice } from '../progressions'
import { AppState } from '../types'
import { GUITAR_TUNING } from '../../model/constants'
import { getChordTypeSuffix } from '../../model/getChordTypeSuffix'
import { getPitchedNoteParts } from '../../model/getPitchedNoteParts'

const ROOT_LOCATIONS: Record<Note, FretboardLocation> = {
  'A#': { note: 'A#5', fret: 6, string: 6 },
  Bb: { note: 'Bb5', fret: 6, string: 6 },
  B: { note: 'B5', fret: 7, string: 6 },
  C: { note: 'C6', fret: 8, string: 6 },
  'C#': { note: 'C#6', fret: 9, string: 6 },
  Db: { note: 'Db6', fret: 9, string: 6 },
  D: { note: 'D6', fret: 10, string: 6 },
  'D#': { note: 'D#6', fret: 10, string: 6 },
  Eb: { note: 'Eb6', fret: 11, string: 6 },

  E: { note: 'E6', fret: 7, string: 5 },
  F: { note: 'F6', fret: 8, string: 5 },
  'F#': { note: 'F#6', fret: 9, string: 5 },
  Gb: { note: 'Gb6', fret: 9, string: 5 },
  G: { note: 'G6', fret: 10, string: 5 },
  'G#': { note: 'G#6', fret: 11, string: 5 },
  Ab: { note: 'Ab6', fret: 11, string: 5 },
  A: { note: 'A6', fret: 12, string: 5 },
}

function getChordNotesOnDifferentStrings(
  chord: ChordSymbol,
): FretboardLocation[] {
  const [rootNote] = getPitchedNoteParts(chord.root)
  const rootLocation = ROOT_LOCATIONS[rootNote]
  const rootStringIndex = rootLocation.string - 1

  const shortType = getChordTypeSuffix(chord.type, false)
  const notes = Chord.notes(shortType, rootNote) as Note[]

  return notes.map((note, index): FretboardLocation => {
    if (note === rootNote) {
      return rootLocation
    }
    const stringPitch = GUITAR_TUNING[rootStringIndex - index]!
    const [stringNote] = getPitchedNoteParts(stringPitch)
    return {
      note: undefined!, // TODO don't care for now about this
      string: rootLocation.string - index,
      fret: Interval.semitones(distance(stringNote, note)),
    }
  })
}

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
      return {
        chordId: chord.id,
        pitches: getChordNotesOnDifferentStrings(chord),
        duration: chords.length,
      }
    })

    return {
      barId: bar.id,
      chords: chordPitches,
    }
  })
}
