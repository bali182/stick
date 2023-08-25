import { Duration, Pitch, Step } from './types'

export const durations = {
  whole: (): Duration => 'WHOLE',
  half: (): Duration => 'HALF',
  quarter: (): Duration => 'QARTER',
  eight: (): Duration => 'EIGHT',
  sixteenth: (): Duration => 'SIXTEENTH',
}

export const pitches = {
  current: {
    root: (interval: number = 0): Pitch => ({
      reference: 'CURRENT',
      chordTone: 'ROOT',
      interval,
      direction: 'NONE',
    }),
    up: {
      root: (interval: number = 0): Pitch => ({
        reference: 'CURRENT',
        chordTone: 'ROOT',
        direction: 'UP',
        interval,
      }),
      third: (interval: number = 0): Pitch => ({
        reference: 'CURRENT',
        chordTone: 'THIRD',
        direction: 'UP',
        interval,
      }),
      fifth: (interval: number = 0): Pitch => ({
        reference: 'CURRENT',
        chordTone: 'FIFTH',
        direction: 'UP',
        interval,
      }),
    },
    down: {
      root: (interval: number = 0): Pitch => ({
        reference: 'CURRENT',
        chordTone: 'ROOT',
        direction: 'DOWN',
        interval,
      }),
      third: (interval: number = 0): Pitch => ({
        reference: 'CURRENT',
        chordTone: 'THIRD',
        direction: 'DOWN',
        interval,
      }),
      fifth: (interval: number = 0): Pitch => ({
        reference: 'CURRENT',
        chordTone: 'FIFTH',
        direction: 'DOWN',
        interval,
      }),
    },
  },
  next: {
    root: (interval: number = 0): Pitch => ({
      reference: 'NEXT',
      chordTone: 'ROOT',
      interval,
      direction: 'NONE',
    }),
    up: {
      root: (interval: number = 0): Pitch => ({
        reference: 'NEXT',
        chordTone: 'ROOT',
        direction: 'UP',
        interval,
      }),
      third: (interval: number = 0): Pitch => ({
        reference: 'NEXT',
        chordTone: 'THIRD',
        direction: 'UP',
        interval,
      }),
      fifth: (interval: number = 0): Pitch => ({
        reference: 'NEXT',
        chordTone: 'FIFTH',
        direction: 'UP',
        interval,
      }),
    },
    down: {
      root: (interval: number = 0): Pitch => ({
        reference: 'NEXT',
        chordTone: 'ROOT',
        direction: 'DOWN',
        interval,
      }),
      third: (interval: number = 0): Pitch => ({
        reference: 'NEXT',
        chordTone: 'THIRD',
        direction: 'DOWN',
        interval,
      }),
      fifth: (interval: number = 0): Pitch => ({
        reference: 'NEXT',
        chordTone: 'FIFTH',
        direction: 'DOWN',
        interval,
      }),
    },
  },
}

export const step = (duration: Duration, pitch: Pitch): Step => ({ duration, pitch })
