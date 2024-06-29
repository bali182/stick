import { getPitchedNote } from './getPitchedNote'
import { Chord, TimedNote, Transition } from './types'

export function getWalkingBassBar(current: Chord, next: Chord, path: Transition): TimedNote[] {
  return path.steps.map((step): TimedNote => {
    if (step.pitch === undefined) {
      return [step.duration, 'REST']
    }
    return [step.duration, getPitchedNote(current, next, step.pitch)]
  })
}
