import { RawTransitionCategory } from '../src/model/types'

const oneToSix: RawTransitionCategory = {
  name: 'I to VI chord',
  description: 'Transitioning from I to VI chord',
  tags: [],
  transitions: [
    // Example 5a: [1-3-5-b6]
    'S M, dom7, m, m7; T +9; C,R -> C,T,U -> C,F,U -> C,F+1,U;',

    // Example 5b: [1-1-7-b7]
    'S M, dom7, m, m7; T -3; C,R -> C,R -> C,R-1 -> C,R-2;',

    // Example 5c: [1-2-b3-3] - Can't use thirds here!
    'S M, dom7, m, m7; T -3; C,R -> C,R+2 -> C,R+3 -> C,R+4;',

    // Example 5d: [1-2-3-5]
    'S M, dom7, m, m7; T +9; C,R -> C,R+2 -> C,T,U -> C,F,U;',
  ],
}

export default oneToSix
