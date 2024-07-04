import {
  ChordTone,
  ChordToneDirection,
  Transition,
} from '../../src/model/types'

function getChordToneName(tone: ChordTone): string {
  switch (tone) {
    case 'ROOT':
      return 'R'
    case 'THIRD':
      return '3rd'
    case 'FIFTH':
      return '5th'
    case 'SEVENTH':
      return '7th'
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

export function getTransitionName(ast: Transition): string {
  return ast.steps
    .map((step) => {
      const name = getChordToneName(step.chordTone)
      const direction = getChordToneDirectionName(step.direction)
      const prefix = step.reference === 'CURRENT' ? '' : 'N '
      return `${prefix}${name}${direction}`
    })
    .join(' ')
}
