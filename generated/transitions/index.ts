import { Transition } from '../../src/model/types'

export const rootThirdUpFifthUpNextRootMinus1: Transition = {
  id: 'S?;T?;C,R->C,T,U->C,F,U->N,R-1;',
  name: 'Root 3rd\u2191 5th\u2191 Next Root-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
}
export const rootThirdUpFifthUpNextRootPlus1: Transition = {
  id: 'S?;T?;C,R->C,T,U->C,F,U->N,R+1;',
  name: 'Root 3rd\u2191 5th\u2191 Next Root+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
}
export const rootThirdDownFifthDownNextRootMinus1: Transition = {
  id: 'S?;T?;C,R->C,T,D->C,F,D->N,R-1;',
  name: 'Root 3rd\u2193 5th\u2193 Next Root-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
}
export const rootThirdDownFifthDownNextRootPlus1: Transition = {
  id: 'S?;T?;C,R->C,T,D->C,F,D->N,R+1;',
  name: 'Root 3rd\u2193 5th\u2193 Next Root+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
}
