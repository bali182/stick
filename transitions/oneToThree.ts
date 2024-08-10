import { RawTransitionCategory } from '../src/model/types'

const oneToThree: RawTransitionCategory = {
  name: 'I to III chord',
  description: 'Transitioning from I to III chord',
  tags: [],
  transitions: [
    // Example 7a: [1-1-2-b3]
    'S M, dom7, m, m7; T +4; C,R -> C,R -> C,R+2-> N,R-1;',

    // Example 7b: [1-2-5-4]
    'S M, dom7, m, m7; T +4; C,R -> C,R+2 -> C,F,U -> N,R+1;',

    // Example 7c: [1-3-5-4]
    'S M, dom7, m, m7; T +4; C,R -> C,T,U -> C,F,U -> N,R+1;',

    // Example 7e: [1-b2-2-b3]
    'S M, dom7, m, m7; T +4; C,R -> C,R+1 -> C,R+2 -> C,R+3;',
  ],
}

export default oneToThree
