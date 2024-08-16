import { Transition, TransitionCategory2 } from '../../src/model/types'

export const fromAnyToPlus4RootRootRootPlus2NextRootMinus1: Transition = {
  id: 'S:?;T:4;C,R->C,R->C,R+2->N,R-1',
  name: 'R R R+2 NR-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 2, tone: 'ROOT' },
    { chordRef: 'NEXT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
  tags: [],
  target: 4,
}

export const fromAnyToPlus4RootRootPlus2FifthUpNextRootPlus1: Transition = {
  id: 'S:?;T:4;C,R->C,R+2->C,F,U->N,R+1',
  name: 'R R+2 5\u2191 NR+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
  tags: [],
  target: 4,
}

export const fromAnyToPlus4RootThirdUpFifthUpNextRootPlus1: Transition = {
  id: 'S:?;T:4;C,R->C,T,U->C,F,U->N,R+1',
  name: 'R 3\u2191 5\u2191 NR+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
  tags: [],
  target: 4,
}

export const fromAnyToPlus4RootRootPlus1RootPlus2RootPlus3: Transition = {
  id: 'S:?;T:4;C,R->C,R+1->C,R+2->C,R+3',
  name: 'R R+1 R+2 R+3',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 1, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 3, tone: 'ROOT' },
  ],
  tags: [],
  target: 4,
}

export const up4: TransitionCategory2 = {
  id: 'up4-up4',
  name: 'From any chord up 4 semitones',
  variableName: 'up4',
  sourceFileName: 'up4',
  tags: [],
  transitions: [
    fromAnyToPlus4RootRootRootPlus2NextRootMinus1,
    fromAnyToPlus4RootRootPlus2FifthUpNextRootPlus1,
    fromAnyToPlus4RootThirdUpFifthUpNextRootPlus1,
    fromAnyToPlus4RootRootPlus1RootPlus2RootPlus3,
  ],
}
