import { Transition, TransitionCategory } from '../../src/model/types'

export const rootFifthUpThirdUpThirdMinus1Up: Transition = {
  id: 'SM,dom7,maj7;T+2;C,R->C,F,U->C,T,U->C,T-1,U;',
  name: 'R 5\u2191 3\u2191 3-1\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: -1, tone: 'THIRD' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MAJOR-SEVENTH'],
  target: 2,
}

export const rootRootMinus2RootRootPlus1: Transition = {
  id: 'SM,dom7,m,m7;T+2;C,R->C,R-2->C,R->C,R+1;',
  name: 'R R-2 R R+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 2,
}

export const oneToTwo: TransitionCategory = {
  id: 'oneToTwo',
  description: 'Transitioning from I to III chord',
  name: 'I to II chord',
  tags: [],
  transitions: [rootFifthUpThirdUpThirdMinus1Up, rootRootMinus2RootRootPlus1],
}
