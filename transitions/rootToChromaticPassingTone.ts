import { RawTransitionCategory } from '../src/model/types'

const rootToChromaticPassingTone: RawTransitionCategory = {
  name: 'Root + chromatic',
  description: 'Root and chromatic note moving to the next chord.',
  tags: ['CHROMATIC_APPROACH'],
  transitions: ['S ?; T ?; C,R -> N,R-1;', 'S ?; T ?; C,R -> N,R+1;'],
}

export default rootToChromaticPassingTone
