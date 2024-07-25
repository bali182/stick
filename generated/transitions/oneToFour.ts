import { Transition, TransitionCategory } from '../../src/model/types'

export const rootRootThirdUpFifthUp: Transition = {
  id: 'SM,dom7,m,m7;T+5;C,R->C,R->C,T,U->C,F,U;',
  name: 'R R 3\u2191 5\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 5,
}

export const rootFifthUpRootUpFifthUp: Transition = {
  id: 'SM,dom7,m,m7;T+5;C,R->C,F,U->C,R,U->C,F,U;',
  name: 'R 5\u2191 R\u2191 5\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 5,
}

export const rootRootUpRootMinus2UpFifthUp: Transition = {
  id: 'SM,dom7,m,m7;T+5;C,R->C,R,U->C,R-2,U->C,F,U;',
  name: 'R R\u2191 R-2\u2191 5\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: -2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 5,
}

export const rootRootFifthUpThirdUp: Transition = {
  id: 'SM,dom7,m,m7;T+5;C,R->C,R->C,F,U->C,T,U;',
  name: 'R R 5\u2191 3\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 5,
}

export const rootThirdUpFifthUpThirdUp: Transition = {
  id: 'SM,dom7,m,m7;T+5;C,R->C,T,U->C,F,U->C,T,U;',
  name: 'R 3\u2191 5\u2191 3\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 5,
}

export const rootFifthUpRootUpThirdUp: Transition = {
  id: 'SM,dom7,m,m7;T+5;C,R->C,F,U->C,R,U->C,T,U;',
  name: 'R 5\u2191 R\u2191 3\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 5,
}

export const rootRootFifthUpRoot: Transition = {
  id: 'SM,dom7,m,m7;T+5;C,R->C,R->C,F,U->C,R;',
  name: 'R R 5\u2191 R',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 5,
}

export const rootThirdUpFifthUpRoot: Transition = {
  id: 'SM,dom7,m,m7;T+5;C,R->C,T,U->C,F,U->C,R;',
  name: 'R 3\u2191 5\u2191 R',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 5,
}

export const rootRootMinus2ThirdDownFifthDown: Transition = {
  id: 'SM,dom7,m,m7;T-7;C,R->C,R-2->C,T,D->C,F,D;',
  name: 'R R-2 3\u2193 5\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: -7,
}

export const rootRootMinus2FifthDownThirdDown: Transition = {
  id: 'SM,dom7,m,m7;T-7;C,R->C,R-2->C,F,D->C,T,D;',
  name: 'R R-2 5\u2193 3\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: -7,
}

export const rootFifthDownThirdDownFifthDown: Transition = {
  id: 'SM,dom7,m,m7;T-7;C,R->C,F,D->C,T,D->C,F,D;',
  name: 'R 5\u2193 3\u2193 5\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: -7,
}

export const rootThirdDownFifthDownRootDown: Transition = {
  id: 'SM,dom7,m,m7;T-7;C,R->C,T,D->C,F,D->C,R,D;',
  name: 'R 3\u2193 5\u2193 R\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: -7,
}

export const rootRootMinus2FifthDownRootDown: Transition = {
  id: 'SM,dom7,m,m7;T-7;C,R->C,R-2->C,F,D->C,R,D;',
  name: 'R R-2 5\u2193 R\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: -7,
}

export const oneToFour: TransitionCategory = {
  id: 'oneToFour',
  description: 'Transitioning from I to IV chord',
  name: 'I to IV chord',
  tags: [],
  transitions: [
    rootRootThirdUpFifthUp,
    rootFifthUpRootUpFifthUp,
    rootRootUpRootMinus2UpFifthUp,
    rootRootFifthUpThirdUp,
    rootThirdUpFifthUpThirdUp,
    rootFifthUpRootUpThirdUp,
    rootRootFifthUpRoot,
    rootThirdUpFifthUpRoot,
    rootRootMinus2ThirdDownFifthDown,
    rootRootMinus2FifthDownThirdDown,
    rootFifthDownThirdDownFifthDown,
    rootThirdDownFifthDownRootDown,
    rootRootMinus2FifthDownRootDown,
  ],
}
