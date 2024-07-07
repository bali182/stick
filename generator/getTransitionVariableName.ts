import { ChordTone, ChordToneDirection, Transition } from '../src/model/types'
import { camelCase } from './camelCase'

function getChordToneName(tone: ChordTone): string {
  switch (tone) {
    case 'ROOT':
      return 'Root'
    case 'THIRD':
      return 'Third'
    case 'FIFTH':
      return 'Fifth'
  }
}

function getChordToneDirectionName(dir: ChordToneDirection): string {
  switch (dir) {
    case 'UP':
      return 'Up'
    case 'DOWN':
      return 'Down'
    case 'NONE':
      return ''
  }
}

function getIntervalName(interval: number): string {
  if (interval === 0) {
    return ''
  }
  return `${interval > 0 ? 'Plus' : 'Minus'} ${interval}`
}

export function getTransitionVariableName(ast: Transition): string {
  return camelCase(
    ast.steps
      .map((step) => {
        const name = getChordToneName(step.tone)
        const direction = getChordToneDirectionName(step.dir)
        const prefix = step.chordRef === 'CURRENT' ? '' : 'Next'
        const intervalName = getIntervalName(step.interval)
        return `${prefix}${name}${intervalName}${direction}`
      })
      .join(''),
    { pascalCase: false, preserveConsecutiveUppercase: true },
  )
}
