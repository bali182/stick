import { ChordSymbol, ChordType } from './chartModel'
import { PITCHED_NOTE_MAP, isNil } from './utils'

function getChordTypeSuffix(type: ChordType): string {
  switch (type) {
    case 'MAJOR':
      return ''
    case 'DOMINANT-SEVENTH':
      return '7'
    case 'MAJOR-SEVENTH':
      return 'maj7'
    case 'MINOR':
      return 'm'
    case 'MINOR-SEVENTH':
      return 'm7'
    case 'DIMINISHED':
      return 'dim'
    case 'HALF-DIMINISHED':
      return 'm7b5'
    case 'DIMINISHED-SEVENTH':
      return 'dim7'
    case 'AUGMENTED':
      return 'aug'
    case 'AUGMENTED-SEVENTH':
      return 'aug7'
  }
}

export function getChordSymbolName(chord: ChordSymbol | undefined): string {
  if (!chord) {
    return 'Missing'
  }
  const chordName = `${chord.name}${getChordTypeSuffix(chord.type)}`
  const sameRoots = PITCHED_NOTE_MAP[chord.name]
  return !isNil(chord.root) && !sameRoots.includes(chord.root)
    ? `${chordName}/${chord.root}`
    : chordName
}
