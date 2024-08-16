import { RawTransitionCategory2 } from '../src/model/types'

export const up2: RawTransitionCategory2 = {
  transitions: [
    // Example 7h: [1-5-3-b3]
    'C,R -> C,F,U -> C,T,U -> C,T-1,U',

    // Example 7i: [1-b7-1-b2]
    'C,R -> C,R-2 -> C,R -> C,R+1',
  ],
  target: 2,
}
