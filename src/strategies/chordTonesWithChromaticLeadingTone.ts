import { pitches, step } from '../model/dsl'
import { Duration, Transition } from '../model/types'

export const toAnyAscLowerChrom: Transition = {
  id: 'cR_c3u_c5u_nR-1_nR',
  name: 'R 3↑ 5↑ C↓',
  steps: [
    step(Duration.QUARTER, pitches.current.root()),
    step(Duration.QUARTER, pitches.current.up.third()),
    step(Duration.QUARTER, pitches.current.up.fifth()),
    step(Duration.QUARTER, pitches.next.root(-1)),
  ],
}

export const toAnyAscHigherChrom: Transition = {
  id: 'cR_c3u_c5u_nR+1_nR',
  name: 'R 3↑ 5↑ C↑',
  steps: [
    step(Duration.QUARTER, pitches.current.root()),
    step(Duration.QUARTER, pitches.current.up.third()),
    step(Duration.QUARTER, pitches.current.up.fifth()),
    step(Duration.QUARTER, pitches.next.root(+1)),
  ],
}

export const toAnyDescAscLowerChrom: Transition = {
  id: 'cR_c3d_c5d_nR-1_nR',
  name: 'R 3↓ 5↓ C↓',
  steps: [
    step(Duration.QUARTER, pitches.current.root()),
    step(Duration.QUARTER, pitches.current.down.third()),
    step(Duration.QUARTER, pitches.current.down.fifth()),
    step(Duration.QUARTER, pitches.next.root(-1)),
  ],
}

export const toAnyDescAscHigherChrom: Transition = {
  id: 'cR_c3d_c5d_nR+1_nR',
  name: 'R 3↓ 5↓ C↑',
  steps: [
    step(Duration.QUARTER, pitches.current.root()),
    step(Duration.QUARTER, pitches.current.down.third()),
    step(Duration.QUARTER, pitches.current.down.fifth()),
    step(Duration.QUARTER, pitches.next.root(+1)),
  ],
}

export const toAnyAscDescLowerChrom: Transition = {
  id: 'cR_c3u_c5d_nR-1_nR',
  name: 'R 3↑ 5↓ C↓',
  steps: [
    step(Duration.QUARTER, pitches.current.root()),
    step(Duration.QUARTER, pitches.current.up.third()),
    step(Duration.QUARTER, pitches.current.down.fifth()),
    step(Duration.QUARTER, pitches.next.root(-1)),
  ],
}

export const toAnyAscDescHigherChrom: Transition = {
  id: 'cR_c3u_c5d_nR+1_nR',
  name: 'R 3↑ 5↓ C↑',
  steps: [
    step(Duration.QUARTER, pitches.current.root()),
    step(Duration.QUARTER, pitches.current.up.third()),
    step(Duration.QUARTER, pitches.current.down.fifth()),
    step(Duration.QUARTER, pitches.next.root(+1)),
  ],
}

export const toAnyHigherChrom: Transition = {
  id: 'cR_nR+1',
  name: 'R C↑',
  steps: [
    step(Duration.QUARTER, pitches.current.root()),
    step(Duration.QUARTER, pitches.next.root(+1)),
  ],
}

export const toAnyLowerChrom: Transition = {
  id: 'cR_nR-1',
  name: 'R C↓',
  steps: [
    step(Duration.QUARTER, pitches.current.root()),
    step(Duration.QUARTER, pitches.next.root(-1)),
  ],
}
