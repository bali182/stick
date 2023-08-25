import { durations, pitches, step } from '../dsl'
import { WalkPath } from '../types'

export const toFourthAsc: WalkPath = {
  id: 'cR_c3u_c5u_c5u-1_nR',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.up.third()),
    step(durations.quarter(), pitches.current.up.fifth()),
    step(durations.quarter(), pitches.current.up.fifth(-1)),
  ],
  target: pitches.current.up.fifth(-2),
}

export const toSixthAsc: WalkPath = {
  id: 'cR_c3u_c5u_c5u+1_nR',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.up.third()),
    step(durations.quarter(), pitches.current.up.fifth()),
    step(durations.quarter(), pitches.current.up.fifth(+1)),
  ],
  target: pitches.current.up.fifth(+2),
}

export const toFourthDescAsc: WalkPath = {
  id: 'cR_c3d_c5d_c5d-1_nR',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.down.third()),
    step(durations.quarter(), pitches.current.down.fifth()),
    step(durations.quarter(), pitches.current.down.fifth(-1)),
  ],
  target: pitches.current.down.fifth(-2),
}

export const toSixthDescAsc: WalkPath = {
  id: 'cR_c3d_c5d_c5d+1_nR',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.down.third()),
    step(durations.quarter(), pitches.current.down.fifth()),
    step(durations.quarter(), pitches.current.down.fifth(+1)),
  ],
  target: pitches.current.down.fifth(+2),
}

export const toFourthAscDesc: WalkPath = {
  id: 'cR_c3u_c5d_c5d-1_nR',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.up.third()),
    step(durations.quarter(), pitches.current.down.fifth()),
    step(durations.quarter(), pitches.current.down.fifth(-1)),
  ],
  target: pitches.current.down.fifth(-2),
}

export const toSixthAscDesc: WalkPath = {
  id: 'cR_c3u_c5d_c5d+1_nR',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.up.third()),
    step(durations.quarter(), pitches.current.down.fifth()),
    step(durations.quarter(), pitches.current.down.fifth(+1)),
  ],
  target: pitches.current.down.fifth(+2),
}

export const toAnyAscLowerChrom: WalkPath = {
  id: 'cR_c3u_c5u_nR-1_nR',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.up.third()),
    step(durations.quarter(), pitches.current.up.fifth()),
    step(durations.quarter(), pitches.next.root(-1)),
  ],
}

export const toAnyAscHigherChrom: WalkPath = {
  id: 'cR_c3u_c5u_nR+1_nR',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.up.third()),
    step(durations.quarter(), pitches.current.up.fifth()),
    step(durations.quarter(), pitches.next.root(+1)),
  ],
}

export const toAnyDescAscLowerChrom: WalkPath = {
  id: 'cR_c3d_c5d_nR-1_nR',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.down.third()),
    step(durations.quarter(), pitches.current.down.fifth()),
    step(durations.quarter(), pitches.next.root(-1)),
  ],
}

export const toAnyDescAscHigherChrom: WalkPath = {
  id: 'cR_c3d_c5d_nR+1_nR',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.down.third()),
    step(durations.quarter(), pitches.current.down.fifth()),
    step(durations.quarter(), pitches.next.root(+1)),
  ],
}

export const toAnyAscDescLowerChrom: WalkPath = {
  id: 'cR_c3u_c5d_nR-1_nR',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.up.third()),
    step(durations.quarter(), pitches.current.down.fifth()),
    step(durations.quarter(), pitches.next.root(-1)),
  ],
}

export const toAnyAscDescHigherChrom: WalkPath = {
  id: 'cR_c3u_c5d_nR+1_nR',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.up.third()),
    step(durations.quarter(), pitches.current.down.fifth()),
    step(durations.quarter(), pitches.next.root(+1)),
  ],
}
