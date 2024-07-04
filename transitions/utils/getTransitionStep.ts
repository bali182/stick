import { StepContext } from '../../generated/wbp/wbpParser'
import { isNil } from '../../src/model/isNil'
import {
  ChordReference,
  ChordToneDirection,
  ChordTone,
  Step,
} from '../../src/model/types'

function getChordReference(ast: StepContext): ChordReference {
  return ast.chordReference().getText() === 'N' ? 'NEXT' : 'CURRENT'
}

function getChordToneDirection(ast: StepContext): ChordToneDirection {
  if (isNil(ast.direction())) {
    const chordTone = ast.chordToneReference().chordTone().getText()
    return chordTone === 'R' ? 'NONE' : 'UP'
  }
  return ast.direction()?.getText?.() === 'D' ? 'DOWN' : 'UP'
}

function getInterval(ast: StepContext): number {
  const chordTone = ast.chordToneReference()
  if (isNil(chordTone.signedInt())) {
    return 0
  }
  const num = parseInt(chordTone.signedInt().INTEGER().getText())
  const sign = chordTone.signedInt().sign().getText()
  return sign === '-' ? -num : num
}

function getChordTone(ast: StepContext): ChordTone {
  const chordTone = ast.chordToneReference().chordTone().getText()
  switch (chordTone) {
    case 'R':
      return 'ROOT'
    case 'T':
      return 'THIRD'
    case 'F':
      return 'FIFTH'
    case 'S':
      return 'SEVENTH'
    default:
      throw new TypeError(`Unexpected chord tone: '${chordTone}'`)
  }
}

export function getTransitionStep(ast: StepContext): Step {
  const reference = getChordReference(ast)
  const direction = getChordToneDirection(ast)
  const interval = getInterval(ast)
  const chordTone = getChordTone(ast)
  return {
    chordRef: reference,
    dir: direction,
    interval,
    tone: chordTone,
  }
}
