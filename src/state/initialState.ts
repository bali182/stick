import { DEFAULT_4_STRING_BASS_TUNING, TRANSITIONS } from '../model/constants'
import { AppState } from './types'

export const initialState: AppState = {
  bars: {
    jywxjNyYIMZeJdAN8NzzE: {
      id: 'jywxjNyYIMZeJdAN8NzzE',
      chords: ['56g913ZHvhA94K3K06aEK'],
    },
    '1lSOLUu0-qLrsAOnsTHAH': {
      id: '1lSOLUu0-qLrsAOnsTHAH',
      chords: ['c_H_aiu6Y3xZ9FZ8myRVm'],
    },
    LIz2iFSV8DuhmaTzXPAMG: {
      id: 'LIz2iFSV8DuhmaTzXPAMG',
      chords: ['fY2252W_noaipy7BE4qZb'],
    },
  },
  chords: {
    '56g913ZHvhA94K3K06aEK': {
      id: '56g913ZHvhA94K3K06aEK',
      name: 'D',
      type: 'MINOR',
      root: 'D2',
      transitionId: 'S?;T?;C,R->C,T,U->C,F,U->N,R-1;',
    },
    c_H_aiu6Y3xZ9FZ8myRVm: {
      id: 'c_H_aiu6Y3xZ9FZ8myRVm',
      name: 'A',
      type: 'DOMINANT-SEVENTH',
      root: 'A1',
      transitionId: 'S?;T?;C,R->C,T,U->C,F,U->N,R-1;',
    },
    fY2252W_noaipy7BE4qZb: {
      id: 'fY2252W_noaipy7BE4qZb',
      name: 'D',
      type: 'MINOR',
      root: 'D2',
    },
  },
  config: {
    isLooping: false,
    masterVolume: 1,
    bassVolume: 0.5,
    metronomeVolume: 0,
    chordsVolume: 0,
  },
  progressions: {
    default: {
      id: 'default',
      noteCount: 4,
      tuning: ['G2', 'D2', 'A1', 'E1'],
      name: 'default',
      bars: [
        'jywxjNyYIMZeJdAN8NzzE',
        '1lSOLUu0-qLrsAOnsTHAH',
        'LIz2iFSV8DuhmaTzXPAMG',
      ],
    },
  },
}
