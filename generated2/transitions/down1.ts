import { Transition, TransitionCategory2 } from '../../src/model/types'

export const fromAnyToMinus1RootRootFifthUpRoot: Transition = {
  id: 'S:?;T:-1;C,R->C,R->C,F,U->C,R',
  name: 'R R 5\u2191 R',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
  ],
  tags: [],
  target: -1,
}

export const fromAnyToMinus1RootRootFifthDownRoot: Transition = {
  id: 'S:?;T:-1;C,R->C,R->C,F,D->C,R',
  name: 'R R 5\u2193 R',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
  ],
  tags: [],
  target: -1,
}

export const fromAnyToMinus1RootRootThirdUpRoot: Transition = {
  id: 'S:?;T:-1;C,R->C,R->C,T,U->C,R',
  name: 'R R 3\u2191 R',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
  ],
  tags: [],
  target: -1,
}

export const fromAnyToMinus1RootThirdUpFifthUpRoot: Transition = {
  id: 'S:?;T:-1;C,R->C,T,U->C,F,U->C,R',
  name: 'R 3\u2191 5\u2191 R',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
  ],
  tags: [],
  target: -1,
}

export const down1: TransitionCategory2 = {
  id: 'down1-down1',
  name: 'From any chord down 1 semitones',
  variableName: 'down1',
  sourceFileName: 'down1',
  tags: [],
  transitions: [
    fromAnyToMinus1RootRootFifthUpRoot,
    fromAnyToMinus1RootRootFifthDownRoot,
    fromAnyToMinus1RootRootThirdUpRoot,
    fromAnyToMinus1RootThirdUpFifthUpRoot,
  ],
}
