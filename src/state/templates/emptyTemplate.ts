import { ProgressionTemplate } from '../types'

export const emptyTemplate: ProgressionTemplate = {
  chords: {},
  bars: {},
  progression: {
    id: 'empty',
    noteCount: 4,
    tuning: ['G2', 'D2', 'A1', 'E1'],
    name: 'Empty',
    bars: [],
  },
}
