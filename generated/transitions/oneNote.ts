import { Transition, TransitionCategory } from '../../src/model/types'

export const root: Transition = {
  id: 'S?;T?;C,R;',
  name: 'R',
  steps: [{ chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' }],
  tags: ['CHORD_TONE_ONLY'],
}

export const thirdUp: Transition = {
  id: 'S?;T?;C,T,U;',
  name: '3\u2191',
  steps: [{ chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' }],
  tags: ['CHORD_TONE_ONLY'],
}

export const thirdDown: Transition = {
  id: 'S?;T?;C,T,D;',
  name: '3\u2193',
  steps: [{ chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'THIRD' }],
  tags: ['CHORD_TONE_ONLY'],
}

export const fifthUp: Transition = {
  id: 'S?;T?;C,F,U;',
  name: '5\u2191',
  steps: [{ chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'FIFTH' }],
  tags: ['CHORD_TONE_ONLY'],
}

export const fifthDown: Transition = {
  id: 'S?;T?;C,F,D;',
  name: '5\u2193',
  steps: [{ chordRef: 'CURRENT', dir: 'DOWN', interval: 0, tone: 'FIFTH' }],
  tags: ['CHORD_TONE_ONLY'],
}

export const oneNote: TransitionCategory = {
  id: 'oneNote',
  description: 'Single note transition',
  name: 'Single note',
  tags: ['CHORD_TONE_ONLY'],
  transitions: [root, thirdUp, thirdDown, fifthUp, fifthDown],
}
