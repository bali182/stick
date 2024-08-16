import { Transition, TransitionCategory2 } from '../../src/model/types'

export const fromAnyToPlus10RootThirdUpFifthUpFifthPlus2Up: Transition = {
  id: 'S:?;T:10;C,R->C,T,U->C,F,U->C,F+2,U',
  name: 'R 3\u2191 5\u2191 5+2\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 2, tone: 'FIFTH' },
  ],
  tags: [],
  target: 10,
}

export const fromAnyToPlus10RootThirdUpFifthUpRootUp: Transition = {
  id: 'S:?;T:10;C,R->C,T,U->C,F,U->C,R,U',
  name: 'R 3\u2191 5\u2191 R\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'ROOT' },
  ],
  tags: [],
  target: 10,
}

export const fromAnyToPlus10RootRootPlus2UpThirdUpFifthMinus2Up: Transition = {
  id: 'S:?;T:10;C,R->C,R+2,U->C,T,U->C,F-2,U',
  name: 'R R+2\u2191 3\u2191 5-2\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: -2, tone: 'FIFTH' },
  ],
  tags: [],
  target: 10,
}

export const fromAnyToPlus10RootFifthUpRootUpFifthPlus2Up: Transition = {
  id: 'S:?;T:10;C,R->C,F,U->C,R,U->C,F+2,U',
  name: 'R 5\u2191 R\u2191 5+2\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 2, tone: 'FIFTH' },
  ],
  tags: [],
  target: 10,
}

export const up10: TransitionCategory2 = {
  id: 'up10-up10',
  name: 'From any chord up 10 semitones',
  variableName: 'up10',
  sourceFileName: 'up10',
  tags: [],
  transitions: [
    fromAnyToPlus10RootThirdUpFifthUpFifthPlus2Up,
    fromAnyToPlus10RootThirdUpFifthUpRootUp,
    fromAnyToPlus10RootRootPlus2UpThirdUpFifthMinus2Up,
    fromAnyToPlus10RootFifthUpRootUpFifthPlus2Up,
  ],
}
