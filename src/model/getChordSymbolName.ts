import { getChordTypeSuffix } from './getChordTypeSuffix'
import { getPitchedNoteParts } from './getPitchedNoteParts'
import { ChordSymbol } from './types'

export function getChordSymbolName(chord: ChordSymbol | undefined): string {
  if (!chord) {
    return 'Missing'
  }
  const chordName = `${chord.name}${getChordTypeSuffix(chord.type)}`
  const [rootNote] = getPitchedNoteParts(chord.root)
  return chord.name !== rootNote ? `${chordName}/${chord.root}` : chordName
}
