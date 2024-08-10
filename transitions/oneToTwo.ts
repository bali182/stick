import { RawTransitionCategory } from '../src/model/types'

const oneToThree: RawTransitionCategory = {
  name: 'I to II chord',
  description: 'Transitioning from I to III chord',
  tags: [],
  transitions: [
    // Example 7h: [1-5-3-b3]
    'S M, dom7, maj7; T +2; C,R -> C,F,U -> C,T,U -> C,T-1,U;',

    // Example 7i: [1-b7-1-b2]
    'S M, dom7, m, m7; T +2; C,R -> C,R-2 -> C,R -> C,R+1;',
  ],
}

export default oneToThree
