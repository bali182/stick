import { ChordType } from './chartModel'
import { t } from './note'
import { Chord, PitchedNote } from './types'

export function getChord(root: PitchedNote, chordType: ChordType): Chord {
  switch (chordType) {
    case 'AUGMENTED':
      return { root, third: t(root, 4), fifth: t(root, 8) }
    case 'AUGMENTED-SEVENTH':
      return {
        root,
        third: t(root, 4),
        fifth: t(root, 8),
        seventh: t(root, -2),
      }
    case 'DIMINISHED':
      return { root, third: t(root, 3), fifth: t(root, 6) }
    case 'DIMINISHED-SEVENTH':
      return {
        root,
        third: t(root, 3),
        fifth: t(root, 6),
        seventh: t(root, -3),
      }
    case 'DOMINANT-SEVENTH':
      return {
        root,
        third: t(root, 4),
        fifth: t(root, 7),
        seventh: t(root, -2),
      }
    case 'HALF-DIMINISHED':
      return {
        root,
        third: t(root, 3),
        fifth: t(root, 6),
        seventh: t(root, -2),
      }
    case 'MAJOR':
      return { root, third: t(root, 4), fifth: t(root, 7) }
    case 'MAJOR-SEVENTH':
      return {
        root,
        third: t(root, 4),
        fifth: t(root, 7),
        seventh: t(root, -1),
      }
    case 'MINOR':
      return { root, third: t(root, 3), fifth: t(root, 7) }
    case 'MINOR-SEVENTH':
      return {
        root,
        third: t(root, 3),
        fifth: t(root, 7),
        seventh: t(root, -2),
      }
  }
}
