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

export const chordTonesWithChromaticPassingNotes: RawTransitionCategory = {
  id: 'chord-tones-with-chromatic-passing-notes',
  name: 'Chord tones + Chromatic',
  transitions: [
    'S ?; T ?; C,R -> C,T,U -> C,F,U -> N,R-1;',
    'S ?; T ?; C,R -> C,T,U -> C,F,U -> N,R+1;',
    'S ?; T ?; C,R -> C,T,D -> C,F,D -> N,R-1;',
    'S ?; T ?; C,R -> C,T,D -> C,F,D -> N,R+1;',
  ],
}
