import { Transition, TransitionCategory } from '../../src/model/types'

export const rootNextRootMinus1: Transition = {
  id: 'S?;T?;C,R->N,R-1;',
  name: 'R NR-1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'NEXT', dir: 'NONE', interval: -1, tone: 'ROOT' },
  ],
  tags: ['CHROMATIC_APPROACH'],
}

export const rootNextRootPlus1: Transition = {
  id: 'S?;T?;C,R->N,R+1;',
  name: 'R NR+1',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'NEXT', dir: 'NONE', interval: 1, tone: 'ROOT' },
  ],
  tags: ['CHROMATIC_APPROACH'],
}

export const rootToChromaticPassingTone: TransitionCategory = {
  id: 'rootToChromaticPassingTone',
  description: 'Root and chromatic note moving to the next chord.',
  name: 'Root + chromatic',
  tags: ['CHROMATIC_APPROACH'],
  transitions: [rootNextRootMinus1, rootNextRootPlus1],
}
