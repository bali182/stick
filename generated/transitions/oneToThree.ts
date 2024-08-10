import { Transition, TransitionCategory } from '../../src/model/types'

export const rootRootRootPlus2NextRootMinus1: Transition = {
  id: 'SM,dom7,m,m7;T+4;C,R->C,R->C,R+2->N,R-1;',
  name: 'R R R+2 NR-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 2, tone: 'ROOT' },
    { chordRef: 'NEXT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 4,
}

export const rootRootPlus2FifthUpNextRootPlus1: Transition = {
  id: 'SM,dom7,m,m7;T+4;C,R->C,R+2->C,F,U->N,R+1;',
  name: 'R R+2 5\u2191 NR+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 4,
}

export const rootThirdUpFifthUpNextRootPlus1: Transition = {
  id: 'SM,dom7,m,m7;T+4;C,R->C,T,U->C,F,U->N,R+1;',
  name: 'R 3\u2191 5\u2191 NR+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 4,
}

export const rootRootPlus1RootPlus2RootPlus3: Transition = {
  id: 'SM,dom7,m,m7;T+4;C,R->C,R+1->C,R+2->C,R+3;',
  name: 'R R+1 R+2 R+3',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 1, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 3, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 4,
}

export const oneToThree: TransitionCategory = {
  id: 'oneToThree',
  description: 'Transitioning from I to III chord',
  name: 'I to III chord',
  tags: [],
  transitions: [
    rootRootRootPlus2NextRootMinus1,
    rootRootPlus2FifthUpNextRootPlus1,
    rootThirdUpFifthUpNextRootPlus1,
    rootRootPlus1RootPlus2RootPlus3,
  ],
}
