import { RawTransitionCategory } from '../src/model/types'

const rootAndChordTone: RawTransitionCategory = {
  name: 'Root + chord tone',
  description: 'Root and another chord tone passing to the next chord.',
  tags: ['CHORD_TONE_ONLY'],
  transitions: [
    'S ?; T ?; C,R -> C,T,U;',
    'S ?; T ?; C,R -> C,T,D;',
    'S ?; T ?; C,R -> C,F,U;',
    'S ?; T ?; C,R -> C,F,D;',
  ],
}

export default rootAndChordTone
