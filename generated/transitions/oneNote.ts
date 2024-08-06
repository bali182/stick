import { Transition, TransitionCategory } from '../../src/model/types'

export const root: Transition = {
  id: 'S?;T?;C,R;',
  name: 'R',
  steps: [{ chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' }],
  tags: ['CHORD_TONE_ONLY'],
}

export const oneNote: TransitionCategory = {
  id: 'oneNote',
  description: 'Single note transition',
  name: 'Single note',
  tags: ['CHORD_TONE_ONLY'],
  transitions: [root],
}
