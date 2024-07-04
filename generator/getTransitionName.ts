import {
  ChordTone,
  ChordToneDirection,
  Transition,
} from '../src/model/types'

function getChordToneName(tone: ChordTone): string {
  switch (tone) {
    case 'ROOT':
      return 'Root'
    case 'THIRD':
      return '3rd'
    case 'FIFTH':
      return '5th'
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
  return `${interval > 0 ? '+' : '-'}${Math.abs(interval)}`
}

export function getTransitionName(ast: Transition): string {
  return ast.steps
    .map((step) => {
      const name = getChordToneName(step.tone)
      const direction = getChordToneDirectionName(step.dir)
      const intervalName = getIntervalName(step.interval)
      const prefix = step.chordRef === 'CURRENT' ? '' : 'Next '
      return `${prefix}${name}${intervalName}${direction}`
    })
    .join(' ')
}
