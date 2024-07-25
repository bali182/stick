import { Transition, TransitionCategory } from '../../src/model/types'

export const rootThirdUpFifthMinus2UpFifthMinus1Down: Transition = {
  id: 'SM,dom7,m,m7;T+7;C,R->C,T,U->C,F-2,U->C,F-1,D;',
  name: 'R 3\u2191 5-2\u2191 5-1\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: -2, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: -1, tone: 'FIFTH' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 7,
}

export const rootThirdUpFifthPlus2UpFifthPlus1Up: Transition = {
  id: 'SM,dom7,m,m7;T+7;C,R->C,T,U->C,F+2,U->C,F+1,U;',
  name: 'R 3\u2191 5+2\u2191 5+1\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 2, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 1, tone: 'FIFTH' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 7,
}

export const rootRootPlus2ThirdUpFifthMinus2Up: Transition = {
  id: 'SM,dom7,m,m7;T+7;C,R->C,R+2->C,T,U->C,F-2,U;',
  name: 'R R+2 3\u2191 5-2\u2191',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: 2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'UP', interval: 0, tone: 'THIRD' },
    { chordRef: 'CURRENT', dir: 'UP', interval: -2, tone: 'FIFTH' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: 7,
}

export const rootRootMinus2FifthPlus2DownFifthPlus1Down: Transition = {
  id: 'SM,dom7,m,m7;T-5;C,R->C,R-2->C,F+2,D->C,F+1,D;',
  name: 'R R-2 5+2\u2193 5+1\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 2, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 1, tone: 'FIFTH' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: -5,
}

export const rootRootMinus2FifthPlus2DownRootPlus2Down: Transition = {
  id: 'SM,dom7,m,m7;T-5;C,R->C,R-2->C,F+2,D->C,R+2,D;',
  name: 'R R-2 5+2\u2193 R+2\u2193',
  steps: [
    { chordRef: 'CURRENT', dir: 'NONE', interval: 0, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'NONE', interval: -2, tone: 'ROOT' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 2, tone: 'FIFTH' },
    { chordRef: 'CURRENT', dir: 'DOWN', interval: 2, tone: 'ROOT' },
  ],
  tags: [],
  source: ['MAJOR', 'DOMINANT-SEVENTH', 'MINOR', 'MINOR-SEVENTH'],
  target: -5,
}

export const oneToFive: TransitionCategory = {
  id: 'oneToFive',
  description: 'Transitioning from I to V chord',
  name: 'I to V chord',
  tags: [],
  transitions: [
    rootThirdUpFifthMinus2UpFifthMinus1Down,
    rootThirdUpFifthPlus2UpFifthPlus1Up,
    rootRootPlus2ThirdUpFifthMinus2Up,
    rootRootMinus2FifthPlus2DownFifthPlus1Down,
    rootRootMinus2FifthPlus2DownRootPlus2Down,
  ],
}
