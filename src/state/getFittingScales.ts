import { Chord as _Chord, Note as _Note, Scale } from 'tonal'
import { ChordType, Note } from '../model/types'
import { CHORD_TYPES, NOTE_NAMES } from '../model/constants'
import { getChordSymbolName } from '../model/getChordSymbolName'
import { takeWhile } from '../model/utils'

type MatchResult = {
  index: number
  scaleRoot: Note
  scaleName: string
}

function getScaleMap(
  scales: string[],
  notes: Note[],
): Map<string, Map<Note, Note[]>> {
  const result = new Map<string, Map<Note, Note[]>>()
  for (const scale of scales) {
    const scaleMap = new Map<Note, Note[]>()
    for (const root of notes) {
      const notes = Scale.get(`${root} ${scale}`).notes.map((note) =>
        _Note.simplify(note),
      )
      scaleMap.set(root, notes as Note[])
    }
    result.set(scale, scaleMap)
  }
  return result
}

function getChordToneMap(roots: Note[], chordTypes: ChordType[]) {
  const chordTonesMap = new Map<string, Note[]>()
  for (const root of roots) {
    for (const type of chordTypes) {
      const chordName = getChordSymbolName({
        name: root,
        root: `${root}1`,
        id: '-',
        type,
      })
      const notes = _Chord
        .get(chordName)
        .notes.map((note) => _Note.simplify(note))
      chordTonesMap.set(chordName, notes as Note[])
    }
  }
  return chordTonesMap
}

const SCALES = ['major', 'harmonic minor', 'melodic minor']
const SCALE_MAP = getScaleMap(SCALES, NOTE_NAMES)
const CHORD_TONE_MAP = getChordToneMap(NOTE_NAMES, CHORD_TYPES)

function getMatch(
  chords: string[],
  scaleRoot: Note,
  scaleName: string,
): MatchResult {
  const scaleNotes = SCALE_MAP.get(scaleName)?.get(scaleRoot) ?? []
  for (let i = 0; i < chords.length; i += 1) {
    const chord = chords[i]!
    const notes = CHORD_TONE_MAP.get(chord) ?? []
    const missesNote = notes.some((note) => !scaleNotes.includes(note))
    if (missesNote) {
      return { index: i - 1, scaleName, scaleRoot }
    }
  }
  return { index: chords.length - 1, scaleName, scaleRoot }
}

function collect(chords: string[], threshold: number): MatchResult[] {
  const matches: MatchResult[] = []
  // Collect all, that match some from the beginning of the progression
  for (const scaleRoot of NOTE_NAMES) {
    for (const scaleName of SCALES) {
      const match = getMatch(chords, scaleRoot, scaleName)
      if (match.index >= 0) {
        matches.push(match)
      }
    }
  }

  // Sort matches descending
  matches.sort((matchA, matchB) => matchB.index - matchA.index)

  // If there are no matches, panic
  const [head] = matches
  if (head!.index === -1) {
    throw new Error(`No chord from ${chords} matches any scale.`)
  }
  // If the matches don't hit the threshold, just return the first
  if (head!.index + 1 < threshold) {
    return [head!]
  }
  // Get the matches that hit the threshold
  return takeWhile(matches, (match) => match.index + 1 >= threshold)
}

console.log(collect(['Am', 'Dm', 'G', 'Em'], 3))
