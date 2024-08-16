import { RawTransitionCategory2 } from '../src/model/types'

export const down3: RawTransitionCategory2 = {
  transitions: [
    // Example 5b: [1-1-7-b7]
    'C,R -> C,R -> C,R-1 -> C,R-2',

    // Example 5c: [1-2-b3-3] - Can't use thirds here!
    'C,R -> C,R+2 -> C,R+3 -> C,R+4',
  ],
  target: -3,
}
