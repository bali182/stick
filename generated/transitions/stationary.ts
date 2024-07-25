import { Transition, TransitionCategory } from '../../src/model/types'

export const rootThirdUpRootFifthDown: Transition = {
  id: 'S?;T+0;C,R->C,T,U->C,R->C,F,D;',
  name: 'R 3\u2191 R 5\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
  target: 0,
}

export const rootFifthDownRootThirdUp: Transition = {
  id: 'S?;T+0;C,R->C,F,D->C,R->C,T,U;',
  name: 'R 5\u2193 R 3\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
  ],
  tags: [],
  target: 0,
}

export const rootRootMinus2RootMinus3RootMinus2: Transition = {
  id: 'S?;T+0;C,R->C,R-2->C,R-3->C,R-2;',
  name: 'R R-2 R-3 R-2',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -3, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
  ],
  tags: [],
  target: 0,
}

export const rootFifthDownRootMinus2RootMinus1: Transition = {
  id: 'S?;T+0;C,R->C,F,D->C,R-2->C,R-1;',
  name: 'R 5\u2193 R-2 R-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
  tags: [],
  target: 0,
}

export const stationary: TransitionCategory = {
  id: 'stationary',
  description: 'Transition for when staying on the same chord',
  name: 'Stationary transitions',
  tags: [],
  transitions: [
    rootThirdUpRootFifthDown,
    rootFifthDownRootThirdUp,
    rootRootMinus2RootMinus3RootMinus2,
    rootFifthDownRootMinus2RootMinus1,
  ],
}
