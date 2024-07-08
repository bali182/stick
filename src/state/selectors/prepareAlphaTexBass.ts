import { nanoid } from 'nanoid'
import { getPitchedNotes } from '../../model/getPitchedNotes'
import {
  BarModel,
  ChordSymbol,
  PitchedNote,
  _BarPitches,
  _ChordChord,
  _Pitch,
} from '../../model/types'
import { getFretboardLocations } from './getFretboardLocations'
import { getChordSymbolName } from '../../model/getChordSymbolName'
import { getTransition } from '../../model/getTransition'
import { AppState } from '../types'
import { chordsSlice } from '../chords'
import { configSlice } from '../config'
import { progressionsSlice } from '../progressions'
import { barsSlice } from '../bars'

const lowestFret = (a: { fret: number }, b: { fret: number }) => a.fret - b.fret

const closestFretTo =
  (fret: number) => (a: { fret: number }, b: { fret: number }) =>
    Math.abs(fret - a.fret) - Math.abs(fret - b.fret)

function getPitches(
  chords: ChordSymbol[],
  chordsToBars: Record<string, string>,
  progressionId: string,
): _Pitch[] {
  const pitches: _Pitch[] = []

  chords.forEach((chord, index): void => {
    // Last chord, nowhere to go, we play the root.
    const barId = chordsToBars[chord.id]!
    const chordId = chord.id

    if (index === chords.length - 1) {
      const note = chord.root
      pitches.push({
        id: nanoid(),
        progressionId,
        barId,
        chordId,
        note,
        fret: -1,
        duration: -1,
        string: -1,
        meta: getChordSymbolName(chord),
      })
      return
    }
    // Get the next chord, and collect the pitches using the first chords path
    const trns = getTransition(chord.transitionId!)
    getPitchedNotes(chord, chords[index + 1]!, trns).forEach((note, i) => {
      pitches.push({
        id: nanoid(),
        progressionId,
        barId,
        chordId,
        note,
        fret: -1,
        duration: -1,
        string: -1,
        meta: i === 0 ? getChordSymbolName(chord) : undefined,
      })
    })
  })

  return pitches
}

function addFretboardLocations(pitches: _Pitch[], tuning: PitchedNote[]): void {
  if (pitches.length === 0) {
    return
  }

  // Compute the first note (lowest fret position), so the rest have a reference
  const firstPitch = pitches[0]!
  const firstPitchPositions = getFretboardLocations(
    firstPitch.note,
    tuning,
    false,
  ).sort(lowestFret)

  const firstNoteLowestPos = firstPitchPositions[0]!
  firstPitch.fret = firstNoteLowestPos.fret
  firstPitch.string = firstNoteLowestPos.string

  // Try to find the best position for all subsequent notes
  for (let i = 1; i < pitches.length; i += 1) {
    const pitch = pitches[i]!
    const previous = pitches[i - 1]!
    const positions = getFretboardLocations(pitch.note, tuning, false).sort(
      closestFretTo(previous.fret),
    )
    const position = positions[0]!
    pitch.fret = position.fret
    pitch.string = position.string
  }
}

function groupPitches(pitches: _Pitch[], bars: BarModel[]): _BarPitches[] {
  return bars.map((bar): _BarPitches => {
    const chords = bar.chords.map(
      (chordId): _ChordChord => ({
        chordId,
        pitches: pitches.filter((pitch) => pitch.chordId === chordId),
      }),
    )
    return { barId: bar.id, chords }
  })
}

/**
 * TODO: This simply groups by number of notes!
 * Might need something more sophisticated in the future.
 */
function addDurations(bars: _BarPitches[]): void {
  bars.forEach((bar) => {
    // If there is 1 chord, it has a whole bar, otherwise half
    const perChordLength = bar.chords.length
    bar.chords.forEach((chord) => {
      const length = perChordLength * chord.pitches.length
      chord.pitches.forEach((pitch) => (pitch.duration = length))
    })
  })
}

/** Mapping chords to bars (key: chordId, value: barId) */
function mapChordsToBars(bars: BarModel[]): Record<string, string> {
  return bars.reduce((mapping, bar) => {
    bar.chords.forEach((chordId) => {
      mapping[chordId] = bar.id
    })
    return mapping
  }, {} as Record<string, string>)
}

export function prepareAlphaTexBass(
  state: AppState,
  progressionId: string,
): _BarPitches[] {
  const tuning = configSlice.selectors.getTuning(state)
  const progression = progressionsSlice.selectors.getProgression(
    state,
    progressionId,
  )!
  const bars = progression.bars.map(
    (barId) => barsSlice.selectors.getBar(state, barId)!,
  )
  const chordsToBarsMapping = mapChordsToBars(bars)
  const chords = bars.flatMap((bar) =>
    bar.chords.map(
      (chordId) => chordsSlice.selectors.getChord(state, chordId)!,
    ),
  )
  const pitches = getPitches(chords, chordsToBarsMapping, progressionId)
  // All these are mutating the Pitches array!!!
  addFretboardLocations(pitches, tuning)
  const grouped = groupPitches(pitches, bars)
  addDurations(grouped)
  // Mutation over, don't mutate these outside of this file!!!
  return grouped
}
