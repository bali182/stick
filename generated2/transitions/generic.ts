import { Transition, TransitionCategory2 } from '../../src/model/types'

export const fromAnyToAnyRootThirdUpFifthUpNextRootMinus1: Transition = {
  id: 'S:?;T:?;C,R->C,T,U->C,F,U->N,R-1',
  name: 'R 3\u2191 5\u2191 NR-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
  tags: [],
}

export const fromAnyToAnyRootThirdUpFifthUpNextRootPlus1: Transition = {
  id: 'S:?;T:?;C,R->C,T,U->C,F,U->N,R+1',
  name: 'R 3\u2191 5\u2191 NR+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
  tags: [],
}

export const fromAnyToAnyRootThirdDownFifthDownNextRootMinus1: Transition = {
  id: 'S:?;T:?;C,R->C,T,D->C,F,D->N,R-1',
  name: 'R 3\u2193 5\u2193 NR-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
  tags: [],
}

export const fromAnyToAnyRootThirdDownFifthDownNextRootPlus1: Transition = {
  id: 'S:?;T:?;C,R->C,T,D->C,F,D->N,R+1',
  name: 'R 3\u2193 5\u2193 NR+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
  tags: [],
}

export const fromAnyToAnyRootThirdUpFifthDownNextRootMinus1: Transition = {
  id: 'S:?;T:?;C,R->C,T,U->C,F,D->N,R-1',
  name: 'R 3\u2191 5\u2193 NR-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
  tags: [],
}

export const fromAnyToAnyRootThirdUpFifthDownNextRootPlus1: Transition = {
  id: 'S:?;T:?;C,R->C,T,U->C,F,D->N,R+1',
  name: 'R 3\u2191 5\u2193 NR+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
  tags: [],
}

export const fromAnyToAnyRootThirdDownFifthUpNextRootMinus1: Transition = {
  id: 'S:?;T:?;C,R->C,T,D->C,F,U->N,R-1',
  name: 'R 3\u2193 5\u2191 NR-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
  tags: [],
}

export const fromAnyToAnyRootThirdDownFifthUpNextRootPlus1: Transition = {
  id: 'S:?;T:?;C,R->C,T,D->C,F,U->N,R+1',
  name: 'R 3\u2193 5\u2191 NR+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
  tags: [],
}

export const fromAnyToAnyRootNextRootMinus1: Transition = {
  id: 'S:?;T:?;C,R->N,R-1',
  name: 'R NR-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'NEXT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
  tags: [],
}

export const fromAnyToAnyRootNextRootPlus1: Transition = {
  id: 'S:?;T:?;C,R->N,R+1',
  name: 'R NR+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
  tags: [],
}

export const fromAnyToAnyRootThirdUp: Transition = {
  id: 'S:?;T:?;C,R->C,T,U',
  name: 'R 3\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
  ],
  tags: [],
}

export const fromAnyToAnyRootThirdDown: Transition = {
  id: 'S:?;T:?;C,R->C,T,D',
  name: 'R 3\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
  ],
  tags: [],
}

export const fromAnyToAnyRootFifthUp: Transition = {
  id: 'S:?;T:?;C,R->C,F,U',
  name: 'R 5\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
}

export const fromAnyToAnyRootFifthDown: Transition = {
  id: 'S:?;T:?;C,R->C,F,D',
  name: 'R 5\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
  ],
  tags: [],
}

export const fromAnyToAnyRoot: Transition = {
  id: 'S:?;T:?;C,R',
  name: 'R',
  steps: [{ chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' }],
  tags: [],
}

export const fromAnyToAnyThirdUp: Transition = {
  id: 'S:?;T:?;C,T,U',
  name: '3\u2191',
  steps: [{ chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' }],
  tags: [],
}

export const fromAnyToAnyThirdDown: Transition = {
  id: 'S:?;T:?;C,T,D',
  name: '3\u2193',
  steps: [{ chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' }],
  tags: [],
}

export const fromAnyToAnyFifthUp: Transition = {
  id: 'S:?;T:?;C,F,U',
  name: '5\u2191',
  steps: [{ chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' }],
  tags: [],
}

export const fromAnyToAnyFifthDown: Transition = {
  id: 'S:?;T:?;C,F,D',
  name: '5\u2193',
  steps: [{ chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' }],
  tags: [],
}

export const generic4NoteChromatic: TransitionCategory2 = {
  id: 'generic-generic4NoteChromatic',
  name: 'From any chord any chord',
  variableName: 'generic4NoteChromatic',
  sourceFileName: 'generic',
  tags: [],
  transitions: [
    fromAnyToAnyRootThirdUpFifthUpNextRootMinus1,
    fromAnyToAnyRootThirdUpFifthUpNextRootPlus1,
    fromAnyToAnyRootThirdDownFifthDownNextRootMinus1,
    fromAnyToAnyRootThirdDownFifthDownNextRootPlus1,
    fromAnyToAnyRootThirdUpFifthDownNextRootMinus1,
    fromAnyToAnyRootThirdUpFifthDownNextRootPlus1,
    fromAnyToAnyRootThirdDownFifthUpNextRootMinus1,
    fromAnyToAnyRootThirdDownFifthUpNextRootPlus1,
  ],
}

export const generic2NoteChromatic: TransitionCategory2 = {
  id: 'generic-generic2NoteChromatic',
  name: 'From any chord any chord',
  variableName: 'generic2NoteChromatic',
  sourceFileName: 'generic',
  tags: [],
  transitions: [fromAnyToAnyRootNextRootMinus1, fromAnyToAnyRootNextRootPlus1],
}

export const generic2NoteChordTones: TransitionCategory2 = {
  id: 'generic-generic2NoteChordTones',
  name: 'From any chord any chord',
  variableName: 'generic2NoteChordTones',
  sourceFileName: 'generic',
  tags: [],
  transitions: [
    fromAnyToAnyRootThirdUp,
    fromAnyToAnyRootThirdDown,
    fromAnyToAnyRootFifthUp,
    fromAnyToAnyRootFifthDown,
  ],
}

export const generic1Note: TransitionCategory2 = {
  id: 'generic-generic1Note',
  name: 'From any chord any chord',
  variableName: 'generic1Note',
  sourceFileName: 'generic',
  tags: [],
  transitions: [
    fromAnyToAnyRoot,
    fromAnyToAnyThirdUp,
    fromAnyToAnyThirdDown,
    fromAnyToAnyFifthUp,
    fromAnyToAnyFifthDown,
  ],
}
