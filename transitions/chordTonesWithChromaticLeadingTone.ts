import { RawTransitionCategory } from '../src/model/types'

const chordTonesWithChromaticPassingNotes: RawTransitionCategory = {
  name: 'Chord tones + chromatic',
  description:
    'Universal transitions between any 2 chords, using only chord tones and a chromatic passing note before the change',
  tags: ['CHROMATIC_APPROACH'],
  transitions: [
    'S ?; T ?; C,R -> C,T,U -> C,F,U -> N,R-1;',
    'S ?; T ?; C,R -> C,T,U -> C,F,U -> N,R+1;',
    'S ?; T ?; C,R -> C,T,D -> C,F,D -> N,R-1;',
    'S ?; T ?; C,R -> C,T,D -> C,F,D -> N,R+1;',
    'S ?; T ?; C,R -> C,T,U -> C,F,D -> N,R-1;',
    'S ?; T ?; C,R -> C,T,U -> C,F,D -> N,R+1;',
    'S ?; T ?; C,R -> C,T,D -> C,F,U -> N,R-1;',
    'S ?; T ?; C,R -> C,T,D -> C,F,U -> N,R+1;',
  ],
}

export default chordTonesWithChromaticPassingNotes
