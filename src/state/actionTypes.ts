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
export type TemplatePayload = {
  template: ProgressionTemplate
}
export type ChordsPayload = {
  chordIds: string[]
}
export type BarPayload = {
  barId: string
}
export type BarsPayload = {
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
  ChordsPayload,
  'global/deleteChords'
>
export type DeleteBarsAction = PayloadAction<BarsPayload, 'global/deleteBars'>
export type DeleteProgressionsAction = PayloadAction<
  ProgressionsPayload,
  'global/deleteProgressions'
>
export type CloneBarAction = PayloadAction<BarPayload, 'global/cloneBar'>
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
