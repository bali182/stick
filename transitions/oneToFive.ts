import { RawTransitionCategory } from '../src/model/types'

const oneToFive: RawTransitionCategory = {
  name: 'I to V chord',
  description: 'Transitioning from I to V chord',
  tags: [],
  transitions: [
    // Example 3d: [1-3-4-b5]
    'S M, dom7, m, m7; T +7; C,R -> C,T,U -> C,F-2,U -> C,F-1,D;',

    // Example 3f: [1-3-6-b6]
    'S M, dom7, m, m7; T +7; C,R -> C,T,U -> C,F+2,U -> C,F+1,U;',

    // Example 3g: [1-2-3-4]
    'S M, dom7, m, m7; T +7; C,R -> C,R+2 -> C,T,U -> C,F-2,U;',

    // Example 3e: [1-b7-6-b6]
    'S M, dom7, m, m7; T -5; C,R -> C,R-2 -> C,F+2,D -> C,F+1,D;',

    // Example 3h: [8-b7-6-2]
    'S M, dom7, m, m7; T -5; C,R -> C,R-2 -> C,F+2,D -> C,R+2,D;',
  ],
}

export default oneToFive
