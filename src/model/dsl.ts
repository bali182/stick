import { Duration, Step } from './types'

export const steps = {
  current: {
    root: (interval: number = 0): Step => ({
      reference: 'CURRENT',
      chordTone: 'ROOT',
      interval,
      direction: 'NONE',
    }),
    up: {
      root: (interval: number = 0): Step => ({
        reference: 'CURRENT',
        chordTone: 'ROOT',
        direction: 'UP',
        interval,
      }),
      third: (interval: number = 0): Step => ({
        reference: 'CURRENT',
        chordTone: 'THIRD',
        direction: 'UP',
        interval,
      }),
      fifth: (interval: number = 0): Step => ({
        reference: 'CURRENT',
        chordTone: 'FIFTH',
        direction: 'UP',
        interval,
      }),
    },
    down: {
      root: (interval: number = 0): Step => ({
        reference: 'CURRENT',
        chordTone: 'ROOT',
        direction: 'DOWN',
        interval,
      }),
      third: (interval: number = 0): Step => ({
        reference: 'CURRENT',
        chordTone: 'THIRD',
        direction: 'DOWN',
        interval,
      }),
      fifth: (interval: number = 0): Step => ({
        reference: 'CURRENT',
        chordTone: 'FIFTH',
        direction: 'DOWN',
        interval,
      }),
    },
  },
  next: {
    root: (interval: number = 0): Step => ({
      reference: 'NEXT',
      chordTone: 'ROOT',
      interval,
      direction: 'NONE',
    }),
    up: {
      root: (interval: number = 0): Step => ({
        reference: 'NEXT',
        chordTone: 'ROOT',
        direction: 'UP',
        interval,
      }),
      third: (interval: number = 0): Step => ({
        reference: 'NEXT',
        chordTone: 'THIRD',
        direction: 'UP',
        interval,
      }),
      fifth: (interval: number = 0): Step => ({
        reference: 'NEXT',
        chordTone: 'FIFTH',
        direction: 'UP',
        interval,
      }),
    },
    down: {
      root: (interval: number = 0): Step => ({
        reference: 'NEXT',
        chordTone: 'ROOT',
        direction: 'DOWN',
        interval,
      }),
      third: (interval: number = 0): Step => ({
        reference: 'NEXT',
        chordTone: 'THIRD',
        direction: 'DOWN',
        interval,
      }),
      fifth: (interval: number = 0): Step => ({
        reference: 'NEXT',
        chordTone: 'FIFTH',
        direction: 'DOWN',
        interval,
      }),
    },
  },
}
