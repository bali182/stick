import { getTotalNoteDistance } from './getTotalNoteDistance'
import { getWalkingBassBar } from './getWalkingBassBar'
import { Chord, PitchedNote, SolvedWalkPath, Transition } from './types'

export function getPossibleWalkingBassBars(current: Chord, next: Chord, paths: Transition[]): SolvedWalkPath[] {
  const distances = new Map<SolvedWalkPath, number>()
  const solvedPaths = paths.map((path): SolvedWalkPath => [path, getWalkingBassBar(current, next, path)])

  solvedPaths.forEach((solvedPath) => {
    const [, notes] = solvedPath
    const notesWithNextRoot = [...notes.map(([, n]) => n).filter((n): n is PitchedNote => n !== 'REST'), next.root]
    distances.set(solvedPath, getTotalNoteDistance(notesWithNextRoot))
  })

  return solvedPaths.sort((a, b) => distances.get(a)! - distances.get(b)!)
}
