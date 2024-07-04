import { Duration, Step } from './types'

export const steps = {
  current: {
    root: (interval: number = 0): Step => ({
      chordRef: 'CURRENT',
      tone: 'ROOT',
      interval,
      dir: 'NONE',
    }),
    up: {
      root: (interval: number = 0): Step => ({
        chordRef: 'CURRENT',
        tone: 'ROOT',
        dir: 'UP',
        interval,
      }),
      third: (interval: number = 0): Step => ({
        chordRef: 'CURRENT',
        tone: 'THIRD',
        dir: 'UP',
        interval,
      }),
      fifth: (interval: number = 0): Step => ({
        chordRef: 'CURRENT',
        tone: 'FIFTH',
        dir: 'UP',
        interval,
      }),
    },
    down: {
      root: (interval: number = 0): Step => ({
        chordRef: 'CURRENT',
        tone: 'ROOT',
        dir: 'DOWN',
        interval,
      }),
      third: (interval: number = 0): Step => ({
        chordRef: 'CURRENT',
        tone: 'THIRD',
        dir: 'DOWN',
        interval,
      }),
      fifth: (interval: number = 0): Step => ({
        chordRef: 'CURRENT',
        tone: 'FIFTH',
        dir: 'DOWN',
        interval,
      }),
    },
  },
  next: {
    root: (interval: number = 0): Step => ({
      chordRef: 'NEXT',
      tone: 'ROOT',
      interval,
      dir: 'NONE',
    }),
    up: {
      root: (interval: number = 0): Step => ({
        chordRef: 'NEXT',
        tone: 'ROOT',
        dir: 'UP',
        interval,
      }),
      third: (interval: number = 0): Step => ({
        chordRef: 'NEXT',
        tone: 'THIRD',
        dir: 'UP',
        interval,
      }),
      fifth: (interval: number = 0): Step => ({
        chordRef: 'NEXT',
        tone: 'FIFTH',
        dir: 'UP',
        interval,
      }),
    },
    down: {
      root: (interval: number = 0): Step => ({
        chordRef: 'NEXT',
        tone: 'ROOT',
        dir: 'DOWN',
        interval,
      }),
      third: (interval: number = 0): Step => ({
        chordRef: 'NEXT',
        tone: 'THIRD',
        dir: 'DOWN',
        interval,
      }),
      fifth: (interval: number = 0): Step => ({
        chordRef: 'NEXT',
        tone: 'FIFTH',
        dir: 'DOWN',
        interval,
      }),
    },
  },
}
