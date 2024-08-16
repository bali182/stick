import { RawTransitionCategory2 } from '../src/model/types'

export const up10: RawTransitionCategory2 = {
  transitions: [
    // Example 3k: [1-3-5-6]
    'C,R -> C,T,U -> C,F,U -> C,F+2,U',

    // Example 3l: [1-3-5-8]
    'C,R -> C,T,U -> C,F,U -> C,R,U',

    // Example 3m: [1-2-3-4]
    'C,R -> C,R+2,U -> C,T,U -> C,F-2,U',

    // Example 3n: [1-5-8-6]
    'C,R -> C,F,U -> C,R,U -> C,F+2,U',
  ],
  target: 10,
}
