import { NOTE_NAMES, CHORD_TYPES } from './model/constants'
import { getChordSymbolName } from './model/getChordSymbolName'
import { ChordSymbol, ChordType, Note } from './model/types'

const allChords = NOTE_NAMES.flatMap((note) =>
  CHORD_TYPES.map((type): [Note, ChordType] => [note, type]),
)

export const ALL_CHORD_NAMES = allChords.map(([name, type]) =>
  getChordSymbolName({ name, type, root: `${name}0` } as ChordSymbol),
)

export const CHORD_NAMES_TO_PARTS = allChords.reduce((map, chord) => {
  const [name, type] = chord
  const chordName = getChordSymbolName({
    name,
    type,
    root: `${name}0`,
  } as ChordSymbol).toLowerCase()
  map.set(chordName, chord)
  return map
}, new Map<string, [Note, ChordType]>())
