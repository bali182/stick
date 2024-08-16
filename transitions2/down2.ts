import { RawTransitionCategory2 } from '../src/model/types'

export const down2: RawTransitionCategory2 = {
  transitions: [
    // Example 3i: [1-5-1-b7]
    'C,R -> C,F,D -> C,R -> C,R-1',

    // Example 3j: [1-3-1-b7]
    'C,R -> C,T,U -> C,R -> C,R-1',
  ],
  target: -2,
}
