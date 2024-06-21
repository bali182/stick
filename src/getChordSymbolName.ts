import { ChordSymbol, ChordType } from './types'

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

export function getChordSymbolName(chord: ChordSymbol): string {
  const chordName = `${chord.name}${getChordTypeSuffix(chord.type)}`
  return chord.root !== undefined && chord.root !== chord.name
    ? `${chordName}/${chord.root}`
    : chordName
}
