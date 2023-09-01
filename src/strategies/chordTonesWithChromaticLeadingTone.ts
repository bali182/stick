import { durations, pitches, step } from '../dsl'
import { WalkPath } from '../types'

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
