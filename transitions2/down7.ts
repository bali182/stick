import { RawTransitionCategory2 } from '../src/model/types'

export const down7: RawTransitionCategory2 = {
  transitions: [
    // Example 1d: [1-b7-3-5]
    'C,R -> C,R-2 -> C,T,D -> C,F,D',

    // Example 1e: [1-b7-5-3]
    'C,R -> C,R-2 -> C,F,D -> C,T,D',

    // Example 1h: [8-5-3-5]
    'C,R -> C,F,D -> C,T,D -> C,F,D',

    // Example 1p: [8-3-5-1]
    'C,R -> C,T,D -> C,F,D -> C,R,D',

    // Example 1q: [8-b7-5-1]
    'C,R -> C,R-2 -> C,F,D -> C,R,D',
  ],
  target: -7,
}
