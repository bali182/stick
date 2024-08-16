import { RawTransitionCategory2 } from '../src/model/types'

export const generic4NoteChromatic: RawTransitionCategory2 = {
  transitions: [
    'C,R -> C,T,U -> C,F,U -> N,R-1',
    'C,R -> C,T,U -> C,F,U -> N,R+1',
    'C,R -> C,T,D -> C,F,D -> N,R-1',
    'C,R -> C,T,D -> C,F,D -> N,R+1',
    'C,R -> C,T,U -> C,F,D -> N,R-1',
    'C,R -> C,T,U -> C,F,D -> N,R+1',
    'C,R -> C,T,D -> C,F,U -> N,R-1',
    'C,R -> C,T,D -> C,F,U -> N,R+1',
  ],
}

export const generic2NoteChromatic: RawTransitionCategory2 = {
  transitions: ['C,R -> N,R-1', 'C,R -> N,R+1'],
}

export const generic2NoteChordTones: RawTransitionCategory2 = {
  transitions: [
    'C,R -> C,T,U',
    'C,R -> C,T,D',
    'C,R -> C,F,U',
    'C,R -> C,F,D',
  ],
}

export const generic1Note: RawTransitionCategory2 = {
  transitions: ['C,R', 'C,T,U', 'C,T,D', 'C,F,U', 'C,F,D'],
}
