import { RawTransitionCategory } from '../src/model/types'

const stationary: RawTransitionCategory = {
  name: 'Stationary transitions',
  description: 'Transition for when staying on the same chord',
  tags: [],
  transitions: [
    // Example 3c: [1-3-1-5]
    'S ?; T +0; C,R -> C,T,U -> C,R -> C,F,D;',

    // Example 3c: [1-5-1-3]
    'S ?; T +0; C,R -> C,F,D -> C,R -> C,T,U;',

    // Example 3c: [1-b7-6-b7]
    'S ?; T +0; C,R -> C,R-2 -> C,R-3 -> C,R-2;',

    // Example 3c: [1-5-b7-7]
    'S ?; T +0; C,R -> C,F,D -> C,R-2 -> C,R-1;',
  ],
}

export default stationary
