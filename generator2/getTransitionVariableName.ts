import { getChordTypeSuffix } from '../src/model/getChordTypeSuffix'
import { isNil } from '../src/model/isNil'
import {
  ChordTone,
  ChordToneDirection,
  ChordType,
  Transition,
} from '../src/model/types'
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

function getSourceName(source?: ChordType[]): string {
  if (isNil(source)) {
    return 'fromAny'
  }
  const typeNames = source
    .map((s) => getChordTypeSuffix(s, false))
    .map((name) => camelCase(name, { pascalCase: true }))
    .join('Or')
  return `from${typeNames}`
}

function getTargetName(target?: number): string {
  if (isNil(target)) {
    return 'ToAny'
  }
  if (target === 0) {
    return 'ToStationary'
  }
  const sign = target < 0 ? 'Minus' : 'Plus'
  return `To${sign}${Math.abs(target)}`
}

export function getTransitionVariableName(ast: Transition): string {
  const stepsName = ast.steps
    .map((step) => {
      const name = getChordToneName(step.tone)
      const direction = getChordToneDirectionName(step.dir)
      const prefix = step.chordRef === 'CURRENT' ? '' : 'Next'
      const intervalName = getIntervalName(step.interval)
      return `${prefix}${name}${intervalName}${direction}`
    })
    .join('')

  const sourceName = getSourceName(ast.source)
  const targetName = getTargetName(ast.target)
  return camelCase(`${sourceName}${targetName}${stepsName}`, {
    pascalCase: false,
    preserveConsecutiveUppercase: true,
  })
}
