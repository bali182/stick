import { Transition, TransitionCategory2 } from '../../src/model/types'

export const fromAnyToPlus2RootFifthUpThirdUpThirdMinus1Up: Transition = {
  id: 'S:?;T:2;C,R->C,F,U->C,T,U->C,T-1,U',
  name: 'R 5\u2191 3\u2191 3-1\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: -1, tone: 'THIRD' },
  ],
  tags: [],
  target: 2,
}

export const fromAnyToPlus2RootRootMinus2RootRootPlus1: Transition = {
  id: 'S:?;T:2;C,R->C,R-2->C,R->C,R+1',
  name: 'R R-2 R R+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
  tags: [],
  target: 2,
}

export const up2: TransitionCategory2 = {
  id: 'up2-up2',
  name: 'From any chord up 2 semitones',
  variableName: 'up2',
  sourceFileName: 'up2',
  tags: [],
  transitions: [
    fromAnyToPlus2RootFifthUpThirdUpThirdMinus1Up,
    fromAnyToPlus2RootRootMinus2RootRootPlus1,
  ],
}
