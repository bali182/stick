import { Transition, TransitionCategory } from '../../src/model/types'

export const rootThirdUpFifthUpFifthPlus1Up: Transition = {
  id: 'SM,dom7,m,m7;T+9;C,R->C,T,U->C,F,U->C,F+1,U;',
  name: 'R 3\u2191 5\u2191 5+1\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 1, tone: 'FIFTH' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 9,
}

export const rootRootRootMinus1RootMinus2: Transition = {
  id: 'SM,dom7,m,m7;T-3;C,R->C,R->C,R-1->C,R-2;',
  name: 'R R R-1 R-2',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -1, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: -3,
}

export const rootRootPlus2RootPlus3RootPlus4: Transition = {
  id: 'SM,dom7,m,m7;T-3;C,R->C,R+2->C,R+3->C,R+4;',
  name: 'R R+2 R+3 R+4',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 3, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 4, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: -3,
}

export const rootRootPlus2ThirdUpFifthUp: Transition = {
  id: 'SM,dom7,m,m7;T+9;C,R->C,R+2->C,T,U->C,F,U;',
  name: 'R R+2 3\u2191 5\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 9,
}

export const oneToSix: TransitionCategory = {
  id: 'oneToSix',
  description: 'Transitioning from I to VI chord',
  name: 'I to VI chord',
  tags: [],
  transitions: [
    rootThirdUpFifthUpFifthPlus1Up,
    rootRootRootMinus1RootMinus2,
    rootRootPlus2RootPlus3RootPlus4,
    rootRootPlus2ThirdUpFifthUp,
  ],
}
