import { getChordTypeSuffix } from './getChordTypeSuffix'
import { ChordSymbol } from './types'
import { getPossiblePitches, isNil } from './utils'

export function getChordSymbolName(chord: ChordSymbol | undefined): string {
  if (!chord) {
    return 'Missing'
  }
  const chordName = `${chord.name}${getChordTypeSuffix(chord.type)}`
  const sameRoots = getPossiblePitches(chord.name)
  return !isNil(chord.root) && !sameRoots.includes(chord.root)
    ? `${chordName}/${chord.root}`
    : chordName
}
