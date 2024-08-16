import { Transition, TransitionCategory2 } from '../../src/model/types'

export const fromAnyToPlus9RootThirdUpFifthUpFifthPlus1Up: Transition = {
  id: 'S:?;T:9;C,R->C,T,U->C,F,U->C,F+1,U',
  name: 'R 3\u2191 5\u2191 5+1\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 1, tone: 'FIFTH' },
  ],
  tags: [],
  target: 9,
}

export const fromAnyToPlus9RootRootPlus2ThirdUpFifthUp: Transition = {
  id: 'S:?;T:9;C,R->C,R+2->C,T,U->C,F,U',
  name: 'R R+2 3\u2191 5\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
  target: 9,
}

export const up9: TransitionCategory2 = {
  id: 'up9-up9',
  name: 'From any chord up 9 semitones',
  variableName: 'up9',
  sourceFileName: 'up9',
  tags: [],
  transitions: [
    fromAnyToPlus9RootThirdUpFifthUpFifthPlus1Up,
    fromAnyToPlus9RootRootPlus2ThirdUpFifthUp,
  ],
}
