import { NOTE_BY_INDEX } from '../model/constants'
import { Note, NoteIndex } from '../model/types'

export const NOTE_COLORS: Record<Note, string> = [
  '#387BA8',
  '#7A5265',
  '#37A347',
  '#A37F37',
  '#6B37A3',
  '#6C654B',
  '#A3377A',
  '#A36137',
  '#A3A337',
  '#37A391',
  '#A34537',
  '#29357A',
].reduce((colors, color, index) => {
  const notes = NOTE_BY_INDEX[index as NoteIndex] ?? []
  notes.forEach((note) => {
    colors[note] = color
  })
  return colors
}, {} as Record<Note, string>)
