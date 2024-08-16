import { Transition, TransitionCategory2 } from '../../src/model/types'

export const fromAnyToPlus7RootThirdUpFifthMinus2UpFifthMinus1Down: Transition =
  {
    id: 'S:?;T:7;C,R->C,T,U->C,F-2,U->C,F-1,D',
    name: 'R 3\u2191 5-2\u2191 5-1\u2193',
    steps: [
      { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
      { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
      { chordRef: 'CURRENT', dir: 'UP', interval: -2, tone: 'FIFTH' },
      { chordRef: 'CURRENT', dir: 'DOWN', interval: -1, tone: 'FIFTH' },
    ],
    tags: [],
    target: 7,
  }

export const fromAnyToPlus7RootThirdUpFifthPlus2UpFifthPlus1Up: Transition = {
  id: 'S:?;T:7;C,R->C,T,U->C,F+2,U->C,F+1,U',
  name: 'R 3\u2191 5+2\u2191 5+1\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 2, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 1, tone: 'FIFTH' },
  ],
  tags: [],
  target: 7,
}

export const fromAnyToPlus7RootRootPlus2ThirdUpFifthMinus2Up: Transition = {
  id: 'S:?;T:7;C,R->C,R+2->C,T,U->C,F-2,U',
  name: 'R R+2 3\u2191 5-2\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: -2, tone: 'FIFTH' },
  ],
  tags: [],
  target: 7,
}

export const up7: TransitionCategory2 = {
  id: 'up7-up7',
  name: 'From any chord up 7 semitones',
  variableName: 'up7',
  sourceFileName: 'up7',
  tags: [],
  transitions: [
    fromAnyToPlus7RootThirdUpFifthMinus2UpFifthMinus1Down,
    fromAnyToPlus7RootThirdUpFifthPlus2UpFifthPlus1Up,
    fromAnyToPlus7RootRootPlus2ThirdUpFifthMinus2Up,
  ],
}
