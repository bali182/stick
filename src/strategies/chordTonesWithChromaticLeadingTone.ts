import { durations, pitches, step } from '../dsl'
import { Transition } from '../types'

export const toAnyAscLowerChrom: Transition = {
  id: 'cR_c3u_c5u_nR-1_nR',
  name: 'R 3↑ 5↑ C↓',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.up.third()),
    step(durations.quarter(), pitches.current.up.fifth()),
    step(durations.quarter(), pitches.next.root(-1)),
  ],
}

export const toAnyAscHigherChrom: Transition = {
  id: 'cR_c3u_c5u_nR+1_nR',
  name: 'R 3↑ 5↑ C↑',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.up.third()),
    step(durations.quarter(), pitches.current.up.fifth()),
    step(durations.quarter(), pitches.next.root(+1)),
  ],
}

export const toAnyDescAscLowerChrom: Transition = {
  id: 'cR_c3d_c5d_nR-1_nR',
  name: 'R 3↓ 5↓ C↓',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.down.third()),
    step(durations.quarter(), pitches.current.down.fifth()),
    step(durations.quarter(), pitches.next.root(-1)),
  ],
}

export const toAnyDescAscHigherChrom: Transition = {
  id: 'cR_c3d_c5d_nR+1_nR',
  name: 'R 3↓ 5↓ C↑',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.down.third()),
    step(durations.quarter(), pitches.current.down.fifth()),
    step(durations.quarter(), pitches.next.root(+1)),
  ],
}

export const toAnyAscDescLowerChrom: Transition = {
  id: 'cR_c3u_c5d_nR-1_nR',
  name: 'R 3↑ 5↓ C↓',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.up.third()),
    step(durations.quarter(), pitches.current.down.fifth()),
    step(durations.quarter(), pitches.next.root(-1)),
  ],
}

export const toAnyAscDescHigherChrom: Transition = {
  id: 'cR_c3u_c5d_nR+1_nR',
  name: 'R 3↑ 5↓ C↑',
  steps: [
    step(durations.quarter(), pitches.current.root()),
    step(durations.quarter(), pitches.current.up.third()),
    step(durations.quarter(), pitches.current.down.fifth()),
    step(durations.quarter(), pitches.next.root(+1)),
  ],
}
