import { AppState } from './types'

export const emptyInitialState: AppState = {
  config: {
    progressionId: undefined,
    isLooping: false,
    masterVolume: 1,
    bassVolume: 0.5,
    metronomeVolume: 0,
    chordsVolume: 0,
  },
  progressions: {},
  bars: {},
  chords: {},
}
