import { Transition, TransitionCategory2 } from '../../src/model/types'

export const fromAnyToMinus5RootRootMinus2FifthPlus2DownFifthPlus1Down: Transition =
  {
    id: 'S:?;T:-5;C,R->C,R-2->C,F+2,D->C,F+1,D',
    name: 'R R-2 5+2\u2193 5+1\u2193',
    steps: [
      { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
      { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
      { chordRef: 'CURRENT', dir: 'DOWN', interval: 2, tone: 'FIFTH' },
      { chordRef: 'CURRENT', dir: 'DOWN', interval: 1, tone: 'FIFTH' },
    ],
    tags: [],
    target: -5,
  }

export const fromAnyToMinus5RootRootMinus2FifthPlus2DownRootPlus2Down: Transition =
  {
    id: 'S:?;T:-5;C,R->C,R-2->C,F+2,D->C,R+2,D',
    name: 'R R-2 5+2\u2193 R+2\u2193',
    steps: [
      { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
      { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
      { chordRef: 'CURRENT', dir: 'DOWN', interval: 2, tone: 'FIFTH' },
      { chordRef: 'CURRENT', dir: 'DOWN', interval: 2, tone: 'ROOT' },
    ],
    tags: [],
    target: -5,
  }

export const down5: TransitionCategory2 = {
  id: 'down5-down5',
  name: 'From any chord down 5 semitones',
  variableName: 'down5',
  sourceFileName: 'down5',
  tags: [],
  transitions: [
    fromAnyToMinus5RootRootMinus2FifthPlus2DownFifthPlus1Down,
    fromAnyToMinus5RootRootMinus2FifthPlus2DownRootPlus2Down,
  ],
}
