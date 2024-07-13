import { Transition, TransitionCategory } from '../../src/model/types'

export const rootThirdUp: Transition = {
  id: 'S?;T?;C,R->C,T,U;',
  name: 'R 3\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
  ],
  tags: ['CHORD_TONE_ONLY'],
}

export const rootThirdDown: Transition = {
  id: 'S?;T?;C,R->C,T,D;',
  name: 'R 3\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
  ],
  tags: ['CHORD_TONE_ONLY'],
}

export const rootFifthUp: Transition = {
  id: 'S?;T?;C,R->C,F,U;',
  name: 'R 5\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
  ],
  tags: ['CHORD_TONE_ONLY'],
}

export const rootFifthDown: Transition = {
  id: 'S?;T?;C,R->C,F,D;',
  name: 'R 5\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
  ],
  tags: ['CHORD_TONE_ONLY'],
}

export const rootAndChordTone: TransitionCategory = {
  id: 'rootAndChordTone',
  description: 'Root and another chord tone passing to the next chord.',
  name: 'Root + chord tone',
  tags: ['CHORD_TONE_ONLY'],
  transitions: [rootThirdUp, rootThirdDown, rootFifthUp, rootFifthDown],
}
