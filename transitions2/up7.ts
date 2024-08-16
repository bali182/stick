import { RawTransitionCategory2 } from '../src/model/types'

export const up7: RawTransitionCategory2 = {
  transitions: [
    // Example 3d: [1-3-4-b5]
    'C,R -> C,T,U -> C,F-2,U -> C,F-1,D',

    // Example 3f: [1-3-6-b6]
    'C,R -> C,T,U -> C,F+2,U -> C,F+1,U',

    // Example 3g: [1-2-3-4]
    'C,R -> C,R+2 -> C,T,U -> C,F-2,U',
  ],
  target: 7,
}
