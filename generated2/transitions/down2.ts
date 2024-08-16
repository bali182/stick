import { Transition, TransitionCategory2 } from '../../src/model/types'

export const fromAnyToMinus2RootFifthDownRootRootMinus1: Transition = {
  id: 'S:?;T:-2;C,R->C,F,D->C,R->C,R-1',
  name: 'R 5\u2193 R R-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
  tags: [],
  target: -2,
}

export const fromAnyToMinus2RootThirdUpRootRootMinus1: Transition = {
  id: 'S:?;T:-2;C,R->C,T,U->C,R->C,R-1',
  name: 'R 3\u2191 R R-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
  tags: [],
  target: -2,
}

export const down2: TransitionCategory2 = {
  id: 'down2-down2',
  name: 'From any chord down 2 semitones',
  variableName: 'down2',
  sourceFileName: 'down2',
  tags: [],
  transitions: [
    fromAnyToMinus2RootFifthDownRootRootMinus1,
    fromAnyToMinus2RootThirdUpRootRootMinus1,
  ],
}
