import { RawTransitionCategory } from '../src/model/types'

const x = [
  'cR_c3u_c5u_nR-1_nR',
  'cR_c3u_c5u_nR+1_nR',
  'cR_c3d_c5d_nR-1_nR',
  'cR_c3d_c5d_nR+1_nR',
  'cR_c3u_c5d_nR-1_nR',
  'cR_c3u_c5d_nR+1_nR',
  'cR_nR+1',
  'cR_nR-1',
]

const chordTonesWithChromaticPassingNotes: RawTransitionCategory = {
  name: 'Chord tones + chromatic',
  description:
    'Universal transitions between any 2 chords, using only chord tones and a chromatic passing note before the change',
  tags: ['FOUR_NOTES', 'CHROMATIC_APPROACH'],
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
