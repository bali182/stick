import { Transition, TransitionCategory } from '../../src/model/types'

export const rootFifthDownRootRootMinus1: Transition = {
  id: 'SM,dom7,m,m7;T-2;C,R->C,F,D->C,R->C,R-1;',
  name: 'R 5\u2193 R R-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: -2,
}

export const rootThirdUpRootRootMinus1: Transition = {
  id: 'SM,dom7,m,m7;T-2;C,R->C,T,U->C,R->C,R-1;',
  name: 'R 3\u2191 R R-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: -2,
}

export const rootThirdUpFifthUpFifthPlus2Up: Transition = {
  id: 'SM,dom7,m,m7;T+10;C,R->C,T,U->C,F,U->C,F+2,U;',
  name: 'R 3\u2191 5\u2191 5+2\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 2, tone: 'FIFTH' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 10,
}

export const rootThirdUpFifthUpRootUp: Transition = {
  id: 'SM,dom7,m,m7;T+10;C,R->C,T,U->C,F,U->C,R,U;',
  name: 'R 3\u2191 5\u2191 R\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 10,
}

export const rootRootPlus2UpThirdUpFifthMinus2Up: Transition = {
  id: 'SM,dom7,m,m7;T+10;C,R->C,R+2,U->C,T,U->C,F-2,U;',
  name: 'R R+2\u2191 3\u2191 5-2\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: -2, tone: 'FIFTH' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 10,
}

export const rootFifthUpRootUpFifthPlus2Up: Transition = {
  id: 'SM,dom7,m,m7;T+10;C,R->C,F,U->C,R,U->C,F+2,U;',
  name: 'R 5\u2191 R\u2191 5+2\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 2, tone: 'FIFTH' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 10,
}

export const twoToOne: TransitionCategory = {
  id: 'twoToOne',
  description: 'Transitioning from I to II chord',
  name: 'II to I chord',
  tags: [],
  transitions: [
    rootFifthDownRootRootMinus1,
    rootThirdUpRootRootMinus1,
    rootThirdUpFifthUpFifthPlus2Up,
    rootThirdUpFifthUpRootUp,
    rootRootPlus2UpThirdUpFifthMinus2Up,
    rootFifthUpRootUpFifthPlus2Up,
  ],
}
