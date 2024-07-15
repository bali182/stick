import { TransitionContext } from '../generated/wbp/wbpParser'
import { isNil } from '../src/model/isNil'
import { ChordType } from '../src/model/types'

function getChordType(literal: string): ChordType | undefined {
  switch (literal) {
    case '?':
      return undefined
    case 'M':
      return 'MAJOR'
    case 'm':
      return 'MINOR'
    case 'dom7':
      return 'DOMINANT-SEVENTH'
    case 'maj7':
      return 'MAJOR-SEVENTH'
    case 'm7':
      return 'MINOR-SEVENTH'
    case 'dim':
      return 'DIMINISHED'
    case 'm7b5':
      return 'HALF-DIMINISHED'
    case 'dim7':
      return 'DIMINISHED-SEVENTH'
    case 'aug':
      return 'AUGMENTED'
    case 'aug7':
      return 'AUGMENTED-SEVENTH'
    default:
      throw new TypeError(`Unexpected chord type literal "${literal}".`)
  }
}

export function getSourceChordTypes(
  ast: TransitionContext,
): ChordType[] | undefined {
  const source = ast.sourceChord()
  if (isNil(source)) {
    return undefined
  }
  const chordTypes = source.chordType_list()
  if (isNil(chordTypes) || chordTypes.length === 0) {
    return undefined
  }
  const types = chordTypes.map((type) => getChordType(type.getText()))
  if (types.some(isNil)) {
    return undefined
  }
  return types as ChordType[]
}
