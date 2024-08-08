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

export type FillTransitionsPayload = {
  progressionId: string
}
export type ClearTransitionsPayload = {
  progressionId: string
}
export type CreateProgressionFromTemplatePayload = {
  template: ProgressionTemplate
}
export type DeleteChordsPayload = {
  chordIds: string[]
}
export type DeleteBarsPayload = {
  barIds: string[]
}
export type DeleteProgressionsPayload = {
  progressionIds: string[]
}
export type FillTransitionsAction = PayloadAction<
  FillTransitionsPayload,
  'global/fillTransitions'
>
export type ClearTransitionsAction = PayloadAction<
  ClearTransitionsPayload,
  'global/clearTransitions'
>
export type CreateProgressionFromTemplateAction = PayloadAction<
  CreateProgressionFromTemplatePayload,
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
  DeleteProgressionsPayload,
  'global/deleteProgressions'
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
