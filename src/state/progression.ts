import { atom } from 'jotai'
import { ChordProgression } from '../chartModel'
import { defaultChordProgression } from '../defaultChordProgression'

export const progression = atom<ChordProgression>(defaultChordProgression)
