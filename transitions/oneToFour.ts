import { RawTransitionCategory } from '../src/model/types'

const oneToFour: RawTransitionCategory = {
  name: 'I to IV chord',
  description: 'Transitioning from I to IV chord',
  tags: [],
  transitions: [
    // Example 1f: [1-1-3-5]
    'S M, dom7, m, m7; T +5; C,R -> C,R -> C,T,U -> C,F,U;',

    // Example 1g: [1-5-8-5]
    'S M, dom7, m, m7; T +5; C,R -> C,F,U -> C,R,U -> C,F,U;',

    // Example 1i: [1-8-b7-5]
    'S M, dom7, m, m7; T +5; C,R -> C,R,U -> C,R-2,U -> C,F,U;',

    // Example 1j: [1-1-5-3]
    'S M, dom7, m, m7; T +5; C,R -> C,R -> C,F,U -> C,T,U;',

    // Example 1k: [1-3-5-3]
    'S M, dom7, m, m7; T +5; C,R -> C,T,U -> C,F,U -> C,T,U;',

    // Example 1m: [1-5-8-3]
    'S M, dom7, m, m7; T +5; C,R -> C,F,U -> C,R,U -> C,T,U;',

    // Example 1n: [1-1-5-1]
    'S M, dom7, m, m7; T +5; C,R -> C,R -> C,F,U -> C,R;',

    // Example 1o: [1-3-5-1]
    'S M, dom7, m, m7; T +5; C,R -> C,T,U -> C,F,U -> C,R;',

    // Example 1d: [1-b7-3-5]
    'S M, dom7, m, m7; T -7; C,R -> C,R-2 -> C,T,D -> C,F,D;',

    // Example 1e: [1-b7-5-3]
    'S M, dom7, m, m7; T -7; C,R -> C,R-2 -> C,F,D -> C,T,D;',

    // Example 1h: [8-5-3-5]
    'S M, dom7, m, m7; T -7; C,R -> C,F,D -> C,T,D -> C,F,D;',

    // Example 1p: [8-3-5-1]
    'S M, dom7, m, m7; T -7; C,R -> C,T,D -> C,F,D -> C,R,D;',

    // Example 1q: [8-b7-5-1]
    'S M, dom7, m, m7; T -7; C,R -> C,R-2 -> C,F,D -> C,R,D;',
  ],
}

export default oneToFour
