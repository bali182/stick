import { Transition, TransitionCategory2 } from '../../src/model/types'

export const fromAnyToMinus3RootRootRootMinus1RootMinus2: Transition = {
  id: 'S:?;T:-3;C,R->C,R->C,R-1->C,R-2',
  name: 'R R R-1 R-2',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -1, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
  ],
  tags: [],
  target: -3,
}

export const fromAnyToMinus3RootRootPlus2RootPlus3RootPlus4: Transition = {
  id: 'S:?;T:-3;C,R->C,R+2->C,R+3->C,R+4',
  name: 'R R+2 R+3 R+4',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 3, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 4, tone: 'ROOT' },
  ],
  tags: [],
  target: -3,
}

export const down3: TransitionCategory2 = {
  id: 'down3-down3',
  name: 'From any chord down 3 semitones',
  variableName: 'down3',
  sourceFileName: 'down3',
  tags: [],
  transitions: [
    fromAnyToMinus3RootRootRootMinus1RootMinus2,
    fromAnyToMinus3RootRootPlus2RootPlus3RootPlus4,
  ],
}
