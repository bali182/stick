import { RawTransitionCategory2 } from '../src/model/types'

export const down5: RawTransitionCategory2 = {
  transitions: [
    // Example 3e: [1-b7-6-b6]
    'C,R -> C,R-2 -> C,F+2,D -> C,F+1,D',

    // Example 3h: [8-b7-6-2]
    'C,R -> C,R-2 -> C,F+2,D -> C,R+2,D',
  ],
  target: -5,
}
