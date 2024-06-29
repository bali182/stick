import { ChordType } from './types'

export function getChordTypeSuffix(
  type: ChordType,
  emptyMajor: boolean = true,
): string {
  switch (type) {
    case 'MAJOR':
      return emptyMajor ? '' : 'maj'
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
