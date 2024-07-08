import type { ActionType } from 'typesafe-actions'
import { chordsSlice } from './chords'
import { barsSlice } from './bars'
import { configSlice } from './config'
import { progressionsSlice } from './progressions'
import { PayloadAction } from '@reduxjs/toolkit'

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
export type FillTransitionsAction = PayloadAction<
  FillTransitionsPayload,
  'global/fillTransitions'
>
export type ClearTransitionsAction = PayloadAction<
  FillTransitionsPayload,
  'global/clearTransitions'
>
export type GlobalActionTypes = FillTransitionsAction | ClearTransitionsAction

export type AppActions =
  | ChordsActions
  | BarsActions
  | ConfigActions
  | ProgressionsActions
  | GlobalActionTypes
