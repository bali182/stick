import { Transition, TransitionCategory2 } from '../../src/model/types'

export const fromAnyToMinus7RootRootMinus2ThirdDownFifthDown: Transition = {
  id: 'S:?;T:-7;C,R->C,R-2->C,T,D->C,F,D',
  name: 'R R-2 3\u2193 5\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
  target: -7,
}

export const fromAnyToMinus7RootRootMinus2FifthDownThirdDown: Transition = {
  id: 'S:?;T:-7;C,R->C,R-2->C,F,D->C,T,D',
  name: 'R R-2 5\u2193 3\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
  ],
  tags: [],
  target: -7,
}

export const fromAnyToMinus7RootFifthDownThirdDownFifthDown: Transition = {
  id: 'S:?;T:-7;C,R->C,F,D->C,T,D->C,F,D',
  name: 'R 5\u2193 3\u2193 5\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
  target: -7,
}

export const fromAnyToMinus7RootThirdDownFifthDownRootDown: Transition = {
  id: 'S:?;T:-7;C,R->C,T,D->C,F,D->C,R,D',
  name: 'R 3\u2193 5\u2193 R\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'ROOT' },
  ],
  tags: [],
  target: -7,
}

export const fromAnyToMinus7RootRootMinus2FifthDownRootDown: Transition = {
  id: 'S:?;T:-7;C,R->C,R-2->C,F,D->C,R,D',
  name: 'R R-2 5\u2193 R\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'ROOT' },
  ],
  tags: [],
  target: -7,
}

export const down7: TransitionCategory2 = {
  id: 'down7-down7',
  name: 'From any chord down 7 semitones',
  variableName: 'down7',
  sourceFileName: 'down7',
  tags: [],
  transitions: [
    fromAnyToMinus7RootRootMinus2ThirdDownFifthDown,
    fromAnyToMinus7RootRootMinus2FifthDownThirdDown,
    fromAnyToMinus7RootFifthDownThirdDownFifthDown,
    fromAnyToMinus7RootThirdDownFifthDownRootDown,
    fromAnyToMinus7RootRootMinus2FifthDownRootDown,
  ],
}
