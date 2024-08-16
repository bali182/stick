import { RawTransitionCategory2 } from '../src/model/types'

export const stationary: RawTransitionCategory2 = {
  transitions: [
    // Example 3c: [1-3-1-5]
    'C,R -> C,T,U -> C,R -> C,F,D',

    // Example 3c: [1-5-1-3]
    'C,R -> C,F,D -> C,R -> C,T,U',

    // Example 3c: [1-b7-6-b7]
    'C,R -> C,R-2 -> C,R-3 -> C,R-2',

    // Example 3c: [1-5-b7-7]
    'C,R -> C,F,D -> C,R-2 -> C,R-1',
  ],
  target: 0,
}
