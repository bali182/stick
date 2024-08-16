import { Transition, TransitionCategory2 } from '../../src/model/types'

export const fromAnyToPlus5RootRootThirdUpFifthUp: Transition = {
  id: 'S:?;T:5;C,R->C,R->C,T,U->C,F,U',
  name: 'R R 3\u2191 5\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
  target: 5,
}

export const fromAnyToPlus5RootFifthUpRootUpFifthUp: Transition = {
  id: 'S:?;T:5;C,R->C,F,U->C,R,U->C,F,U',
  name: 'R 5\u2191 R\u2191 5\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
  target: 5,
}

export const fromAnyToPlus5RootRootUpRootMinus2UpFifthUp: Transition = {
  id: 'S:?;T:5;C,R->C,R,U->C,R-2,U->C,F,U',
  name: 'R R\u2191 R-2\u2191 5\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: -2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
  target: 5,
}

export const fromAnyToPlus5RootRootFifthUpThirdUp: Transition = {
  id: 'S:?;T:5;C,R->C,R->C,F,U->C,T,U',
  name: 'R R 5\u2191 3\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
  ],
  tags: [],
  target: 5,
}

export const fromAnyToPlus5RootThirdUpFifthUpThirdUp: Transition = {
  id: 'S:?;T:5;C,R->C,T,U->C,F,U->C,T,U',
  name: 'R 3\u2191 5\u2191 3\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
  ],
  tags: [],
  target: 5,
}

export const fromAnyToPlus5RootFifthUpRootUpThirdUp: Transition = {
  id: 'S:?;T:5;C,R->C,F,U->C,R,U->C,T,U',
  name: 'R 5\u2191 R\u2191 3\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
  ],
  tags: [],
  target: 5,
}

export const fromAnyToPlus5RootRootFifthUpRoot: Transition = {
  id: 'S:?;T:5;C,R->C,R->C,F,U->C,R',
  name: 'R R 5\u2191 R',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
  ],
  tags: [],
  target: 5,
}

export const fromAnyToPlus5RootThirdUpFifthUpRoot: Transition = {
  id: 'S:?;T:5;C,R->C,T,U->C,F,U->C,R',
  name: 'R 3\u2191 5\u2191 R',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
  ],
  tags: [],
  target: 5,
}

export const up5: TransitionCategory2 = {
  id: 'up5-up5',
  name: 'From any chord up 5 semitones',
  variableName: 'up5',
  sourceFileName: 'up5',
  tags: [],
  transitions: [
    fromAnyToPlus5RootRootThirdUpFifthUp,
    fromAnyToPlus5RootFifthUpRootUpFifthUp,
    fromAnyToPlus5RootRootUpRootMinus2UpFifthUp,
    fromAnyToPlus5RootRootFifthUpThirdUp,
    fromAnyToPlus5RootThirdUpFifthUpThirdUp,
    fromAnyToPlus5RootFifthUpRootUpThirdUp,
    fromAnyToPlus5RootRootFifthUpRoot,
    fromAnyToPlus5RootThirdUpFifthUpRoot,
  ],
}
