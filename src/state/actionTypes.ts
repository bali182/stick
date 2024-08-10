import type { ActionType } from 'typesafe-actions'
import { chordsSlice } from './chords'
import { barsSlice } from './bars'
import { configSlice } from './config'
import { progressionsSlice } from './progressions'
import { PayloadAction } from '@reduxjs/toolkit'
import { ProgressionTemplate } from './types'

export type ChordsActions = ActionType<typeof chordsSlice.actions>
export type BarsActions = ActionType<typeof barsSlice.actions>
export type ConfigActions = ActionType<typeof configSlice.actions>
export type ProgressionsActions = ActionType<typeof progressionsSlice.actions>

export type ProgressionPayload = {
  progressionId: string
}
export type SetNoteCountPayload = {
  noteCount: number
  progressionId: string
}
export type TemplatePayload = {
  template: ProgressionTemplate
}
export type DeleteChordsPayload = {
  progressionId?: string
  chordIds: string[]
}
export type CloneBarPayload = {
  progressionId: string
  barId: string
}
export type MoveBarPayload = {
  progressionId: string
  barId: string
  overId: string
}
export type DeleteBarsPayload = {
  progressionId?: string
  barIds: string[]
}
export type ProgressionsPayload = {
  progressionIds: string[]
}
export type FillTransitionsAction = PayloadAction<
  ProgressionPayload,
  'global/fillTransitions'
>
export type ClearTransitionsAction = PayloadAction<
  ProgressionPayload,
  'global/clearTransitions'
>
export type CreateProgressionFromTemplateAction = PayloadAction<
  TemplatePayload,
  'global/createProgressionFromTemplate'
>
export type DeleteChordsAction = PayloadAction<
  DeleteChordsPayload,
  'global/deleteChords'
>
export type DeleteBarsAction = PayloadAction<
  DeleteBarsPayload,
  'global/deleteBars'
>
export type DeleteProgressionsAction = PayloadAction<
  ProgressionsPayload,
  'global/deleteProgressions'
>
export type CloneBarAction = PayloadAction<CloneBarPayload, 'global/cloneBar'>

export type MoveBarAction = PayloadAction<MoveBarPayload, 'global/moveBar'>
export type SetNoteCountAction = PayloadAction<
  SetNoteCountPayload,
  'global/setNoteCount'
>

export type GlobalActionTypes =
  | FillTransitionsAction
  | ClearTransitionsAction
  | CreateProgressionFromTemplateAction

export type AppActions =
  | ChordsActions
  | BarsActions
  | ConfigActions
  | ProgressionsActions
  | GlobalActionTypes
  | DeleteChordsAction
  | DeleteBarsAction
  | DeleteProgressionsAction
  | CloneBarAction
  | MoveBarAction
  | SetNoteCountAction
