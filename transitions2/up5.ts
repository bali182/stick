import { RawTransitionCategory2 } from '../src/model/types'

export const up5: RawTransitionCategory2 = {
  transitions: [
    // Example 1f: [1-1-3-5]
    'C,R -> C,R -> C,T,U -> C,F,U',

    // Example 1g: [1-5-8-5]
    'C,R -> C,F,U -> C,R,U -> C,F,U',

    // Example 1i: [1-8-b7-5]
    'C,R -> C,R,U -> C,R-2,U -> C,F,U',

    // Example 1j: [1-1-5-3]
    'C,R -> C,R -> C,F,U -> C,T,U',

    // Example 1k: [1-3-5-3]
    'C,R -> C,T,U -> C,F,U -> C,T,U',

    // Example 1m: [1-5-8-3]
    'C,R -> C,F,U -> C,R,U -> C,T,U',

    // Example 1n: [1-1-5-1]
    'C,R -> C,R -> C,F,U -> C,R',

    // Example 1o: [1-3-5-1]
    'C,R -> C,T,U -> C,F,U -> C,R',
  ],
  target: 5,
}
