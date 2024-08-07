import { RawTransitionCategory } from '../src/model/types'

const oneNote: RawTransitionCategory = {
  name: 'Single note',
  description: 'Single note transition',
  tags: ['CHORD_TONE_ONLY'],
  transitions: [
    'S ?; T ?; C,R;',
    'S ?; T ?; C,T,U;',
    'S ?; T ?; C,T,D;',
    'S ?; T ?; C,F,U;',
    'S ?; T ?; C,F,D;',
  ],
}

export default oneNote
