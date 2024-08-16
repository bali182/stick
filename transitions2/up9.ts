import { RawTransitionCategory2 } from '../src/model/types'

export const up9: RawTransitionCategory2 = {
  transitions: [
    // Example 5a: [1-3-5-b6]
    'C,R -> C,T,U -> C,F,U -> C,F+1,U',

    // Example 5d: [1-2-3-5]
    'C,R -> C,R+2 -> C,T,U -> C,F,U',
  ],
  target: 9,
}
