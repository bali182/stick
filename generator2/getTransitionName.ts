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
      return 'R'
    case 'THIRD':
      return '3'
    case 'FIFTH':
      return '5'
  }
}

function getChordToneDirectionName(dir: ChordToneDirection): string {
  switch (dir) {
    case 'UP':
      return '↑'
    case 'DOWN':
      return '↓'
    case 'NONE':
      return ''
  }
}

function getIntervalName(interval: number): string {
  if (interval === 0) {
    return ''
  }
  const name = Math.abs(interval)
  return `${interval > 0 ? '+' : '-'}${name}`
}

export function getTransitionName(transition: Transition): string {
  const stepNames = transition.steps
    .map((step) => {
      const name = getChordToneName(step.tone)
      const direction = getChordToneDirectionName(step.dir)
      const intervalName = getIntervalName(step.interval)
      const prefix = step.chordRef === 'CURRENT' ? '' : 'N'
      return `${prefix}${name}${intervalName}${direction}`
    })
    .join(' ')

  return stepNames
}
