import { Transition, TransitionCategory } from '../../src/model/types'

export const rootThirdUpFifthUpNextRootMinus1: Transition = {
  id: 'S?;T?;C,R->C,T,U->C,F,U->N,R-1;',
  name: 'R 3\u2191 5\u2191 NR-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
}

export const rootThirdUpFifthUpNextRootPlus1: Transition = {
  id: 'S?;T?;C,R->C,T,U->C,F,U->N,R+1;',
  name: 'R 3\u2191 5\u2191 NR+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
}

export const rootThirdDownFifthDownNextRootMinus1: Transition = {
  id: 'S?;T?;C,R->C,T,D->C,F,D->N,R-1;',
  name: 'R 3\u2193 5\u2193 NR-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
}

export const rootThirdDownFifthDownNextRootPlus1: Transition = {
  id: 'S?;T?;C,R->C,T,D->C,F,D->N,R+1;',
  name: 'R 3\u2193 5\u2193 NR+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
}

export const rootThirdUpFifthDownNextRootMinus1: Transition = {
  id: 'S?;T?;C,R->C,T,U->C,F,D->N,R-1;',
  name: 'R 3\u2191 5\u2193 NR-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
}

export const rootThirdUpFifthDownNextRootPlus1: Transition = {
  id: 'S?;T?;C,R->C,T,U->C,F,D->N,R+1;',
  name: 'R 3\u2191 5\u2193 NR+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
}

export const rootThirdDownFifthUpNextRootMinus1: Transition = {
  id: 'S?;T?;C,R->C,T,D->C,F,U->N,R-1;',
  name: 'R 3\u2193 5\u2191 NR-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
}

export const rootThirdDownFifthUpNextRootPlus1: Transition = {
  id: 'S?;T?;C,R->C,T,D->C,F,U->N,R+1;',
  name: 'R 3\u2193 5\u2191 NR+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
}

export const chordTonesWithChromaticLeadingTone: TransitionCategory = {
  id: 'chordTonesWithChromaticLeadingTone',
  description:
    'Universal transitions between any 2 chords, using only chord tones and a chromatic passing note before the change',
  name: 'Chord tones + chromatic',
  tags: ['FOUR_NOTES', 'CHROMATIC_APPROACH'],
  transitions: [
    rootThirdUpFifthUpNextRootMinus1,
    rootThirdUpFifthUpNextRootPlus1,
    rootThirdDownFifthDownNextRootMinus1,
    rootThirdDownFifthDownNextRootPlus1,
    rootThirdUpFifthDownNextRootMinus1,
    rootThirdUpFifthDownNextRootPlus1,
    rootThirdDownFifthUpNextRootMinus1,
    rootThirdDownFifthUpNextRootPlus1,
  ],
}
