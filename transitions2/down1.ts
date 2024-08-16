import { RawTransitionCategory2 } from '../src/model/types'

export const down1: RawTransitionCategory2 = {
  transitions: [
    'C,R -> C,R -> C,F,U -> C,R',
    'C,R -> C,R -> C,F,D -> C,R',
    'C,R -> C,R -> C,T,U -> C,R',
    'C,R -> C,T,U -> C,F,U -> C,R',
  ],
  target: -1,
}
