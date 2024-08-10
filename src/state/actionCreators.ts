import {
  DeleteBarsPayload,
  DeleteChordsPayload,
  ClearTransitionsAction,
  CloneBarAction,
  CloneBarPayload,
  CreateProgressionFromTemplateAction,
  DeleteBarsAction,
  DeleteChordsAction,
  DeleteProgressionsAction,
  FillTransitionsAction,
  MoveBarAction,
  MoveBarPayload,
  ProgressionPayload,
  ProgressionsPayload,
  SetNoteCountAction,
  SetNoteCountPayload,
  TemplatePayload,
} from './actionTypes'

export function fillTransactions(
  payload: ProgressionPayload,
): FillTransitionsAction {
  return { type: 'global/fillTransitions', payload }
}

export function clearTransactions(
  payload: ProgressionPayload,
): ClearTransitionsAction {
  return { type: 'global/clearTransitions', payload }
}

export function createProgressionFromTemplate(
  payload: TemplatePayload,
): CreateProgressionFromTemplateAction {
  return { type: 'global/createProgressionFromTemplate', payload }
}

export function deleteChords(payload: DeleteChordsPayload): DeleteChordsAction {
  return { type: 'global/deleteChords', payload }
}

export function deleteBars(payload: DeleteBarsPayload): DeleteBarsAction {
  return { type: 'global/deleteBars', payload }
}

export function deleteProgressions(
  payload: ProgressionsPayload,
): DeleteProgressionsAction {
  return { type: 'global/deleteProgressions', payload }
}

export function cloneBar(payload: CloneBarPayload): CloneBarAction {
  return { type: 'global/cloneBar', payload }
}

export function moveBar(payload: MoveBarPayload): MoveBarAction {
  return { type: 'global/moveBar', payload }
}

export function setNoteCount(payload: SetNoteCountPayload): SetNoteCountAction {
  return { type: 'global/setNoteCount', payload }
}
