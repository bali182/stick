import { RawTransitionCategory } from '../src/model/types'

const twoToOne: RawTransitionCategory = {
  name: 'II to I chord',
  description: 'Transitioning from I to II chord',
  tags: [],
  transitions: [
    // Example 3i: [1-5-1-b7]
    'S M, dom7, m, m7; T -2; C,R -> C,F,D -> C,R -> C,R-1;',

    // Example 3j: [1-3-1-b7]
    'S M, dom7, m, m7; T -2; C,R -> C,T,U -> C,R -> C,R-1;',

    // Example 3k: [1-3-5-6]
    'S M, dom7, m, m7; T +10; C,R -> C,T,U -> C,F,U -> C,F+2,U;',

    // Example 3l: [1-3-5-8]
    'S M, dom7, m, m7; T +10; C,R -> C,T,U -> C,F,U -> C,R,U;',

    // Example 3m: [1-2-3-4]
    'S M, dom7, m, m7; T +10; C,R -> C,R+2,U -> C,T,U -> C,F-2,U;',

    // Example 3n: [1-5-8-6]
    'S M, dom7, m, m7; T +10; C,R -> C,F,U -> C,R,U -> C,F+2,U;',
  ],
}

export default twoToOne
